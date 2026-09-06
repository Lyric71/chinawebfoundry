---
brief_id: T5-01
tier: T5
content_type: guide-en-first
publish_date: 2026-11-17
week: 11
slot: 1
slot_job: substantial
slug: china-payments-website
title: "Accepting Payments on a China Website"
suggested_category: Technology
locales_at_publish: en
facts: [F26, F27, F38, F40, F41, F42]
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
| output | `../output/china-payments-website.md` |

**Tier rule.** T5 editorial guide. English first. Translation only after day 90 and only on evidence (organic entries, an attributed inquiry, an observed AI citation), through a T7 slot.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T5.

---

## Brief, verbatim from PLAN.md

#### T5-01. Accepting Payments on a China Website

| | |
|---|---|
| **Slugs** | en `china-payments-website` · de `zahlungen-website-china` · es `pagos-web-china` · fr `paiements-site-chine` |
| **Target** | accept payments china website |
| **Secondary** | alipay wordpress, wechat pay website, stripe china alternative |
| **Intent** | Commercial investigation. Somebody has a checkout that works everywhere except the market they just entered. |
| **Incumbent** | Payment gateway marketing pages and forum threads. Nobody with a build perspective. |
| **Length** | 1,500 words |

**Angle.** People search for Stripe in China because Stripe is the word they have. The answer is not a compatibility fix, it is that mainland China is not a supported acquiring country, so no amount of script tuning produces a working checkout. The article that helps them explains the three rails that do work, Alipay (支付宝), WeChat Pay (微信支付) and UnionPay (银联), and says plainly that the reason no official plugin exists is licensing and merchant onboarding, not a missing integration.

**Facts.** F40 (lead), F38, F26, F27, F41, F42.

**Outline.**
1. What the Stripe question is actually asking
2. Licensing before technology: why the acquiring country matters (F40)
3. The three rails, and who can hold a merchant account on each
4. What the payment providers ask for before any code is written (F26)
5. WooCommerce and the aggregator route
6. Shopify and the hosted platform constraint (F38)
7. Cross-border acquiring versus a domestic entity, and which one you are really choosing
8. Frequently asked

**Do not.** Do not publish a reachability verdict on `js.stripe.com`. It sits in the untested set in F42, and the article does not need it. The argument is licensing, and a probe result would only invite a reader to conclude the block is the problem. PayPal is the one adjacent datapoint worth citing, with the detail from F40 that the disrupted URLs are the checkout redirect paths.

**Links.** Up to `/website-in-china/`. Sideways to `woocommerce-china-store-guide` and `icp-licence-filing-foreign-companies`.

**Metadata.**
```yaml
title: "Accepting Payments on a China Website"  # 37 / 52
description: "Stripe does not acquire in mainland China. Here is how Alipay, WeChat Pay and UnionPay get onto a WordPress or Shopify checkout."  # 128 / 152
excerpt: "Why no official plugin exists, what the three domestic rails require, and the merchant account questions that come before any code."  # 21 / 25
```

**CTA.** Ask us to scope your China checkout
