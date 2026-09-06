---
brief_id: T5-08
tier: T5
content_type: guide-en-first
publish_date: 2027-02-16
week: 24
slot: 1
slot_job: substantial
slug: foreign-brand-china-web-checklist
title: "The China Website Pre-Launch Checklist"
suggested_category: Technology
locales_at_publish: en
facts: [F1, F2, F3, F4, F5, F20, F22, F25, F26, F27, F29, F30, F33, F37, F40, F41, F45]
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
| output | `../output/foreign-brand-china-web-checklist.md` |

**Tier rule.** T5 editorial guide. English first. Translation only after day 90 and only on evidence (organic entries, an attributed inquiry, an observed AI citation), through a T7 slot.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T5.

---

## Brief, verbatim from PLAN.md

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
