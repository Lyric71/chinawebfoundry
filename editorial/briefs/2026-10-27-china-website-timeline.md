---
brief_id: B3
tier: T1
content_type: guide
publish_date: 2026-10-27
week: 08
slot: 1
slot_job: substantial
slug: china-website-timeline
title: "How Long a China Website Takes"
suggested_category: Technology
locales_at_publish: en fr es de
facts: [F24, F25, F26, F27, F32]
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
| output | `../output/china-website-timeline.md` |

**Tier rule.** T1 flagship. Ships in all four locales (en, fr, es, de) in one commit. Register the localized slugs from the brief in `src/i18n/routes.ts` (`guideSlugs`). Run `/deep-translate` on each locale, all three passes, in this order: FR, ES, DE, interactively in the main conversation, never through a subagent, one pass at a time, none skipped.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T1.

---

## Brief, verbatim from PLAN.md

#### B3. How long a China website takes

| | |
|---|---|
| **Slugs** | en `china-website-timeline` · de `china-website-zeitplan` · es `plazos-sitio-web-china` · fr `delais-site-web-chine` |
| **Target** | how long does it take to build a website in china |
| **Secondary** | china website launch timeline, icp filing how long |
| **Intent** | Commercial, planning. |
| **Incumbent** | Nobody, and this question is asked constantly. |
| **Length** | 1,200 words |

**Angle.** The build is not the long pole. The entity and the filing are, and they are sequential rather than parallel. A team that starts the filing when the design is approved has already lost a month.

**Facts.** F26, F25, F27, F24, F32.

**Outline.**
1. The three clocks: entity, filing, build, and which ones overlap
2. Entity, if you do not have one
3. Filing, three to six weeks, and what stalls it (F26)
4. Build, six to twelve weeks, running in parallel
5. Indexing, two to four weeks after launch (F24)
6. A Gantt-style table of a realistic first launch
7. What genuinely compresses the timeline, and what does not
8. Frequently asked

**Required table.** This is the linkable asset. Phase, weeks, runs in parallel with, blocked by.

**Links.** Up to `/web-agency-china/`. Sideways to `migrate-wordpress-to-china` and `china-website-cost`.

**Metadata.**
```yaml
title: "How Long a China Website Takes"
description: "The build is not the long pole. The entity and the filing are, and they run in sequence. A realistic timeline with the blockers named."
excerpt: "The three clocks on a China web project, which ones overlap, and where teams routinely lose a month."
```

**CTA.** Book a 30-minute scoping call with our Shanghai team
