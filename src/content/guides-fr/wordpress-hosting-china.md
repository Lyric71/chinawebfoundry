---
title: "Hébergement WordPress en Chine"
subtitle: "Les trois grands clouds chinois proposent tous une image WordPress en un clic. Aucun ne propose de WordPress infogéré, et c'est dans cet écart que les projets étrangers s'enlisent."
summary: "Héberger WordPress en Chine continentale : Alibaba, Tencent, Huawei, Vercel et Cloudflare face à la règle du dépôt ICP, mesures à l'appui."
visual: "/images/guides/wordpress-hosting-china.webp"
order: 32
published: true
publishedAt: 2026-08-29
updatedAt: 2026-10-02
reviewBy: 2026-12-29
category: Hosting
---

Un serveur situé en Chine continentale n'affichera votre site WordPress à personne tant que son dépôt ICP (ICP备案) n'a pas abouti. Sur chacun de nos projets, les ports 80 et 443 de l'adresse publique sont restés fermés jusqu'au jour de la validation. Impossible, donc, d'ouvrir le site en douceur.

Tout le reste en découle : quel cloud retenir, quel compte ouvrir, et s'il faut une société chinoise avant de transférer le moindre fichier.

La suite de ce guide part de ce principe. Notre guide sur [l'hébergement d'un site web en Chine](/fr/ressources/guide-web-chine/heberger-site-web-chine/) dresse le tableau d'ensemble des serveurs et de la latence, et [WordPress en Chine](/fr/wordpress-en-chine/) explique comment nous menons les projets sur cette stack.

## Ce que nous avons mesuré sur l'hébergement continental

Les chiffres qui suivent sont les nôtres. Ils proviennent de sites clients que nous avons migrés en Chine ou que nous y hébergeons. Aucun tiers ne les a mesurés : à savoir avant de leur accorder du poids.

> Sur un site WordPress que nous avons migré, le temps de chargement médian est passé de 23,4 secondes sur une origine européenne à 1,2 seconde sur une origine continentale. Près de la moitié du gain tient à la suppression d'appels externes.
> Source : ChinaWebFoundry, publié le 29 août 2026. https://www.chinawebfoundry.com/resources/china-web-guide/is-wordpress-blocked-in-china/

> Sur une période de 90 jours, un site client hébergé sur le continent a affiché une disponibilité de 99,98 %, avec des temps de réponse médians de 48 ms depuis Pékin, 36 ms depuis Shanghai et 61 ms depuis Canton.
> Source : ChinaWebFoundry, publié le 29 août 2026. https://www.chinawebfoundry.com/website-in-china/

À chacun de ces chiffres manque encore une condition que nous exigerions de tout autre banc d'essai. Le tableau indique laquelle, ligne par ligne.

| Chiffre | Ce qu'il mesure | Point de mesure | Période | Reste à publier |
| --- | --- | --- | --- | --- |
| 23,4 s à 1,2 s | Chargement médian, avant et après la migration | Chine continentale | Avant et après la migration | Ville, opérateur, dates des tests |
| 99,98 % | Disponibilité d'un site hébergé sur le continent | Non publié | 90 jours | Lieu de supervision, dates de début et de fin |
| 48 ms | Temps de réponse médian | Pékin | Les mêmes 90 jours | Opérateur |
| 36 ms | Temps de réponse médian | Shanghai | Les mêmes 90 jours | Opérateur |
| 61 ms | Temps de réponse médian | Canton | Les mêmes 90 jours | Opérateur |

Les conditions manquantes paraîtront dans les études de cas en cours de rédaction.

## Six options d'hébergement comparées

Ce sont les six options sur lesquelles les équipes étrangères nous interrogent le plus souvent. Chaque ligne indique la contrainte décisive et renvoie à la page de l'éditeur concerné. Nous les avons toutes vérifiées le 29 septembre 2026 et referons l'exercice chaque trimestre.

| Option | Serveurs sur le continent | Dépôt ICP | Compte et entité | Date de la page éditeur |
| --- | --- | --- | --- | --- |
| Alibaba Cloud (阿里云), site chinois, aliyun.com | Oui | Via Alibaba, sur un serveur continental souscrit pour 3 mois au moins | Compte aliyun.com ; entreprise immatriculée sur le continent ou résident du continent | Centre d'aide, 20 août et 24 septembre 2026 |
| Alibaba Cloud, site international, alibabacloud.com | Inutilisables pour un site déposé | Non pris en charge sur ce type de compte | Ouvrir un compte aliyun.com à la place | Centre d'aide, 20 août 2026 |
| Tencent Cloud (腾讯云) | Oui | Via Tencent, sur un serveur continental ; Lighthouse souscrit pour 90 jours au moins | Une seule entité déclarante par compte | Documentation, 30 janvier et 23 septembre 2026 |
| Huawei Cloud (华为云) | Oui | Via Huawei, sur un « serveur de dépôt » continental souscrit pour 3 mois au moins | Compte Chine continentale obligatoire ; les comptes internationaux ne peuvent pas déposer | Help Center, juillet et août 2024 |
| Vercel | Aucun | Non proposé. Une copie locale exige un hébergement continental et son propre dépôt | Sans objet chez Vercel | Base de connaissances, 11 septembre 2026 |
| Cloudflare | Uniquement via le China Network, exploité par JD Cloud | Un dépôt ou une licence valide par domaine racine | Offre Enterprise ; examen préalable du contenu par JD Cloud | Documentation développeurs, avril 2026 |

Pour un site WordPress appelé à vivre sur le continent, le choix réel se résume aux première, troisième et quatrième lignes.

## Aucune offre WordPress infogérée en Chine continentale

Il n'existe ni WP Engine, ni Kinsta, ni Flywheel sur le continent. Nous avons passé en revue les gammes d'Alibaba Cloud (阿里云), de Tencent Cloud (腾讯云) et de Huawei Cloud (华为云). Aucun ne commercialise d'offre WordPress qui installe les correctifs à votre place ou traite un ticket portant sur une extension.

Ce que tous trois proposent, c'est une image WordPress installable en un clic sur un serveur virtuel d'entrée de gamme.

| Fournisseur | Produit | Ce que l'image installe | Mise à jour de la page éditeur |
| --- | --- | --- | --- |
| Alibaba Cloud | Simple Application Server (轻量应用服务器) | Une image applicative WordPress préconfigurée | 19 août 2026 |
| Tencent Cloud | Lighthouse (轻量应用服务器) | WordPress avec Nginx, MariaDB et le panneau Linux Baota (宝塔) | 22 septembre 2026 |
| Huawei Cloud | FlexusL (Flexus应用服务器L实例) | Ubuntu 24.04 sous Docker, avec Nginx, MySQL et phpMyAdmin | 21 septembre 2026 |

Revenez à la troisième colonne. Chaque ligne décrit un système d'exploitation avec WordPress préinstallé. Mises à jour et sauvegardes restent à votre charge, comme la préproduction, et il vous revient de trouver quelqu'un capable de démêler un conflit d'extensions.

Quelqu'un chez vous assurera donc l'administration système tous les mois, pendant toute la vie du site. La charge est permanente : inscrivez-la au budget dès le cadrage.

## Rien ne sort tant que le dépôt n'a pas abouti

Alibaba Cloud comme Tencent Cloud écrivent la règle noir sur blanc dans leur documentation.

> En vertu des règles du ministère de l'Industrie et des Technologies de l'information (工信部), un domaine résolu vers un serveur situé en Chine continentale doit avoir achevé son dépôt avant que l'accès au site puisse être ouvert.
> Source : centre d'aide d'Alibaba Cloud (阿里云), mis à jour le 4 septembre 2026. https://help.aliyun.com/zh/dws/support/how-do-i-troubleshoot-the-failures-to-access-a-website-by-using-its-domain-name

> Un domaine résolu vers des ressources de Tencent Cloud en Chine continentale doit d'abord faire l'objet d'un dépôt ICP, faute de quoi il est intercepté par le système de Tencent Cloud chargé de repérer les domaines non déposés.
> Source : documentation de Tencent Cloud (腾讯云), mise à jour le 28 septembre 2026. https://cloud.tencent.com/document/product/243/19630

La précision sur les ports vient de nous : sur nos projets, cette interception ferme les ports 80 et 443. Impossible de montrer au client un lien de préproduction sur le serveur de production, impossible de mener une bêta discrète pendant que le dossier avance.

> La vérification propre à Alibaba Cloud prend 1 à 2 jours ouvrés. L'examen de l'administration provinciale des communications (省级通信管理局) qui suit demande en général 1 à 20 jours ouvrés, et le site doit effectuer sa déclaration auprès de la sécurité publique (公安备案) dans les 30 jours suivant sa mise en ligne.
> Source : centre d'aide d'Alibaba Cloud (阿里云), présentation de la procédure de dépôt ICP, mise à jour le 26 août 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview

Soit 22 jours ouvrés au plus sur le papier. Mais réunir les pièces prend du temps, et les dossiers reviennent pour correction : nous tablons donc sur trois à six semaines, à condition que l'entité continentale existe déjà. Notre [guide du dépôt ICP](/fr/ressources/guide-web-chine/licence-icp-entreprises-etrangeres/) détaille les documents requis et l'ordre dans lequel les présenter.

La licence ICP commerciale (ICP许可证) relève d'une autre logique. Elle s'impose dès que le site gagne lui-même de l'argent : commerce en ligne, contenus payants, logiciels payants, publicité.

> L'administration des communications de Shanghai (上海市通信管理局) s'engage à statuer sur une licence de télécommunications à valeur ajoutée dans les 60 jours suivant l'acceptation de la demande.
> Source : administration des communications de Shanghai, guide des démarches, juin 2015. https://shca.miit.gov.cn/bsfw/bszn/dxsc/blcx/art/2020/art_7426922df3754a189aaf4278ff0c7b1d.html

Le délai court à compter de l'acceptation, laquelle suppose un dossier complet. Pour cette licence, nous comptons douze à dix-huit semaines.

Reste la question du capital étranger, que toute licence soulève.

> Un dispositif pilote lancé en 2024 lève le plafond de participation étrangère sur certaines catégories de licences, dont le traitement de données en ligne et les plateformes de publication d'informations, dans une partie de Pékin, de Shanghai, de Hainan et de Shenzhen. L'information, l'édition, l'audiovisuel et les services culturels en ligne en sont exclus.
> Source : ministère de l'Industrie et des Technologies de l'information (工业和信息化部), avis du 8 avril 2024. https://www.gov.cn/zhengce/zhengceku/202404/content_6944441.htm

Le dépôt ICP est établi au nom d'une entreprise immatriculée sur le continent, ou d'un résident pour un site personnel. Une société étrangère ne peut pas déposer en direct, et aucun budget d'hébergement ne tiendra lieu d'entité.

## Ce compte cloud qui ne peut pas héberger votre site

Alibaba exploite deux sites à l'image de marque presque identique : alibabacloud.com, le site international, et aliyun.com, le site chinois. Seul le second permet le dépôt.

> Les comptes du site international d'Alibaba Cloud (alibabacloud.com) ne prennent pas en charge les demandes de dépôt ICP, ni pour un site web ni pour une application. Le dépôt exige un compte sur le site chinois (aliyun.com), et l'entité déclarante doit être une entreprise immatriculée en Chine continentale ou un résident du continent.
> Source : centre d'aide d'Alibaba Cloud (阿里云), mis à jour le 20 août 2026. https://help.aliyun.com/en/icp-filing/basic-icp-service/product-overview/icp-filing-application-for-enterprises-outside-the-chinese-mainland

> Le dépôt porte sur un serveur Alibaba Cloud situé en Chine continentale : une instance ECS ou un Simple Application Server, souscrit pour 3 mois au moins.
> Source : centre d'aide d'Alibaba Cloud (阿里云), mis à jour le 24 septembre 2026. https://help.aliyun.com/en/icp-filing/basic-icp-service/user-guide/icp-filing-server-access-information-check

L'inscription la plus naturelle, sur le site anglophone que le moteur de recherche affiche en premier, débouche donc sur un compte incapable de déposer le site en construction. Qui est passé par là une fois le sait par cœur. Les néophytes y perdent des semaines. En général, ils s'en rendent compte le jour où quelqu'un cherche l'écran de dépôt sans le trouver, quand le serveur est déjà payé et la date de lancement arrêtée.

Huawei Cloud (华为云) pratique la même séparation, presque dans les mêmes termes.

> Les comptes du site international de Huawei Cloud ne prennent pas en charge le dépôt ICP. Il faut un compte Huawei Cloud de Chine continentale, avec un serveur de dépôt situé sur le continent et souscrit pour trois mois au moins.
> Source : Help Center de Huawei Cloud (华为云), mis à jour le 17 juillet 2024 et le 20 août 2024. https://support.huaweicloud.com/intl/en-us/prepare-icp/icp_02_0047.html et https://support.huaweicloud.com/intl/en-us/prepare-icp/icp_02_0003.html

Chez Tencent Cloud (腾讯云), la règle écrite concerne le serveur. Les pages consultées restent muettes sur les comptes internationaux, dans un sens comme dans l'autre : nous n'en dirons donc rien.

> Une instance Lighthouse située dans une région continentale est éligible au dépôt ICP à condition d'être souscrite pour 90 jours au moins et de conserver 30 jours de validité minimum pendant l'examen du dossier.
> Source : documentation de Tencent Cloud (腾讯云), mise à jour le 23 septembre 2026. https://cloud.tencent.com/document/product/1207/45756

## Hong Kong, et le prix réel du raccourci

Un hébergement à Hong Kong n'exige aucun dépôt ICP. C'est tout son intérêt, et c'est un choix défendable dans deux cas : vous n'avez pas encore d'entité continentale, ou il vous faut quelque chose en ligne avant l'aboutissement du dossier.

Reste à nommer précisément ce que vous abandonnez.

La latence se dégrade nettement depuis le nord et l'ouest de la Chine par rapport à une origine continentale, parce que le trafic traverse toujours la frontière. Les performances varient selon l'heure et selon l'opérateur, si bien que la mesure prise un mardi matin ne dit pas grand-chose du vendredi soir.

Traitez Hong Kong comme une passerelle. Si la Chine compte commercialement, budgétez l'entité et le dépôt, faites tourner Hong Kong en attendant, et fixez une date de bascule avant que quelqu'un ne vous la fixe à votre place.

## Vercel, Cloudflare et les points de présence à l'étranger

Un CDN mondial place des copies de vos pages plus près de vos visiteurs, à Hong Kong ou à Tokyo, ce qui aide. Les hôtes bloqués que la page appelle elle-même, en revanche, restent bloqués.

La question de Vercel se pose aussi, tant de sites Astro et Next.js y sont hébergés. Sa base de connaissances y répond sans ambiguïté.

> « Vercel n'a ni serveurs ni nœuds CDN en Chine continentale » et « Vercel ne peut garantir ni la disponibilité ni les performances en Chine continentale ». Les contrôles réseau chinois peuvent bloquer ou brider ses sous-domaines .vercel.app.
> Source : base de connaissances de Vercel, publiée le 3 novembre 2025, mise à jour le 11 septembre 2026. https://vercel.com/kb/guide/accessing-vercel-hosted-sites-from-mainland-china

> Selon GreatFire, https://vercel.app est bloqué en Chine continentale à chacun de ses 4 derniers tests concluants, le plus récent datant du 14 septembre 2026. Sur 157 URL testées sous ce domaine, 154 apparaissent bloquées.
> Source : GreatFire, septembre 2026. https://en.greatfire.org/https/vercel.app

Vercel recommande lui-même un domaine personnalisé plutôt que .vercel.app, des polices et un outil d'analyse auto-hébergés et, pour un site qui doit tenir ses performances en Chine, une copie distincte sur une infrastructure continentale, dotée de son propre dépôt ou de sa propre licence ICP. Cette dernière option revient à exploiter un second site, sur l'un des trois clouds continentaux évoqués plus haut ou chez un autre hébergeur du continent.

Les offres standard et gratuite de Cloudflare servent les visiteurs continentaux depuis des points de présence situés hors du continent. Le réseau implanté dans le pays est un produit à part.

> Le Cloudflare China Network est un abonnement distinct réservé aux clients Enterprise, exploité dans des centres de données du continent par JD Cloud, partenaire de Cloudflare. Chaque domaine racine doit disposer d'un dépôt ou d'une licence ICP valide, et JD Cloud examine le contenu de chaque domaine avant d'activer le réseau.
> Source : documentation développeurs de Cloudflare, mise à jour le 30 avril 2026. https://developers.cloudflare.com/china-network/

Pour un site hébergé sur le continent, la réponse la plus simple reste en général le CDN domestique rattaché au cloud qui vous héberge. Il s'appuie sur le dépôt déjà obtenu et garde toute la chaîne chez un seul fournisseur.

## Maintenir WordPress à jour depuis un serveur continental

WordPress sur un serveur continental pose un problème de maintenance qu'il ne pose nulle part ailleurs.

Le dépôt d'extensions, le dépôt de thèmes et les serveurs de mise à jour du cœur répondent bien depuis la Chine. Ils limitent aussi le débit des plages d'adresses IP continentales avec zèle, renvoyant des HTTP 429 assez souvent pour qu'un site reste des semaines sans correctif. Le tableau de bord n'en dit rien. Il cesse simplement de proposer des mises à jour, et le site décroche en silence.

Trois parades tiennent la route : les miroirs domestiques, un processus de mise à jour exécuté depuis l'étranger sur une copie de préproduction, ou un contrat de maintenance où une personne nommée répond du niveau de correctifs. Choisissez délibérément. Ne rien choisir reste une option, et elle se termine par un site non corrigé exposé à l'internet ouvert.

## Ce que cela coûte

Le serveur est la partie bon marché. Les images en un clic tournent sur les serveurs d'entrée de gamme de chaque cloud.

La vraie dépense est ailleurs. L'entité continentale doit être créée ou entretenue, et la préparation du dossier comme la vérification engloutissent des heures de travail. Une fois le site lancé, une personne désignée se connecte chaque mois à la console du cloud pour appliquer les mises à jour et lancer les sauvegardes.

Les équipes qui ne chiffrent que la ligne « serveur » sont celles qui renégocient le périmètre au quatrième mois.

## Choisir entre les scénarios

| Situation | Où héberger | Formalité requise |
| --- | --- | --- |
| Pas d'entité continentale, lancement immédiat | Hong Kong | Aucune |
| Entité continentale, site vitrine | Alibaba, Tencent ou Huawei, continent | Dépôt ICP, 3 à 6 semaines |
| Entité continentale, revenus sur le site | Continent, plus des moyens de paiement domestiques | Licence ICP commerciale, 12 à 18 semaines |
| Site mondial, audience chinoise réduite, pas d'entité | Garder l'origine à l'étranger, corriger d'abord les dépendances | Aucune |

C'est la dernière ligne qu'on saute le plus souvent, et c'est fréquemment la bonne réponse. Si la Chine pèse 3 % de votre trafic et qu'aucune entité n'est en vue, retirer les dépendances bloquées du site que vous avez déjà récupère l'essentiel de la vitesse disponible pour une fraction du coût d'un déploiement continental.

## Questions fréquentes

**Peut-on garder son hébergeur actuel et se contenter d'ajouter un CDN chinois ?**
Seulement si le fournisseur dispose de points de présence sur le continent, ce qui suppose un domaine déposé. Sans dépôt, vous achetez un point de présence étranger avec un nom chinois dessus.

**Combien coûte un hébergement WordPress sur le continent ?**
Le serveur est le poste le plus modeste. Ce qui pèse, c'est l'entité et le travail de dépôt, puis, une fois le site lancé, la personne qui s'occupe du serveur.

**Le domaine doit-il obligatoirement être en .cn ?**
Non. Un .com peut être déposé. Un .com déposé sur un serveur continental est le montage courant et il fonctionne.

**Que se passe-t-il si l'on héberge en Chine sans dépôt ?**
Les ports restent fermés et le site ne sort pas. L'hébergeur applique la règle au niveau réseau. Aucun régulateur n'a besoin de vous découvrir.

**Pouvez-vous déposer l'ICP pour nous ?**
Nous pilotons le dépôt au nom de l'entité continentale du client : constitution du dossier, vérification d'identité réelle, soumission auprès de l'hébergeur, relances. Nous ne pouvons pas déposer pour une société sans entité, et personne d'autre ne le peut.

Vous hésitez entre un déploiement continental et le statu quo à l'étranger ? Dites-nous où vous en êtes sur l'entité et quelle part de votre trafic est chinoise, nous reviendrons vers vous avec le scénario adapté. Il arrive que ce scénario consiste à laisser votre origine exactement là où elle est.
