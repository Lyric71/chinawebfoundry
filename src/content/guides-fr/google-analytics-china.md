---
title: "Google Analytics en Chine sans ralentir votre site"
subtitle: "GA4 est bloqué derrière le Grand Pare-feu. Rien n'oblige à y renoncer ailleurs, tant que la décision de le charger se prend côté serveur."
summary: "Comment filtrer Google Analytics par pays au niveau de l'edge : GA4 continue de tourner hors de Chine, et les visiteurs chinois n'envoient plus un octet à Google."
visual: "/images/guides/google-analytics-china.webp"
order: 31
published: true
publishedAt: 2026-08-29
updatedAt: 2026-09-18
category: Technology
---

Google Analytics est bloqué en Chine continentale. googletagmanager.com et google-analytics.com se trouvent tous les deux derrière le Grand Pare-feu. Le tag sur lequel repose votre équipe marketing ne rapporte donc rien des visiteurs chinois : il leur coûte seulement du temps.

La plupart des équipes tranchent mal. Soit elles retirent GA et perdent la mesure partout, soit elles le gardent et servent en silence un site plus lent à tout Shanghai, l'une des façons les plus courantes de [casser un site WordPress en Chine](/fr/wordpress-en-chine/).

Il existe une troisième voie. Vingt-cinq lignes de code serveur, et elle tourne sur la page que vous êtes en train de lire.

## Ce que coûte vraiment un tag bloqué

Le snippet gtag standard charge `https://www.googletagmanager.com/gtag/js` en `async` : il ne bloque ni l'analyse du HTML ni le rendu. D'où l'idée, très répandue, qu'un tag bloqué ne coûte rien. La facture se paie en dessous de la requête.

Le Grand Pare-feu renvoie rarement une erreur propre. Les requêtes DNS vers googletagmanager.com reviennent empoisonnées : le navigateur reçoit une adresse IP crédible qui ne mène nulle part. Il ouvre une socket, envoie un paquet SYN, puis attend. Aucun RST ne revient. La pile réseau réessaie en backoff exponentiel jusqu'à ce que quelque chose finisse par céder.

| Étape | Hors de Chine | Depuis la Chine |
|---|---|---|
| Résolution DNS | ~20 ms, IP correcte | Réponse empoisonnée, mauvaise IP |
| Poignée de main TCP | ~30 ms | SYN envoyé, aucune réponse, réessais |
| Téléchargement du script | ~50 Ko sur le réseau, puis en cache | N'aboutit jamais |
| Délai avant abandon | sans objet | De quelques secondes à plus d'une minute, selon le navigateur et la pile réseau |

Tant que la socket reste ouverte, elle occupe un slot de connexion, maintient la radio du mobile éveillée et retarde l'événement `load`. Tout ce que vous avez branché sur `load` se déclenche en retard. Et si quelqu'un a ajouté `<link rel="preconnect" href="https://www.googletagmanager.com">` pour accélérer le tag, le blocage démarre encore plus tôt, avant même que le parseur atteigne le body.

Reste la partie invisible depuis un bureau parisien. Vos visiteurs chinois subissent un site poussif pour des raisons que personne dans l'équipe n'arrive à reproduire, votre monitoring se couvre de sessions lentes venues de Chine, et tout le monde accuse l'hébergement.

> Un script async qui n'aboutit jamais occupe quand même une socket, garde la radio éveillée et retarde votre événement load. L'attribut async protège le rendu. La page, elle, paie l'addition.

## Pourquoi les contournements habituels échouent

Quatre solutions reviennent sans arrêt. Les quatre cassent, et les raisons méritent le détour.

**Héberger gtag.js chez soi.** Vous faites passer le script par votre propre domaine et le téléchargement aboutit. Puis le script fait exactement ce pour quoi il a été écrit : il envoie ses hits de mesure vers `google-analytics.com/g/collect`. Même blocage, même attente, 200 ms plus loin dans la cascade.

**Renifler la langue du navigateur.** Un visiteur chinois sur un site B2B étranger navigue souvent en anglais, et bien des portables vendus à Shanghai sortent de l'usine en `en-US`. La langue relève de la préférence. Les paquets, eux, partent toujours de Shanghai.

Le fuseau horaire vise plus juste. `Intl.DateTimeFormat().resolvedOptions().timeZone` renvoie `Asia/Shanghai` de façon assez fiable sur les machines du continent. Il renvoie aussi `Asia/Shanghai` pour un expatrié chinois installé à Singapour, et `Europe/London` pour un ingénieur britannique assis dans un bureau de Shenzhen. Vous devinez, et vous vous trompez précisément sur les gens qui comptent.

Appeler une API de géolocalisation IP depuis le navigateur se sabote tout seul. Vous ajoutez un aller-retour réseau vers un service tiers, lui-même parfois lent ou bloqué depuis la Chine, pour éviter un aller-retour réseau. Le budget que vous vouliez économiser vient d'y passer.

La vraie contrainte se situe un cran au-dessus. Un site statique se construit une fois et se met en cache sur un CDN : chaque visiteur reçoit un HTML rigoureusement identique, octet pour octet. Impossible d'injecter un tag au build en fonction d'une information que seule la requête connaît.

## Déporter la décision vers un endpoint first-party

Chaque page embarque une seule ligne, la même pour tout le monde, parfaitement cachable :

```html
<script is:inline async src="/ga.js"></script>
```

Cette URL vit sur votre domaine, déjà résolu, avec une connexion déjà ouverte. Et `/ga.js` est une route serveur plutôt qu'un fichier : elle s'exécute à chaque requête et lit les en-têtes. Sous Astro, il suffit d'`export const prerender = false`. Vercel, de son côté, injecte `x-vercel-ip-country` à l'edge avant que votre code démarre.

La route complète :

```ts
export const prerender = false;

const GA_ID = 'G-XXXXXXXXXX';
const STUB = '/* analytics not loaded */\n';

const bootstrap = (id: string) => `(function () {
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=${id}';
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', '${id}');
})();
`;

export const GET: APIRoute = ({ request }) => {
  const country = request.headers.get('x-vercel-ip-country') ?? 'CN';

  return new Response(country !== 'CN' ? bootstrap(GA_ID) : STUB, {
    headers: {
      'Content-Type': 'application/javascript; charset=utf-8',
      'Cache-Control': 'private, no-store',
    },
  });
};
```

Le bootstrap reste volontairement bête. Il crée un élément script pointant vers la vraie URL gtag, l'ajoute au head, initialise `dataLayer`, définit `gtag` et lance les appels `js` et `config` habituels. Le code que Google vous fournit, sorti du HTML et glissé dans un corps de réponse que seule une partie des visiteurs reçoit.

| Pays du visiteur | Réponse | Taille | Requêtes vers Google |
|---|---|---|---|
| Tout sauf CN | Bootstrap gtag | 361 octets | GA4 complet |
| CN, ou pays inconnu | `/* analytics not loaded */` | 27 octets | Aucune |

Pour quelqu'un à Shanghai, toute votre pile analytics revient à une requête same-origin qui renvoie 27 octets. Pas de DNS empoisonné, pas de socket suspendue, pas d'événement `load` retardé. Les autres retrouvent GA4 à l'identique, un saut plus loin sur une connexion déjà chaude : environ 20 ms d'après nos propres relevés.

## L'en-tête de cache, c'est là que ça casse

C'est le point sur lequel la plupart des implémentations dérapent, et la panne reste invisible jusqu'au moment où elle devient très visible.

La réponse varie selon le visiteur, et un CDN n'a aucun moyen de le deviner si vous ne le lui dites pas. Mettez `/ga.js` en cache avec une directive un peu permissive : la première réponse qui traverse un nœud edge s'y installe et se rejoue pour tous ceux qui passent ensuite par ce nœud. Si ce premier visiteur venait de Pékin, la mesure vient de s'éteindre pour toute une région. S'il venait de Berlin, vous poussez désormais le bootstrap gtag en Chine continentale, exactement le problème que vous cherchiez à régler.

L'en-tête à poser, c'est `Cache-Control: private, no-store`.

Vous pourriez être tenté par `Vary: x-vercel-ip-country`. Évitez. Vary sur un en-tête non standard reste honoré de façon inégale par les caches intermédiaires et les proxies d'entreprise, et ce que vous protégeriez pèse 27 octets. Prenez la certitude.

> Mettez en cache une réponse qui dépend du pays et vous finirez par servir la mauvaise variante à une région entière. La charge utile fait 27 octets. Le no-store ne vous coûte rien.

## Fermer par défaut

Une ligne fait plus de travail que tout le reste du fichier : `request.headers.get('x-vercel-ip-country') ?? 'CN'`.

Quand l'en-tête manque, le code considère le visiteur comme chinois. Cela couvre le développement local, les déploiements de preview, les requêtes qui traversent des proxies effaçant les en-têtes, et tout ce que le réseau edge n'a pas su géolocaliser. GA ne se charge que sur confirmation positive : le visiteur se trouve ailleurs.

Inversez la valeur par défaut et chaque requête non identifiable récupère le tag. Une bonne part d'entre elles viennent de vraies personnes à Canton, derrière un proxy d'entreprise. C'est-à-dire précisément celles que vous vouliez protéger.

## Ce que vous perdez dans GA4

Assumons le compromis. Votre propriété GA4 ne contient plus aucun trafic de Chine continentale, par construction, et cela ne changera pas.

Cela pèse plus lourd qu'il n'y paraît. Dans six mois, quelqu'un ouvrira GA4, verra une ligne plate sur la Chine et en conclura qu'il n'y a pas de demande. Écrivez-le dans la description de la propriété et dans tout reporting qui remonte à un décideur : ces données, c'est le monde moins la Chine.

Pour l'autre moitié du tableau, choisissez selon le poids réel du marché continental dans vos comptes.

| Approche | Ce que vous obtenez | Charge de travail |
|---|---|---|
| Baidu Tongji | Mesure complète des visiteurs du continent, chargement rapide en Chine, standard sur les sites chinois | Moyenne, certaines fonctions exigent une présence locale |
| Logs serveur ou analytics à l'edge | Pages vues, référents et géographie, sans aucun script côté client | Faible, et respectueuse de la vie privée |
| Une seconde propriété GA4 alimentée par Measurement Protocol | Les données chinoises dans GA4, sans requête navigateur vers Google | Lourde, et la plupart des dimensions côté client disparaissent |

Pour la majorité des sites B2B étrangers, un compteur edge léger à côté du filtre suffit. Si la Chine pèse vraiment sur le chiffre d'affaires, déployez Baidu Tongji sérieusement et faites-en la référence pour ce marché.

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

## Le tester sans prendre l'avion pour Shanghai

Les tests locaux sont pénibles : l'en-tête pays n'existe qu'en production. Vercel supprime tout `x-vercel-ip-country` entrant et injecte le sien, impossible donc de le falsifier au curl contre une URL déployée.

Ce qui marche :

- Déployez sur une URL de preview et interrogez `/ga.js` au curl depuis votre poste. Vous devez récupérer le bootstrap, plus un `cache-control: private, no-store` dans la réponse.
- Ajoutez sur la branche de preview un paramètre d'URL temporaire (`/ga.js?force=cn`) pour voir le stub de vos yeux, puis supprimez-le avant la mise en production.
- Passez l'URL en ligne dans un service de test doté de vrais nœuds à Pékin, Shanghai et Canton. Cherchez dans la cascade la moindre requête vers googletagmanager.com. Il ne doit y en avoir aucune.
- Appelez `/ga.js` depuis deux pays différents à une minute d'intervalle et comparez les corps de réponse. Des réponses identiques signalent un cache devant votre route : réglez ce point avant tout le reste.
- Depuis l'étranger, vérifiez dans les DevTools que le script gtag apparaît toujours et que le temps réel GA4 enregistre votre session. On coupe vite le tag si bien qu'on le coupe pour tout le monde.

## La même mécanique vaut pour tout ce que vous chargez

Google Analytics est le cas le plus fréquent, et le mécanisme se généralise. N'importe quel script tiers bloqué se filtre de la même façon. Seul le nom de l'en-tête change.

| Plateforme | Signal de pays |
|---|---|
| Vercel | `x-vercel-ip-country`, injecté par défaut |
| Cloudflare | `cf-ipcountry`, ou `request.cf.country` dans un Worker |
| AWS CloudFront | `CloudFront-Viewer-Country`, à activer dans l'origin request policy |
| Netlify | `x-nf-geo`, du JSON encodé qu'il faut décoder |
| Fastly | `client.geo.country_code` en VCL ou Compute, à recopier dans votre propre en-tête |

Widgets de chat, cartes intégrées, lecteurs YouTube, reCAPTCHA, feuilles de style de polices hébergées. Chacun peut laisser une socket suspendue chez un visiteur chinois, et chacun se neutralise avec un petit endpoint. Lesquels le font sur votre site, vos propres tests seuls le diront, à la date où vous les menez.

Gardez un HTML identique pour tout le monde afin que le CDN fasse son travail, et renvoyez tout ce qui dépend de l'identité du demandeur vers une route de votre domaine qui répond en 20 ms.
