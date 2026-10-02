---
title: "Migrer un site WordPress vers la Chine"
subtitle: "Ce qui gouverne vraiment une migration vers la Chine, l'ordre des étapes, et pourquoi les ports restent fermés jusqu'à la validation du dossier."
summary: "Tout le calendrier dépend de l'enregistrement ICP, et le reste attend derrière lui. Quatorze semaines réalistes, points de blocage compris."
visual: "/images/guides/migrate-wordpress-to-china.webp"
order: 37
published: true
publishedAt: 2026-09-29
updatedAt: 2026-10-02
category: Hosting
author: echo-peng
---

Pour migrer un site WordPress vers la Chine, on dépose d'abord, on déménage ensuite. L'enregistrement ICP (ICP备案) commande tout le calendrier. Tant qu'il n'est pas validé, un serveur situé en Chine continentale ne sert votre domaine à personne : pas de préproduction sur l'hébergement définitif, pas de lancement discret en bêta. Le reste du projet alimente le dossier ou l'attend.

Si l'entité chinoise existe déjà, nous tablons sur quatorze semaines pour un site WordPress ordinaire : un site vitrine d'entreprise, sans paiement en ligne. L'enregistrement en occupe trois à six. La refonte se mène en parallèle, sur une copie hébergée n'importe où sauf sur le serveur de destination. Les règles des hébergeurs citées ci-dessous ont été contrôlées le 24 septembre 2026 dans la documentation d'Alibaba Cloud et de Tencent Cloud.

Les plannings qui relèguent l'enregistrement au rang de formalité annexe s'en aperçoivent d'ordinaire la semaine du lancement. Le serveur est prêt ; il ne peut montrer le site à personne.

| Chantier | Avant la validation du dossier ? | Ce qu'il attend |
|---|---|---|
| Entité en Chine continentale | Elle doit déjà exister | Rien. Tout le reste l'attend |
| Serveur en Chine continentale | Oui, c'est même obligatoire | Le dossier est déposé sur ce serveur |
| Refonte et correction des dépendances | Oui, hors du nouveau serveur | L'audit des dépendances |
| Préproduction publique sur le nouveau serveur | Non | L'enregistrement |
| Bascule DNS | Non | L'enregistrement, puis les tests |
| Déclaration auprès de la sécurité publique (公安备案) | Non, elle suit le lancement | 30 jours après l'ouverture |

## Pourquoi l'enregistrement passe en premier

Alibaba Cloud et Tencent Cloud l'écrivent noir sur blanc, presque dans les mêmes termes.

> Conformément aux règles du ministère de l'Industrie et des Technologies de l'information (工信部), un domaine résolu vers un serveur situé en Chine continentale doit avoir achevé son enregistrement avant que l'accès au site puisse être ouvert.
> Source : centre d'aide d'Alibaba Cloud (阿里云), mis à jour le 4 septembre 2026. https://help.aliyun.com/zh/dws/support/how-do-i-troubleshoot-the-failures-to-access-a-website-by-using-its-domain-name

> Un domaine résolu vers des ressources de Tencent Cloud en Chine continentale doit d'abord faire l'objet d'un enregistrement ICP, faute de quoi le dispositif de Tencent Cloud qui surveille les domaines non enregistrés l'intercepte.
> Source : documentation de Tencent Cloud (腾讯云), mise à jour le 3 septembre 2026. https://cloud.tencent.com/document/product/243/19630

Concrètement, sur nos projets, les ports 80 et 443 (ceux du HTTP et du HTTPS) restent fermés à votre domaine du jour de la location du serveur jusqu'à l'attribution du numéro d'enregistrement ICP (ICP备案). C'est l'hébergeur lui-même qui fait respecter la règle, sur son propre réseau.

> La vérification d'Alibaba Cloud prend 1 à 2 jours ouvrés. L'examen de l'administration provinciale des communications (省级通信管理局) qui suit demande en général 1 à 20 jours ouvrés.
> Source : centre d'aide d'Alibaba Cloud (阿里云), présentation de la procédure d'enregistrement ICP, mise à jour le 26 août 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview

Soit 22 jours ouvrés au plus, sur le papier. Réunir les pièces prend du temps et les dossiers reviennent pour correction : comptez trois à six semaines. [Notre guide de l'enregistrement ICP pour les entreprises étrangères](/fr/ressources/guide-web-chine/licence-icp-entreprises-etrangeres/) détaille les documents à fournir. Un site marchand peut en outre devoir obtenir la licence commerciale ICP (ICP许可证), une procédure distincte et plus lente.

Passer par un CDN implanté en Chine ne permet pas davantage de contourner l'enregistrement.

> Le Cloudflare China Network exige un abonnement Enterprise et « un enregistrement ou une licence ICP valide pour chaque domaine racine que vous souhaitez intégrer ».
> Source : documentation développeurs de Cloudflare, mise à jour le 30 avril 2026. https://developers.cloudflare.com/china-network/

## Semaine zéro : l'entité en Chine continentale

L'enregistrement ICP (ICP备案) se fait au nom d'une société chinoise. La société doit donc exister avant même que le projet démarre.

> Pour déposer une demande d'enregistrement ICP, le déclarant doit être une entreprise immatriculée en Chine continentale ou un résident de Chine continentale.
> Source : centre d'aide d'Alibaba Cloud (阿里云), enregistrement ICP pour les entreprises situées hors de Chine continentale, mis à jour le 20 août 2026. https://help.aliyun.com/en/icp-filing/basic-icp-service/product-overview/icp-filing-application-for-enterprises-outside-the-chinese-mainland

Si vous avez une filiale sur le continent, c'est elle qui dépose. Si vous n'en avez pas, tranchez la question avant de confier quoi que ce soit à un graphiste. Créer une société en Chine est un chantier juridique à part entière, doté de son propre calendrier, qui doit aboutir en premier.

La semaine zéro exige aussi un nom de domaine enregistré et ayant passé la vérification d'identité réelle, la licence d'exploitation de l'entité à portée de main. Il faut enfin quelqu'un en Chine, habilité à signer pour la société, qui réponde aux questions de l'hébergeur pendant l'instruction du dossier.

Une entreprise sans entité sur le continent ne dispose plus que de deux voies : un serveur à Hong Kong, ou une couche de diffusion placée devant son hébergement actuel. [Notre guide sur la lenteur de WordPress en Chine](/fr/ressources/guide-web-chine/vitesse-wordpress-chine/) pèse l'une et l'autre.

## Le piège des deux plateformes d'Alibaba

Alibaba Cloud (阿里云) vend par deux guichets distincts. alibabacloud.com est la plateforme internationale, en anglais. La plateforme chinoise se trouve sur aliyun.com. Les deux partagent le même logo et la plupart des noms de produits.

> Les comptes du site international d'Alibaba Cloud (alibabacloud.com) ne permettent pas de déposer une demande d'enregistrement ICP, ni pour un site web ni pour une application. Il faut un compte sur le site chinois (aliyun.com).
> Source : centre d'aide d'Alibaba Cloud (阿里云), mis à jour le 20 août 2026. https://help.aliyun.com/en/icp-filing/basic-icp-service/product-overview/icp-filing-application-for-enterprises-outside-the-chinese-mainland

Au siège, le service informatique ouvre un compte sur alibabacloud.com : le site parle anglais et accepte la carte de l'entreprise. Un serveur est acheté, le chantier démarre.

Vient l'heure de l'enregistrement, et le compte se révèle incapable de déposer. Le serveur, lui, doit remplir ses propres conditions.

> Un enregistrement ICP effectué auprès d'Alibaba Cloud doit porter sur un serveur Alibaba Cloud situé en Chine continentale, et une instance ECS n'est recevable que si elle est souscrite pour plus de 3 mois.
> Source : centre d'aide d'Alibaba Cloud, vérification des informations de serveur et d'accès, mise à jour le 2 septembre 2026. https://help.aliyun.com/en/icp-filing/basic-icp-service/user-guide/icp-filing-server-access-information-check

Le serveur vient donc en premier, sur le compte chinois, payé pour au moins un trimestre, et il ne sert rien au public tant que le dossier n'est pas validé. Inscrivez ce trimestre à vide au budget. Pour comparer Alibaba Cloud, Tencent Cloud (腾讯云) et Huawei Cloud (华为云), reportez-vous à [notre guide de l'hébergement WordPress en Chine](/fr/ressources/guide-web-chine/hebergement-wordpress-chine/).

## Ce qui se reconstruit, ce qui se copie

Le contenu est la partie facile. Articles, pages, champs personnalisés, utilisateurs, menus et médiathèque voyagent dans un export de la base de données et une copie du dossier uploads.

Tout ce qui appelle un hôte situé hors de Chine pendant le chargement d'une page doit être reconstruit : polices, scripts, cartes, vidéos, captchas, mesure d'audience et connexion via les réseaux sociaux. Vérifiez aussi les e-mails sortants. Si le service qui envoie les notifications de vos formulaires est à l'étranger, il relève du même traitement.

Le modèle d'hébergement change avec le déménagement. Le guide d'Alibaba consacré à son Simple Application Server (轻量应用服务器), mis à jour le 19 août 2026, monte un site à partir d'une image d'application WordPress préconfigurée, soit un système d'exploitation sur lequel WordPress est déjà installé. Nous n'avons trouvé d'offre WordPress infogérée chez aucun cloud du continent. Mises à jour, sauvegardes et niveau de correctifs vous incombent, ou incombent à l'exploitant du site.

Les mises à jour appellent un dispositif à part.

> Un utilisateur chinois de WordPress signalait des erreurs 429 sur tous les sous-domaines de WordPress.org. WordPress.org a répondu le jour même que « plusieurs sources réseau chinoises font l'objet d'une limitation de débit sur certains services en raison d'un niveau d'abus élevé », et qu'aucune liste blanche ne serait accordée.
> Source : WordPress.org Meta Trac, ticket n° 5106, 21 mars 2020, consulté dans la copie de l'Internet Archive du 16 janvier 2026. https://web.archive.org/web/20260116133057/https://meta.trac.wordpress.org/ticket/5106

Le tableau de bord n'en dit rien. Les vérifications de mises à jour échouent et le site cesse, sans bruit, d'en proposer. Avant la bascule, décidez si les correctifs viendront d'un miroir national ou d'une personne nommément désignée qui les prépare hors de Chine.

## Corriger les dépendances pendant l'instruction du dossier

C'est ce chantier qui absorbe l'essentiel des quatorze semaines. Chargez le site actuel depuis une connexion en Chine continentale (un collègue à Shanghai avec un ordinateur portable suffit) et relevez chaque hôte dans l'onglet réseau des outils de développement. Chacun reçoit un verdict : garder, héberger chez soi, remplacer ou supprimer. [Notre guide des plugins WordPress qui cassent en Chine](/fr/ressources/guide-web-chine/plugins-wordpress-chine/) passe en revue les suspects habituels, hôte par hôte, avec des verdicts datés.

> Le temps de chargement médian est passé de 23,4 secondes sur une origine européenne à 1,2 seconde sur une origine en Chine continentale, et près de la moitié du gain est venue de la suppression d'appels externes plutôt que du déménagement du serveur.
> Source : ChinaWebFoundry, publié le 29 août 2026. https://www.chinawebfoundry.com/resources/china-web-guide/is-wordpress-blocked-in-china/

Ces chiffres viennent d'une de nos migrations. L'opérateur et la date de test ne sont pas publiés.

La correction des dépendances trouve donc sa place pendant les semaines d'instruction, sur une copie du site : une installation locale, ou un serveur à Hong Kong qui tourne avec les mêmes versions de PHP et de base de données que le serveur du continent.

## Bascule, DNS et ouverture des ports

Le numéro d'enregistrement ICP (ICP备案) tombe. Déployez le site reconstruit sur le serveur du continent et affichez le numéro en pied de page.

> Une fois l'enregistrement obtenu, le site doit afficher en bas de page le numéro ICP attribué par le ministère, avec un lien vers beian.miit.gov.cn. Son absence peut valoir une injonction de mise en conformité et une amende de 5 000 à 10 000 yuans de la part de l'administration provinciale des communications.
> Source : centre d'aide d'Alibaba Cloud (阿里云), mis à jour le 12 août 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/the-icp-record-post-processing-1

Avant la bascule, testez le nouveau serveur depuis la Chine en pointant vers lui le fichier hosts d'une machine située sur le continent (une redirection locale qui court-circuite le DNS). Faites-le depuis une région cloud et depuis une connexion résidentielle. Les deux peuvent donner des résultats différents, et c'est la connexion résidentielle qu'utilisent vos visiteurs.

Abaissez la durée de vie (TTL) des enregistrements DNS deux jours environ avant la bascule, pour que le changement se propage vite et qu'un retour arrière reste rapide. Choisissez un matin de semaine, heure de Pékin, loin de tout jour férié chinois. Modifiez l'enregistrement, puis relancez les mêmes tests. Laissez tourner l'ancienne origine jusqu'à ce que la nouvelle ait tenu une semaine ; votre site actuel fonctionne normalement jusqu'à la bascule.

Un autre compte à rebours démarre le jour de l'ouverture : la déclaration auprès de la sécurité publique, une formalité distincte, à accomplir auprès de la police.

> Un site doit achever sa déclaration auprès de la sécurité publique (公安备案) dans les 30 jours suivant son ouverture.
> Source : centre d'aide d'Alibaba Cloud (阿里云), présentation de la procédure d'enregistrement ICP, mise à jour le 26 août 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview

## Combien de temps pour migrer un site WordPress vers la Chine

L'enregistrement seul prend trois à six semaines. Pourquoi alors quatorze ? Parce que le serveur ne peut pas être acheté avant l'ouverture du compte chinois, et que rien ne se déploie avant la validation du dossier. La déclaration auprès de la sécurité publique et Baidu attendent le lancement. C'est sur ce tableau que l'équipe de Shanghai bâtit ses plannings, pour un site WordPress ordinaire dont l'entité existe déjà.

| Phase | Semaines | Dépendance bloquante | Responsable |
|---|---|---|---|
| Audit des dépendances | 1 à 2 | Accès au site actuel | Équipe web |
| Compte chinois, serveur, contrôles du domaine | 1 à 2 | Entité sur le continent et licence d'exploitation | Votre entité en Chine |
| Enregistrement ICP (ICP备案), dépôt et instruction | 2 à 7 | Serveur sur le continent souscrit pour plus de 3 mois | Entité, hébergeur, régulateur provincial |
| Refonte et corrections, hors du nouveau serveur | 2 à 9 | L'audit des dépendances | Équipe web |
| Contenus chinois et localisation | 3 à 10 | Textes source validés | Marketing |
| Déploiement sur le serveur du continent, numéro ICP en pied de page | 8 à 10 | Numéro d'enregistrement attribué | Équipe web |
| Tests depuis des points de mesure en Chine continentale | 10 à 12 | Site déployé | Équipe web |
| Bascule DNS | 12 | Validation des tests | Équipe web et gestionnaire du DNS |
| Déclaration auprès de la sécurité publique (公安备案) | 12 à 14 | Site en ligne, délai de 30 jours | Votre entité en Chine |
| Validation Baidu (百度) et premières soumissions | 12 à 14 | Site en ligne | Marketing |

C'est la ligne de l'enregistrement qui varie. Certaines provinces valident en quelques jours. Un seul dossier renvoyé pour correction peut absorber toute la marge disponible. Deux coûts prennent les budgets de court : le serveur payé pendant les semaines creuses, et une semaine ou plus de double facture d'hébergement tant que l'ancienne origine reste en ligne. [Notre offre de migration vers la Chine](/fr/services/migration-chine/) est chiffrée à partir de ce même tableau, et [notre page WordPress en Chine](/fr/wordpress-en-chine/) aide à juger si un déménagement sur le continent s'impose.

## Questions fréquentes

### Peut-on tester sur le serveur du continent avant la validation du dossier ?

Vous pouvez installer et configurer en SSH, mais le site ne s'affichera pas sur votre domaine avant l'attribution du numéro d'enregistrement ICP (ICP备案). L'hébergeur l'intercepte. Construisez et validez le site sur une copie hébergée ailleurs, puis transférez la version achevée dès que le numéro arrive.

### Faut-il une société chinoise pour héberger WordPress en Chine ?

Pour un serveur sur le continent, oui. Le déclarant doit être une entreprise immatriculée en Chine continentale ou un résident du continent, et un domaine non enregistré n'est pas servi depuis un serveur chinois. Une entreprise qui n'en a pas peut se rabattre sur un serveur à Hong Kong ou sur une couche de diffusion.

### Notre domaine a déjà un numéro ICP chez un autre hébergeur. Faut-il tout recommencer ?

Non, on le transfère. Le centre d'aide d'Alibaba Cloud, mis à jour le 4 septembre 2026, cite un enregistrement détenu chez un autre prestataire parmi les raisons pour lesquelles un site reste inaccessible, et la solution est un transfert d'enregistrement (接入备案) vers le nouvel hébergeur. Le site n'est pas servi depuis le nouveau serveur tant que ce transfert n'est pas validé : lui aussi se trouve sur le chemin critique.

### Peut-on garder notre thème actuel ?

Souvent, oui. Un thème peut migrer en l'état si rien en lui n'appelle un hôte situé hors de Chine pendant le chargement de la page. L'audit le dira. Pour les thèmes qui vont chercher polices ou scripts chez Google, ou qui intègrent des vidéos hébergées à l'étranger, il faudra remplacer ces appels par des fichiers hébergés chez vous ou par des services chinois avant la bascule.
