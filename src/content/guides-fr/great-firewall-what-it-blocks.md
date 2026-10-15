---
title: "Ce que bloque le Grand Pare-feu, et les parades"
subtitle: "Un blocage, c'est le cas simple. La dépendance qui répond puis n'aboutit jamais, personne dans votre équipe ne la verra passer."
summary: "Ce qu'un site web peut atteindre depuis la Chine, hôte par hôte, avec pour chaque ligne le point de mesure et la date du test."
visual: "/images/guides/great-firewall-what-it-blocks.webp"
order: 7
published: true
publishedAt: 2026-04-01
updatedAt: 2026-10-16
reviewBy: 2026-11-15
category: Technology
---

Un blocage ne passe pas inaperçu. Quelqu'un au bureau le signale, et le problème est réglé. La panne qui coûte cher, elle, ne fait aucun bruit : l'hôte répond, le premier octet arrive en une demi-seconde, puis la requête n'aboutit jamais.

> Wix a livré son premier octet en 532 ms (médiane), sans qu'aucun des 3 chargements de page n'aboutisse en 60 secondes. Mesure prise depuis une instance Alibaba Cloud (阿里云) de la région cn-zhangjiakou, le 30 août 2026.
> Source : 21YunBox, Does Wix Work in China?, août 2026, page revue le 7 octobre 2026. https://www.21cloudbox.com/support/wix-china.html

Intégré à une page, un widget de ce genre laisse tout le reste s'afficher normalement. Le widget, lui, reste vide, et aucun journal ne consigne la moindre erreur. Une équipe basée hors de Chine peut ainsi ouvrir le site chaque matin pendant un an sans rien remarquer.

Sous la surface tourne la machinerie que tout le monde décrit : DNS empoisonnés, plages d'adresses IP bloquées, contenu des paquets inspecté en temps réel. Le pare-feu traque aussi les signatures VPN, et [une installation WordPress standard embarque plusieurs dépendances qui s'y heurtent](/fr/wordpress-en-chine/). Tout cela est bien réel. Les demandes de contact perdues, elles, tiennent presque toujours à une connexion restée ouverte que personne ne surveille.

## Comment fonctionne vraiment le Grand Pare-feu

5 dispositifs tournent en parallèle. Chacun intercepte un type de trafic différent à un niveau différent.

| Couche | Méthode | Effet |
|---|---|---|
| Empoisonnement DNS | Renvoie de fausses adresses IP | Envoie les requêtes vers les domaines bloqués dans le vide |
| Blocage d'IP | Coupe des plages d'adresses IP | Rend inaccessibles les IP connues de services étrangers au niveau réseau |
| Inspection approfondie des paquets | Lit le contenu des paquets | Interrompt les connexions dont le contenu correspond à des schémas signalés |
| Filtrage d'URL | Filtre des URL précises | Bloque certaines pages par mot-clé sans toucher au domaine entier |
| Détection VPN | Identifie les protocoles VPN | Ralentit ou bloque le trafic VPN par signature |

**L'empoisonnement DNS** constitue la couche la plus basique. Quand un internaute en Chine demande un domaine bloqué, le pare-feu renvoie une adresse IP fausse. La requête n'expire pas, elle aboutit ailleurs. L'utilisateur tombe sur une erreur ou une page blanche, sans comprendre pourquoi.

**Le blocage d'IP** va plus loin. Des plages entières associées à des services étrangers sont coupées au niveau réseau. Contourner l'empoisonnement DNS via un résolveur alternatif ne sert à rien si l'IP elle-même reste hors d'atteinte.

**L'inspection approfondie des paquets** est la couche qui change tout. Le système ne se contente plus de vérifier la destination, il analyse le contenu. Dès qu'un paquet colle à un schéma signalé, la connexion est coupée en vol. C'est ce qui distingue le dispositif chinois des filtrages nationaux plus rudimentaires.

> L'inspection approfondie des paquets analyse le contenu de votre trafic, et plus seulement sa destination. C'est cette couche qui rend le Grand Pare-feu fondamentalement plus difficile à contourner que tout autre système existant.

**Le filtrage d'URL** opère à l'échelle de la page. Un domaine peut rester accessible, certaines URL contenant des mots-clés précis sont filtrées. Une intervention chirurgicale au niveau de la page.

**La détection VPN** est le mécanisme le plus récent. Le pare-feu reconnaît les protocoles VPN à leur signature et les ralentit ou les coupe. Un VPN grand public qui passait il y a 2 ans peut être devenu inutilisable. La capacité de détection progresse en continu.

## Ce qui est bloqué (et pourquoi cela casse votre site)

Les entreprises étrangères fixent leur attention sur la dimension politique du Grand Pare-feu. Pour leur site, ce sont les dépendances techniques qui comptent.

| Catégorie | Services bloqués |
|---|---|
| Google | Recherche, Gmail, Maps, YouTube, Analytics, Ads |
| Réseaux sociaux | Facebook, Instagram, WhatsApp, Messenger, Twitter/X, Reddit, Pinterest |
| Outils professionnels | Dropbox, Slack, Notion, Trello |
| Divertissement | Netflix, Spotify, Twitch |
| Presse | New York Times, Wall Street Journal, BBC |
| Encyclopédie | Wikipédia (édition chinoise) |

Depuis une connexion en Chine continentale, la recherche Google, Gmail, Maps, YouTube et Google Ads sont inutilisables. Pour un site web, c'est [Google Analytics](/fr/ressources/guide-web-chine/google-analytics-chine/) qui compte ; il figure dans le tableau plus bas avec sa date de test, comme tout ce qui figure sur cette page. Le dernier test GreatFire en échec sur `www.google-analytics.com` date du 24 juillet 2026. Une balise déclenchée depuis une page en Chine envoie une requête de mesure qui n'arrive jamais : les données sont perdues, que le script du conteneur se soit chargé ou non.

Google Fonts fait figure d'exception, et les erreurs à son sujet vont dans les deux sens. Il mérite donc quelques lignes de plus.

> Depuis une instance Alibaba Cloud (阿里云) de la région cn-zhangjiakou, le 28 août 2026, avec un relevé toutes les dix minutes pendant douze heures, `fonts.googleapis.com` a mené à terme 72 requêtes sur 72, avec un premier octet médian à 111 ms. Depuis une ligne résidentielle China Mobile (中国移动) à Pékin, le 30 août 2026, sur 264 chargements de page, le même hôte a répondu 0 fois sur 54.
> Source : 21YunBox, A Day of Third-Party Requests From Inside China, août 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Face à ces deux mesures, aucune affirmation catégorique ne tient. Google Fonts se résout depuis les centres de données du continent, mais bien souvent pas sur les connexions grand public. C'est tout l'intérêt d'héberger ses polices soi-même : on élimine une variable qui change selon le réseau, le résolveur et l'heure. `fonts.google.com`, l'interface de consultation, est un hôte à part : GreatFire l'a trouvé perturbé à 100 % lors de ses deux derniers tests concluants, dont le plus récent date du 30 septembre 2026.

Facebook, Instagram, WhatsApp, Messenger. Bloqués. Twitter/X, Reddit, Pinterest. Bloqués. L'édition chinoise de Wikipédia. Bloquée.

Les outils professionnels dont vivent les entreprises occidentales : Dropbox, Slack, Notion, Trello. Bloqués. Toute intégration avec l'un d'entre eux, toute ressource chargée depuis leurs domaines, est morte en Chine.

Netflix, Spotify, Twitch. Bloqués. La plupart des grands titres de presse occidentaux, dont le New York Times, le Wall Street Journal et la BBC. Bloqués.

Ce qui surprend le plus les entreprises se joue au-delà des services bloqués eux-mêmes. Chaque script, police, widget ou appel API qui sollicite en arrière-plan un domaine bloqué casse également. Un simple lien Google Fonts oublié dans le CSS peut laisser la page blanche chez tout visiteur dont le réseau ne lui répond jamais. Une seule balise analytique peut geler le rendu de la page.

> Un simple lien Google Fonts oublié dans votre CSS peut laisser la page blanche chez tout visiteur dont le réseau ne lui répond jamais. Le mal se cache dans votre code, dans les dépendances dont vous aviez oublié l'existence.

## Chaque dépendance recensée, avec la date de son dernier test

Les pages les mieux classées sur ces questions ne fournissent aucune preuve. Dans toutes les pages de compatibilité que nous avons lues chez Chinafy, chez AppInChina ou dans les petites agences, on ne trouve ni tableau, ni date de test, ni lieu de mesure, ni chiffre de latence. Les spécialistes de la mesure publient pourtant leurs chiffres. Les pages censées vous dire ce qui casse ne les citent pas. Le tableau ci-dessous comble ce manque, ligne par ligne.

Précisons l'origine de ces chiffres. Chaque ligne vient de GreatFire ou de 21YunBox, sourcée et datée. Le 7 octobre 2026, 21YunBox a retiré l'essentiel de ses mesures outil par outil. Les lignes qui en dépendaient affichent désormais le verdict de GreatFire, ou la mention « non testé » lorsque GreatFire n'en a rendu aucun.

Le tableau réunit deux types de preuves, qui ne répondent pas à la même question. Un verdict d'accessibilité indique si l'on parvient tout simplement à se connecter à un hôte. Un chargement chronométré mesure le temps qu'a mis le site du fournisseur à se charger depuis une sonde identifiée en Chine continentale. Ce second chiffre donne une idée du comportement du point d'accès qu'appelle le navigateur de votre visiteur, sans le mesurer directement. Quand les deux sources divergent, nous publions les deux, sans en faire la moyenne.

La colonne Verdict compte six valeurs. Deux appellent une lecture attentive : « intermittent » et « diverge selon le point de mesure ». Ce sont les cas où un hôte semble en parfaite santé aux yeux du dernier qui l'a vérifié.

| Verdict | Signification |
|---|---|
| Accessible | Se connecte et aboutit |
| Lent | Aboutit, mais avec un coût à connaître |
| Répond puis cale | Le premier octet arrive, mais le chargement n'aboutit pas dans les 60 secondes |
| Intermittent | Interférences lors des derniers tests concluants, sans blocage net |
| Bloqué | Aucune connexion exploitable |
| Diverge selon le point de mesure | Un centre de données et une ligne domestique livrent des verdicts opposés sur le même hôte |

<!-- BEGIN DEPENDENCY TABLE: GENERATED FROM src/data/chinaDependencies.ts, DO NOT EDIT -->

### Mesure d'audience

| Service | Hôte ou cible du test | Verdict | Mesure | Point de mesure | Source et date |
|---|---|---|---|---|---|
| Google Analytics | `www.google-analytics.com` | Bloqué | Verdict d'accessibilité seul | sans objet | GreatFire, 24 juillet 2026 |
| Google Tag Manager | `www.googletagmanager.com` | Diverge selon le point de mesure | 72 sur 72 (premier octet à 118 ms) et 0 sur 112 | Alibaba Cloud (阿里云) cn-zhangjiakou et China Mobile (中国移动) à Pékin | 21YunBox, 28 et 30 août 2026 |
| Meta Pixel | `connect.facebook.net` | Bloqué | Verdict d'accessibilité seul | sans objet | GreatFire, 27 mai 2026 |
| Hotjar | `static.hotjar.com` | Intermittent | Interférences sur 1 des 2 derniers tests concluants | sans objet | GreatFire, 30 septembre 2026 |
| Amplitude, hôte du script | `cdn.amplitude.com` | Accessible | Verdict d'accessibilité seul | sans objet | GreatFire, 14 septembre 2026 |
| Amplitude, hôte des événements | `api.amplitude.com` | Accessible | Verdict d'accessibilité seul | sans objet | GreatFire, 10 septembre 2026 |
| Microsoft Clarity | `www.clarity.ms` | Accessible | Verdict d'accessibilité seul | sans objet | GreatFire, 15 septembre 2026 |
| Mixpanel, hôte du script | `cdn.mxpnl.com` | Intermittent | Interférences sur 100 % des tests concluants récents (1 test) | sans objet | GreatFire, 6 septembre 2026 |
| Mixpanel, hôte des événements | `api.mixpanel.com` | Accessible | Verdict d'accessibilité seul | sans objet | GreatFire, 19 septembre 2026 |
| Segment | `api.segment.io` | Accessible | Verdict d'accessibilité seul | sans objet | GreatFire, 15 septembre 2026 |
| Plausible | `plausible.io` | Intermittent | Interférences sur 1 des 2 derniers tests concluants | sans objet | GreatFire, 20 août 2026 |
| Matomo cloud | Non sondé | Non testé | Aucun test enregistré | sans objet | sans objet |

### Formulaires et messagerie

| Service | Hôte ou cible du test | Verdict | Mesure | Point de mesure | Source et date |
|---|---|---|---|---|---|
| Typeform | `form.typeform.com` | Accessible | Verdict d'accessibilité seul | sans objet | GreatFire, 30 septembre 2026 |
| Mailchimp | `cdn-images.mailchimp.com` | Bloqué | Verdict d'accessibilité seul | sans objet | GreatFire, 10 septembre 2026 |
| hCaptcha | `api2.hcaptcha.com` | Accessible | Verdict d'accessibilité seul | sans objet | GreatFire, 14 septembre 2026 |
| Cloudflare Turnstile | `challenges.cloudflare.com` | Accessible | Verdict d'accessibilité seul | sans objet | GreatFire, 11 octobre 2026 |
| Calendly | `calendly.com` | Accessible | Verdict d'accessibilité seul | sans objet | GreatFire, 3 octobre 2026 |
| Intercom | `widget.intercom.io` | Accessible | Verdict d'accessibilité seul | sans objet | GreatFire, 23 septembre 2026 |
| Zendesk | `static.zdassets.com` | Accessible | Verdict d'accessibilité seul | sans objet | GreatFire, 8 octobre 2026 |
| Drift | `js.driftt.com` | Non testé | Aucun test enregistré | sans objet | GreatFire n'a jamais testé cet hôte |
| Crisp | Non sondé | Non testé | Aucun test enregistré | sans objet | sans objet |
| Tawk.to | Non sondé | Non testé | Aucun test enregistré | sans objet | sans objet |

### Contenus intégrés

| Service | Hôte ou cible du test | Verdict | Mesure | Point de mesure | Source et date |
|---|---|---|---|---|---|
| Disqus | `disqus.com` | Bloqué | 41 URL testées sur 43 bloquées, 2 perturbées | sans objet | GreatFire, 13 septembre 2026 |
| SoundCloud | `w.soundcloud.com` | Bloqué | Verdict d'accessibilité seul | sans objet | GreatFire, 24 juin 2026 |
| Spotify | `open.spotify.com` | Bloqué | Verdict d'accessibilité seul | sans objet | GreatFire, 12 septembre 2026 |
| Instagram | `www.instagram.com` | Bloqué | Verdict d'accessibilité seul | sans objet | GreatFire, 3 octobre 2026 |
| X, widget de fil d'actualité | `platform.twitter.com` | Bloqué | Verdict d'accessibilité seul | sans objet | GreatFire, 7 juillet 2026 |
| Wistia | `fast.wistia.com` | Intermittent | 9 requêtes sur 15 ont reçu une réponse ; lecture vidéo complète non mesurée | China Mobile à Pékin | 21YunBox, 30 août 2026 |
| Loom | Non sondé | Non testé | Aucun test enregistré | sans objet | sans objet |

### Cartes

| Service | Hôte ou cible du test | Verdict | Mesure | Point de mesure | Source et date |
|---|---|---|---|---|---|
| Mapbox, télémétrie | `events.mapbox.com` | Bloqué | Verdict d'accessibilité seul, relevé vieux de six mois | sans objet | GreatFire, 12 mars 2026 |
| Mapbox, tuiles et API | `api.mapbox.com` | Accessible | Verdict d'accessibilité seul | sans objet | GreatFire, 31 août 2026 |
| Tuiles OpenStreetMap | `tile.openstreetmap.org` | Bloqué | 71 URL openstreetmap.org testées, toutes bloquées | sans objet | GreatFire, 7 septembre 2026 |

### Plateformes

| Service | Hôte ou cible du test | Verdict | Mesure | Point de mesure | Source et date |
|---|---|---|---|---|---|
| Wix | `wix.com` | Répond puis cale | 0 sur 3 dans les 60 s, premier octet à 532 ms | Alibaba Cloud cn-zhangjiakou | 21YunBox, 30 août 2026 |
| Shopify | `cdn.shopify.com` | Accessible | Connexion normale sur les 2 tests concluants récents | sans objet | GreatFire, 8 octobre 2026 |
| Webflow | `webflow.com` | Intermittent | Interférences sur 100 % des tests concluants récents (1 test) | sans objet | GreatFire, 23 août 2026 |
| Squarespace | `www.squarespace.com` | Accessible | Verdict d'accessibilité seul | sans objet | GreatFire, 3 octobre 2026 |
| Netlify | Non sondé | Non testé | Aucun test enregistré | sans objet | sans objet |
| Sanity | Non sondé | Non testé | Aucun test enregistré | sans objet | sans objet |

### Infrastructure

| Service | Hôte ou cible du test | Verdict | Mesure | Point de mesure | Source et date |
|---|---|---|---|---|---|
| Algolia | `algolia.net` | Intermittent | Interférences sur 100 % des 2 derniers tests concluants, relevées sur le domaine racine ; les hôtes de recherche propres à chaque application n'ont jamais été testés | sans objet | GreatFire, 31 août 2026 |
| Firebase | `firebase.google.com` | Intermittent | Interférences sur 100 % des 2 derniers tests concluants | sans objet | GreatFire, 14 septembre 2026 |
| AWS CloudFront | `aws.amazon.com/cloudfront` | Accessible | 3 sur 3 (premier octet à 665 ms) et 3 sur 3 (718 ms) | Alibaba Cloud cn-zhangjiakou et Connexion résidentielle à Pékin, opérateur non précisé | 21YunBox, 28 et 30 août 2026 |
| Sentry | `browser.sentry-cdn.com` | Intermittent | Interférences sur 100 % des tests concluants récents (1 test) | sans objet | GreatFire, 1er octobre 2026 |
| Bootstrap CDN | Non sondé | Non testé | Aucun test enregistré | sans objet | sans objet |

### Paiements

| Service | Hôte ou cible du test | Verdict | Mesure | Point de mesure | Source et date |
|---|---|---|---|---|---|
| PayPal | `www.paypal.com` | Accessible | Verdict d'accessibilité seul | sans objet | GreatFire, 25 septembre 2026 |
| Stripe | `js.stripe.com` | Non testé | Aucun test enregistré. Voir plus bas : l'accessibilité n'est pas ici la question déterminante | sans objet | sans objet |

<!-- END DEPENDENCY TABLE: GENERATED -->

### En attente de mesure

Aucun test daté n’est consigné dans ce relevé pour Crisp, Tawk.to, Loom, Sanity, Netlify, Bootstrap CDN ou `js.stripe.com`. Le chargeur HTTPS de HubSpot, `js.driftt.com` pour Drift et `cdn.matomo.cloud` restent également sans résultat exploitable dans ce relevé. Un test du site d’un fournisseur ne permet pas de conclure sur le fonctionnement de son widget.

Adobe Fonts, Font Awesome et le LinkedIn Insight Tag disposent de résultats datés. Ces services disposent d’un verdict attribué et daté.

> GreatFire indique que `use.typekit.net` et `snap.licdn.com` étaient accessibles le 22 septembre 2026, avec un test concluant chacun. Même verdict pour `use.fontawesome.com` le 11 octobre 2026 et `kit.fontawesome.com` le 13 septembre 2026, avec un test concluant chacun.
> Source : GreatFire, septembre et octobre 2026. https://en.greatfire.org/https/use.typekit.net ; https://en.greatfire.org/https/snap.licdn.com ; https://en.greatfire.org/https/use.fontawesome.com ; https://en.greatfire.org/https/kit.fontawesome.com

Sur une connexion résidentielle, les résultats diffèrent. L’hôte d’Adobe n’y a pas répondu. Pour le service de vérification, le relevé compte les requêtes ayant reçu une réponse. Ils ne mesurent pas l’achèvement du parcours de vérification.

> Sur une ligne résidentielle China Mobile (中国移动) à Pékin, le 30 août 2026, 21YunBox n’a reçu aucune réponse aux 11 requêtes vers `use.typekit.net` ni aux 6 requêtes vers `static.hotjar.com`. Le relevé fait état de 6 échecs sur 15 requêtes vers `fast.wistia.com`, et 3 sur 12 vers `challenges.cloudflare.com`. GreatFire indique séparément que l’URL du script Turnstile était accessible lors de ses 2 tests concluants, le dernier datant du 11 octobre 2026.
> Source : 21YunBox, 30 août 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html ; GreatFire, 11 octobre 2026. https://en.greatfire.org/https/challenges.cloudflare.com/turnstile/v0/api.js

Pour Marketo, le verdict d’accessibilité de `munchkin.marketo.net` date du 31 mai 2026 et remonte à plus de 90 jours. Les sources ont été vérifiées le 16 octobre 2026 ; les dates des tests restent inchangées. La prochaine révision éditoriale est fixée au 15 novembre 2026.

> Source : GreatFire, 31 mai 2026. https://en.greatfire.org/https/munchkin.marketo.net

### Pourquoi Stripe reste hors de ce tableau

C'est le nom que l'on s'attend à voir figurer dans un tableau de ce genre. Son cas relève pourtant d'une autre question. Que `js.stripe.com` se charge ou non depuis Shanghai importe peu : tout se joue sur l'agrément.

> La Chine continentale ne figure pas dans la liste des pays où Stripe permet d'ouvrir un compte. Hong Kong, si.
> Source : Stripe, Global availability, consulté le 22 septembre 2026. https://stripe.com/global

Aucune acquisition locale n'est possible pour une entité du continent, que le script atteigne le navigateur ou non ; peaufiner sa diffusion ne sert donc à rien. La question utile est celle de l'encaissement via Alipay (支付宝), WeChat Pay (微信支付) et UnionPay (银联), et [notre guide consacré à l'exploitation d'une boutique WooCommerce en Chine](/fr/ressources/guide-web-chine/woocommerce-china-store-guide/) est ce que nous avons publié de plus proche sur ce point.

Le verdict du tableau porte sur `www.paypal.com`. Il ne permet pas de savoir si un paiement aboutit.

## Stratégies pour les entreprises étrangères

Le pare-feu ne se perce pas. On peut bâtir un site qui n'a pas besoin de le traverser.

| Stratégie | Ce qu'elle résout |
|---|---|
| Hébergement continental avec ICP | Vitesse, classement, conformité |
| CDN chinois | Mise en cache sur des noeuds en Chine continentale |
| Remplacement des dépendances étrangères | Google Fonts vers polices locales, GA vers Baidu Tongji, Maps vers Baidu Maps |
| Hébergement à Hong Kong | Solution intermédiaire, sans ICP |
| Lucidité sur les VPN | Zone grise juridique, distinction entre usage professionnel et personnel |

**Héberger en Chine continentale avec un dépôt ICP.** La voie la plus nette. Le site vit à l'intérieur du pare-feu au lieu de batailler pour le franchir. Les requêtes restent dans le pays, Baiduspider explore le site sans passer la frontière, et la conformité est assurée. Pour qui s'engage sur le marché chinois, c'est là qu'il faut être.

**Passer par un CDN chinois** pour mettre le contenu en cache sur des noeuds implantés en Chine continentale. Même avec un serveur d'origine hors du pays, un CDN doté de PoP continentaux sert les pages aux internautes chinois sans que chaque requête doive traverser le pare-feu.

**Remplacer chaque dépendance étrangère.** L'étape la plus souvent sautée. Google Fonts doit céder la place à des polices hébergées localement. Google Maps à Baidu Maps. Google Analytics à Baidu Tongji. Il faut passer au crible chaque appel externe du site. Chaque balise de script, chaque import de police, chaque point d'accès API. Si l'un d'eux vise un domaine hors de portée du réseau de vos visiteurs, vos utilisateurs chinois subissent une expérience dégradée, sans que vous le sachiez.

> Google Fonts, Google Analytics, Google Maps. À remplacer par des polices hébergées localement, Baidu Tongji et Baidu Maps. Chaque appel externe du site doit être audité.

Vient ensuite **l'hébergement à Hong Kong**, solution intermédiaire pour les entreprises qui ne sont pas prêtes à engager la procédure ICP. Pas de licence, latence raisonnable vers le continent, interférences du pare-feu en général évitées. Compromis assumé, viable pour qui tâte le terrain.

**Les VPN** relèvent d'une zone grise. Les VPN d'entreprise qui relient des bureaux en Chine aux réseaux mondiaux sont en général tolérés. Les VPN grand public destinés à contourner le pare-feu sont techniquement illégaux, même si l'application varie selon les régions et les périodes. Les entreprises étrangères installées en Chine doivent garder cette distinction en tête. Ne partez pas du principe que vos équipes peuvent utiliser librement des VPN personnels pour atteindre des services bloqués depuis leurs bureaux.
