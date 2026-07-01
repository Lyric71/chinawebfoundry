---
title: "WooCommerce en Chine : bâtir une boutique qui vend"
subtitle: "Une boutique WooCommerce standard perd l'acheteur chinois avant même le paiement. Voici comment remettre d'aplomb les paiements, la logistique, la vitesse du tunnel de commande et la conformité ICP sur le marché continental."
summary: "En version standard, WooCommerce déçoit les acheteurs chinois : scripts bloqués, ni Alipay ni WeChat Pay, paiement à la traîne. Voici comment corriger les paiements, la logistique, la vitesse et la conformité ICP."
visual: "/images/guides/woocommerce-china-store-guide.webp"
order: 12
published: true
publishedAt: 2026-07-01
category: Technology
---

À Francfort ou à Chicago, votre boutique WooCommerce tourne sans le moindre accroc. Ouvrez-la depuis Shanghai : elle devient presque inutilisable. Même thème, mêmes extensions. Et pourtant, le paiement se fige, les images produit ne s'affichent jamais, et le seul bouton de paiement qui compte manque à l'appel.

Pour un acheteur chinois, rien d'anodin là-dedans. C'est exactement ce qui lui fait fermer l'onglet. WooCommerce fonctionne très bien en Chine. Servi tel quel à un public occidental, il cale.

Ce guide suppose que vous avez déjà lu notre guide pilier, Localiser un site pour la Chine. Tout part de ces fondations : commencez par là si ce n'est pas déjà fait.

## WooCommerce en Chine en bref

| Domaine | Ce qui casse par défaut | La correction |
| ---------- | ------------------------------------------ | ------------------------------ |
| Scripts | Google Fonts, reCAPTCHA, JS Stripe bloqués | Auto-héberger ou remplacer |
| Paiements | Visa et Mastercard uniquement | Alipay + WeChat Pay + UnionPay |
| Vitesse | Hébergement à l'étranger, sans CDN | Hébergement continental, CDN images en Chine |
| Adresses | Ordre des champs occidental refusé | De la province au district |
| Conformité | Ni ICP, ni signaux de confiance | Enregistrement ICP, preuves locales |

## Pourquoi les boutiques WooCommerce standard échouent

Trois éléments lâchent, en général d'un seul coup.

D'abord, les scripts bloqués. Une boutique par défaut appelle en douce Google Fonts, reCAPTCHA, souvent le JavaScript de Stripe. Chacun se trouve derrière le Grand Firewall, bloqué ou étranglé. La page reste suspendue, à guetter une réponse qui ne viendra jamais.

Ensuite, la lenteur du paiement. Hébergez la boutique en Europe ou aux États-Unis, et chaque action du panier repart pour un aller-retour poussif à travers le Firewall. L'acheteur chinois ne s'attarde pas devant un indicateur qui tourne.

Enfin, l'absence de paiement local. N'affichez que Visa et Mastercard : vous fermez la boutique à la quasi-totalité du continent avant même qu'on ne sorte une carte.

> Ensemble, Alipay et WeChat Pay traitent plus de 90 % des paiements mobiles en Chine. Au premier trimestre 2025, elles pesaient à elles deux environ 96 % du marché.

## Mettre en place des paiements adaptés à la Chine

C'est ce qui décide si vous tenez une boutique, ou rien du tout.

Alipay (支付宝) et WeChat Pay (微信支付) ne se discutent pas. UnionPay (银联) fait un troisième choix utile pour les acheteurs plus âgés et les entreprises. Les cartes bancaires restent en dépannage pour le rare acheteur transfrontalier, guère au-delà.

| Mode de paiement | Qui l'utilise |
| --------------------- | ------------------------------------- |
| WeChat Pay (微信支付) | Achats du quotidien, mobile, social |
| Alipay (支付宝) | Commerce en ligne, transfrontalier, services |
| UnionPay (银联) | Clients plus âgés et entreprises |
| Visa / Mastercard | Acheteur étranger de passage seulement |

Affichez les prix en RMB, symbole ¥, fixés à la source plutôt que convertis en direct depuis le dollar au moment de payer. Un total qui bouge avec le taux de change sème le doute. Pour la passerelle, deux voies s'offrent à vous : un compte marchand direct chez Alipay et Tenpay, la passerelle de WeChat Pay, qui exige une entité juridique chinoise, ou un agrégateur qui porte l'intégration à votre place. Des extensions WooCommerce existent pour les deux. La voie directe se règle plus proprement et coûte moins cher à mesure que le volume grimpe.

Deux détails piègent les marchands plus tard. Un remboursement doit repartir par le portefeuille qui a servi à payer : prévoyez-le tôt dans votre flux de retours. Et beaucoup de boutiques logent aussi le paiement dans un Mini Programme WeChat (小程序), gardant tout l'achat au creux de l'application où vivent déjà la plupart des acheteurs.

## Logistique, livraison et fiscalité

Commencez par le modèle d'adresse. En Chine, l'adresse descend de la province à la ville, au district, puis à la rue : l'inverse de l'ordre occidental. Vos champs et vos règles de validation doivent suivre, sous peine de voir les transporteurs renvoyer l'étiquette aussitôt.

Pour la livraison intérieure, branchez un transporteur local comme SF Express (顺丰) au lieu de greffer des tarifs DHL sur un panier chinois. Expédier depuis l'étranger change aussi la donne fiscale. Le e-commerce transfrontalier via un entrepôt sous douane règle formalités et droits avec bien plus de prévisibilité qu'un dédouanement colis par colis, capable d'immobiliser des commandes des semaines durant. Sous ce régime, la commande passe à un taux global au lieu des pleins droits du commerce général, ce qui allège d'ordinaire la facture de l'acheteur. Un point qu'on oublie souvent : les livreurs du continent appellent volontiers avant de se présenter, donc chaque commande réclame un numéro de téléphone réel et joignable.

## Optimiser la vitesse et la fiabilité du paiement

Retirez des modèles de panier et de paiement chaque ressource bloquée. Auto-hébergez vos polices, remplacez reCAPTCHA par une solution conforme, arrachez tout mouchard d'analyse étranger. Servez les images produit depuis un CDN en Chine, pour qu'elles chargent dans l'environnement même où navigue l'acheteur. Puis concevez le parcours d'abord pour le mobile, là où se concentre presque tout le trafic.

> Plus de 95 % des internautes chinois achètent depuis un téléphone. Un tunnel de paiement calibré pour le bureau, la plupart ne l'iront jamais au bout.

## Conformité et signaux de confiance

Une boutique hébergée sur le continent réclame un enregistrement ICP (Bei'an), comme n'importe quel autre site. Une boutique commerciale relève souvent de la catégorie ICP commerciale, assortie de règles de propriété qu'il vaut mieux vérifier tôt.

Au-delà de la licence, l'acheteur passe en revue quelques repères avant de confier son panier : un numéro ICP dans le pied de page, une ligne téléphonique continentale, un service client sur WeChat (微信), de vrais avis d'autres clients chinois. Sans eux, même une boutique rapide et soignée garde un air étranger, et l'étranger reste synonyme de risque.

## Besoin d'une boutique WooCommerce pensée pour la Chine ?

ChinaWebFoundry met en place des boutiques WooCommerce prêtes pour la Chine, depuis les paiements et la logistique jusqu'à l'hébergement et la conformité. Si tout cela dépasse ce que vous voulez gérer seul, écrivez-nous.
