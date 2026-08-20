---
title: "Baidu DPA : où vont vraiment les données de flux produit"
subtitle: "Quelque part dans la conversation commerciale, un flux produit est devenu de la visibilité gratuite. Chargez le catalogue dans Baidu Merchant Center et vos produits apparaîtront dans la recherche Baidu. L'argument survit parce que le vocabulaire de Baidu y invite et que les articles anglophones le répètent depuis des années. Rien de ce qui suit ne dit que le flux ne sert à rien. Il dit où la documentation situe les données."
summary: "Baidu documente trois destinations pour les données de flux produit, toutes payantes : DPA recherche, DPA fil et Aladdin payant. Aucune voie organique documentée n'existe."
visual: "/images/guides/baidu-product-data-destinations.webp"
order: 18
published: true
publishedAt: 2026-08-13
updatedAt: 2026-08-13
category: Search
---

Baidu Merchant Center, BMC, est l'entrepôt de données produit qui alimente les systèmes publicitaires de Baidu. Une phrase de la FAQ produit de Baidu énumère tous les endroits où ces données peuvent circuler. Les trois destinations s'achètent.

## Baidu a écrit les destinations, et elles sont au nombre de trois

> 在BMC接入的商品数据，可用于搜索/信息流动态商品广告的投放和阿拉丁推广。
>
> Les données produit connectées via BMC peuvent servir à la diffusion d'annonces produit dynamiques en recherche et dans le fil, ainsi qu'à la promotion Aladdin.
>
> *Source : Baidu Marketing Academy, FAQ produit*

Construite comme une liste et non comme un exemple, elle nomme trois choses : annonces produit dynamiques en recherche, annonces produit dynamiques dans le fil, promotion Aladdin. Baidu Merchant Center (百度商品中心, Bǎidù Shāngpǐn Zhōngxīn) détient les données, et cette phrase en constitue le manifeste d'expédition. Rien sur ce manifeste ne va ailleurs que dans un système publicitaire. Il s'agit aussi d'un texte ancien, de la dernière période où la documentation BMC était mise à jour. Dites-le avant qu'un prestataire ne vous le dise.

## Les trois destinations, et ce qu'implique l'achat de chacune

Les annonces produit dynamiques en recherche, DPA dans toutes les présentations Baidu qu'on vous montrera, sont celles que l'on imagine. Un internaute cherche, Baidu confronte la requête à votre catalogue, et l'annonce s'assemble à partir du titre, de l'image et du prix contenus dans l'enregistrement. Personne n'écrit de créations produit par produit. Le flux est la création, et c'est tout l'attrait du format.

Le DPA fil fait tourner la même mécanique contre le fil de contenu de Baidu plutôt que contre une requête, et le détail qui piège les équipes est administratif. La documentation de Baidu le place sur le même compte et la même réserve de fonds (相同的账户及资金池, xiāngtóng de zhànghù jí zījīnchí) que le compte publicitaire natif : aucun portefeuille distinct à ouvrir, rien de nouveau à faire approuver. L'argent se trouve dans un budget de publicité native que quelqu'un a déjà validé, ou il n'existe pas.

C'est sur Aladdin que trébuchent les résumés anglophones. Les emplacements Aladdin sont les blocs enrichis au-dessus des liens bleus d'une page de résultats Baidu, et Baidu opère bien un programme de cartes non payantes, décrit plus bas. L'Aladdin de la phrase de Baidu n'est pas celui-là. Baidu a écrit promotion Aladdin (阿拉丁推广, Ālādīng tuīguǎng), et promotion (推广, tuīguǎng) désigne chez lui ce qui s'achète. Perdez la moitié de cette expression à la traduction, comme l'ont fait bien des guides, et une ligne média entre dans le plan sous l'étiquette placement gratuit.

## Nous avons cherché la voie organique à quatre endroits

Une voie organique devrait bien se trouver quelque part. Nous avons contrôlé les quatre candidats qui reviennent chez les clients.

Commençons par l'outil vers lequel tout le monde est orienté. L'outil de données structurées de Baidu (结构化数据工具, jiégòuhuà shùjù gōngjù) a été lancé en juillet 2013 avec quatre types pris en charge : questions-réponses générales, documents en ligne, téléchargements de fichiers, téléchargements de logiciels. Les produits n'en ont jamais fait partie, et l'outil ne s'est de toute façon jamais ouvert au public.

> 结构化数据目前尚未完全开放，我们会主动邀请优质的网站提交数据。
>
> Les données structurées ne sont pas encore entièrement ouvertes. Nous inviterons de nous-mêmes les sites de qualité à soumettre des données.
>
> *Source : Baidu Search Resource Platform, annonce de l'outil de données structurées, juillet 2013*

Son URL renvoie désormais une erreur serveur.

Plus parlante encore : la liste des outils actifs, dont la lecture intégrale constitue le contrôle que la plupart des gens sautent. La Search Resource Platform de Baidu est bien fournie : soumission, diagnostic de crawl, test de robots, volume d'index, trafic et mots-clés, refonte de site, adaptation mobile. Aucun outil de données structurées n'y survit, et rien n'y touche aux produits. Il n'existe aucun type d'objet produit, donc pas même un formulaire à remplir de travers.

OpenCard mérite un examen honnête, car il s'agit d'un canal organique actif qui fait presque exactement ce qu'un distributeur souhaiterait. Vous hébergez un webhook, Baidu vous envoie une intention normalisée en JSON au moment de la requête, et vos données reviennent sous forme de carte enrichie dans les résultats non payants, sans exploration ni indexation. OpenCard succède aux anciennes cartes Aladdin. Derrière lui, il faut un mini-programme intelligent (智能小程序, zhìnéng xiǎochéngxù), et c'est là que la règle d'éligibilité nomme le commerce de détail et referme la porte.

> 小程序主面向C端用户，且不属于医疗、资讯、招聘、购物平台等类目
>
> Le mini-programme doit s'adresser aux consommateurs et ne doit pas relever de catégories telles que la santé, l'actualité, le recrutement ou les plateformes d'achat.
>
> *Source : Baidu, documentation d'éligibilité OpenCard*

Cette exclusion figure dans la règle d'éligibilité, en amont de la liste de catégories, qui compte environ 120 entrées : voyage, finance, divertissement, services publics, outils, éducation, immobilier, véhicules, jeux, animaux, astrologie. Le commerce de détail n'y est pas, ni rien qui ressemble à une fiche produit.

Reste la plateforme ouverte de transactions de Baidu, sur dianshang.baidu.com, qui répond encore et resurgit donc dans les recherches. Son contenu promeut Xiongzhang ID (熊掌号, Xióngzhǎng Hào), fermé en mars 2020, et Nuomi, disparu lui aussi. Une page qui vend deux produits morts est une page que personne n'a ouverte depuis des années. Quatre candidats, aucun ouvert à un distributeur.

## Baidu n'a jamais dit non, et cela change la façon d'argumenter

Baidu n'a jamais publié de phrase affirmant que les données de flux produit ne peuvent pas apparaître dans les résultats organiques. Aucune annonce en ce sens, rien dans les pages d'aide. Ce qui existe, c'est une liste de trois destinations payantes, quatre portes fermées, et du silence entre les deux.

L'affirmation défendable est donc l'affirmation étroite. Il n'existe pas de voie organique documentée pour les données de flux marchand chez Baidu. Ce n'est pas la même chose qu'une impossibilité prouvée, et la nuance vous protège quand vous contestez. Dites à un prestataire que c'est impossible et vous avez ouvert un débat que vous ne pouvez pas conclure. Demandez à voir la documentation et le débat est clos.

## Si vous cherchez de la découverte plutôt que du média, deux choses fonctionnent

La demande n'a jamais été le problème.

> La Chine comptait 937 millions d'acheteurs en ligne en décembre 2025, soit 83,2 % de ses 1,125 milliard d'internautes.
>
> *Source : China Internet Network Information Center, 57e rapport statistique, 17 mars 2026*

Le flux n'était simplement pas la route pour y accéder. Deux autres le sont.

La première vaut pour tout le monde et relève du travail ingrat. Amenez Baidu à explorer et indexer vos pages produit en tant que pages : site vérifié dans la Search Resource Platform, numéro ICP dans les attributs du site, HTML rendu côté serveur que Baiduspider sait lire, URL poussées par l'API. Chaque étape a son article dans ce guide, de [la vérification du site](/fr/ressources/guide-web-chine/verification-site-baidu/) à [l'envoi des URL par l'API](/fr/ressources/guide-web-chine/soumettre-urls-baidu/). Plus lent que de téléverser un tableur, et c'est la seule voie non payante que Baidu documente pour des pages commerciales.

La seconde dépend de qui vous achète. S'il s'agit d'un acheteur professionnel plutôt que d'un consommateur, Baidu Aicaigou (百度爱采购, Bǎidù Àicǎigòu) est la verticale B2B dont les fiches fournisseurs occupent les premières positions sur les requêtes à intention commerciale.

> Baidu Aicaigou a mis en relation plus de 13 millions d'opportunités commerciales en une seule année et accumulé plus de 200 millions de contenus sur la plateforme.
>
> *Source : 南方都市报, 14 juin 2023*

L'adhésion est annoncée à 6 980 yuans par an pour l'offre standard et doit s'acheter auprès d'un prestataire agréé (服务商, fúwùshāng), avec [un article dédié dans ce guide](/fr/ressources/guide-web-chine/baidu-aicaigou-b2b/) pour le reste. Pour un fabricant de composants, ce budget travaille souvent mieux là que dans une campagne DPA, et rien de tout cela ne passe par BMC. Pour le commerce de détail grand public, ce n'est pas la bonne forme.

La déclaration de Baidu sur les destinations est un texte ancien : cherchez une FAQ produit plus récente avant de la citer dans une présentation client.
