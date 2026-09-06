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

(Move a fact bank entry here once check 2 is done, in the full entry format.)

## Measurements (ours)

Every entry names the vantage point, the attempts, the abandon threshold and
the run_id from `harness/runs/`.

(None yet. The harness is not up.)

## Third-party measurements

(21YunBox, GreatFire, Chinafy benchmark entries in full entry format, as
they get used.)

## Retired

(Stale entries, kept for traceability.)
