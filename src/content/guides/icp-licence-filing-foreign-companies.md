---
title: "ICP Licence and ICP Filing for Foreign Firms"
subtitle: "If you want to host a website in mainland China, you need an ICP. No exceptions. But there are two types, and confusing them can cost you months."
summary: "Every site on a mainland server needs an ICP filing, made by a mainland company. Paid information services also need a licence, with ownership caps."
visual: "/images/guides/icp-licence-filing-foreign-companies.webp"
order: 5
published: true
publishedAt: 2026-03-31
updatedAt: 2026-10-13
category: Legal
---

Every website on a mainland Chinese server needs an ICP registration. That part is simple enough. What trips foreign companies up is that there are two separate instruments with very different rules. The ICP filing (ICP备案, often called Bei'an) covers every site, and it's made by a company registered in the mainland, which your Chinese subsidiary can be. The ICP licence (ICP许可证) covers paid information services, goes through a formal review, and caps foreign ownership at 50% outside a handful of pilot zones. Confusing the two, or skipping both, costs months, which is why [an agency that files ICP applications routinely](/wordpress-agency-china/) is worth more here than a cheaper build.

## ICP at a glance

| | ICP filing (备案) | ICP licence (经营性许可证) |
|---|---|---|
| **Purpose** | Non-commercial information services | Information services users pay for |
| **Examples** | Company sites, blogs, product information | Paid content, subscriptions, paid web services |
| **Who can apply** | A company registered in the mainland (a WFOE counts) or a mainland resident | A mainland company; foreign ownership capped at 50% outside the pilot zones |
| **Official review** | Provider check 1 to 2 working days, then the provincial regulator, generally 1 to 20 working days | Within 60 days of the application being accepted |
| **Official fee** | None, though the server you file against is paid for | None |
| **What we plan** | 3 to 6 weeks | 12 to 18 weeks |

## ICP filing: the one you can actually get

The filing is the baseline. Every website served from a mainland server needs one, whether it makes money or not. The rules that created the system say so in two sentences.

> Commercial internet information services require a licence and non-commercial ones a filing. Without the licence or the filing, no one may provide internet information services.
> Source: State Council, Measures for the Administration of Internet Information Services (互联网信息服务管理办法), articles 3 and 4, text of 8 January 2011, which the revision of 6 December 2024 left unchanged. https://www.gov.cn/gongbao/content/2011/content_1860864.htm

Who can file is narrower than most foreign companies expect. Head office can't do it from abroad, and neither can a foreign individual living outside China.

> To apply for ICP filing, the filing entity must be an enterprise registered in the Chinese mainland or a Chinese mainland resident. Alibaba Cloud international site (alibabacloud.com) accounts do not support ICP filing applications.
> Source: Alibaba Cloud help centre, ICP filing for enterprises outside the Chinese mainland, last updated 20 August 2026. https://help.aliyun.com/en/icp-filing/basic-icp-service/product-overview/icp-filing-application-for-enterprises-outside-the-chinese-mainland

In practice, a foreign company files through its mainland subsidiary. The application runs through the hosting provider that gives the server its network access, so the provider's console is where the work happens.

> Alibaba Cloud's own check takes 1 to 2 working days. The provincial Communications Administration (省级通信管理局) review that follows generally takes 1 to 20 working days.
> Source: Alibaba Cloud (阿里云) help centre, ICP filing process overview, last updated 26 August 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview

That is up to 22 working days on paper. Documents take time to gather and applications come back for corrections, so we plan three to six weeks. The filing itself costs nothing.

> ICP filing is free of charge, but it needs a cloud server that supports filing, and buying that server costs money.
> Source: Alibaba Cloud (阿里云) help centre, ICP filing questions by scenario, last updated 23 April 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/product-overview/faq-about-icp-filing-applications-in-different-scenarios

## ICP licence: the one with the ownership cap

If your website charges users for information or web services (paid content, subscriptions, paid online services), you need the ICP licence on top of the filing. Where an online shop or a software product falls on that line is a question for a licensed adviser, and it's worth asking before you file rather than after.

The ownership rule is where most foreign companies stop.

> Foreign ownership of value-added telecoms businesses may not exceed 50%, except for e-commerce, domestic multi-party communications, store-and-forward and call centre services.
> Source: National Development and Reform Commission and Ministry of Commerce, Special Administrative Measures for Foreign Investment Access (Negative List), 2024 edition, in force from 1 November 2024. https://www.ndrc.gov.cn/xxgk/zcfb/fzggwl/202409/P020240907514493057643.pdf

A pilot opened part of that in 2024, for named categories only.

> In approved pilot areas (Beijing, the Shanghai FTZ Lingang New Area and Pudong, Hainan Free Trade Port and Shenzhen), the foreign ownership cap is lifted for IDC, CDN, ISP, online data processing and transaction processing, information publishing platforms and delivery services (excluding news, online publishing, audiovisual and internet culture), and information protection and processing services.
> Source: Ministry of Industry and Information Technology (工业和信息化部), notice 工信部通信函〔2024〕107号, 8 April 2024. https://www.gov.cn/zhengce/zhengceku/202404/content_6944441.htm

So the answer depends on where the company is registered and which category the service sits in. A fully foreign-owned company outside the pilot zones can't hold the licence for an ordinary information service. That rule forces a choice most foreign businesses don't see coming: a joint venture, a restructured shareholding, or a mainland site that doesn't charge for anything.

> The regulator decides on a licence application within 60 days of accepting it.
> Source: Shanghai Communications Administration (上海市通信管理局), value-added telecoms licence service guide, 1 June 2015. https://shca.miit.gov.cn/bsfw/bszn/dxsc/blcx/art/2020/art_7426922df3754a189aaf4278ff0c7b1d.html

Gathering the file comes before acceptance, so we plan twelve to eighteen weeks. That is our planning figure, not the regulator's.

## What happens if you skip the ICP entirely

On a mainland server, skipping it isn't an option. The provider won't open the domain, and the regulator can close the site.

> Under MIIT rules, a domain resolved to a server in the Chinese mainland must complete its website filing before website access can be opened.
> Source: Alibaba Cloud (阿里云) help centre, troubleshooting a website that can't be reached, last updated 4 September 2026. https://help.aliyun.com/zh/dws/support/how-do-i-troubleshoot-the-failures-to-access-a-website-by-using-its-domain-name

> A site that provides non-commercial information services without a filing is ordered by the provincial telecoms authority to correct it within a time limit, and ordered closed if it refuses.
> Source: State Council, Measures for the Administration of Internet Information Services, article 19, text of 8 January 2011, which the revision of 6 December 2024 left unchanged. https://www.gov.cn/gongbao/content/2011/content_1860864.htm

Some companies look at all this and host outside the mainland instead, in Hong Kong, Singapore or Frankfurt. That needs no filing. The cost is the border, because every request a visitor makes has to cross the Great Firewall and back.

| Choice | ICP filing needed | What it costs |
|---|---|---|
| **Mainland server, filed** | Yes | Weeks of paperwork before launch |
| **Mainland server, not filed** | Not possible | The provider keeps the domain closed |
| **Hong Kong or overseas server** | No | Every request crosses the border |

> Chinafy tested 614 global websites from Beijing, Virginia and London. Two in three failed to load in China, and time to first byte was 4 to 4.5 times higher in Beijing than in the US or UK.
> Source: Chinafy, China Website Performance Benchmarks 2026, 14 April 2026 (a vendor benchmark). https://www.chinafy.com/blog/china-website-performance-benchmarks-2026

Once the filing clears, the number goes on the site. It's usually down in the footer, and it isn't optional.

> After the filing succeeds, the site must display the ICP number issued by the ministry at the bottom of the page, linked to beian.miit.gov.cn. Leaving it off can bring an order to correct it and a fine of 5,000 to 10,000 yuan from the provincial Communications Administration.
> Source: Alibaba Cloud (阿里云) help centre, adding the filing number to a website, last updated 12 August 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/the-icp-record-post-processing-1
