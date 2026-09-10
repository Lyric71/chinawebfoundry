<#
.SYNOPSIS
  Runs the ChinaWebFoundry editorial pipeline through the local Claude Code CLI.

.DESCRIPTION
  Local by design: this machine has the user-level skills (content-quality-us,
  generate-image-openai, createblogarticle, deep-translate), the project skill
  (createarticle, house version), the .env keys and the full model. A cloud
  routine has none of those.

  Modes:
    draft    "Draft today's piece."  Steps 0 to 3 of the pipeline. Stops at
             image_ready. Runs Tue, Thu, Fri.
    publish  Publishes every row in editorial/schedule.csv whose status is
             image_ready and whose publish_date is today or earlier, then
             sends the Resend email. Runs daily.

  Output of each run is written to editorial/logs/runs/<date>-<mode>.txt.
  Register with editorial/scripts/register-tasks.ps1.

.PARAMETER Mode
  draft (default) or publish.
#>
param(
  [ValidateSet('draft', 'publish')]
  [string]$Mode = 'draft',
  # Manual test run: ignore the plan-start date, the weekday guard and, in
  # publish mode, the publish_date filter.
  [switch]$Force,
  # Optional extra instructions appended to the prompt (for example a resume
  # note after an interrupted run, or "Draft brief T2-01").
  [string]$Extra = ''
)

$ErrorActionPreference = 'Stop'
$Repo = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
Set-Location $Repo

$Stamp = Get-Date -Format 'yyyy-MM-dd'
$RunLogDir = Join-Path $Repo 'editorial\logs\runs'
New-Item -ItemType Directory -Force $RunLogDir | Out-Null
$RunLog = Join-Path $RunLogDir "$Stamp-$Mode.txt"

# The plan starts Tuesday 8 September 2026. Nothing runs before that.
$PlanStart = Get-Date '2026-09-08'
if (-not $Force -and (Get-Date).Date -lt $PlanStart) {
  "$(Get-Date -Format s) before plan start, nothing to do" | Out-File $RunLog -Encoding utf8
  exit 0
}

# Drafting happens Tue, Thu, Fri. The schedule has no rows on other days.
if ($Mode -eq 'draft' -and -not $Force) {
  $Dow = (Get-Date).DayOfWeek
  if ($Dow -in 'Saturday', 'Sunday', 'Monday', 'Wednesday') {
    "$(Get-Date -Format s) no draft on $Dow" | Out-File $RunLog -Encoding utf8
    exit 0
  }
}

# Always pull the best available model. Never a faster or smaller mode.
$Model = 'claude-opus-5'

if ($Mode -eq 'draft') {
  $Prompt = @'
Draft today's piece.

Read editorial/CLAUDE.md, editorial/SPEC.md and editorial/RUNBOOK.md first and
follow them exactly. Run steps 0 to 3 of the pipeline: read the fact IDs the
brief cites in editorial/sources/fact-bank.md and the Do Not Assert list, reuse
the ledger, research anything else with every source validated twice,
/createarticle (house version), then /content-quality-us on the finished draft
with British spelling (all 18 passes, mandatory for every piece whatever its
tier or length, tracker in the run log), then /generate-image-openai for the
hero image where the content type takes one. For a T2 or T4 piece, read editorial/harness/latest.json first;
if it has no row for the piece's subject, set the row to blocked with the note
"harness", draft what does not depend on the measurement, and move to the next
row whose gate is clear. Update editorial/schedule.csv and write the run log.
Stop at image_ready. Do not publish. Do not commit. Do not run npm run build.
This run is unattended: never ask a question, decide from the specs and note
the decision in the run log.
'@
} else {
  $Prompt = @'
Publish every reviewed draft that is due.

Read editorial/CLAUDE.md, editorial/SPEC.md and editorial/RUNBOOK.md first.
In editorial/schedule.csv, find every row whose status is image_ready and
whose publish_date is today or earlier. Skip, and report in the run log, any
such row with an empty quality_passed_on: it did not go through
/content-quality-us and must not publish. For each one, in date order, run the
publish step for its content_type as the SPEC's publish mapping describes.
For a T1 guide this includes, without exception, writing guides-fr, guides-es
and guides-de, registering the three localized slugs from the brief in
src/i18n/routes.ts (guideSlugs), and running /deep-translate on each
localized file, all three passes, in this order: FR, ES, DE. Run
/deep-translate yourself, in this conversation, one pass at a time with each
pass's output written out before the next starts. Never hand a translation to
a subagent, an Agent call, a background task or a workflow. Never stop after
the humanized translation, never merge passes, never run two locales at once.
The same applies to M1 locale pages, T6 upgrade passages in every locale and
T7 batches. Follow TRANSLATION-RULES.md. For a T6 upgrade, apply the change list to every locale
the page has and confirm the sitemap entry count is unchanged. For M1, remove
noindex and the sitemap exclusion in the same commit.
Then run npm run build and npx astro check. The build must exit 0. The check
passes when it reports no more errors than a clean checkout of HEAD, same
count and same files: run npx astro check in a temporary git worktree at HEAD
with node_modules junctioned to the repo's, record both results in the run
log, then delete the junction with DirectoryInfo.Delete() before git worktree
remove (never Remove-Item -Recurse on the junction). When both pass: set the
row to published with published_on, then git add everything the piece touched
(the content files in every locale, the image, src/i18n/routes.ts if changed,
editorial/output, editorial/logs, editorial/schedule.csv, editorial/sources).
Read git status first and stage nothing that belongs to another session or
another piece. Commit on main with a conventional commit message (feat(guide):
publish <slug>, feat(work): for case studies, feat(page): for the money page,
fix(guide): for upgrades, feat(i18n): for translations), then git push origin
main. Only after the push succeeds, run
node editorial/scripts/notify-publish.mjs with the slug, title, type,
--status published, --build passed, --check with the error count for the piece
and for HEAD, the log path and the commit hash in --note.
This run is unattended: never ask a question. If the build fails, or the check
reports errors beyond the HEAD baseline, do not commit, do not push, leave the
row at image_ready, put the error in the run log and send the email with
--status held, --build and --check set to what actually happened, and the
error in --note.
'@
}

if ($Extra) {
  $Prompt += "`n`nADDITIONAL INSTRUCTIONS FROM THE OPERATOR: $Extra"
}

if ($Force) {
  $Prompt += "`n`nMANUAL TEST RUN: ignore the publish_date. Process every row whose status is image_ready (publish mode) or take the oldest not_started row whose gate is clear (draft mode). Say in the run log that this was a forced test run."
  $RunLog = Join-Path $RunLogDir "$Stamp-$Mode-forced.txt"
}

"$(Get-Date -Format s) start $Mode (model $Model)" | Out-File $RunLog -Encoding utf8

# The prompt goes in through stdin from a file, and both output streams go
# straight to the log through cmd.exe. PowerShell 5.1 turns native stderr into
# terminating errors under Stop, which killed earlier runs before they logged.
$PromptFile = Join-Path $RunLogDir "$Stamp-$Mode.prompt.txt"
[System.IO.File]::WriteAllText($PromptFile, $Prompt, (New-Object System.Text.UTF8Encoding($false)))
$Claude = (Get-Command claude).Source
$Cmd = "type `"$PromptFile`" | `"$Claude`" -p --model $Model --dangerously-skip-permissions --output-format text >> `"$RunLog`" 2>&1"
# Retry on transient API failures (overloaded, rate limited, 5xx). Up to
# three attempts, five minutes apart. Never fall back to a smaller model.
$MaxAttempts = 3
$Attempt = 0
do {
  $Attempt++
  if ($Attempt -gt 1) {
    "$(Get-Date -Format s) retry $Attempt of $MaxAttempts after a transient API error, waiting 5 minutes" | Out-File $RunLog -Append -Encoding utf8
    Start-Sleep -Seconds 300
  }
  $ErrorActionPreference = 'Continue'
  & cmd.exe /d /c $Cmd
  $Code = $LASTEXITCODE
  $ErrorActionPreference = 'Stop'
  $Tail = (Get-Content $RunLog -Tail 5 -ErrorAction SilentlyContinue) -join "`n"
  $Transient = $Code -ne 0 -and $Tail -match 'API Error: (529|500|502|503|504|429)|Overloaded|overloaded_error|rate limit'
} while ($Transient -and $Attempt -lt $MaxAttempts)

"$(Get-Date -Format s) end $Mode exit $Code" | Out-File $RunLog -Append -Encoding utf8
exit $Code
