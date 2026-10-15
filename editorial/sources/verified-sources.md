# Verified source ledger

Every figure used in a published piece, with the citation that goes with it.

**Read this before researching anything.** If a figure is here and still
current, reuse the exact citation below. That is what keeps the same number
from appearing three different ways across seventy-eight pieces.

**Read `fact-bank.md` before this file.** The fact bank (F1 to F46) is the
plan's own verified set and every brief cites it by ID. This ledger records
the primary source and the two check dates behind each fact as it gets used,
plus every figure researched outside the fact bank.

**Append to this file before you finish a draft.** A figure used and not
logged will be researched again next week.

## How to log an entry

```
### <the figure, in plain words>
- Fact ID: F<n> (or "none" if researched outside the fact bank)
- Value: <number and unit>
- Vantage point: <network or cloud region, or "n/a" if not a measurement>
- As of: <date the source states, not the date you found it>
- Source: <publisher name, Chinese name in parentheses if Chinese-language>
- URL: <link>
- Verified 1: <date of check 1: page fetched, figure, unit, period and date confirmed>
- Verified 2: <date of check 2: page re-fetched before the draft was finished>
- Used in: <slug>, <slug>
- Notes: <anything that limits how it can be used>
```

## Rules

1. **A source with no date does not go in this file.** Find the date or drop
   the figure.
2. **A source with one check does not go in this file as publishable.** Every
   entry carries two verification dates before it is cited. Seeded entries
   below carry the plan's verification date as check 1 and owe check 2 at
   first use.
3. **A measurement without a vantage point does not go in this file.**
4. **Never log a competitor blog as the source for a technical fact.** Go to
   the vendor's documentation, a regulator, GreatFire, 21YunBox's published
   probes, or a dated trade publication. If a competitor cites a real
   source, log their source, not them.
5. **Our own data is logged separately**, in the section below, with method,
   vantage point and date. It is cited as ours, never presented as neutral
   benchmarking.
6. **Recheck anything older than 90 days if it is a measurement, 12 months
   otherwise**, before reusing it. Move stale entries to the retired section
   rather than deleting them, so a reader who asks where a published number
   came from can still be answered.

## Fact bank entries, seeded 2026-09-06

The plan verified these on 29 August, 4 September and 6 September 2026 (see
the fact bank preamble). Each entry below is check 1. At first use, fetch the
primary source, record the URL and the check 2 date, and move the entry to
"Platform and vendor figures" or "Measurements".

| Fact ID | What it covers | Plan verification (check 1) | Primary source to fetch at check 2 |
|---|---|---|---|
| F1 | ajax.googleapis.com blocked, no first byte, 60s abandon, Alibaba Cloud Zhangjiakou | 2026-08-29 | CWF or 21YunBox probe record |
| F2 | reCAPTCHA blocked; recaptcha.net workaround last confirmed Feb 2026, retest before citing | 2026-08-29 | Google reCAPTCHA FAQ (developers.google.com/recaptcha/docs/faq) |
| F3 | GA, Maps JS blocked; GTM intermittent; PIPL as second reason | 2026-08-29 | GreatFire analyzer entries; PIPL text |
| F4 | Gravatar blocked; Cravatar 284ms, cdn.sep.cc 33ms, WeAvatar 50ms | 2026-08-29 | Probe record; cravatar.cn |
| F5 | YouTube, Vimeo blocked, player and oEmbed | 2026-08-29 | GreatFire |
| F6 | Google Fonts: 73/73 at 111ms and 102ms from Alibaba Cloud 2026-08-29; 0/54 and 0/6 from Beijing residential 2026-08-28 | 2026-09-06 (corrected) | 21YunBox 28 Aug 2026 comparison; CWF probe record |
| F7 | cdnjs 478ms, unpkg 824ms, jsDelivr 493 to 1,086ms, p95 1,780ms; jsDelivr lost ICP Dec 2021 | 2026-08-29 | 21YunBox probe; jsDelivr announcement Dec 2021 |
| F8 | wordpress.org rate limits mainland IPs, HTTP 429, since Oct 2019 | 2026-08-29 | WordPress meta trac / make.wordpress.org thread Oct 2019 |
| F9 | WordPress.com: 508 of 1,509 URLs blocked; cannot ICP-file uncontrolled hosting | 2026-08-29 | GreatFire |
| F10 | Elementor 4.2.4 source: fonts, bundled icons, editor Roboto, setting names and defaults | 2026-09-04 | Elementor plugin source 4.2.4 |
| F11 | WordPress 7.1 core: no Google Fonts on public pages, dead registrations, Font Library via s.w.org | 2026-09-04 | wp-includes/script-loader.php, WP 7.1 |
| F12 | Polylang 3.8.7: zero runtime external calls; zh_CN slug `zh`; hreflang `zh` | 2026-09-04 | Polylang plugin source 3.8.7 |
| F13 | TranslatePress 3.3.4: runtime calls to translation.googleapis.com and mtapi.translatepress.com | 2026-09-04 | TranslatePress plugin source 3.3.4 |
| F14 | WPML default `/zh-hans/`, codes not editable (support, Feb 2025), cloud ATE dependency | 2026-09-04 | wpml.org support thread Feb 2025 |
| F15 | Wordfence 9.0.0: rate limits disabled by default, Google-only crawler whitelist by rDNS | 2026-09-04 | Wordfence plugin source 9.0.0 |
| F16 | Solid Security 10.0.3 HackRepair list 403s 360Spider and YisouSpider, opt-in | 2026-09-04 | better-wp-security source 10.0.3 |
| F17 | WP Rocket Remove Unused CSS is SaaS (Sept 2024 post) | 2026-09-04 | wp-rocket.me blog, Sept 2024 |
| F18 | LiteSpeed Cache 7.9.1, W3TC 2.10.6 empty UA exclusion lists; LSC preconnects fonts.gstatic.com | 2026-09-04 | plugin sources |
| F19 | Baiduspider-render/2.0 announced April 2017 | 2026-08-29 | Baidu Search Resource Platform (百度搜索资源平台) announcement, April 2017 |
| F20 | Verify Baiduspider by reverse DNS (.baidu.com, .baidu.jp) | 2026-08-29 | Baidu Search Resource Platform documentation |
| F21 | Yoast and Rank Math: only the baidu-site-verification meta tag | 2026-08-29 | plugin sources |
| F22 | baidu-submit-link 4.5.0 (4 Sept 2026), endpoints, phone-home hosts; alternatives | 2026-09-04 | wordpress.org/plugins/baidu-submit-link |
| F23 | No maintained dedicated Baidu Tongji plugin | 2026-08-29 | wordpress.org plugin directory search |
| F24 | Fast inclusion killed April 2024; sitemap quotas recalled Sept 2023; 2 to 4 weeks to index | 2026-08-29 | Baidu Search Resource Platform announcements |
| F25 | Ports 80 and 443 closed on a mainland IP until ICP filing clears | 2026-08-29 | Alibaba Cloud (阿里云) ICP filing documentation |
| F26 | ICP filing 10 to 30 working days, plan 3 to 6 weeks; licence 60 to 90 working days; foreign ownership pilot areas | 2026-08-29 | MIIT (工信部) / provincial guidance; Alibaba Cloud docs |
| F27 | alibabacloud.com vs aliyun.com, disjoint platforms, Chinese-language filing console | 2026-08-29 | Alibaba Cloud documentation |
| F28 | No managed WordPress in China; one-click images only | 2026-08-29 | Alibaba SAS, Tencent Lighthouse, Huawei FlexusL product pages |
| F29 | Vercel KB Nov 2025: no mainland guarantee; vercel.app mostly blocked (GreatFire) | 2026-08-29 | vercel.com/kb article, Nov 2025; GreatFire |
| F30 | Cloudflare China Network: Enterprise, JD Cloud, ICP per apex, content review | 2026-08-29 | developers.cloudflare.com China Network docs |
| F31 | Chinafy April 2026 benchmark: 614 sites, 66.4% fail in Beijing, 17.2s median, 44% timeouts, TTFB 4 to 4.5x | 2026-08-29 | Chinafy, State of Global Website Performance in China, April 2026 |
| F32 | CWF published figures: 1.2s vs 23.4s, 99.98% over 90 days, 48/36/61ms Beijing/Shanghai/Guangzhou, 51-point bounce | 2026-08-29 | CWF project records; vantage points to be attached before reuse (see PLAN.md T3-01, T3-02) |
| F33 | Answers-then-hangs: Clarity, Mixpanel, Typeform, Mailchimp, Wix, Algolia | 2026-09-06 | 21YunBox 28 Aug 2026 probe |
| F34 | Analytics verdicts: Hotjar (GF 2026-08-20), Meta Pixel (GF 2026-07-27), Amplitude split (GF 2026-04-22), Clarity 541ms 0/3, Mixpanel 391ms 0/3, Segment 900 to 1,084ms, Plausible 550ms, Matomo 516ms | 2026-09-06 | GreatFire; 21YunBox |
| F35 | Forms and chat: Typeform 907ms 0/3, Mailchimp 812ms 0/3, hCaptcha (GF 2026-07-29) api2 intermittent, Calendly (GF 2026-08-18), Drift (GF 2026-08-22); Intercom, Crisp, Tawk.to, Zendesk unverified | 2026-09-06 | GreatFire; 21YunBox |
| F36 | Embeds: Disqus 41/43 (GF 2026-09-03), SoundCloud 72/79 (GF 2026-04-22), Spotify (GF 2026-06), Instagram (GF 2026-04-15), platform.twitter.com (GF 2026-04-25), Wistia reachable (GF 2026-06-26) | 2026-09-06 | GreatFire |
| F37 | Maps: events.mapbox.com blocked, api.mapbox.com intermittent (GF 2026-06-07), OSM tiles 70/70 (GF 2026-03-10); surveying licence requirement | 2026-09-06 | GreatFire; Surveying and Mapping Law of the PRC (测绘法) |
| F38 | Platforms: Wix 532ms 0/3, Shopify 575ms TTFB 3.6s median, Webflow and Squarespace HTTP ok HTTPS intermittent (GF 2026-07-30, 2026-08-21) | 2026-09-06 | 21YunBox; GreatFire |
| F39 | Infra: Algolia 1,027ms 0/3, Firebase blocked, CloudFront 665ms datacenter 0/3 consumer, Sentry 252ms | 2026-09-06 | 21YunBox; AWS China partition docs |
| F40 | Stripe: mainland not a supported country; PayPal 9 of 27 URLs disrupted (GF 2026-08-27) | 2026-09-06 | stripe.com/global; GreatFire |
| F41 | Replacement set (analytics, video, maps, captcha, chat, forms, comments, email, search, icons, auth) | 2026-09-06 | vendor sites, to confirm each at first use |
| F42 | Eleven untested dependencies plus two stale (over 90 days): no verdict until probed | 2026-09-06 | harness/latest.json |
| F43 | Chinafy: 1,762 URLs, 104-page directory, 65 boilerplate sentences, 95 of 104 last touched 2023 | 2026-08-29 | chinafy.com sitemap and pages |
| F44 | AppInChina: 219 pages, 153 in March 2025, 42 in April 2025, 24 touched since, no server-rendered title | 2026-08-29 | appinchina.co sitemap and pages |
| F45 | Nobody in the set publishes a measurement | 2026-08-29 | competitive review, PLAN.md companion doc |
| F46 | ~44% of AI citations from the first 30% of a page; ChatGPT bot does not execute JS | 2026-08-29 | aggregated vendor analysis, directional only |

## Platform and vendor figures

### Baidu renders JavaScript: Baiduspider-render/2.0 announcement
- Fact ID: F19
- Value: new rendering UA announced, limited beta from 24 March 2017; fetches CSS, JS and images
- Vantage point: n/a
- As of: 24 March 2017
- Source: Baidu Search Resource Platform (百度搜索资源平台), 百度Spider新增渲染抓取UA公告
- URL: https://ziyuan.baidu.com/wiki/990
- Verified 1: 2026-08-29 (fact bank)
- Verified 2: 2026-09-06, fetched via search; date is March, not April as the fact bank says
- Used in: website-in-china
- Notes: Baidu publishes no rendering coverage or queue latency. Frame SSR as risk reduction.

### Unfiled domain on a mainland-region server is blocked by the provider
- Fact ID: F25
- Value: 网站暂时无法访问 shown until the ICP 备案 is approved
- Vantage point: n/a
- As of: 20 March 2022 (community article); behaviour current 2026-09-06
- Source: Alibaba Cloud (阿里云) developer community
- URL: https://developer.aliyun.com/article/877910
- Verified 1: 2026-08-29 (fact bank)
- Verified 2: 2026-09-06, fetched. Official help centre confirms the block; the 80/443 port mechanism rests on the fact bank and community threads (developer.aliyun.com/ask/55623)
- Used in: website-in-china
- Notes: Say "unreachable until the filing clears". Say "ports 80 and 443" only with the fact bank attribution.

### ICP filing review times at Alibaba Cloud
- Fact ID: F26
- Value: Alibaba Cloud initial review 1 to 2 working days; provincial regulator (管局) 1 to 20 working days, varies by province
- Vantage point: n/a
- As of: page undated; confirmed 2026-09-06
- Source: Alibaba Cloud help centre (阿里云帮助中心), 阿里云ICP备案流程概述
- URL: https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview
- Verified 1: 2026-08-29 (fact bank, as 10 to 30 working days)
- Verified 2: 2026-09-06, fetched
- Used in: website-in-china
- Notes: Planning number stays 3 to 6 weeks. Commercial licence 60 to 90 working days is from the fact bank, not re-fetched today.

### ajax.googleapis.com blocked verdict, mainland China
- Fact ID: F1 (verdict half only; the CWF timing half is still unverified, see "Checks attempted and not completed")
- Value: blocked. GreatFire's last conclusive test failed. Across the wider googleapis.com domain, 265 of 573 tested URLs blocked, 120 disrupted, 184 accessible
- Vantage point: GreatFire's mainland test network (GreatFire does not publish the carrier or the city)
- As of: last tested 2026-08-22
- Source: GreatFire
- URL: https://en.greatfire.org/https/ajax.googleapis.com
- Verified 1: 2026-09-11, fetched twice with different prompts, same verdict and same 2026-08-22 date both times
- Verified 2: 2026-09-11, re-fetched in iteration 8, unchanged
- Used in: wordpress-plugins-china (A3 draft)
- Notes: This carries the **verdict** only. It is not a latency measurement and must never be presented as one. The fact bank's "no first byte before a 60-second abandon from Alibaba Cloud Zhangjiakou" is a separate claim and is still owed check 2. GreatFire's sample here is one conclusive test, which is why A3 says so in the blockquote rather than implying a large sample.

### secure.gravatar.com blocked in mainland China
- Fact ID: F4 (verdict half only)
- Value: blocked. All 28 tested gravatar.com URLs blocked. Interference on record since 12 May 2014
- Vantage point: GreatFire's mainland test network
- As of: last tested 2026-08-31
- Source: GreatFire
- URL: https://en.greatfire.org/https/secure.gravatar.com
- Verified 1: 2026-09-11
- Verified 2: 2026-09-11, re-fetched in iteration 8, verdict, 28 of 28 count and date all unchanged
- Used in: wordpress-plugins-china (A3 draft)
- Notes: Replaces the fact bank's unsourced Gravatar verdict for citation purposes. The mirror timings in F4 (Cravatar 284ms, cdn.sep.cc 33ms, WeAvatar 50ms) are **not** covered here and stay out of copy until they carry a vantage point and a date.

### WordPress core registers Google Fonts only for back-compatibility
- Fact ID: F11
- Value: two `fonts.googleapis.com` registrations in `wp-includes/script-loader.php`, for Open Sans and Noto Serif. Both carry the comment "<name> is no longer used by core, but may be relied upon by themes and plugins"
- Vantage point: n/a, not a measurement
- As of: current master at the time of reading, 2026-09-11
- Source: WordPress core source
- URL: https://raw.githubusercontent.com/WordPress/WordPress/master/wp-includes/script-loader.php
- Verified 1: 2026-09-11, file fetched, both occurrences and both comments read
- Verified 2: 2026-09-11, re-fetched in iteration 8, comment wording confirmed verbatim for both fonts
- Used in: wordpress-plugins-china (A3 draft)
- Notes: **The fact bank says one registration is marked "No longer used in core as of 5.7". That wording is not in the file.** The file says "is no longer used by core, but may be relied upon by themes and plugins", for both fonts. Source wins, same precedent as F19 and F6. PLAN.md section 4 needs correcting. The fact bank's separate claim that the Font Library fetches its catalogue from `s.w.org` was **not** checked; A3 says "WordPress.org" instead and names no host.

### Elementor ships with local Google Fonts hosting turned off
- Fact ID: F10
- Value: the Load Google Fonts Locally feature "has been updated with a setting that allows you to choose if you want to Enable or Disable it. From now on, this setting is disabled by default on all sites." Re-enabled at Elementor > Settings > Performance
- Vantage point: n/a, not a measurement
- As of: 18 September 2025
- Source: Elementor, official statement in the plugin's public issue tracker (elementor/elementor #32838)
- URL: https://github.com/elementor/elementor/issues/32838
- Verified 1: 2026-09-11, issue fetched, both quoted sentences and the menu path confirmed
- Verified 2: 2026-09-11, re-fetched in iteration 8, both sentences still present verbatim
- Used in: wordpress-plugins-china (A3 draft)
- Notes: This is the citable half of F10, and it is stronger than a source read because it is the vendor's own statement carrying a date. The separate Google Fonts control under Elementor > Settings > Advanced is named in A3 from the vendor's help documentation and is **not** carried by this entry. The option keys `elementor_google_font` and `elementor_local_google_fonts`, the editor's ungated Roboto registration, and the `api-eu.mixpanel.com` opt-in are all **unverified** and stay out of copy. Reachability of `my.elementor.com` and `assets.elementor.com` remains on the Do Not Assert list.

### WP Rocket's Remove Unused CSS is processed on WP Rocket's servers
- Fact ID: F17
- Value: "Those optimizations are performed on our servers upon requests from the WP Rocket plugin."
- Vantage point: n/a, not a measurement
- As of: 12 September 2024
- Source: WP Rocket, *WP Rocket SaaS: Behind the Scene*
- URL: https://wp-rocket.me/blog/saas-behind-the-scene/
- Verified 1: 2026-09-11
- Verified 2: 2026-09-11, re-fetched in iteration 8, sentence present verbatim, post date confirmed
- Used in: wordpress-plugins-china (A3 draft)
- Notes: Pairs with the documentation entry below. Together they establish the direction of travel (their servers fetch your site) without asserting any verdict on whether the round trip succeeds from a mainland origin, which nobody has measured.

### WP Rocket's Used CSS requires the site to be publicly reachable
- Fact ID: F17
- Value: "The URL of each page is sent to our API which will visit the URL and will create the used CSS for that", and among the basic requirements, "Your site must be publicly accessible for the tool to work"
- Vantage point: n/a, not a measurement
- As of: page last updated 1 June 2026
- Source: WP Rocket knowledge base, *Remove Unused CSS*
- URL: https://docs.wp-rocket.me/article/1529-remove-unused-css
- Verified 1: 2026-09-11
- Verified 2: 2026-09-11, re-fetched in iteration 8, both sentences confirmed and the last-updated date unchanged
- Used in: wordpress-plugins-china (A3 draft)
- Notes: Check 2 corrected the first quote: it continues "and will create the used CSS for that". A3 quotes the full clause rather than truncating it.

### QUIC.cloud image optimisation sends the media library out of the country
- Fact ID: none (researched outside the fact bank; adjacent to F18)
- Value: "Images from your WordPress Media Library are sent to QUIC.cloud in batches. QUIC.cloud performs the optimization using QUIC.cloud's own service nodes so there is no impact on your server performance."
- Vantage point: n/a, not a measurement
- As of: page dated 6 April 2026
- Source: QUIC.cloud documentation, *Image Optimization*
- URL: https://docs.quic.cloud/services/imageopt/
- Verified 1: 2026-09-11 (reached via a 301 from www.quic.cloud/docs/online-services/image-optimization/)
- Verified 2: 2026-09-11, re-fetched in iteration 8, sentence and page date unchanged
- Used in: wordpress-plugins-china (A3 draft)
- Notes: The mirror image of the WP Rocket case, and the reason A3 can make the "calls the other way" point without any of the F18 details it could not verify. **QUIC.cloud endpoint reachability from mainland China stays on the Do Not Assert list.** This entry describes architecture, not reachability.

### LiteSpeed Cache and W3 Total Cache, current versions
- Fact ID: F18 (versions only)
- Value: LiteSpeed Cache stable 7.9.1, last updated 1 September 2026, tested to WordPress 7.1. W3 Total Cache stable 2.10.6, last updated 4 September 2026, tested to WordPress 7.1
- Vantage point: n/a, not a measurement
- As of: 1 and 4 September 2026
- Source: WordPress.org plugin API
- URL: https://api.wordpress.org/plugins/info/1.0/litespeed-cache.json and https://api.wordpress.org/plugins/info/1.0/w3-total-cache.json
- Verified 1: 2026-09-11
- Verified 2: 2026-09-11, both endpoints re-read in iteration 8
- Used in: wordpress-plugins-china (A3 draft)
- Notes: Both version numbers match the fact bank exactly. Everything else in F18 failed check 2 and is logged below.

## Measurements (ours)

### ajax.googleapis.com returns no first byte from a mainland datacenter
- Fact ID: F1
- Value: no first byte before a 60-second abandon, repeated attempts
- Vantage point: Alibaba Cloud (阿里云) instance, Zhangjiakou
- As of: 2026-08-29
- Source: ChinaWebFoundry probe record, published in is-wordpress-blocked-in-china
- URL: https://www.chinawebfoundry.com/resources/china-web-guide/is-wordpress-blocked-in-china/
- Verified 1: 2026-08-29 (fact bank)
- Verified 2: 2026-09-06, live guide re-read
- Used in: is-wordpress-blocked-in-china, website-in-china
- Notes: Re-run through the harness before 2026-11-27 (90 days).

### Migration: 23.4s on a European origin to 1.2s on a mainland origin
- Fact ID: F32
- Value: median page load 23.4s before, 1.2s after
- Vantage point: mainland; carrier and date NOT published; owed by T3-01 (blocked at client sign-off)
- As of: published 2026-08-29
- Source: ChinaWebFoundry, is-wordpress-blocked-in-china and the agency pages
- URL: https://www.chinawebfoundry.com/resources/china-web-guide/is-wordpress-blocked-in-china/
- Verified 1: 2026-08-29 (fact bank)
- Verified 2: 2026-09-06, found in repo
- Used in: website-in-china
- Notes: Labelled as ours in copy with the vantage caveat stated.

### 99.98% uptime over 90 days; 48ms, 36ms, 61ms from Beijing, Shanghai, Guangzhou
- Fact ID: F32
- Value: as stated
- Vantage point: Beijing, Shanghai, Guangzhou; carriers and window NOT published; owed by T3-02 (blocked at client sign-off)
- As of: live 2026-09-06
- Source: ChinaWebFoundry, maintenance-support and agency pages
- URL: https://www.chinawebfoundry.com/services/maintenance-support/
- Verified 1: 2026-08-29 (fact bank)
- Verified 2: 2026-09-06, found in repo
- Used in: website-in-china
- Notes: Labelled as ours in copy with the vantage caveat stated.

## Third-party measurements

### Chinafy 2026 benchmark: 614 sites, 66.4% failed in Beijing
- Fact ID: F31
- Value: 614 sites, 11 industries, WebPageTest (Catchpoint) from Beijing, Virginia, London, Chrome on cable; 66.4% failed to load successfully in Beijing; median visually complete 17.2s; 44% timed out; TTFB 4 to 4.5x (1.4s vs 0.35s and 0.31s)
- Vantage point: Beijing, WebPageTest node
- As of: April 2026 (blog post dated 14 April 2026; report labelled 2025-26)
- Source: Chinafy, State of Global Website Performance in China
- URL: https://insights.chinafy.com/ and https://www.chinafy.com/blog/china-website-performance-benchmarks-2026
- Verified 1: 2026-08-29 (fact bank)
- Verified 2: 2026-09-06, both pages fetched, all figures confirmed
- Used in: website-in-china, is-wordpress-blocked-in-china
- Notes: Vendor benchmark with a stated method. Cite with attribution and its own framing. Never cite Chinafy's 2023 marketing figures (Do Not Assert).

## Search engine documentation

### Google generates the title link itself, and truncates it to the device width
- Fact ID: none (researched outside the fact bank)
- Value: Title link generation is "completely automated and takes into account both the content of a page and references to it that appear on the web"; where an issue is detected Google "may try to generate an improved title link from anchors, on-page text, or other sources"; there is no limit on `<title>` length, but "the title link is truncated in Google Search results as needed, typically to fit the device width"; each page needs "distinct text that describes the content of the page in the `<title>` element"
- Vantage point: n/a, not a measurement
- As of: page last updated 10 December 2025
- Source: Google Search Central, Control your title links in Google Search results
- URL: https://developers.google.com/search/docs/appearance/title-link
- Verified 1: 2026-09-10, page fetched, all four statements confirmed on the page with the last-updated date
- Verified 2: 2026-09-10, re-fetched in iteration 8, unchanged
- Used in: upgrade-guide-title-suffix
- Notes: Google documents no character or pixel limit. Any specific number in circulation comes from third-party testing, not from Google. The 52-character house ceiling is ours and must be described as ours.

### Google shows the site name next to a search result
- Fact ID: none (researched outside the fact bank)
- Value: "When Google lists a page in search results, it shows the name of the site the page comes from. This is called the site name." Site names are supported at domain and subdomain level, not at subdirectory level.
- Vantage point: n/a, not a measurement
- As of: page last updated 10 December 2025
- Source: Google Search Central, Site names in Google Search results
- URL: https://developers.google.com/search/docs/appearance/site-names
- Verified 1: 2026-09-10, page fetched, wording confirmed
- Verified 2: 2026-09-10, re-fetched in iteration 8, unchanged
- Used in: upgrade-guide-title-suffix
- Notes: This is the argument for not spending title characters on the brand. It does not say the brand is ignored, only that the site name is shown separately.

## Our own data

### Guide title audit: 132 pages, 132 over the 52-character ceiling
- Fact ID: none (original measurement, not a harness run)
- Value: 33 guide articles per locale across en, fr, es and de, 132 pages. Every one renders a `<title>` over 52 characters. Rendered suffix length 36 (en), 41 (fr), 41 (es), 40 (de). Rendered title shortest/median/longest: 62/81/104 (en), 71/93/120 (fr), 71/93/111 (es), 66/91/116 (de). With the suffix removed, 47 titles are still over 52: 6 en, 14 fr, 15 es, 12 de.
- Vantage point: n/a, not a network measurement. Repository at working-tree state, last commit `28bf5de`.
- As of: 2026-09-10
- Source: ChinaWebFoundry title audit
- URL: none, internal
- Verified 1: 2026-09-10, source pass over the 132 markdown files plus the locale suffix from `src/i18n/ui.ts` and `src/layouts/GuideLayout.astro`
- Verified 2: 2026-09-10, built-output pass over `<title>` in `.vercel/output/static/`, 132 pages found, 132 over. Agrees with the source pass.
- Used in: upgrade-guide-title-suffix
- Notes: Raw HTML counts run longer than character counts where Astro escapes an apostrophe to `&#39;` (the French ICP title reads 124 raw against 120 as a reader sees it). Decode entities before counting. Figures go stale the moment the 47 rewrites land: recount after the T6-01 publish.

### Google Fonts from a mainland datacentre (fonts.googleapis.com, fonts.gstatic.com)
- Fact ID: F6
- Value: 72 of 72 completions each. fonts.googleapis.com 111ms median TTFB, 137ms p95. fonts.gstatic.com 102ms median, 121ms p95
- Vantage point: Alibaba Cloud (阿里云) instance, cn-zhangjiakou. Sampled every 10 minutes for 12 hours, 30-second timeout, 72 samples per resource
- As of: 28 August 2026
- Source: 21YunBox, *A Day of Third-Party Requests From Inside China*
- URL: https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html
- Verified 1: 2026-09-06 (fact bank, entry marked CORRECTED 6 September)
- Verified 2: 2026-09-10, page fetched twice, method section and both result tables read
- Used in: upgrade-is-wordpress-blocked-in-china (T6-02 draft), wordpress-plugins-china (A3 draft)
- Notes: **The fact bank says 29 August and 73 of 73. The source says 28 August and 72 of 72.** Source wins, same precedent as F19. PLAN.md section 4 needs correcting. Never cite this figure without the paired consumer row below: alone it is the flat correction the Do Not Assert list forbids.

### Google Fonts from a Beijing consumer line (fonts.googleapis.com, fonts.gstatic.com)
- Fact ID: F6
- Value: fonts.googleapis.com requested 54 times, 0 answered. fonts.gstatic.com requested 6 times, 0 answered
- Vantage point: Beijing China Mobile (中国移动) residential broadband line, 88 real websites, 264 page loads
- As of: 30 August 2026
- Source: 21YunBox, *A Day of Third-Party Requests From Inside China*
- URL: https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html
- Verified 1: 2026-09-06 (fact bank)
- Verified 2: 2026-09-10
- Used in: upgrade-is-wordpress-blocked-in-china (T6-02 draft), wordpress-plugins-china (A3 draft)
- Notes: **The fact bank dates this 28 August and says only "Beijing residential broadband". The source says 30 August and names China Mobile.** Source wins. The counts, 0 of 54 and 0 of 6, match the fact bank exactly. Always cite paired with the datacentre row above.

### Google Tag Manager, both vantage points
- Fact ID: F3 (sharpened)
- Value: 72 of 72 at 118ms median, 143ms p95 from the datacentre. 112 requests, 0 answered, from the consumer line
- Vantage point: Alibaba Cloud (阿里云) cn-zhangjiakou, 28 August 2026; Beijing China Mobile (中国移动) residential, 30 August 2026
- As of: 28 and 30 August 2026
- Source: 21YunBox, *A Day of Third-Party Requests From Inside China*
- URL: https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html
- Verified 1: 2026-09-10 (first logging, this run)
- Verified 2: 2026-09-10 (same page, second fetch with a different query)
- Used in: upgrade-is-wordpress-blocked-in-china (T6-02 draft), wordpress-plugins-china (A3 draft)
- Notes: F3 calls GTM "intermittent". Each vantage point gave the same answer on every attempt, so the shape is a split, not intermittency. F34 and the T6-05 upgrade of google-analytics-china should use this wording. The separate F3 point stands: the beacon to google-analytics.com fails either way.

### reCAPTCHA, both vantage points
- Fact ID: F2
- Value: 0 of 72 from the datacentre, 0 of 18 from the consumer line
- Vantage point: Alibaba Cloud (阿里云) cn-zhangjiakou, 28 August 2026; Beijing China Mobile (中国移动) residential, 30 August 2026
- As of: 28 and 30 August 2026
- Source: 21YunBox, *A Day of Third-Party Requests From Inside China*
- URL: https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html
- Verified 1: 2026-08-29 (fact bank)
- Verified 2: 2026-09-10
- Used in: upgrade-is-wordpress-blocked-in-china (T6-02 draft), wordpress-plugins-china (A3 draft)
- Notes: Confirms F2's blocked verdict from two independent vantage points, which most circulating verdicts do not have. Says nothing about the `www.recaptcha.net` workaround; F2's own warning to retest that before publishing it still stands. Useful for T2-03.

### cdn.jsdelivr.net, both vantage points
- Fact ID: F7 (corrected)
- Value: 72 of 72 at 660ms median, 1,757ms p95 from the datacentre. 36 of 36 from the consumer line
- Vantage point: Alibaba Cloud (阿里云) cn-zhangjiakou, 28 August 2026; Beijing China Mobile (中国移动) residential, 30 August 2026
- As of: 28 and 30 August 2026
- Source: 21YunBox, *A Day of Third-Party Requests From Inside China*
- URL: https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html
- Verified 1: 2026-08-29 (fact bank)
- Verified 2: 2026-09-10
- Used in: upgrade-is-wordpress-blocked-in-china (T6-02 draft), wordpress-plugins-china (A3 draft)
- Notes: **F7 says "493ms quiet hour to 1,086ms peak, p95 1,780ms". The p95 matches within 23ms; the central figure does not.** Source wins. jsDelivr is the one host in this set that completes from a home line, which is worth keeping separate from cdnjs and unpkg in copy.

## T6-05 entries, 17 September 2026

Ten entries logged for `upgrade-google-analytics-china`. Every one was fetched
twice on 17 September 2026: check 1 during research, check 2 in iteration 8
with a differently worded query against the same URL, before the draft was
finished. All thirteen source fetches passed check 2 with no change.

**Read this before citing F34 again.** The fact bank credits five timings to
"21YB", and the source key defines 21YB as the 21YunBox study *A Day of
Third-Party Requests From Inside China*. That study does not test any of the
five tools. It tests five hosts only: fonts.googleapis.com, fonts.gstatic.com,
cdn.jsdelivr.net, www.googletagmanager.com and www.google.com/recaptcha, and
that was re-confirmed by fetch on 17 September 2026. The F34 figures are real
but they live on 21YunBox's per-tool support pages under
`https://www.21cloudbox.com/support/<tool>-china.html`, each with its own
"Reviewed" date. The URLs are below so no future run has to find them again.

### Google Analytics collection endpoint blocked from mainland China
- Fact ID: F3 (verdict half)
- Value: 100% blocked, 1 of 1 conclusive test failed in the last 90 days
- Vantage point: n/a, GreatFire reachability verdict, not a latency figure
- As of: 24 July 2026
- Source: GreatFire
- URL: https://en.greatfire.org/https/www.google-analytics.com
- Verified 1: 2026-09-17
- Verified 2: 2026-09-17 (re-fetched in iteration 8)
- Used in: upgrade-google-analytics-china (T6-05 draft)
- Notes: Pairs with the entry below. Together they are an independent
  confirmation of F3's mechanism: the container host answers and the
  collection host does not, so the data is lost either way.

### Tag manager host NOT blocked from mainland China
- Fact ID: F3 (sharpened, verdict half)
- Value: Not blocked. All 1 recent conclusive test connected normally, 0 of 1
  disrupted in the last 90 days
- Vantage point: n/a, GreatFire reachability verdict
- As of: 24 July 2026
- Source: GreatFire
- URL: https://en.greatfire.org/https/www.googletagmanager.com
- Verified 1: 2026-09-17
- Verified 2: 2026-09-17
- Used in: upgrade-google-analytics-china (T6-05 draft)
- Notes: F3 calls GTM "intermittent". GreatFire says not blocked and the
  21YunBox study says 72 of 72 from a datacentre and 0 of 112 from a consumer
  line. Three sources, one shape: a split, not intermittency. Never cite this
  without the collection-endpoint entry above, or it reads as "GTM works".

### Hotjar, disrupted on GreatFire and completing from a datacentre
- Fact ID: F34
- Value: GreatFire, static.hotjar.com 100% disrupted, 1 of 1 conclusive test,
  last tested 2026-08-18. 21YunBox, 3 of 3 page loads completed, median 487ms
  time to first byte, largest contentful paint 1,660ms, measured 2026-08-30
- Vantage point: 21YunBox figure from a probe inside mainland China, Alibaba
  Cloud (阿里云) cn-zhangjiakou. GreatFire's own vantage point is not stated
  on its page and must not be asserted
- As of: 18 August 2026 (GreatFire) and 30 August 2026 (21YunBox)
- Source: GreatFire; 21YunBox
- URL: https://en.greatfire.org/https/static.hotjar.com
- URL: https://www.21cloudbox.com/support/hotjar-china.html
- Verified 1: 2026-09-17
- Verified 2: 2026-09-17
- Used in: upgrade-google-analytics-china (T6-05 draft)
- Notes: **F34 dates the GreatFire verdict 2026-08-20. The source says
  2026-08-18. Source wins**, same precedent as F19 and F6. F34 also omits the
  21YunBox completion entirely, which makes Hotjar look like a flat block. It
  is a vantage-point split and must be published as one. The 21YunBox page
  also states Hotjar hosts primarily on Google Cloud Platform, which is where
  F34's "hosted on Google Cloud" comes from.

### Meta Pixel blocked from mainland China
- Fact ID: F34
- Value: connect.facebook.net blocked
- Vantage point: n/a, GreatFire reachability verdict
- As of: 27 May 2026
- Source: GreatFire
- URL: https://en.greatfire.org/https/connect.facebook.net
- Verified 1: 2026-09-17
- Verified 2: 2026-09-17
- Used in: upgrade-google-analytics-china (T6-05 draft)
- Notes: **F34 dates this 2026-07-27. The source says 2026-05-27. Source
  wins.** Now older than 90 days, so the copy carries the date visibly and
  claims nothing about the current state.

### Amplitude: both hostnames answer, and the April split no longer reproduces
- Fact ID: F34 (**CORRECTED, the bank's claim has expired**)
- Value: cdn.amplitude.com not blocked, all 1 recent conclusive test connected
  normally, last tested 2026-09-14. api.amplitude.com not blocked, all 1
  recent conclusive test connected normally, 0 of 1 disrupted in the last 90
  days, last tested 2026-09-10. Domain-wide across 13 tested amplitude.com
  URLs: 1 blocked, 3 disrupted, 9 accessible
- Vantage point: n/a, GreatFire reachability verdicts
- As of: 10 and 14 September 2026
- Source: GreatFire
- URL: https://en.greatfire.org/https/cdn.amplitude.com
- URL: https://en.greatfire.org/https/api.amplitude.com
- Verified 1: 2026-09-17
- Verified 2: 2026-09-17
- Used in: upgrade-google-analytics-china (T6-05 draft)
- Notes: **F34 says cdn.amplitude.com reachable with api.amplitude.com blocked
  (GF 2026-04-22), and the T6-05 brief calls that "the most useful single fact
  on the page". It did not reproduce.** Both hosts read not blocked five
  months later. Do not publish the split as a current verdict in any piece.
  The split-host FAILURE MODE is still worth teaching and is not time
  sensitive: a script host and an event host can get different answers, and
  when they do the dashboard reads as healthy while nothing arrives. Both
  readings rest on one conclusive test each, which is thin, and the
  domain-wide spread says the domain is genuinely mixed. PLAN.md section 4
  needs F34 corrected.

### Microsoft Clarity answers then stalls
- Fact ID: F34
- Value: 21YunBox, first byte in a median 541ms, none of the 3 runs finished
  within 60 seconds. GreatFire, www.clarity.ms not blocked, 1 recent
  conclusive test, last tested 2026-09-15
- Vantage point: Alibaba Cloud (阿里云) cn-zhangjiakou, 3 runs, 60-second
  abandon
- As of: 28 August 2026 (21YunBox), 15 September 2026 (GreatFire)
- Source: 21YunBox; GreatFire
- URL: https://www.21cloudbox.com/support/microsoft-clarity-china.html
- URL: https://en.greatfire.org/https/www.clarity.ms
- Verified 1: 2026-09-17
- Verified 2: 2026-09-17
- Used in: upgrade-google-analytics-china (T6-05 draft)
- Notes: **Clarity is not blocked.** The host answers and the load never
  finishes, which is F33's "answers then hangs". Calling it blocked would be
  wrong in the exact direction this plan exists to correct.

### Mixpanel answers then stalls
- Fact ID: F34
- Value: 21YunBox, zero of three runs finished within 60 seconds, first byte
  in a median 391ms. GreatFire, api.mixpanel.com not blocked, last tested
  2026-04-17, page states "No recent tests"
- Vantage point: Alibaba Cloud (阿里云) cn-zhangjiakou, 3 runs, 60-second
  abandon
- As of: 28 August 2026 (21YunBox), 17 April 2026 (GreatFire)
- Source: 21YunBox; GreatFire
- URL: https://www.21cloudbox.com/support/mixpanel-china.html
- URL: https://en.greatfire.org/https/api.mixpanel.com
- Verified 1: 2026-09-17
- Verified 2: 2026-09-17
- Used in: upgrade-google-analytics-china (T6-05 draft)
- Notes: Same shape as Clarity. The GreatFire verdict is five months old and
  the page says so itself, so it is usable only for "not on a block list",
  never as a current verdict.

### Segment completes slowly from a mainland datacentre
- Fact ID: F34
- Value: three of three runs completed, first byte 900ms on one run and
  1,084ms on another
- Vantage point: Alibaba Cloud (阿里云) cn-zhangjiakou
- As of: 28 and 30 August 2026 (page reviewed 2026-08-29)
- Source: 21YunBox
- URL: https://www.21cloudbox.com/support/segment-china.html
- Verified 1: 2026-09-17
- Verified 2: 2026-09-17
- Used in: upgrade-google-analytics-china (T6-05 draft)
- Notes: F34 renders this as a range, "completes at 900 to 1,084ms". The page
  gives two separate runs on two dates, not a range across a sample. Cite it
  as two runs. The "Reviewed" date (29 Aug) is not the measurement date.

### Plausible completes from a mainland datacentre
- Fact ID: F34, F41
- Value: three of three runs completed, first byte in a median 550ms, largest
  contentful paint 1,208ms
- Vantage point: Alibaba Cloud (阿里云) cn-zhangjiakou
- As of: 28 August 2026
- Source: 21YunBox
- URL: https://www.21cloudbox.com/support/plausible-china.html
- Verified 1: 2026-09-17
- Verified 2: 2026-09-17
- Used in: upgrade-google-analytics-china (T6-05 draft)
- Notes: Datacentre only. No consumer-line figure exists for Plausible in any
  source read so far, so never present 550ms as a visitor experience.

### Matomo cloud completes from a mainland datacentre, and is self-hostable
- Fact ID: F34, F41
- Value: three of three runs completed, first byte in a median 516ms, largest
  contentful paint 1,532ms
- Vantage point: Alibaba Cloud (阿里云) cn-zhangjiakou
- As of: page reviewed 29 August 2026. The measurement date is not separately
  stated on the page, so cite the review date and say so
- Source: 21YunBox
- URL: https://www.21cloudbox.com/support/matomo-china.html
- Verified 1: 2026-09-17
- Verified 2: 2026-09-17
- Used in: upgrade-google-analytics-china (T6-05 draft)
- Notes: The page also states Matomo can be self-hosted on an endpoint inside
  the mainland, which removes the reachability question and much of the
  cross-border question together. That is the F41 argument in the vendor's
  own words.

### PIPL Article 39: separate consent for a cross-border transfer
- Fact ID: F3 (the second, independent reason)
- Value: a handler providing personal information outside the PRC must inform
  the individual of the overseas recipient's name and contact details, the
  purpose and method of handling, the categories of personal information and
  how to exercise rights against that recipient, and must obtain the
  individual's separate consent (并取得个人的单独同意)
- Vantage point: n/a, statute
- As of: adopted 20 August 2021, in force 1 November 2021
- Source: Cyberspace Administration of China (中央网络安全和信息化委员会办公室),
  中华人民共和国个人信息保护法
- URL: https://www.cac.gov.cn/2021-08/20/c_1631050028355286.htm
- Verified 1: 2026-09-17
- Verified 2: 2026-09-17 (effective date re-confirmed against Article 74)
- Used in: upgrade-google-analytics-china (T6-05 draft)
- Notes: The regulator's own copy of the text, chosen over law-firm and trade
  write-ups per the source hierarchy in CLAUDE.md. npc.gov.cn failed TLS to
  this environment's fetcher and two gov.cn URLs returned 403 and 404; the CAC
  copy is primary and is the better cite regardless. Article 38's four
  transfer conditions are on the same page if a later piece needs them. The
  March 2024 CAC Provisions relaxing the thresholds were NOT verified this run
  (loc.gov and ansi.org both returned 403); any piece wanting the 100,000 or
  1,000,000 individual exemption thresholds must source them first.

## Checks attempted and not completed

Logged so the next run does not spend the time again, and so no piece cites
these as verified twice.

### ajax.googleapis.com, no first byte before a 60-second abandon
- Fact ID: F1
- Verified 1: 2026-08-29 (fact bank)
- Verified 2: **not completed, 2026-09-10.** The 21YunBox page does not test this host, and `harness/latest.json` is empty, so the ChinaWebFoundry probe record the fact bank refers to is not in the repo to re-read.
- Effect: kept out of the T6-02 measurement table. The live article's existing paragraph was left byte-identical rather than restated. Probe this host before T2-01 (week 2) and log the run_id here.

### wordpress.org rate limits mainland IPs, HTTP 429
- Fact ID: F8
- Verified 1: 2026-08-29 (fact bank)
- Verified 2: **not completed, 2026-09-10.** Primary source is WordPress meta trac ticket #5106, *About 429 Problems in China. We want to solve it by ourselves.* Two independent searches return its official replies ("Several Chinese network sources are rate-limited on certain services due to a high level of abuse"; WordPress.org "won't be providing any form of whitelisting or an official way to replicate WordPress.org through a Chinese proxy"). `meta.trac.wordpress.org` returns HTTP 403 to the fetcher on `/ticket/5106` and on `?format=tab`, so the ticket date is unconfirmed and "documented since October 2019" cannot be stood up.
- Effect: no citation added to the live article, and its wordpress.org section was left out of scope. Retry from a client that trac will serve, or find the same statement in a dated make.wordpress.org post.

### cdnjs.cloudflare.com and unpkg.com timings
- Fact ID: F7
- Verified 1: 2026-08-29 (fact bank), 478ms and 824ms, no vantage point on record
- Verified 2: **not completed, 2026-09-10.** The 21YunBox page tests neither host.
- Effect: the figures were **cut** from the live article's dependency table rather than republished, because a latency figure with no named vantage point is not a figure. The row now reads "Both complete. Untested from a consumer line". Restore the numbers only with a vantage point and a date attached.

### ajax.googleapis.com, no first byte before a 60-second abandon (second failure)
- Fact ID: F1
- Verified 1: 2026-08-29 (fact bank)
- Verified 2: **not completed, 2026-09-11.** Same two reasons as on 2026-09-10. `harness/latest.json` still reads an empty `rows` array, so the ChinaWebFoundry probe record is not in the repo to re-read, and a fresh fetch of the 21YunBox study confirmed again that it tests five hosts only (fonts.googleapis.com, fonts.gstatic.com, cdn.jsdelivr.net, www.googletagmanager.com, www.google.com/recaptcha) and not this one.
- Effect: the timing was **cut** from `wordpress-plugins-china`. The article carries GreatFire's dated blocked verdict instead and argues the render-blocking mechanism, which needs no measurement of its own. Two consecutive drafts have now been written around this gap. Probe `ajax.googleapis.com` in the first harness run and log the run_id here.

### cdnjs.cloudflare.com and unpkg.com timings (second failure)
- Fact ID: F7
- Verified 1: 2026-08-29 (fact bank), 478ms and 824ms, no vantage point on record
- Verified 2: **not completed, 2026-09-11.** The 21YunBox study still tests neither host.
- Effect: same decision as the T6-02 run, kept deliberately consistent so one figure does not appear two ways. `wordpress-plugins-china` names both hosts, states in prose that we have no timing carrying a named test location and a date, and its replacement table reads "Reachable, no dated measurement we can stand behind". Restore the numbers only with a vantage point attached.

### jsDelivr lost its China ICP filing in December 2021
- Fact ID: F7
- Verified 1: 2026-08-29 (fact bank)
- Verified 2: **not completed, 2026-09-11.** The primary source is jsDelivr's own post on X (status 1472870623051456522), and x.com is not fetchable by this environment. The two jsDelivr GitHub issues that surface (#18176, opened 11 September 2019; #18407, opened 21 May 2022) carry no dated maintainer statement confirming the revocation.
- Effect: the ICP history was **cut** from `wordpress-plugins-china`. The CDN section reports the measured behaviour and its consequence and asserts no cause. Retry from a client that can read x.com, or find the statement in a dated trade publication.

### LiteSpeed Cache preconnect to fonts.gstatic.com, and the empty user-agent exclusion lists in LiteSpeed Cache and W3 Total Cache
- Fact ID: F18
- Verified 1: 2026-09-04 (fact bank, from a source read)
- Verified 2: **not completed, 2026-09-11.** `plugins.trac.wordpress.org` returns HTTP 403 to the fetcher on `/browser/litespeed-cache/trunk/src/gui.cls.php`. The plugin's public GitHub master (`litespeedtech/lscache_wp`, `src/gui.cls.php`) contains no match for "gstatic", "preconnect" or "dns-prefetch", so the preconnect claim is not merely unconfirmed, it is absent from where the fact bank implies it lives.
- Effect: both claims **cut**. Only the two version numbers reached `wordpress-plugins-china`, and the caching section rests on WP Rocket and QUIC.cloud instead. Re-read both plugin sources from a local install before F18 is cited again, and correct PLAN.md if the preconnect is genuinely absent. **Superseded 9 October 2026:** both plugins were re-read from the release zips; the empty lists hold and the preconnect is present in `src/optimize.cls.php` behind "Load Google Fonts Asynchronously" (default off). See "T6-10 entries, 9 October 2026".

### The www.recaptcha.net workaround
- Fact ID: F2
- Verified 1: 2026-08-29 (fact bank), last confirmed February 2026
- Verified 2: **not attempted, 2026-09-11.** F2 itself says the datapoint should be retested before it is published as a fix. It was not retested this run.
- Effect: `wordpress-plugins-china` publishes reCAPTCHA's blocked verdict from both vantage points and offers domestic captcha replacements. It does not mention the host swap. Retest before any piece prints it, T2-03 included.

### Baidu favours mainland-hosted sites, and prefers .cn
- Fact ID: none (unsourced lines on `wordpress-hosting-china`, flagged by the T6-03 draft run on 29 September 2026)
- Verified 1: **no source found, 2026-10-02.** A Chinese-language search for an official Baidu statement (百度搜索资源平台, 服务器 境外, 备案, 排名, .cn) returned only SEO forum and blog analyses, one of them a 2017 sample of ranking drops. No Baidu documentation states either claim.
- Verified 2: not applicable, nothing to re-fetch.
- Effect: both claims **cut** from `wordpress-hosting-china` in en, fr, es and de on 2 October 2026 (the Hong Kong paragraph and the .cn FAQ answer). Added to the Do Not Assert list in PLAN.md section 4. Argue from what is documented instead: crawl reachability, the filing, and speed from mainland networks.

### Commercial ICP licence "60 to 90 working days at national level"
- Fact ID: F26
- Verified 1: **superseded, 2026-10-02.** The twice verified entry "Value-added telecoms licence: 60 days of review from acceptance" (Shanghai Communications Administration, 1 June 2015) is the only regulator page found. The 60 to 90 working day figure has no source.
- Effect: the figure **cut** from `/website-in-china/` and its fr, es and de pages on 2 October 2026; the twelve to eighteen week planning figure stays, as ours. F26 corrected in PLAN.md section 4.

## A3 recovery checks, 15 September 2026

The entries above retain their original verification history. These checks
apply to the repaired wordpress-plugins-china draft. Direct HTTP fetches
returned 200 in two separate rounds on 15 September 2026. Raw responses are
saved under editorial/logs/runs/2026-09-15-a3-quality/source-<id>-<round>.txt.

| Fact | Source URL | Date and claim confirmed | Verified 1 | Verified 2 |
|---|---|---|---|---|
| F2, F3, F6, F7 | https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html | 28 August 2026 Alibaba Cloud cn-zhangjiakou and 30 August 2026 Beijing China Mobile residential results; five paired host rows, counts, median TTFB and jsDelivr p95 unchanged | 2026-09-15 | 2026-09-15 |
| F1 verdict only | https://en.greatfire.org/https/ajax.googleapis.com | One conclusive failed mainland test, 22 August 2026; no CWF latency retained | 2026-09-15 | 2026-09-15 |
| F4 verdict only | https://en.greatfire.org/https/secure.gravatar.com | Blocked verdict, last tested 31 August 2026 in direct live HTML; older web-cache snapshot rejected | 2026-09-15 | 2026-09-15 |
| F10 | https://github.com/elementor/elementor/issues/32838 | 18 September 2025 announcement: local Google Fonts disabled by default, Performance menu control | 2026-09-15 | 2026-09-15 |
| F11 | https://raw.githubusercontent.com/WordPress/WordPress/master/wp-includes/script-loader.php | Source read 15 September 2026; Open Sans and Noto Serif compatibility registrations, no longer used by core | 2026-09-15 | 2026-09-15 |
| F17 | https://docs.wp-rocket.me/article/1529-remove-unused-css | Updated 1 June 2026; API visits submitted URLs and requires public accessibility | 2026-09-15 | 2026-09-15 |
| Adjacent to F18 | https://docs.quic.cloud/services/imageopt/ | 6 April 2026; image batches processed on service nodes. Does not establish processing geography or mainland reachability | 2026-09-15 | 2026-09-15 |
| Script mechanism | https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script | Updated 9 May 2026; classic scripts without async/defer/module behaviour block parsing by default; rendering is distinct | 2026-09-15 | 2026-09-15 |

Corrections to reuse guidance:

- The earlier QUIC.cloud entry title says "out of the country". The cited
  documentation proves service processing, not the country where a job runs.
  Do not reuse the geography claim without separate evidence.
- cdnjs and unpkg have no complete dated, named-vantage record in this ledger.
  The repaired A3 labels them unverified and removes the reachable verdict.
- jsDelivr residential completions establish reachable, without a residential
  latency figure. A3 no longer labels that residential sample slow.
- Removed optional F18 version trivia and the unchecked Font Library, Divi
  controls and mirror compatibility details from A3. The existing F18 source
  limitations remain unresolved. No new measurement or harness row was made.
- Omitted the older WP Rocket blog citation because the June 2026 primary
  documentation supports the retained mechanism directly.

## A9 entries, 18 September 2026

Nine entries logged for `wordpress-speed-china` (A9, T1). Every one was
fetched twice on 18 September 2026: check 1 during research, check 2 in
createarticle iteration 8 with a differently worded query against the same
URL, before the draft was finished. All eleven URLs cited by the piece passed
check 2 with no claim cut or reworded, the second clean run in a row.

### Cloudflare China Network: Enterprise, JD Cloud, ICP per apex, content vetting
- Fact ID: F30 (seeded 2026-09-06, never fetched until now)
- Value: "The Cloudflare China Network is available as a separate subscription
  for customers on an Enterprise plan." Mainland data centres are operated by
  "Cloudflare's partner JD Cloud". "You must have a valid ICP (Internet
  Content Provider) filing or license for each apex domain you wish to onboard
  to Cloudflare." And "JD Cloud, our partner, is required to review and vet the
  content of all domains on their network before China Network is enabled."
  Vetting needs the customer and company name, the domain, the ICP number, a
  description of the domain's content and a signed self attestation letter;
  enablement then takes roughly 24 to 48 hours.
- Vantage point: n/a, not a measurement
- As of: 30 April 2026 (overview page) and 17 April 2026 (get-started page)
- Source: Cloudflare developer documentation
- URL: https://developers.cloudflare.com/china-network/ and
  https://developers.cloudflare.com/china-network/get-started/
- Verified 1: 2026-09-18, both pages fetched, all four claims confirmed
- Verified 2: 2026-09-18, both pages re-fetched in iteration 8 with different
  queries, all four sentences verbatim and both last-updated dates unchanged
- Used in: wordpress-speed-china (A9 draft)
- Notes: This stands up **all four parts of F30** from the vendor's own dated
  pages, which the seeded entry never had. The fact bank's wording "requires
  JD Cloud content review before onboarding" is confirmed almost verbatim. The
  separate F30 claim about what the free and standard plans do (nearest
  overseas edge, typically Hong Kong, Japan or the US west coast) is **not**
  covered by these two pages and rests on the fact bank; A9 states it in prose
  without a blockquote for that reason.

### TCP handshake and request count as latency multipliers
- Fact ID: none (researched outside the fact bank; supports the A9 brief's
  "handshake count" and "payload" causes)
- Value: "Connecting is the time it takes for a TCP handshake to complete.
  Like DNS, the greater the number of server connections needed, the more time
  is spent creating server connections." And "The greater the number and size
  of these requests, the greater the impact of high latency on user
  experience."
- Vantage point: n/a, mechanism not measurement
- As of: page last modified 25 February 2025
- Source: MDN Web Docs, *Understanding latency*
- URL: https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Understanding_latency
- Verified 1: 2026-09-18
- Verified 2: 2026-09-18, re-fetched in iteration 8, both sentences verbatim,
  last-modified date unchanged
- Used in: wordpress-speed-china (A9 draft)
- Notes: This is the citable spine of causes three and four. It says nothing
  about TLS handshake cost, so **no TLS round-trip claim may rest on it.** The
  adjacent MDN page below was checked for that and does not carry it either.

### Opening a TCP connection is itself expensive
- Fact ID: none (researched outside the fact bank)
- Value: "opening each TCP connection is a resource-consuming operation.
  Several messages must be exchanged between the client and the server.
  Network latency and bandwidth affect performance when a request needs
  sending."
- Vantage point: n/a
- As of: page last modified 11 September 2026
- Source: MDN Web Docs, *Connection management in HTTP/1.x*
- URL: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x
- Verified 1: 2026-09-18
- Verified 2: not needed, the claim was **not used** in A9
- Used in: none
- Notes: Logged so the next run does not research it again. Checked
  specifically for a TLS handshake round-trip statement and **it is not on
  this page.** Any piece wanting to say "TLS costs another round trip" must
  source it somewhere else first.

### The delivery-layer mechanism, in the vendor's own words
- Fact ID: none (researched outside the fact bank; the A9 brief's fairness
  requirement)
- Value: Chinafy "first creates a 'China-specific' version of your site"; the
  mirrored version "is the one that is then managed & modified"; blocked or
  slow resources are replaced "with China equivalents or removing those that
  are blocked"; delivery runs over "near-China content delivery networks
  (CDNs)"; "Geo-IP based routing is then implemented on the DNS or CDN level
  of your site to ensure that only China visitors will be sent to the Chinafy
  version"; and "Dynamic requests (e.g. transactions) also return to your
  original site's origin to ensure that real-time information is provided to
  visitors in China."
- Vantage point: n/a, a product description
- As of: **no publication or updated date on the page.** Copyright line reads
  2025. Read 18 September 2026.
- Source: Chinafy product documentation
- URL: https://www.chinafy.com/how-chinafy-works
- Verified 1: 2026-09-18
- Verified 2: 2026-09-18, re-fetched, the dynamic-requests sentence verbatim
  and all four mechanism elements still present, still undated
- Used in: wordpress-speed-china (A9 draft)
- Notes: **SPEC says a source with no date is not a source.** The decision
  taken and logged in the A9 run: this is a product description and not a
  figure, so it is used for the mechanism only, cited with the read date
  rather than a publication date, and the copy says in the source line that
  the page is undated. **No figure from this page is published.** Their "~75%
  of the most blocked or slow resources" and "1200+ resources" are vendor
  marketing numbers with no method, adjacent to the 2023 figures on the Do Not
  Assert list, and must stay out. This entry describes a product, never
  reachability, and never a motive or outcome (F43 rule).

### Chinafy 2026 benchmark, rechecked and one figure added
- Fact ID: F31
- Value: as already logged (614 sites, 11 verticals, WebPageTest by
  Catchpoint from Beijing, Virginia and London, Chrome on cable; 66.4% failed
  in Beijing; median visually complete 17.2s; 44% of the Beijing tests timed
  out; TTFB 1.4s against 0.35s and 0.31s), **plus a figure not previously in
  this ledger: 61.9% of sites take 10 or more seconds to load completely in
  Beijing.**
- Vantage point: Beijing, Virginia and London WebPageTest nodes
- As of: April 2026
- Source: Chinafy, State of Global Website Performance in China
- URL: https://insights.chinafy.com/ (the figures) and
  https://www.chinafy.com/blog/china-website-performance-benchmarks-2026
  (the post, dated 14 April 2026)
- Verified 1: 2026-09-18, all nine method and figure elements confirmed
- Verified 2: 2026-09-18, re-fetched with a per-figure confirmation query, all
  nine confirmed again
- Used in: website-in-china, is-wordpress-blocked-in-china,
  wordpress-speed-china (A9 draft)
- Notes: **Cite insights.chinafy.com, not the blog post.** The blog post
  carries the 614 sites, the three locations, a "2 in 3 failed" restatement
  and the 4 to 4.5x TTFB line, but **not** the 66.4%, the 17.2s or the 44%,
  which live only on the insights page. A9 cites the insights URL for that
  reason. The 61.9% figure was found this run and is not used in A9; it is
  logged for T4 and B-cluster pieces. Vendor benchmark with a stated method:
  always attributed and always framed as the vendor's. **Never cite Chinafy's
  2023 marketing figures** (Do Not Assert).

### ajax.googleapis.com blocked verdict, rechecked
- Fact ID: F1 (verdict half only)
- Value: blocked. "100% of the last 1 conclusive test failed in mainland
  China", last tested 22 August 2026
- Vantage point: GreatFire's mainland test network
- As of: last tested 2026-08-22, unchanged since the 2026-09-11 and
  2026-09-15 checks
- Source: GreatFire
- URL: https://en.greatfire.org/https/ajax.googleapis.com
- Verified 1: 2026-09-18
- Verified 2: 2026-09-18, re-fetched, verdict and test date both unchanged
- Used in: wordpress-plugins-china, wordpress-speed-china (A9 draft)
- Notes: **The domain-wide googleapis.com counts drift.** On 2026-09-11 they
  read 265 blocked, 120 disrupted, 184 accessible of 573 tested; on 2026-09-18
  they read 267, 119, 186 of 576. That is GreatFire's rolling window, not a
  change in the verdict. **Do not publish the domain-wide counts**; A9 uses
  the host verdict and its test date only. The CWF timing half of F1 remains
  unverifiable and stays out (see the failed-checks section).

### ChinaWebFoundry migration and uptime figures, rechecked with a live URL
- Fact ID: F32
- Value: median page load 23.4s on a European origin to 1.2s on a mainland
  origin, and "roughly half of that came from deleting external calls rather
  than from moving the server". Separately: 99.98% uptime over a 90-day
  window, with median response times of 48ms from Beijing, 36ms from Shanghai
  and 61ms from Guangzhou.
- Vantage point: origins named (European, mainland) but the **measurement
  vantage is not published**; the three cities are named but the **carriers
  and the window are not published**
- As of: published 29 August 2026; the guide page updated 11 September 2026
- Source: ChinaWebFoundry
- URL: https://www.chinawebfoundry.com/resources/china-web-guide/is-wordpress-blocked-in-china/
  (the migration pair) and https://www.chinawebfoundry.com/website-in-china/
  (the uptime and response-time figures)
- Verified 1: 2026-09-18, both live pages fetched, both sentences verbatim
- Verified 2: 2026-09-18, both re-fetched in iteration 8, unchanged
- Used in: website-in-china, wordpress-speed-china (A9 draft)
- Notes: **/website-in-china/ is now live and indexable**, M1 having shipped,
  so the uptime figure finally has a public URL. The earlier ledger entry had
  none and cited the services page instead. The missing conditions are still
  missing and A9 says so in the body copy, following the precedent M1 set on
  2026-09-06: the figures are published as ours, with the caveat stated, so
  the same number never appears two ways. **The carrier, city and test date
  behind the 23.4s/1.2s pair are owed by T3-01, and the window behind the
  99.98% by T3-02.**
- **The third F32 figure, the 51-point bounce rate reduction, was deliberately
  NOT used in A9.** It is a behaviour figure rather than a speed figure, and
  PLAN.md section 7 owes it two windows, two dates and a named traffic source,
  which T3-08 will supply. Do not publish it before then.

### 21YunBox paired-vantage study, rechecked for A9
- Fact ID: F6, F7, F3
- Value: unchanged from the entries above. fonts.googleapis.com 72 of 72 at
  111ms median from the datacentre and 0 of 54 from the home line;
  www.googletagmanager.com 72 of 72 at 118ms and 0 of 112;
  cdn.jsdelivr.net 72 of 72 at 660ms and 36 of 36
- Vantage point: Alibaba Cloud (阿里云) cn-zhangjiakou, 28 August 2026;
  Beijing China Mobile (中国移动) residential line, 30 August 2026
- As of: 28 and 30 August 2026
- Source: 21YunBox, *A Day of Third-Party Requests From Inside China*
- URL: https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html
- Verified 1: 2026-09-18
- Verified 2: 2026-09-18, re-fetched, every count and median unchanged, and
  the method confirmed again: 72 samples per cell every ten minutes over
  twelve hours with a 30-second timeout, timeouts counted rather than
  discarded; 88 real websites and 264 page loads on the consumer side
- Used in: upgrade-is-wordpress-blocked-in-china, wordpress-plugins-china,
  wordpress-speed-china (A9 draft)
- Notes: The page now reports the datacentre results as "100%" rather than
  "72 of 72". With 72 samples per cell those are the same statement, and A9
  publishes "72 of 72" so the completions read as n of m and never as a
  percentage of three attempts. Confirmed for the fourth time that the study
  tests **five hosts only** and does not test cdnjs.cloudflare.com,
  unpkg.com or ajax.googleapis.com.

### MDN script element, rechecked for A9
- Fact ID: none (mechanism; supports cause one)
- Value: "Scripts without async, defer or type=\"module\" attributes, as well
  as inline scripts without the type=\"module\" attribute, are fetched and
  executed immediately before the browser continues to parse the page."
- Vantage point: n/a
- As of: page last modified 9 May 2026
- Source: MDN Web Docs, the script element
- URL: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script
- Verified 1: 2026-09-18
- Verified 2: 2026-09-18, re-fetched, sentence verbatim, date unchanged
- Used in: wordpress-plugins-china, wordpress-speed-china (A9 draft)
- Notes: A9 quotes the clause rather than the full sentence, because the
  attribute list reads badly in prose, and keeps "are fetched and executed
  immediately before the browser continues to parse the page" verbatim inside
  the quotation marks. Pairs with the GreatFire verdict to carry cause one
  without needing a measurement of our own.

### A9 checks attempted and not completed

#### Median page weight, for cause four
- Fact ID: none
- Verified 1: **not completed, 2026-09-18.** httparchive.org/reports/page-weight
  returns the report scaffolding only. The "Median Desktop" and "Median
  Mobile" headings are in the HTML; the values are rendered client side and
  are not in the document.
- Effect: **no page-weight figure appears in A9.** Cause four is argued from
  mechanism (the MDN latency page) and from Chinafy's own dated median
  instead. Nothing was estimated. Retry from a client that executes
  JavaScript, or use the HTTP Archive BigQuery export, before any piece
  prints a page-weight number.

#### ajax.googleapis.com, no first byte before a 60-second abandon (third failure)
- Fact ID: F1
- Verified 1: 2026-08-29 (fact bank)
- Verified 2: **not completed, 2026-09-18.** Third consecutive failure, same
  two reasons as 2026-09-10 and 2026-09-11: harness/latest.json still reads
  generated null with an empty rows array, so the ChinaWebFoundry probe record
  the fact bank refers to is not in the repo to re-read, and the 21YunBox
  study still does not test this host.
- Effect: the timing was cut from A9, as it was from
  upgrade-is-wordpress-blocked-in-china and wordpress-plugins-china. Three
  drafts have now been written around this gap. **Probe ajax.googleapis.com in
  the first harness run and log the run_id here.**

#### cdnjs.cloudflare.com and unpkg.com timings (third failure)
- Fact ID: F7
- Verified 2: **not completed, 2026-09-18.** The 21YunBox study still tests
  neither host.
- Effect: A9 does not name either host. Its CDN point rests on jsDelivr, which
  is measured from both vantage points, and on the contrast with Google Hosted
  Libraries. Kept deliberately consistent with the two published pieces so one
  figure never appears two ways.


## 2026-09-22 entries (T2-05 partial draft and T6-06)

Thirty-eight sources fetched twice on 22 September 2026, check 1 during
research and check 2 in iteration 8 with a differently worded question against
the same URL. All passed check 2.

### READ THIS FIRST: the 21YunBox per-host pages cover more than the study does

Three previous runs logged failed check 2 records for F1 and F7 on the grounds
that the 21YunBox study *A Day of Third-Party Requests From Inside China*
"tests five hosts only". That is true of the study and false of 21YunBox. The
T6-05 run found the per-tool support pages at
`https://www.21cloudbox.com/support/<tool>-china.html` on 17 September 2026 and
logged ten of them, but nobody carried the discovery back to the CDN hosts.

All four CDN hosts have a per-host page, and have had since late August 2026.
Before logging any host as unverifiable, check for `/support/<tool>-china.html`
and for `/support/<tool>.html`. Google Hosted Libraries uses the second form.

Three published pieces, `wordpress-plugins-china`,
`upgrade-is-wordpress-blocked-in-china` and `wordpress-speed-china`, were
written around a gap that was not there. They were NOT reopened on 22
September; the next piece in the cluster should pick these citations up.

### Google Hosted Libraries returns no first byte from a mainland datacentre
- Fact ID: F1 (the timing half, unverifiable until now)
- Value: no first byte in any of three runs, each abandoned at the 60-second
  limit. Separately, of twelve Google-owned properties probed the same way,
  eleven produced no response at all
- Vantage point: Alibaba Cloud (阿里云) cn-zhangjiakou, three runs
- As of: 28 August 2026. Page reviewed 30 August 2026
- Source: 21YunBox, Google Hosted Libraries in China
- URL: https://www.21cloudbox.com/support/google-hosted-libraries.html
- Verified 1: 2026-09-22
- Verified 2: 2026-09-22, five separate assertions re-confirmed verbatim
- Used in: javascript-cdn-china (T2-05 partial draft)
- Notes: **This supersedes the three failed check 2 records below.** F1's
  timing half is now sourced. The figure is a page load of the vendor target
  from a named probe, not an isolated probe of the script endpoint; cite it
  that way. It still does NOT clear the harness gate, which requires an
  original ChinaWebFoundry measurement.

### cdnjs.cloudflare.com from a mainland datacentre
- Fact ID: F7
- Value: 3 of 3 runs completed, median 478ms time to first byte, median
  largest contentful paint 1,524ms
- Vantage point: Alibaba Cloud (阿里云) cn-zhangjiakou, three runs
- As of: 28 August 2026. Page reviewed 28 August 2026
- Source: 21YunBox, cdnjs in China
- URL: https://www.21cloudbox.com/support/cdnjs-china.html
- Verified 1: 2026-09-22
- Verified 2: 2026-09-22
- Used in: javascript-cdn-china (T2-05 partial draft)
- Notes: F7's 478ms matches the source exactly. **NO CONSUMER-LINE FIGURE
  EXISTS FOR THIS HOST FROM ANY SOURCE**, confirmed by a second question
  against the same page. Never give cdnjs a consumer-line verdict. This is the
  highest-value probe in the whole harness backlog, because the T2 cluster will
  recommend cdnjs more often than any other host. The page also states that
  Google Hosted Libraries, BootstrapCDN and Font Awesome failed to complete on
  the same probe; BootstrapCDN and Font Awesome are F42 hosts, so that is
  logged here for the harness and is NOT publishable.

### unpkg.com from both vantage points
- Fact ID: F7
- Value: datacentre 3 of 3 completed, median 824ms first byte, LCP 1.2s.
  Consumer line 0 of 3 page loads completed, median 1,026ms first byte
- Vantage point: Alibaba Cloud (阿里云) cn-zhangjiakou 28 August 2026; Beijing
  China Mobile (中国移动) residential broadband 30 August 2026
- As of: 28 and 30 August 2026
- Source: 21YunBox, unpkg in China
- URL: https://www.21cloudbox.com/support/unpkg-china.html
- Verified 1: 2026-09-22
- Verified 2: 2026-09-22, both vantage points re-confirmed verbatim
- Used in: javascript-cdn-china (T2-05 partial draft)
- Notes: F7's 824ms matches exactly. The consumer-line row is new to this
  programme and it is the interesting one: unpkg and jsDelivr are 55ms apart
  from a datacentre and land on opposite sides of the line from a home
  connection. "Answers then stalls" on the consumer line.

### cdn.jsdelivr.net, per-host page (supplements the paired-study entry above)
- Fact ID: F7
- Value: 3 of 3 completed, median 769ms first byte, LCP 2.6s. Separately, over
  a 12-hour sample, direct time to first byte swung from a median 493ms in the
  quietest hour to 1,086ms at the evening peak, 95th percentile 1,780ms
- Vantage point: Alibaba Cloud (阿里云) cn-zhangjiakou
- As of: 28 August 2026
- Source: 21YunBox, jsDelivr in China
- URL: https://www.21cloudbox.com/support/jsdelivr-china.html
- Verified 1: 2026-09-22
- Verified 2: 2026-09-22
- Used in: javascript-cdn-china (T2-05 partial draft)
- Notes: F7's "493ms quiet hour to 1,086ms peak, p95 1,780ms" is confirmed
  verbatim here, which resolves the discrepancy the 2026-09-10 entry flagged
  against the paired study's 660ms. They are different measurements on the same
  host: 660ms is the paired study's 72-sample median, 769ms is this page's
  three-run median, and 493 to 1,086 is the 12-hour swing. No consumer-line
  figure on this page; the paired study's 36 of 36 is the consumer row.

### GreatFire verdicts on the four CDN hosts
- Fact ID: F1, F7 (verdict halves)
- Value: ajax.googleapis.com blocked, "100% of the last 1 conclusive tests
  failed", last tested 2026-08-22. cdnjs.cloudflare.com not blocked, last
  tested 2026-05-25, the page itself adding "We haven't tested it since, so
  this may have changed". unpkg.com not blocked, "All 2 recent conclusive tests
  connected normally", last tested 2026-08-14. cdn.jsdelivr.net not blocked,
  same wording, last tested 2026-08-20
- Vantage point: n/a, reachability verdicts
- As of: as dated per host above
- Source: GreatFire
- URL: https://en.greatfire.org/https/ajax.googleapis.com and the three
  sibling host pages
- Verified 1: 2026-09-22
- Verified 2: 2026-09-22
- Used in: javascript-cdn-china (T2-05 partial draft)
- Notes: **The cdnjs verdict is four months old and the page says so.** Publish
  it only with its date visible. Domain-wide googleapis.com counts continue to
  drift on GreatFire's rolling window (576 tested on 2026-09-22 against 573 on
  2026-09-11); do not publish them.

### jsDelivr lost its China ICP filing, December 2021 (FOURTH FAILED CHECK)
- Fact ID: F7 (the cause half)
- Verified 1: 2026-08-29 (fact bank)
- Verified 2: **not completed, 2026-09-22.** Fourth consecutive failure. The
  primary source is jsDelivr's own post on X, status 1472870623051456522, and
  x.com is not fetchable by this environment. Wikipedia's JSDelivr article says
  only "In China, Quantil is used as the content delivery network, as other
  providers are affected by the Great Firewall", with no date and a bare repo
  reference. GitHub issue jsdelivr/jsdelivr#18176 is dated 11 September 2019
  and carries no maintainer statement, confirming the 2026-09-11 finding.
- Effect: the ICP sentence stays out of T2-05, as it has stayed out of every
  piece. The measurements carry the argument without a cause story. **Stop
  retrying this URL.** If the claim is ever needed, find a dated archive of the
  X post or a dated jsDelivr status-page entry.

### T6-06: forms and chat
- Fact ID: F35 (**CORRECTED IN FOUR PLACES**)
- Value: api2.hcaptcha.com not blocked, "All 1 recent conclusive tests
  connected normally", 2026-09-14. calendly.com not blocked, 2026-06-10.
  widget.intercom.io not blocked, 2026-06-16. static.zdassets.com not blocked,
  2026-04-29. js.driftt.com NOT TESTED, "This URL has not been tested yet".
  embed.typeform.com NOT TESTED. cdn-images.mailchimp.com disrupted, "100% of
  the last 2 conclusive tests showed interference", 2026-09-10
- Vantage point: n/a, reachability verdicts
- As of: as dated per host
- Source: GreatFire
- URL: https://en.greatfire.org/https/api2.hcaptcha.com and siblings
- Verified 1: 2026-09-22
- Verified 2: 2026-09-22
- Used in: upgrade-great-firewall-what-it-blocks (T6-06 draft)
- Notes: **F35 is wrong in four places.** (1) It calls api2.hcaptcha.com
  intermittent and says that matters because it is the endpoint a challenge
  needs; the intermittency does not reproduce. (2) It dates Calendly 18 August;
  the source says 10 June. (3) It says "Drift not blocked"; the WIDGET host,
  js.driftt.com, has never been tested, and the widget host is the one that
  runs in a visitor's browser. A verdict on drift.com is a verdict on the
  marketing site. (4) It lists Intercom and Zendesk as unverified; both now
  have dated verdicts on their real script hosts. Neither is on the F42 eleven,
  so no Do Not Assert bar applies.

### T6-06: the F33 "answers then hangs" measurements
- Fact ID: F33, F34, F35, F38, F39
- Value: Typeform 0 of 3 inside 60s, median 907ms first byte, 2026-08-28.
  Mailchimp 0 of 3 inside 60s, median 812ms, paint 2.0s, 2026-08-28. Wix 0 of 3
  inside 60s, median 532ms, 2026-08-30. Algolia 0 of 3 inside 60s, median
  1,027ms, paint 3.4s, 2026-08-28. Shopify 3 of 3, first byte 575ms, median
  load 3.6s, LCP 1.5s, 2026-08-28. Sentry 3 of 3, 252ms, 2026-08-28. AWS
  CloudFront 3 of 3 at 665ms from the datacentre and 0 of 3 at 743ms from the
  consumer line, 2026-08-28 and 2026-08-30
- Vantage point: Alibaba Cloud (阿里云) cn-zhangjiakou; Beijing China Mobile
  (中国移动) residential for the CloudFront consumer row
- As of: 28 and 30 August 2026
- Source: 21YunBox, per-host China support pages
- URL: https://www.21cloudbox.com/support/typeform-china.html and siblings for
  mailchimp, wix, algolia, shopify, sentry and aws-cloudfront
- Verified 1: 2026-09-22
- Verified 2: 2026-09-22
- Used in: upgrade-great-firewall-what-it-blocks (T6-06 draft)
- Notes: **METHOD CORRECTION THAT AFFECTS EVERY 21YunBox CITATION.** Asked
  directly, six of these pages name no hostname at all. They time a page load
  of the vendor's own website from the named probe. Wix names wix.com in a
  "WEBSITE" field. So these are not measurements of the script endpoint a
  visitor's browser calls; they are a proxy for it. F33 to F39 present them as
  though they were the endpoint. Cite them as timed vendor-site loads, which is
  what T6-06 does. Also: the Matomo measurement date IS stated on its page as
  2026-08-29, which the 2026-09-17 entry recorded as unavailable.

### T6-06: embeds, maps, platforms, infrastructure and payments
- Fact ID: F36, F37, F38, F39, F40 (**CORRECTED IN SEVEN PLACES**)
- Value: disqus.com blocked 2026-09-13, 41 of 43 URLs blocked and 2 disrupted.
  w.soundcloud.com blocked 2026-06-24. open.spotify.com blocked 2026-09-12.
  www.instagram.com blocked 2026-08-30. platform.twitter.com blocked
  2026-07-07. fast.wistia.com not blocked 2026-03-17. events.mapbox.com blocked
  2026-03-12. api.mapbox.com NOT BLOCKED 2026-08-31. tile.openstreetmap.org
  blocked 2026-09-07, all 71 tested openstreetmap.org URLs blocked.
  webflow.com disrupted 2026-08-23. www.squarespace.com NOT BLOCKED 2026-09-12.
  firebase.google.com DISRUPTED 2026-09-14. www.paypal.com not blocked
  2026-05-18, domain-wide 1 blocked, 9 disrupted, 17 accessible of 27
- Vantage point: n/a, reachability verdicts
- As of: as dated per host
- Source: GreatFire
- URL: https://en.greatfire.org/https/disqus.com and siblings
- Verified 1: 2026-09-22
- Verified 2: 2026-09-22
- Used in: upgrade-great-firewall-what-it-blocks (T6-06 draft)
- Notes: **Seven corrections.** (1) F36 dates Disqus 3 September; source says
  13 September, and the split is 41 blocked plus 2 disrupted, not "41 of 43".
  (2) F36 dates X/Twitter 25 April; source says 7 July. (3) F36 dates Wistia 26
  June; fast.wistia.com says 17 March, six months old. (4) **F37 calls
  api.mapbox.com intermittent; it reads not blocked on 31 August.** The
  half-working-map framing no longer holds on current data, though the
  telemetry host is still blocked, so the split survives in a different shape.
  (5) **F38's HTTP/HTTPS split does not reproduce for Squarespace**, which
  reads not blocked on two recent conclusive tests. Webflow still reads
  disrupted. (6) **F39 calls Firebase blocked; GreatFire calls it disrupted.**
  Disrupted is not blocked. F39's "100% packet loss from Shanghai" has no
  fetchable source and was cut. (7) F40 dates PayPal 27 August; source says 18
  May. The 9 disrupted count is right.

### Stripe does not support mainland China
- Fact ID: F40
- Value: mainland China does not appear in Stripe's list of countries where a
  Stripe account can be opened. Hong Kong does
- Vantage point: n/a, vendor documentation
- As of: read 22 September 2026. The page carries no "last updated" date
- Source: Stripe, Global availability
- URL: https://stripe.com/global
- Verified 1: 2026-09-22
- Verified 2: 2026-09-22, with an explicit instruction to ignore the footer
  locale selector
- Used in: upgrade-great-firewall-what-it-blocks (T6-06 draft)
- Notes: **TRAP, and a fetcher fell into it on check 1.** The page's footer
  locale selector lists "Mainland China" and "Hong Kong SAR, China" as language
  options, and a naive read returns "yes, China is supported". The availability
  list is a separate element and does not contain it. Always ask the fetcher to
  ignore the locale selector. `docs.stripe.com/global` is a 404.

### F42 hosts: still no verdict, and one new third-party datapoint
- Fact ID: F42
- Verified 1: n/a
- Verified 2: n/a
- Effect: all thirteen F42 entries appear in T6-06's table as explicitly
  untested, which the work order asks for and the Do Not Assert list permits.
  None carries a verdict. The 21YunBox cdnjs page states that BootstrapCDN and
  Font Awesome both failed to complete on its 28 August 2026 probe, which is
  the first third-party datapoint either host has had in this programme. It is
  logged here for the harness to confirm and is deliberately absent from both
  pieces drafted on 22 September.


## A5 entries, 24 September 2026 (migrate-wordpress-to-china)

Eight new entries and two re-checks for `migrate-wordpress-to-china` (A5, T1).
Every page fetched twice on 24 September 2026: check 1 at research time,
check 2 in createarticle iteration 8 with a different client or a differently
worded query. Ten of ten URLs passed check 2. Alibaba Cloud help-centre pages
show no date in the rendered text; the date below is the page's own
`lastModifiedTime` field, read from the raw HTML.

### A domain on a mainland server cannot open website access until its filing is complete (Alibaba Cloud)
- Fact ID: F25
- Value: "根据工信部要求，域名解析至中国内地服务器必须先完成网站备案，才能正常开通网站访问。" The same page lists a filing held with another provider as a cause of an unreachable site, fixed by 接入备案 (filing transfer).
- Vantage point: n/a, not a measurement
- As of: 4 September 2026 (page lastModifiedTime)
- Source: Alibaba Cloud (阿里云) help centre, 域名/网站无法访问的可能原因及处理方法
- URL: https://help.aliyun.com/zh/dws/support/how-do-i-troubleshoot-the-failures-to-access-a-website-by-using-its-domain-name
- Verified 1: 2026-09-24, WebFetch plus raw HTML, sentence and date confirmed
- Verified 2: 2026-09-24, curl re-fetch, both phrases present, date unchanged
- Used in: migrate-wordpress-to-china
- Notes: Official replacement for the 2022 community article (developer.aliyun.com/article/877910) the F25 entry above relied on. **Neither official page names ports 80 and 443.** The port detail stays attributed to our own projects in copy.

### Unfiled domains on Tencent Cloud mainland resources are intercepted
- Fact ID: F25
- Value: "若域名解析到腾讯云中国境内云资源，都必须先完成 ICP 备案才能操作解析，否则会被腾讯云未备案监测拦截。"
- Vantage point: n/a
- As of: 3 September 2026 16:01:30 (page's last updated time)
- Source: Tencent Cloud (腾讯云) documentation, ICP 备案 是否需要备案
- URL: https://cloud.tencent.com/document/product/243/19630
- Verified 1: 2026-09-24, WebFetch, sentence and date confirmed
- Verified 2: 2026-09-24, WebFetch with a different prompt (the page is client-rendered, curl gets no text), sentence verbatim, date unchanged
- Used in: migrate-wordpress-to-china

### ICP filing review windows and the 30-day public security filing deadline (Alibaba Cloud)
- Fact ID: F26
- Value: Alibaba Cloud initial review "1～2个工作日"; provincial Communications Administration (省级通信管理局) review "一般为1～20个工作日"; "网站/App开通后30天内必须完成公安备案"
- Vantage point: n/a
- As of: 26 August 2026 (page lastModifiedTime)
- Source: Alibaba Cloud (阿里云) help centre, 阿里云ICP备案流程概述
- URL: https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview
- Verified 1: 2026-09-24, WebFetch plus raw HTML, all three confirmed
- Verified 2: 2026-09-24, curl re-fetch, all three phrases present in stripped text
- Used in: website-in-china (review windows, earlier), migrate-wordpress-to-china
- Notes: This supersedes the "page undated" note in the F26 entry above; the page carries a machine-readable date. Planning figure stays 3 to 6 weeks.

### Alibaba Cloud international accounts cannot apply for ICP filing
- Fact ID: F27
- Value: "Alibaba Cloud international site (alibabacloud.com) accounts do not support ICP filing applications (including website ICP filing and app ICP filing)." "To apply for ICP filing, you must register an Alibaba Cloud China site (aliyun.com) account, and ensure that the filing entity is an enterprise registered in the Chinese mainland or a Chinese mainland resident."
- Vantage point: n/a
- As of: 20 August 2026 (page lastModifiedTime)
- Source: Alibaba Cloud help centre (English), ICP filing for enterprises outside the Chinese mainland
- URL: https://help.aliyun.com/en/icp-filing/basic-icp-service/product-overview/icp-filing-application-for-enterprises-outside-the-chinese-mainland
- Verified 1: 2026-09-24, curl, both sentences confirmed
- Verified 2: 2026-09-24, curl re-fetch, both present twice on the page
- Used in: migrate-wordpress-to-china
- Notes: **F27 correction.** The fact bank also says alibabacloud.com "cannot deploy to mainland regions" and that the filing workflow is "Chinese-language only". Neither is on this page or the server page below; the alibabacloud.com copies of these pages serve a bot challenge to both clients. Both claims kept OUT of A5. Do not cite them until a dated Alibaba page states them.

### The filing is made against a mainland Alibaba Cloud server on a subscription of more than 3 months
- Fact ID: F27 (and the "server comes first" step behind F25)
- Value: "you must associate or purchase an Alibaba Cloud server located in the Chinese mainland"; ECS "must be a subscription instance with a total subscription duration of more than 3 months"; Simple Application Server "3 months or longer"
- Vantage point: n/a
- As of: 2 September 2026 (page lastModifiedTime)
- Source: Alibaba Cloud help centre (English), Server and access information check before ICP filing
- URL: https://help.aliyun.com/en/icp-filing/basic-icp-service/user-guide/icp-filing-server-access-information-check
- Verified 1: 2026-09-24, curl, confirmed
- Verified 2: 2026-09-24, curl re-fetch, phrases present
- Used in: migrate-wordpress-to-china

### Simple Application Server builds WordPress from a preset application image
- Fact ID: F28
- Value: "使用预置的WordPress应用镜像，快速搭建WordPress个人博客网站。"
- Vantage point: n/a
- As of: 19 August 2026 (page lastModifiedTime)
- Source: Alibaba Cloud (阿里云) help centre, 快速搭建WordPress个人博客 (轻量应用服务器)
- URL: https://help.aliyun.com/zh/simple-application-server/getting-started/use-application-images-to-quickly-build-websites
- Verified 1: 2026-09-24, curl, confirmed
- Verified 2: 2026-09-24, curl re-fetch, confirmed in stripped text
- Used in: migrate-wordpress-to-china (cited in prose, no blockquote)
- Notes: Supports the positive half of F28 only. "No managed WordPress exists in China" is a negative no vendor page can prove; A5 states it as our own finding ("We haven't found...").

### WordPress.org rate-limits Chinese network sources (meta trac #5106)
- Fact ID: F8
- Value: reporter: "had 429 problems when visiting all subdomains of WordPress"; WordPress.org staff reply the same day: "Several Chinese network sources are rate-limited on certain services due to a high level of abuse and non-legitimate traffic coming from those sources. We won't be providing any form of whitelisting or an official way to replicate WordPress.org through a chinese proxy."
- Vantage point: n/a
- As of: 21 March 2020 (ticket opened and closed that day)
- Source: WordPress.org Meta Trac, ticket #5106, read from the Internet Archive capture of 16 January 2026
- URL: https://web.archive.org/web/20260116133057/https://meta.trac.wordpress.org/ticket/5106 (live https://meta.trac.wordpress.org/ticket/5106 returns HTTP 403 to this machine)
- Verified 1: 2026-09-24, archive capture fetched, both quotes and the timeline dates confirmed
- Verified 2: 2026-09-24, archive capture re-fetched, quotes present
- Used in: migrate-wordpress-to-china
- Notes: **Closes the open item logged on 2026-09-10** ("wordpress.org rate limits mainland IPs, HTTP 429", check 2 not completed). **F8 correction: the date is 21 March 2020, not "October 2019".** Do not print "since October 2019". Substitution: the archive copy of the same page, because trac blocks the fetcher.

### The ICP number must be displayed in the footer, linked to beian.miit.gov.cn
- Fact ID: none
- Value: "ICP 备案成功后，您需要在 ICP 备案成功的网站底部悬挂工信部下发的 ICP 备案号，并生成链接指向 工信部网站：beian.miit.gov.cn"; omission: "由住所所在地省通信管理局责令改正，并处五千元以上一万元以下罚款。"
- Vantage point: n/a
- As of: 12 August 2026 (page lastModifiedTime)
- Source: Alibaba Cloud (阿里云) help centre, ICP备案后为网站App添加备案号
- URL: https://help.aliyun.com/zh/icp-filing/basic-icp-service/the-icp-record-post-processing-1
- Verified 1: 2026-09-24, curl, both sentences confirmed
- Verified 2: 2026-09-24, curl re-fetch, both phrases present
- Used in: migrate-wordpress-to-china

### Value-added telecoms licence: 60 days of review from acceptance (found, not used)
- Fact ID: F26 (licence half)
- Value: "自受理之日起60日内完成审查工作，作出予以批准或者不予批准的决定。"
- Vantage point: n/a
- As of: published 1 June 2015
- Source: Shanghai Communications Administration (上海市通信管理局), 增值电信业务办事指南
- URL: https://shca.miit.gov.cn/bsfw/bszn/dxsc/blcx/art/2020/art_7426922df3754a189aaf4278ff0c7b1d.html
- Verified 1: 2026-09-24, WebFetch, confirmed
- Verified 2: not run; the figure was cut from A5 at createarticle iteration 3, so no second check was owed. Run check 2 before any piece cites it.
- Used in: none
- Notes: The fact bank's "60 to 90 working days, plan 12 to 18 weeks" is not what this page says (60 days, statutory, from acceptance). Reconcile before the licence figure is printed again.

### Re-checks of existing entries, 24 September 2026
- F30 Cloudflare China Network (https://developers.cloudflare.com/china-network/): re-fetched 2026-09-24, "Last updated Apr 30, 2026", Enterprise subscription sentence and the ICP-per-apex sentence present. Third check. Used in: migrate-wordpress-to-china.
- F32 migration pair (https://www.chinawebfoundry.com/resources/china-web-guide/is-wordpress-blocked-in-china/): re-fetched 2026-09-24, "23.4", "1.2 seconds" and "deleting external calls" present. Used in: migrate-wordpress-to-china, with the missing carrier and test date stated in copy. The uptime figures and the 51-point bounce figure were not used.

## T6-03 entries, 29 September 2026 (upgrade-wordpress-hosting-china)

Ten new entries and five re-checks for `upgrade-wordpress-hosting-china`
(T6-03). Every page was fetched twice on 29 September 2026: check 1 at research
time, check 2 in createarticle iteration 8 with a different client (curl
against WebFetch) or a differently worded prompt. Two pages had moved between
24 and 29 September; both are recorded below. One check-1 reading was wrong
and was caught by check 2 (Tencent's WordPress template does not name PHP).

### Vercel has no mainland servers and cannot guarantee availability in mainland China
- Fact ID: F29
- Value: "Vercel has no servers or CDN nodes in mainland China." "China's network controls can block or throttle traffic to foreign domains, including Vercel's .vercel.app subdomains." "... Vercel can't guarantee availability or performance within mainland China." Mitigations: custom domain; self-host fonts and analytics; static mirror on better-routed infrastructure; separate in-country deployment with an ICP licence.
- Vantage point: n/a, not a measurement
- As of: published 3 November 2025, updated 11 September 2026 (datePublished and dateModified in the page's raw HTML)
- Source: Vercel Knowledge Base, "Accessing Vercel-hosted sites from mainland China"
- URL: https://vercel.com/kb/guide/accessing-vercel-hosted-sites-from-mainland-china
- Verified 1: 2026-09-29, WebFetch and curl, all three sentences and both dates confirmed
- Verified 2: 2026-09-29, curl re-fetch, all three sentences present
- Used in: upgrade-wordpress-hosting-china
- Notes: Confirms F29's "November 2025". Print both dates.

### vercel.app blocked in mainland China (GreatFire)
- Fact ID: F29
- Value: https://vercel.app blocked, "100% of the last 4 conclusive tests failed in mainland China", 4/4 in the last 90 days, last test 14 September 2026. Domain summary: "Mostly blocked", 157 tested URLs, 154 blocked, 1 disrupted, 2 no verdict. Interference recorded since 16 October 2021.
- Vantage point: n/a, GreatFire reachability verdict
- As of: 14 September 2026
- Source: GreatFire
- URL: https://en.greatfire.org/https/vercel.app
- Verified 1: 2026-09-29, WebFetch and curl
- Verified 2: 2026-09-29, curl re-fetch, "4 conclusive tests", "2026-09-14", "154 blocked", "157 tested URLs" present
- Used in: upgrade-wordpress-hosting-china
- Notes: F29's "mostly blocked" is the domain summary; the apex itself reads blocked. Recheck after 13 December 2026 (90 days).

### Tencent Cloud Lighthouse WordPress template contents
- Fact ID: F28
- Value: the WordPress application image integrates the Baota (宝塔) Linux panel; the page names Nginx and MariaDB (config path and database password). It does NOT name PHP. "域名指向中国境内服务器的网站，必须进行 ICP 备案".
- Vantage point: n/a
- As of: 22 September 2026 14:39:31 (最近更新时间)
- Source: Tencent Cloud (腾讯云) documentation, 轻量应用服务器 使用 WordPress 应用模板搭建网站
- URL: https://cloud.tencent.com/document/product/1207/45117
- Verified 1: 2026-09-29, WebFetch (its summary added PHP, which is not on the page)
- Verified 2: 2026-09-29, WebFetch with a strict string search: Nginx, MariaDB, 宝塔 present; PHP absent
- Used in: upgrade-wordpress-hosting-china (table cell, no blockquote)
- Notes: The page is client-rendered; curl returns no body text. Do not print PHP as a Tencent claim.

### Huawei Cloud FlexusL WordPress image contents
- Fact ID: F28
- Value: "Ubuntu 24.04操作系统，采用Docker部署，已预置Nginx、MySQL、phpMyAdmin、Docker软件"; "要想通过域名成功访问服务器，必须备案域名"
- Vantage point: n/a
- As of: 21 September 2026 (更新时间)
- Source: Huawei Cloud (华为云) documentation, 使用WordPress快速搭建网站 (Flexus应用服务器L实例)
- URL: https://support.huaweicloud.com/bestpractice-flexusl/practice_application_0001.html
- Verified 1: 2026-09-29, WebFetch
- Verified 2: 2026-09-29, curl, "Ubuntu 24.04", "phpMyAdmin", "2026-09-21" present
- Used in: upgrade-wordpress-hosting-china (table cell)

### Huawei Cloud international accounts cannot apply for ICP filing
- Fact ID: none (the Huawei equivalent of F27)
- Value: "Huawei Cloud international website accounts do not support ICP filing." A Huawei Cloud Chinese mainland website account is required.
- Vantage point: n/a
- As of: 17 July 2024
- Source: Huawei Cloud Help Center (English), Registering an Account and Completing Real-Name Authentication
- URL: https://support.huaweicloud.com/intl/en-us/prepare-icp/icp_02_0047.html
- Verified 1: 2026-09-29, WebFetch
- Verified 2: 2026-09-29, curl, sentence and date present
- Used in: upgrade-wordpress-hosting-china

### Huawei Cloud filing server: mainland, at least three months
- Fact ID: none
- Value: must "purchase a Huawei Cloud server (referred to as filing server) deployed in the Chinese mainland"; ECS (including Flexus X) and Flexus L "subscription term must be at least three months, including the accumulative duration of renewals"
- Vantage point: n/a
- As of: 20 August 2024
- Source: Huawei Cloud Help Center (English), Filing Servers
- URL: https://support.huaweicloud.com/intl/en-us/prepare-icp/icp_02_0003.html
- Verified 1: 2026-09-29, WebFetch
- Verified 2: 2026-09-29, curl, phrases and date present
- Used in: upgrade-wordpress-hosting-china

### Tencent Cloud Lighthouse filing eligibility: 90 days, 30 days remaining
- Fact ID: none
- Value: mainland Lighthouse qualifies; "云资源与带宽计费模式需为包年包月，购买时长须超过（含）90天"; "备案期间服务器实例剩余时长（到期时间-当前时间）超过（含）30天"
- Vantage point: n/a
- As of: 23 September 2026 14:41:01
- Source: Tencent Cloud (腾讯云) documentation, 轻量应用服务器 ICP 备案
- URL: https://cloud.tencent.com/document/product/1207/45756
- Verified 1: 2026-09-29, WebFetch
- Verified 2: 2026-09-29, WebFetch with a differently worded prompt, both sentences verbatim, date unchanged
- Used in: upgrade-wordpress-hosting-china

### Tencent Cloud: one account per filing entity; 3-month subscription
- Fact ID: none
- Value: "一个腾讯云账号对应一个备案主体"; 包年包月, 3 months or more, at least 1 month remaining during filing
- Vantage point: n/a
- As of: 30 January 2026 17:00:21
- Source: Tencent Cloud (腾讯云) documentation, ICP 备案 能否进行备案
- URL: https://cloud.tencent.com/document/product/243/19631
- Verified 1: 2026-09-29, WebFetch
- Verified 2: 2026-09-29, WebFetch, differently worded prompt, sentence verbatim
- Used in: upgrade-wordpress-hosting-china (table cell)
- Notes: Tencent's undated tencentcloud.com "ICP Registration Support" page says mainland filings go through the Chinese website; no date, so not logged as a source. No dated Tencent page found on international accounts.

### MIIT pilot lifting the foreign-ownership cap in four areas
- Fact ID: F26 (foreign-ownership half)
- Value: notice 工信部通信函〔2024〕107号, 8 April 2024. Pilot in Beijing's services-opening demonstration zone, the Shanghai FTZ Lingang New Area and the Pudong leading zone, Hainan Free Trade Port and the Shenzhen demonstration zone. Lifts the foreign-ownership cap for IDC, CDN, ISP, online data processing and transaction processing, information publishing platforms and delivery services (internet news, online publishing, online audiovisual and internet culture excluded), and information protection and processing services.
- Vantage point: n/a
- As of: 8 April 2024
- Source: Ministry of Industry and Information Technology (工业和信息化部), published on gov.cn
- URL: https://www.gov.cn/zhengce/zhengceku/202404/content_6944441.htm
- Verified 1: 2026-09-29, WebFetch
- Verified 2: 2026-09-29, curl, document number, 海南自由贸易港, 外资股比限制 and 互联网文化经营除外 present
- Used in: upgrade-wordpress-hosting-china
- Notes: F26 says foreign ownership "remains restricted outside the pilot areas". The pilot covers named categories, not the ICP licence as a whole; say which.

### Value-added telecoms licence: 60 days of review from acceptance (check 2 now done)
- Fact ID: F26 (licence half)
- Value: "自受理之日起60日内完成审查工作，作出予以批准或者不予批准的决定"
- Vantage point: n/a
- As of: published 1 June 2015
- Source: Shanghai Communications Administration (上海市通信管理局), 增值电信业务办事指南
- URL: https://shca.miit.gov.cn/bsfw/bszn/dxsc/blcx/art/2020/art_7426922df3754a189aaf4278ff0c7b1d.html
- Verified 1: 2026-09-24 (A5, WebFetch); again 2026-09-29, WebFetch
- Verified 2: 2026-09-29, curl, sentence and date present
- Used in: upgrade-wordpress-hosting-china
- Notes: Supersedes the "found, not used" entry of 24 September. The fact bank's "60 to 90 working days" is not supported; print 60 days from acceptance.

### Re-checks of existing entries, 29 September 2026
- F27 Alibaba server page (https://help.aliyun.com/en/icp-filing/basic-icp-service/user-guide/icp-filing-server-access-information-check): **lastModifiedTime is now 24 September 2026** (was 2 September). The method list now reads "an ECS instance (subscription for 3 months or longer ...) or Simple Application Server (subscription for 3 months or longer)", while the requirements table still says ECS "more than 3 months". Copy now says "3 months or longer" for both. Used in: upgrade-wordpress-hosting-china.
- F25 Tencent 是否需要备案 (https://cloud.tencent.com/document/product/243/19630): sentence verbatim, **last updated now 28 September 2026** (was 3 September). Used in: upgrade-wordpress-hosting-china.
- F25 Alibaba 域名/网站无法访问 (4 Sept 2026), F26 Alibaba 备案流程概述 (26 Aug 2026; phrases split by span markup, present once stripped), F27 Alibaba international accounts (20 Aug 2026), F28 Alibaba SAS image (19 Aug 2026): re-fetched twice 2026-09-29, unchanged. Used in: upgrade-wordpress-hosting-china.
- F30 Cloudflare China Network (/china-network/ "Apr 30, 2026"; /get-started/ "review and vet the content"): re-fetched 2026-09-29, unchanged. Used in: upgrade-wordpress-hosting-china.
- F32 migration pair and uptime figures: both live URLs re-fetched twice 2026-09-29, sentences present. Carrier, city and window dates still unpublished (T3-01, T3-02). Used in: upgrade-wordpress-hosting-china, with the missing conditions shown in a table on the page.

## B5 entries, 1 October 2026 (china-website-brief-checklist)

Two new entries and eleven re-checks for `china-website-brief-checklist` (B5,
T1). Check 1 by curl with a desktop Chrome user agent at research time, check
2 by curl with a Safari user agent in createarticle iteration 8, both on
1 October 2026. 12 of 12 URLs passed check 2.

### Yoast SEO stores a Baidu Webmaster Tools verification code
- Fact ID: F21 (the positive half)
- Value: Yoast SEO Settings > Site connections > "Baidu Webmaster Tools": paste the verification code from Baidu's HTML tag method (HTML标签验证)
- Vantage point: n/a, vendor documentation
- As of: 29 April 2026 (dateModified in the page's JSON-LD; first published 19 April 2018)
- Source: Yoast help centre, How to add your website to Baidu Webmaster Tools
- URL: https://yoast.com/help/add-website-baidu-webmaster-tools/
- Verified 1: 2026-10-01, curl, "Site connections" and "Baidu Webmaster Tools" present
- Verified 2: 2026-10-01, curl re-fetch, both phrases and the 2026-04-29 date present
- Used in: china-website-brief-checklist
- Notes: Confirms only that the field exists. The negative half of F21 (no Baidu push, no Tongji, no Baidu structured data, no Baiduspider robots handling) rests on the fact bank's source reading of 29 August 2026 and is printed as "when we read both plugins' code in August 2026".

### Rank Math verifies a site with Baidu Webmaster Tools
- Fact ID: F21 (the positive half)
- Value: knowledge-base guide to verifying a site on Baidu Webmaster Tools with Rank Math
- Vantage point: n/a, vendor documentation
- As of: 16 March 2023 (dateModified; first published 22 February 2021)
- Source: Rank Math knowledge base, How to Add Your Website to Baidu Webmaster Tools
- URL: https://rankmath.com/kb/baidu-webmaster-tools-verification/
- Verified 1: 2026-10-01, curl
- Verified 2: 2026-10-01, curl re-fetch
- Used in: china-website-brief-checklist (supporting, not quoted)

### Re-checks of existing entries, 1 October 2026
- F25 Alibaba 域名/网站无法访问 (lastModified 4 Sept 2026, unchanged), F26 Alibaba 备案流程概述 (26 Aug 2026, three phrases), F27 Alibaba international accounts EN (20 Aug 2026), F27 server and access check EN (24 Sept 2026, "3 months or longer"), F28 Alibaba SAS image (19 Aug 2026), Alibaba ICP number in footer incl. the 5,000 to 10,000 yuan fine (12 Aug 2026): all re-fetched twice 2026-10-01, phrases present. Used in: china-website-brief-checklist.
- F19 Baidu wiki/990 (2017-03-24, 渲染抓取UA): fetched twice by curl 2026-10-01 (earlier checks were via search). Used in prose, no blockquote.
- F1 21YunBox Google Hosted Libraries (cn-zhangjiakou, 2026-08-28, reviewed 2026-08-30): re-fetched twice, sentence verbatim. Cited as Google Hosted Libraries probed, per the 22 September note. Used in: china-website-brief-checklist.
- F8 Meta Trac #5106 archive capture: check 1 first returned HTTP 429 from web.archive.org, retry 200; check 2 200. Used in: china-website-brief-checklist.
- PIPL Article 39 (CAC copy): re-fetched twice, 第三十九条 and 单独同意 present. Used in: china-website-brief-checklist.
- MIIT pilot 2024 No. 107 (gov.cn) and Shanghai CA licence guide (60日内): re-fetched once each at check 1 and NOT used; B5 mentions the ICP licence without a review figure.

## T2-01 entries, 6 October 2026

Logged for `google-fonts-china`. Every URL fetched twice on 6 October 2026:
check 1 during research, check 2 in createarticle iteration 8 with a
differently worded query against the same URL. All passed check 2. The F6
pair above was re-fetched too and is unchanged.

### Google Fonts serving hosts, GreatFire HTTPS verdicts
- Fact ID: F6 (added 6 October 2026)
- Value: https://fonts.googleapis.com not blocked, 0 of 3 conclusive tests disrupted in the last 90 days, last test 7 September 2026. https://fonts.gstatic.com not blocked, 0 of 4 disrupted, last test 21 September 2026
- Vantage point: n/a, GreatFire reachability verdicts from mainland China, no latency
- As of: 7 and 21 September 2026
- Source: GreatFire
- URL: https://en.greatfire.org/https/fonts.googleapis.com and https://en.greatfire.org/https/fonts.gstatic.com
- Verified 1: 2026-10-06
- Verified 2: 2026-10-06
- Used in: google-fonts-china
- Notes: Use the HTTPS pages. The plain-host pages (`/fonts.googleapis.com`, `/fonts.gstatic.com`) carry older or HTTP-only tests (18 August and 21 March 2026). These verdicts agree with the 21YunBox datacentre figure and say nothing about a home line, so never quote them alone: alone they are the flat "not blocked" claim on the Do Not Assert list. Recheck by 2026-12-06 (oldest test plus 90 days).

### fonts.google.com, GreatFire HTTPS verdict
- Fact ID: F6 (corrects the old "blocked either way")
- Value: 100% disrupted, 2 of 2 conclusive tests in the last 90 days, last test 30 September 2026; interference recorded since 15 October 2016. Headline verdict "Sometimes"
- Vantage point: n/a, GreatFire reachability verdict
- As of: 30 September 2026
- Source: GreatFire
- URL: https://en.greatfire.org/https/fonts.google.com
- Verified 1: 2026-10-06
- Verified 2: 2026-10-06
- Used in: google-fonts-china; great-firewall-what-it-blocks and is-wordpress-blocked-in-china (corrected 6 October 2026, four locales each)
- Notes: The 21YunBox study does not test this host, so "from either vantage point" and "blocked either way" had no source. GreatFire's word is disrupted, not blocked; print it as theirs.

### reCAPTCHA, both vantage points, rechecked
- Fact ID: F2
- Value: 0 of 72 from the datacentre ("0% success"), 18 requests, 18 never answered, from the consumer line
- Vantage point: Alibaba Cloud (阿里云) cn-zhangjiakou, 28 August 2026; Beijing China Mobile (中国移动) residential, 30 August 2026
- As of: 28 and 30 August 2026
- Source: 21YunBox, *A Day of Third-Party Requests From Inside China*
- URL: https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html
- Verified 1: 2026-09-10 (entry above)
- Verified 2: 2026-10-06, re-fetched, unchanged
- Used in: woocommerce-china-store-guide (corrected 6 October 2026, four locales)

### A stylesheet link in the head blocks rendering
- Fact ID: none
- Value: "By default, a link element with rel="stylesheet" in the head blocks rendering when the browser discovers it during parsing."
- Vantage point: n/a
- As of: page last modified 20 May 2026
- Source: MDN Web Docs, the link element
- URL: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link
- Verified 1: 2026-10-06
- Verified 2: 2026-10-06
- Used in: google-fonts-china
- Notes: The verbatim sentence carries code markup (`link`, `rel="stylesheet"`, `<head>`); google-fonts-china cites it as an attributed paraphrase so the body carries no HTML.

### preconnect opens the connection early
- Fact ID: none
- Value: preconnect performs "part or all of the handshake (DNS+TCP for HTTP, and DNS+TCP+TLS for HTTPS origins)" ahead of use
- Vantage point: n/a
- As of: page last modified 22 April 2026
- Source: MDN Web Docs, rel=preconnect
- URL: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/preconnect
- Verified 1: 2026-10-06
- Verified 2: 2026-10-06
- Used in: google-fonts-china
- Notes: Supports "a leftover preconnect still sends the browser to the host". Does not support "a preconnect makes it worse"; nothing measures that, so it is not printed.

### Google Fonts may be self-hosted
- Fact ID: none
- Value: "Since all the fonts available here are licensed with permission to redistribute, subject to the license terms, you can self-host using a variety of third-party projects." Most fonts SIL Open Font License 1.1, some Apache 2, Ubuntu fonts Ubuntu Font License 1.0
- Vantage point: n/a
- As of: README last changed 8 March 2024 (GitHub commit date, read through the GitHub API)
- Source: Google Fonts repository README, google/fonts on GitHub
- URL: https://github.com/google/fonts
- Verified 1: 2026-10-06
- Verified 2: 2026-10-06
- Used in: google-fonts-china
- Notes: fonts.google.com/faq is rendered client-side and returned no text to the fetcher; the repository README is the dated primary statement. Some OFL fonts carry a Reserved Font Name; the README says so.

## T2-03 entries, 8 October 2026

Logged for `recaptcha-china`. Check 1 during research and check 2 in
iteration 8 were both run on 8 October 2026 by separate fetches (curl for
GreatFire's server-rendered verdict text, WebFetch or curl for the vendor
pages). Every source passed check 2 unchanged. GreatFire pages state a
relative "last tested" age in the visible text and the ISO date in their
FAQ markup ("As of the last test on YYYY-MM-DD"); the ISO date is the one
logged.

### reCAPTCHA default addresses, GreatFire
- Fact ID: F2
- Value: https://www.google.com/recaptcha blocked, 1 of 1 conclusive tests, interference recorded since 7 May 2015; https://www.google.com/recaptcha/api.js 100% blocked, 3 of 3; https://www.google.com/recaptcha/api/siteverify 100% blocked, 1 of 1
- Vantage point: n/a, GreatFire reachability verdicts
- As of: 28 September 2026, 7 September 2026, 28 September 2026
- Source: GreatFire
- URL: https://en.greatfire.org/https/www.google.com/recaptcha (and /recaptcha/api.js, /recaptcha/api/siteverify)
- Verified 1: 2026-10-08
- Verified 2: 2026-10-08
- Used in: recaptcha-china
- Notes: The siteverify verdict is the one that matters for a mainland-hosted server: it cannot confirm any token, so the default setup fails for overseas visitors too.

### The www.recaptcha.net swap, GreatFire (closes the 2026-09-11 "not attempted" entry)
- Fact ID: F2
- Value: https://www.recaptcha.net not blocked, 0 of 2 conclusive tests disrupted, first tested 2018; 30 recaptcha.net URLs tested, 28 accessible, 2 disrupted. https://www.recaptcha.net/recaptcha/api.js not blocked, 0 of 2. https://www.recaptcha.net/recaptcha/api/siteverify reachable at its last test, none since. https://www.gstatic.com/recaptcha not blocked, 0 of 1
- Vantage point: n/a, GreatFire reachability verdicts
- As of: 30 September 2026; 27 August 2026; 2 May 2026 (older than 90 days, print the date); 20 August 2026
- Source: GreatFire
- URL: https://en.greatfire.org/https/www.recaptcha.net and siblings
- Verified 1: 2026-10-08
- Verified 2: 2026-10-08
- Used in: recaptcha-china
- Notes: Reachability only. No 21YunBox or other dated probe has timed recaptcha.net from either vantage point, and the 21YunBox study does not test it. The api.js served from www.recaptcha.net loads its challenge code from https://www.gstatic.com/recaptcha/releases/ (script read 8 October 2026), so the swap still depends on gstatic.com.

### gstatic.com domain tally, GreatFire
- Fact ID: none
- Value: 175 gstatic.com URLs tested: 8 blocked, 42 disrupted, 123 accessible, 2 no verdict
- Vantage point: n/a
- As of: read 8 October 2026 (a running tally with no single test date; cite it as read on the date)
- Source: GreatFire
- URL: https://en.greatfire.org/https/www.gstatic.com
- Verified 1: 2026-10-08
- Verified 2: 2026-10-08
- Used in: recaptcha-china

### reCAPTCHA documentation, Google
- Fact ID: F2
- Value: FAQ: "Yes, please use "www.recaptcha.net" in your code in circumstances when "www.google.com" is not accessible", then replace every other use of www.google.com/recaptcha/. Verify: server posts the token (g-recaptcha-response) to https://www.google.com/recaptcha/api/siteverify; error missing-input-response, "The response parameter is missing." v3: loads https://www.google.com/recaptcha/api.js?render=...; "reCAPTCHA v3 will never interrupt your users"
- Vantage point: n/a
- As of: FAQ last updated 2 April 2026; verify page 14 October 2024; v3 page 10 July 2024
- Source: Google for Developers
- URL: https://developers.google.com/recaptcha/docs/faq, /docs/verify, /docs/v3
- Verified 1: 2026-10-08
- Verified 2: 2026-10-08
- Used in: recaptcha-china

### hCaptcha, GreatFire (updates the T6-06 entry of 22 September)
- Fact ID: F35
- Value: https://hcaptcha.com not blocked, 0 of 3; https://js.hcaptcha.com not blocked, 0 of 1; https://api2.hcaptcha.com not blocked, 0 of 1. GreatFire revised api2's earlier "partly disrupted" verdict: refused connections since late August 2026 no longer count as evidence of blocking
- Vantage point: n/a
- As of: 25 September, 26 September and 14 September 2026
- Source: GreatFire
- URL: https://en.greatfire.org/https/hcaptcha.com, /https/js.hcaptcha.com, /https/api2.hcaptcha.com
- Verified 1: 2026-10-08
- Verified 2: 2026-10-08
- Used in: recaptcha-china (api2 also on great-firewall-what-it-blocks, unchanged)

### Cloudflare Turnstile script, GreatFire (F42 corrected)
- Fact ID: F42 (CORRECTED)
- Value: https://challenges.cloudflare.com/turnstile/v0/api.js not blocked, 0 of 1 conclusive tests
- Vantage point: n/a
- As of: 23 September 2026
- Source: GreatFire
- URL: https://en.greatfire.org/https/challenges.cloudflare.com/turnstile/v0/api.js
- Verified 1: 2026-10-08
- Verified 2: 2026-10-08
- Used in: recaptcha-china; great-firewall-what-it-blocks (new table row and the "Not yet probed" paragraph, four locales, 8 October 2026); src/data/chinaDependencies.ts
- Notes: F42 listed Turnstile among dependencies resting on verdicts older than 90 days. This dated test removes it from the untested list. 21YunBox's Turnstile support page (https://www.21cloudbox.com/support/cloudflare-turnstile-china.html, reviewed 28 August 2026) is NOT citable: its text says 0 of 3 inside 60 seconds and its table says 2 of 3 at a 1,011ms median, and it times cloudflare.com/products/turnstile, the marketing page.

### Alibaba Cloud Captcha 2.0 server access
- Fact ID: F41
- Value: after the client integration the server calls VerifyIntelligentCaptcha; regions mainland China (Shanghai, captcha.cn-shanghai.aliyuncs.com) and outside the mainland (Singapore, captcha.ap-southeast-1.aliyuncs.com); "AliyunCaptchaConfig 参数 region 传值和服务端接入地址 endpoint 必须映射正确，否则会导致验证请求返回错误"
- Vantage point: n/a
- As of: page modified 11 September 2026 (lastModifiedTime 1789091081000)
- Source: Alibaba Cloud (阿里云) help centre, 服务端接入
- URL: https://help.aliyun.com/zh/captcha/captcha2-0/user-guide/server-access
- Verified 1: 2026-10-08
- Verified 2: 2026-10-08
- Used in: recaptcha-china

### Tencent Cloud Captcha ticket verification and product name
- Fact ID: F41 (CORRECTED: the product is 腾讯云验证码, not 天御)
- Value: DescribeCaptchaResult at captcha.tencentcloudapi.com; CaptchaCode 1 = "OK 验证通过". Product overview names it 腾讯云验证码 with no mention of 天御
- Vantage point: n/a
- As of: 18 September 2026 (verification API); 8 September 2026 (product overview)
- Source: Tencent Cloud (腾讯云)
- URL: https://cloud.tencent.com/document/product/1110/36926 and https://cloud.tencent.com/document/product/1110/36334
- Verified 1: 2026-10-08
- Verified 2: 2026-10-08
- Used in: recaptcha-china

### GeeTest server documentation (not citable)
- Fact ID: F41
- Verified 1: **no date found, 2026-10-08.** https://docs.geetest.com/gt4/deploy/server names the second check at gcaptcha4.geetest.com/validate but carries no date anywhere on the page; the GeeTeam/gt4-python-demo repository was last changed 21 February 2022.
- Verified 2: not applicable.
- Effect: GeeTest (极验) is named in recaptcha-china without any technical claim. Find a dated GeeTest page before citing its mechanics.

### reCAPTCHA, both vantage points (third check)
- Fact ID: F2
- Value: unchanged from the entries of 10 September and 6 October 2026. The home-line row of the study is labelled "www.google.com (reCAPTCHA host)", 18 requests, 18 never answered
- Verified 2: 2026-10-08, re-fetched for recaptcha-china, unchanged
- Used in: recaptcha-china

## T6-10 entries, 9 October 2026 (upgrade-baiduspider-firewall)

Plugin zips downloaded from downloads.wordpress.org to the session temp
directory and read there; nothing from them is kept in the repo.

### Wordfence: rate limits off, one crawler policy, for Google
- Fact ID: F15
- Value: five rate limits (`maxGlobalRequests`, `maxRequestsCrawlers`, `max404Crawlers`, `maxRequestsHumans`, `max404Humans`) default `DISABLED`; `firewallEnabled` ("Enable Rate Limiting and Advanced Blocking") default on; `neverBlockBG` ("How should we treat Google's crawlers") default `neverBlockVerified` ("Verified Google crawlers will not be rate-limited"); Google verified by Google IP ranges, then a forward-confirmed reverse lookup against `googlebot.com`, `google.<tld>` or `1e100.net`, then Wordfence's lookup service; past a limit the visitor gets a 503 on throttle or block; the allowlist ("Allowlisted IP addresses that bypass all rules") accepts IPs and ranges only; no user-agent allowlist
- Vantage point: n/a, code read
- As of: Wordfence 9.0.0, released 10 August 2026; 9.0.2 (current, updated 30 September 2026) identical in behaviour
- Source: Wordfence plugin source, `lib/wfConfig.php`, `lib/wfCrawl.php`, `lib/wfLog.php`, `models/block/wfRateLimit.php`, `lib/wfJavascriptBridge.php`
- URL: https://downloads.wordpress.org/plugin/wordfence.9.0.0.zip and https://downloads.wordpress.org/plugin/wordfence.9.0.2.zip (page: https://wordpress.org/plugins/wordfence/)
- Verified 1: 2026-09-04 (fact bank); primary re-read 2026-10-09
- Verified 2: 2026-10-09, re-grepped in iteration 8, plugin page re-fetched (9.0.2 listed)
- Used in: baiduspider-firewall (T6-10)
- Notes: F15's "reverse DNS to .googlebot.com" was too narrow; PLAN.md corrected 9 October 2026. Recheck at reviewBy 2027-01-07.

### Solid Security (Kadence Security): HackRepair Default Ban List
- Fact ID: F16
- Value: "Default Ban List" `"default": false`; when on, the HackRepair.com list is written into .htaccess (Apache, LiteSpeed) or nginx.conf and returns 403 to user agents matching `360Spider`, `EasouSpider` and `YisouSpider`; no Baiduspider entry; the block starts "# Start HackRepair.com Blacklist"; the setting lives in the Ban Users module
- Vantage point: n/a, code read
- As of: 10.0.3, released 27 July 2026 (header "Kadence Security Basic"; rebrand in 10.0.0, 11 May 2026, per `history.txt`); 10.0.5 (current, updated 30 September 2026) has a byte-identical `ban-users` module
- Source: better-wp-security source, `core/modules/ban-users/module.json`, `class-itsec-ban-users.php`, `config-generators.php`, `lists/hackrepair-*.inc`
- URL: https://downloads.wordpress.org/plugin/better-wp-security.10.0.3.zip and https://downloads.wordpress.org/plugin/better-wp-security.10.0.5.zip (page: https://wordpress.org/plugins/better-wp-security/)
- Verified 1: 2026-09-04 (fact bank); primary re-read 2026-10-09
- Verified 2: 2026-10-09, re-grepped in iteration 8, plugin page re-fetched (10.0.5, Kadence)
- Used in: baiduspider-firewall (T6-10)
- Notes: EasouSpider's operator has no dated primary source; printed as a string only. Recheck at reviewBy 2027-01-07.

### LiteSpeed Cache and W3 Total Cache: empty user-agent cache exclusions, and the LiteSpeed preconnect
- Fact ID: F18
- Value: LiteSpeed Cache 7.9.1 "Do Not Cache User Agents" (`cache-exc_useragents`) empty; W3 Total Cache 2.10.6 and 2.10.7 `pgcache.reject.ua`, `minify.reject.ua` and `cdn.reject.ua` empty; neither names Baiduspider outside bundled vendor libraries. LiteSpeed 7.9.1 `src/optimize.cls.php` line 591 writes `<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />` when "Load Google Fonts Asynchronously" (`optm-ggfonts_async`, default false) is on and the page has Google Fonts URLs
- Vantage point: n/a, code read
- As of: LiteSpeed Cache 7.9.1, 1 September 2026; W3 Total Cache 2.10.6 (4 September 2026) and 2.10.7 (1 October 2026)
- Source: plugin source from WordPress.org
- URL: https://downloads.wordpress.org/plugin/litespeed-cache.7.9.1.zip, https://downloads.wordpress.org/plugin/w3-total-cache.2.10.6.zip and https://downloads.wordpress.org/plugin/w3-total-cache.2.10.7.zip
- Verified 1: 2026-10-09 (local read of the release zips, as the 11 September entry asked)
- Verified 2: 2026-10-09, re-grepped in iteration 8; plugin pages re-fetched
- Used in: baiduspider-firewall (T6-10), the empty lists only
- Notes: **Supersedes the 11 September 2026 "not completed" F18 entry under "Measurements (ours)".** That check looked in `gui.cls.php` on GitHub; the preconnect is in `optimize.cls.php`, behind an off-by-default option. PLAN.md F18 corrected 9 October 2026.

### Baiduspider verification by reverse DNS; Baidu does not publish its IP ranges
- Fact ID: F20
- Value: hostname must end `*.baidu.com` or `*.baidu.jp`, anything else is impersonation; the forward lookup must return the original IP; "IP地址范围动态变化不固定，我们无法对外公布"
- Vantage point: n/a
- As of: 8 February 2022
- Source: Baidu Search Resource Platform (百度搜索资源平台), 轻松两步，教你快速识别百度蜘蛛（User-Agent）
- URL: https://ziyuan.baidu.com/college/articleinfo?id=3378
- Verified 1: 2026-10-09
- Verified 2: 2026-10-09, re-fetched in iteration 8
- Used in: baiduspider-firewall (T6-10)
- Notes: Primary source for F20; added to PLAN.md F20.

### 360Spider is 360 Search's crawler; 360 publishes IP ranges and does not support nslookup verification
- Fact ID: none (F16 context)
- Value: the UA carries "360Spider"; IP ranges are published on the page; "目前360搜索蜘蛛暂时不支持nslookup命令的查询"
- Vantage point: n/a
- As of: HTTP Last-Modified 6 February 2026 (no date in the page body)
- Source: 360 Search (360搜索), 360蜘蛛IP help page
- URL: https://www.so.com/help/spider_ip.html
- Verified 1: 2026-10-09
- Verified 2: 2026-10-09, re-fetched in iteration 8
- Used in: baiduspider-firewall (T6-10)

### YisouSpider is Shenma Search's crawler
- Fact ID: none (F16 context)
- Value: "神马搜索的爬虫user agent是yisouspider"
- Vantage point: n/a
- As of: July 2014
- Source: Shenma Search (神马搜索) webmaster platform, 移动网站优化指南
- URL: https://zhanzhang.sm.cn/open/optimizaGuide
- Verified 1: 2026-10-09
- Verified 2: 2026-10-09, re-fetched in iteration 8
- Used in: baiduspider-firewall (T6-10)

### Baidu crawl diagnosis quota and size; robots tool size
- Fact ID: none
- Value: crawl diagnosis (抓取诊断) allows 70 fetches a week per site and shows the first 200KB; the robots tool checks up to 48k of file content. (The launch notice, https://ziyuan.baidu.com/wiki/610, dated 22 April 2014, said 300 a month; the tool page supersedes it.)
- Vantage point: n/a
- As of: tool pages as served on 9 October 2026 (©2026, no page date; cited as "tool page, read 9 October 2026")
- Source: Baidu Search Resource Platform (百度搜索资源平台), crawl diagnosis and robots tool pages
- URL: https://ziyuan.baidu.com/crawltools/index and https://ziyuan.baidu.com/robots/index
- Verified 1: 2026-10-09
- Verified 2: 2026-10-09, re-fetched in iteration 8
- Used in: baiduspider-firewall (T6-10)
- Notes: Replaces the live page's unsourced "between 70 and 200 a week".

### Baidu search engine market share in China, September 2026
- Fact ID: none
- Value: 46.65% all platforms, 60.15% mobile (page headline figures). The monthly CSV for the same month gives 46.85% and 60.35%. November 2025 in the same series: 63.97% and 77.86%
- Vantage point: n/a (Statcounter's share, measured from sites running its tracker)
- As of: September 2026
- Source: Statcounter Global Stats
- URL: https://gs.statcounter.com/search-engine-market-share/all/china and https://gs.statcounter.com/search-engine-market-share/mobile/china
- Verified 1: 2026-10-09
- Verified 2: 2026-10-09, re-fetched in iteration 8
- Used in: baiduspider-firewall (T6-10)
- Notes: Print the page headline figures, which a reader clicking through sees. Replaces the live citation via The Egg (11 February 2026). Monthly and volatile: refresh at each review.

## T2-05 entries, 11 October 2026 (javascript-cdn-china)

Logged for `javascript-cdn-china` on a catch-up draft run. Every URL fetched
by curl from this machine on 11 October 2026 at check 1 and again in
iteration 8 (check 2), each assertion matched against the page text the
second time with a fresh fetch.

### ajax.googleapis.com blocked verdict, rechecked
- Fact ID: F1 (verdict half)
- Value: blocked, "100% of the last 1 conclusive tests failed in mainland China", 1 of 1 blocked in the last 90 days; googleapis.com domain counts now 581 tested (do not publish, they drift)
- Vantage point: n/a, reachability verdict
- As of: last tested 2026-08-22 (12:10 UTC)
- Source: GreatFire
- URL: https://en.greatfire.org/https/ajax.googleapis.com
- Verified 1: 2026-10-11
- Verified 2: 2026-10-11, re-fetched in iteration 8
- Used in: javascript-cdn-china (T2-05); wordpress-plugins-china, is-wordpress-blocked-in-china and website-in-china (all four locales) corrected to it on 2026-10-11
- Notes: Older than 90 days on 2026-11-20. javascript-cdn-china carries reviewBy 2026-11-12.

### Google Hosted Libraries website from a mainland datacentre (CORRECTION)
- Fact ID: F1 (timing half, corrected)
- Value: the Google Hosted Libraries site, developers.google.com/speed/libraries, returned no first byte in three of three runs, each abandoned at the sixty-second limit
- Vantage point: Alibaba Cloud (阿里云) cn-zhangjiakou
- As of: measured 2026-08-28; support page reviewed 2026-10-08
- Source: 21YunBox, Google Hosted Libraries in China
- URL: https://www.21cloudbox.com/support/google-hosted-libraries.html
- Verified 1: 2026-10-11
- Verified 2: 2026-10-11, re-fetched in iteration 8
- Used in: javascript-cdn-china (T2-05); china-website-brief-checklist (four locales, restated 2026-10-11)
- Notes: **The page names the timed URL: Google's documentation site, not `ajax.googleapis.com`.** The 22 September entry above called it "a page load of the vendor target"; four live pages turned that into "requests to ajax.googleapis.com", one of them as "we abandoned the test" and the money page as "ChinaWebFoundry measurement, 29 August 2026". All fixed on 2026-10-11. Cite this figure as a load of Google's library website and the host's verdict from GreatFire.

### 21YunBox 280-site census: public asset CDNs
- Fact ID: F1, F7
- Value: "Public asset CDNs: two of five worked". cdnjs 3 of 3 completed; Microsoft Ajax CDN 3 of 3 completed; Google Hosted Libraries no response at all; BootstrapCDN 0 of 3; Font Awesome 0 of 3. Three requests per site, 60-second ceiling, 840 requests, 280 sites. "Vendor sites, not customer deployments." States that the rule "public CDNs don't work in China" is not supported, and advises: "measure the host you actually depend on, or bundle the library into your own build and remove the question."
- Vantage point: Alibaba Cloud (阿里云) cn-zhangjiakou
- As of: measured 28 to 29 August 2026; page dated 29 August 2026, reviewed 2026-10-07
- Source: 21YunBox, 280 Sites Measured From Inside China: A Third Never Finished Loading
- URL: https://www.21cloudbox.com/websites-blocked-in-china.html
- Verified 1: 2026-10-11
- Verified 2: 2026-10-11, re-fetched in iteration 8
- Used in: javascript-cdn-china (T2-05): cdnjs website and Google Hosted Libraries rows, the "not supported" conclusion (paraphrased, because the original sentence carries em dashes), the bundling advice
- Notes: Each row is a load of the vendor's own site. BootstrapCDN and Font Awesome are F42 hosts: their 0 of 3 is a vendor-site load, not a test of the asset host, so on the 8 October Turnstile precedent it gives them no verdict and they stay untested. The page's own "73 out of 73" for fonts.googleapis.com disagrees with the paired study's 72 samples; the paired study stays the cited figure. The census mentions a 493ms to 1,086ms swing for an unnamed host; it is not attributable to jsDelivr from this page.

### cdn.jsdelivr.net, paired study, rechecked
- Fact ID: F7
- Value: direct, 100% success over 72 samples, 660ms median TTFB, 1,757ms p95; Beijing home line, 36 requests, 0 failures. Font stylesheet (fonts.googleapis.com) 72 of 72 at 111ms and 54 requests, 54 never answered. Quote: "A p95 of 1,757ms against a median of 660ms means one request in twenty takes nearly two seconds."
- Vantage point: Alibaba Cloud (阿里云) cn-zhangjiakou, 28 August 2026, every ten minutes for twelve hours, 30-second timeout; Beijing China Mobile (中国移动) residential broadband, 30 August 2026
- As of: updated 30 August 2026
- Source: 21YunBox, A Day of Third-Party Requests From Inside China
- URL: https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html
- Verified 1: 2026-10-11
- Verified 2: 2026-10-11, re-fetched in iteration 8
- Used in: javascript-cdn-china (T2-05)

### GreatFire verdicts on cdnjs, unpkg and jsDelivr, rechecked
- Fact ID: F7 (verdict half)
- Value: cdnjs.cloudflare.com not blocked, "All 1 recent conclusive tests connected normally", last tested 2026-09-27 (23:10 UTC); unpkg.com not blocked, same wording, last tested 2026-08-14; cdn.jsdelivr.net not blocked, "All 3 recent conclusive tests connected normally", last tested 2026-10-08
- Vantage point: n/a, reachability verdicts
- As of: as dated per host
- Source: GreatFire
- URL: https://en.greatfire.org/https/cdnjs.cloudflare.com, https://en.greatfire.org/https/unpkg.com, https://en.greatfire.org/https/cdn.jsdelivr.net
- Verified 1: 2026-10-11
- Verified 2: 2026-10-11, re-fetched in iteration 8
- Used in: javascript-cdn-china (T2-05); wordpress-plugins-china and is-wordpress-blocked-in-china (four locales, corrected 2026-10-11)
- Notes: The cdnjs verdict is no longer four months old: GreatFire retested on 27 September. The page shows relative dates ("13 d ago"); the absolute timestamps are in the page's embedded data. unpkg passes 90 days on 2026-11-12, which sets the piece's reviewBy.

### Google Hosted Libraries documentation
- Fact ID: F1 (context)
- Value: "a stable, reliable, high-speed, globally available content distribution network for the most popular, open-source JavaScript libraries"; jQuery snippet `https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js`
- Vantage point: n/a
- As of: last updated 2026-10-09
- Source: Google for Developers, Hosted Libraries
- URL: https://developers.google.com/speed/libraries
- Verified 1: 2026-10-11
- Verified 2: 2026-10-11, re-fetched in iteration 8
- Used in: javascript-cdn-china (T2-05)

### MDN, the script element, rechecked
- Fact ID: none
- Value: "Scripts without async, defer or type="module" attributes, as well as inline scripts without the type="module" attribute, are fetched and executed immediately before the browser continues to parse the page."
- As of: last modified 2026-05-09
- Source: MDN Web Docs
- URL: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script
- Verified 1: 2026-10-11
- Verified 2: 2026-10-11, re-fetched in iteration 8
- Used in: javascript-cdn-china (T2-05)

### WordPress core bundles jQuery 3.7.1
- Fact ID: none
- Value: `$scripts->add( 'jquery-core', "/wp-includes/js/jquery/jquery$suffix.js", array(), '3.7.1' );` (line 908)
- Vantage point: n/a, source code
- As of: WordPress 7.1.3, the current stable release on 2026-10-11 (api.wordpress.org version check)
- Source: WordPress core, wp-includes/script-loader.php
- URL: https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/script-loader.php
- Verified 1: 2026-10-11
- Verified 2: 2026-10-11, second fetch, same line
- Used in: javascript-cdn-china (T2-05), prose, no blockquote

### secure.gravatar.com blocked, rechecked 12 October 2026
- Fact ID: F4 (verdict)
- Value: blocked, 100% of the last 1 conclusive tests failed; all 29 tested gravatar.com URLs blocked; first tested 12 May 2014
- Vantage point: GreatFire's mainland test network
- As of: last tested 2026-08-31
- Source: GreatFire
- URL: https://en.greatfire.org/https/secure.gravatar.com (JSON: https://en.greatfire.org/api/url/https/secure.gravatar.com)
- Verified 1: 2026-10-12, HTML and JSON agree
- Verified 2: 2026-10-12, re-fetched in iteration 8, unchanged
- Used in: wp-admin-slow-china (A4)
- Notes: GreatFire now lists 29 gravatar.com URLs (28 on 11 September). Last test older than 40 days; reviewBy on A4 is 2026-11-20.

### Where WordPress 7.1.3 draws avatars in wp-admin
- Fact ID: F4
- Value: every avatar URL is `https://secure.gravatar.com/avatar/<hash>` (link-template.php 4605); admin bar `get_avatar( $user_id, 28 )` and `get_avatar( $user_id, 64 )` (admin-bar.php 279, 325); Comments list `get_avatar( $comment, 32, 'mystery' )`; Users list `get_avatar( $user_object->ID, 32 )`; Dashboard Activity `get_avatar( $comment, 50, 'mystery' )`; Settings > Discussion forces avatars on ("Force avatars on to display these choices") for ten default previews; `get_avatar()` returns false when Show Avatars is off unless `force_display`
- Vantage point: n/a, source code
- As of: WordPress 7.1.3 (current stable on 2026-10-12)
- Source: WordPress core source
- URL: https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-admin/options-discussion.php (and wp-includes/link-template.php, wp-includes/admin-bar.php, wp-includes/pluggable.php, wp-admin/includes/class-wp-comments-list-table.php, class-wp-users-list-table.php, dashboard.php at the same tag)
- Verified 1: 2026-10-12
- Verified 2: 2026-10-12, re-fetched, every string present
- Used in: wp-admin-slow-china (A4)
- Notes: none.

### WordPress 7.1.3 update check timeouts and silent failure
- Fact ID: F8 (mechanism)
- Value: core version check timeout 3 seconds outside cron (30 in cron); plugin and theme checks 3 seconds plus 1 per 10 installed (30 in cron); HTTPS failure retries over HTTP; any non-200 answer returns silently; last_checked written before the request; `_maybe_update_*` on admin_init every 12 hours, plugins check hourly on the Plugins screen, every minute on Dashboard > Updates
- Vantage point: n/a, source code
- As of: WordPress 7.1.3
- Source: WordPress core, wp-includes/update.php
- URL: https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/update.php
- Verified 1: 2026-10-12
- Verified 2: 2026-10-12
- Used in: wp-admin-slow-china (A4)
- Notes: "40 plugins, 7 seconds, then again over HTTP" in A4 is our arithmetic from these timeouts and is labelled as such.

### wordpress.org and api.wordpress.org, GreatFire verdicts
- Fact ID: F8 (reachability)
- Value: https://wordpress.org not blocked, 13 of 13 recent conclusive tests connected normally, last tested 2026-10-11 (verdict revised from partly disrupted: refused connections no longer counted); http://api.wordpress.org not blocked, 1 conclusive test, 2026-10-07; https://api.wordpress.org never tested
- Vantage point: GreatFire's mainland test network
- As of: 2026-10-11 and 2026-10-07
- Source: GreatFire
- URL: https://en.greatfire.org/https/wordpress.org ; https://en.greatfire.org/api/url/api.wordpress.org ; https://en.greatfire.org/https/api.wordpress.org
- Verified 1: 2026-10-12
- Verified 2: 2026-10-12
- Used in: wp-admin-slow-china (A4)
- Notes: https://downloads.wordpress.org last tested 2026-06-18 (older than 90 days, not cited).

### s.w.org reachable, GreatFire
- Fact ID: F11 (and the Do Not Assert list, corrected)
- Value: https://s.w.org not blocked, 1 recent conclusive test, last tested 2026-10-07 (verdict revised from partly disrupted); http://s.w.org intermittent
- Vantage point: GreatFire's mainland test network
- As of: 2026-10-07
- Source: GreatFire
- URL: https://en.greatfire.org/https/s.w.org
- Verified 1: 2026-10-12
- Verified 2: 2026-10-12
- Used in: wp-admin-slow-china (A4)
- Notes: s.w.org left the Do Not Assert "untested" list in PLAN.md on 2026-10-12. Print with its one conclusive test and date.

### WordPress 7.1.3 Font Library downloads Google fonts in the browser
- Fact ID: F11 (corrected)
- Value: collection JSON at `https://s.w.org/images/fonts/wp-7.1/collections/google-fonts-with-preview.json` (fonts.php 269), file URLs on fonts.gstatic.com; editor prompt "To install fonts from Google you must give permission to connect directly to Google servers."; `downloadFontFaceAssets` uses `fetch(new Request(url))` in the browser, then uploads
- Vantage point: n/a, source code
- As of: WordPress 7.1.3
- Source: WordPress core, wp-includes/js/dist/editor.js and wp-includes/fonts.php
- URL: https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/js/dist/editor.js
- Verified 1: 2026-10-12
- Verified 2: 2026-10-12
- Used in: wp-admin-slow-china (A4)
- Notes: Corrects F11's "downloads the font files to the local server". Corrected in PLAN.md the same day.

### Emoji images on s.w.org, detection script in wp-admin
- Fact ID: F11
- Value: `https://s.w.org/images/core/emoji/17.0.2/72x72/` (formatting.php 6032); `add_action( 'admin_print_scripts', 'print_emoji_detection_script' )` (admin-filters.php 59)
- Vantage point: n/a, source code
- As of: WordPress 7.1.3
- Source: WordPress core
- URL: https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/formatting.php
- Verified 1: 2026-10-12
- Verified 2: 2026-10-12
- Used in: wp-admin-slow-china (A4), prose only
- Notes: none.

### WordPress skips a stylesheet whose dependency is missing
- Fact ID: none
- Value: `WP_Dependencies::all_deps()` sets `$keep_going = false; // Item requires dependencies that don't exist.`
- Vantage point: n/a, source code
- As of: WordPress 7.1.3
- Source: WordPress core, wp-includes/class-wp-dependencies.php
- URL: https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/class-wp-dependencies.php
- Verified 1: 2026-10-12
- Verified 2: 2026-10-12
- Used in: wp-admin-slow-china (A4), prose only
- Notes: supports the advice to repoint `google-font-roboto` instead of deregistering it.

### Elementor 4.3.4 editor and admin top bar load Roboto from Google, ungated
- Fact ID: F10
- Value: `register_base_styles()` registers `google-font-roboto` = `https://fonts.googleapis.com/css?family=Roboto:300,400,500,700` with no condition, as a dependency of `elementor-editor` (core/editor/loader/editor-loader.php 475, 511); admin top bar enqueues `https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap` with no condition on Elementor admin screens (modules/admin-top-bar/module.php 41); Google Fonts setting `elementor_google_font`, Advanced tab, default '1' (Enable), read only in includes/fonts.php
- Vantage point: n/a, source code
- As of: Elementor 4.3.4, released 2026-10-05, tested to WordPress 7.1.3
- Source: Elementor plugin zip, WordPress.org
- URL: https://downloads.wordpress.org/plugin/elementor.4.3.4.zip
- Verified 1: 2026-10-12, zip downloaded and read
- Verified 2: 2026-10-12, zip downloaded again, both strings present
- Used in: wp-admin-slow-china (A4)
- Notes: Closes the ledger note of 11 September 2026 that called the ungated Roboto registration unverified.

### MDN: CSS is render blocking
- Fact ID: none
- Value: "CSS is render blocking: the browser blocks page rendering until it receives and processes all the CSS."
- Vantage point: n/a
- As of: last modified 2025-02-25
- Source: MDN Web Docs, Critical rendering path
- URL: https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Critical_rendering_path
- Verified 1: 2026-10-12
- Verified 2: 2026-10-12
- Used in: wp-admin-slow-china (A4)
- Notes: none.

### Cravatar: API format, fallback order, WordPress filter, operator
- Fact ID: F4 (mirror half, corrected)
- Value: requests at `https://cravatar.cn/avatar/HASH`; no Cravatar avatar → tries Gravatar, then QQ, then default; rating option not supported (API docs, modified 2024-09-29). WordPress integration: `get_avatar_url` filter replacing gravatar.com hosts with `cravatar.cn`, or the WPAvatar plugin (modified 2023-08-15). Operator 文派（广州）科技有限公司, 粤ICP备2023091240号-1; caches avatar originals on mainland servers (home page)
- Vantage point: n/a, vendor documentation
- As of: 2024-09-29 (API), 2023-08-15 (WordPress page), 2025-02-17 (home page)
- Source: Cravatar (初认头像)
- URL: https://cravatar.com/developer/api ; https://cravatar.com/developer/for-wordpress ; https://cravatar.cn/
- Verified 1: 2026-10-12
- Verified 2: 2026-10-12
- Used in: wp-admin-slow-china (A4)
- Notes: No dated speed figure for any avatar mirror exists; the fact bank's 284ms, 33ms and 50ms were cut on 2026-10-12. cravatar.cn has no GreatFire test.

### WPAvatar plugin status
- Fact ID: none
- Value: version 1.9.4, last updated 2025-09-13, tested up to 6.8.11, "Replace Gravatar with Cravatar"
- Vantage point: n/a
- As of: 2025-09-13
- Source: WordPress.org plugin directory API
- URL: https://api.wordpress.org/plugins/info/1.0/wpavatar.json
- Verified 1: 2026-10-12
- Verified 2: 2026-10-12
- Used in: wp-admin-slow-china (A4)
- Notes: none.

### WP-China-Yes closed on WordPress.org, continues as WPCY.COM
- Fact ID: F8
- Value: closed 2020-04-14, "Guideline Violation"; GitHub WenPai-org/wp-china-yes readme: stable 3.9.3, tested up to 7.1, improves mainland connections to WordPress.org, Gravatar and public front-end resources, mirror failure falls back to the original upstream, Cravatar
- Vantage point: n/a
- As of: 2020-04-14 (closure); readme last committed 2026-09-03
- Source: WordPress.org plugin directory API; WenPai-org on GitHub
- URL: https://api.wordpress.org/plugins/info/1.0/wp-china-yes.json ; https://raw.githubusercontent.com/WenPai-org/wp-china-yes/main/readme.txt
- Verified 1: 2026-10-12
- Verified 2: 2026-10-12
- Used in: wp-admin-slow-china (A4)
- Notes: The directory API answers HTTP 404 with the closure record in the body.

### Reused in A4 with check 2 on 2026-10-12
- F6 21YunBox Google Fonts pair (datacentre 28 August 2026, home line 30 August 2026): page re-read, figures unchanged.
- F8 Meta Trac #5106 archive capture: re-fetched, quotes present.
- F1 ajax.googleapis.com, GreatFire, last tested 2026-08-22: JSON re-read, unchanged.
- F10 Elementor issue 32838 (Load Google Fonts Locally off by default): referenced in the fixes table only.

## A6 entries, 13 October 2026 (wordpress-icp-filing, and the live pages corrected with it)

Check 1 for the entries marked "agent" was run in this session by a research
subagent (curl and WebFetch, both methods); check 2 was a curl re-fetch in
iteration 8 of /createarticle, same day, every quoted phrase present. Alibaba
help-centre dates are the page's `lastModifiedTime` (Beijing time); Tencent
dates are the page's 最近更新时间.

### Commercial versus non-commercial internet information services (Order 292, art 3 and 4)
- Fact ID: F26
- Value: art 3 "经营性互联网信息服务，是指通过互联网向上网用户有偿提供信息或者网页制作等服务活动"; art 4 licence for commercial, filing for non-commercial, "未取得许可或者未履行备案手续的，不得从事互联网信息服务"
- Vantage point: n/a
- As of: text of 8 January 2011; the revision by State Council Order 797 (6 December 2024, in force 20 January 2025) changed only art 5
- Source: State Council, 互联网信息服务管理办法 (gov.cn gazette 2011)
- URL: https://www.gov.cn/gongbao/content/2011/content_1860864.htm
- Verified 1: 2026-10-13 (08:41 attempt, check 1; and curl this attempt)
- Verified 2: 2026-10-13, curl re-fetch, arts 3, 4, 5, 9 and 19 present
- Used in: wordpress-icp-filing, icp-licence-filing-foreign-companies (en fr es de)
- Notes: Cite as "text of 8 January 2011, which the revision of 6 December 2024 left unchanged". The live guide used to say "as revised on 8 January 2011", which ignored the 2024 revision; fixed in four locales on 2026-10-13.

### Order 292 art 5 as revised: pre-approval before the filing
- Fact ID: none
- Value: "从事新闻、出版、教育等互联网信息服务，依照法律、行政法规以及国家有关规定须经有关主管部门审核同意的，在申请经营许可或者履行备案手续前，应当依法经有关主管部门审核同意。"; in force 2025年1月20日
- Vantage point: n/a
- As of: 6 December 2024 (State Council Order 797)
- Source: State Council Order 797 (国务院令第797号), republished by the Ministry of Ecology and Environment
- URL: https://www.mee.gov.cn/zcwj/gwywj/202412/t20241216_1098631.shtml
- Verified 1: 2026-10-13, curl, item 十八 read
- Verified 2: 2026-10-13, curl re-fetch, both phrases present
- Used in: wordpress-icp-filing

### Electronic bulletin services: art 9 still in the text, approval cancelled, MIIT rule repealed 2014
- Fact ID: none
- Value: Order 292 art 9 "拟开办电子公告服务的 ... 提出专项申请或者专项备案"; MIIT Order 28 (23 September 2014) repeals 《互联网电子公告服务管理规定》; MIIT's interpretation: the rule was built around the "互联网电子公告服务专项审批（备案）" item, repealed "根据国务院取消该审批项目的要求"
- Vantage point: n/a
- As of: 23 September 2014 (Order 28); interpretation published 30 October 2014
- Source: gov.cn gazette 2014 No. 35; Changchun industry bureau republishing the MIIT policy department interview
- URL: https://www.gov.cn/gongbao/content/2014/content_2792646.htm ; http://gxj.changchun.gov.cn/xxfb/zcjd/201410/t20141030_1011983.html
- Verified 1: 2026-10-13, agent (Order 28 and NPPA copy of art 9)
- Verified 2: 2026-10-13, curl re-fetch of both pages, phrases present
- Used in: wordpress-icp-filing
- Notes: Providers still list 电子公告类 as needing pre-approval (Alibaba rejection FAQ below). Print the disagreement; give no verdict on plain blog comments (no current page found).

### MIIT Order 33 as amended 18 January 2024 (non-commercial filing measures)
- Fact ID: F26
- Value: art 5 no service without a filing, including IP-only sites; art 11 pre-approval and 电子公告 special filing; art 12 20 working days; art 13 number "在其网站开通时在主页底部的中央位置" with a link to the MIIT system; art 14 changes "提前三十日"; art 15 cancellation on the day service ends; art 20, 21 annual review (年度审核); art 22 unfiled service 10,000 yuan fine; art 25 missing link: order to correct, then 5,000 to 10,000 yuan
- Vantage point: n/a
- As of: amended by MIIT Order 68, 18 January 2024; page published 2 February 2024
- Source: Ministry of Industry and Information Technology (工业和信息化部), 非经营性互联网信息服务备案管理办法
- URL: https://www.miit.gov.cn/gyhxxhb/jgsj/cyzcyfgs/bmgz/xxtxl/art/2024/art_84a0cfa0ebd049bbbe751dca9a008e56.html
- Verified 1: 2026-10-13, WebFetch
- Verified 2: 2026-10-13, curl, full text read; re-fetched again in iteration 8
- Used in: wordpress-icp-filing; vetting-a-wordpress-agency-china (art 12, citation confirmed)
- Notes: No provider page says the annual review still runs; print "the measures still provide for an annual review", nothing more.

### A first filing's site must be closed during review (Tencent Cloud)
- Fact ID: F25 (extends)
- Value: "新增备案 / 新增网站备案 审核期间不能访问，网站必须关闭或不能通过公网域名/IP 访问，否则无法通过管局核验，可能被驳回。"; "其他类型的备案需要删除域名解析"
- Vantage point: n/a
- As of: 21 August 2026
- Source: Tencent Cloud (腾讯云) documentation 243/19650
- URL: https://cloud.tencent.com/document/product/243/19650
- Verified 1: 2026-10-13, agent (curl full sentence; WebFetch dropped the rejection clause)
- Verified 2: 2026-10-13, curl re-fetch, both phrases present
- Used in: wordpress-icp-filing
- Notes: Supporting: Tencent faq 243/19637 (27 August 2024), "网站在办理首次备案或新增网站过程中，不允许上线访问". Corrects the A6 brief, which promised a "holding-page requirement".

### No web service before the filing number (Alibaba Cloud)
- Fact ID: F25
- Value: "网站在未取得备案号之前不允许开通访问 ... 否则将被阿里云监测系统识别并阻断网站服务。"
- Vantage point: n/a
- As of: 23 September 2026
- Source: Alibaba Cloud (阿里云) help centre, ICP filing FAQ (备案全生命周期管理FAQ)
- URL: https://help.aliyun.com/zh/icp-filing/basic-icp-service/support/faq-about-icp-filing-preparations
- Verified 1: 2026-10-13, agent
- Verified 2: 2026-10-13, curl re-fetch, phrases present
- Used in: wordpress-icp-filing

### Domain requirements for filing (Alibaba Cloud)
- Fact ID: none
- Value: suffix approved by MIIT; registrar approved; holder details match the filing entity; domains registered on alibabacloud.com must move to a mainland registrar and be real-name verified; more than 45 days before expiry
- Vantage point: n/a
- As of: 23 September 2026
- Source: Alibaba Cloud (阿里云) help centre, 域名准备与检查
- URL: https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/prepare-and-check-the-domain-name
- Verified 1: 2026-10-13, agent
- Verified 2: 2026-10-13, curl re-fetch
- Used in: wordpress-icp-filing

### Website name rules (Alibaba Cloud)
- Fact ID: none
- Value: company site name "需由三个及以上汉字组成", no pure numbers, English or domain names, must match content; non-state bodies may not use 中国、中华、中央、人民、人大、国家; 博客、论坛、在线、社区、交流 need pre-approval; provincial extra words on the same page
- Vantage point: n/a
- As of: 21 September 2026
- Source: Alibaba Cloud (阿里云) help centre, 填写网站信息
- URL: https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/fill-in-website-information
- Verified 1: 2026-10-13, agent
- Verified 2: 2026-10-13, curl re-fetch
- Used in: wordpress-icp-filing

### Pre-approval categories (Alibaba Cloud)
- Fact ID: none
- Value: news (互联网新闻信息服务许可证), publishing (网络出版服务许可证), drugs and medical devices (互联网药品信息服务资格证书), culture, film/TV/audiovisual, off-campus tutoring, ride-hailing, finance, religion; some regions ask for a 前置审批承诺书 when none applies
- Vantage point: n/a
- As of: 21 August 2026
- Source: Alibaba Cloud (阿里云) help centre, 前置审批
- URL: https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/pre-approvals
- Verified 1: 2026-10-13, agent
- Verified 2: 2026-10-13, curl re-fetch
- Used in: wordpress-icp-filing (pre-approval table)

### Rejection reasons (Alibaba Cloud)
- Fact ID: none
- Value: filed site must show the filed name "在网站标签页与页面上方"; contact phone "电话不通或无人接听" is a rejection reason; pre-approval industries include 电子公告类 and 游戏类; a transfer is rejected when the filed site cannot be reached
- Vantage point: n/a
- As of: 7 July 2026
- Source: Alibaba Cloud (阿里云) help centre, 备案驳回的常见原因和解决方案
- URL: https://help.aliyun.com/zh/icp-filing/basic-icp-service/support/for-the-record-to-dismiss-the-faq
- Verified 1: 2026-10-13, agent
- Verified 2: 2026-10-13, curl re-fetch, three phrases present
- Used in: wordpress-icp-filing

### Company content must match business scope (Tencent Cloud)
- Fact ID: none
- Value: "非个人备案：主办单位网站内容需是本公司网站，网站内容需符合公司经营范围"
- Vantage point: n/a
- As of: 23 July 2026
- Source: Tencent Cloud (腾讯云) documentation 243/19644
- URL: https://cloud.tencent.com/document/product/243/19644
- Verified 1: 2026-10-13, agent
- Verified 2: 2026-10-13, curl re-fetch
- Used in: wordpress-icp-filing

### Filing is made where the server is (Tencent Cloud, "谁接入谁备案")
- Fact ID: F9
- Value: "不能，备案遵循 "谁接入谁备案" 的原则，您使用哪个接入商的服务器就需要在哪里备案。"
- Vantage point: n/a
- As of: 30 January 2026
- Source: Tencent Cloud (腾讯云) documentation 243/19631
- URL: https://cloud.tencent.com/document/product/243/19631
- Verified 1: 2026-10-13, agent (curl and WebFetch)
- Verified 2: 2026-10-13, curl re-fetch
- Used in: wordpress-icp-filing

### WordPress.com data-centre options
- Fact ID: F9
- Value: "Optimal data center, US West, US Central, US East, EU West"; no mainland option
- Vantage point: n/a
- As of: last reviewed 21 September 2026
- Source: WordPress.com support, choose your site's primary data center
- URL: https://wordpress.com/support/choose-your-sites-primary-data-center/
- Verified 1: 2026-10-13, agent
- Verified 2: 2026-10-13, curl re-fetch
- Used in: wordpress-icp-filing
- Notes: "No mainland server" is read from the list; the page does not state it.

### GreatFire: https://wordpress.com and the wordpress.com domain
- Fact ID: F9 (corrected 2026-10-13)
- Value: https://wordpress.com not blocked, "All 20 recent conclusive tests connected normally", revised verdict (refusals since late August 2026 no longer count); domain: 1,516 URLs tested, 230 blocked, 823 disrupted, 461 normal, 2 no conclusive result; https://zh.wordpress.com 1 of 2 disrupted (13 September 2026)
- Vantage point: GreatFire mainland test network
- As of: last tested 2026-10-11 (URL); most recent domain test 2026-10-13
- Source: GreatFire
- URL: https://en.greatfire.org/https/wordpress.com ; https://en.greatfire.org/domain/wordpress.com
- Verified 1: 2026-10-13, agent (curl and WebFetch)
- Verified 2: 2026-10-13, curl re-fetch, phrases and counts present
- Used in: wordpress-icp-filing; is-wordpress-blocked-in-china (en fr es de, sentence corrected)
- Notes: Replaces the fact bank's "508 of 1,509 blocked, including the Chinese-language properties". GreatFire's domain page still labels the apex intermittent; cite the URL page with its revision note. reviewBy 2027-01-09 on the A6 draft.

### Responsible person: ID documents and face check (Alibaba Cloud)
- Fact ID: none
- Value: "其他国家或地区居民：护照" accepted (required materials, 11 September 2026); "负责人资料需上传居民身份证并完成人脸验证" (upload and verification, 2 June 2026)
- Vantage point: n/a
- As of: 11 September 2026; 2 June 2026
- Source: Alibaba Cloud (阿里云) help centre
- URL: https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/required-materials ; https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/upload-data-and-authenticity-verification
- Verified 1: 2026-10-13, agent
- Verified 2: 2026-10-13, curl re-fetch
- Used in: wordpress-icp-filing
- Notes: No page found on how a passport holder passes the face check; printed as such.

### MIIT SMS verification within 24 hours (Alibaba Cloud)
- Fact ID: none
- Value: "请务必在 24 小时内完成短信核验。逾期需重新提交备案流程。"
- Vantage point: n/a
- As of: 17 September 2025
- Source: Alibaba Cloud (阿里云) help centre, 工信部短信核验
- URL: https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/sms-check
- Verified 1: 2026-10-13, agent
- Verified 2: 2026-10-13, curl re-fetch (twice)
- Used in: wordpress-icp-filing

### Empty-shell cancellation when access is withdrawn (Tencent Cloud)
- Fact ID: none
- Value: withdrawn access turns the record into "空壳网站/APP" which the regulator cancels; a dead phone number at a spot check can cancel a filing
- Vantage point: n/a
- As of: 3 February 2026
- Source: Tencent Cloud (腾讯云) documentation 243/20220
- URL: https://cloud.tencent.com/document/product/243/20220
- Verified 1: 2026-10-13, agent
- Verified 2: 2026-10-13, curl re-fetch
- Used in: wordpress-icp-filing

### Public security filing number at the bottom of the homepage (Shenzhen PSB)
- Fact ID: F26 (PSB half)
- Value: "网站通过公安联网备案后，需在网站首页底部的显著位置悬挂公安联网备案号。"
- Vantage point: n/a
- As of: 10 June 2023
- Source: Shenzhen Public Security Bureau (深圳市公安局)
- URL: https://ga.sz.gov.cn/ZT/HLWSYSQ/CJWT/content/post_10642126.html
- Verified 1: 2026-10-13, agent
- Verified 2: 2026-10-13, curl re-fetch
- Used in: wordpress-icp-filing
- Notes: A city bureau, not the Ministry of Public Security; beian.mps.gov.cn is a script app with no dated text. The 30-day deadline stays on Alibaba's overview (26 August 2026).

### Baidu Tongji: install the code before </head> on every page
- Fact ID: F23 (refined 2026-10-13)
- Value: "请将异步分析代码安装在标签</head>标记前"; "在网站的所有页面都安装代码"
- Vantage point: n/a
- As of: 22 September 2021 (holmes page); legacy page undated, same text
- Source: Baidu Tongji (百度统计) help
- URL: https://tongji.baidu.com/web/help/article?id=176&type=0
- Verified 1: 2026-10-13, agent (curl, two URLs)
- Verified 2: 2026-10-13, curl re-fetch
- Used in: wordpress-icp-filing
- Notes: Related: baidu-tongji-generator closed on WordPress.org 27 July 2023 (security issue); WPJAM Basic 7.1.2 (3 October 2026, 4,000+ installs) has a Tongji module.

### ICP filing is free; the server is not (Alibaba Cloud)
- Fact ID: F26
- Value: "ICP 备案不收取费用，但 ICP 备案需要购买支持备案的云服务器，您在购买云服务器时会产生费用。"
- Vantage point: n/a
- As of: 23 April 2026
- Source: Alibaba Cloud (阿里云) help centre, 不同场景下的备案常见问题
- URL: https://help.aliyun.com/zh/icp-filing/basic-icp-service/product-overview/faq-about-icp-filing-applications-in-different-scenarios
- Verified 1: 2026-10-13 (08:41 attempt)
- Verified 2: 2026-10-13, curl re-fetch, sentence present
- Used in: wordpress-icp-filing, icp-licence-filing-foreign-companies (en fr es de)

### Baidu render UA announcement, re-fetched for baidu-seo-ranking-in-china
- Fact ID: F19
- Value: 发布日期 2017-03-24; Baiduspider-render/2.0 fetches CSS, JavaScript and images, beta on selected sites from 24 March 2017
- Vantage point: n/a
- As of: 24 March 2017
- Source: Baidu Search Resource Platform (百度搜索资源平台), 百度Spider新增渲染抓取UA公告
- URL: https://ziyuan.baidu.com/wiki/990
- Verified 1: 2026-10-01 (ledger, curl twice)
- Verified 2: 2026-10-13, curl re-fetch
- Used in: baidu-seo-ranking-in-china (en fr es de, new blockquote replacing "Baidu's crawler can't render it")

### Reused in A6 and the corrected live pages with check 2 on 2026-10-13
- F26 Alibaba 阿里云ICP备案流程概述 (26 August 2026): 1~2 and 1~20 working days, 公安备案 within 30 days, re-fetched.
- F27 Alibaba international accounts EN (20 August 2026): re-fetched.
- F25 Alibaba 域名/网站无法访问 (4 September 2026) and Alibaba footer number page (12 August 2026): reused in the ICP guide locales, unchanged since 2026-09-29.
- F26 Shanghai CA licence guide (1 June 2015) "60日内完成审查工作": check 2 completed today (the 2026-09-24 entry owed it).
- F26 MIIT 107 notice (8 April 2024) and NDRC negative list 2024 (50% cap, e-commerce carved out): re-fetched today, text present.
- F31 Chinafy benchmark, posted 2026-04-14: re-fetched; 614 sites, "2 in 3 ... failed to load", TTFB "4 to 4.5x".

### HubSpot hosts, GreatFire (T2-02)
- Fact ID: F35 (HubSpot line added 2026-10-14), F42
- Value: https://api.hubspot.com 100% disrupted, 1 of 1 conclusive tests, last tested 2026-09-10, first tested 2020. https://app.hubspot.com not blocked, 0 of 1, last tested 2026-09-22 ("Verdict revised": a refused connection no longer counts). https://hs-sites.com not blocked, 0 of 1, last tested 2026-08-02. http://js.hs-scripts.com (plain HTTP only) 0 of 1, last tested 2026-09-13; GreatFire notes HTTP and HTTPS are filtered by different means (on the app.hubspot.com page). https://js-eu1.hs-scripts.com/26918530.js last tested 2026-07-14 (older than 90 days; date printed, no verdict, F42). Never tested over HTTPS: js.hs-scripts.com, js.hs-analytics.net, js.hs-banner.com, js.hscollectedforms.net, js.hsforms.net, forms.hsforms.com, api.hsforms.com, js.usemessages.com, api.usemessages.com, track.hubspot.com, no-cache.hubspot.com, cdn2.hubspot.net, hubspotusercontent-na1.net.
- Vantage point: GreatFire reachability verdicts (no named probe)
- As of: the test dates above
- Source: GreatFire
- URL: https://en.greatfire.org/https/api.hubspot.com, /https/app.hubspot.com, /https/hs-sites.com, /http/js.hs-scripts.com, /https/js-eu1.hs-scripts.com/26918530.js, /https/js.hs-scripts.com (and the other never-tested pages)
- Verified 1: 2026-10-14, curl of each page
- Verified 2: 2026-10-14, curl re-fetch in iteration 8, every date and count present
- Used in: hubspot-china
- Notes: 21YunBox publishes no HubSpot figure: its support page (reviewed 2026-10-07) is compliance only, and its *A Day of Third-Party Requests* study has no HubSpot host.

### HubSpot documentation (T2-02)
- Fact ID: none (vendor documentation)
- Value: (1) Troubleshoot the tracking code (updated 23 July 2026): loader js.hs-scripts.com, tracking script js.hs-analytics.net, js.hs-banner places cookies even without the banner, chatflows add api.usemessages.com; if the code is not working, data "may be incomplete or unavailable", chat "may not work as expected", HubSpot "can't recover tracking data that was missed while the code was inactive". (2) Install the tracking code (updated 29 September 2026): paste before the closing </body> tag; "Features that depend on the tracking code, such as live chat widgets, will not load." (3) Use non-HubSpot forms (updated 27 July 2026): "The non-HubSpot forms tool is dependent on the tracking code. HubSpot can only collect form submissions if the tracking code loads successfully."; alternative: Submit data to a form API. (4) HubSpot forms, developer docs (modified 29 March 2026): embed code loads //js.hsforms.net/forms/embed/v2.js; "HubSpot forms should only be loaded using the HubSpot-hosted JavaScript file. Making a copy of the form embed code and self-hosting it is not supported." (5) Submit data to a form, unauthenticated (modified 29 March 2026): https://api.hsforms.com/submissions/v3/integration/submit/{portalId}/{formGuid}. (6) Cloud Infrastructure and Data Hosting FAQ (updated 24 July 2026): AWS in the US (Virginia, Oregon), Canada (Montreal), Australia (Sydney), EU (Germany); no China region. (7) Reverse proxy overview (modified 9 October 2026): "HubSpot's CDN (powered by Cloudflare)"; proxies must run on a CDN or distributed environment, not a single server; setup "is not provided by HubSpot's support team". (8) CDN, security, and performance overview (modified 10 February 2026): "globally distributed Content Delivery Network"; neither (7) nor (8) mentions China. (9) Display system domains (updated 13 August 2026): US East accounts use [Hub ID].hs-sites.com.
- Vantage point: n/a, documentation
- As of: the page dates above
- Source: HubSpot Knowledge Base and HubSpot developer documentation
- URL: https://knowledge.hubspot.com/reports/how-do-i-know-if-my-hubspot-tracking-code-is-working ; https://knowledge.hubspot.com/reports/install-the-hubspot-tracking-code ; https://knowledge.hubspot.com/forms/use-non-hubspot-forms ; https://developers.hubspot.com/docs/cms/start-building/building-blocks/modules/forms ; https://developers.hubspot.com/docs/api-reference/legacy/marketing/forms/v3-legacy/submit-data-unauthenticated ; https://knowledge.hubspot.com/account-security/hubspot-cloud-infrastructure-and-data-hosting-frequently-asked-questions ; https://developers.hubspot.com/docs/cms/best-practices/testing-staging-performance/reverse-proxies/overview ; https://developers.hubspot.com/docs/cms/best-practices/testing-staging-performance/overview ; https://knowledge.hubspot.com/domains-and-urls/display-system-domains-in-domain-settings
- Verified 1: 2026-10-14, curl
- Verified 2: 2026-10-14, curl re-fetch, every quoted string and date present
- Used in: hubspot-china

### Reused in T2-02 with check 2 on 2026-10-14
- F25 Alibaba Cloud 域名/网站无法访问 (4 September 2026): "必须先完成网站备案" re-fetched, present.

### Replacement GreatFire verdicts for the rows 21YunBox withdrew (dependency table, GA guide)
- Fact ID: F33, F34, F35, F38, F39, F42 (all corrected 2026-10-14)
- Value: static.hotjar.com 1 of 2 disrupted, 2026-09-30. www.clarity.ms not blocked, 0 of 1, 2026-09-15. cdn.mxpnl.com 100% disrupted, 1 of 1, 2026-09-06. api.mixpanel.com not blocked, 0 of 1, 2026-09-19 (revised). api.segment.io not blocked, 0 of 1, 2026-09-15. cdn.segment.com reachable, no recent tests, 2026-05-20. plausible.io 1 of 2 disrupted, 2026-08-20. cdn.matomo.cloud never tested. form.typeform.com not blocked, 0 of 1, 2026-09-30 (revised). embed.typeform.com never tested. cdn-images.mailchimp.com blocked, 1 of 1, 2026-09-10. cdn.shopify.com not blocked, 0 of 2, 2026-10-08 (revised). algolia.net (apex) 100% disrupted, 2 of 2, 2026-08-31. browser.sentry-cdn.com 100% disrupted, 1 of 1, 2026-10-01. connect.facebook.net blocked, no recent tests, 2026-05-27.
- Vantage point: GreatFire reachability verdicts (no named probe)
- As of: the test dates above
- Source: GreatFire
- URL: https://en.greatfire.org/https/<host> for each host above
- Verified 1: 2026-10-14, curl of each page (T2-02 research)
- Verified 2: 2026-10-14, curl re-fetch after the corrections were written, every date and count present
- Used in: src/data/chinaDependencies.ts and the generated table of great-firewall-what-it-blocks (en fr es de); google-analytics-china analytics table (en fr es de)
- Notes: Mixpanel's library host is named in Mixpanel's own JavaScript SDK docs (https://docs.mixpanel.com/docs/tracking-methods/sdks/javascript, modified 9 October 2026), checked twice on 2026-10-14.

### 21YunBox figures still on the page (Wix, AWS CloudFront), rechecked
- Fact ID: F33, F38, F39
- Value: Wix, a 532ms median first byte, 0 of 3 within a 60-second ceiling, Alibaba Cloud cn-zhangjiakou, 2026-08-30. AWS CloudFront (a load of aws.amazon.com/cloudfront): datacentre 3 of 3, median first byte 665ms, LCP 4,028ms, 2026-08-28; Beijing residential broadband 3 of 3, median first byte 718ms, LCP 2,180ms, 2026-08-30.
- Vantage point: Alibaba Cloud (阿里云) cn-zhangjiakou; Beijing residential broadband (CloudFront)
- As of: measured 28 and 30 August 2026; pages reviewed 2026-10-07
- Source: 21YunBox support pages
- URL: https://www.21cloudbox.com/support/wix-china.html ; https://www.21cloudbox.com/support/aws-cloudfront-china.html
- Verified 1: 2026-10-14
- Verified 2: 2026-10-14, re-fetched, all figures present
- Used in: great-firewall-what-it-blocks (en fr es de: opening blockquote now cites Wix only; CloudFront row)
- Notes: **The CloudFront home line used to be logged and printed as 0 of 3 at 743ms.** The page now reads 3 of 3 at 718ms. Verdict changed from "splits by vantage point" to "slow"; SPEC.md's list of split hosts corrected.

## T6-04 entries, 15 October 2026 (upgrade-choosing-web-agency-china, and /website-in-china/ corrected with it)

### Delivery-layer services and the ICP filing
- Fact ID: none
- Value: Chinafy: "Navigate the complex ICP license process with Chinafy, Alibaba Cloud, and other partners", listing ICP Filing Fast Track, ICP Commercial License, Company Registration. 21YunBox: "We handle the entire ICP application process on your behalf, from initial assessment to final approval."
- Vantage point: n/a, product descriptions
- As of: Chinafy page undated (copyright 2025), read 15 October 2026; 21YunBox page reviewed 28 August 2026
- Source: Chinafy, China go-to-market page; 21YunBox, China ICP licence page
- URL: https://www.chinafy.com/china-go-to-market and https://www.21cloudbox.com/china-icp-license-website.html
- Verified 1: 2026-10-15, WebFetch, both sentences confirmed
- Verified 2: 2026-10-15, curl re-fetch in iteration 8, both sentences present
- Used in: upgrade-choosing-web-agency-china (the delivery-layer cells; nothing quoted, no figure)
- Notes: Corrects the live cell "Cannot build, design, file or write anything". Product descriptions only: never a figure, never a motive. Not printed as a citation because the page states no figure.

### Baidu indexing timetable for a new site: no primary source
- Fact ID: none
- Value: none found. A search on 15 October 2026 (百度搜索资源平台 新站 收录 需要多长时间 官方) returned only Zhihu, CSDN and cnblogs estimates ("1-2个月都有可能", "3-7天内发起首次抓取"), none from Baidu.
- Vantage point: n/a
- As of: 15 October 2026
- Source: none
- URL: none
- Verified 1: 2026-10-15, search
- Verified 2: n/a (nothing to cite)
- Used in: not used. "Baidu indexing usually takes two to four weeks" cut from choosing-web-agency-china (T6-04 change 10). The same planning line on other live pages is not contradicted by a source, only unsourced; it stays until a piece about Baidu indexing researches it.

### Reused in T6-04 with check 2 on 2026-10-15
- Alibaba Cloud ICP filing review windows and the 30-day public security filing (F26): check 1 and check 2 on 2026-10-15, curl; page lastModifiedTime still 26 August 2026.
- Shanghai CA value-added telecoms licence, 60 days from acceptance (F26): check 1 and check 2 on 2026-10-15, curl.
- Alibaba Cloud footer number linked to beian.miit.gov.cn, fine of 5,000 to 10,000 yuan: check 1 and check 2 on 2026-10-15, curl; lastModifiedTime 12 August 2026.
- Alibaba Cloud international accounts cannot apply; filing entity a mainland enterprise or resident (F27): check 1 and check 2 on 2026-10-15; lastModifiedTime 20 August 2026.
- Alibaba Cloud mainland server, ECS "more than 3 months", Simple Application Server "3 months or longer" (F27): check 1 and check 2 on 2026-10-15; the page's lastModifiedTime is now 24 September 2026 (was 2 September), phrases unchanged. Cite as September 2026.
- Order 292 art 3, commercial services provided to users for a fee (有偿): check 1 and check 2 on 2026-10-15. Used for the /website-in-china/ correction ("takes payment" becomes "charges users for information or online services", every locale).
- Tencent Cloud 243/19650, a first filing's site closed during review: check 1 and check 2 on 2026-10-15; 最近更新时间 2026-08-21. Used for the /website-in-china/ correction ("carry the holding page through review" cut, every locale).
- Statcounter, Baidu 46.65% all platforms and 60.15% mobile, September 2026: check 1 and check 2 on 2026-10-15, headline figures unchanged. Used in choosing-web-agency-china; reviewBy 2027-01-13 on that page for the monthly refresh.

## Retired entries

(Stale entries, kept for traceability.)

### 21YunBox per-tool figures (Typeform, Mailchimp, Hotjar, Clarity, Mixpanel, Segment, Plausible, Matomo, Shopify, Algolia, Sentry), retired 2026-10-14
- Fact ID: F33, F34, F35, F38, F39
- Was: Typeform 0 of 3, first byte 907ms; Mailchimp 0 of 3, 812ms, paint 2.0s; Hotjar 3 of 3 at 487ms, LCP 1,660ms; Clarity 0 of 3, 541ms; Mixpanel 0 of 3, 391ms; Segment 3 of 3, 900ms and 1,084ms; Plausible 3 of 3, 550ms, LCP 1,208ms; Matomo cloud 3 of 3, 516ms, LCP 1,532ms; Shopify 3 of 3, 575ms, median load 3.6s; Algolia 0 of 3, 1,027ms, paint 3.4s; Sentry 3 of 3, 252ms (Alibaba Cloud cn-zhangjiakou, 28 to 30 August 2026)
- URLs: https://www.21cloudbox.com/support/<tool>-china.html for each tool above
- Check of 2026-10-14: **failed, twice.** 21YunBox rewrote all eleven pages on 7 October 2026 ("Reviewed 2026-10-07") into a compliance format (data residency, PIPL). No probe, no figure, no date on any of them (0 millisecond figures on each page, fetched at research time and again after the corrections). A figure its publisher no longer carries is not printed as theirs (precedent: cdnjs, unpkg, jsDelivr, 11 October 2026).
- Live pages corrected the same day: the dependency table (src/data/chinaDependencies.ts, regenerated into great-firewall-what-it-blocks en fr es de), the opening blockquote, the 21YunBox note and the "Not yet probed" paragraph of great-firewall-what-it-blocks (en fr es de), and the analytics table and its prose in google-analytics-china (en fr es de), each through /deep-translate. PLAN.md F33 to F35, F38, F39, F42 and the T2-06, T2-08, T3-05 and T6-05 briefs corrected; build-briefs rerun.

### AWS CloudFront home line "0 of 3 at 743ms", retired 2026-10-14
- Fact ID: F39
- Was: Beijing China Mobile home line 0 of 3 at a 743ms first byte, 30 August 2026; verdict "splits by vantage point"
- URL: https://www.21cloudbox.com/support/aws-cloudfront-china.html
- Check of 2026-10-14: **contradicted.** The page now reads 3 of 3 from a Beijing residential broadband line, median first byte 718ms, LCP 2,180ms, 30 August 2026. Replaced by the entry "21YunBox figures still on the page (Wix, AWS CloudFront), rechecked" above.

### 21YunBox per-host CDN figures (cdnjs, unpkg, jsDelivr), retired 2026-10-11
- Fact ID: F7
- Was: cdnjs 3 of 3 at a 478ms median first byte (LCP 1,524ms); unpkg 3 of 3 at 824ms from the datacentre and 0 of 3 page loads at a 1,026ms median first byte from the Beijing home line; jsDelivr 3 of 3 at 769ms (LCP 2.6s) and a 493ms to 1,086ms twelve-hour swing with a 1,780ms p95 (entries of 22 September 2026 above)
- URLs: https://www.21cloudbox.com/support/cdnjs-china.html, https://www.21cloudbox.com/support/unpkg-china.html, https://www.21cloudbox.com/support/jsdelivr-china.html
- Check of 2026-10-11: **failed.** 21YunBox rewrote all three pages on 7 October 2026 ("Reviewed 2026-10-07") into a compliance format. Fetched twice: no figure, no probe, no date on any of them. A figure its publisher no longer carries is not printed as theirs. None of the figures was printed on the site (the T2-05 partial draft that used them was withdrawn on 2 October); the "Reachable, slow / Both complete" row on is-wordpress-blocked-in-china that rested on them was corrected in four locales on 2026-10-11.


## T4-01 source verification, 16 October 2026

Check 1: 2026-10-16, direct HTTPS fetch. Check 2: 2026-10-16, independent re-fetch during createarticle iteration 8. All 51 pages returned source content; dated verdict, count and timing claims matched on both reads. Full per-source receipts and text paths: editorial/logs/2026-10-16-t401/research-check1.json and research-check2.json. The October manifest in that directory records each row, source, vantage and test date. No verification date is represented as a test date.

- https://en.greatfire.org/https/ajax.googleapis.com: 2026-08-22; blocked; 1/1 blocked. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/algolia.net: 2026-08-31; disrupted; 2/2 disrupted. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/api.amplitude.com: 2026-09-10; not blocked; 0/1 disrupted. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/api.mapbox.com: 2026-08-31; not blocked; 0/1 disrupted. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/api.mixpanel.com: 2026-09-19; not blocked; 0/1 disrupted. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/api.segment.io: 2026-09-15; not blocked; 0/1 disrupted. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/api2.hcaptcha.com: 2026-09-14; not blocked; 0/1 disrupted. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/browser.sentry-cdn.com: 2026-10-01; disrupted; 1/1 disrupted. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/calendly.com: 2026-10-03; not blocked; 0/1 disrupted. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/cdn-images.mailchimp.com: 2026-09-10; blocked; 1/1 blocked. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/cdn.amplitude.com: 2026-09-14; not blocked; 0/1 disrupted. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/cdn.jsdelivr.net: 2026-10-15; not blocked; 0/4 disrupted. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/cdn.matomo.cloud: no dated test, untested. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/cdn.mxpnl.com: 2026-09-06; disrupted; 1/1 disrupted. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/cdn.shopify.com: 2026-10-08; not blocked; 0/2 disrupted. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/cdnjs.cloudflare.com: 2026-09-27; not blocked; 0/1 disrupted. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/challenges.cloudflare.com/turnstile/v0/api.js: 2026-10-11; not blocked; 0/2 disrupted. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/connect.facebook.net: 2026-05-27; blocked; historical, no recent conclusive count. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/disqus.com: 2026-09-13; blocked; 2/2 blocked. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/embed.typeform.com: no dated test, untested. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/events.mapbox.com: 2026-03-12; blocked; historical, no recent conclusive count. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/fast.wistia.com: 2026-03-17; not blocked; historical, no recent conclusive count. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/firebase.google.com: 2026-09-14; disrupted; 2/2 disrupted. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/fonts.googleapis.com: 2026-10-15; not blocked; 0/4 disrupted. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/fonts.gstatic.com: 2026-10-15; not blocked; 0/7 disrupted. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/form.typeform.com: 2026-09-30; not blocked; 0/1 disrupted. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/js.hs-scripts.com: no dated test, untested. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/kit.fontawesome.com: 2026-09-13; not blocked; 0/1 disrupted. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/munchkin.marketo.net: 2026-05-31; not blocked; historical, no recent conclusive count. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/open.spotify.com: 2026-09-12; blocked; 4/4 blocked. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/platform.twitter.com: 2026-07-07; blocked; historical, no recent conclusive count. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/plausible.io: 2026-08-20; disrupted; 1/2 disrupted. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/snap.licdn.com: 2026-09-22; not blocked; 0/1 disrupted. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/static.hotjar.com: 2026-09-30; disrupted; 1/2 disrupted. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/static.zdassets.com: 2026-10-08; not blocked; 0/2 disrupted. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/tile.openstreetmap.org: 2026-09-07; blocked; 1/1 blocked. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/unpkg.com: 2026-08-14; not blocked; 0/1 disrupted. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/use.fontawesome.com: 2026-10-11; not blocked; 0/1 disrupted. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/use.typekit.net: 2026-09-22; not blocked; 0/1 disrupted. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/w.soundcloud.com: 2026-06-24; blocked; historical, no recent conclusive count. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/webflow.com: 2026-08-23; disrupted; 1/1 disrupted. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/widget.intercom.io: 2026-09-23; not blocked; 0/1 disrupted. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/www.clarity.ms: 2026-09-15; not blocked; 0/1 disrupted. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/www.google-analytics.com: 2026-07-24; blocked; 1/1 blocked. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/www.google.com/recaptcha: 2026-09-28; blocked; 1/1 blocked. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/www.instagram.com: 2026-10-03; blocked; 2/2 blocked. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/www.paypal.com: 2026-09-25; not blocked; 0/1 disrupted. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.
- https://en.greatfire.org/https/www.squarespace.com: 2026-10-03; not blocked; 0/3 disrupted. Verified 1 and 2: 2026-10-16. GreatFire names no probe vantage.

21YunBox sources: https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html, https://www.21cloudbox.com/support/aws-cloudfront-china.html, https://www.21cloudbox.com/support/wix-china.html. Verified 1 and 2: 2026-10-16. Reused F6/F7 paired figures unchanged; Wix and CloudFront figures from 14 October unchanged. Additional consumer observations on 30 August 2026, Beijing China Mobile residential broadband: use.typekit.net 0 of 11 answers, static.hotjar.com 0 of 6, fast.wistia.com 6 failures of 15 requests (9 answers), challenges.cloudflare.com 3 failures of 12 requests (9 answers). The latter two are response observations, not completed player/challenge workflows. The CloudFront product-page source names only Beijing residential broadband, so remove the inferred carrier from the live table. F42 corrected for dated Adobe, Font Awesome and LinkedIn records; Marketo has a historical 31 May 2026 reachable verdict.
