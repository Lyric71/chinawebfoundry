---
title: "Pourquoi wp-admin est si lent en Chine"
subtitle: "À Shanghai, le site public s’affiche mais l’administration WordPress se traîne. D’où vient la lenteur, et comment rendre le back-office de nouveau utilisable."
summary: "Le site s’affiche, l’administration se traîne. En cause : Gravatar, les mises à jour et les polices de l’éditeur. L’essentiel se règle en un après-midi."
visual: "/images/guides/wp-admin-slow-china.webp"
order: 42
published: true
publishedAt: "2026-10-12"
updatedAt: 2026-10-18
reviewBy: "2026-11-20"
category: "Technology"
author: "echo-peng"
---

Si votre site public s’affiche normalement à Shanghai alors que l’administration WordPress est lente en Chine, examinez les appels que seul le back-office effectue. Trois méritent d’être vérifiés en priorité. Gravatar, appelé sur chaque écran d’administration, est bloqué. Vient ensuite le serveur : hébergé en Chine continentale, il interroge WordPress.org pour les mises à jour et se voit opposer une limitation de débit. Enfin, les éditeurs de pages chargent leurs polices chez Google, qui répond sur certains réseaux chinois et reste muet sur d’autres.

Deux de ces appels partent du navigateur de votre équipe ; le troisième, du serveur, et uniquement s’il est hébergé sur le continent.

| Appel sortant | Qui l’émet | Destination | Ce que voit l’équipe | Premier remède |
| --- | --- | --- | --- | --- |
| Avatars | Le navigateur, en Chine | secure.gravatar.com, bloqué | Des cases d’avatar vides sur chaque écran | Désactiver les avatars ou les rediriger vers un miroir continental |
| Vérification des mises à jour | Un serveur sur le continent | api.wordpress.org, qui limite le débit des IP continentales | Les mises à jour ne s’affichent plus ; une vérification bloquée fige la page | Un miroir, ou des mises à jour lancées depuis l’étranger |
| Polices de l’éditeur | Le navigateur, en Chine | fonts.googleapis.com, fonts.gstatic.com | L’éditeur Elementor attend une feuille de style ; l’installation de polices Google échoue | Rediriger le Roboto d’Elementor, renoncer aux polices Google |

Toutes les sources citées ci-dessous ont été vérifiées le 12 octobre 2026.

## Pourquoi l’administration WordPress est lente en Chine

En Chine, les chantiers de performance commencent le plus souvent par la page publique, celle que voient les clients. Le tableau de bord attend son tour, jusqu’au lundi matin où l’équipe marketing de Shanghai n’arrive plus à publier.

Première question : quelle machine émet chaque appel ? Vos visiteurs n’ouvrent jamais wp-admin ; vos rédacteurs, si, depuis un bureau ou une connexion domestique en Chine, et leur navigateur va chercher tout ce que demandent les écrans d’administration. Le serveur, de son côté, interroge WordPress.org pendant qu’il génère ces écrans.

De ce partage dépend le remède. Si le serveur est à Francfort, les appels de mise à jour partent de là et aboutissent : seul le navigateur pose problème. Hébergez le site sur le continent, et les deux en pâtissent.

Pour constater le problème côté navigateur, demandez à quelqu’un du bureau de Shanghai d’ouvrir les outils de développement à l’onglet Réseau, de charger l’écran Commentaires et de filtrer sur « gravatar ». Les appels de mise à jour du serveur n’y apparaissent jamais.

## Gravatar sur chaque écran d’administration

WordPress construit tous ses avatars à partir d’une seule adresse, `secure.gravatar.com`, et il en place à plus d’endroits qu’on ne l’imagine. La barre d’administration en affiche un sur chaque écran, avec une version plus grande dans son menu. Les listes Commentaires et Utilisateurs en montrent un par ligne, et le module Activité du tableau de bord en ajoute un pour chaque commentaire récent.

> GreatFire classe https://secure.gravatar.com comme bloqué en Chine continentale : son unique test concluant récent, effectué le 31 août 2026, a échoué. Les 29 adresses gravatar.com qu’il a testées sont toutes classées bloquées.
> Source : GreatFire, août 2026. https://en.greatfire.org/https/secure.gravatar.com

Pour chacune de ces images, le navigateur lance une requête qui ne peut aboutir. La page s’affiche malgré tout. La case de l’avatar reste vide, et rien à l’écran n’indique qu’une requête a échoué.

L’écran Réglages > Discussion est le pire de tous.

Il affiche un aperçu de chaque style d’avatar par défaut, dix au total, même lorsque les avatars sont désactivés.

> Avant d’afficher les dix avatars par défaut proposés sur l’écran des réglages de discussion, WordPress 7.1.3 ajoute un filtre accompagné du commentaire « Force avatars on to display these choices » (forcer les avatars pour afficher ces choix).
> Source : cœur de WordPress 7.1.3, wp-admin/options-discussion.php, consulté le 12 octobre 2026. https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-admin/options-discussion.php

Sur ce même écran, il suffit de décocher « Afficher les avatars » pour les retirer de toutes les autres pages d’administration.

## Les serveurs de mise à jour et le 429 silencieux

Ce problème ne touche que les serveurs installés en Chine continentale.

WordPress.org bride certaines sources réseau chinoises, et l’écrit noir sur blanc depuis 2020.

> Un utilisateur en Chine a signalé des erreurs HTTP 429 sur tous les sous-domaines de WordPress.org. WordPress.org a répondu que plusieurs sources réseau chinoises sont limitées « en raison d’un niveau élevé d’abus et de trafic illégitime », et qu’il ne les placera pas sur liste blanche ni ne proposera de moyen officiel de répliquer WordPress.org via un proxy chinois.
> Source : WordPress.org Meta Trac, ticket #5106, 21 mars 2020. https://web.archive.org/web/20260116133057/https://meta.trac.wordpress.org/ticket/5106

Cette réponse date de 2020, et nous n’avons trouvé aucune prise de position plus récente de WordPress.org sur le sujet.

Le site principal répond depuis le continent. Le 429 vient de la limitation de débit que WordPress.org applique lui-même.

> GreatFire classe https://wordpress.org comme non bloqué : ses 13 tests concluants récents ont tous abouti normalement, le dernier le 11 octobre 2026. Il classe http://api.wordpress.org comme non bloqué sur un test concluant du 7 octobre 2026 et n’a jamais testé https://api.wordpress.org.
> Source : GreatFire, octobre 2026. https://en.greatfire.org/https/wordpress.org

Un 429 arrive vite. WordPress y voit une vérification manquée et renonce sans rien signaler : aucune notification de mise à jour n’apparaît, et le site prend du retard. C’est le versant sécurité du problème, et notre [guide sur le blocage de WordPress en Chine](/fr/ressources/guide-web-chine/wordpress-bloque-en-chine/) explique ce qu’il implique pour les correctifs.

La lenteur, elle, vient d’une connexion qui reste suspendue sans répondre. Or WordPress lance ces vérifications en construisant la page d’administration, et il patiente.

> Hors exécution du cron, la vérification de version du cœur attend jusqu’à 3 secondes. Celles des extensions et des thèmes attendent 3 secondes, plus 1 seconde par tranche de 10 extensions ou thèmes installés. Si la requête HTTPS échoue, chaque vérification est relancée en HTTP simple. Toute réponse autre que HTTP 200 met fin à la vérification sans message.
> Source : cœur de WordPress 7.1.3, wp-includes/update.php, consulté le 12 octobre 2026. https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/update.php

Les vérifications se déclenchent à la première page d’administration ouverte après un intervalle de 12 heures. L’écran Extensions les relance toutes les heures, Tableau de bord > Mises à jour toutes les minutes. Avec 40 extensions, une vérification bloquée peut figer l’écran Extensions pendant 7 secondes, puis autant en HTTP (notre calcul, à partir des délais ci-dessus).

## Les polices Google dans l’éditeur

Sur une page publique, l’éditeur de blocs du cœur ne charge aucune police Google. Sa bibliothèque de polices, en revanche, appelle Google : lorsqu’un utilisateur installe une police Google, WordPress demande une autorisation, puis c’est son propre navigateur qui télécharge chaque fichier et le téléverse sur le site.

> L’éditeur de WordPress 7.1.3 avertit l’utilisateur que l’installation de polices Google exige l’autorisation de se connecter directement aux serveurs de Google. Sa fonction downloadFontFaceAssets récupère ensuite chaque fichier dans le navigateur.
> Source : cœur de WordPress 7.1.3, wp-includes/js/dist/editor.js, consulté le 12 octobre 2026. https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/js/dist/editor.js

Les fichiers se trouvent sur `fonts.gstatic.com`, un hôte dont la réponse varie selon le réseau du rédacteur.

> Le 28 août 2026, depuis une instance Alibaba Cloud (阿里云) de la région cn-zhangjiakou, avec une mesure toutes les dix minutes pendant 12 heures, fonts.googleapis.com a répondu à 72 requêtes sur 72, avec un temps médian de 111 ms avant le premier octet, et fonts.gstatic.com à 72 sur 72, en 102 ms. Lors de chargements de pages sur une ligne résidentielle China Mobile (中国移动) à Pékin, le 30 août 2026, les mêmes hôtes ont répondu respectivement à 0 requête sur 54 et 0 sur 6.
> Source : 21YunBox, A Chinese Cloud Probe Is Not a Chinese Visitor: The Same Hosts, Opposite Answers, 28 au 30 août 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

(Pas d’Elementor sur le site ? Passez directement aux miroirs.)

Avec Elementor, le problème prend un tour très concret. Son éditeur charge Roboto depuis `fonts.googleapis.com`, en dépendance de sa propre feuille de style, et cet appel ne tient aucun compte du réglage Google Fonts. Désactiver Google Fonts dans Elementor > Réglages > Avancé ne modifie que la page publique. L’éditeur continue d’appeler Google.

> Dans Elementor 4.3.4, publié le 5 octobre 2026, le chargeur de l’éditeur enregistre sans aucune condition une feuille de style Roboto hébergée sur fonts.googleapis.com, dont dépend la feuille de style principale de l’éditeur. La barre supérieure des écrans d’administration propres à Elementor charge Roboto depuis le même hôte, là encore sans condition.
> Source : code source d’Elementor 4.3.4, consulté le 12 octobre 2026. https://downloads.wordpress.org/plugin/elementor.4.3.4.zip

Cette feuille de style se charge dans l’en-tête de la page.

> « Le CSS bloque le rendu : le navigateur suspend l’affichage de la page tant qu’il n’a pas reçu et traité l’ensemble du CSS. »
> Source : MDN Web Docs, Critical rendering path, février 2025. https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Critical_rendering_path

Sur une ligne où `fonts.googleapis.com` reste muet, l’éditeur attend une police dont il pourrait fort bien se passer.

Supprimer l’appel exige de la prudence. La feuille de style principale de l’éditeur dépend du handle `google-font-roboto`, et WordPress ignore toute feuille de style dont une dépendance manque : désenregistrer ce handle supprime donc aussi les styles de l’éditeur. Faites plutôt pointer le handle vers une copie de Roboto hébergée sur votre propre serveur.

`s.w.org`, qui sert les images d’emoji et les aperçus de la bibliothèque de polices, ne pose apparemment pas de problème.

> GreatFire classe https://s.w.org comme non bloqué sur son seul test concluant récent, le 7 octobre 2026.
> Source : GreatFire, octobre 2026. https://en.greatfire.org/https/s.w.org

## Les miroirs d’avatars sur le continent

On peut conserver les avatars tout en se passant de l’appel à Gravatar. Cravatar est un service d’avatars basé en Chine continentale, exploité par une société de Canton sous son propre dépôt ICP (ICP备案), et ses URL suivent le même schéma que celles de Gravatar.

> L’API de Cravatar reçoit les requêtes à l’adresse https://cravatar.cn/avatar/ suivie du hachage de l’adresse e-mail. Si l’adresse n’a pas d’avatar Cravatar, le service cherche l’avatar Gravatar puis l’avatar QQ, avant de se rabattre sur une image par défaut.
> Source : documentation développeur de Cravatar, septembre 2024. https://cravatar.com/developer/api

Pour WordPress, Cravatar publie un court filtre `get_avatar_url` qui remplace les noms d’hôte gravatar.com par `cravatar.cn`. L’extension qu’il recommande à ceux qui ne codent pas, WPAvatar, a été mise à jour pour la dernière fois en septembre 2025 et n’est annoncée compatible que jusqu’à WordPress 6.8 : sur un site en 7.1, le filtre est le choix le plus sûr.

Nous ne publions aucun chiffre de vitesse pour Cravatar. Ceux qui circulent n’indiquent ni point de mesure ni date, et GreatFire n’a jamais testé cravatar.cn.

## Désactiver, passer par un miroir ou faire avec

| Problème | Désactiver | Miroir | Accepter |
| --- | --- | --- | --- |
| Gravatar | Décocher « Afficher les avatars » dans Réglages > Discussion | Cravatar, par filtre ou via WPAvatar | Dix aperçus sur l’écran Discussion, si vous vous contentez de décocher |
| Vérifications de mise à jour sur un serveur continental | Les garder : les mises à jour sont indispensables | Une extension miroir, ou des mises à jour lancées hors du continent | Des mises à jour tardives, si aucune des deux solutions n’est en place |
| Le Roboto de l’éditeur Elementor | Changer la source du handle dans le code, d’abord en préproduction | Le chargement local des polices Google (Réglages > Performance) ne couvre que la page publique | Un éditeur plus lent sur certaines lignes |
| Installations via la bibliothèque de polices | Ignorer la collection Google | Téléverser des fichiers de police hébergés chez vous | Des installations ponctuelles, faites depuis une connexion qui atteint Google |

Voici comment occuper l’après-midi. Désactivez les avatars, ou ajoutez le filtre Cravatar et vérifiez l’écran Commentaires depuis le bureau de Shanghai. Si le serveur est sur le continent, décidez comment il récupérera ses mises à jour. Confiez le chantier Elementor à un développeur disposant d’une copie de préproduction.

Le projet de miroir le plus connu, WP-China-Yes, a été retiré du répertoire de WordPress.org en avril 2020 et se poursuit sur GitHub sous le nom WPCY.COM. Il fait transiter le trafic vers WordPress.org par des miroirs et remplace Gravatar par Cravatar. Si un miroir tombe en panne, l’extension se replie sur l’hôte d’origine. Il s’agit de code tiers, intercalé entre votre site et ses mises à jour : lisez-le avant de l’installer. Autre option : une chaîne de déploiement qui exécute les mises à jour hors du continent.

Les extensions ajoutent leurs propres appels, et notre guide des [extensions WordPress qui posent problème en Chine](/fr/ressources/guide-web-chine/plugins-wordpress-chine/) les passe en revue. Notre page [WordPress en Chine](/fr/wordpress-en-chine/) traite de la question plus large : où héberger WordPress.

## Questions fréquentes

**Désactiver les avatars risque-t-il de casser quelque chose ?**

Non. Lorsque « Afficher les avatars » est décoché, WordPress n’affiche plus aucun avatar : la barre d’administration et les listes Commentaires et Utilisateurs perdent l’image, tout comme les fils de commentaires du site public. Un thème qui force les avatars peut toutefois continuer à les demander. Contrôlez l’administration comme le site public après le changement.

**La lenteur vient-elle du Grand Pare-feu ou de la distance avec notre serveur ?**

Des deux, et les effets s’additionnent. Gravatar échoue et les hôtes de polices de Google restent muets sur certaines lignes, où que se trouve le serveur. Un serveur en Europe ajoute en outre un aller-retour transfrontalier à chaque clic dans l’administration, ce qu’aucune des mesures ci-dessus ne supprime. Éliminez d’abord les appels qui échouent. Ce qui reste tient à la distance, ou au serveur lui-même.

**Notre thème d’administration charge jQuery depuis Google. Est-ce gênant ?**

Oui. Lors de son dernier test concluant, le 22 août 2026, GreatFire a classé ajax.googleapis.com comme bloqué. Une simple balise script placée dans l’en-tête bloque la page jusqu’à son chargement : ce thème se fige donc sur chaque écran. WordPress embarque sa propre copie de jQuery, et le thème devrait s’en servir.

**Cravatar affichera-t-il les photos que notre équipe a déjà configurées sur Gravatar ?**

En général, oui. Selon la documentation de Cravatar, lorsqu’une adresse n’a pas d’avatar Cravatar, le service cherche celui de Gravatar, puis celui de QQ, avant de recourir à une image par défaut. Votre équipe garde ses photos sans créer de nouveau compte. GreatFire n’a jamais testé cravatar.cn : faites un essai depuis le bureau.

**Faut-il changer d’hébergement pour régler le problème ?**

Pas pour les avatars ni pour les polices. Ces appels partent du navigateur de votre équipe et échouent de la même façon, que le serveur soit à Shanghai ou à Francfort. Le 429 sur les mises à jour ne concerne qu’un serveur continental. S’y installer réduit la distance, mais vous expose alors au problème des mises à jour.
