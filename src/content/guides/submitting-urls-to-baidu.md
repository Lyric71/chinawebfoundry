---
title: "Submit a Website to Baidu: Push, Sitemap, Manual"
subtitle: "The developer finishes the sitemap, logs into Baidu, goes looking for the box to paste it into, and cannot find it. Nothing is broken. Most of the time the tool is missing because the account has not earned it."
summary: "How to submit a website to Baidu when the sitemap tool is missing: the API push endpoint, real quota behavior, and manual submission."
visual: "/images/guides/submitting-urls-to-baidu.webp"
order: 23
published: true
publishedAt: 2026-08-16
updatedAt: 2026-08-16
category: Search
---

Standard submission (普通收录, pǔtōng shōulù) is the part of the Baidu Search Resource Platform (百度搜索资源平台, Bǎidù Sōusuǒ Zīyuán Píngtái) that tells Baidu a page exists. Three channels: push, sitemap, manual. The platform lays them out side by side as though choosing between them were a matter of preference, when they really sit in an order of privilege. One is capped at twenty links a go. The other two are conditional: sitemap access gets handed out and taken away at Baidu's discretion, and the fastest form of push is open only to sites tied to a registered legal entity in China.

> Baidu held 63.97% of China's search engine market across all devices in November 2025, and 77.86% on mobile.
>
> *Source: StatCounter, cited by The Egg, February 11, 2026*

StatCounter's China panel moves around, so read that as a range rather than a fixed number. It is also why anyone puts up with the plumbing.

One thing to settle before the mechanics. Submission is not indexing. It tells Baidu a URL exists, and what happens after that is decided elsewhere.

## The push endpoint does the work

Push comes in two forms, and the API version is what a new foreign site runs on. The endpoint lives on data.zz.baidu.com and takes two query parameters, site and token. You send your list of URLs and read what comes back.

The site parameter is where most first attempts die. No protocol on the front, no trailing slash on the end, just the host as Baidu recorded it at verification. Baidu treats the protocol as part of site identity, so the http and https versions of your domain are separate properties and you push to the one you verified.

Baidu issues the token inside the platform. Anyone holding it can push URLs against your domain, worth remembering before it gets committed to a public repository.

Every response carries a remain field. It holds what is left of your daily allowance, and no other number in the platform tells you that. No dashboard sits behind it, no alert. Log the value with a timestamp on every call. On client sites the first sign that anything has changed is usually that number dropping.

The HTTP version of the endpoint still works. Use HTTPS anyway.

## The published quota and the real one

Baidu's own tool copy states that API push and manual submission share a ceiling of 100,000 URLs a day. Read the word ceiling literally.

What you get is assigned dynamically, site by site, on criteria Baidu has never published. There are documented cases of a site's daily allowance collapsing to 100 URLs. A hundred is fine for a normal publishing week. For a migration it is nothing, and a migration is usually when a team finds out what its number really is.

Which is why that response field belongs in a log.

## The automatic version of push is gated by a Chinese entity

The other form of push is the JavaScript one. A snippet goes in the site template, and pages announce themselves to Baidu as real visitors load them. Tidy, and most foreign sites will never get to switch it on.

Baidu opens it only to sites with an associated legal entity (关联主体, guānlián zhǔtǐ). That association launched in December 2019, and once made it cannot be dissolved for 30 days. It is another Chinese entity gate in a platform built out of them.

Count what that leaves a foreign company with no mainland presence. Automatic push is out, and sitemap access usually is too. The working toolkit comes down to an API endpoint and a text box.

## Manual submission, twenty at a time

The third channel is a text box. The cap of 20 links applies to each submission rather than to the day, and whatever you paste in comes out of the same shared allowance as the API.

Volume is not the point. What the box has going for it is that nothing else has to be working: no token to rotate, no deploy script that quietly stopped firing three releases ago. When a launch page matters enough that somebody senior will ask about it on Monday, it goes in the box on Friday as well as through the API.

## Sitemaps are a privilege

Now the channel most teams start with. The file rules are unremarkable. Plain text or XML, up to 50,000 URLs, under 10MB per file. Sitemap index files are rejected, the rule that catches people out, so a large catalog goes in as several separate files, submitted one by one.

Access is the hard part. Baidu grants sitemap submission rather than switching it on for everyone, and in September 2023 it took the tool back from a large group of sites at once.

> 关于回收网站提交配额的通知
>
> Notice on recalling website submission quotas
>
> *Source: Baidu Search Resource Platform, official announcement, September 2023*

The notice recalled submission quotas, shut off sitemap submission and cut API push allowances for accounts that had never completed real-name verification (实名认证, shímíng rènzhèng), and for sites Baidu judged low quality. Reports put it in effect from November 30, 2023. Sites that had submitted sitemaps for years opened the platform one morning and the module was gone.

Check whether the module is even in your account before generating files for it. We plan new foreign sites around not having it, and treat it as a bonus if it turns up later.

## What a real submission workflow looks like

Push on publish. The API call belongs inside the CMS, firing on every new or updated URL the moment the page goes live, not sitting in a weekly job somebody remembers on Thursdays. Store the remain value that comes back. If Baidu trims your allowance, that log is where it shows up first.

On top of that, a human still works the manual box: homepage, the service pages you are actually trying to rank, anything with a campaign behind it. Twenty at a time. Yes, it spends the allowance twice on the same URL, and for a handful of pages a month, fine.

Put your ICP filing number into site attributes while you are in there. Filing is not a prerequisite for submitting anything, but Baidu advises new sites under six months to fill that field to speed up indexing.

There used to be a faster route than any of this. [A separate article in this guide](/resources/china-web-guide/baidu-fast-inclusion-gone/) covers what happened to fast inclusion.

Then comes the part nobody budgets for. Initial indexing on a new site runs two to four weeks, and index volume (索引量, suǒyǐn liàng) sitting at zero through the first stretch is normal. Baidu publishes no service level for any of it, so there is nothing to escalate against.

Quota behavior changes without announcement, so trust the remain field over the documentation.
