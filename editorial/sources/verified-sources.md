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
- Vantage point: mainland; carrier and date NOT published. TODO T3-01
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
- Vantage point: Beijing, Shanghai, Guangzhou; carriers and window NOT published. TODO T3-02
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
- Effect: both claims **cut**. Only the two version numbers reached `wordpress-plugins-china`, and the caching section rests on WP Rocket and QUIC.cloud instead. Re-read both plugin sources from a local install before F18 is cited again, and correct PLAN.md if the preconnect is genuinely absent.

### The www.recaptcha.net workaround
- Fact ID: F2
- Verified 1: 2026-08-29 (fact bank), last confirmed February 2026
- Verified 2: **not attempted, 2026-09-11.** F2 itself says the datapoint should be retested before it is published as a fix. It was not retested this run.
- Effect: `wordpress-plugins-china` publishes reCAPTCHA's blocked verdict from both vantage points and offers domestic captcha replacements. It does not mention the host swap. Retest before any piece prints it, T2-03 included.

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

## Retired entries

(Stale entries, kept for traceability.)
