---
title: "WordPress Hosting in China"
subtitle: "All three major Chinese clouds ship a one-click WordPress image. None of them ships managed WordPress, and that gap is where foreign projects stall."
summary: "Alibaba, Tencent, Huawei, Vercel and Cloudflare compared for WordPress in mainland China, with the ICP filing rule first and our own measured figures."
visual: "/images/guides/wordpress-hosting-china.webp"
order: 32
published: true
publishedAt: 2026-08-29
updatedAt: 2026-10-02
reviewBy: 2026-12-29
category: Hosting
---

A mainland Chinese server won't show your WordPress site to anyone until its ICP filing (ICP备案) clears. On every project we've run, ports 80 and 443 stay closed on the server's public address until the day it does. There is no soft launch.

That rule decides the rest. It settles which cloud and which account you open, and whether you need a Chinese company before a single file moves.

Everything below assumes it. Our guide on [hosting a website in China](/resources/china-web-guide/host-website-in-china/) covers the wider picture on servers and latency, and [WordPress in China](/wordpress-in-china/) explains how we handle builds on this stack.

## What we measured on mainland hosting

These are ChinaWebFoundry's own figures, from client sites we've moved into China or host there. No third party measured them, and you should know that before you weigh them.

> Median page load on a WordPress site we migrated went from 23.4 seconds on a European origin to 1.2 seconds on a mainland origin. Roughly half of that improvement came from deleting external calls.
> Source: ChinaWebFoundry, published 29 August 2026. https://www.chinawebfoundry.com/resources/china-web-guide/is-wordpress-blocked-in-china/

> Over a 90-day window, a mainland-hosted client site returned 99.98% uptime, with median response times of 48ms from Beijing, 36ms from Shanghai and 61ms from Guangzhou.
> Source: ChinaWebFoundry, published 29 August 2026. https://www.chinawebfoundry.com/website-in-china/

Each of those numbers is still missing a condition we'd ask of anyone else's benchmark. The table shows which, figure by figure.

| Figure | What it measures | Measured from | Window | Still to publish |
| --- | --- | --- | --- | --- |
| 23.4s to 1.2s | Median page load, before and after the move | Mainland China | Before and after the migration | City, carrier, test dates |
| 99.98% | Uptime of one mainland-hosted site | Not published | 90 days | Monitoring location, start and end dates |
| 48ms | Median response time | Beijing | The same 90 days | Carrier |
| 36ms | Median response time | Shanghai | The same 90 days | Carrier |
| 61ms | Median response time | Guangzhou | The same 90 days | Carrier |

The missing conditions are going into case studies we're writing now.

## Six hosting options, side by side

These are the options foreign teams ask us about most. Each row names the constraint that decides it, and each one rests on the vendor's own page. We checked every row on 29 September 2026 and we'll check them again each quarter.

| Option | Mainland servers | ICP filing | Account and entity | Vendor page dated |
| --- | --- | --- | --- | --- |
| Alibaba Cloud (阿里云), China site, aliyun.com | Yes | Filed through Alibaba against a mainland server on a subscription of 3 months or longer | aliyun.com account; an enterprise registered in the mainland, or a mainland resident | Help centre, 20 August and 24 September 2026 |
| Alibaba Cloud, international site, alibabacloud.com | Can't carry a filed site | Not supported on this account type | Open an aliyun.com account instead | Help centre, 20 August 2026 |
| Tencent Cloud (腾讯云) | Yes | Filed through Tencent against a mainland server; Lighthouse on a subscription of 90 days or more | One filing entity per account | Documentation, 30 January and 23 September 2026 |
| Huawei Cloud (华为云) | Yes | Filed through Huawei against a mainland "filing server" on a subscription of at least 3 months | A Chinese mainland website account; international accounts can't file | Help Center, July and August 2024 |
| Vercel | None | Not offered. An in-country copy needs mainland hosting and its own filing | Nothing on Vercel's side | Knowledge base, 11 September 2026 |
| Cloudflare | Only on the China Network, run by JD Cloud | A valid filing or licence for each apex domain | Enterprise plan; JD Cloud reviews the content first | Developer docs, April 2026 |

For a WordPress site that has to live on the mainland, the real choice is between the first, third and fourth rows.

## No managed WordPress exists in mainland China

There is no WP Engine, Kinsta or Flywheel on the mainland. We've been through the product line-ups of Alibaba Cloud (阿里云), Tencent Cloud (腾讯云) and Huawei Cloud (华为云). None of them sells a WordPress product that patches the site for you or answers a ticket about a plugin.

What all three sell is a one-click WordPress image on an entry-level virtual server.

| Provider | Product | What the image installs | Vendor page updated |
| --- | --- | --- | --- |
| Alibaba Cloud | Simple Application Server (轻量应用服务器) | A preset WordPress application image | 19 August 2026 |
| Tencent Cloud | Lighthouse (轻量应用服务器) | WordPress with Nginx, MariaDB and the Baota (宝塔) Linux panel | 22 September 2026 |
| Huawei Cloud | FlexusL (Flexus应用服务器L实例) | Ubuntu 24.04 running Docker, with Nginx, MySQL and phpMyAdmin | 21 September 2026 |

Look at the third column again. Each one is an operating system with WordPress preinstalled. Updates and backups are yours, along with staging and finding someone who can read a plugin conflict.

So somebody on your side ends up doing server administration every month, for as long as the site lives. That's a standing cost. Put it in the budget at kickoff.

## Nothing serves until the filing clears

Alibaba Cloud and Tencent Cloud both write the rule into their own documentation.

> Under Ministry of Industry and Information Technology (工信部) rules, a domain resolved to a server in the Chinese mainland must complete its website filing before website access can be opened.
> Source: Alibaba Cloud (阿里云) help centre, last updated 4 September 2026. https://help.aliyun.com/zh/dws/support/how-do-i-troubleshoot-the-failures-to-access-a-website-by-using-its-domain-name

> A domain resolved to Tencent Cloud resources in mainland China must complete ICP filing first, or it is intercepted by Tencent Cloud's monitoring for unfiled domains.
> Source: Tencent Cloud (腾讯云) documentation, last updated 28 September 2026. https://cloud.tencent.com/document/product/243/19630

The ports detail is ours: on our projects, that interception closes ports 80 and 443. You can't show a client a staging link on the production box, and you can't run a quiet beta while the paperwork moves.

> Alibaba Cloud's own check takes 1 to 2 working days. The provincial Communications Administration (省级通信管理局) review that follows generally takes 1 to 20 working days, and the site must complete its public security filing (公安备案) within 30 days of going live.
> Source: Alibaba Cloud (阿里云) help centre, ICP filing process overview, last updated 26 August 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview

That's up to 22 working days on paper. Documents take time to gather and applications come back for corrections, so we plan three to six weeks, and that assumes the mainland entity already exists. Our [ICP filing guide](/resources/china-web-guide/icp-licence-filing-foreign-companies/) walks through the documents and the order they go in.

A commercial ICP licence (ICP许可证) is a different instrument. You need it when the site itself earns money: e-commerce, paid content, paid software, advertising.

> The Shanghai Communications Administration (上海市通信管理局) commits to deciding on a value-added telecoms licence within 60 days of accepting the application.
> Source: Shanghai Communications Administration, service guide, June 2015. https://shca.miit.gov.cn/bsfw/bszn/dxsc/blcx/art/2020/art_7426922df3754a189aaf4278ff0c7b1d.html

The clock starts at acceptance, and acceptance needs a complete file. We plan twelve to eighteen weeks for this one.

Foreign ownership is the other question a licence raises.

> A 2024 pilot lifts the foreign-ownership cap on named licence categories, among them online data processing and information publishing platforms, in parts of Beijing, Shanghai, Hainan and Shenzhen. News, publishing, audiovisual and internet culture services are excluded.
> Source: Ministry of Industry and Information Technology (工业和信息化部), notice of 8 April 2024. https://www.gov.cn/zhengce/zhengceku/202404/content_6944441.htm

An ICP filing is made in the name of an enterprise registered in the mainland, or a mainland resident for a personal site. A company registered abroad can't file directly, and no hosting spend substitutes for the entity.

## The cloud account that can't host your site

Alibaba runs two sites with near-identical branding. alibabacloud.com is the international one, aliyun.com is the China one, and only the second can file.

> Alibaba Cloud international site (alibabacloud.com) accounts do not support ICP filing applications, for websites or apps. A filing needs a China site (aliyun.com) account, and the filing entity must be an enterprise registered in the Chinese mainland or a mainland resident.
> Source: Alibaba Cloud (阿里云) help centre, last updated 20 August 2026. https://help.aliyun.com/en/icp-filing/basic-icp-service/product-overview/icp-filing-application-for-enterprises-outside-the-chinese-mainland

> The filing is made against an Alibaba Cloud server in the Chinese mainland: an ECS instance or a Simple Application Server, on a subscription of 3 months or longer.
> Source: Alibaba Cloud (阿里云) help centre, last updated 24 September 2026. https://help.aliyun.com/en/icp-filing/basic-icp-service/user-guide/icp-filing-server-access-information-check

So the sign-up that feels natural, on the English site that search hands you first, produces an account that can't file the site you're building. Anyone who has done this once knows it cold. First-timers lose weeks to it, and they usually find out when someone goes looking for the filing screen and the account has none, by which point the server is paid for and the launch date is already set.

Huawei Cloud (华为云) runs the same split, in almost the same words.

> Huawei Cloud international website accounts do not support ICP filing. A Huawei Cloud Chinese mainland account is needed, with a filing server in the Chinese mainland on a subscription of at least three months.
> Source: Huawei Cloud (华为云) Help Center, last updated 17 July 2024 and 20 August 2024. https://support.huaweicloud.com/intl/en-us/prepare-icp/icp_02_0047.html and https://support.huaweicloud.com/intl/en-us/prepare-icp/icp_02_0003.html

At Tencent Cloud (腾讯云), the documented rule is about the server. The Tencent pages we checked say nothing either way about international accounts, so we don't either.

> A Lighthouse instance in a mainland region qualifies for ICP filing on a subscription of 90 days or more, with at least 30 days left while the filing is under review.
> Source: Tencent Cloud (腾讯云) documentation, last updated 23 September 2026. https://cloud.tencent.com/document/product/1207/45756

## Hong Kong, and what the shortcut costs

Hong Kong hosting needs no ICP filing. That's the whole appeal, and it's a legitimate choice in two situations: you have no mainland entity yet, or you need something live before the filing clears.

What you give up is worth naming precisely.

Latency is materially worse from northern and western China than from a mainland origin, because traffic still crosses the border. Performance swings by hour and by carrier, so the number you measure on a Tuesday morning tells you little about Friday night.

Treat Hong Kong as a bridge. If China matters commercially, budget for the entity and the filing, run Hong Kong while you wait, and put a date on the cutover before somebody discovers it for you.

## Vercel, Cloudflare and the overseas edge

A global CDN puts copies of your pages closer, in Hong Kong or Tokyo, which helps. It does nothing about blocked hosts that the page itself calls.

Vercel comes up too, since plenty of Astro and Next.js sites live there. Its own knowledge base gives a clear answer.

> "Vercel has no servers or CDN nodes in mainland China," and "Vercel can't guarantee availability or performance within mainland China." China's network controls can block or throttle its .vercel.app subdomains.
> Source: Vercel Knowledge Base, published 3 November 2025, updated 11 September 2026. https://vercel.com/kb/guide/accessing-vercel-hosted-sites-from-mainland-china

> GreatFire reads https://vercel.app as blocked in mainland China on 4 of its last 4 conclusive tests, the latest on 14 September 2026. Of 157 URLs it has tested on the domain, 154 read blocked.
> Source: GreatFire, September 2026. https://en.greatfire.org/https/vercel.app

Vercel's own suggestions are a custom domain in place of .vercel.app, self-hosted fonts and analytics, and, for a site that has to perform in China, a separate copy on mainland infrastructure with its own ICP filing or licence. That last option means running a second site, on one of the three mainland clouds above or another mainland host.

Cloudflare's standard and free plans serve mainland visitors from edges outside the mainland. The in-country network is a separate product.

> The Cloudflare China Network is a separate subscription for Enterprise customers, run in mainland data centres by Cloudflare's partner JD Cloud. Each apex domain needs a valid ICP filing or licence, and JD Cloud reviews every domain's content before the network is switched on.
> Source: Cloudflare developer documentation, last updated 30 April 2026. https://developers.cloudflare.com/china-network/

For a mainland-hosted site, the simpler answer is usually the domestic CDN attached to the cloud you already sit on. It works under the filing you already hold, and it keeps the stack with one vendor.

## Patching WordPress from a mainland server

WordPress on a mainland server has a maintenance problem that WordPress elsewhere doesn't.

The plugin repository, the theme repository and the core update servers all answer from China. They also rate limit mainland IP ranges aggressively, returning HTTP 429 often enough that a site can sit unpatched for weeks. The dashboard says nothing about it. It just stops offering updates, and the site quietly falls behind.

Three workarounds hold up in practice: domestic mirrors, an update process that runs from outside China against a staging copy, or a maintenance retainer where a named person owns the patch level. Pick one on purpose. Doing nothing is also a choice, and it ends with an unpatched site facing the open internet.

## What it costs

The server is the cheap part. The one-click images run on each cloud's entry-level server line.

The real spend sits elsewhere. The mainland entity has to be set up or kept up, and preparing documents and passing verification eats working hours. After launch, a named person logs into the cloud console month after month to keep the site patched and backed up.

Teams that price only the server line are the ones renegotiating scope in month four.

## Choosing between the paths

| Situation | Where to host | Filing needed |
| --- | --- | --- |
| No mainland entity, need to launch now | Hong Kong | None |
| Mainland entity, informational site | Alibaba, Tencent or Huawei mainland | ICP filing, 3 to 6 weeks |
| Mainland entity, revenue on the site | Mainland, plus domestic payment rails | Commercial ICP licence, 12 to 18 weeks |
| Global site, small China audience, no entity | Keep the origin abroad, fix dependencies first | None |

That last row gets skipped most often, and it's frequently the right answer. If China is 3% of your traffic and there's no entity in sight, stripping the blocked dependencies out of the site you already have recovers most of the available speed for a fraction of what a mainland deployment costs.

## Frequently asked

**Can I keep my current host and just add a China CDN?**
Only if the CDN provider has mainland points of presence, and that requires your domain to hold a filing. Without the filing you are buying an overseas edge with a Chinese name on it.

**How much does mainland WordPress hosting cost?**
The server is the smallest line. The costs that matter are the entity and the filing work, and after launch, the person who looks after the server.

**Does the domain have to be a .cn?**
No. A .com can be filed. A filed .com on a mainland server is the common and workable setup.

**What happens if we host in China without a filing?**
The ports stay closed and the site doesn't serve. The provider enforces this at the network level. No regulator has to find you first.

**Can you file the ICP for us?**
We manage the filing against the client's own mainland entity: documentation, real-name verification, provider submission, the follow-ups. We can't file for a company that has no entity, and neither can anyone else.

Weighing a mainland deployment against staying offshore? Tell us where you stand on the entity and what share of your traffic is Chinese, and we'll come back with the path that fits. Sometimes that path is leaving your origin exactly where it is.
