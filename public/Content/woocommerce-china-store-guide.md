---
title: "WooCommerce China: Build a Store That Sells"
slug: woocommerce-china-store-guide
description: "Standard WooCommerce fails Chinese shoppers: blocked scripts, no Alipay or WeChat Pay, slow checkout. Fix payments, logistics, speed and ICP compliance."
excerpt: "Standard WooCommerce stores fail Chinese shoppers before they buy. Here is how to fix payments, logistics, checkout speed, and ICP compliance for China's mainland market."
template: guide
---

<!-- HERO SECTION -->

A WooCommerce store that runs clean in Frankfurt or Chicago can turn near
unusable the moment a shopper opens it in Shanghai. Same theme, same
plugins. But the checkout stalls, the product images never load, and the
one payment button that actually matters isn't there.

<!-- INTRODUCTION -->

For a Chinese buyer, that is not minor friction. That is the reason they
close the tab. WooCommerce can absolutely work in China. Pointed straight
out of the box at a Western audience, it does not.

This piece assumes you've already read our pillar guide, Website
Localisation for China. All of it builds on that groundwork, so start there
first if you haven't.

<!-- AT A GLANCE -->

## WooCommerce in China at a glance

| Area       | What breaks by default                     | The fix                        |
| ---------- | ------------------------------------------ | ------------------------------ |
| Scripts    | Google Fonts, reCAPTCHA, Stripe JS blocked | Self-host or swap out          |
| Payments   | Visa and Mastercard only                   | Alipay + WeChat Pay + UnionPay |
| Speed      | Overseas host, no CDN                       | Mainland host, China image CDN |
| Addresses  | Western field order rejected               | Province to district ordering  |
| Compliance | No ICP, no trust signals                   | ICP filing, local proof        |

<!-- SECTION: WHY STANDARD STORES FAIL -->

## Why standard WooCommerce stores fail Chinese shoppers

Three things break, and usually all at once.

First, blocked scripts. A default store quietly pulls Google Fonts,
reCAPTCHA, and often Stripe's JavaScript. Every one of those sits behind the
Great Firewall, blocked or throttled. The page hangs there waiting on a
response that never arrives.

Second, slow checkout. Host the store in Europe or the US and every cart
action makes a slow round trip across the Firewall. Chinese shoppers do not
wait around for a spinner.

Third, no local payment. Show only Visa and Mastercard and you've closed the
store to most of the mainland before anyone even reaches for a card.

> Alipay and WeChat Pay together clear over 90% of China's mobile payments.
> In Q1 2025 the two held roughly 96% of the market between them.

<!-- SECTION: PAYMENTS -->

## Setting up China-friendly payments

This is the part that decides whether you have a store at all.

Alipay (支付宝) and WeChat Pay (微信支付) are non-negotiable. UnionPay (银联)
makes a useful third for older and corporate buyers. Credit cards stay on as
a fallback for the rare cross-border shopper, and not much beyond that.

| Payment method        | Who reaches for it                    |
| --------------------- | ------------------------------------- |
| WeChat Pay (微信支付) | Everyday buyers, mobile-first, social |
| Alipay (支付宝)       | Online retail, cross-border, services |
| UnionPay (银联)       | Older and corporate customers         |
| Visa / Mastercard     | Occasional foreign shopper only       |

Price in RMB, shown as ¥, set at the source rather than converted live from
dollars at checkout. A total that drifts with the exchange rate reads as
untrustworthy. For the gateway you have two roads: a direct merchant account
with Alipay and Tenpay, WeChat Pay's gateway, which needs a Chinese business
entity, or an aggregator that fronts the integration. WooCommerce plugins
exist for both. The direct route settles cleaner and cheaper as volume grows.

Two details that trip people up later. Refunds have to route back through the
same wallet the buyer paid with, so build that into your returns flow early.
And plenty of stores run checkout inside a WeChat Mini Program (小程序) too,
keeping the whole purchase inside the app most shoppers already live in.

<!-- SECTION: LOGISTICS -->

## Logistics, shipping, and tax localization

Get the address model right first. Chinese addresses run province, city,
district, then street, the reverse of the Western order. Your checkout fields
and validation have to match, or couriers bounce the label straight back.

For domestic fulfilment, wire in a local carrier like SF Express (顺丰)
instead of bolting DHL rates onto a Chinese cart. Shipping from outside the
mainland changes the tax picture too. Cross-border e-commerce through a
bonded warehouse handles customs and duty far more predictably than clearing
parcel by parcel, which can strand orders for weeks. Under that cross-border
model, orders clear at a comprehensive tax rate instead of full general-trade
duty, which usually works out cheaper for the buyer. One small thing people
miss: mainland couriers often call before they deliver, so every order needs a
real, reachable phone number.

<!-- SECTION: SPEED -->

## Optimizing checkout speed and reliability

Strip every blocked asset out of the cart and checkout templates. Self-host
your fonts, swap reCAPTCHA for a compliant alternative, and pull any overseas
analytics tag. Serve product images from a China CDN so they load in the same
environment your buyer sits in. Then build the flow mobile first, because that
is where nearly all the traffic lives.

> Over 95% of Chinese internet users shop from a phone. A checkout that only
> feels right on desktop is one most of them will never finish.

<!-- SECTION: COMPLIANCE & TRUST -->

## Compliance and trust signals for Chinese buyers

A store hosted on the mainland needs an ICP filing (Bei'an), same as any
other site, and a commercial store often falls under the commercial ICP
class, which carries ownership rules worth checking early.

Past the license, buyers scan for a few signals before they trust a cart: an
ICP number in the footer, a mainland phone line, WeChat (微信) customer
service, and real reviews from other Chinese customers. Miss those and even a
fast, well-built store still looks foreign, and foreign still reads as a risk.

<!-- CTA -->

## Need a WooCommerce store built for China?

ChinaWebFoundry sets up China-ready WooCommerce from payments and logistics
through to hosting and compliance. If any of this is more than you want to
wire up alone, get in touch.

CTA: Talk to Us

<!-- =====================================================================
FEATURE IMAGE — INSTRUCTION FOR CLAUDE CODE

Generate the feature (hero) image for this article from the prompt below,
then wire it in as the article's featured image and OG image.

- Save to:    public/images/guides/woocommerce-china-store-guide.webp
- Reference:  images/guides/woocommerce-china-store-guide.webp
- Format:     .webp, landscape, optimized for web (China CDN friendly)
- Style rule: real candid editorial photograph only. No text, no logos,
              no UI overlays, no diagrams or infographics of any kind.

IMAGE PROMPT (use verbatim):

A candid, hyper-realistic editorial photograph shot slightly overhead of a young Chinese woman in her late twenties sitting at a small marble cafe table in Shanghai, holding her smartphone in both hands as she finishes an online purchase, the screen showing a payment confirmation glowing soft green, her face lit by gentle diffused window light from the left, a genuine half-smile of satisfaction, fine natural skin texture and a few loose strands of hair catching the light, shallow depth of field with the phone and her eyes in crisp focus while a latte, a small paper courier slip, and the warm blurred interior of the cafe fall softly out of focus behind her, muted natural color palette with a faint warm orange bounce, unposed documentary feel as if captured in a fleeting real moment, no text, no graphics, no logos.
===================================================================== -->
