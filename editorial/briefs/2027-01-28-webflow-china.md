---
brief_id: T2-11
tier: T2
content_type: guide-en
publish_date: 2027-01-28
week: 21
slot: 2
slot_job: fast
slug: webflow-china
title: "Does Webflow Work in China? We Measured"
suggested_category: Technology
locales_at_publish: en
gate: "harness"
facts: [F9, F25, F26, F30, F32, F38, F45, F46]
status: not_started
---

## How to run this brief

Read `../CLAUDE.md` and `../SPEC.md` first. They override any conflicting
rule inside the skills. Then read every fact ID listed above in
`../sources/fact-bank.md`, and the Do Not Assert list at the end of it.

| Input | Value |
|---|---|
| website | https://www.chinawebfoundry.com |
| audience | people out of China |
| brief | this file |
| output | `../output/webflow-china.md` |

**Tier rule.** T2 compatibility page. ENGLISH ONLY, never translated, hreflang x-default on the English URL. GATED ON THE HARNESS: it does not publish without an original measurement carrying a named vantage point and a date. No shared structure above the H2 level with any other T2 page. Named human byline. Answer in the first paragraph. 700 to 1,000 words.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T2.

---

## Brief, verbatim from PLAN.md

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

## T2 rules (from PLAN.md section 6)

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

### Structure rule

**No shared template above the H2 level.** Chinafy's 104 directory pages share an identical H1 and 65 boilerplate sentences, and that is the failure mode. Each page's structure follows that tool's actual China behavior, which genuinely differs: Google Fonts is a resolver problem, Wistia is a latency problem, Mapbox is a licensing problem, HubSpot is a partial-failure problem.

Every page: a named human byline with a China-based author bio, a test date, a named network or region, and the answer in the **first paragraph**, because roughly 44% of AI citations come from the first 30% of a page (F46).

Length 700 to 1,000 words. These are answers, not essays.
