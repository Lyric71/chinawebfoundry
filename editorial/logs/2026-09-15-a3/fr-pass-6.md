---
title: "Plugins WordPress : les blocages en Chine"
subtitle: "Les hôtes externes appelés par vos plugins WordPress, leurs défaillances en Chine et les vérifications à effectuer."
summary: "WordPress en Chine : auditer les dépendances avec des tests datés et corriger les appels des scripts, polices, formulaires et services distants."
visual: "/images/guides/wordpress-plugins-china.webp"
order: 35
published: true
publishedAt: 2026-09-15
updatedAt: 2026-09-15
category: Technology
author: cyril-drouin
---

L’audit des plugins WordPress en Chine commence par les hôtes qu’ils sollicitent. Une requête de script en échec peut retarder la page. Un captcha défaillant peut aussi empêcher l’envoi d’une demande sur une page qui s’affiche normalement. Hébergez les fichiers indispensables sur votre serveur, puis testez formulaires et éditeur sur les connexions continentales qu’utilisent vos visiteurs et votre équipe.

Les tests publiés ci-dessous montrent l’effet du réseau utilisé. La dernière colonne décrit uniquement la ligne résidentielle testée. Son verdict ne s’étend pas aux autres connexions.

| Hôte | Alibaba Cloud (阿里云), Zhangjiakou, 28 août 2026 | Ligne résidentielle China Mobile (中国移动), Pékin, 30 août 2026 | Verdict sur la ligne résidentielle |
|---|---|---|---|
| `fonts.googleapis.com` | 72 sur 72, médiane TTFB de 111 ms | 0 sur 54 | bloqué |
| `fonts.gstatic.com` | 72 sur 72, médiane TTFB de 102 ms | 0 sur 6 | bloqué |
| `cdn.jsdelivr.net` | 72 sur 72, médiane TTFB de 660 ms, p95 de 1 757 ms | 36 sur 36 | accessible |
| `www.googletagmanager.com` | 72 sur 72, médiane TTFB de 118 ms | 0 sur 112 | bloqué |
| `www.google.com/recaptcha` | 0 sur 72 | 0 sur 18 | bloqué |

> Ces nombres de requêtes abouties et ces délais proviennent de 21YunBox : Alibaba Cloud (阿里云), Zhangjiakou, le 28 août 2026, avec un échantillon toutes les 10 minutes pendant 12 heures et un délai d’expiration de 30 secondes ; puis une ligne résidentielle China Mobile (中国移动) à Pékin, le 30 août 2026, sur 88 sites et 264 chargements de page.
> Source : 21YunBox, A Day of Third-Party Requests From Inside China, août 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Le TTFB est le délai avant réception du premier octet ; p95 désigne le 95e percentile. La sonde cloud et le navigateur sur la ligne résidentielle ne suivent pas le même protocole. L’utilisation réelle de la page exige donc un contrôle distinct. Les sources ont été revues le 15 septembre 2026, sans modifier les dates des tests.

## La balise script qui peut retarder une page

Recherchez les appels à jQuery hébergé par Google Hosted Libraries, sur `ajax.googleapis.com`.

> GreatFire classe `ajax.googleapis.com` comme bloqué, selon son dernier test concluant depuis la Chine continentale, le 22 août 2026.
> Source : GreatFire, août 2026. https://en.greatfire.org/https/ajax.googleapis.com

Lorsqu’un thème charge un script classique sans `async` ni `defer`, le navigateur suspend l’analyse du HTML pendant le téléchargement et l’exécution. Si la balise se trouve tôt dans le document, une connexion qui reste en attente peut retarder le contenu placé après elle. L’effet dépend de la balise et de son emplacement.

> Par défaut, les scripts classiques dépourvus d’`async`, de `defer` ou du comportement de module bloquent l’analyse du HTML. Le rendu relève d’un mécanisme distinct.
> Source : MDN, référence de l’élément script, mise à jour le 9 mai 2026. https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script

Remplacez la copie externe par le jQuery fourni avec WordPress si les versions sont compatibles. Vérifiez les scripts du thème qui en dépendent avant de modifier l’ordre de chargement. Supprimer une bibliothèque encore nécessaire à un menu ou à un formulaire provoque une autre panne.

Pour reCAPTCHA, complétez les chiffres du tableau par un test fonctionnel. Envoyez une demande de test et vérifiez sa réception. La page peut s’afficher alors que le captcha obligatoire échoue. Conservez une protection contre le spam pendant l’essai d’un autre dispositif.

## Examiner chaque CDN séparément

jsDelivr a terminé ses requêtes depuis les deux connexions testées. Le tableau donne sa latence au centre de données. Le test résidentiel établit que les requêtes aboutissent, sans fournir de mesure de latence comparable.

Pour une bibliothèque indispensable à la page, envisagez un hébergement sur votre serveur d’origine. Testez son intégration et consignez la version utilisée. La personne chargée des prochaines mises à jour saura ainsi quel fichier remplacer.

Nous ne disposons pas de test complet, daté et associé à un lieu précis pour cdnjs et unpkg. Leur état reste donc non vérifié ici. Incluez dans votre audit les requêtes vers `cdnjs.cloudflare.com` ou `unpkg.com`.

## Google Fonts dépend de la connexion

Lisez les deux lignes consacrées aux polices ensemble : les deux hôtes ont répondu à toutes les requêtes du centre de données et à aucune sur la ligne résidentielle testée. L’hébergement local supprime cet appel externe du navigateur de vos visiteurs.

Dans Elementor, vérifiez explicitement le réglage d’hébergement local des polices.

> Dans son annonce du 18 septembre 2025, Elementor indique que Load Google Fonts Locally est désactivé par défaut. Le réglage se trouve dans Elementor > Settings > Performance.
> Source : Elementor, ticket 32838, 18 septembre 2025. https://github.com/elementor/elementor/issues/32838

Après activation de l’hébergement local, videz le cache des pages. Examinez ensuite les requêtes de polices sur la page publique et vérifiez que les fichiers proviennent de votre domaine. Réglages et fichiers enregistrés peuvent varier d’une installation à l’autre ; contrôlez aussi le résultat après une mise à jour.

Ouvrez ensuite l’éditeur. L’accès à `my.elementor.com` et `assets.elementor.com` depuis la Chine continentale reste non vérifié. Même si la page publique fonctionne, il faut encore vérifier que les rédacteurs peuvent travailler normalement.

## Les appels externes du cœur de WordPress

Un thème peut utiliser une déclaration de police que WordPress conserve par compatibilité. Recherchez le code qui déclenche effectivement la requête.

> Le fichier `script-loader.php` de WordPress conserve des enregistrements Google Fonts pour Open Sans et Noto Serif. Ses commentaires précisent que le cœur ne les utilise plus, mais que des thèmes ou plugins peuvent encore en dépendre.
> Source : code source de WordPress, consulté le 15 septembre 2026. https://raw.githubusercontent.com/WordPress/WordPress/master/wp-includes/script-loader.php

Recherchez les appels à Gravatar dans les pages publiques comme dans wp-admin.

> GreatFire classe `secure.gravatar.com` comme bloqué, avec un dernier test le 31 août 2026. Le fournisseur ne précise ni la ville ni l’opérateur.
> Source : GreatFire, août 2026. https://en.greatfire.org/https/secure.gravatar.com

Si les avatars n’apportent rien au site, envisagez de les désactiver. Vérifiez le résultat sur les pages de commentaires et les écrans courants de l’éditeur. Notre [guide sur le blocage de WordPress en Chine](/fr/ressources/guide-web-chine/wordpress-bloque-en-chine/) examine les autres dépendances.

## Quand un service distant doit accéder au site

Avant d’activer un réglage de performance, cherchez quelle machine effectue le traitement.

> WP Rocket envoie les URL des pages à son API, qui les visite pour produire le CSS utilisé. Le site doit être accessible publiquement à ce service.
> Source : base de connaissances WP Rocket, Remove Unused CSS, mise à jour le 1er juin 2026. https://docs.wp-rocket.me/article/1529-remove-unused-css

Si votre serveur d’origine se trouve en Chine continentale, vérifiez que le service parvient à le joindre. Consultez l’état du traitement et les journaux du pare-feu avant de modifier les règles d’accès. L’onglet Network du navigateur ne montre pas tout le trajet : un échec du traitement distant demande un diagnostic séparé.

> QUIC.cloud reçoit des lots d’images de la médiathèque et les traite sur les nœuds de son service.
> Source : QUIC.cloud, Image Optimization, 6 avril 2026. https://docs.quic.cloud/services/imageopt/

Cette documentation établit l’existence d’un traitement externe. Elle ne précise ni son accessibilité depuis la Chine continentale ni le lieu où votre traitement s’exécute. Vous pouvez également compresser les images avant leur envoi. Notre [guide de l’hébergement WordPress en Chine](/fr/ressources/guide-web-chine/hebergement-wordpress-chine/) traite du choix du serveur d’origine, à examiner avec ces réglages.

## Auditer les plugins WordPress en Chine

Dans Chrome DevTools, ouvrez l’onglet Network, rechargez la page et examinez les colonnes Domain et Initiator. Notez quel thème, plugin ou script lance chaque requête. Recommencez sur une page de contact et pendant l’utilisation de l’éditeur.

Notre [China Site Scanner gratuit](/fr/china-site-scanner/) repère des dépendances connues dans le code source du site. Il ne peut pas certifier l’accès réseau. Complétez cet inventaire par un test dans un navigateur sur une connexion continentale. Consignez la ville, l’opérateur, la date et l’action tentée. Conservez les échecs comme les envois réussis pour que le développeur puisse reproduire le problème.

Joignez aux résultats les versions des plugins et les réglages modifiés. Corrigez une dépendance qui empêche les demandes de contact avant une image facultative. Après chaque modification, videz le cache, rechargez la page et répétez l’action concernée. Vérifiez à nouveau après les mises à jour du thème ou du constructeur, qui peuvent rétablir des appels externes.

## Les remplacements, hôte par hôte

Identifiez le composant à l’origine de la requête pour savoir où intervenir. Les verdicts réseau se limitent aux données datées citées plus haut. Les paires de dates correspondent, dans l’ordre, au test du centre de données puis au test résidentiel.

| Dépendance | État constaté | Point à vérifier | Remplacement ou action |
|---|---|---|---|
| Google Hosted Libraries | Bloqué, GreatFire, 22 août 2026 | Script précoce retardant l’analyse | jQuery local compatible |
| Google Fonts | Centre de données accessible ; ligne résidentielle testée bloquée, 28/30 août 2026 | Origine des polices | Héberger les fichiers localement |
| Gravatar | Bloqué, GreatFire, 31 août 2026 | Requêtes d’avatars | Désactiver les avatars inutiles |
| Google reCAPTCHA | Échec aux deux points de mesure, 28/30 août 2026 | Envoi d’une demande | Tester un autre dispositif de vérification |
| Google Tag Manager | Centre de données accessible ; ligne résidentielle testée bloquée, 28/30 août 2026 | Chargement du conteneur et réception des événements | Examiner chaque balise |
| jsDelivr | Requêtes abouties aux deux points, 28/30 août 2026 | Bibliothèque indispensable | Intégrer les fichiers localement |
| cdnjs, unpkg | Non vérifiés ici | Chaque URL appelée | Tester ou héberger localement |
| WP Rocket Used CSS | Architecture documentée ; réseau non vérifié | Accès du service à la page | Vérifier la fin du traitement |
| Images QUIC.cloud | Architecture documentée ; réseau non vérifié | Réussite du traitement | Compresser avant l’envoi |

## Questions fréquentes

**Un plugin peut-il tout corriger ?**

Identifiez d’abord le composant qui lance la requête. Il faudra peut-être modifier un réglage du thème ou du constructeur, tandis que les balises marketing demandent un examen séparé. Choisissez un outil une fois l’appel à remplacer identifié. Testez ensuite la page sur une connexion continentale et intégrez ce contrôle aux mises à jour.

**Peut-on effectuer le test avec un VPN ?**

Le test décrit le réseau par lequel sort le trafic. Une sortie VPN à l’étranger ne représente pas un visiteur continental. Notez le lieu de sortie et le résolveur avant d’interpréter le résultat. Pour la recette, utilisez une connexion continentale connue et accomplissez les mêmes actions qu’un visiteur, y compris l’envoi du formulaire ou la commande.

**Faut-il abandonner Elementor ?**

Auditez séparément les pages publiques et l’éditeur avant de décider. Le réglage des polices locales traite une dépendance. Testez les autres requêtes et vérifiez que votre rédacteur peut effectuer son travail habituel. Les hôtes Elementor non testés mentionnés plus haut empêchent de donner un verdict global de compatibilité continentale pour votre installation.

**Combien d’hôtes tiers un site destiné à la Chine devrait-il solliciter ?**

Le contenu indispensable doit pouvoir s’afficher sans dépendre d’hôtes étrangers non testés. Vérifiez ensuite chaque service selon sa fonction : réception des demandes pour un formulaire, réception des événements pour les statistiques. Notre page [WordPress en Chine](/fr/wordpress-en-chine/) aborde les autres choix de réalisation. Une liste d’hôtes courte exige, elle aussi, un test fonctionnel.
