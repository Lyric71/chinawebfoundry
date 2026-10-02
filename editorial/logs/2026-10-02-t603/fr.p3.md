# T6-03 deep-translate, FR, pass 3 (final native polish)

Worked from the pass 2 text. Hunting the last English skeleton.

## Change 1, summary

Kept as-is: Héberger WordPress en Chine continentale : Alibaba, Tencent, Huawei, Vercel et Cloudflare face à la règle du dépôt ICP, mesures à l'appui.

## Change 4, introduction

- before: Aucun lancement en douceur n'est possible.
+ after:  Impossible, donc, d'ouvrir le site en douceur.
why: the negated existential was flat and still shaped like "There is no soft launch".

Rest kept as-is.

## Change 5, benchmark block

- before: Ils proviennent de sites clients que nous avons migrés en Chine ou que nous y hébergeons, et aucun tiers ne les a mesurés, ce qu'il faut savoir avant de leur accorder du poids.
+ after:  Ils proviennent de sites clients que nous avons migrés en Chine ou que nous y hébergeons. Aucun tiers ne les a mesurés : à savoir avant de leur accorder du poids.

- before: Chacun de ces chiffres reste privé d'une condition que nous exigerions de tout autre banc d'essai.
+ after:  À chacun de ces chiffres manque encore une condition que nous exigerions de tout autre banc d'essai.
why: "reste privé de" is not a collocation a French editor would leave; the inversion is idiomatic in this register.

Blockquotes, table and closing line kept as-is.

## Change 5, provider table

- before: | Alibaba Cloud, site international, alibabacloud.com | Impossible pour un site déposé | ...
+ after:  | Alibaba Cloud, site international, alibabacloud.com | Inutilisables pour un site déposé | ...
why: the cell has to agree with its column header, "Serveurs sur le continent".

Rest kept as-is.

## Change 6, no managed WordPress

Kept as-is.

## Change 7, the filing and the licence

- before: détaille les documents requis et l'ordre de leur présentation.
+ after:  détaille les documents requis et l'ordre dans lequel les présenter.
why: the nominal "l'ordre de leur présentation" was administrative and stiff.

Rest kept as-is.

## Change 8, the cloud account

Kept as-is.

## Change 9, Vercel and Cloudflare

- before: Un CDN mondial place des copies de vos pages plus près, à Hong Kong ou à Tokyo, et cela aide.
+ after:  Un CDN mondial place des copies de vos pages plus près de vos visiteurs, à Hong Kong ou à Tokyo, ce qui aide.
why: "plus près" with no complement betrayed the English "closer".

Rest kept as-is.

## Change 10A, 10B, 10C

Kept as-is.

## Closing checks

- Diacritics present throughout; no unaccented copy.
- French typography (non-breaking spaces before : ; ? ! % and inside « ») applied by editorial/scripts/fr-typography.mjs after writing.
- No em dash. No banned word or 3F construction found on rescan.
- SEO field in scope (summary) rewritten natively in all three passes. Title, subtitle and slug untouched: outside the change list.
- Frontmatter keys, heading levels, link targets and table column counts unchanged.

Step 3 complete. The French page now carries all ten changes in native Les Echos register, with the page's own "dépôt ICP" terminology throughout.
