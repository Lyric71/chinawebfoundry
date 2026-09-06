---
brief_id: T7-02
tier: T7
content_type: translation
publish_date: 2026-12-11
week: 14
slot: 3
slot_job: upgrade or report
slug: translation-batch-02
title: "Translation batch 2"
locales_at_publish: fr es de
gate: "evidence, day 90"
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
| output | `../output/translation-batch-02.md` |

**Tier rule.** T7 translation slot. A budget, not a schedule. On this date, review the queue: pages published 90 or more days ago that have earned it (organic entries, an attributed inquiry, an observed AI citation). Pick one or leave the slot unspent and say so in the log. Translate fr, es and de together or not at all. Nothing in T2 is ever translated. Run `/deep-translate`, all three passes, per locale, FR then ES then DE, interactively in the main conversation, never a subagent, one pass at a time, none skipped or merged.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T7.

---

## Brief, verbatim from PLAN.md

#### T7-02. Translation batch 2

No page is named in advance. On this date, review the translation queue and spend the slot on evidence, or leave it unspent and log why.

## 11. T7: translation, earned

Fourteen slots across 26 weeks. Not a schedule, a budget.

**Rules.** Nothing is translated before day 90. Nothing in T2 is translated at all. A page qualifies on evidence: organic entries, an inquiry attributed to it, or an AI citation observed. Translate all three locales at once or none, so the hreflang set stays complete. Review the queue monthly and spend the slots on what earned them.

Expect roughly half the slots to go to T1 and the money page, which ship four-locale on day one anyway and therefore do not consume budget. The real allocation is T3 and T5.
