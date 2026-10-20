---
title: "Evidence and FAQs for the China agency pages"
slug: upgrade-agency-money-pages
description: "Replacement copy and a publication work order for the two China agency pages, with dated evidence and procurement FAQs."
excerpt: "Dated sources, clear filing advice and procurement answers for the existing agency pages."
template: upgrade
author: cyril-drouin
category: Technology
reviewBy: 2026-11-26
---

<!-- HERO SECTION -->

Evidence and FAQs for the China agency pages

<!-- INTRODUCTION -->

Keep both commercial pages and their existing headings. Add dated evidence
where buyers need it, then build each page’s FAQ markup from the same answers
readers see. The WordPress page already uses that arrangement. Its answers
need revision; the general agency page also needs the schema wiring.

| Page | Replacement copy | Schema work |
|---|---|---|
| /web-agency-china/ | Section evidence and 5 procurement answers | Add FAQPage from the visible FAQ array |
| /wordpress-agency-china/ | Section evidence and 6 procurement answers | Reuse the existing FAQPage mapping |

<!-- SECTION: Application instructions -->

## Files and passages

Apply the general agency copy to `src/pages/web-agency-china.astro`,
`src/pages/fr/agence-web-chine.astro`,
`src/pages/es/agencia-web-china.astro` and
`src/pages/de/webagentur-china.astro`.

Apply the WordPress copy to `src/pages/wordpress-agency-china.astro`,
`src/pages/fr/agence-wordpress-chine.astro`,
`src/pages/es/agencia-wordpress-china.astro` and
`src/pages/de/wordpress-agentur-china.astro`.

The source corrections recorded in the run log are already applied to those
files. Keep them when adding the copy below. Translate additions through all
3 deep-translate passes in French, Spanish and German, in that order.

Corrections cover the general agency page’s stack and dependency paragraphs
and its first 2 FAQ answers. On the WordPress page they cover the hero’s
speed promise, illustration captions, introductory problem copy, hosting
and migration promises, maintenance claims, the font comparison, filing
advice, workflow descriptions and stack comparisons. The affected FAQ IDs
are `works-in-china`, `icp-needed`, `woocommerce` and `google-rankings`.
Unsupported service-card timings and uptime figures have been removed.
Full before-and-after passages are in the run’s locale correction diffs.

Preserve the H1s, H2s, IDs, canonical paths and language routes. Section names
below locate existing headings; they are not replacement headings.
Keep the existing service and case-study cards. Evidence belongs in a short
paragraph beside the section introduction, with its citation visible.

## General agency page

Under “What a real China web agency looks like.”:

Your global site needs a separate review for China. Chinafy’s vendor
benchmark gives a reason to check the full page, including its outside
requests, before choosing hosting or setting a launch date.

> Chinafy tested 614 global websites with WebPageTest from Beijing, Virginia
> and London and reported that 2 in 3 failed to load from Beijing.
> Source: Chinafy, China Website Performance Benchmarks 2026, 14 April 2026.
> This is a vendor benchmark, with no WordPress-only breakdown.

Under “10 services. One web agency. Every step of your China web presence.”:

Use the service list to divide the brief into work you need before launch
and work that continues afterwards. Hosting and maintenance need an owner
after the build ends.

> ChinaWebFoundry lists 10 services, including China Hosting and Maintenance
> and Support.
> Source: ChinaWebFoundry service catalogue, checked 21 October 2026.

Under “Sites we shipped for international brands in China.”:

Open a project to see what was delivered and which services it used. Compare
that scope with your own brief before treating it as evidence for your site.

> This page displays 3 published projects selected by catalogue order.
> Source: ChinaWebFoundry page source, checked 21 October 2026.
> The count describes the selection shown here, not the agency’s total work.

Under “The web agency you brief is the team that ships your site.”:

Name an owner for the build. The site will also need someone responsible
for its operation after launch; use the team page to start that discussion.

> ChinaWebFoundry’s team collection names 2 leaders: Cyril Drouin and
> Echo Peng.
> Source: ChinaWebFoundry team collection, checked 21 October 2026.

Under “About working with a web agency in China.”, replace the FAQ array
with these answers. Each question remains visible alongside its full answer.

**What should we send before asking for a proposal?**

Start with your current URL and what a visitor needs to do on the site.
We’ll also need to know who approves Chinese content, whether a mainland
entity exists and which systems the site must use before agreeing a launch.
Our guide to choosing a web agency in China explains how to compare the
resulting scope.

**Can you work with our existing global agency?**

Yes. Agree who owns each part of delivery before work starts. Your global
agency can keep the brand system and source content while the Shanghai team
handles the China website scope. Record who approves designs, manages
hosting access and accepts the finished site. Our website-in-China page
sets out the work to include.

**How does ICP filing affect the launch date?**

Alibaba Cloud (阿里云) publishes an initial review of 1 to 2 working days,
followed by provincial review generally taking 1 to 20 working days.
Document preparation and corrections take additional time. For a mainland
launch, agree the build schedule around the ICP filing (ICP备案) approval.
The review windows are not a delivery guarantee.

> Source: Alibaba Cloud (阿里云), ICP filing overview, 26 August 2026.

**How do we choose between WordPress and Astro?**

Start with how your team publishes. WordPress suits teams that want its
editor and plugin workflow. Astro can suit sites whose pages are prepared
at build time. Both need a review of external requests and hosting.
Our WordPress plugin guide explains why the chosen integrations matter as
much as the CMS name.

**How will you price the work?**

The proposal should separate the build from ongoing hosting and support.
Chinese content can account for substantial work, so establish who supplies
and approves it. List the templates and integrations that the quote covers,
with a process for approving changes. Separate recurring costs make
proposals easier to compare.

Under “Start the conversation. With your web agency in Shanghai.”:

Send the brief with your current URL and the action a China visitor should
be able to complete.

> The general agency page lists 10 services for scoping the work.
> Source: ChinaWebFoundry service catalogue, checked 21 October 2026.

## WordPress page

Place these evidence paragraphs under the corresponding existing H2s.
Keep the source and date with each paragraph.

| Existing section | Evidence paragraph to insert | Source |
|---|---|---|
| Why a standard WordPress site fails in China. | Google Fonts needs a network-specific reading. Use the paired observation below. | 21YunBox, 28 and 30 August 2026 |
| Our WordPress services for China. | The page groups WordPress delivery into 6 services. Use those scopes to assign responsibility for hosting, filing and support. | ChinaWebFoundry page source, 21 October 2026 |
| What breaks WordPress in China, and how we fix it. | This comparison covers 7 resource categories. Review the requests your own theme and plugins make before choosing replacements. | ChinaWebFoundry page source, 21 October 2026 |
| ICP licence and hosting requirements, explained. | Alibaba Cloud publishes an initial filing review of 1 to 2 working days. Preparing the application takes additional time. | Alibaba Cloud, 26 August 2026 |
| Our process, from kickoff to China launch. | The process has 8 stages, from discovery through support. The schedule must allow for filing approval as well as the build. | ChinaWebFoundry page source, 21 October 2026 |
| WordPress vs the alternatives for China. | This page compares 3 approaches to publishing. Choose against your editorial workflow and integrations. | ChinaWebFoundry page source, 21 October 2026 |
| Who we build for. | Chinafy’s vendor benchmark covered 614 global websites across different sectors. Its Beijing result is context for checking a site, not a forecast for yours. | Chinafy, 14 April 2026 |
| Pricing and engagement models. | The page describes 2 forms of engagement: a defined project and ongoing support. Ask for the scope of each in the proposal. | ChinaWebFoundry page source, 21 October 2026 |
| Why brands choose ChinaWebFoundry. | The team page names 2 leaders, Cyril Drouin and Echo Peng. Ask who will own the technical and content decisions for your project. | ChinaWebFoundry team collection, 21 October 2026 |
| WordPress in China, answered. | Use the 6 procurement answers below. | Visible FAQ array, 21 October 2026 |
| Your WordPress site, working in China. | The 6 service scopes above can help you describe the work you need. Send your current URL with the brief. | ChinaWebFoundry page source, 21 October 2026 |

For the first section, insert this full paired citation:

> 21YunBox recorded 72 of 72 completed requests to fonts.googleapis.com
> from an Alibaba Cloud (阿里云) cn-zhangjiakou instance on 28 August 2026.
> Its Beijing China Mobile (中国移动) residential line received 0 answers
> from 54 requests on 30 August 2026.
> Source: 21YunBox, A Chinese Cloud Probe Is Not a Chinese Visitor:
> The Same Hosts, Opposite Answers, 28 to 30 August 2026.

The other rows supply exact insertion copy. Render their source cells as
blockquote citations beside the paragraph. These catalogue counts describe
the page and its scope; they are not performance results.

Replace the existing FAQ array with the following 6 entries. Retain IDs
`works-in-china`, `icp-needed`, `fix-without-rebuild`, `timeline`,
`chinese-content` and `cost`. Remove the other entries from both visible
copy and schema in the same edit.

The current source has 8 entries. Replace the whole array so the visible
FAQ and its JSON-LD move to 6 entries together.

**Does WordPress work for a mainland China website?**

WordPress can run on mainland hosting. Review the external requests made by
the chosen theme and plugins, including fonts, forms and embeds. A CMS name
alone tells you little about those requests. Self-host suitable assets and
check the remaining services against dated evidence. Our WordPress plugin
guide covers the dependency review.

**Do we need an ICP filing or a commercial licence?**

Mainland hosting requires an ICP filing (ICP备案) before the website opens.
A commercial ICP licence (ICP许可证) is a separate permission whose
applicability depends on the activity. Review the planned service and entity
before selecting hosting. Alibaba Cloud (阿里云) says its Hong Kong and
overseas servers do not require mainland ICP filing.

> Source: Alibaba Cloud (阿里云), ICP filing overview, 26 August 2026.

**Can you repair an existing site without replacing it?**

Start with an inventory of the pages and outside services the site uses.
Serving assets locally may solve part of the problem. The review will also
show whether hosting, the theme or an integration needs to change.
Keep the current design where it supports the required work. The migration
guide explains how to plan the changes.

**How long should we allow for filing?**

Alibaba Cloud (阿里云) publishes 1 to 2 working days for initial review,
followed by generally 1 to 20 working days for provincial review.
Preparation, corrections and other approvals can extend the schedule.
Treat these as review windows. Agree the launch date after checking the
application and the work still needed on the site.

> Source: Alibaba Cloud (阿里云), ICP filing overview, 26 August 2026.

**Who manages the Chinese content after launch?**

Your editors need a clear route from draft to approval. Choose the language
workflow around their access and responsibilities, then include it in the
handover. A record of shared templates and translation relationships helps
a later global-site change reach the right Chinese pages.

Include training in the scope.

**What belongs in the quote?**

The quote should name the templates and integrations being delivered,
with content and migration work listed where needed. Hosting and plugin
renewals continue after launch; check who pays them and what maintenance
covers. A written process for approving extra work helps you control
changes. Ask for recurring costs separately.

## Schema and publication contract

Use each page’s `faqs` array for visible answers and for
`Question.name` and `Answer.text`. The general agency page needs a `faqLd`
object passed into its existing `jsonLd` list. Keep the WordPress page’s
existing mapping. Emit one FAQPage per page.

Schema.org defines FAQPage for a page of frequently asked questions. This
work order makes no promise about search presentation or ranking. Schema
checks must confirm the required properties and exact equality with visible
copy in every locale.

The draft run checks the corrected current pages on the local development
server. The replacement arrays and new general-page schema need the same
checks after application during publication.

Publish the general agency additions first. Apply the WordPress additions
in the second deployment, at least a week later, as the work order requires.
The factual corrections prepared in this run travel together in the first
commit. After that deployment, leave this row at `image_ready`, record
`general agency additions published YYYY-MM-DD` in its notes and add
`Hold until YYYY-MM-DD` for 7 days after that deployment. The next eligible
publish run applies only the WordPress additions and then marks the row
`published`. This preserves the brief’s staged release without a new row.

Before each deployment, compare the sitemap URL set with its baseline,
verify that it is identical and check every FAQ answer against its JSON-LD.
Keep the existing paths and headings. The work order’s `reviewBy` is
26 November 2026, based on the oldest cited font test plus 90 days. Preserve
that evidence review date when the publication log records completion.
`src/data/agencyEvidence.ts` registers the same date with
`editorial/scripts/review-due.mjs` for both agency pages in every locale.

<!-- CTA -->

CTA: Book a call

<!-- FEATURE IMAGE
No new image. T6-09 changes copy and schema on existing pages.
Keep their existing visuals. Five concepts considered: a Shanghai briefing
table, a Hangzhou filing screen, a Suzhou editor at work, a Shenzhen browser
request panel and a Nanjing review meeting. None is commissioned because
the work order requests no image and the current layouts need no new asset.
-->

<!-- SCHEMA
Type: existing Service and BreadcrumbList, plus FAQPage.
FAQPage: general agency 5 questions; WordPress page 6 questions.
Author of replacement copy: Cyril Drouin.
No Article schema or new URL for this work order.
-->

<!-- ASSET BRIEF
TABLES: application map and evidence insertion map; internal work-order aids.
CHARTS: none.
SCREENSHOTS: none.
DOWNLOADS: none.
INTERNAL LINKS:
choosing a web agency in China -> /resources/china-web-guide/choosing-web-agency-china/
website-in-China page -> /website-in-china/
WordPress plugin guide -> /resources/china-web-guide/wordpress-plugins-china/
migration guide -> /resources/china-web-guide/migrate-wordpress-to-china/
team page -> /who-we-are/
LOCALIZED SLUGS: preserve existing paths listed in Files and passages.
CLIENT SIGN-OFF ON RECORD: none needed; no client outcome is reused.
LINK SUBSTITUTIONS: none.
THIRD-PARTY MEASUREMENTS CITED:
fonts.googleapis.com, 21YunBox, Alibaba Cloud cn-zhangjiakou 28 August 2026;
fonts.googleapis.com, 21YunBox, Beijing China Mobile home line 30 August 2026.
SOURCES:
https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html
https://www.chinafy.com/blog/china-website-performance-benchmarks-2026
https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview
https://schema.org/FAQPage
First-party catalogue counts: src/content/services/, src/content/team/ and
the two English page arrays, checked 21 October 2026.
-->
