---
title: "Is WordPress Blocked in China?"
slug: "is-wordpress-blocked-in-china"
description: "WordPress is not blocked in China. What breaks is the outbound calls it makes by default. Here is the 2026 list, tested from the mainland."
excerpt: "WordPress runs fine on mainland servers. The failures come from what it loads from outside, and most published lists are out of date."
template: "guide"
category: "Technology"
---

<!-- HERO SECTION -->

# Is WordPress Blocked in China?

No. WordPress is not blocked in mainland China, and it never has been.

The software downloads, installs and runs normally on a server in Shanghai or Beijing. Roughly 1.45 million Chinese-language WordPress sites were counted the last time anybody bothered to measure, and the CMS holds a larger share of the mainland market than any single domestic competitor.

What fails is different, and it is the reason the myth persists. A default WordPress install reaches out to somewhere between eight and twenty external hosts before a visitor sees anything. Some of those hosts are blocked. One of them will stop the page from rendering at all. The site is not blocked. The site is bleeding.

<!-- THE DEPENDENCY PROBLEM -->

## The problem is what WordPress loads, not what WordPress is

Install WordPress on a mainland server with a common commercial theme and a normal plugin set, and you have quietly committed to fetching assets from Google, Automattic, a JavaScript CDN, a font CDN, and whatever your forms and analytics vendors use.

From Frankfurt or Singapore those calls resolve in milliseconds and nobody notices. From Shanghai the results split three ways. Some resolve fine. Some resolve slowly enough to hurt. Some never return at all, and the browser sits there waiting until it gives up.

> Chinafy's 2026 benchmark tested 614 sites across eleven verticals using WebPageTest from Beijing, Virginia and London. 66.4% of them failed to load successfully in Beijing. Median visual load was 17.2 seconds, and 44% of Beijing tests timed out entirely. Source: Chinafy, State of Global Website Performance in China, April 2026.

That is not a WordPress statistic. It is a statistic about foreign sites, and WordPress simply happens to be what most of them run on.

<!-- THE 2026 STATUS TABLE -->

## What is actually blocked, checked in 2026

Most of the lists circulating on the English web were written between 2019 and 2023 and have been copied forward since. Several items on them have changed. This is the current picture, tested from mainland vantage points in August 2026.

| Dependency | Status from mainland China | What happens |
|---|---|---|
| Google Hosted Libraries (ajax.googleapis.com) | Fully blocked | Render halts. No first byte at all |
| Google reCAPTCHA | Fully blocked | Forms cannot be submitted |
| Google Analytics | Fully blocked | Beacon never arrives, data is lost |
| Google Maps JS API | Fully blocked | Map area stays empty |
| YouTube and Vimeo embeds | Fully blocked | Player and oEmbed call both fail |
| Gravatar | Blocked | Slows comments and the whole admin |
| Google Fonts (fonts.googleapis.com) | Reachable and fast | Loads normally, roughly 110ms |
| Google Tag Manager | Intermittent | Container may load, collection still fails |
| wordpress.org and update servers | Reachable, rate limited | HTTP 429 on plugin and core updates |
| cdnjs, unpkg, jsDelivr | Reachable, slow | Roughly 480ms to 820ms first byte |
| Stripe and PayPal scripts | Reachable | Licensing, not the firewall, is the blocker |

<!-- THE ONE THAT MATTERS MOST -->

## One line of code accounts for most of the damage

If a theme loads jQuery from Google Hosted Libraries, and thousands of commercial themes still do, the page does not slow down. It stops.

That script tag is render blocking. The browser will not paint until it resolves, and from mainland China it does not resolve. Not slowly. Not eventually. In repeated probes from an Alibaba Cloud instance in Zhangjiakou, requests to ajax.googleapis.com returned no first byte across every run before the test was abandoned at sixty seconds.

The visitor sees a white screen, waits four or five seconds, and leaves. Analytics, if analytics worked, would record nothing. This is the single most common cause of a foreign site being described as "blocked in China" when it is nothing of the sort.

The fix takes a developer about ten minutes. Bundle jQuery locally, or dequeue it entirely if the theme does not need it.

<!-- THE GOOGLE FONTS CORRECTION -->

## Google Fonts is not blocked, and most guides get this wrong

This one deserves its own section because the received wisdom is now wrong, including in a lot of agency marketing copy.

> Tested 29 August 2026 from a mainland instance: fonts.googleapis.com completed 73 of 73 requests at a median 111ms time to first byte, and fonts.gstatic.com completed 73 of 73 at a median 102ms. Both domains resolve to Google IP ranges hosted inside China when a domestic resolver is used.

The font files reach the visitor. What is blocked is fonts.google.com, the browsing interface, which affects your designers and not your users.

There is still a reason to self host, and it is a better reason than the one usually given. The mainland resolution path depends on the visitor's DNS. Resolve through a domestic resolver and you get a China-hosted Google IP. Resolve through an overseas resolver and you get a blocked one, and the request hangs. Self hosting removes the variable. Say that, rather than repeating a block that no longer exists, and you will be right in both directions.

<!-- WORDPRESS.ORG -->

## wordpress.org is reachable. It is also rate limited

The plugin repository, the theme repository and the core update servers all respond from mainland China. They also return HTTP 429 against mainland IP ranges often enough that a site can sit for weeks without a security patch.

This has been true since at least October 2019 and it is why an entire domestic mirror ecosystem exists, most visibly the WP-China-Yes project, which redirects update, plugin install and theme install calls to mainland mirrors.

A site left on default settings will not tell you it has stopped updating. It will just quietly fall behind, which on WordPress is a security problem rather than an inconvenience.

<!-- WORDPRESS.COM -->

## WordPress.com is a separate question, with a separate answer

Self hosted WordPress, the software you download from wordpress.org, is fine.

WordPress.com, the hosted service Automattic runs, is not wholesale blocked either, though almost every guide says it is. The apex domain frequently resolves. What is blocked is a large share of what sits underneath it, including the Chinese language properties and a great many individual user blogs.

For a company, the distinction is academic, because there is a harder constraint underneath. You cannot complete an ICP filing (ICP备案) for a domain whose hosting you do not control, and without a filing you cannot legally serve from a mainland server. A WordPress.com site cannot be made compliant, regardless of whether it happens to load today.

<!-- WHAT THIS MEANS FOR A BUILD -->

## What this means if you are building

The practical conclusion is unglamorous. WordPress is not the problem, and switching platforms to escape a problem you have not diagnosed is an expensive way to keep it.

A WordPress site works in China when four things are true. The outbound dependencies are removed or replaced. The site is served from inside the mainland, or from Hong Kong if the filing is not yet in place. The ICP filing is done, which takes three to six weeks and requires a mainland entity. And the pages are built so Baidu can crawl them, which is a separate discipline from making them fast.

None of that is exotic. All of it is work somebody has to actually do, and a theme bought on a marketplace has done none of it.

<!-- FAQ -->

## Frequently asked

**Can I just use a VPN to test whether my site works in China?**
No. A VPN from outside China tells you almost nothing, because you are still routing through your own network. Test from a mainland vantage point, or use a tool that does.

**Will a global CDN fix this?**
It helps with distance and does nothing about blocked hosts. Cloudflare's standard network serves mainland visitors from Hong Kong, Japan or the US west coast. Its in-country network is an Enterprise product operated with JD Cloud and requires a valid ICP filing per domain.

**Do I need an ICP filing or an ICP licence?**
A filing (ICP备案) covers an informational site and takes roughly three to six weeks once a mainland entity exists. A commercial licence (ICP许可证) is required when the site itself earns revenue and realistically runs twelve to eighteen weeks.

**Is Astro a better choice than WordPress for China?**
Sometimes. A static build removes a whole class of runtime dependency and loads faster behind the firewall. It also removes the editing experience a marketing team expects. The honest answer depends on who updates the site and how often.

**How fast should a site load from Shanghai?**
Under two seconds is achievable on mainland hosting with the dependencies cleaned up. We have moved sites from 23.4 seconds on a European origin to 1.2 seconds after migration.

<!-- CTA -->

Run a free China readiness scan on your site

Talk to our team about a WordPress build for China
