---
title: "The Great Firewall: What It Blocks and How to Work Around It"
subtitle: "If your website loads Google Fonts, fires a Google Analytics tag, or embeds a YouTube video, it's already broken for 900 million Chinese internet users."
summary: "China's Great Firewall blocks Google, Facebook, Slack and dozens more. Learn how it works technically and how foreign businesses can build around it."
visual: "/images/guides/great-firewall-what-it-blocks.webp"
order: 7
published: true
---

The Great Firewall doesn't work the way most people imagine. It's not a blacklist. It's a layered system that poisons DNS queries, blocks entire IP ranges, reads the contents of your data packets in real time, and actively hunts for VPN connections. For foreign companies, that means any website with even one dependency on a blocked service - a font file, a tracking script, a map embed - is delivering a broken experience to users in China. And usually nobody on the team knows it's happening.

## How the Great Firewall Actually Works

Five systems running in parallel. They catch different things at different levels.

| Layer | Method | What It Does |
|---|---|---|
| DNS poisoning | Returns wrong IP addresses | Redirects requests for blocked domains to nowhere |
| IP blocking | Blocks IP ranges | Cuts off known foreign service IPs at network level |
| Deep Packet Inspection | Reads packet contents | Kills connections if payload matches flagged patterns |
| URL filtering | Filters specific URLs | Blocks individual pages by keyword, not full domains |
| VPN detection | Identifies VPN protocols | Throttles or blocks VPN traffic by signature |

**DNS poisoning** is the most basic layer. When someone in China requests a blocked domain, the firewall returns a wrong IP address. The request doesn't time out. It goes somewhere it shouldn't. The user sees an error or a blank and has no idea why.

**IP blocking** is cruder. Entire IP ranges tied to known foreign services get cut off at the network level. Get past DNS poisoning with an alternate resolver and you still can't connect because the IP itself is blocked.

**Deep Packet Inspection** is the layer that matters most. The system doesn't just check where traffic is headed. It reads what's inside the packets. If the content matches flagged patterns, the connection gets killed mid-transfer. This is what makes China's firewall a different animal from simpler national filtering systems.

> Deep Packet Inspection reads the contents of your traffic, not just the destination. That's the layer that makes the Great Firewall fundamentally harder to bypass than anything else out there.

**URL filtering** works at the page level. A domain might stay accessible, but specific URLs with certain keywords get filtered. Surgical rather than blanket.

**VPN detection** is the newest addition. The firewall identifies VPN protocols by their traffic signatures and throttles or blocks them. A consumer VPN that worked reliably two years ago may not connect at all today. The system keeps getting better at recognising them.

## What's Blocked (And Why It Breaks Your Website)

Foreign companies tend to focus on the political side of the Great Firewall. What actually matters for your website is the technical dependencies.

| Category | Blocked Services |
|---|---|
| Google (all services) | Search, Gmail, Maps, YouTube, Analytics, Ads, Fonts |
| Social media | Facebook, Instagram, WhatsApp, Messenger, Twitter/X, Reddit, Pinterest |
| Workplace tools | Dropbox, Slack, Notion, Trello |
| Entertainment | Netflix, Spotify, Twitch |
| News | New York Times, Wall Street Journal, BBC |
| Reference | Wikipedia (Chinese edition) |

Google is blocked. All of it. Search, Gmail, Maps, YouTube, Google Ads, Google Analytics, Google Fonts. Every service under the Google umbrella. If your site loads a font from fonts.googleapis.com or fires a GA tracking tag, that request hangs for users in China. No error message shows up. The page just loads slower or a section doesn't render, and your team back home has no idea because they're browsing from outside the firewall.

Facebook, Instagram, WhatsApp, Messenger. All blocked. Twitter/X, Reddit, Pinterest. Blocked. Wikipedia's Chinese edition. Blocked.

Workplace tools that Western companies depend on: Dropbox, Slack, Notion, Trello. All blocked. If your site integrates with any of these or loads resources from their domains, that integration is dead in China.

Netflix, Spotify, Twitch. All blocked. Most major Western news sites including the New York Times, Wall Street Journal, and BBC. Blocked.

The part that catches most companies off guard is that it's not just the services themselves. It's every script, font, widget, and API call that touches a blocked domain. One forgotten Google Fonts link buried in your CSS can add seconds to your load time for every single user in China. One analytics tag can hold up your entire page render.

> One forgotten Google Fonts link in your CSS can add seconds to load time for every user in China. It's not the blocked websites that hurt you. It's the blocked dependencies hiding in your code.

## Strategies for Foreign Businesses

You can't punch through the firewall. But you can build so your site doesn't need to cross it.

| Strategy | What It Solves |
|---|---|
| Mainland hosting + ICP | Speed, rankings, compliance |
| China CDN | Caching at mainland edge nodes |
| Replace blocked dependencies | Google Fonts to local, GA to Baidu Tongji, Maps to Baidu Maps |
| Hong Kong hosting | Middle ground, no ICP needed |
| VPN awareness | Legal grey area, corporate vs. consumer distinction |

**Host in mainland China with an ICP licence.** This is the most straightforward path. Site lives inside the firewall, not fighting through it. Fastest loads, best Baidu rankings, full compliance. If you're committed to the Chinese market this is where you want to be.

**Use a China CDN** to cache content at edge nodes inside mainland China. Even with an origin server sitting outside the country, a CDN with mainland PoPs serves cached pages to Chinese users without every request having to fight through the firewall.

**Replace every blocked dependency.** This is the step companies miss the most. Google Fonts needs to swap to locally hosted fonts. Google Maps becomes Baidu Maps. Google Analytics becomes Baidu Tongji. Go through every external call your site makes. Every script tag, every font import, every API endpoint. If any of them hit a blocked domain, your Chinese users are getting a broken or degraded experience and you probably don't even know it.

> Google Fonts, Google Analytics, Google Maps. Swap them for locally hosted fonts, Baidu Tongji, and Baidu Maps. Audit every external call your site makes.

Then there's **Hong Kong hosting** as a middle ground if you're not ready for the ICP process. No licence needed, latency to mainland is manageable, most firewall interference is avoided. It's a compromise, but a usable one for companies testing the waters.

**VPNs** are a grey area. Corporate VPNs that connect China offices to global networks are generally tolerated. Consumer VPNs used to bypass the firewall are technically illegal, though enforcement varies by region and by year. Foreign companies operating in China should understand the distinction clearly. Don't assume your employees can freely use personal VPNs to access blocked services from the office.
