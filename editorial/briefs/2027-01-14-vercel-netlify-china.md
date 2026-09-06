---
brief_id: T2-10
tier: T2
content_type: guide-en
publish_date: 2027-01-14
week: 19
slot: 2
slot_job: fast
slug: vercel-netlify-china
title: "Vercel and Netlify From Mainland China"
suggested_category: Hosting
locales_at_publish: en
gate: "harness"
facts: [F29, F39, F42]
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
| output | `../output/vercel-netlify-china.md` |

**Tier rule.** T2 compatibility page. ENGLISH ONLY, never translated, hreflang x-default on the English URL. GATED ON THE HARNESS: it does not publish without an original measurement carrying a named vantage point and a date. No shared structure above the H2 level with any other T2 page. Named human byline. Answer in the first paragraph. 700 to 1,000 words.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T2.

---

## Brief, verbatim from PLAN.md

#### T2-10 `vercel-netlify-china`

**Target:** vercel china · **Facts:** F29, F39, F42
Directly relevant to CWF's own Astro positioning, and prospects on modern stacks hit this. Be plain that CWF builds on Vercel and that a static build on an overseas platform is a different thing from a static build on a filed mainland origin.
```yaml
title: "Vercel and Netlify From Mainland China"
description: "Vercel's own docs say it cannot guarantee mainland availability. What that means for a static site, and where a China build has to live."
excerpt: "What happens to a Vercel or Netlify deployment behind the Great Firewall, and the mainland alternative."
```

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
