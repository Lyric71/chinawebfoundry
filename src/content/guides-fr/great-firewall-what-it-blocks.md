---
title: "Le Grand Pare-feu : ce qu'il bloque et comment le contourner"
subtitle: "Si votre site charge des polices Google Fonts, déclenche une balise Google Analytics ou intègre une vidéo YouTube, il est déjà cassé pour 900 millions d'internautes chinois."
summary: "Le Grand Pare-feu chinois bloque Google, Facebook, Slack et des dizaines d'autres services. Découvrez son fonctionnement technique et comment les entreprises étrangères peuvent construire autour."
visual: "/images/guides/great-firewall-what-it-blocks.webp"
order: 7
published: true
category: Technology
---

Le Grand Pare-feu ne fonctionne pas comme la plupart des gens l'imaginent. Ce n'est pas une liste noire. C'est un système multicouche qui empoisonne les requêtes DNS, bloque des plages entières d'adresses IP, lit le contenu de vos paquets de données en temps réel et traque activement les connexions VPN. Pour les entreprises étrangères, cela signifie que tout site présentant ne serait-ce qu'une seule dépendance vers un service bloqué - un fichier de police, un script de suivi, une carte intégrée - offre une expérience dégradée aux utilisateurs en Chine. Et généralement, personne dans l'équipe ne s'en rend compte.

## Comment fonctionne réellement le Grand Pare-feu

Cinq systèmes fonctionnent en parallèle. Ils interceptent différentes choses à différents niveaux.

| Couche | Méthode | Effet |
|---|---|---|
| Empoisonnement DNS | Renvoie de fausses adresses IP | Redirige les requêtes vers les domaines bloqués dans le vide |
| Blocage d'IP | Bloque des plages d'IP | Coupe l'accès aux IP connues de services étrangers au niveau réseau |
| Inspection approfondie des paquets | Lit le contenu des paquets | Coupe les connexions si la charge utile correspond à des schémas signalés |
| Filtrage d'URL | Filtre des URL spécifiques | Bloque des pages individuelles par mot-clé, pas des domaines entiers |
| Détection VPN | Identifie les protocoles VPN | Ralentit ou bloque le trafic VPN par signature |

**L'empoisonnement DNS** est la couche la plus élémentaire. Quand quelqu'un en Chine demande un domaine bloqué, le pare-feu renvoie une adresse IP erronée. La requête n'expire pas. Elle aboutit là où elle ne devrait pas. L'utilisateur voit une erreur ou une page blanche sans comprendre pourquoi.

**Le blocage d'IP** est plus brutal. Des plages entières d'adresses IP liées à des services étrangers connus sont coupées au niveau réseau. Même si vous contournez l'empoisonnement DNS avec un résolveur alternatif, vous ne pouvez toujours pas vous connecter parce que l'IP elle-même est bloquée.

**L'inspection approfondie des paquets** est la couche qui pèse le plus. Le système ne se contente pas de vérifier la destination du trafic. Il lit ce qui se trouve à l'intérieur des paquets. Si le contenu correspond à des schémas signalés, la connexion est coupée en plein transfert. C'est ce qui fait du pare-feu chinois un dispositif fondamentalement différent des systèmes de filtrage nationaux plus simples.

> L'inspection approfondie des paquets lit le contenu de votre trafic, pas seulement sa destination. C'est cette couche qui rend le Grand Pare-feu fondamentalement plus difficile à contourner que tout autre système existant.

**Le filtrage d'URL** opère au niveau de la page. Un domaine peut rester accessible, mais des URL spécifiques contenant certains mots-clés sont filtrées. Chirurgical plutôt que généralisé.

**La détection VPN** est l'ajout le plus récent. Le pare-feu identifie les protocoles VPN par leurs signatures de trafic et les ralentit ou les bloque. Un VPN grand public qui fonctionnait de manière fiable il y a deux ans peut ne plus se connecter du tout aujourd'hui. Le système ne cesse de s'améliorer dans sa capacité à les reconnaître.

## Ce qui est bloqué (et pourquoi cela casse votre site)

Les entreprises étrangères tendent à se focaliser sur l'aspect politique du Grand Pare-feu. Ce qui compte réellement pour votre site web, ce sont les dépendances techniques.

| Catégorie | Services bloqués |
|---|---|
| Google (tous les services) | Recherche, Gmail, Maps, YouTube, Analytics, Ads, Fonts |
| Réseaux sociaux | Facebook, Instagram, WhatsApp, Messenger, Twitter/X, Reddit, Pinterest |
| Outils professionnels | Dropbox, Slack, Notion, Trello |
| Divertissement | Netflix, Spotify, Twitch |
| Presse | New York Times, Wall Street Journal, BBC |
| Référence | Wikipédia (édition chinoise) |

Google est bloqué. Dans sa totalité. Recherche, Gmail, Maps, YouTube, Google Ads, Google Analytics, Google Fonts. Chaque service sous la bannière Google. Si votre site charge une police depuis fonts.googleapis.com ou déclenche une balise GA, cette requête reste en suspens pour les utilisateurs en Chine. Aucun message d'erreur ne s'affiche. La page charge simplement plus lentement ou une section ne s'affiche pas, et votre équipe au siège n'en sait rien parce qu'elle navigue de l'extérieur du pare-feu.

Facebook, Instagram, WhatsApp, Messenger. Tous bloqués. Twitter/X, Reddit, Pinterest. Bloqués. L'édition chinoise de Wikipédia. Bloquée.

Les outils professionnels dont dépendent les entreprises occidentales : Dropbox, Slack, Notion, Trello. Tous bloqués. Si votre site s'intègre à l'un d'entre eux ou charge des ressources depuis leurs domaines, cette intégration est morte en Chine.

Netflix, Spotify, Twitch. Tous bloqués. La plupart des grands sites de presse occidentaux, dont le New York Times, le Wall Street Journal et la BBC. Bloqués.

Ce qui prend la plupart des entreprises au dépourvu, ce n'est pas les services eux-mêmes. Ce sont tous les scripts, polices, widgets et appels API qui touchent un domaine bloqué. Un seul lien Google Fonts oublié dans votre CSS peut ajouter des secondes au temps de chargement pour chaque utilisateur en Chine. Une seule balise de suivi analytique peut bloquer le rendu complet de votre page.

> Un seul lien Google Fonts oublié dans votre CSS peut ajouter des secondes de chargement pour chaque utilisateur en Chine. Ce ne sont pas les sites bloqués qui vous pénalisent. Ce sont les dépendances bloquées cachées dans votre code.

## Stratégies pour les entreprises étrangères

On ne peut pas percer le pare-feu. Mais on peut construire son site de sorte qu'il n'ait pas besoin de le traverser.

| Stratégie | Ce qu'elle résout |
|---|---|
| Hébergement continental + ICP | Vitesse, classement, conformité |
| CDN chinois | Mise en cache sur des noeuds en Chine continentale |
| Remplacement des dépendances bloquées | Google Fonts par polices locales, GA par Baidu Tongji, Maps par Baidu Maps |
| Hébergement à Hong Kong | Compromis, pas d'ICP requis |
| Sensibilisation VPN | Zone grise juridique, distinction entreprise/particulier |

**Hébergez en Chine continentale avec une licence ICP.** C'est la voie la plus directe. Le site vit à l'intérieur du pare-feu, au lieu de se battre pour le traverser. Chargements les plus rapides, meilleurs classements Baidu, conformité totale. Si vous êtes engagé sur le marché chinois, c'est là que vous voulez être.

**Utilisez un CDN chinois** pour mettre en cache le contenu sur des noeuds à l'intérieur de la Chine continentale. Même avec un serveur d'origine situé hors du pays, un CDN doté de PoP continentaux sert les pages mises en cache aux utilisateurs chinois sans que chaque requête doive traverser le pare-feu.

**Remplacez chaque dépendance bloquée.** C'est l'étape que les entreprises oublient le plus souvent. Google Fonts doit être remplacé par des polices hébergées localement. Google Maps devient Baidu Maps. Google Analytics devient Baidu Tongji. Passez en revue chaque appel externe que fait votre site. Chaque balise de script, chaque importation de police, chaque point de terminaison d'API. Si l'un d'eux atteint un domaine bloqué, vos utilisateurs chinois vivent une expérience dégradée ou défaillante, et vous ne le savez probablement même pas.

> Google Fonts, Google Analytics, Google Maps. Remplacez-les par des polices hébergées localement, Baidu Tongji et Baidu Maps. Auditez chaque appel externe de votre site.

Il y a ensuite **l'hébergement à Hong Kong** comme solution intermédiaire si vous n'êtes pas prêt pour le processus ICP. Pas de licence nécessaire, la latence vers le continent est tolérable, la plupart des interférences du pare-feu sont évitées. C'est un compromis, mais un compromis utilisable pour les entreprises qui tâtent le terrain.

**Les VPN** relèvent d'une zone grise. Les VPN d'entreprise qui connectent des bureaux en Chine aux réseaux mondiaux sont généralement tolérés. Les VPN grand public utilisés pour contourner le pare-feu sont techniquement illégaux, bien que l'application varie selon les régions et les années. Les entreprises étrangères opérant en Chine doivent comprendre clairement cette distinction. Ne présumez pas que vos employés peuvent librement utiliser des VPN personnels pour accéder à des services bloqués depuis le bureau.
