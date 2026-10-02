---
title: "Pourquoi votre site WordPress est lent en Chine"
subtitle: "Les quatre vraies causes de la lenteur derrière le Grand Pare-feu, hiérarchisées par leur coût, et une migration mesurée avant et après."
summary: "Quatre causes, hiérarchisées par leur coût réel. Une migration mesurée de 23,4 à 1,2 seconde, et ce qu'une couche de diffusion règle vraiment."
visual: "/images/guides/wordpress-speed-china.webp"
order: 36
published: true
publishedAt: 2026-09-22
updatedAt: 2026-10-02
category: Technology
author: cyril-drouin
---

Quatre causes ralentissent un site WordPress en Chine, et toutes ne pèsent pas le même poids. Un hôte qui ne répond jamais bloque la page entière. La distance jusqu'à votre serveur ajoute près d'une seconde à chaque requête. Le nombre d'hôtes appelés multiplie ce délai. Le poids des fichiers arrive en dernier, et c'est pourtant par là que tout le monde commence.

Hiérarchisez-les avant d'engager la moindre dépense.

| Rang | Cause | Ce que cela coûte | Ce qui règle le problème |
|---|---|---|---|
| 1 | Un hôte qui ne répond jamais | La page, ou tout ce qui attend derrière elle | Supprimer l'appel, ou héberger le fichier chez vous |
| 2 | La distance jusqu'à votre origine | Près d'une seconde sur le premier octet | Une origine continentale, ou une diffusion dans le pays |
| 3 | Le nombre d'hôtes appelés | Une résolution et une poignée de main chacun | Moins d'origines, des fichiers servis depuis la vôtre |
| 4 | Le poids de ce que vous envoyez | Du temps, à proportion des octets | Du travail de performance web ordinaire |

La plupart des équipes attaquent par la ligne 4 : c'est de cela que parlent leurs outils. Les secondes, elles, se logent dans les lignes 1 à 3.

Les mesures qui suivent proviennent d'une région Alibaba Cloud le 28 août 2026 et d'une ligne grand public à Pékin le 30 août 2026. Chacune indique son point de mesure et sa date.

## Ce que « lent » veut dire depuis Shanghai

Le plus vaste test public de sites étrangers chargés depuis la Chine revient à Chinafy, qui vend par ailleurs une solution au problème : pondérez en conséquence. La méthode, au moins, est publiée, ce que peu d'acteurs du secteur consentent à faire.

> 614 sites mondiaux répartis sur 11 secteurs ont été testés avec WebPageTest by Catchpoint depuis Pékin, la Virginie et Londres, sous Chrome et sur une connexion câblée. 66,4 % d'entre eux ne sont pas parvenus à se charger depuis Pékin, le temps médian d'affichage complet atteignait 17,2 secondes et 44 % des tests lancés depuis Pékin ont expiré. Le temps de réponse au premier octet depuis Pékin s'établissait à 1,4 seconde, contre 0,35 seconde depuis la Virginie et 0,31 seconde depuis Londres.
> Source : Chinafy, State of Global Website Performance in China, avril 2026. https://insights.chinafy.com/

Deux sites sur trois en échec : voilà le chiffre que tout le monde reprend. Celui qui mérite qu'on s'y arrête tient en 1,4 seconde, écoulée avant même que votre thème soit analysé et avant la moindre requête d'image.

## Les quatre causes de la lenteur d'un site WordPress en Chine

### Un : un hôte qui ne répond jamais

Binaire, et la plus coûteuse. Une requête refusée échoue vite. Une requête abandonnée en silence, elle, reste en attente jusqu'à ce que le navigateur renonce, ce qui peut prendre une minute. Le cas d'école sous WordPress reste jQuery appelé depuis Google Hosted Libraries, ce que font encore des milliers de thèmes commerciaux.

> GreatFire classe ajax.googleapis.com comme bloqué : son dernier test concluant depuis la Chine continentale a échoué, le 22 août 2026.
> Source : GreatFire. https://en.greatfire.org/https/ajax.googleapis.com

Encore faudrait-il que la balise se charge en différé.

> Les scripts dépourvus d'async, de defer ou du type module « sont récupérés et exécutés immédiatement, avant que le navigateur ne poursuive l'analyse de la page ».
> Source : MDN Web Docs, l'élément script, dernière modification le 9 mai 2026. https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script

La page s'arrête donc à la ligne où votre thème réclame jQuery à Google. [Notre guide des plugins qui cassent en Chine](/fr/ressources/guide-web-chine/plugins-wordpress-chine/) passe en revue le reste de la liste.

### Deux : la distance jusqu'à votre origine

Votre serveur est à Francfort. Chaque requête partie de Chengdu traverse deux fois l'Eurasie avant qu'un octet ne revienne, puis recommence pour la ressource suivante. C'est là que se logent les 1,4 seconde citées plus haut. Une origine continentale efface cette distance, et apporte sa part de paperasse : la dernière section y revient.

> Sur une fenêtre de 90 jours, un site client hébergé sur le continent a affiché 99,98 % de disponibilité, avec des temps de réponse médians de 48 ms depuis Pékin, 36 ms depuis Shanghai et 61 ms depuis Canton.
> Source : ChinaWebFoundry, publié le 29 août 2026. https://www.chinawebfoundry.com/website-in-china/

Ces chiffres sont les nôtres. L'opérateur et la fenêtre exacte ne sont pas publiés. Un chiffre livré sans ses conditions appelle la méfiance, y compris quand c'est nous qui le publions.

### Trois : le nombre d'hôtes appelés

Chaque hôte supplémentaire se paie, et pas au rabais, dès lors qu'un aller-retour coûte ce qu'il coûte depuis la Chine.

> « La phase de connexion correspond au temps nécessaire à l'établissement d'une liaison TCP. Comme pour le DNS, plus il faut ouvrir de connexions vers des serveurs, plus le temps consacré à ces connexions augmente. »
> Source : MDN Web Docs, Understanding latency, dernière modification le 25 février 2025. https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Understanding_latency

Une installation WordPress équipée d'un constructeur de pages, d'un plugin de formulaire, d'une balise analytique et d'une police web sollicite huit à vingt hôtes avant que le visiteur ne voie quoi que ce soit. Une étude a instrumenté une navigation réelle depuis une ligne résidentielle de Pékin, relevé 97 hôtes tiers distincts, et sondé deux jours plus tôt une région cloud installée en Chine. Elle n'en teste directement que cinq. Les trois hôtes ci-dessous portent la démonstration, et les deux points de mesure se contredisent sur deux d'entre eux.

| Hôte | Alibaba Cloud (阿里云) cn-zhangjiakou, 28 août 2026 | Ligne résidentielle China Mobile (中国移动), Pékin, 30 août 2026 |
|---|---|---|
| fonts.googleapis.com | Accessible. 72 sur 72, médiane 111 ms | Bloqué. 0 sur 54 |
| www.googletagmanager.com | Accessible. 72 sur 72, médiane 118 ms | Bloqué. 0 sur 112 |
| cdn.jsdelivr.net | Accessible. 72 sur 72, médiane 660 ms | Accessible. 36 sur 36 |

> La colonne centre de données repose sur un relevé toutes les dix minutes pendant 12 heures, avec un délai d'expiration de 30 secondes, soit 72 mesures par hôte. La colonne grand public couvre 88 sites et 264 chargements de page au cours d'une nuit.
> Source : 21YunBox, A Day of Third-Party Requests From Inside China, 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Google Fonts a répondu à chaque tentative depuis le centre de données et pas une seule fois depuis la ligne résidentielle. Les deux résultats sont réels, et vos visiteurs se trouvent sur le second. Hébergez la police chez vous : la variable disparaît. jsDelivr, lui, aboutit des deux côtés. D'où l'erreur que l'on commet en traitant les CDN comme un bloc homogène.

### Quatre : le poids de ce que vous envoyez

Le temps de transfert suit le nombre d'octets, et une connexion mobile chinoise reste un tuyau plus étroit que celui sur lequel votre graphiste a fait ses tests. La page MDN citée plus haut le dit sans détour : plus les requêtes sont nombreuses et lourdes, plus la latence pèse sur celui qui attend. Compressez donc les images, supprimez le carrousel. Ce travail paie, jusqu'au moment précis où la page repose sur un hôte qui ne répond jamais.

## Une migration : de 23,4 secondes à 1,2

L'une de nos migrations a déplacé un site WordPress d'une origine européenne vers une origine continentale, en faisant le ménage dans ses appels externes au passage.

> Le temps de chargement médian est passé de 23,4 secondes sur une origine européenne à 1,2 seconde sur une origine continentale, et près de la moitié du gain vient de la suppression d'appels externes plutôt que du déménagement du serveur.
> Source : ChinaWebFoundry, publié le 29 août 2026. https://www.chinawebfoundry.com/resources/china-web-guide/is-wordpress-blocked-in-china/

Relisez la seconde partie de la phrase. C'est elle qui commande votre budget. La moitié du gain était gratuite : supprimer un appel à Google Fonts et héberger deux fichiers woff2 coûte un après-midi. L'autre moitié imposait de déplacer le serveur, donc un enregistrement ICP (ICP备案) et une entité continentale derrière. Le détail étape par étape relève d'une étude de cas, en cours de rédaction.

## Ce qu'une couche de diffusion règle, et ce qu'elle laisse

Cette catégorie de produits existe et elle tient ses promesses. Chinafy en est le fournisseur le plus connu, et sa description publiée ne laisse rien dans le flou : une copie de votre site spécifique à la Chine, les ressources défaillantes remplacées ou retirées, cette copie servie par des réseaux de diffusion proches de la Chine, et un routage géographique qui n'y dirige que les visiteurs chinois.

> « Les requêtes dynamiques (les transactions, par exemple) repartent également vers l'origine de votre site initial, afin que les visiteurs en Chine disposent d'informations en temps réel. »
> Source : documentation produit de Chinafy. La page ne porte aucune date de publication ; il s'agit donc du mécanisme tel que lu le 18 septembre 2026. https://www.chinafy.com/how-chinafy-works

Passez cette offre au crible des quatre lignes. La ligne 1 est le produit lui-même : elle tombe entièrement. La ligne 4 se traite en périphérie, et la ligne 3 pour l'essentiel avec elle, puisque la couche finit par servir ces fichiers elle-même. La ligne 2, en revanche, ne recule que de moitié : les requêtes dynamiques franchissent toujours la frontière.

Trois lignes et demie, sans enregistrement ICP ni entité chinoise, puisque rien ne réside sur un serveur continental. Pour un site vitrine, un mini-site de campagne, ou une équipe qui doit servir ses visiteurs chinois le trimestre prochain plutôt que l'an prochain, c'est le bon achat, et nous le disons.

Reste le chemin dynamique. Le paiement, la connexion au compte, la recherche, un panier WooCommerce en session voyagent toujours jusqu'à votre origine, où qu'elle soit, et emportent avec eux le coût du premier octet.

## Ce que seule une origine continentale règle

Le temps de réponse dynamique. Et seulement depuis le pays. Un verrou en barre l'accès.

> Un domaine pointé vers un serveur situé dans une région continentale reste inaccessible aux visiteurs tant que son enregistrement ICP (ICP备案) n'est pas validé. Les visiteurs tombent sur une page d'attente : aucun lancement discret n'est possible.
> Source : communauté de développeurs Alibaba Cloud (阿里云), 20 mars 2022, comportement reconfirmé le 18 septembre 2026. https://developer.aliyun.com/article/877910

Comptez trois à six semaines, à condition qu'une entité continentale existe déjà. [Notre guide de l'hébergement WordPress en Chine](/fr/ressources/guide-web-chine/hebergement-wordpress-chine/) détaille auprès de quel cloud domestique déposer le dossier. La voie du CDN implanté dans le pays bute sur le même verrou, ce qui surprend quiconque imagine qu'un CDN dispense de la paperasse.

> Le Cloudflare China Network « fait l'objet d'un abonnement distinct, réservé aux clients d'un forfait Enterprise », et « vous devez disposer d'un enregistrement ou d'une licence ICP (Internet Content Provider) valide pour chaque domaine racine que vous souhaitez intégrer ».
> Source : documentation développeur de Cloudflare, mise à jour le 30 avril 2026. https://developers.cloudflare.com/china-network/

> « JD Cloud, notre partenaire, est tenu d'examiner et de valider le contenu de tous les domaines de son réseau avant l'activation de China Network. »
> Source : documentation développeur de Cloudflare, mise à jour le 17 avril 2026. https://developers.cloudflare.com/china-network/get-started/

Sur les forfaits gratuit et standard de Cloudflare, les visiteurs continentaux sont servis depuis le nœud le plus proche hors du pays, en général Hong Kong, le Japon ou la côte ouest des États-Unis. Plus près. Toujours de l'autre côté de la frontière.

## Comment mesurer honnêtement

Ne testez pas par VPN. Un VPN mesure votre tunnel, et le tunnel est la seule condition réseau qu'aucun de vos visiteurs ne connaît.

Nommez le point de mesure à chaque fois. Une région cloud en Chine et une ligne résidentielle dans la même ville rendent des verdicts opposés sur le même hôte, et un seul des deux correspond à votre client. Servez-vous de chacun pour ce qu'il vaut : la ligne grand public dit si la chose se produit, le centre de données dit à quelle vitesse elle pourrait se produire. Et datez le résultat. Un relevé de mars renseigne sur mars.

WebPageTest dispose d'un nœud à Pékin. Les outils de développement de Chrome, sur une machine en Chine, triés par domaine, donnent la liste des hôtes en une minute. Si personne n'est sur place, [notre China Site Scanner gratuit](/fr/china-site-scanner/) vérifie les dépendances d'une URL depuis l'endroit où vous êtes. Confrontez ensuite le résultat aux quatre lignes : des secondes en ligne 1 valent un après-midi de travail, des secondes en ligne 2 valent un dossier administratif, et [notre page WordPress en Chine](/fr/wordpress-en-chine/) expose quel chemin convient à quel site.

## Les questions qu'on nous pose

### Pourquoi mon site WordPress est-il lent en Chine et correct ailleurs ?

Parce que les éléments qui échouent ne sont jamais demandés hors de Chine. Un hôte de polices bloqué, une balise analytique muette, une balise de script qui arrête l'analyse. Depuis l'Europe, tout cela répond en quelques millisecondes. Depuis une ligne résidentielle chinoise, cela peut rester en attente jusqu'à ce que le navigateur abandonne.

### Un plugin de cache rendra-t-il mon site plus rapide en Chine ?

Il agit sur la ligne 4 et ne change rien aux lignes 1 à 3. Le cache raccourcit le temps que votre serveur passe à fabriquer une page. Il ne raccourcit ni la distance jusqu'à ce serveur, ni l'appel de votre thème vers un hôte qui ne répond jamais.

### Un serveur à Hong Kong suffit-il ?

Mieux que Francfort, moins bien que Shanghai, et sans enregistrement ICP (ICP备案) : c'est pour cela qu'on y pense. Le trafic continental franchit quand même la frontière et reste inspecté ; le gain sur le premier octet est donc réel et partiel. Traitez cette option comme une étape.

### Que suppose concrètement la correction ?

Deux projets distincts, et vous devez savoir lequel vous achetez. Nettoyer les appels externes relève du développement et se compte en jours, sans autorisation de personne. Déplacer l'origine sur le continent suppose une entité chinoise, un enregistrement ICP (ICP备案) et des semaines d'attente. Menez-les dans cet ordre.

### En combien de temps un site WordPress doit-il se charger depuis la Chine continentale ?

Descendre sous deux secondes est possible sur une origine continentale, une fois les appels externes nettoyés. Entre deux et cinq secondes, l'origine est en général correcte et les dépendances ne le sont pas. Au-delà de dix secondes, quelque chose reste bloqué en attente au lieu de tourner lentement.
