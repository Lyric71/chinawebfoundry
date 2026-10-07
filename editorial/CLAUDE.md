# ChinaWebFoundry editorial system

You are drafting content for **chinawebfoundry.com**, a web agency in Shanghai
that plans, builds, files, hosts and runs websites inside mainland China for
international companies. Seventy-eight pieces over 26 weeks, three slots a
week, from a brief file in `briefs/`. Every path in this folder is relative to
`editorial/` at the repo root.

Read this file and `SPEC.md` before every draft. **These two files override any
conflicting rule inside the createarticle, content-quality-us,
generate-image-openai, createblogarticle and deep-translate skills.** The
repo's `.claude/CLAUDE.md`, `.claude/anti-ai-writing-style.md` and
`TRANSLATION-RULES.md` still apply on top, and `.claude/CLAUDE.md` wins where
it and `PLAN.md` disagree (see "Conflicts already decided").

`PLAN.md` is the master. It is the China content program v3.0, copied from
`public/Content/china-content-program.md` on 6 September 2026. The briefs in
`briefs/` are sliced from it by `scripts/build-briefs.mjs`; if the plan
changes, rerun the script rather than editing a brief by hand.

## The pipeline, in order

Every piece goes through these steps. None is optional.

| Step | Skill or tool | What it does | Status it sets in `schedule.csv` |
|---|---|---|---|
| 0. Research | Fact bank, ledger, then live sources (inside `/createarticle`) | Reads the fact IDs the brief cites, reuses the ledger, sources anything else with two checks | (logged in the run log) |
| 1. Draft | `/createarticle` (house version in `.claude/skills/createarticle/`) | 13 iterations from the brief to `output/<slug>.md` | `drafted`, `drafted_on` |
| 2. Quality | `/content-quality-us` | 18-pass loop on the draft, in place, with British spelling (see conflicts) | `quality_passed`, `quality_passed_on` |
| 3. Image | `/generate-image-openai` | Hero image from the feature-image block, WebP, max 1050px wide, under 350KB | `image_ready`, `image_generated_on` |
| 4. Publish | `/createblogarticle` + `/deep-translate` + build + git | Writes the content file(s), registers localized slugs, wires the image, translates where the tier says so, runs `npm run build` and `npx astro check`, commits on main, pushes | `published`, `published_on` |
| 5. Notify | `editorial/scripts/notify-publish.mjs` (Resend) | Emails a publish summary to Cyril | (noted in the run log) |

"Draft today's piece." runs steps 0 to 3 and stops. Step 4 runs only when a
person says "Publish <slug>" or when the 05:30 scheduled publish task finds a due
`image_ready` row. Step 5 follows step 4 automatically. Nothing publishes
itself outside those two paths.

Not every piece is an article. `content_type` in the brief header and in
`schedule.csv` decides what each step produces. `SPEC.md` has the table.
Upgrades (T6) and the money page (M1) still go through steps 1 and 2 (the
copy is drafted and quality-checked in `output/`), skip step 3 unless the
work order asks for an image, and their step 4 is an edit to an existing file.

## No run leaves a TODO behind (standing rule, Cyril, 2 October 2026)

A publishing job never leaves a TODO behind: not the research, the draft,
the quality pass, the image step, the publish run, a catch-up run or the
notification email. No TODO, FIXME or TBD marker, no "open items", no "for a
person" or "flags for a person" list, no "Phase 2" deferral, no "carried
forward". Every item a run finds is closed inside that run:

- **A missing or unverified fact** is researched to the source standard below
  (two checks, logged in the ledger) or the claim is cut. Never a TODO marker
  in a body, a table, a caption or frontmatter. The cut is recorded in the run
  log as a decision taken, not as a question.
- **An existing page the new piece contradicts** is fixed in the same run, in
  every locale the page has (changed passages through `/deep-translate`), and
  its `updatedAt` moves. A flat Do Not Assert claim found on a live page is
  always fixed in the run that finds it.
- **A brief, the plan or this spec, proved wrong by the research,** is amended
  at the source (`PLAN.md`, then `node editorial/scripts/build-briefs.mjs`,
  which regenerates the briefs and `sources/fact-bank.md`), including every
  later brief that repeats the error. "For PLAN.md" notes are not written; the
  correction is made.
- **A missing link, slug or asset** is created when the destination can be
  verified. Otherwise the settled fallback applies (SPEC, "Settled fallbacks")
  and, when the destination is a piece still on the schedule, the run adds an
  "On publish" instruction to that piece's brief in `PLAN.md` so its own
  publish step adds the link. A fallback that is not yet in the SPEC is written
  into it in the same run, so it is never raised again.
- **A future watch item** (a review date, a recheck, a piece that must carry
  something back) goes into the repo's own mechanisms: a `reviewBy` date in
  frontmatter (picked up by `editorial/scripts/review-due.mjs` in every
  publish run), the `reviewBy` constant in `src/data/chinaDependencies.ts`,
  or an "On publish" line in the brief of the piece that will act on it. Never
  into the email and never into a list for a person.
- **The notification email has no TODO or open items section.**
  `notify-publish.mjs` refuses to send if one is passed.

**No mainland probe, ever (Cyril, 2 October 2026).** ChinaWebFoundry does
not buy, rent or stand up a mainland probe instance, a Tencent Cloud CAT or
boce.com subscription, or any other measurement harness of its own, and no run
proposes one. "We won't, that's why we have the rule GFW." Every statement of
what the Great Firewall does follows "The GFW rule" below, always, for T2,
T4 and every other tier. A missing mainland measurement is therefore never a
gate, never a blocked row and never an open item.

**Settled decisions (Cyril, 2 October 2026).** These are decided. No run
redrafts around them, lists them in a log's open items or a "for a person"
section, or mentions them in an email.

- **T3-01 (Bassetti) and T3-02 (SNF) stay blocked at the client sign-off
  gate.** Runs skip both rows silently: no redraft, no partial draft, no log
  entry beyond "skipped, settled". A row is picked up only when a written
  client sign-off and the project records behind its figures are filed in
  `editorial/` (for example `editorial/sources/signoff-<slug>.md`); the run
  that finds that file drafts the piece in full.
- **B2 (`china-website-cost`, 12 January 2027) publishes ChinaWebFoundry's
  own "from" figures**, per tier, alongside the sourced market bands. On
  2 October 2026 the site published no CWF price anywhere, so the figures
  come from Cyril: B2's gate is "CWF from figures per tier, supplied by
  Cyril", and it clears when `editorial/sources/cwf-pricing.md` exists with a
  figure per tier and Cyril's name and date on it. The figures are printed
  as ours, exactly as supplied, and never estimated. Until then the row
  waits at its gate without being drafted, raised or emailed.
- **The China Site Scanner** (`src/data/scannerCopy.ts`,
  `src/lib/scanner/rules.ts`) is Cyril's product decision: its severities and
  copy stay exactly as they are. It is outside the reach of the GFW rule and
  the fact bank corrections, which govern articles. Runs never check the
  scanner against the fact bank, never flag it and never edit it.

If something cannot be closed without Cyril's own decision (a client's
sign-off, a pricing call), the run stops **before publishing** that
piece: the row goes to `blocked` with the reason in `notes`, nothing of it is
published, and no partial draft with markers is left in `output/`. A run never
publishes with a TODO attached. `scripts/check-content.mjs` fails the build,
and therefore the publish and the push, on any TODO, FIXME, TBD or TKTK marker
in published content.

## Every piece goes through /content-quality-us. No exceptions.

Every piece of copy this pipeline produces runs the full 18-pass
`/content-quality-us` loop before it can be marked `quality_passed`, and
nothing reaches `image_ready` or `published` without that status first.
"Every piece" means all 78: T1 flagships, the M1 money page, T2 compatibility
pages, T3 case studies, T4 measurement reports, T5 guides, the replacement
copy of every T6 upgrade, and every T7 translation (the loop runs on the
English source before translation; the localized files then go through
`/deep-translate`). A short piece, a data table with 300 words of narrative,
a rewritten paragraph in an upgrade: all of it. The tracker for all 18 passes
goes in the run log. A row that jumps from `drafted` to `image_ready` with
no `quality_passed_on` date is a failed run and gets sent back.

Step 3 uses the `generate-image-openai` skill only. `scripts/generate-image.mjs`
is the same OpenAI path, kept for batch runs.

## Every translation goes through /deep-translate. Interactive. No sub agent.

Every non-English file this pipeline writes or changes goes through the
`/deep-translate` skill: the fr, es and de files of a T1 guide, the three
locale pages of M1, the changed passages of a T6 upgrade in every locale the
page has, and every T7 batch. `/deep-translate` runs **interactively, in the
main conversation, step by step**: pass 1 (humanised translation), pass 2
(native rewrite), pass 3 (final native polish), each shown as it runs, each
finished before the next starts, in this locale order: FR, then ES, then DE.
**Never delegate it to a subagent, an Agent tool call, a background task or a
workflow.** Never stop after pass 1. Never merge two passes into one. Never
run two locales at the same time. A localized file that did not get all three
passes in the main conversation is not published, and if it already was, it
is reopened and the passes are run. The run log records each pass per locale.
In an unattended run "interactive" means the same thing: the passes run one
after another in the main conversation with their output in the run log, not
handed off. Follow `TRANSLATION-RULES.md` and the project copy of the skill at
`.claude/skills/deep-translate/`.

## Project wins over runbook

When `RUNBOOK.md`, `SPEC.md` or `PLAN.md` asks for something this repo cannot
do, use what the repo has and note the substitution in the run log. Do not
stall, do not invent a tool, do not ask. Already settled: email goes through
Resend (the contact form's provider); guide images go to
`public/images/guides/`; case study images to `public/images/casestudies/`;
localized guide slugs are registered in `src/i18n/routes.ts`; there is no
`contentquality` skill, the plan means `/content-quality-us`.

## Model quality: no compromise

Every step of this pipeline runs on the most capable model available at the
time. Drafting, the quality loop, translation and review run on the best
Claude model in this environment, never a faster or smaller mode. Image
generation uses `gpt-image-2` at `--quality high`. If a step is offered a
cheaper path, decline it and say so in the log.

## Research before writing: the fact bank first, then two checks

Not a sentence of body copy gets written before the research is logged.

1. **Read the fact IDs the brief cites** in `sources/fact-bank.md`. Those are
   the facts the piece is built on. Use them as written, with the vantage
   point and the date the fact carries.
2. **Read `sources/verified-sources.md`.** Any figure already logged, dated
   within 12 months and marked verified twice is reused with its exact
   citation.
3. **Anything else** is researched live. Prefer the platform's or vendor's own
   documentation, a regulator, GreatFire, 21YunBox's published probes, or a
   dated trade publication. Chinese-language sources first for anything about
   Chinese platforms, regulators, carriers or clouds (阿里云, 腾讯云, 工信部,
   百度搜索资源平台). Never cite a competitor's blog for a technical fact.
4. **Every source is validated twice.** Check 1 at research time: fetch the
   URL, confirm the figure, unit, period and date are on the page. Check 2 in
   iteration 8, before the draft is finished: re-fetch every cited URL and
   confirm it still says what the blockquote says. Both dates go in the
   ledger. A fact-bank entry counts as check 1 (the plan's verification
   date); check 2 is still owed at draft time against the primary source.
5. **The research note** (claim, source, date, URL, check 1 result) goes into
   the run log before iteration 1 starts.

**Latency numbers carry four things or they do not appear:** the number, the
vantage point, the method, and the date. "391ms" alone is never publishable.
"391ms median TTFB from an Alibaba Cloud instance in Zhangjiakou on 28 August
2026, 0 of 3 completions" is.

## The Do Not Assert list is absolute

`sources/fact-bank.md` ends with the Do Not Assert list. Nothing on it gets
published, in any tier, at any time. Two entries people get wrong:

- "Google Fonts is blocked in China" **and** "Google Fonts is not blocked in
  China" are both banned as flat claims. Say it resolves from mainland
  datacenters and frequently does not resolve on consumer connections, with
  both measurements and both dates (F6).
- Any verdict on the ten untested dependencies in F42 before a dated
  third-party test of them exists. Say "untested" or leave it out.

## The GFW rule (how we state what the Great Firewall does)

**What the Great Firewall does to a host is stated from dated third-party
evidence, never from a mainland probe of our own.** This is the method the
site already publishes on `great-firewall-what-it-blocks`: "Every row below
comes from GreatFire or from 21YunBox, cited and dated." In full:

1. **Sources.** GreatFire (greatfire.org) reachability verdicts, with the
   last-tested date the page states, and 21YunBox's published probes (an
   Alibaba Cloud (阿里云) cn-zhangjiakou instance and a Beijing China Mobile
   (中国移动) home line), with the vantage point and the date. Vendor
   documentation and regulators as usual. Every figure goes through the two
   checks and into the ledger.
2. **Labelled as theirs.** A GreatFire or 21YunBox figure is never called a
   ChinaWebFoundry measurement. A 21YunBox per-tool figure is a timed load of
   the vendor's site from their probe and is described that way.
3. **Six verdicts, two columns.** Reachable, slow, answers then stalls,
   intermittent, blocked, splits by vantage point. A datacentre figure and a
   home line figure stay in separate columns, never averaged.
4. **No dated test, no verdict.** A host with no dated third-party test is
   listed as untested and given no verdict (F42). A GreatFire verdict older
   than 90 days is printed with its date.
5. **Our own figures** are only those we already hold and publish as ours
   (F32, from client projects), with their conditions stated.

The T2 compatibility pages, the T4 reports and every other piece apply this
rule. Where `PLAN.md`, a brief, `harness/README.md` or an older log asks for
"an original measurement", "the harness" or "our own probe", read it as this
rule. There is no harness gate: a T2 or T4 row is never blocked for want of a
mainland measurement.

## The one conflict you must resolve

The upstream CreateArticle skill plants deliberate typos in iteration 7. The
house copy installed at `.claude/skills/createarticle/` replaces that with a
cadence pass, and the rule stands on its own: **no deliberate errors, ever.**
No planted misspellings, no missing apostrophes, no then/than swaps. Humanize
through cadence, sentence length, structure and word choice only. Say in your
log that iteration 7 ran as the cadence variant.

## Conflicts already decided

1. **Spelling.** `PLAN.md` says American English. The repo's `.claude/CLAUDE.md`
   says British English, and the 33 live guides are British. The repo wins:
   **British spelling** (optimise, localise, colour, behaviour), newsroom
   register, grade 8 readability. When `/content-quality-us` runs its US
   spelling pass, apply it as a British spelling pass instead and note it.
   Dates as "8 September 2026", not "September 8, 2026".
2. **SEO ceilings.** `content-quality-us` says title under 60 and meta under
   156. The house ceilings are tighter: title 52, meta description 152,
   excerpt 25 words. The tighter number wins. Guide titles currently render
   with a 35-character layout suffix; T6-01 in week 1 removes it. Until it
   ships, a 52-character title still overflows the SERP, which is why T6-01
   is first.
3. **Image paths.** Guides: `public/images/guides/<slug>.webp`, referenced as
   `/images/guides/<slug>.webp` in the `visual` field. Case studies:
   `public/images/casestudies/<slug>.webp`. WebP only, max 1050px wide,
   under 350KB. The pre-commit hook (`scripts/check-images.mjs`) rejects
   anything else, so an oversize image blocks the publish commit.
4. **Image content.** Every hero is China-related and shows the subject of the
   article as it looks in real life: a screen with a WordPress dashboard, a
   Chinese hosting console (阿里云, 腾讯云), a Baidu results page, a browser
   waiting on a blank page, a Chinese office or co-working space, a
   server room, an ICP filing screen. Only Chinese people in frame. Candid
   normal-life photography with real-life defects, never AI polish, never
   diagrams, never text overlays, never logos other than what is on screen.
   See `SPEC.md`, Feature image.
5. **Stack neutrality.** WordPress and Astro are two answers to different
   questions, never a default and a fallback. No "WordPress agency" or
   "Astro agency" framing in a title, H1, meta description or anchor. The
   positioning word is "web agency" and the site's own phrase is "websites in
   China". This applies even inside the "wordpress china" cluster: the
   articles are about WordPress, the agency is not.
6. **Pricing.** No figures, anywhere, with one exception decided by Cyril on
   2 October 2026: B2 (`china-website-cost`) carries CWF's own "from" figures
   per tier alongside the sourced market bands, exactly as Cyril supplies them
   in `editorial/sources/cwf-pricing.md` (see "Settled decisions").
7. **Build.** `.claude/CLAUDE.md` forbids running `npm run build` unasked. The
   scheduled publish task and a spoken "Publish <slug>" are the user's
   standing authorization for the build inside step 4. Nowhere else.

## Voice

British English. Newsroom register: short sentences, one idea each, plain
words, concrete nouns. Grade 8 reading level. Expert, direct, practical,
grounded. The Shanghai team wrote it because they do the work.

Read `.claude/anti-ai-writing-style.md` before writing a word. Its banned
words, banned phrases and banned structures (especially the negative
parallelism and reframe constructions in section 3F) are hard rules.

## Absolute rules

- **No em dashes.** Not one, in any file, including code comments.
- **No exclamation marks.**
- **No deliberate errors.**
- **No summary or conclusion section.** End on the CTA.
- **No "why work with us" paragraph.** No agency self-promotion framing.
- **No fabricated figures.** If it cannot be sourced, cut the claim.
- **No TODO left behind.** No marker in any file, no open items in any log or
  email. See "No run leaves a TODO behind".
- **No latency figure without a vantage point and a date.**
- **No competitor motive or outcome.** Describe what is observable about
  Chinafy's directory or AppInChina's pages; never say a cluster "failed" or
  "was penalised".
- **No markdown links in body copy** at the draft stage. Internal references
  are plain-text names; the publish step converts them to links.
- **No HTML in body copy.** HTML comments for section labels are the
  exception.
- **Named human byline** on everything: `author: cyril-drouin` or
  `author: echo-peng` (the `team` collection). Never anonymous.

## Brand vocabulary

| Always say | Never say |
|---|---|
| ChinaWebFoundry | China Web Foundry, CWF in public copy (CWF is fine in this folder) |
| WordPress, Great Firewall, Baidu, ICP | Wordpress, great firewall, baidu, icp |
| web agency in China, websites in China | WordPress agency, Astro agency, as positioning |
| ICP filing (ICP备案), ICP licence (ICP许可证) | ICP license (US spelling), "ICP" for both |
| mainland China, the mainland | China when Hong Kong is meant |
| the Shanghai team | our experts, our gurus |
| Book a call, Run a free China readiness scan | Schedule a complimentary consultation |

## What ChinaWebFoundry actually sells

Ten services, as the site names them in `src/content/services/`:
Strategy Audit, China Hosting, China Migration, Technical Integration,
Plugins and Extensions, UX and UI Design, Chinese Content, Baidu SEO, GEO
(AI search visibility), Maintenance and Support. Two money pages exist
(`/web-agency-china/`, `/wordpress-agency-china/`) and a third,
`/website-in-china/`, is reserved and ships as M1 in week 1. The China Site
Scanner at `/china-site-scanner/` is the free tool every T2 page can send a
reader to.

Do not invent a service. Do not name a package tier or a price, except
CWF's own "from" figures in B2, as Cyril supplies them.

## Audience

Every piece uses createarticle `audience = people out of China`: an
English-speaking decision-maker at an international company, outside China,
who does not live inside the China stack. The B cluster and M1 are read by a
buyer choosing an agency. The A cluster and T2 are read by a developer or a
marketing ops lead with a broken site. T3 is read by a buyer looking for
proof. T4 is read by anyone, including answer engines, so the answer goes in
the first 60 words.

## Chinese terms

English first, characters in parentheses, on first reference in each section.
No pinyin.

Alibaba Cloud (阿里云), Tencent Cloud (腾讯云), Huawei Cloud (华为云), Baidu
(百度), Baidu Tongji (百度统计), Baidu Search Resource Platform (百度搜索资源平台),
WeChat (微信), WeChat Pay (微信支付), Alipay (支付宝), UnionPay (银联), ICP filing
(ICP备案), ICP licence (ICP许可证), China Unicom (中国联通), China Telecom
(中国电信), China Mobile (中国移动), AMap (高德地图), Baidu Maps (百度地图), Youku
(优酷), Bilibili (哔哩哔哩), Tencent Video (腾讯视频), Sensors Data (神策),
GeeTest (极验), Meiqia (美洽), Jinshuju (金数据), Cravatar (cravatar.cn).

## Statistics

Every figure gets a blockquote citation with a source name and a date, and
every latency figure adds its vantage point.

> From an Alibaba Cloud instance in Zhangjiakou on 28 August 2026,
> fonts.googleapis.com completed 72 of 72 requests at a median 111ms time to
> first byte. From a Beijing China Mobile residential line on 30 August 2026
> it answered 0 of 54.
> Source: 21YunBox, A Day of Third-Party Requests From Inside China, 28 to 30
> August 2026

(Corrected 2 October 2026. The example used to say 73 of 73 on 29 August, a
home line on 28 August, and "ChinaWebFoundry measurement". The ledger's twice
verified pair is the one above, and it is 21YunBox's measurement, not ours.
A third party figure is never labelled as ours.)

Nobody in the competitive set publishes a dated, sourced measurement (F45).
Publishing them under the GFW rule is the whole differentiator. It is not
optional.

## Publish notification

When step 4 finishes, run from the repo root:

```
node editorial/scripts/notify-publish.mjs --slug <slug> --title "<title>" --type guide --status published --build passed --check "passed (0 errors, HEAD 0)" --log editorial/logs/YYYY-MM-DD.md --note "<commit hash>"
```

There is no `--todo` option. The script refuses to send if one is passed, or
if `--note` reads as a TODO or open items list: everything was closed before
the publish, or the piece did not publish.

A piece the build or the check stopped gets `--status held`: the subject reads
`Held: <title>` and the URLs are labelled as not live. `npx astro check` passes
when it reports no more errors than a clean worktree at HEAD, same count and
same files (Cyril, 10 September 2026; see RUNBOOK).

`--type` is the `content_type` from the schedule row (guide, guide-en,
guide-en-first, report, casestudy, money-page, upgrade, translation). It
sends one email through Resend (key in `.env`) to cyril.drouin@outlook.com
(the only address Resend's testing mode can deliver to; switch `DEFAULT_TO`
in the script to gmail once a sending domain is verified at
resend.com/domains) with the live URL per locale, the hero image path, build
status and the run log path. Add `--dry-run` to preview. If the
send fails, say so in the run log and the final message instead of skipping
silently.

## Where files go

| What | Where |
|---|---|
| The plan | `PLAN.md` (master copy; `public/Content/china-content-program.md` is the drop copy) |
| Today's brief | `briefs/YYYY-MM-DD-slug.md` |
| Finished draft | `output/slug.md` |
| Guide hero image | `../public/images/guides/slug.webp` |
| Case study image | `../public/images/casestudies/slug.webp` |
| Published guide | `../src/content/guides/slug.md` (plus `guides-fr`, `guides-es`, `guides-de` where the tier says so) |
| Localized guide slugs | `../src/i18n/routes.ts`, `guideSlugs` |
| Published case study | `../src/content/casestudies/slug.md` (plus locale collections when earned) |
| Money page | `../src/pages/website-in-china.astro` and the three locale pages |
| Fact bank | `sources/fact-bank.md` (extracted from PLAN.md section 4) |
| Source ledger | `sources/verified-sources.md` |
| Site profile cache | `sources/site-profile.md` |
| Harness data (superseded 2 October 2026, kept for the record) | `harness/latest.json`, `harness/runs/`, `harness/hosts.yml` |
| Run log | `logs/YYYY-MM-DD.md` |
| Schedule and status | `schedule.csv` |

## Site fetch

createarticle Step 0 requires learning the website first. Do not fetch it 78
times. `sources/site-profile.md` caches the site's voice, service names, page
inventory and internal link targets. Read it instead. **Refresh it on the
first working day of each month**, or when a brief says the site has changed.
The repo itself is the ground truth: `src/pages/` for the page inventory,
`src/content/guides/` for existing articles, `src/i18n/routes.ts` for every
localized slug.
