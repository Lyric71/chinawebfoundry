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
- Effect: both claims **cut**. Only the two version numbers reached `wordpress-plugins-china`, and the caching section rests on WP Rocket and QUIC.cloud instead. Re-read both plugin sources from a local install before F18 is cited again, and correct PLAN.md if the preconnect is genuinely absent.

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

## Retired entries

(Stale entries, kept for traceability.)
