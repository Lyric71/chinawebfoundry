---
title: "Baidu Verification: www, HTTPS and Subdomains"
subtitle: "In Google Search Console a domain property covers both protocols and every subdomain under one roof. Baidu has no equivalent. What you verify is what you get."
summary: "On Baidu, http and https are separate sites, www and non-www are separate hosts, subdomains inherit a verified root, and folders cannot be added."
visual: "/images/guides/baidu-verification-scope.webp"
order: 25
published: true
publishedAt: 2026-08-17
updatedAt: 2026-08-17
category: Search
---

That gap trips up more foreign teams than anything else in the setup of the Baidu Search Resource Platform (百度搜索资源平台, Bǎidù Sōusuǒ Zīyuán Píngtái). A site here is one protocol and one host, nothing wider. Scope it wrong and a quarter later you are reading dashboards about a version of your website nobody visits.

> Baidu held 63.97% of China's search engine market across all devices in November 2025, and 77.86% on mobile.
>
> *Source: StatCounter, cited by The Egg, February 11, 2026*

StatCounter's China panel is jumpy, so the precise figure moves month to month. The picture does not. This is the engine your China numbers come from, which is why the property boundaries are worth ten minutes of thought.

How you prove ownership, file or meta tag, is [covered separately](/resources/china-web-guide/baidu-site-verification/). This piece is about what you are proving ownership of.

## http and https are two different sites

Baidu treats the protocol as part of the site identity. When you add a site under site management (站点管理, zhàndiǎn guǎnlǐ) you enter the protocol along with the host, and that prefix is not decoration. Pick one and you have a property that knows nothing about the other. Separate verification, separate index data.

The failure mode is dull and very common. A site gets verified over http, moves to https a few years later, and the old property keeps reporting on a version of itself that now exists only as a redirect. Index volume (索引量, suǒyǐn liàng) flattens. Somebody concludes Baidu has stopped crawling. It has not. It is crawling the property no one opens.

There is a tool for declaring the relationship. HTTPS certification (HTTPS认证) tells Baidu the http version corresponds to the https version. Submit it. It will not merge the two properties, and it is no substitute for verifying the one you serve.

## Verify the host people actually land on

The same rule applies one level up. To Baidu the bare domain and the www host are separate hosts entirely, and verifying one buys you nothing on the other.

So verify the canonical one. Not the version printed on the business card, the version left in the address bar once every redirect has fired. Open the site cold, from outside your office network, and verify whatever you land on.

Redirects are where this gets expensive. Baidu will not follow a chain to confirm ownership, so a host answering with a 301 or a 302 fails the check, and it goes on failing however correctly the file sits at the destination. It is the first thing we check when a verification that looks correct comes back red. The same intolerance turns up in crawling: Baidu logs crawl errors past five hops, and on URLs over 1,024 characters.

So keep one canonical host, point the other at it in a single hop, and never add the host whose only job is to redirect.

## Subdomains inherit ownership from a verified root

Subdomains are where the system works in your favor. Verify the root domain and Baidu lets you batch add subdomains (批量添加子站, pīliàng tiānjiā zǐzhàn) beneath it, inheriting ownership from the parent. Nothing to deploy on each host, no tag to push into a template some other team controls.

Baidu shipped it alongside a change to verification expiry, and the announcement says verification no longer expires. That half is harder to confirm than it ought to be, so treat it as reported and leave your file where it is.

Inheritance also settles a question most teams never think to ask, which is where ownership actually sits. Not with the domain.

> 实名认证直接影响账号和资源的归属
>
> Real-name verification directly determines who owns the account and its resources.
>
> *Source: Baidu, account management documentation*

Everything hanging off that root, every subdomain included, traces back to whichever verified identity holds the account. Worth checking before an agency adds your subdomains under its own login.

The other direction matters for reporting. This part is reported rather than documented by Baidu: agency sources hold that root-domain verification is what unlocks subdomain-level index data. Verify only cn.example.com and that is all you get. The root is what makes the layer below it visible.

For a company running its China content on a subdomain, verify both: the root so the subdomain reporting works, and the subdomain so it has a property of its own with a submission channel and keyword data attached.

## Nothing in Baidu understands a /cn/ folder

Subdirectories are the structure most global companies propose first, and the one case Baidu never built for. There is no supported path for registering a bare subdirectory as an independent site. Read that as an absence rather than a ban. Baidu has published no rule against subdirectory sites. The site management form just takes a protocol and a host, and there is nowhere on it to put a path.

A company that puts its Chinese pages at example.com/cn/ ends up with one property covering the entire global website. Chinese and English pages land in the same index volume chart and the same keyword table. The URLs themselves are fine: they rank, you can submit them, and crawl diagnosis (抓取诊断, zhuāqǔ zhěnduàn) will fetch any one of them on demand. What you cannot do is isolate them. No report will tell you how many of the Chinese pages are indexed, because the platform has no concept of a section.

When separate reporting matters, a subdomain is the cleaner structure. A China site on cn.example.com gets a chart of its own, while the same content in a folder stays an uncounted slice of somebody else's.

None of which makes subdirectories wrong. They keep authority in one place and they are simpler to host. The tradeoff is measurement, and it costs a conversation at the architecture stage or a migration six months later.

## Every one of these changes counts as a migration

None of these rules relax when the site changes shape. Moving from http to https is a migration. So is switching your canonical host, or lifting a folder onto a subdomain. Baidu reads each as a revision to the site, not routine housekeeping.

Site revision (网站改版, wǎngzhàn gǎibǎn) is the tool for declaring it. It takes domain changes and directory changes, plus URL-level rules when the mapping is messier than that. Its job is to carry the standing of the old URLs across to the new ones instead of letting Baidu meet them as strangers. Baidu checks the submitted rules in half an hour to two hours, then works the migration through over half a day to two days.

Submit it in the same window as the redirects, not after the traffic chart starts moving. Baidu will not work out on its own that the two sets of URLs belong together.

Baidu adjusts these rules without much notice, so check the announcement feed before acting on anything dated.
