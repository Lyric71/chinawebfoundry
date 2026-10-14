---
brief_id: T2-08
tier: T2
content_type: guide
publish_date: 2026-11-19
week: 11
slot: 2
slot_job: fast
slug: form-embeds-china
title: "Embedded Forms That Fail Silently in China"
suggested_category: Technology
locales_at_publish: en fr es de
facts: [F35, F41]
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
| output | `../output/form-embeds-china.md` |

**Tier rule.** T2 compatibility page. Ships in all four locales (en, fr, es, de) in one commit, like T1 (Cyril, 14 October 2026; T2 was English only until then). Register the localized slugs from the brief in `src/i18n/routes.ts` (`guideSlugs`). Run `/deep-translate` on each locale, all three passes, in this order: FR, ES, DE, interactively in the main conversation, never through a subagent, one pass at a time, none skipped. GFW RULE (editorial/CLAUDE.md): every statement of what the Great Firewall does to a host comes from dated GreatFire verdicts and the published 21YunBox probes, labelled as theirs, with a named vantage point and a date; a host with no dated test is listed as untested. No harness gate, no mainland probe (Cyril, 2 October 2026). No shared structure above the H2 level with any other T2 page. Named human byline. Answer in the first paragraph. 700 to 1,000 words.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T2.

---

## Brief, verbatim from PLAN.md

#### T2-08 `form-embeds-china`

**Target:** typeform china · **Facts:** F35, F41

**Slugs** en `form-embeds-china` · de `eingebettete-formulare-china` · es `formularios-incrustados-china` · fr `formulaires-integres-chine`.

Bundle Typeform, Jotform, Google Forms and Mailchimp embeds. Lead with what is on record: Mailchimp's image host `cdn-images.mailchimp.com` blocked on GreatFire's last test (10 September 2026), Typeform's form host reachable (30 September 2026) while its embed script host has never been tested. The hook is the architecture fix T2-02 sets out: own the form, store each submission on your server first, forward it later. (Corrected 14 October 2026: the old hook, "907ms to first byte, then nothing", was a 21YunBox figure withdrawn on 7 October 2026.)
```yaml
title: "Embedded Forms That Fail Silently in China"
description: "Mailchimp's image host is blocked and Typeform's embed script has never been tested. What each form embed risks in China, and the fix."
excerpt: "The embedded form failure nobody catches, because it produces no error and looks fine from outside China."
```

## T2 rules (from PLAN.md section 6)

### The selection rule that produced this list

The test is not the tool, it is where the tool executes. **Does this software run inside the visitor's browser when they load a client's website?**

Yes means the broken dependency is the site owner's problem, invisible from outside China, and fixable only by someone with China infrastructure. That is a CWF service line. No means the tool runs on the searcher's own laptop, their fix is a VPN, and they will never buy a website.

The SERP confirms it every time: **if VPN affiliate sites or travel blogs rank, the topic is disqualified.** The control query "does Slack work in China" returns switchvpn.net, vpnbrains.com and travelchinanow.com. That is what a worthless SERP looks like.

**Do not write these, whatever their volume:** Slack, Teams, Zoom, Notion, Asana, Trello, Miro, Gmail, Drive, Dropbox, WhatsApp, Instagram as an app, Facebook, Netflix, Spotify as a service, password managers, and every "is X app banned in China" variant. These are higher volume than the list below, which is exactly the trap. They inflate a traffic chart and produce no pipeline.

**Also excluded, for a different reason:** Stripe, because it is not a compatibility question (see F40, and write the payments article in T5 instead), Calendly, because the SERP is traveler and remote-worker intent, and the developer observability cluster (Datadog, New Relic, LaunchDarkly), because the buyer is an SRE and not a marketing lead.

### Structure rule

**No shared template above the H2 level.** Chinafy's 104 directory pages share an identical H1 and 65 boilerplate sentences, and that is the failure mode. Each page's structure follows that tool's actual China behavior, which genuinely differs: Google Fonts is a vantage-point problem (the mechanism behind the home-line failure is unpublished, so no page names one), Wistia is a latency problem, Mapbox is a licensing problem, HubSpot is a partial-failure problem.

Every page: a named human byline with a China-based author bio, a test date, a named network or region, and the answer in the **first paragraph**, because roughly 44% of AI citations come from the first 30% of a page (F46).

Length 700 to 1,000 words. These are answers, not essays.

### Evidence rule (the GFW rule, 2 October 2026)

Every T2 page states what the Great Firewall does to its subject from dated third-party evidence: GreatFire reachability verdicts with their last-tested date, and 21YunBox's published probes (an Alibaba Cloud cn-zhangjiakou instance and a Beijing China Mobile home line) with the vantage point and the date, both labelled as theirs and never as ours. Six verdicts (reachable, slow, answers then stalls, intermittent, blocked, splits by vantage point), datacenter and home line in separate columns, untested hosts listed as untested with no verdict, any verdict older than 90 days printed with its date. There is no harness gate and no mainland probe (Cyril, 2 October 2026). A T2 page that can carry no dated third-party figure on its subject says so and argues from documentation; it is never held for a measurement of our own.
