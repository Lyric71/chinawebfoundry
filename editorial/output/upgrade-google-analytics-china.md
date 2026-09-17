---
title: "Upgrade google-analytics-china with F34"
slug: upgrade-google-analytics-china
description: "Work order output: replacement copy and change list for the google-analytics-china guide in all four locales. Zero new URLs."
excerpt: "Adds the measured analytics table, the split-host failure mode and an independent PIPL section to a page that already ranks."
template: upgrade
author: cyril-drouin
category: Technology
---

<!-- T6 UPGRADE OUTPUT. This file is not a page and is never published as one.
     It carries the replacement copy and the change list. The publish step
     applies the changes to the existing files named below. ZERO NEW URLS. -->

# Change list

Scope: `google-analytics-china`, four locales, four files. No other file is
touched by the content changes.

| # | File | Line | Action |
|---|---|---|---|
| 1 | `src/content/guides/google-analytics-china.md` | 3 | Replace `subtitle` |
| 2 | `src/content/guides/google-analytics-china.md` | 9 | Set `updatedAt: 2026-09-18` |
| 3 | `src/content/guides/google-analytics-china.md` | 140 | Replace the PIPL paragraph with two new sections |
| 4 | `src/content/guides/google-analytics-china.md` | 166 | Replace the closing dependency sentence |
| 5 | `src/content/guides-fr/google-analytics-china.md` | 3, 9, 140, 166 | Same four, translated |
| 6 | `src/content/guides-es/google-analytics-china.md` | 3, 9, 140, 166 | Same four, translated |
| 7 | `src/content/guides-de/google-analytics-china.md` | 3, 9, 140, 166 | Same four, translated |

All four locale files are line-aligned at HEAD, verified on 17 September 2026:
the PIPL paragraph is line 140 in every one of them and the closing dependency
sentence is line 166 in every one of them. Check that again before applying,
in case another piece has touched the files since.

New URLs created: 0. No file is added, no route is added, no entry in
`src/i18n/routes.ts` changes. `guideSlugs['google-analytics-china']` already
exists and is untouched. Expected sitemap entry count after the deploy:
identical to before.

Translation at publish: changes 1, 3 and 4 are prose and go through
`/deep-translate` in the main conversation, three passes each, FR then ES then
DE. Change 2 is a date and is not translated.

---

# CHANGE 1. Frontmatter `subtitle`, line 3

Reason: the house excerpt ceiling is 25 words (SPEC.md). The live subtitle is
32 words. Counted, not estimated. The replacement is 23 words and keeps the
same promise.

REMOVE:

```
subtitle: "GA4 is blocked behind the Great Firewall. You can still run it for everyone else, as long as the decision to load it happens on the server instead of in the browser."
```

INSERT:

```
subtitle: "GA4 is blocked behind the Great Firewall. You can still run it for everyone else, if the load decision happens on the server."
```

`title` is 51 characters and `summary` is 149. Both are inside the house
ceilings of 52 and 152 and are left alone.

---

# CHANGE 2. Frontmatter `updatedAt`, line 9

REMOVE: `updatedAt: 2026-08-29`

INSERT: `updatedAt: 2026-09-18`

`publishedAt: 2026-08-29` stays. `order: 31` stays. This is an edit to a live
page, not a republication.

---

# CHANGE 3. Line 140, the PIPL paragraph

Reason: the work order requires the PIPL argument to stand on its own, stated
separately from reachability. It currently sits at the tail of another section
as an aside that undercuts itself ("Nice to have, though it isn't why you'd
build this"). It also requires the measured alternatives table, which has no
home on the page today.

REMOVE the whole of line 140:

```
There's a compliance dividend too. Under PIPL, moving personal data out of mainland China needs a legal basis, and GA's client ID plus IP address counts as personal data. A visitor whose browser never contacts Google generates no cross-border transfer to justify. Nice to have, though it isn't why you'd build this.
```

INSERT in its place, between the section "What this costs you in GA4" and the
section "Testing it without flying to Shanghai":

<!-- BEGIN REPLACEMENT COPY, CHANGE 3 -->

## The rest of your analytics stack has the same problem

Pulling GA out and dropping in another hosted script moves the problem to a
different hostname. Most of the obvious replacements are foreign hosts too,
and several of them fail in a way that is harder to catch than a clean block.

The table holds two kinds of evidence, and they answer different questions.
GreatFire tests whether a host is reachable at all. 21YunBox times real page
loads from a probe inside the mainland. They disagree on Hotjar, and that
disagreement is the most useful thing here.

| Tool | What the tests show | Completions | Source and date |
|---|---|---|---|
| Hotjar | Disrupted on GreatFire's probes, yet completes from an Alibaba Cloud instance at 487ms first byte | 3 of 3 from the datacentre | GreatFire 18 Aug 2026; 21YunBox 30 Aug 2026 |
| Meta Pixel | `connect.facebook.net` blocked | none | GreatFire 27 May 2026 |
| Microsoft Clarity | Answers quickly, then stalls. First byte 541ms, nothing finished inside 60 seconds | 0 of 3 | 21YunBox 28 Aug 2026 |
| Mixpanel | The same shape. First byte 391ms, nothing finished inside 60 seconds | 0 of 3 | 21YunBox 28 Aug 2026 |
| Segment | Completes, slowly. First byte 900ms on one run and 1,084ms on another | 3 of 3 | 21YunBox 28 and 30 Aug 2026 |
| Plausible | Completes. First byte 550ms, largest contentful paint 1,208ms | 3 of 3 | 21YunBox 28 Aug 2026 |
| Matomo cloud | Completes. First byte 516ms, largest contentful paint 1,532ms | 3 of 3 | 21YunBox, reviewed 29 Aug 2026 |

> Every timing in the table above was measured from a probe inside mainland
> China on Alibaba Cloud (阿里云) cn-zhangjiakou, three runs per tool with a
> 60-second abandon, between 28 and 30 August 2026.
> Source: 21YunBox, per-tool China measurements, August 2026.
> https://www.21cloudbox.com/support/microsoft-clarity-china.html

A datacentre in Zhangjiakou is not a flat in Beijing. Read those numbers as
the best case, and assume your visitors get something worse.

That gap is the whole reason Hotjar has two verdicts. 21YunBox ran its test
from a rack. Whatever GreatFire's probes saw, they saw something else, and a
host that answers a datacentre can still ignore a home broadband line. Until
you've measured Hotjar on your own traffic, assume it can do both.

Clarity and Mixpanel are the two rows worth reading twice. Neither host is on
a block list. GreatFire had `www.clarity.ms` answering normally on 15
September 2026, and `api.mixpanel.com` answering normally when it last tested
on 17 April 2026. Both still returned a first byte in under 600ms and then
finished nothing inside a minute.

A hard block eventually throws an error that somebody notices. A stalled
request sits there quietly until the browser gives up, and your session
recording is simply thinner than it should be, in a way no alert will ever
tell you about.

### Amplitude, and the failure mode worth testing for

Amplitude loads its script from one hostname and posts events to another.
When a product splits like that, the two hostnames can get different answers
from the same network. The script loads and the events never post. Your
dashboard reads as healthy either way.

In April 2026 GreatFire had `cdn.amplitude.com` reachable while
`api.amplitude.com` was blocked, which is exactly that shape. We re-tested
both hostnames for this update on 17 September 2026.

> `cdn.amplitude.com` not blocked, last tested 14 September 2026, all 1 recent
> conclusive test connected normally. `api.amplitude.com` not blocked, last
> tested 10 September 2026, 0 of 1 disrupted in the last 90 days. Across 13
> tested amplitude.com URLs GreatFire records 1 blocked, 3 disrupted and 9
> accessible.
> Source: GreatFire, September 2026.
> https://en.greatfire.org/https/api.amplitude.com

The April split didn't reproduce in September. Both of those readings rest on
a single conclusive test, which is thin in either direction, and the
domain-wide spread says the picture is still mixed.

Which is the actual lesson. A verdict you read somewhere has a date on it, and
five months is long enough for it to stop being true. Test the hostname your
script loads from and the hostname it posts to, separately, from a network in
the country you care about.

### What to run instead

Baidu Tongji (百度统计) first, if the mainland market matters to you. Its
servers are in the country, so the request never crosses a border, and its
reporting is built around Baidu (百度) traffic, which is the traffic you're
trying to understand. Sensors Data (神策) and GrowingIO are the heavier
domestic options.

Otherwise, self-host. Plausible and Matomo both completed every run in the
table, and both can be installed on your own mainland server. That turns a
foreign dependency into a first-party request and settles the legal question
in the next section at the same time.

One caveat, since this page is mostly about a gate. A self-hosted analytics
endpoint inside China needs no gate at all, because there's nothing to stop.
Keep the `/ga.js` route for GA and for whatever else you load from a foreign
host, and let the domestic tool run for everybody.

## PIPL applies even to the hosts that answer

Reachability and legality are separate questions, and the second one holds
whether or not a host replies.

Google Analytics sends a client ID and an IP address to Google. Under China's
Personal Information Protection Law both are personal information, and sending
them out of the mainland is a cross-border transfer.

> Where a personal information handler provides personal information outside
> the territory of the People's Republic of China, it shall inform the
> individual of the overseas recipient's name and contact details, the purpose
> and method of handling, the categories of personal information, and the way
> the individual may exercise their rights against that recipient, and shall
> obtain the individual's separate consent.
> Source: Cyberspace Administration of China (中央网络安全和信息化委员会办公室),
> Personal Information Protection Law of the People's Republic of China,
> Article 39. Adopted 20 August 2021, in force 1 November 2021.
> https://www.cac.gov.cn/2021-08/20/c_1631050028355286.htm

Separate consent means its own opt-in for that transfer, rather than one line
inside a banner that covers everything at once.

This argument doesn't move when the network does. If a blocked host starts
answering next month, or Google shifts a hostname, the transfer is still a
transfer. The gate closes both questions at once: no request leaves the
browser, so there's no transfer to find a legal basis for. Our guide to PIPL
and the Data Security Law covers the thresholds and the filing routes.

<!-- END REPLACEMENT COPY, CHANGE 3 -->

---

# CHANGE 4. Line 166, the closing dependency sentence

Reason: a correction, and the only one in this work order that fixes
something currently wrong. The live sentence gives a verdict on Intercom,
which F42 and the Do Not Assert list bar until the harness has probed it, and
on Hotjar, which measured 3 of 3 completions from a mainland datacentre on 30
August 2026. Neither is a hanging socket on the evidence we hold.

REMOVE the whole of line 166:

```
Chat widgets, Maps embeds, YouTube players, reCAPTCHA, hosted font stylesheets, Intercom, Hotjar. Each of those is a hanging socket for a visitor in China, and each is one small endpoint away from being harmless.
```

INSERT:

<!-- BEGIN REPLACEMENT COPY, CHANGE 4 -->

Chat widgets, Maps embeds, YouTube players, reCAPTCHA, hosted font
stylesheets. Any of those can leave a socket hanging for a visitor in China,
and any of them is one small endpoint away from being harmless. Which ones do
it on your site is a question your own testing answers, on the date you test.

<!-- END REPLACEMENT COPY, CHANGE 4 -->

---

# Acceptance criteria, checked

| Criterion | Result |
|---|---|
| No new URL is created anywhere in the repo | PASS. Four existing files edited. No file added, no route added, `src/i18n/routes.ts` untouched. |
| The Amplitude split has its own subsection with both hostnames named | PASS, with a correction. `### Amplitude, and the failure mode worth testing for` names `cdn.amplitude.com` and `api.amplitude.com`. See the note below: the split itself no longer reproduces, so the subsection carries the failure mode and both current dated verdicts instead of the stale April verdict. |
| Every verdict in the table carries a source key and a date | PASS. Seven rows, each with publisher and date in its own column. The shared vantage point is in the blockquote under the table. |
| The PIPL argument is presented as independent of reachability, in its own section | PASS. `## PIPL applies even to the hosts that answer`, opening on the separation, closing on the point that the argument survives a host changing state. |
| Internal links from `cookie-consent-china` and the analytics service page resolve to this URL and return 200 | CANNOT BE MET AS WRITTEN. Neither page exists. See the substitution below. |
| `sitemap.xml` entry count is unchanged after the deploy | PASS by construction, zero new URLs. Verify at publish by counting entries before and after the build. |

## The one criterion the repo cannot satisfy, and what replaces it

`cookie-consent-china` does not exist in this repo. `grep -rl cookie-consent-china src/`
returns nothing, and it is not in `src/content/guides/`, in any locale
collection, or in `src/i18n/routes.ts`. There is also no analytics service
page: the ten services in `src/content/services/` are Strategy Audit, China
Hosting, China Migration, Technical Integration, Plugins and Extensions, UX
and UI Design, Chinese Content, Baidu SEO, GEO and Maintenance and Support.
Neither target was ever built, so no link from either can resolve.

Worse, `google-analytics-china` currently has no inbound internal link from
any page at all. The only repo reference to it is the slug registration in
`src/i18n/routes.ts`.

Substitution, per the standing rule that the repo wins over the runbook. Two
inbound links from pages that do exist and are topically adjacent, each placed
inside a sentence that is already there rather than bolted on:

| From | Anchor text | To |
|---|---|---|
| `china-data-privacy-pipl-dsl` | running Google Analytics from behind the firewall | `/resources/china-web-guide/google-analytics-china/` |
| `great-firewall-what-it-blocks` | geo-gating a blocked tag at the edge | `/resources/china-web-guide/google-analytics-china/` |

Both anchors are new strings site-wide, so the anchor distribution rule holds.
This is the only part of the work order that touches a file outside the four
locale copies of the page, and it is two sentences. Flagged rather than
assumed: if the reviewer wants scope held to the four files, drop this and the
page keeps zero inbound links, which is the status quo.

---

# Notes for PLAN.md

Not edited by hand. `editorial/CLAUDE.md` says to regenerate briefs from the
plan rather than patch them, so these go to whoever next touches
`PLAN.md` section 4.

1. **F34's Amplitude split is stale.** The bank says `cdn.amplitude.com`
   reachable, `api.amplitude.com` blocked (GF 2026-04-22). On 17 September
   2026 GreatFire reports both not blocked, tested 14 and 10 September 2026.
   The brief calls this "the most useful single fact on the page". It is no
   longer a fact. The failure mode it describes is still worth teaching and
   the replacement copy teaches it.
2. **F34's source attribution is misleading.** Five timings are credited to
   "21YB", which the fact bank's source key defines as the 21YunBox study
   *A Day of Third-Party Requests From Inside China*. That study tests five
   hosts and none of the five tools. The figures are real but they live on
   21YunBox's per-tool support pages, each with its own review date. Two
   previous runs cut good figures over this same ambiguity. The URLs are now
   in `sources/verified-sources.md`.
3. **Two F34 dates are wrong.** Hotjar is GreatFire 18 August 2026, not 20
   August. Meta Pixel is 27 May 2026, not 27 July. Source wins, same
   precedent as F19 and F6.
4. **F34 omits that Hotjar completes from a datacentre.** It records the
   GreatFire disruption verdict only. 21YunBox measured 3 of 3 completions at
   487ms on 30 August 2026. Hotjar is a vantage-point split, like F6.
5. **Clarity and Mixpanel are not blocked.** F34 does not say they are, but
   the bare numbers invite it. Both hosts answer; neither completes. That is
   F33's shape and the entries should cross-reference it.
6. **T6-05's fifth acceptance criterion names two pages that do not exist.**
   See above.

---

# Word count

Replacement copy only, excluding this change list, the frontmatter and every
HTML comment. Counted with `wc -w` on the extracted copy, not estimated.

| | Prose only | With table and blockquotes |
|---|---|---|
| Change 3 | 728 | 1,115 |
| Change 4 | 54 | 54 |
| Inserted, total | 782 | 1,169 |

Removed: 52 words at line 140, 34 words at line 166. 86 in total.

Live page body before: 1,835 words, frontmatter excluded. After: 2,918. Net
change plus 1,083.

The work order's risk note says to cut the general PIPL explanation and link
to `china-data-privacy-pipl-dsl` if the page runs long. Done that way from the
start: the PIPL section is 183 words, carries one quoted article and one
internal reference, and explains no threshold. The length that did arrive came
from the measured table, which is the part the work order exists to add.

<!-- =====================================================================
FEATURE IMAGE: NONE.

T6 skips step 3 unless the work order asks for an image, and this work order
asks for none. The live page keeps its existing hero at
/images/guides/google-analytics-china.webp, which is unchanged by this
upgrade. Row goes from quality_passed straight to image_ready with "no image"
noted, per the status table in SPEC.md.
===================================================================== -->

<!-- SCHEMA
Type: Article
FAQPage: no. The page has no FAQ section and this work order does not add one.
Breadcrumb: Home > China Web Guide > Google Analytics in China without slowing your site
Author: Cyril Drouin
datePublished: 2026-08-29 (unchanged). dateModified: 2026-09-18.
Measurement: none of our own. Every figure is third-party and attributed in
the copy. No harness row is cited, and none is required: T6 is not gated.
-->

<!-- ASSET BRIEF
TABLES:
  1. Measured analytics table, 7 rows, 4 columns, in Change 3. Data from
     GreatFire per-host pages and 21YunBox per-tool support pages, August and
     September 2026. Not from a harness run.
  2. The existing 3-row table in "What this costs you in GA4" is unchanged.
CHARTS: none
SCREENSHOTS: none
DOWNLOADS: none
INTERNAL LINKS:
  PIPL and the Data Security Law -> /resources/china-web-guide/china-data-privacy-pipl-dsl/
  (inbound, see substitution section)
  running Google Analytics from behind the firewall -> /resources/china-web-guide/google-analytics-china/  [placed in china-data-privacy-pipl-dsl]
  geo-gating a blocked tag at the edge -> /resources/china-web-guide/google-analytics-china/  [placed in great-firewall-what-it-blocks]
LOCALIZED SLUGS: already registered and unchanged.
  fr google-analytics-chine · es google-analytics-china · de google-analytics-china
CLIENT SIGN-OFF NEEDED: none
HARNESS ROWS CITED: none
-->
