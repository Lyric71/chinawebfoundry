---
title: "Baidu Merchant Center: What BMC Actually Does"
subtitle: "Somebody on your team has been told that Baidu Merchant Center is how product data gets into Baidu. Roughly true, and roughly true is where the planning goes wrong. Which account owns the tool, what the data may do once it is loaded, and whether anyone at Baidu still maintains the product are separate questions with answers most teams guess wrong."
summary: "Baidu Merchant Center is an ads-account product feed, not an organic tool. What BMC does, where the console lives, and who still maintains it."
visual: "/images/guides/baidu-merchant-center.webp"
order: 20
published: true
publishedAt: 2026-08-14
updatedAt: 2026-08-14
category: Search
---

Baidu Merchant Center (百度商品中心, Bǎidù Shāngpǐn Zhōngxīn), BMC for short, is a product data warehouse. You load a catalog into it and Baidu's advertising systems read the records back out on demand.

Baidu's own definition runs like this.

> Baidu Merchant Center，简称BMC，作为百度服务商家存储结构化信息的管理系统，提供数据收录、存储、管理和输出应用的服务。
>
> Baidu Merchant Center, abbreviated BMC, is a management system for storing structured information on behalf of the merchants Baidu serves, providing data collection, storage, management and output services.
>
> *Source: Baidu Marketing Academy, product page*

Notice what is absent. Nothing in that sentence touches search results or the indexing of your website.

## Baidu files your product data next to your banner ads

The phrase 数据收录 translates comfortably as data collection, and it sits close enough to the word Baidu uses for search indexing that English write-ups have muddled the two for years. A second Baidu description is blunter about who the tool serves. It calls BMC a data center advertisers use to manage the products or services they promote.

The clincher is a category label. Baidu's product strategy material files the contents of a BMC catalog under delivery creative material (投放物料, tóufàng wùliào), the same bucket that holds ad copy and creative images. Labels like that are not written for customers. They decide which team owns a thing and which systems may read it.

A BMC feed is advertising inventory. It is not a sitemap and it is not structured data for organic listings. Every documented place the data can surface is a paid placement, which [we cover in its own piece](/resources/china-web-guide/baidu-product-data-destinations/).

## The console address in most English guides is a dead link

Two hostnames matter, and one of them looks wrong. The catalog console runs on shantou.baidu.com, under a bmc path, which reads like a city name but is correct. The other is product.baidu.com.

The address that circulates in English write-ups, baidu.com/bmc, returns a 404. No sign it ever resolved. A guide shipping a console URL nobody on its staff ever opened was assembled from other people's summaries, and the field-level detail further down deserves the same suspicion.

## It belongs to the ads account, not to the webmaster platform

This is the paragraph that saves a week of looking in the wrong place. BMC sits inside Baidu's advertising account system, the one behind Baidu Marketing (百度营销, Bǎidù Yíngxiāo) and Baidu Promotion (百度推广, Bǎidù Tuīguǎng). Not the Baidu Search Resource Platform, and not Baidu Intelligent Cloud. If your developers have been hunting for a merchant tab in the webmaster tools, there has never been one to find.

Nor is there a signup form. Access is a permission toggle applied to an advertising account you already hold. Key accounts get it switched on by default, and everyone else applies by email to Baidu's feed team through whichever regional manager handles the account. So the real prerequisite is a live Baidu ads account, with the mainland business license and matching corporate bank account that implies.

One question we have not been able to settle: whether the permission can be granted on a Baidu International account or an agency sub-account. Baidu's public documentation is silent either way. If you are buying through an agency, ask during selection, not after signing.

## Four objects, and only three of them are storage

A catalog (目录, mùlù) is the top container, and a new account starts with an allowance of three. You meet that limit first, and it is low enough to shape the design. A team planning one catalog per brand and another per language runs out on day one.

Inside a catalog sit product files (商品文件, shāngpǐn wénjiàn), which are the uploads or synced feeds themselves, and inside those the individual products (商品, shāngpǐn). One file holds up to a million products, a ceiling almost nobody gets near.

The fourth object confuses people because it looks like a folder and behaves like a segment. A product group (商品组, shāngpǐn zǔ) is a filtered subset of a catalog that campaigns point at, so it is a targeting unit rather than a place records live, and Baidu advises keeping any one group under 100,000 products.

Filling all this correctly is a job in itself, governed by field rules that fail quietly when you get them wrong. The companion piece on building the feed covers it.

## The paper trail stops on January 4, 2021

On that date Baidu folded search dynamic product ads into its unified Baidu Marketing platform, renaming the campaign objects along the way. The old product plan became a product catalog marketing objective, and the ordinary plan became a creative component of the product type.

That announcement is the last dated article Baidu published under its dynamic product ads tag, and the canonical BMC documentation is older still, from August 29 and 30 of 2019. Any tutorial with screenshots is therefore describing menus renamed years ago.

## As of May 2026, BMC means two different things at Baidu

In May 2026 Baidu announced a Model Committee, also abbreviated BMC. It is a governance body for AI work and has nothing to do with product feeds.

The older acronym was already scarce in English, and now it is the quieter of two claims on the same three letters. Research on this gets harder from here, not easier. Spell out Baidu Merchant Center in full when you brief a colleague or a research tool.

## Is anyone still maintaining it? Here is what the evidence supports

There is no shutdown notice. The console serves, accounts holding the permission still upload, and dynamic product ads run on the data. Set against that, nothing dated has appeared since January 2021, and the full field dictionary is still behind a login rather than an open help page. Silence of that length proves nothing on its own, since plenty of working infrastructure goes unwritten about.

> Baidu's legacy business, primarily traditional search and feed advertising, fell 29% year over year to RMB 10.2 billion in the first quarter of 2026, while its AI-powered business grew 49% to RMB 13.6 billion.
>
> *Source: Baidu Inc., first quarter 2026 results, May 18, 2026*

BMC belongs to the first of those two businesses. That is where the product sits, and it is not a forecast. Baidu has published nothing that would support one in either direction.

Baidu has published nothing dated on this product since January 2021, so treat the status notes here as observation rather than forecast.
