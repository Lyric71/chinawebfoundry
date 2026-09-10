# ChinaWebFoundry editorial system

Seventy-eight briefs and the specs Claude Code drafts them from. Lives in
`editorial/` inside the ChinaWebFoundry repo so the pipeline can publish
straight into `src/content/guides/`, `src/content/casestudies/` and the money
pages. 8 September 2026 to 5 March 2027. Three pieces a week.

Wired the same way as TheRedScroll's `editorial/`: same folder layout, same
five-step pipeline, same two scheduled tasks, same status columns.

## Start here

1. `RUNBOOK.md` for the daily process and the calendar exceptions.
2. `CLAUDE.md` for voice and the standing rules. Claude Code loads this
   automatically when working in this folder.
3. `SPEC.md` for the output contract, the publish mapping per content type,
   and the definition of done.
4. `PLAN.md` is the master. The China content program v3.0, in full.

## Layout

```
PLAN.md                   the content program, master copy
CLAUDE.md                 standing rules, auto-loaded
SPEC.md                   output contract and publish mapping
RUNBOOK.md                daily process, calendar, automation
schedule.csv              78 rows, date to brief, status tracking
briefs/                   78 per-piece briefs, generated from PLAN.md
sources/
  fact-bank.md            F1 to F46 and the Do Not Assert list, from PLAN.md
  verified-sources.md     the source ledger, read before researching
  site-profile.md         cached site inventory, refresh monthly
harness/
  README.md               measurement harness build spec (blocks T2 and T4)
  hosts.yml               the versioned host list
  probe.mjs               tier-one collector, runs on the mainland instance
  latest.json             the newest run, read by the T2 and T4 drafts
output/                   finished drafts land here
logs/                     one run log per piece, TEMPLATE.md to copy
scripts/
  build-briefs.mjs        regenerates briefs/ and schedule.csv from PLAN.md
  run-daily.ps1           the scheduled runner (draft / publish)
  register-tasks.ps1      creates the two Windows scheduled tasks
  notify-publish.mjs      the Resend email after a publish
```

## The daily command

```
Draft today's piece.
```

## The pipeline

Fact bank and ledger first, live research with every source validated twice,
`/createarticle` (house version, cadence pass in iteration 7),
`/content-quality-us` on every piece with British spelling,
`/generate-image-openai` for the hero, then the publish step on request or on
the 05:30 task, then an email to Cyril when the publish is done. `CLAUDE.md`
has the table.

## The two rules people get wrong

The upstream CreateArticle skill tells you to plant deliberate typos. This
project forbids it. The house copy at `.claude/skills/createarticle/` runs a
cadence pass instead.

No T2 compatibility page and no T4 report publishes without an original
measurement from the harness, with a named vantage point and a date. If the
harness has not produced one, the piece waits.
