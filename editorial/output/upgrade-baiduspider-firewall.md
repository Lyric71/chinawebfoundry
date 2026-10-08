---
title: "Add F15 and F16 to baiduspider-firewall"
slug: upgrade-baiduspider-firewall
description: "Work order output: replacement copy and change list for baiduspider-firewall in four locales, adding the Wordfence and Solid Security source findings."
excerpt: "Adds what Wordfence, Solid Security, LiteSpeed Cache and W3 Total Cache do to Chinese crawlers, read from source. Zero new URLs."
template: upgrade
author: cyril-drouin
category: Search
---

<!-- T6 UPGRADE OUTPUT. This file is not a page and is never published as one.
     It carries the replacement copy and the change list. The publish step
     applies the changes to the existing files named below. ZERO NEW URLS. -->

# Change list

Scope: `baiduspider-firewall`, four locales, four content files. No route,
no schema file, no component is touched.

| # | File | Line | Action |
|---|---|---|---|
| 1 | `src/content/guides/baiduspider-firewall.md` | 3 | Replace `subtitle` (35 words live, ceiling 25) |
| 2 | `src/content/guides/baiduspider-firewall.md` | 4 | Replace `summary` |
| 3 | `src/content/guides/baiduspider-firewall.md` | 9 | Set `updatedAt` to the publish date |
| 4 | `src/content/guides/baiduspider-firewall.md` | after 9 | Insert `reviewBy: 2027-01-07` |
| 5 | `src/content/guides/baiduspider-firewall.md` | 25 to 27 | Replace the Statcounter blockquote with the primary source, September 2026 |
| 6 | `src/content/guides/baiduspider-firewall.md` | after 55 | Insert Baidu's own verification rule and the IP list warning (F20) |
| 7 | `src/content/guides/baiduspider-firewall.md` | after change 6 | Insert three sections: the plugin table with the LiteSpeed Cache and W3 Total Cache clearance (F18), Wordfence (F15), Solid Security (F16) |
| 8 | `src/content/guides/baiduspider-firewall.md` | 59 | Replace: pinyin out, platform named in full |
| 9 | `src/content/guides/baiduspider-firewall.md` | 63 | Replace the quota line with Baidu's own figure, plus its blockquote |
| 10 | `src/content/guides/baiduspider-firewall.md` | 69 | Replace `(备案号, bèi'àn hào)` with `(ICP备案)` |
| 11 | `src/content/guides/baiduspider-firewall.md` | after 75 | Insert the WordPress step in the fix order |
| 12 | `src/content/guides/baiduspider-firewall.md` | after 77 | Insert the robots tool blockquote |
| 13 | `src/content/guides-fr/baiduspider-firewall.md` | same lines | Changes 1 to 12, translated |
| 14 | `src/content/guides-es/baiduspider-firewall.md` | same lines | Changes 1 to 12, translated |
| 15 | `src/content/guides-de/baiduspider-firewall.md` | same lines | Changes 1 to 12, translated |

All four locale files are 81 lines at HEAD (3dc1f26) and line-aligned,
checked on 9 October 2026: `subtitle` line 3, `summary` line 4, `updatedAt`
line 9, the blockquote lines 25 to 27, the H2s at 17, 31, 39, 47, 57, 65 and
71, the pinyin at lines 59 and 69 in every locale. Check again before
applying, in case another piece has touched the files since. Apply the
changes from the bottom of the file upwards so the line numbers above stay
true while you work.

New URLs created: 0. `src/i18n/routes.ts` is untouched;
`baiduspider-firewall` is already registered in `guideSlugs` (fr
`baiduspider-pare-feu`, es `baiduspider-cortafuegos`, de
`baiduspider-firewall`). No canonical or hreflang change. Verify the sitemap
entry count before and after the build: it must be identical.

Translation at publish: changes 1, 2, 5 to 9, 11 and 12 are prose and go
through `/deep-translate`, three passes each, FR then ES then DE, in the main
conversation. Changes 3 and 4 are dates. Change 10 swaps characters for
characters and is identical in every locale. In the table, plugin names,
version numbers, setting names in quotation marks (as Wordfence and Kadence
Security print them in English), user agent strings and file names are not
translated; column headers and cell prose are. Inside blockquotes, publisher
names, Chinese names in parentheses and URLs stay as they are.

The live page writes its source lines in italics after an empty `>` line.
Every blockquote this work order touches uses the house format instead
(`Source: Publisher, Month Year. URL` on the last line), so after the publish
the page has one citation style.

---

# CHANGE 1. Frontmatter `subtitle`, line 3

Reason: the live subtitle is 35 words; the house ceiling is 25.

REMOVE:

```
subtitle: "The site is up. The CDN dashboard is healthy, the Shanghai team has been publishing Chinese content for six weeks, and index volume in the Baidu Search Resource Platform has not moved off zero."
```

INSERT:

```
subtitle: "The site is up and the CDN dashboard is healthy, yet six weeks of Chinese content have left Baidu's index count at zero."
```

---

# CHANGE 2. Frontmatter `summary`, line 4

Reason: the page now covers WordPress security plugins as well as the edge.

REMOVE:

```
summary: "Cloudflare, WAF defaults and geo rules block Baiduspider silently. How to spot it, verify a real crawler by reverse DNS, and fix it in order."
```

INSERT:

```
summary: "Cloudflare, WAF rules and WordPress security plugins block Baiduspider silently. How to spot it, verify the crawler by reverse DNS, and fix it in order."
```

The live `title` (line 2, 47 characters) stays.

---

# CHANGE 3. Frontmatter `updatedAt`, line 9

REMOVE `updatedAt: 2026-08-16`. INSERT `updatedAt: 2026-10-09`, the row's
publish date. If the publish step runs on a later day, it writes that day.

---

# CHANGE 4. Frontmatter `reviewBy`, after line 9

INSERT `reviewBy: 2027-01-07`.

Reason: the work order's risk note. The Wordfence and Solid Security sections
are pinned to plugin versions, which move on the vendors' release cycle.
`editorial/scripts/review-due.mjs` lists the page in the first publish run
after 7 January 2027, and that run re-reads both plugins' current source.
The field already exists in all four guide schemas (`src/content.config.ts`,
added by T6-03).

---

# CHANGE 5. The market share blockquote, lines 25 to 27

Reason: the live figure is right for its month (Statcounter's own series
confirms 63.97% and 77.86% for November 2025) but it is eleven months old,
cited through a third party, and dated in US format.

REMOVE:

```
> Baidu held 63.97% of China's search engine market across all devices in November 2025, and 77.86% on mobile.
>
> *Source: StatCounter, cited by The Egg, February 11, 2026*
```

INSERT:

<!-- BEGIN REPLACEMENT COPY, CHANGE 5 -->

> Baidu held 46.65% of the search engine market in China across all
> platforms in September 2026, by Statcounter's measure, and 60.15% on
> mobile.
> Source: Statcounter Global Stats, September 2026. https://gs.statcounter.com/search-engine-market-share/all/china and https://gs.statcounter.com/search-engine-market-share/mobile/china

<!-- END REPLACEMENT COPY, CHANGE 5 -->

Line 29 ("That market sits on the other side of the rule.") stays.

---

# CHANGE 6. Reverse DNS section, insert after line 55

Reason: F20. The section explains the lookup but never quotes Baidu, and it
does not say why an IP allowlist fails.

INSERT after the paragraph ending "it is a short worker script.":

<!-- BEGIN REPLACEMENT COPY, CHANGE 6 -->

Baidu's own guidance describes the same two lookups and adds a line about
IP lists.

> A genuine Baiduspider hostname ends in .baidu.com or .baidu.jp, and
> anything else is impersonation. A forward lookup of that hostname must
> return the original IP. Baidu says it cannot publish its crawler's IP
> ranges because they change.
> Source: Baidu Search Resource Platform (百度搜索资源平台), February 2022. https://ziyuan.baidu.com/college/articleinfo?id=3378

Chinese SEO blogs still publish lists of Baiduspider IP ranges. An allowlist
built from one is a snapshot of addresses Baidu says will move. Verify the
crawler by reverse DNS every time, and never by user agent.

<!-- END REPLACEMENT COPY, CHANGE 6 -->

---

# CHANGE 7. Three new sections, inserted after change 6

Reason: the work order. F15, F16 and F18, each with the version read and the
read dates, ahead of "Make Baidu tell you what it received".

<!-- BEGIN REPLACEMENT COPY, CHANGE 7 -->

## What four WordPress plugins do to Chinese crawlers

On a WordPress site, a second set of rules runs after the edge has let a
request through. It lives in the security and cache plugins, and the only
crawler exemption we found in any of them is for Google.

We read the source of four plugins on 4 September 2026, then again on
9 October 2026 against the current releases. Two of them can turn Chinese
crawlers away once a single setting changes. LiteSpeed Cache and W3 Total
Cache have nothing in them that does.

| Plugin | Version read | As shipped | What can turn Chinese crawlers away |
|---|---|---|---|
| Wordfence | 9.0.0, unchanged in 9.0.2 | All five rate limits off. One crawler rule, for Google | A number typed into "If a crawler's page views exceed" |
| Solid Security, now Kadence Security | 10.0.3, unchanged in 10.0.5 | "Default Ban List" off | Switching it on writes a 403 for 360Spider, EasouSpider and YisouSpider into the server config |
| LiteSpeed Cache | 7.9.1 | "Do Not Cache User Agents" empty | Nothing found in the code |
| W3 Total Cache | 2.10.6, unchanged in 2.10.7 | Rejected user agent lists empty | Nothing found in the code |

That rules out the cache plugins. Their user agent lists only decide
which visitors skip the cache, and both ship empty. If Baiduspider gets a 403
on a site running either one, the cause is somewhere else in the stack.

> LiteSpeed Cache 7.9.1 ships "Do Not Cache User Agents" empty. W3 Total
> Cache 2.10.6 ships its rejected user agent lists for page cache, minify
> and CDN empty, and 2.10.7 is the same. Neither plugin's code has a rule
> that names Baiduspider.
> Source: LiteSpeed Cache 7.9.1 and W3 Total Cache 2.10.6 source code, WordPress.org, read 4 September and 9 October 2026. https://wordpress.org/plugins/litespeed-cache/ and https://wordpress.org/plugins/w3-total-cache/

## Wordfence 9.0.0 has a crawler rule for Google only

Wordfence ships all five of its rate limits switched off: all requests,
crawler page views, crawler 404s, human page views and human 404s. The
master switch, "Enable Rate Limiting and Advanced Blocking", ships on, so
a limit applies the moment someone types a number into it.

Wordfence has one setting about search crawlers, "How should we treat
Google's crawlers". By default it exempts verified Google crawlers from
every rate limit. Wordfence checks them against Google's IP
ranges and a reverse lookup that must end in googlebot.com or another Google
hostname, confirmed forward. Baidu gets no equivalent setting, and neither
does any other search engine.

Set a number in "If a crawler's page views exceed", under the firewall's
Rate Limiting Rules, and Googlebot walks past it while Baiduspider is
counted like any other bot. Past the limit it gets a 503, whether the action
is left on throttle or changed to block. Wordfence logs the throttle. Baidu
just gets a server error, which is the rate limiting pattern described
earlier: through on Tuesday, refused on Wednesday.

The obvious fix would be to allowlist Baiduspider. Wordfence's allowlist,
"Allowlisted IP addresses that bypass all rules", takes IP addresses and
ranges and nothing else (the plugin has no user agent allowlist at all), and
Baidu, as quoted above, does not publish its ranges.

> Wordfence 9.0.0 ships its five rate limits set to DISABLED. Its one
> crawler setting, "How should we treat Google's crawlers", defaults to
> "Verified Google crawlers will not be rate-limited". Its allowlist accepts
> IP addresses and ranges only. Wordfence 9.0.2, the current release, is
> unchanged.
> Source: Wordfence 9.0.0 source code (released 10 August 2026), read 4 September and 9 October 2026, and 9.0.2, read 9 October 2026. https://wordpress.org/plugins/wordfence/

Keep Wordfence's crawler limits off, or set them well above anything a
crawl sends. If you need to rate limit crawlers, do it at the CDN or WAF in
front of the site, where a rule can run the reverse DNS check before it
starts counting.

## Solid Security's ban list refuses 360 Search and Shenma

Solid Security ships under the plugin slug better-wp-security, and
since version 10.0.0 in May 2026 it carries the Kadence Security name. Its
Ban Users module has a setting called "Default Ban List", off in a new
install. Its description calls it a
getting-started point.

Switch it on and the plugin writes the HackRepair.com ban list into your
server config: .htaccess on Apache and LiteSpeed, nginx.conf on nginx. That
list answers 403 to any user agent containing 360Spider or YisouSpider, plus
a third string, EasouSpider. 360Spider crawls for 360 Search (360搜索),
YisouSpider for Shenma Search (神马搜索).

Baiduspider isn't on the list.

> Solid Security 10.0.3 ships "Default Ban List" with "default": false. When
> it is on, the HackRepair.com list is written into the server
> configuration and returns 403 to user agents matching 360Spider,
> EasouSpider and YisouSpider. Kadence Security 10.0.5, the current
> release, carries the same list.
> Source: Solid Security 10.0.3 source code (released 27 July 2026), read 4 September and 9 October 2026, and 10.0.5, read 9 October 2026. https://wordpress.org/plugins/better-wp-security/

The rule sits in the server config, so WordPress never sees the request
and nothing in the plugin's own logs records it. A site where someone switched it on at setup has refused 360
Search and Shenma ever since.

> Shenma Search's crawler user agent is yisouspider.
> Source: Shenma Search (神马搜索) webmaster platform, July 2014. https://zhanzhang.sm.cn/open/optimizaGuide

Turn the Default Ban List off, then open .htaccess or nginx.conf and check
that the block beginning "# Start HackRepair.com Blacklist" has gone. If you
want 360 Search back by address, its rules run the other way round from
Baidu's. 360 publishes its crawler's IP ranges and says reverse lookup does
not yet work for it, so an IP allowlist is the method it asks for.

> 360 Search's crawler carries 360Spider in its user agent. 360 publishes
> its crawler's IP ranges on the same page and says nslookup verification
> is not yet supported.
> Source: 360 Search (360搜索), 360蜘蛛IP help page, February 2026. https://www.so.com/help/spider_ip.html

<!-- END REPLACEMENT COPY, CHANGE 7 -->

---

# CHANGE 8. Line 59, crawl diagnosis

Reason: house rule, no pinyin; the platform is named in full on its first
mention in the body.

REMOVE:

```
Crawl diagnosis (抓取诊断, zhuāqǔ zhěnduàn) in the Search Resource Platform fetches a URL as Baiduspider and shows you the response. Desktop or mobile user agent, your choice. It reads the first 200KB of the body, enough to show an interstitial or an error page.
```

INSERT:

<!-- BEGIN REPLACEMENT COPY, CHANGE 8 -->

Crawl diagnosis (抓取诊断) in the Baidu Search Resource Platform
(百度搜索资源平台) fetches a URL as Baiduspider and shows you the response.
Desktop or mobile user agent, your choice. It returns the first 200KB of the
body, enough to reveal an interstitial or an error page.

<!-- END REPLACEMENT COPY, CHANGE 8 -->

---

# CHANGE 9. Line 63, the fetch quota

Reason: "reported inconsistently, between 70 and 200 a week" has no source.
Baidu's own tool page says 70 a week per site (the 2014 launch notice said
300 a month, and no Baidu page says 200 a week).

REMOVE:

```
Fetch quota is limited and reported inconsistently, between 70 and 200 a week, so it is not a load test. And read the body it returns, not just the status code.
```

INSERT:

<!-- BEGIN REPLACEMENT COPY, CHANGE 9 -->

Each site gets 70 fetches a week, so it is not a load test. And read the
body it returns: a 200 says nothing about what was in it.

> Crawl diagnosis allows 70 fetches a week per site and shows the first
> 200KB of the content Baiduspider can see.
> Source: Baidu Search Resource Platform (百度搜索资源平台), crawl diagnosis tool page, read 9 October 2026. https://ziyuan.baidu.com/crawltools/index

<!-- END REPLACEMENT COPY, CHANGE 9 -->

---

# CHANGE 10. Line 69, the filing term

Reason: house rule, no pinyin, and 备案号 is the filing number, not the
filing. The house term is ICP filing (ICP备案).

In all four locales, replace `(备案号, bèi'àn hào)` with `(ICP备案)`. The rest
of the line stays.

---

# CHANGE 11. The fix order, insert after line 75

Reason: the order section covers the edge only. The WordPress step belongs
after it.

INSERT after the paragraph ending "the hardest failure to attribute.":

<!-- BEGIN REPLACEMENT COPY, CHANGE 11 -->

On WordPress, the origin comes next. Turn off Solid Security's Default Ban
List if it's on, and check whether anyone has set a Wordfence crawler limit.

<!-- END REPLACEMENT COPY, CHANGE 11 -->

---

# CHANGE 12. The robots tool, insert after line 77

Reason: the 48KB figure on line 77 has no citation.

INSERT after the paragraph ending "than any firewall rule.":

<!-- BEGIN REPLACEMENT COPY, CHANGE 12 -->

> Baidu's robots tool checks up to 48k of a robots.txt file.
> Source: Baidu Search Resource Platform (百度搜索资源平台), robots tool page, read 9 October 2026. https://ziyuan.baidu.com/robots/index

<!-- END REPLACEMENT COPY, CHANGE 12 -->

---

# Acceptance criteria, checked

| Criterion | Result |
|---|---|
| Both plugin sections name the exact version number inspected and the source read date | PASS. Wordfence 9.0.0, read 4 September and 9 October 2026 (9.0.2 also read 9 October). Solid Security 10.0.3, same dates (10.0.5 also read 9 October). In the H2 or first table row, in the prose and in each blockquote. |
| The Wordfence section states that the allowlist is IP-only and that Baidu publishes no stable IP range | PASS. Fourth paragraph of the Wordfence section, and its blockquote; Baidu's own statement is quoted in change 6. |
| The Solid Security section states that the ban list is opt-in and defaults to false | PASS. "off in a new install" in prose; `"default": false` in the blockquote. |
| The article states that Baiduspider is verified by reverse DNS and never by user agent | PASS. Change 6, last paragraph. |
| The article does not assert that Baidu cannot read JavaScript | PASS. Grep of the replacement copy and the live page for "cannot read JavaScript" and "can't read JavaScript": zero hits. The only "JavaScript" on the page is line 43's "A JavaScript interstitial", which describes an edge challenge, not Baidu's rendering. |
| No claim about the reachability of any untested host on the Do Not Assert list | PASS. No reachability claim of any kind is made. |
| No URL, canonical or hreflang change in the deploy diff | PASS as drafted. Four content files, no route, no `guideSlugs` change. Verify the sitemap count before and after the build. |
| Version numbers visible in the body and a review date in frontmatter (risk note) | PASS. Changes 4 and 7. |
| Descriptive of shipped configuration, no vendor intent (risk note) | PASS. Every plugin sentence says what the code ships or does. |

---

# Word count

Replacement copy only, counted after the 18-pass quality loop. Excludes the
change list, the reasons, the acceptance table and this table.

| Passage | Narrative | Blockquotes | Table cells |
|---|---|---|---|
| Change 5, market share | 0 | 32 | 0 |
| Change 6, Baidu's verification rule | 52 | 46 | 0 |
| Change 7, three plugin sections | 625 | 251 | 95 |
| Change 8, crawl diagnosis | 44 | 0 | 0 |
| Change 9, the fetch quota | 29 | 35 | 0 |
| Change 11, the WordPress step | 26 | 0 | 0 |
| Change 12, the robots tool | 0 | 25 | 0 |
| Total | 776 | 389 | 95 |

The live English body is 1158 words. The removed passages (lines 25 to 27, 59
and 63) come to 105, the added copy to 1260, so the page lands at about
2313 body words. No target applies to a T6 upgrade. Narrative counts include
the three new H2s. Changes 1 to 4 and 10 are frontmatter or a character swap
and carry no body words.

<!-- FEATURE IMAGE
None. T6 skips step 3 unless the work order asks for an image, and T6-10
does not. The page keeps its live hero, /images/guides/baiduspider-firewall.webp.
-->

<!-- SCHEMA
Type: Article (unchanged; the guide layout emits Article and BreadcrumbList)
FAQPage: no (the page has no FAQ section and the work order does not ask for one)
Breadcrumb: Home > China Web Guide > Baiduspider Blocked by Cloudflare and WAF Rules
Author: Cyril Drouin (unchanged: the live page carries no author field, so the collection default applies)
datePublished: 2026-08-16 (unchanged). dateModified: the publish date
Measurement: none. The piece makes no reachability claim; its plugin facts are code reads, dated
-->

<!-- ASSET BRIEF
TABLES: (1) four plugins, version read, shipped default, what changes it.
All data from the plugin source downloads logged in
editorial/sources/verified-sources.md ("T6-10 entries, 9 October 2026").
CHARTS: none
SCREENSHOTS: none
DOWNLOADS: none
INTERNAL LINKS: no new link. The live page links once, to /wordpress-in-china/
("the WordPress build itself", line 15), and keeps it. The new sections add
no plain-text reference to wire.
LOCALIZED SLUGS: already registered. fr baiduspider-pare-feu · es
baiduspider-cortafuegos · de baiduspider-firewall
CLIENT SIGN-OFF ON RECORD: none needed. No client is named and no client
figure is used
LINK SUBSTITUTIONS: none
THIRD-PARTY MEASUREMENTS CITED (GFW rule): none
REVIEW: reviewBy 2027-01-07. Re-read the current Wordfence and Kadence
Security source against the "What four WordPress plugins do" table
-->
