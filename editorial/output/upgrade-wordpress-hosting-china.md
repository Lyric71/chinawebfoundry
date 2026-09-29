---
title: "Add measured figures to wordpress-hosting-china"
slug: upgrade-wordpress-hosting-china
description: "Work order output: replacement copy, the provider decision table and the change list for wordpress-hosting-china in all four locales."
excerpt: "Puts our own figures, their conditions and a six-option provider table on the hosting guide. Zero new URLs."
template: upgrade
author: echo-peng
category: Hosting
---

<!-- T6 UPGRADE OUTPUT. This file is not a page and is never published as one.
     It carries the replacement copy and the change list. The publish step
     applies the changes to the existing files named below. ZERO NEW URLS. -->

# Change list

Scope: `wordpress-hosting-china`, four locales, four content files, plus one
schema file for the review date. No route is added.

| # | File | Line | Action |
|---|---|---|---|
| 1 | `src/content/guides/wordpress-hosting-china.md` | 4 | Replace `summary` |
| 2 | `src/content/guides/wordpress-hosting-china.md` | 9 | Set `updatedAt` to the publish date |
| 3 | `src/content/guides/wordpress-hosting-china.md` | after 9 | Insert `reviewBy: 2026-12-29` |
| 4 | `src/content/guides/wordpress-hosting-china.md` | 13 to 17 | Replace the introduction. Ports 80 and 443 go first |
| 5 | `src/content/guides/wordpress-hosting-china.md` | after 17 | Insert two sections: the benchmark block and the provider table |
| 6 | `src/content/guides/wordpress-hosting-china.md` | 19 to 31 | Replace the section with "No managed WordPress exists in mainland China" |
| 7 | `src/content/guides/wordpress-hosting-china.md` | 35 to 49 | Replace the unsourced filing and licence blockquotes and the text around them |
| 8 | `src/content/guides/wordpress-hosting-china.md` | 51 to 59 | Replace the Alibaba account section, corrected and extended to Huawei and Tencent |
| 9 | `src/content/guides/wordpress-hosting-china.md` | 71 to 77 | Replace "The CDN question" with the Vercel and Cloudflare section |
| 10 | `src/content/guides/wordpress-hosting-china.md` | 89, 91, 112 | Remove the unsourced server price and the unverified "free to submit" line |
| 11 | `src/content/guides-fr/wordpress-hosting-china.md` | same lines | Changes 1 to 10, translated |
| 12 | `src/content/guides-es/wordpress-hosting-china.md` | same lines | Changes 1 to 10, translated |
| 13 | `src/content/guides-de/wordpress-hosting-china.md` | same lines | Changes 1 to 10, translated |
| 14 | `src/content.config.ts` | `guides`, `guidesFr`, `guidesEs`, `guidesDe` schemas | Add the optional `reviewBy` date field |

All four locale files are 123 lines at HEAD and line-aligned, checked on 29
September 2026: `summary` is line 4, `updatedAt` line 9, the introduction lines
13 to 17, the H2s at lines 19, 33, 51, 61, 71, 79, 87, 95 and 106. Check again
before applying, in case another piece has touched the files since. Apply the
changes from the bottom of the file upwards so the line numbers above stay
true while you work.

New URLs created: 0. `src/i18n/routes.ts` is untouched;
`wordpress-hosting-china` is already registered in `guideSlugs` for all three
locales. No canonical or hreflang change. Verify the sitemap entry count before
and after the build: it must be identical.

Translation at publish: changes 1, 4 to 10 are prose and go through
`/deep-translate`, three passes each, FR then ES then DE, in the main
conversation. Changes 2 and 3 are dates. In the tables, hostnames, figures,
product names and dates are not translated; column headers and cell prose are.

---

# CHANGE 1. Frontmatter `summary`, line 4

Reason: the live summary is 179 characters, 27 over the house ceiling, and it
describes a page without figures.

REMOVE:

```
summary: "What Alibaba, Tencent and Huawei actually sell, the ICP filing that gates every mainland server, the Hong Kong shortcut, and the update problem that never makes it into a budget."
```

INSERT:

```
summary: "Alibaba, Tencent, Huawei, Vercel and Cloudflare compared for WordPress in mainland China, with the ICP filing rule first and our own measured figures."
```

The live `subtitle` (line 3, 24 words) stays. It is accurate and inside the
ceiling.

---

# CHANGE 2. Frontmatter `updatedAt`, line 9

REMOVE `updatedAt: 2026-08-29`. INSERT `updatedAt: <publish date>`, which is
`2026-10-02` if the row publishes on its scheduled date.

`publishedAt: 2026-08-29` is untouched.

---

# CHANGE 3. New frontmatter line after line 9

Reason: the work order's risk note. The page now names six hosting options and
cites eleven vendor pages, and vendor pages move. A review date in frontmatter
makes the next check a scheduled job.

INSERT:

```
reviewBy: 2026-12-29
```

Ninety days after the vendor pages were checked. The field needs change 14, or
Astro strips it silently.

---

# CHANGE 4. Lines 13 to 17, the introduction

Reason: the work order says the ports constraint goes before anything else,
because it decides everything downstream. The live opening leads with the
missing managed product, which now has its own section (change 6).

REMOVE lines 13 to 17 (three paragraphs, from "There is no WP Engine in
China." to "see [WordPress in China](/wordpress-in-china/).").

<!-- BEGIN REPLACEMENT COPY, CHANGE 4 -->

A mainland Chinese server won't show your WordPress site to anyone until its
ICP filing (ICP备案) clears. On every project we've run, ports 80 and 443 stay
closed on the server's public address until the day it does. There is no soft
launch.

That rule decides the rest. It settles which cloud and which account you
open, and whether you need a Chinese company before a single file moves.

Everything below assumes it. Our guide on hosting a website in China covers the
wider picture on servers and latency, and WordPress in China explains how we
handle builds on this stack.

<!-- END REPLACEMENT COPY, CHANGE 4 -->

Links to wire at publish (both already live on this line today): "hosting a
website in China" to `/resources/china-web-guide/host-website-in-china/`,
"WordPress in China" to `/wordpress-in-china/`.

---

# CHANGE 5. Insert after line 17, before `## What the three mainland clouds actually offer`

Reason: the work order's two main additions. The benchmark block carries the
F32 figures with their conditions stated and labelled as ours. The decision
table covers the real options with the constraint that decides each one.

<!-- BEGIN REPLACEMENT COPY, CHANGE 5 -->

## What we measured on mainland hosting

These are ChinaWebFoundry's own figures, from client sites we've moved into
China or host there. No third party measured them, and you should know that before you weigh
them.

> Median page load on a WordPress site we migrated went from 23.4 seconds on a
> European origin to 1.2 seconds on a mainland origin. Roughly half of that
> improvement came from deleting external calls.
> Source: ChinaWebFoundry, published 29 August 2026.
> https://www.chinawebfoundry.com/resources/china-web-guide/is-wordpress-blocked-in-china/

> Over a 90-day window, a mainland-hosted client site returned 99.98% uptime,
> with median response times of 48ms from Beijing, 36ms from Shanghai and 61ms
> from Guangzhou.
> Source: ChinaWebFoundry, published 29 August 2026.
> https://www.chinawebfoundry.com/website-in-china/

Each of those numbers is still missing a condition we'd ask of anyone else's
benchmark. The table shows which, figure by figure.

| Figure | What it measures | Measured from | Window | Still to publish |
|---|---|---|---|---|
| 23.4s to 1.2s | Median page load, before and after the move | Mainland China | Before and after the migration | City, carrier, test dates |
| 99.98% | Uptime of one mainland-hosted site | Not published | 90 days | Monitoring location, start and end dates |
| 48ms | Median response time | Beijing | The same 90 days | Carrier |
| 36ms | Median response time | Shanghai | The same 90 days | Carrier |
| 61ms | Median response time | Guangzhou | The same 90 days | Carrier |

The missing conditions are going into case studies we're writing now.

## Six hosting options, side by side

These are the options foreign teams ask us about most. Each row names the
constraint that decides it, and each one rests on the vendor's own page. We
checked every row on 29 September 2026 and we'll check them again each quarter.

| Option | Mainland servers | ICP filing | Account and entity | Vendor page dated |
|---|---|---|---|---|
| Alibaba Cloud (阿里云), China site, aliyun.com | Yes | Filed through Alibaba against a mainland server on a subscription of 3 months or longer | aliyun.com account; an enterprise registered in the mainland, or a mainland resident | Help centre, 20 August and 24 September 2026 |
| Alibaba Cloud, international site, alibabacloud.com | Can't carry a filed site | Not supported on this account type | Open an aliyun.com account instead | Help centre, 20 August 2026 |
| Tencent Cloud (腾讯云) | Yes | Filed through Tencent against a mainland server; Lighthouse on a subscription of 90 days or more | One filing entity per account | Documentation, 30 January and 23 September 2026 |
| Huawei Cloud (华为云) | Yes | Filed through Huawei against a mainland "filing server" on a subscription of at least 3 months | A Chinese mainland website account; international accounts can't file | Help Center, July and August 2024 |
| Vercel | None | Not offered. An in-country copy needs mainland hosting and its own filing | Nothing on Vercel's side | Knowledge base, 11 September 2026 |
| Cloudflare | Only on the China Network, run by JD Cloud | A valid filing or licence for each apex domain | Enterprise plan; JD Cloud reviews the content first | Developer docs, April 2026 |

For a WordPress site that has to live on the mainland, the real choice is
between the first, third and fourth rows.

<!-- END REPLACEMENT COPY, CHANGE 5 -->

---

# CHANGE 6. Lines 19 to 31, `## What the three mainland clouds actually offer`

Reason: the work order asks for an explicit section stating that no managed
WordPress exists in mainland China (F28), and what the one-click images
actually are. The live section says it, but its table gives Alibaba stack
versions (Alibaba Cloud Linux 3, PHP 8.1, MySQL 5.7, Nginx 1.22) that appear
only in community articles, not on Alibaba's help page, and gives nothing for
Tencent or Huawei. The replacement uses each vendor's own page. It also drops
"a console with no English mode", which no source on record supports.

REMOVE lines 19 to 31, from `## What the three mainland clouds actually offer`
to "because it turns up either way."

<!-- BEGIN REPLACEMENT COPY, CHANGE 6 -->

## No managed WordPress exists in mainland China

There is no WP Engine, Kinsta or Flywheel on the mainland. We've been through
the product line-ups of Alibaba Cloud (阿里云), Tencent Cloud (腾讯云) and
Huawei Cloud (华为云). None of them sells a WordPress product that patches the
site for you or answers a ticket about a plugin.

What all three sell is a one-click WordPress image on an entry-level virtual
server.

| Provider | Product | What the image installs | Vendor page updated |
|---|---|---|---|
| Alibaba Cloud | Simple Application Server (轻量应用服务器) | A preset WordPress application image | 19 August 2026 |
| Tencent Cloud | Lighthouse (轻量应用服务器) | WordPress with Nginx, MariaDB and the Baota (宝塔) Linux panel | 22 September 2026 |
| Huawei Cloud | FlexusL (Flexus应用服务器L实例) | Ubuntu 24.04 running Docker, with Nginx, MySQL and phpMyAdmin | 21 September 2026 |

Look at the third column again. Each one is an operating system with WordPress
preinstalled. Updates and backups are yours, along with staging and finding
someone who can read a plugin conflict.

So somebody on your side ends up doing server administration every month, for
as long as the site lives. That's a standing cost. Put it in the budget at kickoff.

<!-- END REPLACEMENT COPY, CHANGE 6 -->

---

# CHANGE 7. Lines 35 to 49, inside `## Nothing serves until the filing clears`

Reason: three problems. The two blockquotes cite "MIIT filing rules and
mainland provider filing documentation, 2026" and "MIIT licensing rules and
pilot-area regulations, 2026", with no page, no URL and no date. The "60 to 90
working days" licence figure is contradicted by the one regulator page on
record, which says 60 days from acceptance. And the ports statement now opens
the page (change 4), so line 37 should add the providers' own wording rather
than repeat ours.

Line 35 ("This is the constraint that reorders every China web project, so it
is worth stating flatly.") is also removed: the page now states it flatly in
its first sentence.

REMOVE lines 35 to 49, from "This is the constraint that reorders" to "no
amount of hosting spend substitutes for the entity."

<!-- BEGIN REPLACEMENT COPY, CHANGE 7 -->

Alibaba Cloud and Tencent Cloud both write the rule into their own
documentation.

> Under Ministry of Industry and Information Technology (工信部) rules, a domain
> resolved to a server in the Chinese mainland must complete its website filing
> before website access can be opened.
> Source: Alibaba Cloud (阿里云) help centre, last updated 4 September 2026.
> https://help.aliyun.com/zh/dws/support/how-do-i-troubleshoot-the-failures-to-access-a-website-by-using-its-domain-name

> A domain resolved to Tencent Cloud resources in mainland China must complete
> ICP filing first, or it is intercepted by Tencent Cloud's monitoring for
> unfiled domains.
> Source: Tencent Cloud (腾讯云) documentation, last updated 28 September 2026.
> https://cloud.tencent.com/document/product/243/19630

The ports detail is ours: on our projects, that interception closes ports 80
and 443. You can't show a client a staging link on the production
box, and you can't run a quiet beta while the paperwork moves.

> Alibaba Cloud's own check takes 1 to 2 working days. The provincial
> Communications Administration (省级通信管理局) review that follows generally
> takes 1 to 20 working days, and the site must complete its public security
> filing (公安备案) within 30 days of going live.
> Source: Alibaba Cloud (阿里云) help centre, ICP filing process overview, last
> updated 26 August 2026.
> https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview

That's up to 22 working days on paper. Documents take time to gather and
applications come back for corrections, so we plan three to six weeks, and that
assumes the mainland entity already exists. Our ICP filing guide walks through
the documents and the order they go in.

A commercial ICP licence (ICP许可证) is a different instrument. You need it when
the site itself earns money: e-commerce, paid content, paid software,
advertising.

> The Shanghai Communications Administration (上海市通信管理局) commits to
> deciding on a value-added telecoms licence within 60 days of accepting the
> application.
> Source: Shanghai Communications Administration, service guide, June 2015.
> https://shca.miit.gov.cn/bsfw/bszn/dxsc/blcx/art/2020/art_7426922df3754a189aaf4278ff0c7b1d.html

The clock starts at acceptance, and acceptance needs a complete file. We plan
twelve to eighteen weeks for this one.

Foreign ownership is the other question a licence raises.

> A 2024 pilot lifts the foreign-ownership cap on named licence categories, among
> them online data processing and information publishing platforms, in parts
> of Beijing, Shanghai, Hainan and Shenzhen. News, publishing, audiovisual and
> internet culture services are excluded.
> Source: Ministry of Industry and Information Technology (工业和信息化部),
> notice of 8 April 2024.
> https://www.gov.cn/zhengce/zhengceku/202404/content_6944441.htm

An ICP filing is made in the name of an enterprise registered in the mainland,
or a mainland resident for a personal site. A company registered abroad can't
file directly, and no hosting spend substitutes for the entity.

<!-- END REPLACEMENT COPY, CHANGE 7 -->

Link to wire at publish: "ICP filing guide" to
`/resources/china-web-guide/icp-licence-filing-foreign-companies/` (already
linked on this line today).

---

# CHANGE 8. Lines 51 to 59, `## The Alibaba Cloud account that can't host your site`

Reason: the work order asks the page to state the alibabacloud.com versus
aliyun.com distinction explicitly (F27). The live section does, and adds two
claims no dated Alibaba page supports: that the international side has "no
mainland regions available", and that "the filing workflow inside it is
Chinese-language only". Both are cut, as they were from the A5 guide on 24
September 2026. The same account split exists at Huawei Cloud, which the page
does not mention, and Tencent Cloud has its own server rule.

REMOVE lines 51 to 59.

<!-- BEGIN REPLACEMENT COPY, CHANGE 8 -->

## The cloud account that can't host your site

Alibaba runs two sites with near-identical branding. alibabacloud.com is the
international one, aliyun.com is the China one, and only the second can file.

> Alibaba Cloud international site (alibabacloud.com) accounts do not support
> ICP filing applications, for websites or apps. A filing needs a China site
> (aliyun.com) account, and the filing entity must be an enterprise registered
> in the Chinese mainland or a mainland resident.
> Source: Alibaba Cloud (阿里云) help centre, last updated 20 August 2026.
> https://help.aliyun.com/en/icp-filing/basic-icp-service/product-overview/icp-filing-application-for-enterprises-outside-the-chinese-mainland

> The filing is made against an Alibaba Cloud server in the Chinese mainland:
> an ECS instance or a Simple Application Server, on a subscription of 3
> months or longer.
> Source: Alibaba Cloud (阿里云) help centre, last updated 24 September 2026.
> https://help.aliyun.com/en/icp-filing/basic-icp-service/user-guide/icp-filing-server-access-information-check

So the sign-up that feels natural, on the English site that search hands you
first, produces an account that can't file the site you're building. Anyone who
has done this once knows it cold. First-timers lose weeks to it, and they
usually find out when someone goes looking for the filing screen and the account
has none, by which point the server is paid for and the launch date is
already set.

Huawei Cloud (华为云) runs the same split, in almost the same words.

> Huawei Cloud international website accounts do not support ICP filing. A
> Huawei Cloud Chinese mainland account is needed, with a filing server in the
> Chinese mainland on a subscription of at least three months.
> Source: Huawei Cloud (华为云) Help Center, last updated 17 July 2024 and 20
> August 2024.
> https://support.huaweicloud.com/intl/en-us/prepare-icp/icp_02_0047.html
> https://support.huaweicloud.com/intl/en-us/prepare-icp/icp_02_0003.html

At Tencent Cloud (腾讯云), the documented rule is about the server. The Tencent
pages we checked say nothing either way about international accounts, so we
don't either.

> A Lighthouse instance in a mainland region qualifies for ICP filing on a
> subscription of 90 days or more, with at least 30 days left while the filing
> is under review.
> Source: Tencent Cloud (腾讯云) documentation, last updated 23 September 2026.
> https://cloud.tencent.com/document/product/1207/45756

<!-- END REPLACEMENT COPY, CHANGE 8 -->

---

# CHANGE 9. Lines 71 to 77, `## The CDN question`

Reason: the work order asks for a Vercel section that cites Vercel's own
knowledge base statement and its date (F29), and for Cloudflare per F30. The
live section has no Vercel paragraph and states the Cloudflare facts with no
citation. It also calls the domestic CDN "fast" with nothing behind it.

REMOVE lines 71 to 77.

<!-- BEGIN REPLACEMENT COPY, CHANGE 9 -->

## Vercel, Cloudflare and the overseas edge

A global CDN puts copies of your pages closer, in Hong Kong or Tokyo, which
helps. It does nothing about blocked hosts that the page itself calls.

Vercel comes up too, since plenty of Astro and Next.js sites live there. Its own knowledge base gives a clear answer.

> "Vercel has no servers or CDN nodes in mainland China," and "Vercel can't
> guarantee availability or performance within mainland China." China's network
> controls can block or throttle its .vercel.app subdomains.
> Source: Vercel Knowledge Base, published 3 November 2025, updated 11 September
> 2026.
> https://vercel.com/kb/guide/accessing-vercel-hosted-sites-from-mainland-china

> GreatFire reads https://vercel.app as blocked in mainland China on 4 of its
> last 4 conclusive tests, the latest on 14 September 2026. Of 157 URLs it has
> tested on the domain, 154 read blocked.
> Source: GreatFire, September 2026.
> https://en.greatfire.org/https/vercel.app

Vercel's own suggestions are a custom domain in place of .vercel.app,
self-hosted fonts and analytics, and, for a site that has to perform in China, a
separate copy on mainland infrastructure with its own ICP filing or licence.
That last option means running a second site, on one of the three mainland
clouds above or another mainland host.

Cloudflare's standard and free plans serve mainland visitors from edges outside
the mainland. The in-country network is a separate product.

> The Cloudflare China Network is a separate subscription for Enterprise
> customers, run in mainland data centres by Cloudflare's partner JD Cloud. Each
> apex domain needs a valid ICP filing or licence, and JD Cloud reviews every
> domain's content before the network is switched on.
> Source: Cloudflare developer documentation, last updated 30 April 2026.
> https://developers.cloudflare.com/china-network/

For a mainland-hosted site, the simpler answer is usually the domestic CDN
attached to the cloud you already sit on. It works under the filing you already
hold, and it keeps the stack with one vendor.

<!-- END REPLACEMENT COPY, CHANGE 9 -->

---

# CHANGE 10. Lines 89, 91 and 112, the cost figures

Reason: "usually runs under 100 USD a month" (line 89, repeated in the FAQ at
line 112) has no source anywhere in this programme, and the house rule is no
figure without one. "The filing itself is free to submit" (line 91) is not on
any provider page checked today; it is cut rather than left unverified.

REMOVE line 89:

```
The server is the cheap part. A corporate WordPress site on Simple Application Server or Lighthouse usually runs under 100 USD a month, and promotional first-year pricing on the smallest instances goes well below that.
```

INSERT:

<!-- BEGIN REPLACEMENT COPY, CHANGE 10A -->

The server is the cheap part. The one-click images run on each cloud's
entry-level server line.

<!-- END REPLACEMENT COPY, CHANGE 10A -->

REMOVE line 91:

```
The filing itself is free to submit. The real spend sits in three places: standing up or maintaining the mainland entity, the working hours that go into preparing documents and passing verification, and whoever logs into a Chinese-language console every month to keep the thing patched and backed up.
```

INSERT:

<!-- BEGIN REPLACEMENT COPY, CHANGE 10B -->

The real spend sits elsewhere. The mainland entity has to be set up or kept up,
and preparing documents and passing verification eats working hours. After
launch, a named person logs into the cloud console month after month to keep the
site patched and backed up.

<!-- END REPLACEMENT COPY, CHANGE 10B -->

REMOVE line 112:

```
The server is often under 100 USD a month for a corporate site. The costs that matter are the entity, the filing work, and whoever administers a Chinese-language console every month.
```

INSERT:

<!-- BEGIN REPLACEMENT COPY, CHANGE 10C -->

The server is the smallest line. The costs that matter are the entity and the
filing work, and after launch, the person who looks after the server.

<!-- END REPLACEMENT COPY, CHANGE 10C -->

---

# CHANGE 14. `src/content.config.ts`, the four guide schemas

Add one optional field to `guides`, `guidesFr`, `guidesEs` and `guidesDe`,
after `updatedAt`:

```ts
    /** Date the page's vendor-specific claims are due for review. Not rendered. */
    reviewBy: z.coerce.date().optional(),
```

Optional, so no other guide changes. Not rendered, so no visible change.
Without it, Zod strips the key and the date lives nowhere a script can read.

---

# Acceptance criteria, checked

| Criterion | Result |
|---|---|
| Every latency or uptime figure on the page names a vantage point and a measurement window | PARTLY. The three response times name their city and the 90-day window. The 99.98% names its 90-day window. The migration pair names the two origins and the before and after window, but its test location is published only as "mainland". What is missing is stated in a table on the page, cell by cell. Full compliance is owed by T3-01 (carrier, city and dates of the migration pair) and T3-02 (the window's dates and the carriers). |
| The alibabacloud.com versus aliyun.com distinction stated explicitly (F27) | PASS. Change 8, with Alibaba's own sentence, dated 20 August 2026. |
| The page states that no managed WordPress exists in China (F28) | PASS. Change 6, as its H2. |
| The Vercel section cites Vercel's own knowledge base statement and its date | PASS. Change 9, verbatim, published 3 November 2025, updated 11 September 2026. |
| Zero figures from the Do Not Assert list | PASS. Grep for the two figures and the three barred phrases run on the finished replacement copy: zero hits. The only match in this file is this row naming them. |
| No URL, canonical or hreflang change | PASS as drafted. Four content files and one schema file. No route, no `guideSlugs` change. Verify the sitemap count before and after the build. |
| Ports 80 and 443 stated before the rest (work order) | PASS. First paragraph of the page. |
| A review date in frontmatter (work order risk note) | PASS. Changes 3 and 14. The calendar reminder is flagged in the run log for a person. |

---

# Notes for PLAN.md

1. **F29's date is right and now has an update.** Vercel's knowledge base page
   was published 3 November 2025 and updated 11 September 2026. GreatFire's
   "mostly blocked" is the domain summary; https://vercel.app itself reads
   blocked, 4 of 4, 14 September 2026.
2. **F27 still overstates Alibaba's pages**, as logged on 24 September 2026.
   The same split exists at Huawei Cloud, from Huawei's own help centre.
3. **F26's licence figure is wrong against the one regulator page found.** 60
   days from acceptance, not 60 to 90 working days. The foreign-ownership
   sentence also needs the pilot's actual scope: named service categories, not
   the ICP licence in general.
4. **F28 now has sources for all three images**, dated 19 August, 22 September
   and 21 September 2026.
5. **The work order's first criterion cannot fully pass until T3-01 and T3-02
   ship.** The copy says so on the page.
6. **Two unsourced lines stay on the page, outside this work order's scope.**
   Line 67 ("Baidu favours sites hosted inside the mainland on a filed domain")
   and line 115 ("Baidu shows some preference for .cn"). Neither is a figure,
   and neither has a source in the fact bank. Worth a brief when the Baidu
   cluster (A10) is drafted.

---

# Word count

Replacement copy only, counted after the 18-pass quality loop. Excludes the
change list, the reasons, the schema change, the acceptance table and these
notes.

| Passage | Narrative | Blockquotes | Table cells |
|---|---|---|---|
| Change 4, introduction | 101 | 0 | 0 |
| Change 5, benchmark block and provider table | 138 | 74 | 278 |
| Change 6, no managed WordPress | 131 | 0 | 56 |
| Change 7, the filing and the licence | 190 | 216 | 0 |
| Change 8, the cloud account | 142 | 187 | 0 |
| Change 9, Vercel and Cloudflare | 168 | 136 | 0 |
| Change 10, the cost lines | 89 | 0 | 0 |
| Total | 959 | 613 | 334 |

The live English body is 1,525 words. The removed passages come to 897, the
added copy to 1,906, so the page lands at about 2,534 body words. No target
applies to a T6 upgrade.

<!-- FEATURE IMAGE
None. T6 skips step 3 unless the work order asks for an image, and T6-03 does
not. The page keeps its live hero, /images/guides/wordpress-hosting-china.webp.
-->

<!-- SCHEMA
Type: Article (unchanged; the guide layout emits Article and BreadcrumbList)
FAQPage: no (the work order does not ask for it)
Breadcrumb: Home > China Web Guide > WordPress Hosting in China
Author: Cyril Drouin (unchanged: the live page carries no author field, so the
collection default applies; this output file's echo-peng byline is the drafting
byline and is not written to the page)
datePublished: 2026-08-29 (unchanged). dateModified: the publish date
Measurement: none from harness/. The figures are ChinaWebFoundry's published
F32 numbers, labelled as ours on the page
-->

<!-- ASSET BRIEF
TABLES: (1) benchmark conditions, five rows, from F32 as published on
/website-in-china/ and /resources/china-web-guide/is-wordpress-blocked-in-china/;
(2) six hosting options, vendor pages dated in the last column; (3) one-click
images, three rows, vendor pages dated. All data is in the copy above.
CHARTS: none
SCREENSHOTS: none
DOWNLOADS: none
INTERNAL LINKS (all already on the live page; wire as before):
hosting a website in China -> /resources/china-web-guide/host-website-in-china/
WordPress in China -> /wordpress-in-china/
ICP filing guide -> /resources/china-web-guide/icp-licence-filing-foreign-companies/
LOCALIZED SLUGS: already registered. fr hebergement-wordpress-chine · es
alojamiento-wordpress-china · de wordpress-hosting-china
CLIENT SIGN-OFF NEEDED: none. The F32 figures are already published and not
attributed to a named client
HARNESS ROWS CITED: none
REVIEW: reviewBy 2026-12-29. Recheck every vendor row against its URL in
editorial/sources/verified-sources.md ("T6-03 entries, 29 September 2026")
-->
