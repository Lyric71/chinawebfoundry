---
title: "Google Fonts en Chine : tout dépend du réseau"
subtitle: "Selon le réseau d’où part le test, la réponse change. D’où les verdicts tranchés, et contradictoires, qui circulent sur Google Fonts."
summary: "111 ms depuis un centre de données chinois, aucune réponse sur 54 depuis une ligne résidentielle à Pékin : deux mesures de 21YunBox, toutes deux justes."
visual: "/images/guides/google-fonts-china.webp"
order: 38
published: true
publishedAt: "2026-10-06"
updatedAt: "2026-10-06"
reviewBy: "2026-11-26"
category: "Technology"
author: "echo-peng"
---

En Chine, Google Fonts répond ou se tait selon le réseau qui l’interroge. Le 28 août 2026, une sonde installée sur un serveur Alibaba Cloud (阿里云) à Zhangjiakou a obtenu 72 réponses sur 72 de `fonts.googleapis.com`, avec une médiane de 111 ms. Le 30 août, une ligne résidentielle China Mobile (中国移动) à Pékin n’a reçu aucune réponse à ses 54 requêtes. Les deux mesures viennent de 21YunBox, et ni l’une ni l’autre n’a rien d’un accident. Or vos visiteurs naviguent depuis leur box ou leur forfait mobile. C’est donc sur le second chiffre qu’il faut se régler : une page qui attend un serveur de polices muet peut rester blanche.

Servez les polices depuis votre propre domaine et la question ne se pose plus. Chaque chiffre cité plus bas a été vérifié à la source le 6 octobre 2026.

## Google Fonts en Chine, vu de deux réseaux

21YunBox a lancé le même script de mesure depuis les deux points d’observation et publié les résultats en regard. Google Fonts arrive sur une page par deux noms d’hôte : `fonts.googleapis.com` envoie la feuille de style, et les fichiers de police qu’elle appelle proviennent de `fonts.gstatic.com`.

| Hôte                   | Alibaba Cloud (阿里云), Zhangjiakou | Ligne résidentielle China Mobile (中国移动), Pékin | Requêtes abouties    | Verdict                        | Testé le           |
| ---------------------- | ----------------------------------- | ------------------------------------------------- | -------------------- | ------------------------------ | ------------------ |
| `fonts.googleapis.com` | TTFB médian de 111 ms               | aucune réponse                                    | 72 sur 72 / 0 sur 54 | varie selon le point de mesure | 28 et 30 août 2026 |
| `fonts.gstatic.com`    | TTFB médian de 102 ms               | aucune réponse                                    | 72 sur 72 / 0 sur 6  | varie selon le point de mesure | 28 et 30 août 2026 |

> Depuis une instance Alibaba Cloud (阿里云) de la région cn-zhangjiakou, avec un relevé toutes les dix minutes pendant douze heures le 28 août 2026 et un délai d’expiration de 30 secondes, `fonts.googleapis.com` a mené à terme 72 requêtes sur 72, avec un premier octet médian à 111 ms, et `fonts.gstatic.com` 72 sur 72 à 102 ms. Sur 264 chargements de page de 88 sites réels, effectués depuis une ligne résidentielle China Mobile (中国移动) à Pékin le 30 août 2026, `fonts.googleapis.com` a été sollicité 54 fois sans jamais répondre, et `fonts.gstatic.com` 6 fois, sans plus de succès.
> Source : 21YunBox, A Day of Third-Party Requests From Inside China, août 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Ne mélangez pas ces deux colonnes : elles décrivent deux réseaux distincts.

> « Une ligne de centre de données et une ligne grand public, dans le même pays, ne constituent pas le même réseau. »
> Source : 21YunBox, A Day of Third-Party Requests From Inside China, août 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

21YunBox n’explique pas pourquoi la ligne résidentielle est restée sans réponse ; aucun autre test publié ne l’explique, et nous nous garderons de toute hypothèse. Les chiffres dessinent en revanche les contours du problème : un même hôte, deux réseaux, deux jours d’écart et des résultats opposés.

## Les verdicts de GreatFire, hôte par hôte

GreatFire, qui surveille la censure en Chine, teste des noms d’hôte depuis le continent et date chacun de ses verdicts. Pour les deux hôtes qui distribuent les polices, son verdict concorde avec la colonne du centre de données. Cité seul, il aboutit à la réponse tranchée « pas bloqué », que dément la ligne résidentielle.

| Hôte                   | Rôle                                       | Verdict GreatFire | Tests concluants, 90 derniers jours | Dernier test  |
| ---------------------- | ------------------------------------------ | ----------------- | ----------------------------------- | ------------- |
| `fonts.googleapis.com` | sert la feuille CSS                        | non bloqué        | 0 perturbé sur 3                    | 7 sept. 2026  |
| `fonts.gstatic.com`    | sert les fichiers de police                | non bloqué        | 0 perturbé sur 4                    | 21 sept. 2026 |
| `fonts.google.com`     | le catalogue que parcourent les graphistes | perturbé à 100 %  | 2 perturbés sur 2                   | 30 sept. 2026 |

> GreatFire a jugé https://fonts.googleapis.com non bloqué, 0 test concluant perturbé sur 3, dernier test le 7 septembre 2026, et https://fonts.gstatic.com non bloqué, 0 sur 4, dernier test le 21 septembre 2026. Il a jugé https://fonts.google.com perturbé à 100 %, 2 tests concluants sur 2, dernier test le 30 septembre 2026, avec des interférences relevées depuis le 15 octobre 2016.
> Source : GreatFire, septembre 2026. https://en.greatfire.org/https/fonts.googleapis.com, https://en.greatfire.org/https/fonts.gstatic.com et https://en.greatfire.org/https/fonts.google.com

La troisième ligne est d’une autre nature. `fonts.google.com` est le catalogue que consultent vos graphistes, et aucune page que vous publiez ne le charge.

## Pourquoi une feuille de style bloquée laisse la page blanche

L’intégration standard de Google Fonts passe par un lien vers une feuille de style, placé dans l’en-tête de la page. Cette position détermine ce qui se passe en cas d’échec.

> Un lien vers une feuille de style placé dans l’en-tête d’une page bloque par défaut le rendu, dès que le navigateur le rencontre en analysant la page.
> Source : MDN Web Docs, The External Resource Link element, dernière modification le 20 mai 2026. https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link

Une requête qui ne reçoit jamais de réponse suspend donc l’affichage jusqu’à ce que le navigateur abandonne. Le visiteur pékinois fixe un écran blanc. Depuis un bureau de Francfort, comme depuis une sonde de surveillance installée dans un centre de données du continent, la même page s’affiche sans encombre.

Le paramètre `display=swap` de l’URL d’intégration n’y change rien : cette consigne figure dans la feuille de style, celle-là même qui n’est jamais arrivée.

## L’auto-hébergement sort le réseau de l’équation

Les polices du catalogue Google sont diffusées sous licence libre, ce qui permet d’en copier les fichiers sur votre propre serveur.

> « Toutes les polices proposées ici étant distribuées sous une licence qui en autorise la redistribution, dans le respect de ses termes, vous pouvez les héberger vous-même à l’aide de divers projets tiers. » La plupart relèvent de la SIL Open Font License 1.1, certaines de la licence Apache 2, et la famille Ubuntu de l’Ubuntu Font License 1.0.
> Source : README du dépôt Google Fonts, google/fonts sur GitHub, dernière modification le 8 mars 2024. https://github.com/google/fonts

Quatre étapes, sans réelle difficulté :

1. Téléchargez les fichiers woff2 des seules graisses que vous utilisez (deux ou trois, en général).
2. Déposez-les sur votre propre domaine, à côté de vos CSS, et rédigez vous-même les règles `@font-face`.
3. Supprimez le lien vers la feuille de style Google et toute indication `preconnect` pointant vers `fonts.googleapis.com` ou `fonts.gstatic.com`.
4. Rechargez ensuite la page, panneau réseau ouvert. Aucune requête ne doit partir vers un hôte Google.

Ne sautez pas l’étape 3.

> Preconnect engage « tout ou partie de la poignée de main (DNS+TCP pour HTTP, DNS+TCP+TLS pour les origines HTTPS) » avec une origine avant même qu’un fichier n’y soit demandé.
> Source : MDN Web Docs, rel=preconnect, dernière modification le 22 avril 2026. https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/preconnect

Une indication oubliée continue d’envoyer le navigateur de chaque visiteur vers l’hôte que vous venez de supprimer. Les thèmes et les constructeurs de pages, eux, remettent volontiers le lien Google en place sans rien demander. Notre guide consacré [aux plugins WordPress qui ne fonctionnent pas en Chine](/fr/ressources/guide-web-chine/plugins-wordpress-chine/) explique d’où surgit ce lien dans un site WordPress.

ChinaWebFoundry sert ses propres polices de cette manière : cinq fichiers woff2, trois graisses de Poppins et deux d’Inter, sur le même serveur que les pages. Les polices arrivent par la même route que le HTML.

Sur une page, les polices ne sont en général qu’une requête vers l’étranger parmi d’autres. Repérer et remplacer les autres relève de [l’intégration technique](/fr/services/integration-technique/). Commencez par [la liste de ce que bloque le Grand Pare-feu](/fr/ressources/guide-web-chine/grand-pare-feu-chine/).

## Questions fréquentes

**Google Fonts est-il bloqué en Chine ?**

Tout dépend du réseau. Lors des tests de 21YunBox en août 2026, les deux hôtes qui distribuent les polices ont répondu à toutes les requêtes depuis un centre de données Alibaba Cloud (阿里云), et à aucune depuis une ligne résidentielle China Mobile (中国移动) à Pékin. GreatFire les jugeait tous deux non bloqués en septembre 2026. Répondre d’un mot revient à écarter la moitié de ces données : tenez la version hébergée par Google pour peu fiable et servez les fichiers vous-même.

**fonts.google.com fonctionne-t-il en Chine ?**

GreatFire a relevé des interférences lors de ses deux derniers tests concluants de `fonts.google.com`, le plus récent le 30 septembre 2026, et en signale depuis 2016. Il s’agit du catalogue où les graphistes choisissent leurs polices : un désagrément pour un graphiste basé à Shanghai, invisible pour vos visiteurs.

**Existe-t-il des miroirs chinois de Google Fonts ?**

Les développeurs en Chine s’échangent plusieurs miroirs de l’API Google Fonts. Nous n’avons trouvé aucun test daté, mené par un tiers, sur l’un d’eux : cette page n’en nomme donc aucun et ne rend aucun verdict. Un miroir intercale de surcroît la disponibilité d’un tiers entre vos visiteurs et vos polices, écueil que l’auto-hébergement évite.

**Et Adobe Fonts ou Font Awesome ?**

Tous deux figurent sur notre liste des services non testés. Les derniers verdicts publiés par des tiers datent de plus de 90 jours : nous ne nous prononçons ni dans un sens ni dans l’autre. Le même raisonnement vaut pour toute police dont la licence autorise l’hébergement des fichiers. Pour une police qui ne le permet pas, assurez-vous qu’un test daté, mené par un tiers, existe pour la version hébergée avant de vous y fier.

**Comment vérifier si mon site appelle Google Fonts ?**

Cherchez `fonts.googleapis.com` et `fonts.gstatic.com` dans le code source de la page et dans vos feuilles de style, y compris dans les règles CSS `@import`. Vous pouvez aussi soumettre le site au [China Site Scanner](/fr/china-site-scanner/), qui dresse la liste des hôtes tiers appelés par vos pages.
