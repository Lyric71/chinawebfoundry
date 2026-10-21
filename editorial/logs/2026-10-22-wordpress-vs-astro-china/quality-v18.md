---
title: "WordPress or Astro for a China Site"
slug: wordpress-vs-astro-china
description: "Choosing WordPress or a static Astro build for mainland China, argued from how requests cross the border, and what static costs a weekly publisher."
excerpt: "How to choose between WordPress and a static Astro build for China, argued from the way requests cross the border."
template: guide
author: cyril-drouin
category: Technology
reviewBy: 2026-11-20
---

<!-- HERO SECTION -->

WordPress or Astro for a China site

<!-- INTRODUCTION -->

Pick WordPress if your marketing team publishes every week and has no developer
of its own. A static Astro build suits a site that changes once a month or less
and has to hold up for visitors in mainland China. Either way, serve it from a
filed server inside the mainland. The case for a WordPress alternative in China
rests on how many hosts a page touches and how a blocked host behaves. No
published test compares the two stacks from China, so this guide makes no speed
claim.

| Question                                  | WordPress                                 | Static Astro build                               |
| ----------------------------------------- | ----------------------------------------- | ------------------------------------------------ |
| Which hosts does a page call?             | Whatever the theme and active plugins add | Whatever is in the build output, readable once   |
| What calls out from the server?           | Update checks to api.wordpress.org        | Nothing; the server hands out files              |
| Who can publish?                          | Anyone with a login                       | A developer, or an editor through a headless CMS |
| When does an edit go live?                | On Save                                   | After a build and a deploy                       |
| Needs an ICP filing on a mainland server? | Yes                                       | Yes                                              |

Every source below was checked on 22 October 2026.

<!-- SECTION: Every extra host is a trip across the border -->

## Every extra host is a trip across the border

A page is rarely one request. The HTML calls a stylesheet and the stylesheet
calls a font. A plugin adds a script from someone else’s server, and an
analytics tag adds another. Each new hostname the browser meets costs a lookup
and two handshakes before a single byte arrives.

> On a first request, latency includes a DNS lookup, a TCP handshake and the
> secure TLS negotiation, and the greater the number of hostnames, the more DNS
> lookups need to be done.
> Source: MDN Web Docs, Understanding latency, February 2025. https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Understanding_latency

From inside China, that set-up cost is where the border bites. Each handshake is
a round trip, and a round trip to a server in Frankfurt or Virginia from a phone
in Chengdu is long before any firewall gets involved.

> Chinafy tested 614 global websites with WebPageTest from Beijing, Virginia and
> London and found time to first byte 4 to 4.5 times higher in Beijing. It is a
> vendor benchmark of global sites, with no split by platform.
> Source: Chinafy, China Website Performance Benchmarks 2026, April 2026. https://www.chinafy.com/blog/china-website-performance-benchmarks-2026

Time to first byte ends before any content arrives, so page weight plays no part
in it. What fills it is round trips and server time. That is why cutting origins
does more for a China page than cutting kilobytes.

<!-- SECTION: A blocked host hangs instead of failing -->

## A blocked host hangs instead of failing

A blocked host does more damage than a slow one, because the browser gets no
quick refusal. It waits.

> GreatFire reads https://ajax.googleapis.com, Google’s library host, as
> blocked: 1 of 1 conclusive tests failed in mainland China, last tested on 22
> August 2026.
> Source: GreatFire, August 2026. https://en.greatfire.org/https/ajax.googleapis.com

> From an Alibaba Cloud (阿里云) instance in Zhangjiakou on 28 August 2026,
> Google’s Hosted Libraries website returned no first byte in 3 of 3 runs, each
> abandoned at the 60-second limit. 21YunBox timed the website itself; the
> verdict on the ajax.googleapis.com host is GreatFire’s.
> Source: 21YunBox, Does Google Hosted Libraries Work in China?, reviewed 8 October 2026. https://www.21cloudbox.com/support/google-hosted-libraries.html

Where the reference sits decides the damage. A stylesheet in the head stops the
page until it arrives, and MDN says the same of a plain script tag: the browser
fetches and runs it before it parses any further.

> CSS is render blocking: the browser blocks page rendering until it receives
> and processes all the CSS.
> Source: MDN Web Docs, Critical rendering path, February 2025. https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Critical_rendering_path

That means one render-blocking line pointing at a blocked host can leave a
visitor looking at a white screen. The same file copied onto your own server
costs almost nothing, because the browser already has a connection open to it.
Our guide to JavaScript CDNs in China walks through the common hosts one by one.

<!-- SECTION: A WordPress alternative with a host list you can read -->

## A WordPress alternative with a host list you can read

On WordPress, the list of hosts a page calls is a live property of the site.
Install a plugin on Tuesday and Wednesday’s pages may call a new domain. A theme
setting changed by someone in marketing can move the fonts to another host
without a line of code changing.

Astro resolves that list before the site goes live.

> By default, Astro pages, routes and API endpoints are pre-rendered at build
> time as static pages.
> Source: Astro Docs, On-demand rendering, updated 19 June 2026. https://docs.astro.build/en/guides/on-demand-rendering/

The output is a folder of plain files. One search of that folder lists every
external address the site uses, and the answer holds until the next build. If a
third-party host shows up, someone put it there in the code, and the change sits
in version control with a name and a date.

| Who makes the call | WordPress on a mainland server                        | Static build on a mainland origin                     |
| ------------------ | ----------------------------------------------------- | ----------------------------------------------------- |
| Visitor’s browser  | Theme and plugin assets, plus anything added in admin | Only the hosts written into the build                 |
| The server         | Update checks to api.wordpress.org                    | None; it serves files                                 |
| Editors’ browsers  | Gravatar on every admin screen                        | The CMS login, if there is one, wherever it is hosted |
| Who can add a host | Anyone who can install a plugin                       | A developer, through a commit                         |

A disciplined WordPress team can get to a short, stable host list too. It takes
a plugin audit and a habit of saying no to new ones. On a static build the list
falls out of the way the site is made.

<!-- SECTION: What a WordPress server does on its own -->

## What a WordPress server does on its own

A WordPress server makes calls of its own, with no visitor involved. It asks
WordPress.org for updates (over HTTPS, with a retry over plain HTTP if that
fails), and on a mainland server that request goes to a service that rate-limits
some Chinese networks.

> WordPress 7.1.3 sends its core version check to api.wordpress.org with a
> 3-second timeout outside scheduled tasks.
> Source: WordPress core 7.1.3, wp-includes/update.php, read 22 October 2026. https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/update.php

> WordPress.org staff, replying to a report of 429 errors from China: “Several
> Chinese network sources are rate-limited on certain services due to a high
> level of abuse and non-legitimate traffic coming from those sources.”
> Source: WordPress.org Meta Trac, ticket #5106, March 2020. https://web.archive.org/web/20260116133057/https://meta.trac.wordpress.org/ticket/5106

The dashboard doesn’t announce the 429. Updates stop showing up. Then there is
the admin itself. WordPress builds every avatar address on secure.gravatar.com,
and the admin bar draws one on every screen.

> GreatFire reads https://secure.gravatar.com as blocked: 1 of 1 conclusive
> tests failed in mainland China, last tested on 31 August 2026.
> Source: GreatFire, August 2026. https://en.greatfire.org/https/secure.gravatar.com

The avatar request comes from your editors’ browsers, so it hits a team in
Shanghai wherever the site is hosted. Our guide to why wp-admin is slow in China
covers the fixes. A static site served from the mainland has no admin screen and
no update check. The server hands out files and makes no calls of its own.

<!-- SECTION: A static build on Vercel is still outside China -->

## A static build on Vercel is still outside China

A static build fixes the host list. Whether a visitor in China gets the files at
all comes down to where they sit.

ChinaWebFoundry’s own site, this page included, is an Astro build deployed on
Vercel. It is written for readers outside China, and Vercel is clear about what
that means for mainland visitors.

> Vercel has no servers or CDN nodes in mainland China. China’s network controls
> can block or throttle traffic to foreign domains, including Vercel’s
> .vercel.app subdomains, and Vercel can’t guarantee availability or performance
> within mainland China.
> Source: Vercel Knowledge Base, Accessing Vercel-hosted sites from mainland China, published 3 November 2025, updated 11 September 2026. https://vercel.com/kb/guide/accessing-vercel-hosted-sites-from-mainland-china

> GreatFire reads https://vercel.app as blocked: 4 of 4 conclusive tests failed
> in mainland China, last tested on 14 September 2026.
> Source: GreatFire, September 2026. https://en.greatfire.org/https/vercel.app

Vercel’s own list of fixes ends with a separate deployment inside the mainland,
which in its words needs an “ICP license”. In mainland terms, a company
marketing site on a mainland server needs the ICP filing (ICP备案). The ICP
licence (ICP许可证) is the separate permit for paid online services.

> Alibaba Cloud says a site on a mainland node must complete the ICP filing
> first; its Hong Kong and overseas servers need none.
> Source: Alibaba Cloud (阿里云), ICP filing overview, August 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview

A static build on an overseas platform and a static build served from a filed
mainland origin share a framework and very little else. For a China audience,
only the second one counts. On the client sites we run, the build runs on a CI
pipeline outside China and the finished files are pushed to Alibaba Cloud,
Tencent Cloud (腾讯云) or Huawei Cloud (华为云).

<!-- SECTION: What a static build costs a marketing team -->

## What a static build costs a marketing team

So far the case leans static. Here is the bill, and it lands on the people who
publish.

There is no editing screen a marketing team would recognise. Content lives in
Markdown files in a code repository unless you add a content management system.
There is no plugin store either. A contact form, a cookie banner, site search, a
newsletter sign-up: each is code someone writes or wires in, then maintains.

Every change goes through a build. An edit becomes a commit, the commit triggers
a build, and the build is pushed to the server. On a small site that is a few
minutes. It still means a typo found at 6pm waits for the pipeline to run.

And a developer stays in the loop for things WordPress lets a marketer do alone,
like a new landing page layout or an extra field on a form.

A headless CMS takes some of that sting out.

> WordPress can be used as a headless CMS to provide content to an Astro
> project, through the REST API that every WordPress site exposes by default.
> Source: Astro Docs, Headless WordPress & Astro, updated 19 October 2026. https://docs.astro.build/en/guides/cms/wordpress/

Editors keep the dashboard they know, and the WordPress install can sit outside
China, where its update checks work. The mainland server only ever receives
built files. Front-end plugins such as page builders and form plugins stop doing
anything, because Astro draws the pages.

<!-- SECTION: When WordPress is the right answer -->

## When WordPress is the right answer

If your marketing team publishes every week and there’s no developer on
retainer, WordPress wins.

A team that ships three posts and a campaign page a week needs to do it without
raising a ticket. WordPress gives them drafts, scheduled posts, revisions, user
roles and a preview that matches the live page. Every one of those exists for a
static site only if someone builds or buys it.

It also wins when the site is the product. Member areas, online courses, a
booking system, a WooCommerce catalogue the team updates daily: that is plugin
territory, and rebuilding it on a static stack costs more than it saves.

The China problems have known fixes. Switch Gravatar off, or point it at a
mainland mirror. Run updates from outside China or through a mirror. Third-party
scripts and fonts get copied onto your own server. Our guide to WordPress speed
in China goes through them, and our WordPress in China page sets out how we run
the stack on a mainland server. Someone on the team has to own that list after
launch.

We build on both, and this is the first thing we ask on a scoping call. A rough
test for your own team: count the people who will edit the site next month, then
count the developers you can call. If the editors outnumber the developers and
the site changes weekly, run WordPress and keep it clean. A site that changes
monthly, with a developer on hand, is less work in China as a static build.

<!-- SECTION: Frequently asked -->

## Frequently asked

**Is Astro faster than WordPress in China?**

No published test compares the two from inside China, and we don’t print one.
What differs is how many hosts a page calls and whether a blocked one can hold
the page. A WordPress site with its third-party calls removed, served from a
filed mainland server, can load quickly too. Our Astro page sets out how we
build the static version.

**Does Baidu read an Astro site?**

Yes. Both stacks send finished HTML in the first response, which is the easiest
case for any crawler. Baidu (百度) announced a rendering crawler,
Baiduspider-render/2.0, on 24 March 2017, to fetch CSS, JavaScript and images.
It publishes nothing on how much it renders, so HTML that arrives complete stays
the cautious choice, and both stacks give you that.

**Can we keep WordPress and still serve a static site?**

Yes, with WordPress as a headless CMS. Editors write in the dashboard, Astro
pulls the content through the REST API at build time, and only the built files
go to the mainland server. You give up front-end plugins and instant publishing,
since each change waits for the next build.

**Is a static site cheaper to run?**

We don’t publish prices, so here is what moves the bill. A static site has no
PHP server or database to patch, which makes hosting and upkeep lighter. Each
change to layout or features costs developer time instead of editor time,
though. For a site that changes weekly, that second cost tends to outweigh the
first.

**Does a static site still need an ICP filing?**

Yes, if it is served from a mainland server. The filing follows the server,
whatever the stack. A static build on Alibaba Cloud’s mainland nodes needs the
ICP filing (ICP备案) before it goes live, exactly as a WordPress site would. A
Hong Kong server needs none, and every request then crosses the border.

<!-- CTA -->

CTA: Book a 30-minute scoping call with our Shanghai team

<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate the hero image from the prompt below with the generate-image-openai
skill, convert to WebP with sharp (max width 1050, quality about 78, no
enlargement, under 350KB), then wire it in as the guide's visual.

- Save to:    public/images/guides/wordpress-vs-astro-china.webp
- Reference:  /images/guides/wordpress-vs-astro-china.webp
- Format:     .webp, landscape 3:2 generated, cropped by the layout to 21:9
- Style rule: candid normal-life photo with real-life defects, China
              setting, only Chinese people, the article's subject visible
              on a screen. No AI polish, no diagrams, no text overlays, no
              watermark, no logos except what is on screen.
- Alt text:   Two Chinese colleagues at a shared desk in a Hangzhou
              co-working space compare a WordPress dashboard in Chinese on
              a laptop with a static site build listing on a second monitor.

IMAGE PROMPT (use verbatim):

Candid handheld photograph on the second floor of a converted-warehouse co-working space in Binjiang, Hangzhou, on an overcast late afternoon, taken from slightly above and behind two Chinese colleagues sharing a long scuffed wooden desk; on the left a woman in her early thirties in a grey hoodie, a content editor, has a laptop open on the WordPress admin dashboard in Simplified Chinese with the dark left-hand menu, the Posts list and a half-written draft visible, one hand resting on the trackpad; on the right a young man in his mid-twenties with black-rimmed glasses and a rolled-up flannel shirt sleeve, a front-end developer, leans towards a slightly dusty 27-inch external monitor showing a dark code editor with a file tree of an Astro project and a terminal panel listing built HTML files in a dist folder, pointing at the screen mid-sentence with a pen; between them a phone face-up showing a half-loaded mobile web page, a paper cup of Longjing tea gone cold, a sticky note in Chinese handwriting stuck to the monitor bezel, a tangle of USB-C and HDMI cables, a laptop stand with a worn rubber foot and a small cactus; grey window light from the left mixed with warm pendant lamps overhead, uneven and a little blown out near the window, faint fingerprints and glare on the monitor, slight motion blur on the developer's pointing hand, the frame tilted a couple of degrees and the right edge cropping his shoulder, ordinary clutter and natural skin texture, documentary phone-camera look, no studio lighting, no cinematic colour grade, no text overlays, no watermark, no logos other than what appears on the screens.
===================================================================== -->

<!-- SCHEMA
Type: Article
FAQPage: no (the brief does not ask for FAQ schema)
Breadcrumb: Home > China Web Guide > WordPress or Astro for a China Site
Author: Cyril Drouin
datePublished: set by the publish step
Measurement: none of our own. Reachability verdicts are GreatFire's
(ajax.googleapis.com, last tested 22 August 2026; secure.gravatar.com,
31 August 2026; vercel.app, 14 September 2026). The Google Hosted Libraries
website load is 21YunBox's (Alibaba Cloud cn-zhangjiakou, 28 August 2026).
The TTFB ratio is Chinafy's vendor benchmark (WebPageTest, Beijing, Virginia
and London, published 14 April 2026). Code facts read from WordPress 7.1.3
source on 22 October 2026.
-->

<!-- ASSET BRIEF
TABLES:
  1. Answer table in the introduction: five questions, WordPress against a
     static Astro build. Mechanism only, no timings. Sources: WordPress 7.1.3
     update.php (update checks), Astro Docs on-demand rendering (build-time
     output), Alibaba Cloud ICP overview (filing on mainland nodes).
  2. "Who makes the call" table in the host-list section: visitor browser,
     server, editors' browsers, who can add a host. Sources as above, plus
     WordPress 7.1.3 link-template.php (Gravatar avatar URLs).
CHARTS: none.
SCREENSHOTS: none required. If one is added later, a search of an Astro
  dist folder for external hostnames in a terminal; blur any client domain.
DOWNLOADS: none.
INTERNAL LINKS:
  our guide to JavaScript CDNs in China -> /resources/china-web-guide/javascript-cdn-china/
  our guide to why wp-admin is slow in China -> /resources/china-web-guide/wp-admin-slow-china/
  our guide to WordPress speed in China -> /resources/china-web-guide/wordpress-speed-china/
  our WordPress in China page -> /wordpress-in-china/
  our Astro page -> /astro/
LOCALIZED SLUGS: fr wordpress-ou-astro-chine · es wordpress-o-astro-china · de wordpress-oder-astro-china
CLIENT SIGN-OFF ON RECORD: none needed. No client name or client figure appears.
LINK SUBSTITUTIONS: none.
THIRD-PARTY MEASUREMENTS CITED (GFW rule):
  ajax.googleapis.com (HTTPS), GreatFire, mainland test network, last tested 2026-08-22
  secure.gravatar.com (HTTPS), GreatFire, mainland test network, last tested 2026-08-31
  vercel.app (HTTPS), GreatFire, mainland test network, last tested 2026-09-14
  developers.google.com/speed/libraries (website load), 21YunBox, Alibaba Cloud cn-zhangjiakou, 2026-08-28
  614 global websites, Chinafy vendor benchmark, WebPageTest Beijing, Virginia and London, published 2026-04-14
-->
