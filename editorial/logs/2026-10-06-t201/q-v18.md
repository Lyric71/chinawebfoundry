---
title: "Google Fonts in China: It Depends Where You Are"
slug: google-fonts-china
description: "111ms from a mainland datacentre and zero of 54 requests from a Beijing home line, both from 21YunBox’s probes. Why both numbers are real."
excerpt: "The Google Fonts answer changes with the network you test from, which is why the flat versions of it keep contradicting each other."
template: guide
author: echo-peng
category: Technology
reviewBy: 2026-11-26
---

<!-- HERO SECTION -->

Google Fonts in China: it depends where you are

<!-- INTRODUCTION -->

Google Fonts in China works or fails depending on the network that asks. On
28 August 2026, a probe on an Alibaba Cloud (阿里云) server in
Zhangjiakou got 72 answers out of 72 from `fonts.googleapis.com`, at a median
111ms. On 30 August a Beijing China Mobile (中国移动) home line got 0 of 54.
Both tests are 21YunBox’s, and neither result is a fluke. Your visitors browse
from home broadband and mobile data, so the second figure is the one to plan
around, and a page that waits on a font host that never answers can sit
blank.

Serve the fonts from your own domain and the question goes away. Every
figure below was checked against its source on 6 October 2026.

<!-- SECTION: Google Fonts in China from two networks -->

## Google Fonts in China from two networks

21YunBox ran the same probe code from both places and published the results
side by side. Two hostnames carry Google Fonts to a page.
`fonts.googleapis.com` sends the stylesheet, and the font files it points to
come from `fonts.gstatic.com`.

| Host                   | Alibaba Cloud (阿里云), Zhangjiakou | Beijing China Mobile (中国移动) home line | Completions        | Verdict                 | Tested             |
| ---------------------- | ----------------------------------- | ----------------------------------------- | ------------------ | ----------------------- | ------------------ |
| `fonts.googleapis.com` | 111ms median TTFB                   | no answer                                 | 72 of 72 / 0 of 54 | splits by vantage point | 28 and 30 Aug 2026 |
| `fonts.gstatic.com`    | 102ms median TTFB                   | no answer                                 | 72 of 72 / 0 of 6  | splits by vantage point | 28 and 30 Aug 2026 |

> From an Alibaba Cloud (阿里云) instance in cn-zhangjiakou, sampled every
> ten minutes for twelve hours on 28 August 2026 with a 30-second timeout,
> `fonts.googleapis.com` completed 72 of 72 requests at a median 111ms time to
> first byte and `fonts.gstatic.com` 72 of 72 at 102ms. Across 264 page loads
> on 88 real websites from a Beijing China Mobile (中国移动) residential line on
> 30 August 2026, `fonts.googleapis.com` was requested 54 times and answered
> none, and `fonts.gstatic.com` was requested 6 times and answered none.
> Source: 21YunBox, A Day of Third-Party Requests From Inside China, August
> 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Keep those two columns apart. Each one describes a different network.

> “A datacenter line and a consumer line in the same country are not the
> same network.”
> Source: 21YunBox, A Day of Third-Party Requests From Inside China, August
> 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

21YunBox doesn’t say why the home line never got an answer, and no other
published test explains it either, so we won’t guess. What the numbers do
fix is the shape. One host, two networks, two days apart, and opposite
results.

<!-- SECTION: GreatFire's verdicts, host by host -->

## GreatFire’s verdicts, host by host

GreatFire, which monitors censorship in China, tests hostnames from the
mainland and dates each verdict. For the two serving hosts its answer
matches the datacentre column. Quote that verdict on its own and you get
the flat “not blocked” answer, which the home line contradicts.

| Host                   | What it does                   | GreatFire verdict | Conclusive tests, last 90 days | Last tested |
| ---------------------- | ------------------------------ | ----------------- | ------------------------------ | ----------- |
| `fonts.googleapis.com` | serves the CSS                 | not blocked       | 0 of 3 disrupted               | 7 Sep 2026  |
| `fonts.gstatic.com`    | serves the font files          | not blocked       | 0 of 4 disrupted               | 21 Sep 2026 |
| `fonts.google.com`     | the catalogue designers browse | 100% disrupted    | 2 of 2 disrupted               | 30 Sep 2026 |

> GreatFire read https://fonts.googleapis.com as not blocked, 0 of 3
> conclusive tests disrupted, last tested 7 September 2026, and
> https://fonts.gstatic.com as not blocked, 0 of 4 disrupted, last tested
> 21 September 2026. It read https://fonts.google.com as 100% disrupted, 2 of
> 2 conclusive tests, last tested 30 September 2026, with interference
> recorded since 15 October 2016.
> Source: GreatFire, September 2026. https://en.greatfire.org/https/fonts.googleapis.com,
> https://en.greatfire.org/https/fonts.gstatic.com and
> https://en.greatfire.org/https/fonts.google.com

The third row is a different animal. `fonts.google.com` is the catalogue
your designers browse, and no page you publish ever loads it.

<!-- SECTION: Why a stalled stylesheet blanks the page -->

## Why a stalled stylesheet blanks the page

The standard Google Fonts embed is a stylesheet link in the head of the
page, and that position decides what happens when it fails.

> A stylesheet link in the head of a page blocks rendering by default, from
> the moment the browser finds it while parsing the page.
> Source: MDN Web Docs, The External Resource Link element, last modified
> 20 May 2026. https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link

So a request that never answers holds the render until the browser gives up
on it. The visitor in Beijing looks at a white screen. From a desk in
Frankfurt, and from a monitoring probe in a mainland datacentre, the same
page looks fine.

The `display=swap` parameter in the embed URL can’t help here, because that
instruction travels inside the stylesheet that never arrived.

<!-- SECTION: Self-hosting takes the network out of the question -->

## Self-hosting takes the network out of the question

The fonts in Google’s collection carry open licences, and those licences let
you copy the files to your own server.

> “Since all the fonts available here are licensed with permission to
> redistribute, subject to the license terms, you can self-host using a
> variety of third-party projects.” Most use the SIL Open Font License 1.1,
> some the Apache 2 licence, and the Ubuntu family the Ubuntu Font License
> 1.0.
> Source: Google Fonts repository README, google/fonts on GitHub, last
> changed 8 March 2024. https://github.com/google/fonts

Four steps, none of them hard:

1. Download the woff2 files for the weights you actually use (two or three
   is normal).
2. Put them on your own domain, next to your CSS, and write the
   `@font-face` rules yourself.
3. Delete the Google stylesheet link and any `preconnect` hint pointing at
   `fonts.googleapis.com` or `fonts.gstatic.com`.
4. Then reload with the network panel open. No request should leave for a
   Google host.

Don’t skip step 3.

> Preconnect starts “part or all of the handshake (DNS+TCP for HTTP, and
> DNS+TCP+TLS for HTTPS origins)” with an origin before any file is
> requested from it.
> Source: MDN Web Docs, rel=preconnect, last modified 22 April 2026.
> https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/preconnect

A hint left behind keeps sending every visitor’s browser towards the host
you just removed. Themes and page builders also add the Google link back on
their own. Our guide to the WordPress plugins that break in China covers where
that link comes from in a WordPress build.

ChinaWebFoundry serves its own typefaces this way: five woff2 files, three
weights of Poppins and two of Inter, on the same server as the pages. The
fonts arrive by the same route as the HTML.

Fonts are usually one of several overseas requests on a page. Finding and
replacing the others is technical integration work. Start from the list of
what the Great Firewall blocks.

<!-- SECTION: Frequently asked -->

## Frequently asked

**Is Google Fonts blocked in China?**

It depends on the network. In 21YunBox’s August 2026 tests both serving
hosts answered every request from an Alibaba Cloud (阿里云) datacentre and
none from a Beijing China Mobile (中国移动) home line. GreatFire read both as
not blocked in September 2026. A one-word answer throws away half of that
evidence, so treat the hosted version as unreliable and serve the files
yourself.

**Does fonts.google.com work in China?**

GreatFire recorded interference on both of its last two conclusive tests of
`fonts.google.com`, the latest on 30 September 2026, and has logged
interference there since 2016. That’s the catalogue where designers pick
typefaces, so it’s a nuisance for a designer working from Shanghai and
invisible to your visitors.

**Are there Chinese mirrors of Google Fonts?**

Developers in China pass round several mirrors of the Google Fonts API. We
found no dated third-party test of any of them, so this page names none and
gives no verdict. A mirror also puts somebody else’s uptime between your
visitors and your fonts, which self-hosting avoids.

**What about Adobe Fonts or Font Awesome?**

Both are on our untested list. The latest third-party verdicts on them are
more than 90 days old, so we give no verdict either way. The same reasoning
applies to any font whose licence lets you host the files. For one that
doesn’t, find a dated third-party test of the hosted version before you
rely on it.

**How do I check whether my site calls Google Fonts?**

Search the page source and your stylesheets for `fonts.googleapis.com` and
`fonts.gstatic.com`, including inside CSS `@import` rules. Or run the site
through the China Site Scanner, which lists the third-party hosts your
pages request.

<!-- CTA -->

CTA: Run a free China readiness scan

<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate the hero image from the prompt below with the generate-image-openai
skill, convert to WebP with sharp (max width 1050, quality about 78, no
enlargement, under 350KB), then wire it in as the guide's visual.

- Save to:    public/images/guides/google-fonts-china.webp
- Reference:  /images/guides/google-fonts-china.webp
- Format:     .webp, landscape 3:2 generated, cropped by the layout to 21:9
- Style rule: candid normal-life photo with real-life defects, China
              setting, only Chinese people, the article's subject visible
              on a screen. No AI polish, no diagrams, no text overlays, no
              watermark, no logos except what is on screen.

IMAGE PROMPT (use verbatim):

Candid handheld photograph inside a busy co-working space in Chengdu, Sichuan, on a grey weekday afternoon, taken from slightly behind and to the side of a Chinese front-end developer in her late twenties with a loose ponytail and a dark green hoodie, sitting at a shared wooden desk and leaning towards a slightly smudged laptop screen; the laptop shows a browser window that is almost entirely blank white, with the developer tools panel open along the bottom and a network tab listing requests, one row highlighted and still pending, small Chinese-language interface labels visible in the browser chrome; her left hand rests on the trackpad and her right hand is half raised to her chin mid-thought, slightly motion blurred; next to the laptop sit a phone lying face up with a Chinese messaging app open, a paper cup of jasmine tea with a lid, a tangle of white charging cables, a sticky note with handwritten Chinese characters stuck to the bezel and a small cactus in a plastic pot; behind her, out of focus, two other Chinese co-workers talk at a long table under hanging industrial lamps, a whiteboard with faded marker scribbles and a window showing overcast high-rise apartment blocks; mixed light from the cool window and warm overhead lamps gives uneven colour, a slight green cast from the screen on her face, visible sensor noise, a tilted horizon of about two degrees and the edge of a chair back cropping the lower left corner; documentary realism, natural imperfections, no studio lighting, no cinematic grade, no added text, captions or watermarks, no logos other than what appears on the screens.
===================================================================== -->

<!-- SCHEMA
Type: Article
FAQPage: no (the brief does not ask for FAQ schema)
Breadcrumb: Home > China Web Guide > Google Fonts in China: It Depends Where You Are
Author: Echo Peng
datePublished: the publish date (YYYY-MM-DD), set by the publish step
Measurement: 21YunBox, A Day of Third-Party Requests From Inside China:
  Alibaba Cloud cn-zhangjiakou datacentre probe, 28 August 2026; Beijing
  China Mobile residential line, 30 August 2026. GreatFire HTTPS verdicts:
  fonts.googleapis.com 7 September 2026, fonts.gstatic.com 21 September
  2026, fonts.google.com 30 September 2026. Every figure is theirs, none is
  a ChinaWebFoundry measurement (GFW rule).
-->

<!-- ASSET BRIEF
TABLES: (1) 21YunBox paired-vantage table, two hosts, datacentre and home
  line as separate columns, completions as n of m, verdict "splits by
  vantage point", test dates 28 and 30 August 2026. (2) GreatFire HTTPS
  verdicts for fonts.googleapis.com, fonts.gstatic.com and fonts.google.com,
  each with its conclusive-test count and last-tested date, labelled as
  GreatFire's verdict.
CHARTS: none
SCREENSHOTS: none
DOWNLOADS: none
INTERNAL LINKS:
  technical integration work -> /services/technical-integration/
  the WordPress plugins that break in China -> /resources/china-web-guide/wordpress-plugins-china/
  the list of what the Great Firewall blocks -> /resources/china-web-guide/great-firewall-what-it-blocks/
  China Site Scanner -> /china-site-scanner/
LOCALIZED SLUGS: none (T2 is English only, hreflang x-default on the English URL)
CLIENT SIGN-OFF ON RECORD: none needed (no client named, no client figure)
LINK SUBSTITUTIONS: none
REVIEW BY: 2026-11-26 (oldest cited test, 28 August 2026, plus 90 days);
  carried in frontmatter as reviewBy for review-due.mjs
THIRD-PARTY MEASUREMENTS CITED (GFW rule):
  fonts.googleapis.com, 21YunBox, Alibaba Cloud cn-zhangjiakou, 28 August 2026
  fonts.googleapis.com, 21YunBox, Beijing China Mobile home line, 30 August 2026
  fonts.gstatic.com, 21YunBox, Alibaba Cloud cn-zhangjiakou, 28 August 2026
  fonts.gstatic.com, 21YunBox, Beijing China Mobile home line, 30 August 2026
  https://fonts.googleapis.com, GreatFire, 7 September 2026
  https://fonts.gstatic.com, GreatFire, 21 September 2026
  https://fonts.google.com, GreatFire, 30 September 2026
UNTESTED HOSTS NAMED (F42, no verdict): Adobe Fonts, Font Awesome
-->
