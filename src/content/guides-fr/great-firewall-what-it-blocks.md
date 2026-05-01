---
title: "Grand Pare-feu : ce qu'il bloque et comment faire avec"
subtitle: "Si votre site charge des polices Google Fonts, déclenche une balise Google Analytics ou embarque une vidéo YouTube, il est déjà hors service pour 900 millions d'internautes chinois."
summary: "Le Grand Pare-feu chinois bloque Google, Facebook, Slack et des dizaines d'autres services. Mécanismes techniques et parades pour les entreprises étrangères."
visual: "/images/guides/great-firewall-what-it-blocks.webp"
order: 7
published: true
category: Technology
---

Le Grand Pare-feu fonctionne autrement que ce qu'on imagine. C'est un dispositif multicouche qui empoisonne les requêtes DNS, coupe des plages entières d'adresses IP, lit en temps réel le contenu de vos paquets et traque activement les connexions VPN. Pour les entreprises étrangères, la conséquence est brutale : un site qui embarque ne serait-ce qu'une seule dépendance vers un service bloqué, un fichier de police, un script de suivi, une carte, livre une expérience dégradée aux utilisateurs en Chine. Et le plus souvent, personne dans l'équipe ne s'en aperçoit.

## Comment fonctionne vraiment le Grand Pare-feu

Cinq dispositifs tournent en parallèle. Chacun intercepte un type de trafic différent à un niveau différent.

| Couche | Méthode | Effet |
|---|---|---|
| Empoisonnement DNS | Renvoie de fausses adresses IP | Envoie les requêtes vers les domaines bloqués dans le vide |
| Blocage d'IP | Coupe des plages d'adresses IP | Rend inaccessibles les IP connues de services étrangers au niveau réseau |
| Inspection approfondie des paquets | Lit le contenu des paquets | Interrompt les connexions dont le contenu correspond à des schémas signalés |
| Filtrage d'URL | Filtre des URL précises | Bloque certaines pages par mot-clé sans toucher au domaine entier |
| Détection VPN | Identifie les protocoles VPN | Ralentit ou bloque le trafic VPN par signature |

**L'empoisonnement DNS** constitue la couche la plus basique. Quand un internaute en Chine demande un domaine bloqué, le pare-feu renvoie une adresse IP fausse. La requête n'expire pas, elle aboutit ailleurs. L'utilisateur tombe sur une erreur ou une page blanche, sans comprendre pourquoi.

**Le blocage d'IP** va plus loin. Des plages entières associées à des services étrangers sont coupées au niveau réseau. Contourner l'empoisonnement DNS via un résolveur alternatif ne sert à rien si l'IP elle-même reste hors d'atteinte.

**L'inspection approfondie des paquets** est la couche qui change tout. Le système ne se contente pas de vérifier la destination, il analyse le contenu. Dès qu'un paquet colle à un schéma signalé, la connexion est coupée en vol. C'est ce qui distingue le dispositif chinois des filtrages nationaux plus rudimentaires.

> L'inspection approfondie des paquets analyse le contenu de votre trafic, pas seulement sa destination. C'est cette couche qui rend le Grand Pare-feu fondamentalement plus difficile à contourner que tout autre système existant.

**Le filtrage d'URL** opère à l'échelle de la page. Un domaine peut rester accessible, mais certaines URL contenant des mots-clés précis sont filtrées. Une intervention chirurgicale au niveau de la page.

**La détection VPN** est le mécanisme le plus récent. Le pare-feu reconnaît les protocoles VPN à leur signature et les ralentit ou les coupe. Un VPN grand public qui passait il y a deux ans peut être devenu inutilisable. La capacité de détection progresse en continu.

## Ce qui est bloqué (et pourquoi cela casse votre site)

Les entreprises étrangères fixent leur attention sur la dimension politique du Grand Pare-feu. Pour leur site, ce sont les dépendances techniques qui comptent.

| Catégorie | Services bloqués |
|---|---|
| Google (tous services) | Recherche, Gmail, Maps, YouTube, Analytics, Ads, Fonts |
| Réseaux sociaux | Facebook, Instagram, WhatsApp, Messenger, Twitter/X, Reddit, Pinterest |
| Outils professionnels | Dropbox, Slack, Notion, Trello |
| Divertissement | Netflix, Spotify, Twitch |
| Presse | New York Times, Wall Street Journal, BBC |
| Encyclopédie | Wikipédia (édition chinoise) |

Google est bloqué. Entièrement. Recherche, Gmail, Maps, YouTube, Google Ads, Google Analytics, Google Fonts. Tout. Si votre site charge une police depuis fonts.googleapis.com ou déclenche une balise GA, la requête reste en suspens pour les utilisateurs en Chine. Aucun message d'erreur ne s'affiche. La page ralentit, une section ne se charge pas, et l'équipe au siège n'en sait rien puisqu'elle navigue depuis l'extérieur du pare-feu.

Facebook, Instagram, WhatsApp, Messenger. Bloqués. Twitter/X, Reddit, Pinterest. Bloqués. L'édition chinoise de Wikipédia. Bloquée.

Les outils professionnels dont vivent les entreprises occidentales : Dropbox, Slack, Notion, Trello. Bloqués. Toute intégration avec l'un d'entre eux, toute ressource chargée depuis leurs domaines, est morte en Chine.

Netflix, Spotify, Twitch. Bloqués. La plupart des grands titres de presse occidentaux, dont le New York Times, le Wall Street Journal et la BBC. Bloqués.

Ce qui surprend le plus les entreprises se joue au-delà des services bloqués eux-mêmes. Chaque script, police, widget ou appel API qui sollicite en arrière-plan un domaine bloqué casse aussi. Un simple lien Google Fonts oublié dans le CSS peut ajouter des secondes au chargement pour chaque visiteur en Chine. Une seule balise analytique peut geler le rendu de la page.

> Un simple lien Google Fonts oublié dans votre CSS peut ajouter des secondes au temps de chargement pour chaque utilisateur en Chine. Le mal se cache dans votre code, dans les dépendances dont vous aviez oublié l'existence.

## Stratégies pour les entreprises étrangères

Le pare-feu ne se perce pas. Mais on peut bâtir un site qui n'a pas besoin de le traverser.

| Stratégie | Ce qu'elle résout |
|---|---|
| Hébergement continental avec ICP | Vitesse, classement, conformité |
| CDN chinois | Mise en cache sur des noeuds en Chine continentale |
| Remplacement des dépendances bloquées | Google Fonts vers polices locales, GA vers Baidu Tongji, Maps vers Baidu Maps |
| Hébergement à Hong Kong | Solution intermédiaire, sans ICP |
| Lucidité sur les VPN | Zone grise juridique, distinction entre usage professionnel et personnel |

**Héberger en Chine continentale avec une licence ICP.** La voie la plus directe. Le site vit à l'intérieur du pare-feu au lieu de batailler pour le franchir. Chargements les plus rapides, meilleurs classements Baidu, conformité totale. Pour qui s'engage sur le marché chinois, c'est la destination.

**Passer par un CDN chinois** pour mettre le contenu en cache sur des noeuds implantés en Chine continentale. Même avec un serveur d'origine hors du pays, un CDN doté de PoP continentaux sert les pages aux internautes chinois sans que chaque requête doive traverser le pare-feu.

**Remplacer chaque dépendance bloquée.** C'est l'étape la plus souvent sautée. Google Fonts doit céder la place à des polices hébergées localement. Google Maps à Baidu Maps. Google Analytics à Baidu Tongji. Il faut passer au crible chaque appel externe du site. Chaque balise de script, chaque import de police, chaque point d'accès API. Si l'un d'eux tape dans un domaine bloqué, vos utilisateurs chinois subissent une expérience dégradée, sans que vous le sachiez.

> Google Fonts, Google Analytics, Google Maps. À remplacer par des polices hébergées localement, Baidu Tongji et Baidu Maps. Chaque appel externe du site doit être audité.

Vient ensuite **l'hébergement à Hong Kong**, solution intermédiaire pour les entreprises qui ne sont pas prêtes à engager la procédure ICP. Pas de licence, latence raisonnable vers le continent, interférences du pare-feu généralement évitées. Compromis, certes, mais viable pour qui tâte le terrain.

**Les VPN** relèvent d'une zone grise. Les VPN d'entreprise qui relient des bureaux en Chine aux réseaux mondiaux sont en général tolérés. Les VPN grand public destinés à contourner le pare-feu sont techniquement illégaux, même si l'application varie selon les régions et les périodes. Les entreprises étrangères installées en Chine doivent avoir cette distinction en tête. Ne partez pas du principe que vos équipes peuvent utiliser librement des VPN personnels pour atteindre des services bloqués depuis leurs bureaux.
