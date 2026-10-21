---
title: "WordPress or Astro for a China Site"
subtitle: "How to choose between WordPress and a static Astro build for China, argued from the way requests cross the border."
summary: "Choosing WordPress or a static Astro build for mainland China, argued from how requests cross the border, and what static costs a weekly publisher."
visual: "/images/guides/wordpress-vs-astro-china.webp"
order: 49
published: true
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
reviewBy: "2026-11-20"
category: "Technology"
author: "cyril-drouin"
---

Pick WordPress if your marketing team publishes every week and has no developer
of its own. A static Astro build suits a site that changes less often and has
a developer available. Either way, serve it from a
filed server inside the mainland. The case for a WordPress alternative in China
rests on how many hosts a page touches and how a blocked host behaves. No
published test compares the two stacks from China, so this guide makes no speed
claim.

| Question                                  | WordPress                                 | Static Astro build                               |
| ----------------------------------------- | ----------------------------------------- | ------------------------------------------------ |
| Which hosts does a page call?             | Theme, plugins and browser scripts        | Built files plus any browser scripts             |
| What calls out from the server?           | Update checks to api.wordpress.org        | Nothing; the server hands out files              |
| Who can publish?                          | Anyone with a login                       | A developer, or an editor through a headless CMS |
| When does an edit go live?                | On Save                                   | After a build and a deploy                       |
| Needs an ICP filing on a mainland server? | Yes                                       | Yes                                              |

Every source below was checked on 22 October 2026.



## Every extra overseas host can add a border crossing

A page is rarely one request. The HTML calls a stylesheet and the stylesheet
calls a font. A plugin adds a script from someone else’s server, and an
analytics tag adds another. A fresh HTTPS connection over TCP needs a lookup
and connection setup before the response arrives; cached DNS and reused
connections can avoid some of that work.

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
in it. What fills it is round trips and server time. Removing an unnecessary
overseas origin can remove connection setup and a point of failure. Image size
still matters after the response starts arriving.



## A blocked connection can hold up the page

A blocked connection can leave the browser waiting for a timeout. The result
depends on how the connection fails and where the resource sits in the page.

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

> A classic script without async or defer is fetched and executed before
> parsing continues.
> Source: MDN Web Docs, The Script element, May 2026. https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script

> CSS is render blocking: the browser blocks page rendering until it receives
> and processes all the CSS.
> Source: MDN Web Docs, Critical rendering path, February 2025. https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Critical_rendering_path

That means one render-blocking line pointing at a blocked host can leave a
visitor looking at a white screen. The same file copied onto your own server
can reuse the browser’s existing connection, though it still needs downloading.
Our [guide to JavaScript CDNs in China](/resources/china-web-guide/javascript-cdn-china/) walks through the common hosts one by one.



## A WordPress alternative with a host list you can read

On WordPress, the list of hosts a page calls is a live property of the site.
Install a plugin on Tuesday and Wednesday’s pages may call a new domain. A theme
setting changed by someone in marketing can move the fonts to another host
without a line of code changing.

An Astro build gives the developer files to inspect before the site goes live.

> By default, [Astro page](/astro/)s, routes and API endpoints are pre-rendered at build
> time as static pages.
> Source: Astro Docs, On-demand rendering, updated 19 June 2026. https://docs.astro.build/en/guides/on-demand-rendering/

The output is a folder of plain files. Searching it finds addresses written into
the output. JavaScript can construct more requests at runtime, and a remote
script can change without a new build. Check the browser’s network activity as
well as the files. Keeping scripts local makes that audit easier to maintain.

> Astro supports browser scripts, including scripts loaded from another server.
> Source: Astro Docs, Scripts and event handling, updated 19 June 2026. https://docs.astro.build/en/guides/client-side-scripts/

| Who makes the call | WordPress on a mainland server                        | Static build on a mainland origin                     |
| ------------------ | ----------------------------------------------------- | ----------------------------------------------------- |
| Visitor’s browser  | Theme and plugin assets, plus anything added in admin | Built assets and requests made by browser scripts     |
| The server         | Update checks to api.wordpress.org                    | None; it serves files                                 |
| Editors’ browsers  | Gravatar in the default admin interface               | The CMS login, if there is one, wherever it is hosted |
| Who can add a host | Plugin installers and people editing integrations     | Developers, CMS embeds or remote script providers     |

A disciplined WordPress team can get to a short, stable host list too. It takes
a plugin audit and a habit of saying no to new ones. On a static build the list
is easier to review when external scripts and editor-supplied embeds are limited.



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
the admin itself. By default, WordPress builds avatar addresses on
secure.gravatar.com, including the avatar in the admin bar.

> GreatFire reads https://secure.gravatar.com as blocked: 1 of 1 conclusive
> tests failed in mainland China, last tested on 31 August 2026.
> Source: GreatFire, August 2026. https://en.greatfire.org/https/secure.gravatar.com

The avatar request comes from your editors’ browsers, so it hits a team in
Shanghai wherever the site is hosted. Our [guide to why wp-admin is slow in China](/resources/china-web-guide/wp-admin-slow-china/)
covers the fixes. A static site served from the mainland has no admin screen and
no update check. The server hands out files and makes no calls of its own.



## A static build on Vercel is still outside China

A static build still needs a hosting decision. Where the files sit affects
whether a visitor in China can fetch them.

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
licence (ICP许可证) is a separate permit for regulated commercial internet
information services; the business model determines which permissions apply.

> Alibaba Cloud says a site on a mainland node must complete the ICP filing
> first; its Hong Kong and overseas servers need none.
> Source: Alibaba Cloud (阿里云), ICP filing overview, August 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview

A mainland origin avoids an overseas fetch for the files hosted there.
On the client sites we run, the build runs on a CI
pipeline outside China and the finished files are pushed to Alibaba Cloud,
Tencent Cloud (腾讯云) or Huawei Cloud (华为云).



## What a static build costs a marketing team

There is no editing screen a marketing team would recognise. Content lives in
Markdown files in a code repository unless you add a content management system.
WordPress plugins cannot simply be installed in Astro. A contact form, a cookie
banner, site search, a newsletter sign-up: each needs code or an integration
that someone configures and maintains.

Every change goes through a build. An edit becomes a commit, the commit triggers
a build, and the build is pushed to the server. A typo found at 6pm waits for
the pipeline to finish.

And a developer stays in the loop for things WordPress lets a marketer do alone,
like a new landing page layout or an extra field on a form.

A headless CMS takes some of that sting out.

> WordPress can be used as a headless CMS to provide content to an Astro
> project, through the REST API that every WordPress site exposes by default.
> Source: Astro Docs, Headless WordPress & Astro, updated 19 October 2026. https://docs.astro.build/en/guides/cms/wordpress/

Editors keep the dashboard they know, and the WordPress install can sit outside
China, where its update checks work. The mainland server only ever receives
built files. Front-end plugins such as page builders and forms need separate
integration work, because Astro draws the pages.



## When WordPress is the right answer

If your marketing team publishes every week and there’s no developer on
retainer, WordPress wins.

A team that ships three posts and a campaign page a week needs to do it without
raising a ticket. WordPress gives them drafts, scheduled posts, revisions, user
roles and a preview that matches the live page. A static site needs a CMS or
another editorial workflow to provide those functions.

It also wins when the site is the product. Member areas, online courses, a
booking system, a WooCommerce catalogue the team updates daily: that is plugin
territory. Price the replacement work before choosing a static stack.

The China problems have known fixes. Remove remote avatar requests. Fetch
verified updates outside China and deploy them to the mainland server.
Self-host scripts and fonts where their licences allow. Our [guide to WordPress speed in China](/resources/china-web-guide/wordpress-speed-china/) goes through them, and our [WordPress in China page](/wordpress-in-china/) sets out how we run
the stack on a mainland server. Someone on the team has to own that list after
launch.

Count the people who will edit the site next month, then
count the developers you can call. If the editors outnumber the developers and
the site changes weekly, run WordPress and keep it clean. A site that changes
monthly, with a developer on hand, is less work in China as a static build.



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

> Baidu announced Baiduspider-render/2.0 on 24 March 2017 to fetch CSS,
> JavaScript and images.
> Source: Baidu Search Resource Platform (百度搜索资源平台), March 2017. https://ziyuan.baidu.com/wiki/990

**Can we keep WordPress and still serve a static site?**

Yes, with WordPress as a headless CMS. Editors write in the dashboard, Astro
pulls the content through the REST API at build time, and only the built files
go to the mainland server. You give up front-end plugins and instant publishing,
since each change waits for the next build.

**Is a static site cheaper to run?**

We don’t publish prices, so here is what moves the bill. A static site has no
PHP server or database to patch, which makes hosting and upkeep lighter. Each
change to layout or features costs developer time instead of editor time,
though. Ask for a maintenance estimate based on your actual publishing schedule
and the features your editors need.

**Does a static site still need an ICP filing?**

Yes, if it is served from a mainland server. The filing follows the server,
whatever the stack. A static build on Alibaba Cloud’s mainland nodes needs the
ICP filing (ICP备案) before it goes live, exactly as a WordPress site would. A
Hong Kong server needs none; fetching files from that server crosses the border.
