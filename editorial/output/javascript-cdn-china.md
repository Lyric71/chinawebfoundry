---
title: "Which JavaScript CDNs Work in China"
slug: javascript-cdn-china
description: "Google Hosted Libraries returns no first byte at all. cdnjs, unpkg and jsDelivr answer in under a second. Measured, with the vantage points."
excerpt: "Google Hosted Libraries halts the render. cdnjs, unpkg and jsDelivr do not. The difference matters more than the category."
template: guide
author: echo-peng
category: Technology
---

<!-- PARTIAL DRAFT. STATUS: blocked, note "harness". DO NOT PUBLISH.
     T2 pieces do not publish without an original ChinaWebFoundry
     measurement carrying a named vantage point and a date.
     harness/latest.json read on 22 September 2026: generated null,
     vantages [], rows [] and harness/runs/ holding only .gitkeep. No row for
     ajax.googleapis.com, cdnjs.cloudflare.com, unpkg.com or
     cdn.jsdelivr.net, which are the four hosts this page is about.
     Everything that does not depend on that measurement is drafted below.
     Every place the original measurement belongs is marked
     TODO: harness measurement. This file has NOT been through
     /content-quality-us and has no quality_passed_on date.

     The third-party figures below are new to this programme and are good:
     they carry a named vantage point, a stated method and a date, and they
     passed both checks on 22 September 2026. They are corroboration. The
     gate is on who took the measurement, not on how good it is. -->

<!-- HERO SECTION -->

Which JavaScript CDNs work in China

<!-- INTRODUCTION -->

<!-- T2 rule: the count, the vantage points and the dates go in the opening
     60 words. -->

Four hosts, one probe, one day. From an Alibaba Cloud (阿里云) instance in
cn-zhangjiakou on 28 August 2026, `ajax.googleapis.com` returned no first byte
in any of three runs, each abandoned at 60 seconds. On the same probe
`cdnjs.cloudflare.com` answered in a median 478ms, `cdn.jsdelivr.net` in 769ms
and `unpkg.com` in 824ms, three runs of three each.

The category answer is wrong in both directions. There is no verdict on CDNs.
There are four hostnames, and one of them takes your page down.

TODO: harness measurement. The opening needs a ChinaWebFoundry probe of all
four hosts from both vantage points, with run_id, completions as n of m,
median time to first byte and the test date.

<!-- SECTION: Four hostnames, four behaviours -->

## Four hostnames, four behaviours

<!-- TABLE 1 of 2. The two vantage points are separate columns and are never
     averaged, per the SPEC measurement-table rules. Completions are n of m,
     never a percentage of three attempts. -->

| Host | Mainland datacentre | Beijing consumer line | Completions | Verdict | Tested |
|---|---|---|---|---|---|
| `ajax.googleapis.com` | no first byte, abandoned at 60s | TODO: harness measurement | 0 of 3 | Blocked | 28 Aug 2026 |
| `cdnjs.cloudflare.com` | 478ms median first byte | no figure published | 3 of 3 | Reachable | 28 Aug 2026 |
| `cdn.jsdelivr.net` | 769ms median first byte | completed | 3 of 3 and 36 of 36 | Reachable | 28 and 30 Aug 2026 |
| `unpkg.com` | 824ms median first byte | 1,026ms first byte, no load finished | 3 of 3 and 0 of 3 | Answers then stalls | 28 and 30 Aug 2026 |
| all four, ChinaWebFoundry probe | TODO: harness measurement | TODO: harness measurement | TODO | TODO | TODO |

> From a probe inside mainland China on an Alibaba Cloud (阿里云)
> cn-zhangjiakou instance, three runs on 28 August 2026: Google Hosted
> Libraries produced no first byte in any run, each abandoned at the 60-second
> limit. cdnjs completed three of three at a median 478ms to first byte,
> jsDelivr three of three at 769ms, unpkg three of three at 824ms.
> Source: 21YunBox, per-host China support pages, reviewed 28 to 30 August
> 2026. https://www.21cloudbox.com/support/cdnjs-china.html

Read the first row again. It is not a slow row. It is an empty one.

<!-- SECTION: The host that stops the page rather than slowing it -->

## The host that stops the page rather than slowing it

Google Hosted Libraries is the CDN nobody chose. It arrived inside a theme, in
a plugin's admin assets, in a snippet pasted in 2016. The tag looks like every
other script tag in the document. It is not.

> "Scripts without async, defer or type="module" attributes, as well as inline
> scripts without the type="module" attribute, are fetched and executed
> immediately before the browser continues to parse the page."
> Source: MDN Web Docs, the script element, page last modified 9 May 2026.
> https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script

Point that at a host which never answers and the parse stops. Everything below
the tag does not exist yet for the visitor, and will not until the browser
gives up.

> `ajax.googleapis.com` is blocked in mainland China. 100% of the last 1
> conclusive test failed, last tested 22 August 2026.
> Source: GreatFire, tested 22 August 2026.
> https://en.greatfire.org/https/ajax.googleapis.com

The same probe tried twelve Google-owned properties and got no response from
eleven. This is not an unlucky CDN. It is Google, on a hostname that does not
look like Google in your source code.

<!-- SECTION: The three that cost seconds -->

## The three that cost seconds

The other three answered, none of them quickly. A median first byte of 478ms,
769ms or 824ms is several times what the same file costs from a mainland
origin, and a median is the friendly half of the distribution. jsDelivr is the
one host here with a published tail.

> Over a 12-hour sample, direct time to first byte for `cdn.jsdelivr.net` swung
> from a median of 493ms in the quietest hour to 1,086ms at the evening peak,
> with a 95th percentile of 1,780ms.
> Source: 21YunBox, jsDelivr in China, reviewed 28 August 2026.
> https://www.21cloudbox.com/support/jsdelivr-china.html

One visitor in twenty waits nearly two seconds on a render-blocking script.
That is a slow dependency you have only measured on a good day.

GreatFire reads all three as not blocked, with one caveat worth stating rather
than hiding. `unpkg.com` was last tested on 14 August 2026 and
`cdn.jsdelivr.net` on 20 August 2026. `cdnjs.cloudflare.com` was last tested on
25 May 2026, a record of May rather than a statement about today.

<!-- SECTION: Where the consumer line splits them -->

## Where the consumer line splits them

Everything above came from a datacentre, which sits on commercial transit that
a home broadband line does not. Consumer-line figures exist for two of these
hosts, and the two vantage points disagree.

> From a Beijing China Mobile (中国移动) residential line on 30 August 2026,
> `cdn.jsdelivr.net` completed 36 of 36 requests. `unpkg.com` returned a first
> byte in a median 1,026ms and not one of three page loads finished.
> Source: 21YunBox, unpkg in China and A Day of Third-Party Requests From
> Inside China, measured 30 August 2026.
> https://www.21cloudbox.com/support/unpkg-china.html

Two hosts that look identical from a datacentre, 769ms against 824ms, land on
opposite sides of the line that matters. unpkg answers and then does not
finish, and that failure mode never reaches a support ticket: the widget stays
empty, nothing logs an error, and the team outside China sees a working page.

`cdnjs.cloudflare.com` has no published consumer-line figure at all. So this
page gives it no consumer-line verdict.

TODO: harness measurement. The consumer-line column needs a ChinaWebFoundry
probe from a named residential carrier, with run_id and test date. cdnjs is the
priority: the host this cluster will recommend most often, on the thinnest
evidence.

<!-- SECTION: What the one-line fix actually buys -->

## What the one-line fix actually buys

Deleting the Google Hosted Libraries tag and serving the library from your own
origin turns a request that never returns into one that returns in single-digit
milliseconds. Moving the other three is a smaller trade: a few hundred
milliseconds, plus the tail, which is the larger prize.

<!-- TABLE 2 of 2. No measurement, so no vantage point columns. -->

| Step | What it removes | What it costs |
|---|---|---|
| Delete the `ajax.googleapis.com` tag, self-host the library | A render-blocking request that never returns | One line, plus one file on your origin |
| Bundle the cdnjs, jsDelivr and unpkg dependencies at build time | Three cross-border round trips and their tails | A build step you probably already have |
| Serve the bundle from a mainland origin behind an ICP filing (ICP备案) | The remaining cross-border latency | The filing, which is the real project |

Our guide to the WordPress plugins that break in China covers how these tags
reach a site, and the guide to what the Great Firewall blocks holds the wider
dependency table. If you do not know which of these hostnames your pages
request, the China Site Scanner lists them. For the build step and the origin
work, that is our Technical Integration service.

<!-- SECTION: Frequently asked -->

## Frequently asked

**Is cdnjs blocked in China?**

No. From a mainland datacentre probe on 28 August 2026 it completed three runs
of three at a median 478ms to first byte. GreatFire also reads it as not
blocked, though that test ran on 25 May 2026. No consumer-line measurement of
cdnjs has been published by anyone, so nobody can tell you what a home
connection in Beijing sees.

**Why does jQuery from Google break the page and not just one widget?**

Because a plain script tag is render blocking. MDN states that a script without
async, defer or type="module" is fetched and executed immediately before the
browser continues parsing. The host never answers, so the parse stops and
everything below it waits for a timeout rather than a response.

**Is jsDelivr safe to keep?**

It is the most reachable of the four, completing from both vantage points in
late August 2026. The tail is the problem: a 95th-percentile first byte of
1,780ms over a 12-hour sample. Safe for an async asset, not for anything the
page cannot render without.

**Do I need a China CDN to fix this?**

Usually not, for this problem. These four hostnames are build-time dependencies
somebody chose to fetch at runtime, and bundling them removes the requests
entirely, which no delivery layer beats. A mainland origin and an ICP filing
answer a different question: your own content being slow.

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
Breadcrumb: Home > China Web Guide > Which JavaScript CDNs Work in China
Author: Echo Peng
datePublished: TODO, blocked
Measurement: TODO: harness measurement. No run_id exists. harness/latest.json
rows[] is empty as of 22 September 2026.
-->

<!-- ASSET BRIEF
TABLES: One measurement table, two vantage-point columns, five rows, four
  populated from the 21YunBox per-host pages and one reserved for the
  ChinaWebFoundry probe. One remediation table, three rows, no measurement.
CHARTS: none
SCREENSHOTS: none
DOWNLOADS: none
INTERNAL LINKS:
  WordPress plugins that break in China -> /resources/china-web-guide/wordpress-plugins-china/
  what the Great Firewall blocks -> /resources/china-web-guide/great-firewall-what-it-blocks/
  China Site Scanner -> /china-site-scanner/
  Technical Integration -> /services/technical-integration/
LOCALIZED SLUGS: none (T2 is English only, x-default on the English URL)
CLIENT SIGN-OFF NEEDED: none
HARNESS ROWS CITED: none. BLOCKED. Required before publish:
  ajax.googleapis.com, run_id TBD, mainland datacentre vantage
  ajax.googleapis.com, run_id TBD, consumer line vantage
  cdnjs.cloudflare.com, run_id TBD, mainland datacentre vantage
  cdnjs.cloudflare.com, run_id TBD, consumer line vantage (highest priority,
    no consumer-line figure exists for this host from any source)
  unpkg.com, run_id TBD, both vantages
  cdn.jsdelivr.net, run_id TBD, both vantages
-->
