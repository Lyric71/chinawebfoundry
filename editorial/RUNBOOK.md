# Runbook

Three pieces a week, 26 weeks, 8 September 2026 to 5 March 2027, planned on
Tuesday, Thursday and Friday slots. The plan sets the order, not the pace:
`publish_date` orders the queue and never gates a run (`CLAUDE.md`, the
standing rule under the pipeline table). The draft task runs every day and
takes the next row whatever its date; the publish task publishes every
finished draft the next morning. The only rows that wait for their date are
the China Dependency Index editions and any row marked `Hold until
YYYY-MM-DD` in its notes.

## The daily command

Open Claude Code at the repo root (or in `editorial/`) and paste:

```
Draft today's piece.
```

That is the whole prompt. `CLAUDE.md` tells Claude what "today's piece" means:
the next row in the queue, not the row dated today.
If you want a specific one:

```
Draft brief A3.
```

To publish a reviewed draft:

```
Publish wordpress-plugins-china
```

## What Claude does, in order

1. Reads `CLAUDE.md` and `SPEC.md`.
2. Picks the row in `schedule.csv`: a row stopped at `drafted` or
   `quality_passed` by an interrupted run first, otherwise the earliest
   `not_started` row in `publish_date` order whose gate is clear, whatever
   its date. It skips `blocked` and `reserve` rows, a gate that is not
   clear, and a China Dependency Index edition or a `Hold until` row before
   its date. Only when no row qualifies at all does it record that the queue
   is empty and stop.
3. Reads that brief file in `briefs/`, then every fact ID it cites in
   `sources/fact-bank.md`, then the Do Not Assert list.
4. Reads `sources/site-profile.md` instead of fetching the site, unless the
   profile is more than a month old.
5. Reads `sources/verified-sources.md` and reuses any figure already logged
   and verified twice.
6. For T2 and T4, applies the GFW rule (`CLAUDE.md`): every statement of
   what the Great Firewall does to a host comes from dated GreatFire verdicts
   and 21YunBox's published probes, labelled as theirs, and a host with no
   dated test is listed as untested. There is no harness gate and no mainland
   probe (Cyril, 2 October 2026), so a T2 or T4 row is never blocked for want
   of one.
7. Researches anything still missing. Validates each source (check 1: fetch
   the page, confirm figure, unit, period, date). Writes the research note
   into the run log. No body copy before this.
8. Runs `/createarticle` (13 iterations, iteration 7 as the cadence variant,
   iteration 8 re-fetches every cited URL for check 2), printing the tracker.
   Writes `output/<slug>.md`. For T6, the output is the replacement copy plus
   a change list naming every file and passage. For T7, the output is the
   queue review and the page picked, or "unspent" with the reason.
9. Runs `/content-quality-us` on `output/<slug>.md` (18 passes, in place),
   with British spelling. Every piece, every tier, no exceptions: upgrades
   and translation sources included. House SEO ceilings (52 / 152 / 25
   words) override the skill's own. The full tracker goes in the run log.
10. Runs `/generate-image-openai` with the prompt from the feature-image
    block, checks the image visually, converts it to WebP (max 1050px, under
    350KB), saves it to `public/images/guides/<slug>.webp` (or
    `casestudies/`). Skipped for T6 and T7 unless the work order asks.
11. Appends new figures to `sources/verified-sources.md` with both check
    dates.
12. Updates the `schedule.csv` row: status `image_ready`, with `drafted_on`,
    `quality_passed_on` and `image_generated_on` filled.
13. Writes `logs/YYYY-MM-DD.md`. The log records what was done and every
    decision taken. It has no "open items", "flags for a person" or "for
    PLAN.md" section: each of those is closed in the run, as `CLAUDE.md`
    ("No run leaves a TODO behind") sets out, or the row is `blocked` with
    the reason in `notes`.

Then it stops. A person reviews the draft (see below), or the 05:30 publish
task picks it up.

## Publishing a reviewed draft

`Publish <slug>` runs the publish step for the row's `content_type`. The
mapping is in `SPEC.md`. In short:

- **guide, guide-en, guide-en-first, report:** `/createblogarticle` on
  `output/<slug>.md` into `src/content/guides/`, frontmatter mapped per the
  spec, `order` set to the highest existing plus one, plain-text references
  converted to links, hero wired. T1 also writes `guides-fr`, `guides-es`,
  `guides-de`, registers the three localized slugs in `src/i18n/routes.ts`,
  then runs `/deep-translate` on each, all three passes, FR then ES then DE,
  interactively in the main conversation, never through a subagent, one pass
  at a time with each pass shown, none skipped. The propagation and the deep
  translation are part of the publish step, never optional, never deferred.
- **casestudy:** into `src/content/casestudies/`, editing the existing file
  for T3-01 to T3-05, creating it for T3-06 to T3-10. English only at publish.
- **money-page:** copy into `src/pages/website-in-china.astro` and the fr,
  es, de pages. Remove `noindex` and the sitemap exclusion in the same
  commit. FAQ schema.
- **upgrade:** apply the change list to the existing files in every locale
  the page has. Verify the sitemap entry count is unchanged.
- **translation:** `/deep-translate` on the earned page into fr, es and de,
  registering slugs. Same rule: main conversation, no subagent, three passes
  per locale, step by step.

Every publish run also runs `node editorial/scripts/review-due.mjs`. Any page
it lists has passed its `reviewBy` date (or the dependency dataset has), and
the run rechecks it before it finishes: every dated figure on the page is
re-fetched against its source, updated or cut, the changed passages go
through `/deep-translate` in every locale, and `updatedAt` and `reviewBy`
move (`reviewBy` to the oldest cited test date plus 90 days). The recheck
ships in the same commit as the piece, or in its own `fix(guide): recheck
<slug>` commit when no piece is publishing.

Then, in this order, and only when each step passes: `npm run build`,
`npx astro check`, `git add` of everything the piece touched (content in
every locale, image, `src/i18n/routes.ts` if changed, `editorial/output`,
`logs`, `schedule.csv`, `sources`), one commit on main
(`feat(guide): publish <slug>`, or `feat(work):`, `feat(page):`,
`fix(guide):` for upgrades, `feat(i18n):` for translations), `git push
origin main`. Read `git status` first and stage nothing that belongs to
another session or another piece. The repo's pre-push hook runs the build a
second time; that is expected.

`npx astro check` passes when it reports no more errors than a clean checkout
of HEAD, same count and same files. Cyril decided this on 10 September 2026,
because the repo already carried 22 errors before the programme began. Run the
baseline in a temporary `git worktree` at HEAD with `node_modules` junctioned
to the repo's, and log both results. Delete the junction with
`DirectoryInfo.Delete()` before `git worktree remove`.

A failed build, or a check with errors beyond the HEAD baseline, means no
commit, no push, the row stays at `image_ready`, and the email goes out with
`--status held`. Vercel deploys from main,
so the push is what puts the piece live.

`npm run build` runs `scripts/check-content.mjs` first: a TODO, FIXME, TBD
or TKTK marker anywhere in `src/content/` fails the build, so it fails the
publish and the pre-push hook too. Run it on the draft as well before
publishing: `node scripts/check-content.mjs editorial/output/<slug>.md`.

IndexNow is automatic (since 5 October 2026). After every successful Vercel
production deploy, `.github/workflows/indexnow.yml` runs
`scripts/indexnow-deploy.mjs`, which compares the live site with the previous
run's snapshot and submits only the pages that are new or whose content
changed, so Bing and the IndexNow engines pick a published piece up without a
manual step. A run does
not call `npm run indexnow` after the push. To resubmit specific URLs by hand:
`node scripts/submit-indexnow.mjs <url> [<url> ...]`. IndexNow does not reach
Google; Search Console's "Request indexing" is manual.

When the publish finishes, Claude runs `editorial/scripts/notify-publish.mjs`
from the repo root. It sends one email through Resend to
cyril.drouin@outlook.com (Resend testing mode delivers only to the account
owner; verify a domain at resend.com/domains, then change `FROM` and
`DEFAULT_TO` in the script to use gmail): subject `Published: <title>` (`Held: <title>` with `--status held`), body
with the live URL per locale, the image path, build and check status and
the run log path. The email carries no TODO or open items section; the script
refuses `--todo`. `RESEND_API_KEY` is already in `.env`. If the send fails,
Claude says so instead of skipping silently.

Nothing publishes itself outside the two paths (a spoken "Publish" or the
scheduled task). Drafts wait in `output/` until one of them happens.

## Weekly rhythm

The plan's slots set the mix and the order of the queue. They no longer set
the drafting days: the draft task runs every day and takes the next row,
whatever its date.

| Planned day | Slot | Job |
|---|---|---|
| Tuesday | 1 | The substantial piece. A T1 flagship or a T5 guide. |
| Thursday | 2 | The fast piece. A T2 compatibility page or a T3 case study. |
| Friday | 3 | The no-new-URL piece. A T6 upgrade, a T7 translation slot, or a T4 report in the weeks it falls due. |

Never three of the same type in one week. If a week slips, drop slot 3
unless it is a T4 report. Never drop slot 1. If two weeks slip, run slots 1
and 2 only and accept a slower build.

## The dates that break the rhythm

| When | What | What to do |
|---|---|---|
| Week 1, 8 to 11 Sept | M1 ships first, ahead of every article. T6-01 (title suffix) and T6-02 (Google Fonts correction) follow. | M1 is a page, not a guide. T6-01 is a template change and needs the build-time title assertion. T6-02 is the correction of a live claim on the highest-traffic guide. |
| Before week 2 | T2-01 is week 2 slot 2. | T2 and T4 pieces follow the GFW rule in `CLAUDE.md`: dated third-party verdicts, labelled as theirs. No harness and no mainland probe, ever (Cyril, 2 October 2026). |
| 1 to 7 Oct | National Day Golden Week | Week 4 slot 2 (T3-01, Thu 1 Oct) and slot 3 (T6-03, Fri 2 Oct) fall inside it. Both were planned for drafting in week 3. Since 10 October the queue runs ahead of every holiday on its own, so no early start is needed. |
| Week 6, Fri 16 Oct | T4-01, China Dependency Index edition 1 | Built under the GFW rule from GreatFire and 21YunBox data refreshed in the first half of October, every row dated and attributed. Method page must exist first. |
| Week 8 | Structure audit | Diff the headings of every published T2 page against each other. No shared structure above H2 (PLAN.md section 13, item 3). |
| Week 10, Fri 13 Nov | T4-02, the vantage point study | Built under the GFW rule from 21YunBox's paired datacentre and home line data and GreatFire verdicts, every figure attributed and dated. No run of our own. |
| Week 12 onward | T7 slots begin | Day 90 for the first T1 pieces lands in mid December. The first two T7 slots (weeks 12 and 14) will probably be unspent. Log that. |
| Week 13 | Cluster share check | Cluster-shaped content under 20% of indexed English pages (PLAN.md section 13, item 5). |
| 120 days after T2-05 publishes | The kill switch | If the first five T2 pages have not produced a qualified inquiry or a measurable ranking, stop the cluster. T2-11 to T2-14 do not get written; their slots move to T3 and T4. |
| Week 19 | B2, the cost article | Decided 2 October 2026: B2 carries CWF's own "from" figures per tier. Gate: "CWF from figures per tier, supplied by Cyril", cleared by `editorial/sources/cwf-pricing.md`. Needed before 12 January 2027. |
| 15 to 21 Feb 2027 | Chinese New Year (Spring Festival 17 Feb) | Week 24 falls inside it. Draft week 24 during week 23. |

## Three pieces that need an early start

| Brief | Publishes | Start | Why |
|---|---|---|---|
| T3-01 Bassetti | Thu 1 Oct | Week 2 | Client sign-off on the name and the figures. Original test conditions may need re-running from a Beijing line. |
| T3-02 SNF | Thu 15 Oct | Week 3 | Needs the 90-day uptime record with the two incidents identified. |
| T3-03 Imhof | Thu 29 Oct | Week 5 | Needs checkout completion data for mainland sessions and a request-level trace. |

## Before the first run

1. `sources/site-profile.md` is pre-populated from the repo on 6 September
   2026. Refresh due 1 October: `Refresh sources/site-profile.md from the
   repo and the live site.`
2. `sources/verified-sources.md` is seeded from the fact bank. Every seeded
   entry carries the plan's verification date as check 1 and still owes
   check 2 against its primary source at first use.
3. No harness. Cyril decided on 2 October 2026 that no mainland probe
   instance and no Tencent Cloud CAT or boce.com subscription is ever bought.
   T2 and T4 pieces follow the GFW rule in `CLAUDE.md`.
4. Get Bassetti sign-off started (T3-01, week 4).
5. `OPENAI_API_KEY`, `OPENAI_IMAGE_MODEL` and `RESEND_API_KEY` are in `.env`
   at the repo root. Nothing else to configure for images or email.
6. Decide the pricing question before week 19.
7. Move `public/Content/china-content-program.md` out of `public/` or block
   the path. Everything under `public/` is deployed and publicly readable at
   `chinawebfoundry.com/Content/...`. `editorial/PLAN.md` is the working copy.
8. Register the scheduled tasks: `powershell -ExecutionPolicy Bypass -File
   editorial\scripts\register-tasks.ps1`.

## Reviewing a draft

Four checks that catch most problems in under five minutes.

1. **Search the file for the em dash character.** Zero results, or it goes
   back.
2. **Read every blockquote.** Each needs a publisher and a date. Each latency
   figure needs a vantage point. A blockquote with no date is a fail. Spot
   check two against the ledger: both check dates present, URL live.
3. **Read the first 200 words.** If a reader who stops there does not have the
   answer, the introduction is doing the wrong job. For T2 and T4, the count,
   the vantage points and the dates must be in the first 60.
4. **Grep for the Do Not Assert phrases.** "93%", "44% of", "cannot read
   JavaScript", "Google Fonts is blocked", "Google Fonts is not blocked".

Then check the length. Being 25% under target means a section was skipped.
Then open the hero image. No text, no logos, no Western subject, a China
setting, the article's subject on a screen.

## If something goes wrong

| Problem | What to do |
|---|---|
| A figure cannot be sourced | Claude cuts the claim and logs the cut. If the section no longer stands without it, Claude rewrites or drops the section in the same run. No marker is left in the file. |
| A brief names a link target that does not exist | Settled fallback in SPEC: link the closest live page on the same subject. If the target is on the schedule, Claude adds an "On publish" line to that piece's brief in `PLAN.md` and reruns `build-briefs.mjs`, so the later publish adds the link. |
| The research contradicts a live page | Claude fixes the live page in the same run, every locale, `updatedAt` moved. A Do Not Assert claim on a live page is always fixed when found. |
| The research proves the fact bank or a brief wrong | Claude corrects `PLAN.md` (section 4 for facts) and reruns `node editorial/scripts/build-briefs.mjs`, which rewrites the fact bank and every brief. Later briefs repeating the error are corrected in the same edit. |
| A page has passed its `reviewBy` date | `review-due.mjs` lists it; the publish run rechecks it the same day (see "Publishing a reviewed draft"). |
| A source fails check 2 (page changed or gone) | Claude fixes the blockquote or cuts the claim. Never ship a citation that failed re-fetch. |
| A host in a T2 or T4 piece has no dated third-party test | List it as untested with no verdict (GFW rule). The piece still drafts and publishes. Never block a row for a mainland measurement. |
| A TODO, FIXME or TBD reaches `src/content/` | The build fails on `scripts/check-content.mjs`. Close the item (source it or cut it), never delete the marker alone. |
| A client number or name is missing | Cyril's decision, so the row goes to `blocked` with note "client sign-off" and nothing of it is published. Claude leaves no marker and no partial draft. Once the sign-off is on record in `editorial/`, say `Draft brief T3-0x`. |
| Claude planted a typo | It ignored `CLAUDE.md` and the house skill. Point at the conflict section and rerun iteration 7. |
| The draft reads generic | The angle field was skipped. Rerun with `Reread the angle in the brief and rewrite.` |
| The draft says "WordPress agency" in a title or H1 | Stack neutrality rule. Rewrite the field; the positioning word is "web agency". |
| Two pieces cite the same figure differently | The ledger was not updated. Fix the ledger, then fix both files. |
| Image generation fails | Check `OPENAI_API_KEY` in `.env`. Retry once with a lightly reworded prompt. Row stays at `quality_passed`. |
| Image has text, a logo, a Western subject or a generic desk | Regenerate. Never wire in an unchecked image. |
| The pre-commit hook rejects the image | Over 1050px or 350KB. Re-encode: `npx sharp-cli -i <file> -o <file> -- resize 1050 --withoutEnlargement`. |
| The quality pass loosened the SEO fields past 52 / 152 | The skill's own ceilings leaked through. Recount and trim. |
| A row reached `image_ready` or `published` with no `quality_passed_on` date | The quality loop was skipped. Set the row back to `drafted`, run `/content-quality-us` on the output file, all 18 passes, then continue. Nothing publishes without it. |
| The quality pass switched spelling to American | The skill's default leaked through. Rerun the spelling pass as British. |
| A locale file was translated by a subagent, or stopped after pass 1, or two passes were merged | The translation rule was broken. Reopen the file and run `/deep-translate` in the main conversation, all three passes, one at a time. Do not publish until it is done. |
| A T1 locale page publishes with an English slug | `guideSlugs` in `src/i18n/routes.ts` was not updated. Add the entry, rebuild, recommit. |
| A T6 upgrade added a URL | The work order was built wrong. Revert the URL. Zero new URLs is the rule. |
| No publish email arrived | Run the notify script again with `--dry-run` to see the payload, then without it. Check `RESEND_API_KEY` in `.env`. |
| The notify script refuses to send ("TODO") | A run tried to email an open item. Close the item in the repo, then send without it. |

## Automating it

The pipeline runs on Cyril's machine through Windows Task Scheduler and the
local Claude Code CLI. Local on purpose: the user-level skills, the `.env`
keys and the full model are all here, and a cloud routine has none of them.

| Task | When (Shanghai) | What | Default |
|---|---|---|---|
| ChinaWebFoundry Editorial Draft | every day 01:30 | `run-daily.ps1 -Mode draft`: one row per run, the next in `publish_date` order whatever its date; steps 0 to 3, stops at `image_ready`; then `check-queue.mjs` mails Cyril if drafting stalls, a finished draft waits, or a week or less of briefs is left | enabled |
| ChinaWebFoundry Editorial Publish | every day 05:30 | `run-daily.ps1 -Mode publish`: publishes every `image_ready` row whatever its `publish_date` (at most three a run, oldest first; a China Dependency Index edition or a `Hold until` row waits for its date), builds, commits, pushes, emails | enabled |

The hours are chosen around the three pipelines already registered on this
machine:

| Pipeline | Draft | Publish |
|---|---|---|
| ChinaWebFoundry (this one) | daily 01:30 | daily 05:30 |
| BBChien | daily 00:00 | daily 05:00 |
| TheRedScroll | Mon, Tue, Thu, Fri 00:30 | daily 04:00 |
| TheChinaPath | Mon, Tue, Wed, Thu 01:00 | daily 04:30 |
| VisitMoganshan | daily 22:00 (rows due tomorrow) | daily 03:30 |

Scripts live in `editorial/scripts/`. `register-tasks.ps1` creates or updates
both tasks, each started through the shared wrapper
`C:UserscyrilProjectautomationscriptsInvoke-ScheduledProjectScript.ps1`.
`check-queue.mjs` (`--dry-run` to preview) is the queue watchdog the draft
run calls; its mail states facts and never lists open items. Each run writes its console output to `logs/runs/<date>-<mode>.txt`
next to the piece's run log. The machine has to be on, or asleep with wake
allowed, at the run time. A missed run fires as soon as the machine is back.

**Sleep kills a run in progress.** A T1 publish with three deep translations
can take well over an hour. The machine must stay awake from 01:30 until the
publish finishes. Set the power plan to never sleep on AC, or keep the laptop
plugged in and the lid open on run days. The runner retries transient API
errors (overloaded, rate limit, 5xx) up to three times, five minutes apart,
on the same model.

Publishing is unattended: a draft made at 01:30 is published at 05:30 the
same day unless someone sets its row to `blocked` before then. That
four-hour window is the review. To pause publishing:

```
Disable-ScheduledTask -TaskName 'ChinaWebFoundry Editorial Publish'
```

Four pipelines share this machine. If two collide on API rate limits, move
this one with `register-tasks.ps1 -DraftTime 02:00 -PublishTime 05:45`.

Runs use `--dangerously-skip-permissions` so nothing pauses for approval, and
pin the most capable model. Never lower the model to speed a run up.
