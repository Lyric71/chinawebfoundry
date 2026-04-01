---
title: "Hébergement web en Chine : le choix du serveur conditionne tout le reste"
subtitle: "Pour les utilisateurs chinois, la différence entre un site hébergé à Shanghai et un autre à Francfort ne se mesure pas en millisecondes. Elle se résume à une question : la page s'affiche-t-elle, oui ou non."
summary: "Le lieu d'hébergement de votre site chinois détermine la vitesse, le classement Baidu et la conformité réglementaire. Comparatif entre hébergement continental, hongkongais et étranger, et panorama des fournisseurs cloud."
visual: "/images/guides/china-website-hosting-guide.webp"
order: 6
published: true
category: Hosting
---

L'hébergement est la décision la plus sous-estimée dans toute stratégie web tournée vers la Chine. Un mauvais choix de localisation serveur, et le site met cinq secondes à charger - quand il charge. Un mauvais choix de fournisseur, et vous passez à côté d'intégrations écosystémiques que vos concurrents exploitent déjà. Le marché cloud chinois est dominé par des acteurs locaux, chacun connecté à un segment différent de l'internet chinois. La question de la localisation des serveurs se décline en trois niveaux, avec des arbitrages très différents. Quant au CDN, il pèse ici bien plus lourd qu'ailleurs dans le monde.

## Les fournisseurs cloud chinois

| Fournisseur | Part de marché | Point fort |
|---|---|---|
| Alibaba Cloud | 36 à 39 % | Leader en Chine, intégration e-commerce |
| Huawei Cloud | 12 à 19 % | Entreprises et secteur public |
| Tencent Cloud | 11 à 16 % | Intégration WeChat |
| Baidu Cloud | ~5 % | IA et apprentissage automatique |
| AWS Chine | ~7 % | Notoriété internationale (via Sinnet/NWCD) |

Le paysage cloud chinois ne ressemble pas à ce que l'on connaît ailleurs. AWS et Azure sont présents, mais n'occupent pas les premières places. Ce sont les acteurs locaux qui dominent, chacun adossé à un écosystème plus large qui détermine ses atouts.

Alibaba Cloud est la force dominante. 36 à 39 % du marché. Si votre activité touche déjà l'infrastructure de commerce en ligne ou de paiement d'Alibaba, c'est le choix naturel. Pour les entreprises qui arrivent en Chine sans préférence d'écosystème, Alibaba reste le choix le plus sûr par défaut : documentation la plus complète, réseau de partenaires le plus étendu, plateforme la plus mature.

Huawei Cloud et Tencent Cloud se partagent le second rang. Huawei, entre 12 et 19 % du marché, est le partenaire de référence pour les projets d'entreprise et le secteur public. Si vos interlocuteurs sont des entreprises d'État ou des organismes proches du gouvernement, Huawei est souvent attendu, plus que simplement préféré. Tencent, entre 11 et 16 %, est le choix évident pour toute stratégie impliquant les mini-programmes WeChat ou les services QQ. L'intégration WeChat en fait la solution par défaut pour les entreprises qui se développent autour de cette plateforme.

Baidu Cloud occupe une niche. Environ 5 % du marché, centré sur l'intelligence artificielle et l'apprentissage automatique. Pertinent si votre infrastructure technique est fortement orientée IA. Rarement le point de départ pour un hébergement classique.

Reste AWS Chine. Les entreprises étrangères s'y tournent par réflexe, le nom leur étant familier. Environ 7 % du marché, opéré via les partenaires locaux Sinnet et NWCD. Point essentiel : AWS Chine est une entité totalement distincte. Comptes séparés. Facturation séparée. Processus de conformité séparé. Ce n'est pas votre AWS mondial avec une région chinoise en plus.

> AWS Chine est une entité totalement distincte d'AWS mondial. Comptes différents, facturation différente, conformité différente. Ne partez pas du principe que c'est le même produit.

Les entreprises qui font cette hypothèse se retrouvent surprises au moment de la mise en place.

## Chine continentale, Hong Kong ou étranger

| | Chine continentale | Hong Kong | Étranger (US/UE) |
|---|---|---|---|
| **Temps de chargement** | Moins d'une seconde | 50 à 150 ms de latence | 300 à 500 ms+ de latence |
| **ICP requis** | Oui | Non | Non |
| **Avantage SEO Baidu** | Oui | Non | Non |
| **Conformité PIPL** | Oui | Non | Non |
| **Risque Grand Pare-feu** | Aucun | Faible | Élevé (perte de paquets + blocage) |

L'emplacement physique de vos serveurs conditionne tout le reste : choix du fournisseur, configuration CDN, stratégie Baidu. Une erreur à ce stade ne se rattrape pas en aval.

**La Chine continentale** est la bonne réponse dès lors que l'on cible sérieusement les utilisateurs chinois. Temps de chargement inférieurs à une seconde. Baidu y voit un signal de confiance. Le PIPL l'impose. Certes, il faut une licence ICP, mais la procédure de Bei'an est à la portée de la plupart des entreprises étrangères. Si votre audience est en Chine, vos serveurs doivent l'être aussi.

> Un site hébergé en Chine continentale charge en moins d'une seconde. Un site hébergé à l'étranger part déjà avec 300 à 500 ms de latence, avant même que le Grand Pare-feu n'intervienne.

**Hong Kong** fait office de tremplin. Pas d'ICP nécessaire, latence vers le continent de 50 à 150 millisecondes, et c'est une option acceptable pour les entreprises qui testent le marché avant de s'engager dans le processus ICP complet. Convenable aussi pour les sites qui desservent à la fois un public chinois et international depuis un même emplacement. Mais autant le dire clairement : c'est un compromis, pas une solution pérenne pour qui veut se positionner sur Baidu ou satisfaire aux exigences du PIPL.

Enfin, **l'hébergement à l'étranger depuis les États-Unis ou l'Europe**. C'est l'option de ceux qui veulent éviter le processus ICP. Le prix à payer est élevé. Latence de 300 à 500 millisecondes au minimum. Le Grand Pare-feu ajoute des pertes de paquets par-dessus. Et le risque de blocage pur et simple du site est réel. Pas de signal de confiance Baidu, pas de conformité PIPL, et des temps de chargement si longs que la plupart des utilisateurs chinois fermeront l'onglet avant que la page ne s'affiche. Héberger à Francfort pour servir des utilisateurs à Shenzhen, c'est les perdre avant même qu'ils ne voient la page d'accueil.

## Les fournisseurs CDN qui fonctionnent réellement en Chine

| Fournisseur | Avantage principal |
|---|---|
| Alibaba Cloud CDN | Plus grand réseau de PoP en Chine, écosystème Alibaba |
| Tencent Cloud CDN | Optimal pour les services liés à WeChat/QQ |
| ChinaCache | Pionnier du CDN en Chine, réseau domestique étendu |
| Cloudflare Chine | Via partenariat avec JD Cloud, forfait entreprise requis |

Un CDN ne corrige pas un mauvais choix d'hébergement, mais en Chine il peut décider si un site se charge ou non. Le critère déterminant : disposer de points de présence physiquement situés en Chine continentale. Un CDN mondial sans PoP en Chine ne résout rien.

> Le critère CDN déterminant : des points de présence physiquement en Chine continentale. Tout le reste est secondaire.

**Alibaba Cloud CDN** possède le plus vaste réseau de PoP en Chine et s'intègre directement à l'écosystème Alibaba. Pour les clients déjà sur Alibaba Cloud, c'est le choix par défaut. Inutile de chercher ailleurs.

**Tencent Cloud CDN** s'impose si vos services sont connectés à WeChat ou QQ. L'intégration avec les plateformes de messagerie de Tencent gère ce trafic plus efficacement que toute autre offre du marché.

**ChinaCache** est le doyen du CDN chinois. En activité depuis plus longtemps que la plupart des solutions cloud. Réseau domestique étendu, large couverture, longue expérience du terrain.

**Le réseau Cloudflare Chine** fonctionne via un partenariat avec JD Cloud. Il offre aux entreprises déjà clientes de Cloudflare au niveau mondial un point d'entrée vers la Chine, mais un forfait entreprise est requis. Pas d'inscription en libre-service.
