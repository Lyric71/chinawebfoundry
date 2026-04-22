---
title: "Hébergement web en Chine : tout se joue au choix du serveur"
subtitle: "Pour un internaute chinois, l'écart entre Shanghai et Francfort ne se mesure pas en millisecondes. Il se résume à ceci : la page s'affiche, ou elle ne s'affiche pas."
summary: "Le lieu d'hébergement d'un site chinois commande la vitesse, le référencement sur Baidu et la conformité réglementaire. Comparatif entre continent, Hong Kong et étranger, avec panorama des acteurs du cloud."
visual: "/images/guides/china-website-hosting-guide.webp"
order: 6
published: true
category: Hosting
---

Dans toute stratégie web orientée vers la Chine, l'hébergement reste la décision la plus sous-estimée. Serveur mal placé, et la page met cinq secondes à charger, quand elle charge. Fournisseur mal choisi, et vous passez à côté d'intégrations dans l'écosystème local que vos concurrents exploitent déjà. Le marché chinois du cloud est tenu par des acteurs nationaux, chacun branché sur une portion différente de l'internet chinois. La question de l'emplacement physique se décline sur trois niveaux aux arbitrages radicalement différents. Et le CDN pèse ici bien plus qu'ailleurs.

## Les acteurs chinois du cloud

| Fournisseur | Part de marché | Point fort |
|---|---|---|
| Alibaba Cloud | 36 à 39 % | Leader national, intégration e-commerce |
| Huawei Cloud | 12 à 19 % | Grands comptes et secteur public |
| Tencent Cloud | 11 à 16 % | Intégration WeChat |
| Baidu Cloud | ~5 % | IA et apprentissage automatique |
| AWS Chine | ~7 % | Notoriété internationale (via Sinnet/NWCD) |

Le paysage chinois du cloud n'a pas d'équivalent ailleurs. AWS et Azure sont bien présents, mais relégués loin derrière. Les places de tête reviennent aux acteurs locaux, chacun adossé à un écosystème plus large qui dessine ses atouts.

Alibaba Cloud domine la catégorie. 36 à 39 % du marché. Pour toute activité déjà reliée aux rails du e-commerce ou du paiement Alibaba, le choix s'impose de lui-même. Et pour une entreprise qui débarque en Chine sans préférence écosystémique, Alibaba fait figure de valeur sûre : documentation la plus fournie, réseau de partenaires le plus dense, plateforme la plus mûre.

Huawei Cloud et Tencent Cloud se disputent la deuxième place. Huawei, entre 12 et 19 %, s'est imposé dans les projets d'entreprise et le secteur public. Face à des interlocuteurs issus d'entreprises d'État ou d'organismes proches du pouvoir, Huawei n'est pas seulement préféré, il est attendu. Tencent, entre 11 et 16 %, devient le réflexe dès lors qu'une stratégie s'appuie sur les mini-programmes WeChat ou les services QQ. Son intégration à WeChat en fait le choix par défaut de toute entreprise qui se construit autour de la plateforme.

Baidu Cloud occupe une niche. Environ 5 % du marché, centré sur l'intelligence artificielle et l'apprentissage automatique. Pertinent pour une infrastructure technique fortement orientée IA. Rarement un point de départ pour de l'hébergement classique.

Reste AWS Chine. Les entreprises étrangères s'y précipitent par réflexe, le nom leur étant familier. Environ 7 % du marché, opéré via les partenaires locaux Sinnet et NWCD. Attention : AWS Chine est une entité strictement distincte. Comptes séparés. Facturation séparée. Conformité séparée. Ce n'est pas votre AWS mondial augmenté d'une région chinoise.

> AWS Chine est une entité totalement distincte d'AWS mondial. Comptes différents, facturation différente, conformité différente. Ne partez pas du principe que c'est le même produit.

Les entreprises qui font cette confusion le découvrent au moment de la mise en production.

## Chine continentale, Hong Kong ou étranger

| | Chine continentale | Hong Kong | Étranger (US/UE) |
|---|---|---|---|
| **Temps de chargement** | Moins d'une seconde | 50 à 150 ms de latence | 300 à 500 ms+ de latence |
| **ICP requis** | Oui | Non | Non |
| **Avantage SEO Baidu** | Oui | Non | Non |
| **Conformité PIPL** | Oui | Non | Non |
| **Risque Grand Pare-feu** | Aucun | Faible | Élevé (perte de paquets et blocage) |

L'emplacement physique des serveurs conditionne tout ce qui suit : fournisseur, configuration CDN, stratégie Baidu. Une erreur à ce stade ne se rattrape pas plus loin dans la chaîne.

**La Chine continentale** est la bonne réponse dès qu'on cible sérieusement les utilisateurs chinois. Chargement sous la seconde. Baidu y voit un signal de confiance. Le PIPL l'impose. Certes, une licence ICP devient obligatoire, mais la procédure Bei'an reste accessible à la plupart des entreprises étrangères. Si votre audience est en Chine, vos serveurs doivent l'être aussi.

> Un site hébergé en Chine continentale charge en moins d'une seconde. Un site hébergé à l'étranger part déjà avec 300 à 500 ms de latence, avant même que le Grand Pare-feu n'entre en jeu.

**Hong Kong** joue le rôle de tremplin. Pas d'ICP, latence de 50 à 150 millisecondes vers le continent, option acceptable pour les entreprises qui jaugent le marché avant d'entamer une procédure ICP complète. Convenable aussi pour servir un même site à un public chinois et international depuis un unique point. Mais le compromis doit être assumé : ce n'est pas une solution pérenne pour qui vise Baidu ou le PIPL.

Enfin, **l'hébergement depuis les États-Unis ou l'Europe**. L'option de ceux qui veulent éviter l'ICP. La note est salée. Latence de 300 à 500 millisecondes au minimum. Le Grand Pare-feu ajoute sa couche de pertes de paquets. Et le risque de blocage pur et simple existe. Aucun signal de confiance Baidu, aucune conformité PIPL, et des temps de chargement tels que la plupart des utilisateurs chinois fermeront l'onglet avant que la page n'apparaisse. Héberger à Francfort pour servir Shenzhen revient à perdre ses visiteurs avant même la page d'accueil.

## Les CDN qui tiennent la route en Chine

| Fournisseur | Avantage principal |
|---|---|
| Alibaba Cloud CDN | Plus grand réseau de PoP en Chine, écosystème Alibaba |
| Tencent Cloud CDN | Idéal pour les services connectés à WeChat et QQ |
| ChinaCache | Pionnier local, réseau domestique étendu |
| Cloudflare Chine | Via partenariat JD Cloud, offre entreprise obligatoire |

Un CDN ne rattrape pas un mauvais choix d'hébergement, mais en Chine il peut décider qu'un site s'affiche ou non. Le critère qui tranche : des points de présence physiquement implantés en Chine continentale. Un CDN mondial sans PoP en Chine ne règle rien.

> Le critère CDN qui tranche : des points de présence physiquement situés en Chine continentale. Le reste est secondaire.

**Alibaba Cloud CDN** aligne le réseau de PoP le plus vaste du pays et se branche directement sur l'écosystème Alibaba. Pour un client déjà sur Alibaba Cloud, le choix se fait sans réfléchir.

**Tencent Cloud CDN** s'impose dès que les services sont reliés à WeChat ou QQ. L'intégration avec les plateformes de messagerie Tencent gère ce trafic mieux que n'importe quelle autre offre.

**ChinaCache** est le doyen du CDN en Chine. En service depuis plus longtemps que la plupart des solutions cloud. Réseau domestique étendu, couverture large, expérience solide du terrain.

**Le réseau Cloudflare Chine** passe par un partenariat avec JD Cloud. Il offre aux clients Cloudflare mondiaux une porte d'entrée vers la Chine, mais exige une offre entreprise. Pas d'inscription en libre-service.
