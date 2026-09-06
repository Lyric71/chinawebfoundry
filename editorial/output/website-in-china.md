---
title: "Websites in China for Global Brands"
slug: website-in-china
description: "We plan, build, file, host and run websites inside mainland China for international companies. Shanghai team, ICP filed, WordPress or Astro."
excerpt: "The web agency in China for international brands, from strategy and ICP filing through Baidu and AI search visibility."
template: money-page
author: cyril-drouin
category: Technology
---

<!-- HERO SECTION -->

Websites in China for global brands

We plan, build, file, host and run websites inside mainland China for
international companies. The team sits in Shanghai, we run the ICP filing
ourselves, and every site is tested from a Chinese connection before launch.

<!-- INTRODUCTION -->

Your global site probably works everywhere except China. That's the normal
starting point for the companies who call us, and it has four causes. All of
them are fixable. The fix takes about fourteen weeks, and the longest part of
it is paperwork.

<!-- SECTION: What breaks -->

## Four things break a foreign website in China

Two thirds of foreign sites fail before a Chinese visitor sees anything.

> Chinafy tested 614 global websites from Beijing, Virginia and London with
> WebPageTest in 2026. 66.4% failed to load successfully in Beijing, the median
> visually complete time was 17.2 seconds, and 44% of Beijing tests timed out.
> Time to first byte ran 4 to 4.5 times higher than from Virginia or London.
> Source: Chinafy, State of Global Website Performance in China, April 2026.
> https://insights.chinafy.com/

The number describes the symptom. The causes are more specific than "the
Great Firewall", and each one has its own price. We last checked all four from
mainland vantage points on 29 August 2026.

**A script that never answers.** Thousands of commercial themes still load
jQuery from Google Hosted Libraries. That one tag is render blocking, so the
browser waits for it before painting anything at all.

> From an Alibaba Cloud (阿里云) instance in Zhangjiakou on 29 August 2026,
> repeated requests to ajax.googleapis.com returned no first byte before a
> 60-second abandon.
> Source: ChinaWebFoundry measurement, 29 August 2026.

The visitor sees a white page for a few seconds and leaves. Your analytics
never record the visit, because analytics didn't load either. You lose the
visit, and you leave the impression that your company doesn't work in China.

**A server that stays dark until the paperwork clears.** A website served from
a mainland IP is blocked by the hosting provider until its ICP filing
(ICP备案) is approved. Alibaba Cloud shows "网站暂时无法访问" (website temporarily
unavailable) on any unfiled domain pointed at a mainland-region server. No
soft launch. No staging URL on the production host. Count on three to six
weeks on the critical path, which most project plans leave out.

**A slow origin.** A site hosted in Frankfurt or Virginia crosses the border
on every request. The Chinafy figure above, 4 to 4.5 times the time to first
byte, is what that crossing costs before your own code even runs. Seconds on
every page, and a bounce rate your European team can't reproduce from their
desks.

**A crawler you didn't build for.** Baidu (百度) has rendered JavaScript since
it announced Baiduspider-render/2.0 in March 2017. It publishes nothing on how
much of the web it renders or how long the queue is. A site that only exists
after client-side JavaScript runs is taking a risk Baidu never asked you to
take, and the cost is pages indexed late or never.

<!-- SECTION: What has to be true -->

## What has to be true for a site to work here

Four conditions. Miss one and you have a support ticket waiting to happen.

The foreign dependencies are gone. Fonts, scripts, maps, video, forms,
captcha and analytics either come from inside China or from your own server.
Our guide to what the Great Firewall blocks lists the hosts and their
replacements.

The site is served from inside the mainland, or from Hong Kong when a filing
isn't possible yet. Hong Kong is the honest second best: no filing needed,
one border hop instead of several, and a straight upgrade path to a mainland
origin later.

The filing is done. A free ICP filing (ICP备案) for an information site, a
commercial ICP licence (ICP许可证) if the site takes money. A mainland entity
holds it. We run the process in Chinese with the provincial regulator and
carry the holding page through review.

Baidu (百度) can crawl it without running JavaScript. Server-rendered HTML,
real title tags, a sitemap submitted through the Baidu Search Resource
Platform (百度搜索资源平台). Our Baidu SEO guides cover the rest.

<!-- SECTION: WordPress or Astro -->

## WordPress or Astro, and why we don't have a default

Most agencies pick a stack and sell it. We keep two, and the brief decides.

WordPress is the right answer when the site is an editorial operation. A
marketing team in Shanghai publishing weekly, a product catalogue that a
distributor edits, twelve people with logins and a workflow between them.
WordPress gives that team a back office they already know, and the China
problems it brings (Gravatar, the update servers, Google-hosted assets baked
into themes) are all known and all fixable. We wrote the page on WordPress in
China because we've fixed every one of them more than once.

Astro is the right answer when the site is a set of pages that change on a
release cycle. A brand site, a launch site, a corporate presence with a
content team of one. Astro builds to static HTML, so there's no admin to
secure on a mainland server and nothing sits between Baidu and the page. Our
Astro page explains how we build with it here.

Here is the opinion. The choice comes down to who edits the site and how
often. Speed stops being a differentiator once the dependencies are cleaned
up (the 1.2 second figure further down this page is a WordPress site), and
over three years the cost evens out too. So we ask two questions in the first
meeting: who will change this site next month, and what will they change? The
answer picks the stack. We then stop talking about stacks.

<!-- SECTION: How we deliver -->

## Ten services, one team

Everything a China website needs, from the same people in Shanghai.

It starts with strategy and audit: what your current site does from a Chinese
connection, and what the filing will require of it. China migration when the
site exists and needs to move. UX and UI design for Chinese reading patterns
and WeChat's in-app browser. Technical integration with WeChat (微信), Alipay
(支付宝), Baidu Maps (百度地图) and the domestic analytics stack.

Then the parts that keep it alive. Plugins and extensions, the
WordPress-specific half of dependency work. Chinese content, drafted
by Chinese writers from a brief, never run through a translator. Baidu SEO. GEO, which is what we call
visibility in DeepSeek, Doubao (豆包), Kimi and Baidu's own AI answers. China
hosting on Alibaba Cloud (阿里云), Tencent Cloud (腾讯云) or Huawei Cloud
(华为云). And maintenance and support, because on a mainland server the update
path is the security story.

Each has its own page under our services. You'll rarely need all ten at once
(the one client who did was migrating four sites in one go). Most projects
start with an audit and end on a retainer.

<!-- SECTION: Proof -->

## The numbers we publish

Few agencies in this market publish their figures. These are ours.

> A migration we ran took median page load from 23.4 seconds on a European
> origin to 1.2 seconds on a mainland origin.
> Source: ChinaWebFoundry, published 29 August 2026.

> Over a 90-day window, a mainland-hosted client site returned 99.98% uptime,
> with median response times of 48ms from Beijing, 36ms from Shanghai and 61ms
> from Guangzhou.
> Source: ChinaWebFoundry, published figures, 2026.

Both are ours, so read them with that in mind. The carrier and the exact test
dates behind each one are being written into the case studies this autumn,
because a number without a vantage point deserves your suspicion, including
when we publish it.

Two projects worth reading in full. Bassetti, a French engineering software
vendor, moved a WordPress and Elementor site onto a mainland origin in six
weeks, filing, .cn domain and dependency swaps included. SNF, the world's
largest water-soluble polymer manufacturer, runs its China site on mainland
hosting we maintain across two factories and six offices. Both are in our
work section.

<!-- SECTION: Process -->

## Fourteen weeks, four phases

The filing sits on the critical path and everything else waits behind it, so
the plan starts there.

| Phase | Weeks | What gates it |
|---|---|---|
| Plan | 1 to 2 | A mainland entity to hold the filing, or the Hong Kong decision |
| File | 2 to 8 | Alibaba Cloud review, then the provincial regulator |
| Build | 3 to 12 | Runs off-mainland in parallel with the filing |
| Launch and run | 12 to 14 | The filing clearing. Ports open that day. |

**Plan.** Audit from a Chinese connection. Entity check, because a mainland
company has to hold the filing, and if you don't have one this is where we
talk about Hong Kong instead. Stack decision. Dependency list.

**File.** Alibaba Cloud's own review takes one to two working days. The
provincial regulator then quotes up to 20 working days, and it varies by
province. We plan three to six weeks and have rarely needed less. The
production host is unreachable throughout, so the build happens elsewhere.

**Build.** Design, content, dependency replacement, Baidu readiness, on a
staging server outside the mainland. Tested from Shanghai every week.

**Launch and run.** Cutover, DNS, the footer filing number, sitemap submission
to Baidu. Then the retainer starts, because a mainland server needs someone
watching the update path.

If the site takes payment, add the commercial licence: 60 to 90 working days
at national level, so plan twelve to eighteen weeks for that alone.

<!-- SECTION: Frequently asked -->

## Frequently asked

**Do I need a Chinese company to have a website in China?**

To hold an ICP filing, yes. The filing belongs to a mainland entity, and the
hosting provider won't open the site without it. If you don't have one, we
host from Hong Kong, which needs no filing and sits one network hop from
Shenzhen. It's slower than a mainland origin and faster than anything in
Europe or the US.

**How long does a website in China take?**

Fourteen weeks is our planning number from brief to launch, with the filing
taking three to six of them. A smaller site with a mainland entity already in
place can go faster. A site that takes payment needs a commercial licence and
should plan for twelve to eighteen weeks on that alone.

**Can't I just translate my existing site?**

You can, and the translated site will load as slowly as the original and lose
the parts that call Google. The slowness comes from the hosting and the
dependencies, and translation changes neither. We usually keep your content
and design, rebuild the plumbing underneath, then rewrite the Chinese with a
Chinese writer.

**WordPress or Astro for China?**

Whichever fits the people who'll edit the site. WordPress when a team
publishes often and needs a back office. Astro when the site changes on a
release cycle and an editor would sit idle. Both work in China once the
dependencies are cleaned up.

**Will Baidu find my site?**

If it's server-rendered, filed, hosted on the mainland and submitted through
the Baidu Search Resource Platform, yes, and the first indexing takes two to
four weeks. Baidu dropped fast inclusion in 2024, so there's no shortcut. Our
Baidu SEO service covers submission, structured data and ongoing ranking.

**What does a website in China cost?**

It depends on whether the site is being built or moved, how many languages it
carries, and whether it needs a filing or a commercial licence. We quote after
the audit, with the hosting and the retainer priced separately from the build
so you can see what recurs. A scoping call is enough to give you a range.

**Where is your team?**

Shanghai, Putuo district. Cyril Drouin has run digital businesses in China
since 2005. Echo Peng runs delivery and has spent 18 years on e-commerce and
digital for global brands here. Everyone who touches your site works from the
Shanghai office.

<!-- CTA -->

CTA: Book a 30-minute scoping call with our Shanghai team / Run a free China readiness scan

<!-- SCHEMA
Type: WebPage + Service + FAQPage
FAQPage: yes, 7 questions
Breadcrumb: Home > Websites in China
Author: Cyril Drouin
datePublished: 2026-09-06
Measurement: F1 (CWF probe record, Alibaba Cloud Zhangjiakou, 2026-08-29); F32 (published figures, vantage pending T3-01, T3-02)
-->

<!-- ASSET BRIEF
TABLES: process table (phase, weeks, gate), data from F25 and F26.
CHARTS: none.
SCREENSHOTS: none.
DOWNLOADS: none.
INTERNAL LINKS:
  what the Great Firewall blocks -> /resources/china-web-guide/great-firewall-what-it-blocks/
  the page on WordPress in China -> /wordpress-in-china/
  Our Astro page -> /astro/
  our services -> /services/
  Baidu SEO service -> /services/baidu-seo/
  Baidu SEO guides -> /resources/china-web-guide/baidu-seo-ranking-in-china/
  Bassetti -> /work/bassetti-wordpress-china/
  SNF -> /work/snf-china-wordpress/
  our work section -> /work/
  free China readiness scan -> /china-site-scanner/
  scoping call -> /contact/
LOCALIZED SLUGS: fr site-web-en-chine · es sitio-web-en-china · de website-in-china (routes already reserved in src/i18n/routes.ts staticRoutes)
CLIENT SIGN-OFF NEEDED: none new. Bassetti and SNF figures are already on their live case study pages.
HARNESS ROWS CITED: none
-->
