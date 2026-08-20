---
title: "Baidu Merchant Center : ce que fait vraiment BMC"
subtitle: "On a expliqué à quelqu'un de votre équipe que Baidu Merchant Center sert à faire entrer les données produit dans Baidu. À peu près vrai, et c'est dans cet à-peu-près que la planification déraille. Quel compte détient l'outil, ce que les données peuvent faire une fois chargées, et si quelqu'un chez Baidu maintient encore le produit sont trois questions distinctes dont la plupart des équipes devinent mal les réponses."
summary: "Baidu Merchant Center est un flux produit rattaché au compte publicitaire, pas un outil organique. Ce que fait BMC, où se trouve la console, et qui l'entretient encore."
visual: "/images/guides/baidu-merchant-center.webp"
order: 20
published: true
publishedAt: 2026-08-14
updatedAt: 2026-08-14
category: Search
---

Baidu Merchant Center (百度商品中心, Bǎidù Shāngpǐn Zhōngxīn), BMC en abrégé, est un entrepôt de données produit. Vous y chargez un catalogue et les systèmes publicitaires de Baidu relisent les enregistrements à la demande.

La définition de Baidu se lit ainsi.

> Baidu Merchant Center，简称BMC，作为百度服务商家存储结构化信息的管理系统，提供数据收录、存储、管理和输出应用的服务。
>
> Baidu Merchant Center, en abrégé BMC, est un système de gestion destiné à stocker des informations structurées pour le compte des marchands que Baidu accompagne, avec des services de collecte, de stockage, de gestion et de restitution des données.
>
> *Source : Baidu Marketing Academy, page produit*

Remarquez ce qui manque. Rien dans cette phrase ne touche aux résultats de recherche ni à l'indexation de votre site.

## Baidu range vos données produit à côté de vos bannières

L'expression 数据收录 se traduit confortablement par collecte de données, et elle se situe assez près du terme que Baidu emploie pour l'indexation de recherche pour que les articles anglophones confondent les deux depuis des années. Une seconde description de Baidu est plus franche sur le public visé : elle présente BMC comme un centre de données que les annonceurs utilisent pour gérer les produits ou services qu'ils promeuvent.

L'argument décisif tient à une étiquette de catégorie. Les documents de stratégie produit de Baidu classent le contenu d'un catalogue BMC sous matériel de diffusion (投放物料, tóufàng wùliào), la même rubrique qui accueille les textes publicitaires et les visuels créatifs. Ce genre d'étiquette n'est pas rédigé pour les clients. Il décide quelle équipe possède une chose et quels systèmes ont le droit de la lire.

Un flux BMC constitue de l'inventaire publicitaire. Ce n'est ni un sitemap ni des données structurées pour des résultats organiques. Chaque emplacement documenté où les données peuvent apparaître est un placement payant, ce que [nous traitons dans un article dédié](/fr/ressources/guide-web-chine/destinations-donnees-produits-baidu/).

## L'adresse de console citée dans la plupart des guides anglophones est un lien mort

Deux noms d'hôtes comptent, et l'un des deux a l'air faux. La console de catalogue tourne sur shantou.baidu.com, sous un chemin bmc, ce qui ressemble à un nom de ville mais reste correct. L'autre est product.baidu.com.

L'adresse qui circule dans les articles anglophones, baidu.com/bmc, renvoie un 404. Rien n'indique qu'elle ait jamais fonctionné. Un guide qui livre une URL de console qu'aucun de ses rédacteurs n'a jamais ouverte a été assemblé à partir des résumés des autres, et les détails de champs plus bas dans la page méritent la même méfiance.

## Il appartient au compte publicitaire, pas à la plateforme pour webmasters

Voici le paragraphe qui épargne une semaine de recherche au mauvais endroit. BMC se situe dans le système de comptes publicitaires de Baidu, celui qui se trouve derrière Baidu Marketing (百度营销, Bǎidù Yíngxiāo) et Baidu Promotion (百度推广, Bǎidù Tuīguǎng). Pas la Baidu Search Resource Platform, et pas Baidu Intelligent Cloud. Si vos développeurs cherchent un onglet marchand dans les outils pour webmasters, il n'y en a jamais eu.

Il n'existe pas non plus de formulaire d'inscription. L'accès prend la forme d'une permission activée sur un compte publicitaire que vous détenez déjà. Les grands comptes l'obtiennent par défaut, les autres en font la demande par courriel auprès de l'équipe flux de Baidu, via le responsable régional qui suit le compte. Le vrai prérequis est donc un compte publicitaire Baidu actif, avec la licence commerciale continentale et le compte bancaire d'entreprise correspondant que cela suppose.

Une question que nous n'avons pas pu trancher : la permission peut-elle être accordée sur un compte Baidu International ou sur un sous-compte d'agence. La documentation publique de Baidu reste muette dans les deux sens. Si vous achetez via une agence, posez la question pendant la sélection, pas après la signature.

## Quatre objets, dont trois seulement servent au stockage

Un catalogue (目录, mùlù) est le conteneur de premier niveau, et un nouveau compte démarre avec une dotation de trois. C'est la limite que vous rencontrez en premier, et elle est assez basse pour façonner la conception. Une équipe qui prévoit un catalogue par marque et un autre par langue arrive à court dès le premier jour.

Dans un catalogue se trouvent des fichiers produit (商品文件, shāngpǐn wénjiàn), qui sont les téléversements ou les flux synchronisés eux-mêmes, et dans ceux-ci les produits individuels (商品, shāngpǐn). Un fichier contient jusqu'à un million de produits, un plafond que presque personne n'approche.

Le quatrième objet trouble les esprits parce qu'il ressemble à un dossier et se comporte comme un segment. Un groupe de produits (商品组, shāngpǐn zǔ) est un sous-ensemble filtré d'un catalogue que les campagnes ciblent : c'est une unité de ciblage plutôt qu'un endroit où résident des enregistrements, et Baidu conseille de maintenir chaque groupe sous les 100 000 produits.

Remplir tout cela correctement constitue un travail en soi, régi par des règles de champs qui échouent en silence quand on se trompe. L'article compagnon sur la construction du flux s'en charge.

## La trace documentaire s'arrête au 4 janvier 2021

Ce jour-là, Baidu a intégré les annonces produit dynamiques de la recherche dans sa plateforme unifiée Baidu Marketing, en renommant au passage les objets de campagne. L'ancien plan produit est devenu un objectif marketing de catalogue produit, et le plan ordinaire un composant créatif de type produit.

Cette annonce est le dernier article daté que Baidu a publié sous son étiquette annonces produit dynamiques, et la documentation BMC de référence est plus ancienne encore, datée des 29 et 30 août 2019. Tout tutoriel accompagné de captures d'écran décrit donc des menus renommés depuis des années.

## Depuis mai 2026, BMC désigne deux choses différentes chez Baidu

En mai 2026, Baidu a annoncé un Model Committee, également abrégé BMC. Il s'agit d'un organe de gouvernance des travaux en intelligence artificielle, sans aucun rapport avec les flux produit.

L'acronyme le plus ancien était déjà rare en anglais, et le voilà devenu le plus discret de deux prétendants aux mêmes trois lettres. La recherche sur ce sujet devient plus difficile à partir d'ici, pas plus simple. Écrivez Baidu Merchant Center en toutes lettres quand vous briefez un collègue ou un outil de recherche.

## Quelqu'un l'entretient-il encore ? Voici ce que soutiennent les éléments disponibles

Aucun avis de fermeture n'a été publié. La console répond, les comptes disposant de la permission continuent de téléverser, et les annonces produit dynamiques tournent sur ces données. En face, rien de daté n'est paru depuis janvier 2021, et le dictionnaire complet des champs reste derrière un identifiant plutôt que sur une page d'aide ouverte. Un silence de cette durée ne prouve rien en soi, car bien des infrastructures qui fonctionnent ne font l'objet d'aucun écrit.

> L'activité historique de Baidu, principalement la recherche traditionnelle et la publicité dans les fils, a reculé de 29 % sur un an à 10,2 milliards de yuans au premier trimestre 2026, tandis que son activité portée par l'IA progressait de 49 % à 13,6 milliards.
>
> *Source : Baidu Inc., résultats du premier trimestre 2026, 18 mai 2026*

BMC appartient à la première de ces deux activités. C'est là que se situe le produit, et il s'agit d'un constat, pas d'une prévision. Baidu n'a rien publié qui permette d'en formuler une, dans un sens ou dans l'autre.

Baidu n'a rien publié de daté sur ce produit depuis janvier 2021 : traitez les remarques de statut ci-dessus comme des observations plutôt que comme des prévisions.
