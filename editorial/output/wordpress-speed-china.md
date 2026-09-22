---
title: "Why Your WordPress Site Is Slow in China"
slug: wordpress-speed-china
description: "Four causes, in the order they cost you. A measured case from 23.4 seconds to 1.2, and what a delivery layer fixes versus what it cannot."
excerpt: "The real causes of slow load times behind the Great Firewall, ranked, with a measured before and after."
template: guide
author: cyril-drouin
category: Technology
---

<!-- HERO SECTION -->

Why your WordPress site is slow in China

<!-- INTRODUCTION -->

A WordPress site is slow in China for four reasons, and they do not cost the
same. A host that never answers can hold the whole page. The distance to your
server adds most of a second to every request. The number of hosts you call
multiplies that. Page weight comes last, and it is usually the first thing
anyone touches.

Rank the four before you spend anything on any of them.

| Rank | Cause | What it costs | What fixes it |
|---|---|---|---|
| 1 | A host that never answers | The page, or whatever waits on it | Delete the call, or self-host the file |
| 2 | Distance to your origin | Most of a second on first byte | A mainland origin, or in-country delivery |
| 3 | The number of hosts you call | A lookup and a handshake each | Fewer origins, assets served from yours |
| 4 | The weight of what you ship | Time in proportion to bytes | Ordinary web performance work |

Most teams start at row four, because row four is what their tooling talks
about. Rows one to three are where the seconds are.

The measured figures below come from an Alibaba Cloud region on 28 August 2026
and a Beijing consumer line on 30 August 2026. Each one carries where it was
taken and when.

<!-- SECTION: What slow means from Shanghai -->

## What slow means from Shanghai

The largest public test of foreign sites loading inside China was run by
Chinafy, who sell a fix for the problem, so weigh it accordingly. The method
is published, which is more than most of this category manages.

> 614 global websites across 11 verticals were tested with WebPageTest by
> Catchpoint from Beijing, Virginia and London, on Chrome over a cable
> connection. 66.4% of them failed to load successfully in Beijing, median
> visually complete time was 17.2 seconds, and of the tests run from Beijing,
> 44% timed out. Time to first byte from Beijing was 1.4 seconds, against
> 0.35 seconds from Virginia and 0.31 seconds from London.
> Source: Chinafy, State of Global Website Performance in China, April 2026.
> https://insights.chinafy.com/

Two thirds failing is the number everyone quotes. The one worth sitting with
is 1.4 seconds, spent before your theme is parsed or a single image is
requested.

<!-- SECTION: The four causes of a slow WordPress site in China -->

## The four causes of a slow WordPress site in China

### One: a host that never answers

Binary, and the expensive one. A refused request fails fast. A silently
dropped one sits there until the browser gives up, which can take a minute.
The classic case in WordPress is jQuery loaded from Google Hosted Libraries,
which thousands of commercial themes still do.

> GreatFire’s most recent conclusive test of ajax.googleapis.com from
> mainland China failed, and the host is classified as blocked. Last tested
> 22 August 2026.
> Source: GreatFire. https://en.greatfire.org/https/ajax.googleapis.com

That would be survivable if the tag were lazy.

> Scripts without async, defer or a module type “are fetched and executed
> immediately before the browser continues to parse the page”.
> Source: MDN Web Docs, the script element, last modified 9 May 2026.
> https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script

The page stops at the line where your theme asks Google for jQuery. Our guide
to the plugins that break in China walks the rest of the host list.

### Two: the distance to your origin

Your server is in Frankfurt. Every request from a visitor in Chengdu crosses
the width of Eurasia twice before a byte comes back, then does it again for
the next resource. That is the 1.4 seconds above. A mainland origin deletes
the distance, and brings paperwork with it, which the last section covers.

> Over a 90-day window, a mainland-hosted client site returned 99.98% uptime,
> with median response times of 48ms from Beijing, 36ms from Shanghai and
> 61ms from Guangzhou.
> Source: ChinaWebFoundry, published 29 August 2026.
> https://www.chinawebfoundry.com/website-in-china/

Those are our own figures. The carrier and the exact window are not published
yet; they are going into the case studies this autumn. A figure
without its conditions deserves suspicion, including when we publish it.

### Three: the number of hosts you call

Every separate host is its own tax, and not a small one once a round trip
costs what it costs from China.

> “Connecting is the time it takes for a TCP handshake to complete. Like DNS,
> the greater the number of server connections needed, the more time is spent
> creating server connections.”
> Source: MDN Web Docs, Understanding latency, last modified 25 February 2025.
> https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Understanding_latency

A WordPress install with a page builder, a form plugin, an analytics tag and
a webfont reaches eight to twenty hosts before a visitor sees anything. One
study instrumented real browsing from a Beijing home line, found 97 distinct
third-party hosts, and had probed a cloud region inside China two days
earlier. It probes five hosts directly. These three carry the argument, and
the two vantage points disagree about two of them.

| Host | Alibaba Cloud (阿里云) cn-zhangjiakou, 28 Aug 2026 | Beijing China Mobile (中国移动) home line, 30 Aug 2026 |
|---|---|---|
| fonts.googleapis.com | Reachable. 72 of 72, 111ms median | Blocked. 0 of 54 |
| www.googletagmanager.com | Reachable. 72 of 72, 118ms median | Blocked. 0 of 112 |
| cdn.jsdelivr.net | Reachable. 72 of 72, 660ms median | Reachable. 36 of 36 |

> The datacentre column was sampled every ten minutes for 12 hours on a
> 30-second timeout, 72 samples per host. The consumer column covers 88
> websites and 264 page loads overnight.
> Source: 21YunBox, A Day of Third-Party Requests From Inside China, 2026.
> https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Google Fonts answered every time from the datacentre and never once from the
home line. Both results are real, and your visitors are on the second one.
Self-host the font and that variable disappears. jsDelivr completes from
both, which is why treating CDNs as one category gets this backwards.

### Four: the weight of what you ship

Bytes cost time in proportion to bytes, and a Chinese mobile connection is a
worse pipe than the one your designer tested on. The MDN page cited above puts
it plainly: the greater the number and size of the requests, the greater the
effect of high latency on the person waiting. So compress the images and cut
the slider. That work pays, right up to the point where the page is sitting on
a host that never answers.

<!-- SECTION: A migration: 23.4 seconds to 1.2 -->

## A migration: 23.4 seconds to 1.2

One of our migrations moved a WordPress site off a European origin onto a
mainland one and cleaned out its external calls on the way.

> Median page load went from 23.4 seconds on a European origin to 1.2 seconds
> on a mainland origin, and roughly half of that improvement came from
> deleting external calls rather than from moving the server.
> Source: ChinaWebFoundry, published 29 August 2026.
> https://www.chinawebfoundry.com/resources/china-web-guide/is-wordpress-blocked-in-china/

Read the second clause twice. It decides your budget. Half the gain was free:
deleting a Google Fonts call and self-hosting two woff2 files costs an
afternoon. The other half needed the server to move, which needed an ICP
filing (ICP备案) and a mainland entity behind it. The per-step breakdown
belongs in a case study and is being written into one.

<!-- SECTION: What a delivery layer fixes, and what it leaves -->

## What a delivery layer fixes, and what it leaves

There is a real product category here and it works. Chinafy is the best-known
vendor in it, and its published description is specific: a China-specific
copy of your site, resources that fail swapped or stripped, the copy served
over near-China content delivery networks, and geo-IP routing that sends only
Chinese visitors to it.

> “Dynamic requests (e.g. transactions) also return to your original site’s
> origin to ensure that real-time information is provided to visitors in
> China.”
> Source: Chinafy product documentation. The page carries no publication
> date, so this is the mechanism as read on 18 September 2026.
> https://www.chinafy.com/how-chinafy-works

Score it against the four rows. Row one is the product, so that goes outright.
Row four is handled at the edge and most of row three with it, because the
layer ends up serving those assets itself. Row two it only halves, since
dynamic requests still cross the border.

Three and a half rows, with no ICP filing and no Chinese entity, because
nothing sits on a mainland server. For a brochure site, a campaign microsite,
or a team that needs Chinese visitors served next quarter instead of next
year, that is the right purchase and we will say so.

What it leaves is the dynamic path. Checkout, login, search, a logged-in
WooCommerce cart still travel to wherever your origin lives, carrying the
first-byte cost with them.

<!-- SECTION: What only a mainland origin fixes -->

## What only a mainland origin fixes

Dynamic response time, and only by being in the country. There is a gate in
front of that.

> A domain pointed at a mainland-region server stays unreachable to visitors
> until its ICP filing (ICP备案) is approved. Visitors get a holding page, so
> no soft launch is possible.
> Source: Alibaba Cloud (阿里云) developer community, 20 March 2022, behaviour
> reconfirmed 18 September 2026.
> https://developer.aliyun.com/article/877910

Plan three to six weeks, assuming a mainland entity already exists. Our guide
to WordPress hosting in China covers which domestic cloud to file with. The
in-country CDN route hits the same gate, which catches out anyone assuming a
CDN sidesteps the paperwork.

> The Cloudflare China Network “is available as a separate subscription for
> customers on an Enterprise plan”, and “you must have a valid ICP (Internet
> Content Provider) filing or license for each apex domain you wish to
> onboard”.
> Source: Cloudflare developer documentation, last updated 30 April 2026.
> https://developers.cloudflare.com/china-network/

> “JD Cloud, our partner, is required to review and vet the content of all
> domains on their network before China Network is enabled.”
> Source: Cloudflare developer documentation, last updated 17 April 2026.
> https://developers.cloudflare.com/china-network/get-started/

On Cloudflare’s free and standard plans, mainland visitors are served from
the nearest edge outside the country, usually Hong Kong, Japan or the US west
coast. Closer. Still over the border.

<!-- SECTION: How to measure it honestly -->

## How to measure it honestly

Do not test through a VPN. A VPN measures your tunnel, and a tunnel is the
one network condition none of your visitors have.

Name the vantage point every time, because a cloud region inside China and a
home line in the same city return opposite answers about the same host, and
only one of the two is your customer. Use each for what it is good for: the
consumer line tells you whether something happens, the datacentre tells you
how fast it could be. And date it. A result from March tells you about March.

WebPageTest has a Beijing node. Chrome DevTools on a machine in China, sorted
by domain, gives you the host list in about a minute. With nobody in the
country, our free China Site Scanner checks a URL’s dependencies from where
you are. Then hold the result against the four rows: seconds in row one mean
an afternoon of work, seconds in row two mean a filing, and our WordPress in
China page sets out which path suits which site.

<!-- SECTION: Frequently asked -->

## Questions we get asked

### Why is my WordPress site slow in China but fine everywhere else?

Because the parts that fail are parts nobody outside China ever requests. A
blocked font host, an analytics tag that never answers, a script tag that
stops the parser. From Europe they reply in milliseconds. From a Chinese home
line they can hang until the browser gives up.

### Will a caching plugin make my site faster in China?

It helps with row four and does nothing for rows one to three. Caching
shortens the time your server spends building a page. It cannot shorten the
distance to that server, or stop your theme calling a host that never
answers.

### Is a Hong Kong server good enough?

Better than Frankfurt, worse than Shanghai, and it needs no ICP filing
(ICP备案), which is why people reach for it. Mainland traffic still crosses the
border and still gets inspected, so the first-byte gain is real and partial.
Treat it as a stepping stone.

### What does fixing this actually involve?

Two different projects, and you should know which you are buying. Cleaning up
external calls is developer work measured in days, and needs no permission
from anyone. Moving the origin into the mainland needs a Chinese entity, an
ICP filing (ICP备案) and weeks of waiting. Do them in that order.

### How fast should a WordPress site load from mainland China?

Under two seconds is achievable on a mainland origin once the external calls
are cleaned up. Two to five seconds usually means the origin is right and the
dependencies are not. Above ten seconds, something is hanging rather than
running slowly.

<!-- CTA -->

CTA: Run a free China readiness scan on your site

<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate the hero image from the prompt below with the generate-image-openai
skill, convert to WebP with sharp (max width 1050, quality about 78, no
enlargement, under 350KB), then wire it in as the guide's visual.

- Save to:    public/images/guides/wordpress-speed-china.webp
- Reference:  /images/guides/wordpress-speed-china.webp
- Format:     .webp, landscape 3:2 generated, cropped by the layout to 21:9
- Style rule: candid normal-life photo with real-life defects, China
              setting, only Chinese people, the article's subject visible
              on a screen. No AI polish, no diagrams, no text overlays, no
              watermark, no logos except what is on screen.

IMAGE PROMPT (use verbatim):

Candid handheld photograph taken over the shoulder of a young Chinese web
developer sitting at a cluttered desk in a small rented office in Chengdu on
an overcast afternoon, her laptop screen filling most of the frame and
showing a Chrome DevTools network waterfall with long grey request bars and
several rows marked in red as still pending, a browser tab beside it stuck on
a blank white page with the loading spinner still turning, a second smaller
monitor to the left showing a WordPress dashboard in Simplified Chinese, the
desk holding a half-finished cup of milk tea with condensation on the cup, a
tangle of USB cables, a torn courier envelope and a spiral notebook with
handwritten Chinese notes, the window behind throwing flat grey daylight that
mixes badly with the warm ceiling tube light and leaves the screen looking
slightly washed out, visible dust and fingerprint smudges on the laptop
screen, her hand caught mid-gesture reaching for the trackpad so it blurs a
little, the frame tilted very slightly and cropping the top of her head,
shallow but imperfect focus with the far edge of the desk soft, the grain and
mild noise of a phone camera in poor indoor light, no studio lighting, no
colour grade, no text overlay, no watermark, no logos other than what appears
on the screens.
===================================================================== -->

<!-- SCHEMA
Type: Article
FAQPage: no
Breadcrumb: Home > China Web Guide > Why Your WordPress Site Is Slow in China
Author: Cyril Drouin
datePublished: 2026-09-22
Measurement: none of our own. harness/latest.json is empty; A9 is a T1 piece
and is not gated on it. The paired measured figures are 21YunBox's, cited
with both vantage points and both dates. GreatFire supplies the
ajax.googleapis.com verdict. Chinafy supplies the market baseline as a vendor
benchmark with a stated method. The 23.4s to 1.2s pair and the 99.98% and
48/36/61ms figures are ChinaWebFoundry's own published figures, labelled as
ours in the copy with the missing conditions stated.
-->

<!-- ASSET BRIEF
TABLES:
  1. Answer table in the introduction. Four causes ranked, what each costs,
     what fixes each. No external data; it indexes the four body sections.
  2. Two-vantage measurement table inside "The number of hosts you call".
     Three hosts, datacentre column and consumer column, verdict and
     completions inside each cell, test date in the column header. Data from
     the 21YunBox study of 28 and 30 August 2026 (ledger entries F6, F7, F3).
     No harness run: harness/latest.json is empty.
CHARTS: none.
SCREENSHOTS: optional, not required for publish. If one is added later,
  capture a Chrome DevTools network waterfall from a real machine on a
  mainland consumer line with pending third-party requests visible, and blur
  the client domain, all query strings and any cookie values.
DOWNLOADS: none.
INTERNAL LINKS:
  our guide to the plugins that break in China -> /resources/china-web-guide/wordpress-plugins-china/
  our guide to WordPress hosting in China -> /resources/china-web-guide/wordpress-hosting-china/
  our free China Site Scanner -> /china-site-scanner/
  our WordPress in China page -> /wordpress-in-china/
LOCALIZED SLUGS: fr vitesse-wordpress-chine · es velocidad-wordpress-china · de wordpress-geschwindigkeit-china
CLIENT SIGN-OFF NEEDED: none. The migration and the uptime figures are already
  published on the site unattributed to a named client, and no client name,
  sector or domain appears here.
HARNESS ROWS CITED: none. harness/latest.json has generated null, vantages []
  and rows []. A9 is T1 and is not gated on the harness.
BRIEF DEVIATION: the brief asks for a sideways link to page-builders-china.
  That guide does not exist yet (A7, scheduled 2026-11-03). The second
  sideways reference goes to wordpress-plugins-china instead, which is live
  and is the correct sibling for the blocked-host cause. Flag for PLAN.md.
-->
