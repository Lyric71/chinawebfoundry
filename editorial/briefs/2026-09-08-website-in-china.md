---
brief_id: M1
tier: T1
content_type: money-page
publish_date: 2026-09-08
week: 01
slot: 1
slot_job: substantial
slug: website-in-china
title: "Websites in China for Global Brands"
suggested_category: Technology
locales_at_publish: en fr es de
facts: [F1, F19, F25, F26, F31, F32]
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
| output | `../output/website-in-china.md` |

**Tier rule.** The money page. Not a guide article. Copy ships into `src/pages/website-in-china.astro` and the three locale pages already reserved by Move 1 (`/fr/site-web-en-chine/`, `/es/sitio-web-en-china/`, `/de/website-in-china/`). Remove `noindex` and the sitemap exclusion in the same commit. FAQ schema required. No pricing. The three locale pages go through `/deep-translate`, main conversation, no subagent, three passes each, FR then ES then DE.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T1.

---

## Brief, verbatim from PLAN.md

#### M1. Websites in China

| | |
|---|---|
| **Slugs** | en `website-in-china` · de `website-in-china` · es `sitio-web-en-china` · fr `site-web-en-chine` |
| **Route status** | Reserved by Move 1. Live in four locales, `noindex, follow`, excluded from the sitemap. **Remove both in the same commit that ships this copy.** |
| **Target** | website china |
| **Secondary** | launch a website in china, build a website for china |
| **Intent** | Commercial. |
| **Incumbent** | Fragmented, no owner. The softest high-value target found in the whole competitive study. |
| **Length** | 1,800 to 2,200 words. This is a money page, not a guide article, so the 700-word service page target does not apply. |
| **Priority** | Ships first, ahead of every article in this plan. |

**Angle.** This is the page for the buyer who has not yet decided on a technology. It sits above `/wordpress-in-china/` and `/astro/` rather than beside them, and it routes to both. It is also the page that carries the positioning shift from "WordPress in China" to "Websites in China."

**Structure.**
1. Hero. What the page is for, in two sentences, with the Shanghai team and the ICP position stated.
2. The four things that break a foreign website in China, and what each costs. Reference F1, F25, F31, F19.
3. What has to be true for a site to work here: dependencies removed, served from inside or from Hong Kong, filing done, built so Baidu can crawl it.
4. The technology choice, framed as a choice. WordPress and Astro as two answers to different questions, routing to both pages. **This section is the positioning shift and it should read as a considered opinion, not a menu.**
5. The ten services, briefly, as the delivery model.
6. Proof. F32 in blockquotes, plus two named case studies.
7. Process. Four phases with weeks attached, referencing F26 and F25.
8. Frequently asked, with FAQ schema.

**Do not.** Include pricing. Turn section 4 into a feature comparison table; it is an argument, not a spec sheet.

**Metadata.**
```yaml
title: "Websites in China for Global Brands"
description: "We plan, build, file, host and run websites inside mainland China for international companies. Shanghai team, ICP licensed, WordPress or Astro."
excerpt: "The web agency in China for international brands, from strategy and ICP filing through Baidu and AI search visibility."
```

**CTA.** Book a 30-minute scoping call with our Shanghai team / Run a free China readiness scan
