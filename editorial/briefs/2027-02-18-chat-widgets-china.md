---
brief_id: T2-13
tier: T2
content_type: guide-en
publish_date: 2027-02-18
week: 24
slot: 2
slot_job: fast
slug: chat-widgets-china
title: "Chat Widgets in China: Intercom to Crisp"
suggested_category: Technology
locales_at_publish: en
gate: "harness"
facts: [F33, F35, F41, F42, F45]
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
| output | `../output/chat-widgets-china.md` |

**Tier rule.** T2 compatibility page. ENGLISH ONLY, never translated, hreflang x-default on the English URL. GATED ON THE HARNESS: it does not publish without an original measurement carrying a named vantage point and a date. No shared structure above the H2 level with any other T2 page. Named human byline. Answer in the first paragraph. 700 to 1,000 words.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T2.

---

## Brief, verbatim from PLAN.md

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
