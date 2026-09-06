---
brief_id: A10
tier: T1
content_type: guide
publish_date: 2026-12-01
week: 13
slot: 1
slot_job: substantial
slug: wordpress-baidu-seo
title: "Baidu SEO for a WordPress Site"
suggested_category: Search
locales_at_publish: en fr es de
facts: [F15, F16, F19, F20, F21, F22, F23, F24]
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
| output | `../output/wordpress-baidu-seo.md` |

**Tier rule.** T1 flagship. Ships in all four locales (en, fr, es, de) in one commit. Register the localized slugs from the brief in `src/i18n/routes.ts` (`guideSlugs`). Run `/deep-translate` on each locale, all three passes, in this order: FR, ES, DE, interactively in the main conversation, never through a subagent, one pass at a time, none skipped.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T1.

---

## Brief, verbatim from PLAN.md

#### A10. Baidu SEO for a WordPress site

| | |
|---|---|
| **Slugs** | en `wordpress-baidu-seo` · de `wordpress-baidu-seo` · es `wordpress-seo-baidu` · fr `wordpress-seo-baidu` |
| **Target** | wordpress baidu seo |
| **Secondary** | baidu seo plugin, submit wordpress to baidu |
| **Intent** | Informational, practitioner. |
| **Incumbent** | Nobody. |
| **Length** | 1,400 words |
| **Strategic role** | This is the bridge article. It is the one piece that makes the WordPress cluster and the thirty-article Baidu library behave as one site rather than two. |

**Angle.** Your SEO plugin does one thing for Baidu and you probably think it does more. Here is the gap, and here is what fills it.

**Facts.** F21 (lead), F22, F23, F24, F20, F19, F15, F16.

**Outline.**
1. What Yoast and Rank Math actually do for Baidu, which is one meta tag (F21)
2. The submission gap, and the plugins that close it (F22)
3. Analytics: no maintained plugin, and what people do instead (F23)
4. Indexing expectations after the 2024 change (F24)
5. Making sure the crawler can reach you at all (F20, F15, F16)
6. What does not transfer from Google SEO
7. Frequently asked

**Link density.** This article should carry more internal links than any other in the cluster, four to six, pointing into the existing Baidu library: `baidu-search-resource-platform`, `submitting-urls-to-baidu`, `baidu-fast-inclusion-gone`, `baiduspider-firewall`, `baidu-structured-data`. Vary the anchors.

**Do not.** Say Baidu reads schema.org markup. Say Baidu cannot read JavaScript.

**Links.** Up to `/wordpress-in-china/` and the Baidu SEO service page.

**Metadata.**
```yaml
title: "Baidu SEO for a WordPress Site"
description: "Yoast and Rank Math give Baidu exactly one meta tag. Here is everything else that has to be done by hand, and the plugins that help."
excerpt: "The gap between what your SEO plugin does for Google and what Baidu actually needs."
```

**CTA.** Talk to our team about Baidu SEO
