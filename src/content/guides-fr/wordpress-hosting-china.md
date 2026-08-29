---
title: "Hébergement WordPress en Chine"
subtitle: "Les trois grands clouds chinois proposent tous une image WordPress en un clic. Aucun ne propose de WordPress infogéré, et c'est dans cet écart que les projets étrangers s'enlisent."
summary: "Ce que vendent réellement Alibaba, Tencent et Huawei, le dépôt ICP qui conditionne le moindre serveur continental, le détour par Hong Kong et ce problème de mises à jour que personne ne budgète."
visual: "/images/guides/wordpress-hosting-china.webp"
order: 32
published: true
publishedAt: 2026-08-29
updatedAt: 2026-08-29
category: Hosting
---

Il n'existe pas de WP Engine en Chine. Ni Kinsta, ni Flywheel, ni la moindre offre WordPress infogérée chez un hébergeur continental.

Ce que vous pouvez acheter, c'est une image WordPress préinstallée sur les trois grands clouds chinois, posée sur un petit serveur virtuel que vous administrez vous-même. Le produit n'a rien à voir avec de l'infogérance, et c'est précisément dans cet écart que la plupart des projets WordPress étrangers s'ensablent en Chine.

Ce guide passe en revue ce que vendent vraiment les clouds continentaux, le dépôt administratif qui doit aboutir avant qu'une seule requête soit servie, et les coûts qui refont surface quatre mois après le lancement, quand plus personne ne les avait prévus au budget. Pour le tableau d'ensemble sur les serveurs et la latence, commencez par notre guide sur [l'hébergement d'un site web en Chine](/fr/ressources/guide-web-chine/heberger-site-web-chine/). Sur notre façon de travailler avec cette stack, voir [WordPress en Chine](/fr/wordpress-en-chine/).

## Ce que proposent réellement les trois clouds continentaux

Alibaba Cloud (阿里云), Tencent Cloud (腾讯云) et Huawei Cloud (华为云) embarquent chacun une image applicative WordPress prête à l'emploi sur leur offre d'entrée de gamme.

| Fournisseur | Produit | Ce que vous obtenez |
| --- | --- | --- |
| Alibaba Cloud | Simple Application Server (轻量应用服务器) | Image WordPress sur Alibaba Cloud Linux 3, PHP 8.1, MySQL 5.7, Nginx 1.22 |
| Tencent Cloud | Lighthouse (轻量应用服务器) | Modèle applicatif WordPress |
| Huawei Cloud | FlexusL (云耀云服务器 L实例) | Image applicative WordPress, plus des images marketplace pour ECS |

Relisez la colonne de droite sans vous presser. Chacune de ces lignes décrit un système d'exploitation avec WordPress préinstallé dessus. Mises à jour pilotées, sauvegardes pilotées, environnement de préproduction, une équipe capable de lire un conflit d'extensions : rien de tout cela n'est dans la boîte.

Quelqu'un chez vous finira donc par faire de l'administration système, en chinois, sur une console qui n'a pas de mode anglais. C'est une charge mensuelle permanente. Inscrivez-la au budget dès le cadrage, parce qu'elle arrivera de toute façon.

## Rien ne sort tant que le dépôt n'a pas abouti

C'est la contrainte qui réorganise n'importe quel projet web en Chine, autant la poser sans détour.

Les ports 80 et 443 restent inutilisables sur une adresse IP continentale tant que le dépôt ICP (ICP备案) n'est pas validé. L'hébergeur les maintient fermés en bordure de réseau dès le jour où vous louez la machine. Pas de lancement discret, pas de lien de préproduction montré au client sur le serveur de production, pas de bêta silencieuse pendant que le dossier avance.

> Le dépôt ICP ne coûte rien à déposer. Il est instruit par l'administration provinciale des communications (省级通信管理局), le ministère de l'Industrie et des Technologies de l'information procédant à des contrôles ponctuels. Les délais publiés vont de 10 à 30 jours ouvrés selon la province et la saison.
> Source : règles de dépôt du MIIT et documentation des hébergeurs continentaux, 2026.

Comptez trois à six semaines, et encore, à condition que l'entité continentale existe déjà. Notre [guide du dépôt ICP](/fr/ressources/guide-web-chine/licence-icp-entreprises-etrangeres/) détaille les pièces à fournir et l'ordre dans lequel les présenter.

La licence ICP commerciale (ICP许可证) relève d'une autre logique. Elle devient obligatoire dès que le site gagne lui-même de l'argent : commerce en ligne, contenus payants, logiciels payants, publicité. L'instruction se fait au niveau national et non provincial, et elle prend nettement plus de temps.

> L'examen d'une licence ICP commerciale au niveau du MIIT dure de 60 à 90 jours ouvrés. La détention étrangère au-delà de 50 % a longtemps été interdite et reste encadrée en dehors des zones pilotes de Pékin, Shanghai Pudong, du port de libre-échange de Hainan et de Shenzhen.
> Source : règles de licence du MIIT et réglementation des zones pilotes, 2026.

Prévoyez donc douze à dix-huit semaines pour celle-là. Les deux dispositifs exigent une entité juridique enregistrée sur le continent. Une société étrangère ne peut pas déposer en son nom propre, et aucun budget d'hébergement ne remplacera jamais cette entité.

## Ce compte Alibaba Cloud qui ne peut pas héberger votre site

Alibaba exploite deux plateformes aux marques presque identiques. alibabacloud.com est la plateforme internationale, aliyun.com la plateforme chinoise.

Les deux sont étanches l'une à l'autre. Aucune réplication native des ressources d'une plateforme à l'autre, aucune région continentale accessible côté international, et aucun dépôt ICP possible depuis ce côté-là.

L'enchaînement qui paraît naturel, s'inscrire sur le site anglophone parce que c'est celui que la recherche vous sert, aboutit donc à un compte structurellement incapable d'héberger ce que vous construisez. Ouvrir le bon compte suppose une licence commerciale chinoise et une vérification d'identité locale, et le parcours de dépôt qui s'y trouve est exclusivement en chinois.

Toute équipe qui est passée par là une fois le sait par cœur. Toute équipe qui découvre y laisse deux semaines.

## Hong Kong, et le prix réel du raccourci

Un hébergement à Hong Kong n'exige aucun dépôt ICP. C'est tout son intérêt, et c'est un choix défendable dans deux cas : vous n'avez pas encore d'entité continentale, ou il vous faut quelque chose en ligne avant l'aboutissement du dossier.

Reste à nommer précisément ce que vous abandonnez.

La latence se dégrade nettement depuis le nord et l'ouest de la Chine par rapport à une origine continentale, parce que le trafic traverse toujours la frontière. Les performances varient selon l'heure et selon l'opérateur, si bien que la mesure prise un mardi matin ne dit pas grand-chose du vendredi soir. Enfin, Baidu privilégie les sites hébergés sur le continent sous un nom de domaine déposé, ce qui laisse un site hongkongais grimper à contre-pente dans le seul moteur qui vous intéresse.

Traitez Hong Kong comme une passerelle. Si la Chine compte commercialement, budgétez l'entité et le dépôt, faites tourner Hong Kong en attendant, et fixez une date de bascule avant que quelqu'un ne vous la fixe à votre place.

## La question du CDN

Un CDN mondial rapproche votre origine de Hong Kong ou de Tokyo, ce qui aide. Sur les hôtes bloqués appelés à l'intérieur de la page, il ne change rien.

Cloudflare est le cas dont on nous parle le plus souvent. Les offres standard et gratuite servent les visiteurs continentaux depuis le point de présence étranger le plus proche. Le réseau chinois, lui, fait l'objet d'un abonnement Enterprise distinct exploité avec JD Cloud, exige un dépôt ou une licence ICP valide par domaine racine, et passe par une revue de contenu de JD Cloud avant activation.

Pour un site hébergé sur le continent, la réponse la plus simple reste en général le CDN domestique rattaché au cloud sur lequel vous êtes déjà. Il est déposé, il est rapide, et il maintient toute la chaîne chez un seul fournisseur.

## Maintenir WordPress à jour depuis un serveur continental

WordPress sur un serveur continental pose un problème de maintenance qu'il ne pose nulle part ailleurs.

Le dépôt d'extensions, le dépôt de thèmes et les serveurs de mise à jour du cœur répondent bien depuis la Chine. Ils limitent aussi le débit des plages d'adresses IP continentales avec zèle, renvoyant des HTTP 429 assez souvent pour qu'un site reste des semaines sans correctif. Le tableau de bord n'en dit rien. Il cesse simplement de proposer des mises à jour, et le site décroche en silence.

Trois parades tiennent la route : les miroirs domestiques, un processus de mise à jour exécuté depuis l'étranger sur une copie de préproduction, ou un contrat de maintenance où une personne nommée répond du niveau de correctifs. Choisissez délibérément. Ne rien choisir reste une option, et elle se termine par un site non corrigé exposé à l'internet ouvert.

## Ce que cela coûte

Le serveur est la partie bon marché. Un site vitrine d'entreprise sur Simple Application Server ou Lighthouse tourne le plus souvent sous 100 USD par mois, et les tarifs promotionnels de première année sur les plus petites instances descendent bien plus bas.

Le dépôt lui-même est gratuit. La dépense réelle se loge ailleurs, en trois endroits : la création ou l'entretien de l'entité continentale, les heures de travail passées à préparer les pièces et à passer la vérification, et la personne qui se connecte chaque mois à une console en chinois pour maintenir la machine à jour et sauvegardée.

Les équipes qui ne chiffrent que la ligne « serveur » sont celles qui renégocient le périmètre au quatrième mois.

## Choisir entre les scénarios

| Situation | Où héberger | Formalité requise |
| --- | --- | --- |
| Pas d'entité continentale, lancement immédiat | Hong Kong | Aucune |
| Entité continentale, site vitrine | Alibaba, Tencent ou Huawei, continent | Dépôt ICP, 3 à 6 semaines |
| Entité continentale, revenus sur le site | Continent, plus des moyens de paiement domestiques | Licence ICP commerciale, 12 à 18 semaines |
| Site mondial, audience chinoise réduite, pas d'entité | Garder l'origine à l'étranger, corriger d'abord les dépendances | Aucune |

C'est la dernière ligne qu'on saute le plus souvent, et c'est fréquemment la bonne réponse. Si la Chine pèse 3 % de votre trafic et qu'aucune entité n'est en vue, retirer les dépendances bloquées du site que vous avez déjà récupère l'essentiel de la vitesse disponible pour une fraction du coût d'un déploiement continental.

## Questions fréquentes

**Peut-on garder son hébergeur actuel et se contenter d'ajouter un CDN chinois ?**
Seulement si le fournisseur dispose de points de présence sur le continent, ce qui suppose un domaine déposé. Sans dépôt, vous achetez un point de présence étranger avec un nom chinois dessus.

**Combien coûte un hébergement WordPress sur le continent ?**
Le serveur reste souvent sous 100 USD par mois pour un site d'entreprise. Les coûts qui comptent sont l'entité, le travail de dépôt et la personne qui administre chaque mois une console en chinois.

**Le domaine doit-il obligatoirement être en .cn ?**
Non. Un .com peut être déposé. Baidu marque une certaine préférence pour le .cn, mais un .com déposé sur un serveur continental est le montage courant et il fonctionne.

**Que se passe-t-il si l'on héberge en Chine sans dépôt ?**
Les ports restent fermés et le site ne sort pas. L'hébergeur applique la règle au niveau réseau. Aucun régulateur n'a besoin de vous découvrir.

**Pouvez-vous déposer l'ICP pour nous ?**
Nous pilotons le dépôt au nom de l'entité continentale du client : constitution du dossier, vérification d'identité réelle, soumission auprès de l'hébergeur, relances. Nous ne pouvons pas déposer pour une société sans entité, et personne d'autre ne le peut.

Vous hésitez entre un déploiement continental et le statu quo à l'étranger ? Dites-nous où vous en êtes sur l'entité et quelle part de votre trafic est chinoise, nous reviendrons vers vous avec le scénario adapté. Il arrive que ce scénario consiste à laisser votre origine exactement là où elle est.
