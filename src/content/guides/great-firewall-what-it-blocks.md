---
title: "The Great Firewall: What It Blocks and How to Cope"
subtitle: "Blocked is the easy case. The dependency that answers and then never finishes is the one nobody on your team will ever see."
summary: "What a website in China can and cannot reach, host by host, with the vantage point and the test date on every row."
visual: "/images/guides/great-firewall-what-it-blocks.webp"
order: 7
published: true
publishedAt: 2026-04-01
updatedAt: 2026-10-18
reviewBy: 2026-11-15
category: Technology
---

A block is loud. Somebody in the office notices, and it gets fixed. The failure that costs you money is the quiet one: the host answers, the first byte arrives in half a second, and then the request simply never finishes.

> Wix returned a first byte in a median of 532ms and then finished 0 of 3 page loads inside 60 seconds, measured from an Alibaba Cloud (阿里云) instance in cn-zhangjiakou on 30 August 2026.
> Source: 21YunBox, Does Wix Work in China?, August 2026, page reviewed 7 October 2026. https://www.21cloudbox.com/support/wix-china.html

Put a widget that behaves this way on a page and the page around it renders normally. The widget stays empty, and nothing anywhere logs an error. So a team outside China can look at the site every morning for a year and see nothing wrong.

Underneath sits the machinery everyone writes about: poisoned DNS, blocked IP ranges, packet contents read in real time. The firewall hunts VPN signatures too, and [a default WordPress install carries several dependencies that meet it](/wordpress-in-china/). All of that is real. Almost none of it is what costs you enquiries. The open socket nobody is watching does that.

## How the Great Firewall actually works

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

**Deep Packet Inspection** is the layer that matters most. The system reads what's inside the packets, going past the destination header. If the content matches flagged patterns, the connection gets killed mid-transfer. This is what makes China's firewall a different animal from simpler national filtering systems.

> Deep Packet Inspection reads the contents of your traffic at the payload level. That's the layer that makes the Great Firewall fundamentally harder to bypass than anything else out there.

**URL filtering** works at the page level. A domain might stay accessible, but specific URLs with certain keywords get filtered. Surgical filtering at the page level.

**VPN detection** is the newest addition. The firewall identifies VPN protocols by their traffic signatures and throttles or blocks them. A consumer VPN that worked reliably two years ago may not connect at all today. The system keeps getting better at recognising them.

## What's blocked (and why it breaks your website)

Foreign companies tend to focus on the political side of the Great Firewall. What actually matters for your website is the technical dependencies.

| Category | Blocked Services |
|---|---|
| Google | Search, Gmail, Maps, YouTube, Analytics, Ads |
| Social media | Facebook, Instagram, WhatsApp, Messenger, Twitter/X, Reddit, Pinterest |
| Workplace tools | Dropbox, Slack, Notion, Trello |
| Entertainment | Netflix, Spotify, Twitch |
| News | New York Times, Wall Street Journal, BBC |
| Reference | Wikipedia (Chinese edition) |

Google search, Gmail, Maps, YouTube and Google Ads do not work from a mainland connection. [Google Analytics](/resources/china-web-guide/google-analytics-china/) is the one that matters for a website, and it is in the table below with its test date, like everything else on this page. `www.google-analytics.com` last failed a GreatFire test on 24 July 2026. Fire the tag from a page in China and the beacon never arrives, so the data is lost whether or not the container script loaded.

Google Fonts is the exception, and people get it wrong in both directions, so it gets an extra paragraph.

> From an Alibaba Cloud (阿里云) instance in cn-zhangjiakou on 28 August 2026, sampled every ten minutes for twelve hours, `fonts.googleapis.com` completed 72 of 72 requests at a median 111ms to first byte. From a Beijing China Mobile (中国移动) residential line on 30 August 2026, across 264 page loads, the same host answered 0 of 54.
> Source: 21YunBox, A Chinese Cloud Probe Is Not a Chinese Visitor: The Same Hosts, Opposite Answers, August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Neither flat version of that claim survives the pair. Google Fonts resolves from mainland datacentres and frequently does not resolve on consumer connections, which is the whole argument for self-hosting: you remove a variable that changes by network, by resolver and by hour. `fonts.google.com`, the browsing interface, is a separate host: GreatFire read it 100% disrupted on its last two conclusive tests, the latest on 30 September 2026.

Facebook, Instagram, WhatsApp, Messenger. All blocked. Twitter/X, Reddit, Pinterest. Blocked. Wikipedia's Chinese edition. Blocked.

Workplace tools that Western companies depend on: Dropbox, Slack, Notion, Trello. All blocked. If your site integrates with any of these or loads resources from their domains, that integration is dead in China.

Netflix, Spotify, Twitch. All blocked. Most major Western news sites including the New York Times, Wall Street Journal, and BBC. Blocked.

The part that catches most companies off guard goes past the blocked services themselves. Every script, font, widget, and API call that touches a blocked domain breaks too. One forgotten Google Fonts link buried in your CSS can leave the page blank for every visitor whose network never answers it. One analytics tag can hold up your entire page render.

> One forgotten Google Fonts link in your CSS can leave the page blank for every visitor whose network never answers it. The damage hides in your code, in the dependencies you forgot were even there.

## Every dependency in the dataset, and when it was last tested

The pages that rank for these questions carry no evidence at all. Across every compatibility page we have read at Chinafy, AppInChina and the smaller agencies: no table, no test date, no named test location, no latency figure. The measurement vendors publish figures. The pages telling you what breaks don't cite them. The table below is that citation, row by row.

Be clear about whose numbers these are. Every row below comes from GreatFire or from 21YunBox, cited and dated. On 7 October 2026 21YunBox withdrew most of its per-tool timings, so the rows that rested on them now carry GreatFire's verdict, or read untested where GreatFire has none.

There are two kinds of evidence in it, and they answer different questions. A reachability verdict says whether a host can be connected to at all. A timed page load says how long the vendor's own site took to finish from a named probe inside mainland China. The second is a proxy for the script endpoint your visitor's browser calls; it is not that endpoint. Where the two disagree, both are printed and neither is averaged.

The verdict column uses six values. Slow down on two of them, intermittent and splits by vantage point. Those are where a host looks healthy to whoever last checked it.

| Verdict | What it means |
|---|---|
| Reachable | Connects and completes |
| Slow | Completes, at a cost worth knowing |
| Answers then stalls | First byte arrives, the load never finishes inside 60 seconds |
| Intermittent | Interference on the recent conclusive tests, not a clean block |
| Blocked | No usable connection |
| Splits by vantage point | A datacentre and a home line give opposite answers on the same host |

<!-- BEGIN DEPENDENCY TABLE: GENERATED FROM src/data/chinaDependencies.ts, DO NOT EDIT -->

### Analytics

| Service | Host or target tested | Verdict | Measured | Vantage point | Source and date |
|---|---|---|---|---|---|
| Google Analytics | `www.google-analytics.com` | Blocked | Reachability verdict only | n/a | GreatFire, 24 Jul 2026 |
| Google Tag Manager | `www.googletagmanager.com` | Splits by vantage point | 72 of 72 at 118ms first byte, and 0 of 112 | Alibaba Cloud (阿里云) cn-zhangjiakou, and Beijing China Mobile (中国移动) | 21YunBox, 28 and 30 Aug 2026 |
| Meta Pixel | `connect.facebook.net` | Blocked | Reachability verdict only | n/a | GreatFire, 27 May 2026 |
| Hotjar | `static.hotjar.com` | Intermittent | Interference on 1 of the last 2 conclusive tests | n/a | GreatFire, 30 Sep 2026 |
| Amplitude, script host | `cdn.amplitude.com` | Reachable | Reachability verdict only | n/a | GreatFire, 14 Sep 2026 |
| Amplitude, event host | `api.amplitude.com` | Reachable | Reachability verdict only | n/a | GreatFire, 10 Sep 2026 |
| Microsoft Clarity | `www.clarity.ms` | Reachable | Reachability verdict only | n/a | GreatFire, 15 Sep 2026 |
| Mixpanel, script host | `cdn.mxpnl.com` | Intermittent | Interference on 100% of the last 1 conclusive test | n/a | GreatFire, 6 Sep 2026 |
| Mixpanel, event host | `api.mixpanel.com` | Reachable | Reachability verdict only | n/a | GreatFire, 19 Sep 2026 |
| Segment | `api.segment.io` | Reachable | Reachability verdict only | n/a | GreatFire, 15 Sep 2026 |
| Plausible | `plausible.io` | Intermittent | Interference on 1 of the last 2 conclusive tests | n/a | GreatFire, 20 Aug 2026 |
| Matomo cloud | Not probed | Untested | No test on record | n/a | n/a |

### Forms and chat

| Service | Host or target tested | Verdict | Measured | Vantage point | Source and date |
|---|---|---|---|---|---|
| Typeform | `form.typeform.com` | Reachable | Reachability verdict only | n/a | GreatFire, 30 Sep 2026 |
| Mailchimp | `cdn-images.mailchimp.com` | Blocked | Reachability verdict only | n/a | GreatFire, 10 Sep 2026 |
| hCaptcha | `api2.hcaptcha.com` | Reachable | Reachability verdict only | n/a | GreatFire, 14 Sep 2026 |
| Cloudflare Turnstile | `challenges.cloudflare.com` | Reachable | Reachability verdict only | n/a | GreatFire, 11 Oct 2026 |
| Calendly | `calendly.com` | Reachable | Reachability verdict only | n/a | GreatFire, 3 Oct 2026 |
| Intercom | `widget.intercom.io` | Reachable | Reachability verdict only | n/a | GreatFire, 23 Sep 2026 |
| Zendesk | `static.zdassets.com` | Reachable | Reachability verdict only | n/a | GreatFire, 8 Oct 2026 |
| Drift | `js.driftt.com` | Untested | No test on record | n/a | GreatFire has never tested this host |
| Crisp | Not probed | Untested | No test on record | n/a | n/a |
| Tawk.to | Not probed | Untested | No test on record | n/a | n/a |

### Embeds

| Service | Host or target tested | Verdict | Measured | Vantage point | Source and date |
|---|---|---|---|---|---|
| Disqus | `disqus.com` | Blocked | 41 of 43 tested URLs blocked, 2 disrupted | n/a | GreatFire, 13 Sep 2026 |
| SoundCloud | `w.soundcloud.com` | Blocked | Reachability verdict only | n/a | GreatFire, 24 Jun 2026 |
| Spotify | `open.spotify.com` | Blocked | Reachability verdict only | n/a | GreatFire, 12 Sep 2026 |
| Instagram | `www.instagram.com` | Blocked | Reachability verdict only | n/a | GreatFire, 3 Oct 2026 |
| X, the timeline widget | `platform.twitter.com` | Blocked | Reachability verdict only | n/a | GreatFire, 7 Jul 2026 |
| Wistia | `fast.wistia.com` | Intermittent | 9 of 15 requests answered; video completion not measured | Beijing China Mobile | 21YunBox, 30 Aug 2026 |
| Loom | Not probed | Untested | No test on record | n/a | n/a |

### Maps

| Service | Host or target tested | Verdict | Measured | Vantage point | Source and date |
|---|---|---|---|---|---|
| Mapbox, telemetry | `events.mapbox.com` | Blocked | Reachability verdict only, six months old | n/a | GreatFire, 12 Mar 2026 |
| Mapbox, tiles and API | `api.mapbox.com` | Reachable | Reachability verdict only | n/a | GreatFire, 31 Aug 2026 |
| OpenStreetMap tiles | `tile.openstreetmap.org` | Blocked | All 71 tested openstreetmap.org URLs blocked | n/a | GreatFire, 7 Sep 2026 |

### Platforms

| Service | Host or target tested | Verdict | Measured | Vantage point | Source and date |
|---|---|---|---|---|---|
| Wix | `wix.com` | Answers then stalls | 0 of 3 inside 60s, first byte 532ms | Alibaba Cloud cn-zhangjiakou | 21YunBox, 30 Aug 2026 |
| Shopify | `cdn.shopify.com` | Reachable | 2 recent conclusive tests connected normally | n/a | GreatFire, 8 Oct 2026 |
| Webflow | `webflow.com` | Intermittent | Interference on 100% of the last 1 conclusive test | n/a | GreatFire, 23 Aug 2026 |
| Squarespace | `www.squarespace.com` | Reachable | Reachability verdict only | n/a | GreatFire, 3 Oct 2026 |
| Netlify | Not probed | Untested | No test on record | n/a | n/a |
| Sanity | Not probed | Untested | No test on record | n/a | n/a |

### Infrastructure

| Service | Host or target tested | Verdict | Measured | Vantage point | Source and date |
|---|---|---|---|---|---|
| Algolia | `algolia.net` | Intermittent | Interference on 100% of the last 2 conclusive tests, on the domain apex; the per-application search hosts have no test | n/a | GreatFire, 31 Aug 2026 |
| Firebase | `firebase.google.com` | Intermittent | Interference on 100% of the last 2 conclusive tests | n/a | GreatFire, 14 Sep 2026 |
| AWS CloudFront | `aws.amazon.com/cloudfront` | Reachable | 3 of 3 at 665ms first byte, and 3 of 3 at 718ms | Alibaba Cloud cn-zhangjiakou, and Beijing residential broadband, carrier unstated | 21YunBox, 28 and 30 Aug 2026 |
| Sentry | `browser.sentry-cdn.com` | Intermittent | Interference on 100% of the last 1 conclusive test | n/a | GreatFire, 1 Oct 2026 |
| Bootstrap CDN | Not probed | Untested | No test on record | n/a | n/a |

### Payments

| Service | Host or target tested | Verdict | Measured | Vantage point | Source and date |
|---|---|---|---|---|---|
| PayPal | `www.paypal.com` | Reachable | Reachability verdict only | n/a | GreatFire, 25 Sep 2026 |
| Stripe | `js.stripe.com` | Untested | No test on record. See the note below: reachability is not the binding question here | n/a | n/a |

<!-- END DEPENDENCY TABLE: GENERATED -->

### Not yet probed

The register has no dated evidence for Crisp, Tawk.to, Loom, Sanity, Netlify, Bootstrap CDN or `js.stripe.com`. The HTTPS HubSpot loader, Drift’s `js.driftt.com` and Matomo’s `cdn.matomo.cloud` also remain untested in this evidence set. A result for a vendor’s website cannot establish the behaviour of its widget host.

Adobe Fonts, Font Awesome and the LinkedIn Insight Tag have dated evidence and are excluded from that list.

> GreatFire reports `use.typekit.net` and `snap.licdn.com` not blocked on 22 September 2026, one conclusive test each. It reports `use.fontawesome.com` not blocked on 11 October 2026 and `kit.fontawesome.com` not blocked on 13 September 2026, one conclusive test each.
> Source: GreatFire, September and October 2026. https://en.greatfire.org/https/use.typekit.net ; https://en.greatfire.org/https/snap.licdn.com ; https://en.greatfire.org/https/use.fontawesome.com ; https://en.greatfire.org/https/kit.fontawesome.com

The consumer observations add a different view. Adobe’s host did not answer on the home line, and the challenge-host result describes requests rather than completed challenges.

> On Beijing China Mobile (中国移动) residential broadband on 30 August 2026, 21YunBox recorded no answers in 11 requests to `use.typekit.net` and 6 to `static.hotjar.com`. It recorded 6 failed requests out of 15 to `fast.wistia.com`, and 3 out of 12 to `challenges.cloudflare.com`. GreatFire separately reports Turnstile’s script URL not blocked, with 2 conclusive tests, last tested 11 October 2026.
> Source: 21YunBox, 30 August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html ; GreatFire, 11 October 2026. https://en.greatfire.org/https/challenges.cloudflare.com/turnstile/v0/api.js

Marketo’s `munchkin.marketo.net` has a historical reachable verdict dated 31 May 2026, older than 90 days. We checked the sources on 16 October 2026; that check does not move their test dates. The next editorial review is set for 15 November 2026.

> Source: GreatFire, 31 May 2026. https://en.greatfire.org/https/munchkin.marketo.net

### Why Stripe sits outside this table

Stripe is the entry people expect to find in a table like this one. It belongs to a different question. Whether `js.stripe.com` loads from Shanghai is beside the point, because the constraint is a licensing one.

> Mainland China does not appear in Stripe's own list of countries where a Stripe account can be opened. Hong Kong does.
> Source: Stripe, Global availability, read 22 September 2026. https://stripe.com/global

Domestic acquiring does not exist for a mainland entity regardless of whether the script reaches the browser, so tuning its delivery solves nothing. The question worth answering is how to take Alipay (支付宝), WeChat Pay (微信支付) and UnionPay (银联), and [our guide to running a WooCommerce store in China](/resources/china-web-guide/woocommerce-china-store-guide/) is the nearest thing we have published on it.

The verdict above covers `www.paypal.com`. It does not establish that a checkout completes.

## Strategies for foreign businesses

You can't punch through the firewall. But you can build so your site doesn't need to cross it.

| Strategy | What It Solves |
|---|---|
| Mainland hosting + ICP | Speed, rankings, compliance |
| China CDN | Caching at mainland edge nodes |
| Replace overseas dependencies | Google Fonts to local, GA to Baidu Tongji, Maps to Baidu Maps |
| Hong Kong hosting | Middle ground, no ICP needed |
| VPN awareness | Legal grey area, corporate vs. consumer distinction |

**Host in mainland China with an ICP filing.** This is the cleanest path. Site lives inside the firewall instead of fighting through it. Requests stay in the country, Baiduspider crawls without crossing the border, and the site is compliant. If you're committed to the Chinese market this is where you want to be.

**Use a China CDN** to cache content at edge nodes inside mainland China. Even with an origin server sitting outside the country, a CDN with mainland PoPs serves cached pages to Chinese users without every request having to fight through the firewall.

**Replace every overseas dependency.** This is the step companies miss the most. Google Fonts needs to swap to locally hosted fonts. Google Maps becomes Baidu Maps. Google Analytics becomes Baidu Tongji. Go through every external call your site makes. Every script tag, every font import, every API endpoint. If any of them hit a domain your visitors' networks can't reach, your Chinese users are getting a broken or degraded experience and you probably don't even know it.

> Google Fonts, Google Analytics, Google Maps. Swap them for locally hosted fonts, Baidu Tongji, and Baidu Maps. Audit every external call your site makes.

Then there's **Hong Kong hosting** as a middle ground if you're not ready for the ICP process. No licence needed, latency to mainland is manageable, most firewall interference is avoided. It's a compromise, but a usable one for companies testing the waters.

**VPNs** are a grey area. Corporate VPNs that connect China offices to global networks are generally tolerated. Consumer VPNs used to bypass the firewall are technically illegal, though enforcement varies by region and by year. Foreign companies operating in China should understand the distinction clearly. Don't assume your employees can freely use personal VPNs to access blocked services from the office.
