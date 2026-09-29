---
title: "Google Fonts in China: It Depends Where You Are"
slug: google-fonts-china
description: "Measured 111ms from a mainland datacentre and zero of 54 requests from a Beijing home line. Same host, same week. Why both numbers are real."
excerpt: "The Google Fonts answer changes with the vantage point, which is why every published version of it is wrong."
template: guide
author: echo-peng
category: Technology
---

<!-- PARTIAL DRAFT. STATUS: blocked, note "harness". DO NOT PUBLISH.
     T2 pieces do not publish without an original ChinaWebFoundry
     measurement carrying a named vantage point and a date.
     harness/latest.json read on 17 September 2026: rows[] empty, no row for
     fonts.googleapis.com or fonts.gstatic.com, harness/runs/ empty.
     Everything that does not depend on that measurement is drafted below.
     Every place the original measurement belongs is marked
     TODO: harness measurement. This file has NOT been through
     /content-quality-us and has no quality_passed_on date. -->

<!-- HERO SECTION -->

Google Fonts in China: it depends where you are

<!-- INTRODUCTION -->

<!-- T2 rule: the count, the vantage points and the dates go in the opening
     60 words. The third-party pair below is corroboration and is already
     verified twice in the ledger. The ChinaWebFoundry probe that the harness
     gate requires is still owed, so the opening is written to the shape it
     will take and the figures are marked. -->

Two tests, one week apart, on the same hostname. From an Alibaba Cloud (阿里云)
instance in Zhangjiakou on 28 August 2026, `fonts.googleapis.com` answered 72
of 72 requests at a median 111ms to first byte. From a Beijing China Mobile
(中国移动) home line on 30 August 2026, it answered 0 of 54. Both numbers are
real. Only one of them is your visitor.

TODO: harness measurement. The opening needs a ChinaWebFoundry probe of
`fonts.googleapis.com` and `fonts.gstatic.com` from both vantage points, with
run_id, completions as n of m, median TTFB and the test date, published
alongside the 21YunBox pair above. The gate is on the original measurement,
not on the corroboration.

<!-- SECTION: The two answers, and the test behind each -->

## The two answers, and the test behind each

<!-- TABLE 1 of 1 required for T2. Rows marked TODO stay empty until the
     harness runs. The two vantage points are separate columns and are never
     averaged, per SPEC.md measurement-table rules. -->

| Host | Mainland datacentre | Beijing consumer line | Completions | Verdict | Tested |
|---|---|---|---|---|---|
| `fonts.googleapis.com` | 111ms median TTFB | no response | 72 of 72 / 0 of 54 | Answers from one vantage point, not the other | 28 and 30 Aug 2026 |
| `fonts.gstatic.com` | 102ms median TTFB | no response | 72 of 72 / 0 of 6 | Answers from one vantage point, not the other | 28 and 30 Aug 2026 |
| `fonts.googleapis.com` (ChinaWebFoundry probe) | TODO: harness measurement | TODO: harness measurement | TODO | TODO | TODO |
| `fonts.gstatic.com` (ChinaWebFoundry probe) | TODO: harness measurement | TODO: harness measurement | TODO | TODO | TODO |

> From an Alibaba Cloud (阿里云) instance in cn-zhangjiakou, sampled every 10
> minutes for 12 hours on 28 August 2026 with a 30-second timeout,
> `fonts.googleapis.com` completed 72 of 72 requests at a median 111ms time to
> first byte and `fonts.gstatic.com` completed 72 of 72 at 102ms. Across 264
> page loads on 88 real websites from a Beijing China Mobile (中国移动)
> residential line on 30 August 2026, `fonts.googleapis.com` was requested 54
> times and answered 0, and `fonts.gstatic.com` was requested 6 times and
> answered 0.
> Source: 21YunBox, A Day of Third-Party Requests From Inside China, August
> 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

The two columns are not an average waiting to happen. They are two different
networks giving two different answers, and the one that matters is the one
your visitor is sitting on.

<!-- SECTION: Why a datacentre and a flat answer disagree -->

## Why a datacentre and a flat answer disagree

Google Fonts fails at the name, before anything reaches a server.

A mainland datacentre resolves the hostname, opens a connection and gets a
stylesheet back in about a tenth of a second. A home broadband line in Beijing
asks the same question and gets an answer it cannot use. Nothing is
misconfigured at either end. The resolver is different, the route is
different, and the result is different.

That is why the verdict moves by network, by resolver and by hour, and why
both of the confident sentences you will find online are wrong. Saying Google
Fonts is blocked in China ignores the datacentre column. Saying it is not
blocked in China ignores the column with your customers in it.

TODO: harness measurement. This section needs one ChinaWebFoundry run showing
the same hostname resolving differently from two named vantage points on the
same day, which is the cleanest form of the argument and nobody has published
it.

<!-- SECTION: What the split does to a page -->

## What the split does to a page

The font stylesheet sits in the head of the document, and that position is the
whole problem.

> Only `link` elements in the document's `<head>` can possibly block
> rendering. By default, a `link` element with `rel="stylesheet"` in the
> `<head>` blocks rendering when the browser discovers it during parsing.
> Source: MDN Web Docs, The External Resource Link element, page last
> modified 20 May 2026.
> https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link

So a request that never answers does not slow the page down by the time the
request takes. It holds the render until the browser gives up on its own
schedule. Your visitor in Shanghai looks at a white screen while a socket
waits for a reply that is not coming.

From a desk in Paris the site is fine. From a monitoring probe in a mainland
datacentre the site is also fine. The people who see it break are the people
you cannot reach on the phone.

<!-- SECTION: Self-hosting removes the variable -->

## Self-hosting removes the variable

Serve the font files from your own domain. That is the entire fix, and it is
why this site does it.

Downloading the woff2 files, putting them next to your CSS and declaring
`@font-face` yourself turns a request that depends on a resolver you do not
control into a request that comes from the same origin as the page. It
resolves because your site resolved. It arrives because your site arrived.

A preconnect hint to `fonts.gstatic.com` makes this worse rather than better,
because the hint fires earlier than the stylesheet would have. Check your
theme and your caching plugin for one before you assume you are clear. Our
guide to WordPress plugins that break in China covers where those hints get
added by default.

The same reasoning is why hosting inside the mainland is a separate decision
from this one, and our guide to what the Great Firewall blocks covers the DNS
layer in more detail.

<!-- SECTION: Frequently asked -->

## Frequently asked

**Is Google Fonts blocked in China?**

The honest answer needs a vantage point attached. From a mainland datacentre
the two font hosts answered every request in the August 2026 tests above. From
a Beijing home line the same hosts answered none. A flat yes or a flat no
throws away half the evidence.

**Does `fonts.google.com` work?**

TODO: harness measurement. The browsing interface at `fonts.google.com` is a
separate hostname from the two serving hosts and needs its own probe row
before this page gives it a verdict.

**Will a Chinese font mirror fix it?**

TODO: unsourced claim removed. Several mainland mirrors of the Google Fonts
API circulate. None of them has a ChinaWebFoundry measurement yet, and F42
bars a verdict on an untested dependency, so this page names none of them
until the harness has probed them.

**Does this affect anything besides fonts?**

Yes, and the mechanism is identical for any render-blocking resource on a
hostname that resolves differently inside the mainland. The fix is the same:
move the request to your own origin.

**How do I check my own site?**

Run it through the China Site Scanner. It lists the third-party hostnames your
pages request, which is the list this problem lives on.

<!-- CTA -->

CTA: Run a free China readiness scan

<!-- =====================================================================
FEATURE IMAGE: NOT GENERATED. The row is blocked at the harness gate and has
not been through /content-quality-us, so step 3 has not been reached. The
image prompt is written at iteration 13 of /createarticle, which this partial
draft has not run. Generate it when the gate clears.
===================================================================== -->

<!-- SCHEMA
Type: Article
FAQPage: no
Breadcrumb: Home > China Web Guide > Google Fonts in China: It Depends Where You Are
Author: Echo Peng
datePublished: TODO, blocked
Measurement: TODO: harness measurement. No run_id exists. harness/latest.json
rows[] is empty as of 17 September 2026.
-->

<!-- ASSET BRIEF
TABLES: One measurement table, two vantage-point columns, four rows. Two rows
  carry the 21YunBox August 2026 pair and are complete. Two rows are reserved
  for the ChinaWebFoundry probe and are empty pending the harness.
CHARTS: none
SCREENSHOTS: none
DOWNLOADS: none
INTERNAL LINKS:
  WordPress plugins that break in China -> /resources/china-web-guide/wordpress-plugins-china/
  what the Great Firewall blocks -> /resources/china-web-guide/great-firewall-what-it-blocks/
  China Site Scanner -> /china-site-scanner/
LOCALIZED SLUGS: none (T2 is English only, x-default on the English URL)
CLIENT SIGN-OFF NEEDED: none
HARNESS ROWS CITED: none. BLOCKED. Required before publish:
  fonts.googleapis.com, run_id TBD, mainland datacentre vantage
  fonts.googleapis.com, run_id TBD, consumer line vantage
  fonts.gstatic.com, run_id TBD, mainland datacentre vantage
  fonts.gstatic.com, run_id TBD, consumer line vantage
  fonts.google.com, run_id TBD, both vantages (for the FAQ answer)
-->
