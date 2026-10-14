---
title: "CDN JavaScript : lesquels fonctionnent en Chine"
subtitle: "Google Hosted Libraries bloque l’affichage. cdnjs, unpkg et jsDelivr, non. Le nom de l’hôte compte davantage que la catégorie."
summary: "Google Hosted Libraries est bloqué en Chine continentale et fige la page. cdnjs, jsDelivr et unpkg répondent. Relevés datés de GreatFire et de 21YunBox."
visual: "/images/guides/javascript-cdn-china.webp"
order: 41
published: true
publishedAt: "2026-10-11"
updatedAt: "2026-10-11"
reviewBy: "2026-11-12"
category: "Technology"
author: "echo-peng"
---

Des quatre CDN JavaScript publics étudiés ici, seul celui de Google échoue dans les tests publiés depuis la Chine continentale. GreatFire juge `ajax.googleapis.com` bloqué (dernier test le 22 août 2026), et une sonde de 21YunBox installée chez Alibaba Cloud (阿里云) à Zhangjiakou n’a obtenu, le 28 août, aucun premier octet du site des bibliothèques de Google. jsDelivr a répondu depuis la même région cloud comme depuis une ligne résidentielle à Pékin. cdnjs et unpkg sont jugés non bloqués.

Demandez si un CDN est bloqué en Chine : la seule réponse qui tienne est une liste de noms d’hôte. Un seul des quatre entraîne la page dans sa chute. Chaque chiffre cité plus bas a été vérifié à la source le 11 octobre 2026.

## Votre CDN est-il bloqué en Chine ? Ce que montrent les tests

Chaque ligne provient de GreatFire ou de 21YunBox, avec la date de chaque test. Un chiffre du recensement de 21YunBox correspond au chargement chronométré du site web du fournisseur depuis sa sonde. Il indique comment se comporte le site de l’entreprise vu de Chine ; le fichier que demande votre page, lui, n’a jamais été testé.

| Hôte                   | Alibaba Cloud cn-zhangjiakou (21YunBox)              | Ligne résidentielle China Mobile, Pékin (21YunBox) | GreatFire             | Verdict    | Testé le                       |
| ---------------------- | ---------------------------------------------------- | -------------------------------------------------- | --------------------- | ---------- | ------------------------------ |
| `ajax.googleapis.com`  | site des bibliothèques : 0 sur 3, aucun premier octet | aucun test publié                                  | bloqué, 1 échec sur 1 | bloqué     | 22 et 28 août 2026             |
| `cdn.jsdelivr.net`     | 72 sur 72, médiane 660 ms, p95 1 757 ms              | 36 sur 36                                          | non bloqué, 3 sur 3   | lent       | 28 et 30 août, 8 oct. 2026     |
| `cdnjs.cloudflare.com` | site de cdnjs : 3 sur 3                              | aucun test publié                                  | non bloqué, 1 sur 1   | accessible | 28 et 29 août, 27 sept. 2026   |
| `unpkg.com`            | aucun test publié                                    | aucun test publié                                  | non bloqué, 1 sur 1   | accessible | 14 août 2026                   |
| BootstrapCDN           | aucun test de l’hôte des fichiers                    | aucun test de l’hôte des fichiers                  | aucun test daté       | non testé  | aucun                          |

> Depuis une sonde Alibaba Cloud (阿里云) de cn-zhangjiakou, 280 sites ont été sollicités chacun trois fois, avec un plafond de 60 secondes. Le site de cdnjs a abouti à 3 tentatives sur 3. Google Hosted Libraries n’a renvoyé aucune réponse.
> Source : 21YunBox, 280 Sites Measured From Inside China, 28 et 29 août 2026. https://www.21cloudbox.com/websites-blocked-in-china.html

Un raccourci répandu veut que les CDN publics ne fonctionnent pas en Chine. La même étude l’a mis à l’épreuve.

> 21YunBox conclut de son recensement que la règle « les CDN publics ne fonctionnent pas en Chine » n’est pas étayée par ses mesures.
> Source : 21YunBox, 280 Sites Measured From Inside China, 28 et 29 août 2026. https://www.21cloudbox.com/websites-blocked-in-china.html

## Google Hosted Libraries bloque la page

La documentation de Google fournit la balise jQuery complète, qui pointe vers `https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js`, et vante la portée du service.

> Google présente Hosted Libraries comme « un réseau de diffusion de contenu stable, fiable, rapide et disponible dans le monde entier » et fournit l’extrait jQuery sur `ajax.googleapis.com`.
> Source : Google for Developers, Hosted Libraries, dernière mise à jour le 9 octobre 2026. https://developers.google.com/speed/libraries

Une balise script ordinaire arrête l’analyse de la page jusqu’à l’arrivée de son fichier.

> « Les scripts dépourvus des attributs async, defer ou `type="module"`, ainsi que les scripts en ligne sans l’attribut `type="module"`, sont récupérés et exécutés immédiatement, avant que le navigateur ne poursuive l’analyse de la page. »
> Source : MDN Web Docs, the script element, dernière modification le 9 mai 2026. https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script

Depuis le continent, celui-ci n’arrive pas. Le dernier test concluant de GreatFire sur cet hôte a échoué, et la sonde de 21YunBox n’a pas même obtenu un premier octet du site des bibliothèques de Google.

> GreatFire juge https://ajax.googleapis.com bloqué : 100 % des tests concluants récents ont échoué en Chine continentale (1 sur 1), dernier test le 22 août 2026.
> Source : GreatFire, dernier test le 22 août 2026. https://en.greatfire.org/https/ajax.googleapis.com

21YunBox a testé la page que les développeurs consultent avant de copier la balise.

> Depuis une sonde Alibaba Cloud (阿里云) de cn-zhangjiakou, le 28 août 2026, le site de Google Hosted Libraries n’a renvoyé aucun premier octet lors de trois essais sur trois, chacun abandonné au bout de soixante secondes.
> Source : 21YunBox, Google Hosted Libraries in China, révisé le 8 octobre 2026. https://www.21cloudbox.com/support/google-hosted-libraries.html

Le visiteur fixe une page blanche jusqu’à ce que le navigateur renonce à la requête. Puis tous les scripts qui dépendent de jQuery échouent à leur tour : le menu, le carrousel, la validation des formulaires, tout ce que le thème y avait accroché. La balise est souvent arrivée avec un thème ou une extension il y a des années, si bien que ceux qui gèrent le site aujourd’hui ignorent parfois sa présence. Depuis un bureau de Francfort ou de Chicago, la même page se charge normalement. Vu de l’extérieur de la Chine, rien ne paraît cassé.

## jsDelivr répond depuis les deux réseaux, lentement

jsDelivr est le seul CDN de cette liste à disposer de chiffres depuis un centre de données et depuis une ligne résidentielle. Il a mené à terme toutes les requêtes sur les deux.

> Depuis une instance Alibaba Cloud (阿里云) de cn-zhangjiakou, avec un relevé toutes les dix minutes pendant douze heures le 28 août 2026 et un délai d’expiration de 30 secondes, `cdn.jsdelivr.net` a mené à terme 72 requêtes sur 72, avec un premier octet médian à 660 ms et un 95e centile à 1 757 ms ; `fonts.googleapis.com` a abouti à 72 sur 72 à 111 ms. Depuis une ligne résidentielle China Mobile (中国移动) à Pékin, le 30 août 2026, `cdn.jsdelivr.net` a été sollicité 36 fois sans aucun échec, et `fonts.googleapis.com` 54 fois sans jamais répondre.
> Source : 21YunBox, A Day of Third-Party Requests From Inside China, 28 et 30 août 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Depuis le centre de données, le 28 août, la feuille de style des polices de Google revenait en 111 ms (médiane). jsDelivr mettait environ six fois plus de temps, et 21YunBox précise ce que coûtent ses requêtes les plus lentes.

> « Un p95 de 1 757 ms pour une médiane de 660 ms signifie qu’une requête sur vingt prend près de deux secondes. »
> Source : 21YunBox, A Day of Third-Party Requests From Inside China, 28 et 30 août 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

GreatFire confirme que l’hôte est ouvert : non bloqué, trois tests concluants récents sur trois, dernier test le 8 octobre 2026. Chargé en async, ce retard occasionnel ne coûte pas grand-chose. Placez en revanche un fichier jsDelivr avant le premier affichage (le script d’un module de carrousel dans l’en-tête, par exemple) et les requêtes lentes retiennent la page.

## cdnjs et unpkg reposent sur des données plus minces

Les deux derniers hôtes sont ceux où les éléments se font rares. Tous deux sont jugés ouverts, mais aucun n’a fait l’objet d’un test publié depuis une ligne résidentielle : cette colonne reste vide pour eux.

> GreatFire juge https://cdnjs.cloudflare.com non bloqué, 1 test concluant récent sur 1 connecté normalement, dernier test le 27 septembre 2026, et https://unpkg.com non bloqué, 1 sur 1, dernier test le 14 août 2026.
> Source : GreatFire, derniers tests le 27 septembre et le 14 août 2026. https://en.greatfire.org/https/cdnjs.cloudflare.com et https://en.greatfire.org/https/unpkg.com

cdnjs dispose d’un point de données supplémentaire, issu du recensement : son site a abouti aux trois chargements depuis la sonde de Zhangjiakou. unpkg n’a que le test unique de GreatFire.

Ce manque pèse. Une réponse obtenue depuis un centre de données peut être trompeuse, et la feuille de style des polices citée plus haut montre à quel point : 72 sur 72 depuis le centre de données le 28 août, aucune réponse à aucune des 54 requêtes depuis la ligne résidentielle de Pékin deux jours plus tard.

BootstrapCDN n’a aucun test daté de son hôte de fichiers, d’aucune des deux sources. Il figure comme non testé.

## Intégrer les bibliothèques à votre propre build

Supprimez d’abord la balise Google Hosted Libraries. Servez jQuery depuis votre propre origine, ou intégrez-le à votre build, et la requête qui ne revient jamais disparaît. Notez la version copiée : la prochaine mise à jour doit résulter d’un choix délibéré. Sous WordPress, la copie locale existe déjà : la version 7.1.3 enregistre jQuery 3.7.1, la même version que l’extrait de Google, depuis `wp-includes/js/jquery/`. Retirez ce qui substitue la copie de Google, et le fichier du cœur se charge à sa place. 21YunBox donne le même conseil.

> Le conseil du recensement : « mesurez l’hôte dont vous dépendez réellement, ou intégrez la bibliothèque à votre propre build et la question ne se pose plus ».
> Source : 21YunBox, 280 Sites Measured From Inside China, 28 et 29 août 2026. https://www.21cloudbox.com/websites-blocked-in-china.html

| Bibliothèque chargée depuis         | Que faire                                                                    | Pourquoi                                    |
| ----------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------- |
| `ajax.googleapis.com`               | l’auto-héberger ou l’intégrer au build dès maintenant                        | bloqué, et il retient le rendu              |
| `cdn.jsdelivr.net`                  | intégrer ce dont a besoin le premier affichage, charger le reste en async    | répond, avec des requêtes lentes            |
| `cdnjs.cloudflare.com`, `unpkg.com` | intégrer, ou tester depuis une ligne résidentielle avant de s’y fier         | aucun relevé depuis une ligne résidentielle |

Notre guide des [plugins WordPress qui ne fonctionnent pas en Chine](/fr/ressources/guide-web-chine/plugins-wordpress-chine/) montre comment ces balises s’introduisent dans un site. Pour les hôtes au-delà des CDN de bibliothèques, le guide de [ce que bloque le Grand Pare-feu](/fr/ressources/guide-web-chine/grand-pare-feu-chine/) présente le tableau complet des dépendances. Vous ne savez pas quels hôtes de bibliothèques appellent vos pages ? Le [China Site Scanner](/fr/china-site-scanner/) les repère. Le travail sur le build, c’est ce que fait notre service d’[intégration technique](/fr/services/integration-technique/).

## Questions courantes sur les CDN en Chine

**cdnjs est-il bloqué en Chine ?**

Aucun test daté ne l’indique. GreatFire a jugé `cdnjs.cloudflare.com` non bloqué le 27 septembre 2026, et le recensement de 21YunBox a chargé le site de cdnjs 3 fois sur 3 depuis une sonde Alibaba Cloud les 28 et 29 août. Ni GreatFire ni 21YunBox n’ont publié de test de cdnjs depuis une ligne résidentielle : ce que voit un foyer pékinois reste inconnu.

**jsDelivr est-il bloqué en Chine ?**

Non. Dans l’étude de 21YunBox, il a mené à terme 72 requêtes sur 72 depuis un centre de données Alibaba Cloud à Zhangjiakou le 28 août 2026, et 36 sur 36 depuis une ligne résidentielle China Mobile à Pékin le 30 août. Il est lent, toutefois : 660 ms en médiane et 1 757 ms au 95e centile depuis ce centre de données.

**unpkg fonctionne-t-il en Chine ?**

GreatFire le juge non bloqué. Son unique test concluant récent de `unpkg.com`, le 14 août 2026, s’est connecté normalement. Ni GreatFire ni 21YunBox ne publient à ce jour de mesure depuis un centre de données ni de test depuis une ligne résidentielle. Considérez unpkg comme accessible mais non mesuré, et intégrez à votre build tout ce dont dépend le premier affichage.

**Pourquoi jQuery servi par Google fige-t-il toute la page ?**

Une balise script sans async ni defer interrompt l’analyse de la page jusqu’à l’arrivée du fichier. GreatFire juge `ajax.googleapis.com` bloqué : depuis le continent, le fichier n’arrive donc jamais. La page attend l’expiration du délai, puis chaque script qui dépend de jQuery échoue à son tour.

**Faut-il un CDN chinois pour régler le problème ?**

Pour celui-ci, l’intégration au build suffit, sans aucun CDN. Il s’agit de fichiers que quelqu’un a choisi d’aller chercher sur le serveur d’une autre entreprise à chaque chargement de page. Placez-les dans votre propre build et la requête disparaît. L’endroit d’où votre site est servi, et la question de savoir s’il dispose d’un dépôt ICP (ICP备案), relèvent d’un autre sujet, qui concerne vos propres pages.
