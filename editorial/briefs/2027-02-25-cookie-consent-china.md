---
brief_id: T2-14
tier: T2
content_type: guide-en
publish_date: 2027-02-25
week: 25
slot: 2
slot_job: fast
slug: cookie-consent-china
title: "Cookie Consent Banners in China"
suggested_category: Legal
locales_at_publish: en
gate: "harness"
facts: [F3, F33, F34, F41, F42, F45, F46]
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
| output | `../output/cookie-consent-china.md` |

**Tier rule.** T2 compatibility page. ENGLISH ONLY, never translated, hreflang x-default on the English URL. GATED ON THE HARNESS: it does not publish without an original measurement carrying a named vantage point and a date. No shared structure above the H2 level with any other T2 page. Named human byline. Answer in the first paragraph. 700 to 1,000 words.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T2.

---

## Brief, verbatim from PLAN.md

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
