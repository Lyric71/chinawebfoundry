---
brief_id: A6
tier: T1
content_type: guide
publish_date: 2026-10-20
week: 07
slot: 1
slot_job: substantial
slug: wordpress-icp-filing
title: "ICP Filing for a WordPress Site"
suggested_category: Legal
locales_at_publish: en fr es de
facts: [F9, F23, F25, F26, F27]
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
| output | `../output/wordpress-icp-filing.md` |

**Tier rule.** T1 flagship. Ships in all four locales (en, fr, es, de) in one commit. Register the localized slugs from the brief in `src/i18n/routes.ts` (`guideSlugs`). Run `/deep-translate` on each locale, all three passes, in this order: FR, ES, DE, interactively in the main conversation, never through a subagent, one pass at a time, none skipped.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T1.

---

## Brief, verbatim from PLAN.md

#### A6. ICP filing for a WordPress site

| | |
|---|---|
| **Slugs** | en `wordpress-icp-filing` · de `wordpress-icp-antrag` · es `wordpress-licencia-icp` · fr `wordpress-licence-icp` |
| **Target** | wordpress icp license |
| **Secondary** | icp filing wordpress, do i need an icp for my website |
| **Intent** | Compliance, highest intent in the cluster. |
| **Incumbent** | AppInChina owns the generic ICP cluster. This one is narrower and winnable. |
| **Length** | 1,400 words |

**Angle.** Do not rewrite the generic ICP explainer; the site already has one at `icp-licence-filing-foreign-companies` and AppInChina owns the head term. Write the WordPress-specific half nobody covers: what the filing asks of the site itself, the holding-page requirement, what has to come off the site before review, and the sequencing against a WordPress build.

**Facts.** F26 (filing versus licence), F25, F27, F9, F23.

**Outline.**
1. Filing or licence, decided by whether the site takes money (F26)
2. What the filing needs from the site, not from the company
3. The holding page, and what cannot be live during review
4. Why WordPress.com cannot be filed (F9)
5. The Chinese-language console, and who on your side owns it (F27)
6. After approval: the footer number, the PSB filing, the annual obligations
7. Frequently asked

**Do not.** Give legal advice. State timelines as planning numbers and attribute them. Recommend consulting a licensed adviser for the commercial licence path.

**Links.** Up to `/wordpress-in-china/` and the China Hosting service page. Sideways to the existing `icp-licence-filing-foreign-companies` and to `migrate-wordpress-to-china`.

**Metadata.**
```yaml
title: "ICP Filing for a WordPress Site"
description: "What the filing asks of the site rather than the company: the holding page, what must come down for review, and where it sits in a build."
excerpt: "The WordPress-specific half of the ICP filing, which the general guides skip entirely."
```

**CTA.** Talk to our team about ICP filing and China hosting
