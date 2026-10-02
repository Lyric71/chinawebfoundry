# T6-03 deep-translate, FR, pass 1 (full native rewrite from scratch)

Register: Les Echos, vouvoiement, as the live page. English replacement copy
used for facts only. Scope: changes 1, 4 to 10 and every table string. The
page's established term "dépôt ICP" is kept for consistency (TRANSLATION-RULES
1.3.4). Site convention: Guangzhou = Canton. Straight apostrophes, as the live
file. Non-breaking spaces applied after pass 3 by fr-typography.mjs.

## Change 1, summary

before: Ce que vendent réellement Alibaba, Tencent et Huawei, le dépôt ICP qui conditionne le moindre serveur continental, le détour par Hong Kong et ce problème de mises à jour que personne ne budgète.
after: Alibaba, Tencent, Huawei, Vercel et Cloudflare comparés pour héberger WordPress en Chine continentale, avec la règle du dépôt ICP et nos propres mesures.
why: the live summary described a page without figures and ran 197 characters; rebuilt on the new scope.

## Change 2, updatedAt

2026-08-29 -> 2026-10-02 (date, not translated)

## Change 3, reviewBy

inserted: reviewBy: 2026-12-29 (date, not translated)

## Change 4, introduction

before: Il n'existe pas de WP Engine en Chine. [...] voir [WordPress en Chine](/fr/wordpress-en-chine/).
after:

Un serveur situé en Chine continentale n'affichera votre site WordPress à personne tant que son dépôt ICP (ICP备案) n'a pas abouti. Sur tous les projets que nous avons menés, les ports 80 et 443 sont restés fermés sur l'adresse publique du serveur jusqu'au jour de la validation. Il n'y a pas de lancement en douceur.

Cette règle commande tout le reste. Elle détermine le cloud et le compte à ouvrir, et s'il vous faut une société chinoise avant de transférer le moindre fichier.

Tout ce qui suit en découle. Notre guide sur [l'hébergement d'un site web en Chine](/fr/ressources/guide-web-chine/heberger-site-web-chine/) dresse le tableau d'ensemble des serveurs et de la latence, et [WordPress en Chine](/fr/wordpress-en-chine/) explique comment nous menons les projets sur cette stack.

why: the opening now leads with the filing rule; written fresh, both live links kept on their French slugs.

## Change 5, benchmark block and provider table (new)

before: (absent)
after:

## Ce que nous avons mesuré sur l'hébergement continental

Ces chiffres sont ceux de ChinaWebFoundry, relevés sur des sites clients que nous avons migrés en Chine ou que nous y hébergeons. Aucun tiers ne les a mesurés, et mieux vaut le savoir avant de leur accorder du poids.

> Sur un site WordPress que nous avons migré, le temps de chargement médian est passé de 23,4 secondes sur une origine européenne à 1,2 seconde sur une origine continentale. Près de la moitié du gain tient à la suppression d'appels externes.
> Source : ChinaWebFoundry, publié le 29 août 2026. https://www.chinawebfoundry.com/resources/china-web-guide/is-wordpress-blocked-in-china/

> Sur une période de 90 jours, un site client hébergé sur le continent a affiché une disponibilité de 99,98 %, avec des temps de réponse médians de 48 ms depuis Pékin, 36 ms depuis Shanghai et 61 ms depuis Canton.
> Source : ChinaWebFoundry, publié le 29 août 2026. https://www.chinawebfoundry.com/website-in-china/

Il manque encore à chacun de ces chiffres une condition que nous exigerions de n'importe quel autre banc d'essai. Le tableau la précise, chiffre par chiffre.

| Chiffre | Ce qu'il mesure | Point de mesure | Période | Reste à publier |
| --- | --- | --- | --- | --- |
| 23,4 s à 1,2 s | Chargement médian, avant et après la migration | Chine continentale | Avant et après la migration | Ville, opérateur, dates des tests |
| 99,98 % | Disponibilité d'un site hébergé sur le continent | Non publié | 90 jours | Lieu de supervision, dates de début et de fin |
| 48 ms | Temps de réponse médian | Pékin | Les mêmes 90 jours | Opérateur |
| 36 ms | Temps de réponse médian | Shanghai | Les mêmes 90 jours | Opérateur |
| 61 ms | Temps de réponse médian | Canton | Les mêmes 90 jours | Opérateur |

Les conditions manquantes figureront dans les études de cas que nous rédigeons en ce moment.

## Six options d'hébergement comparées

Ce sont les options sur lesquelles les équipes étrangères nous interrogent le plus. Chaque ligne indique la contrainte qui tranche, et chacune s'appuie sur la page de l'éditeur lui-même. Nous avons vérifié chaque ligne le 29 septembre 2026, et nous recommencerons chaque trimestre.

| Option | Serveurs sur le continent | Dépôt ICP | Compte et entité | Page de l'éditeur datée du |
| --- | --- | --- | --- | --- |
| Alibaba Cloud (阿里云), site chinois, aliyun.com | Oui | Déposé via Alibaba sur un serveur continental souscrit pour 3 mois au moins | Compte aliyun.com ; entreprise immatriculée sur le continent ou résident du continent | Centre d'aide, 20 août et 24 septembre 2026 |
| Alibaba Cloud, site international, alibabacloud.com | Ne peut pas porter un site déposé | Non pris en charge sur ce type de compte | Ouvrir plutôt un compte aliyun.com | Centre d'aide, 20 août 2026 |
| Tencent Cloud (腾讯云) | Oui | Déposé via Tencent sur un serveur continental ; Lighthouse souscrit pour 90 jours au moins | Une seule entité déclarante par compte | Documentation, 30 janvier et 23 septembre 2026 |
| Huawei Cloud (华为云) | Oui | Déposé via Huawei sur un « serveur de dépôt » continental souscrit pour 3 mois au moins | Compte de Chine continentale ; les comptes internationaux ne peuvent pas déposer | Help Center, juillet et août 2024 |
| Vercel | Aucun | Non proposé. Une copie dans le pays exige un hébergement continental et son propre dépôt | Rien du côté de Vercel | Base de connaissances, 11 septembre 2026 |
| Cloudflare | Uniquement sur le China Network, exploité par JD Cloud | Un dépôt ou une licence valide pour chaque domaine racine | Offre Enterprise ; JD Cloud examine d'abord le contenu | Documentation développeurs, avril 2026 |

Pour un site WordPress qui doit vivre sur le continent, le vrai choix se joue entre la première, la troisième et la quatrième ligne.

why: new sections, written in French from the facts; figures in French number format (23,4 ; 99,98 % ; 48 ms).

## Change 6, no managed WordPress

before: ## Ce que proposent réellement les trois clouds continentaux [...] parce qu'elle arrivera de toute façon.
after:

## Aucun WordPress infogéré en Chine continentale

Il n'existe ni WP Engine, ni Kinsta, ni Flywheel sur le continent. Nous avons passé en revue les gammes d'Alibaba Cloud (阿里云), de Tencent Cloud (腾讯云) et de Huawei Cloud (华为云). Aucun ne vend d'offre WordPress qui applique les correctifs à votre place ou réponde à un ticket sur une extension.

Tous trois vendent une image WordPress en un clic, posée sur un serveur virtuel d'entrée de gamme.

| Fournisseur | Produit | Ce que l'image installe | Page de l'éditeur mise à jour le |
| --- | --- | --- | --- |
| Alibaba Cloud | Simple Application Server (轻量应用服务器) | Une image applicative WordPress préconfigurée | 19 août 2026 |
| Tencent Cloud | Lighthouse (轻量应用服务器) | WordPress avec Nginx, MariaDB et le panneau Linux Baota (宝塔) | 22 septembre 2026 |
| Huawei Cloud | FlexusL (Flexus应用服务器L实例) | Ubuntu 24.04 sous Docker, avec Nginx, MySQL et phpMyAdmin | 21 septembre 2026 |

Regardez de nouveau la troisième colonne. Chaque ligne décrit un système d'exploitation avec WordPress préinstallé. Les mises à jour et les sauvegardes vous reviennent, tout comme la préproduction et la recherche de quelqu'un capable de lire un conflit d'extensions.

Quelqu'un chez vous fera donc de l'administration système chaque mois, aussi longtemps que le site vivra. C'est une charge permanente. Inscrivez-la au budget dès le cadrage.

why: section rebuilt on vendor-sourced rows; the unsourced "console sans mode anglais" goes with the English.

## Change 7, the filing and the licence

before: C'est la contrainte qui réorganise [...] aucun budget d'hébergement ne remplacera jamais cette entité.
after:

Alibaba Cloud et Tencent Cloud inscrivent tous deux la règle dans leur propre documentation.

> En vertu des règles du ministère de l'Industrie et des Technologies de l'information (工信部), un domaine résolu vers un serveur situé en Chine continentale doit avoir achevé son dépôt avant que l'accès au site puisse être ouvert.
> Source : centre d'aide d'Alibaba Cloud (阿里云), mis à jour le 4 septembre 2026. https://help.aliyun.com/zh/dws/support/how-do-i-troubleshoot-the-failures-to-access-a-website-by-using-its-domain-name

> Un domaine résolu vers des ressources de Tencent Cloud en Chine continentale doit d'abord faire l'objet d'un dépôt ICP, faute de quoi il est intercepté par le dispositif de Tencent Cloud qui surveille les domaines non déposés.
> Source : documentation de Tencent Cloud (腾讯云), mise à jour le 28 septembre 2026. https://cloud.tencent.com/document/product/243/19630

Le détail des ports vient de nous : sur nos projets, cette interception ferme les ports 80 et 443. Impossible de montrer au client un lien de préproduction sur le serveur de production, impossible de mener une bêta discrète pendant que le dossier avance.

> La vérification propre à Alibaba Cloud prend 1 à 2 jours ouvrés. L'examen de l'administration provinciale des communications (省级通信管理局) qui suit demande en général 1 à 20 jours ouvrés, et le site doit accomplir son enregistrement auprès de la sécurité publique (公安备案) dans les 30 jours suivant sa mise en ligne.
> Source : centre d'aide d'Alibaba Cloud (阿里云), présentation de la procédure de dépôt ICP, mise à jour le 26 août 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview

Soit 22 jours ouvrés au plus sur le papier. Rassembler les pièces prend du temps et les dossiers reviennent pour correction : nous prévoyons donc trois à six semaines, à condition que l'entité continentale existe déjà. Notre [guide du dépôt ICP](/fr/ressources/guide-web-chine/licence-icp-entreprises-etrangeres/) décrit les pièces à réunir et l'ordre dans lequel les soumettre.

La licence ICP commerciale (ICP许可证) relève d'une autre logique. Elle s'impose dès que le site gagne lui-même de l'argent : commerce en ligne, contenus payants, logiciels payants, publicité.

> L'administration des communications de Shanghai (上海市通信管理局) s'engage à statuer sur une licence de télécommunications à valeur ajoutée dans les 60 jours suivant l'acceptation de la demande.
> Source : administration des communications de Shanghai, guide de procédure, juin 2015. https://shca.miit.gov.cn/bsfw/bszn/dxsc/blcx/art/2020/art_7426922df3754a189aaf4278ff0c7b1d.html

Le délai court à partir de l'acceptation, et l'acceptation suppose un dossier complet. Nous prévoyons douze à dix-huit semaines pour celle-là.

La détention étrangère est l'autre question que soulève une licence.

> Un dispositif pilote lancé en 2024 lève le plafond de participation étrangère sur certaines catégories de licences, dont le traitement de données en ligne et les plateformes de publication d'informations, dans une partie de Pékin, de Shanghai, de Hainan et de Shenzhen. L'information, l'édition, l'audiovisuel et les services culturels en ligne en sont exclus.
> Source : ministère de l'Industrie et des Technologies de l'information (工业和信息化部), avis du 8 avril 2024. https://www.gov.cn/zhengce/zhengceku/202404/content_6944441.htm

Un dépôt ICP se fait au nom d'une entreprise immatriculée sur le continent, ou d'un résident du continent pour un site personnel. Une société immatriculée à l'étranger ne peut pas déposer directement, et aucun budget d'hébergement ne remplace l'entité.

why: the two undated MIIT blockquotes and the 60 to 90 working-day licence figure go; sourced quotes written in French.

## Change 8, the cloud account

before: ## Ce compte Alibaba Cloud qui ne peut pas héberger votre site [...] Toute équipe qui découvre y laisse deux semaines.
after:

## Le compte cloud qui ne peut pas héberger votre site

Alibaba exploite deux sites aux marques presque identiques. alibabacloud.com est le site international, aliyun.com le site chinois, et seul le second permet le dépôt.

> Les comptes du site international d'Alibaba Cloud (alibabacloud.com) ne prennent pas en charge les demandes de dépôt ICP, ni pour un site web ni pour une application. Le dépôt exige un compte sur le site chinois (aliyun.com), et l'entité déclarante doit être une entreprise immatriculée en Chine continentale ou un résident du continent.
> Source : centre d'aide d'Alibaba Cloud (阿里云), mis à jour le 20 août 2026. https://help.aliyun.com/en/icp-filing/basic-icp-service/product-overview/icp-filing-application-for-enterprises-outside-the-chinese-mainland

> Le dépôt porte sur un serveur Alibaba Cloud situé en Chine continentale : une instance ECS ou un Simple Application Server, souscrit pour 3 mois au moins.
> Source : centre d'aide d'Alibaba Cloud (阿里云), mis à jour le 24 septembre 2026. https://help.aliyun.com/en/icp-filing/basic-icp-service/user-guide/icp-filing-server-access-information-check

L'inscription qui paraît naturelle, sur le site anglophone que la recherche vous sert en premier, produit donc un compte incapable de déposer le site que vous construisez. Qui est passé par là une fois le sait par cœur. Ceux qui découvrent y perdent des semaines, et ils s'en aperçoivent en général quand quelqu'un cherche l'écran de dépôt sans le trouver, alors que le serveur est déjà payé et la date de lancement déjà fixée.

Huawei Cloud (华为云) pratique la même séparation, presque dans les mêmes termes.

> Les comptes du site international de Huawei Cloud ne prennent pas en charge le dépôt ICP. Il faut un compte Huawei Cloud de Chine continentale, avec un serveur de dépôt situé sur le continent et souscrit pour trois mois au moins.
> Source : Help Center de Huawei Cloud (华为云), mis à jour le 17 juillet 2024 et le 20 août 2024. https://support.huaweicloud.com/intl/en-us/prepare-icp/icp_02_0047.html et https://support.huaweicloud.com/intl/en-us/prepare-icp/icp_02_0003.html

Chez Tencent Cloud (腾讯云), la règle documentée porte sur le serveur. Les pages de Tencent que nous avons consultées ne disent rien des comptes internationaux, dans un sens comme dans l'autre, et nous n'en dirons donc rien non plus.

> Une instance Lighthouse située dans une région continentale est éligible au dépôt ICP si elle est souscrite pour 90 jours au moins, avec au minimum 30 jours restants pendant l'examen du dossier.
> Source : documentation de Tencent Cloud (腾讯云), mise à jour le 23 septembre 2026. https://cloud.tencent.com/document/product/1207/45756

why: the two unsupported claims (no mainland regions, Chinese-only workflow) go; Huawei and Tencent added from their own pages.

## Change 9, Vercel and Cloudflare

before: ## La question du CDN [...] il maintient toute la chaîne chez un seul fournisseur.
after:

## Vercel, Cloudflare et la périphérie à l'étranger

Un CDN mondial rapproche des copies de vos pages, à Hong Kong ou à Tokyo, ce qui aide. Il ne change rien aux hôtes bloqués que la page appelle elle-même.

Vercel revient aussi dans la conversation, puisque nombre de sites Astro et Next.js y sont hébergés. Sa propre base de connaissances répond clairement.

> « Vercel n'a ni serveurs ni nœuds CDN en Chine continentale » et « Vercel ne peut garantir ni la disponibilité ni les performances en Chine continentale ». Les contrôles réseau chinois peuvent bloquer ou brider ses sous-domaines .vercel.app.
> Source : base de connaissances de Vercel, publiée le 3 novembre 2025, mise à jour le 11 septembre 2026. https://vercel.com/kb/guide/accessing-vercel-hosted-sites-from-mainland-china

> GreatFire considère https://vercel.app comme bloqué en Chine continentale lors de ses 4 derniers tests concluants sur 4, le plus récent le 14 septembre 2026. Sur 157 URL testées sur le domaine, 154 apparaissent bloquées.
> Source : GreatFire, septembre 2026. https://en.greatfire.org/https/vercel.app

Vercel suggère lui-même un domaine personnalisé à la place de .vercel.app, des polices et une mesure d'audience auto-hébergées et, pour un site qui doit être performant en Chine, une copie distincte sur une infrastructure continentale, avec son propre dépôt ou sa propre licence ICP. Cette dernière option revient à exploiter un second site, sur l'un des trois clouds continentaux cités plus haut ou chez un autre hébergeur du continent.

Les offres standard et gratuite de Cloudflare servent les visiteurs continentaux depuis des points de présence situés hors du continent. Le réseau implanté dans le pays est un produit à part.

> Le Cloudflare China Network est un abonnement distinct réservé aux clients Enterprise, exploité dans des centres de données du continent par JD Cloud, partenaire de Cloudflare. Chaque domaine racine doit disposer d'un dépôt ou d'une licence ICP valide, et JD Cloud examine le contenu de chaque domaine avant d'activer le réseau.
> Source : documentation développeurs de Cloudflare, mise à jour le 30 avril 2026. https://developers.cloudflare.com/china-network/

Pour un site hébergé sur le continent, la réponse la plus simple reste en général le CDN domestique rattaché au cloud sur lequel vous êtes déjà. Il fonctionne sous le dépôt que vous détenez déjà et maintient toute la chaîne chez un seul fournisseur.

why: Vercel section added with its own knowledge-base wording; Cloudflare facts now cited; unsupported "il est rapide" goes.

## Change 10A, line 89

before: Le serveur est la partie bon marché. Un site vitrine d'entreprise sur Simple Application Server ou Lighthouse tourne le plus souvent sous 100 USD par mois, [...]
after: Le serveur est la partie bon marché. Les images en un clic tournent sur les serveurs d'entrée de gamme de chaque cloud.
why: the unsourced price goes.

## Change 10B, line 91

before: Le dépôt lui-même est gratuit. La dépense réelle se loge ailleurs, en trois endroits : [...]
after: La dépense réelle se loge ailleurs. Il faut créer ou entretenir l'entité continentale, et la préparation des pièces comme le passage de la vérification absorbent des heures de travail. Après le lancement, une personne nommément désignée se connecte mois après mois à la console du cloud pour maintenir le site à jour et sauvegardé.
why: "free to submit" is unverified and goes; the three-item list is broken up.

## Change 10C, line 112

before: Le serveur reste souvent sous 100 USD par mois pour un site d'entreprise. [...]
after: Le serveur est le poste le plus modeste. Les coûts qui comptent sont l'entité et le travail de dépôt, puis, après le lancement, la personne qui s'occupe du serveur.
why: the unsourced price goes from the FAQ too.

Step 1 complete.
