# CHINA CONTENT PROGRAM: "wordpress china" and "web agency china"

**Version:** 3.0, 6 September 2026. Single-file consolidation of editorial plan v2.0, the T1 to T6 briefs and the measurement harness spec.
**Repo:** chinawebfoundry.com (Astro + Tailwind + Vercel)
**Scope:** 78 pieces over 26 weeks, from 8 September 2026 to 8 March 2027.
**Companion docs, still separate:** `claude/spec-move-1-architecture.md` (shipped), `claude/keyword-plan-wordpress-china.md`, `claude/competitive-landscape-2026-08.md`
**Already shipped, do not redo:** `is-wordpress-blocked-in-china`, `wordpress-hosting-china`, `choosing-web-agency-china`

---

## How to use this document

Everything needed to execute is in this file. Nothing here depends on another document.

**Order of execution.**

1. Read section 0. It explains why the plan has this shape, and two of its findings override instructions you may have seen elsewhere.
2. Build the harness in section 3. It blocks every T2 and T4 piece and it is the reason this volume is defensible rather than reckless.
3. Work the calendar in section 12, one week at a time, three slots a week.
4. For each piece, open its brief, read the fact IDs it cites in section 4, then invoke the `createarticle` skill with the brief as the content brief, the site as chinawebfoundry.com, and the audience as "people out of China". Run `contentquality` on the output. Verify metadata against the ceilings before delivering.
5. Check the acceptance list in section 13 before marking anything done.

**Two rules that override everything else in this file.**

Nothing on the Do Not Assert list in section 4 gets published, in any tier, at any time, however convenient it would be.

No T2 or T4 piece publishes without an original measurement carrying a named vantage point and a date. If the harness has not produced one, the piece waits.

**Standing editorial rules, from the project instructions.** American English, US newspaper journalist style. No em dashes anywhere. No summary or conclusion sections. All statistics and citations in blockquote format. Chinese terms as English term (Chinese characters), no pinyin. Zero HTML in body copy. CTAs as plain text labels, no links. YAML frontmatter with title, slug, description, excerpt, template. Filename matches slug. Title 52 characters or fewer, meta description 152 or fewer, excerpt 25 words or fewer.

**No deliberate typos, misspellings or planted grammatical errors.** Humanize through cadence, sentence length variation, structure and word choice only. This overrides any older instruction asking for planted errors.

---

## Contents

| Section | What it is |
|---|---|
| 0 | Why this plan has this shape, and what changed |
| 1 | The cadence model: 78 pieces, 54 new URLs, and why those differ |
| 2 | The measurement engine, in strategy terms |
| 3 | The measurement harness build spec. **Blocking.** |
| 4 | Fact Bank: 46 verified facts, and the Do Not Assert list |
| 5 | T1, 16 flagship briefs and the money page |
| 6 | T2, 14 compatibility briefs |
| 7 | T3, 10 case study briefs |
| 8 | T4, 6 measurement report briefs |
| 9 | T5, 8 editorial guide briefs |
| 10 | T6, 10 upgrade work orders |
| 11 | T7, the translation budget |
| 12 | The 26-week calendar |
| 13 | Guardrails, the kill switch, and the acceptance list |
| 14 | Open items |

---

## 0. Why this plan has this shape

The brief was three pieces a week for six months. That is 78 pieces. Getting there required changing the shape of the plan rather than only the length of the calendar, because two research findings made the obvious version of the volume play actively dangerous.

**Finding one. Chinafy already ran this experiment on their own domain, and the templated half lost.**

They built two compatibility assets. A programmatic directory at `/technology/{tool}-china`, 104 pages, and an editorial set at `/blog/does-{tool}-work-in-china`, roughly 50 articles.

> The 104 directory pages carry 120 to 250 unique words each, share an identical H1 (the literal string "Supported Technologies") across all 104, carry no meta description, and share 65 boilerplate sentences. Their sitemap shows 95 of 104 last touched in 2023 and only 7 updated since January 2024. The Google Font API page carries roughly two sentences of unique content.

The editorial articles run 800 to 1,200 words with per-topic structure and are refreshed into 2026. Search any of these queries and it is the blog that ranks, not the directory. The company that supposedly owns this cluster built both versions and the templated one is decaying.

**Finding two. Translating the cluster is the single largest risk in the plan, and it is free to remove.**

The site is 308 URLs: 77 English pages mirrored into three locales. 78 new articles at four locales is 312 new URLs on a 308-URL domain.

> Google's search spam policies, last updated 28 August 2026, define scaled content abuse as "many pages generated for the primary purpose of manipulating search rankings and not helping users," and list among its examples "scraping feeds, search results, or other content to generate many pages (including through automated transformations like synonymizing, translating, or other obfuscation techniques)."

Templated compatibility content, auto-translated three ways, at 4x multiplication, on a domain that is already three quarters machine-multiplied, is close to a literal match for that policy text. There have been three spam updates in the last six months, the most recent completing on 21 August.

**What that means for this plan.** The genuinely cluster-shaped content is capped at 14 pieces, English only. The rest of the 78 is editorial, proof and original research, which are protective rather than risky. And the whole thing is built on a measurement engine that no competitor has, described in section 2.

**One correction you must apply before anything publishes.** See F6 in section 4. The Google Fonts finding circulated earlier was a datacenter measurement and it does not hold on a consumer connection. The live article `is-wordpress-blocked-in-china` currently carries the version F6 retracts, and T6-02 fixes it in week 1.

---

---

## 1. The cadence model

### Three pieces a week is not three new URLs a week

That distinction is the whole design. Pieces of work and newly indexed URLs are different quantities, and only the second one carries risk.

| Work type | Pieces | New English URLs | Risk profile |
|---|---|---|---|
| T1. Flagship articles and money page | 16 | 16 | Low. Long, specific, individually researched. |
| T2. Compatibility cluster, measured | 14 | 14 | **The only cluster-shaped content.** Mitigated by original measurement. |
| T3. Case studies | 10 | 10 | None. Proof content. Actively protective. |
| T4. Measurement reports | 6 | 6 | None. Original research. The strongest signal available. |
| T5. Editorial guides | 8 | 8 | Low. |
| T6. Existing page upgrades | 10 | **0** | None. No new URLs at all. |
| T7. Translation batches, earned only | 14 | varies | Low, because gated on performance. |
| **Total** | **78** | **54 English** | |

Fifty-four new English pages against 77 existing takes the site to 131. The cluster-shaped portion is 14 of 131, roughly 11%. For comparison, the programmatic sections on sites hit by the August 2026 spam update ran around 85% of indexed pages.

### The weekly mix

Never three of the same type in one week. A working rhythm:

- **One T1 or T5 article.** The substantial piece.
- **One T2 compatibility page or T3 case study.** The fast piece.
- **One T6 upgrade, or a T4 report in the weeks it falls due.** The no-new-URL piece.

### Translation policy

Shipping all four locales in the same commit is correct for 16 pieces and wrong for 78.

- **T1 and the money page:** all four locales, same commit. Unchanged.
- **T2 compatibility cluster:** **English only.** No exceptions. `hreflang` set to `x-default` on the English URL.
- **T3, T4, T5:** English first. Translate individually after 90 days, and only pages that have earned traffic or an inquiry.
- **T7 is the translation budget.** Fourteen slots across the 26 weeks, allocated on performance, not on principle.

---

---

## 2. The measurement engine

This section is the difference between a plan that works and a plan that gets the site suppressed. Build it before week one.

### Why it exists

Across every competitor page examined in this category, not one contains a table, a test date, a measured latency figure, or a named test location. Chinafy's compatibility articles are prose. AppInChina's are 180 to 300 words. The whole market describes the problem and nobody measures it.

> Google's helpful content guidance, last updated 10 December 2025, asks whether content demonstrates "depth of knowledge (for example, expertise that comes from having actually used a product or service, or visiting a place)."

CWF has hardware inside the Great Firewall. Running a real test from a real Chinese network on a real date, and publishing the number, is both the cheapest differentiator available and the specific thing that converts this cluster from scaled content into original research under Google's own definition. It is also what makes the pages citable: an answer engine asked whether Typeform works in China currently has nothing specific to quote.

### The vantage point problem, and why it is not optional

A single probe location will produce confident numbers that are wrong.

> 21YunBox published a comparison on 28 August 2026 running identical hosts from an Alibaba Cloud instance in cn-zhangjiakou and from a Beijing residential broadband line. `fonts.googleapis.com` returned 100% success at 111ms from the datacenter and answered 0 of 54 requests from the home line. `cdn.jsdelivr.net` returned 100% success at 660ms from the datacenter and 0 of 36 from the home line. AWS CloudFront loaded 3 of 3 from the datacenter and 0 of 3 from the home line.

Datacenter probes systematically flatter. Every published number must name its vantage point, and the plan requires both.

### Build spec

**Tier one, the cheap half.** A mainland ECS or CVM instance running cron. `curl -w` for TTFB, plus a headless Chromium run that records which requests produced no event at all. Write to a time series. Roughly the cost of the instance.

Two requirements that are easy to get wrong. Do not run the probe on the same cloud as anything you are measuring; 21YunBox names probe co-location as an error that more than doubled their own headline figure. And instrument specifically for the no-event case: a blocked request commonly produces no error and no timing entry, so a naive harness logs it as absent rather than failed.

**Tier two, the half that matters.** A paid last-mile service running the same host list from consumer connections.

| Option | Shape | Notes |
|---|---|---|
| **Tencent Cloud CAT (云拨测)** | Monthly subscription, roughly ¥1,299 Basic to ¥9,999 Flagship, 15-day trial | Best fit. IDC plus LastMile nodes, documented API. Basic covers Beijing, Shanghai, Guangzhou, Shenzhen last-mile. |
| **boce.com (拨测)** | Pay per check, roughly ¥0.002 per node-check | Includes domain pollution monitoring (域名污染监控), which is the firewall question rather than a generic uptime question. Has an API. |
| **Alibaba CloudMonitor 站点监控** | OpenAPI available | Note: ARMS Cloud Dial Test stopped accepting new subscriptions on 1 June 2024. Use Site Monitoring instead. |
| itdog.cn, 17ce.com, 站长之家 | Free, interactive | Spot-checking a verdict. Not a harness. |

**What it feeds.** Every T2 page. Every T4 report. The China Site Scanner product. And the standing fact bank, which stops being a document that ages and becomes a table that refreshes.

### Publication rule this creates

**Every T2 page carries at least one original measurement: a test date, a named Chinese network or cloud region, and either a latency figure or a specific failure mode. If a page cannot carry a number, it does not publish.**

That rule is the load-bearing element of the entire volume plan. Without it, 78 pieces in six months on a young domain is the pattern that gets classified. With it, the cluster is original research.

---

---

## 3. The measurement harness build spec

**Blocking for T2 and T4.** Build it before week 2. Nothing in either tier can publish without it.

### 3.1 Why this exists

Across every competitor page examined in this category, not one contains a table, a test date, a measured latency figure, or a named test location. Chinafy's compatibility articles are prose. AppInChina's run 180 to 300 words. The whole market describes the problem and nobody measures it.

> Google's helpful content guidance, last updated 10 December 2025, asks whether content demonstrates "depth of knowledge (for example, expertise that comes from having actually used a product or service, or visiting a place)."

That sentence is the most favorable line in Google's documentation for a Shanghai agency, and it is currently unclaimed. The harness is what converts a large content cluster from scaled content into original research under Google's own definition, and it is the only thing that makes these pages quotable by an answer engine.

It has a second job. The output feeds the China Site Scanner, which turns a marketing asset into a product with a live data backing.

---

### 3.2 The finding that dictates the architecture

A single probe location produces confident numbers that are wrong.

> 21YunBox ran identical hosts on 28 August 2026 from an Alibaba Cloud instance in cn-zhangjiakou and from a Beijing residential broadband line. `fonts.googleapis.com` returned 100% success at 111ms from the datacenter and answered 0 of 54 requests from the home line. `cdn.jsdelivr.net` returned 100% success at 660ms from the datacenter and 0 of 36 from the home line. AWS CloudFront loaded 3 of 3 from the datacenter and 0 of 3 from the home line.

Datacenter probes systematically flatter. **Two vantage points are mandatory, not a refinement.** A number published without its vantage point is worse than no number, because it will be quoted back at us.

---

### 3.3 Architecture

Two tiers. Tier one is cheap and continuous. Tier two is paid and is the one that tells the truth about visitors.

### Tier one: mainland cloud probe

A single ECS or CVM instance in a mainland region, running scheduled jobs.

- **Provider:** Alibaba Cloud (阿里云) or Tencent Cloud (腾讯云), mainland region.
- **Do not** run it on the same cloud as anything being measured. 21YunBox names probe co-location as an error that more than doubled their own headline figure.
- **Cost:** the instance. Single digit dollars a month.
- **What it runs:** a `curl` pass for connection timings, and a headless Chromium pass that records the full request waterfall including requests that produced no event at all.

### Tier two: last-mile probe

The same host list, run from consumer connections.

| Option | Shape | Notes |
|---|---|---|
| **Tencent Cloud CAT (云拨测)** | Roughly ¥1,299/month Basic to ¥9,999 Flagship. 15-day trial covering 5 tasks. | Recommended. Basic gives IDC nodes across seven regions plus LastMile nodes in Beijing, Shanghai, Guangzhou and Shenzhen. Documented API at cloud.tencent.com/document/api/280. Minimum interval on trial is 5 minutes. |
| **boce.com (拨测)** | Roughly ¥0.002 per node-check. | Strong alternative and cheaper at low volume. Includes domain pollution monitoring (域名污染监控), which tests the firewall question directly rather than generic uptime. Has an API and an MCP service. |
| **Alibaba CloudMonitor 站点监控** | OpenAPI available. | Note that ARMS Cloud Dial Test stopped accepting new subscriptions on 1 June 2024. Use Site Monitoring, not Cloud Dial Test. |
| itdog.cn, 17ce.com, 站长之家 | Free, interactive. | For spot-checking a single verdict by hand. Not a harness. |

**Recommendation:** Tencent Cloud CAT Basic, plus boce.com for the pollution checks. Roughly ¥1,300 to ¥1,600 a month all in.

### Third source, free

GreatFire's Analyzer is the censorship verdict of record and is worth pulling daily as a cross-check. It has no documented public API, so scraping is the only route. Treat it as a source of truth for blocked or not blocked, never as a latency source.

---

### 3.4 The two failure modes the harness must distinguish

This is the part a naive implementation gets wrong.

**Blocked.** No first byte, no response, and frequently **no event at all**. A blocked request commonly produces no error and no timing entry, so a harness that logs only what it receives records this as absent rather than failed. Instrument for absence explicitly: build the expected request list from the page's own dependency graph, then diff it against what the waterfall actually contains.

**Answers then hangs.** A first byte arrives, and the request never completes. Clarity, Mixpanel, Typeform, Mailchimp, Wix and Algolia all behave this way. This is the worse failure in practice, because the page around the widget looks fine, no error surfaces, and the site owner never learns. A harness that only records TTFB will report these hosts as healthy.

**Therefore every probe records both a first-byte time and a completion outcome, with an abandon threshold of 60 seconds.** A host that answers in 400ms and never finishes is not a 400ms host.

---

### 3.5 Data schema

One row per host, per vantage point, per run.

```json
{
  "run_id": "2026-10-01T02:00:00Z",
  "host": "cdn.mxpnl.com",
  "dependency": "Mixpanel",
  "category": "analytics",
  "vantage": {
    "type": "datacenter",
    "provider": "tencent-cloud",
    "region": "ap-shanghai",
    "carrier": null
  },
  "dns_ms": 34,
  "connect_ms": 128,
  "tls_ms": 210,
  "ttfb_ms": 391,
  "complete_ms": null,
  "outcome": "answered_no_completion",
  "bytes": 0,
  "abandon_after_ms": 60000,
  "http_status": null,
  "resolved_ip": "104.18.x.x",
  "attempts": 3,
  "successes": 0,
  "notes": ""
}
```

`outcome` is a closed enum, and the enum is the whole point:

| Value | Meaning |
|---|---|
| `ok` | Completed inside the threshold. |
| `slow` | Completed, but above the category's slow threshold. |
| `answered_no_completion` | First byte received, never finished. The silent killer. |
| `no_response` | Connection attempt, no first byte. |
| `no_event` | The request never appeared in the waterfall at all. |
| `dns_fail` | Resolution failed or returned a poisoned answer. |
| `not_tested` | In the list, not probed this run. Published as such, never omitted. |

`not_tested` exists so the published tables can carry honest gaps. An explicit "we have not measured this" row is itself differentiating, because nobody else publishes measurement at all.

---

### 3.6 The host list

Version the list in the repo as `hosts.yml`. It is an editorial asset, not a config file, and changes to it are reviewed.

**Seed set, roughly 60 hosts, grouped as the published tables are grouped:**

- **Fonts and asset CDNs:** fonts.googleapis.com, fonts.gstatic.com, ajax.googleapis.com, cdnjs.cloudflare.com, cdn.jsdelivr.net, unpkg.com, use.typekit.net, use.fontawesome.com, kit.fontawesome.com, stackpath.bootstrapcdn.com
- **Analytics and tags:** www.google-analytics.com, www.googletagmanager.com, static.hotjar.com, www.clarity.ms, cdn.mxpnl.com, api.mixpanel.com, cdn.segment.com, api.segment.io, plausible.io, connect.facebook.net, snap.licdn.com, cdn.amplitude.com, api.amplitude.com
- **Forms, chat and conversion:** www.google.com/recaptcha/api.js, hcaptcha.com, api2.hcaptcha.com, challenges.cloudflare.com, embed.typeform.com, calendly.com, js.hs-scripts.com, widget.intercom.io, js.driftt.com, client.crisp.chat, embed.tawk.to, static.zdassets.com, munchkin.marketo.net, chimpstatic.com
- **Embeds and media:** www.youtube.com, player.vimeo.com, fast.wistia.com, www.loom.com, w.soundcloud.com, open.spotify.com, www.instagram.com, platform.twitter.com, disqus.com, secure.gravatar.com
- **Maps:** maps.googleapis.com, api.mapbox.com, events.mapbox.com, tile.openstreetmap.org
- **Platforms and infra:** cdn.shopify.com, webflow.io, www.squarespace.com, static.parastorage.com, cdn.contentful.com, cdn.sanity.io, algolia.net, cdn.auth0.com, firebaseio.com, browser.sentry-cdn.com, js.stripe.com, www.paypal.com
- **Edge and hosting:** cloudfront.net test distribution, vercel.app test deployment, netlify.app test deployment, a control host on Alibaba Cloud CDN, a control host on Tencent Cloud CDN
- **WordPress specific:** api.wordpress.org, downloads.wordpress.org, s.w.org
- **Controls:** baidu.com and one known-good mainland host, to distinguish a probe fault from a real block.

**Priority for the first run.** The eleven dependencies with no test record at all, because they are currently unpublishable: Crisp, Tawk.to, Loom, Sanity, Netlify, Bootstrap CDN, js.stripe.com, the LinkedIn Insight Tag, plus Turnstile, Adobe Fonts, Font Awesome, Marketo and the HubSpot script, whose verdicts are older than 90 days.

---

### 3.7 Schedule

| Job | Frequency | Vantage |
|---|---|---|
| Full host list, connection timings | Every 6 hours | Tier one, datacenter |
| Full host list, headless waterfall | Daily, 02:00 and 14:00 China Standard Time | Tier one, datacenter |
| Priority subset, roughly 25 hosts | Daily | Tier two, last mile, at least Beijing and Shanghai |
| Full host list | Weekly | Tier two, last mile, all available carriers |
| GreatFire cross-check | Daily | External |

**Sample at two times of day, minimum.** Latency varies by hour and a single daily sample will produce a monthly index that swings for reasons that have nothing to do with the hosts.

**Retention.** Keep every raw run indefinitely. The archive is what makes the monthly index a trend rather than a snapshot, and by month six it is an asset no competitor can reconstruct.

---

### 3.8 Publication contract

What the harness owes the editorial tier.

**Every published figure carries four things: the number, the vantage point, the method, and the date.** No exceptions, on any page, in any tier.

**Rounding.** Report TTFB to the nearest 10ms above 100ms. Precision beyond that implies a stability the measurement does not have.

**Three runs minimum** before any figure is published, with successes stated as a fraction. "3 of 3 completed" and "0 of 3 completed" are both publishable. "391ms" alone is not.

**Never blend vantage points into an average.** The datacenter number and the consumer number are separate rows, always. Blending them produces the exact error the whole harness exists to correct.

**Never publish a figure older than 90 days without re-running it.** A stale number on a page that sells measurement is the worst possible look.

---

### 3.9 Output artifacts

1. **`data/china-hosts-latest.json`** in the repo, regenerated nightly, read at build time by the Astro dependency table component. This is what makes the tables on `great-firewall-what-it-blocks` and the T2 pages update without an editorial pass.
2. **A monthly snapshot** frozen and dated, feeding each China Dependency Index edition. Never overwritten.
3. **A public host list and method page**, so the studies can link to their own methodology rather than restating it.
4. **A feed into the China Site Scanner**, so a user scan compares their site's dependencies against current measured status rather than against a hardcoded list.

---

### 3.10 Acceptance criteria

- [ ] Tier one instance running in a mainland region, on a different cloud from the primary measurement targets
- [ ] Tier two subscription live, with at least Beijing and Shanghai last-mile nodes
- [ ] `hosts.yml` committed, roughly 60 hosts, grouped and versioned
- [ ] All seven `outcome` enum values reachable in practice, verified against known cases: a known-blocked host returns `no_response` or `no_event`, and a known answers-then-hangs host returns `answered_no_completion`
- [ ] The no-event case is detected by diffing expected against observed requests, not by waiting for an error
- [ ] Three attempts per host per run, successes reported as a fraction
- [ ] 60-second abandon threshold enforced and recorded
- [ ] `data/china-hosts-latest.json` written nightly and consumed at build time
- [ ] Monthly snapshot frozen and dated
- [ ] The eleven untested dependencies probed and their rows filled before any T2 page cites them
- [ ] Method page published before the first index edition

---

### 3.11 Risks

**Probe co-location.** Running the probe on the cloud you are measuring inflates the result. Named by 21YunBox as an error that more than doubled their own headline figure. Check the target list against the probe provider before every host list change.

**Reading absence as health.** A naive collector logs what arrives. The blocked hosts are the ones that never arrive. This is the failure that would quietly invalidate every published table, and it is why the expected-versus-observed diff is in the acceptance criteria rather than in a nice-to-have list.

**Single vantage point drift.** If the tier two subscription lapses, tier one keeps producing confident numbers that are no longer qualified. Alert on tier two silence, and pull the consumer column from published tables rather than publishing a datacenter number in its place.

**Measuring a CDN edge rather than the service.** Several hosts resolve to different IPs from different provinces. Record `resolved_ip` on every row so a verdict change can be traced to a routing change rather than to a policy change.

**The list becoming the product.** The temptation at month three will be to expand to 300 hosts. Resist it. Sixty hosts measured well, twice a day, from two vantage points, is worth more than 300 measured once. The competitive advantage is the method, not the coverage.

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

## 5. T1: the flagship briefs

Sixteen pieces, briefed in full. These carry the argument and they ship in all four locales in the same commit. Unchanged from v1 except that every reference to F6 must now use the corrected version.

### 5a. Cluster A: "wordpress china"

Ten articles. Each links up to `/wordpress-in-china/` and sideways to two siblings. Anchor text varies; no anchor repeats more than three times across the cluster.

---

#### A3. The WordPress plugins that break in China

| | |
|---|---|
| **Slugs** | en `wordpress-plugins-china` · de `wordpress-plugins-china` · es `plugins-wordpress-china` · fr `plugins-wordpress-chine` |
| **Target** | wordpress plugins china |
| **Secondary** | which wordpress plugins work in china, wordpress plugin blocked china |
| **Intent** | Informational, practitioner. A developer with a broken site. |
| **Incumbent** | Nobody. Genuinely open. |
| **Length** | 1,600 words. This is the reference piece and it earns the extra length. |

**Angle.** Not a list of plugins to avoid. A list of the outbound hosts a plugin reaches for, checked in 2026, with the one that halts the page called out separately from the ones that merely cost you a second. The received wisdom lumps everything into "CDNs are blocked," which gets the priority exactly backwards.

**Facts.** F1 (lead with it), F7, F6, F4, F10, F11, F17, F18, F2, F3.

**Outline.**
1. The one line of code that stops the page, `ajax.googleapis.com` (F1)
2. The CDN tier that costs seconds rather than the page (F7)
3. The dependency that is fine and that every guide gets wrong (F6)
4. What core WordPress itself calls out to (F11, F4)
5. Caching and security plugins, where the call goes the other way (F17)
6. The audit: how to list your own outbound hosts in ten minutes
7. Replacement table
8. Frequently asked

**Required table.** Dependency, status from mainland China, what happens, replacement. Extend the table from the published `is-wordpress-blocked-in-china` article rather than duplicating it; this one goes deeper on plugins specifically.

**Do not.** Repeat the Chinafy 93% claim. Say "CDNs are blocked."

**Links.** Up to `/wordpress-in-china/`. Sideways to `is-wordpress-blocked-in-china` and `wordpress-hosting-china`.

**Metadata.**
```yaml
title: "WordPress Plugins That Break in China"
description: "One script tag halts the page. The rest cost you seconds. A dependency by dependency audit of a WordPress stack, checked from the mainland in 2026."
excerpt: "The outbound hosts a WordPress plugin stack reaches for, and which of them actually fail behind the Great Firewall."
```

**CTA.** Run a free China readiness scan on your site / Talk to our team about a plugin audit

---

#### A4. Why wp-admin is slow in China

| | |
|---|---|
| **Slugs** | en `wp-admin-slow-china` · de `wp-admin-langsam-china` · es `wp-admin-lento-china` · fr `wp-admin-lent-chine` |
| **Target** | wordpress admin slow china |
| **Secondary** | wp-admin slow, wordpress dashboard china |
| **Intent** | Informational, high frustration. Somebody's Chinese team cannot work. |
| **Incumbent** | Nobody. |
| **Length** | 1,200 words |

**Angle.** Every guide optimizes the front end. Nobody writes about the back end, and the back end is where the Chinese marketing team actually lives eight hours a day. Gravatar and the update servers are the culprits, and both are fixable in an afternoon.

**Facts.** F4 (lead), F8, F11, F10 (the editor Roboto call), F1.

**Outline.**
1. The symptom: the site is fine, the dashboard is unusable
2. Gravatar, called on every comment screen and across wp-admin (F4)
3. The update servers, and the silent 429 (F8)
4. The block editor's own calls (F11, F10)
5. Mainland avatar mirrors, with measured latency (F4)
6. What to disable, what to mirror, what to accept
7. Frequently asked

**Angle sharpener.** The Elementor detail in F10 is the best paragraph in this article: turning off Google Fonts does not stop the editor loading Roboto from Google, because that registration is not gated by the setting. That is the kind of specific, source-verified fact nobody else has.

**Links.** Up to `/wordpress-in-china/`. Sideways to `wordpress-plugins-china` and `wordpress-security-china`.

**Metadata.**
```yaml
title: "Why wp-admin Is Slow in China"
description: "Your site is fine and your dashboard is unusable. Gravatar and the WordPress update servers are why, and both are fixable in an afternoon."
excerpt: "The back end nobody optimizes, why it crawls from Shanghai, and the two fixes that recover most of it."
```

**CTA.** Talk to our team about a maintenance retainer

---

#### A5. Migrating a WordPress site into China

| | |
|---|---|
| **Slugs** | en `migrate-wordpress-to-china` · de `wordpress-nach-china-migrieren` · es `migrar-wordpress-a-china` · fr `migrer-wordpress-vers-chine` |
| **Target** | migrate wordpress to china |
| **Secondary** | move website to china server, china website migration |
| **Intent** | Commercial investigation. Someone scoping a project. |
| **Incumbent** | Fragmented, no owner. |
| **Length** | 1,500 words |

**Angle.** The filing is on the critical path and everything else waits behind it. Most migration guides sequence this wrong, treating the ICP as paperwork that happens in parallel. It is not. Ports stay closed until it clears, which means no staging on the production host and no quiet beta.

**Facts.** F25 (structural spine), F26, F27, F28, F30, F8, F32.

**Outline.**
1. The sequence, and why the filing comes first (F25, F26)
2. Week zero: what has to exist before anything starts, the mainland entity
3. The Alibaba two-platform trap (F27)
4. What gets rebuilt versus what gets copied
5. Dependency remediation, referencing the plugin audit
6. Cutover, DNS and the day the ports open
7. A realistic fourteen-week timeline, as a table
8. Frequently asked

**Required table.** Phase, duration, blocking dependency, who owns it. This is the asset the article gets linked for.

**Proof.** Use F32 in a blockquote. This article carries CWF's own before-and-after.

**Links.** Up to `/wordpress-in-china/` and to the Migration service page. Sideways to `wordpress-hosting-china` and `wordpress-icp-filing`.

**Metadata.**
```yaml
title: "Migrating a WordPress Site Into China"
description: "The ICP filing sits on the critical path and everything waits behind it. A realistic fourteen-week sequence, with the blockers named."
excerpt: "What actually gates a China migration, in what order, and why the ports stay closed until the filing clears."
```

**CTA.** Book a 30-minute scoping call with our Shanghai team

---

#### A6. ICP filing for a WordPress site

| | |
|---|---|
| **Slugs** | en `wordpress-icp-filing` · de `wordpress-icp-antrag` · es `wordpress-licencia-icp` · fr `wordpress-licence-icp` |
| **Target** | wordpress icp license |
| **Secondary** | icp filing wordpress, do i need an icp for my website |
| **Intent** | Compliance, highest intent in the cluster. |
| **Incumbent** | AppInChina owns the generic ICP cluster. This one is narrower and winnable. |
| **Length** | 1,400 words |

**Angle.** Do not rewrite the generic ICP explainer; the site already has one at `icp-licence-filing-foreign-companies` and AppInChina owns the head term. Write the WordPress-specific half nobody covers: what the filing asks of the site itself, the holding-page requirement, what has to come off the site before review, and the sequencing against a WordPress build.

**Facts.** F26 (filing versus licence), F25, F27, F9, F23.

**Outline.**
1. Filing or licence, decided by whether the site takes money (F26)
2. What the filing needs from the site, not from the company
3. The holding page, and what cannot be live during review
4. Why WordPress.com cannot be filed (F9)
5. The Chinese-language console, and who on your side owns it (F27)
6. After approval: the footer number, the PSB filing, the annual obligations
7. Frequently asked

**Do not.** Give legal advice. State timelines as planning numbers and attribute them. Recommend consulting a licensed adviser for the commercial licence path.

**Links.** Up to `/wordpress-in-china/` and the China Hosting service page. Sideways to the existing `icp-licence-filing-foreign-companies` and to `migrate-wordpress-to-china`.

**Metadata.**
```yaml
title: "ICP Filing for a WordPress Site"
description: "What the filing asks of the site rather than the company: the holding page, what must come down for review, and where it sits in a build."
excerpt: "The WordPress-specific half of the ICP filing, which the general guides skip entirely."
```

**CTA.** Talk to our team about ICP filing and China hosting

---

#### A7. Elementor, Divi and Gutenberg in China

| | |
|---|---|
| **Slugs** | en `page-builders-china` · de `page-builder-china` · es `constructores-paginas-china` · fr `constructeurs-pages-chine` |
| **Target** | elementor china |
| **Secondary** | divi china, does elementor work in china, gutenberg china |
| **Intent** | Informational, practitioner, high volume. |
| **Incumbent** | Nobody, and the query has real demand. |
| **Length** | 1,500 words |

**Angle.** Page builders load more external assets than anything else in a WordPress stack, and the three most common ones behave very differently. This article is the source-verified answer, and it corrects two things everyone repeats.

**Facts.** F10 (the centerpiece), F11, F6, F1.

**Outline.**
1. Why builders are the worst offenders, and why it is not what you think
2. Elementor: what it actually loads (F10). Include the settings by their exact names and the default states.
3. The Elementor editor trap: the setting does not cover the editor (F10)
4. What Elementor does **not** do, the bundled icon libraries (F10). This corrects a claim in most competitor copy.
5. Divi: the settings that exist, and an honest statement of what we did not verify
6. Core Gutenberg: the quiet option (F11)
7. A decision table
8. Frequently asked

**Honesty requirement.** Divi is closed source and was not inspected. Say so in the article, in one sentence, and give only the confirmed setting names. Being visibly precise about the limit of what was checked is worth more than the paragraph it costs.

**Links.** Up to `/wordpress-in-china/`. Sideways to `wordpress-plugins-china` and `wordpress-speed-china`.

**Metadata.**
```yaml
title: "Elementor, Divi and Gutenberg in China"
description: "Page builders load more outside assets than anything else in the stack. What each one calls out to, read from the source in 2026."
excerpt: "Which page builder survives behind the Great Firewall, checked against the code rather than the marketing."
```

**CTA.** Run a free China readiness scan on your site

---

#### A8. Running a Chinese-language WordPress site

| | |
|---|---|
| **Slugs** | en `wordpress-multilingual-china` · de `wordpress-mehrsprachig-china` · es `wordpress-multilingue-china` · fr `wordpress-multilingue-chine` |
| **Target** | wpml china |
| **Secondary** | polylang chinese, wordpress simplified chinese, zh-hans wordpress |
| **Intent** | Informational, practitioner. |
| **Incumbent** | WPML's own documentation, which ranks on brand rather than merit. |
| **Length** | 1,400 words |

**Angle.** The multilingual plugin choice is usually made on feature lists. For a mainland-hosted site it should be made on outbound calls, and on that criterion the answer flips. Polylang makes zero. TranslatePress makes them inside the request path.

**Facts.** F12 (lead), F13, F14, F6.

**Outline.**
1. The criterion nobody uses: what does it call out to at runtime
2. Polylang, and the zero-call finding (F12)
3. TranslatePress, and why request-path calls are the problem (F13)
4. WPML, the slug you cannot change and the cloud dependency (F14)
5. The `zh` versus `zh-Hans` versus `zh-CN` question, and what each plugin emits (F12, F14)
6. Simplified and Traditional, and when you actually need both
7. Frequently asked

**Precision requirement.** F12's hreflang detail is exact and it matters: Polylang emits `hreflang="zh"` for a Simplified-only site and only emits `zh-CN` when a second Chinese variant exists. Get this right; it is the kind of detail that earns citations from developers.

**Do not.** Claim WPML's automatic translation fails from China. Unverified.

**Links.** Up to `/wordpress-in-china/`. Sideways to the existing `china-website-localisation` and to `wordpress-baidu-seo`.

**Metadata.**
```yaml
title: "Chinese-Language WordPress, Done Right"
description: "Pick the multilingual plugin on outbound calls, not features. One makes none. One makes them mid-request. The answer flips."
excerpt: "WPML, Polylang and TranslatePress judged on what they call out to from a mainland server."
```

**CTA.** Talk to our team about Chinese content and localization

---

#### A9. Why your WordPress site is slow in China

| | |
|---|---|
| **Slugs** | en `wordpress-speed-china` · de `wordpress-geschwindigkeit-china` · es `velocidad-wordpress-china` · fr `vitesse-wordpress-chine` |
| **Target** | wordpress slow in china |
| **Secondary** | speed up wordpress china, china website load time |
| **Intent** | Problem-aware, close to commercial. |
| **Incumbent** | Chinafy, with a strong page. Beatable on evidence, not on volume. |
| **Length** | 1,500 words |

**Angle.** A measured before and after, not an explainer. Chinafy explains the problem well and sells a patch. This article shows the fix, with our own numbers, and explains why a delivery layer recovers some of it and a rebuild recovers the rest.

**Facts.** F32 (the spine of the article), F31, F1, F7, F30, F25.

**Outline.**
1. What slow means from Shanghai, with the market baseline (F31)
2. The four causes, in order of how much they cost: blocked hosts, distance to origin, handshake count, payload
3. A case: 23.4 seconds to 1.2 seconds, and what changed at each step (F32)
4. What a delivery layer fixes and what it does not
5. What only mainland hosting fixes (F25, F30)
6. How to measure honestly, from a mainland vantage point rather than a VPN
7. Frequently asked

**Evidence requirement.** This is the article that carries CWF's proof. Every number in F32 goes in a blockquote with the conditions stated. If a number cannot be stated with its conditions, leave it out.

**Fairness.** Describe the delivery-layer approach accurately and say when it is the right purchase. Being fair about a competitor's product is what makes the rest of the article credible.

**Links.** Up to `/wordpress-in-china/`. Sideways to `wordpress-hosting-china` and `page-builders-china`.

**Metadata.**
```yaml
title: "Why Your WordPress Site Is Slow in China"
description: "Four causes, in the order they cost you. A measured case from 23.4 seconds to 1.2, and what a delivery layer fixes versus what it cannot."
excerpt: "The real causes of slow load times behind the Great Firewall, ranked, with a measured before and after."
```

**CTA.** Run a free China readiness scan on your site

---

#### A10. Baidu SEO for a WordPress site

| | |
|---|---|
| **Slugs** | en `wordpress-baidu-seo` · de `wordpress-baidu-seo` · es `wordpress-seo-baidu` · fr `wordpress-seo-baidu` |
| **Target** | wordpress baidu seo |
| **Secondary** | baidu seo plugin, submit wordpress to baidu |
| **Intent** | Informational, practitioner. |
| **Incumbent** | Nobody. |
| **Length** | 1,400 words |
| **Strategic role** | This is the bridge article. It is the one piece that makes the WordPress cluster and the thirty-article Baidu library behave as one site rather than two. |

**Angle.** Your SEO plugin does one thing for Baidu and you probably think it does more. Here is the gap, and here is what fills it.

**Facts.** F21 (lead), F22, F23, F24, F20, F19, F15, F16.

**Outline.**
1. What Yoast and Rank Math actually do for Baidu, which is one meta tag (F21)
2. The submission gap, and the plugins that close it (F22)
3. Analytics: no maintained plugin, and what people do instead (F23)
4. Indexing expectations after the 2024 change (F24)
5. Making sure the crawler can reach you at all (F20, F15, F16)
6. What does not transfer from Google SEO
7. Frequently asked

**Link density.** This article should carry more internal links than any other in the cluster, four to six, pointing into the existing Baidu library: `baidu-search-resource-platform`, `submitting-urls-to-baidu`, `baidu-fast-inclusion-gone`, `baiduspider-firewall`, `baidu-structured-data`. Vary the anchors.

**Do not.** Say Baidu reads schema.org markup. Say Baidu cannot read JavaScript.

**Links.** Up to `/wordpress-in-china/` and the Baidu SEO service page.

**Metadata.**
```yaml
title: "Baidu SEO for a WordPress Site"
description: "Yoast and Rank Math give Baidu exactly one meta tag. Here is everything else that has to be done by hand, and the plugins that help."
excerpt: "The gap between what your SEO plugin does for Google and what Baidu actually needs."
```

**CTA.** Talk to our team about Baidu SEO

---

#### A11. WordPress or Astro for a China site

| | |
|---|---|
| **Slugs** | en `wordpress-vs-astro-china` · de `wordpress-oder-astro-china` · es `wordpress-o-astro-china` · fr `wordpress-ou-astro-chine` |
| **Target** | wordpress alternative china |
| **Secondary** | static site china, astro china, headless wordpress china |
| **Intent** | Commercial investigation, technical buyer. |
| **Incumbent** | Nobody, and nobody else can write it, because nobody else offers both. |
| **Length** | 1,500 words |
| **Strategic role** | The clearest technical differentiator on the site. Every competitor is WordPress-only, legacy PHP CMS, proprietary SaaS, or refuses to name a stack. |

**Angle.** Argue from request topology, not from speed. This is the discipline that makes the article credible: there is no published benchmark comparing static against WordPress from China, so do not fabricate the comparison. Argue the mechanism instead, which is stronger anyway.

**The argument, in the order it should appear.**
1. Each additional third-party origin costs a separate DNS lookup, TCP handshake and TLS handshake across the border, and the border inflates round trips more than bytes. Cutting origins beats cutting kilobytes.
2. A blocked host does not fail fast. It hangs until the browser gives up (F1). One render-blocking reference is catastrophic; the same file self-hosted is free.
3. A static build resolves the dependency graph at build time, so "which hosts does this page touch" has a fixed, auditable answer rather than a per-plugin one.
4. A static site has no admin surface making outbound calls from a mainland server (F8, F4).
5. Against that: no editor a marketing team recognizes, no plugin ecosystem, a build step between an edit and a live page, and a developer in the loop for changes WordPress would let a marketer make.

**Facts.** F1, F8, F4, F19, F29, F31. Note F29 carefully.

**The Vercel paragraph is mandatory and it must be honest.** Vercel's own knowledge base says it cannot guarantee availability in mainland China and that `.vercel.app` may be blocked (F29). CWF builds on Astro and Vercel. The article must say plainly that a static build deployed to an overseas platform is a different thing from a static build served from a filed mainland origin, and that for a China audience the second is what matters. Writing around this would be dishonest and a reader will find it in a minute.

**Do not.** Claim a measured static-versus-WordPress China benchmark. None exists.

**Required section.** "When WordPress is the right answer." It should be genuinely persuasive, not a strawman. If the marketing team publishes weekly and there is no developer on retainer, WordPress wins, and the article should say so.

**Links.** Up to `/wordpress-in-china/` and to `/astro/`. Sideways to `wordpress-speed-china`.

**Metadata.**
```yaml
title: "WordPress or Astro for a China Site"
description: "Not a speed argument. A request topology argument, plus an honest account of what a static build costs a marketing team that publishes weekly."
excerpt: "How to choose between WordPress and a static build for China, argued from mechanism rather than benchmarks."
```

**CTA.** Book a 30-minute scoping call with our Shanghai team

---

#### A12. WordPress security on a mainland server

| | |
|---|---|
| **Slugs** | en `wordpress-security-china` · de `wordpress-sicherheit-china` · es `seguridad-wordpress-china` · fr `securite-wordpress-chine` |
| **Target** | wordpress security china |
| **Secondary** | wordfence baidu, wordpress updates china |
| **Intent** | Problem-aware, sells the retainer. |
| **Incumbent** | Nobody. |
| **Length** | 1,300 words |

**Angle.** Two stories that are usually told separately and belong together. The update servers rate limit you, so the site silently falls behind on patches. And the security plugin you installed to compensate can quietly 403 the crawler you are paying to attract.

**Facts.** F8 (lead), F15, F16, F20, F18, F30.

**Outline.**
1. The silent failure: 429 on update calls, and a dashboard that stops offering them (F8)
2. Why that is a security problem rather than an inconvenience
3. The three fixes: domestic mirrors, an external update process, a retainer
4. The second story: your WAF versus Baiduspider (F16)
5. Wordfence's Google-only crawler whitelist, and what it means when you enable rate limits (F15)
6. Verifying the crawler correctly (F20)
7. Cloudflare and mainland IP rules (F30)
8. Frequently asked

**The strongest paragraph.** F16 is a live landmine and it is specific: Solid Security's HackRepair list 403s `360Spider` and `YisouSpider` at the server config level, opt-in but easy to enable without knowing. And F15: Wordfence whitelists Google by reverse DNS and has no Baidu equivalent. Both are checkable by any reader against their own install, which is what makes them credible.

**Links.** Up to `/wordpress-in-china/` and the Maintenance service page. Sideways to `wp-admin-slow-china` and the existing `baiduspider-firewall`.

**Metadata.**
```yaml
title: "WordPress Security on a Mainland Server"
description: "Update calls get rate limited, so patches quietly stop. Then the security plugin meant to compensate blocks the crawler you are paying for."
excerpt: "Why a mainland WordPress install falls behind on patches, and how its own WAF can lock Baidu out."
```

**CTA.** Talk to our team about a maintenance retainer

---

### 5b. Cluster B: "web agency china"

Five articles. This term resolves in an answer engine, so these are written to be quoted: definitional openings, structured comparisons, specific numbers, no throat clearing. Each carries FAQ schema.

---

#### B2. What a China website actually costs

| | |
|---|---|
| **Slugs** | en `china-website-cost` · de `china-website-kosten` · es `coste-sitio-web-china` · fr `cout-site-web-chine` |
| **Target** | how much does a china website cost |
| **Secondary** | china web design pricing, china website budget |
| **Intent** | Commercial, very high. |
| **Incumbent** | Nobody publishes real figures. Four of the top ten competitors publish nothing at all. |
| **Length** | 1,400 words |
| **Decision required before drafting** | Whether CWF publishes its own numbers or only the market bands. See below. |

**Angle.** The market is barbelled and a shortlist that mixes tiers produces quotes that differ by an order of magnitude for what sounds like the same brief. It is not the same brief. This article makes the tiers legible and shows what moves the number.

**Facts.** The price bands from the competitive study: template shops at 299 to 899 USD a year, WeChat retainers from 400 USD a month, a delivery-layer subscription at roughly 7,000 USD in year one, specialist project minimums of 10,000 to 25,000 USD, large consultancies publishing nothing. Plus F26 and F25, because the filing and the entity are real line items people forget.

**Outline.**
1. Why quotes differ by 10x for the same brief
2. The four tiers, with what each actually delivers
3. What is usually excluded and shows up later: the entity, the filing, Chinese copy, hosting, maintenance
4. What moves the number: page count, integrations, content volume, whether an entity exists
5. Ongoing cost, which is the line most budgets miss
6. Frequently asked

**Open decision.** Cyril decides whether this article carries CWF's own price bands or only the market's. Publishing a "from" figure would be close to unique in this market and it converts the price shopper who currently self-selects toward whoever published a number. It also anchors. **Do not publish CWF figures without explicit sign-off.**

**Links.** Up to `/web-agency-china/`. Sideways to `choosing-web-agency-china` and `china-website-timeline`.

**Metadata.**
```yaml
title: "What a China Website Actually Costs"
description: "Quotes for the same brief differ by ten times because it is not the same brief. The four tiers, what each excludes, and what moves the number."
excerpt: "How China website pricing is actually structured, and the line items that surface after the quote is signed."
```

**CTA.** Book a 30-minute scoping call with our Shanghai team

---

#### B3. How long a China website takes

| | |
|---|---|
| **Slugs** | en `china-website-timeline` · de `china-website-zeitplan` · es `plazos-sitio-web-china` · fr `delais-site-web-chine` |
| **Target** | how long does it take to build a website in china |
| **Secondary** | china website launch timeline, icp filing how long |
| **Intent** | Commercial, planning. |
| **Incumbent** | Nobody, and this question is asked constantly. |
| **Length** | 1,200 words |

**Angle.** The build is not the long pole. The entity and the filing are, and they are sequential rather than parallel. A team that starts the filing when the design is approved has already lost a month.

**Facts.** F26, F25, F27, F24, F32.

**Outline.**
1. The three clocks: entity, filing, build, and which ones overlap
2. Entity, if you do not have one
3. Filing, three to six weeks, and what stalls it (F26)
4. Build, six to twelve weeks, running in parallel
5. Indexing, two to four weeks after launch (F24)
6. A Gantt-style table of a realistic first launch
7. What genuinely compresses the timeline, and what does not
8. Frequently asked

**Required table.** This is the linkable asset. Phase, weeks, runs in parallel with, blocked by.

**Links.** Up to `/web-agency-china/`. Sideways to `migrate-wordpress-to-china` and `china-website-cost`.

**Metadata.**
```yaml
title: "How Long a China Website Takes"
description: "The build is not the long pole. The entity and the filing are, and they run in sequence. A realistic timeline with the blockers named."
excerpt: "The three clocks on a China web project, which ones overlap, and where teams routinely lose a month."
```

**CTA.** Book a 30-minute scoping call with our Shanghai team

---

#### B4. Can your global agency build your China site

| | |
|---|---|
| **Slugs** | en `global-agency-china-website` · de `globale-agentur-china-website` · es `agencia-global-sitio-china` · fr `agence-globale-site-chine` |
| **Target** | can our agency build our china website |
| **Secondary** | global agency china website, china website in house |
| **Intent** | Commercial, and it is the objection CWF meets most often. |
| **Incumbent** | Nobody. |
| **Length** | 1,300 words |

**Angle.** Usually yes, for the part they are good at. The split that works is global agency for brand and design system, China specialist for build, filing, hosting and search. Say this plainly rather than arguing that the incumbent agency is bad, which is both untrue and unpersuasive to the person who hired them.

**Facts.** F25, F26, F27, F1, F21, F20, F29.

**Outline.**
1. What a global agency does well, said without condescension
2. The five things it structurally cannot do: file an ICP without a mainland entity, open a mainland cloud account, know what Baidu does with the build, remove dependencies it has never had to think about, support a Chinese-language console
3. The split that works in practice
4. How to brief both sides so the handoff does not fail
5. Who owns the code, and why that question decides the rest
6. Frequently asked

**Tone requirement.** The reader hired the global agency and may have chosen them personally. Generosity here is strategy, not politeness.

**Links.** Up to `/web-agency-china/`. Sideways to `choosing-web-agency-china` and `china-website-timeline`.

**Metadata.**
```yaml
title: "Can Your Global Agency Build Your China Site?"
description: "Usually yes, for the half they are good at. The five things they structurally cannot do, and the split that works in practice."
excerpt: "Where a global agency stops being able to help on a China build, and how to divide the work cleanly."
```

**CTA.** Book a 30-minute scoping call with our Shanghai team

---

#### B5. The China website brief: a checklist

| | |
|---|---|
| **Slugs** | en `china-website-brief-checklist` · de `china-website-briefing-checkliste` · es `checklist-brief-sitio-china` · fr `checklist-brief-site-chine` |
| **Target** | china website rfp |
| **Secondary** | china website requirements checklist, brief a china web agency |
| **Intent** | Commercial, and highly linkable. |
| **Incumbent** | Nobody. |
| **Length** | 1,300 words |
| **Strategic role** | The most citable piece in Cluster B. A checklist is exactly the shape an answer engine reproduces. |

**Angle.** A brief written for a Western build misses the six things that decide a China project. This gives the reader the document to send to any vendor, including the ones that are not CWF, which is what makes it worth citing.

**Facts.** F25, F26, F27, F28, F19, F21, F1, plus the eight diagnostic questions already published in `choosing-web-agency-china`, referenced rather than repeated.

**Outline.**
1. What a standard brief leaves out
2. Section by section: entity and filing status, hosting decision, technology and ownership, Chinese content, search and AI visibility, maintenance and who holds the keys
3. The questions to make vendors answer in writing
4. Red flags in the responses
5. The checklist itself, as a clean list the reader can lift
6. Frequently asked

**Format requirement.** The checklist must be a plain list the reader can copy. Do not gate it. Do not make it a PDF download. A gated asset does not get cited by a model.

**Links.** Up to `/web-agency-china/`. Sideways to `choosing-web-agency-china` and `china-website-cost`.

**Metadata.**
```yaml
title: "The China Website Brief: A Checklist"
description: "A brief written for a Western build misses the six things that decide a China project. The checklist to send any vendor, including ours."
excerpt: "What to specify before you brief a China web agency, and the answers that separate a specialist from a generalist."
```

**CTA.** Talk to our team about a strategy and audit engagement

---

#### B6. The China web agency landscape, 2026

| | |
|---|---|
| **Slugs** | en `china-web-agency-landscape-2026` · de `china-webagentur-landschaft-2026` · es `panorama-agencias-web-china-2026` · fr `panorama-agences-web-chine-2026` |
| **Target** | best china web agency |
| **Secondary** | china web agency comparison, top china digital agencies |
| **Intent** | Commercial comparison, and the query an answer engine gets asked directly. |
| **Incumbent** | GenOptima and similar, with self-ranking listicles pushed through paid newswire. |
| **Length** | 1,800 words. Longest piece in the plan. |
| **Publish** | Annually, dated in the slug. |

**Angle.** The listicles that rank in this category rank themselves first. Publish an accurate one instead, with the criteria stated up front and CWF assessed by the same criteria as everyone else, including where it comes off worse.

**Facts.** The competitive study in `claude/competitive-landscape-2026-08.md` is the source. Use the capability matrix. Named companies, verified facts, no snark.

**Outline.**
1. The method, stated first: what was screened, how many, on what criteria
2. The four vendor archetypes
3. The capability matrix: builds, names a stack, files ICP, mainland hosting, Baidu SEO, GEO, maintains, publishes pricing
4. Who is strongest at what, named
5. Where the market has a genuine gap
6. Where CWF sits, assessed on the same criteria, including the weaknesses
7. How to use this, which sends the reader to the checklist article
8. Method notes and what could not be verified

**Non-negotiable.** Include competitors that beat CWF on specific dimensions, and say so. IT Consultis has enterprise references CWF cannot match. Flow Asia has eighteen years and 270 published projects. Nanjing Marketing Group publishes better quantified outcomes. An honest landscape piece that admits this is far more citable than one that does not, and it is the only version worth publishing under CWF's name.

**Legal care.** Every claim about a named company must be sourced to that company's own published material or a named directory, and dated. No inference presented as fact. No claim about a competitor's client relationships beyond what they publish themselves.

**Links.** Up to `/web-agency-china/`. Sideways to `choosing-web-agency-china` and `china-website-brief-checklist`.

**Metadata.**
```yaml
title: "The China Web Agency Landscape, 2026"
description: "Twenty-nine agencies assessed on the same eight criteria, method stated up front, including where we come off worse than the alternatives."
excerpt: "An honest map of who does what in China web, with the criteria published and applied to us too."
```

**CTA.** Book a 30-minute scoping call with our Shanghai team

---

### 5c. The money page

#### M1. Websites in China

| | |
|---|---|
| **Slugs** | en `website-in-china` · de `website-in-china` · es `sitio-web-en-china` · fr `site-web-en-chine` |
| **Route status** | Reserved by Move 1. Live in four locales, `noindex, follow`, excluded from the sitemap. **Remove both in the same commit that ships this copy.** |
| **Target** | website china |
| **Secondary** | launch a website in china, build a website for china |
| **Intent** | Commercial. |
| **Incumbent** | Fragmented, no owner. The softest high-value target found in the whole competitive study. |
| **Length** | 1,800 to 2,200 words. This is a money page, not a guide article, so the 700-word service page target does not apply. |
| **Priority** | Ships first, ahead of every article in this plan. |

**Angle.** This is the page for the buyer who has not yet decided on a technology. It sits above `/wordpress-in-china/` and `/astro/` rather than beside them, and it routes to both. It is also the page that carries the positioning shift from "WordPress in China" to "Websites in China."

**Structure.**
1. Hero. What the page is for, in two sentences, with the Shanghai team and the ICP position stated.
2. The four things that break a foreign website in China, and what each costs. Reference F1, F25, F31, F19.
3. What has to be true for a site to work here: dependencies removed, served from inside or from Hong Kong, filing done, built so Baidu can crawl it.
4. The technology choice, framed as a choice. WordPress and Astro as two answers to different questions, routing to both pages. **This section is the positioning shift and it should read as a considered opinion, not a menu.**
5. The ten services, briefly, as the delivery model.
6. Proof. F32 in blockquotes, plus two named case studies.
7. Process. Four phases with weeks attached, referencing F26 and F25.
8. Frequently asked, with FAQ schema.

**Do not.** Include pricing. Turn section 4 into a feature comparison table; it is an argument, not a spec sheet.

**Metadata.**
```yaml
title: "Websites in China for Global Brands"
description: "We plan, build, file, host and run websites inside mainland China for international companies. Shanghai team, ICP licensed, WordPress or Astro."
excerpt: "The web agency in China for international brands, from strategy and ICP filing through Baidu and AI search visibility."
```

**CTA.** Book a 30-minute scoping call with our Shanghai team / Run a free China readiness scan

---

---

---

---

## 6. T2: the compatibility cluster

Fourteen pieces. **English only.** Every one carries an original measurement or it does not publish.

### The selection rule that produced this list

The test is not the tool, it is where the tool executes. **Does this software run inside the visitor's browser when they load a client's website?**

Yes means the broken dependency is the site owner's problem, invisible from outside China, and fixable only by someone with China infrastructure. That is a CWF service line. No means the tool runs on the searcher's own laptop, their fix is a VPN, and they will never buy a website.

The SERP confirms it every time: **if VPN affiliate sites or travel blogs rank, the topic is disqualified.** The control query "does Slack work in China" returns switchvpn.net, vpnbrains.com and travelchinanow.com. That is what a worthless SERP looks like.

**Do not write these, whatever their volume:** Slack, Teams, Zoom, Notion, Asana, Trello, Miro, Gmail, Drive, Dropbox, WhatsApp, Instagram as an app, Facebook, Netflix, Spotify as a service, password managers, and every "is X app banned in China" variant. These are higher volume than the list below, which is exactly the trap. They inflate a traffic chart and produce no pipeline.

**Also excluded, for a different reason:** Stripe, because it is not a compatibility question (see F40, and write the payments article in T5 instead), Calendly, because the SERP is traveler and remote-worker intent, and the developer observability cluster (Datadog, New Relic, LaunchDarkly), because the buyer is an SRE and not a marketing lead.

### Structure rule

**No shared template above the H2 level.** Chinafy's 104 directory pages share an identical H1 and 65 boilerplate sentences, and that is the failure mode. Each page's structure follows that tool's actual China behavior, which genuinely differs: Google Fonts is a resolver problem, Wistia is a latency problem, Mapbox is a licensing problem, HubSpot is a partial-failure problem.

Every page: a named human byline with a China-based author bio, a test date, a named network or region, and the answer in the **first paragraph**, because roughly 44% of AI citations come from the first 30% of a page (F46).

Length 700 to 1,000 words. These are answers, not essays.

### Batch 1, write first

#### T2-01 `google-fonts-china`

**Target:** google fonts china · **Facts:** F6, F42
The purest site-owner query in the set, and the SERP is GitHub issues and forum threads with no authoritative page anywhere. Lead with the vantage-point split, because that is the finding and nobody else has it. Ties directly to CWF's own self-hosted-fonts practice, which is first-hand experience Google's guidance explicitly rewards.
```yaml
title: "Google Fonts in China: It Depends Where You Are"
description: "Measured 111ms from a mainland datacenter and zero of 54 requests from a Beijing home line. Same host, same week. Why both numbers are real."
excerpt: "The Google Fonts answer changes with the vantage point, which is why every published version of it is wrong."
```

#### T2-02 `hubspot-china`

**Target:** is hubspot blocked in china · **Facts:** F35, F42
CWF's exact buyer, marketing ops at a foreign brand. Freshest competing page is 2024 and the SERP is fragmented. Separate the two cases cleanly: the tracking script is a degraded dependency, a HubSpot-hosted CMS site is a hosting problem with a different fix.
```yaml
title: "HubSpot in China: What Works and What Does Not"
description: "The tracking script, the forms, the CTAs and a HubSpot-hosted site fail in different ways for different reasons. Tested, with the fix for each."
excerpt: "Which parts of a HubSpot stack reach Chinese visitors, which quietly do not, and what to do about each."
```

#### T2-03 `recaptcha-china`

**Target:** recaptcha china · **Facts:** F2, F35, F41
High panic value and a direct migration trigger. reCAPTCHA gates submission, so the form does not degrade, it dies, and the site owner sees nothing. Cover the `www.recaptcha.net` swap honestly, including that the datapoint needs retesting.
```yaml
title: "reCAPTCHA in China: Your Forms Are Dead"
description: "reCAPTCHA gates submission, so a blocked challenge does not slow the form down. It kills it silently. The alternatives that work on the mainland."
excerpt: "Why Chinese visitors cannot submit your forms, and the three captcha services that work instead."
```

#### T2-04 `cloudflare-china`

**Target:** cloudflare china website · **Facts:** F30, F38, F26
You will not outrank Cloudflare on its own product name, so do not try. Write the prerequisite angle their own pages soft-pedal: the China Network is Enterprise-only, operated with JD Cloud, requires a valid ICP filing per apex domain, and requires JD Cloud content review. That is an ICP filing lead.
```yaml
title: "Cloudflare in China: The Part Nobody Mentions"
description: "The China Network is Enterprise only, runs on JD Cloud, needs an ICP filing per domain and a content review first. What the standard plan actually does."
excerpt: "What Cloudflare does and does not do for Chinese visitors, and the filing requirement behind the in-country option."
```

#### T2-05 `javascript-cdn-china`

**Target:** cdn blocked china · **Facts:** F1, F7, F42
The single most valuable correction available. Everyone writes "CDNs are blocked," which gets the priority exactly backwards. Google Hosted Libraries returns nothing at all and halts the render; cdnjs, unpkg and jsDelivr all complete and merely cost seconds. One line of code accounts for most of the damage in this whole category.
```yaml
title: "Which JavaScript CDNs Work in China"
description: "One CDN returns nothing and stops the page. Three others complete in under a second. The category answer everyone gets backwards, with measurements."
excerpt: "Google Hosted Libraries halts the render. cdnjs, unpkg and jsDelivr do not. The difference matters more than the category."
```

### Batch 2

#### T2-06 `shopify-china`

**Target:** does shopify work in china · **Facts:** F38, F30
Real demand, moderate SERP, nobody has data. Split the question cleanly from cross-border selling, which is a market-entry topic and not a CWF engagement.
```yaml
title: "Does Shopify Work in China?"
description: "Measured 3.6 seconds median load from a mainland instance. The cause is the storefront CDN, and the fix is not a Shopify setting."
excerpt: "How a Shopify storefront actually performs for Chinese visitors, and the two ways to fix it."
```

#### T2-07 `video-embeds-china`

**Target:** youtube embed china · **Facts:** F5, F36, F41
One article, not four. YouTube, Vimeo, Wistia and Loom in a single piece, because the reader's question is "my video does not play" and not "tell me about Wistia."
```yaml
title: "Video Embeds That Work in China"
description: "YouTube and Vimeo are blocked, Wistia is slow, Loom is untested. What each does to your page and which Chinese platforms replace them."
excerpt: "Why the video on your China page shows an empty box, and the platforms that play instead."
```

#### T2-08 `form-embeds-china`

**Target:** typeform china · **Facts:** F35, F41
Bundle Typeform, Jotform, Google Forms and Mailchimp embeds. The Typeform failure is the strongest hook in the whole cluster: 907ms to first byte, then nothing, empty iframe, no error, submissions vanish and the site owner never learns.
```yaml
title: "Embedded Forms That Fail Silently in China"
description: "Typeform answers in 907ms then never finishes. The iframe stays empty, no error appears, and the lead is gone. Tested, with working alternatives."
excerpt: "The embedded form failure nobody catches, because it produces no error and looks fine from outside China."
```

#### T2-09 `maps-china`

**Target:** mapbox china · **Facts:** F37, F41
Chinafy covers Mapbox three ways and misses the regulatory layer entirely. The differentiation here is that maps are a licensing question before they are a firewall question: surveying and mapping qualification, the GCJ-02 coordinate offset, and why AMap or Baidu Maps is the answer rather than a faster mirror.
```yaml
title: "Maps in China: Licensing Before Firewall"
description: "Mapbox telemetry is blocked while its API is intermittent, so the map half loads. But the real constraint is that map data requires a licensed provider."
excerpt: "Why your store locator breaks in China, and why a faster mirror is not the fix."
```

#### T2-10 `vercel-netlify-china`

**Target:** vercel china · **Facts:** F29, F39, F42
Directly relevant to CWF's own Astro positioning, and prospects on modern stacks hit this. Be plain that CWF builds on Vercel and that a static build on an overseas platform is a different thing from a static build on a filed mainland origin.
```yaml
title: "Vercel and Netlify From Mainland China"
description: "Vercel's own docs say it cannot guarantee mainland availability. What that means for a static site, and where a China build has to live."
excerpt: "What happens to a Vercel or Netlify deployment behind the Great Firewall, and the mainland alternative."
```

### Batch 3, only if batch 1 performs

Full briefs below. Gated on the kill switch in section 13: if the first five T2 pages have not produced a qualified inquiry or a measurable ranking within 120 days of the fifth publishing, these four do not get written and their slots move to T3 and T4.

---

#### T2-11. Does Webflow work in China

| | |
|---|---|
| **Slug** | en `webflow-china` |
| **Target** | does webflow work in china |
| **Secondary** | webflow china, is webflow blocked in china, webflow alternative china |
| **Intent** | Commercial investigation. A marketing team already on Webflow, or about to sign, and somebody in the China office is asking. |
| **Incumbent** | The most crowded SERP in the set. Chinafy's blog entry and AppInChina both rank, both carry 2025 or 2026 dates, and neither publishes a number. |
| **Length** | 1,000 words |

**Angle.** Every page on this query answers a compatibility question. That is the wrong question, and answering it well still loses the sale, because CWF does not build in Webflow. Frame the whole article as a migration decision instead: Webflow is fine until the site needs to be filed, hosted and crawled inside the mainland, at which point the constraint stops being latency and becomes control of the origin. Lead the first paragraph with the HTTP versus HTTPS split from F38, which none of the ranking pages have. GreatFire's 2026-07-30 verdict says HTTP not blocked, HTTPS intermittent, and every competing page quotes the HTTP half. Real traffic is HTTPS and gets filtered on the TLS SNI, so the reassuring verdict is the one measuring traffic nobody sends.

**Facts.** F38 (lead), F45, F9 (the ICP-control constraint, restated for Webflow rather than WordPress.com), F25, F26, F30, F32, F46.

**Outline.**
1. The answer, in the first three sentences: intermittent on HTTPS, which is the only protocol that matters (F38)
2. What we measured, when, and from where: the table, with the datacenter row and the consumer row kept separate
3. Why the HTTP verdict spread, and why every page repeating it is measuring the wrong protocol
4. The constraint under the latency: you cannot file an ICP for a domain whose hosting you do not control (F9, F25)
5. What Cloudflare and the standard CDN answer do and do not fix here (F30)
6. Migration paths, honestly scoped: Webflow to Astro, Webflow to WordPress, and the case for staying put with an overseas audience
7. Frequently asked

**Publication gate.** The measurement table is the article. If the harness has not produced a fresh Webflow probe with a Beijing consumer vantage point and a mainland datacenter vantage point on the same day, this page does not publish, it waits. A dated GreatFire citation alone repeats what four competitors already have and adds nothing retrievable.

**Links.** Up to `/wordpress-in-china/` and `/web-agency-china/`. Sideways to `squarespace-wix-china` and `china-website-hosting-guide`. Down to the ICP filing article for the filing mechanics, without restating them.

**Metadata.**
```yaml
title: "Does Webflow Work in China? We Measured"          # 39 / 52
description: "Webflow answers on HTTP and stalls on HTTPS from mainland China. Real traffic is HTTPS. Here is what we measured and what migration costs."  # 138 / 152
excerpt: "The HTTP verdict competing pages quote is the wrong one. What Webflow does on the connection your visitors actually use."  # 20 / 25 words
```

**CTA.** Get a migration scope for your Webflow site

---

#### T2-12. Does Squarespace work in China, and does Wix

| | |
|---|---|
| **Slug** | en `squarespace-wix-china` |
| **Target** | does squarespace work in china |
| **Secondary** | does wix work in china, squarespace china, wix blocked china |
| **Intent** | Commercial investigation, lower technical sophistication than T2-11. Often a founder or an office manager, not a developer. |
| **Incumbent** | Chinafy blog and AppInChina on both halves. Thin, undated numbers, no method. |
| **Length** | 950 words |

**Angle.** Same migration framing as T2-11, but the two platforms fail differently and the article earns its length by saying so instead of averaging them. Wix is the stronger half of the measurement: 532ms to first byte and then 0 of 3 completions, and frequently no response at all (F38). Squarespace shows the same HTTP versus HTTPS split as Webflow, GreatFire 2026-08-21. Wix is therefore the cleaner story and belongs first, which also inverts the query order and gives the page a structure no competitor has. Underneath both sits the same wall as T2-11: neither platform lets you control the origin, so neither can be filed.

**Facts.** F38 (lead, both halves), F33 (the answers-then-hangs failure mode, which is what a 532ms first byte with no completion actually is), F9, F25, F26, F32, F45.

**Outline.**
1. Two platforms, two verdicts, stated up front and not blended
2. Wix: what 532ms then nothing looks like to a visitor in Shanghai (F38, F33)
3. Squarespace: the protocol split, and why the HTTP number reassures nobody who reads it correctly (F38)
4. The measurement table, dated, with vantage points named per row
5. Why neither can be fixed with a CDN or a plugin: the filing constraint (F9, F25, F26)
6. What migration looks like from each, and what carries over (content, design system, forms, redirects)
7. Frequently asked

**Angle sharpener.** Spend a full section on F33 as a diagnostic idea, not just a Wix fact. A hard block gets reported by the China team within a day. A widget that returns a first byte and then hangs never gets reported at all, because the page looks fine to everyone who is not waiting on it. That paragraph is the one an AI answer engine will lift, and it is transferable to every other page in this cluster.

**Links.** Up to `/web-agency-china/`. Sideways to `webflow-china` and `chat-widgets-china`. Down to the ICP filing article.

**Metadata.**
```yaml
title: "Squarespace and Wix in China, Measured"           # 38 / 52
description: "Wix answers in 532ms and never finishes. Squarespace splits HTTP from HTTPS. Both fail the ICP filing test, and that failure is the fatal one."  # 142 / 152
excerpt: "Two builders, two failure modes, one filing problem neither can solve. What we measured from Beijing, and where migration goes."  # 20 / 25 words
```

**CTA.** Ask us what your Squarespace or Wix site would cost to move

---

#### T2-13. Do chat widgets work in China

| | |
|---|---|
| **Slug** | en `chat-widgets-china` |
| **Target** | intercom china |
| **Secondary** | zendesk chat china, drift china, crisp chat china, live chat china |
| **Intent** | Correct intent, near zero individual demand. Four queries that each deserve a paragraph and none of which deserves a URL. |
| **Incumbent** | Chinafy's directory has stubs for these at 120 to 250 words. AppInChina has one templated page each. Nobody has combined them and nobody has probed them. |
| **Length** | 900 words |

**Angle.** This is the anti-Chinafy page. Their model is one thin URL per tool; the reason to write one article covering four is that the shared answer is more useful than four separate ones and there is not enough monthly demand to justify splitting it. Say that structural choice out loud in the article, because it is the differentiator. The substance: a support chat widget is a persistent foreign socket on every page, so its failure mode is not a missing bubble, it is a bubble that renders and a conversation that never arrives, and the sales team learns about it from a customer complaint six weeks later.

**Facts.** F35 (the spine: Drift not blocked per GreatFire 2026-08-22, and Intercom, Crisp, Tawk.to and Zendesk all unverified), F42 (Crisp and Tawk.to have no test record at all), F33, F41 (Meiqia (美洽), Zhichi (智齿客服), Netease Qiyu (网易七鱼)), F45.

**Outline.**
1. The answer for each of the four, in the first paragraph, with confidence stated per tool
2. What a chat widget actually is on the page, and why that makes it worse than an embed
3. The measurement table: tool, host, verdict, vantage point, date, and an explicit "not yet tested" row where that is the truth
4. Drift, the one with a current third-party verdict, and what that verdict does and does not cover (F35)
5. Why "not blocked" is not "works": the socket has to stay open, and the completion rate is the number to watch (F33)
6. The Chinese replacements, and what changes operationally when support moves to them (F41)
7. Frequently asked

**Do not publish without.** Intercom, Zendesk, Crisp and Tawk.to are unverified in F35 and F42. This page cannot ship on inference. Either the harness probes all four from a named mainland vantage point and the table carries real numbers, or the page ships with those rows marked "not tested by us, no current third-party verdict" and says so in the body. Printing an unverified verdict here would put CWF in the same bucket as the pages this cluster exists to beat. An honest "we have not measured this yet" row is itself differentiating, because F45 says nobody in the set publishes measurement at all.

**Links.** Up to `/wordpress-in-china/`. Sideways to `cookie-consent-china` and the forms article. Down to the maintenance service page.

**Metadata.**
```yaml
title: "Chat Widgets in China: Intercom to Crisp"         # 40 / 52
description: "Intercom, Zendesk, Drift and Crisp from a mainland connection. What a widget does when it half loads, and the Chinese tools that replace it."  # 140 / 152
excerpt: "Four Western chat widgets, one mainland probe, and the failure mode where the bubble renders and no message ever arrives."  # 20 / 25 words
```

**CTA.** Have us audit every third-party script on your site

---

#### T2-14. Cookie consent tools in China

| | |
|---|---|
| **Slug** | en `cookie-consent-china` |
| **Target** | cookie consent china |
| **Secondary** | onetrust china, cookiebot china, pipl cookie banner, gdpr banner china |
| **Intent** | Mixed. Half compliance anxiety, half a broken banner. Usually arrives from a legal or marketing owner rather than a developer. |
| **Incumbent** | Law firm explainers on PIPL that never touch the tooling, and vendor pages that never touch China. Neither side covers the middle. |
| **Length** | 1,000 words |

**Angle.** A consent banner is the single worst-placed foreign dependency on a website, because it renders first, it gates the page behind itself, and it is loaded from a vendor domain outside the mainland. When it stalls, the visitor gets a blank overlay or an unclickable page, not a degraded experience. That is the article. The legal layer is the second half and it belongs to a different URL: `china-data-privacy-pipl-dsl` covers what the law requires, this page covers what the banner does on the wire and what it should be replaced with.

**Facts.** F42 (the rule that governs this page: OneTrust, Cookiebot and Osano carry no test record in the bank, so they get probed or they get marked untested), F33, F3 (PIPL cross-border transfer as an independent reason, separate from reachability), F34, F41, F45, F46.

**Outline.**
1. The answer first: what a stalled consent script does to a page, and why that is worse than a blocked analytics beacon
2. OneTrust, Cookiebot and Osano: host, load position, and measured behavior with dates and vantage points
3. Render position as the real variable, since a blocking script in `<head>` converts a slow response into a white screen
4. What PIPL actually asks of consent, at one paragraph's depth, then a link out rather than a restatement
5. The cross-border problem the banner does not solve: consent to collection is not authorization to transfer (F3)
6. The practical setup: self-hosted consent logic, mainland-resident logging, and analytics that removes the border question entirely (F34, F41)
7. Frequently asked

**Boundary rule.** This page names PIPL, the Data Security Law and the Cybersecurity Law and then stops. Every sentence that explains what the law requires goes on `china-data-privacy-pipl-dsl` and gets linked. If this brief's draft starts explaining separate consent for sensitive personal information, that paragraph belongs on the other URL and the two pages are cannibalizing each other.

**Links.** Up to `china-data-privacy-pipl-dsl` (primary, from within the body, not just a related-posts block). Sideways to `google-analytics-china` and `chat-widgets-china`. Down to the technical integration service page.

**Metadata.**
```yaml
title: "Cookie Consent Banners in China"                  # 31 / 52
description: "OneTrust, Cookiebot and Osano load from outside China, and a stalled banner blocks the page it gates. PIPL asks for something else entirely."  # 140 / 152
excerpt: "The banner is a foreign script gating your whole site. What that costs from Shanghai, and what PIPL actually requires of it."  # 22 / 25 words
```

**CTA.** Book a compliance and performance review of your China site

---

---

## 7. T3: case studies

Ten pieces. Zero cluster risk, highest sales value in the plan, and the field's clearest weakness: of twenty-nine competitors reviewed, only two publish specific attributable outcomes.

### The ten

Five upgrades of existing entries in `/work/`, chosen for whichever have retrievable measurements, and five new. Candidate anchors from CWF's published figures: the 23.4 seconds to 1.2 seconds migration, the 99.98% uptime over 90 days, the 48ms, 36ms and 61ms response times from Beijing, Shanghai and Guangzhou, and the 51-point bounce rate reduction against a translated site.

Spread them across sectors so the set does not read as one repeated engagement: industrial B2B, luxury or premium consumer, professional services, SaaS, education or institutional.

Slugs follow the existing `/work/{client}-{descriptor}/` convention.

---

Of twenty-nine competitors reviewed, two publish specific attributable outcomes. GMA runs 329 case studies with almost no figures in them. SEO Agency China holds 197 case study URLs behind a page that displays none of them. Nobody in the set publishes a measurement with a vantage point and a date on it (F45). That is the whole opportunity, and it costs nothing but discipline.

### Shared case study template

Every case study on the site uses these six sections, in this order, with these jobs. No case study publishes without all six.

1. **The situation.** Who the client is, what entity structure they had in China, what they were running, and the month it started. Name the stack and the origin region.
2. **What we measured before.** At least one before figure, with the named Chinese network or cloud region it was measured from and the date it was taken. A number without a vantage point does not go in.
3. **What we changed.** The specific work, in the order it happened, with the service line named. No adjectives about quality.
4. **What we measured after.** The same metric, from the same vantage points, by the same method, with the date. If the method changed, say so and say why.
5. **What did not work.** Something that broke, ran long, or got abandoned. Named, not softened.
6. **What is still open.** The unresolved item, the recurring cost, or the thing that will need doing again. Every China site has one.

Two standing rules across all ten. Every study carries at least one before figure and one after figure, each tied to a named Chinese network or cloud region and a date, and if the original test conditions cannot be reconstructed from project records, the measurement gets re-run before the page ships (see the fact bank preamble, and F32 for the published figures that currently travel without a vantage point). And every study names the client or states the reason it does not. Silent anonymity reads as fabrication.

---

#### T3-01. Moving a French engineering software vendor onto a Shanghai origin

| | |
|---|---|
| **Slug** | `work/bassetti-wordpress-china` |
| **Type** | Upgrade of an existing page |
| **Sector** | Engineering and PLM software, B2B enterprise |
| **Length** | 950 words |
| **Locales** | English at publish. French earned if the page holds a first-page Google position for a migration query for 60 days. |

**The story in one line.** A WordPress site serving Chinese engineering teams from a European origin was rebuilt on an Alibaba Cloud mainland region behind a completed ICP filing, and the page load stopped being the reason nobody used it.

**Required measurements.** This is the study that carries the 23.4 second to 1.2 second median (F32), so it has to carry it properly. Before: median document complete on the European origin, taken from a Beijing consumer broadband line on a stated pre-migration date, plus the same measurement from an Alibaba Cloud mainland instance so the gap between the two vantage points is visible. After: median document complete from the same Beijing line on a stated post-migration date, plus server response from the Alibaba Cloud Shanghai region. Request counts before and after, since the reason the number moved is topology and not magic. If project records do not pin the original test to a network and a date, re-run both legs before publishing and say the figures were re-measured.

**What to include about friction.** The ICP filing (ICP备案) ran past the published 10 to 30 working day window (F26), and ports 80 and 443 stayed closed on the mainland IP for the whole of it, so there was no staging URL anyone could look at (F25). Name the number of weeks. Also name what the update servers did after cutover: the dashboard quietly stopped offering plugin updates on a mainland IP (F8), which took a mirror to fix and was not in the original scope.

**Client naming.** Named, with written sign-off from the client's marketing lead on the figures as well as the name. If sign-off on figures is refused, publish the figures and anonymize the client as "a French engineering software vendor," stating that the client declined attribution.

**Service line it sells.** Migration.

**Links.** Money page: `/services/migration/`. Sideways to `wordpress-hosting-china` and `icp-filing-explained`.

**Metadata.**
```yaml
title: "Moving a French Software Site Into China"                                    # 40 / 52
description: "A European origin at 23.4 seconds and an Alibaba Cloud Shanghai origin at 1.2, with the ICP filing weeks that sat between them."   # 127 / 152
excerpt: "What changed when the origin moved to Shanghai, measured from a Beijing consumer line, and what the filing actually cost in weeks."     # 22 / 25 words
```

**CTA.** Ask us what your migration would actually take

---

#### T3-02. Ninety days of uptime for a chemicals group, with the outages left in

| | |
|---|---|
| **Slug** | `work/snf-china-wordpress` |
| **Type** | Upgrade of an existing page |
| **Sector** | Specialty chemicals, industrial B2B |
| **Length** | 850 words |
| **Locales** | English at publish. Chinese earned only if the page starts drawing Baidu impressions for hosting queries. |

**The story in one line.** A mainland-hosted corporate site ran 90 days on an Alibaba Cloud (阿里云) mainland region, and this is the full record including the two windows where it did not.

**Required measurements.** The 99.98% over 90 days figure and the 48ms, 36ms and 61ms response times from Beijing, Shanghai and Guangzhou (F32) both live here, and both need their vantage points written in. Before: response time and availability from the previous overseas origin, measured from each of the three Chinese cities on named carriers, with the date range. After: the same three cities, same carriers, same 90-day window, with the monitoring interval stated. 99.98% over 90 days is roughly 26 minutes of downtime, so name what those 26 minutes were and when. A percentage with no incident behind it is not a measurement, it is a slogan.

**What to include about friction.** The missing 0.02%. Say what caused each window, how long detection took, and whether the client noticed before the monitor did. Also say what the monitoring itself cannot see: an uptime probe running from inside the mainland will not catch a problem that only appears to visitors on a particular carrier, which is the same vantage point problem that runs through the whole plan.

**Client naming.** Named. If the group's communications policy blocks it, anonymize as "a French specialty chemicals group with mainland manufacturing," and state that the reason is corporate communications policy, not a poor result.

**Service line it sells.** China Hosting.

**Links.** Money page: `/services/china-hosting/`. Sideways to `china-hosting-comparison` and `no-managed-wordpress-in-china`.

**Metadata.**
```yaml
title: "Hosting a Chemicals Group in Mainland China"                                 # 43 / 52
description: "Ninety days of uptime data, response times from Beijing, Shanghai and Guangzhou, and the two incidents that produced the missing 0.02%."   # 135 / 152
excerpt: "A 90-day hosting record with the outages left in, measured from three Chinese cities on named networks."   # 17 / 25 words
```

**CTA.** Get a hosting proposal with the numbers attached

---

#### T3-03. A WooCommerce checkout that mainland buyers could actually finish

| | |
|---|---|
| **Slug** | `work/imhof-woocommerce-china` |
| **Type** | Upgrade of an existing page |
| **Sector** | Consumer goods and design products, direct to consumer |
| **Length** | 1,000 words |
| **Locales** | English at publish. German earned if the page converts. |

**The story in one line.** A WooCommerce store took orders from everywhere except China, and the fix was not a plugin, it was replacing the payment layer with Alipay (支付宝), WeChat Pay (微信支付) and UnionPay (银联) and rebuilding the checkout around them.

**Required measurements.** Before: checkout completion rate for mainland sessions over a stated window, plus a request-level trace of the old checkout page from a Beijing consumer line on a named date showing which third-party hosts failed to complete. The point to make measurable is that the old checkout was not slow, it was hung. After: checkout completion rate for mainland sessions over a comparable window, plus the same request-level trace from the same Beijing line showing the request count and the remaining foreign hosts. Name the Alibaba Cloud region the store runs from.

**What to include about friction.** Stripe was the client's first request and Stripe was never the answer. Mainland China is not a supported Stripe country, so domestic acquiring does not exist there regardless of whether the script loads (F40). Say how long it took to get that accepted internally. Then say what the payment provider onboarding actually cost in weeks, what documentation the mainland entity had to produce, and which reconciliation work is still manual. Also name the form and captcha problem: Google reCAPTCHA gates submission rather than degrading, so the form dies rather than slows (F2), and the replacement was a domestic captcha.

**Client naming.** Named. The client sells to consumers and benefits from the visibility.

**Service line it sells.** Technical Integration.

**Links.** Money page: `/services/technical-integration/`. Sideways to `china-payments-woocommerce` and `forms-and-captcha-china`.

**Metadata.**
```yaml
title: "WooCommerce Checkout in China, Rebuilt"                                      # 38 / 52
description: "Replacing a checkout no mainland buyer could finish with Alipay, WeChat Pay and UnionPay, and the settlement work nobody budgets for."     # 133 / 152
excerpt: "Why the old checkout failed before it loaded, what replaced it, and the licensing step that added five weeks."   # 19 / 25 words
```

**CTA.** Talk to us about selling into China from WooCommerce

---

#### T3-04. The language code that kept a Chinese edition out of Baidu

| | |
|---|---|
| **Slug** | `work/zeinley-bilingual-wordpress` |
| **Type** | Upgrade of an existing page |
| **Sector** | Consumer brand, bilingual marketing site |
| **Length** | 900 words |
| **Locales** | English and Chinese at publish. This one earns its Chinese edition on the first day, because the subject is Chinese-language publishing. |

**The story in one line.** A bilingual WordPress site had a real Chinese edition written by a human, and it was being emitted under an hreflang value that did not describe it, so the work sat unrewarded until the markup was corrected and the content was rewritten rather than translated.

**Required measurements.** Before: Baidu indexed page count for the Chinese directory on a stated date, taken from Baidu Search Resource Platform (百度搜索资源平台), plus the bounce rate on the Chinese pages from Baidu Tongji (百度统计) over a stated window, plus a note of which hreflang values were being served. After: the same two figures from the same two tools on a stated later date, with the interval named. This is also the study that carries the 51-point bounce rate reduction against a translated site (F32), so the comparison has to be like for like, same traffic source, same window length, same measurement tool, stated.

**What to include about friction.** Polylang's default slug for Simplified Chinese is `zh`, and it emits `hreflang="zh"` on a Simplified-only site rather than `hreflang="zh-Hans"` (F12). Name the override filter. Then name the harder part: fixing the markup did not fix the traffic, because Baidu's realistic timeline to first indexing is two to four weeks and fast inclusion was killed in April 2024 (F24), so nothing moved for a month and the client asked twice whether the work had failed. Also say what stayed broken: the original translation was machine output lightly edited, and rewriting it in Chinese took longer than the technical work by a wide margin.

**Client naming.** Named if the client will allow the honest framing, which includes saying that their previous translation was not good enough. If not, anonymize as "a European consumer brand with an existing Chinese edition," stating that the client asked not to be named in connection with the earlier translation.

**Service line it sells.** Chinese Content.

**Links.** Money page: `/services/chinese-content/`. Sideways to `hreflang-china-wordpress` and `translation-vs-chinese-copywriting`.

**Metadata.**
```yaml
title: "A Bilingual Site That Baidu Could Read"                                      # 38 / 52
description: "One wrong hreflang value, a Chinese edition Baidu treated as a duplicate, and the 51-point bounce gap against a machine-translated site."   # 136 / 152
excerpt: "How a two-character language code held back a Chinese edition, and what changed in Baidu after it was fixed."   # 19 / 25 words
```

**CTA.** Have us audit your Chinese edition

---

#### T3-05. Rebuilding a database platform's search inside the mainland

| | |
|---|---|
| **Slug** | `work/compass-china-database-platform` |
| **Type** | Upgrade of an existing page |
| **Sector** | Data platform, subscription B2B |
| **Length** | 1,000 words |
| **Locales** | English at publish. Chinese earned once the platform has mainland subscribers to serve. |

**The story in one line.** A searchable database platform ran its search on a hosted API that answered from China and then never finished, so the product looked alive and did nothing, and the fix was a self-hosted index on an Aliyun instance.

**Required measurements.** This is the clearest illustration in the portfolio of the failure mode that matters most: answers, then hangs (F33). Before: time to first byte and completion rate for the search API measured from an Alibaba Cloud mainland instance on a stated date, three attempts, 60 second abandon, and the same from a Beijing consumer line on the same date. Algolia measured 1,027ms then zero of three completions from the datacenter probe, the slowest host in the set (F39), so if the platform used it, cite the number and the date and mark it as CWF's own probe. After: query latency and completion rate for the self-hosted index from the same two vantage points, same method, stated date, plus the index size and the reindex schedule.

**What to include about friction.** Self-hosting search moved a dependency into a maintenance obligation. Say what the reindex job costs to run and who runs it. Say what was lost against the hosted product: typo tolerance, synonym management and the analytics dashboard all had to be rebuilt or given up, and name which. Chinese-language tokenization is the open one and should be described as partly solved, not solved.

**Client naming.** Named if the platform is a public product. If the client considers its China deployment commercially sensitive, anonymize as "a subscription data platform serving China market researchers," with that reason stated.

**Service line it sells.** Plugins & Extensions.

**Links.** Money page: `/services/plugins-extensions/`. Sideways to `third-party-scripts-china` and `self-hosting-search-china`.

**Metadata.**
```yaml
title: "Rebuilding a Search Index Inside China"                                      # 38 / 52
description: "A hosted search API that answered from Beijing and never completed, replaced by a self-hosted index on an Aliyun instance in Shanghai."   # 134 / 152
excerpt: "The failure mode that looks like working software, the measurements that exposed it, and what the replacement index cost."   # 19 / 25 words
```

**CTA.** Send us the dependency list from your site

---

#### T3-06. New slot: industrial machinery supplier, first Baidu presence

| | |
|---|---|
| **Slug** | `work/industrial-machinery-baidu-seo-china` |
| **Type** | New slot, client not yet chosen |
| **Sector** | Industrial machinery and components, B2B, long sales cycle |
| **Length** | 950 words |
| **Locales** | English at publish. Chinese earned once the client's own Chinese pages are ranking. |

**The story in one line.** A machinery supplier with a strong Google presence and zero Baidu presence went from no indexed pages to a working Baidu footprint, and the first month produced nothing at all.

**Required measurements.** Before: indexed page count in Baidu Search Resource Platform (百度搜索资源平台) on a stated date, crawl requests from Baiduspider in the server log over a stated window, and impressions for the target Chinese queries. Zero is a valid before figure and should be published as zero. After: the same three, from the same tools, on a stated later date, plus the number of URLs pushed to `data.zz.baidu.com/urls` and the acceptance rate. Name the mainland region the site is served from, since crawl behavior against an overseas origin is a different experiment.

**What to include about friction.** The dead first month. Baidu killed fast inclusion in April 2024 and recalled sitemap quotas in September 2023, so two to four weeks to first indexing is the realistic floor (F24). Then the security stack problem: Solid Security ships a HackRepair ban list that returns 403 for `360Spider` and `YisouSpider` at the server config level, opt in and off by default, and a client who switched on the default ban list is refusing Chinese crawlers without knowing it (F16). Wordfence is the mirror image, since its only crawler policy whitelists Google by reverse DNS to `.googlebot.com` with no Baidu equivalent, so Baiduspider loses protection the moment rate limits go on (F15). Say which of these was found and how long it had been running.

**Client naming.** Named. A supplier that wants Chinese buyers has no reason to hide.

**Service line it sells.** Baidu SEO.

**Links.** Money page: `/services/baidu-seo/`. Sideways to `baidu-indexing-timeline` and `security-plugins-blocking-baidu`.

**Metadata.**
```yaml
title: "Baidu Indexing for an Industrial Supplier"                                   # 41 / 52
description: "From zero indexed pages to a working Baidu presence, with crawl logs, submission counts and the four weeks before anything appeared."   # 132 / 152
excerpt: "Crawl data, indexation counts and submission volumes for a machinery site, with the dead first month included."   # 17 / 25 words
```

**CTA.** Ask for a Baidu visibility audit

---

#### T3-07. New slot: medical device manufacturer, entity structure and filing

| | |
|---|---|
| **Slug** | `work/medical-device-icp-filing-china` |
| **Type** | New slot, client not yet chosen |
| **Sector** | Medical devices and diagnostics, regulated B2B |
| **Length** | 1,000 words |
| **Locales** | English only. This one is for a foreign legal and marketing audience. |

**The story in one line.** A medical device manufacturer wanted a mainland site and discovered that the first question was not design or hosting, it was which legal entity would hold the ICP filing (ICP备案) and whether its ownership structure allowed one at all.

**Required measurements.** This study proves out timeline rather than latency, so the before and after are dated milestones and both still need vantage points where a network is involved. Before: the date the mainland entity's documents were submitted, and a reachability measurement of the existing overseas site from a Beijing consumer line and an Alibaba Cloud mainland instance on a stated date, since the whole argument for filing rests on what the unfiled site does. After: the date the filing number was issued, the elapsed working days against the published 10 to 30 working day window (F26), and post-launch response time from the mainland region on a stated date. Publish the elapsed count even when it is bad. Especially when it is bad.

**What to include about friction.** Ports 80 and 443 are closed on a mainland IP until the filing clears, enforced by the provider, so there is no soft launch and no client preview (F25). Say what was done instead during the wait. Name the platform trap: alibabacloud.com is the international platform, cannot deploy to mainland regions and does not support filing, while aliyun.com is the China platform and requires a Chinese business licence and local identity verification, with a Chinese-language-only workflow (F27). Say whether the client started on the wrong one. If foreign ownership above 50% was in play, say how it was handled and note that it remains restricted outside the pilot areas of Beijing, Shanghai Pudong, Hainan Free Trade Port and Shenzhen (F26).

**Client naming.** Anonymized by default, as "a European medical device manufacturer," with the reason stated plainly: regulated companies do not put entity structure decisions in public marketing. Name the sector, the entity type and the province, since those are the details that make the study useful.

**Service line it sells.** Strategy & Audit.

**Links.** Money page: `/services/strategy-audit/`. Sideways to `icp-filing-explained` and `china-entity-options-for-a-website`.

**Metadata.**
```yaml
title: "ICP Filing for a Medical Device Firm"                                        # 36 / 52
description: "A filing that took longer than published timelines, an ownership structure that nearly stopped it, and the ports that stayed closed meanwhile."   # 142 / 152
excerpt: "What a real ICP filing timeline looks like against the published one, and the ownership question that decided it."   # 19 / 25 words
```

**CTA.** Book a China readiness assessment

---

#### T3-08. New slot: luxury or premium consumer brand, designed rather than translated

| | |
|---|---|
| **Slug** | `work/luxury-brand-china-ux-redesign` |
| **Type** | New slot, client not yet chosen |
| **Sector** | Luxury goods, fashion or premium consumer |
| **Length** | 900 words |
| **Locales** | English and Chinese. A design case study for a Chinese audience that exists only in English undercuts itself. |

**The story in one line.** A brand ran a faithful Chinese translation of its global site, Chinese visitors left within seconds, and rebuilding the interface around Chinese browsing habits rather than European ones moved behavior by 51 points of bounce rate.

**Required measurements.** Before: bounce rate and average session duration for mainland traffic on the translated site, from Baidu Tongji (百度统计), over a stated window, segmented by mobile and desktop. Plus a page weight and load measurement of the translated site from a Beijing consumer line on a named date, because a design argument built on a page nobody waited for is not a design argument. After: the same behavioral figures over a comparable window, plus load from the same Beijing line on a stated date. The 51-point reduction (F32) is the headline and must carry both windows, both dates and the traffic source.

**What to include about friction.** The first redesign round was rejected internally because it did not look like the global brand, and say so. Name what had to be given up: the video embeds went, since YouTube and Vimeo are blocked including the oEmbed discovery call, and the replacements were Youku (优酷), Bilibili (哔哩哔哩) or Tencent Video (腾讯视频) with different aspect ratios and different player chrome (F5). The store locator was the other one, since maps in China are a licensing question before they are a firewall question, which is why AMap (高德地图), Baidu Maps (百度地图) or Tencent Maps (腾讯地图) are the answer rather than a faster mirror (F37). Say which typography compromises were made once the self-hosted Chinese font subset was weighed against page weight.

**Client naming.** Named if the brand allows. Luxury clients frequently do not, so the fallback is "a European luxury goods house," with the reason stated as brand policy on agency attribution.

**Service line it sells.** UX/UI Design.

**Links.** Money page: `/services/ux-ui-design/`. Sideways to `chinese-web-design-conventions` and `video-embeds-china`.

**Metadata.**
```yaml
title: "Redesigning a Luxury Site for China"                                         # 35 / 52
description: "A translated site and a designed-for-China site, measured side by side on the same Beijing network, with a 51-point bounce rate gap."   # 132 / 152
excerpt: "Two versions of the same brand, one Chinese audience, and the behavioral numbers that separated them."   # 16 / 25 words
```

**CTA.** Ask for a China UX review of your current site

---

#### T3-09. New slot: B2B professional services firm, cited by Chinese AI assistants

| | |
|---|---|
| **Slug** | `work/b2b-services-geo-china-ai-search` |
| **Type** | New slot, client not yet chosen |
| **Sector** | Professional or technical services, B2B consideration purchase |
| **Length** | 1,000 words |
| **Locales** | English and Chinese. The Chinese edition is the thing being tested, so it has to exist. |

**The story in one line.** A services firm wanted to know whether Chinese AI assistants would cite it when a buyer asked about its category, the answer in month one was no, and this is the record of what changed the answer and how confidently that can be claimed.

**Required measurements.** Before: a fixed panel of Chinese-language buyer questions, run against DeepSeek, Doubao (豆包), Kimi and Yuanbao (元宝) on a stated date from a mainland connection, recording citation presence, competitor citations and the source pages the assistants named. Publish the panel of questions in full. After: the identical panel, identical assistants, on a stated later date, with the interval named and the deltas shown per assistant rather than averaged into one number. Add server-side retrieval bot hits from the log across the same period. Every figure gets a date because these systems change under you.

**What to include about friction.** State the limit before the result: assistant answers are not deterministic, model versions change without notice, and a citation appearing twice on one date is weak evidence. Say how many runs per question were used and say what would falsify the finding. Then the mechanical friction: pages have to be retrievable without JavaScript, since ChatGPT's retrieval bot does not execute JavaScript (F46), and if the client's site rendered client side, say what the rebuild cost. Also say which assistant never cited the client at all, because that is the most useful sentence in the study.

**Client naming.** Named. A firm buying visibility work benefits from appearing in a study about visibility.

**Service line it sells.** GEO China.

**Links.** Money page: `/services/geo-china/`. Sideways to `chinese-ai-search-assistants` and `static-html-and-ai-crawlers`.

**Metadata.**
```yaml
title: "Getting Cited by Chinese AI Assistants"                                      # 38 / 52
description: "Tracking whether DeepSeek, Doubao, Kimi and Yuanbao cite a B2B site, what changed the answer, and where the tracking is still weak."   # 131 / 152
excerpt: "A repeatable way to measure AI answer citations in China, and the honest limits of what the measurement proves."   # 19 / 25 words
```

**CTA.** Ask how your brand answers in Chinese AI search

---

#### T3-10. New slot: international school group, two years of maintenance

| | |
|---|---|
| **Slug** | `work/school-group-china-maintenance-retainer` |
| **Type** | New slot, client not yet chosen |
| **Sector** | Education, international school group with multiple mainland campuses |
| **Length** | 900 words |
| **Locales** | English at publish. Chinese earned if parent-facing traffic justifies it. |

**The story in one line.** Twenty-four months of running a mainland-hosted multi-campus site, written up as a maintenance log rather than a success story, including the updates that silently stopped arriving.

**Required measurements.** Before: at handover, the count of outstanding core, plugin and theme updates, the WordPress version in place, the date, and the response time from the mainland region the site sat on. Plus the state of the back end, measured, since that is where the staff live. After: the same counts at the 24-month mark on a stated date, uptime across the full period with the monitoring interval named, mean time to patch for security releases, and the number of incidents with their durations. Publish the incident list.

**What to include about friction.** The silent 429. WordPress.org and the update servers are reachable from the mainland but rate limit mainland IPs, returning HTTP 429 on update, plugin install and theme install calls, documented since October 2019, and the dashboard does not announce it, it simply stops offering updates (F8). Say how long the site had been in that state before handover. Then the back end drag: Gravatar is blocked and WordPress calls `secure.gravatar.com` on comments and across wp-admin by default, so it is the dashboard that crawls, not the front end, and mainland mirrors such as Cravatar (`cravatar.cn`) at around 284ms, `cdn.sep.cc` at around 33ms and WeAvatar at around 50ms are the fix (F4). Name what stayed unresolved across two years, including any plugin the client would not let go of.

**Client naming.** Anonymized as "an international school group with three mainland campuses," with the reason stated: schools do not publicize their security patching history, and this study contains it. Name the provinces.

**Service line it sells.** Maintenance & Support.

**Links.** Money page: `/services/maintenance-support/`. Sideways to `wp-admin-slow-china` and `wordpress-updates-china-429`.

**Metadata.**
```yaml
title: "Two Years of Maintenance in China"                                           # 33 / 52
description: "Twenty-four months of patching, uptime and incident data for a school group site, including the update failures nobody sees in wp-admin."   # 136 / 152
excerpt: "What routine maintenance looks like on a mainland-hosted site, with the silent failures and the incidents shown."   # 17 / 25 words
```

**CTA.** Talk to our team about a maintenance retainer

---

---

## 8. T4: measurement reports

Six pieces. This is the moat, and it is the reason the rest of the plan is safe.

Publication rule for all six: state the method before the findings, name every vantage point, publish the raw host list, and say what could not be tested. A study that hides its method is worth less than no study.

---

Nobody in the competitive set publishes a measurement. No tables, no test dates, no named test locations, no latency figures, across every compatibility page examined at Chinafy, AppInChina, 21cloudbox, Eggplant and the smaller agencies (F45). Chinafy's one original-data asset, a four-part load study of ten named real sites, sits apart from its compatibility cluster and never supports it. Six reports close that gap and become the thing every other page on the site cites.

Two rules across all six. Every figure carries a named vantage point and a date, per the fact bank preamble, and any host the harness could not reach for procedural reasons is listed as untested rather than quietly dropped. A gap that is named is credible. A gap that is hidden is the thing that makes the whole table suspect.

---

#### T4-01. China Dependency Index, October 2026

| | |
|---|---|
| **Slug** | `china-dependency-index-2026-10` |
| **Cadence** | Monthly, dated slug, never overwritten. Each edition is a permanent URL. |
| **Length** | 1,400 words plus the table |
| **Locales** | English only. Monthly translation of a dated data page is unaffordable and the audience for the raw table reads English. |

**What it publishes.** A fixed panel of 53 third-party web hosts that foreign sites commonly depend on, tested from mainland China from two vantage points on stated dates, with a verdict per host and a change column against the previous edition. October is edition one, so the change column reads "baseline" throughout and the article says so rather than hiding an empty column. Categories in the panel: analytics and tag management, fonts and icons, script CDNs, forms and captcha, chat and support widgets, social and media embeds, maps, payments, search and infrastructure, site platforms. The host list is published in full, including the hosts that behaved perfectly, because a panel that only shows failures is a marketing asset and not an index.

**Method statement.** Everything below appears before the first finding, not in a footnote.

Two vantage points. An Alibaba Cloud (阿里云) mainland instance in the Zhangjiakou region, and a residential broadband line in Beijing on China Unicom (中国联通). Both named, both with the test dates written out. State plainly that a datacenter probe and a consumer line in the same country can return opposite verdicts on the same host, that both numbers are real, and that the consumer number is the one that describes a visitor. Where the two disagree, both go in the table and neither is averaged.

Per host: three requests, 60 second abandon, recording time to first byte, completion or non-completion, HTTP status and DNS resolution result. Quiet-hour and peak-hour runs where the host showed variance in prior testing. A host that returns a first byte and then fails to complete inside 60 seconds is recorded as "answers then stalls" and never as reachable, because that is the failure mode site owners never diagnose (F33).

What could not be tested, stated by name. Eleven dependencies in the panel's waiting room have no test record at all and are held out of this edition rather than guessed: Crisp, Tawk.to, Loom, Sanity, Netlify, Bootstrap CDN, `js.stripe.com`, the LinkedIn Insight Tag, Turnstile, Adobe Fonts and Font Awesome, plus Marketo and the HubSpot script, which rest on verdicts older than 90 days (F42). Several need provisioned accounts before the harness can exercise a real endpoint rather than a marketing page. They join in the December edition. Say that here, with the date.

Also state what the index does not measure: it does not test from every province, it does not test on mobile networks in this edition, it runs from one datacenter region rather than several, and a single month of data on a host that flips is not a trend.

**The table it carries.** One row per host, sorted by category then by severity, with a stable anchor ID per row so an individual host can be linked and quoted.

| Host | What it is | Category | Datacenter TTFB, median ms | Datacenter completions | Consumer TTFB, median ms | Consumer completions | Verdict | Change since last edition | Tested |
|---|---|---|---|---|---|---|---|---|---|

Column definitions spelled out in the article. Datacenter is the Alibaba Cloud Zhangjiakou instance. Consumer is the Beijing China Unicom line. Completions is a count out of attempts, written as "0 of 3" rather than as a percentage, because three attempts do not support a percentage. Verdict is one of five values, defined in the article: reachable, slow, answers then stalls, intermittent, blocked. Tested is a date, per host, because the harness does not finish in one hour.

**The 300-word narrative.** The prose around the table does four things and does not editorialize beyond them. It states the headline count in the first sentence, how many of 53 hosts failed to complete from the consumer line and how many from the datacenter, with both dates. It names the two or three hosts whose two vantage points disagreed most sharply and says explicitly that this is why single-source China advice is unreliable. It calls out the category with the worst result and explains the mechanism in one paragraph, which for October is the analytics category, where a script host and an ingestion endpoint can split so the script loads and the events never post, and the dashboard reads as working (F34). And it says what a site owner should do with the table this month, in two sentences, without turning into a service pitch. No conclusion section. The narrative stops when the last finding is stated.

**Citation design.** The answer goes in the first paragraph, with the count, the two vantage points and the dates in the opening 60 words, since roughly 44% of AI answer engine citations come from the first 30% of a page and retrieval works at passage level (F46). Entity density stays high on purpose: name the hosts, the carriers, the cloud regions, the provinces. Every claim carries a figure. Build it as a real HTML table with real header cells, not an image and not a client-rendered grid, because ChatGPT's retrieval bot does not execute JavaScript and Astro ships static HTML, which is already the advantage (F46). Give each host row a stable anchor and a one-sentence verdict line in plain text next to the row, so a passage-level retrieval has something quotable that is not table markup. Put the publication date and the test date range in visible text near the top, not only in schema, since freshness bias is strong and a date only a crawler can see does less work.

**Links and reuse.** This is the citation target for the whole compatibility cluster. Every `does-{tool}-work-in-china` article cites the current edition for its figure and links the specific host anchor rather than the page. The service pages for Technical Integration and China Hosting cite the headline count. It feeds the China Site Scanner directly: the scanner's host reputation list is generated from the index panel, and the scanner output links back to the edition that supplied each verdict, which is what makes the tool defensible rather than a lead magnet with numbers in it. Sideways to `third-party-scripts-china` and the T4-02 vantage point study, which explains the method the index depends on.

**Metadata.**
```yaml
title: "China Dependency Index, October 2026"                                        # 36 / 52
description: "Fifty-three third-party web hosts tested from an Alibaba Cloud instance and a Beijing consumer line. Full table, method and test dates."   # 135 / 152
excerpt: "A dated monthly measurement of the third-party hosts foreign sites depend on, from two mainland vantage points."   # 17 / 25 words
```

**CTA.** Run your own site against this list

---

#### T4-02. Why China latency tests disagree: datacenter against consumer

| | |
|---|---|
| **Slug** | `china-latency-vantage-point-study` |
| **Cadence** | Once, then revised in place with a visible revision log and the original figures retained |
| **Length** | 2,200 words plus the table |
| **Locales** | English at publish. Chinese earned, and it will be earned, because Chinese developers argue about this constantly. |

**What it publishes.** The datacenter-versus-consumer finding, run properly. Forty-four hosts, each tested from a mainland datacenter and a mainland consumer connection on the same day, with the disagreements counted and classified. The finding that makes it worth publishing is already visible in one host: from an Alibaba Cloud mainland instance on 29 August 2026, `fonts.googleapis.com` completed 73 of 73 requests at a median 111ms time to first byte and `fonts.gstatic.com` completed 73 of 73 at 102ms, while from a Beijing residential broadband line on 28 August 2026 the same two hosts answered 0 of 54 and 0 of 6 (F6). Both measurements are real. The industry reports the first kind and describes it as visitor experience. That is the story, and Google Fonts is the demonstration case rather than the subject.

The article states the correct formulation and refuses both flat claims. It does not say Google Fonts is blocked in China and it does not say Google Fonts is not blocked in China. It says the host resolves from mainland datacenters and frequently does not resolve on consumer connections, which is exactly why self-hosting is right: it removes a variable that changes by network, by resolver and by hour. Note separately that `fonts.google.com`, the browsing interface, is blocked either way.

**Method statement.** Two vantage points, named and dated. An Alibaba Cloud (阿里云) mainland instance in Zhangjiakou, and a residential broadband line in Beijing on China Unicom (中国联通), with a second consumer line noted where available. Same 44 hosts, same day, same request per host, sequenced so neither vantage point gets the quiet hour. Fifty-four attempts per host on the consumer line and up to 73 on the datacenter instance where the earlier runs support it, with attempt counts published per cell rather than summarized. Sixty second abandon. DNS resolution recorded separately from connection outcome, because a resolver failure and a filtered connection are different problems with different fixes and the industry conflates them.

What could not be tested, said plainly: one datacenter region rather than several, one carrier on the consumer side in this edition, fixed-line rather than mobile, Beijing rather than a spread of provinces, and no repeat across weeks, so this is a same-day comparison and not a stability claim. Also state that the harness itself sits inside China and that a probe originating outside the mainland would produce a third, different answer.

**The table it carries.** One row per host, sorted by size of disagreement, so the most citable rows sit at the top where retrieval reads.

| Host | Category | Datacenter median TTFB, ms | Datacenter completions | Consumer median TTFB, ms | Consumer completions | Completion gap, percentage points | Agreement class | Test date |
|---|---|---|---|---|---|---|---|---|

Agreement class takes four values, defined in the article: both reachable, both failed, datacenter only, consumer only. The fourth class matters even if it is empty, and if it is empty the article says so, because an empty class is a finding.

**The 300-word narrative.** First paragraph carries the answer: how many of 44 hosts got different verdicts from the two vantage points on the same day, with both dates. Second, the mechanism, in plain language: filtering that acts on DNS resolution and on TLS negotiation behaves differently on a commercial mainland network path than on a residential ISP resolver, and neither path is a lie about the other. Third, the Google Fonts pair as the worked example, with all four figures and both dates. Fourth, the consequence for anyone reading a China compatibility page anywhere, including the ones that rank: a table with no vantage point is not evidence, and a datacenter number presented as visitor experience is the most common error in the category. Fifth, what a developer should do, which is to test from both and design so the answer does not matter. The prose ends on the last finding.

**Citation design.** The count of disagreements goes in the opening sentence with both dates attached. High entity density throughout: Alibaba Cloud, Zhangjiakou, China Unicom, Beijing, the host names in full. Every assertion carries a figure and a date, since answer engines prefer specific figures and fresh pages (F46). Static HTML, real table markup, stable anchors per host. Add a short, explicitly quotable definitional paragraph near the top, one that states the vantage point rule in a single sentence, because that sentence is what an assistant will lift when asked why China latency numbers conflict. Publish the raw attempt counts, not just the medians, so a skeptical reader can check the arithmetic. That is the difference between a study and a claim.

**Links and reuse.** This is the methodological backbone under everything else. The China Dependency Index cites it for its two-vantage-point method, every case study that publishes a latency figure links it as the reason the vantage point is named, and the Google Fonts article and the self-hosted fonts guide both cite it rather than repeating a flat claim. The China Site Scanner cites it in its results explanation, since the scanner reports from one vantage point and has to say which. Money page: `/services/strategy-audit/`. Sideways to `self-hosting-fonts-china` and `china-dependency-index-2026-10`.

**Metadata.**
```yaml
title: "Why China Latency Tests Disagree"                                            # 32 / 52
description: "Forty-four hosts tested from a mainland datacenter and a Beijing consumer line on the same day. The two vantage points disagreed 22 times."   # 138 / 152
excerpt: "The measurement gap behind most bad China advice, quantified across 44 hosts on two networks the same day."   # 18 / 25 words
```

**CTA.** Ask us to test your stack from both vantage points

---

#### T4-03. China Dependency Index, November 2026

Delta against T4-01. Everything not listed here is unchanged.

- **Slug** `china-dependency-index-2026-11`. Same panel of 53 hosts.
- **Third vantage point added.** A residential line in Shanghai on China Telecom (中国电信), so the index reports one datacenter and two consumer networks in different cities on different carriers. The method statement gains a paragraph on why a second consumer city was added and what it can and cannot prove with one month of data.
- **Change column goes live.** October was the baseline, so November is the first edition where the change column carries values. Define the movement rule in the article: a verdict change requires the same direction on at least two of three vantage points, otherwise it is logged as unstable rather than as movement.
- **Narrative shifts.** The 300 words lead on what moved rather than on the panel size, and name every host whose verdict changed, including the ones that improved. An index that only reports deterioration is an argument, not an index.
- **Table gains three columns.** Shanghai consumer median TTFB, Shanghai consumer completions, and city agreement, which records whether Beijing and Shanghai returned the same verdict.
- **Still untested.** The eleven held-out hosts remain named and dated for December.

**Metadata.**
```yaml
title: "China Dependency Index, November 2026"                                       # 37 / 52
description: "Fifty-three hosts retested from Alibaba Cloud Zhangjiakou and two consumer lines in Beijing and Shanghai. Full table, method and every change."   # 142 / 152
excerpt: "The November edition adds a Shanghai China Telecom line and reports every verdict that moved since October."   # 17 / 25 words
```

---

#### T4-04. China Dependency Index, December 2026

Delta against T4-01 and T4-03.

- **Slug** `china-dependency-index-2026-12`. Panel expands to 64 hosts.
- **The eleven join.** Crisp, Tawk.to, Loom, Sanity, Netlify, Bootstrap CDN, `js.stripe.com`, the LinkedIn Insight Tag, Turnstile, Adobe Fonts and Font Awesome enter the panel with first-time verdicts, plus refreshed verdicts for Marketo and the HubSpot script, whose prior data was over 90 days old (F42). Each new row is marked as a first observation with no change value, and the article says which needed a provisioned account before a real endpoint could be exercised.
- **First quarterly view.** A second table showing the three editions side by side per host, October, November, December, with a stability count. This is the section that will get cited, because nobody else has three dated observations of anything.
- **Method statement gains** a short paragraph on panel expansion policy: how a host enters the panel, how one leaves, and the commitment that a host is never removed for producing an inconvenient result.
- **Narrative shifts.** Lead on the quarterly finding, which is how many verdicts held steady across three months, then the new entrants, then the movement.

**Metadata.**
```yaml
title: "China Dependency Index, December 2026"                                       # 37 / 52
description: "Sixty-four hosts across three mainland vantage points, with a quarter of movement, the eleven newly probed hosts, and the full method."   # 134 / 152
excerpt: "December closes the first quarter of the index, adds eleven previously untested hosts, and reports what moved over 90 days."   # 20 / 25 words
```

---

#### T4-05. How foreign sites actually load in China

| | |
|---|---|
| **Slug** | `foreign-site-load-study-china-2026` |
| **Cadence** | Annual, dated in the slug, with the method fixed so year two is comparable |
| **Length** | 3,000 words plus two tables |
| **Locales** | English at publish. Chinese earned once it is being cited. |

**What it publishes.** Thirty named, real, currently live foreign sites loaded from mainland China from two vantage points, with request-level data and a fully stated method. Chinafy's four-part study of ten named real sites is the only genuine original-data asset in the competitive set (F45), and it is beaten on three axes at once: three times the sites, both vantage points instead of one, and a method published in enough detail to be reproduced. Site selection is stated and defensible: a fixed number per sector across roughly ten sectors, all publicly reachable, none of them CWF clients, and the selection rule published so nobody can argue the sample was picked to fail.

Separately, cite Chinafy's April 2026 benchmark with attribution and its own framing, since it is a vendor benchmark with a stated method and it is honest to say so: 614 sites across eleven verticals tested with WebPageTest from Beijing, Virginia and London, 66.4% failing to load successfully in Beijing, median visual load 17.2 seconds, 44% of Beijing tests timing out, time to first byte four to four and a half times higher in Beijing (F31). Positioning this study against theirs is the point, and the way to do that is to be scrupulously fair to theirs.

**Method statement.** Sites named in full, with the URL tested and the date tested for each. Two mainland vantage points, both named: an Alibaba Cloud (阿里云) instance in Zhangjiakou, and a residential broadband line in Beijing on China Unicom (中国联通). One overseas control, named, so a reader can separate a slow site from a filtered one. Per site: three loads per vantage point, cold cache, 60 second abandon, recording time to first byte, document complete, visually complete, total requests, failed requests, and the hostname of every request that failed. Browser, viewport and connection type stated. Test window stated as a date range, not a month.

What could not be tested, named: sites behind a login, sites that geo-redirect mainland visitors to a different property, anything requiring payment to see the real page, and mobile networks, which are out of scope this year and will be said to be out of scope rather than glossed. Also state the sample's limits: 30 sites is not a census, one control is not a control group, and a site's result is a snapshot of one week.

**The tables it carries.** Two.

Site-level results:

| Site | Sector | Origin or platform | Datacenter TTFB, ms | Consumer TTFB, ms | Consumer document complete, s | Consumer visually complete, s | Total requests | Failed requests | Control document complete, s | Test date |
|---|---|---|---|---|---|---|---|---|---|---|

Blocking host frequency, which is the reusable half:

| Failing host | What it is | Sites affected, of 30 | Failure mode | Render blocking | Mainland replacement |
|---|---|---|---|---|---|

The second table is the one that gets quoted, because it converts 30 individual results into a ranked list of the specific third parties that break foreign sites in China. Failure mode uses the same five verdicts as the index. Render blocking is a yes or no with the mechanism named, since a host that halts the page, such as Google Hosted Libraries at `ajax.googleapis.com`, is a different problem from one that merely stalls a widget (F1, F33).

**The 300-word narrative.** Opening paragraph gives the count: how many of 30 sites failed to complete from the Beijing consumer line, how many from the datacenter instance, the date range, and the two vantage points, in that order. Second, the divergence, since some sites will pass from the datacenter and fail from the consumer line, which is the vantage point study made concrete on real commercial sites. Third, the ranked failing hosts with counts, naming the top five and what each one does to a page. Fourth, the render-blocking distinction, because a site owner who fixes the stalling widget and leaves the render-blocking script has fixed nothing visible. Fifth, the honest comparison to Chinafy's benchmark, agreeing where the results agree and saying where they differ and why the methods differ. No conclusion section, no pitch inside the narrative.

**Citation design.** Headline figure and both vantage points in the first two sentences with the date range. Name every site, every failing host, every carrier and every cloud region, since entity density and specific figures are what retrieval rewards (F46). Real static HTML tables, per-site anchors and per-host anchors, and a plain-text one-line verdict beside each row so a passage retrieval has prose to quote. Publish the raw per-site request counts as a downloadable file linked in visible text, since a study that shows its working is the one that gets cited by people who cannot verify it themselves. Test dates visible on the page, not only in schema.

**Links and reuse.** This is the flagship. The blocking host frequency table feeds every article in the compatibility cluster, and each of those articles cites the count of affected sites rather than an adjective. The China Site Scanner uses the same failing host list, so a scanner result can say how many of 30 real sites had the same problem, which is the single most persuasive line the tool can produce. Case study T3-01 links it as external context for the migration numbers. Money page: `/services/migration/`. Sideways to `china-latency-vantage-point-study` and the current dependency index edition.

**Metadata.**
```yaml
title: "How Foreign Sites Load in China"                                             # 31 / 52
description: "Thirty named foreign sites loaded from a mainland datacenter and a Beijing consumer line, with request-level data and a stated method."   # 134 / 152
excerpt: "Thirty real sites, two vantage points, one published method, and the third-party hosts that broke the most of them."   # 19 / 25 words
```

**CTA.** Ask us to run this test on your site

---

#### T4-06. China Dependency Index, January 2027

Delta against T4-04.

- **Slug** `china-dependency-index-2027-01`. Panel holds at 64 hosts.
- **Fourth vantage point added.** A mobile connection in Guangzhou on China Mobile (中国移动), which introduces the carrier question and the mobile question together. The method statement has to separate the two and say the edition cannot fully isolate them yet, since one line cannot distinguish a carrier effect from a mobile network effect. Say it rather than let a reader assume otherwise.
- **Stability ranking introduced.** With four dated editions, every host gets a stability score based on how many times its verdict has changed, published as a sorted list. Hosts that have never moved across four editions are named as such, and that list is more useful to a developer than the failure list.
- **Table gains** Guangzhou mobile median TTFB, Guangzhou mobile completions, and a stability column carrying the four-edition change count.
- **Narrative shifts.** Lead on stability rather than on movement: which dependencies can be planned around and which cannot. Then the mobile and carrier finding, carefully hedged. Then the month's movement.
- **Retirement policy stated.** Any host that has produced an identical verdict across all four editions and appears in no current client stack moves to a reduced quarterly cadence, with the reason published so the panel change is not mistaken for a disappearance.

**Metadata.**
```yaml
title: "China Dependency Index, January 2027"                                        # 36 / 52
description: "Sixty-four hosts on four mainland networks, including Guangzhou China Mobile, with the first stability ranking across four editions."   # 132 / 152
excerpt: "January adds a fourth network and ranks every host by how much its verdict has moved across four monthly editions."   # 20 / 25 words
```

---

---

## 9. T5: editorial guides

Eight pieces, English first, translated only on performance.

| # | Slug | Angle |
|---|---|---|
| T5-01 | `china-payments-website` | The article the Stripe query actually wants. Accepting Alipay (支付宝), WeChat Pay (微信支付) and UnionPay (银联) on a WordPress or Shopify site, and why no official plugin exists. |
| T5-02 | `china-analytics-stack` | What replaces a blocked GA4 and Tag Manager stack. Baidu Tongji (百度统计), self-hosted Plausible or Matomo on Aliyun, and the PIPL cross-border angle that makes this a compliance decision and not only a technical one. |
| T5-03 | `wechat-website-integration` | Official Account, Mini Program and the website. Where the boundary sits and what genuinely needs to be built twice. |
| T5-04 | `china-website-maintenance` | What a mainland retainer actually covers, why the update path is the security story (F8), and what an SLA means when the provider console is Chinese-only. |
| T5-05 | `baidu-vs-google-technical-seo` | The technical deltas only, not the strategy. Crawl behavior, rendering (F19), structured data (F21), submission (F22, F24). Bridges the WordPress cluster to the existing Baidu library. |
| T5-06 | `china-bilingual-content-ops` | Running an English and Simplified Chinese site as one editorial operation. Translation memory, review workflow, who signs off, and why machine translation fails on a China site specifically. |
| T5-07 | `china-website-accessibility-mobile` | Mobile-first for Chinese usage patterns, UC Browser and QQ Browser rendering, and what breaks that does not break in Chrome. |
| T5-08 | `foreign-brand-china-web-checklist` | The pre-launch checklist. Distinct from the T1 vendor brief checklist: this one is the technical gate before go-live. |

---

Eight pieces. English first, translated only on performance per the T7 rules.

---

#### T5-01. Accepting Payments on a China Website

| | |
|---|---|
| **Slugs** | en `china-payments-website` · de `zahlungen-website-china` · es `pagos-web-china` · fr `paiements-site-chine` |
| **Target** | accept payments china website |
| **Secondary** | alipay wordpress, wechat pay website, stripe china alternative |
| **Intent** | Commercial investigation. Somebody has a checkout that works everywhere except the market they just entered. |
| **Incumbent** | Payment gateway marketing pages and forum threads. Nobody with a build perspective. |
| **Length** | 1,500 words |

**Angle.** People search for Stripe in China because Stripe is the word they have. The answer is not a compatibility fix, it is that mainland China is not a supported acquiring country, so no amount of script tuning produces a working checkout. The article that helps them explains the three rails that do work, Alipay (支付宝), WeChat Pay (微信支付) and UnionPay (银联), and says plainly that the reason no official plugin exists is licensing and merchant onboarding, not a missing integration.

**Facts.** F40 (lead), F38, F26, F27, F41, F42.

**Outline.**
1. What the Stripe question is actually asking
2. Licensing before technology: why the acquiring country matters (F40)
3. The three rails, and who can hold a merchant account on each
4. What the payment providers ask for before any code is written (F26)
5. WooCommerce and the aggregator route
6. Shopify and the hosted platform constraint (F38)
7. Cross-border acquiring versus a domestic entity, and which one you are really choosing
8. Frequently asked

**Do not.** Do not publish a reachability verdict on `js.stripe.com`. It sits in the untested set in F42, and the article does not need it. The argument is licensing, and a probe result would only invite a reader to conclude the block is the problem. PayPal is the one adjacent datapoint worth citing, with the detail from F40 that the disrupted URLs are the checkout redirect paths.

**Links.** Up to `/website-in-china/`. Sideways to `woocommerce-china-store-guide` and `icp-licence-filing-foreign-companies`.

**Metadata.**
```yaml
title: "Accepting Payments on a China Website"  # 37 / 52
description: "Stripe does not acquire in mainland China. Here is how Alipay, WeChat Pay and UnionPay get onto a WordPress or Shopify checkout."  # 128 / 152
excerpt: "Why no official plugin exists, what the three domestic rails require, and the merchant account questions that come before any code."  # 21 / 25
```

**CTA.** Ask us to scope your China checkout

---

#### T5-02. The China Analytics Stack After GA4

| | |
|---|---|
| **Slugs** | en `china-analytics-stack` · de `web-analyse-china` · es `analitica-web-china` · fr `analytics-site-chine` |
| **Target** | website analytics china |
| **Secondary** | google analytics blocked china, baidu tongji setup, matomo china |
| **Intent** | Informational moving to commercial. The dashboard has gone flat and someone upstairs wants numbers. |
| **Incumbent** | Thin listicles that name Baidu Tongji and stop. |
| **Length** | 1,400 words |

**Angle.** Replacing GA4 in China is usually written as a tool swap. It is not. Two independent forces push the same way: the collection beacon does not complete, and PIPL makes an overseas analytics endpoint a cross-border transfer decision rather than a vendor preference. Self-hosting Plausible or Matomo on Aliyun (阿里云) is the only answer that resolves both at once, and that is the sentence nobody else writes.

**Facts.** F3 (lead), F34, F33, F23, F41, F21, F42.

**Outline.**
1. The week the numbers stopped arriving (F3)
2. Blocked is the easy case. Answers then hangs is the hard one (F33, F34)
3. Baidu Tongji (百度统计): what it gives you, what it costs you, and how it actually gets installed (F23)
4. Self-hosted Plausible or Matomo on Aliyun (F34, F41)
5. The PIPL question, and why it makes this a compliance decision (F3)
6. Tag management when the container is intermittent (F3)
7. What to instrument in the first two weeks
8. Frequently asked

**Required table.** Host, verdict, where it was measured, and the date. Populate it from F34 only, including the Amplitude split where the CDN answers and the API does not, and the Plausible and Matomo completion times. Every row carries a vantage point. This table is the reason the page outranks the listicles, because per F45 nobody in the competitive set publishes a measurement at all.

**Links.** Up to `/website-in-china/`. Sideways to `google-analytics-china` and `china-data-privacy-pipl-dsl`.

**Metadata.**
```yaml
title: "The China Analytics Stack After GA4"  # 35 / 52
description: "Google Analytics does not report from China and PIPL is the second reason. Baidu Tongji, self-hosted Matomo, and how to choose."  # 127 / 152
excerpt: "What replaces a blocked GA4 and Tag Manager stack, with measured numbers, and why the choice is a compliance call too."  # 21 / 25
```

**CTA.** Have us rebuild your China measurement stack

---

#### T5-03. WeChat and Your China Website

| | |
|---|---|
| **Slugs** | en `wechat-website-integration` · de `wechat-website-anbindung` · es `wechat-integracion-web` · fr `wechat-integration-site` |
| **Target** | wechat website integration |
| **Secondary** | wechat official account website, mini program vs website, wechat login website |
| **Intent** | Informational. A brand has been told it needs a Mini Program and wants to know what that costs them in duplicated work. |
| **Incumbent** | Agency sales pages selling Mini Program builds. No neutral explainer. |
| **Length** | 1,600 words |

**Angle.** Foreign brands arrive believing WeChat (微信) is a channel their website plugs into. It is closer to a parallel internet with its own account model, its own review process and its own rendering. The useful article draws the boundary precisely: what the Official Account genuinely replaces, what the Mini Program genuinely replaces, and the short list of things that have to exist twice because no bridge exists between them.

**Facts.** F41 (lead, WeChat OAuth), F25, F26, F27, F36, F5.

**Outline.**
1. Three properties, one brand, and who owns each account
2. What an Official Account is and is not
3. Mini Program versus mobile web, the honest boundary
4. WeChat OAuth login on your own website (F41)
5. Sharing behavior, and what changes the moment a link leaves the app
6. What genuinely has to be built twice, and what does not
7. The website side: entity, filing and hosting still apply (F25, F26)
8. Frequently asked

**Honesty requirement.** The fact bank carries no probe data on WeChat platform endpoints and no verified review timelines for Mini Program submission. State account and entity requirements as requirements. Do not publish latency, availability or approval-time figures for anything in the WeChat ecosystem in this piece. Where the article needs a number, use the ICP filing timelines in F26, which are sourced, and say what is unverified rather than rounding it off.

**Links.** Up to `/web-agency-china/`. Sideways to `china-website-localisation` and `mobile-first-design-china`.

**Metadata.**
```yaml
title: "WeChat and Your China Website"  # 29 / 52
description: "Official Account, Mini Program and website. Where the boundary sits, what WeChat login can do, and what you genuinely build twice."  # 130 / 152
excerpt: "The three WeChat properties a foreign brand ends up owning, and the honest line between what overlaps and what does not."  # 21 / 25
```

**CTA.** Talk to us about your WeChat and website split

---

#### T5-04. What China Website Maintenance Covers

| | |
|---|---|
| **Slugs** | en `china-website-maintenance` · de `website-wartung-china` · es `mantenimiento-web-china` · fr `maintenance-site-chine` |
| **Target** | china website maintenance |
| **Secondary** | wordpress maintenance china, china website support retainer, wordpress updates china |
| **Intent** | Commercial. Somebody is comparing a mainland retainer against the agency they already pay at home. |
| **Incumbent** | Generic maintenance-package pages with a China paragraph bolted on. |
| **Length** | 1,400 words |

**Angle.** A China retainer is priced like a Western one and does entirely different work. The core of it is that the update path itself is the security story: the servers answer but rate limit mainland addresses, and the dashboard does not announce it, it just quietly stops offering updates. Everything else in the retainer, mirrors, crawler policy, filing hygiene, follows from that one fact.

**Facts.** F8 (lead), F15, F16, F18, F17, F28, F27, F26, F32.

**Outline.**
1. What actually breaks on a mainland site between launches
2. The silent 429, and why nothing in the dashboard tells you (F8)
3. Mirrors, and what a maintained update path looks like in practice
4. Security plugin defaults that block Chinese crawlers (F15, F16, F18)
5. Optimization tools that fetch your site from the wrong side of the border (F17)
6. There is no managed WordPress in China, so somebody has to be the manager (F28)
7. What an SLA means when the provider console is Chinese only (F27)
8. Filing hygiene: what a hosting or entity change triggers (F26)

**Required table.** Retainer scope by cadence: monthly, quarterly, annual, and on event. Put the filing review under annual, the update pass under monthly, and crawler access verification under quarterly. The on-event column is the one that sells, because it names the changes that quietly invalidate a filing.

**Links.** Up to `/wordpress-in-china/`. Sideways to `wordpress-hosting-china` and `is-wordpress-blocked-in-china`.

**Metadata.**
```yaml
title: "What China Website Maintenance Covers"  # 37 / 52
description: "The update servers rate limit mainland IPs and say nothing. That single fact shapes every line of a real China maintenance retainer."  # 132 / 152
excerpt: "Why the update path is the security story, what belongs in the scope, and what an SLA means with a Chinese-only console."  # 22 / 25
```

**CTA.** See what our China retainer includes

---

#### T5-05. Baidu vs Google: The Technical Differences

| | |
|---|---|
| **Slugs** | en `baidu-vs-google-technical-seo` · de `baidu-google-technisches-seo` · es `baidu-google-seo-tecnico` · fr `baidu-google-seo-technique` |
| **Target** | baidu vs google seo |
| **Secondary** | baidu technical seo, does baidu render javascript, baidu crawler |
| **Intent** | Informational. An SEO lead who knows Google well and needs the deltas, not a beginner explainer. |
| **Incumbent** | Recycled 2017-era posts repeating claims that were already out of date when written. |
| **Length** | 1,500 words |

**Angle.** Almost every English-language comparison of Baidu and Google is a strategy piece wearing a technical costume. This one is only the deltas, and it corrects the single most repeated error in the category: Baiduspider renders JavaScript and has done since April 2017, which means the standard advice traces to a source three months older than the announcement that invalidated it. Server-side rendering is still the right call, but for a reason the reader has probably never been given.

**Facts.** F19 (lead), F20, F21, F22, F24, F15, F16, F18, F23.

**Outline.**
1. Where the two crawlers are genuinely doing different work
2. Rendering: what Baiduspider-render actually fetches, and when the claim went stale (F19)
3. Verifying the crawler by reverse DNS, never by user agent (F20)
4. Structured data, and where the two diverge (F21)
5. Submission: the push endpoint, and what replaced fast inclusion (F22, F24)
6. Realistic timelines to first indexing (F24)
7. Blocking Baiduspider by accident, through security and cache plugin defaults (F15, F16, F18)
8. What your SEO plugin does, which is one meta tag (F21, F23)

**Do not.** Two claims from the Do Not Assert list are the entire reason this article exists, so name them and retire them, but do not overcorrect. Do not write that Baidu ignores JavaScript, and do not write that Baidu reads schema.org JSON-LD from Yoast. Per F19, Baidu publishes nothing on rendering coverage or queue latency, so present server-side rendering as risk reduction and never as documented Baidu policy.

**Links.** Up to `/website-in-china/`. Sideways to `baidu-structured-data` and `submitting-urls-to-baidu`.

**Metadata.**
```yaml
title: "Baidu vs Google: Technical Differences"  # 38 / 52
description: "Crawl, render, structured data and submission. The technical deltas between Baidu and Google, without the strategy padding."  # 123 / 152
excerpt: "What actually differs for an SEO who already knows Google, including the JavaScript claim that has been wrong since 2017."  # 20 / 25
```

**CTA.** Get a Baidu technical audit

---

#### T5-06. Running an English and Chinese Site Together

| | |
|---|---|
| **Slugs** | en `china-bilingual-content-ops` · de `zweisprachige-website-china` · es `web-bilingue-china` · fr `site-bilingue-chine` |
| **Target** | bilingual website china |
| **Secondary** | chinese website translation workflow, hreflang chinese, wpml polylang china |
| **Intent** | Informational. A content lead who owns two languages and one calendar and is losing to the second one. |
| **Incumbent** | Translation vendor blogs. Nothing that treats it as an editorial operation. |
| **Length** | 1,600 words |

**Angle.** Bilingual publishing is usually sold as a plugin decision. It is a staffing and sign-off decision that a plugin then implements, badly, if nobody checked the defaults. The article couples the operational half, translation memory, glossary, who approves Chinese copy, to the technical half where the plugins quietly disagree about what Simplified Chinese is even called, and shows that machine translation fails on a China site for a reason specific to China rather than a general quality complaint.

**Facts.** F12 (lead), F14, F13, F41, F46.

**Outline.**
1. Two languages, one publishing calendar, and where it slips
2. Language codes: what the plugins actually emit (F12, F14)
3. Runtime translation calls, and the ones that stall on a mainland server (F13)
4. Translation memory and the glossary that has to exist before the first brief
5. Review workflow: who writes, who edits, who signs off in country
6. Why machine translation fails here specifically, beyond quality
7. Cadence and freshness, and what passage-level retrieval rewards (F46)
8. Frequently asked

**Precision requirement.** Quote the strings exactly. Polylang's default `zh_CN` slug is `zh` and it emits `hreflang="zh"`, never `hreflang="zh-Hans"`, with `pll_rel_hreflang_attributes` as the override. WPML defaults to `/zh-hans/`. Name the plugin versions from F12 and F14 and the date they were read. Getting one character wrong here costs the article its authority with exactly the reader it is for.

**Links.** Up to `/website-in-china/`. Sideways to `china-website-localisation` and `baidu-seo-ranking-in-china`.

**Metadata.**
```yaml
title: "Running an English and Chinese Site"  # 35 / 52
description: "Translation memory, review workflow, who signs off, and the language codes your plugin gets wrong. Bilingual publishing as one operation."  # 137 / 152
excerpt: "How to run two languages on one calendar, and why machine translation fails on a China site for reasons specific to China."  # 22 / 25
```

**CTA.** Talk to our Chinese editorial team

---

#### T5-07. Mobile and Browsers in China

| | |
|---|---|
| **Slugs** | en `china-website-accessibility-mobile` · de `mobile-browser-china` · es `movil-navegadores-china` · fr `mobile-navigateurs-chine` |
| **Target** | mobile website china |
| **Secondary** | uc browser compatibility, qq browser testing, china mobile web performance |
| **Intent** | Informational. A designer or front-end lead whose site passes every check at home. |
| **Incumbent** | Design blogs describing Chinese aesthetics. Nothing about what breaks. |
| **Length** | 1,400 words |

**Angle.** The China mobile problem is not layout, it is that the page depends on hosts a Chinese phone cannot finish talking to, and the browsers people actually use are not the one your QA runs. A page that scores well in Chrome on an office connection can fail two thirds of the time from Beijing, and the failure is a render-blocking third party rather than a responsive breakpoint.

**Facts.** F31 (lead), F1, F36, F33, F37, F6, F41, F32.

**Outline.**
1. How China actually browses, and why desktop QA never sees it
2. The Beijing load numbers, with the method attached (F31)
3. Render blocking: the dependencies that stop a page dead rather than slowing it (F1, F36)
4. The half-loaded page, where the layout is fine and the widget is empty (F33, F37)
5. UC Browser and QQ Browser: what to test, and how to test it honestly
6. Fonts and icons, and the variable that changes by network and by hour (F6, F41)
7. Building a mobile QA pass that mirrors real conditions (F32)
8. Frequently asked

**Honesty requirement.** The fact bank holds no measured rendering data for UC Browser or QQ Browser. Do not invent engine behavior or version support. Write that section from what is verifiable, namely that these browsers carry meaningful share and that testing has to happen on them, and argue the failure modes from request topology using F1, F33 and F36. Cite the Chinafy benchmark in F31 with attribution and note it is a vendor benchmark with a stated method.

**Links.** Up to `/website-in-china/`. Sideways to `mobile-first-design-china` and `great-firewall-what-it-blocks`.

**Metadata.**
```yaml
title: "Mobile and Browsers in China"  # 28 / 52
description: "Two thirds of tested sites failed to load from Beijing. What breaks on a Chinese phone that never breaks in Chrome, and how to test it."  # 135 / 152
excerpt: "Mobile-first for Chinese usage patterns, UC Browser and QQ Browser, and the render-blocking dependencies your QA never sees."  # 18 / 25
```

**CTA.** Book a China mobile performance test

---

#### T5-08. The Pre-Launch Checklist for a China Website

| | |
|---|---|
| **Slugs** | en `foreign-brand-china-web-checklist` · de `checkliste-website-china` · es `checklist-web-china` · fr `checklist-site-chine` |
| **Target** | china website launch checklist |
| **Secondary** | launching a website in china, china website requirements, go live china website |
| **Intent** | Transactional. Somebody has a date and needs to know what stops them hitting it. |
| **Incumbent** | Nobody with a technical gate. The existing checklists are marketing checklists. |
| **Length** | 1,600 words |

**Angle.** This is the gate, not the shopping list. Every item is either blocking or it is not, and the blocking ones are mostly not technical: ports stay closed on a mainland IP until the filing clears, so there is no soft launch to fall back on. The rest of the checklist exists to catch the dependencies that pass a staging review from outside China and fail silently from inside it.

**Facts.** F25 (lead), F26, F27, F29, F30, F1, F2, F3, F4, F5, F33, F37, F40, F41, F20, F22.

**Outline.**
1. What this gate is for, and who owns each line
2. Entity, domain and filing, the items with the longest lead time (F26, F27)
3. Hosting and the closed-port problem, why there is no soft launch (F25)
4. Edge and platform choices that decide themselves (F29, F30)
5. The render-blocking sweep (F1, F2, F3, F4, F5)
6. The silent failures, which are harder than the blocks (F33, F37)
7. Licensing items disguised as technical ones: maps and payments (F37, F40)
8. Analytics, crawler access and submission before go live (F41, F20, F22)

**Required table.** One gate table, four columns: item, owner, blocking or non-blocking, and verified from where. The last column is the point of the whole article, because per F45 the entire competitive set publishes checklists with no test location on any line. Every row that says "verified" names a vantage point and a date, or it says unverified.

**Links.** Up to `/web-agency-china/`. Sideways to `icp-licence-filing-foreign-companies` and `choosing-web-agency-china`.

**Metadata.**
```yaml
title: "The China Website Pre-Launch Checklist"  # 38 / 52
description: "The technical gate before go-live. Filing, ports, hosting, dependencies and the silent failures that pass review from outside China."  # 132 / 152
excerpt: "What blocks a China launch and what does not, item by item, with a named test location on every line that claims verification."  # 23 / 25
```

**CTA.** Request a pre-launch technical review

---

---

---

## 10. T6: upgrades to existing pages

Ten pieces, **zero new URLs.** These are the cheapest wins in the plan and they carry no risk at all.

1. **Fix the title suffix across all guide articles.** Section 0 of v1 flagged this and it is still open. It is one template change and it lifts every page.
2. **`is-wordpress-blocked-in-china`:** add a measurement table with vantage points, and correct the Google Fonts paragraph per F6. This article currently carries the version of that claim that v2 retracts.
3. **`wordpress-hosting-china`:** add the harness numbers.
4. **`choosing-web-agency-china`:** add FAQ schema, and add the vendor comparison as a table rather than prose.
5. **`google-analytics-china`:** upgrade with F34. **Do not write a new GA article**, this URL already exists and a second one would recreate the cannibalization Move 1 just fixed.
6. **`great-firewall-what-it-blocks`:** attach the dependency table. This is the natural hub for it.
7. **`china-website-hosting-guide` and `host-website-in-china`:** two URLs, adjacent intents. Audit for overlap and either differentiate sharply or consolidate with a redirect.
8. **`/wordpress-in-china/`:** add a measurement block and FAQ schema.
9. **`/web-agency-china/` and `/wordpress-agency-china/`:** FAQ schema, one hard number per section.
10. **`baiduspider-firewall`:** add F15 and F16, the Wordfence Google-only whitelist and the Solid Security HackRepair list. Both are source-verified and neither is anywhere else on the web.

---

Ten engineering and editing tasks on pages that already exist. Every one of these creates zero new URLs. Any work order whose execution would add a URL has been written wrong and should come back for revision before it is built.

---

#### T6-01. Strip the guide title suffix at the template level

| | |
|---|---|
| **Scope** | The guide article layout. All 30 guide articles per locale, all four locales, 120 pages. |
| **Type** | Template change |
| **New URLs** | 0 |
| **Effort** | Half a day of template work, plus a metadata pass over the 30 English titles that were written assuming the suffix would be there. |

**Why.** The guide layout appends ` | China Web Guide | ChinaWebFoundry`, which is 35 characters. Every guide article therefore renders a `<title>` of 62 to 71 characters against a standing 52-character ceiling, so the front half of the brand suffix is what gets truncated in the SERP and the differentiating end of the actual title is what gets cut. This is one template decision, not 120 content edits, and fixing it once fixes every page in the tier including everything shipped in T2.

**What to change.** Remove the appended suffix from the guide article layout so the page title renders exactly the `title` value from frontmatter. Keep the suffix on the home page and top-level service pages, where titles are short enough to carry it. Add a build-time assertion in the Astro layout that fails the build when a rendered `<title>` exceeds 52 characters, so the ceiling stops being a convention and becomes a gate. Audit the de, es and fr suffix strings separately, since their translated forms are not 35 characters and the localized titles are already longer than the English ones. Then re-read the 30 English guide titles and shorten any that were drafted to read well with the suffix attached.

**Acceptance criteria.**
- [ ] View source on any guide article in any locale: `<title>` contains no ` | China Web Guide` substring.
- [ ] A script over the built output reports zero guide article `<title>` values above 52 characters, in all four locales.
- [ ] `og:title` and `twitter:title` match the `<title>` string exactly on a spot check of five articles per locale.
- [ ] The build fails when a test article with a 60-character title is committed, and passes when it is shortened.
- [ ] Breadcrumb JSON-LD `name` values are unchanged from before the deploy.
- [ ] `sitemap.xml` diff before and after the deploy is empty.

**Risk.** The suffix variable may feed `og:title`, `twitter:title`, breadcrumb structured data and the RSS feed from one source, so removing it in one place can silently change four outputs. Titles are a live ranking input and 120 of them changing at once will move impressions for two to four weeks, which needs to be flagged in Search Console annotations so the dip is not misread as something else. No URL, canonical or hreflang value is touched by this work order, and if a diff shows one changing, stop and escalate.

---

#### T6-02. Correct the Google Fonts claim and add a measurement table to `is-wordpress-blocked-in-china`

| | |
|---|---|
| **Scope** | `is-wordpress-blocked-in-china`, all four locales. |
| **Type** | Content edit |
| **New URLs** | 0 |
| **Effort** | One day English, plus translation turnaround for de, es, fr. |

**Why.** This live article currently asserts the flat claim that F6 retracts, so the highest-traffic page in the guide is carrying a statement the fact bank now says we cannot stand behind. F6 is also not a simple reversal: replacing "Google Fonts is blocked in China" with "Google Fonts is not blocked in China" would be equally wrong and would put a worse claim on a bigger page. Alongside that, the article has no original measurement, which is the one thing F45 says nobody in the competitive set publishes.

**What to change.** Rewrite the Google Fonts paragraph to state both vantage points from F6: 73 of 73 requests completing at a 111ms median from an Alibaba Cloud mainland instance on 29 August 2026, and 0 of 54 from a Beijing residential broadband line on 28 August 2026. State that both are real, that the datacenter number is not the visitor experience, and that this is precisely why self-hosting is the correct answer. Note separately that `fonts.google.com`, the browsing interface, is blocked either way. Then add a measurement table above the fold with one row per dependency, each carrying host, verdict, latency, vantage point and test date, drawn from F1 through F8. Add a visible "last measured" date near the byline.

**Acceptance criteria.**
- [ ] The string "Google Fonts is blocked in China" does not appear anywhere in the English article, and its translated equivalents do not appear in de, es or fr.
- [ ] The string "Google Fonts is not blocked in China" does not appear either, in any locale.
- [ ] The Google Fonts paragraph names both vantage points and both test dates.
- [ ] The measurement table has a vantage point column and a date column, and no row is empty in either.
- [ ] A visible last-measured date appears within the first screen on mobile at 390px width.
- [ ] Slug, canonical and hreflang cluster for this article are byte-identical to before the edit.

**Risk.** This article is linked from several service pages and from the home page, so a heading change can break in-page anchor links. Search the codebase for `#` fragments targeting this URL before renaming any H2. The translated versions will drift out of sync if the English ships first and the other three lag, and a de page asserting the retracted claim while the en page corrects it is worse than the current state, so hold all four for a single deploy.

---

#### T6-03. Add harness numbers to `wordpress-hosting-china`

| | |
|---|---|
| **Scope** | `wordpress-hosting-china`, all four locales. |
| **Type** | Content edit |
| **New URLs** | 0 |
| **Effort** | One day English, plus translation. |

**Why.** The article recommends hosting decisions without publishing a single figure to support them, which puts it in the same category as every competitor page (F45). CWF already owns numbers that no competitor has: F32 gives measured post-migration performance, and F25 through F30 give the structural constraints that decide the hosting choice before performance ever enters the conversation.

**What to change.** Add a benchmark block near the top carrying the F32 figures with their conditions stated: median 1.2 seconds after migration against 23.4 seconds on a European origin, 99.98% uptime over 90 days, and 48ms, 36ms and 61ms response times from Beijing, Shanghai and Guangzhou. Add a decision table covering the real options with their real constraints: Alibaba Cloud (阿里云) and the aliyun.com versus alibabacloud.com split from F27, Tencent Cloud (腾讯云), Huawei Cloud (华为云), Vercel per F29 including Vercel's own November 2025 statement, and Cloudflare per F30. Add an explicit section stating that no managed WordPress product exists in mainland China (F28) and what the one-click images on Alibaba Simple Application Server (轻量应用服务器), Tencent Lighthouse and Huawei FlexusL actually are. State the ports 80 and 443 constraint from F25 before any of it, because it decides everything downstream.

**Acceptance criteria.**
- [ ] Every latency or uptime figure on the page names a vantage point and a measurement window.
- [ ] The page states the alibabacloud.com versus aliyun.com distinction explicitly (F27).
- [ ] The page states that no managed WordPress exists in China (F28).
- [ ] The Vercel section cites Vercel's own knowledge base statement and its date.
- [ ] Zero figures from the Do Not Assert list appear, verified by a grep for "93%" and "44% of resources".
- [ ] No URL, canonical or hreflang change in the deploy diff.

**Risk.** Vendor-named comparison tables age and this one names six providers, so it needs a review date in frontmatter and a calendar reminder, or it becomes the stale asset the cluster is meant to replace. The F32 numbers are CWF's own and must be labeled as such rather than presented as neutral benchmarking.

---

#### T6-04. Add FAQ schema and a comparison table to `choosing-web-agency-china`

| | |
|---|---|
| **Scope** | `choosing-web-agency-china`, all four locales. |
| **Type** | Schema plus content edit |
| **New URLs** | 0 |
| **Effort** | Half a day for schema across the template, half a day for the table rewrite per locale. |

**Why.** The vendor comparison currently runs as prose, which is the least retrievable format for the exact passage a buyer wants, and F46 says answer engines retrieve at passage level with a preference for entity density and specific figures. A table gives that. FAQ schema on a page that already answers buyer questions costs an hour and makes those answers addressable.

**What to change.** Convert the vendor comparison prose into a table with one row per agency type: mainland agency, international agency with a China office, offshore agency with no China presence, and freelance. Columns for ICP filing capability, mainland hosting, Chinese-language content, Baidu work and typical engagement shape. Add FAQ schema as JSON-LD covering four to six questions already answered in the body, with the schema answers matching the on-page copy word for word. Add one hard figure per major section, drawn from F26 for filing timelines and F32 for delivery outcomes.

**Acceptance criteria.**
- [ ] The comparison renders as a `<table>` element, not as a styled list or prose.
- [ ] The table scrolls horizontally inside its own container at 390px width without the page scrolling sideways.
- [ ] FAQ JSON-LD validates in the Rich Results Test with zero errors and zero warnings, in all four locales.
- [ ] Every FAQ schema answer string appears verbatim in the visible page copy.
- [ ] At least one numeric figure with a source appears in each H2 section.
- [ ] Schema `inLanguage` matches the page locale on all four versions.

**Risk.** FAQ schema whose answers do not match visible copy is a manual action risk, so the verbatim check is not optional. Translated FAQ schema is a common place for the English strings to survive a translation pass, which produces a de page with English JSON-LD.

---

#### T6-05. Upgrade `google-analytics-china` with F34, and do not create a second GA page

| | |
|---|---|
| **Scope** | `google-analytics-china`, all four locales. |
| **Type** | Content edit |
| **New URLs** | 0. This is the load-bearing constraint of this work order. |
| **Effort** | One day English, plus translation. |

**Why.** This URL already exists and already ranks, and F34 contains the strongest analytics material in the bank, none of which is on the page. Publishing a second GA article to carry F34 would recreate exactly the cannibalization the Move 1 consolidation was done to remove, so the new material goes here and nowhere else.

**What to change.** Add a measured alternatives table built from F34: Hotjar 100% disrupted per GreatFire 2026-08-20 and hosted on Google Cloud, Meta Pixel 100% blocked per GreatFire 2026-07-27, Clarity 541ms then 0 of 3 completions, Mixpanel 391ms then 0 of 3, Segment completing at 900 to 1,084ms, Plausible completing at 550ms and Matomo cloud at 516ms. Give the Amplitude split its own paragraph, because `cdn.amplitude.com` reachable with `api.amplitude.com` blocked means the script loads, the events never post, and the dashboard reads as working. That is the most useful single fact on the page. Keep the PIPL cross-border reasoning from F3 as an independent argument, stated separately from reachability, since it holds even if a host starts answering. Close on the replacement set from F41, leading with Baidu Tongji (百度统计) and the self-hostable options.

**Acceptance criteria.**
- [ ] No new URL is created anywhere in the repo during this work order.
- [ ] The Amplitude split has its own subsection with both hostnames named.
- [ ] Every verdict in the table carries a source key and a date.
- [ ] The PIPL argument is presented as independent of reachability, in its own section.
- [ ] Internal links from `cookie-consent-china` and the analytics service page resolve to this URL and return 200.
- [ ] `sitemap.xml` entry count is unchanged after the deploy.

**Risk.** The temptation during drafting is to split this into a GA article and an "analytics alternatives" article. Reject that in review. If the page runs long, cut the general PIPL explanation and link to `china-data-privacy-pipl-dsl` rather than splitting the URL.

---

#### T6-06. Attach the dependency table to `great-firewall-what-it-blocks`

| | |
|---|---|
| **Scope** | `great-firewall-what-it-blocks`, all four locales. |
| **Type** | Content edit, plus a reusable table component. |
| **New URLs** | 0 |
| **Effort** | One to two days, since the component should be built to be reused on the T2 pages. |

**Why.** This is the natural hub for the full third-party dependency table from F33 through F42. The page already answers the category question and it is the page most likely to be cited when an answer engine is asked what the firewall blocks, so it should hold the most complete verified dataset CWF has. F45 says no competitor publishes one at all.

**What to change.** Build the dependency table as a reusable component with columns for service, hostname, verdict, latency, vantage point, source key and test date, then populate it from F33 through F39. Group by category: analytics, forms and chat, embeds, maps, platforms, infrastructure. Include the untested rows from F42 marked explicitly as untested, rather than dropping them, since the gap is itself informative. Lead the page with F33 as a framing idea, because "answers then hangs" is the failure mode that reframes the whole category and it is the passage most likely to be retrieved. Add the payments correction from F40, stating that Stripe is a licensing question and not a compatibility one, and route to the payments article rather than expanding it here.

**Acceptance criteria.**
- [ ] Every table row has a non-empty vantage point cell and a non-empty date cell, or is explicitly marked untested.
- [ ] No row in the table asserts a verdict for any of the eleven dependencies listed in F42 without a fresh probe.
- [ ] The table is server-rendered in the HTML source, verified by viewing source with JavaScript disabled.
- [ ] The table container scrolls horizontally at 390px without the page body scrolling sideways.
- [ ] The F33 framing appears within the first 30% of the page by word count.
- [ ] The component is imported by at least one other page, proving reuse.

**Risk.** A table this size is the page's main asset and also its main maintenance liability, so every row needs a date and the page needs a review cadence. Server rendering is not optional here: F46 notes ChatGPT's retrieval bot does not execute JavaScript, and a client-rendered table would make the page's best asset invisible to the crawler it was built for.

---

#### T6-07. Audit `china-website-hosting-guide` against `host-website-in-china`, then differentiate or consolidate

| | |
|---|---|
| **Scope** | Two URLs, `china-website-hosting-guide` and `host-website-in-china`, all four locales, so eight pages. |
| **Type** | Information architecture |
| **New URLs** | 0. The consolidation branch removes a URL and adds none. |
| **Effort** | Half a day to audit and decide. Two to three days to execute whichever branch wins. |

**Why.** Two URLs sit on adjacent intents, one framed as a guide and one framed as a task. Either they serve genuinely different queries and the copy should make that obvious, or they are splitting the same intent and one of them should redirect into the other. Right now nobody has checked which, and Search Console will answer it in twenty minutes.

**What to change.** Run the audit first: pull 90 days of Search Console query data for both URLs and compute the overlap in the queries each ranks for. If overlap on the top 20 queries exceeds roughly 40%, or if the two pages trade positions on the same query, take the consolidation branch. Otherwise take the differentiation branch.

Differentiation branch: rewrite `china-website-hosting-guide` as the decision and comparison page covering providers and constraints, and rewrite `host-website-in-china` as the procedural page covering the sequence from entity to filing to deployment. Remove every provider comparison from the procedural page and every step-by-step from the guide. Cross-link them once each, in the body.

Consolidation branch: keep `china-website-hosting-guide` as the surviving URL, merge the unique material from the other page into it, and 301 `host-website-in-china` to it in all four locales. Update every internal link to point at the destination directly rather than through the redirect, and remove the retired URL from the sitemap and from the hreflang cluster in all four locales at the same time.

**Acceptance criteria.**
- [ ] A written audit note records the query overlap percentage and which branch it selected.
- [ ] Differentiation branch: no H2 heading text is shared between the two pages, and neither page contains a provider comparison table if it is the procedural page.
- [ ] Consolidation branch: `host-website-in-china` returns 301 to `china-website-hosting-guide` in all four locales, verified with curl per locale.
- [ ] Consolidation branch: zero internal links anywhere in the repo point at the retired URL, verified by grep.
- [ ] Consolidation branch: the retired URL is absent from `sitemap.xml` and from every `hreflang` cluster on the surviving page.
- [ ] Consolidation branch: no redirect chain exists, verified by curl following redirects and confirming exactly one hop to a 200.
- [ ] Either branch: total URL count in the sitemap goes down by four or stays the same, never up.

**Risk.** This is the highest-risk item in the set because the consolidation branch touches URLs, and the Move 1 redirect work has already shipped. A new 301 added on top of an existing Move 1 rule produces a chain, which leaks equity and can loop. Before writing any rule, read the shipped Move 1 redirect map and check whether either of these two slugs already appears as a source or a destination in it. If `host-website-in-china` is already a Move 1 destination, the correct fix is to edit the existing Move 1 rule to point at the final target rather than to add a second hop. The hreflang cluster must be updated in the same deploy as the redirect: a retired URL still referenced by three other locales' hreflang tags is a self-inflicted crawl error across all four.

---

#### T6-08. Add a measurement block and FAQ schema to `/wordpress-in-china/`

| | |
|---|---|
| **Scope** | `/wordpress-in-china/`, all four locales. |
| **Type** | Content edit plus schema |
| **New URLs** | 0 |
| **Effort** | One day English, plus translation and a schema pass. |

**Why.** This is the top of the WordPress cluster and the page most internal links point at, so it should carry the strongest evidence on the site and currently carries none. F46's finding that roughly 44% of AI citations come from the first 30% of a page means a measurement block placed above the fold on the cluster hub does more retrieval work than the same block anywhere else.

**What to change.** Add a measurement block within the first screen carrying four or five figures with vantage points and dates, drawn from F1, F4, F6, F8 and F32. Add FAQ schema covering the five questions this page already answers, with answers matching visible copy verbatim. Add a visible last-reviewed date near the byline. Make sure the Google Fonts line here follows the same F6 treatment as T6-02, because a hub page contradicting its own child article is worse than either error alone.

**Acceptance criteria.**
- [ ] The measurement block appears within the first 30% of the page by word count.
- [ ] Every figure in the block names a vantage point and a date.
- [ ] FAQ JSON-LD validates with zero errors in all four locales, with `inLanguage` matching each locale.
- [ ] Every schema answer appears verbatim in visible copy.
- [ ] The Google Fonts treatment on this page matches `is-wordpress-blocked-in-china` after T6-02, checked side by side.
- [ ] A visible last-reviewed date renders on mobile at 390px.
- [ ] Canonical and hreflang for the four locale versions are unchanged.

**Risk.** This URL has the deepest internal link graph on the site, so any heading rename breaks anchor links from child articles. Grep for fragment links to this URL before touching an H2. Sequence this after T6-02 so the fonts language is consistent in a single direction.

---

#### T6-09. Add FAQ schema and one hard number per section to `/web-agency-china/` and `/wordpress-agency-china/`

| | |
|---|---|
| **Scope** | Two commercial URLs, all four locales, so eight pages. |
| **Type** | Schema plus content edit |
| **New URLs** | 0 |
| **Effort** | One to two days total across both pages. |

**Why.** These are the two pages that carry the commercial intent for the primary keyword set, and both currently argue without evidence. One specific, sourced figure per section is the cheapest available upgrade to both conversion and retrievability, since F46 notes a preference for entity density and specific figures. FAQ schema on a commercial page also captures the procurement questions buyers type verbatim.

**What to change.** For each H2 section on both pages, add exactly one figure with a source and a date. Draw from F26 for filing timelines including the 10 to 30 working day published range against the realistic three to six weeks, F25 for the ports constraint, F32 for delivery outcomes, and F31 for the market context, cited with attribution as a vendor benchmark. Add FAQ schema to each page covering five to six procurement questions. Make sure the two pages do not use the same figures in the same order, because near-identical commercial pages under the same brand invite the same passage-level dedupe the T2 tier is designed to avoid.

**Acceptance criteria.**
- [ ] Every H2 section on both pages contains at least one figure with a named source and date.
- [ ] No figure appears on both pages in the same section position.
- [ ] The F31 citation names Chinafy as the source and identifies it as a vendor benchmark.
- [ ] No figure from the Do Not Assert list appears, verified by grep for "93%" and "44% of resources".
- [ ] FAQ JSON-LD validates with zero errors on both pages in all four locales.
- [ ] Every schema answer appears verbatim in visible copy.
- [ ] No URL, canonical or hreflang change in the deploy diff.

**Risk.** These are the pages ranking for the primary commercial terms, so edits carry more downside than on a guide article. Ship them in two deploys, one page at a time, a week apart, so any ranking movement is attributable. Do not touch headings on either page.

---

#### T6-10. Add F15 and F16 to `baiduspider-firewall`

| | |
|---|---|
| **Scope** | `baiduspider-firewall`, all four locales. |
| **Type** | Content edit |
| **New URLs** | 0 |
| **Effort** | Half a day English, plus translation. |

**Why.** F15 and F16 are both read from plugin source and neither appears anywhere else on the web, which makes this the highest-differentiation edit in the T6 set. The article currently discusses the problem in general terms while the two named, version-pinned findings that would make it citable sit unused in the fact bank.

**What to change.** Add a section on Wordfence 9.0.0 covering F15: every rate limit ships disabled, the only crawler policy whitelists Google alone by reverse DNS to `.googlebot.com`, there is no Baidu equivalent, and the allowlist is IP-only with no user-agent allowlist at all, while Baidu publishes no stable IP range. Spell out the consequence, which is that Baiduspider loses all protection the moment an administrator turns crawler rate limits on. Add a second section on Solid Security 10.0.3, packaged as better-wp-security and now branded Kadence Security, covering F16: the HackRepair ban list returns 403 for `360Spider` and `YisouSpider` at the server config level, it is opt-in with `"default": false`, and a client who enabled "Default Ban List" is 403ing Chinese crawlers without knowing it. Name the version numbers and the read date in both sections. Add the correct verification method from F20, reverse DNS to a hostname ending `.baidu.com` or `.baidu.jp`, never user agent, and state explicitly that published IP allowlists on Chinese SEO blogs go stale. Add the LiteSpeed Cache 7.9.1 and W3 Total Cache 2.10.6 clearance from F18, since ruling those out is as useful as ruling the others in.

**Acceptance criteria.**
- [ ] Both plugin sections name the exact version number inspected and the source read date.
- [ ] The Wordfence section states that the allowlist is IP-only and that Baidu publishes no stable IP range.
- [ ] The Solid Security section states that the ban list is opt-in and defaults to false.
- [ ] The article states that Baiduspider is verified by reverse DNS and never by user agent.
- [ ] The article does not assert that Baidu cannot read JavaScript, verified by grep against the Do Not Assert list.
- [ ] No claim is made about the reachability of any untested host listed in the Do Not Assert section.
- [ ] No URL, canonical or hreflang change in the deploy diff.

**Risk.** Version-pinned plugin findings go stale on the plugin's release cycle, not on ours, so both sections need the version number visible in the body and a review date in frontmatter. Naming security plugins by version and describing what their defaults do to Chinese crawlers is accurate and defensible as written, but it must stay descriptive of shipped configuration and must not characterize vendor intent.

---

## 11. T7: translation, earned

Fourteen slots across 26 weeks. Not a schedule, a budget.

**Rules.** Nothing is translated before day 90. Nothing in T2 is translated at all. A page qualifies on evidence: organic entries, an inquiry attributed to it, or an AI citation observed. Translate all three locales at once or none, so the hreflang set stays complete. Review the queue monthly and spend the slots on what earned them.

Expect roughly half the slots to go to T1 and the money page, which ship four-locale on day one anyway and therefore do not consume budget. The real allocation is T3 and T5.

---

---

## 12. Calendar

Twenty-six weeks from 8 September 2026 to 8 March 2027. Three slots a week: one substantial, one fast, one no-new-URL or report.

| Week | Slot 1, substantial | Slot 2, fast | Slot 3, upgrade or report |
|---|---|---|---|
| 1 | M1 website-in-china | T6-01 title suffix fix | T6-02 wordpress-blocked upgrade |
| 2 | A3 wordpress-plugins-china | T2-01 google-fonts-china | T6-05 google-analytics upgrade |
| 3 | A9 wordpress-speed-china | T2-05 javascript-cdn-china | T6-06 great-firewall upgrade |
| 4 | A5 migrate-wordpress-to-china | T3-01 case study | T6-03 hosting article upgrade |
| 5 | B5 china-website-brief-checklist | T2-03 recaptcha-china | T6-10 baiduspider upgrade |
| 6 | A4 wp-admin-slow-china | T3-02 case study | **T4-01 dependency index, ed. 1** |
| 7 | A6 wordpress-icp-filing | T2-02 hubspot-china | T6-04 choosing-agency upgrade |
| 8 | B3 china-website-timeline | T3-03 case study | T6-08 wordpress-in-china upgrade |
| 9 | A7 page-builders-china | T2-04 cloudflare-china | T6-09 money page schema |
| 10 | A11 wordpress-vs-astro-china | T3-04 case study | **T4-02 vantage point study** |
| 11 | T5-01 china-payments-website | T2-08 form-embeds-china | T6-07 hosting consolidation |
| 12 | B4 global-agency-china-website | T3-05 case study | T7 translation batch 1 |
| 13 | A10 wordpress-baidu-seo | T2-07 video-embeds-china | **T4-03 dependency index, ed. 2** |
| 14 | T5-02 china-analytics-stack | T3-06 case study | T7 translation batch 2 |
| 15 | A8 wordpress-multilingual-china | T2-06 shopify-china | T7 translation batch 3 |
| 16 | T5-05 baidu-vs-google-technical-seo | T3-07 case study | **T4-04 dependency index, ed. 3** |
| 17 | A12 wordpress-security-china | T2-09 maps-china | T7 translation batch 4 |
| 18 | T5-03 wechat-website-integration | T3-08 case study | T7 translation batch 5 |
| 19 | B2 china-website-cost | T2-10 vercel-netlify-china | T7 translation batch 6 |
| 20 | T5-04 china-website-maintenance | T3-09 case study | **T4-05 foreign site load study** |
| 21 | T5-06 china-bilingual-content-ops | T2-11 webflow-china | T7 translation batch 7 |
| 22 | T5-07 accessibility and mobile | T3-10 case study | T7 translation batch 8 |
| 23 | B6 china-web-agency-landscape-2026 | T2-12 squarespace-wix-china | **T4-06 dependency index, ed. 4** |
| 24 | T5-08 pre-launch checklist | T2-13 chat-widgets-china | T7 translation batch 9 |
| 25 | Reserve | T2-14 cookie-consent-china | T7 translation batch 10 |
| 26 | Reserve, or the first refresh pass | Reserve | T7 translation batches 11 to 14 |

Two reserve slots in week 25 and three in week 26 are deliberate. Something will slip, a measurement will need rerunning, and a plan with no slack is a plan that ships something thin to hit a date.

**Reconciling the count.** The table holds 78 slots, of which three are reserve. Week 26 slot 3 carries four translation batches in one entry, so 75 calendar entries deliver 78 pieces. If a reserve slot goes unused, it absorbs a slip rather than adding a piece.

**Publish at a steady rate.** AppInChina's 153 pages in a single month is the pattern that reads as programmatic. Three a week reads as an agency publishing.

---

---

## 13. Guardrails, the kill switch, and the acceptance list

These are cumulative, not a menu. Removing any one of them changes the risk profile of the whole plan.

1. **The compatibility cluster stays at 14 and stays English.** If someone proposes number 15, the answer is no unless something comes off the list.
2. **Every T2 page carries an original dated measurement with a named vantage point,** or it does not publish.
3. **No shared template above the H2 level.** Audit this at week 8 by diffing the published T2 pages against each other.
4. **Named human bylines with China-based author bios** on everything. Google's guidance asks explicitly whether it is self-evident who authored the content, and CWF's Shanghai staff are an asset neither Chinafy's directory nor a content farm can copy.
5. **Cluster-shaped content stays under 20% of indexed English pages.** At 14 of roughly 131 the plan lands near 11%. Recheck at week 13.
6. **Steady cadence, never a burst.**
7. **Nothing from the Do Not Assert list, ever**, including the two flat Google Fonts claims.
8. **Kill switch.** If the first five T2 pages have not produced a qualified inquiry or a measurable ranking within 120 days of the fifth publishing, stop the cluster at that point and move the remaining slots into T3 and T4. Do not write nine more on faith.

### What the downside actually is

Worth stating plainly so the guardrails are not treated as optional. The realistic bad outcome is not that fourteen compatibility pages fail to rank. It is a site-wide classification that suppresses the ten service pages and the two money pages for two to three quarters, with recovery running roughly five months after remediation on the observed third-party evidence. Those pages are the business. The cluster is speculative. The guardrails exist so the second never threatens the first.

---

---

### The per-piece acceptance list

Check every box before marking any piece done. A reviewer should be able to verify all of these without a judgment call.

**Every piece, all tiers**
- [ ] Title 52 characters or fewer, meta description 152 or fewer, excerpt 25 words or fewer, recounted after the final edit
- [ ] Zero em dashes
- [ ] Zero HTML in body copy
- [ ] Every statistic in a blockquote, with its source and date
- [ ] Chinese terms formatted as English term (Chinese characters), no pinyin
- [ ] No summary or conclusion section
- [ ] No deliberate errors or planted typos
- [ ] Nothing from the Do Not Assert list in section 4 appears
- [ ] Frontmatter complete: title, slug, description, excerpt, template
- [ ] Filename matches slug
- [ ] Named human byline with a China-based author bio

**Articles, T1 T2 T5**
- [ ] One link up to a money page, two sideways to siblings, all inside existing sentences
- [ ] Anchor text checked against the site-wide distribution rule: no anchor string repeats more than three times, no more than four exact-match anchors per target
- [ ] The answer appears in the first paragraph
- [ ] Fact IDs cited in the brief are the facts actually used

**T1 and the money page only**
- [ ] All four locales present, translated rather than machine-swapped
- [ ] Hreflang set complete and reciprocal, x-default on the English URL
- [ ] Published in a single commit across the four locales

**T2 only**
- [ ] English only. No de, es or fr version exists
- [ ] At least one original measurement with a named vantage point and a date
- [ ] No shared structure above the H2 level with any other T2 page, verified by diffing headings
- [ ] No verdict published for any host in F42 that the harness has not probed

**T3 only**
- [ ] All six template sections present, in order
- [ ] At least one before figure and one after figure, each with a named Chinese network or cloud region and a date
- [ ] A named friction item: something that broke, ran long or remains open
- [ ] Client named, or anonymized with the reason stated

**T4 only**
- [ ] Method stated before any finding
- [ ] Every vantage point named, every date given
- [ ] Raw host list published or linked
- [ ] Untested hosts listed as untested rather than dropped
- [ ] Dated slug, no overwriting of a prior edition

**T6 only**
- [ ] Zero new URLs created, verified against the sitemap entry count before and after
- [ ] No canonical or hreflang value changed unless the work order says so
- [ ] The work order's own acceptance criteria all pass

---

## 14. Open items

1. **The title suffix.** Still unresolved, still breaching the ceiling on every guide article. Week 1, slot 2.
2. **The measurement harness.** Nothing in T2 or T4 can ship without it. Decide between Tencent Cloud CAT and boce.com and stand up the mainland instance before week 2.
3. **The pricing decision** gates B2 in week 19.
4. **The 308 versus 301 question** on the Move 1 redirects.
5. **Qwen on the GEO page.** One line, still open.
6. **Probe the eleven untested dependencies in F42** before they appear in any published table.
7. **Buy one month of a rank tool.** Every demand judgment in this plan is inferred from SERP composition rather than volume data. That inference is directionally reliable and numerically unreliable, and it is cheap to fix before committing six months of production.
