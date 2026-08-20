---
title: "Données structurées Baidu : ce qui fonctionne encore"
subtitle: "Le balisage part au premier sprint. JSON-LD dans le head, Organization, BreadcrumbList et Product, le même bloc que sur tous les sites que l'équipe construit. Puis quelqu'un demande comment vérifier que Baidu l'a bien lu, et la salle se tait. Il n'existe aucun rapport à ouvrir."
summary: "Baidu n'a jamais publié de spécification schema.org ni de validateur. Ce qui est mort, comment fonctionne réellement OpenCard, et quel balisage reste malgré tout utile."
visual: "/images/guides/baidu-structured-data.webp"
order: 16
published: true
publishedAt: 2026-08-12
updatedAt: 2026-08-12
category: Search
---

Baidu n'a jamais publié de spécification schema.org. Aucun type pris en charge, aucun validateur, aucun rapport dans son outillage pour webmasters. L'outil qu'il avait construit est cassé depuis des années. Un canal actif fera entrer vos données dans un résultat organique, et il ne ressemble en rien à du balisage. La plupart des entreprises qui lisent ces lignes ne peuvent pas y accéder, ce qui laisse entière la question de ce qu'il faut livrer.

## Baidu a construit un outil de données structurées, une fois, en 2013

Baidu a annoncé son outil de données structurées (结构化数据工具, jiégòuhuà shùjù gōngjù) le 25 juillet 2013, à une adresse schema de la plateforme pour webmasters. Il acceptait quatre types de contenu et seulement quatre : questions-réponses générales (通用问答, tōngyòng wèndá), documents en ligne (在线文档, zàixiàn wéndàng), téléchargements de fichiers (资料下载, zīliào xiàzài) et téléchargements de logiciels (软件下载, ruǎnjiàn xiàzài).

Les produits n'ont jamais figuré sur cette liste. Ni dépréciés plus tard, ni discrètement retirés : simplement jamais inclus, et cela relève du motif récurrent plutôt que de l'oubli.

L'outil fonctionnait sur invitation dès son lancement.

> 结构化数据目前尚未完全开放，我们会主动邀请优质的网站提交数据。
>
> Les données structurées ne sont pas encore entièrement ouvertes. Nous inviterons de nous-mêmes les sites de qualité à soumettre des données.
>
> *Source : Baidu Search Resource Platform, annonce de l'outil de données structurées, juillet 2013*

Il ne s'est jamais ouvert à la soumission générale. L'URL renvoie aujourd'hui une erreur serveur, pas un 404 ni une redirection vers un successeur. Une page d'erreur, c'est l'allure d'un service que personne n'a été payé pour éteindre proprement.

## Baidu n'a jamais dit si le balisage servait à quelque chose

L'outil mort n'est que la moitié de l'affaire. Vous entendrez deux réponses assurées sur le balisage chez Baidu, et les deux sont fausses. Baidu n'a pas dit qu'il lisait schema.org. Il n'a jamais dit non plus qu'il l'ignorait. Aucune documentation dans un sens ni dans l'autre, et le silence constitue le résultat.

Cela pèse davantage qu'il n'y paraît, car cela supprime la boucle de débogage qu'attend un développeur. Chez Google, vous écrivez du balisage, vous lancez un test, vous lisez un rapport, vous corrigez ce qu'il signale. Chez Baidu, aucune de ces étapes n'existe.

Un produit continue de brouiller les cartes. Baidu vend bien quelque chose portant Schema dans son nom, l'outillage de schéma de graphe de connaissances (知识图谱Schema, zhīshi túpǔ Schema) sur son site dédié à l'IA. Il s'agit d'une interface de modélisation pour bâtir votre propre graphe de connaissances dans le cloud IA de Baidu, sans rapport avec le balisage de recherche ni avec vos pages. On la cite encore dans des articles anglophones comme preuve que Baidu prend en charge les données structurées, et nous avons dû ramener des clients en arrière plus d'une fois.

## Les résultats enrichis de la page ne viennent pas de votre balisage

Regardez une page de résultats Baidu : elle déborde de cartes et de réponses générées. On en déduit raisonnablement qu'une partie se gagne par le balisage.

> Environ 70 % des pages de résultats mobiles de Baidu contenaient du contenu généré par IA en octobre 2025.
>
> *Source : Baidu Inc., résultats du troisième trimestre 2025, 18 novembre 2025*

Baidu a bâti tout cela du côté réponses du moteur pendant que sa documentation sur les données structurées dormait, inchangée depuis 2013. Une bonne part de ce que vous voyez est payante, et une autre part appartient aux propriétés de Baidu lui-même. Les cartes enrichies organiques passent par OpenCard, qui a pris la suite des anciennes cartes Aladdin. C'est la seule voie organique active entre vos données et la page de résultats.

## OpenCard vous interroge au moment de la requête au lieu de vous explorer

OpenCard fonctionne à l'envers de presque tout ce qu'a construit un développeur formé chez Google.

Vous montez un webhook et vous l'enregistrez. Un internaute lance une recherche. Si Baidu décide que votre service constitue la bonne réponse, et cette décision lui appartient entièrement, il traduit la requête en une intention normalisée exprimée en JSON et la poste sur votre point d'entrée. Votre système répond avec des données, et Baidu affiche cette réponse sous forme de carte enrichie dans les résultats organiques.

Aucune exploration n'intervient là-dedans, et rien n'est indexé. Les données n'ont même pas besoin de vivre sur une page publique. Ce qui s'affiche correspond à ce que votre service a renvoyé au moment où quelqu'un a posé la question, ce qui avantage tout ce qu'un instantané exploré rendrait faux.

Ce à quoi vous souscrivez, c'est donc un service de production disponible en permanence. Le scénario d'échec, c'est une carte qui disparaît l'après-midi où votre point d'entrée a des ennuis.

## La plupart des entreprises qui lisent ceci sont inéligibles par catégorie

OpenCard n'est pas un produit autonome. Il tourne au-dessus des mini-programmes intelligents de Baidu (百度智能小程序, Bǎidù zhìnéng xiǎochéngxù), et le mini-programme constitue donc le ticket d'entrée. C'est un vrai développement, contre une plateforme que Baidu a dépriorisée depuis des années.

L'éligibilité resserre encore l'étau.

> 小程序主面向C端用户，且不属于医疗、资讯、招聘、购物平台等类目
>
> Le mini-programme doit s'adresser principalement aux consommateurs et ne doit pas relever de catégories telles que la santé, l'actualité, le recrutement ou les plateformes d'achat.
>
> *Source : Baidu, documentation d'éligibilité OpenCard*

Les plateformes d'achat sont exclues nommément, avec la santé, l'actualité et le recrutement. La liste de catégories publiée par Baidu compte environ 120 entrées : voyage, finance, divertissement, services publics, services aux collectivités, éducation, immobilier, véhicules, jeux, animaux, et même astrologie. Aucune carte commerce de détail, aucune carte fiche produit.

Entre les exclusions nommées et la carte commerce absente, cela couvre la plupart des entreprises étrangères qui lisent ce guide, et la conclusion consiste à cesser de cadrer un mini-programme pour une carte que vous n'alliez jamais obtenir. Exploitez un groupe hôtelier, une compagnie aérienne ou une application grand public dans une catégorie active, et le calcul change. Le mini-programme devient alors un débat qui mérite d'être mené.

Mettez les deux extrémités de la chronologie côte à côte. L'outil de 2013 de Baidu n'a jamais couvert les produits. Treize ans plus tard, le canal actif exclut nommément les plateformes d'achat. Les données produit passent par le compte publicitaire, ce dont traite l'article sur Baidu Merchant Center, et chaque débouché documenté est payant.

## Livrez le balisage, puis retirez-le de la feuille de route Baidu

Que livre donc une équipe lundi matin ? Du balisage schema.org propre, comme partout ailleurs. Sur une stack moderne, le coût s'arrondit à zéro, et il gagne sa place sur Google et Bing quoi qu'en fasse Baidu. Nous plaçons le bloc dans le template de base, nous le vérifions une fois et nous passons à autre chose. Un balisage bien formé accompagne aussi généralement un HTML bien formé, ce dont Baiduspider a réellement besoin.

Ne l'inscrivez simplement pas comme livrable Baidu. Rien ne le valide et aucune surface de Baidu ne confirmera qu'il a changé quoi que ce soit : une proposition qui facture le balisage en ligne SEO Baidu vous vend un résultat que personne ne peut mesurer.

Les leviers qui font réellement bouger les résultats Baidu sont plus ternes, et ils sont documentés. Baiduspider doit atteindre le site depuis la Chine continentale. Les pages doivent servir du vrai HTML et non une coquille JavaScript. Les URL passent par le point d'entrée API, le numéro ICP va dans les attributs du site, et le volume d'index se lit au lieu de se deviner. D'autres articles d'ici traitent chacun de ces points.

Les listes de catégories OpenCard changent discrètement : recontrôlez l'éligibilité avant de cadrer un mini-programme.
