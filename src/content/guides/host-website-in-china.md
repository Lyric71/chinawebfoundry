---
title: "Host a Website in China: The Full Guide"
subtitle: "Where your server physically sits decides whether a Chinese visitor sees your homepage in under a second or gives up on a spinner."
summary: "Why offshore hosting fails in China, the ICP and entity rules, Alibaba Cloud vs Tencent Cloud vs offshore, plus a step-by-step launch checklist."
visual: "/images/guides/host-website-in-china.webp"
order: 14
published: true
publishedAt: 2026-07-03
updatedAt: 2026-07-03
category: Hosting
---

Your site loads fine everywhere except the one market you built it for. Open it from Shanghai and you wait. And wait. Sometimes the page never resolves at all.

That gap is almost always hosting. Where your server physically sits decides whether a Chinese visitor sees your homepage in under a second or gives up on a spinner. This guide walks through why offshore hosting breaks inside China, what you legally need before you can host on the mainland, how the main providers compare, and the order to do everything in.

Most of what follows builds on our pillar guide, Website Localisation for China. If you have not read that yet, start there, then come back for the hosting specifics.

## Why host your website in China

Three reasons, and they stack.

Speed first. When your server lives in Virginia or Frankfurt, every request from a Chinese user has to cross the Great Firewall (防火长城). That crossing is not a clean hop. Traffic gets throttled, SSL handshakes time out mid-connection, and any script or font pulled from a blocked overseas service (Google Fonts is the classic one) simply hangs. The page does not fail loudly. It just sits there, half-drawn, until the visitor leaves.

> Sites measured from Shanghai on overseas hosting routinely load in 8 to 15 seconds. Moved onto mainland servers, the same sites come in under one second.
> Source: ChinaWebFoundry launch measurements, Shanghai.

Then SEO. Baidu (百度) is the search engine that matters here, and it treats a mainland-hosted, ICP-filed site as more legitimate than one served from abroad. Without a local host and a filing, Baidu will not index you properly, no matter how clean your on-page work is.

> Baidu holds roughly half of China's search market. Google sits under 3%.
> Source: Statcounter Global Stats, China, 2024.

Third, the Firewall itself. Even a fast offshore setup is fragile behind it. Plugins that call home to a blocked endpoint break silently. A CDN you are paying good money for gets throttled at the border. Hosting inside China takes that whole category of problem off the table, because your assets are already on the right side of the wall.

## The 3 legal prerequisites before you can host

You cannot just rent a mainland server and point your domain at it. Three things have to be in place first, and there's no way around any of them.

**1. A Chinese business entity.** The ICP filing is tied to a registered entity in China. A foreign company with no local presence cannot file on its own. If you do not have an entity yet, that is not a dead end, there are routes through it, but it is the first gate and worth knowing up front.

**2. A domain, .cn or .com.** The domain has to pass real-name verification, and the registered owner must match the filing entity exactly. A mismatch here is one of the most common reasons a filing stalls before it even reaches the regulator.

**3. The ICP filing itself.** This is the mandatory one. ICP Bei'an (备案) is the record every mainland-hosted site must carry, administered under the Ministry of Industry and Information Technology (工业和信息化部), or MIIT. Informational sites need the standard Bei'an. Sites doing commercial business, real transactions, need the fuller commercial ICP license (经营许可证), which takes longer.

> Standard ICP Bei'an typically clears in 3 to 22 working days, with heavy provincial variation. Shanghai can approve in about 3 days; Beijing often runs closer to 15.
> Source: Alibaba Cloud filing documentation, MIIT.

One more piece people miss: within 30 days of your site going live on a mainland host, you also file a public security record (公安备案) with the local authorities. For the full walk-through on filing, entity options, and document prep, read our dedicated ICP licensing guide. This page assumes you know it is coming.

## China hosting options compared: Alibaba Cloud vs Tencent Cloud vs offshore

Three realistic paths, depending on whether you have an ICP yet and who your audience actually is.

| Option              | Load in China   | ICP needed | Baidu SEO | Best for                        |
| ------------------- | --------------- | ---------- | --------- | ------------------------------- |
| Mainland (Aliyun)   | Under 1s        | Yes        | Strong    | Serious, long-term China play   |
| Mainland (Tencent)  | Under 1s        | Yes        | Strong    | WeChat-centric projects         |
| Hong Kong           | 2 to 4s         | No         | Minimal   | Bridge while ICP is pending     |
| US / Europe         | 8 to 15s+       | No         | None      | Not viable for a China audience |

**Alibaba Cloud (Aliyun, 阿里云)** is the default for most foreign brands going into China properly. The widest set of mainland regions, mature English-language console, and a filing system that walks you through Bei'an inside the same platform. The practical draw is coverage and the fact that everything, server and filing, lives in one place.

**Tencent Cloud (腾讯云)** is the strong second, and often the better call if your project leans on the WeChat (微信) ecosystem, since it sits natively closer to that stack. Performance is comparable to Aliyun at the same tier. The deciding factor is usually ecosystem fit rather than raw specs.

**Huawei Cloud (华为云)** is a credible third mainland option, particularly for teams already standardised on Huawei infrastructure.

**Offshore, including Hong Kong,** skips the ICP requirement entirely, which is its whole appeal. Hong Kong is the practical bridge: with a decent CDN and caching layer you can land 2 to 4 second loads on the mainland, not great, but night and day compared to serving from Frankfurt. Plenty of teams run Hong Kong while their filing is in progress, then migrate.

On price, be careful reading Chinese cloud pricing at face value. The headline numbers you see, entry servers advertised at a few dozen RMB a year, are promotional new-user rates on the smallest boxes.

> Entry-level cloud servers from the major Chinese providers advertise promotional first-year pricing in the range of roughly 38 to 200 RMB. Real production configurations for a business site run materially higher.
> Source: published 2025 to 2026 provider pricing, Aliyun and Tencent Cloud.

English usability is worth weighing too. Aliyun's international console is the most foreigner-friendly of the three. All of them assume Chinese for parts of the filing process, which is a large part of why teams hand that piece to a local partner.

## Speeding it up: China CDN and edge delivery

Good mainland hosting gets your origin server close to users. A China CDN gets your static files, images, scripts, stylesheets, cached on nodes spread across the country, so they load from a few hundred kilometres away instead of bouncing across the Pacific first.

Alibaba Cloud CDN and Tencent Cloud CDN are the usual choices, and for good reason: they pair cleanly with the matching host and are tuned for mainland routing.

Here is the catch that surprises people. A China CDN is not a way around the filing. To serve cached content from mainland nodes, the CDN domain needs its own ICP coverage, same as the origin. Teams sometimes assume the CDN lets them skip Bei'an. It does not. Filing and edge delivery go together.

Done right, the payoff is real. Product images that used to trickle in load in the same environment your buyer is sitting in, and a heavy page starts to feel light.

## Step-by-step: launching your site in mainland China

The order matters, because each step depends on the one before it. Skip ahead and you stall.

**1. Set up the entity.** Confirm you have a Chinese-registered business entity, or line up the route to one. Nothing else can start until this exists.

**2. Register and verify the domain.** Get your .cn or .com onto a registrar, pass real-name verification, and make sure the owner matches the entity exactly.

**3. File the ICP.** Submit Bei'an through your hosting provider's system. Standard informational filing is faster; commercial licensing takes longer, so budget for it early if you sell.

**4. Provision mainland hosting.** Stand up your server on Aliyun, Tencent Cloud, or Huawei Cloud, and configure it for the Chinese environment: China-compatible SSL, self-hosted fonts, no blocked third-party calls.

**5. Wire up the CDN.** Add a China CDN with its own filing coverage, and point your static assets at it.

**6. File the public security record.** Within 30 days of going live, complete 公安备案 with the local authority and add both the ICP number and the public security number to your footer.

**7. Go live and monitor from inside China.** Confirm the site loads fast from actual mainland locations, not just from a checker sitting outside the Firewall, which will happily tell you everything is fine while your Shenzhen visitors stare at a blank screen.

## Choosing the best China hosting for your business

The right setup depends mostly on where you are in the process and what your site does.

If you are building a serious, long-term presence and organic search is part of the plan, go straight to mainland hosting on Aliyun or Tencent Cloud with a proper filing. That's the setup that actually ranks on Baidu and loads the way Chinese users expect.

If you need to be live yesterday and your ICP is still pending, start on Hong Kong as a bridge, get a CDN and caching in front of it, and plan the migration onto the mainland once the filing clears.

If you sell, if there are real transactions, factor the commercial ICP license into your timeline from day one, since it is the slowest single step and the one most likely to catch a team off guard.

And if any of this, the entity, the filing, the console in Chinese, the monitoring from inside the wall, is more than you want to wire up alone, that is exactly the work we do. Tell us where you are: whether you have an entity, where you stand on ICP, who your audience is, what your timeline looks like. We come back with a hosting recommendation built for your situation, not a generic proposal.
