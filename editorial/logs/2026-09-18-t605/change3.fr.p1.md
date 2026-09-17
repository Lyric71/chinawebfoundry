## Le reste de votre pile analytics a le même problème

Retirer GA pour y mettre un autre script hébergé ne fait que déplacer le problème vers un autre nom d'hôte. La plupart des remplaçants évidents sont eux aussi des hôtes étrangers, et plusieurs échouent d'une manière plus difficile à repérer qu'un blocage net.

Le tableau réunit deux types de preuves, qui répondent à des questions différentes. GreatFire teste si un hôte est joignable. 21YunBox chronomètre de vrais chargements de pages depuis une sonde installée sur le continent. Les deux divergent sur Hotjar, et c'est cette divergence qui est la plus instructive.

| Outil | Ce que montrent les tests | Requêtes abouties | Source et date |
|---|---|---|---|
| Hotjar | Perturbé sur les sondes de GreatFire, mais aboutit depuis une instance Alibaba Cloud avec un premier octet à 487 ms | 3 sur 3 depuis le centre de données | GreatFire, 18 août 2026 ; 21YunBox, 30 août 2026 |
| Meta Pixel | `connect.facebook.net` bloqué | aucune | GreatFire, 27 mai 2026 |
| Microsoft Clarity | Répond vite, puis se fige. Premier octet à 541 ms, rien de terminé en 60 secondes | 0 sur 3 | 21YunBox, 28 août 2026 |
| Mixpanel | Même profil. Premier octet à 391 ms, rien de terminé en 60 secondes | 0 sur 3 | 21YunBox, 28 août 2026 |
| Segment | Aboutit, lentement. Premier octet à 900 ms sur un relevé, 1 084 ms sur un autre | 3 sur 3 | 21YunBox, 28 et 30 août 2026 |
| Plausible | Aboutit. Premier octet à 550 ms, LCP à 1 208 ms | 3 sur 3 | 21YunBox, 28 août 2026 |
| Matomo cloud | Aboutit. Premier octet à 516 ms, LCP à 1 532 ms | 3 sur 3 | 21YunBox, revu le 29 août 2026 |

> Tous les temps du tableau ci-dessus ont été mesurés depuis une sonde installée en Chine continentale, sur Alibaba Cloud (阿里云) cn-zhangjiakou, à raison de trois relevés par outil avec abandon au bout de 60 secondes, entre le 28 et le 30 août 2026.
> Source : 21YunBox, mesures par outil en Chine, août 2026. https://www.21cloudbox.com/support/microsoft-clarity-china.html

Un centre de données à Zhangjiakou n'est pas un appartement à Pékin. Lisez ces chiffres comme le meilleur des cas, et partez du principe que vos visiteurs obtiennent moins bien.

Cet écart explique à lui seul les deux verdicts sur Hotjar. 21YunBox a mené son test depuis une baie. Les sondes de GreatFire, elles, ont vu autre chose, et un hôte qui répond à un centre de données peut très bien ignorer une ligne résidentielle. Tant que vous n'avez pas mesuré Hotjar sur votre propre trafic, considérez qu'il fait les deux.

Clarity et Mixpanel sont les deux lignes à relire. Ni l'un ni l'autre n'est sur une liste de blocage. GreatFire donnait `www.clarity.ms` comme répondant normalement le 15 septembre 2026, et `api.mixpanel.com` comme répondant normalement lors de son dernier test, le 17 avril 2026. Les deux ont pourtant rendu un premier octet en moins de 600 ms, puis n'ont rien terminé en une minute.

Un blocage franc finit par déclencher une erreur que quelqu'un remarque. Une requête figée, elle, reste là sans bruit jusqu'à ce que le navigateur abandonne, et votre enregistrement de session est simplement plus maigre qu'il ne devrait l'être, sans qu'aucune alerte ne vous le dise jamais.

### Amplitude, et la panne qu'il faut savoir tester

Amplitude charge son script depuis un nom d'hôte et poste ses événements vers un autre. Quand un produit se scinde ainsi, les deux noms d'hôtes peuvent recevoir des réponses différentes du même réseau. Le script se charge et les événements ne partent jamais. Votre tableau de bord paraît sain dans les deux cas.

En avril 2026, GreatFire donnait `cdn.amplitude.com` joignable et `api.amplitude.com` bloqué, exactement ce profil. Nous avons retesté les deux noms d'hôtes pour cette mise à jour, le 17 septembre 2026.

> `cdn.amplitude.com` non bloqué, dernier test le 14 septembre 2026, le seul test concluant récent s'est connecté normalement. `api.amplitude.com` non bloqué, dernier test le 10 septembre 2026, 0 perturbation sur 1 test dans les 90 derniers jours. Sur 13 URL amplitude.com testées, GreatFire relève 1 bloquée, 3 perturbées et 9 accessibles.
> Source : GreatFire, septembre 2026. https://en.greatfire.org/https/api.amplitude.com

La scission d'avril ne s'est pas reproduite en septembre. Ces deux relevés reposent sur un seul test concluant, ce qui est mince dans un sens comme dans l'autre, et la dispersion sur l'ensemble du domaine indique que la situation reste contrastée.

C'est là qu'est la vraie leçon. Un verdict lu quelque part porte une date, et cinq mois suffisent à le périmer. Testez le nom d'hôte depuis lequel votre script se charge et celui vers lequel il poste, séparément, depuis un réseau du pays qui vous intéresse.

### Quoi déployer à la place

Baidu Tongji (百度统计) d'abord, si le marché continental compte pour vous. Ses serveurs sont dans le pays, la requête ne franchit donc aucune frontière, et son reporting est bâti autour du trafic Baidu (百度), celui-là même que vous cherchez à comprendre. Sensors Data (神策) et GrowingIO sont les options domestiques les plus lourdes.

Sinon, hébergez chez vous. Plausible et Matomo ont abouti à chaque relevé du tableau, et tous deux s'installent sur votre propre serveur continental. Une dépendance étrangère devient alors une requête first-party, et la question juridique de la section suivante se règle du même coup.

Une réserve, puisque cette page parle avant tout d'un filtre. Un endpoint analytics auto-hébergé en Chine n'a besoin d'aucun filtre, puisqu'il n'y a rien à arrêter. Gardez la route `/ga.js` pour GA et pour tout ce que vous chargez depuis un hôte étranger, et laissez l'outil domestique tourner pour tout le monde.

## Le PIPL s'applique même aux hôtes qui répondent

Joignabilité et légalité sont deux questions distinctes, et la seconde tient que l'hôte réponde ou non.

Google Analytics envoie un identifiant client et une adresse IP à Google. Au regard de la loi chinoise sur la protection des informations personnelles, les deux sont des informations personnelles, et les faire sortir du continent constitue un transfert transfrontalier.

> Lorsqu'un gestionnaire d'informations personnelles fournit des informations personnelles hors du territoire de la République populaire de Chine, il informe la personne concernée du nom et des coordonnées du destinataire à l'étranger, des finalités et modalités du traitement, des catégories d'informations personnelles concernées et des voies par lesquelles elle peut exercer ses droits auprès de ce destinataire, et il recueille son consentement distinct.
> Source : Administration du cyberespace de Chine (中央网络安全和信息化委员会办公室), loi de la République populaire de Chine sur la protection des informations personnelles, article 39. Adoptée le 20 août 2021, entrée en vigueur le 1er novembre 2021. https://www.cac.gov.cn/2021-08/20/c_1631050028355286.htm

Un consentement distinct veut dire un opt-in propre à ce transfert, et non une ligne parmi d'autres dans une bannière qui couvre tout à la fois.

Cet argument ne bouge pas quand le réseau bouge. Si un hôte bloqué se remet à répondre le mois prochain, ou si Google déplace un nom d'hôte, le transfert reste un transfert. Le filtre ferme les deux questions d'un coup : aucune requête ne quitte le navigateur, il n'y a donc aucun transfert pour lequel trouver une base légale. Notre guide sur [le PIPL et la loi sur la sécurité des données](/fr/ressources/guide-web-chine/donnees-personnelles-chine-pipl-dsl/) détaille les seuils et les procédures de déclaration.
