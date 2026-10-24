---
title: "Indice des dépendances web en Chine, octobre 2026"
subtitle: "55 dépendances web, chacune adossée à une preuve datée ; résultats cloud et résidentiels distincts quand la source publie les deux."
summary: "55 dépendances web passées au crible des verdicts datés de GreatFire et des relevés de 21YunBox, tests manquants et limites compris."
visual: "/images/guides/china-dependency-index-2026-10.webp"
order: 45
published: true
publishedAt: "2026-10-16"
updatedAt: "2026-10-24"
reviewBy: "2026-11-15"
category: "Technology"
author: "cyril-drouin"
---

Méthode : cet indice compile des preuves publiées par des tiers. Sur les cinq ressources que 21YunBox a comparées, quatre sont restées sans réponse sur une ligne fixe China Mobile (中国移动) à Pékin le 30 août 2026, et une seule depuis Alibaba Cloud (阿里云) à Zhangjiakou le 28 août. Le registre complet compte 55 dépendances, y compris celles qui n’ont jamais été testées. Seul ce sous-ensemble apparié se prête à un décompte d’échecs.

Édition établie le 16 octobre 2026. Tests cités : du 12 mars au 11 octobre 2026. Octobre est le mois de compilation ; chaque ligne garde la date du test de sa source.

| Preuve | Ce que couvre le résultat | Ce qu’il ne permet pas d’établir |
|---|---|---|
| Verdict d’URL GreatFire | L’accessibilité de l’URL HTTPS indiquée, aux dates du test | L’expérience sur une ligne résidentielle nommée, la latence ou une transaction menée à terme |
| Requêtes répétées de 21YunBox | Des requêtes directes vers la ressource depuis Zhangjiakou | L’aboutissement depuis une connexion grand public |
| Relevés de 21YunBox sur ligne résidentielle | Les requêtes rencontrées lors de vrais chargements de sites à Pékin | L’ensemble des points d’accès d’un même produit |
| Chargements de pages fournisseurs par 21YunBox | Le site ou la page produit du fournisseur nommé | Le déploiement d’un client ou un widget intégré |
| Non testé | Aucune preuve datée dans ce registre | Un verdict de compatibilité, positif ou négatif |

> Parmi les cinq ressources de l’étude appariée de 21YunBox, reCAPTCHA n’a reçu aucune réponse depuis Alibaba Cloud (阿里云) cn-zhangjiakou le 28 août 2026. Sur la ligne résidentielle China Mobile (中国移动) à Pékin, le 30 août, les deux hôtes de Google Fonts et Google Tag Manager sont eux aussi restés muets. jsDelivr a répondu des deux côtés.
> Source : 21YunBox, 28 et 30 août 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

## Comment les preuves ont été réunies

ChinaWebFoundry a constitué ce registre à partir de GreatFire et de 21YunBox. Nous n’avons fait tourner aucune sonde sur le continent. Relire leurs pages sert à vérifier qu’une citation tient toujours ; cette relecture ne vaut pas nouvelle observation depuis la Chine.

GreatFire indique si une URL donnée était bloquée, perturbée ou accessible. Les pages citées ne précisent ni région de centre de données ni opérateur grand public : leurs résultats sont donc traités à part. Une connexion réussie chez GreatFire ne saurait remplir les colonnes de temps, réservées aux points de mesure nommés.

21YunBox n’a pas mesuré les ressources et les sites de la même manière. Les requêtes répétées vers les ressources partaient d’Alibaba Cloud (阿里云) cn-zhangjiakou et se sont étalées sur toute la période d’échantillonnage, soirée comprise. Les relevés grand public proviennent de la connexion fixe d’un volontaire, abonné China Mobile (中国移动) à Pékin. Mobile n’est ici que le nom de l’opérateur : il s’agit d’une ligne fixe à domicile, pas d’un test sur réseau mobile.

> 21YunBox a interrogé cinq ressources toutes les dix minutes pendant douze heures le 28 août 2026, avec un délai d’expiration de 30 secondes. Son relevé distinct sur une ligne résidentielle pékinoise, le 30 août, couvrait 88 sites et 264 chargements de page, avec un plafond de 60 secondes par chargement. Le nombre de requêtes vers chaque dépendance variait d’un site à l’autre.
> Source : 21YunBox, août 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Le tableau distingue la réponse d’une ressource du chargement complet d’une page. Qu’un hôte de vérification réponde ne dit pas si le visiteur a franchi l’épreuve. Qu’un hôte vidéo réponde ne prouve pas que la vidéo a été lue jusqu’au bout. Ces questions-là relèvent des tests de recette du site.

Wix et AWS CloudFront n’apparaissent qu’à travers des pages de fournisseurs. Pour CloudFront, la cible est explicitement aws.amazon.com/cloudfront, et la source pékinoise parle d’une ligne résidentielle sans nommer l’opérateur. La source Wix vise le site du fournisseur, sans donner de chemin de requête complet qui permette de refaire le test. Aucune des deux observations ne mesure l’ensemble des sites clients de ces plateformes.

Aucune source n’a conduit la même expérience sur toutes les lignes. Un taux d’échec global additionnerait des observations qui ne se comparent pas ; impossible, dès lors, de classer les catégories ou de calculer une moyenne nationale.

Une valeur absente reste absente.

## Lire l’indice

Chaque ligne porte un identifiant stable qui permet de la citer. La colonne Cible indique l’hôte ou le chemin d’URL qu’étaye la source. Quand le relevé ne nomme qu’un produit sans point d’accès testé, elle porte la mention cible non précisée. Non testé signifie que ce registre ne dispose d’aucune preuve datée exploitable ; la mention n’affirme pas que le produit n’a jamais été testé nulle part.

Cloud désigne la sonde Alibaba Cloud (阿里云) de Zhangjiakou. Résidentiel désigne la ligne fixe China Mobile (中国移动) à Pékin, sauf pour la page produit de CloudFront, dont l’opérateur n’est pas précisé. Le TTFB est le temps médian jusqu’au premier octet de réponse, en millisecondes. Indisponible signifie que l’éditeur n’a publié aucun chiffre. Sans aucune réponse, pas de médiane.

Pour Wistia et l’hôte de vérification de Cloudflare, les décomptes résidentiels s’obtiennent en retranchant les échecs signalés du total des requêtes. Ils comptent des réponses obtenues pendant des chargements de page. La source n’a publié aucun test d’aboutissement d’une vidéo ou d’un captcha. Qui cite l’une de ces deux lignes doit garder cette nuance à l’esprit.

| Libellé de l’indice | Règle de lecture |
|---|---|
| Accessible | La source citée a obtenu une connexion ou mené à terme le chargement indiqué |
| Lent | Une requête aboutie a subi un retard notable dans l’étude citée ; aucun seuil de latence commun n’est appliqué d’une méthode à l’autre |
| Répond puis cale | Un premier octet est arrivé, mais le délai de chargement fixé a expiré |
| Intermittent | GreatFire signale une perturbation, ou les observations disponibles varient ; la note de preuve précise lequel |
| Bloqué | GreatFire signale un blocage, ou la sonde nommée n’a obtenu aucune réponse sur son échantillon |
| Diverge selon le point de mesure | Les observations appariées, cloud et résidentielle, se contredisent |
| Non testé | Aucun résultat daté n’étaye de verdict dans ce registre |

Le libellé perturbé de GreatFire est conservé dans les notes de preuve. Ses résultats d’interférence n’établissent pas si un échec tient au DNS ou à une étape ultérieure de la connexion. De même, une ligne marquée accessible ne garantit ni la licence d’un produit, ni son traitement des données, ni son tunnel de paiement.

C’est la première édition : chaque case Évolution indique donc référence. Une édition ultérieure pourra comparer un même point d’accès mesuré selon la même méthode. Un test ancien découvert après coup élargit notre couverture ; il ne prouve pas que le réseau s’est amélioré ce mois-ci. Il en va de même lorsqu’un éditeur retire un chiffre ou change sa façon de classer les connexions refusées.

## Le registre complet des dépendances

Le [jeu de données brut](/data/china-dependency-index-2026-10.json), en anglais, reprend les mêmes entrées et les mêmes dates de source que ce tableau. Les groupes de catégories sont triés par type d’échec observé, puis par identifiant stable. Chaque constat daté est attribué dans les notes de preuve ci-dessous. Les entrées sans résultat daté restent non testées.

La cible d’une ligne délimite la portée de la preuve disponible. Un simple nom d’hôte ne désigne pas le chemin de chaque ressource qu’on y demande. GreatFire a pu tester l’URL racine en HTTPS alors qu’un relevé de navigateur enregistrait plusieurs chemins sur le même hôte. La phrase de preuve conserve cette distinction quand les sources divergent. Avant de remplacer une ressource sur la foi d’une ligne, gardez la source d’origine sous les yeux.

Pour une page fournisseur, un chargement abouti ne concerne que cette page. La ligne CloudFront relève donc d’une autre comparaison que l’URL de distribution d’un client. Le résultat Wix a la même limite : il décrit le site du fournisseur observé par 21YunBox. Aucune de ces lignes ne vaut verdict pour tous les sites construits avec le produit. Le fichier brut conserve l’URL de la source, si bien que cette portée reste visible hors de l’article.

Vous transmettez un constat à une autre équipe ? Joignez-y l’identifiant en plus de la date. L’identifiant ne change pas, même si une édition future reformule la colonne Fonction. Si un produit migre vers un autre hôte, laissez l’ancienne observation rattachée à l’ancienne cible et consignez la nouvelle à part. Fusionner leurs historiques masquerait précisément le changement que vous cherchez à expliquer.

| Identifiant | Cible | Fonction | Catégorie | TTFB cloud (ms) | Réponses / chargements, cloud | TTFB résidentiel (ms) | Réponses / chargements, résidentiel | Verdict | Date du test | Évolution |
|---|---|---|---|---|---|---|---|---|---|---|
| host-google-analytics | www.google-analytics.com | Google Analytics | Mesure d’audience | Indisponible | Indisponible | Indisponible | Indisponible | bloqué | 2026-07-24 | référence |
| host-meta-pixel | connect.facebook.net | Pixel Meta | Mesure d’audience | Indisponible | Indisponible | Indisponible | Indisponible | bloqué | 2026-05-27 | référence |
| host-google-tag-manager | www.googletagmanager.com | Google Tag Manager | Mesure d’audience | 118 | 72 sur 72 | Indisponible | 0 sur 112 | diverge selon le point de mesure | 2026-08-28, 2026-08-30 | référence |
| host-hotjar | static.hotjar.com | Hotjar | Mesure d’audience | Indisponible | Indisponible | Indisponible | 0 sur 6 | intermittent | 2026-08-30, 2026-09-30 | référence |
| host-mixpanel-script | cdn.mxpnl.com | Mixpanel | Mesure d’audience | Indisponible | Indisponible | Indisponible | Indisponible | intermittent | 2026-09-06 | référence |
| host-plausible | plausible.io | Plausible | Mesure d’audience | Indisponible | Indisponible | Indisponible | Indisponible | intermittent | 2026-08-20 | référence |
| host-amplitude-events | api.amplitude.com | Amplitude, collecte | Mesure d’audience | Indisponible | Indisponible | Indisponible | Indisponible | accessible | 2026-09-10 | référence |
| host-amplitude-script | cdn.amplitude.com | Amplitude, script | Mesure d’audience | Indisponible | Indisponible | Indisponible | Indisponible | accessible | 2026-09-14 | référence |
| host-linkedin-insight | snap.licdn.com | LinkedIn Insight Tag | Mesure d’audience | Indisponible | Indisponible | Indisponible | Indisponible | accessible | 2026-09-22 | référence |
| host-microsoft-clarity | www.clarity.ms | Microsoft Clarity | Mesure d’audience | Indisponible | Indisponible | Indisponible | Indisponible | accessible | 2026-09-15 | référence |
| host-mixpanel-events | api.mixpanel.com | Mixpanel | Mesure d’audience | Indisponible | Indisponible | Indisponible | Indisponible | accessible | 2026-09-19 | référence |
| host-segment | api.segment.io | Segment | Mesure d’audience | Indisponible | Indisponible | Indisponible | Indisponible | accessible | 2026-09-15 | référence |
| host-matomo | cdn.matomo.cloud | Matomo Cloud | Mesure d’audience | Indisponible | Indisponible | Indisponible | Indisponible | non testé | Aucun test daté | référence |
| host-google-libraries | ajax.googleapis.com | Google Hosted Libraries | Polices et CDN de scripts | Indisponible | Indisponible | Indisponible | Indisponible | bloqué | 2026-08-22 | référence |
| host-google-fonts-css | fonts.googleapis.com | Google Fonts, feuilles de style | Polices et CDN de scripts | 111 | 72 sur 72 | Indisponible | 0 sur 54 | diverge selon le point de mesure | 2026-08-28, 2026-08-30 | référence |
| host-google-fonts-files | fonts.gstatic.com | Google Fonts, fichiers de police | Polices et CDN de scripts | 102 | 72 sur 72 | Indisponible | 0 sur 6 | diverge selon le point de mesure | 2026-08-28, 2026-08-30 | référence |
| host-adobe-fonts | use.typekit.net | Adobe Fonts | Polices et CDN de scripts | Indisponible | Indisponible | Indisponible | 0 sur 11 | intermittent | 2026-08-30, 2026-09-22 | référence |
| host-jsdelivr | cdn.jsdelivr.net | jsDelivr | Polices et CDN de scripts | 660 | 72 sur 72 | Indisponible | 36 sur 36 | lent | 2026-08-28, 2026-08-30 | référence |
| host-cdnjs | cdnjs.cloudflare.com | cdnjs | Polices et CDN de scripts | Indisponible | Indisponible | Indisponible | Indisponible | accessible | 2026-09-27 | référence |
| host-unpkg | unpkg.com | unpkg | Polices et CDN de scripts | Indisponible | Indisponible | Indisponible | Indisponible | accessible | 2026-08-14 | référence |
| host-mailchimp | cdn-images.mailchimp.com | Mailchimp | Formulaires et chat | Indisponible | Indisponible | Indisponible | Indisponible | bloqué | 2026-09-10 | référence |
| host-recaptcha | www.google.com/recaptcha | Google reCAPTCHA | Formulaires et chat | Indisponible | 0 sur 72 | Indisponible | 0 sur 18 | bloqué | 2026-08-28, 2026-08-30 | référence |
| host-cloudflare-turnstile | challenges.cloudflare.com | Cloudflare Turnstile | Formulaires et chat | Indisponible | Indisponible | Indisponible | 9 sur 12 | intermittent | 2026-08-30, 2026-10-11 | référence |
| host-calendly | calendly.com | Calendly | Formulaires et chat | Indisponible | Indisponible | Indisponible | Indisponible | accessible | 2026-10-03 | référence |
| host-hcaptcha | api2.hcaptcha.com | hCaptcha | Formulaires et chat | Indisponible | Indisponible | Indisponible | Indisponible | accessible | 2026-09-14 | référence |
| host-intercom | widget.intercom.io | Intercom | Formulaires et chat | Indisponible | Indisponible | Indisponible | Indisponible | accessible | 2026-09-23 | référence |
| host-typeform | form.typeform.com | Typeform | Formulaires et chat | Indisponible | Indisponible | Indisponible | Indisponible | accessible | 2026-09-30 | référence |
| host-zendesk | static.zdassets.com | Zendesk | Formulaires et chat | Indisponible | Indisponible | Indisponible | Indisponible | accessible | 2026-10-08 | référence |
| host-crisp | Cible non précisée | Crisp | Formulaires et chat | Indisponible | Indisponible | Indisponible | Indisponible | non testé | Aucun test daté | référence |
| host-drift | js.driftt.com | Drift | Formulaires et chat | Indisponible | Indisponible | Indisponible | Indisponible | non testé | Aucun test daté | référence |
| host-hubspot-script | js.hs-scripts.com | Chargeur HubSpot | Formulaires et chat | Indisponible | Indisponible | Indisponible | Indisponible | non testé | Aucun test daté | référence |
| host-tawk-to | Cible non précisée | Tawk.to | Formulaires et chat | Indisponible | Indisponible | Indisponible | Indisponible | non testé | Aucun test daté | référence |
| host-disqus | disqus.com | Disqus | Contenus intégrés | Indisponible | Indisponible | Indisponible | Indisponible | bloqué | 2026-09-13 | référence |
| host-instagram | www.instagram.com | Instagram | Contenus intégrés | Indisponible | Indisponible | Indisponible | Indisponible | bloqué | 2026-10-03 | référence |
| host-soundcloud | w.soundcloud.com | SoundCloud | Contenus intégrés | Indisponible | Indisponible | Indisponible | Indisponible | bloqué | 2026-06-24 | référence |
| host-spotify | open.spotify.com | Spotify | Contenus intégrés | Indisponible | Indisponible | Indisponible | Indisponible | bloqué | 2026-09-12 | référence |
| host-x-timeline | platform.twitter.com | X, widget de fil | Contenus intégrés | Indisponible | Indisponible | Indisponible | Indisponible | bloqué | 2026-07-07 | référence |
| host-wistia | fast.wistia.com | Wistia | Contenus intégrés | Indisponible | Indisponible | Indisponible | 9 sur 15 | intermittent | 2026-03-17, 2026-08-30 | référence |
| host-loom | Cible non précisée | Loom | Contenus intégrés | Indisponible | Indisponible | Indisponible | Indisponible | non testé | Aucun test daté | référence |
| host-mapbox-telemetry | events.mapbox.com | Mapbox, télémétrie | Cartographie | Indisponible | Indisponible | Indisponible | Indisponible | bloqué | 2026-03-12 | référence |
| host-openstreetmap | tile.openstreetmap.org | Tuiles OpenStreetMap | Cartographie | Indisponible | Indisponible | Indisponible | Indisponible | bloqué | 2026-09-07 | référence |
| host-mapbox-api | api.mapbox.com | Mapbox, tuiles et API | Cartographie | Indisponible | Indisponible | Indisponible | Indisponible | accessible | 2026-08-31 | référence |
| host-wix | wix.com | Wix | Plateformes | 532 | 0 sur 3 | Indisponible | Indisponible | répond puis cale | 2026-08-30 | référence |
| host-webflow | webflow.com | Webflow | Plateformes | Indisponible | Indisponible | Indisponible | Indisponible | intermittent | 2026-08-23 | référence |
| host-shopify | cdn.shopify.com | Shopify | Plateformes | Indisponible | Indisponible | Indisponible | Indisponible | accessible | 2026-10-08 | référence |
| host-squarespace | www.squarespace.com | Squarespace | Plateformes | Indisponible | Indisponible | Indisponible | Indisponible | accessible | 2026-10-03 | référence |
| host-netlify | Cible non précisée | Netlify | Plateformes | Indisponible | Indisponible | Indisponible | Indisponible | non testé | Aucun test daté | référence |
| host-sanity | Cible non précisée | Sanity | Plateformes | Indisponible | Indisponible | Indisponible | Indisponible | non testé | Aucun test daté | référence |
| host-algolia | algolia.net | Algolia | Infrastructure | Indisponible | Indisponible | Indisponible | Indisponible | intermittent | 2026-08-31 | référence |
| host-firebase | firebase.google.com | Firebase | Infrastructure | Indisponible | Indisponible | Indisponible | Indisponible | intermittent | 2026-09-14 | référence |
| host-sentry | browser.sentry-cdn.com | Sentry | Infrastructure | Indisponible | Indisponible | Indisponible | Indisponible | intermittent | 2026-10-01 | référence |
| host-aws-cloudfront | aws.amazon.com/cloudfront | AWS CloudFront | Infrastructure | 665 | 3 sur 3 | 718 | 3 sur 3 | accessible | 2026-08-28, 2026-08-30 | référence |
| host-bootstrap-cdn | Cible non précisée | Bootstrap CDN | Infrastructure | Indisponible | Indisponible | Indisponible | Indisponible | non testé | Aucun test daté | référence |
| host-paypal | www.paypal.com | PayPal | Paiement | Indisponible | Indisponible | Indisponible | Indisponible | accessible | 2026-09-25 | référence |
| host-stripe | js.stripe.com | Stripe | Paiement | Indisponible | Indisponible | Indisponible | Indisponible | non testé | Aucun test daté | référence |

### Les preuves, ligne par ligne

**host-google-analytics (Google Analytics).**
> GreatFire jugeait www.google-analytics.com bloqué lors de son dernier test, le 24 juillet 2026 ; l’unique test concluant a relevé une interférence.
> Source : GreatFire, 24 juillet 2026. https://en.greatfire.org/https/www.google-analytics.com

**host-meta-pixel (Pixel Meta).**
> GreatFire jugeait connect.facebook.net bloqué lors de son dernier test, le 27 mai 2026 ; ce verdict a plus de 90 jours et aucun décompte récent ne le confirme.
> Source : GreatFire, 27 mai 2026. https://en.greatfire.org/https/connect.facebook.net

**host-google-tag-manager (Google Tag Manager).**
> Depuis Alibaba Cloud cn-zhangjiakou, le 28 août 2026, les 72 requêtes directes de 21YunBox vers www.googletagmanager.com ont toutes reçu une réponse, premier octet médian à 118 ms. Sur la ligne fixe China Mobile à Pékin, le 30 août, aucune des 112 requêtes n’a reçu de réponse.
> Source : 21YunBox, 28 et 30 août 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

**host-hotjar (Hotjar).**
> GreatFire jugeait static.hotjar.com perturbé lors de son dernier test, le 30 septembre 2026 ; un des 2 tests concluants a relevé une interférence.
> Source : GreatFire, 30 septembre 2026. https://en.greatfire.org/https/static.hotjar.com

> Sur la ligne fixe China Mobile à Pékin, le 30 août 2026, aucune des 6 requêtes de 21YunBox vers static.hotjar.com n’a reçu de réponse.
> Source : 21YunBox, 30 août 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

**host-mixpanel-script (Mixpanel).**
> GreatFire jugeait cdn.mxpnl.com perturbé lors de son dernier test, le 6 septembre 2026 ; l’unique test concluant a relevé une interférence.
> Source : GreatFire, 6 septembre 2026. https://en.greatfire.org/https/cdn.mxpnl.com

**host-plausible (Plausible).**
> GreatFire jugeait plausible.io perturbé lors de son dernier test, le 20 août 2026 ; un des 2 tests concluants a relevé une interférence.
> Source : GreatFire, 20 août 2026. https://en.greatfire.org/https/plausible.io

**host-amplitude-events (Amplitude, collecte).**
> GreatFire jugeait api.amplitude.com non bloqué lors de son dernier test, le 10 septembre 2026 ; aucune interférence lors de l’unique test concluant.
> Source : GreatFire, 10 septembre 2026. https://en.greatfire.org/https/api.amplitude.com

**host-amplitude-script (Amplitude, script).**
> GreatFire jugeait cdn.amplitude.com non bloqué lors de son dernier test, le 14 septembre 2026 ; aucune interférence lors de l’unique test concluant.
> Source : GreatFire, 14 septembre 2026. https://en.greatfire.org/https/cdn.amplitude.com

**host-linkedin-insight (LinkedIn Insight Tag).**
> GreatFire jugeait snap.licdn.com non bloqué lors de son dernier test, le 22 septembre 2026 ; aucune interférence lors de l’unique test concluant.
> Source : GreatFire, 22 septembre 2026. https://en.greatfire.org/https/snap.licdn.com

**host-microsoft-clarity (Microsoft Clarity).**
> GreatFire jugeait www.clarity.ms non bloqué lors de son dernier test, le 15 septembre 2026 ; aucune interférence lors de l’unique test concluant.
> Source : GreatFire, 15 septembre 2026. https://en.greatfire.org/https/www.clarity.ms

**host-mixpanel-events (Mixpanel).**
> GreatFire jugeait api.mixpanel.com non bloqué lors de son dernier test, le 19 septembre 2026 ; aucune interférence lors de l’unique test concluant.
> Source : GreatFire, 19 septembre 2026. https://en.greatfire.org/https/api.mixpanel.com

**host-segment (Segment).**
> GreatFire jugeait api.segment.io non bloqué lors de son dernier test, le 15 septembre 2026 ; aucune interférence lors de l’unique test concluant.
> Source : GreatFire, 15 septembre 2026. https://en.greatfire.org/https/api.segment.io

**host-matomo (Matomo Cloud).**
Aucun test tiers daté n’est recensé pour cette entrée, qui reste non testée.

**host-google-libraries (Google Hosted Libraries).**
> GreatFire jugeait ajax.googleapis.com bloqué lors de son dernier test, le 22 août 2026 ; l’unique test concluant a relevé une interférence.
> Source : GreatFire, 22 août 2026. https://en.greatfire.org/https/ajax.googleapis.com

**host-google-fonts-css (Google Fonts, feuilles de style).**
> Depuis Alibaba Cloud cn-zhangjiakou, le 28 août 2026, les 72 requêtes directes de 21YunBox vers fonts.googleapis.com ont toutes reçu une réponse, premier octet médian à 111 ms. Sur la ligne fixe China Mobile à Pékin, le 30 août, aucune des 54 requêtes n’a reçu de réponse.
> Source : 21YunBox, 28 et 30 août 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

**host-google-fonts-files (Google Fonts, fichiers de police).**
> Depuis Alibaba Cloud cn-zhangjiakou, le 28 août 2026, les 72 requêtes directes de 21YunBox vers fonts.gstatic.com ont toutes reçu une réponse, premier octet médian à 102 ms. Sur la ligne fixe China Mobile à Pékin, le 30 août, aucune des 6 requêtes n’a reçu de réponse.
> Source : 21YunBox, 28 et 30 août 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

**host-adobe-fonts (Adobe Fonts).**
> GreatFire jugeait use.typekit.net non bloqué lors de son dernier test, le 22 septembre 2026 ; aucune interférence lors de l’unique test concluant.
> Source : GreatFire, 22 septembre 2026. https://en.greatfire.org/https/use.typekit.net

> Sur la ligne fixe China Mobile à Pékin, le 30 août 2026, aucune des 11 requêtes de 21YunBox vers use.typekit.net n’a reçu de réponse.
> Source : 21YunBox, 30 août 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

**host-jsdelivr (jsDelivr).**
> Depuis Alibaba Cloud cn-zhangjiakou, le 28 août 2026, les 72 requêtes directes de 21YunBox vers cdn.jsdelivr.net ont toutes reçu une réponse, premier octet médian à 660 ms. Sur la ligne fixe China Mobile à Pékin, le 30 août, les 36 requêtes ont toutes reçu une réponse.
> Source : 21YunBox, 28 et 30 août 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

**host-cdnjs (cdnjs).**
> GreatFire jugeait cdnjs.cloudflare.com non bloqué lors de son dernier test, le 27 septembre 2026 ; aucune interférence lors de l’unique test concluant.
> Source : GreatFire, 27 septembre 2026. https://en.greatfire.org/https/cdnjs.cloudflare.com

**host-unpkg (unpkg).**
> GreatFire jugeait unpkg.com non bloqué lors de son dernier test, le 14 août 2026 ; aucune interférence lors de l’unique test concluant.
> Source : GreatFire, 14 août 2026. https://en.greatfire.org/https/unpkg.com

**host-mailchimp (Mailchimp).**
> GreatFire jugeait cdn-images.mailchimp.com bloqué lors de son dernier test, le 10 septembre 2026 ; l’unique test concluant a relevé une interférence.
> Source : GreatFire, 10 septembre 2026. https://en.greatfire.org/https/cdn-images.mailchimp.com

**host-recaptcha (Google reCAPTCHA).**
> Depuis Alibaba Cloud cn-zhangjiakou, le 28 août 2026, aucune des 72 requêtes directes de 21YunBox vers www.google.com/recaptcha n’a reçu de réponse. Sur la ligne fixe China Mobile à Pékin, le 30 août, aucune des 18 requêtes n’a reçu de réponse.
> Source : 21YunBox, 28 et 30 août 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

**host-cloudflare-turnstile (Cloudflare Turnstile).**
> GreatFire jugeait challenges.cloudflare.com non bloqué lors de son dernier test, le 11 octobre 2026 ; aucune interférence lors des 2 tests concluants.
> Source : GreatFire, 11 octobre 2026. https://en.greatfire.org/https/challenges.cloudflare.com/turnstile/v0/api.js

> Sur la ligne fixe China Mobile à Pékin, le 30 août 2026, 9 des 12 requêtes de 21YunBox vers challenges.cloudflare.com ont reçu une réponse.
> Source : 21YunBox, 30 août 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

**host-calendly (Calendly).**
> GreatFire jugeait calendly.com non bloqué lors de son dernier test, le 3 octobre 2026 ; aucune interférence lors de l’unique test concluant.
> Source : GreatFire, 3 octobre 2026. https://en.greatfire.org/https/calendly.com

**host-hcaptcha (hCaptcha).**
> GreatFire jugeait api2.hcaptcha.com non bloqué lors de son dernier test, le 14 septembre 2026 ; aucune interférence lors de l’unique test concluant.
> Source : GreatFire, 14 septembre 2026. https://en.greatfire.org/https/api2.hcaptcha.com

**host-intercom (Intercom).**
> GreatFire jugeait widget.intercom.io non bloqué lors de son dernier test, le 23 septembre 2026 ; aucune interférence lors de l’unique test concluant.
> Source : GreatFire, 23 septembre 2026. https://en.greatfire.org/https/widget.intercom.io

**host-typeform (Typeform).**
> GreatFire jugeait form.typeform.com non bloqué lors de son dernier test, le 30 septembre 2026 ; aucune interférence lors de l’unique test concluant.
> Source : GreatFire, 30 septembre 2026. https://en.greatfire.org/https/form.typeform.com

**host-zendesk (Zendesk).**
> GreatFire jugeait static.zdassets.com non bloqué lors de son dernier test, le 8 octobre 2026 ; aucune interférence lors des 2 tests concluants.
> Source : GreatFire, 8 octobre 2026. https://en.greatfire.org/https/static.zdassets.com

**host-crisp (Crisp).**
Aucun test tiers daté n’est recensé pour cette entrée, qui reste non testée.

**host-drift (Drift).**
Aucun test tiers daté n’est recensé pour cette entrée, qui reste non testée.

**host-hubspot-script (Chargeur HubSpot).**
Aucun test tiers daté n’est recensé pour cette entrée, qui reste non testée.

**host-tawk-to (Tawk.to).**
Aucun test tiers daté n’est recensé pour cette entrée, qui reste non testée.

**host-disqus (Disqus).**
> GreatFire jugeait disqus.com bloqué lors de son dernier test, le 13 septembre 2026 ; les 2 tests concluants ont tous relevé une interférence.
> Source : GreatFire, 13 septembre 2026. https://en.greatfire.org/https/disqus.com

**host-instagram (Instagram).**
> GreatFire jugeait www.instagram.com bloqué lors de son dernier test, le 3 octobre 2026 ; les 2 tests concluants ont tous relevé une interférence.
> Source : GreatFire, 3 octobre 2026. https://en.greatfire.org/https/www.instagram.com

**host-soundcloud (SoundCloud).**
> GreatFire jugeait w.soundcloud.com bloqué lors de son dernier test, le 24 juin 2026 ; ce verdict a plus de 90 jours et aucun décompte récent ne le confirme.
> Source : GreatFire, 24 juin 2026. https://en.greatfire.org/https/w.soundcloud.com

**host-spotify (Spotify).**
> GreatFire jugeait open.spotify.com bloqué lors de son dernier test, le 12 septembre 2026 ; les 4 tests concluants ont tous relevé une interférence.
> Source : GreatFire, 12 septembre 2026. https://en.greatfire.org/https/open.spotify.com

**host-x-timeline (X, widget de fil).**
> GreatFire jugeait platform.twitter.com bloqué lors de son dernier test, le 7 juillet 2026 ; ce verdict a plus de 90 jours et aucun décompte récent ne le confirme.
> Source : GreatFire, 7 juillet 2026. https://en.greatfire.org/https/platform.twitter.com

**host-wistia (Wistia).**
> GreatFire jugeait fast.wistia.com non bloqué lors de son dernier test, le 17 mars 2026 ; ce verdict a plus de 90 jours et aucun décompte récent ne le confirme.
> Source : GreatFire, 17 mars 2026. https://en.greatfire.org/https/fast.wistia.com

> Sur la ligne fixe China Mobile à Pékin, le 30 août 2026, 9 des 15 requêtes de 21YunBox vers fast.wistia.com ont reçu une réponse.
> Source : 21YunBox, 30 août 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

**host-loom (Loom).**
Aucun test tiers daté n’est recensé pour cette entrée, qui reste non testée.

**host-mapbox-telemetry (Mapbox, télémétrie).**
> GreatFire jugeait events.mapbox.com bloqué lors de son dernier test, le 12 mars 2026 ; ce verdict a plus de 90 jours et aucun décompte récent ne le confirme.
> Source : GreatFire, 12 mars 2026. https://en.greatfire.org/https/events.mapbox.com

**host-openstreetmap (Tuiles OpenStreetMap).**
> GreatFire jugeait tile.openstreetmap.org bloqué lors de son dernier test, le 7 septembre 2026 ; l’unique test concluant a relevé une interférence.
> Source : GreatFire, 7 septembre 2026. https://en.greatfire.org/https/tile.openstreetmap.org

**host-mapbox-api (Mapbox, tuiles et API).**
> GreatFire jugeait api.mapbox.com non bloqué lors de son dernier test, le 31 août 2026 ; aucune interférence lors de l’unique test concluant.
> Source : GreatFire, 31 août 2026. https://en.greatfire.org/https/api.mapbox.com

**host-wix (Wix).**
> Le 30 août 2026, depuis Alibaba Cloud cn-zhangjiakou, 21YunBox a chargé le site de Wix : premier octet médian à 532 ms, mais aucun des 3 chargements n’a abouti en moins de 60 secondes.
> Source : 21YunBox, 30 août 2026. https://www.21cloudbox.com/support/wix-china.html

**host-webflow (Webflow).**
> GreatFire jugeait webflow.com perturbé lors de son dernier test, le 23 août 2026 ; l’unique test concluant a relevé une interférence.
> Source : GreatFire, 23 août 2026. https://en.greatfire.org/https/webflow.com

**host-shopify (Shopify).**
> GreatFire jugeait cdn.shopify.com non bloqué lors de son dernier test, le 8 octobre 2026 ; aucune interférence lors des 2 tests concluants.
> Source : GreatFire, 8 octobre 2026. https://en.greatfire.org/https/cdn.shopify.com

**host-squarespace (Squarespace).**
> GreatFire jugeait www.squarespace.com non bloqué lors de son dernier test, le 3 octobre 2026 ; aucune interférence lors des 3 tests concluants.
> Source : GreatFire, 3 octobre 2026. https://en.greatfire.org/https/www.squarespace.com

**host-netlify (Netlify).**
Aucun test tiers daté n’est recensé pour cette entrée, qui reste non testée.

**host-sanity (Sanity).**
Aucun test tiers daté n’est recensé pour cette entrée, qui reste non testée.

**host-algolia (Algolia).**
> GreatFire jugeait algolia.net perturbé lors de son dernier test, le 31 août 2026 ; les 2 tests concluants ont tous relevé une interférence.
> Source : GreatFire, 31 août 2026. https://en.greatfire.org/https/algolia.net

**host-firebase (Firebase).**
> GreatFire jugeait firebase.google.com perturbé lors de son dernier test, le 14 septembre 2026 ; les 2 tests concluants ont tous relevé une interférence.
> Source : GreatFire, 14 septembre 2026. https://en.greatfire.org/https/firebase.google.com

**host-sentry (Sentry).**
> GreatFire jugeait browser.sentry-cdn.com perturbé lors de son dernier test, le 1er octobre 2026 ; l’unique test concluant a relevé une interférence.
> Source : GreatFire, 1er octobre 2026. https://en.greatfire.org/https/browser.sentry-cdn.com

**host-aws-cloudfront (AWS CloudFront).**
> 21YunBox a chargé la page produit de CloudFront 3 fois sur 3 depuis Alibaba Cloud cn-zhangjiakou le 28 août 2026 (premier octet médian à 665 ms), puis 3 fois sur 3 sur une ligne résidentielle à Pékin le 30 août (718 ms) ; l’opérateur n’est pas précisé.
> Source : 21YunBox, 28 et 30 août 2026. https://www.21cloudbox.com/support/aws-cloudfront-china.html

**host-bootstrap-cdn (Bootstrap CDN).**
Aucun test tiers daté n’est recensé pour cette entrée, qui reste non testée.

**host-paypal (PayPal).**
> GreatFire jugeait www.paypal.com non bloqué lors de son dernier test, le 25 septembre 2026 ; aucune interférence lors de l’unique test concluant.
> Source : GreatFire, 25 septembre 2026. https://en.greatfire.org/https/www.paypal.com

**host-stripe (Stripe).**
Aucun test tiers daté n’est recensé pour cette entrée, qui reste non testée.

## Ce que la divergence change pour un propriétaire de site

Les lignes consacrées aux polices et au gestionnaire de balises montrent pourquoi un résultat cloud doit porter l’étiquette de son réseau. Les ressources qui répondaient à la sonde du centre de données sont restées muettes sur la connexion grand public. Prendre l’observation cloud pour l’expérience d’un visiteur conduirait, pour cet échantillon pékinois, à une mauvaise décision de diffusion.

Pour votre propre site, partez de la requête exacte. La feuille de style d’une police, ses fichiers et le script du gestionnaire de balises sont trois dépendances distinctes. Repérez la page qui en a besoin et vérifiez si une réponse manquante empêche le visiteur d’agir. Héberger soi-même un fichier de police supprime cette requête externe, et elle seule : un formulaire ou un point de collecte d’audience défaillant n’en sera pas réparé pour autant.

Dans les lignes de mesure d’audience, lisez séparément l’hôte de la bibliothèque et celui de la collecte. Chez Mixpanel, les résultats de GreatFire diffèrent entre les deux. Les deux hôtes ont été testés à des dates différentes : impossible, donc, de reconstituer une session d’utilisateur. Il montre en revanche pourquoi vérifier une seule adresse donne une image incomplète de l’intégration.

Mesurez jusqu’au chargement complet de la page, au-delà du premier octet. Pour Wix, le premier octet est arrivé, et pourtant la page n’a pas fini de se charger dans le délai fixé par la source. Un tableau de bord arrêté au premier octet n’aurait rien vu. Suivez la requête jusqu’à l’action qui compte sur la page.

Notre [guide des CDN JavaScript en Chine](/fr/ressources/guide-web-chine/cdn-javascript-chine/) explique comment retracer ces appels dans une page. Pour modifier des formulaires ou un dispositif de suivi, notre offre d’[intégration technique](/fr/services/integration-technique/) couvre la mise en œuvre. Le [comparatif des mesures cloud et domestiques](/fr/ressources/guide-web-chine/latence-chine-points-de-mesure/#méthode-et-limites) précise les conditions de lecture des résultats.

## Là où manquent les preuves datées

Parmi les entrées non testées figurent l’hôte du widget de Drift et le chargeur HTTPS de HubSpot. Le traceur cloud de Matomo n’a aucune mesure datée pour remplacer le temps relevé sur le site du fournisseur, depuis retiré. Faute de relevé exploitable, rien ne permet de qualifier ces intégrations de fiables ou de bloquées.

Le registre conserve aussi Crisp, Tawk.to, Loom, Sanity, Netlify et Bootstrap CDN sans cible testée, et le script de Stripe sans verdict. Un déploiement propre à un compte peut passer par un autre hôte que le site du produit. Ne remplissez pas ces cases avec le temps de chargement d’une page d’accueil au seul motif que la marque est la même.

Certains relevés de GreatFire sont anciens. Leur date reste affichée : une connexion réussie il y a quelques mois peut éclairer le contexte sans trancher la décision du jour. Les observations grand public portent sur une seule ligne fixe pékinoise ; elles ne disent rien de chaque province ni de chaque opérateur. Des requêtes répétées sur une même connexion partagent aussi les mêmes conditions : leurs décomptes ne sont pas des échantillons indépendants de la population chinoise.

Servez-vous du registre pour repérer la requête externe qui mérite votre attention, puis vérifiez que la solution de remplacement remplit la même fonction. Joignez l’URL observée et la date à tout constat transmis à votre équipe de développement. C’est ce qui distingue un rapport d’incident utile d’un nom de marque sur une liste noire.

Un [scan de préparation](/fr/china-site-scanner/) aide à repérer les services externes présents sur une page. La liste de requêtes qu’il produit nourrit utilement cette comparaison. Lisez l’absence d’un hôte dans ce registre comme une lacune dans les preuves, et ne la confondez pas avec un test vérifiant qu’un utilisateur peut remplir un formulaire, lancer une vidéo ou valider un paiement.
