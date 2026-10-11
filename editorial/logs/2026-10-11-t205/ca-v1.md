---
title: "Which JavaScript CDNs Work in China"
slug: javascript-cdn-china
description: "One CDN returns nothing and stops the page. Three others answer, and the home line test splits them. The category answer everyone gets backwards."
excerpt: "Google Hosted Libraries halts the render. cdnjs, unpkg and jsDelivr do not. The difference matters more than the category."
template: guide
author: echo-peng
category: Technology
reviewBy: 2026-11-12
---

<!-- HERO SECTION -->

Which JavaScript CDNs work in China

<!-- INTRODUCTION -->

Of the four public JavaScript CDNs most sites use, one fails in mainland
China. GreatFire reads `ajax.googleapis.com`, the host behind Google Hosted
Libraries, as blocked, last tested on 22 August 2026. On 28 August a 21YunBox
probe on an Alibaba Cloud (阿里云) server in Zhangjiakou got no first byte from
Google's library site in three runs. cdnjs, jsDelivr and unpkg all read as not
blocked.

So the answer to "is my CDN blocked in China" is a hostname. Only one of the
four takes the page down with it.

<!-- SECTION: Is your CDN blocked in China -->

## Is your CDN blocked in China? Four hosts, four records

Every row comes from GreatFire or 21YunBox, with the date each of them
tested. A 21YunBox census figure is a timed load of the vendor's own website
from their probe. That says something about the host. It is not a test of
your file.

| Host | Mainland datacentre (21YunBox) | Beijing home line (21YunBox) | GreatFire | Verdict | Tested |
|---|---|---|---|---|---|
| `ajax.googleapis.com` | library website 0 of 3, no first byte | no published test | blocked, 1 of 1 failed | blocked | 22 and 28 Aug 2026 |
| `cdn.jsdelivr.net` | 72 of 72, 660ms median, 1,757ms p95 | 36 of 36 | not blocked, 3 of 3 | slow | 28 and 30 Aug, 8 Oct 2026 |
| `cdnjs.cloudflare.com` | cdnjs website 3 of 3 completed | no published test | not blocked, 1 of 1 | reachable | 28 to 29 Aug, 27 Sep 2026 |
| `unpkg.com` | no published test | no published test | not blocked, 1 of 1 | reachable | 14 Aug 2026 |
| BootstrapCDN | no test of the asset host | no test of the asset host | no dated test | untested | none |

> In a census of 280 sites requested three times each from a probe inside
> mainland China, with a 60-second ceiling, the cdnjs website completed 3 of
> 3 attempts and Google Hosted Libraries gave no response at all.
> Source: 21YunBox, 280 Sites Measured From Inside China, 28 to 29 August
> 2026. https://www.21cloudbox.com/websites-blocked-in-china.html

<!-- SECTION: Google Hosted Libraries stops the page -->

## Google Hosted Libraries stops the page

Google tells developers its library CDN is "globally available", and its own
snippet loads jQuery from `ajax.googleapis.com`.

> "To load jQuery, embed the
> <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js">
> snippet in your web page."
> Source: Google for Developers, Hosted Libraries, page last updated 9 October
> 2026. https://developers.google.com/speed/libraries

That tag is the problem. A plain script tag stops the parser until the file
arrives.

> "Scripts without async, defer or type="module" attributes, as well as inline
> scripts without the type="module" attribute, are fetched and executed
> immediately before the browser continues to parse the page."
> Source: MDN Web Docs, the script element, page last modified 9 May 2026.
> https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script

From inside the mainland the file does not arrive.

> GreatFire reads https://ajax.googleapis.com as blocked: 100% of the last 1
> conclusive tests failed in mainland China, last tested 22 August 2026.
> Source: GreatFire, August 2026. https://en.greatfire.org/https/ajax.googleapis.com

> From an Alibaba Cloud (阿里云) cn-zhangjiakou probe on 28 August 2026, the
> Google Hosted Libraries website returned no first byte in three of three
> runs, each abandoned at the sixty-second limit.
> Source: 21YunBox, Google Hosted Libraries in China, reviewed 8 October 2026.
> https://www.21cloudbox.com/support/google-hosted-libraries.html

So the visitor waits on a white page until the browser gives up on the
request. Every script that needs jQuery then fails too. The tag usually came
with a theme or a plugin, which is why nobody on the team remembers adding it.

<!-- SECTION: jsDelivr answers from both networks -->

## jsDelivr answers from both networks, slowly

jsDelivr is the one CDN here with paired figures, and it completed every
request from both vantage points.

> From an Alibaba Cloud (阿里云) cn-zhangjiakou instance sampled every ten
> minutes for twelve hours on 28 August 2026, with a 30-second timeout,
> `cdn.jsdelivr.net` completed 72 of 72 requests at a median 660ms time to
> first byte and a 95th percentile of 1,757ms. From a Beijing China Mobile
> (中国移动) residential line on 30 August 2026 it was requested 36 times
> with no failures.
> Source: 21YunBox, A Day of Third-Party Requests From Inside China, August
> 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

The same probe got Google's font stylesheet back in a median 111ms. jsDelivr
took about six times as long. 21YunBox puts the tail plainly.

> "A p95 of 1,757ms against a median of 660ms means one request in twenty
> takes nearly two seconds."
> Source: 21YunBox, A Day of Third-Party Requests From Inside China, August
> 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

GreatFire agrees it is open: not blocked, three of three recent conclusive
tests, last tested 8 October 2026. Fine for a script that loads with async.
Risky for one the first paint waits on.

<!-- SECTION: cdnjs and unpkg -->

## cdnjs and unpkg rest on thinner records

Both read as open. Neither has a published test from a home line, so neither
gets a home line verdict here.

> GreatFire reads https://cdnjs.cloudflare.com as not blocked, 1 of 1 recent
> conclusive tests connected normally, last tested 27 September 2026, and
> https://unpkg.com as not blocked, 1 of 1, last tested 14 August 2026.
> Source: GreatFire, September 2026. https://en.greatfire.org/https/cdnjs.cloudflare.com
> and https://en.greatfire.org/https/unpkg.com

For cdnjs there's also the census above: its website finished all three
loads from the Zhangjiakou probe. unpkg has GreatFire's single test and
nothing else. A datacentre result has misled before. In the same 21YunBox
study, Google's font stylesheet answered 72 of 72 from the datacentre and 0
of 54 from the home line.

BootstrapCDN has no dated test of its asset host from either source, so it
is listed as untested.

<!-- SECTION: Taking the CDN out of the request -->

## Taking the CDN out of the request

Delete the Google Hosted Libraries tag first. Serve jQuery from your own
origin, or bundle it into your build, and a request that never returns is
gone.

> "Measure the host you actually depend on, or bundle the library into your
> own build and remove the question."
> Source: 21YunBox, 280 Sites Measured From Inside China, August 2026.
> https://www.21cloudbox.com/websites-blocked-in-china.html

| Library loaded from | What to do | Why |
|---|---|---|
| `ajax.googleapis.com` | Self-host or bundle it now | Blocked, and it blocks rendering |
| `cdn.jsdelivr.net` | Bundle what the first paint needs, load the rest async | Answers, with a two-second tail |
| `cdnjs.cloudflare.com`, `unpkg.com` | Bundle, or test from a home line before relying on them | No home line record |

Our guide to the WordPress plugins that break in China shows how these tags
get into a site. The guide to what the Great Firewall blocks has the wider
dependency table. If you don't know which library hosts your pages call, the
China Site Scanner checks for them. The build work itself is what our
Technical Integration service does.

<!-- SECTION: Common questions about CDNs in China -->

## Common questions about CDNs in China

**Is cdnjs blocked in China?**

No dated test says so. GreatFire read `cdnjs.cloudflare.com` as not blocked
on 27 September 2026, and 21YunBox's census loaded the cdnjs website 3 of 3
times from an Alibaba Cloud probe on 28 to 29 August. Nobody has published a
home line test of cdnjs, so what a Beijing household sees is unknown.

**Is jsDelivr blocked in China?**

No. It completed 72 of 72 requests from a mainland datacentre on 28 August
2026 and 36 of 36 from a Beijing China Mobile home line on 30 August, both in
21YunBox's study. It is slow, though: a 660ms median and a 1,757ms 95th
percentile from the datacentre.

**Why does jQuery from Google freeze the whole page?**

Because a script tag without async or defer stops the browser parsing until
the file arrives. GreatFire reads `ajax.googleapis.com` as blocked, so from
the mainland the file never arrives. The page waits for a timeout, and every
script that depends on jQuery fails after it.

**Do I need a China CDN to fix this?**

Not for this problem. These are files somebody chose to fetch from another
company's server at load time. Bundling them into your own build removes the
request entirely. Where your own site is served from, and whether it holds
an ICP filing (ICP备案), is a separate question about your own pages.

<!-- CTA -->

CTA: Run a free China readiness scan
