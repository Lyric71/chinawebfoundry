---
brief_id: T2-12
tier: T2
content_type: guide-en
publish_date: 2027-02-11
week: 23
slot: 2
slot_job: fast
slug: squarespace-wix-china
title: "Squarespace and Wix in China, Measured"
suggested_category: Technology
locales_at_publish: en
gate: "harness"
facts: [F9, F25, F26, F32, F33, F38, F45]
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
| output | `../output/squarespace-wix-china.md` |

**Tier rule.** T2 compatibility page. ENGLISH ONLY, never translated, hreflang x-default on the English URL. GATED ON THE HARNESS: it does not publish without an original measurement carrying a named vantage point and a date. No shared structure above the H2 level with any other T2 page. Named human byline. Answer in the first paragraph. 700 to 1,000 words.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T2.

---

## Brief, verbatim from PLAN.md

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
