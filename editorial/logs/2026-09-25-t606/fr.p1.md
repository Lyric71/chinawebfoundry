# T6-06 deep-translate, FR, pass 1 (full native rewrite from scratch)

Register: Les Echos, vouvoiement, as the live page. Source used for facts only.

## Change 1, subtitle

before: Si votre site charge des polices Google Fonts, déclenche une balise Google Analytics ou embarque une vidéo YouTube, il est déjà hors service pour 900 millions d'internautes chinois.
after: Le blocage est le cas facile. La dépendance qui répond puis ne termine jamais, personne dans votre équipe ne la verra.
why: rebuilt on the new English framing; the unsourced 900 million figure and the Google Fonts claim go.

## Change 2, summary

before: Le Grand Pare-feu chinois bloque Google, Facebook, Slack et des dizaines d'autres services. Mécanismes techniques et parades pour les entreprises étrangères.
after: Ce qu'un site web en Chine peut joindre ou non, hôte par hôte, avec le point de mesure et la date du test sur chaque ligne.

## Change 3, updatedAt

2026-05-02 -> 2026-09-25 (date, not translated)

## Change 4, opening

Un blocage fait du bruit. Quelqu'un au bureau le remarque, et on le corrige. La panne qui coûte de l'argent est silencieuse : l'hôte répond, le premier octet arrive en une demi-seconde, puis la requête ne se termine jamais.

> Microsoft Clarity, Mixpanel, Typeform, Mailchimp, Wix et Algolia ont tous renvoyé un premier octet, puis achevé 0 chargement de page sur 3 en 60 secondes, mesures prises depuis une instance Alibaba Cloud (阿里云) à cn-zhangjiakou les 28 et 30 août 2026.
> Source : 21YunBox, mesures par hôte en Chine, août 2026. https://www.21cloudbox.com/support/typeform-china.html

Autour de ces widgets, la page s'affiche normalement. Le widget reste vide, et aucune erreur n'est journalisée nulle part. Une équipe installée hors de Chine peut donc consulter le site chaque matin pendant un an sans rien voir d'anormal.

En dessous tourne la machinerie dont tout le monde parle : DNS empoisonné, plages d'IP bloquées, contenu des paquets lu en temps réel. Le pare-feu traque aussi les signatures VPN, et [une installation WordPress standard embarque plusieurs dépendances qui s'y heurtent](/fr/wordpress-en-chine/). Tout cela est réel. Presque rien de tout cela ne vous coûte des demandes de contact. C'est la connexion restée ouverte, que personne ne surveille, qui s'en charge.

## Change 5, Google row and paragraphs

| Google | Recherche, Gmail, Maps, YouTube, Analytics, Ads |

La recherche Google, Gmail, Maps, YouTube et Google Ads ne fonctionnent pas depuis une connexion en Chine continentale. Pour un site web, c'est Google Analytics qui compte, et il figure dans le tableau ci-dessous avec sa date de test, comme tout le reste sur cette page. `www.google-analytics.com` a échoué pour la dernière fois à un test GreatFire le 24 juillet 2026. Déclenchez la balise depuis une page en Chine et la requête de mesure n'arrive jamais : les données sont perdues, que le script du conteneur se soit chargé ou non.

Google Fonts fait exception, et l'on se trompe à son sujet dans les deux sens, d'où un paragraphe de plus.

> Depuis une instance Alibaba Cloud (阿里云) à cn-zhangjiakou, le 28 août 2026, avec un relevé toutes les dix minutes pendant douze heures, `fonts.googleapis.com` a mené à bien 72 requêtes sur 72, avec un premier octet médian à 111 ms. Depuis une ligne résidentielle China Mobile (中国移动) à Pékin, le 30 août 2026, sur 264 chargements de page, le même hôte a répondu 0 fois sur 54.
> Source : 21YunBox, A Day of Third-Party Requests From Inside China, août 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Aucune des deux affirmations tranchées ne résiste à ces deux mesures. Google Fonts se résout depuis les centres de données du continent et, souvent, ne se résout pas sur les connexions grand public : c'est tout l'argument en faveur de l'auto-hébergement, qui supprime une variable changeante selon le réseau, le résolveur et l'heure. `fonts.google.com`, l'interface de consultation, reste inaccessible dans tous les cas.

## Change 6, section prose

## Toutes les dépendances du jeu de données, et la date de leur dernier test

Les pages qui se positionnent sur ces questions n'apportent aucune preuve. Sur toutes les pages de compatibilité que nous avons lues chez Chinafy, AppInChina et les petites agences : pas de tableau, pas de date de test, pas de lieu de test nommé, pas de mesure de latence. Les fournisseurs de mesures publient des chiffres. Les pages qui vous disent ce qui casse ne les citent pas. Le tableau ci-dessous fait cette citation, ligne par ligne.

Précisons d'où viennent ces chiffres. Chaque ligne provient de GreatFire ou de 21YunBox, avec sa source et sa date. Aucune n'est encore de nous. Notre propre sonde est en cours d'installation, dans un centre de données du continent et sur une ligne grand public à Pékin. Quand elle tournera, nos lignes viendront s'ajouter à celles des tiers, signalées comme les nôtres. Elles ne les remplaceront pas en douce.

Le tableau mêle deux types de preuves, qui répondent à des questions différentes. Un verdict d'accessibilité dit si l'on peut se connecter à un hôte. Un chargement de page chronométré dit combien de temps le site du fournisseur a mis à se charger depuis une sonde nommée en Chine continentale. Le second sert d'indicateur pour le point d'accès du script qu'appelle le navigateur de votre visiteur ; il ne le mesure pas directement. Quand les deux divergent, les deux sont publiés, sans moyenne.

La colonne verdict emploie six valeurs. Deux méritent qu'on s'y arrête : intermittent, et divergent selon le point de mesure. C'est là qu'un hôte paraît en bonne santé à celui qui l'a vérifié en dernier.

| Verdict | Signification |
|---|---|
| Accessible | Se connecte et aboutit |
| Lent | Aboutit, à un coût qu'il faut connaître |
| Répond puis cale | Le premier octet arrive, le chargement n'aboutit pas en 60 secondes |
| Intermittent | Interférences lors des derniers tests concluants, sans blocage net |
| Bloqué | Aucune connexion exploitable |
| Diverge selon le point de mesure | Un centre de données et une ligne domestique donnent des réponses opposées pour le même hôte |

### Pas encore sondés

Treize dépendances n'ont aucun résultat de test que nous soyons prêts à défendre, soit parce que personne ne les a sondées, soit parce que le seul verdict disponible date de plus de quatre-vingt-dix jours. Nous les listons au lieu de les écarter, car l'absence de données est en soi une information : Crisp, Tawk.to, Loom, Sanity, Netlify, Bootstrap CDN, `js.stripe.com`, le LinkedIn Insight Tag, Cloudflare Turnstile, Adobe Fonts, Font Awesome, Marketo et le script de suivi HubSpot.

Drift porte le total à quatorze, et montre comment l'erreur se produit. Drift est souvent présenté comme accessible, mais ce verdict porte sur le site marketing. `js.driftt.com`, l'hôte qui s'exécute réellement dans le navigateur du visiteur, n'a jamais été testé. Un verdict posé sur le mauvais nom d'hôte : c'est ainsi que s'écrit l'essentiel de ce qu'on lit sur le sujet.

Les dates comptent autant que les verdicts. Un verdict de mars renseigne sur mars. Deux lignes du tableau ont six mois, Wistia et l'hôte de télémétrie de Mapbox, et le disent dans leurs propres cellules. Wistia est un lecteur vidéo qu'une équipe marketing pourrait ajouter cet après-midi, sur la foi d'un relevé pris au printemps.

Nous avons vérifié ce tableau pour la dernière fois auprès de ses sources le 22 septembre 2026, et toute ligne qui dépasse quatre-vingt-dix jours est revérifiée. Si vous le lisez bien après cette date et qu'une ligne compte pour votre projet, testez d'abord l'hôte vous-même.

### Pourquoi Stripe reste hors de ce tableau

Stripe est l'entrée que l'on s'attend à trouver dans un tableau comme celui-ci. Elle relève d'une autre question. Savoir si `js.stripe.com` se charge depuis Shanghai importe peu, car la contrainte est une question d'agrément.

> La Chine continentale ne figure pas dans la liste des pays où Stripe permet d'ouvrir un compte. Hong Kong, si.
> Source : Stripe, Global availability, consulté le 22 septembre 2026. https://stripe.com/global

L'acquisition domestique n'existe pas pour une entité du continent, que le script atteigne ou non le navigateur : optimiser sa diffusion ne résout donc rien. La vraie question est d'accepter Alipay (支付宝), WeChat Pay (微信支付) et UnionPay (银联), et [notre guide pour faire tourner une boutique WooCommerce en Chine](/fr/ressources/guide-web-chine/woocommerce-china-store-guide/) est ce que nous avons publié de plus proche sur le sujet.

PayPal est un cas à part et figure dans le tableau, car il est accessible et partiellement perturbé plutôt qu'indisponible, et parce que les chemins perturbés sont précisément les redirections de paiement.

## Table strings (src/data/chinaDependencies.ts, copy.fr)

columns: Service | Hôte ou cible testés | Verdict | Mesure | Point de mesure | Source et date
categories: Mesure d'audience | Formulaires et chat | Contenus intégrés | Cartes | Plateformes | Infrastructure | Paiement
verdicts: Accessible | Lent | Répond puis cale | Intermittent | Bloqué | Diverge selon le point de mesure | Non testé
hostNotes: vendorSite = Site du fournisseur, hôte non précisé par la source ; notProbed = Non sondé
sourceNotes: neverTestedByGreatFire = GreatFire n'a jamais testé cet hôte ; owedByHarness = À mesurer par notre propre sonde
reachabilityOnly: Verdict d'accessibilité seul
noTest: Aucun test enregistré
staleSuffix: , vieux de six mois
noVantage: sans objet
vantages: Alibaba Cloud (阿里云) cn-zhangjiakou / Alibaba Cloud cn-zhangjiakou ; China Mobile (中国移动) à Pékin / China Mobile à Pékin
vantageJoin: , et
services: Amplitude, hôte du script | Amplitude, hôte des événements | Matomo cloud | X, widget de fil | Mapbox, télémétrie | Mapbox, tuiles et API | Tuiles OpenStreetMap
measured:
- google-tag-manager: 72 sur 72 avec un premier octet à 118 ms, et 0 sur 112
- hotjar: 3 sur 3 avec un premier octet à 487 ms, LCP à 1 660 ms
- microsoft-clarity: 0 sur 3 en 60 s, premier octet à 541 ms
- mixpanel: 0 sur 3 en 60 s, premier octet à 391 ms
- segment: 3 sur 3, premier octet à 900 ms sur un relevé et 1 084 ms sur un autre
- plausible: 3 sur 3, premier octet à 550 ms, LCP à 1 208 ms
- matomo: 3 sur 3, premier octet à 516 ms, LCP à 1 532 ms
- typeform: 0 sur 3 en 60 s, premier octet à 907 ms
- mailchimp: 0 sur 3 en 60 s, premier octet à 812 ms, affichage à 2,0 s
- disqus: 41 URL testées sur 43 bloquées, 2 perturbées
- openstreetmap: Les 71 URL openstreetmap.org testées, toutes bloquées
- wix: 0 sur 3 en 60 s, premier octet à 532 ms
- shopify: 3 sur 3, premier octet à 575 ms, chargement médian 3,6 s
- webflow: Interférences sur 100 % du dernier test concluant (1 test)
- squarespace: 2 tests concluants récents, connexion normale
- algolia: 0 sur 3 en 60 s, premier octet à 1 027 ms, affichage à 3,4 s
- firebase: Interférences sur 100 % des 2 derniers tests concluants
- aws-cloudfront: 3 sur 3 avec un premier octet à 665 ms, et 0 sur 3 à 743 ms
- sentry: 3 sur 3, premier octet à 252 ms
- paypal: 9 URL testées sur 27 perturbées, et ce sont les chemins de redirection du paiement
- stripe: Aucun test enregistré. Voir la note ci-dessous : l'accessibilité n'est pas la question décisive ici
dates: 24 juillet 2026 ; 28 et 30 août 2026 (full month names, as the live FR guides)

Step 1 complete.
