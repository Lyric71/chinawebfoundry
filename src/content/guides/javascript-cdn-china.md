---
title: "Which JavaScript CDNs Work in China"
subtitle: "Google Hosted Libraries halts the render. cdnjs, unpkg and jsDelivr do not. The difference matters more than the category."
summary: "Google Hosted Libraries is blocked in mainland China and halts the page. cdnjs, jsDelivr and unpkg answer. Dated GreatFire and 21YunBox records."
visual: "/images/guides/javascript-cdn-china.webp"
order: 41
published: true
publishedAt: "2026-10-11"
updatedAt: 2026-10-18
reviewBy: "2026-11-12"
category: "Technology"
author: "echo-peng"
---

Of the four public JavaScript CDNs covered here, only Google’s fails in the
published tests from mainland China. GreatFire reads `ajax.googleapis.com` as
blocked (last tested 22 August 2026), and a 21YunBox probe on Alibaba Cloud
(阿里云) in Zhangjiakou got no first byte from Google’s library website on 28
August. jsDelivr answered from the same cloud region and from a Beijing home
line. cdnjs and unpkg read as not blocked.

Ask whether a CDN is blocked in China and the reply that holds up is a list of
hostnames. Only one of the four takes the page down with it. Every figure below
was checked against its source on 11 October 2026.

## Is your CDN blocked in China? What the tests show

Every row comes from GreatFire or 21YunBox, with the date each one tested. A
21YunBox census figure is a timed load of the vendor’s own website from their
probe. It shows how that company’s own site fares from inside China. The file
your page asks for was never part of the test.

| Host                   | Alibaba Cloud cn-zhangjiakou (21YunBox) | Beijing China Mobile home line (21YunBox) | GreatFire              | Verdict   | Tested                    |
| ---------------------- | --------------------------------------- | ----------------------------------------- | ---------------------- | --------- | ------------------------- |
| `ajax.googleapis.com`  | library website 0 of 3, no first byte   | no published test                         | blocked, 1 of 1 failed | blocked   | 22 and 28 Aug 2026        |
| `cdn.jsdelivr.net`     | 72 of 72, 660ms median, 1,757ms p95     | 36 of 36                                  | not blocked, 3 of 3    | slow      | 28 and 30 Aug, 8 Oct 2026 |
| `cdnjs.cloudflare.com` | cdnjs website 3 of 3                    | no published test                         | not blocked, 1 of 1    | reachable | 28 to 29 Aug, 27 Sep 2026 |
| `unpkg.com`            | no published test                       | no published test                         | not blocked, 1 of 1    | reachable | 14 Aug 2026               |
| BootstrapCDN           | no test of the asset host               | no test of the asset host                 | no dated test          | untested  | none                      |

> From a probe on Alibaba Cloud (阿里云) in cn-zhangjiakou, 280 sites were each
> requested three times with a 60-second ceiling. The cdnjs website completed 3
> of 3 attempts. Google Hosted Libraries gave no response at all.
> Source: 21YunBox, 280 Sites Measured From Inside China, 28 to 29 August 2026.
> https://www.21cloudbox.com/websites-blocked-in-china.html

A common shortcut says public CDNs don’t work in China. The same study put that
to the test.

> 21YunBox concludes from its census that the rule “public CDNs don’t work in
> China” is not supported by its measurements.
> Source: 21YunBox, 280 Sites Measured From Inside China, 28 to 29 August 2026.
> https://www.21cloudbox.com/websites-blocked-in-china.html

## Google Hosted Libraries stops the page

Google’s documentation gives the jQuery tag in full, pointing at
`https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js`, and sells
the service on its reach.

> Google describes Hosted Libraries as “a stable, reliable, high-speed, globally
> available content distribution network” and gives the jQuery snippet on
> `ajax.googleapis.com`.
> Source: Google for Developers, Hosted Libraries, last updated 9 October 2026.
> https://developers.google.com/speed/libraries

A plain script tag stops the parser until its file arrives.

> “Scripts without async, defer or `type="module"` attributes, as well as inline
> scripts without the `type="module"` attribute, are fetched and executed
> immediately before the browser continues to parse the page.”
> Source: MDN Web Docs, the script element, last modified 9 May 2026.
> https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script

From inside the mainland, this one doesn’t arrive. GreatFire’s last conclusive
test of the host failed, and 21YunBox’s probe couldn’t even get a first byte out
of Google’s library website.

> GreatFire reads https://ajax.googleapis.com as blocked: 100% of the last 1
> conclusive tests failed in mainland China, last tested 22 August 2026.
> Source: GreatFire, last tested 22 August 2026.
> https://en.greatfire.org/https/ajax.googleapis.com

21YunBox tried the page developers read before they copy the tag.

> From an Alibaba Cloud (阿里云) cn-zhangjiakou probe on 28 August 2026, the Google
> Hosted Libraries website returned no first byte in three of three runs, each
> abandoned at the sixty-second limit.
> Source: 21YunBox, Google Hosted Libraries in China, reviewed 8 October 2026.
> https://www.21cloudbox.com/support/google-hosted-libraries.html

The visitor stares at a white page until the browser gives up on the request.
Then every script that needs jQuery fails as well: the menu, the slider, the
form validation, whatever the theme hung off it. The tag often came in with a
theme or a plugin years ago, so the people who run the site today may not know
it is there. From an office in Frankfurt or Chicago the same page loads
normally. Seen from outside China, nothing looks broken.

## jsDelivr answers from both networks, slowly

jsDelivr is the only CDN here with figures from a datacentre and a home line. It
completed every request on both.

> From an Alibaba Cloud (阿里云) cn-zhangjiakou instance sampled every ten minutes
> for twelve hours on 28 August 2026, with a 30-second timeout,
> `cdn.jsdelivr.net` completed 72 of 72 requests at a median 660ms time to first
> byte and a 95th percentile of 1,757ms; `fonts.googleapis.com` completed 72 of
> 72 at 111ms. From a Beijing China Mobile (中国移动) residential line on 30 August
> 2026, `cdn.jsdelivr.net` was requested 36 times with no failures and
> `fonts.googleapis.com` 54 times with no answer.
> Source: 21YunBox, A Chinese Cloud Probe Is Not a Chinese Visitor: The Same Hosts, Opposite Answers, 28 and 30
> August 2026.
> https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

From the datacentre on 28 August, Google’s font stylesheet came back in a median
111ms. jsDelivr took about six times as long, and 21YunBox spells out what its
slowest requests cost.

> “A p95 of 1,757ms against a median of 660ms means one request in twenty takes
> nearly two seconds.”
> Source: 21YunBox, A Chinese Cloud Probe Is Not a Chinese Visitor: The Same Hosts, Opposite Answers, 28 and 30
> August 2026.
> https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

GreatFire agrees the host is open: not blocked, three of three recent conclusive
tests, last tested 8 October 2026. Loaded with async, that tail costs little.
Put a jsDelivr file in front of the first paint (a slider plugin’s script in the
head, say) and the slow requests hold up the page.

## cdnjs and unpkg rest on thinner records

The last two hosts are where the evidence runs thin. Both read as open, yet
neither has a published home line test, so that column stays empty for them.

> GreatFire reads https://cdnjs.cloudflare.com as not blocked, 1 of 1 recent
> conclusive tests connected normally, last tested 27 September 2026, and
> https://unpkg.com as not blocked, 1 of 1, last tested 14 August 2026.
> Source: GreatFire, last tested 27 September and 14 August 2026.
> https://en.greatfire.org/https/cdnjs.cloudflare.com and
> https://en.greatfire.org/https/unpkg.com

cdnjs has one more data point, from the census: its website finished all three
loads from the Zhangjiakou probe. unpkg has GreatFire’s single test and nothing
more.

The gap matters. A datacentre answer can be the wrong one, and the font
stylesheet above shows how wrong: 72 of 72 from the datacentre on 28 August, no
answer to any of 54 requests from the Beijing home line two days later.

BootstrapCDN has no dated test of its asset host from either source. It is
listed as untested.

## Moving the libraries into your own build

Delete the Google Hosted Libraries tag first. Serve jQuery from your own origin,
or bundle it into your build, and a request that never returns is gone. Write
down the version you copied. The next upgrade should happen because someone
chose it. On WordPress the local copy already exists: version 7.1.3 registers
jQuery 3.7.1, the same version as Google’s snippet, from
`wp-includes/js/jquery/`. Remove whatever swaps in the Google copy and core’s
own file loads instead. 21YunBox gives the same advice.

> The census advice: “measure the host you actually depend on, or bundle the
> library into your own build and remove the question.”
> Source: 21YunBox, 280 Sites Measured From Inside China, 28 to 29 August 2026.
> https://www.21cloudbox.com/websites-blocked-in-china.html

| Library loaded from                 | What to do                                              | Why                                |
| ----------------------------------- | ------------------------------------------------------- | ---------------------------------- |
| `ajax.googleapis.com`               | Self-host or bundle it now                              | Blocked, and it holds up rendering |
| `cdn.jsdelivr.net`                  | Bundle what the first paint needs, load the rest async  | Answers, with a slow tail          |
| `cdnjs.cloudflare.com`, `unpkg.com` | Bundle, or test from a home line before relying on them | No home line record                |

Our guide to the [WordPress plugins that break in China](/resources/china-web-guide/wordpress-plugins-china/)
shows how these tags get into a site. For hosts beyond the library CDNs, the
guide to [what the Great Firewall blocks](/resources/china-web-guide/great-firewall-what-it-blocks/)
has the wider dependency table. Not sure which library hosts your pages call?
The [China Site Scanner](/china-site-scanner/) checks for them. The build work
is what our [Technical Integration service](/services/technical-integration/) does.

## Common questions about CDNs in China

**Is cdnjs blocked in China?**

No dated test says so. GreatFire read `cdnjs.cloudflare.com` as not blocked on
27 September 2026, and 21YunBox’s census loaded the cdnjs website 3 of 3 times
from an Alibaba Cloud probe on 28 to 29 August. Neither GreatFire nor 21YunBox
has published a home line test of cdnjs, so what a Beijing household sees is
unknown.

**Is jsDelivr blocked in China?**

No. In 21YunBox’s study it completed 72 of 72 requests from an Alibaba Cloud
datacentre in Zhangjiakou on 28 August 2026 and 36 of 36 from a Beijing China
Mobile home line on 30 August. It’s slow, though: a 660ms median and a 1,757ms
95th percentile from that datacentre.

**Does unpkg work in China?**

GreatFire reads it as not blocked. Its one recent conclusive test of
`unpkg.com`, on 14 August 2026, connected normally. Neither GreatFire nor
21YunBox currently publishes a datacentre timing or a home line test of it.
Treat unpkg as reachable but unmeasured, and bundle anything your first paint
depends on.

**Why does jQuery from Google freeze the whole page?**

A script tag without async or defer stops the browser parsing until the file
arrives. GreatFire reads `ajax.googleapis.com` as blocked, so from the mainland
the file never arrives. The page waits for a timeout, and every script that
depends on jQuery fails after it.

**Do I need a China CDN to fix this?**

Bundling fixes this one without any CDN. These are files somebody chose to fetch
from another company’s server every time the page loads. Put them in your own
build and the request is gone. Where your own site is served from, and whether
it holds an ICP filing (ICP备案), is a separate question about your own pages.
