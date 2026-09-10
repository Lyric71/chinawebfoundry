---
title: "Is WordPress blocked in China?"
subtitle: "The software runs fine on a mainland server. Its outside calls are the problem. Measured from two vantage points, 28 and 30 August 2026."
summary: "WordPress isn't blocked in mainland China. Here's the 2026 list of which dependencies really fail, which are only slow, and which ones guides get wrong."
visual: "/images/guides/is-wordpress-blocked-in-china.webp"
order: 34
published: true
publishedAt: 2026-08-29
updatedAt: 2026-09-11
category: Technology
---

No. WordPress isn't blocked in mainland China, and it never has been.

The software downloads, installs and runs normally on a server in Shanghai or Beijing. It sits ahead of any single domestic CMS on foreign-owned sites filed in China, and there are well over a million Chinese-language installs behind it.

So why does the myth survive? Because a default install reaches out to somewhere between 8 and 20 external hosts before a visitor sees anything. Some of those hosts are blocked. One of them can hold the whole page hostage. The site loads, technically. It just bleeds time on every request, and your team back in Europe never sees it happen.

Last measured from an Alibaba Cloud region on 28 August 2026, and from a Beijing consumer line on 30 August 2026.

## Measured from a datacentre and from a home line

Two probes, two days apart, over the same list of hosts. One ran on a commercial cloud inside China. The other ran on somebody's home broadband in Beijing. They disagree, and the disagreement is the useful part.

| Host | Vantage point | Result | Verdict | Tested |
|---|---|---|---|---|
| fonts.googleapis.com | Alibaba Cloud (阿里云) cn-zhangjiakou | 72 of 72, 111ms median, 137ms p95 | Reachable | 28 Aug 2026 |
| fonts.googleapis.com | Beijing China Mobile (中国移动) home line | 0 of 54 | Blocked | 30 Aug 2026 |
| fonts.gstatic.com | Alibaba Cloud (阿里云) cn-zhangjiakou | 72 of 72, 102ms median, 121ms p95 | Reachable | 28 Aug 2026 |
| fonts.gstatic.com | Beijing China Mobile (中国移动) home line | 0 of 6 | Blocked | 30 Aug 2026 |
| www.googletagmanager.com | Alibaba Cloud (阿里云) cn-zhangjiakou | 72 of 72, 118ms median, 143ms p95 | Reachable | 28 Aug 2026 |
| www.googletagmanager.com | Beijing China Mobile (中国移动) home line | 0 of 112 | Blocked | 30 Aug 2026 |
| www.google.com/recaptcha | Alibaba Cloud (阿里云) cn-zhangjiakou | 0 of 72 | Blocked | 28 Aug 2026 |
| www.google.com/recaptcha | Beijing China Mobile (中国移动) home line | 0 of 18 | Blocked | 30 Aug 2026 |
| cdn.jsdelivr.net | Alibaba Cloud (阿里云) cn-zhangjiakou | 72 of 72, 660ms median, 1,757ms p95 | Slow | 28 Aug 2026 |
| cdn.jsdelivr.net | Beijing China Mobile (中国移动) home line | 36 of 36 | Reachable | 30 Aug 2026 |

> From an Alibaba Cloud (阿里云) instance in cn-zhangjiakou on 28 August 2026, sampled every ten minutes for twelve hours with a 30-second timeout, fonts.googleapis.com answered 72 of 72 requests at a median 111ms time to first byte. From a Beijing China Mobile (中国移动) residential line on 30 August 2026, across 264 page loads on 88 real websites, the same host was requested 54 times and answered none of them.
>
> Source: 21YunBox, *A Day of Third-Party Requests From Inside China*, 28 August 2026, updated 30 August 2026

Read the two rows for a host together or the number will mislead you. A commercial cloud in China buys better international transit than a flat in Chaoyang does, so the datacentre figure is a ceiling. Your visitor sits somewhere underneath it. On three of the five hosts here, the visitor gets nothing at all.

That is five hosts out of the full list. The rest of the dependencies sit in the table below, with verdicts rather than timings.

## What WordPress pulls in from outside

Install WordPress on a mainland server with a commercial theme and a normal plugin set, and you've quietly signed up to fetch assets from Google, Automattic, a JavaScript CDN, a font CDN, and whatever your forms and analytics vendors use.

From Frankfurt or Singapore those calls resolve in milliseconds and nobody notices. From Shanghai the results split three ways. Some resolve fine. Some resolve slowly enough to hurt. Some never come back, and the browser sits there waiting until it gives up.

> Chinafy's 2026 benchmark tested 614 sites across eleven verticals using WebPageTest from Beijing, Virginia and London. 66.4% of them failed to load successfully in Beijing. Median visual load was 17.2 seconds, and 44% of Beijing tests timed out entirely.
>
> Chinafy, *State of Global Website Performance in China*, April 2026

Those numbers describe foreign websites in general. WordPress just happens to be what most of them run on. We see the same pattern on Webflow, on HubSpot, on hand-rolled React builds, which is worth remembering before anyone proposes a migration as the fix.

## What's actually blocked, checked in 2026

Most of the lists circulating on the English web were written between 2019 and 2023 and copied forward since. Several entries have changed. This is the current picture from mainland vantage points.

| Dependency | Status from mainland China | What happens |
|---|---|---|
| Google Hosted Libraries (ajax.googleapis.com) | Fully blocked | Render halts. No first byte at all |
| Google reCAPTCHA | Fully blocked | Forms can't be submitted |
| Google Analytics | Fully blocked | Beacon never arrives, data is lost |
| Google Maps JS API | Fully blocked | Map area stays empty |
| YouTube and Vimeo embeds | Fully blocked | Player and oEmbed call both fail |
| Gravatar | Blocked | Slows comments and the whole admin |
| Google Fonts (fonts.googleapis.com, fonts.gstatic.com) | Depends on where you measure | Answers from a mainland datacentre, silent on a Beijing home line |
| Google Tag Manager | Depends on where you measure | Same split as the fonts. The beacon to google-analytics.com fails either way |
| wordpress.org and update servers | Reachable, rate limited | HTTP 429 on plugin and core updates |
| cdnjs, unpkg | Reachable, slow | Both complete. Untested from a consumer line |
| cdn.jsdelivr.net | Reachable, slow | 660ms median from a datacentre, completes on a home line |
| Stripe and PayPal scripts | Reachable | Licensing, not the firewall, is the blocker |

For the wider picture beyond WordPress, our guide on [what the Great Firewall blocks](/resources/china-web-guide/great-firewall-what-it-blocks/) covers the DNS and packet-level machinery underneath all of this.

## One line of code causes most of the damage

If a theme loads jQuery from Google Hosted Libraries, and thousands of commercial themes still do, the page stops dead.

That script tag is render blocking. The browser won't paint until it resolves, and from mainland China it never resolves. In repeated probes from an Alibaba Cloud instance in Zhangjiakou, requests to ajax.googleapis.com returned no first byte on any run before we abandoned the test at sixty seconds.

The visitor sees white, waits four or five seconds, and leaves. Analytics would record nothing, assuming analytics worked. It's the most common reason a foreign site gets written off as blocked in China when it's doing no such thing.

Fixing that one tag is genuinely a ten-minute job. Bundle jQuery locally, or dequeue it if the theme doesn't need it. Clearing every outbound dependency on a typical marketing site runs closer to a day or two of developer time. If you've inherited a page-builder theme with ninety plugins, budget a week and expect to remove things rather than replace them.

## The Google Fonts entry most guides still get wrong

This one earns its own section, because the received wisdom has gone stale and a lot of agency marketing copy is still repeating it.

Two sentences get repeated about Google Fonts in China: that it's blocked, and that it isn't. The same pair of measurements kills both. The font CDN answered every request from a mainland datacentre and answered none at all from a Beijing home line, two days apart.

> From an Alibaba Cloud (阿里云) instance in cn-zhangjiakou on 28 August 2026, fonts.googleapis.com answered 72 of 72 requests at a median 111ms time to first byte and fonts.gstatic.com answered 72 of 72 at 102ms. From a Beijing China Mobile (中国移动) residential line on 30 August 2026, fonts.googleapis.com was requested 54 times and answered none, and fonts.gstatic.com was requested 6 times and answered none.
>
> Source: 21YunBox, *A Day of Third-Party Requests From Inside China*, 28 August 2026, updated 30 August 2026

The honest version is conditional. Google Fonts resolves from mainland datacentres and often doesn't resolve on consumer connections. Which of those your visitor gets depends on the network they are on.

We don't know the mechanism. The probe that produced these numbers doesn't explain it either, so we're not going to invent one here. What's measurable is the shape: same host, two days apart, opposite outcomes, depending on which side of the mainland network you're sitting on.

That's the argument for self-hosting. A font file you serve yourself removes a dependency whose answer changes with the network the visitor is on, and you stop needing to work out which answer applies to which visitor.

fonts.google.com, the browsing interface your designers pick typefaces in, doesn't load from either vantage point. That one is a designer problem and your visitors never touch it.

We self-host fonts on every build anyway. Partly for the reason above, mostly because it's one fewer thing to re-test.

## wordpress.org is reachable. It's also rate limited

The plugin repository, the theme repository and the core update servers all respond from mainland China. They also return HTTP 429 against mainland IP ranges often enough that a site can sit for weeks without a security patch.

This has been true since at least October 2019, and it's why a domestic mirror ecosystem grew up around it. The most visible piece is the WP-China-Yes project, which redirects update, plugin install and theme install calls to mainland mirrors.

A site on default settings won't tell you it has stopped updating. It slips behind and says nothing, which on WordPress is a security problem rather than an inconvenience. Somebody has to open the update screen and look.

## WordPress.com is a different question

Self-hosted WordPress, the software you download from wordpress.org, is fine.

WordPress.com, the hosted service Automattic runs, isn't wholesale blocked either, though nearly every guide says it is. The apex domain frequently resolves. What's blocked is a large share of what sits underneath it, including the Chinese-language properties and a great many individual user blogs.

For a company the distinction is academic, because there's a harder constraint underneath. You can't complete an ICP filing (ICP备案) for a domain whose hosting you don't control, and without a filing you can't legally serve from a mainland server. A WordPress.com site can't be made compliant, whether or not it happens to load today. Our [ICP filing guide](/resources/china-web-guide/icp-licence-filing-foreign-companies/) walks through what the paperwork asks for.

## What this means if you're building

The practical conclusion is unglamorous. Switching platforms to escape a problem you haven't diagnosed is an expensive way to keep it, because the dependencies come along for the ride.

A WordPress site works in China when four things are true:

- The outbound dependencies are removed or replaced
- The site is served from inside the mainland, or from Hong Kong while the filing is pending
- The ICP filing is done, which takes three to six weeks and requires a mainland entity
- The pages are built so Baiduspider can crawl them, which is a separate discipline from making them fast

None of that is exotic. All of it is work somebody has to sit down and do, and a theme bought on a marketplace has done none of it. If you're weighing up an agency to do it for you, we wrote a [checklist for vetting one](/resources/china-web-guide/vetting-a-wordpress-agency-china/).

## Questions we get asked

**Can I use a VPN to test whether my site works in China?**

Not usefully. A VPN from outside China still routes you through your own network and your own resolver, so you're testing your VPN rather than the firewall. Test from a mainland vantage point, or use a tool that does. This is the most common reason a team believes their site is fine when it isn't.

**Will a global CDN fix this?**

It helps with distance and does nothing about blocked hosts. Cloudflare's standard network serves mainland visitors from Hong Kong, Japan or the US west coast, so you're still crossing the border on every request. Its in-country network is an Enterprise product operated with JD Cloud, and it requires a valid ICP filing per domain, which puts you back at the paperwork.

**Do I need an ICP filing or an ICP licence?**

A filing (ICP备案) covers an informational site. Roughly three to six weeks, once a mainland entity exists. A commercial licence (ICP许可证) applies when the site itself earns revenue, and that realistically runs twelve to eighteen weeks.

**Is Astro a better choice than WordPress for China?**

Sometimes. A static build removes a whole class of runtime dependency and loads faster behind the firewall. It also removes the editing experience a marketing team expects, and that trade tends to matter more than the milliseconds. The honest answer depends on who updates the site and how often.

**How fast should a site load from Shanghai?**

Under two seconds is achievable on mainland hosting once the dependencies are cleaned up. One recent migration went from 23.4 seconds on a European origin to 1.2 seconds, and roughly half of that came from deleting external calls rather than from moving the server. Our guide on [hosting a website in China](/resources/china-web-guide/host-website-in-china/) covers the origin side.
