---
brief_id: B5
tier: T1
content_type: guide
publish_date: 2026-10-06
week: 05
slot: 1
slot_job: substantial
slug: china-website-brief-checklist
title: "The China Website Brief: A Checklist"
suggested_category: Technology
locales_at_publish: en fr es de
facts: [F1, F19, F21, F25, F26, F27, F28]
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
| output | `../output/china-website-brief-checklist.md` |

**Tier rule.** T1 flagship. Ships in all four locales (en, fr, es, de) in one commit. Register the localized slugs from the brief in `src/i18n/routes.ts` (`guideSlugs`). Run `/deep-translate` on each locale, all three passes, in this order: FR, ES, DE, interactively in the main conversation, never through a subagent, one pass at a time, none skipped.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T1.

---

## Brief, verbatim from PLAN.md

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
