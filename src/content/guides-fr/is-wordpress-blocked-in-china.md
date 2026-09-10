---
title: "WordPress est-il bloqué en Chine ?"
subtitle: "Sur un serveur continental, le logiciel ne bronche pas. Ses appels vers l'extérieur, si. Mesures des 28 et 30 août 2026."
summary: "WordPress n'est pas bloqué en Chine continentale. L'état 2026 des dépendances : celles qui tombent, celles qui traînent, celles que les guides datent."
visual: "/images/guides/is-wordpress-blocked-in-china.webp"
order: 34
published: true
publishedAt: 2026-08-29
updatedAt: 2026-09-11
category: Technology
---

Non. WordPress n'est pas bloqué en Chine continentale, et ne l'a jamais été.

Le logiciel se télécharge, s'installe et tourne normalement sur un serveur à Shanghai ou à Pékin. Aucun CMS chinois ne le devance sur les sites d'entreprises étrangères déposés en Chine, et le parc d'installations en langue chinoise dépasse largement le million.

Alors pourquoi la légende tient-elle ? Parce qu'une installation par défaut sollicite entre 8 et 20 serveurs extérieurs avant que le visiteur ne voie le moindre pixel. Certains sont bloqués. Un seul suffit à prendre la page en otage. Le site s'affiche, techniquement. Il perd simplement du temps à chaque requête, et votre équipe européenne ne s'en aperçoit jamais.

Dernières mesures : le 28 août 2026 depuis une région Alibaba Cloud, le 30 août 2026 depuis une ligne grand public à Pékin.

## Mesuré d'un centre de données, puis d'une ligne domestique

Deux campagnes de mesure, à deux jours d'écart, sur la même liste d'hôtes. La première depuis un cloud commercial hébergé en Chine, la seconde depuis la ligne domestique d'un particulier, à Pékin. Elles se contredisent, et la contradiction est justement ce qu'il faut lire.

| Hôte | Point de mesure | Résultat | Verdict | Date du test |
|---|---|---|---|---|
| fonts.googleapis.com | Alibaba Cloud (阿里云) cn-zhangjiakou | 72 sur 72, médiane 111 ms, p95 137 ms | Accessible | 28 août 2026 |
| fonts.googleapis.com | Ligne domestique China Mobile (中国移动) à Pékin | 0 sur 54 | Bloqué | 30 août 2026 |
| fonts.gstatic.com | Alibaba Cloud (阿里云) cn-zhangjiakou | 72 sur 72, médiane 102 ms, p95 121 ms | Accessible | 28 août 2026 |
| fonts.gstatic.com | Ligne domestique China Mobile (中国移动) à Pékin | 0 sur 6 | Bloqué | 30 août 2026 |
| www.googletagmanager.com | Alibaba Cloud (阿里云) cn-zhangjiakou | 72 sur 72, médiane 118 ms, p95 143 ms | Accessible | 28 août 2026 |
| www.googletagmanager.com | Ligne domestique China Mobile (中国移动) à Pékin | 0 sur 112 | Bloqué | 30 août 2026 |
| www.google.com/recaptcha | Alibaba Cloud (阿里云) cn-zhangjiakou | 0 sur 72 | Bloqué | 28 août 2026 |
| www.google.com/recaptcha | Ligne domestique China Mobile (中国移动) à Pékin | 0 sur 18 | Bloqué | 30 août 2026 |
| cdn.jsdelivr.net | Alibaba Cloud (阿里云) cn-zhangjiakou | 72 sur 72, médiane 660 ms, p95 1 757 ms | Lent | 28 août 2026 |
| cdn.jsdelivr.net | Ligne domestique China Mobile (中国移动) à Pékin | 36 sur 36 | Accessible | 30 août 2026 |

> Le 28 août 2026, depuis une instance Alibaba Cloud (阿里云) à cn-zhangjiakou, relevé toutes les dix minutes pendant douze heures avec un délai d'attente de 30 secondes : fonts.googleapis.com a répondu à 72 requêtes sur 72, premier octet médian à 111 ms. Le 30 août 2026, depuis une ligne résidentielle China Mobile (中国移动) à Pékin, sur 264 chargements de pages répartis sur 88 sites réels, le même hôte a été sollicité 54 fois sans répondre une seule fois.
>
> Source : 21YunBox, *A Day of Third-Party Requests From Inside China*, 28 août 2026, mis à jour le 30 août 2026

Lisez ensemble les deux lignes d'un même hôte, sans quoi le chiffre vous égare. Un cloud commercial chinois s'achète un transit international qu'un appartement de Chaoyang n'aura jamais : la mesure du centre de données fixe un plafond, rien de plus. Votre visiteur se tient quelque part en dessous. Sur trois des cinq hôtes retenus ici, il ne reçoit rien.

Cinq hôtes seulement, sur une liste autrement plus longue. Les autres dépendances figurent dans le tableau ci-dessous, avec un verdict et non un chrono.

## Ce que WordPress va chercher dehors

Installez WordPress sur un serveur continental avec un thème commercial et un jeu d’extensions ordinaire, et vous vous engagez sans y penser à charger des fichiers chez Google, chez Automattic, sur un CDN JavaScript, sur un CDN de polices, plus tout ce que réclament vos prestataires de formulaires et de mesure d'audience.

Depuis Francfort ou Singapour, ces appels se résolvent en quelques millisecondes et personne ne remarque rien. Depuis Shanghai, les résultats se répartissent en trois familles. Certains passent sans problème. D'autres traînent assez pour faire mal. Les derniers ne reviennent jamais, et le navigateur attend jusqu'à renoncer.

> Le comparatif 2026 de Chinafy a testé 614 sites répartis sur onze secteurs, avec WebPageTest depuis Pékin, la Virginie et Londres. 66,4 % d'entre eux n'ont pas réussi à s'afficher correctement depuis Pékin. Le temps d'affichage médian atteint 17,2 secondes, et 44 % des tests pékinois se sont soldés par un délai dépassé.
>
> Chinafy, *State of Global Website Performance in China*, avril 2026

Ces chiffres décrivent les sites étrangers en général. WordPress se trouve simplement être ce sur quoi la plupart tournent. Le même schéma se répète sur Webflow, sur HubSpot, sur les développements React maison, ce qu'il vaut mieux garder en tête avant que quelqu'un ne propose une migration comme remède.

## Ce qui est réellement bloqué, relevé en 2026

Les listes qui circulent sur le web anglophone datent pour l'essentiel de 2019 à 2023 et se recopient depuis. Plusieurs lignes ont bougé. Voici l'état actuel, mesuré depuis la Chine continentale.

| Dépendance | Statut depuis la Chine continentale | Conséquence |
|---|---|---|
| Google Hosted Libraries (ajax.googleapis.com) | Totalement bloqué | Le rendu s'arrête. Aucun octet ne revient |
| Google reCAPTCHA | Totalement bloqué | Les formulaires ne partent pas |
| Google Analytics | Totalement bloqué | La requête n'arrive jamais, la donnée est perdue |
| API JavaScript Google Maps | Totalement bloqué | La zone de carte reste vide |
| Vidéos YouTube et Vimeo | Totalement bloqué | Le lecteur et l'appel oEmbed échouent |
| Gravatar | Bloqué | Ralentit les commentaires et toute l'administration |
| Google Fonts (fonts.googleapis.com, fonts.gstatic.com) | Dépend du point de mesure | Répond depuis un centre de données continental, muet sur une ligne domestique à Pékin |
| Google Tag Manager | Dépend du point de mesure | Même clivage que pour les polices. La requête vers google-analytics.com échoue de toute façon |
| wordpress.org et serveurs de mise à jour | Accessible, débit limité | HTTP 429 sur les mises à jour du cœur et des extensions |
| cdnjs, unpkg | Accessible, lent | Les deux aboutissent. Jamais testés depuis une ligne grand public |
| cdn.jsdelivr.net | Accessible, lent | Médiane de 660 ms depuis un centre de données, aboutit sur une ligne domestique |
| Scripts Stripe et PayPal | Accessible | L'obstacle vient des licences, pas du pare-feu |

Pour le tableau d'ensemble, au-delà de WordPress, notre guide sur [ce que bloque le Grand Pare-feu](/fr/ressources/guide-web-chine/grand-pare-feu-chine/) détaille la mécanique DNS et le filtrage de paquets qui sous-tendent tout cela.

## Une seule ligne de code fait l'essentiel des dégâts

Si un thème charge jQuery depuis Google Hosted Libraries, ce que font encore des milliers de thèmes commerciaux, la page s'arrête net.

Cette balise bloque le rendu. Le navigateur refuse de peindre tant qu'elle n'est pas résolue, et depuis la Chine continentale elle ne se résout jamais. Lors de sondages répétés depuis une instance Alibaba Cloud à Zhangjiakou, les requêtes vers ajax.googleapis.com n'ont renvoyé aucun octet, sur aucun essai, avant l'abandon du test à soixante secondes.

Le visiteur voit du blanc, patiente quatre ou cinq secondes, et s'en va. La mesure d'audience n'enregistrerait rien, à supposer qu'elle fonctionne. C'est la raison la plus fréquente pour laquelle un site étranger se retrouve catalogué « bloqué en Chine » alors qu'il n'en est rien.

Corriger cette balise-là prend effectivement dix minutes. Vous embarquez jQuery en local, ou vous le retirez de la file d'attente si le thème s'en passe. Nettoyer l'ensemble des dépendances externes d'un site vitrine ordinaire demande plutôt un à deux jours de développement. Sur un thème à constructeur de pages hérité, avec quatre-vingt-dix extensions, comptez une semaine et préparez-vous à supprimer plutôt qu'à remplacer.

## La ligne Google Fonts que la plupart des guides ratent

Celle-ci mérite sa propre section, parce que le savoir commun a vieilli et qu'une bonne partie des argumentaires d'agence le répète encore.

Deux phrases circulent sur Google Fonts en Chine : le service serait bloqué ; il ne le serait pas. Le même couple de mesures les renvoie dos à dos. À deux jours d'écart, le CDN de polices a servi toutes les requêtes depuis un centre de données continental et pas une seule depuis une ligne domestique pékinoise.

> Le 28 août 2026, depuis une instance Alibaba Cloud (阿里云) à cn-zhangjiakou : fonts.googleapis.com a répondu à 72 requêtes sur 72, premier octet médian à 111 ms, et fonts.gstatic.com à 72 sur 72, à 102 ms. Le 30 août 2026, depuis une ligne résidentielle China Mobile (中国移动) à Pékin : fonts.googleapis.com sollicité 54 fois, aucune réponse ; fonts.gstatic.com sollicité 6 fois, aucune réponse.
>
> Source : 21YunBox, *A Day of Third-Party Requests From Inside China*, 28 août 2026, mis à jour le 30 août 2026

La formulation honnête est conditionnelle. Google Fonts se résout depuis les centres de données continentaux et reste souvent muet sur les connexions grand public. Ce que reçoit votre visiteur dépend du réseau où il se trouve.

Le mécanisme, nous l'ignorons. La sonde d'où sortent ces chiffres ne l'explique pas davantage, et nous n'en inventerons pas ici. Ce qui se mesure, c'est la forme : même hôte, deux jours d'écart, résultats inverses, selon le côté du réseau continental où l'on se tient.

L'argument en faveur de l'auto-hébergement tient tout entier là. Une police que vous servez vous-même supprime une dépendance dont la réponse varie avec le réseau du visiteur, et vous dispense de chercher laquelle s'applique à qui.

fonts.google.com, l'interface où vos graphistes choisissent leurs caractères, ne se charge depuis aucun des deux points de mesure. Un ennui de graphiste, donc : vos visiteurs n'y passent jamais.

Nous hébergeons les polices en local sur tous nos projets, de toute façon. En partie pour la raison ci-dessus, surtout parce que cela fait une chose de moins à retester.

## wordpress.org répond. Mais son débit est limité

Le dépôt d'extensions, le dépôt de thèmes et les serveurs de mise à jour du cœur répondent tous depuis la Chine continentale. Ils renvoient aussi un HTTP 429 aux plages d'adresses continentales assez souvent pour qu'un site reste des semaines sans correctif de sécurité.

C'est vrai depuis octobre 2019 au moins, et c'est ce qui a fait naître tout un écosystème de miroirs domestiques. La pièce la plus visible s'appelle WP-China-Yes : le projet redirige les appels de mise à jour et d'installation d'extensions ou de thèmes vers des miroirs continentaux.

Un site laissé en configuration d'origine ne vous préviendra pas qu'il a cessé de se mettre à jour. Il décroche en silence, ce qui sur WordPress relève de la sécurité plus que du désagrément. Quelqu'un doit ouvrir l'écran des mises à jour et regarder.

## WordPress.com, autre question, autre réponse

WordPress auto-hébergé, le logiciel que vous téléchargez sur wordpress.org, ne pose pas de problème.

WordPress.com, le service hébergé d'Automattic, n'est pas non plus bloqué en bloc, quoi qu'en disent presque tous les guides. Le domaine principal se résout souvent. Ce qui est bloqué, c'est une large part de ce qui vit en dessous, dont les propriétés en langue chinoise et une quantité de blogs individuels.

Pour une entreprise, la nuance reste théorique, car une contrainte plus dure attend derrière. Vous ne pouvez pas mener à bien un dépôt ICP (备案) pour un domaine dont vous ne maîtrisez pas l'hébergement, et sans dépôt vous ne pouvez pas servir légalement depuis un serveur continental. Un site WordPress.com ne peut pas être mis en conformité, qu'il se charge ou non aujourd'hui. Notre [guide du dépôt ICP](/fr/ressources/guide-web-chine/licence-icp-entreprises-etrangeres/) détaille ce que la paperasse réclame vraiment.

## Ce que cela implique si vous construisez

La conclusion pratique manque de panache. Changer de plateforme pour fuir un problème que vous n'avez pas diagnostiqué revient à le payer cher pour le garder, puisque les dépendances font le voyage avec vous.

Un site WordPress fonctionne en Chine quand quatre conditions sont réunies :

- Les dépendances externes sont supprimées ou remplacées
- Le site est servi depuis la Chine continentale, ou depuis Hong Kong le temps que le dépôt aboutisse
- Le dépôt ICP est obtenu, ce qui demande trois à six semaines et suppose une entité continentale
- Les pages sont construites pour que Baiduspider les explore, discipline distincte de celle qui les rend rapides

Rien d'exotique là-dedans. Tout cela reste du travail que quelqu'un doit s'asseoir et faire, et un thème acheté sur une place de marché n'en a fait aucune partie. Si vous soupesez une agence pour vous en charger, nous avons écrit une [grille pour la passer au crible](/fr/ressources/guide-web-chine/choisir-agence-wordpress-chine/).

## Les questions qu'on nous pose

**Puis-je tester avec un VPN si mon site fonctionne en Chine ?**

Pas utilement. Un VPN depuis l'étranger vous fait toujours passer par votre propre réseau et votre propre résolveur : vous testez votre VPN, pas le pare-feu. Mesurez depuis un point continental, ou servez-vous d'un outil qui le fait. C'est la première raison pour laquelle une équipe croit son site en bon état alors qu'il ne l'est pas.

**Un CDN mondial règle-t-il le problème ?**

Il aide sur la distance et ne change rien aux hôtes bloqués. Le réseau standard de Cloudflare sert les visiteurs continentaux depuis Hong Kong, le Japon ou la côte ouest américaine : vous franchissez toujours la frontière à chaque requête. Son réseau intérieur relève d'une offre Enterprise opérée avec JD Cloud, et il exige un dépôt ICP valide par domaine, ce qui vous ramène à la paperasse.

**Me faut-il un dépôt ICP ou une licence ICP ?**

Le dépôt (备案) couvre un site d'information. Trois à six semaines environ, une fois l'entité continentale en place. La licence commerciale (ICP许可证) s'impose quand le site génère lui-même du chiffre d'affaires, et il faut compter douze à dix-huit semaines dans les faits.

**Astro vaut-il mieux que WordPress pour la Chine ?**

Parfois. Une construction statique élimine toute une catégorie de dépendances d'exécution et se charge plus vite derrière le pare-feu. Elle supprime aussi l'expérience d'édition qu'attend une équipe marketing, et cet arbitrage pèse en général plus lourd que les millisecondes. La réponse honnête dépend de qui met le site à jour, et à quelle fréquence.

**En combien de temps un site doit-il s'afficher depuis Shanghai ?**

Moins de deux secondes reste atteignable sur un hébergement continental une fois les dépendances nettoyées. Une migration récente est passée de 23,4 secondes sur une origine européenne à 1,2 seconde, et la moitié environ de ce gain vient de la suppression des appels externes, pas du déplacement du serveur. Notre guide sur [l'hébergement d'un site web en Chine](/fr/ressources/guide-web-chine/heberger-site-web-chine/) traite le versant origine.
