---
brief_id: B4
tier: T1
content_type: guide
publish_date: 2026-11-24
week: 12
slot: 1
slot_job: substantial
slug: global-agency-china-website
title: "Can Your Global Agency Build Your China Site?"
suggested_category: Technology
locales_at_publish: en fr es de
facts: [F1, F20, F21, F25, F26, F27, F29]
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
| output | `../output/global-agency-china-website.md` |

**Tier rule.** T1 flagship. Ships in all four locales (en, fr, es, de) in one commit. Register the localized slugs from the brief in `src/i18n/routes.ts` (`guideSlugs`). Run `/deep-translate` on each locale, all three passes, in this order: FR, ES, DE, interactively in the main conversation, never through a subagent, one pass at a time, none skipped.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T1.

---

## Brief, verbatim from PLAN.md

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
