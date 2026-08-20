---
title: "Getting a Baidu Account as a Foreign Company"
subtitle: "Everyone warns you about the Chinese phone number. Almost nobody mentions the identity document, which is the requirement that stops foreign companies at the door."
summary: "A Chinese mobile number is the obstacle everyone talks about. The identity document requirement is the one that actually stops foreign brands."
visual: "/images/guides/baidu-account-foreign-company.webp"
order: 27
published: true
publishedAt: 2026-08-18
updatedAt: 2026-08-18
category: Search
---

Before you can verify a site, submit a URL or read a single index number, you need a Baidu account that has passed real-name verification (实名认证, shímíng rènzhèng). The account is not paperwork you can leave for later. Since September 2023 it decides whether your submission tools work at all, and it is the closest thing Baidu keeps to an ownership record for your search property.

Budget a day for the easy version of this. Several weeks for the hard one.

## The phone number is the famous obstacle

Baidu registration runs on SMS. Overseas numbers stopped working reliably around May 2022, and the change was never really announced.

What happens after that date is inconsistent enough that testing beats planning. Numbers from Hong Kong, Macau and Taiwan are reported to work, as are Singapore, Japan, the United States and Canada. European numbers, including Germany, France and Italy, are reported not to, though a Swiss number went through for one of our clients last year. Carrier filtering and per-address throttling create silent failures that look exactly like a wrong number, so a failed attempt tells you very little.

Virtual number services fill the gap and plenty of agencies use them. They are also a liability. Rented numbers get recycled, recovery flows depend on the number, and an account you cannot recover is an account you do not own.

## The document that actually blocks you

The phone number gets you a login. Real-name verification is what turns it into a working account, and this is the step where most foreign companies stop.

Baidu accepts four personal documents: the mainland ID card, the foreign permanent resident card (外国人永久居留证, wàiguórén yǒngjiǔ jūliú zhèng), the passport held by Chinese citizens residing abroad (华侨护照, huáqiáo hùzhào), and the mainland travel permit for residents of Hong Kong, Macau and Taiwan (港澳台居民来往内地通行证, Gǎng Ào Tái jūmín láiwǎng nèidì tōngxíngzhèng). Baidu's documentation is blunt about everything else:

> 上述外的其他证件暂不支持实名认证
>
> Documents other than those listed above are not currently supported for real-name verification.
>
> *Source: Baidu, account real-name verification documentation*

An ordinary British, French, German or American passport is not on the list. That one line is why so many foreign brands end up borrowing a mainland identity, sometimes without realizing that is what they did.

Personal verification then runs on facial recognition or a Chinese bank card. Corporate verification wants a unified social credit code (统一社会信用代码, tǒngyī shèhuì xìnyòng dàimǎ). That means an actual Chinese company. It also wants the legal representative's face scan, or a transfer from the corporate bank account.

## Why this stopped being optional in 2023

If the last two sections read like admin, this is the part that has teeth.

For years an unverified account was a minor annoyance. Then, in the autumn of 2023, Baidu published two notices eighteen days apart.

The first, in early September 2023, restricted platform verification relationships for accounts that had never completed real-name verification. The second recalled submission quotas from the same group, closing sitemap submission and cutting the daily allowance on the push API. Site owners who had been submitting URLs for years opened the platform that winter and found the tool gone. There was no warning email.

The stakes are not abstract. An account without real-name verification can lose its ability to submit content, and in some cases lose the verification relationship too.

There is a second reason to care, and it is the one that shows up in lawyers' inboxes:

> 实名认证直接影响账号和资源的归属
>
> Real-name verification directly determines ownership of the account and its resources.
>
> *Source: Baidu, account management documentation*

Baidu tells companies not to register under an employee's personal identity for exactly this reason. The identity attached to the account is the ownership record. Everything else is a permission setting.

## The routes that actually work

If you have a WFOE or a joint venture in China, use it. Corporate verification against your own unified social credit code gives you an account you control, staff you can add and remove, and no awkward conversation when an agency relationship ends. Figure on a few days of paperwork, most of it stuff your finance team already has in a drawer.

If you do not have an entity, the normal answer is that your China agency registers the account under its own license. It is fast, it is standard practice, and it is the moment to negotiate the exit instead of doing it three years later. Baidu publishes no ownership transfer flow. The practical recovery route is to re-verify the domain under a new account, which works because control of the verification file is control of the domain, but it means rebuilding history.

The third route, registering under a trusted individual with mainland identity, is the most common and the weakest. People change jobs. The account goes with them, and there is no support ticket that fixes that.

## What to settle before anyone clicks register

This is the part that costs money later if you skip it now.

Ask whose identity the account is registered against, and get the answer in writing. Ask what happens to the account when the engagement ends. Then ask whether your team gets its own collaborator seats or a shared password living in a spreadsheet somewhere.

A collaborator seat on a correctly owned account is the answer you want. Sub-users do not need their own real-name verification, so there is no reason for anyone to be sharing credentials.

Baidu adjusts registration and verification rules without announcement, so treat country-level phone reports as current-but-unstable.
