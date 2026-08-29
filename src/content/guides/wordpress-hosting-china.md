---
title: "WordPress Hosting in China"
subtitle: "All three major Chinese clouds ship a one-click WordPress image. None of them ships managed WordPress, and that gap is where foreign projects stall."
summary: "What Alibaba, Tencent and Huawei actually sell, the ICP filing that gates every mainland server, the Hong Kong shortcut, and the update problem that never makes it into a budget."
visual: "/images/guides/wordpress-hosting-china.webp"
order: 32
published: true
publishedAt: 2026-08-29
updatedAt: 2026-08-29
category: Hosting
---

There is no WP Engine in China. No Kinsta, no Flywheel, no managed WordPress tier from any mainland provider.

What you can buy is a one-click WordPress image on all three major Chinese clouds, running on a small virtual server you administer yourself. That is a different product from managed hosting, and the distance between the two is where most foreign WordPress projects in China run aground.

This guide covers what the mainland clouds actually sell, the filing that has to clear before any of it serves traffic, and the costs that surface four months after launch when nobody has budgeted for them. For the wider picture on servers and latency, read our guide on [hosting a website in China](/resources/china-web-guide/host-website-in-china/) first. For how we handle builds on this stack, see [WordPress in China](/wordpress-in-china/).

## What the three mainland clouds actually offer

Alibaba Cloud (阿里云), Tencent Cloud (腾讯云) and Huawei Cloud (华为云) each ship a prebuilt WordPress application image on their entry-level product.

| Provider | Product | What you get |
| --- | --- | --- |
| Alibaba Cloud | Simple Application Server (轻量应用服务器) | WordPress image on Alibaba Cloud Linux 3, PHP 8.1, MySQL 5.7, Nginx 1.22 |
| Tencent Cloud | Lighthouse (轻量应用服务器) | WordPress application template |
| Huawei Cloud | FlexusL (云耀云服务器 L实例) | WordPress application image, plus marketplace images for ECS |

Read the right-hand column slowly. Every one of those is an operating system with WordPress preinstalled on it. Managed updates, managed backups, staging environments, support staff who can read a plugin conflict: none of that is in the box.

Somebody on your side ends up doing server administration, in Chinese, on a console with no English mode. That is a standing monthly cost. Put it in the budget at kickoff, because it turns up either way.

## Nothing serves until the filing clears

This is the constraint that reorders every China web project, so it is worth stating flatly.

Ports 80 and 443 are unusable on a mainland IP address until the ICP filing (ICP备案) is complete. The provider keeps them shut at the network edge from the day you rent the server. You can't soft launch, you can't show a client a staging link on the production box, and you can't run a quiet beta while the paperwork moves.

> An ICP filing costs nothing to submit. It is reviewed by the provincial Communications Administration (省级通信管理局), with the Ministry of Industry and Information Technology running spot checks. Published timelines run 10 to 30 working days depending on province and season.
> Source: MIIT filing rules and mainland provider filing documentation, 2026.

Plan for three to six weeks, and that assumes the mainland entity already exists. Our [ICP filing guide](/resources/china-web-guide/icp-licence-filing-foreign-companies/) walks through the documents and the order they go in.

A commercial ICP licence (ICP许可证) is a different instrument. You need it when the site itself earns money: e-commerce, paid content, paid software, advertising. Review happens nationally rather than provincially, and it takes far longer.

> MIIT-level review for a commercial ICP licence runs 60 to 90 working days. Foreign ownership above 50% was historically prohibited and remains restricted outside the pilot areas of Beijing, Shanghai Pudong, Hainan Free Trade Port and Shenzhen.
> Source: MIIT licensing rules and pilot-area regulations, 2026.

Budget twelve to eighteen weeks for that one. Both instruments require a mainland-registered legal entity. A foreign company cannot file directly, and no amount of hosting spend substitutes for the entity.

## The Alibaba Cloud account that can't host your site

Alibaba runs two platforms with near-identical branding. alibabacloud.com is the international platform. aliyun.com is the China platform.

The two are disjoint. No native cross-platform resource replication, no mainland regions available on the international side, and no ICP filing there either.

So the sequence that feels natural, signing up on the English site because that's the one search hands you, produces an account that structurally cannot host the thing you're building. Opening the correct account needs a Chinese business licence and local identity verification, and the filing workflow inside it is Chinese-language only.

Every team that has done this once knows it cold. Every team doing it for the first time loses two weeks to it.

## Hong Kong, and what the shortcut costs

Hong Kong hosting needs no ICP filing. That's the whole appeal, and it's a legitimate choice in two situations: you have no mainland entity yet, or you need something live before the filing clears.

What you give up is worth naming precisely.

Latency is materially worse from northern and western China than from a mainland origin, because traffic still crosses the border. Performance swings by hour and by carrier, so the number you measure on a Tuesday morning tells you little about Friday night. And Baidu favours sites hosted inside the mainland on a filed domain, which leaves a Hong Kong site climbing uphill in the one search engine you need.

Treat Hong Kong as a bridge. If China matters commercially, budget for the entity and the filing, run Hong Kong while you wait, and put a date on the cutover before somebody discovers it for you.

## The CDN question

A global CDN moves your origin closer to Hong Kong or Tokyo, which helps. It does nothing about blocked hosts inside the page itself.

Cloudflare is the case most teams ask about. Standard and free plans serve mainland visitors from the nearest overseas edge. The in-country network is a separate Enterprise subscription operated with JD Cloud, it requires a valid ICP filing or licence per apex domain, and JD Cloud reviews the content before onboarding.

For a mainland-hosted site, the simpler answer is usually the domestic CDN attached to whichever cloud you already sit on. It's filed, it's fast, and it keeps the whole stack under one vendor.

## Patching WordPress from a mainland server

WordPress on a mainland server has a maintenance problem that WordPress elsewhere doesn't.

The plugin repository, the theme repository and the core update servers all answer from China. They also rate limit mainland IP ranges aggressively, returning HTTP 429 often enough that a site can sit unpatched for weeks. The dashboard says nothing about it. It just stops offering updates, and the site quietly falls behind.

Three workarounds hold up in practice: domestic mirrors, an update process that runs from outside China against a staging copy, or a maintenance retainer where a named person owns the patch level. Pick one on purpose. Doing nothing is also a choice, and it ends with an unpatched site facing the open internet.

## What it costs

The server is the cheap part. A corporate WordPress site on Simple Application Server or Lighthouse usually runs under 100 USD a month, and promotional first-year pricing on the smallest instances goes well below that.

The filing itself is free to submit. The real spend sits in three places: standing up or maintaining the mainland entity, the working hours that go into preparing documents and passing verification, and whoever logs into a Chinese-language console every month to keep the thing patched and backed up.

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
The server is often under 100 USD a month for a corporate site. The costs that matter are the entity, the filing work, and whoever administers a Chinese-language console every month.

**Does the domain have to be a .cn?**
No. A .com can be filed. Baidu shows some preference for .cn, but a filed .com on a mainland server is the common and workable setup.

**What happens if we host in China without a filing?**
The ports stay closed and the site doesn't serve. The provider enforces this at the network level. No regulator has to find you first.

**Can you file the ICP for us?**
We manage the filing against the client's own mainland entity: documentation, real-name verification, provider submission, the follow-ups. We can't file for a company that has no entity, and neither can anyone else.

Weighing a mainland deployment against staying offshore? Tell us where you stand on the entity and what share of your traffic is Chinese, and we'll come back with the path that fits. Sometimes that path is leaving your origin exactly where it is.
