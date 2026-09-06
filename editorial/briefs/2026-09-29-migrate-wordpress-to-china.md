---
brief_id: A5
tier: T1
content_type: guide
publish_date: 2026-09-29
week: 04
slot: 1
slot_job: substantial
slug: migrate-wordpress-to-china
title: "Migrating a WordPress Site Into China"
suggested_category: Hosting
locales_at_publish: en fr es de
facts: [F8, F25, F26, F27, F28, F30, F32]
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
| output | `../output/migrate-wordpress-to-china.md` |

**Tier rule.** T1 flagship. Ships in all four locales (en, fr, es, de) in one commit. Register the localized slugs from the brief in `src/i18n/routes.ts` (`guideSlugs`). Run `/deep-translate` on each locale, all three passes, in this order: FR, ES, DE, interactively in the main conversation, never through a subagent, one pass at a time, none skipped.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T1.

---

## Brief, verbatim from PLAN.md

#### A5. Migrating a WordPress site into China

| | |
|---|---|
| **Slugs** | en `migrate-wordpress-to-china` · de `wordpress-nach-china-migrieren` · es `migrar-wordpress-a-china` · fr `migrer-wordpress-vers-chine` |
| **Target** | migrate wordpress to china |
| **Secondary** | move website to china server, china website migration |
| **Intent** | Commercial investigation. Someone scoping a project. |
| **Incumbent** | Fragmented, no owner. |
| **Length** | 1,500 words |

**Angle.** The filing is on the critical path and everything else waits behind it. Most migration guides sequence this wrong, treating the ICP as paperwork that happens in parallel. It is not. Ports stay closed until it clears, which means no staging on the production host and no quiet beta.

**Facts.** F25 (structural spine), F26, F27, F28, F30, F8, F32.

**Outline.**
1. The sequence, and why the filing comes first (F25, F26)
2. Week zero: what has to exist before anything starts, the mainland entity
3. The Alibaba two-platform trap (F27)
4. What gets rebuilt versus what gets copied
5. Dependency remediation, referencing the plugin audit
6. Cutover, DNS and the day the ports open
7. A realistic fourteen-week timeline, as a table
8. Frequently asked

**Required table.** Phase, duration, blocking dependency, who owns it. This is the asset the article gets linked for.

**Proof.** Use F32 in a blockquote. This article carries CWF's own before-and-after.

**Links.** Up to `/wordpress-in-china/` and to the Migration service page. Sideways to `wordpress-hosting-china` and `wordpress-icp-filing`.

**Metadata.**
```yaml
title: "Migrating a WordPress Site Into China"
description: "The ICP filing sits on the critical path and everything waits behind it. A realistic fourteen-week sequence, with the blockers named."
excerpt: "What actually gates a China migration, in what order, and why the ports stay closed until the filing clears."
```

**CTA.** Book a 30-minute scoping call with our Shanghai team
