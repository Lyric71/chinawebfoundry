---
title: "Correct the Google Fonts claim, add measurements"
slug: upgrade-is-wordpress-blocked-in-china
description: "The busiest guide on the site carries a Google Fonts verdict the fact bank retracts. Replacement copy, a two-vantage table, four locale files."
excerpt: "One live article states a Google Fonts verdict we cannot stand behind. Here is the replacement copy, measured from two places in China."
template: upgrade
author: cyril-drouin
category: Technology
---

<!-- HERO SECTION -->

Correct the Google Fonts claim, add measurements

<!-- INTRODUCTION -->

`is-wordpress-blocked-in-china` is the most-read article in the guide, and its
Google Fonts section is wrong in a way that matters. It tells the reader the
font files reach the visitor. From a Beijing home line on 30 August 2026,
`fonts.googleapis.com` was asked 54 times and answered nothing.

The opposite sentence is banned too. Both flat claims sit on the Do Not Assert
list, the block and the correction alike, because the answer changes with the
place you measure from. So this work order replaces the section with both
measurements, adds a table that carries a vantage point and a date on every
row, moves the measurement date into the standfirst where a phone reader sees
it, and cuts an unsourced paragraph that got through review when the article
shipped.

Four locale files, nine passages each. Zero new URLs.

<!-- SECTION: What the page says now -->

## What the page says now

Three defects, in order of how much damage they do.

| # | Where | What it says | Why it fails |
|---|---|---|---|
| 1 | Body, Google Fonts section | "The font files reach the visitor" | The flat correction F6 forbids. True from a mainland datacentre, false on a Beijing consumer line, and the article gives the reader no way to tell which applies |
| 2 | Body, Google Fonts section | "Both domains resolve to Google IP ranges hosted inside China when a domestic resolver is used", plus the resolver paragraph after it | Not in F6, not in the primary source. The source was asked directly about the mechanism and does not explain it. An invented explanation on the busiest page we have |
| 3 | Dependency table, three rows | Google Fonts "Reachable and fast, roughly 110ms". Tag Manager "Intermittent". jsDelivr lumped in at "480ms to 820ms" | A latency figure with no vantage point and no date, which is the error the fact bank preamble names first. The jsDelivr figure also disagrees with the source |

Defect 2 is the one to look at twice. A stale claim repeated from another
guide would be ordinary. This paragraph goes further and supplies a technical
mechanism for the claim, in confident detail, sourced to nothing. Somebody
wrote a plausible story about DNS resolvers and it read well enough to stay up
for a fortnight.

<!-- SECTION: What the probe actually recorded -->

## What the probe actually recorded

Check 2 was run against the primary source on 10 September 2026. The headline
numbers in F6 hold. Three details around them do not, and every citation in
this work order uses the source, not the fact bank.

| What F6 says | What the source says |
|---|---|
| Datacentre test on 29 August 2026 | 28 August 2026, Alibaba Cloud (阿里云) cn-zhangjiakou, twelve hours, sampled every ten minutes, 30-second timeout |
| 73 of 73 completions | 72 samples per resource, 100% success, so 72 of 72 |
| Consumer test on 28 August 2026 | 30 August 2026, and the line is named: Beijing China Mobile (中国移动) residential, 88 sites, 264 page loads |
| 111ms and 102ms medians | Confirmed, and the source also gives 137ms and 121ms at the 95th percentile |
| 0 of 54 and 0 of 6 | Confirmed exactly |

The same page carries three hosts F6 does not mention, measured the same way
on the same two lines. All three are useful here, and one of them corrects a
second fact.

- `www.googletagmanager.com`, 72 of 72 at 118ms from the datacentre, 0 of 112
  from the Beijing line. F3 calls Tag Manager "intermittent", which fits a host
  that answers some of the time from one place. These two vantage points each
  gave the same answer every time they asked. That is a split, and it has the
  same shape as the fonts.
- `www.google.com/recaptcha`, 0 of 72 and 0 of 18. F2 confirmed from both
  places, which is worth having, because most blocked verdicts in circulation
  rest on one probe from one network.
- `cdn.jsdelivr.net`, 72 of 72 at 660ms median from the datacentre, 36 of 36
  from the Beijing line. F7 puts the central figure at 493ms to 1,086ms. The
  95th percentile matches within 23ms. The median does not.

Two hosts the brief points at could not be re-checked and are therefore left
alone. `ajax.googleapis.com` (F1) rests on a ChinaWebFoundry probe record, and
`harness/latest.json` is empty, so there is nothing stored to re-read.
`wordpress.org` (F8) rests on WordPress meta trac ticket 5106, which returns
HTTP 403 to the fetcher, so its date could not be confirmed. Neither claim is
restated, moved or dressed up in this edit. Both paragraphs stay byte-identical
and both are listed under Out of scope.

<!-- SECTION: The replacement copy -->

## The replacement copy

English below. The French, Spanish and German files carry the same three
defects at the same line numbers, and their replacements are produced at
publish through `/deep-translate`, three passes each, FR then ES then DE, in
the main conversation.

### The standfirst, `subtitle` in frontmatter

The current standfirst runs 28 words, three over the house ceiling, and says
nothing about when anything was measured. The replacement carries the date
into the one block of text that is certain to be on screen at 390px, because
the layout renders it directly under the H1 and above the hero image.

> The software runs fine on a mainland server. Its outside calls are the
> problem. Measured from two vantage points, 28 and 30 August 2026.

24 words. The dates are visible before a reader scrolls, which is what the
acceptance criterion asks for, and no schema field or template line has to
change to get them there.

### The last-measured line, body

Replaces the single line that currently reads "Last checked from mainland
vantage points on 29 August 2026."

> Last measured from an Alibaba Cloud region on 28 August 2026, and from a
> Beijing consumer line on 30 August 2026.

### New section, inserted after the introduction and before "What WordPress pulls in from outside"

> ## Measured from a datacentre and from a home line
>
> Two probes, two days apart, over the same list of hosts. One ran on a
> commercial cloud inside China. The other ran on somebody's home broadband
> in Beijing. They disagree, and the disagreement is the useful part.
>
> | Host | Vantage point | Result | Verdict | Tested |
> |---|---|---|---|---|
> | fonts.googleapis.com | Alibaba Cloud (阿里云) cn-zhangjiakou | 72 of 72, 111ms median, 137ms p95 | Reachable | 28 Aug 2026 |
> | fonts.googleapis.com | Beijing China Mobile (中国移动) home line | 0 of 54 | Blocked | 30 Aug 2026 |
> | fonts.gstatic.com | Alibaba Cloud (阿里云) cn-zhangjiakou | 72 of 72, 102ms median, 121ms p95 | Reachable | 28 Aug 2026 |
> | fonts.gstatic.com | Beijing China Mobile (中国移动) home line | 0 of 6 | Blocked | 30 Aug 2026 |
> | www.googletagmanager.com | Alibaba Cloud (阿里云) cn-zhangjiakou | 72 of 72, 118ms median, 143ms p95 | Reachable | 28 Aug 2026 |
> | www.googletagmanager.com | Beijing China Mobile (中国移动) home line | 0 of 112 | Blocked | 30 Aug 2026 |
> | www.google.com/recaptcha | Alibaba Cloud (阿里云) cn-zhangjiakou | 0 of 72 | Blocked | 28 Aug 2026 |
> | www.google.com/recaptcha | Beijing China Mobile (中国移动) home line | 0 of 18 | Blocked | 30 Aug 2026 |
> | cdn.jsdelivr.net | Alibaba Cloud (阿里云) cn-zhangjiakou | 72 of 72, 660ms median, 1,757ms p95 | Slow | 28 Aug 2026 |
> | cdn.jsdelivr.net | Beijing China Mobile (中国移动) home line | 36 of 36 | Reachable | 30 Aug 2026 |
>
> > From an Alibaba Cloud (阿里云) instance in cn-zhangjiakou on 28 August
> > 2026, sampled every ten minutes for twelve hours with a 30-second
> > timeout, fonts.googleapis.com answered 72 of 72 requests at a median
> > 111ms time to first byte. From a Beijing China Mobile (中国移动)
> > residential line on 30 August 2026, across 264 page loads on 88 real
> > websites, the same host was requested 54 times and answered none of them.
> >
> > Source: 21YunBox, *A Day of Third-Party Requests From Inside China*,
> > 28 August 2026, updated 30 August 2026
>
> Read the two rows for a host together or the number will mislead you. A
> commercial cloud in China buys better international transit than a flat in
> Chaoyang does, so the datacentre figure is a ceiling. Your visitor sits
> somewhere underneath it. On three of the five hosts here, the visitor gets
> nothing at all.
>
> That is five hosts out of the full list. The rest of the dependencies sit in
> the table below, with verdicts rather than timings.

### The Google Fonts section, body

The H2 does not change, so the anchor and the table of contents entry do not
move. The first paragraph stays. Everything from the blockquote down is
replaced.

> This one earns its own section, because the received wisdom has gone stale
> and a lot of agency marketing copy is still repeating it.
>
> Two sentences get repeated about Google Fonts in China: that it's blocked,
> and that it isn't. The same pair of measurements kills both. The font CDN
> answered every request from a mainland datacentre and answered none at all
> from a Beijing home line, two days apart.
>
> > From an Alibaba Cloud (阿里云) instance in cn-zhangjiakou on 28 August
> > 2026, fonts.googleapis.com answered 72 of 72 requests at a median 111ms
> > time to first byte and fonts.gstatic.com answered 72 of 72 at 102ms. From
> > a Beijing China Mobile (中国移动) residential line on 30 August 2026,
> > fonts.googleapis.com was requested 54 times and answered none, and
> > fonts.gstatic.com was requested 6 times and answered none.
> >
> > Source: 21YunBox, *A Day of Third-Party Requests From Inside China*,
> > 28 August 2026, updated 30 August 2026
>
> The honest version is conditional. Google Fonts resolves from mainland
> datacentres and often doesn't resolve on consumer connections. Which of
> those your visitor gets depends on the network they are on.
>
> We don't know the mechanism. The probe that produced these numbers doesn't
> explain it either, so we're not going to invent one here. What's measurable
> is the shape: same host, two days apart, opposite outcomes, depending on
> which side of the mainland network you're sitting on.
>
> That's the argument for self-hosting. A font file you serve yourself removes
> a dependency whose answer changes with the network the visitor is on, and you
> stop needing to work out which answer applies to which visitor.
>
> fonts.google.com, the browsing interface your designers pick typefaces in,
> doesn't load from either vantage point. That one is a designer problem and
> your visitors never touch it.
>
> We self-host fonts on every build anyway. Partly for the reason above,
> mostly because it's one fewer thing to re-test.

### The dependency table, three rows out, four rows in

Same table, same position, same column headers. The reCAPTCHA, Analytics,
Maps, YouTube, Gravatar, Hosted Libraries, wordpress.org and Stripe rows do
not change.

| Out | In |
|---|---|
| `Google Fonts (fonts.googleapis.com) \| Reachable and fast \| Loads normally, roughly 110ms` | `Google Fonts (fonts.googleapis.com, fonts.gstatic.com) \| Depends on where you measure \| Answers from a mainland datacentre, silent on a Beijing home line` |
| `Google Tag Manager \| Intermittent \| Container may load, collection still fails` | `Google Tag Manager \| Depends on where you measure \| Same split as the fonts. The beacon to google-analytics.com fails either way` |
| `cdnjs, unpkg, jsDelivr \| Reachable, slow \| Roughly 480ms to 820ms first byte` | `cdnjs, unpkg \| Reachable, slow \| Both complete. Untested from a consumer line` |
| | `cdn.jsdelivr.net \| Reachable, slow \| 660ms median from a datacentre, completes on a home line` (new row, directly under the one above) |

The cdnjs and unpkg timings come out of that row rather than moving into the
measurement table. The source used for check 2 does not test either host, so
there is no second check for them and no vantage point on record. "Roughly
480ms to 820ms first byte" is exactly the kind of figure defect 3 is about:
a number with no named line behind it and no date. Cutting it while correcting
the Google Fonts row is the consistent call. Both hosts go on the list for the
next probe run, and the timings come back with a vantage point attached or
they do not come back.

<!-- SECTION: The change list -->

## The change list

Every file and every passage. Line numbers are from the files as they stand on
10 September 2026, and all four locale files are structurally parallel, which
is why the numbers repeat.

| # | File | Line | Passage | Change |
|---|---|---|---|---|
| 1 | `src/content/guides/is-wordpress-blocked-in-china.md` | 3 | `subtitle` | Replace, 24 words |
| 2 | same | 9 | `updatedAt` | `2026-08-29` becomes `2026-09-11` |
| 3 | same | 19 | Last-checked line | Replace with the two-vantage line |
| 4 | same | after 19 | New section | Insert "Measured from a datacentre and from a home line" with the ten-row table and its citation |
| 5 | same | 45 | Google Fonts table row | Replace |
| 6 | same | 46 | Tag Manager table row | Replace |
| 7 | same | 48 | CDN table row | Replace, then insert the jsDelivr row after it |
| 8 | same | 67 to 69 | Google Fonts blockquote | Replace, both hosts, both vantage points, both dates |
| 9 | same | 71 to 75 | Google Fonts body paragraphs | Replace. The resolver mechanism paragraph is cut, not rewritten |
| 10 | `src/content/guides-fr/is-wordpress-blocked-in-china.md` | 3, 9, 19, after 19, 45, 46, 48, 67 to 69, 71 to 75 | Same nine passages | Same changes, through `/deep-translate` |
| 11 | `src/content/guides-es/is-wordpress-blocked-in-china.md` | 3, 9, 19, after 19, 45, 46, 48, 67 to 69, 71 to 75 | Same nine passages | Same changes, through `/deep-translate` |
| 12 | `src/content/guides-de/is-wordpress-blocked-in-china.md` | 3, 9, 19, after 19, 45, 46, 48, 67 to 69, 71 to 75 | Same nine passages | Same changes, through `/deep-translate` |

Four files. Nine passages each. Nothing else in the repository is touched: no
layout, no schema, no route file, no image, no config.

<!-- SECTION: What must not move -->

## What must not move

| Thing | State | How it is checked |
|---|---|---|
| Slug | `is-wordpress-blocked-in-china`, unchanged in all four collections | The publish step edits file bodies only. No file is renamed |
| `guideSlugs` entry in `src/i18n/routes.ts` | Line 68, unchanged, byte for byte | Diff the file. It must not appear in the commit at all |
| Canonical and hreflang cluster | Unchanged | They derive from the slug and the locale routes, neither of which is touched |
| Sitemap entry count | Identical before and after | Count guide article URLs in `dist/sitemap-0.xml` on both sides of the build. 132 before, 132 after |
| H2 headings that already exist | All byte-identical, including "The Google Fonts entry most guides still get wrong" | The sticky table of contents is built from depth-2 headings, so a reworded H2 moves an anchor. Searched the repo for `#` fragments pointing at this URL before writing this: there are none, but the H2s stay anyway |
| Table of contents | One new entry, from the one new H2 | Expected and unavoidable. It adds no URL |
| `order`, `category`, `published`, `publishedAt`, `visual` | Unchanged in all four files | Only `subtitle` and `updatedAt` move in frontmatter |
| The hero image | Unchanged, `/images/guides/is-wordpress-blocked-in-china.webp` | No image is generated for this piece |

One deliberate exception to "nothing moves": `updatedAt` changes, which
re-sorts nothing (the guide index sorts on `publishedAt`) and adds a visible
"Updated 11 September 2026" beside the publication date in the header. That is
the second half of the visible-date requirement, and it costs one frontmatter
line per file.

<!-- SECTION: Out of scope -->

## Out of scope

Named here so the next person does not treat the omissions as oversights.

- **The `ajax.googleapis.com` paragraph.** Check 2 impossible, see above. Left
  byte-identical. It goes back on the list once the probe fleet has a stored
  run for that host, which is due before T2-01 in week 2.
- **The wordpress.org section.** Same reason, different obstacle: trac returns
  403 and the ticket date is unconfirmed. No citation added, no wording
  touched.
- **The Chinafy blockquote.** Untouched and out of scope. It carries a
  publisher and a date already and the work order does not reach it.
- **The `summary` field.** 148 characters, inside the 152 ceiling, still
  accurate after the edit. Left alone to keep the diff small.
- **The title.** 33 characters. T6-01 handles the layout suffix that inflates
  it; this work order does not touch titles.
- **The three internal links in the body.** Correct as they stand.
- **The rest of the dependency table.** The reCAPTCHA, Analytics, Maps,
  YouTube, Gravatar, Hosted Libraries, wordpress.org and Stripe rows carry
  verdicts without timings already, so none of them trips the vantage point
  rule and none is touched.

<!-- SECTION: Acceptance -->

## Acceptance

The work order's own six criteria, plus the two the tier adds. Every one is
checked by looking, not by assuming.

| # | Criterion | How it passes |
|---|---|---|
| 1 | "Google Fonts is blocked in China" absent in English, and its equivalents absent in de, es, fr | It is already absent in all four. Grep each file after the edit for the phrase and its three translated forms |
| 2 | "Google Fonts is not blocked in China" absent in every locale | The live English page carries this claim in substance, not as that literal string, in "The font files reach the visitor". Passage 9 cuts it. Grep for the string and read the section in each locale |
| 3 | The Google Fonts paragraph names both vantage points and both test dates | Alibaba Cloud (阿里云) cn-zhangjiakou 28 August 2026, Beijing China Mobile (中国移动) 30 August 2026, in the blockquote and in the prose |
| 4 | The measurement table has a vantage point column and a date column, no row empty in either | Ten rows, five columns, one row per host per vantage point. Count the cells |
| 5 | A visible last-measured date within the first screen at 390px | The standfirst carries "28 and 30 August 2026" and the layout renders it under the H1, above the hero image. `updatedAt` adds a second date beside it |
| 6 | Slug, canonical and hreflang byte-identical | See "What must not move". `src/i18n/routes.ts` must not appear in the commit |
| 7 | T6: the change list names every file and passage | 12 rows, 4 files, 9 passages each |
| 8 | T6: zero new URLs, sitemap count identical | No file renamed, no route added, no slug registered. Count `dist/sitemap-0.xml` on both sides |

Criterion 4 needed a decision. `SPEC.md` says a measurement table keeps its two
vantage points in separate columns and never averages them; the work order asks
for a single vantage point column. Both cannot be literal at once. The table
above uses one row per host per vantage point, which satisfies the work order
exactly and honours what the `SPEC.md` rule is for, since nothing is averaged
and the two lines are never combined into one figure. Five columns, inside the
`SPEC.md` limit. Recorded here rather than resolved quietly.

Criterion 2 also needs a note. The brief's rationale says the article "asserts
the flat claim that F6 retracts", meaning the block. It does not. It asserts
the other flat claim, the correction, which F6 forbids just as firmly and which
is the worse of the two to have on a page this size. The fix is the same either
way. `PLAN.md` should be corrected so the next reader of that brief is not
looking for the wrong sentence.

<!-- CTA -->

CTA: Run a free China readiness scan

<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

NO IMAGE IS GENERATED FOR THIS PIECE.

T6 upgrades skip the image step unless the work order asks for one. The T6-02
work order asks for none, and the page being edited already has its own hero
at /images/guides/is-wordpress-blocked-in-china.webp, which this edit does not
touch. Nothing was written to public/images/ and gpt-image-2 was not called.
The schedule row moves from quality_passed straight to image_ready with
"no image" noted, per the status table in editorial/SPEC.md.

The iteration 13 concepts are kept below so a later run does not repeat the
work if an image is ever wanted for this page.

FIVE VISUAL CONCEPTS CONSIDERED
1. A Beijing flat at night, a laptop on a low table, a web page half painted
   with the body text rendered in a fallback system font because the webfont
   never arrived.
2. Two screens side by side on a Hangzhou desk, the same site loaded on each,
   one complete and one still waiting, a stopwatch app running on a phone
   between them.
3. A network engineer in a small Zhangjiakou machine room reading a terminal
   full of timing output, rack fans and dust visible.
4. A phone on a Chaoyang kitchen table showing a page stuck mid-load, a bowl
   of noodles going cold beside it.
5. A Shanghai co-working desk with a browser network panel open, a long row of
   font requests in red beside a short row in green.

IMAGE PROMPT (use verbatim, if an image is ever needed)

Candid handheld photograph taken at night in a small rented flat in the
Chaoyang district of Beijing, a Chinese man in his late twenties sitting
cross-legged on the floor in front of a low wooden table with an open laptop,
the laptop screen angled towards the camera and filling much of the frame
showing a half rendered web page where the headline text has fallen back to a
plain default system font while a browser network panel below it lists several
font requests still spinning without a response, the screen smudged with
fingerprints and reflecting the warm yellow of a single floor lamp behind him,
a phone face up on the table showing a page still loading, a bowl of noodles
with chopsticks resting across it going cold beside the laptop, a tangle of
charging cables and a power strip on the floor, laundry drying on a rack out
of focus in the background near a window with the building opposite lit up,
his left hand mid gesture reaching towards the trackpad so it carries slight
motion blur, uneven mixed lighting from the lamp and the laptop screen, the
frame cropping his knee awkwardly at the bottom edge, visible sensor noise and
grain from the low light, natural imperfect documentary photography, no studio
lighting, no colour grading, no text overlay, no watermark, no logos other
than what appears on the screens.
===================================================================== -->

<!-- SCHEMA
Type: none. This piece is a work order, not a published page. Its step 4 is an
edit to four files that already exist, so no new schema is emitted and no
existing schema type changes.
Existing schema affected: Article.dateModified on the four locale pages, which
already reads the updatedAt frontmatter field and follows the new value with no
code change. Article.headline, BreadcrumbList and the canonical are untouched.
FAQPage: no. The article's "Questions we get asked" section has no FAQPage
schema today and this work order does not add it. T6-08 and T6-09 cover FAQ
schema elsewhere; adding it here would be scope the brief did not order.
Breadcrumb: unchanged. Home > China Web Guide > Is WordPress blocked in China?
Author: Cyril Drouin
datePublished: unchanged, 2026-08-29. dateModified becomes 2026-09-11
Measurement: none from editorial/harness/. harness/latest.json is empty. Every
figure in the replacement copy comes from the 21YunBox probe of 28 and 30
August 2026, cited in full in both blockquotes.
-->

<!-- ASSET BRIEF
TABLES:
  1. Defect table, 3 rows. Data: location, quoted text, reason it fails.
  2. Fact bank drift table, 5 rows. Data: F6 wording against the primary
     source, from check 2 on 10 September 2026.
  3. The measurement table that ships, 10 rows, 5 columns: host, vantage
     point, result, verdict, tested. Source: 21YunBox probe, 28 and 30 August
     2026. This is the only table in this work order that reaches a reader.
  4. Dependency table before and after, 4 rows.
  5. Change list, 12 rows, file and passage.
  6. What must not move, 8 rows.
  7. Acceptance, 8 rows.
CHARTS: none. Ten measurements do not need a chart, and the point of the table
  is the pairing of two vantage points per host, which a bar chart would flatten.
SCREENSHOTS: none required. If the 390px check in acceptance row 5 is run on a
  device rather than in a viewport emulator, keep the screenshot for the record.
DOWNLOADS: none.
INTERNAL LINKS: none added or changed. The article's three existing links are
  correct and out of scope:
    what the Great Firewall blocks -> /resources/china-web-guide/great-firewall-what-it-blocks/
    ICP filing guide -> /resources/china-web-guide/icp-licence-filing-foreign-companies/
    hosting a website in China -> /resources/china-web-guide/host-website-in-china/
LOCALIZED SLUGS: none created or changed. The existing entry stays byte-identical
  at src/i18n/routes.ts line 68: fr wordpress-bloque-en-chine, es
  wordpress-bloqueado-en-china, de ist-wordpress-in-china-gesperrt.
CLIENT SIGN-OFF NEEDED: none. No client figure or name appears.
HARNESS ROWS CITED: none. harness/latest.json has no rows. Two hosts are
  waiting on it:
    ajax.googleapis.com, F1, Alibaba Cloud Zhangjiakou, 60-second abandon
    cdnjs.cloudflare.com and unpkg.com, F7, no vantage point on record
DEEP-TRANSLATE OWED AT PUBLISH: 9 passages in fr, 9 in es, 9 in de. Three
  passes each, main conversation, FR then ES then DE, none merged. The
  standfirst must be recounted against the 25-word ceiling after the third
  pass in each locale, because word counts move in translation. Hold all four
  locales for a single deploy: a German page asserting the retracted claim
  while the English page corrects it is worse than the current state.
BRIEF CORRECTIONS FOR PLAN.md:
  F6 datacentre date is 28 August 2026, not 29 August.
  F6 datacentre sample is 72 of 72, not 73 of 73.
  F6 consumer date is 30 August 2026, not 28 August, and the line is China
    Mobile in Beijing.
  F7 jsDelivr median from the datacentre is 660ms, not 493ms to 1,086ms. The
    p95 of 1,757ms matches within 23ms.
  F3 "Tag Manager intermittent" is better stated as a vantage point split:
    72 of 72 from the datacentre, 0 of 112 from a Beijing home line.
  T6-02's rationale says the article carries the flat block claim. It carries
    the flat correction instead. Same fix, wrong sentence named.
-->
