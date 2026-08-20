---
title: "How to Build a Baidu Product Feed"
subtitle: "The task arrives sounding small. Get the catalog into Baidu Merchant Center. Then you go looking for the plugin and there isn't one. No WooCommerce extension for this exists, free or paid. The export is custom work, written against a 2019 specification that mostly sits behind a login."
summary: "How a Baidu product feed is structured, the five ways to load it, and the field rules that quietly break a WooCommerce or headless export."
visual: "/images/guides/baidu-product-feed.webp"
order: 19
published: true
publishedAt: 2026-08-14
updatedAt: 2026-08-14
category: Search
---

Baidu Merchant Center (百度商品中心, Bǎidù Shāngpǐn Zhōngxīn) stores product records that Baidu's advertising systems read back out on demand. Your feed is the input, so a bad file stops everything downstream.

> China had 937 million online shoppers as of December 2025, or 83.2% of the country's 1.125 billion internet users.
>
> *Source: China Internet Network Information Center, 57th Statistical Report, March 17, 2026*

That is the market on the far side of the file, reached through the paid product ads this data feeds. Most of the build goes on problems nobody warned you about.

## Four objects, and the smallest allowance is the one that hurts

The structure runs three levels deep. A catalog (目录, mùlù) holds product files (商品文件, shāngpǐn wénjiàn), and a file holds products (商品, shāngpǐn), up to a million of them. Nobody goes near that one.

A new account gets three catalogs, and that number ends up shaping the design. One catalog per brand plus one per language dies before anybody writes code.

The fourth object is not storage at all. A product group (商品组, shāngpǐn zǔ) is a filtered subset that campaigns point at. It behaves like a saved segment. Baidu advises keeping any one group under 100,000 products, and that is the ceiling you can actually hit. A group defined as everything in stock clears it immediately on a large catalog. Pick your filter fields with the limit in view.

## Baidu documents five ways in and discourages one of them

Online entry is the console form, scoped by Baidu to catalogs under 100 products. If you are reading this, it is not for you.

Manual upload takes a file you produce yourself: Excel to 10MB, XML and CSV to 50MB. Your CSV has to be UTF-8, worth checking twice on any pipeline that touches Excel on Windows.

Scheduled file sync is where most integrations land. You host the file, Baidu fetches it, and the cap jumps to 8GB, XML and CSV only at that size. One condition belongs in front of your infrastructure people early: Baidu's IP ranges have to be whitelisted on your server. That is a firewall ticket, not a code change, the same class of problem that stops Baiduspider verifying a site behind an aggressive WAF, and it can outlast the build itself.

Fourth is API integration, where the honest answer is thin: Baidu names the route, but no public material carries the working detail. Scope it with whoever manages your ads account.

Fifth is custom crawling, where Baidu scrapes your product pages itself. Baidu does not recommend it, which tells you how much support the route will get.

Sync frequency comes as a menu: every 15 minutes, hourly through 12-hourly, daily, or weekly. Fifteen minutes is available and rarely right, since a feed regenerated every quarter hour on a live store publishes every temporary data error you have.

## You cannot scope the mapping until you can read the dictionary

Baidu supplies 11 industry data templates. Each expects a different field set, and choosing wrong means remapping later. The full dictionary sits behind a login, on an advertising account with the Merchant Center permission switched on. Until somebody with that access exports your industry's template, any mapping you write is a guess. Teams that scope from an English summary rebuild it later.

## The field rules that break real integrations

Little of what goes wrong here is exotic. It just fails quietly.

The unique key is outerid, and it has to be unique within the catalog. Duplicates throw no error. The later upload does not import, and the row you thought you had updated keeps its old values. When import counts do not match export counts, start there.

URLs come with three rules, all of them absolute. The landing page field is loc and it has to carry the protocol, so a bare domain fails. No URL may contain Chinese characters, in the path or in a query string, which disqualifies a whole class of localized store until somebody rewrites the permalinks. And the feed domain has to match the domain registered on the advertising account, so a forgotten staging host will not pass, nor will the regional subdomain plenty of international brands use for China. Check which domain the ads account was opened against before anyone maps a URL.

The next rule looks like nothing. Optional fields may be left blank or deleted from the file, but they must never be filled with a zero. Exporters love zero. It is the default fallback in plenty of serialization libraries, and it turns an empty field into a value Baidu reads as real.

Images carry a floor of 480 by 320 pixels for the large one. The main image goes in the image field and extras in moreimage fields, and the three-image creative format wants at least three per product. A catalog shipping one photo per SKU has closed off its own ad formats. Filtering runs on CustomLabel1 through CustomLabel5, with custom fields beyond those. Fill the labels before the first upload, since product groups get built on them.

## Two WooCommerce defaults that Baidu rejects

Permalinks first. A store running a Chinese localization builds its slugs from the Chinese product title, which puts Chinese characters in every product URL by default. Against Baidu's URL rule that is not a partial failure. It is every row in the file. The fix is a permalink scheme producing ASCII slugs, applied before you generate a feed, which on an established store means a redirect map too.

Variations are the second one. They frequently inherit or share the parent SKU. Map SKU straight to outerid and they collide, and because duplicates fail silently you get a successful upload holding a fraction of what you sent. Build a composite key instead, parent plus variation, kept stable between exports.

Headless stacks dodge the permalink trap and meet everything else unchanged, since neither the domain rule nor the zero-value rule cares what rendered the page.

## What actually decides the calendar

Two things here run on somebody else's clock, and neither is code. The account permission has to be switched on before anybody sees your industry template, and the IP whitelist has to clear before a scheduled sync fetches anything. Start both in week one.

The code can be proved without waiting on either one. Hand-upload a few hundred products as a CSV and read what comes back.

Baidu's Merchant Center documentation dates to 2019, so verify every field name against the template your own account exports.
