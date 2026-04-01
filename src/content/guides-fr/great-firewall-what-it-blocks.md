---
title: "Le Grand Pare-feu : ce qu'il bloque et comment composer avec"
subtitle: "Si votre site charge des polices Google Fonts, déclenche une balise Google Analytics ou intègre une vidéo YouTube, il est déjà hors service pour 900 millions d'internautes chinois."
summary: "Le Grand Pare-feu chinois bloque Google, Facebook, Slack et des dizaines d'autres services. Son fonctionnement technique et les solutions pour les entreprises étrangères."
visual: "/images/guides/great-firewall-what-it-blocks.webp"
order: 7
published: true
category: Technology
---

Le Grand Pare-feu ne fonctionne pas comme on l'imagine. Ce n'est pas une simple liste noire. C'est un dispositif multicouche qui empoisonne les requêtes DNS, bloque des plages entières d'adresses IP, lit en temps réel le contenu de vos paquets de données et traque activement les connexions VPN. Pour les entreprises étrangères, la conséquence est immédiate : un site qui présente ne serait-ce qu'une seule dépendance vers un service bloqué - un fichier de police, un script de suivi, une carte intégrée - offre une expérience dégradée aux utilisateurs en Chine. Et le plus souvent, personne dans l'équipe ne s'en rend compte.

## Le fonctionnement réel du Grand Pare-feu

Cinq systèmes opèrent en parallèle. Chacun intercepte un type de trafic différent à un niveau différent.

| Couche | Méthode | Effet |
|---|---|---|
| Empoisonnement DNS | Renvoie de fausses adresses IP | Redirige les requêtes vers les domaines bloqués dans le vide |
| Blocage d'IP | Bloque des plages d'adresses IP | Coupe l'accès aux IP connues de services étrangers au niveau réseau |
| Inspection approfondie des paquets | Lit le contenu des paquets | Interrompt les connexions dont le contenu correspond à des schémas signalés |
| Filtrage d'URL | Filtre des URL spécifiques | Bloque des pages individuelles par mot-clé, sans toucher au domaine entier |
| Détection VPN | Identifie les protocoles VPN | Ralentit ou bloque le trafic VPN par signature |

**L'empoisonnement DNS** est la couche la plus élémentaire. Quand un internaute en Chine demande un domaine bloqué, le pare-feu renvoie une adresse IP erronée. La requête n'expire pas. Elle aboutit là où elle ne devrait pas. L'utilisateur voit une erreur ou une page blanche, sans comprendre pourquoi.

**Le blocage d'IP** est plus radical. Des plages entières d'adresses IP associées à des services étrangers sont coupées au niveau réseau. Contourner l'empoisonnement DNS avec un résolveur alternatif ne sert à rien si l'adresse IP elle-même est inaccessible.

**L'inspection approfondie des paquets** est la couche décisive. Le système ne se contente pas de vérifier la destination du trafic. Il en analyse le contenu. Si celui-ci correspond à des schémas signalés, la connexion est coupée en cours de transfert. C'est ce qui distingue le pare-feu chinois des systèmes de filtrage national plus rudimentaires.

> L'inspection approfondie des paquets analyse le contenu de votre trafic, pas seulement sa destination. C'est cette couche qui rend le Grand Pare-feu fondamentalement plus difficile à contourner que tout autre dispositif existant.

**Le filtrage d'URL** opère à l'échelle de la page. Un domaine peut rester accessible, mais certaines URL contenant des mots-clés précis sont filtrées. Intervention chirurgicale, et non blocage massif.

**La détection VPN** est le mécanisme le plus récent. Le pare-feu identifie les protocoles VPN par leurs signatures de trafic et les ralentit ou les bloque. Un VPN grand public qui fonctionnait sans problème il y a deux ans peut être devenu inutilisable. Le système progresse continuellement dans sa capacité à les détecter.

## Ce qui est bloqué (et pourquoi cela casse votre site)

Les entreprises étrangères se focalisent sur la dimension politique du Grand Pare-feu. Ce qui compte véritablement pour leur site, ce sont les dépendances techniques.

| Catégorie | Services bloqués |
|---|---|
| Google (tous les services) | Recherche, Gmail, Maps, YouTube, Analytics, Ads, Fonts |
| Réseaux sociaux | Facebook, Instagram, WhatsApp, Messenger, Twitter/X, Reddit, Pinterest |
| Outils professionnels | Dropbox, Slack, Notion, Trello |
| Divertissement | Netflix, Spotify, Twitch |
| Presse | New York Times, Wall Street Journal, BBC |
| Encyclopédie | Wikipédia (édition chinoise) |

Google est bloqué. Intégralement. Recherche, Gmail, Maps, YouTube, Google Ads, Google Analytics, Google Fonts. L'ensemble des services. Si votre site charge une police depuis fonts.googleapis.com ou déclenche une balise GA, cette requête reste en suspens pour les utilisateurs en Chine. Aucun message d'erreur ne s'affiche. La page charge plus lentement, une section ne s'affiche pas, et votre équipe au siège n'en sait rien puisqu'elle navigue depuis l'extérieur du pare-feu.

Facebook, Instagram, WhatsApp, Messenger. Tous bloqués. Twitter/X, Reddit, Pinterest. Bloqués. L'édition chinoise de Wikipédia. Bloquée.

Les outils professionnels dont les entreprises occidentales dépendent : Dropbox, Slack, Notion, Trello. Tous bloqués. Si votre site s'intègre à l'un d'entre eux ou charge des ressources depuis leurs domaines, cette intégration est morte en Chine.

Netflix, Spotify, Twitch. Tous bloqués. La plupart des grands sites de presse occidentaux, dont le New York Times, le Wall Street Journal et la BBC. Bloqués.

Ce qui surprend le plus les entreprises, ce ne sont pas les services eux-mêmes. Ce sont les scripts, polices, widgets et appels API qui sollicitent un domaine bloqué en arrière-plan. Un seul lien Google Fonts oublié dans le CSS peut ajouter des secondes au temps de chargement pour chaque visiteur en Chine. Une seule balise analytique peut bloquer le rendu complet de la page.

> Un seul lien Google Fonts oublié dans votre CSS peut ajouter des secondes au temps de chargement pour chaque utilisateur en Chine. Ce ne sont pas les sites bloqués qui posent problème. Ce sont les dépendances bloquées enfouies dans votre code.

## Stratégies pour les entreprises étrangères

On ne perce pas le pare-feu. Mais on peut construire un site qui n'a pas besoin de le traverser.

| Stratégie | Ce qu'elle résout |
|---|---|
| Hébergement continental + ICP | Vitesse, classement, conformité |
| CDN chinois | Mise en cache sur des noeuds en Chine continentale |
| Remplacement des dépendances bloquées | Google Fonts vers polices locales, GA vers Baidu Tongji, Maps vers Baidu Maps |
| Hébergement à Hong Kong | Solution intermédiaire, pas d'ICP requis |
| Sensibilisation VPN | Zone grise juridique, distinction entre usage professionnel et personnel |

**Héberger en Chine continentale avec une licence ICP.** La voie la plus directe. Le site vit à l'intérieur du pare-feu au lieu de se battre pour le traverser. Chargements les plus rapides, meilleurs classements Baidu, conformité totale. Pour qui s'engage sur le marché chinois, c'est la destination.

**Utiliser un CDN chinois** pour mettre en cache le contenu sur des noeuds situés en Chine continentale. Même avec un serveur d'origine hors du pays, un CDN doté de PoP continentaux sert les pages aux utilisateurs chinois sans que chaque requête doive traverser le pare-feu.

**Remplacer chaque dépendance bloquée.** C'est l'étape la plus souvent négligée. Google Fonts doit être remplacé par des polices hébergées localement. Google Maps par Baidu Maps. Google Analytics par Baidu Tongji. Il faut passer en revue chaque appel externe du site. Chaque balise de script, chaque import de police, chaque point d'accès API. Si l'un d'entre eux atteint un domaine bloqué, vos utilisateurs chinois subissent une expérience dégradée, et vous l'ignorez probablement.

> Google Fonts, Google Analytics, Google Maps. À remplacer par des polices hébergées localement, Baidu Tongji et Baidu Maps. Chaque appel externe du site doit être audité.

Il y a ensuite **l'hébergement à Hong Kong** comme solution intermédiaire pour les entreprises qui ne sont pas prêtes pour le processus ICP. Pas de licence nécessaire, latence vers le continent gérable, interférences du pare-feu généralement évitées. C'est un compromis, mais exploitable pour les entreprises qui tâtent le terrain.

**Les VPN** relèvent d'une zone grise. Les VPN d'entreprise connectant des bureaux en Chine aux réseaux mondiaux sont généralement tolérés. Les VPN grand public destinés à contourner le pare-feu sont techniquement illégaux, même si l'application varie selon les régions et les périodes. Les entreprises étrangères présentes en Chine doivent comprendre clairement cette distinction. Ne présumez pas que vos collaborateurs peuvent librement utiliser des VPN personnels pour accéder à des services bloqués depuis leurs bureaux.
