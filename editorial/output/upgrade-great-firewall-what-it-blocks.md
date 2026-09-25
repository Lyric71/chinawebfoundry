---
title: "Attach the dependency table to the firewall page"
slug: upgrade-great-firewall-what-it-blocks
description: "Work order output: replacement copy, the 43-row dependency table and the change list for great-firewall-what-it-blocks in all four locales."
excerpt: "Puts the most complete verified dependency dataset we hold on the page most likely to be cited for it. Zero new URLs."
template: upgrade
author: cyril-drouin
category: Technology
---

<!-- T6 UPGRADE OUTPUT. This file is not a page and is never published as one.
     It carries the replacement copy, the dataset and the change list. The
     publish step applies the changes to the existing files named below.
     ZERO NEW URLS. -->

# Change list

Scope: `great-firewall-what-it-blocks`, four locales, four content files, plus
five source files for the reusable table. No route is added.

| # | File | Line | Action |
|---|---|---|---|
| 1 | `src/content/guides/great-firewall-what-it-blocks.md` | 3 | Replace `subtitle` |
| 2 | `src/content/guides/great-firewall-what-it-blocks.md` | 4 | Replace `summary` |
| 3 | `src/content/guides/great-firewall-what-it-blocks.md` | 9 | Set `updatedAt: 2026-09-25` |
| 4 | `src/content/guides/great-firewall-what-it-blocks.md` | 13 | Replace the opening paragraph with the F33 framing |
| 5 | `src/content/guides/great-firewall-what-it-blocks.md` | 43 to 52 | Correct the Google row of the blocked-services table and the paragraph under it |
| 6 | `src/content/guides/great-firewall-what-it-blocks.md` | after 62 | Insert the dependency table section and the payments correction |
| 7 | `src/content/guides-fr/great-firewall-what-it-blocks.md` | 3, 4, 9, 13, 43 to 52, after 62 | Same six, translated |
| 8 | `src/content/guides-es/great-firewall-what-it-blocks.md` | 3, 4, 9, 13, 43 to 52, after 62 | Same six, translated |
| 9 | `src/content/guides-de/great-firewall-what-it-blocks.md` | 3, 4, 9, 13, 43 to 52, after 62 | Same six, translated |
| 10 | `src/data/chinaDependencies.ts` | new file | The dataset. One record per host. Single source of truth |
| 11 | `src/components/pages/DependencyTable.astro` | new file | Renders the dataset. Server-rendered, no client JavaScript |
| 12 | `src/pages/wordpress-in-china.astro` | in the body | Import `DependencyTable` filtered to analytics and infrastructure. This is the reuse the work order asks for |
| 13 | `src/layouts/GuideLayout.astro` | 318 to 326, 481 to 487 | Move the table scroll wrapper from client-side JavaScript to build time |
| 14 | `astro.config.mjs` | markdown config | Register the rehype plugin that wraps tables |
| 15 | `editorial/scripts/build-dependency-table.mjs` | new file | Regenerates the markdown table in the four content files from file 10 |

All four locale files are 86 lines at HEAD and line-aligned, verified on 22
September 2026: `subtitle` is line 3, `summary` line 4, `updatedAt` line 9, the
opening paragraph line 13, the blocked-services table lines 43 to 51, the
Google paragraph line 52, and the last paragraph of that section line 62 in
every one of them. Check that again before applying, in case another piece has
touched the files since.

New URLs created: 0. Files 10, 11, 14 and 15 are source files, not routes.
File 12 edits a page that already exists. `src/i18n/routes.ts` is untouched;
`great-firewall-what-it-blocks` is already registered in `guideSlugs` for all
three locales. Expected sitemap entry count after the deploy: identical to
before, 316 on the count of record from 15 September 2026.

Translation at publish: changes 1, 2, 4, 5 and 6 are prose and go through
`/deep-translate`, three passes each, FR then ES then DE, in the main
conversation. Change 3 is a date. The table's data cells are hostnames, figures
and dates and are not translated; its column headers and its five verdict
strings are, and they live in `src/data/chinaDependencies.ts` keyed by locale
so one edit covers every page that renders them.

---

# CHANGE 1. Frontmatter `subtitle`, line 3

Reason: two problems, one of them a hard rule. The live subtitle names Google
Fonts inside a list of things that break, which is the flat claim the Do Not
Assert list bars in both directions (F6). It also asserts "900 million Chinese
internet users", a figure with no source anywhere in this programme. It is also
exactly 25 words, sitting on the house ceiling with no headroom.

REMOVE:

```
subtitle: "If your website loads Google Fonts, fires a Google Analytics tag, or embeds a YouTube video, it's already broken for 900 million Chinese internet users."
```

INSERT:

```
subtitle: "Blocked is the easy case. The dependency that answers and then never finishes is the one nobody on your team will ever see."
```

23 words. No unsourced figure, no barred claim, and it sets up the F33 framing
the work order asks the page to lead with.

---

# CHANGE 2. Frontmatter `summary`, line 4

Reason: the meta description should describe what the page now is. After this
work order the page's main asset is a 43-row measured dependency table, and the
live summary promises a list of famous blocked brands instead.

REMOVE:

```
summary: "China's Great Firewall blocks Google, Facebook, Slack and dozens more. Learn how it works technically and how foreign businesses can build around it."
```

INSERT:

```
summary: "What a website in China can and cannot reach, host by host, with the vantage point and the test date on every row."
```

114 characters, inside the 152 ceiling.

---

# CHANGE 3. Frontmatter `updatedAt`, line 9

REMOVE `updatedAt: 2026-05-01`. INSERT `updatedAt: 2026-09-25`.

`publishedAt: 2026-04-01` is untouched. F46 notes a strong freshness bias in
answer-engine retrieval, and this is the page the work order is betting on for
exactly that.

---

# CHANGE 4. Line 13, the opening paragraph

Reason: the work order asks the page to lead with F33, because "answers then
hangs" is the failure mode that reframes the whole category, and because
roughly the first 30% of a page is where answer engines take their citations
from (F46). The live opening leads with DNS poisoning, which is the mechanism
and not the consequence.

The live paragraph also carries a markdown link to `/wordpress-in-china/`. The
replacement keeps it, in the same sentence position, so no inbound link is
lost.

REMOVE the whole of line 13:

```
The Great Firewall doesn't work the way most people imagine. It's a layered system that poisons DNS queries, blocks entire IP ranges, reads the contents of your data packets in real time, and actively hunts for VPN connections. For foreign companies, that means any website with even one dependency on a blocked service - a font file, a tracking script, a map embed - is delivering a broken experience to users in China, and [a default WordPress install carries several of them](/wordpress-in-china/). And usually nobody on the team knows it's happening.
```

INSERT:

<!-- BEGIN REPLACEMENT COPY, CHANGE 4 -->

A block is loud. Somebody in the office notices, and it gets fixed. The
failure that costs you money is the quiet one: the host answers, the first
byte arrives in half a second, and then the request simply never finishes.

> Microsoft Clarity, Mixpanel, Typeform, Mailchimp, Wix and Algolia each
> returned a first byte and then completed 0 of 3 page loads inside 60
> seconds, measured from an Alibaba Cloud (阿里云) instance in cn-zhangjiakou
> on 28 and 30 August 2026.
> Source: 21YunBox, per-host China measurements, August 2026.
> https://www.21cloudbox.com/support/typeform-china.html

The page around those widgets renders normally. The widget stays empty, and
nothing anywhere logs an error. So a team outside China can look at the site
every morning for a year and see nothing wrong.

Underneath sits the machinery everyone writes about: poisoned DNS, blocked IP
ranges, packet contents read in real time. The firewall hunts VPN signatures
too, and [a default WordPress install carries several dependencies that meet
it](/wordpress-in-china/). All of that is real. Almost none of it is what
costs you enquiries. The open socket nobody is watching does that.

<!-- END REPLACEMENT COPY, CHANGE 4 -->

---

# CHANGE 5. Lines 43 to 52, the Google row and the paragraph under it

Reason: a correction, and the only one in this work order that fixes something
currently wrong. Line 45 lists "Fonts" among Google services that are blocked,
and line 52 says "Google is blocked. All of it. Search, Gmail, Maps, YouTube,
Google Ads, Google Analytics, Google Fonts." That is the flat claim the Do Not
Assert list names explicitly. F6 measured `fonts.googleapis.com` at 73 of 73
requests from a mainland datacentre and 0 of 54 from a Beijing home line in the
same week. Both numbers are real, and publishing either one alone is the error
this programme exists to stop making.

This is outside the work order's stated scope. It is applied anyway, on the
same precedent T6-05 set on 17 September 2026 when it corrected a live error at
line 166 of `google-analytics-china` that its own work order had not named. A
page cannot become the canonical dependency reference while carrying a barred
claim nine lines above the table.

REMOVE line 45:

```
| Google (all services) | Search, Gmail, Maps, YouTube, Analytics, Ads, Fonts |
```

INSERT:

```
| Google | Search, Gmail, Maps, YouTube, Analytics, Ads |
```

REMOVE the whole of line 52:

```
Google is blocked. All of it. Search, Gmail, Maps, YouTube, Google Ads, Google Analytics, Google Fonts. Every service under the Google umbrella. If your site loads a font from fonts.googleapis.com or fires a GA tracking tag, that request hangs for users in China. No error message shows up. The page just loads slower or a section doesn't render, and your team back home has no idea because they're browsing from outside the firewall.
```

INSERT:

<!-- BEGIN REPLACEMENT COPY, CHANGE 5 -->

Google search, Gmail, Maps, YouTube and Google Ads do not work from a mainland
connection. Google Analytics is the one that matters for a website, and it is
in the table below with its test date, like everything else on this page.
`www.google-analytics.com` last failed a GreatFire test on 24 July 2026. Fire
the tag from a page in China and the beacon never arrives, so the data is lost
whether or not the container script loaded.

Google Fonts is the exception, and people get it wrong in both directions, so
it gets an extra paragraph.

> From an Alibaba Cloud (阿里云) instance in cn-zhangjiakou on 28 August 2026,
> sampled every ten minutes for twelve hours, `fonts.googleapis.com` completed
> 72 of 72 requests at a median 111ms to first byte. From a Beijing China
> Mobile (中国移动) residential line on 30 August 2026, across 264 page loads,
> the same host answered 0 of 54.
> Source: 21YunBox, A Day of Third-Party Requests From Inside China, August
> 2026.
> https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Neither flat version of that claim survives the pair. Google Fonts resolves
from mainland datacentres and frequently does not resolve on consumer
connections, which is the whole argument for self-hosting: you remove a
variable that changes by network, by resolver and by hour.
`fonts.google.com`, the browsing interface, is unreachable either way.

<!-- END REPLACEMENT COPY, CHANGE 5 -->

---

# CHANGE 6. New section after line 62, before `## Strategies for foreign businesses`

This is the work order's main deliverable. The section is inserted whole,
between the end of the blocked-services section and the strategies section, so
the page reads problem, evidence, then remedy.

The table itself is generated from `src/data/chinaDependencies.ts` by
`editorial/scripts/build-dependency-table.mjs` and written between the two
marker comments. Do not hand-edit the rows in the content file; edit the data
file and rerun the script, or the four locales drift apart.

<!-- BEGIN REPLACEMENT COPY, CHANGE 6 -->

## Every dependency in the dataset, and when it was last tested

The pages that rank for these questions carry no evidence at all. Across every
compatibility page we have read at Chinafy, AppInChina and the smaller
agencies: no table, no test date, no named test location, no latency figure.
The measurement vendors publish figures. The pages telling you what breaks
don't cite them. The table below is that citation, row by row.

Be clear about whose numbers these are. Every row below comes from GreatFire
or from 21YunBox, cited and dated. None of them is ours yet. Our own probe is
being stood up now, from a mainland datacentre and a Beijing consumer line.
When it runs, our rows will sit next to the third-party ones and be labelled
as ours. They will not quietly replace them.

There are two kinds of evidence in it, and they answer different questions. A
reachability verdict says whether a host can be connected to at all. A timed
page load says how long the vendor's own site took to finish from a named probe
inside mainland China. The second is a proxy for the script endpoint your
visitor's browser calls; it is not that endpoint. Where the two disagree, both
are printed and neither is averaged.

The verdict column uses six values. Slow down on two of them, intermittent and
splits by vantage point. Those are where a host looks healthy to whoever last
checked it.


| Verdict | What it means |
|---|---|
| Reachable | Connects and completes |
| Slow | Completes, at a cost worth knowing |
| Answers then stalls | First byte arrives, the load never finishes inside 60 seconds |
| Intermittent | Interference on the recent conclusive tests, not a clean block |
| Blocked | No usable connection |
| Splits by vantage point | A datacentre and a home line give opposite answers on the same host |

<!-- BEGIN DEPENDENCY TABLE: GENERATED FROM src/data/chinaDependencies.ts, DO NOT EDIT -->

### Analytics

| Service | Host or target tested | Verdict | Measured | Vantage point | Source and date |
|---|---|---|---|---|---|
| Google Analytics | `www.google-analytics.com` | Blocked | Reachability verdict only | n/a | GreatFire, 24 Jul 2026 |
| Google Tag Manager | `www.googletagmanager.com` | Splits by vantage point | 72 of 72 at 118ms first byte, and 0 of 112 | Alibaba Cloud (阿里云) cn-zhangjiakou, and Beijing China Mobile (中国移动) | 21YunBox, 28 and 30 Aug 2026 |
| Meta Pixel | `connect.facebook.net` | Blocked | Reachability verdict only | n/a | GreatFire, 27 May 2026 |
| Hotjar | `static.hotjar.com` | Intermittent | 3 of 3 at 487ms first byte, LCP 1,660ms | Alibaba Cloud cn-zhangjiakou | GreatFire 18 Aug 2026, 21YunBox 30 Aug 2026 |
| Amplitude, script host | `cdn.amplitude.com` | Reachable | Reachability verdict only | n/a | GreatFire, 14 Sep 2026 |
| Amplitude, event host | `api.amplitude.com` | Reachable | Reachability verdict only | n/a | GreatFire, 10 Sep 2026 |
| Microsoft Clarity | `www.clarity.ms` | Answers then stalls | 0 of 3 inside 60s, first byte 541ms | Alibaba Cloud cn-zhangjiakou | 21YunBox 28 Aug 2026, GreatFire 15 Sep 2026 |
| Mixpanel | `api.mixpanel.com` | Answers then stalls | 0 of 3 inside 60s, first byte 391ms | Alibaba Cloud cn-zhangjiakou | 21YunBox, 28 Aug 2026 |
| Segment | Vendor site, host not named by the source | Slow | 3 of 3, first byte 900ms on one run and 1,084ms on another | Alibaba Cloud cn-zhangjiakou | 21YunBox, 28 and 30 Aug 2026 |
| Plausible | Vendor site, host not named by the source | Slow | 3 of 3, first byte 550ms, LCP 1,208ms | Alibaba Cloud cn-zhangjiakou | 21YunBox, 28 Aug 2026 |
| Matomo cloud | Vendor site, host not named by the source | Slow | 3 of 3, first byte 516ms, LCP 1,532ms | Alibaba Cloud cn-zhangjiakou | 21YunBox, 29 Aug 2026 |

### Forms and chat

| Service | Host or target tested | Verdict | Measured | Vantage point | Source and date |
|---|---|---|---|---|---|
| Typeform | Vendor site, host not named by the source | Answers then stalls | 0 of 3 inside 60s, first byte 907ms | Alibaba Cloud cn-zhangjiakou | 21YunBox, 28 Aug 2026 |
| Mailchimp | `cdn-images.mailchimp.com` | Answers then stalls | 0 of 3 inside 60s, first byte 812ms, paint 2.0s | Alibaba Cloud cn-zhangjiakou | 21YunBox 28 Aug 2026, GreatFire 10 Sep 2026 |
| hCaptcha | `api2.hcaptcha.com` | Reachable | Reachability verdict only | n/a | GreatFire, 14 Sep 2026 |
| Calendly | `calendly.com` | Reachable | Reachability verdict only | n/a | GreatFire, 10 Jun 2026 |
| Intercom | `widget.intercom.io` | Reachable | Reachability verdict only | n/a | GreatFire, 16 Jun 2026 |
| Zendesk | `static.zdassets.com` | Reachable | Reachability verdict only | n/a | GreatFire, 29 Apr 2026 |
| Drift | `js.driftt.com` | Untested | No test on record | n/a | GreatFire has never tested this host |
| Crisp | Not probed | Untested | No test on record | n/a | Owed by our own harness |
| Tawk.to | Not probed | Untested | No test on record | n/a | Owed by our own harness |

### Embeds

| Service | Host or target tested | Verdict | Measured | Vantage point | Source and date |
|---|---|---|---|---|---|
| Disqus | `disqus.com` | Blocked | 41 of 43 tested URLs blocked, 2 disrupted | n/a | GreatFire, 13 Sep 2026 |
| SoundCloud | `w.soundcloud.com` | Blocked | Reachability verdict only | n/a | GreatFire, 24 Jun 2026 |
| Spotify | `open.spotify.com` | Blocked | Reachability verdict only | n/a | GreatFire, 12 Sep 2026 |
| Instagram | `www.instagram.com` | Blocked | Reachability verdict only | n/a | GreatFire, 30 Aug 2026 |
| X, the timeline widget | `platform.twitter.com` | Blocked | Reachability verdict only | n/a | GreatFire, 7 Jul 2026 |
| Wistia | `fast.wistia.com` | Reachable | Reachability verdict only, six months old | n/a | GreatFire, 17 Mar 2026 |
| Loom | Not probed | Untested | No test on record | n/a | Owed by our own harness |

### Maps

| Service | Host or target tested | Verdict | Measured | Vantage point | Source and date |
|---|---|---|---|---|---|
| Mapbox, telemetry | `events.mapbox.com` | Blocked | Reachability verdict only, six months old | n/a | GreatFire, 12 Mar 2026 |
| Mapbox, tiles and API | `api.mapbox.com` | Reachable | Reachability verdict only | n/a | GreatFire, 31 Aug 2026 |
| OpenStreetMap tiles | `tile.openstreetmap.org` | Blocked | All 71 tested openstreetmap.org URLs blocked | n/a | GreatFire, 7 Sep 2026 |

### Platforms

| Service | Host or target tested | Verdict | Measured | Vantage point | Source and date |
|---|---|---|---|---|---|
| Wix | `wix.com` | Answers then stalls | 0 of 3 inside 60s, first byte 532ms | Alibaba Cloud cn-zhangjiakou | 21YunBox, 30 Aug 2026 |
| Shopify | `shopify.com` | Slow | 3 of 3, first byte 575ms, median load 3.6s | Alibaba Cloud cn-zhangjiakou | 21YunBox, 28 Aug 2026 |
| Webflow | `webflow.com` | Intermittent | Interference on 100% of the last 1 conclusive test | n/a | GreatFire, 23 Aug 2026 |
| Squarespace | `www.squarespace.com` | Reachable | 2 recent conclusive tests connected normally | n/a | GreatFire, 12 Sep 2026 |
| Netlify | Not probed | Untested | No test on record | n/a | Owed by our own harness |
| Sanity | Not probed | Untested | No test on record | n/a | Owed by our own harness |

### Infrastructure

| Service | Host or target tested | Verdict | Measured | Vantage point | Source and date |
|---|---|---|---|---|---|
| Algolia | Vendor site, host not named by the source | Answers then stalls | 0 of 3 inside 60s, first byte 1,027ms, paint 3.4s | Alibaba Cloud cn-zhangjiakou | 21YunBox, 28 Aug 2026 |
| Firebase | `firebase.google.com` | Intermittent | Interference on 100% of the last 2 conclusive tests | n/a | GreatFire, 14 Sep 2026 |
| AWS CloudFront | Vendor site, host not named by the source | Splits by vantage point | 3 of 3 at 665ms first byte, and 0 of 3 at 743ms | Alibaba Cloud cn-zhangjiakou, and Beijing China Mobile | 21YunBox, 28 and 30 Aug 2026 |
| Sentry | Vendor site, host not named by the source | Reachable | 3 of 3, first byte 252ms | Alibaba Cloud cn-zhangjiakou | 21YunBox, 28 Aug 2026 |
| Bootstrap CDN | Not probed | Untested | No test on record | n/a | Owed by our own harness |

### Payments

| Service | Host or target tested | Verdict | Measured | Vantage point | Source and date |
|---|---|---|---|---|---|
| PayPal | `www.paypal.com` | Reachable | 9 of 27 tested URLs disrupted, and the disrupted ones are checkout redirect paths | n/a | GreatFire, 18 May 2026 |
| Stripe | `js.stripe.com` | Untested | No test on record. See the note below: reachability is not the binding question here | n/a | Owed by our own harness |

### Not yet probed

Thirteen dependencies have no test record we will stand behind, either because
nobody has probed them or because the only verdict available is more than
ninety days old. They are listed rather than dropped, because the gap is itself
information: Crisp, Tawk.to, Loom, Sanity, Netlify, Bootstrap CDN,
`js.stripe.com`, the LinkedIn Insight Tag, Cloudflare Turnstile, Adobe Fonts,
Font Awesome, Marketo and the HubSpot tracking script.

Drift makes fourteen, and it shows how this goes wrong. Drift is commonly
reported as reachable, but that verdict is about the marketing site.
`js.driftt.com`, the host that actually runs in a visitor's browser, has never
been tested. A verdict on the wrong hostname is how most of this category gets
written.

<!-- END DEPENDENCY TABLE: GENERATED -->

The dates matter as much as the verdicts. A verdict from March tells you about
March. Two rows above are six months old, Wistia and the Mapbox telemetry
host, and both say so in their own cells. Wistia is a video embed a marketing
team might add this afternoon, on the strength of a reading taken in the
spring.

We last checked this table against its sources on 22 September 2026, and any
row that passes ninety days gets rechecked. If you're reading it well after
that date and a row matters to your build, test the host yourself first.

### Why Stripe sits outside this table

Stripe is the entry people expect to find in a table like this one. It belongs
to a different question. Whether `js.stripe.com` loads from Shanghai is beside
the point, because the constraint is a licensing one.

> Mainland China does not appear in Stripe's own list of countries where a
> Stripe account can be opened. Hong Kong does.
> Source: Stripe, Global availability, read 22 September 2026.
> https://stripe.com/global

Domestic acquiring does not exist for a mainland entity regardless of whether
the script reaches the browser, so tuning its delivery solves nothing. The
question worth answering is how to take Alipay (支付宝), WeChat Pay (微信支付)
and UnionPay (银联), and our guide to running a WooCommerce store in China is
the nearest thing we have published on it.

PayPal is a different case and is in the table, because it is reachable and
partially disrupted rather than unavailable, and because the disrupted paths
are the checkout redirects.

<!-- END REPLACEMENT COPY, CHANGE 6 -->

---

# The reusable table: what to build

The work order asks for a reusable component with columns for service,
hostname, verdict, latency, vantage point, source key and test date, populated
from F33 to F39 and grouped by category, imported by at least one other page.

## The substitution, and why

The guides collection is loaded with `glob({ pattern: '**/*.md' })` in
`src/content.config.ts` and `GuideLayout.astro` renders the whole body through
a single `<slot />`. A `.md` file cannot import an Astro component, and there
is no insertion point inside the body for the layout to render one at. So the
component cannot be the thing the guide body uses, however the work order is
worded. Per the standing rule that the repo wins over the runbook, here is what
the repo can actually do, with the substitution declared rather than hidden.

One dataset, two renderers:

| File | What it is | Who reads it |
|---|---|---|
| `src/data/chinaDependencies.ts` | The dataset. One typed record per host. The single source of truth for every figure, date and verdict | Both renderers |
| `src/components/pages/DependencyTable.astro` | Renders the dataset as a table. Props: `categories?: Category[]`, `locale` | Any `.astro` page |
| `editorial/scripts/build-dependency-table.mjs` | Renders the same dataset as markdown into the four content files, between the marker comments | The four guide files |

Reuse is real under this arrangement: one edit to the dataset changes the table
everywhere it appears, in every locale, which is the maintenance property the
work order is actually after. `src/pages/wordpress-in-china.astro` imports the
component directly and renders the analytics and infrastructure categories,
which satisfies criterion six as written and is a page that wanted a
measurement block anyway.

## The record shape

```ts
export type Verdict =
  | 'reachable'
  | 'slow'
  | 'answersThenStalls'
  | 'intermittent'
  | 'blocked'
  | 'splitsByVantage'
  | 'untested';

export type Category =
  | 'analytics'
  | 'formsAndChat'
  | 'embeds'
  | 'maps'
  | 'platforms'
  | 'infrastructure'
  | 'payments';

export interface DependencyRow {
  service: string;
  /** Null where the source names the vendor site rather than a hostname. */
  host: string | null;
  category: Category;
  verdict: Verdict;
  /** Completions as n of m and the timing. Never a percentage of three attempts. */
  measured: string;
  /** Null for a reachability verdict, which has no vantage point. */
  vantage: string | null;
  sourceKey: 'GreatFire' | '21YunBox' | 'ChinaWebFoundry' | 'vendor';
  sourceUrl: string;
  /** ISO date the source states, never the date we read it. */
  testedOn: string | null;
  /** Set on every row. The page is reviewed when the earliest one expires. */
  reviewBy: string;
}
```

Every row in change 6 maps onto one record. A row with `verdict: 'untested'`
carries `measured: 'No test on record'` and `testedOn: null`, and the component
renders it in the not-yet-probed group rather than inventing a cell.

## The server-rendering bug this work order has to fix first

Criterion three says the table must be server-rendered in the HTML source,
verified with JavaScript disabled. Criterion four says the container must
scroll horizontally at 390px without the body scrolling sideways. The first
passes today and the second does not, and the reason is in the layout.

`GuideLayout.astro` styles `.table-wrapper` with `overflow-x: auto` at line
318, and sets `min-width: 400px` on every table under 640px at line 326. But
the wrapper element is created at line 481 by a client-side script that runs
`document.querySelectorAll('.guide-content table')` and inserts a `div` around
each table in the browser. With JavaScript disabled there is no wrapper, so a
400px-wide table inside a 390px viewport overflows the body, which is exactly
what criterion four forbids. A forty-three-row table with six columns makes an
existing latent bug into a visible one.

Fix: move the wrap to build time.

1. Add a small rehype plugin that wraps every `<table>` node in
   `<div class="table-wrapper">`, and register it under `markdown.rehypePlugins`
   in `astro.config.mjs`. Every guide in every locale gets the wrapper in the
   HTML source, with no JavaScript.
2. Delete the five-line wrapping script at the top of the `<script>` block in
   `GuideLayout.astro`, lines 481 to 487. Leave the table-of-contents script
   below it alone.
3. `DependencyTable.astro` emits its own wrapper, so the component path needs
   nothing from the plugin.

Verify by running the build, opening the emitted HTML for the page and
searching for `table-wrapper` in the source, then loading it at 390px with
JavaScript disabled and confirming `document.body.scrollWidth` equals the
viewport width.

---

# Acceptance criteria, checked

| Criterion | Result |
|---|---|
| Every table row has a non-empty vantage point cell and a non-empty date cell, or is explicitly marked untested | PASS, with the column semantics stated. 43 data rows, counted. 35 carry a test date. 8 are marked untested and carry `No test on record`. Zero rows have an empty vantage cell or an empty source cell. The vantage point cell reads `n/a` on reachability rows, because a GreatFire verdict has no vantage point and inventing one would be worse than an empty cell. The distinction is explained in the two paragraphs above the table rather than left for the reader to infer. |
| No row asserts a verdict for any of the eleven dependencies listed in F42 without a fresh probe | PASS. All thirteen F42 entries appear as untested. Grepped the finished copy for all thirteen names: every hit is inside the not-yet-probed list or the Stripe row, and neither carries a verdict. The 21YunBox cdnjs page states BootstrapCDN and Font Awesome both failed to complete on its 28 August probe; that is in the ledger for the harness to confirm and is deliberately not in the copy. |
| The table is server-rendered in the HTML source, verified with JavaScript disabled | PASS after change 13 and 14. Markdown tables compile to HTML at build. The wrapper does not, today; see the fix above. |
| The table container scrolls horizontally at 390px without the page body scrolling sideways | FAILS TODAY, PASSES AFTER THE FIX. This is the one criterion that required a code change rather than copy, and it is the reason changes 13 and 14 exist. |
| The F33 framing appears within the first 30% of the page by word count | PASS. It is the first sentence of the page. The finished page runs 3,323 body words, so the first 30% is the first 997, and the F33 passage plus its blockquote occupies words 1 to 106. |
| The component is imported by at least one other page, proving reuse | PASS AS WRITTEN, by a substituted route. `src/pages/wordpress-in-china.astro` imports `DependencyTable.astro`. The guide itself cannot import it, because the guides collection is markdown only; it shares the dataset through the generator script instead. Declared above rather than quietly redefined. |
| Zero new URLs | PASS. Six files edited, five source files added, no route added, `src/i18n/routes.ts` untouched. Verify the sitemap count before and after the build. |

---

# Notes for PLAN.md

Not edited by hand. `editorial/CLAUDE.md` says to regenerate briefs from the
plan rather than patch them, so these go to whoever next touches section 4.

1. **F35's hCaptcha intermittency has expired.** The bank says
   `api2.hcaptcha.com` is intermittent and that this matters because it is the
   endpoint a challenge needs. GreatFire read it as not blocked on the last
   conclusive test, 14 September 2026.
2. **F35's Calendly date is wrong.** Bank says 18 August 2026, source says 10
   June 2026.
3. **F35's Drift verdict is on the wrong host.** The bank says Drift is not
   blocked. The widget host, `js.driftt.com`, has never been tested by
   GreatFire at all, and the widget host is the one that runs in a visitor's
   browser.
4. **F35's Intercom and Zendesk can come off the unverified list.**
   `widget.intercom.io` not blocked, 16 June 2026. `static.zdassets.com` not
   blocked, 29 April 2026. Both stale, both dated, neither on the F42 eleven.
5. **F36's Disqus date and split are both slightly off.** 13 September 2026,
   and 41 blocked plus 2 disrupted of 43.
6. **F36's X/Twitter date is wrong.** 7 July 2026, not 25 April 2026.
7. **F36's Wistia date is wrong.** `fast.wistia.com` reads 17 March 2026, not
   26 June 2026. Six months old.
8. **F37's Mapbox framing no longer holds.** `api.mapbox.com` reads not blocked
   on 31 August 2026, not intermittent. The telemetry host is still blocked, so
   the interesting half survives; the half-working-map story does not.
9. **F38's Webflow and Squarespace split does not hold for Squarespace.**
   `www.squarespace.com` reads not blocked on two recent conclusive tests, 12
   September 2026. Webflow still reads disrupted, 23 August 2026.
10. **F39 calls Firebase blocked. GreatFire calls it disrupted**, 14 September
    2026. Disrupted is not blocked, and this plan exists to stop that
    conflation. F39's "100% packet loss from Shanghai" has no fetchable source
    and was cut.
11. **F40's PayPal date is wrong.** 18 May 2026, not 27 August 2026. The 9 of
    27 disrupted count is right.
12. **The source key needs a method note.** F33 to F39 credit timings to "21YB"
    as though they were measurements of the script endpoint a browser calls.
    They are timed loads of the vendor's own website from a named mainland
    probe. That is a good proxy and it is not the same thing, and every piece
    that cites them should say which it is.
13. **The five-value verdict set needs a sixth value.** `SPEC.md` lists
    reachable, slow, answers then stalls, intermittent and blocked. Three
    hosts in this dataset, Google Tag Manager, AWS CloudFront and unpkg, give
    opposite answers from a datacentre and from a home line, which is none of
    the five. This page uses "splits by vantage point" and the set should take
    it.
14. **`SPEC.md`'s five-column table cap conflicts with its own measurement-table
    rule**, which requires six fields per row before a service name. This table
    uses six columns and folds the brief's seven fields into them: latency sits
    inside `Measured`, and the source key and test date share one cell. Worth
    stating the cap as "five in prose tables, six in measurement tables".

---

# Word count

Replacement copy only, excluding the change list, the build notes, the
acceptance table and these notes.

| Passage | Words |
|---|---|
| Change 1, subtitle | 23 |
| Change 2, summary | 22 |
| Change 4, opening paragraphs | 187 |
| Change 5, Google and Google Fonts | 223 |
| Change 6, narrative and Stripe section | 644 |
| Change 6, table cells and headers | 1,300 |

Counted after the 18-pass quality loop, not before it. The live page body is
1,146 words. The three removed passages come to 177. Added copy comes to
2,354. So the page lands at 3,323 body words after the upgrade. No target
applies to a T6 upgrade; the figure is here so the 30% calculation in the
acceptance table can be checked.
