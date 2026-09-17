## Le reste de votre dispositif de mesure a le même défaut

Remplacer GA par un autre script hébergé ailleurs ne règle rien. Le problème change de nom d'hôte, voilà tout. Les solutions de repli les plus évidentes sont elles aussi étrangères, et plusieurs lâchent d'une façon autrement plus sournoise qu'un blocage franc.

Le tableau croise deux natures de preuve, qui ne répondent pas à la même question. GreatFire vérifie si un hôte reste joignable. 21YunBox chronomètre de vrais chargements de page depuis une sonde posée sur le continent. Les deux se contredisent sur Hotjar, et c'est cette contradiction qui vous apprend le plus.

| Outil | Ce que montrent les tests | Requêtes abouties | Source et date |
|---|---|---|---|
| Hotjar | Perturbé sur les sondes de GreatFire, mais aboutit depuis une instance Alibaba Cloud, premier octet à 487 ms | 3 sur 3 depuis le centre de données | GreatFire, 18 août 2026 ; 21YunBox, 30 août 2026 |
| Meta Pixel | `connect.facebook.net` bloqué | aucune | GreatFire, 27 mai 2026 |
| Microsoft Clarity | Répond vite, puis se fige. Premier octet à 541 ms, rien de terminé en 60 secondes | 0 sur 3 | 21YunBox, 28 août 2026 |
| Mixpanel | Même profil. Premier octet à 391 ms, rien de terminé en 60 secondes | 0 sur 3 | 21YunBox, 28 août 2026 |
| Segment | Aboutit, lentement. Premier octet à 900 ms sur un relevé, 1 084 ms sur un autre | 3 sur 3 | 21YunBox, 28 et 30 août 2026 |
| Plausible | Aboutit. Premier octet à 550 ms, LCP à 1 208 ms | 3 sur 3 | 21YunBox, 28 août 2026 |
| Matomo cloud | Aboutit. Premier octet à 516 ms, LCP à 1 532 ms | 3 sur 3 | 21YunBox, revu le 29 août 2026 |

> Tous les temps du tableau ci-dessus proviennent d'une sonde installée en Chine continentale, sur Alibaba Cloud (阿里云) cn-zhangjiakou, trois relevés par outil, abandon au bout de 60 secondes, entre le 28 et le 30 août 2026.
> Source : 21YunBox, mesures par outil en Chine, août 2026. https://www.21cloudbox.com/support/microsoft-clarity-china.html

Un centre de données à Zhangjiakou n'est pas un appartement à Pékin. Prenez ces chiffres pour le meilleur des cas, et partez de l'idée que vos visiteurs s'en tirent moins bien.

Cet écart explique à lui seul les deux verdicts sur Hotjar. 21YunBox a mené son test depuis une baie. Les sondes de GreatFire, elles, ont vu tout autre chose. Un hôte qui répond à un centre de données peut parfaitement ignorer une ligne résidentielle. Tant que vous n'avez pas mesuré Hotjar sur votre propre trafic, tenez pour acquis qu'il fait les deux.

Clarity et Mixpanel méritent une seconde lecture. Aucun des deux ne figure sur une liste de blocage. Le 15 septembre 2026, GreatFire donnait `www.clarity.ms` pour normalement accessible, et `api.mixpanel.com` de même lors de son dernier test, le 17 avril 2026. Les deux ont pourtant renvoyé un premier octet en moins de 600 ms avant de ne rien mener à terme en une minute.

Un blocage franc finit par déclencher une erreur, et quelqu'un la remarque. Une requête figée, elle, patiente en silence jusqu'à ce que le navigateur renonce. Vos enregistrements de session maigrissent, et aucune alerte ne vous préviendra.

### Amplitude, ou la panne qu'il faut savoir chercher

Amplitude charge son script depuis un nom d'hôte et envoie ses événements vers un autre. Quand un produit se répartit ainsi, un même réseau peut traiter les deux différemment. Le script se charge, les événements ne partent jamais, et votre tableau de bord affiche la même bonne santé dans les deux cas.

En avril 2026, GreatFire donnait `cdn.amplitude.com` joignable et `api.amplitude.com` bloqué, exactement ce profil. Nous avons retesté les deux noms d'hôtes pour cette mise à jour, le 17 septembre 2026.

> `cdn.amplitude.com` non bloqué, dernier test le 14 septembre 2026, le seul test concluant récent s'est connecté normalement. `api.amplitude.com` non bloqué, dernier test le 10 septembre 2026, 0 perturbation sur 1 test dans les 90 derniers jours. Sur 13 URL amplitude.com testées, GreatFire relève 1 bloquée, 3 perturbées et 9 accessibles.
> Source : GreatFire, septembre 2026. https://en.greatfire.org/https/api.amplitude.com

La scission d'avril ne s'est pas reproduite en septembre. Chacun de ces deux relevés repose sur un unique test concluant, ce qui reste mince dans un sens comme dans l'autre, et la dispersion mesurée sur l'ensemble du domaine dit une situation encore contrastée.

La leçon est là. Un verdict lu quelque part porte une date, et cinq mois suffisent à le périmer. Testez séparément le nom d'hôte qui sert votre script et celui qui reçoit vos événements, depuis un réseau du pays qui vous intéresse.

### Que déployer à la place

Baidu Tongji (百度统计) d'abord, si le marché continental pèse dans vos comptes. Ses serveurs sont dans le pays, la requête ne franchit donc aucune frontière, et ses rapports sont construits autour du trafic Baidu (百度), celui-là même que vous cherchez à comprendre. Sensors Data (神策) et GrowingIO sont les options domestiques les plus lourdes.

Sinon, hébergez l'outil vous-même. Plausible et Matomo ont abouti à chaque relevé du tableau, et tous deux s'installent sur votre propre serveur continental. La dépendance étrangère devient une requête first-party, et la question juridique de la section suivante se règle du même coup.

Une réserve, cela dit, puisque cette page traite avant tout d'un filtre. Un endpoint analytics auto-hébergé en Chine n'a besoin d'aucun filtre : il n'y a rien à arrêter. Gardez la route `/ga.js` pour GA et pour tout ce que vous chargez depuis un hôte étranger, et laissez l'outil domestique tourner pour tout le monde.

## Le PIPL s'applique même aux hôtes qui répondent

Accessibilité et légalité sont deux questions distinctes, et la seconde vaut que l'hôte réponde ou non.

Google Analytics envoie un identifiant client et une adresse IP à Google. La loi chinoise sur la protection des informations personnelles range les deux parmi les informations personnelles, et les faire sortir du continent constitue un transfert transfrontalier.

> Lorsqu'un gestionnaire d'informations personnelles fournit des informations personnelles hors du territoire de la République populaire de Chine, il informe la personne concernée du nom et des coordonnées du destinataire à l'étranger, des finalités et modalités du traitement, des catégories d'informations personnelles concernées et des voies par lesquelles elle peut exercer ses droits auprès de ce destinataire, et il recueille son consentement distinct.
> Source : Administration du cyberespace de Chine (中央网络安全和信息化委员会办公室), loi de la République populaire de Chine sur la protection des informations personnelles, article 39. Adoptée le 20 août 2021, entrée en vigueur le 1er novembre 2021. https://www.cac.gov.cn/2021-08/20/c_1631050028355286.htm

Un consentement distinct suppose un opt-in propre à ce transfert, pas une ligne noyée dans une bannière qui couvre tout à la fois.

L'argument ne bouge pas quand le réseau bouge. Qu'un hôte bloqué se remette à répondre le mois prochain, que Google déplace un nom d'hôte, le transfert reste un transfert. Le filtre règle les deux questions d'un coup : aucune requête ne quitte le navigateur, il n'y a donc aucun transfert à justifier. Notre guide sur [le PIPL et la loi sur la sécurité des données](/fr/ressources/guide-web-chine/donnees-personnelles-chine-pipl-dsl/) détaille les seuils et les procédures de déclaration.
