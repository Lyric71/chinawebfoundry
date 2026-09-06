# Output spec

The contract every finished piece meets. `CLAUDE.md` covers voice, rules and
the pipeline. This file covers structure, format, the publish mapping per
content type, and the checks.

## Draft file shape

Filename equals the slug. `output/<slug>.md`. Hard-wrap body lines at about 80
characters. This is the createarticle output format; the publish step maps it
onto the collection schema (see "Publish mapping").

```markdown
---
title: <= 52 characters
slug: <slug>
description: <= 152 characters (becomes the meta description)
excerpt: <= 25 words (becomes the standfirst under the H1)
template: guide | casestudy | money-page | upgrade
author: cyril-drouin | echo-peng
category: Technology | Hosting | Content | Design | Legal | Search
---

<!-- HERO SECTION -->

<H1 from the brief, rewritten if the finished piece needs it>

<!-- INTRODUCTION -->

<The answer, in the first paragraph. For T2 and T4, the count, the vantage
points and the dates in the opening 60 words. For cost and timeline pieces,
the answer table here, above everything else.>

<!-- SECTION: <name> -->

<body, ## headings only for sections, they feed the sticky TOC>

<!-- SECTION: Frequently asked -->

<the FAQ questions from the brief, 40 to 70 words each>

<!-- CTA -->

CTA: <label from the brief>

<!-- FEATURE IMAGE block, see below -->
<!-- SCHEMA block, see below -->
<!-- ASSET BRIEF block, see below -->
```

Headings inside the body are `##`. The guide layout builds its table of
contents from depth-2 headings only. `###` is allowed inside a section but
does not appear in the TOC. No `#` in the body: the layout renders the H1
from frontmatter.

## Publish mapping

The `guides` collection schema (`src/content.config.ts`):

| Draft field | Guide frontmatter | Notes |
|---|---|---|
| `title` | `title` | 52 chars max, counted |
| `excerpt` | `subtitle` | Rendered in orange under the H1. 25 words max |
| `description` | `summary` | Becomes `<meta name="description">` and `og:description`. 152 chars max |
| feature-image path | `visual` | `/images/guides/<slug>.webp` |
| (highest existing `order` + 1) | `order` | The home page teaser shows the three highest `order` values |
| `category` | `category` | One of the six enum values. Never invent one |
| `author` | `author` | `team` collection id. Default `cyril-drouin` |
| today | `publishedAt`, `updatedAt` | `YYYY-MM-DD`. The guide index sorts newest first on `publishedAt` |
| | `published: true` | |

Body: the draft's sections verbatim, minus the HTML comments, the H1 and the
standfirst, with plain-text internal references converted to locale-relative
markdown links from the ASSET BRIEF block, and the CTA label dropped (the
layout renders its own CTA).

**Translation.** Every localized file in the table below goes through
`/deep-translate`, interactively in the main conversation, never a subagent,
all three passes one after another, FR then ES then DE, none skipped or
merged. See "Every translation goes through /deep-translate" in `CLAUDE.md`.

**Localized slugs.** For any piece that ships in fr, es or de, add the entry to
`guideSlugs` in `src/i18n/routes.ts` using the slugs the brief gives. The
route files resolve `guideSlugs[guide.id]?.<locale> ?? guide.id`, so a
missing entry silently publishes an English slug under a French path. That
is a failed publish.

Per content type:

| `content_type` | Writes | Locales at publish | Translation |
|---|---|---|---|
| `guide` (T1) | `src/content/guides/<slug>.md` + `guides-fr`, `guides-es`, `guides-de` | all four, one commit | `/deep-translate` three passes each, FR then ES then DE |
| `guide-en` (T2) | `src/content/guides/<slug>.md` only | en | never |
| `guide-en-first` (T5) | `src/content/guides/<slug>.md` | en | via a T7 slot after day 90, on evidence |
| `report` (T4) | `src/content/guides/<slug>.md`, dated slug | en | never overwritten; a new edition is a new file |
| `casestudy` (T3) | `src/content/casestudies/<slug>.md` (existing file for upgrades T3-01 to T3-05) | en | via a T7 slot, on evidence |
| `money-page` (M1) | `src/pages/website-in-china.astro` and the fr, es, de pages reserved by Move 1 | all four, one commit | `/deep-translate` on each locale page |
| `upgrade` (T6) | the existing file(s) the work order names, all locales where the page is localized | as the page exists | changed passages translated in the same commit |
| `translation` (T7) | `guides-fr`, `guides-es`, `guides-de` (or casestudy locales) for one earned page | fr es de together | `/deep-translate` three passes each |

Case studies use the `casestudies` schema: `title`, `subtitle`, `summary`,
`visual`, `visuals` (optional list), `color` (hex), `order`, `published`,
`services` (service ids). Match an existing case study for shape. The six
template sections from PLAN.md section 7 are `##` headings in the body, in
order: The situation, What we measured before, What we changed, What we
measured after, What did not work, What is still open.

## Length

Word counts in briefs are body only. Exclude frontmatter and all HTML
comments, per the createarticle char-count rule. Report both prose-only and
body-with-tables counts at the end, then land on target.

Being 10% under is fine. Being 25% under means a section was skipped.

T2 pages are 700 to 1,000 words. They are answers, not essays.

## Tables

Minimum two per article, except T2 pages, which need one.

1. A comparison or answer table in the first screen.
2. A topical table inside the densest section.

Markdown tables only. Keep columns aligned in the source. No nested tables, no
merged cells, no more than five columns in an article. T4 report tables are
the exception and carry the columns the brief specifies.

**Measurement tables** carry, per row: the host or site, the datacenter figure,
the consumer figure, completions as "n of m" (never a percentage from three
attempts), the verdict from the five-value set (reachable, slow, answers then
stalls, intermittent, blocked), and the test date. The two vantage points are
separate columns, never averaged.

## Citations

Blockquote format, consistently, every time.

> Figure and claim in one sentence, with the vantage point if it is a
> measurement.
> Source: Publisher, Month Year. https://url

Rules:

- A source with no date is not a source. Find the date or cut the claim.
- A latency figure with no vantage point is not a figure. Name the network or
  cloud region and the date, or cut it.
- Chinese-language sources give the publisher name in English with the
  Chinese name in parentheses on first use, for example Tencent Cloud (腾讯云).
- Every source is validated twice: at research time and again in iteration 8
  by re-fetching the URL. Both dates go in the ledger. One check is not
  enough.
- Never cite a competitor's blog as the source for a technical fact. Go to
  the vendor's own documentation, a regulator, GreatFire, or a dated trade
  publication.
- Never cite our own earlier article as the source for an external figure.
  Cite what that article cited.
- Where a figure is ours, say so and give the method: "ChinaWebFoundry
  measurement from an Alibaba Cloud instance in Zhangjiakou, 3 of 3
  attempts, 60-second abandon, 29 August 2026."
- Chinafy's April 2026 benchmark (F31) is citable with attribution and its
  own framing as a vendor benchmark. Chinafy's 2023 marketing claims (93%,
  44% of resources) are on the Do Not Assert list.

## Internal links

Plain-text references by name in body copy at the draft stage. No markdown
links.

Good: "Our guide to what the Great Firewall blocks covers the DNS layer."
Bad: "Our [guide](/resources/china-web-guide/great-firewall-what-it-blocks/) covers the DNS layer."

List the actual URLs in the ASSET BRIEF block so the publish step can wire
them. Every article carries one link up to a money page or service page and
two sideways to siblings, all inside existing sentences. Anchor text varies:
no anchor string repeats more than three times site-wide, no more than four
exact-match anchors per target (PLAN.md section 13).

## The three appended blocks

All three are HTML comments. None render. None count toward the word target.

### 1. Feature image

```
<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate the hero image from the prompt below with the generate-image-openai
skill, convert to WebP with sharp (max width 1050, quality about 78, no
enlargement, under 350KB), then wire it in as the guide's visual.

- Save to:    public/images/guides/<slug>.webp
- Reference:  /images/guides/<slug>.webp
- Format:     .webp, landscape 3:2 generated, cropped by the layout to 21:9
- Style rule: candid normal-life photo with real-life defects, China
              setting, only Chinese people, the article's subject visible
              on a screen. No AI polish, no diagrams, no text overlays, no
              watermark, no logos except what is on screen.

IMAGE PROMPT (use verbatim):

<single unbroken prose block per the image prompt rules in the skill>
===================================================================== -->
```

**China rule, permanent.** Every hero is visibly China-related and shows the
subject of the article as it exists in real life on a screen or in a room: a
WordPress dashboard or a plugin list on a laptop in a Shanghai co-working
space, an Alibaba Cloud (阿里云) or Tencent Cloud (腾讯云) console, a Baidu
results page on a phone, a browser tab stuck on a white page, a server rack in
a small mainland data centre, an ICP filing form on a Chinese-language
console, a developer at a cluttered desk in Hangzhou or Shenzhen. Rotate
cities and places (Shanghai, Beijing, Shenzhen, Hangzhou, Chengdu, Guangzhou,
Suzhou, Nanjing, Wuhan, Xi'an, a second-tier city office, a university lab, a
co-working floor, a tea house with a laptop). Name the place in the prompt
and vary it across pieces. Chinese characters on screens are expected.

**People and look, permanent.** Only Chinese people in the image, never a
Western marketer, founder or developer, whatever the article's audience. Not
a perfect AI render: vivid, candid, normal-life photography with normal-life
defects (handheld feel, slight motion blur, uneven light, clutter, cables, a
smudged screen, someone mid-gesture, a cropped edge). The prompt must ask for
those imperfections. No studio polish, no cinematic grade, no diagrams, no
infographics, no watermark, no text overlays.

The generated PNG stays in the session scratchpad. Convert with sharp, open
the WebP and check it against the rules before saving it to the repo. The
pre-commit hook rejects anything over 1050px wide or 350KB.

### 2. Schema

```
<!-- SCHEMA
Type: Article (guides and reports) | Article + FAQPage (T1 B cluster, M1, any brief that says FAQ schema)
FAQPage: yes, <n> questions | no
Breadcrumb: Home > China Web Guide > <title>
Author: <team member name>
datePublished: YYYY-MM-DD
Measurement: <for T2 and T4: the run_id(s) from harness/ that the figures come from>
-->
```

The guide layout already emits Article and BreadcrumbList. FAQPage is added
by the publish step where the brief asks for it. Do not invent new types.

### 3. Asset brief

```
<!-- ASSET BRIEF
TABLES: <list, with the data each needs and the harness run it comes from>
CHARTS: <type, axes, data source, what it must show>
SCREENSHOTS: <what to capture, what to blur>
DOWNLOADS: <file, format, gate or no gate>
INTERNAL LINKS: <anchor text> -> <canonical English path>, one per line
LOCALIZED SLUGS: fr <slug> · es <slug> · de <slug> (from the brief, or "none" for en-only tiers)
CLIENT SIGN-OFF NEEDED: <any client figure or name used>
HARNESS ROWS CITED: <host, run_id, vantage> one per line, or "none"
-->
```

## SEO

| Field | Ceiling | How |
|---|---|---|
| Title | 52 characters | Count it. Do not estimate. |
| Meta description (`description` / `summary`) | 152 characters | Count it. |
| Excerpt (`excerpt` / `subtitle`) | 25 words | Count it. |

These ceilings override the looser ones inside `content-quality-us` (60 /
156). When that skill's iteration 8 or 17 proposes longer fields, trim them
back.

The brief supplies an approved title, description and excerpt already inside
these ceilings. Use them. Only rewrite if the finished piece makes them
inaccurate, and then stay inside the ceilings and note the change in your
log.

Primary query appears in the H1, the first 100 words, and one H2. Do not force
it anywhere else. Secondary queries appear where they fit naturally or not at
all. Never lead a title, H1 or meta description with "WordPress agency" or
"Astro agency".

## The iteration workflow

Run createarticle's 13 iterations in order. Print the tracker. State what
changed at each step. No approval pauses.

**Iteration 7 is a cadence pass.** Vary sentence length deliberately, break at
least three parallel structures, let one paragraph run long and the next run
to a single line. No planted errors. Say in your log that you ran the
cadence variant.

**Iteration 8** includes the second source validation: re-fetch every cited
URL, and for T2 and T4, re-read the harness rows cited.

**Iteration 13** produces five visual concepts, then one photorealistic
feature image prompt.

Then run `content-quality-us` (18 passes) on the same file, in place, with
British spelling, before the image step. **This is mandatory for every piece
in every tier, including T6 upgrade copy and the English source of every T7
translation.** Print the full 18-pass tracker in the run log. No
`quality_passed_on` date, no `image_ready`, no publish.

## Status values in schedule.csv

| Status | Set when |
|---|---|
| `not_started` | Default |
| `drafted` | createarticle finished, `output/<slug>.md` saved |
| `quality_passed` | content-quality-us finished on the file |
| `image_ready` | hero image checked and saved (or "no image" noted for upgrades and translations, which move straight here after `quality_passed`) |
| `published` | publish step finished, build passed, pushed, Resend email sent |
| `blocked` | stopped on one of the flag conditions, see `notes` (the harness gate writes `blocked` with note "harness") |
| `reserve` | a reserve slot, unspent |
| `unspent` | a T7 or reserve slot reviewed on its date and deliberately left empty |

## Definition of done (steps 0 to 3)

Verify each by counting or checking, not by assuming.

**Every piece, all tiers**
- [ ] Fact IDs the brief cites were read, and the facts used match them.
- [ ] Research note written before drafting. Every cited source passed check 1 and check 2, both dates in the ledger.
- [ ] Zero em dashes. Search the file for the character.
- [ ] Zero exclamation marks.
- [ ] Zero deliberate typos or planted errors.
- [ ] No summary or conclusion section. File ends on the CTA plus comment blocks.
- [ ] No "why work with us" framing.
- [ ] No banned words or structures from `.claude/anti-ai-writing-style.md`.
- [ ] Nothing from the Do Not Assert list. Grep for "93%", "44% of", "cannot read JavaScript", "Google Fonts is blocked", "Google Fonts is not blocked".
- [ ] No price, package or tier name.
- [ ] Every statistic in a blockquote with a named source and a date. Every latency figure with a vantage point.
- [ ] Chinese terms as English (中文) on first reference per section.
- [ ] British spelling throughout.
- [ ] Title, meta and excerpt counted and inside ceilings, after the quality pass too.
- [ ] Named human byline (`author`).
- [ ] Internal references present as plain text, URLs and localized slugs listed in the asset brief.
- [ ] Feature image, schema and asset brief blocks all present.
- [ ] Body word count reported.
- [ ] Saved as `output/<slug>.md`.
- [ ] content-quality-us run, all 18 passes shown.
- [ ] Hero image generated, checked visually, converted, saved under 1050px and 350KB.
- [ ] `schedule.csv` row updated with status and the dates.
- [ ] `logs/YYYY-MM-DD.md` written.

**Articles, T1 T2 T5**
- [ ] One link up to a money or service page, two sideways to siblings, all inside existing sentences.
- [ ] Anchor text checked against the distribution rule.
- [ ] The answer appears in the first paragraph.

**T1 and M1 only**
- [ ] Localized slugs for fr, es, de present in the asset brief, taken from the brief.

**T2 only**
- [ ] At least one original measurement with a named vantage point and a date, traceable to a `harness/` run.
- [ ] No structure above the H2 level shared with any published T2 page (diff the headings).
- [ ] No verdict on any F42 host the harness has not probed.

**T3 only**
- [ ] All six template sections present, in order.
- [ ] At least one before and one after figure, each with a named Chinese network or cloud region and a date.
- [ ] A named friction item.
- [ ] Client named, or anonymized with the reason stated. `TODO: client sign-off` left where sign-off is missing.

**T4 only**
- [ ] Method stated before any finding.
- [ ] Raw host list published or linked.
- [ ] Untested hosts listed as untested.
- [ ] Dated slug, no prior edition touched.

**T6 only**
- [ ] The change list names every file and passage touched.
- [ ] Zero new URLs. Sitemap entry count identical before and after the build.
- [ ] The work order's own acceptance criteria all pass.

## When to stop and ask

Draft without pausing, with five exceptions. In each case, write the draft up
to that point, leave a clear marker, and flag it in the log.

1. **A required figure cannot be sourced.** Cut the claim, mark
   `TODO: unsourced claim removed`, and say which section is now thinner.
2. **A T2 or T4 piece has no harness row for its subject.** Draft everything
   that does not depend on the measurement, leave `TODO: harness measurement`
   where the figure goes, set the row to `blocked` with note "harness". Do
   not publish.
3. **A client figure or name is needed and not cleared.** Mark
   `TODO: client sign-off` and leave the sentence incomplete rather than
   estimating.
4. **The brief conflicts with what the site actually says.** The site wins.
   Note the conflict so the brief and PLAN.md can be corrected.
5. **A T6 work order would create a URL.** Stop. It was written wrong. Flag it
   and do not build it.
