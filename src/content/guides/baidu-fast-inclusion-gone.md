---
title: "Baidu Fast Inclusion Is Gone. What Replaced It"
subtitle: "Somewhere this week a China SEO checklist is landing in a new client's inbox, and step four says to switch on fast inclusion. That tool has not existed since April 2024. The checklist goes around anyway, usually with a price attached."
summary: "Baidu retired fast inclusion in April 2024. What Baidu fast crawl replaced it with, who qualifies, and what a new site should do instead."
visual: "/images/guides/baidu-fast-inclusion-gone.webp"
order: 22
published: true
publishedAt: 2026-08-15
updatedAt: 2026-08-15
category: Search
---

Fast inclusion (快速收录, kuàisù shōulù) was the one Baidu submission tool anybody got excited about. You pushed a URL into it and the page was supposed to jump the queue. English-language guides built whole sections around it, and a great many of them still do.

Baidu took it offline and put something narrower in its place.

> Baidu held 63.97% of China's search engine market across all devices in November 2025, and 77.86% on mobile.
>
> *Source: StatCounter, cited by The Egg, February 11, 2026*

StatCounter's China panel swings around, so read that as a range. It also explains why a tool that shortened the wait for indexing mattered to anybody, and why losing it counts as news two years later.

## The announcement that ended it

> 资源平台于 4 月 26 日下线「快速收录」工具，上新「快速抓取」工具。
>
> On April 26 the resource platform took the fast inclusion tool offline and launched a new fast crawl tool.
>
> *Source: Baidu Search Resource Platform, official announcement, April 2024*

One sentence, two events. A tool was removed and a different one launched the same day. Baidu never called that a rename, and the guarantee attached to the new tool is the reason it cannot be treated as one.

## What Baidu fast crawl actually promises

The name is precise and worth reading as written. Fast crawl (快速抓取, kuàisù zhuāqǔ) covers the crawl. It gets Baiduspider to a URL sooner than the crawler would have turned up on its own. That is the whole guarantee.

Nothing in it says Baidu will keep the page once it has been fetched, and nothing says the page will surface in results. Baidu makes those calls separately. Crawling comes first. Whether the page is kept, and then whether a kept page is ever shown to a searcher, are decisions taken further down the line and on other grounds. Fast crawl reaches the first one.

The names carry the story: inclusion (收录, shōulù) is what Baidu calls a page making it into the index, and the old tool was named for that, while the new one is named for fetching. Whatever teams believed fast inclusion was buying them, Baidu wrote the second promise a good deal more carefully.

## The replacement sits behind a members-only door

Fast crawl is gated behind Baidu's VIP club (VIP俱乐部, VIP jùlèbù). That club was relaunched on November 24, 2023, and Baidu re-reviewed the sites already in it at the time. Membership has been taken back before, in other words, which is a detail to hold on to.

Chinese practitioner sources put the entry bar at five things: real-name verification (实名认证, shímíng rènzhèng) on the account, an ICP filing (备案号, bèi'àn hào), more than a year of operating history, compliance with Baidu's site quality rules, and a traffic floor. The floor is the one that decides most cases. Those same sources put it at more than 10,000 average daily clicks over the trailing 30 days, mobile and desktop combined.

Treat that number carefully. Baidu published its VIP standards alongside the November 2023 relaunch, but the thresholds went out inside an image rather than as plain text, which is why every figure in circulation is secondhand. What Baidu states plainly is narrower and worth more: sites that become VIP partners of the platform are granted the fast crawl privilege automatically. Everyone else is reading a screenshot. The shape of the thing is not in dispute even if the thresholds are. Access is a reward for sites that already have traffic.

## Where the day-level indexing promise went

It usually arrives as a vendor deck somebody dug out of a shared drive. The deck promises day-level indexing through Xiongzhang ID (熊掌号, Xióngzhǎng Hào), and the client wants to know why that is missing from the scope of work.

The answer starts in 2020. Xiongzhang ID was Baidu's content ownership program, and a day-level indexing privilege was the reason anyone signed up for it. Baidu took the program offline on March 17, 2020. What happened to the privilege afterward is the part practitioners reconstruct rather than read in an announcement: the fast lane reappeared inside fast inclusion, in a reduced form. Then fast inclusion went in April 2024 and the lane reappeared again, smaller, behind the VIP door.

Three names, each one reaching fewer sites than the one before it. Undated advice about Baidu tooling is close to worthless.

## Why a newly launched foreign site qualifies for none of it

Now run that reported list against a site that went live in March and see how far you get.

The one-year requirement fails on its own, and no budget fixes it. ICP is a maybe. A foreign site running out of Singapore or Frankfurt with no filing at all is an ordinary setup, usually because nobody wanted the paperwork or the mainland entity behind it.

Then there is the click threshold, and it ends the conversation. Ten thousand a day, averaged over a month, is not a stretch target for a site that launched in the spring. It is a different order of magnitude.

So when a client asks us to switch on the fast tool, there is nothing to switch on, and there will not be for a year of steady work at minimum. Week one is a cheaper time to hear that than month nine.

## What replaces it in practice

Four things, none of them fast. Push on publish. The API push endpoint belongs inside the CMS, firing the moment a page goes live rather than sitting in a weekly job somebody remembers on Thursdays. Push does not prioritize anything, it only tells Baidu the URL exists, and on a new site that is the part you control. [A companion article in this guide](/resources/china-web-guide/submitting-urls-to-baidu/) walks through the submission channels and how their quotas really behave.

Get the ICP filing done if the business can carry it. Filing is not a prerequisite for verification or for getting indexed, whatever you have read. What it does is open the door to mainland hosting, and it appears on the VIP list, and unfiled sites index more slowly. Baidu advises sites under six months old to enter the filing number in site attributes for exactly that reason.

Hosting is the other half of that. Baiduspider should be able to reach the site without a bad trip through the Great Firewall on every fetch, because offshore hosting blocks nothing by itself, it simply makes every request worse.

The last piece of work is expectation setting, and it saves more grief than any of the rest. Initial indexing on a new site runs two to four weeks. Index volume (索引量, suǒyǐn liàng) reading zero through that stretch is normal rather than a symptom. Baidu publishes no service level for any of it, which means there is nothing to escalate against when week five arrives and the number is still zero.

Baidu retires tools without much warning, so check the platform announcement feed before following any dated tutorial.
