# Fact Bank (extracted verbatim from PLAN.md section 4, 6 September 2026)

Briefs cite these by ID (F1 to F46). Read the entry before using the fact, and read "Do Not Assert" before drafting anything. Regenerate this file from PLAN.md if the plan changes; never edit facts here by hand.

---

## 4. Fact Bank

Verified 29 August, 4 September and 6 September 2026. Plugin facts come from reading the source of the versions named. Cite the source in the article when the fact carries weight.

### Read this before citing any latency number

Every figure below carries a vantage point, and the vantage point changes the answer. A datacenter probe and a consumer broadband line in the same city can return opposite verdicts on the same host. Where a fact says "datacenter", treat the number as a ceiling and not as a user experience. Where a fact carries both, cite both. Never publish a latency figure without naming where it was measured and when.

### Blocked, confirmed

- **F1.** `ajax.googleapis.com`, Google Hosted Libraries. Fully blocked. Repeated probes from an Alibaba Cloud instance in Zhangjiakou returned no first byte before a 60-second abandon. Render blocking, so the page halts rather than slows. Thousands of commercial themes still load jQuery from here.
- **F2.** Google reCAPTCHA, fully blocked. Gates form submission, so the form dies rather than degrades. Google's own documented workaround is swapping the host to `www.recaptcha.net`; that datapoint was last confirmed February 2026 and should be retested before publishing it as a fix.
- **F3.** Google Analytics fully blocked, Google Maps JS API fully blocked, Google Tag Manager intermittent. Even when the GTM container loads, the collection beacon to `google-analytics.com` fails, so the data is lost either way. PIPL cross-border transfer rules are a second, independent reason not to use GA.
- **F4.** Gravatar (`secure.gravatar.com`) blocked. WordPress calls it on comments and throughout wp-admin by default, so it slows the dashboard, not only the front end. Mainland mirrors exist: Cravatar (`cravatar.cn`) around 284ms, `cdn.sep.cc` around 33ms, WeAvatar around 50ms.
- **F5.** YouTube and Vimeo fully blocked, both the player and the oEmbed discovery call. Youku, Bilibili and Tencent Video are the substitutions.

### Reachable, and the guides say otherwise

- **F6. CORRECTED 6 SEPTEMBER. Google Fonts depends entirely on where you measure, and v1 of this plan got it wrong.** From an Alibaba Cloud mainland instance on 29 August 2026, `fonts.googleapis.com` completed 73 of 73 requests at a median 111ms TTFB and `fonts.gstatic.com` 73 of 73 at 102ms. From a Beijing residential broadband line on 28 August 2026, the same hosts answered **0 of 54** and **0 of 6** requests respectively. Both measurements are real. The datacenter one is not the visitor experience. **Do not publish "Google Fonts is not blocked in China" as a flat correction.** The accurate statement is that it resolves from mainland datacenters and frequently does not resolve on consumer connections, which is precisely why self-hosting is correct: it removes a variable that changes by network, by resolver and by hour. `fonts.google.com`, the browsing interface, is blocked either way.
- **F7.** `cdnjs.cloudflare.com` around 478ms TTFB, `unpkg` around 824ms, `cdn.jsdelivr.net` 493ms quiet hour to 1,086ms peak with a 95th percentile of 1,780ms. All complete. jsDelivr lost its China ICP filing in December 2021 and its mainland points of presence with it. An article that lumps "CDNs" together gets this backwards: the fatal one is Google Hosted Libraries, not the category.
- **F8.** `wordpress.org` and the update servers are reachable but rate limit mainland IPs, returning HTTP 429 on update, plugin-install and theme-install calls. Documented since October 2019. It is why the WP-China-Yes mirror ecosystem exists. The dashboard does not announce this; it simply stops offering updates.
- **F9.** WordPress.com is not wholesale blocked, contrary to most guides. The apex often resolves; 508 of 1,509 tested URLs are blocked, including the Chinese-language properties. The binding constraint is different: you cannot file an ICP for a domain whose hosting you do not control.

### Plugin and theme internals, read from source 4 September 2026

- **F10.** **Elementor 4.2.4.** Front end loads Google Fonts from `fonts.googleapis.com`. Font Awesome and eicons are **bundled locally**, not CDN loaded, contrary to the common claim. The editor registers Roboto from Google and that registration is **not** gated by the Google Fonts setting, so turning the setting off does not stop the editor calling Google. Settings: Elementor > Settings > Advanced > **Google Fonts** (`elementor_google_font`, default Enable) and Elementor > Settings > Performance > **Load Google Fonts Locally** (`elementor_local_google_fonts`, default **Disable**). Template cloud at `my.elementor.com`, editor JSON at `assets.elementor.com`, opt-in Mixpanel analytics at `api-eu.mixpanel.com`.
- **F11.** **Core Gutenberg, WordPress 7.1.** Loads **no** Google Fonts on a public page. The two `fonts.googleapis.com` references in `script-loader.php` are dead registrations, one marked "No longer used in core as of 5.7". The Font Library fetches collection metadata from `s.w.org` and downloads the font files to the local server, so installed fonts are self-hosted. Real external front-end calls are Gravatar and twemoji from `s.w.org`.
- **F12.** **Polylang 3.8.7 makes zero runtime external calls.** No translation API, no license server, no CDN in the free plugin. Its `zh_CN` default slug is **`zh`**, not `zh-hans`, and it emits `hreflang="zh"` for a Simplified-only site, never `hreflang="zh-Hans"`. Override filter: `pll_rel_hreflang_attributes`.
- **F13.** **TranslatePress 3.3.4 makes runtime external calls in the request path**, to `translation.googleapis.com` and `mtapi.translatepress.com`, when a string is not yet in its database. A Google API host on a mainland server means untranslated strings and a stalled request.
- **F14.** **WPML** default slug for Simplified Chinese is `/zh-hans/`, and WPML support stated in February 2025 that default language codes cannot be edited. Its automatic translation is a cloud service that fails closed if `ate.wpml.org` and `ams.wpml.org` are unreachable.
- **F15.** **Wordfence 9.0.0 ships every rate limit as DISABLED.** Its only crawler policy whitelists **Google alone**, by reverse DNS to `.googlebot.com`. There is **no Baidu equivalent**, so Baiduspider gets no protection the moment someone turns crawler rate limits on. Wordfence has no user-agent allowlist at all; its allowlist is IP-only, and Baidu publishes no stable IP range.
- **F16.** **Solid Security 10.0.3** (packaged as better-wp-security, now branded Kadence Security) ships a HackRepair ban list that returns 403 for `360Spider` and `YisouSpider` at the server config level. It is opt-in, `"default": false`, but a client who enabled "Default Ban List" is 403ing Chinese crawlers and does not know it.
- **F17.** **WP Rocket's Remove Unused CSS is a SaaS.** Their own September 2024 post confirms optimizations run on WP Rocket's servers. That means their servers must fetch **your** site from outside China, which is the direction that actually breaks for a mainland-hosted site.
- **F18.** LiteSpeed Cache 7.9.1 and W3 Total Cache 2.10.6 ship empty user-agent exclusion lists, so neither blocks Baiduspider by default. LiteSpeed preconnects `fonts.gstatic.com`, which per F6 is harmless.

### Baidu, SEO tooling and search

- **F19.** **Baiduspider does render JavaScript.** Baidu announced `Baiduspider-render/2.0` in April 2017 explicitly to fetch CSS, JavaScript and images. The widely repeated opposite claim traces to a January 2017 source that predates it by three months. Baidu publishes nothing on rendering coverage or queue latency, so server-side rendering remains the defensive practice, framed as risk reduction rather than as documented Baidu policy.
- **F20.** Verify Baiduspider by **reverse DNS**, never by user agent. A genuine IP resolves to a hostname ending `.baidu.com` or `.baidu.jp`. UA strings are `Baiduspider/2.0` and `Baiduspider-render/2.0`. Published IP allowlists on Chinese SEO blogs go stale.
- **F21.** Yoast and Rank Math each output exactly one Baidu-specific thing, the site verification meta tag (`baidu-site-verification`). Everything else is manual: no push to the 普通收录 or 快速收录 API, no Baidu Tongji (百度统计) injection, no Baidu-format structured data, no robots.txt handling for Baiduspider.
- **F22.** Maintained Baidu push plugins exist. `baidu-submit-link` v4.5.0, updated 4 September 2026, tested to WP 7.1, roughly 2,000 active installs, posts to the real endpoint `data.zz.baidu.com/urls` and covers Baidu, Bing, IndexNow, Yandex and Toutiao. It also phones home to `bsl.api.wbolt.com` and uses `oauth2.googleapis.com` for its Google module, which fails from a mainland server. Alternatives: `zhanzhangb-baidu-submit` v1.9.6, `baiduseo` v2.2.4.
- **F23.** **There is no maintained dedicated Baidu Tongji plugin.** Standard practice remains pasting the `hm.baidu.com` snippet into the theme header or a code-snippets plugin.
- **F24.** Baidu killed fast inclusion in April 2024, replacing it with VIP-gated fast crawl, and recalled sitemap quotas in September 2023. Realistic timeline to first indexing is two to four weeks.

### Infrastructure, filing and hosting

- **F25.** **Ports 80 and 443 are unusable on a mainland IP until the ICP filing clears.** Not restricted, closed, enforced by the provider. No soft launch is possible.
- **F26.** ICP filing (ICP备案) is free, reviewed by the provincial Communications Administration (省级通信管理局) with MIIT spot checks. Published timelines run 10 to 30 working days. Plan three to six weeks, assuming the mainland entity exists. A commercial ICP licence (ICP许可证) is nationally reviewed at 60 to 90 working days; plan twelve to eighteen weeks. Foreign ownership above 50% remains restricted outside the pilot areas of Beijing, Shanghai Pudong, Hainan Free Trade Port and Shenzhen.
- **F27.** **Alibaba runs two disjoint platforms.** alibabacloud.com is international, cannot deploy to mainland regions, and does not support ICP filing. aliyun.com is the China platform and requires a Chinese business licence and local identity verification. The filing workflow is Chinese-language only.
- **F28.** **No managed WordPress exists in China.** Alibaba Simple Application Server (轻量应用服务器), Tencent Lighthouse and Huawei FlexusL each ship a one-click WordPress **image** on a self-administered virtual server. No managed updates, no managed backups, no WordPress-aware support.
- **F29.** **Vercel states in its own knowledge base** (November 2025) that it cannot guarantee availability or performance within mainland China, and that `.vercel.app` subdomains may be blocked or throttled. GreatFire classifies `vercel.app` as mostly blocked. Vercel's own suggested mitigations are a custom domain, minimizing third-party dependencies, and a separate in-country deployment requiring ICP licensing.
- **F30.** Cloudflare's standard and free plans serve mainland visitors from the nearest overseas edge, typically Hong Kong, Japan or the US west coast. The in-country network is an Enterprise product operated with JD Cloud, requires a valid ICP filing per apex domain, and requires JD Cloud content review before onboarding.

### Performance benchmarks

- **F31.** Chinafy's 2026 benchmark, published April 2026, tested 614 sites across eleven verticals using WebPageTest from Beijing, Virginia and London. **66.4% failed to load successfully in Beijing.** Median visual load 17.2 seconds. 44% of Beijing tests timed out. TTFB 4 to 4.5 times higher in Beijing. Method is stated, so it is citable with attribution, noting it is a vendor benchmark.
- **F32.** CWF's own numbers, already published on the site: median 1.2 seconds after migration against 23.4 seconds on a European origin, 99.98% uptime over 90 days, 48ms, 36ms and 61ms response from Beijing, Shanghai and Guangzhou, 51-point bounce rate reduction versus translated sites.


### Third-party web dependencies, verified 6 September 2026

Source key: GF = GreatFire, with last-tested date. 21YB = 21YunBox probe from an Alibaba Cloud mainland instance, 28 August 2026 unless stated. Anything marked unverified must be probed before it appears in copy.

- **F33. The worst failure mode is not "blocked", it is "answers then hangs."** Clarity, Mixpanel, Typeform, Mailchimp, Wix and Algolia all return a first byte and then fail to complete inside 60 seconds. The page around them looks fine, the widget stays empty, no error surfaces, and the site owner never learns. A hard block is easier to diagnose than this.
- **F34. Analytics.** Hotjar 100% disrupted (GF 2026-08-20), hosted on Google Cloud. Meta Pixel 100% blocked (GF 2026-07-27). **Amplitude splits: `cdn.amplitude.com` reachable, `api.amplitude.com` blocked (GF 2026-04-22)**, so the script loads and events never post, which reads as working. Clarity 541ms then 0 of 3 completions (21YB). Mixpanel 391ms then 0 of 3 (21YB). Segment completes at 900 to 1,084ms (21YB). Plausible completes at 550ms, Matomo cloud at 516ms, and both are self-hostable, which removes the border question and the PIPL question together.
- **F35. Forms and chat.** Typeform 907ms then 0 of 3 completions (21YB): the iframe stays empty, submissions vanish silently. Mailchimp embed 812ms then 0 of 3 (21YB), and the same failure hits tracking pixels inside delivered email. hCaptcha not blocked (GF 2026-07-29) but `api2.hcaptcha.com` shows intermittent, and that is the endpoint a challenge needs. Calendly not blocked (GF 2026-08-18). Drift not blocked (GF 2026-08-22). Intercom, Crisp, Tawk.to and Zendesk are **unverified**.
- **F36. Embeds.** Disqus 100% blocked, 41 of 43 URLs (GF 2026-09-03, the freshest verdict in the set). SoundCloud blocked, 72 of 79 URLs (GF 2026-04-22). Spotify blocked (GF 2026-06). Instagram blocked (GF 2026-04-15). X/Twitter `platform.twitter.com` blocked (GF 2026-04-25) and the widget script is render-blocking in the default embed. Wistia reachable (GF 2026-06-26), AWS-hosted, so slow rather than blocked.
- **F37. Maps are a licensing question before they are a firewall question.** `events.mapbox.com` is fully blocked while `api.mapbox.com` is intermittent (GF 2026-06-07), so GL JS renders a half-working map plus a hanging telemetry request. OpenStreetMap tiles blocked, all 70 URLs (GF 2026-03-10). Separately, publishing map data in China requires a licensed provider, which is why AMap (高德地图), Baidu Maps (百度地图) and Tencent Maps (腾讯地图) are the answer rather than a faster mirror.
- **F38. Platforms.** Wix 532ms then 0 of 3 completions (21YB), frequently no response at all. Shopify loads at 575ms TTFB and 3.6s median load (21YB); the cause is Cloudflare backing the storefront CDN with no mainland presence by default. **Webflow and Squarespace show a specific split: HTTP not blocked, HTTPS intermittent** (GF 2026-07-30 and 2026-08-21). Real traffic is HTTPS and is filtered on the TLS SNI, so the HTTP verdict is misleading.
- **F39. Infrastructure.** Algolia 1,027ms then 0 of 3 completions (21YB), the slowest host measured, hosted on Google Cloud. Firebase blocked, consistent with the googleapis.com family, with 100% packet loss reported from Shanghai against 0% from the US. AWS CloudFront completes from a datacenter at 665ms TTFB but 0 of 3 from a Beijing consumer line (21YB): the global distribution does not serve mainland China, and AWS China (Ningxia and Beijing, operated by Sinnet and NWCD) is a separate partition requiring a China account and ICP filing. Sentry is the fastest foreign host measured at 252ms, with the caveat that gaps in China error data are not evidence of stability, since an SDK post from a failing network is the least likely to arrive.
- **F40. Stripe is the wrong question.** It is not a compatibility problem, it is a licensing one: mainland China is not a supported Stripe country, so domestic acquiring does not exist regardless of whether `js.stripe.com` loads. The real article is how to accept Alipay (支付宝), WeChat Pay (微信支付) and UnionPay (银联). PayPal `www.paypal.com` not blocked (GF 2026-08-27) but 9 of 27 tested URLs disrupted, and the disrupted ones are checkout redirect paths.
- **F41. Replacements, the practical set.** Analytics: Baidu Tongji (百度统计), Sensors Data (神策), GrowingIO, or self-hosted Plausible or Matomo on Aliyun. Video: Youku (优酷), Bilibili (哔哩哔哩), Tencent Video (腾讯视频), or Aliyun VOD. Maps: AMap, Baidu Maps, Tencent Maps. Captcha: Aliyun Captcha (阿里云验证码), Tencent Captcha (天御), GeeTest (极验). Chat: Meiqia (美洽), Zhichi (智齿客服), Netease Qiyu (网易七鱼). Forms: Jinshuju (金数据), Wenjuanxing (问卷星), Tencent Survey (腾讯问卷). Comments: Changyan (畅言), LiveRe (来必力), self-hosted Waline. Email: Aliyun DirectMail (邮件推送), Tencent Cloud SES, Sendcloud. Search: Aliyun OpenSearch (开放搜索), self-hosted Meilisearch. Icons: Alibaba Iconfont (iconfont.cn). Auth: WeChat OAuth (微信开放平台), Aliyun SMS, Aliyun IDaaS.
- **F42. Eleven dependencies have no test record at all** and must be probed before they appear in any published table: Crisp, Tawk.to, Loom, Sanity, Netlify, Bootstrap CDN, `js.stripe.com`, the LinkedIn Insight Tag, plus Turnstile, Adobe Fonts, Font Awesome, Marketo and the HubSpot script, which all rest on verdicts older than 90 days.

### Competitive intelligence on the cluster itself

- **F43.** Chinafy runs 1,762 URLs. Their `/technology/{tool}-china` directory is 104 pages at 120 to 250 unique words, identical H1 across all of them, no meta descriptions, 65 shared boilerplate sentences, 95 of 104 last touched in 2023. Their `/blog/does-{tool}-work-in-china` set is roughly 50 articles at 800 to 1,200 words with per-topic structure, refreshed into 2026. The blog ranks; the directory does not.
- **F44.** AppInChina runs 219 pages on `/does-{tool}-work-in-china/`, published as a single burst of 153 pages in March 2025 and 42 in April 2025, with only 24 touched since. Pages run 180 to 300 words on a rigid three-block template. They carry named bylines and dates, which is the one thing they do better than Chinafy's directory. They have survived four consecutive spam updates, but they rank because the SERPs are empty rather than because the pages are good. Their pages have no server-rendered `<title>`, which is a retrieval liability for AI crawlers that do not execute JavaScript.
- **F45.** Nobody in this competitive set publishes a measurement. No tables, no test dates, no named test locations, no latency figures, across every compatibility page examined at Chinafy, AppInChina, 21cloudbox, Eggplant and the smaller agencies. Chinafy's one original-data asset, a four-part load study of ten named real sites, is separate from the compatibility cluster and is not used to support it.
- **F46.** AI answer engines retrieve at passage level, with roughly 44% of citations coming from the first 30% of a page, a strong freshness bias, and a preference for entity density and specific figures. ChatGPT's retrieval bot does not execute JavaScript. Astro ships static HTML, and CWF's `robots.txt` already allows GPTBot, OAI-SearchBot, ChatGPT-User and ClaudeBot, which is ahead of most of this set. Source: aggregated vendor analysis, not primary research from the model providers, so treat as directional.

### Do Not Assert

Facts that are commonly repeated and that we cannot stand behind. Every one of these appears in competitor copy.

- **"Google Fonts is blocked in China"** as a flat claim, **and equally "Google Fonts is not blocked in China"** as a flat correction. Both are wrong. See F6 and cite the vantage point.
- **Any latency figure without a named vantage point and date.** A datacenter number presented as a visitor experience is the most common error in this category and we are not going to make it.
- **"93% of WordPress sites perform poorly in China" and "the average site loses 44% of its resources."** Chinafy marketing copy from 2023 with no sample size, no method and no linked study. Their own 2026 benchmark contains no WordPress breakdown at all. Do not cite.
- **"Baidu cannot read JavaScript."** See F19.
- **"Static sites load faster than WordPress in China," presented as measured.** No published static-versus-WordPress China benchmark exists. Argue from request topology instead, see brief A11.
- **"Baidu reads your Yoast schema."** No current Baidu documentation confirms schema.org JSON-LD support.
- Reachability from mainland China of `my.elementor.com`, `assets.elementor.com`, `s.w.org`, `mtapi.translatepress.com`, `ate.wpml.org`, or the QUIC.cloud endpoints. Untested. Say "unverified" or leave it out.
- Divi's runtime host list. Closed source, not inspected. Only the setting names are confirmed.
- Any of the eleven untested dependencies in F42, until the harness has probed them.
- That a competitor's cluster "failed" or "was penalized." Chinafy's directory is decaying and AppInChina's is surviving. Describe what is observable, not motive or outcome.
- Any claim that WPML automatic translation does not work from China. Unverified in both directions.

---

---

---

---
