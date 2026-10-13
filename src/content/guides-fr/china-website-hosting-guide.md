---
title: "Hébergement en Chine : le serveur décide de tout"
subtitle: "Pour un internaute chinois, l'écart entre Shanghai et Francfort ne se mesure pas en millisecondes. Il se résume à ceci : la page s'affiche, ou elle ne s'affiche pas."
summary: "De l'emplacement du serveur dépendent l'affichage d'un site en Chine et l'obligation d'un dépôt ICP. Continent, Hong Kong et étranger comparés."
visual: "/images/guides/china-website-hosting-guide.webp"
order: 6
published: true
publishedAt: 2026-04-01
updatedAt: 2026-10-13
category: Hosting
---

Dans toute stratégie web orientée vers la Chine, l'hébergement reste la décision la plus sous-estimée : il pèse davantage sur la vitesse d'affichage que [tout ce que vous réglez dans un site WordPress](/fr/wordpress-en-chine/). Placez mal le serveur et la page se traîne, quand elle finit par s'afficher. Fournisseur mal choisi, et vous passez à côté d'intégrations dans l'écosystème local que vos concurrents exploitent déjà. Le marché chinois du cloud est tenu par des acteurs nationaux, chacun branché sur une portion différente de l'internet chinois. La question de l'emplacement physique se décline sur 3 niveaux aux arbitrages très différents. Et le CDN pèse ici bien plus qu'ailleurs.

## Les acteurs chinois du cloud

| Fournisseur | Part de marché | Point fort |
|---|---|---|
| Alibaba Cloud | 36 à 39 % | Leader national, intégration e-commerce |
| Huawei Cloud | 12 à 19 % | Grands comptes et secteur public |
| Tencent Cloud | 11 à 16 % | Intégration WeChat |
| Baidu Cloud | ~5 % | IA et apprentissage automatique |
| AWS Chine | ~7 % | Notoriété internationale (via Sinnet/NWCD) |

Le paysage chinois du cloud n'a pas d'équivalent ailleurs. AWS et Azure sont bien présents, relégués loin derrière. Les places de tête reviennent aux acteurs locaux, chacun adossé à un écosystème plus large qui dessine ses atouts.

Alibaba Cloud domine la catégorie. 36 à 39 % du marché. Pour toute activité déjà reliée aux rails du e-commerce ou du paiement Alibaba, le choix s'impose de lui-même. Pour une entreprise qui débarque en Chine sans préférence écosystémique, Alibaba fait figure de valeur sûre : documentation la plus fournie, réseau de partenaires le plus dense, plateforme la plus mûre.

Huawei Cloud et Tencent Cloud se disputent la deuxième place. Huawei, entre 12 et 19 %, s'est imposé dans les projets d'entreprise et le secteur public. Face à des interlocuteurs issus d'entreprises d'État ou d'organismes proches du pouvoir, Huawei est souvent le choix attendu. Tencent, entre 11 et 16 %, devient le réflexe dès lors qu'une stratégie s'appuie sur les mini-programmes WeChat ou les services QQ. Son intégration à WeChat en fait le choix par défaut de toute entreprise qui se construit autour de la plateforme.

Baidu Cloud occupe une niche. Environ 5 % du marché, centré sur l'intelligence artificielle et l'apprentissage automatique. Pertinent pour une infrastructure technique fortement orientée IA. Rarement un point de départ pour de l'hébergement classique.

Reste AWS Chine. Les entreprises étrangères s'y précipitent par réflexe, le nom leur étant familier. Environ 7 % du marché, opéré via les partenaires locaux Sinnet et NWCD. Attention : AWS Chine est une entité strictement distincte du AWS mondial. Comptes séparés. Facturation séparée. Conformité séparée. Le compte AWS mondial dont vous disposez déjà ne vous donne aucun accès ici.

> AWS Chine est une entité totalement distincte d'AWS mondial. Comptes différents, facturation différente, conformité différente. Ne partez pas du principe que c'est le même produit.

Les entreprises qui font cette confusion le découvrent au moment de la mise en production.

## Chine continentale, Hong Kong ou étranger

| | Chine continentale | Hong Kong | Étranger (US/UE) |
|---|---|---|---|
| **Les requêtes franchissent la frontière** | Non | Oui | Oui |
| **ICP requis** | Oui | Non | Non |
| **Conformité PIPL** | Oui | Non | Non |
| **Risque Grand Pare-feu** | Aucun | Faible | Élevé (perte de paquets et blocage) |

L'emplacement physique des serveurs conditionne tout ce qui suit : fournisseur, configuration CDN, stratégie Baidu. Une erreur à ce stade ne se rattrape pas plus loin dans la chaîne.

**La Chine continentale** s'impose dès lors qu'on vise sérieusement les internautes chinois. Les requêtes ne quittent pas le territoire, et la PIPL impose de toute façon cet hébergement. Il faut d'abord obtenir un dépôt ICP (ICP备案), au nom d'une société immatriculée sur le continent. Si votre public est en Chine, vos serveurs doivent s'y trouver aussi.

> Chinafy a testé 614 sites internationaux depuis Pékin, la Virginie et Londres : deux sur trois ne se sont pas chargés en Chine, et le délai avant le premier octet y était 4 à 4,5 fois plus long qu'aux États-Unis ou au Royaume-Uni.
> Source : Chinafy, China Website Performance Benchmarks 2026, 14 avril 2026 (étude publiée par un prestataire).

**Hong Kong** fait office de tremplin. Aucun ICP n'y est exigé, le continent est à deux pas, et l'option se défend pour une entreprise qui sonde le marché avant d'engager une procédure ICP complète. Elle convient aussi à un site qui sert, depuis un seul point, un public chinois et international. C'est un compromis, qu'il faut assumer : pour un site dont l'audience se trouve surtout sur le continent, ce n'est qu'une solution d'attente.

Reste **l'hébergement aux États-Unis ou en Europe**, la solution de ceux qui veulent échapper à l'ICP. L'addition est lourde. Chaque requête franchit la frontière, et le Grand Pare-feu y ajoute ses pertes de paquets. Le risque d'un blocage pur et simple existe bel et bien. Impossible, alors, de respecter la PIPL, et les pages sont si lentes que bien des visiteurs ferment l'onglet avant la fin de l'affichage. Héberger à Francfort pour servir Shenzhen, c'est perdre ses visiteurs avant même la page d'accueil.

## Les CDN qui tiennent la route en Chine

| Fournisseur | Avantage principal |
|---|---|
| Alibaba Cloud CDN | Plus grand réseau de PoP en Chine, écosystème Alibaba |
| Tencent Cloud CDN | Idéal pour les services connectés à WeChat et QQ |
| ChinaCache | Pionnier local, réseau domestique étendu |
| Cloudflare Chine | Via partenariat JD Cloud, offre entreprise obligatoire |

Un CDN ne rattrape pas un mauvais choix d'hébergement. En Chine, il peut décider qu'un site s'affiche ou non. Le critère qui tranche : des points de présence physiquement implantés en Chine continentale. Un CDN mondial sans PoP en Chine ne règle rien.

> Le critère CDN qui tranche : des points de présence physiquement situés en Chine continentale. Le reste est secondaire.

**Alibaba Cloud CDN** aligne le réseau de PoP le plus vaste du pays et se branche directement sur l'écosystème Alibaba. Pour un client déjà sur Alibaba Cloud, le choix se fait sans réfléchir.

**Tencent Cloud CDN** s'impose dès que les services sont reliés à WeChat ou QQ. L'intégration avec les plateformes de messagerie Tencent gère ce trafic mieux que toute autre offre.

**ChinaCache** est le doyen du CDN en Chine. En service depuis plus longtemps que la plupart des solutions cloud. Réseau domestique étendu, couverture large, expérience solide du terrain.

**Le réseau Cloudflare Chine** passe par un partenariat avec JD Cloud. Il offre aux clients Cloudflare mondiaux une porte d'entrée vers la Chine, avec une condition : être en offre entreprise. Pas d'inscription en libre-service.
