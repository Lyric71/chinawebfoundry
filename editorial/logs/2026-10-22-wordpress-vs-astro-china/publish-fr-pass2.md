---
title: "WordPress ou Astro pour un site en Chine"
subtitle: "Le choix dépend des serveurs sollicités par vos pages et de la façon dont votre équipe publie."
summary: "WordPress ou Astro pour la Chine : comparez les requêtes réseau, l’hébergement et le travail de publication avant de choisir."
visual: "/images/guides/wordpress-vs-astro-china.webp"
order: 49
published: true
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
reviewBy: "2026-11-20"
category: "Technology"
author: "cyril-drouin"
---

Choisissez WordPress si votre équipe marketing publie chaque semaine sans disposer d’un développeur. Un site statique construit avec Astro convient à des mises à jour moins fréquentes, avec un développeur disponible. Dans les deux cas, servez le site depuis un serveur en Chine continentale ayant fait l’objet d’un enregistrement ICP. Pour évaluer une alternative à WordPress en Chine, comptez les hôtes que la page sollicite et regardez ce qui se passe quand l’un d’eux est bloqué. Aucun test publié ne compare ces deux solutions depuis la Chine ; nous n’avançons donc aucun gain de vitesse.

| Question | WordPress | Site statique Astro |
|---|---|---|
| Quels hôtes la page sollicite-t-elle ? | Ceux du thème, des extensions et des scripts du navigateur | Ceux des fichiers générés et des éventuels scripts du navigateur |
| Quelles requêtes partent du serveur ? | Vérifications des mises à jour auprès d’api.wordpress.org | Aucune ; le serveur distribue des fichiers |
| Qui peut publier ? | Toute personne disposant d’un accès | Un développeur, ou un rédacteur via un CMS headless |
| Quand une modification apparaît-elle en ligne ? | À l’enregistrement | Après génération et déploiement |
| Un serveur continental nécessite-t-il un enregistrement ICP ? | Oui | Oui |

Toutes les sources ci-dessous ont été vérifiées le 22 octobre 2026.

## Chaque hôte étranger peut ajouter des échanges transfrontaliers

Une page se charge rarement avec une seule requête. Le HTML appelle une feuille de style, qui appelle une police. Une extension ajoute un script hébergé ailleurs, puis une balise de mesure d’audience en ajoute un autre. Une nouvelle connexion HTTPS sur TCP demande une résolution DNS et l’établissement de la connexion avant que la réponse n’arrive. Le cache DNS et la réutilisation des connexions peuvent éviter une partie de ces échanges.

> Lors d’une première requête, la latence comprend la résolution DNS, l’établissement de la connexion TCP et la négociation TLS. Multiplier les noms d’hôtes multiplie les résolutions DNS nécessaires.
> Source : MDN Web Docs, Understanding latency, février 2025. https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Understanding_latency

Depuis la Chine, établir ces connexions prend du temps. Chaque échange impose un aller-retour : entre un téléphone à Chengdu et un serveur à Francfort ou en Virginie, la distance pèse déjà, avant même l’intervention du filtrage.

> Chinafy a testé 614 sites internationaux avec WebPageTest depuis Pékin, la Virginie et Londres. Le délai avant le premier octet était 4 à 4,5 fois plus élevé à Pékin. Cette étude d’un prestataire porte sur des sites internationaux, sans ventilation par plateforme.
> Source : Chinafy, China Website Performance Benchmarks 2026, avril 2026. https://www.chinafy.com/blog/china-website-performance-benchmarks-2026

Le délai avant le premier octet mesure l’attente qui précède l’arrivée du contenu. Les allers-retours et le traitement côté serveur l’allongent ; le poids de la page intervient ensuite. Supprimer un hôte étranger inutile peut éviter une connexion et un point de défaillance. Les images restent à télécharger une fois la réponse reçue.

## Une connexion bloquée peut retarder l’affichage

Une connexion bloquée peut laisser le navigateur attendre jusqu’à l’expiration du délai. Les conséquences dépendent du mode d’échec et du rôle de la ressource dans la page.

> GreatFire classe https://ajax.googleapis.com, l’hôte des bibliothèques Google, comme bloqué : 1 échec sur 1 test concluant en Chine continentale, le dernier datant du 22 août 2026.
> Source : GreatFire, août 2026. https://en.greatfire.org/https/ajax.googleapis.com

> Depuis une instance Alibaba Cloud (阿里云) à Zhangjiakou le 28 août 2026, le site Google Hosted Libraries n’a renvoyé aucun premier octet lors de 3 essais sur 3, interrompus chacun au bout de 60 secondes. 21YunBox a chronométré le site lui-même ; le verdict sur l’hôte ajax.googleapis.com provient de GreatFire.
> Source : 21YunBox, Does Google Hosted Libraries Work in China?, révisé le 8 octobre 2026. https://www.21cloudbox.com/support/google-hosted-libraries.html

L’emplacement de la référence détermine l’effet sur la page. Une feuille de style placée dans l’en-tête peut en suspendre l’affichage. Pour une balise de script classique, MDN précise que le navigateur récupère et exécute le script avant de poursuivre l’analyse du document.

> Un script classique sans async ni defer est téléchargé et exécuté avant que l’analyse du document ne reprenne.
> Source : MDN Web Docs, The Script element, mai 2026. https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script

> Le CSS bloque le rendu : le navigateur attend d’avoir reçu et traité les feuilles de style avant d’afficher la page.
> Source : MDN Web Docs, Critical rendering path, février 2025. https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Critical_rendering_path

Une seule référence bloquant le rendu et pointant vers un hôte inaccessible peut ainsi laisser le visiteur devant une page blanche. Copié sur votre serveur, le même fichier peut réutiliser la connexion déjà ouverte, même s’il reste à télécharger. Notre [guide des CDN JavaScript en Chine](/fr/ressources/guide-web-chine/cdn-javascript-chine/) examine les principaux hôtes.

## Une alternative à WordPress aux dépendances plus faciles à examiner

Sur WordPress, les hôtes sollicités évoluent avec le site. L’installation d’une extension un mardi peut faire apparaître un nouveau domaine dans les pages du lendemain. Un réglage de thème modifié par l’équipe marketing peut déplacer les polices vers un autre hôte sans toucher au code.

Avec Astro, le développeur dispose de fichiers à examiner avant la mise en ligne.

> Par défaut, Astro génère à la compilation les pages, les routes et les points d’accès API sous forme de pages statiques.
> Source : Astro Docs, On-demand rendering, mise à jour du 19 juin 2026. https://docs.astro.build/en/guides/on-demand-rendering/

La compilation produit un dossier de fichiers. On peut y rechercher les adresses écrites dans le code. JavaScript peut toutefois former d’autres requêtes à l’exécution, et un script distant peut changer sans que le site soit recompilé. L’examen des fichiers doit donc s’accompagner d’un contrôle réseau dans le navigateur. Des scripts hébergés localement facilitent les vérifications ultérieures.

> Astro accepte les scripts exécutés dans le navigateur, y compris ceux chargés depuis un autre serveur.
> Source : Astro Docs, Scripts and event handling, mise à jour du 19 juin 2026. https://docs.astro.build/en/guides/client-side-scripts/

| Origine des requêtes | WordPress sur un serveur continental | Site statique sur un serveur continental |
|---|---|---|
| Navigateur du visiteur | Ressources du thème et des extensions, ajouts depuis l’administration | Ressources générées et requêtes des scripts du navigateur |
| Serveur | Vérifications des mises à jour auprès d’api.wordpress.org | Aucune ; il distribue les fichiers |
| Navigateur du rédacteur | Gravatar dans l’interface d’administration par défaut | Connexion au CMS éventuel, où qu’il soit hébergé |
| Qui peut ajouter un hôte ? | Personnes installant des extensions ou modifiant les intégrations | Développeurs, contenus intégrés via le CMS ou fournisseurs de scripts distants |

Une équipe WordPress rigoureuse peut également maintenir une liste d’hôtes courte et stable. Cela suppose d’auditer les extensions et de refuser certains ajouts. Sur un site statique, limiter les scripts externes et les contenus tiers intégrés par les rédacteurs facilite ce contrôle.

## Les requêtes que WordPress envoie de lui-même

Un serveur WordPress émet des requêtes sans intervention d’un visiteur. Il demande les mises à jour à WordPress.org en HTTPS, puis réessaie en HTTP si la première tentative échoue. Depuis un serveur continental, cette requête rejoint un service qui limite le débit de certains réseaux chinois.

> WordPress 7.1.3 envoie sa vérification de version à api.wordpress.org avec un délai d’expiration de 3 secondes en dehors des tâches planifiées.
> Source : code source de WordPress 7.1.3, wp-includes/update.php, consulté le 22 octobre 2026. https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/update.php

> En réponse à un signalement d’erreurs 429 depuis la Chine, l’équipe WordPress.org indique que plusieurs réseaux chinois subissent des limitations sur certains services en raison d’un volume élevé d’abus et de trafic illégitime provenant de ces réseaux.
> Source : WordPress.org Meta Trac, ticket nº 5106, mars 2020. https://web.archive.org/web/20260116133057/https://meta.trac.wordpress.org/ticket/5106

Dans le tableau de bord, les mises à jour cessent d’apparaître sans que l’erreur 429 soit signalée. Autre dépendance de l’administration : les avatars. WordPress construit par défaut leurs adresses sur secure.gravatar.com, y compris dans la barre d’administration.

> GreatFire classe https://secure.gravatar.com comme bloqué : 1 échec sur 1 test concluant en Chine continentale, le dernier datant du 31 août 2026.
> Source : GreatFire, août 2026. https://en.greatfire.org/https/secure.gravatar.com

La requête d’avatar part du navigateur du rédacteur. Elle concerne donc une équipe à Shanghai quel que soit l’hébergement du site. Notre [guide sur la lenteur de wp-admin en Chine](/fr/ressources/guide-web-chine/wp-admin-lent-chine/) détaille les correctifs. Un site statique servi depuis le continent n’a ni écran d’administration ni vérification de mise à jour. Son serveur distribue les fichiers sans émettre ces appels.

## Sur Vercel, un site statique reste hébergé hors de Chine

Il reste à choisir où héberger les fichiers du site statique. Cet emplacement conditionne leur accessibilité depuis la Chine.

Le site de ChinaWebFoundry, cette page comprise, utilise Astro et Vercel. Il s’adresse à des lecteurs hors de Chine. Vercel expose clairement les limites de ce choix pour les visiteurs du continent.

> Vercel ne dispose d’aucun serveur ni nœud CDN en Chine continentale. Les contrôles réseau chinois peuvent bloquer ou ralentir le trafic vers les domaines étrangers, dont les sous-domaines .vercel.app. Vercel ne garantit ni la disponibilité ni les performances en Chine continentale.
> Source : Vercel Knowledge Base, Accessing Vercel-hosted sites from mainland China, publié le 3 novembre 2025, mis à jour le 11 septembre 2026. https://vercel.com/kb/guide/accessing-vercel-hosted-sites-from-mainland-china

> GreatFire classe https://vercel.app comme bloqué : 4 échecs sur 4 tests concluants en Chine continentale, le dernier datant du 14 septembre 2026.
> Source : GreatFire, septembre 2026. https://en.greatfire.org/https/vercel.app

La liste des solutions de Vercel se termine par un déploiement distinct sur le continent, nécessitant selon ses termes une « ICP license ». En droit chinois, un site de communication d’entreprise hébergé sur un serveur continental nécessite un enregistrement ICP (ICP备案). La licence ICP (ICP许可证) est une autorisation distincte pour les services commerciaux réglementés d’information sur Internet. Les autorisations requises dépendent de l’activité.

> Alibaba Cloud exige un enregistrement ICP préalable pour un site hébergé sur un nœud continental. Ses serveurs à Hong Kong et à l’étranger n’en nécessitent pas.
> Source : Alibaba Cloud (阿里云), présentation de l’enregistrement ICP, août 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview

Un serveur d’origine continental évite un téléchargement depuis l’étranger pour les fichiers qu’il héberge. Sur les sites clients que nous exploitons, la compilation s’effectue dans une chaîne d’intégration continue hors de Chine. Les fichiers générés sont ensuite transférés vers Alibaba Cloud, Tencent Cloud (腾讯云) ou Huawei Cloud (华为云).

## Les contraintes du statique pour l’équipe marketing

Sans ajout d’un CMS, l’équipe marketing ne retrouve pas son écran d’édition habituel : les contenus se trouvent dans des fichiers Markdown, au sein d’un dépôt de code. Les extensions WordPress ne s’installent pas telles quelles dans Astro. Formulaire de contact, bandeau de cookies, recherche interne ou inscription à une lettre d’information demandent du code ou une intégration à configurer et à entretenir.

Chaque modification passe par une compilation. Un commit déclenche la génération du site, puis son transfert vers le serveur. Une coquille repérée à 18 heures attend la fin de cette chaîne.

Le développeur intervient aussi sur des tâches que WordPress laisse au responsable marketing, comme une nouvelle mise en page ou l’ajout d’un champ de formulaire.

Un CMS headless permet de conserver une interface éditoriale.

> WordPress peut fournir le contenu d’un projet Astro en tant que CMS headless, grâce à l’API REST que chaque site WordPress expose par défaut.
> Source : Astro Docs, Headless WordPress & Astro, mise à jour du 19 octobre 2026. https://docs.astro.build/en/guides/cms/wordpress/

Les rédacteurs retrouvent leur tableau de bord habituel. WordPress peut rester hébergé hors de Chine, là où ses vérifications de mises à jour fonctionnent. Le serveur continental reçoit uniquement les fichiers générés. Puisque Astro produit les pages, les constructeurs de pages et les extensions de formulaire demandent une intégration spécifique.

## Quand choisir WordPress

Si l’équipe marketing publie chaque semaine sans développeur attitré, WordPress s’impose.

Une équipe qui publie trois articles et une page de campagne par semaine doit pouvoir travailler sans ouvrir de ticket technique. WordPress lui donne des brouillons, la publication programmée, des révisions, des rôles et un aperçu fidèle à la page publique. Un site statique doit ajouter un CMS ou une autre organisation éditoriale pour fournir ces fonctions.

WordPress convient aussi lorsque le site constitue le produit. Espaces membres, cours en ligne, réservations ou catalogue WooCommerce modifié chaque jour relèvent de ses extensions. Chiffrez leur remplacement avant de choisir le statique.

Les difficultés propres à la Chine ont des correctifs connus. Supprimez les requêtes d’avatars distants. Récupérez les mises à jour vérifiées hors de Chine avant de les déployer sur le serveur continental. Hébergez les scripts et les polices localement lorsque leurs licences l’autorisent. Notre [guide de la vitesse de WordPress en Chine](/fr/ressources/guide-web-chine/vitesse-wordpress-chine/) détaille ces opérations, et notre page [WordPress en Chine](/fr/wordpress-en-chine/) explique comment nous exploitons cette configuration sur un serveur continental. Après le lancement, une personne doit rester responsable de ces contrôles.

Recensez les personnes qui modifieront le site le mois prochain et les développeurs que vous pourrez solliciter. Si les rédacteurs sont plus nombreux et publient chaque semaine, WordPress bien entretenu convient. Un site actualisé chaque mois, avec un développeur disponible, demande moins de travail en Chine sous forme statique.

## Questions fréquentes

**Astro est-il plus rapide que WordPress en Chine ?**

Aucun test publié ne compare les deux depuis la Chine, et nous n’en présentons pas. Les différences portent sur les hôtes sollicités et sur le risque qu’un hôte bloqué retarde la page. WordPress peut aussi charger rapidement depuis un serveur continental enregistré, une fois les appels tiers retirés. Notre page [Astro](/fr/astro/) décrit notre approche du statique.

**Baidu peut-il lire un site Astro ?**

Oui. Les deux solutions peuvent fournir du HTML complet dès la première réponse, ce qui facilite le travail des robots. Baidu (百度) a annoncé le 24 mars 2017 Baiduspider-render/2.0, un robot capable de récupérer CSS, JavaScript et images. Il ne publie pas l’étendue effective de son rendu. Fournir directement du HTML complet reste donc prudent, avec les deux solutions.

> Baidu a annoncé Baiduspider-render/2.0 le 24 mars 2017 pour récupérer les fichiers CSS, JavaScript et les images.
> Source : Baidu Search Resource Platform (百度搜索资源平台), mars 2017. https://ziyuan.baidu.com/wiki/990

**Peut-on garder WordPress et servir un site statique ?**

Oui, en utilisant WordPress comme CMS headless. Les rédacteurs travaillent dans son tableau de bord. Astro récupère les contenus par l’API REST lors de la compilation, puis seuls les fichiers générés rejoignent le serveur continental. Les extensions de la partie publique ne suivent pas automatiquement, et chaque modification attend la prochaine compilation.

**Un site statique coûte-t-il moins cher à exploiter ?**

Nous ne publions pas de tarifs. Le statique dispense d’entretenir un serveur PHP et une base de données : l’hébergement et la maintenance s’en trouvent allégés. Modifier la présentation ou les fonctions mobilise toutefois un développeur. Faites chiffrer la maintenance à partir de votre rythme de publication et des outils dont les rédacteurs ont besoin.

**Un site statique nécessite-t-il un enregistrement ICP ?**

Oui, s’il est servi depuis un serveur continental. L’obligation dépend de l’hébergement, quel que soit l’outil de création. Un site statique sur les nœuds continentaux d’Alibaba Cloud nécessite un enregistrement ICP (ICP备案) avant sa mise en ligne, comme WordPress. Un serveur à Hong Kong n’en a pas besoin ; ses fichiers franchissent la frontière pour atteindre le visiteur continental.
