---
title: "WordPress or Astro for a China Site"
slug: wordpress-vs-astro-china
description: "How to choose WordPress or a static Astro build for mainland China, argued from how requests cross the border, and what static costs a weekly publisher."
excerpt: "How to choose between WordPress and a static Astro build for China, argued from the way requests cross the border."
template: guide
author: cyril-drouin
category: Technology
reviewBy: 2026-11-20
---

<!-- HERO SECTION -->

WordPress or Astro for a China site

<!-- INTRODUCTION -->

Pick WordPress if your marketing team publishes every week and nobody
technical sits on the team. Pick a static Astro build if the site changes once
a month or less and has to hold up for visitors in mainland China. Either way,
serve it from a filed server inside the mainland. The case for a WordPress
alternative in China rests on how many hosts a page touches and how a blocked
host behaves. No published test compares the two stacks from China, so this
guide makes no speed claim.

| Question                              | WordPress                                   | Static Astro build                              |
| ------------------------------------- | ------------------------------------------- | ----------------------------------------------- |
| Which hosts does a page call?         | Whatever the theme and active plugins add   | Whatever is in the build output, readable once  |
| What calls out from the server?       | Update checks to api.wordpress.org          | Nothing; the server hands out files             |
| Who can publish?                      | Anyone with a login                         | A developer, or an editor through a headless CMS |
| Time from edit to live page           | Seconds                                     | One build and deploy, usually a few minutes     |
| Needs an ICP filing on a mainland server? | Yes                                     | Yes                                             |

<!-- SECTION: Every extra host is a trip across the border -->

## Every extra host is a trip across the border

A page is rarely one request. The HTML calls a stylesheet, the stylesheet calls
a font, a plugin calls a script from someone else's server. Each new hostname
the browser meets costs a lookup and two handshakes before a single byte
arrives.

> On a first request, latency includes a DNS lookup, a TCP handshake and the
> secure TLS negotiation, and the greater the number of hostnames, the more
> DNS lookups need to be done.
> Source: MDN Web Docs, Understanding latency, February 2025. https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Understanding_latency

From inside China, that set-up cost is where the border bites. Each handshake
is a round trip, and a round trip to a server in Frankfurt or Virginia from a
phone in Chengdu is long before any firewall gets involved.

> Chinafy tested 614 global websites with WebPageTest from Beijing, Virginia
> and London and found time to first byte 4 to 4.5 times higher in Beijing.
> This is a vendor benchmark, and it covers global sites, not WordPress or
> Astro sites as a group.
> Source: Chinafy, China Website Performance Benchmarks 2026, April 2026. https://www.chinafy.com/blog/china-website-performance-benchmarks-2026

Time to first byte is mostly waiting. It is the gap before content starts to
flow, so it tracks round trips far more than page weight. That is why cutting
origins does more for a China page than cutting kilobytes. A 40KB script from a
fourth host costs more than 400KB of images from the host the browser already
has open.

<!-- SECTION: A blocked host hangs instead of failing -->

## A blocked host hangs instead of failing

A slow host is a nuisance. A blocked one is worse, because the browser does not
get a quick refusal. It waits.

> GreatFire reads https://ajax.googleapis.com, Google's library host, as
> blocked: 1 of 1 conclusive tests failed in mainland China, last tested on
> 22 August 2026.
> Source: GreatFire, August 2026. https://en.greatfire.org/https/ajax.googleapis.com

> From an Alibaba Cloud (阿里云) instance in Zhangjiakou on 28 August 2026,
> Google's Hosted Libraries website returned no first byte in 3 of 3 runs, each
> abandoned at the 60-second limit. This was a timed load of the website, not
> of ajax.googleapis.com.
> Source: 21YunBox, Google Hosted Libraries in China, reviewed October 2026. https://www.21cloudbox.com/support/google-hosted-libraries.html

Where the reference sits decides the damage. A stylesheet or a plain script tag
in the head stops the page until it arrives.

> CSS is render blocking: the browser blocks page rendering until it receives
> and processes all the CSS.
> Source: MDN Web Docs, Critical rendering path, February 2025. https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Critical_rendering_path

So one render-blocking line pointing at a blocked host can leave a visitor
looking at a white screen. The same file copied onto your own server costs
almost nothing, because the browser already has a connection open to it. Our
guide to JavaScript CDNs in China walks through the common hosts one by one.

<!-- SECTION: A static build has a host list you can read -->

## A static build has a host list you can read

This is the part of the WordPress alternative question that matters most in
China. On WordPress, the list of hosts a page calls is a live property of the
site. Install a plugin on Tuesday and Wednesday's pages may call a new domain.
Change a theme setting and the fonts may come from somewhere else. Nobody has
to touch code for the list to change.

Astro resolves that list before the site goes live.

> By default, Astro pages, routes and API endpoints are pre-rendered at build
> time as static pages.
> Source: Astro Docs, On-demand rendering, updated June 2026. https://docs.astro.build/en/guides/on-demand-rendering/

The output is a folder of HTML, CSS, JavaScript and images. You can search it
for every external address in a minute, and the answer holds until the next
build. If a third-party host shows up, someone put it there in the code, and the
change sits in version control with a name and a date.

| Who makes the call | WordPress on a mainland server                        | Static build on a mainland origin            |
| ------------------ | ----------------------------------------------------- | -------------------------------------------- |
| Visitor's browser  | Theme and plugin assets, plus anything added in admin | Only the hosts written into the build        |
| The server         | Update checks to api.wordpress.org                    | None; it serves files                        |
| Editors' browsers  | Gravatar on every admin screen                        | The CMS, if there is one, wherever it lives  |
| Who can add a host | Anyone who can install a plugin                       | A developer, through a commit                |

A disciplined WordPress team can get to a short, stable host list too. It takes
a plugin audit and a habit of saying no. The static build gives you the list as
a by-product of how it works.

<!-- SECTION: What a WordPress server does on its own -->

## What a WordPress server does on its own

WordPress calls home. On a mainland server, those calls go to a service that
limits Chinese networks.

> WordPress 7.1.3 sends its core version check to api.wordpress.org with a
> 3-second timeout outside scheduled tasks.
> Source: WordPress core 7.1.3, wp-includes/update.php, read October 2026. https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/update.php

> WordPress.org staff, replying to a report of 429 errors from China: "Several
> Chinese network sources are rate-limited on certain services due to a high
> level of abuse and non-legitimate traffic coming from those sources."
> Source: WordPress.org Meta Trac, ticket #5106, March 2020. https://web.archive.org/web/20260116133057/https://meta.trac.wordpress.org/ticket/5106

The dashboard doesn't announce the 429. Updates simply stop showing up. Then
there is the admin itself. WordPress builds every avatar address on
secure.gravatar.com, and the admin bar draws one on every screen.

> GreatFire reads https://secure.gravatar.com as blocked: 1 of 1 conclusive
> tests failed in mainland China, last tested on 31 August 2026.
> Source: GreatFire, August 2026. https://en.greatfire.org/https/secure.gravatar.com

That one comes from your editors' browsers, not the server, so it hits a team
in Shanghai wherever the site is hosted. Our guide to why wp-admin is slow in
China covers the fixes. A static site served from the mainland has no admin
screen and no update check. The server hands out files and makes no calls of
its own.

<!-- SECTION: Where the build is served from -->

## Where the build is served from

Static is half the answer. The other half is where the files live, and this is
where a lot of Astro advice written outside China goes wrong.

ChinaWebFoundry's own site is an Astro build deployed on Vercel. It is written
for readers outside China, and Vercel is clear about what that means for
mainland visitors.

> Vercel has no servers or CDN nodes in mainland China. China's network
> controls can block or throttle traffic to foreign domains, including
> Vercel's .vercel.app subdomains, and Vercel can't guarantee availability or
> performance within mainland China.
> Source: Vercel Knowledge Base, Accessing Vercel-hosted sites from mainland China, published November 2025, updated September 2026. https://vercel.com/kb/guide/accessing-vercel-hosted-sites-from-mainland-china

> GreatFire reads https://vercel.app as blocked: 4 of 4 conclusive tests failed
> in mainland China, last tested on 14 September 2026.
> Source: GreatFire, September 2026. https://en.greatfire.org/https/vercel.app

Vercel's own list of fixes ends with a separate deployment inside the
mainland, which in its words needs an ICP licence. For a marketing site, that
deployment needs an ICP filing (ICP备案) on a mainland server.

> Alibaba Cloud says a site on a mainland node must complete the ICP filing
> first; its Hong Kong and overseas servers need none.
> Source: Alibaba Cloud (阿里云), ICP filing overview, August 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview

A static build on an overseas platform and a static build served from a filed
mainland origin share a framework and very little else. For a China audience,
only the second one counts. On client sites, the build runs on a CI pipeline
outside China and the finished files are pushed to Alibaba Cloud, Tencent
Cloud (腾讯云) or Huawei Cloud (华为云).

<!-- SECTION: What a static build costs a marketing team -->

## What a static build costs a marketing team

The trade-off is real, and it lands on the people who publish.

There is no editor a marketing team will recognise. Content lives in Markdown
files in a code repository unless you add a content management system. There
is no plugin store either. A form, a cookie banner, a search box: each one is
a piece of code someone writes or wires in, then maintains.

Every change goes through a build. An edit becomes a commit, the commit
triggers a build, and the build is pushed to the server. On a small site that
is a few minutes. It still means a typo found at 6pm waits for a pipeline
rather than a Save button.

And a developer stays in the loop for things WordPress lets a marketer do
alone: a new landing page layout, a new field on a form, a redirect.

A headless CMS takes some of that sting out.

> WordPress can be used as a headless CMS to provide content to an Astro
> project, through the REST API that every WordPress site exposes by default.
> Source: Astro Docs, Headless WordPress and Astro, updated October 2026. https://docs.astro.build/en/guides/cms/wordpress/

Editors keep the dashboard they know, and the WordPress install can sit
outside China, where its update checks work. The mainland server only ever
receives built files. Front-end plugins (page builders, form plugins, sliders)
stop doing anything, because Astro draws the pages.

<!-- SECTION: When WordPress is the right answer -->

## When WordPress is the right answer

If your marketing team publishes every week and there's no developer on
retainer, WordPress wins. That isn't a consolation prize.

A team that ships three posts and a campaign page a week needs to do it without
filing a ticket. WordPress gives them drafts, scheduled posts, revisions, user
roles and a preview that matches the live page. Every one of those exists for
a static site only if someone builds or buys it.

It also wins when the site is the product. Membership, courses, a WooCommerce
catalogue that the team updates daily: those are plugin territory, and
rebuilding them on a static stack costs more than it saves.

The China problems have known fixes. Gravatar can be switched off or pointed at
a mainland mirror. Updates can run from outside China, or through a mirror.
Third-party scripts and fonts can be self-hosted. Our guide to WordPress speed
in China goes through them, and our WordPress in China page sets out how we
run the stack on a mainland server. Kept that way, the host list stays short.
It just needs someone to keep it short.

The honest summary of the choice: Astro makes a short host list the default,
and WordPress makes publishing the default. Pick the one whose default your
team would otherwise fight.

<!-- SECTION: Frequently asked -->

## Frequently asked

**Is Astro faster than WordPress in China?**

No published test compares the two from inside China, and we don't print one.
What differs is how many hosts a page calls and whether a blocked one can hold
the page. A WordPress site with its third-party calls removed, served from a
filed mainland server, can load quickly too. Our Astro page sets out how we
build the static version.

**Does Baidu read an Astro site?**

Yes. Both stacks send finished HTML in the first response, which is the safe
case for any crawler. Baidu (百度) announced a rendering crawler,
Baiduspider-render/2.0, on 24 March 2017, to fetch CSS, JavaScript and
images. It publishes nothing on how much it renders, so HTML that arrives
complete stays the cautious choice, and both stacks give you that.

**Can we keep WordPress and still serve a static site?**

Yes, with WordPress as a headless CMS. Editors write in the dashboard, Astro
pulls the content through the REST API at build time, and only the built files
go to the mainland server. You give up front-end plugins and instant
publishing. Each change waits for a build, usually a few minutes.

**Does a static site still need an ICP filing?**

Yes, if it is served from a mainland server. The filing depends on where the
site is hosted, not on how it is built. A static build on Alibaba Cloud's
mainland nodes needs the ICP filing (ICP备案) before it goes live, exactly as a
WordPress site would. A Hong Kong server needs none, and every request then
crosses the border.

<!-- CTA -->

CTA: Book a 30-minute scoping call with our Shanghai team
