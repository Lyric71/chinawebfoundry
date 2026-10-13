---
title: "Website Hosting in China: Where the Server Sits"
subtitle: "For Chinese users, the difference between a site hosted in Shanghai and one hosted in Frankfurt comes down to whether your page loads at all."
summary: "Where your China website is hosted decides how it loads there and whether it needs an ICP filing. Mainland, Hong Kong and overseas compared."
visual: "/images/guides/china-website-hosting-guide.webp"
order: 6
published: true
publishedAt: 2026-04-01
updatedAt: 2026-10-13
category: Hosting
---

Hosting is the most underestimated decision in any China web strategy, and it decides more about page speed than [anything you change inside a WordPress build](/wordpress-in-china/). Pick the wrong server location and your site crawls, if it loads at all. Pick the wrong provider and you miss ecosystem integrations your competitors are already using. China's cloud market is dominated by local players, each one wired into a different part of the Chinese internet. The server location question comes down to three tiers with very different tradeoffs. And the CDN you choose here matters more than it does anywhere else in the world.

## China's cloud providers

| Provider | Market Share | Strength |
|---|---|---|
| Alibaba Cloud | 36 to 39% | Largest in China, e-commerce integration |
| Huawei Cloud | 12 to 19% | Enterprise and government |
| Tencent Cloud | 11 to 16% | WeChat integration |
| Baidu Cloud | ~5% | AI and machine learning |
| AWS China | ~7% | Global familiarity (via Sinnet/NWCD) |

China's cloud market doesn't look like what you're used to. AWS and Azure exist here, but they don't lead. Local providers run things, and each one is plugged into a larger ecosystem that shapes what it's good at.

Alibaba Cloud is the dominant force. 36% to 39% of the market. If your business already touches Alibaba's e-commerce or payments infrastructure, it's the natural choice. For companies entering China without a strong ecosystem preference, Alibaba is also the safe default - widest documentation, biggest partner network, most mature platform overall.

Huawei Cloud and Tencent Cloud split the next tier. Huawei sits between 12% and 19% and is the go-to for enterprise and government work. If you're dealing with Chinese state-owned enterprises or anything government-adjacent, Huawei is often the expected pick. Tencent holds 11% to 16% and is the obvious choice if your strategy involves WeChat mini-programs or QQ services. The WeChat integration alone makes it the default for companies building around that platform.

Baidu Cloud is niche. Around 5% share, focused on AI and machine learning. Relevant if your stack is AI-heavy. Not where most companies start for general hosting.

Then there's AWS China. Foreign companies gravitate toward it because the name is familiar. About 7% share, operated through local partners Sinnet and NWCD. Important thing to understand: AWS China is a completely separate entity. Separate accounts. Separate billing. Separate compliance process. The global AWS account you already have buys you nothing here.

> AWS China is a completely separate entity from global AWS. Different accounts, different billing, different compliance. Don't assume it's the same product.

Companies that assume otherwise get surprised during setup.

## Mainland vs. Hong Kong vs. overseas

| | Mainland China | Hong Kong | Overseas (US/EU) |
|---|---|---|---|
| **Requests cross the border** | No | Yes | Yes |
| **ICP required** | Yes | No | No |
| **PIPL compliance** | Yes | No | No |
| **Great Firewall risk** | None | Low | High (packet loss + blocking) |

Where your servers physically sit determines everything else - provider choice, CDN setup, Baidu strategy. Get this one wrong and nothing downstream fixes it.

**Mainland China** is the right answer if you're serious about reaching Chinese users. Requests stay inside the country. PIPL compliance requires it. Yes, you need an ICP filing (ICP备案) first, and a company registered in the mainland to hold it. If your audience is in China, your servers need to be too.

> Chinafy tested 614 global websites from Beijing, Virginia and London. Two in three failed to load in China, and time to first byte was 4 to 4.5 times higher in Beijing than in the US or UK.
> Source: Chinafy, China Website Performance Benchmarks 2026, 14 April 2026 (a vendor benchmark).

**Hong Kong** works as a stepping stone. No ICP needed, it sits next door to the mainland, and it's a reasonable option for companies testing the market before going through the full ICP process. Also decent for sites serving both Chinese and international audiences from one location. But don't kid yourself, it's a compromise. For a site whose audience is mainly in the mainland, it's a stopgap.

And then there's **overseas hosting from the US or Europe.** This is what companies choose when they want to avoid the ICP process entirely. The tradeoff is rough. Every request crosses the border, and the Great Firewall layers packet loss into the picture. And there's a genuine risk the site gets blocked altogether. No PIPL compliance, and load times slow enough that many visitors close the tab before your page finishes rendering. If you're hosting in Frankfurt to serve users in Shenzhen, you're losing them before they see your homepage.

## CDN providers that actually work in China

| Provider | Key Advantage |
|---|---|
| Alibaba Cloud CDN | Largest China PoP network, Alibaba ecosystem |
| Tencent Cloud CDN | Best for WeChat/QQ integrated services |
| ChinaCache | Pioneer in China CDN, extensive domestic network |
| Cloudflare China | Via JD Cloud partnership, enterprise plan required |

A CDN won't fix a bad hosting decision, but inside China it can mean the difference between a site that loads and one that times out. The requirement that matters: points of presence physically located within mainland China. A global CDN without China PoPs doesn't help you here.

> The CDN requirement that matters: points of presence physically inside mainland China. Everything else is a nice-to-have.

**Alibaba Cloud CDN** has the largest network of PoPs inside China and plugs directly into the Alibaba ecosystem. If you're already on Alibaba Cloud, this is the default. No reason to look elsewhere.

**Tencent Cloud CDN** is where you go if your services connect to WeChat or QQ. The integration with Tencent's messaging platforms handles that traffic more efficiently than anything else available.

**ChinaCache** is the oldest name in Chinese CDN. Been operating longer than most of the cloud-based options. Extensive domestic network, wide reach, long track record.

**Cloudflare China Network** runs through a partnership with JD Cloud. It gives companies already on Cloudflare globally a way into China, but you need an enterprise plan. Not something you can set up through self-serve signup.
