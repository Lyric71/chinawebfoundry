---
title: "Hébergement web en Chine : le lieu d'hébergement décide si votre site charge ou non"
subtitle: "Pour les utilisateurs chinois, la différence entre un site hébergé à Shanghai et un autre à Francfort ne se mesure pas en millisecondes. C'est la différence entre une page qui s'affiche et une page qui ne s'affiche pas du tout."
summary: "Le lieu d'hébergement de votre site chinois affecte la vitesse, le classement Baidu et la conformité réglementaire. Comparaison entre hébergement continental, hongkongais et étranger, ainsi que les principaux fournisseurs cloud."
visual: "/images/guides/china-website-hosting-guide.webp"
order: 6
published: true
category: Hosting
---

L'hébergement est la décision la plus sous-estimée de toute stratégie web en Chine. Choisissez le mauvais emplacement de serveur et votre site met cinq secondes à charger, quand il charge. Choisissez le mauvais fournisseur et vous passez à côté d'intégrations écosystémiques que vos concurrents exploitent déjà. Le marché chinois du cloud est dominé par des acteurs locaux, chacun connecté à un pan différent de l'internet chinois. La question de l'emplacement des serveurs se décline en trois niveaux aux compromis très différents. Et le CDN que vous choisissez ici compte bien plus qu'ailleurs dans le monde.

## Les fournisseurs cloud chinois

| Fournisseur | Part de marché | Point fort |
|---|---|---|
| Alibaba Cloud | 36 à 39 % | Le plus grand en Chine, intégration e-commerce |
| Huawei Cloud | 12 à 19 % | Entreprises et secteur public |
| Tencent Cloud | 11 à 16 % | Intégration WeChat |
| Baidu Cloud | ~5 % | IA et apprentissage automatique |
| AWS Chine | ~7 % | Notoriété mondiale (via Sinnet/NWCD) |

Le marché chinois du cloud ne ressemble pas à ce dont on a l'habitude. AWS et Azure existent ici, mais ils ne dominent pas. Ce sont les acteurs locaux qui mènent, et chacun est branché sur un écosystème plus large qui détermine ses points forts.

Alibaba Cloud est la force dominante. 36 % à 39 % du marché. Si votre activité touche déjà l'infrastructure de commerce en ligne ou de paiement d'Alibaba, c'est le choix naturel. Pour les entreprises qui arrivent en Chine sans préférence d'écosystème marquée, Alibaba est aussi le choix par défaut le plus sûr - documentation la plus complète, réseau de partenaires le plus étendu, plateforme la plus mature dans l'ensemble.

Huawei Cloud et Tencent Cloud se partagent le niveau suivant. Huawei se situe entre 12 % et 19 % et s'impose pour les projets d'entreprise et le secteur public. Si vous travaillez avec des entreprises d'État chinoises ou tout ce qui gravite autour du secteur public, Huawei est souvent le choix attendu, pas simplement une préférence. Tencent détient 11 % à 16 % et constitue le choix évident si votre stratégie implique les mini-programmes WeChat ou les services QQ. L'intégration WeChat à elle seule en fait la solution par défaut pour les entreprises qui construisent autour de cette plateforme.

Baidu Cloud occupe une niche. Environ 5 % de part de marché, centré sur l'IA et l'apprentissage automatique. Pertinent si votre stack technique fait la part belle à l'IA. Ce n'est pas là que la plupart des entreprises commencent pour de l'hébergement classique.

Reste AWS Chine. Les entreprises étrangères s'y dirigent parce que le nom leur est familier. Environ 7 % de part de marché, opéré à travers les partenaires locaux Sinnet et NWCD. Un point crucial à comprendre : AWS Chine est une entité entièrement distincte. Comptes séparés. Facturation séparée. Processus de conformité séparé. Ce n'est pas votre AWS mondial avec une région chinoise greffée dessus.

> AWS Chine est une entité entièrement distincte d'AWS mondial. Comptes différents, facturation différente, conformité différente. Ne présumez pas que c'est le même produit.

Les entreprises qui font cette supposition se retrouvent face à de mauvaises surprises lors de la mise en place.

## Chine continentale, Hong Kong ou étranger

| | Chine continentale | Hong Kong | Étranger (US/UE) |
|---|---|---|---|
| **Temps de chargement** | Moins d'une seconde | 50 à 150 ms de latence | 300 à 500 ms+ de latence |
| **ICP requis** | Oui | Non | Non |
| **Bonus SEO Baidu** | Oui | Non | Non |
| **Conformité PIPL** | Oui | Non | Non |
| **Risque Grand Pare-feu** | Aucun | Faible | Élevé (perte de paquets + blocage) |

L'emplacement physique de vos serveurs détermine tout le reste - choix du fournisseur, configuration CDN, stratégie Baidu. Si vous vous trompez sur ce point, rien en aval ne pourra le corriger.

**La Chine continentale** est la bonne réponse si vous êtes sérieux dans votre volonté d'atteindre les utilisateurs chinois. Temps de chargement inférieurs à une seconde. Baidu traite l'hébergement continental comme un signal de confiance. Le PIPL l'exige. Oui, vous avez besoin d'une licence ICP, mais la procédure de Bei'an est gérable pour la plupart des entreprises étrangères. Si votre public est en Chine, vos serveurs doivent l'être aussi.

> Les sites hébergés en Chine continentale chargent en moins d'une seconde. Les sites hébergés à l'étranger affichent 300 à 500 ms avant même que le Grand Pare-feu n'entre en jeu.

**Hong Kong** fonctionne comme un tremplin. Pas d'ICP nécessaire, latence vers le continent de 50 à 150 millisecondes, et c'est une option raisonnable pour les entreprises qui testent le marché avant de passer par le processus ICP complet. Convenable aussi pour les sites qui desservent à la fois un public chinois et international depuis un même emplacement. Mais ne vous faites pas d'illusions - c'est un compromis. Pas une solution pérenne pour quiconque veut se positionner sur Baidu ou répondre aux exigences du PIPL.

Enfin, il y a **l'hébergement à l'étranger depuis les États-Unis ou l'Europe.** C'est le choix que font les entreprises qui veulent éviter le processus ICP dans son intégralité. Le compromis est rude. La latence atteint au minimum 300 à 500 millisecondes. Le Grand Pare-feu ajoute des pertes de paquets par-dessus. Et il existe un risque réel que le site soit purement et simplement bloqué. Pas de signal de confiance Baidu, pas de conformité PIPL, et des temps de chargement si lents que la plupart des utilisateurs chinois fermeront l'onglet avant que votre page ait fini de s'afficher. Si vous hébergez à Francfort pour servir des utilisateurs à Shenzhen, vous les perdez avant même qu'ils ne voient votre page d'accueil.

## Les fournisseurs CDN qui fonctionnent réellement en Chine

| Fournisseur | Avantage clé |
|---|---|
| Alibaba Cloud CDN | Plus grand réseau de PoP en Chine, écosystème Alibaba |
| Tencent Cloud CDN | Idéal pour les services intégrés à WeChat/QQ |
| ChinaCache | Pionnier du CDN en Chine, réseau domestique étendu |
| Cloudflare Chine | Via partenariat avec JD Cloud, forfait entreprise requis |

Un CDN ne corrigera pas un mauvais choix d'hébergement, mais en Chine il peut faire la différence entre un site qui charge et un qui atteint le délai d'expiration. L'exigence déterminante : des points de présence physiquement situés en Chine continentale. Un CDN mondial sans PoP en Chine ne vous sera d'aucune aide.

> L'exigence CDN déterminante : des points de présence physiquement en Chine continentale. Tout le reste est secondaire.

**Alibaba Cloud CDN** possède le plus grand réseau de PoP en Chine et s'intègre directement à l'écosystème Alibaba. Si vous êtes déjà sur Alibaba Cloud, c'est le choix par défaut. Inutile de chercher ailleurs.

**Tencent Cloud CDN** est la solution à adopter si vos services sont connectés à WeChat ou QQ. L'intégration avec les plateformes de messagerie de Tencent gère ce trafic plus efficacement que toute autre offre disponible.

**ChinaCache** est le nom le plus ancien du CDN chinois. En activité depuis plus longtemps que la plupart des solutions basées sur le cloud. Réseau domestique étendu, large couverture, bilan éprouvé.

**Le réseau Cloudflare Chine** fonctionne via un partenariat avec JD Cloud. Il offre aux entreprises déjà sur Cloudflare au niveau mondial un accès au marché chinois, mais un forfait entreprise est requis. Ce n'est pas quelque chose que l'on configure via une inscription en libre-service.
