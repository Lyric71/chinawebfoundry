---
title: "Cloudflare in China: ICP and network requirements"
subtitle: "What Cloudflare does and does not do for Chinese visitors, and the filing requirement behind the in-country option."
summary: "Cloudflare China Network needs Enterprise, an ICP filing or licence per apex domain, and JD Cloud review. Check the requirements before switching."
visual: "/images/guides/cloudflare-china.webp"
order: 48
published: true
publishedAt: 2026-10-20
updatedAt: 2026-10-20
reviewBy: 2026-11-26
category: Hosting
author: cyril-drouin
---

Using Cloudflare in China for mainland delivery needs Enterprise plus a
separate China Network subscription, an ICP filing (ICP备案) or ICP licence
(ICP许可证) per apex domain, and JD Cloud review. For Cloudflare’s own website,
21YunBox recorded 3 of 6 completed loads from Alibaba Cloud (阿里云)
cn-zhangjiakou on 28 August 2026. Customer CDN configurations remain untested
here.

| Your current position | What needs to happen |
|---|---|
| Cloudflare without China Network | Contract the separate China Network subscription on Enterprise |
| Enterprise account, no filing | Obtain the required filing or licence for each apex domain |
| Filing already valid | Submit the domain and its content for JD Cloud review |
| Approved domain | Complete onboarding and check the features your site uses |

> Cloudflare makes China Network a separate subscription for Enterprise
> customers. JD Cloud operates its mainland data centres, and each apex
> domain needs a valid ICP filing or licence.
> Source: Cloudflare, China Network overview, 30 April 2026.
> https://developers.cloudflare.com/china-network/

Documentation checked on 20 October 2026.

Check the China Network status of the actual domain in your account.
Ask the account owner to confirm the subscription and approved domains.
You can then plan the network switch around the approvals still needed.



## Cloudflare in China starts with the domain paperwork

Start with the apex domain: `example.com` is a root domain;
`www.example.com` is a subdomain. Inventory the domains the launch will use,
including any separate brand address. Check the filing against each apex
domain.

Cloudflare asks for a valid ICP filing (ICP备案) or ICP licence (ICP许可证)
for each apex domain. Confirm which authorisation applies to the site’s
activity before making the application. Our [foreign-company ICP filing guide](/resources/china-web-guide/icp-licence-filing-foreign-companies/) explains the distinction and the entity requirements.

Give the filing contact that list before the launch date is set. A regional
team may have registered a separate brand address. Confirm that its filing
record covers the domain you intend to onboard.

Prepare JD Cloud’s review materials alongside the filing record: company
and customer names, domain name, ICP number, a description of the site’s
content, and the signed self-attestation letter supplied by the sales team.
The site must also display its ICP number in the footer.

> JD Cloud reviews domain content before China Network is enabled. After
> vetting, Cloudflare estimates 24 to 48 hours for first-time zone onboarding.
> Source: Cloudflare, Get started, 17 April 2026.
> https://developers.cloudflare.com/china-network/get-started/

Cloudflare’s estimated onboarding window starts after content vetting.
Filing approval and content review need their own dates in the project
plan, particularly when the filing application hasn’t started yet.



## What the Cloudflare website test covers

On 28 August 2026, 21YunBox tested Cloudflare’s own site from a mainland
cloud region. This third-party observation has no matching consumer-line
result. It supplies no comparison of a customer domain with and without
China Network.

| Tested subject | Datacentre result | Consumer result | Verdict | Test date |
|---|---|---|---|---|
| Cloudflare’s own website | Alibaba Cloud (阿里云) cn-zhangjiakou: 3 of 6 loads completed | Not supplied for this test | Intermittent (21YunBox), vendor site only | 28 August 2026 |

> 21YunBox reports 3 of 6 completed load attempts for Cloudflare’s own
> website from Alibaba Cloud (阿里云) cn-zhangjiakou on 28 August 2026.
> Source: 21YunBox, Does Cloudflare Work in China? The China Network & ICP
> Gate, reviewed 7 October 2026.
> https://www.21cloudbox.com/support/cloudflare-china.html

A customer hostname stays untested here unless a dated third-party test
covers that hostname. For an enquiry form, successful submission and receipt
of the message need their own checks.

Cloudflare’s routing documentation also warns that anycast can send a
request to a data centre farther away geographically. Routing and peering
at the visitor’s internet provider affect the path. Avoid promising a
particular serving city based only on the visitor’s location.

> Cloudflare says requests can reach data centres other than the
> geographically closest location; customers cannot pin that selection
> through zone settings.
> Source: Cloudflare, Geographic traffic routing, 14 October 2026.
> https://developers.cloudflare.com/support/troubleshooting/general-troubleshooting/geographic-traffic-routing/



## Check the features before changing delivery

Before changing delivery, check your site’s current features against
Cloudflare’s China Network availability list. Pay attention to the cache
options. Identify the challenge service on your enquiry form, if it has one.
Agree an alternative for any unsupported feature before the switch.
Regional product support and measured reachability are separate checks.

> China Network’s feature list specifies static caching and excludes
> Tiered Cache and Cache Reserve. It also lists Turnstile as unavailable
> within mainland China.
> Source: Cloudflare, Available products and features, 10 June 2026.
> https://developers.cloudflare.com/china-network/reference/available-products/

For each enquiry form, record the endpoint that accepts the submission
and any scripts the visitor must load first. Image hosts belong in the
inventory too. The [guide to reCAPTCHA failures on China forms](/resources/china-web-guide/recaptcha-china/) covers that
particular dependency; changing the page’s CDN doesn’t establish whether a
separate form service is usable.

If you already have Enterprise and a valid filing, confirm the domain’s
approval and required features with the account team. If the filing hasn’t
started, assign it to someone before planning the network switch. Our [China hosting service](/services/china-hosting/) covers the hosting and filing work behind that decision.



## Before you book the switch

**Can we try China Network before obtaining the filing?**

Cloudflare’s published proof-of-concept requirements include a valid ICP
number and JD Cloud’s content approval. Prepare those before requesting the
trial. Use the sales discussion to agree the trial’s scope and the documents
you need for a live proof of concept on the China Network.

**Will Cloudflare arrange the filing for us?**

Cloudflare says neither it nor JD Cloud is responsible for ICP
applications, though it can refer customers to filing partners. Choose who
will submit and maintain yours. Keep a copy of the filing record with the
domain inventory so a change of agency doesn’t obscure who owns the work.

**What happens if the filing is revoked?**

JD Cloud may suspend or terminate access to the China service. Cloudflare
says it will route the affected domains to data centres outside mainland
China. Keep the filing contact current and review any change to the
domain or site activity with the team responsible for the filing.

> Cloudflare’s FAQ requires filing and content approval for a proof of
> concept, assigns applications to the customer or its filing partner,
> and describes offshore rerouting after revocation.
> Source: Cloudflare, China Network FAQ, 16 April 2026.
> https://developers.cloudflare.com/china-network/faq/



Bring your domain list and filing status to the call.
