---
brief_id: T3-03
tier: T3
content_type: casestudy
publish_date: 2026-10-29
week: 08
slot: 2
slot_job: fast
slug: imhof-woocommerce-china
title: "WooCommerce Checkout in China, Rebuilt"
locales_at_publish: en
gate: "client sign-off"
facts: [F2, F40]
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
| output | `../output/imhof-woocommerce-china.md` |

**Tier rule.** T3 case study. Publishes into `src/content/casestudies/` under the existing `/work/{client}-{descriptor}/` convention. English at publish, translation earned per the T7 rules. All six template sections, in order. Before and after figures each carry a named Chinese network or cloud region and a date. Client named or the reason for anonymity stated.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T3.

---

## Brief, verbatim from PLAN.md

#### T3-03. A WooCommerce checkout that mainland buyers could actually finish

| | |
|---|---|
| **Slug** | `work/imhof-woocommerce-china` |
| **Type** | Upgrade of an existing page |
| **Sector** | Consumer goods and design products, direct to consumer |
| **Length** | 1,000 words |
| **Locales** | English at publish. German earned if the page converts. |

**The story in one line.** A WooCommerce store took orders from everywhere except China, and the fix was not a plugin, it was replacing the payment layer with Alipay (支付宝), WeChat Pay (微信支付) and UnionPay (银联) and rebuilding the checkout around them.

**Required measurements.** Before: checkout completion rate for mainland sessions over a stated window, plus a request-level trace of the old checkout page from a Beijing consumer line on a named date showing which third-party hosts failed to complete. The point to make measurable is that the old checkout was not slow, it was hung. After: checkout completion rate for mainland sessions over a comparable window, plus the same request-level trace from the same Beijing line showing the request count and the remaining foreign hosts. Name the Alibaba Cloud region the store runs from.

**What to include about friction.** Stripe was the client's first request and Stripe was never the answer. Mainland China is not a supported Stripe country, so domestic acquiring does not exist there regardless of whether the script loads (F40). Say how long it took to get that accepted internally. Then say what the payment provider onboarding actually cost in weeks, what documentation the mainland entity had to produce, and which reconciliation work is still manual. Also name the form and captcha problem: Google reCAPTCHA gates submission rather than degrading, so the form dies rather than slows (F2), and the replacement was a domestic captcha.

**Client naming.** Named. The client sells to consumers and benefits from the visibility.

**Service line it sells.** Technical Integration.

**Links.** Money page: `/services/technical-integration/`. Sideways to `china-payments-woocommerce` and `forms-and-captcha-china`.

**Metadata.**
```yaml
title: "WooCommerce Checkout in China, Rebuilt"                                      # 38 / 52
description: "Replacing a checkout no mainland buyer could finish with Alipay, WeChat Pay and UnionPay, and the settlement work nobody budgets for."     # 133 / 152
excerpt: "Why the old checkout failed before it loaded, what replaced it, and the licensing step that added five weeks."   # 19 / 25 words
```

**CTA.** Talk to us about selling into China from WooCommerce

## Shared case study template (from PLAN.md section 7)

### Shared case study template

Every case study on the site uses these six sections, in this order, with these jobs. No case study publishes without all six.

1. **The situation.** Who the client is, what entity structure they had in China, what they were running, and the month it started. Name the stack and the origin region.
2. **What we measured before.** At least one before figure, with the named Chinese network or cloud region it was measured from and the date it was taken. A number without a vantage point does not go in.
3. **What we changed.** The specific work, in the order it happened, with the service line named. No adjectives about quality.
4. **What we measured after.** The same metric, from the same vantage points, by the same method, with the date. If the method changed, say so and say why.
5. **What did not work.** Something that broke, ran long, or got abandoned. Named, not softened.
6. **What is still open.** The unresolved item, the recurring cost, or the thing that will need doing again. Every China site has one.

Two standing rules across all ten. Every study carries at least one before figure and one after figure, each tied to a named Chinese network or cloud region and a date, and if the original test conditions cannot be reconstructed from project records, the measurement gets re-run before the page ships (see the fact bank preamble, and F32 for the published figures that currently travel without a vantage point). And every study names the client or states the reason it does not. Silent anonymity reads as fabrication.
