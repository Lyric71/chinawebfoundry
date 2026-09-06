---
brief_id: A11
tier: T1
content_type: guide
publish_date: 2026-11-10
week: 10
slot: 1
slot_job: substantial
slug: wordpress-vs-astro-china
title: "WordPress or Astro for a China Site"
suggested_category: Technology
locales_at_publish: en fr es de
facts: [F1, F4, F8, F19, F29, F31]
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
| output | `../output/wordpress-vs-astro-china.md` |

**Tier rule.** T1 flagship. Ships in all four locales (en, fr, es, de) in one commit. Register the localized slugs from the brief in `src/i18n/routes.ts` (`guideSlugs`). Run `/deep-translate` on each locale, all three passes, in this order: FR, ES, DE, interactively in the main conversation, never through a subagent, one pass at a time, none skipped.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T1.

---

## Brief, verbatim from PLAN.md

#### A11. WordPress or Astro for a China site

| | |
|---|---|
| **Slugs** | en `wordpress-vs-astro-china` · de `wordpress-oder-astro-china` · es `wordpress-o-astro-china` · fr `wordpress-ou-astro-chine` |
| **Target** | wordpress alternative china |
| **Secondary** | static site china, astro china, headless wordpress china |
| **Intent** | Commercial investigation, technical buyer. |
| **Incumbent** | Nobody, and nobody else can write it, because nobody else offers both. |
| **Length** | 1,500 words |
| **Strategic role** | The clearest technical differentiator on the site. Every competitor is WordPress-only, legacy PHP CMS, proprietary SaaS, or refuses to name a stack. |

**Angle.** Argue from request topology, not from speed. This is the discipline that makes the article credible: there is no published benchmark comparing static against WordPress from China, so do not fabricate the comparison. Argue the mechanism instead, which is stronger anyway.

**The argument, in the order it should appear.**
1. Each additional third-party origin costs a separate DNS lookup, TCP handshake and TLS handshake across the border, and the border inflates round trips more than bytes. Cutting origins beats cutting kilobytes.
2. A blocked host does not fail fast. It hangs until the browser gives up (F1). One render-blocking reference is catastrophic; the same file self-hosted is free.
3. A static build resolves the dependency graph at build time, so "which hosts does this page touch" has a fixed, auditable answer rather than a per-plugin one.
4. A static site has no admin surface making outbound calls from a mainland server (F8, F4).
5. Against that: no editor a marketing team recognizes, no plugin ecosystem, a build step between an edit and a live page, and a developer in the loop for changes WordPress would let a marketer make.

**Facts.** F1, F8, F4, F19, F29, F31. Note F29 carefully.

**The Vercel paragraph is mandatory and it must be honest.** Vercel's own knowledge base says it cannot guarantee availability in mainland China and that `.vercel.app` may be blocked (F29). CWF builds on Astro and Vercel. The article must say plainly that a static build deployed to an overseas platform is a different thing from a static build served from a filed mainland origin, and that for a China audience the second is what matters. Writing around this would be dishonest and a reader will find it in a minute.

**Do not.** Claim a measured static-versus-WordPress China benchmark. None exists.

**Required section.** "When WordPress is the right answer." It should be genuinely persuasive, not a strawman. If the marketing team publishes weekly and there is no developer on retainer, WordPress wins, and the article should say so.

**Links.** Up to `/wordpress-in-china/` and to `/astro/`. Sideways to `wordpress-speed-china`.

**Metadata.**
```yaml
title: "WordPress or Astro for a China Site"
description: "Not a speed argument. A request topology argument, plus an honest account of what a static build costs a marketing team that publishes weekly."
excerpt: "How to choose between WordPress and a static build for China, argued from mechanism rather than benchmarks."
```

**CTA.** Book a 30-minute scoping call with our Shanghai team
