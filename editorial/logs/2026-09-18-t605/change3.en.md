## The rest of your analytics stack has the same problem

Pulling GA out and dropping in another hosted script moves the problem to a different hostname. Most of the obvious replacements are foreign hosts too, and several of them fail in a way that is harder to catch than a clean block.

The table holds two kinds of evidence, and they answer different questions. GreatFire tests whether a host is reachable at all. 21YunBox times real page loads from a probe inside the mainland. They disagree on Hotjar, and that disagreement is the most useful thing here.

| Tool | What the tests show | Completions | Source and date |
|---|---|---|---|
| Hotjar | Disrupted on GreatFire's probes, yet completes from an Alibaba Cloud instance at 487ms first byte | 3 of 3 from the datacentre | GreatFire 18 Aug 2026; 21YunBox 30 Aug 2026 |
| Meta Pixel | `connect.facebook.net` blocked | none | GreatFire 27 May 2026 |
| Microsoft Clarity | Answers quickly, then stalls. First byte 541ms, nothing finished inside 60 seconds | 0 of 3 | 21YunBox 28 Aug 2026 |
| Mixpanel | The same shape. First byte 391ms, nothing finished inside 60 seconds | 0 of 3 | 21YunBox 28 Aug 2026 |
| Segment | Completes, slowly. First byte 900ms on one run and 1,084ms on another | 3 of 3 | 21YunBox 28 and 30 Aug 2026 |
| Plausible | Completes. First byte 550ms, largest contentful paint 1,208ms | 3 of 3 | 21YunBox 28 Aug 2026 |
| Matomo cloud | Completes. First byte 516ms, largest contentful paint 1,532ms | 3 of 3 | 21YunBox, reviewed 29 Aug 2026 |

> Every timing in the table above was measured from a probe inside mainland China on Alibaba Cloud (阿里云) cn-zhangjiakou, three runs per tool with a 60-second abandon, between 28 and 30 August 2026.
> Source: 21YunBox, per-tool China measurements, August 2026. https://www.21cloudbox.com/support/microsoft-clarity-china.html

A datacentre in Zhangjiakou is not a flat in Beijing. Read those numbers as the best case, and assume your visitors get something worse.

That gap is the whole reason Hotjar has two verdicts. 21YunBox ran its test from a rack. Whatever GreatFire's probes saw, they saw something else, and a host that answers a datacentre can still ignore a home broadband line. Until you've measured Hotjar on your own traffic, assume it can do both.

Clarity and Mixpanel are the two rows worth reading twice. Neither host is on a block list. GreatFire had `www.clarity.ms` answering normally on 15 September 2026, and `api.mixpanel.com` answering normally when it last tested on 17 April 2026. Both still returned a first byte in under 600ms and then finished nothing inside a minute.

A hard block eventually throws an error that somebody notices. A stalled request sits there quietly until the browser gives up, and your session recording is simply thinner than it should be, in a way no alert will ever tell you about.

### Amplitude, and the failure mode worth testing for

Amplitude loads its script from one hostname and posts events to another. When a product splits like that, the two hostnames can get different answers from the same network. The script loads and the events never post. Your dashboard reads as healthy either way.

In April 2026 GreatFire had `cdn.amplitude.com` reachable while `api.amplitude.com` was blocked, which is exactly that shape. We re-tested both hostnames for this update on 17 September 2026.

> `cdn.amplitude.com` not blocked, last tested 14 September 2026, all 1 recent conclusive test connected normally. `api.amplitude.com` not blocked, last tested 10 September 2026, 0 of 1 disrupted in the last 90 days. Across 13 tested amplitude.com URLs GreatFire records 1 blocked, 3 disrupted and 9 accessible.
> Source: GreatFire, September 2026. https://en.greatfire.org/https/api.amplitude.com

The April split didn't reproduce in September. Both of those readings rest on a single conclusive test, which is thin in either direction, and the domain-wide spread says the picture is still mixed.

Which is the actual lesson. A verdict you read somewhere has a date on it, and five months is long enough for it to stop being true. Test the hostname your script loads from and the hostname it posts to, separately, from a network in the country you care about.

### What to run instead

Baidu Tongji (百度统计) first, if the mainland market matters to you. Its servers are in the country, so the request never crosses a border, and its reporting is built around Baidu (百度) traffic, which is the traffic you're trying to understand. Sensors Data (神策) and GrowingIO are the heavier domestic options.

Otherwise, self-host. Plausible and Matomo both completed every run in the table, and both can be installed on your own mainland server. That turns a foreign dependency into a first-party request and settles the legal question in the next section at the same time.

One caveat, since this page is mostly about a gate. A self-hosted analytics endpoint inside China needs no gate at all, because there's nothing to stop. Keep the `/ga.js` route for GA and for whatever else you load from a foreign host, and let the domestic tool run for everybody.

## PIPL applies even to the hosts that answer

Reachability and legality are separate questions, and the second one holds whether or not a host replies.

Google Analytics sends a client ID and an IP address to Google. Under China's Personal Information Protection Law both are personal information, and sending them out of the mainland is a cross-border transfer.

> Where a personal information handler provides personal information outside the territory of the People's Republic of China, it shall inform the individual of the overseas recipient's name and contact details, the purpose and method of handling, the categories of personal information, and the way the individual may exercise their rights against that recipient, and shall obtain the individual's separate consent.
> Source: Cyberspace Administration of China (中央网络安全和信息化委员会办公室), Personal Information Protection Law of the People's Republic of China, Article 39. Adopted 20 August 2021, in force 1 November 2021. https://www.cac.gov.cn/2021-08/20/c_1631050028355286.htm

Separate consent means its own opt-in for that transfer, rather than one line inside a banner that covers everything at once.

This argument doesn't move when the network does. If a blocked host starts answering next month, or Google shifts a hostname, the transfer is still a transfer. The gate closes both questions at once: no request leaves the browser, so there's no transfer to find a legal basis for. Our guide to [PIPL and the Data Security Law](/resources/china-web-guide/china-data-privacy-pipl-dsl/) covers the thresholds and the filing routes.
