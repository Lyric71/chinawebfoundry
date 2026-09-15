---
title: "Plugins WordPress : ce qui bloque en Chine"
subtitle: "Les serveurs externes sollicités par vos plugins WordPress, leurs défaillances en Chine et les réglages qui permettent de les éviter."
summary: "Scripts, polices, formulaires : quels appels externes perturbent WordPress en Chine et comment les remplacer, mesures à l’appui."
visual: "/images/guides/wordpress-plugins-china.webp"
order: 35
published: true
publishedAt: 2026-09-15
updatedAt: 2026-09-15
category: Technology
author: cyril-drouin
---

La plupart des plugins WordPress fonctionnent sur un serveur en Chine continentale. Les pannes viennent des serveurs externes qu’ils sollicitent à chaque chargement. L’un peut empêcher toute la page de s’afficher. D’autres ajoutent environ une seconde d’attente. Un autre répond en 111 millisecondes à un centre de données chinois, mais jamais à une connexion résidentielle pékinoise. Ce dernier cas trompe jusque dans les guides techniques.

Un audit utile examine donc chaque hôte. Avec deux réglages différents, un même constructeur de pages peut produire deux résultats opposés. Une liste de plugins à bannir conduit souvent à refaire ce qui fonctionnait déjà.

Les vérifications citées ici portent sur des connexions en Chine continentale, entre le 22 août et le 11 septembre 2026. Cinq hôtes ont fait l’objet de mesures depuis deux points du pays.

| Hôte | Alibaba Cloud, Zhangjiakou, 28 août | Connexion résidentielle à Pékin, 30 août | Résultat sur la ligne résidentielle |
|---|---|---|---|
| `fonts.googleapis.com` | 72 sur 72, médiane de 111 ms | 0 sur 54 | bloqué |
| `fonts.gstatic.com` | 72 sur 72, médiane de 102 ms | 0 sur 6 | bloqué |
| `cdn.jsdelivr.net` | 72 sur 72, médiane de 660 ms, p95 de 1 757 ms | 36 sur 36 | lent |
| `www.googletagmanager.com` | 72 sur 72, médiane de 118 ms | 0 sur 112 | bloqué |
| `www.google.com/recaptcha` | 0 sur 72 | 0 sur 18 | bloqué |

> Mesures depuis une instance Alibaba Cloud (阿里云) à Zhangjiakou le 28 août 2026 : 72 échantillons par hôte sur douze heures, avec un délai d’expiration de 30 secondes. Second point de mesure : une ligne résidentielle China Mobile (中国移动) à Pékin, le 30 août 2026, sur 88 sites réels et 264 chargements de page.
> Source : 21YunBox, A Day of Third-Party Requests From Inside China, août 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Un hôte absent de cette étude mérite toutefois d’être examiné en premier : `ajax.googleapis.com`.

## La balise script qui empêche la page de s’afficher

Google Hosted Libraries, sur `ajax.googleapis.com`, peut rendre une page WordPress inutilisable.

> L’analyseur de GreatFire classe `ajax.googleapis.com` comme bloqué. Son dernier test concluant, le 22 août 2026, a échoué depuis la Chine continentale. Sur l’ensemble du domaine `googleapis.com`, il recense 265 URL bloquées et 120 perturbées parmi 573 URL testées.
> Source : GreatFire, août 2026. https://en.greatfire.org/https/ajax.googleapis.com

L’emplacement de la balise explique la gravité du problème. Certains thèmes chargent jQuery dans l’en-tête du document, avec un script qui bloque l’affichage. Le navigateur suspend l’analyse du HTML, envoie sa requête et attend. Derrière le Great Firewall, la requête reste sans réponse jusqu’à l’expiration du délai du navigateur. La page demeure blanche.

Le visiteur attend quatre ou cinq secondes, puis ferme l’onglet. Aucun message d’erreur ne l’avertit. Les journaux du serveur ne donnent pas davantage d’indice à la personne qui reprendra le site.

De nombreux thèmes vendus sur les grandes places de marché chargent encore jQuery ainsi. Ils comptent sur une copie commune, hébergée chez Google et déjà présente dans le cache du visiteur. Cette hypothèse, défendable en 2015, pénalise depuis longtemps les visiteurs chinois.

La correction prend une dizaine de minutes : supprimer le chargement de la copie Google et laisser WordPress servir la version de jQuery qu’il fournit. Si le thème n’en a plus besoin, supprimer la dépendance. Cette intervention passe avant les autres corrections de cet audit.

Google reCAPTCHA subit le même type de blocage, avec une conséquence directe sur les demandes de contact.

> Google reCAPTCHA a terminé 0 requête sur 72 depuis l’instance Alibaba Cloud (阿里云) à Zhangjiakou le 28 août 2026, et 0 sur 18 depuis la ligne résidentielle China Mobile (中国移动) à Pékin le 30 août 2026.
> Source : 21YunBox, A Day of Third-Party Requests From Inside China, août 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Le widget ne s’affiche pas et le formulaire ne part pas. Les équipes découvrent souvent la panne tardivement : les demandes jamais reçues laissent peu de traces.

## Les CDN qui ajoutent une seconde d’attente

jsDelivr, cdnjs et unpkg distribuent des bibliothèques JavaScript utilisées par les sites WordPress : diaporamas, visionneuses d’images, graphiques ou polyfills. Ces trois CDN répondent depuis la Chine continentale.

Pour jsDelivr, des mesures existent depuis les deux points d’observation.

> `cdn.jsdelivr.net` a terminé 72 requêtes sur 72 depuis une instance Alibaba Cloud (阿里云) à Zhangjiakou le 28 août 2026. Le délai médian avant le premier octet était de 660 ms, avec un 95e percentile de 1 757 ms. Sur la ligne résidentielle China Mobile (中国移动) à Pékin, le 30 août 2026, 36 requêtes sur 36 ont abouti.
> Source : 21YunBox, A Day of Third-Party Requests From Inside China, août 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Le 95e percentile mérite davantage d’attention que la médiane. Une demi-seconde sur un script reste supportable. Près de deux secondes sur une requête sur vingt, pendant que le navigateur attend pour afficher la page, donnent au site un fonctionnement irrégulier.

cdnjs et unpkg répondent eux aussi depuis le continent. Nous ne disposons pour aucun des deux d’une mesure de latence associée à un lieu et à une date. Nous n’en publions donc pas.

La correction reprend celle de jQuery : intégrer la bibliothèque au projet et la servir depuis le serveur d’origine. Le site dépend alors moins d’un hôte dont on ne peut pas vérifier l’accès depuis un bureau hors de Chine.

## Google Fonts : deux réseaux, deux résultats

Les mesures de Google Fonts expliquent pourquoi tant de diagnostics divergent.

> Depuis une instance Alibaba Cloud (阿里云) à Zhangjiakou le 28 août 2026, `fonts.googleapis.com` a terminé 72 requêtes sur 72, avec une médiane de 111 ms avant le premier octet ; `fonts.gstatic.com` a terminé 72 requêtes sur 72, à 102 ms. Sur une ligne résidentielle China Mobile (中国移动) à Pékin le 30 août 2026, `fonts.googleapis.com` a répondu à 0 requête sur 54 et `fonts.gstatic.com` à 0 sur 6.
> Source : 21YunBox, A Day of Third-Party Requests From Inside China, août 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Ces deux séries de mesures ont été réalisées la même semaine, dans le même pays. Le serveur du centre de données atteint les hôtes de Google en environ un dixième de seconde. La connexion résidentielle pékinoise n’y accède pas.

Un verdict général sur Google Fonts ne permet donc pas de décider pour votre site. Le résultat varie selon le résolveur DNS, l’opérateur et l’heure. Héberger les fichiers de police sur votre propre serveur élimine cette dépendance.

Les constructeurs de pages sont souvent à l’origine des appels à Google Fonts. Elementor les charge depuis Google sauf réglage contraire, et son option d’hébergement local est désactivée par défaut.

> Elementor indique que la fonction Load Google Fonts Locally dispose désormais d’un réglage permettant de l’activer ou de la désactiver, et qu’elle est désactivée par défaut sur tous les sites.
> Source : Elementor, ticket 32838 du suivi public du plugin, 18 septembre 2025. https://github.com/elementor/elementor/issues/32838

Deux réglages figurent dans deux menus distincts. Elementor > Settings > Performance active l’hébergement local : les fichiers sont téléchargés dans votre dossier uploads et les feuilles de style sont modifiées pour les utiliser. Elementor > Settings > Advanced contient un autre réglage Google Fonts, qui empêche leur enregistrement pour les pages publiques. Divi et les autres grands constructeurs proposent leurs propres variantes de ces réglages. Le code de Divi étant fermé, nous n’avons pas examiné la liste des hôtes qu’il appelle à l’exécution et n’en publions aucune.

Activez l’option locale, videz le cache, puis rechargez la page depuis un point de test en Chine continentale. Vérifiez que les polices proviennent bien de votre domaine. L’éditeur appelle aussi `my.elementor.com` et `assets.elementor.com`. Nous n’avons testé aucun des deux depuis la Chine et ne nous prononçons pas sur leur accessibilité.

## Les appels externes du cœur de WordPress

Même sans plugin, une installation WordPress communique avec des services externes. La liste reste assez courte.

Le cœur de WordPress ne charge aucune Google Font sur les pages publiques. Les deux références à `fonts.googleapis.com` dans `wp-includes/script-loader.php` assurent la compatibilité avec les thèmes et plugins qui demandent encore ces identifiants.

> Les commentaires du cœur de WordPress précisent qu’Open Sans n’est plus utilisé par le cœur, mais que des thèmes et plugins peuvent encore en dépendre. La même précision figure pour Noto Serif.
> Source : cœur de WordPress, `wp-includes/script-loader.php`, consulté le 11 septembre 2026. https://raw.githubusercontent.com/WordPress/WordPress/master/wp-includes/script-loader.php

Gravatar pèse davantage. WordPress demande un avatar à `secure.gravatar.com` pour chaque commentaire et sur de nombreux écrans de wp-admin.

> GreatFire classe `secure.gravatar.com` comme bloqué en Chine continentale. Les 28 URL de `gravatar.com` testées sont bloquées. Dernier test : 31 août 2026.
> Source : GreatFire, août 2026. https://en.greatfire.org/https/secure.gravatar.com

Ces appels touchent l’administration : la personne qui gère le site depuis la Chine subit les lenteurs avant les visiteurs. La modération des commentaires et la liste des utilisateurs deviennent pénibles à ouvrir. Augmenter la puissance du serveur ne corrige pas cet appel externe.

Cravatar (cravatar.cn) et WeAvatar sont les miroirs chinois couramment utilisés en remplacement. Ils répondent aux mêmes URL d’avatars depuis le pays. Une simple case permet aussi de désactiver complètement les avatars.

La bibliothèque de polices des versions récentes de WordPress récupère son catalogue auprès de WordPress.org, puis télécharge les fichiers sur votre serveur. Les polices ainsi installées sont donc hébergées localement. Notre [guide sur le blocage de WordPress en Chine](/fr/ressources/guide-web-chine/wordpress-bloque-en-chine/) examine les autres dépendances, des serveurs de mise à jour aux vidéos intégrées.

## Les plugins dont les appels partent dans l’autre sens

Les appels précédents partent du navigateur du visiteur. Certains plugins de performance font intervenir un serveur distant qui doit, à son tour, accéder à votre site.

La fonction Remove Unused CSS de WP Rocket s’exécute sur les serveurs de WP Rocket.

> WP Rocket précise que ces traitements sont effectués sur ses serveurs, à la demande du plugin WP Rocket.
> Source : WP Rocket, WP Rocket SaaS: Behind the Scene, 12 septembre 2024. https://wp-rocket.me/blog/saas-behind-the-scene/

> Sa documentation indique que l’URL de chaque page est envoyée à son API. Celle-ci visite la page pour produire le CSS utilisé. Le site doit être accessible publiquement pour que l’outil fonctionne.
> Source : base de connaissances WP Rocket, Remove Unused CSS, mise à jour le 1er juin 2026. https://docs.wp-rocket.me/article/1529-remove-unused-css

Pour un site hébergé en Chine continentale, une machine située à l’étranger doit récupérer chaque page, effectuer le rendu puis renvoyer le résultat. Les deux trajets franchissent la frontière ; le code source de la page quitte donc le pays.

LiteSpeed Cache utilise lui aussi un service en ligne. Dans ce cas, votre serveur envoie les fichiers à l’extérieur.

> La documentation de QUIC.cloud explique que les images de la médiathèque WordPress sont envoyées par lots à QUIC.cloud. Le service les traite sur ses propres nœuds, sans peser sur les performances du serveur du site.
> Source : QUIC.cloud, Image Optimization, 6 avril 2026. https://docs.quic.cloud/services/imageopt/

WP Rocket, LiteSpeed Cache et W3 Total Cache conviennent à un site destiné à la Chine ; la plupart de leurs fonctions s’exécutent localement. LiteSpeed Cache 7.9.1 et W3 Total Cache 2.10.6 ont tous deux été mis à jour durant la première semaine de septembre 2026. Il faut repérer les options qui déclenchent un échange avec un serveur inaccessible. Générez le CSS critique localement, ou une seule fois depuis l’étranger, puis conservez-le dans le dépôt du projet. Notre [guide de l’hébergement WordPress en Chine](/fr/ressources/guide-web-chine/hebergement-wordpress-chine/) traite du choix du serveur d’origine, à l’autre bout de cet échange.

## Auditer ses dépendances en dix minutes

Ouvrez le site dans Chrome, affichez l’onglet Network des outils de développement, rechargez la page et triez par Domain. La colonne répertorie les hôtes tiers sollicités. Sur les sites que nous auditons, la liste compte généralement entre huit et vingt hôtes. Copiez-la.

Vérifiez ensuite ces hôtes depuis la Chine. Un navigateur à Londres ne permet pas de savoir ce qu’obtient un visiteur à Chengdu. Vous pouvez examiner chaque hôte avec l’analyseur de GreatFire ou soumettre la page à notre [China Site Scanner gratuit](/fr/china-site-scanner/), qui compare ses dépendances à une liste d’hôtes.

Classez les corrections selon leur effet sur le site.

| Priorité | Problème constaté | Quand intervenir |
|---|---|---|
| 1 | Hôte bloqué, chargement bloquant l’affichage | Aujourd’hui : la page ne s’affiche pas |
| 2 | Hôte bloqué, chargement asynchrone | Cette semaine : la fonction est perdue, la page reste lisible |
| 3 | Hôte accessible mais lent | Selon les disponibilités : surveiller le 95e percentile |
| 4 | Rapide depuis un centre de données, inaccessible sur une ligne résidentielle | Au prochain cycle de développement : héberger localement |

Un site vitrine courant demande un ou deux jours de développement pour traiter les deux premières priorités. Un site construit avec un éditeur visuel et quatre-vingt-dix plugins peut prendre une semaine, largement consacrée à supprimer des dépendances.

Refaites le contrôle après chaque mise à jour du thème ou du constructeur : une seule peut réintroduire un hôte externe. Les dépendances s’ajoutent aux trois autres conditions de fonctionnement en Chine : le serveur d’origine, le dépôt ICP (ICP备案) et la possibilité pour Baiduspider d’explorer les pages.

## Les remplacements, hôte par hôte

La colonne d’état décrit le résultat pour un visiteur sur une connexion grand public, celle qui détermine si la page reste lisible.

| Dépendance | État depuis la Chine continentale | Conséquence | Remplacement |
|---|---|---|---|
| Google Hosted Libraries (`ajax.googleapis.com`) | Bloqué, 22 août 2026 | Page blanche | jQuery fourni par WordPress, servi par votre origine |
| Gravatar (`secure.gravatar.com`) | Bloqué, 31 août 2026 | Commentaires et wp-admin ralentis | Cravatar (cravatar.cn), WeAvatar ou avatars désactivés |
| Google Fonts | Répond au centre de données, pas à la ligne résidentielle, 28 et 30 août 2026 | Texte retardé, puis police de secours | Fichiers WOFF2 dans le thème |
| Google reCAPTCHA | Bloqué aux deux points de mesure, 28 et 30 août 2026 | Formulaire impossible à envoyer | Alibaba Cloud Captcha (阿里云验证码), Tencent Captcha (天御), GeeTest (极验) |
| Google Tag Manager | Répond au centre de données, pas à la ligne résidentielle, 28 et 30 août 2026 | Conteneur et envoi de données perdus | Baidu Tongji (百度统计), Matomo ou Plausible hébergé localement |
| jsDelivr (`cdn.jsdelivr.net`) | Accessible mais lent, 28 et 30 août 2026 | Médiane de 660 ms, 95e percentile de 1 757 ms | Bibliothèque intégrée au projet |
| cdnjs, unpkg | Accessibles, sans mesure datée que nous puissions étayer | Non testés sur une ligne grand public | Bibliothèque intégrée au projet |
| WP Rocket Remove Unused CSS | Aller-retour à l’étranger | Chaque page est récupérée depuis l’étranger | Générer le CSS critique localement |
| QUIC.cloud, traitement des images | Aller-retour à l’étranger | Chaque image quitte le pays puis revient | Traiter les images avant leur envoi |

Les états et dates des six premières lignes proviennent des sources GreatFire et 21YunBox citées plus haut. Les deux dernières lignes décrivent l’architecture des plugins. Elles ne donnent aucun verdict d’accessibilité : nous n’avons pas mesuré ces services depuis la Chine.

## Questions fréquentes

**Un plugin peut-il tout corriger ?**

Non. Les appels externes proviennent du thème, des réglages du constructeur et des scripts marketing. Aucun plugin du répertoire ne peut intervenir partout. Un outil de cache ou de performance aide à les repérer. Leur suppression demande une intervention manuelle, suivie d’un test depuis une connexion chinoise.

**Peut-on effectuer le test avec un VPN ?**

Un VPN utilisé depuis l’étranger emprunte son propre réseau et son propre résolveur. Le résultat décrit donc cette connexion. Utilisez un point de mesure en Chine continentale : un nœud de test, un collègue sur une ligne chinoise ou un outil qui y réalise ses vérifications. Le choix d’un mauvais point de test explique souvent un diagnostic trop rassurant.

**Faut-il abandonner Elementor ?**

Non. Elementor fonctionne sur un serveur continental et deux réglages permettent de corriger le chargement des polices. L’éditeur sollicite des hôtes dont nous n’avons pas testé l’accès depuis la Chine. Prévoyez que l’administration puisse être plus lente que la consultation et vérifiez séparément les pages publiques.

**Combien d’hôtes tiers un site destiné à la Chine devrait-il solliciter ?**

Nous visons zéro hôte tiers sur le chemin critique, un objectif accessible pour un site vitrine. Les statistiques, le chat et les vidéos restent généralement présents, avec des services chinois en remplacement. La page doit s’afficher correctement lorsque tous les hôtes étrangers sont bloqués. C’est le critère retenu sur notre page [WordPress en Chine](/fr/wordpress-en-chine/) pour une réalisation complète.
