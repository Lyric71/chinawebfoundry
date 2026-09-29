---
title: "Migrating a WordPress Site Into China"
slug: migrate-wordpress-to-china
description: "The ICP filing sits on the critical path and everything waits behind it. A realistic fourteen-week sequence, with the blockers named."
excerpt: "What actually gates a China migration, in what order, and why the ports stay closed until the filing clears."
template: guide
author: echo-peng
category: Hosting
---

<!-- HERO SECTION -->

Migrating a WordPress site into China

<!-- INTRODUCTION -->

To migrate WordPress to China, you file first and move second. The ICP filing
(ICP备案) sits on the critical path. Until it clears, a mainland server won’t
serve your domain to anyone, so there is no staging link on the production host
and no quiet beta. Everything else in the project feeds the filing or waits for
it.

With a mainland entity already in place, we plan fourteen weeks for a typical
WordPress site: a company marketing site with no online checkout. The filing
takes three to six of them. The rebuild runs in parallel, on a copy that lives
anywhere except the server you are moving to. The provider rules below were
checked against Alibaba Cloud and Tencent Cloud documentation on 24 September
2026.

Plans that treat the filing as paperwork on the side tend to find this out in
the week they meant to launch. The new server is ready, and it can’t show the
site to anyone.

| Work                              | Before the filing clears? | What it waits on                |
| --------------------------------- | ------------------------- | ------------------------------- |
| Mainland entity                   | Must already exist        | Nothing. Everything waits on it |
| Mainland server                   | Yes, and it has to        | The filing is made against it   |
| Rebuild and dependency fixes      | Yes, off the new server   | The dependency audit            |
| Public staging on the new server  | No                        | The filing                      |
| DNS cutover                       | No                        | The filing, then testing        |
| Public security filing (公安备案) | No, it follows launch     | 30 days from opening            |

<!-- SECTION: Why the filing comes first -->

## Why the filing comes first

Alibaba Cloud and Tencent Cloud both put this in writing, in almost the same
words.

> Under Ministry of Industry and Information Technology (工信部) rules, a domain
> resolved to a server in the Chinese mainland must complete its website filing
> before website access can be opened.
> Source: Alibaba Cloud (阿里云) help centre, last updated 4 September 2026.
> https://help.aliyun.com/zh/dws/support/how-do-i-troubleshoot-the-failures-to-access-a-website-by-using-its-domain-name

> A domain resolved to Tencent Cloud resources in mainland China must complete
> ICP filing first, or it is intercepted by Tencent Cloud’s monitoring for
> unfiled domains.
> Source: Tencent Cloud (腾讯云) documentation, last updated 3 September 2026.
> https://cloud.tencent.com/document/product/243/19630

On our projects, that interception shuts ports 80 and 443, the standard HTTP and
HTTPS ports, to your domain. They stay shut from the day the server is rented
until the day the ICP filing (ICP备案) number is issued. The provider enforces
it on its own network.

> Alibaba Cloud’s own check takes 1 to 2 working days. The provincial
> Communications Administration (省级通信管理局) review that follows generally
> takes 1 to 20 working days.
> Source: Alibaba Cloud (阿里云) help centre, ICP filing process overview, last
> updated 26 August 2026.
> https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview

That is up to 22 working days on paper. Documents take time to gather and
applications come back for corrections, so plan three to six weeks. Our guide to
ICP filing for foreign companies lists the documents. A site that sells online
may also need the commercial ICP licence (ICP许可证), which is a separate and
slower application.

An in-country CDN won’t get you round the filing either.

> The Cloudflare China Network requires an Enterprise plan and “a valid ICP
> (Internet Content Provider) filing or license for each apex domain you wish to
> onboard”.
> Source: Cloudflare developer documentation, last updated 30 April 2026.
> https://developers.cloudflare.com/china-network/

<!-- SECTION: Week zero: the mainland entity -->

## Week zero: the mainland entity

The ICP filing (ICP备案) is made in the name of a mainland company, so the
company has to exist before the project does.

> To apply for ICP filing, the filing entity must be an enterprise registered in
> the Chinese mainland or a Chinese mainland resident.
> Source: Alibaba Cloud (阿里云) help centre, ICP filing for enterprises outside
> the Chinese mainland, last updated 20 August 2026.
> https://help.aliyun.com/en/icp-filing/basic-icp-service/product-overview/icp-filing-application-for-enterprises-outside-the-chinese-mainland

A mainland subsidiary is your filing entity. With no subsidiary, settle the
question before anyone briefs a designer. Setting up a company in China is a
legal project on a timeline of its own, and it has to finish first.

Week zero also needs the domain registered and real-name verified, with the
entity’s business licence to hand. And it needs a person in China who can sign
for the company and answer the provider’s questions while the application is
under review.

A company with no mainland entity has two routes left, a Hong Kong server or a
delivery layer in front of its current host. The trade-off between them is set
out in our guide to why WordPress is slow in China.

<!-- SECTION: The Alibaba two-platform trap -->

## The Alibaba two-platform trap

Alibaba Cloud (阿里云) sells through two front doors. alibabacloud.com is the
international platform, in English. The China platform lives at aliyun.com. They
share a logo and most of their product names.

> Alibaba Cloud international site (alibabacloud.com) accounts do not support
> ICP filing applications, for websites or apps. A filing needs a China site
> (aliyun.com) account.
> Source: Alibaba Cloud (阿里云) help centre, last updated 20 August 2026.
> https://help.aliyun.com/en/icp-filing/basic-icp-service/product-overview/icp-filing-application-for-enterprises-outside-the-chinese-mainland

Head office IT opens an account on alibabacloud.com, because that site answers
in English and takes the corporate card. It buys a server and starts building.

Then the filing begins, and the account can’t file. The server itself has rules
to meet.

> An ICP filing with Alibaba Cloud must be made against an Alibaba Cloud server
> in the Chinese mainland, and an ECS instance qualifies only on a subscription
> of more than 3 months.
> Source: Alibaba Cloud help centre, server and access information check, last
> updated 2 September 2026.
> https://help.aliyun.com/en/icp-filing/basic-icp-service/user-guide/icp-filing-server-access-information-check

So the server comes first, on the China account, paid for at least a quarter,
and it serves nothing public until the filing clears. Budget for that idle
quarter. For Alibaba Cloud, Tencent Cloud (腾讯云) and Huawei Cloud (华为云)
side by side, see the guide to WordPress hosting in China.

<!-- SECTION: What gets rebuilt and what gets copied -->

## What gets rebuilt and what gets copied

The content is the easy part. Posts, pages, custom fields, users, menus and the
media library travel in a database dump and a copy of the uploads folder.

Anything that calls a host outside China while a page loads gets rebuilt: fonts,
scripts, maps, video, captchas, analytics and social login. Check outgoing email
as well. If the service that sends your form notifications sits abroad, it needs
the same treatment.

The hosting model changes with the move. Alibaba’s guide to its Simple
Application Server (轻量应用服务器), updated 19 August 2026, builds a site from
a preset WordPress application image, which is an operating system with
WordPress installed on it. We haven’t found a managed WordPress product on any
mainland cloud. Updates, backups and the patch level belong to you or to whoever
runs the site.

Updates need their own plan.

> A Chinese WordPress user reported 429 errors on every WordPress.org subdomain.
> WordPress.org replied the same day that “several Chinese network sources are
> rate-limited on certain services due to a high level of abuse”, and that it
> would not provide whitelisting.
> Source: WordPress.org Meta Trac, ticket #5106, 21 March 2020, read from the
> Internet Archive copy of 16 January 2026.
> https://web.archive.org/web/20260116133057/https://meta.trac.wordpress.org/ticket/5106

The dashboard doesn’t announce it. Update checks fail and the site quietly stops
offering updates. Before cutover, decide whether patches come from a domestic
mirror or from a named person who stages them outside China.

<!-- SECTION: Dependency remediation -->

## Fix the dependencies while the filing is in review

This is where most of the fourteen weeks go. Load the current site from a
mainland connection (a colleague in Shanghai with a laptop will do) and list
every host in the network panel. Each gets a verdict: keep, self-host, replace
or delete. Our guide to the WordPress plugins that break in China works through
the usual suspects host by host, with dated verdicts.

> Median page load went from 23.4 seconds on a European origin to 1.2 seconds on
> a mainland origin, and roughly half of that improvement came from deleting
> external calls rather than from moving the server.
> Source: ChinaWebFoundry, published 29 August 2026.
> https://www.chinawebfoundry.com/resources/china-web-guide/is-wordpress-blocked-in-china/

That was one of our migrations. The carrier and test date behind it aren’t
published yet; they go into a case study this autumn.

So remediation belongs in the filing weeks, done on a copy of the site: a local
build, or a Hong Kong server running the same PHP and database versions as the
mainland one.

<!-- SECTION: Cutover -->

## Cutover, DNS and the day the ports open

The ICP filing (ICP备案) number arrives. Deploy the rebuilt site to the mainland
server and put the number in the footer.

> After the filing succeeds, the site must display the ICP number issued by the
> ministry at the bottom of the page, linked to beian.miit.gov.cn. Leaving it
> off can bring an order to correct it and a fine of 5,000 to 10,000 yuan from
> the provincial Communications Administration.
> Source: Alibaba Cloud (阿里云) help centre, last updated 12 August 2026.
> https://help.aliyun.com/zh/icp-filing/basic-icp-service/the-icp-record-post-processing-1

Before the switch, test the new server from inside the country by pointing a
mainland machine’s hosts file at it (a local override that skips DNS). Do it
from a cloud region and from a home broadband line. They can disagree, and your
visitors are on the home line.

Lower the DNS time to live a couple of days before the switch, so the change
spreads fast and you can roll back quickly if you have to. Pick a weekday
morning, Beijing time, well clear of a Chinese public holiday. Switch the
record, then run the same tests again. Keep the old origin running until the new
one has held for a week; your current site serves normally right up to cutover.

One more clock starts the day the site opens: the public security filing, a
separate registration with the public security authorities.

> A website must complete its public security filing (公安备案) within 30 days
> of opening.
> Source: Alibaba Cloud (阿里云) help centre, ICP filing process overview, last
> updated 26 August 2026.
> https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview

<!-- SECTION: A realistic fourteen-week timeline -->

## How long it takes to migrate WordPress to China

The filing alone is three to six weeks, so why fourteen? Because the server
can’t be bought until the China account exists, and nothing deploys until the
filing clears. The public security filing and Baidu wait for launch. This is the
table the Shanghai team plans from, for a typical WordPress site with the entity
in place.

| Phase                                            | Weeks    | Blocking dependency                            | Who owns it                            |
| ------------------------------------------------ | -------- | ---------------------------------------------- | -------------------------------------- |
| Dependency audit                                 | 1 to 2   | Access to the current site                     | Web team                               |
| China account, server, domain checks             | 1 to 2   | Mainland entity and business licence           | Your China entity                      |
| ICP filing (ICP备案), submitted and reviewed     | 2 to 7   | Mainland server on a 3-month-plus subscription | Entity, provider, provincial regulator |
| Rebuild and remediation, off the new server      | 2 to 9   | The dependency audit                           | Web team                               |
| Chinese content and localisation                 | 3 to 10  | Approved source copy                           | Marketing                              |
| Deploy to the mainland server, footer ICP number | 8 to 10  | Filing number issued                           | Web team                               |
| Testing from mainland vantage points             | 10 to 12 | Site deployed                                  | Web team                               |
| DNS cutover                                      | 12       | Test sign-off                                  | Web team and DNS owner                 |
| Public security filing (公安备案)                | 12 to 14 | Site live, 30-day window                       | Your China entity                      |
| Baidu (百度) verification and first submissions  | 12 to 14 | Site live                                      | Marketing                              |

The filing row is the one that moves. Some provinces approve in days. A single
application returned for a correction can use up all the slack there is. Two
costs catch budgets out: the server you pay for through the quiet weeks, and a
week or more of two hosting bills while the old origin stays up. Our China
migration service is scoped from this same table, and our WordPress in China
page covers when a mainland move is the right call in the first place.

<!-- SECTION: Frequently asked -->

## Frequently asked

### Can we test on the mainland server before the filing clears?

You can install and configure over SSH, but the site won’t load on your domain
until the ICP filing (ICP备案) number is issued. The provider intercepts it.
Build and review the site on a copy somewhere else, then move the finished site
across once the number arrives.

### Do we need a Chinese company to host WordPress in China?

For a mainland server, yes. The filing entity has to be an enterprise registered
in the Chinese mainland or a mainland resident, and an unfiled domain doesn’t
serve from a mainland server. A company without one can use a Hong Kong server
or a delivery layer instead.

### Our domain already has an ICP number with another host. Do we start again?

You transfer it. Alibaba Cloud’s help centre, updated 4 September 2026, lists a
filing held with another provider as a reason a site stays unreachable, and the
fix is a filing transfer (接入备案) to the new host. The site doesn’t serve from
the new server until that clears, so the transfer sits on the critical path too.

### Can we keep our current theme?

Often, yes. A theme can move as it is if nothing in it calls a host outside
China while the page loads. The audit tells you. Themes that pull fonts or
scripts from Google, or embed video from abroad, need those calls replaced with
self-hosted files or domestic services before cutover.

<!-- CTA -->

CTA: Book a 30-minute scoping call with our Shanghai team

<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate the hero image from the prompt below with the generate-image-openai
skill, convert to WebP with sharp (max width 1050, quality about 78, no
enlargement, under 350KB), then wire it in as the guide's visual.

- Save to:    public/images/guides/migrate-wordpress-to-china.webp
- Reference:  /images/guides/migrate-wordpress-to-china.webp
- Format:     .webp, landscape 3:2 generated, cropped by the layout to 21:9
- Style rule: candid normal-life photo with real-life defects, China
              setting, only Chinese people, the article's subject visible
              on a screen. No AI polish, no diagrams, no text overlays, no
              watermark, no logos except what is on screen.

IMAGE PROMPT (use verbatim):

Candid handheld photograph in the cramped admin office of a small foreign-owned manufacturing subsidiary in Suzhou Industrial Park on a humid late-September morning, a Chinese office manager in her thirties in a plain cardigan leaning in towards a slightly scuffed laptop that shows the Alibaba Cloud ICP filing console in Simplified Chinese with a half-completed multi-step application form, an upload box for documents and an orange progress bar, beside the laptop a photocopy of a Chinese business licence with a red circular company chop pressed slightly crooked on it, a real red chop resting on a brass ink pad, a smartphone lying face-up showing a verification code message, a ring binder of stapled forms, a paper cup of green tea with leaves settled at the bottom and a tangle of charging cables, fluorescent ceiling light mixing with grey daylight from a window with half-open vertical blinds so one side of her face is cooler than the other, faint fingerprints and glare on the laptop screen, her right hand caught mid-movement on the trackpad and a little blurred, the frame taken from a standing colleague's eye level and tilted a few degrees with the left edge of the desk cropped off, mild phone-camera grain and slightly soft focus away from the screen, no studio lighting, no colour grade, no text overlay, no watermark, no logos other than what appears on the screens.
===================================================================== -->

<!-- SCHEMA
Type: Article
FAQPage: no (A cluster; the brief does not ask for FAQ schema)
Breadcrumb: Home > China Web Guide > Migrating a WordPress Site Into China
Author: Echo Peng
datePublished: 2026-09-29
Measurement: none of our own beyond F32. harness/latest.json is empty; A5 is
a T1 piece and is not gated on it. The only timing figure is ChinaWebFoundry's
published 23.4s to 1.2s migration pair, labelled as ours in the copy with the
missing carrier and test date stated. Every other figure is a provider or
regulator rule (review windows, the 3-month server subscription, the 30-day
public security filing deadline, the footer fine), each from the provider's
own dated page.
-->

<!-- ASSET BRIEF
TABLES:
  1. Answer table in the introduction: six pieces of work, whether each can
     start before the ICP filing clears, and what each waits on. Derived from
     the provider rules cited in the body; no external data.
  2. Fourteen-week phase table in "How long it takes to migrate WordPress to
     China": phase, weeks, blocking dependency, who owns it. ChinaWebFoundry's
     planning figure, stated as such in the copy. The brief names this as the
     asset the article gets linked for. No harness run.
CHARTS: none. (A Gantt rendering of table 2 would help the page get linked;
  build it later as HTML/CSS in the layout, never as an image with text.)
SCREENSHOTS: optional, not required for publish. If added, the aliyun.com ICP
  filing console with every entity name, ID number, phone number and filing
  number blurred.
DOWNLOADS: none. Candidate for later: the phase table as a CSV planning sheet,
  no gate.
INTERNAL LINKS:
  our guide to ICP filing for foreign companies -> /resources/china-web-guide/icp-licence-filing-foreign-companies/
  guide to why WordPress is slow in China -> /resources/china-web-guide/wordpress-speed-china/
  guide to WordPress hosting in China -> /resources/china-web-guide/wordpress-hosting-china/
  guide to the WordPress plugins that break in China -> /resources/china-web-guide/wordpress-plugins-china/
  China migration service -> /services/china-migration/
  WordPress in China page -> /wordpress-in-china/
LOCALIZED SLUGS: fr migrer-wordpress-vers-chine · es migrar-wordpress-a-china · de wordpress-nach-china-migrieren
CLIENT SIGN-OFF NEEDED: none. The migration figure is already published on the
  site unattributed to a named client, and no client name, sector or domain
  appears here.
HARNESS ROWS CITED: none. harness/latest.json has generated null, vantages []
  and rows []. A5 is T1 and is not gated on the harness.
BRIEF DEVIATION: the brief asks for a sideways link to wordpress-icp-filing.
  That guide does not exist yet (brief dated 2026-10-20) and would 404. The
  sideways reference goes to icp-licence-filing-foreign-companies instead,
  which is live and covers the documents. When wordpress-icp-filing
  publishes, repoint this reference to it. Flag for PLAN.md.
FACT BANK CORRECTIONS FOUND AT SOURCE (for PLAN.md section 4):
  F8: the primary source (meta trac #5106) is dated 21 March 2020, not
  October 2019. F27: Alibaba's own pages confirm the filing restriction on
  alibabacloud.com accounts, but not the claims that the international
  platform cannot deploy to mainland regions or that the filing console is
  Chinese-only; both are left out.
-->
