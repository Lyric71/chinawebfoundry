---
title: "WordPress Plugins That Break in China"
slug: wordpress-plugins-china
description: "Audit WordPress plugin dependencies in China with dated network tests, local font settings and practical fixes for scripts, forms and cloud services."
excerpt: "The outbound hosts a WordPress plugin stack reaches for, and which of them actually fail behind the Great Firewall."
template: guide
author: cyril-drouin
category: Technology
---

<!-- HERO SECTION -->

WordPress Plugins That Break in China

<!-- INTRODUCTION -->

To audit WordPress plugins in China, start with the hosts each plugin calls.
A failed script request can hold up the page; captcha failures can stop
enquiries even when the page loads. Self-host essential files, then test the
forms and editor from the mainland connections your visitors and staff use.

These published tests show why the connection matters. The verdict column
describes the sampled home line. It makes no promise about other networks.

| Host | Alibaba Cloud (阿里云), Zhangjiakou, 28 Aug 2026 | Beijing China Mobile (中国移动) home line, 30 Aug 2026 | Home-line verdict |
|---|---|---|---|
| `fonts.googleapis.com` | 72 of 72, 111ms median TTFB | 0 of 54 | blocked |
| `fonts.gstatic.com` | 72 of 72, 102ms median TTFB | 0 of 6 | blocked |
| `cdn.jsdelivr.net` | 72 of 72, 660ms median TTFB, 1,757ms p95 | 36 of 36 | reachable |
| `www.googletagmanager.com` | 72 of 72, 118ms median TTFB | 0 of 112 | blocked |
| `www.google.com/recaptcha` | 0 of 72 | 0 of 18 | blocked |

> These completion counts and timings are from 21YunBox: Alibaba Cloud
> (阿里云), Zhangjiakou, 28 August 2026, sampled every 10 minutes for 12 hours
> with a 30-second timeout; and a Beijing China Mobile (中国移动) residential
> line, 30 August 2026, across 88 sites and 264 page loads.
> Source: 21YunBox, A Day of Third-Party Requests From Inside China, August
> 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

TTFB means time to first byte. It measures when a response starts; p95 is
the 95th percentile. The cloud probe and residential browser test use
different methods. Page usability needs a separate check. Sources reviewed
15 September 2026; the tests retain their original dates.

<!-- SECTION: The script tag that can hold up a page -->

## The script tag that can hold up a page

Check for jQuery loaded from Google Hosted Libraries, `ajax.googleapis.com`.

> GreatFire records a blocked verdict for `ajax.googleapis.com`, based on
> its last conclusive mainland test on 22 August 2026.
> Source: GreatFire, August 2026.
> https://en.greatfire.org/https/ajax.googleapis.com

If a theme loads it as a classic script without `async` or `defer`, the
browser pauses HTML parsing while it fetches and executes the script. Put
that request early in the document and a stalled connection can delay the
content below it. The impact depends on the tag and its position.

> Classic scripts without `async`, `defer` or module behaviour block HTML
> parsing by default. Rendering is a separate mechanism.
> Source: MDN, script element reference, updated 9 May 2026.
> https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script

Replace the external copy with WordPress’s bundled jQuery where compatible.
Check the theme’s dependent scripts before changing their loading order.
Removing a library still needed by a menu or form creates another failure.

The reCAPTCHA row above needs its own functional check. Submit a real test
enquiry and confirm it arrives. A page can display normally while its
required challenge fails. Keep spam protection in place when testing a
replacement.

<!-- SECTION: The CDN tier that needs a separate decision -->

## The CDN tier that needs a separate decision

jsDelivr completed requests from both sampled connections. Its datacentre
latency is in the table; the residential result establishes completion,
without supplying a matching latency figure.

For a library needed before the page works, consider serving it from your
own origin. Test after bundling it and keep a record of its version so
updates don’t depend on someone remembering where the file came from.

The ledger lacks a fully dated test with a named location for cdnjs and
unpkg. Their status remains unverified here. Include any requests to
`cdnjs.cloudflare.com` or `unpkg.com` in your own audit.

<!-- SECTION: Google Fonts changes with the connection -->

## Google Fonts changes with the connection

Read the font rows together: both hosts completed every datacentre request
and answered none on the sampled residential line. Self-hosting removes
that external font request from your visitors’ browsers.

In Elementor, check the local font setting explicitly.

> Elementor’s 18 September 2025 announcement says Load Google Fonts Locally
> is disabled by default. It gives the control’s location as Elementor >
> Settings > Performance.
> Source: Elementor, issue 32838, 18 September 2025.
> https://github.com/elementor/elementor/issues/32838

With local hosting enabled, clear the page cache. Now inspect font requests
on the public page and confirm the files come from your domain. Settings and
saved assets can differ between installations, so inspect the result after
an update too.

Then open the editor. The reachability of `my.elementor.com` and
`assets.elementor.com` from mainland China remains unverified. A working
public page doesn’t establish that the editing workflow works.

<!-- SECTION: What core WordPress calls out to -->

## What core WordPress calls out to

A theme can request a font registration that WordPress core keeps available
for compatibility. Check which code starts the request.

> WordPress’s `script-loader.php` retains Google Fonts registrations for
> Open Sans and Noto Serif, with comments saying core no longer uses them
> but themes or plugins may.
> Source: WordPress core source, read 15 September 2026.
> https://raw.githubusercontent.com/WordPress/WordPress/master/wp-includes/script-loader.php

Look for Gravatar requests in both the public page and wp-admin.

> GreatFire records `secure.gravatar.com` as blocked, last tested
> 31 August 2026. The provider does not name the city or carrier.
> Source: GreatFire, August 2026.
> https://en.greatfire.org/https/secure.gravatar.com

If avatars add no value to the site, consider disabling them. Verify the
result in comment pages and the editor’s usual screens. Our guide on
whether WordPress is blocked in China covers the wider dependency list.

<!-- SECTION: Performance plugins can call back into your site -->

## Performance plugins can call back into your site

Before enabling a performance setting, find out which machine does the work.

> WP Rocket sends page URLs to its API, which visits them to generate Used
> CSS. The site must be publicly accessible to that service.
> Source: WP Rocket knowledge base, Remove Unused CSS, updated 1 June 2026.
> https://docs.wp-rocket.me/article/1529-remove-unused-css

For a mainland origin, test that fetch in practice. Check the job status
and firewall logs before changing access rules. A failed service job needs
its own diagnosis; the browser’s Network panel won’t show the whole path.

> QUIC.cloud receives batches of media-library images and processes them
> on its service nodes.
> Source: QUIC.cloud, Image Optimization, 6 April 2026.
> https://docs.quic.cloud/services/imageopt/

That documents external processing. It gives no mainland reachability
verdict or processing location for your job. You can also compress images
before upload. Our guide to WordPress hosting in China covers the origin
server decision that sits alongside these plugin settings.

<!-- SECTION: How to audit WordPress plugins in China -->

## How to audit WordPress plugins in China

Open Chrome DevTools on the Network tab, reload and inspect the Domain and
Initiator columns. Record which theme, plugin or script starts each request.
Repeat on a contact page and while using the editor.

Use our free China Site Scanner to flag dependency patterns in the site’s
source. It checks known patterns and cannot certify network access. Follow
that inventory with a browser test on a mainland connection.
Record the city, carrier, date and the action you tried. Save both failures
and successful submissions so the developer can reproduce the problem.

Record plugin versions and changed settings with the results. Fix a
dependency that prevents enquiries before an optional image. After
each change, reload with the cache cleared and repeat the affected action.
Recheck after theme or builder updates, which can restore external calls.

<!-- SECTION: What to replace, host by host -->

## What to replace, host by host

Use the request’s owner to choose where to make the change. Network verdicts
refer only to the dated evidence above.
Paired dates below mean the datacentre test followed by the residential test.

| Dependency | Recorded status | What to check | Replacement or action |
|---|---|---|---|
| Google Hosted Libraries | Blocked, GreatFire, 22 Aug 2026 | Early script delays parsing | Compatible local jQuery |
| Google Fonts | Datacentre reachable; sampled home line blocked, 28/30 Aug 2026 | Font source | Self-host font files |
| Gravatar | Blocked, GreatFire, 31 Aug 2026 | Avatar requests | Disable unused avatars |
| Google reCAPTCHA | Both samples failed, 28/30 Aug 2026 | Submit an enquiry | Test an alternative form challenge |
| Google Tag Manager | Datacentre reachable; sampled home line blocked, 28/30 Aug 2026 | Container loads and events arrive | Review each tag separately |
| jsDelivr | Both samples completed, 28/30 Aug 2026 | Critical library dependency | Bundle required files locally |
| cdnjs, unpkg | Unverified here | Each requested URL | Test or self-host |
| WP Rocket Used CSS | Architecture documented; network unverified | Service can fetch the page | Test job completion |
| QUIC.cloud images | Architecture documented; network unverified | Processing succeeds | Compress before upload |

<!-- SECTION: Frequently asked -->

## Questions we get asked

**Is there a plugin that fixes all of this?**

Trace the request to its owner. A theme or builder setting may need changing.
Marketing tags need their own review. Choose a tool after you know which
call needs replacing, then test the changed page from a mainland connection.
Keep that check in your update routine.

**Can I test this with a VPN?**

A test describes the network where its traffic exits. An overseas VPN exit
doesn’t represent a mainland visitor. Record the exit location and resolver
before interpreting the result. For acceptance testing, use a known mainland
connection and complete the same task a visitor would, including the form
submission or checkout.

**Do we have to give up Elementor?**

Audit the front end and editor separately before deciding. The local font
setting addresses one dependency. Test the remaining requests and confirm
your editor can complete routine work. The untested Elementor hosts above
mean this guide cannot give a complete mainland compatibility verdict for
your installation.

**How many third-party hosts should a clean China site call?**

Keep essential page content independent of untested foreign hosts. Audit
each remaining service against the task it supports: a contact form needs
successful submissions, while analytics needs received events. Our WordPress
in China page covers the wider build decisions. A short host list still
needs a functional test.

<!-- CTA -->

CTA: Run a free China readiness scan

<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate the hero image from the prompt below with the generate-image-openai
skill, convert to WebP with sharp (max width 1050, quality about 78, no
enlargement, under 350KB), then wire it in as the guide's visual.

- Save to:    public/images/guides/wordpress-plugins-china.webp
- Reference:  /images/guides/wordpress-plugins-china.webp
- Alt:        Developer reviewing a WordPress plugin list and failed network
              requests on a laptop in a Hangzhou office.
- Format:     .webp, landscape 3:2 generated, cropped by the layout to 21:9
- Style rule: candid normal-life photo with real-life defects, China
              setting, only Chinese people, the article's subject visible
              on a screen. No AI polish, no diagrams, no text overlays, no
              watermark, no logos except what is on screen.

IMAGE PROMPT (use verbatim):

A candid handheld photograph taken over the shoulder of a young Chinese web
developer working late in a cramped co-working space in Hangzhou, her laptop
screen filling most of the frame and showing a WordPress plugins admin list in
a browser tab with dozens of rows of plugin names and blue Chinese-language
interface chrome around it, and below it the Chrome DevTools network panel open
with a long column of request rows, several of them marked in red as failed,
the domain column clearly readable, the screen slightly smudged with
fingerprints and reflecting a strip of ceiling light, her right hand resting on
the trackpad mid-scroll and slightly motion blurred, a second older monitor at
the edge of the frame turned away and cropped, the desk cluttered with a glass
tea jar with leaves settled at the bottom, a tangle of black USB cables, a
crumpled convenience store receipt, a plastic delivery bag and a phone face
down, mixed light from a cool fluorescent tube overhead and warm orange
streetlight coming through a rain-streaked window behind her, other desks and
one colleague out of focus in the background, shot on a phone camera at night
at high ISO with visible grain and slight underexposure in the corners, uneven
white balance, no studio lighting, no colour grading, no text overlays, no
watermark, no logos beyond what appears on the screens, framed off-centre with
the left edge of the laptop cut off.
===================================================================== -->

<!-- SCHEMA
Type: Article
FAQPage: no
Breadcrumb: Home > China Web Guide > WordPress Plugins That Break in China
Author: Cyril Drouin
datePublished: 2026-09-15
Measurement: none. harness/latest.json is empty; A3 is a T1 piece and is not
gated on it. Measured figures are 21YunBox's, cited with both vantage points
and dates. GreatFire supplies the ajax.googleapis.com and Gravatar verdicts.
-->

<!-- ASSET BRIEF
TABLES:
  1. Two-vantage measurement table in the introduction. Five hosts, datacentre
     column and consumer column, verdict from the consumer line. Data from the
     21YunBox study of 28 and 30 August 2026 (ledger entries F6, F7, F3, F2).
     No harness run: harness/latest.json is empty.
  2. Replacement table in "What to replace, host by host". The brief's required
     table: dependency, status from mainland China, what happens, replacement.
     Extends the dependency table in the published is-wordpress-blocked-in-china
     article by adding the replacement column and plugin-layer rows, rather
     than repeating it.
CHARTS: none.
SCREENSHOTS: optional, not required for publish. If one is added later, capture
  the Chrome DevTools Network panel of a real client site sorted by Domain with
  failed third-party requests visible, and blur the client domain, any query
  strings and any cookie values.
DOWNLOADS: none.
INTERNAL LINKS:
  our guide on whether WordPress is blocked in China -> /resources/china-web-guide/is-wordpress-blocked-in-china/
  our guide to WordPress hosting in China -> /resources/china-web-guide/wordpress-hosting-china/
  our free China Site Scanner -> /china-site-scanner/
  our WordPress in China page -> /wordpress-in-china/
LOCALIZED SLUGS: fr plugins-wordpress-chine · es plugins-wordpress-china · de wordpress-plugins-china
CLIENT SIGN-OFF NEEDED: none. No client name, figure or project appears.
HARNESS ROWS CITED: none.
-->
