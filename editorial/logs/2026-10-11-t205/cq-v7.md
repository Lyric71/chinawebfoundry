---
title: "Which JavaScript CDNs Work in China"
slug: javascript-cdn-china
description: "Google Hosted Libraries is blocked in mainland China and halts the page. cdnjs, jsDelivr and unpkg answer. Dated GreatFire and 21YunBox records."
excerpt: "Google Hosted Libraries halts the render. cdnjs, unpkg and jsDelivr do not. The difference matters more than the category."
template: guide
author: echo-peng
category: Technology
reviewBy: 2026-11-12
---

<!-- HERO SECTION -->

Which JavaScript CDNs work in China

<!-- INTRODUCTION -->

Of the four public JavaScript CDNs covered here, only Google’s fails in the
published tests from mainland China. GreatFire reads `ajax.googleapis.com` as blocked (last tested
22 August 2026), and a 21YunBox probe on Alibaba Cloud (阿里云) in Zhangjiakou
got no first byte from Google’s library website on 28 August. jsDelivr
answered from the same cloud region and from a Beijing home line. cdnjs and unpkg read as not
blocked.

Ask whether a CDN is blocked in China and the reply that holds up is a list
of hostnames. Only one of the four takes the page down with it. Every figure
below was checked against its source on 11 October 2026.

<!-- SECTION: Is your CDN blocked in China -->

## Is your CDN blocked in China? The record, host by host

Every row comes from GreatFire or 21YunBox, with the date each one tested. A 21YunBox census figure is a timed load of the vendor’s own website
from their probe, so it shows how that company’s own site fares from inside
China. The file your page asks for was never part of the test.

| Host                   | Alibaba Cloud cn-zhangjiakou (21YunBox) | Beijing China Mobile home line (21YunBox) | GreatFire              | Verdict   | Tested                    |
| ---------------------- | --------------------------------------- | ----------------------------------------- | ---------------------- | --------- | ------------------------- |
| `ajax.googleapis.com`  | library website 0 of 3, no first byte   | no published test                         | blocked, 1 of 1 failed | blocked   | 22 and 28 Aug 2026        |
| `cdn.jsdelivr.net`     | 72 of 72, 660ms median, 1,757ms p95     | 36 of 36                                  | not blocked, 3 of 3    | slow      | 28 and 30 Aug, 8 Oct 2026 |
| `cdnjs.cloudflare.com` | cdnjs website 3 of 3                    | no published test                         | not blocked, 1 of 1    | reachable | 28 to 29 Aug, 27 Sep 2026 |
| `unpkg.com`            | no published test                       | no published test                         | not blocked, 1 of 1    | reachable | 14 Aug 2026               |
| BootstrapCDN           | no test of the asset host               | no test of the asset host                 | no dated test          | untested  | none                      |

> From a probe on Alibaba Cloud (阿里云) in cn-zhangjiakou, 280 sites were
> each requested three times with a 60-second ceiling. The cdnjs website
> completed 3 of 3 attempts. Google Hosted Libraries gave no response at all.
> Source: 21YunBox, 280 Sites Measured From Inside China, 28 to 29 August
> 2026. https://www.21cloudbox.com/websites-blocked-in-china.html

Plenty of guides take the shortcut that public CDNs don’t work in China. The
same study tested it.

> 21YunBox concludes from its census that the rule “public CDNs don’t work in
> China” is not supported by its measurements.
> Source: 21YunBox, 280 Sites Measured From Inside China, 28 to 29 August
> 2026.
> https://www.21cloudbox.com/websites-blocked-in-china.html

<!-- SECTION: Google Hosted Libraries stops the page -->

## Google Hosted Libraries stops the page

Google’s documentation gives the jQuery tag in full, pointing at
`https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js`, and
sells the service on its reach.

> Google describes Hosted Libraries as “a stable, reliable, high-speed,
> globally available content distribution network” and gives the jQuery
> snippet on `ajax.googleapis.com`.
> Source: Google for Developers, Hosted Libraries, last updated 9 October
> 2026. https://developers.google.com/speed/libraries

A plain script tag stops the parser until its file arrives.

> “Scripts without async, defer or `type="module"` attributes, as well as
> inline scripts without the `type="module"` attribute, are fetched and
> executed immediately before the browser continues to parse the page.”
> Source: MDN Web Docs, the script element, last modified 9 May 2026.
> https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script

From inside the mainland, this one doesn’t arrive. GreatFire’s last
conclusive test of the host failed. 21YunBox’s probe couldn’t even get a
first byte out of Google’s library website.

> GreatFire reads https://ajax.googleapis.com as blocked: 100% of the last 1
> conclusive tests failed in mainland China, last tested 22 August 2026.
> Source: GreatFire, last tested 22 August 2026.
> https://en.greatfire.org/https/ajax.googleapis.com

21YunBox tried the page developers read before they copy the tag.

> From an Alibaba Cloud (阿里云) cn-zhangjiakou probe on 28 August 2026, the
> Google Hosted Libraries website returned no first byte in three of three
> runs, each abandoned at the sixty-second limit.
> Source: 21YunBox, Google Hosted Libraries in China, reviewed 8 October 2026.
> https://www.21cloudbox.com/support/google-hosted-libraries.html

The visitor stares at a white page until the browser gives up on the
request. Then every script that needs jQuery fails as well: the menu, the slider,
the form validation, whatever the theme hung off it. The tag often came in
with a theme or a plugin years ago, so the people who run the site today may
not know it is there. From an office in Frankfurt or Chicago the same page
loads normally.

Nothing about the page looks broken from outside.

<!-- SECTION: jsDelivr answers from both networks -->

## jsDelivr answers from both networks, slowly

jsDelivr is the only CDN here with figures from a datacentre and a home line.
It completed every request on both.

> From an Alibaba Cloud (阿里云) cn-zhangjiakou instance sampled every ten
> minutes for twelve hours on 28 August 2026, with a 30-second timeout,
> `cdn.jsdelivr.net` completed 72 of 72 requests at a median 660ms time to
> first byte and a 95th percentile of 1,757ms; `fonts.googleapis.com`
> completed 72 of 72 at 111ms. From a Beijing China Mobile (中国移动)
> residential line on 30 August 2026, `cdn.jsdelivr.net` was requested 36
> times with no failures and `fonts.googleapis.com` 54 times with no answer.
> Source: 21YunBox, A Day of Third-Party Requests From Inside China, 28 and
> 30 August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

From the datacentre on 28 August, Google’s font stylesheet came back in a
median 111ms. jsDelivr took about six times as long, and 21YunBox spells out
what its slowest requests cost.

> “A p95 of 1,757ms against a median of 660ms means one request in twenty
> takes nearly two seconds.”
> Source: 21YunBox, A Day of Third-Party Requests From Inside China, 28 and
> 30 August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

GreatFire agrees the host is open: not blocked, three of three recent
conclusive tests, last tested 8 October 2026. Loaded with async, that tail
costs little. Put a jsDelivr file in front of the first paint (a slider
plugin’s script in the head, say) and the slow requests hold up the page.

<!-- SECTION: cdnjs and unpkg -->

## cdnjs and unpkg rest on thinner records

Both read as open. Both also lack a published home line test, so that column
stays empty for them.

> GreatFire reads https://cdnjs.cloudflare.com as not blocked, 1 of 1 recent
> conclusive tests connected normally, last tested 27 September 2026, and
> https://unpkg.com as not blocked, 1 of 1, last tested 14 August 2026.
> Source: GreatFire, last tested 27 September and 14 August 2026.
> https://en.greatfire.org/https/cdnjs.cloudflare.com and
> https://en.greatfire.org/https/unpkg.com

cdnjs has one more data point, from the census: its website finished all
three loads from the Zhangjiakou probe. unpkg has GreatFire’s single test and nothing
more.

The gap matters. A datacentre answer can be the wrong one, and the font
stylesheet above shows how wrong: 72 of 72 from the datacentre on 28 August, no
answer to any of 54 requests from the Beijing home line two days later.

BootstrapCDN has no dated test of its asset host from either source, so it
is listed as untested.

<!-- SECTION: Taking the CDN out of the request -->

## Taking the CDN out of the request

Delete the Google Hosted Libraries tag first. Serve jQuery from your own
origin, or bundle it into your build, and a request that never returns is
gone. Note the version number you copied, so a later update is a decision
somebody makes on purpose. 21YunBox gives the same advice.

> The census advice: “measure the host you actually depend on, or bundle the
> library into your own build and remove the question.”
> Source: 21YunBox, 280 Sites Measured From Inside China, 28 to 29 August
> 2026.
> https://www.21cloudbox.com/websites-blocked-in-china.html

| Library loaded from                 | What to do                                              | Why                                |
| ----------------------------------- | ------------------------------------------------------- | ---------------------------------- |
| `ajax.googleapis.com`               | Self-host or bundle it now                              | Blocked, and it holds up rendering |
| `cdn.jsdelivr.net`                  | Bundle what the first paint needs, load the rest async  | Answers, with a slow tail          |
| `cdnjs.cloudflare.com`, `unpkg.com` | Bundle, or test from a home line before relying on them | No home line record                |

Our guide to the WordPress plugins that break in China shows how these tags
get into a site, and the guide to what the Great Firewall blocks has the
wider dependency table. Not sure which library hosts your pages call? The
China Site Scanner checks for them. The build work is what our Technical
Integration service does.

<!-- SECTION: Common questions about CDNs in China -->

## Common questions about CDNs in China

**Is cdnjs blocked in China?**

No dated test says so. GreatFire read `cdnjs.cloudflare.com` as not blocked
on 27 September 2026, and 21YunBox’s census loaded the cdnjs website 3 of 3
times from an Alibaba Cloud probe on 28 to 29 August. Neither GreatFire nor
21YunBox has published a home line test of cdnjs, so what a Beijing household
sees is unknown.

**Is jsDelivr blocked in China?**

No. In 21YunBox’s study it completed 72 of 72 requests from an Alibaba Cloud
datacentre in Zhangjiakou on 28 August 2026 and 36 of 36 from a Beijing China
Mobile home line on 30 August. It is slow, though: a 660ms median and a
1,757ms 95th percentile from that datacentre.

**Does unpkg work in China?**

GreatFire reads it as not blocked. Its one recent conclusive test of
`unpkg.com`, on 14 August 2026, connected normally. Neither GreatFire nor
21YunBox currently publishes a datacentre timing or a home line test of it.
Treat unpkg as reachable but unmeasured, and bundle anything your first paint
depends on.

**Why does jQuery from Google freeze the whole page?**

Because a script tag without async or defer stops the browser parsing until
the file arrives. GreatFire reads `ajax.googleapis.com` as blocked, so from
the mainland the file never arrives. The page waits for a timeout, and every
script that depends on jQuery fails after it.

**Do I need a China CDN to fix this?**

Bundling fixes this one without any CDN. These are files somebody chose to
fetch from another company’s server every time the page loads. Put them in
your own build and the request is gone. Where your own site is served from, and
whether it holds an ICP filing (ICP备案), is a separate question about your
own pages.

<!-- CTA -->

CTA: Run a free China readiness scan

<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate the hero image from the prompt below with the generate-image-openai
skill, convert to WebP with sharp (max width 1050, quality about 78, no
enlargement, under 350KB), then wire it in as the guide's visual.

- Save to:    public/images/guides/javascript-cdn-china.webp
- Reference:  /images/guides/javascript-cdn-china.webp
- Format:     .webp, landscape 3:2 generated, cropped by the layout to 21:9
- Style rule: candid normal-life photo with real-life defects, China
              setting, only Chinese people, the article's subject visible
              on a screen. No AI polish, no diagrams, no text overlays, no
              watermark, no logos except what is on screen.

IMAGE PROMPT (use verbatim):

Candid handheld phone photo taken over the shoulder of a young Chinese woman front-end developer at a shared desk in a busy co-working space in Hangzhou on a grey late afternoon, her laptop screen showing a browser window that is completely white except for a thin loading bar, with Chrome developer tools docked along the bottom at the Network panel, a list of script requests in which one row stays grey and pending with a long empty waterfall bar beside it, the browser and Windows interface in Simplified Chinese with a Chinese input method icon in the taskbar, a second external monitor beside the laptop showing a code editor with an HTML file open, her right hand caught mid-gesture pointing at the pending row and slightly motion blurred, a stainless steel tea thermos, a phone face down, a tangle of USB-C cables, a lanyard and yellow sticky notes with handwritten Chinese on the desk, a colleague's shoulder in a dark hoodie cropped out of focus at the left edge, uneven light from a tall window on one side mixing with cool overhead fluorescent tubes, faint smudges and fingerprints on the laptop screen, slightly crooked framing, ordinary phone camera colour and mild noise, documentary and unposed, no studio polish, no cinematic colour grade, no text overlays, no watermark, no logos other than what appears on the screens.
===================================================================== -->

<!-- SCHEMA
Type: Article
FAQPage: no
Breadcrumb: Home > China Web Guide > Which JavaScript CDNs Work in China
Author: Echo Peng
datePublished: set by the publish step to the publish date
Measurement: GFW rule, every figure third party and labelled as theirs.
GreatFire HTTPS verdicts: ajax.googleapis.com blocked, last tested
22 August 2026; cdnjs.cloudflare.com not blocked, 27 September 2026;
unpkg.com not blocked, 14 August 2026; cdn.jsdelivr.net not blocked,
8 October 2026. 21YunBox: Google Hosted Libraries website, Alibaba Cloud
cn-zhangjiakou, 28 August 2026; 280-site census (cdnjs website, Google
Hosted Libraries), cn-zhangjiakou, 28 to 29 August 2026; A Day of
Third-Party Requests (cdn.jsdelivr.net), cn-zhangjiakou 28 August 2026 and
Beijing China Mobile residential line 30 August 2026.
-->

<!-- ASSET BRIEF
TABLES: (1) Measurement table, six columns (host, Alibaba Cloud
  cn-zhangjiakou, Beijing China Mobile home line, GreatFire, verdict, tested),
  five rows, from the GreatFire host pages and the three 21YunBox pages cited
  in the body; BootstrapCDN listed as untested (F42). (2) Remediation table,
  three rows, no measurement.
CHARTS: none
SCREENSHOTS: none
DOWNLOADS: none
INTERNAL LINKS:
  WordPress plugins that break in China -> /resources/china-web-guide/wordpress-plugins-china/
  what the Great Firewall blocks -> /resources/china-web-guide/great-firewall-what-it-blocks/
  China Site Scanner -> /china-site-scanner/
  Technical Integration service -> /services/technical-integration/
LOCALIZED SLUGS: none (T2 is English only; add
  /resources/china-web-guide/javascript-cdn-china/ to englishOnlyRoutes in
  src/i18n/routes.ts at publish)
CLIENT SIGN-OFF ON RECORD: none needed (no client figure or name)
LINK SUBSTITUTIONS: none
THIRD-PARTY MEASUREMENTS CITED (GFW rule):
  ajax.googleapis.com, GreatFire, reachability verdict, 22 Aug 2026
  developers.google.com/speed/libraries (Google Hosted Libraries website), 21YunBox, Alibaba Cloud cn-zhangjiakou, 28 Aug 2026
  Google Hosted Libraries and cdnjs websites, 21YunBox 280-site census, Alibaba Cloud cn-zhangjiakou, 28 to 29 Aug 2026
  cdn.jsdelivr.net and fonts.googleapis.com, 21YunBox, Alibaba Cloud cn-zhangjiakou, 28 Aug 2026
  cdn.jsdelivr.net and fonts.googleapis.com, 21YunBox, Beijing China Mobile residential line, 30 Aug 2026
  cdnjs.cloudflare.com, GreatFire, reachability verdict, 27 Sep 2026
  unpkg.com, GreatFire, reachability verdict, 14 Aug 2026
  cdn.jsdelivr.net, GreatFire, reachability verdict, 8 Oct 2026
-->
