---
title: "The Great Firewall: What It Blocks and How to Cope"
subtitle: "Blocked is the easy case. The dependency that answers and then never finishes is the one nobody on your team will ever see."
summary: "What a website in China can and cannot reach, host by host, with the vantage point and the test date on every row."
visual: "/images/guides/great-firewall-what-it-blocks.webp"
order: 7
published: true
publishedAt: 2026-04-01
updatedAt: 2026-09-25
category: Technology
---

A block is loud. Somebody in the office notices, and it gets fixed. The failure that costs you money is the quiet one: the host answers, the first byte arrives in half a second, and then the request simply never finishes.

> Microsoft Clarity, Mixpanel, Typeform, Mailchimp, Wix and Algolia each returned a first byte and then completed 0 of 3 page loads inside 60 seconds, measured from an Alibaba Cloud (阿里云) instance in cn-zhangjiakou on 28 and 30 August 2026.
> Source: 21YunBox, per-host China measurements, August 2026. https://www.21cloudbox.com/support/typeform-china.html

The page around those widgets renders normally. The widget stays empty, and nothing anywhere logs an error. So a team outside China can look at the site every morning for a year and see nothing wrong.

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

Google search, Gmail, Maps, YouTube and Google Ads do not work from a mainland connection. Google Analytics is the one that matters for a website, and it is in the table below with its test date, like everything else on this page. `www.google-analytics.com` last failed a GreatFire test on 24 July 2026. Fire the tag from a page in China and the beacon never arrives, so the data is lost whether or not the container script loaded.

Google Fonts is the exception, and people get it wrong in both directions, so it gets an extra paragraph.

> From an Alibaba Cloud (阿里云) instance in cn-zhangjiakou on 28 August 2026, sampled every ten minutes for twelve hours, `fonts.googleapis.com` completed 72 of 72 requests at a median 111ms to first byte. From a Beijing China Mobile (中国移动) residential line on 30 August 2026, across 264 page loads, the same host answered 0 of 54.
> Source: 21YunBox, A Day of Third-Party Requests From Inside China, August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Neither flat version of that claim survives the pair. Google Fonts resolves from mainland datacentres and frequently does not resolve on consumer connections, which is the whole argument for self-hosting: you remove a variable that changes by network, by resolver and by hour. `fonts.google.com`, the browsing interface, is unreachable either way.

Facebook, Instagram, WhatsApp, Messenger. All blocked. Twitter/X, Reddit, Pinterest. Blocked. Wikipedia's Chinese edition. Blocked.

Workplace tools that Western companies depend on: Dropbox, Slack, Notion, Trello. All blocked. If your site integrates with any of these or loads resources from their domains, that integration is dead in China.

Netflix, Spotify, Twitch. All blocked. Most major Western news sites including the New York Times, Wall Street Journal, and BBC. Blocked.

The part that catches most companies off guard goes past the blocked services themselves. Every script, font, widget, and API call that touches a blocked domain breaks too. One forgotten Google Fonts link buried in your CSS can add seconds to your load time for every single user in China. One analytics tag can hold up your entire page render.

> One forgotten Google Fonts link in your CSS can add seconds to load time for every user in China. The damage hides in your code, in the dependencies you forgot were even there.

## Every dependency in the dataset, and when it was last tested

The pages that rank for these questions carry no evidence at all. Across every compatibility page we have read at Chinafy, AppInChina and the smaller agencies: no table, no test date, no named test location, no latency figure. The measurement vendors publish figures. The pages telling you what breaks don't cite them. The table below is that citation, row by row.

Be clear about whose numbers these are. Every row below comes from GreatFire or from 21YunBox, cited and dated. None of them is ours yet. Our own probe is being stood up now, from a mainland datacentre and a Beijing consumer line. When it runs, our rows will sit next to the third-party ones and be labelled as ours. They will not quietly replace them.

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
| Hotjar | `static.hotjar.com` | Intermittent | 3 of 3 at 487ms first byte, LCP 1,660ms | Alibaba Cloud cn-zhangjiakou | GreatFire 18 Aug 2026, 21YunBox 30 Aug 2026 |
| Amplitude, script host | `cdn.amplitude.com` | Reachable | Reachability verdict only | n/a | GreatFire, 14 Sep 2026 |
| Amplitude, event host | `api.amplitude.com` | Reachable | Reachability verdict only | n/a | GreatFire, 10 Sep 2026 |
| Microsoft Clarity | `www.clarity.ms` | Answers then stalls | 0 of 3 inside 60s, first byte 541ms | Alibaba Cloud cn-zhangjiakou | 21YunBox 28 Aug 2026, GreatFire 15 Sep 2026 |
| Mixpanel | `api.mixpanel.com` | Answers then stalls | 0 of 3 inside 60s, first byte 391ms | Alibaba Cloud cn-zhangjiakou | 21YunBox, 28 Aug 2026 |
| Segment | Vendor site, host not named by the source | Slow | 3 of 3, first byte 900ms on one run and 1,084ms on another | Alibaba Cloud cn-zhangjiakou | 21YunBox, 28 and 30 Aug 2026 |
| Plausible | Vendor site, host not named by the source | Slow | 3 of 3, first byte 550ms, LCP 1,208ms | Alibaba Cloud cn-zhangjiakou | 21YunBox, 28 Aug 2026 |
| Matomo cloud | Vendor site, host not named by the source | Slow | 3 of 3, first byte 516ms, LCP 1,532ms | Alibaba Cloud cn-zhangjiakou | 21YunBox, 29 Aug 2026 |

### Forms and chat

| Service | Host or target tested | Verdict | Measured | Vantage point | Source and date |
|---|---|---|---|---|---|
| Typeform | Vendor site, host not named by the source | Answers then stalls | 0 of 3 inside 60s, first byte 907ms | Alibaba Cloud cn-zhangjiakou | 21YunBox, 28 Aug 2026 |
| Mailchimp | `cdn-images.mailchimp.com` | Answers then stalls | 0 of 3 inside 60s, first byte 812ms, paint 2.0s | Alibaba Cloud cn-zhangjiakou | 21YunBox 28 Aug 2026, GreatFire 10 Sep 2026 |
| hCaptcha | `api2.hcaptcha.com` | Reachable | Reachability verdict only | n/a | GreatFire, 14 Sep 2026 |
| Calendly | `calendly.com` | Reachable | Reachability verdict only | n/a | GreatFire, 10 Jun 2026 |
| Intercom | `widget.intercom.io` | Reachable | Reachability verdict only | n/a | GreatFire, 16 Jun 2026 |
| Zendesk | `static.zdassets.com` | Reachable | Reachability verdict only | n/a | GreatFire, 29 Apr 2026 |
| Drift | `js.driftt.com` | Untested | No test on record | n/a | GreatFire has never tested this host |
| Crisp | Not probed | Untested | No test on record | n/a | Owed by our own harness |
| Tawk.to | Not probed | Untested | No test on record | n/a | Owed by our own harness |

### Embeds

| Service | Host or target tested | Verdict | Measured | Vantage point | Source and date |
|---|---|---|---|---|---|
| Disqus | `disqus.com` | Blocked | 41 of 43 tested URLs blocked, 2 disrupted | n/a | GreatFire, 13 Sep 2026 |
| SoundCloud | `w.soundcloud.com` | Blocked | Reachability verdict only | n/a | GreatFire, 24 Jun 2026 |
| Spotify | `open.spotify.com` | Blocked | Reachability verdict only | n/a | GreatFire, 12 Sep 2026 |
| Instagram | `www.instagram.com` | Blocked | Reachability verdict only | n/a | GreatFire, 30 Aug 2026 |
| X, the timeline widget | `platform.twitter.com` | Blocked | Reachability verdict only | n/a | GreatFire, 7 Jul 2026 |
| Wistia | `fast.wistia.com` | Reachable | Reachability verdict only, six months old | n/a | GreatFire, 17 Mar 2026 |
| Loom | Not probed | Untested | No test on record | n/a | Owed by our own harness |

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
| Shopify | `shopify.com` | Slow | 3 of 3, first byte 575ms, median load 3.6s | Alibaba Cloud cn-zhangjiakou | 21YunBox, 28 Aug 2026 |
| Webflow | `webflow.com` | Intermittent | Interference on 100% of the last 1 conclusive test | n/a | GreatFire, 23 Aug 2026 |
| Squarespace | `www.squarespace.com` | Reachable | 2 recent conclusive tests connected normally | n/a | GreatFire, 12 Sep 2026 |
| Netlify | Not probed | Untested | No test on record | n/a | Owed by our own harness |
| Sanity | Not probed | Untested | No test on record | n/a | Owed by our own harness |

### Infrastructure

| Service | Host or target tested | Verdict | Measured | Vantage point | Source and date |
|---|---|---|---|---|---|
| Algolia | Vendor site, host not named by the source | Answers then stalls | 0 of 3 inside 60s, first byte 1,027ms, paint 3.4s | Alibaba Cloud cn-zhangjiakou | 21YunBox, 28 Aug 2026 |
| Firebase | `firebase.google.com` | Intermittent | Interference on 100% of the last 2 conclusive tests | n/a | GreatFire, 14 Sep 2026 |
| AWS CloudFront | Vendor site, host not named by the source | Splits by vantage point | 3 of 3 at 665ms first byte, and 0 of 3 at 743ms | Alibaba Cloud cn-zhangjiakou, and Beijing China Mobile | 21YunBox, 28 and 30 Aug 2026 |
| Sentry | Vendor site, host not named by the source | Reachable | 3 of 3, first byte 252ms | Alibaba Cloud cn-zhangjiakou | 21YunBox, 28 Aug 2026 |
| Bootstrap CDN | Not probed | Untested | No test on record | n/a | Owed by our own harness |

### Payments

| Service | Host or target tested | Verdict | Measured | Vantage point | Source and date |
|---|---|---|---|---|---|
| PayPal | `www.paypal.com` | Reachable | 9 of 27 tested URLs disrupted, and the disrupted ones are checkout redirect paths | n/a | GreatFire, 18 May 2026 |
| Stripe | `js.stripe.com` | Untested | No test on record. See the note below: reachability is not the binding question here | n/a | Owed by our own harness |

<!-- END DEPENDENCY TABLE: GENERATED -->

### Not yet probed

Thirteen dependencies have no test record we will stand behind, either because nobody has probed them or because the only verdict available is more than ninety days old. They are listed rather than dropped, because the gap is itself information: Crisp, Tawk.to, Loom, Sanity, Netlify, Bootstrap CDN, `js.stripe.com`, the LinkedIn Insight Tag, Cloudflare Turnstile, Adobe Fonts, Font Awesome, Marketo and the HubSpot tracking script.

Drift makes fourteen, and it shows how this goes wrong. Drift is commonly reported as reachable, but that verdict is about the marketing site. `js.driftt.com`, the host that actually runs in a visitor's browser, has never been tested. A verdict on the wrong hostname is how most of this category gets written.

The dates matter as much as the verdicts. A verdict from March tells you about March. Two rows above are six months old, Wistia and the Mapbox telemetry host, and both say so in their own cells. Wistia is a video embed a marketing team might add this afternoon, on the strength of a reading taken in the spring.

We last checked this table against its sources on 22 September 2026, and any row that passes ninety days gets rechecked. If you're reading it well after that date and a row matters to your build, test the host yourself first.

### Why Stripe sits outside this table

Stripe is the entry people expect to find in a table like this one. It belongs to a different question. Whether `js.stripe.com` loads from Shanghai is beside the point, because the constraint is a licensing one.

> Mainland China does not appear in Stripe's own list of countries where a Stripe account can be opened. Hong Kong does.
> Source: Stripe, Global availability, read 22 September 2026. https://stripe.com/global

Domestic acquiring does not exist for a mainland entity regardless of whether the script reaches the browser, so tuning its delivery solves nothing. The question worth answering is how to take Alipay (支付宝), WeChat Pay (微信支付) and UnionPay (银联), and [our guide to running a WooCommerce store in China](/resources/china-web-guide/woocommerce-china-store-guide/) is the nearest thing we have published on it.

PayPal is a different case and is in the table, because it is reachable and partially disrupted rather than unavailable, and because the disrupted paths are the checkout redirects.

## Strategies for foreign businesses

You can't punch through the firewall. But you can build so your site doesn't need to cross it.

| Strategy | What It Solves |
|---|---|
| Mainland hosting + ICP | Speed, rankings, compliance |
| China CDN | Caching at mainland edge nodes |
| Replace blocked dependencies | Google Fonts to local, GA to Baidu Tongji, Maps to Baidu Maps |
| Hong Kong hosting | Middle ground, no ICP needed |
| VPN awareness | Legal grey area, corporate vs. consumer distinction |

**Host in mainland China with an ICP licence.** This is the cleanest path. Site lives inside the firewall instead of fighting through it. Fastest loads, best Baidu rankings, full compliance. If you're committed to the Chinese market this is where you want to be.

**Use a China CDN** to cache content at edge nodes inside mainland China. Even with an origin server sitting outside the country, a CDN with mainland PoPs serves cached pages to Chinese users without every request having to fight through the firewall.

**Replace every blocked dependency.** This is the step companies miss the most. Google Fonts needs to swap to locally hosted fonts. Google Maps becomes Baidu Maps. Google Analytics becomes Baidu Tongji. Go through every external call your site makes. Every script tag, every font import, every API endpoint. If any of them hit a blocked domain, your Chinese users are getting a broken or degraded experience and you probably don't even know it.

> Google Fonts, Google Analytics, Google Maps. Swap them for locally hosted fonts, Baidu Tongji, and Baidu Maps. Audit every external call your site makes.

Then there's **Hong Kong hosting** as a middle ground if you're not ready for the ICP process. No licence needed, latency to mainland is manageable, most firewall interference is avoided. It's a compromise, but a usable one for companies testing the waters.

**VPNs** are a grey area. Corporate VPNs that connect China offices to global networks are generally tolerated. Consumer VPNs used to bypass the firewall are technically illegal, though enforcement varies by region and by year. Foreign companies operating in China should understand the distinction clearly. Don't assume your employees can freely use personal VPNs to access blocked services from the office.
