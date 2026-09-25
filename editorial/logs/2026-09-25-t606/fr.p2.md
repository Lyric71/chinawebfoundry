# T6-06 deep-translate, FR, pass 2 (push further, from the French only)

## Change 1, subtitle
- before: Le blocage est le cas facile. La dépendance qui répond puis ne termine jamais, personne dans votre équipe ne la verra.
+ after:  Un blocage, c'est le cas simple. La dépendance qui répond puis n'aboutit jamais, personne dans votre équipe ne la verra passer.
why: "cas facile" and "ne termine jamais" read translated; dislocation is the native move here.

## Change 2, summary
- before: Ce qu'un site web en Chine peut joindre ou non, hôte par hôte, avec le point de mesure et la date du test sur chaque ligne.
+ after:  Ce qu'un site web peut atteindre depuis la Chine, hôte par hôte, avec pour chaque ligne le point de mesure et la date du test.
why: "joindre ou non" was an English skeleton; "pour chaque ligne" moves up the way a French editor would place it.

## Change 4, opening

Un blocage ne passe pas inaperçu. Quelqu'un au bureau s'en aperçoit, et le problème est réglé. La panne qui coûte cher, elle, ne fait aucun bruit : l'hôte répond, le premier octet arrive en une demi-seconde, puis la requête n'aboutit jamais.

> Microsoft Clarity, Mixpanel, Typeform, Mailchimp, Wix et Algolia ont tous renvoyé un premier octet sans mener à terme un seul des 3 chargements de page dans les 60 secondes. Mesures effectuées depuis une instance Alibaba Cloud (阿里云) de la région cn-zhangjiakou, les 28 et 30 août 2026.
> Source : 21YunBox, mesures par hôte en Chine, août 2026. https://www.21cloudbox.com/support/typeform-china.html

La page s'affiche normalement autour de ces widgets. Le widget, lui, reste vide, et aucun journal ne consigne la moindre erreur. Une équipe basée hors de Chine peut ainsi ouvrir le site chaque matin pendant un an sans rien remarquer.

Sous la surface tourne la machinerie que tout le monde décrit : DNS empoisonnés, plages d'adresses IP bloquées, contenu des paquets inspecté en temps réel. Le pare-feu traque aussi les signatures VPN, et [une installation WordPress standard embarque plusieurs dépendances qui s'y heurtent](/fr/wordpress-en-chine/). Tout cela est bien réel. Les demandes de contact perdues, elles, tiennent presque toujours à une connexion restée ouverte que personne ne surveille.

why: "fait du bruit / on le corrige" was flat; the blockquote split in two sentences reads as a news brief; last paragraph rebuilt so it closes on the open connection without the English two-beat ending.

## Change 5, Google row and paragraphs

| Google | Recherche, Gmail, Maps, YouTube, Analytics, Ads |

Depuis une connexion en Chine continentale, la recherche Google, Gmail, Maps, YouTube et Google Ads sont inutilisables. Pour un site web, c'est Google Analytics qui compte ; il figure dans le tableau plus bas avec sa date de test, comme chaque élément de cette page. Le dernier test GreatFire en échec sur `www.google-analytics.com` date du 24 juillet 2026. Une balise déclenchée depuis une page en Chine envoie une requête de mesure qui n'arrive jamais : les données sont perdues, que le script du conteneur se soit chargé ou non.

Google Fonts fait figure d'exception, et les erreurs à son sujet vont dans les deux sens. Il mérite donc quelques lignes de plus.

> Depuis une instance Alibaba Cloud (阿里云) de la région cn-zhangjiakou, le 28 août 2026, avec un relevé toutes les dix minutes pendant douze heures, `fonts.googleapis.com` a mené à terme 72 requêtes sur 72, avec un premier octet médian à 111 ms. Depuis une ligne résidentielle China Mobile (中国移动) à Pékin, le 30 août 2026, sur 264 chargements de page, le même hôte a répondu 0 fois sur 54.
> Source : 21YunBox, A Day of Third-Party Requests From Inside China, août 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Face à ces deux mesures, aucune affirmation catégorique ne tient. Google Fonts se résout depuis les centres de données du continent, mais bien souvent pas sur les connexions grand public. C'est tout l'intérêt d'héberger ses polices soi-même : on élimine une variable qui change selon le réseau, le résolveur et l'heure. `fonts.google.com`, l'interface de consultation, reste inaccessible dans tous les cas.

why: imperative "Déclenchez la balise..." was an English conditional calque; "a échoué pour la dernière fois à un test" rebuilt around the date; self-hosting sentence split.

## Change 6, section prose

## Chaque dépendance recensée, avec la date de son dernier test

Les pages les mieux classées sur ces questions ne fournissent aucune preuve. Dans toutes les pages de compatibilité que nous avons lues chez Chinafy, chez AppInChina ou dans les petites agences, on ne trouve ni tableau, ni date de test, ni lieu de mesure, ni chiffre de latence. Les spécialistes de la mesure publient pourtant leurs chiffres. Les pages censées vous dire ce qui casse ne les citent pas. Le tableau ci-dessous comble ce manque, ligne par ligne.

Précisons l'origine de ces chiffres. Chaque ligne vient de GreatFire ou de 21YunBox, sourcée et datée. Aucune n'est encore issue de nos propres mesures. Notre sonde est en cours de déploiement, dans un centre de données du continent et sur une ligne grand public à Pékin. Une fois en service, ses résultats s'afficheront à côté de ceux des tiers, clairement identifiés comme les nôtres, sans les remplacer en catimini.

Le tableau réunit deux types de preuves, qui ne répondent pas à la même question. Un verdict d'accessibilité indique si l'on peut seulement se connecter à un hôte. Un chargement chronométré mesure le temps qu'a mis le site du fournisseur à se charger depuis une sonde identifiée en Chine continentale. Ce second chiffre donne une idée du comportement du point d'accès qu'appelle le navigateur de votre visiteur, sans le mesurer directement. Quand les deux sources divergent, nous publions les deux, sans en faire la moyenne.

La colonne Verdict compte six valeurs. Deux appellent une lecture attentive : intermittent et diverge selon le point de mesure. Ce sont les cas où un hôte semble en parfaite santé aux yeux du dernier qui l'a vérifié.

| Verdict | Signification |
|---|---|
| Accessible | Se connecte et aboutit |
| Lent | Aboutit, mais avec un coût à connaître |
| Répond puis cale | Le premier octet arrive, mais le chargement n'aboutit pas dans les 60 secondes |
| Intermittent | Interférences lors des derniers tests concluants, sans blocage net |
| Bloqué | Aucune connexion exploitable |
| Diverge selon le point de mesure | Un centre de données et une ligne domestique livrent des verdicts opposés sur le même hôte |

### En attente de mesure

Pour treize dépendances, nous n'avons aucun résultat que nous soyons prêts à défendre : soit personne ne les a testées, soit le seul verdict disponible a plus de quatre-vingt-dix jours. Nous les citons plutôt que de les passer sous silence, car cette lacune est une information en soi : Crisp, Tawk.to, Loom, Sanity, Netlify, Bootstrap CDN, `js.stripe.com`, le LinkedIn Insight Tag, Cloudflare Turnstile, Adobe Fonts, Font Awesome, Marketo et le script de suivi HubSpot.

Drift porte le compte à quatorze et illustre la manière dont l'erreur s'installe. Drift est souvent présenté comme accessible, mais ce verdict porte sur le site marketing. `js.driftt.com`, l'hôte réellement appelé par le navigateur du visiteur, n'a jamais été testé. Un verdict rendu sur le mauvais nom d'hôte : voilà comment s'écrit l'essentiel de ce qui circule sur le sujet.

Les dates comptent autant que les verdicts. Un verdict de mars renseigne sur mars. Deux lignes du tableau datent de six mois, Wistia et l'hôte de télémétrie de Mapbox, et leurs cellules le signalent. Wistia est un lecteur vidéo qu'une équipe marketing pourrait intégrer dès cet après-midi, sur la foi d'un relevé effectué au printemps.

Ce tableau a été confronté à ses sources pour la dernière fois le 22 septembre 2026, et toute ligne de plus de quatre-vingt-dix jours est revérifiée. Si vous le consultez longtemps après cette date et qu'une ligne pèse sur votre projet, testez d'abord l'hôte vous-même.

### Pourquoi Stripe reste hors de ce tableau

C'est le nom que l'on s'attend à voir figurer dans un tableau de ce genre. Il relève pourtant d'une autre question. Que `js.stripe.com` se charge ou non depuis Shanghai importe peu : la contrainte relève de l'agrément.

> La Chine continentale ne figure pas dans la liste des pays où Stripe permet d'ouvrir un compte. Hong Kong, si.
> Source : Stripe, Global availability, consulté le 22 septembre 2026. https://stripe.com/global

Aucune acquisition domestique n'est possible pour une entité du continent, que le script atteigne le navigateur ou non ; peaufiner sa diffusion ne sert donc à rien. La question utile est celle de l'encaissement via Alipay (支付宝), WeChat Pay (微信支付) et UnionPay (银联), et [notre guide consacré à l'exploitation d'une boutique WooCommerce en Chine](/fr/ressources/guide-web-chine/woocommerce-china-store-guide/) est ce que nous avons publié de plus proche sur ce point.

PayPal, lui, est un cas différent et figure bien dans le tableau : il reste accessible, avec des perturbations partielles, et ce sont justement les redirections vers le paiement qui sont touchées.

why: H2 "du jeu de données" was a data-science calque; "pas de X, pas de Y" list rebuilt as "ni... ni"; "en douce" too familiar for Les Echos, now "en catimini"; the proxy sentence no longer hangs on a semicolon; Stripe paragraph opens on the name, as a French editor would after an H3 naming it.

## Table strings

columns: Service | Hôte ou cible du test | Verdict | Mesure | Point de mesure | Source et date   (was "Hôte ou cible testés")
categories: Mesure d'audience | Formulaires et messagerie | Contenus intégrés | Cartes | Plateformes | Infrastructure | Paiements   ("chat" and singular "Paiement" replaced)
verdicts: Accessible | Lent | Répond puis cale | Intermittent | Bloqué | Diverge selon le point de mesure | Non testé   (kept)
hostNotes: Site du fournisseur, hôte non précisé par la source ; Non sondé   (kept)
sourceNotes: GreatFire n'a jamais testé cet hôte ; À mesurer par notre propre sonde   (kept)
reachabilityOnly: Verdict d'accessibilité seul   (kept)
noTest: Aucun test enregistré   (kept)
staleSuffix: , relevé vieux de six mois
noVantage: sans objet
vantages: Alibaba Cloud (阿里云) cn-zhangjiakou / Alibaba Cloud cn-zhangjiakou ; China Mobile (中国移动) à Pékin / China Mobile à Pékin
vantageJoin: " et "   (French takes no comma before et)
services: Amplitude, hôte du script | Amplitude, hôte des événements | Matomo cloud | X, widget de fil d'actualité | Mapbox, télémétrie | Mapbox, tuiles et API | Tuiles OpenStreetMap
measured:
- google-tag-manager: 72 sur 72 (premier octet à 118 ms) et 0 sur 112
- hotjar: 3 sur 3, premier octet à 487 ms, LCP à 1 660 ms
- microsoft-clarity: 0 sur 3 dans les 60 s, premier octet à 541 ms
- mixpanel: 0 sur 3 dans les 60 s, premier octet à 391 ms
- segment: 3 sur 3, premier octet à 900 ms sur un relevé et 1 084 ms sur un autre
- plausible: 3 sur 3, premier octet à 550 ms, LCP à 1 208 ms
- matomo: 3 sur 3, premier octet à 516 ms, LCP à 1 532 ms
- typeform: 0 sur 3 dans les 60 s, premier octet à 907 ms
- mailchimp: 0 sur 3 dans les 60 s, premier octet à 812 ms, premier rendu à 2,0 s
- disqus: 41 URL testées sur 43 bloquées, 2 perturbées
- openstreetmap: 71 URL openstreetmap.org testées, toutes bloquées
- wix: 0 sur 3 dans les 60 s, premier octet à 532 ms
- shopify: 3 sur 3, premier octet à 575 ms, chargement médian 3,6 s
- webflow: Interférences sur 100 % des tests concluants récents (1 test)
- squarespace: Connexion normale sur les 2 tests concluants récents
- algolia: 0 sur 3 dans les 60 s, premier octet à 1 027 ms, premier rendu à 3,4 s
- firebase: Interférences sur 100 % des 2 derniers tests concluants
- aws-cloudfront: 3 sur 3 (premier octet à 665 ms) et 0 sur 3 (743 ms)
- sentry: 3 sur 3, premier octet à 252 ms
- paypal: 9 URL testées sur 27 perturbées, qui sont des redirections de paiement
- stripe: Aucun test enregistré. Voir plus bas : l'accessibilité n'est pas ici la question déterminante
dates: 24 juillet 2026 ; 28 et 30 août 2026

Step 2 complete.
