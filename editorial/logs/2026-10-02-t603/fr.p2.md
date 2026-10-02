# T6-03 deep-translate, FR, pass 2 (push further, French only)

Worked from fr.p1.md only. The English was not reopened.

## Change 1, summary

- before: Alibaba, Tencent, Huawei, Vercel et Cloudflare comparés pour héberger WordPress en Chine continentale, avec la règle du dépôt ICP et nos propres mesures.
+ after:  Héberger WordPress en Chine continentale : Alibaba, Tencent, Huawei, Vercel et Cloudflare face à la règle du dépôt ICP, mesures à l'appui.
why: the participle opening read as a translated headline; a French standfirst puts the subject first and the colon does the work.

## Change 4, introduction

- before: Sur tous les projets que nous avons menés, les ports 80 et 443 sont restés fermés sur l'adresse publique du serveur jusqu'au jour de la validation. Il n'y a pas de lancement en douceur.
+ after:  Sur chacun de nos projets, les ports 80 et 443 de l'adresse publique sont restés fermés jusqu'au jour de la validation. Aucun lancement en douceur n'est possible.

- before: Cette règle commande tout le reste. Elle détermine le cloud et le compte à ouvrir, et s'il vous faut une société chinoise avant de transférer le moindre fichier.
+ after:  Tout le reste en découle : quel cloud retenir, quel compte ouvrir, et s'il faut une société chinoise avant de transférer le moindre fichier.

- before: Tout ce qui suit en découle. Notre guide sur [...] dresse le tableau d'ensemble des serveurs et de la latence, et [...] explique comment nous menons les projets sur cette stack.
+ after:  La suite de ce guide part de ce principe. Notre guide sur [l'hébergement d'un site web en Chine](/fr/ressources/guide-web-chine/heberger-site-web-chine/) dresse le tableau d'ensemble des serveurs et de la latence, et [WordPress en Chine](/fr/wordpress-en-chine/) explique comment nous menons les projets sur cette stack.
why: relative clause chain shortened; "en découle" no longer repeated across two paragraphs.

## Change 5, benchmark block

- before: Ces chiffres sont ceux de ChinaWebFoundry, relevés sur des sites clients [...]. Aucun tiers ne les a mesurés, et mieux vaut le savoir avant de leur accorder du poids.
+ after:  Les chiffres qui suivent sont les nôtres. Ils proviennent de sites clients que nous avons migrés en Chine ou que nous y hébergeons, et aucun tiers ne les a mesurés, ce qu'il faut savoir avant de leur accorder du poids.

- before: Il manque encore à chacun de ces chiffres une condition que nous exigerions de n'importe quel autre banc d'essai. Le tableau la précise, chiffre par chiffre.
+ after:  Chacun de ces chiffres reste privé d'une condition que nous exigerions de tout autre banc d'essai. Le tableau indique laquelle, ligne par ligne.

- before: Les conditions manquantes figureront dans les études de cas que nous rédigeons en ce moment.
+ after:  Les conditions manquantes paraîtront dans les études de cas en cours de rédaction.

Blockquotes and benchmark table: kept as-is.

## Change 5, provider table

- before: Ce sont les options sur lesquelles les équipes étrangères nous interrogent le plus. Chaque ligne indique la contrainte qui tranche, et chacune s'appuie sur la page de l'éditeur lui-même. Nous avons vérifié chaque ligne le 29 septembre 2026, et nous recommencerons chaque trimestre.
+ after:  Ce sont les six options sur lesquelles les équipes étrangères nous interrogent le plus souvent. Chaque ligne indique la contrainte décisive et renvoie à la page de l'éditeur concerné. Nous les avons toutes vérifiées le 29 septembre 2026 et referons l'exercice chaque trimestre.

Table, after:

| Option | Serveurs sur le continent | Dépôt ICP | Compte et entité | Date de la page éditeur |
| --- | --- | --- | --- | --- |
| Alibaba Cloud (阿里云), site chinois, aliyun.com | Oui | Via Alibaba, sur un serveur continental souscrit pour 3 mois au moins | Compte aliyun.com ; entreprise immatriculée sur le continent ou résident du continent | Centre d'aide, 20 août et 24 septembre 2026 |
| Alibaba Cloud, site international, alibabacloud.com | Impossible pour un site déposé | Non pris en charge sur ce type de compte | Ouvrir un compte aliyun.com à la place | Centre d'aide, 20 août 2026 |
| Tencent Cloud (腾讯云) | Oui | Via Tencent, sur un serveur continental ; Lighthouse souscrit pour 90 jours au moins | Une seule entité déclarante par compte | Documentation, 30 janvier et 23 septembre 2026 |
| Huawei Cloud (华为云) | Oui | Via Huawei, sur un « serveur de dépôt » continental souscrit pour 3 mois au moins | Compte Chine continentale obligatoire ; les comptes internationaux ne peuvent pas déposer | Help Center, juillet et août 2024 |
| Vercel | Aucun | Non proposé. Une copie locale exige un hébergement continental et son propre dépôt | Sans objet chez Vercel | Base de connaissances, 11 septembre 2026 |
| Cloudflare | Uniquement via le China Network, exploité par JD Cloud | Un dépôt ou une licence valide par domaine racine | Offre Enterprise ; examen préalable du contenu par JD Cloud | Documentation développeurs, avril 2026 |

why: "Déposé via" repeated the column header; cells now read as table French, header no longer dangles on "datée du".

- before: Pour un site WordPress qui doit vivre sur le continent, le vrai choix se joue entre la première, la troisième et la quatrième ligne.
+ after:  Pour un site WordPress appelé à vivre sur le continent, le choix réel se résume aux première, troisième et quatrième lignes.

## Change 6, no managed WordPress

- before: ## Aucun WordPress infogéré en Chine continentale
+ after:  ## Aucune offre WordPress infogérée en Chine continentale

- before: Aucun ne vend d'offre WordPress qui applique les correctifs à votre place ou réponde à un ticket sur une extension.
+ after:  Aucun ne commercialise d'offre WordPress qui installe les correctifs à votre place ou traite un ticket portant sur une extension.

- before: Tous trois vendent une image WordPress en un clic, posée sur un serveur virtuel d'entrée de gamme.
+ after:  Ce que tous trois proposent, c'est une image WordPress installable en un clic sur un serveur virtuel d'entrée de gamme.

- before: | Fournisseur | Produit | Ce que l'image installe | Page de l'éditeur mise à jour le |
+ after:  | Fournisseur | Produit | Ce que l'image installe | Mise à jour de la page éditeur |

- before: Regardez de nouveau la troisième colonne. [...] Les mises à jour et les sauvegardes vous reviennent, tout comme la préproduction et la recherche de quelqu'un capable de lire un conflit d'extensions.
+ after:  Revenez à la troisième colonne. Chaque ligne décrit un système d'exploitation avec WordPress préinstallé. Mises à jour et sauvegardes restent à votre charge, comme la préproduction, et il vous revient de trouver quelqu'un capable de démêler un conflit d'extensions.

- before: Quelqu'un chez vous fera donc de l'administration système chaque mois, aussi longtemps que le site vivra. C'est une charge permanente. Inscrivez-la au budget dès le cadrage.
+ after:  Quelqu'un chez vous assurera donc l'administration système tous les mois, pendant toute la vie du site. La charge est permanente : inscrivez-la au budget dès le cadrage.
why: "la recherche de quelqu'un" was a noun chain lifted from English; verbs instead.

## Change 7, the filing and the licence

- before: Alibaba Cloud et Tencent Cloud inscrivent tous deux la règle dans leur propre documentation.
+ after:  Alibaba Cloud comme Tencent Cloud écrivent la règle noir sur blanc dans leur documentation.

- before: [...] faute de quoi il est intercepté par le dispositif de Tencent Cloud qui surveille les domaines non déposés.
+ after:  [...] faute de quoi il est intercepté par le système de Tencent Cloud chargé de repérer les domaines non déposés.

- before: Le détail des ports vient de nous : [...]
+ after:  La précision sur les ports vient de nous : sur nos projets, cette interception ferme les ports 80 et 443. Impossible de montrer au client un lien de préproduction sur le serveur de production, impossible de mener une bêta discrète pendant que le dossier avance.

- before: [...] et le site doit accomplir son enregistrement auprès de la sécurité publique (公安备案) [...]
+ after:  [...] et le site doit effectuer sa déclaration auprès de la sécurité publique (公安备案) dans les 30 jours suivant sa mise en ligne.

- before: Rassembler les pièces prend du temps et les dossiers reviennent pour correction : nous prévoyons donc trois à six semaines, [...] décrit les pièces à réunir et l'ordre dans lequel les soumettre.
+ after:  Mais réunir les pièces prend du temps, et les dossiers reviennent pour correction : nous tablons donc sur trois à six semaines, à condition que l'entité continentale existe déjà. Notre [guide du dépôt ICP](/fr/ressources/guide-web-chine/licence-icp-entreprises-etrangeres/) détaille les documents requis et l'ordre de leur présentation.

- before: Source : administration des communications de Shanghai, guide de procédure, juin 2015.
+ after:  Source : administration des communications de Shanghai, guide des démarches, juin 2015.

- before: Le délai court à partir de l'acceptation, et l'acceptation suppose un dossier complet. Nous prévoyons douze à dix-huit semaines pour celle-là.
+ after:  Le délai court à compter de l'acceptation, laquelle suppose un dossier complet. Pour cette licence, nous comptons douze à dix-huit semaines.

- before: La détention étrangère est l'autre question que soulève une licence.
+ after:  Reste la question du capital étranger, que toute licence soulève.

- before: Un dépôt ICP se fait au nom d'une entreprise immatriculée sur le continent, [...] et aucun budget d'hébergement ne remplace l'entité.
+ after:  Le dépôt ICP est établi au nom d'une entreprise immatriculée sur le continent, ou d'un résident pour un site personnel. Une société étrangère ne peut pas déposer en direct, et aucun budget d'hébergement ne tiendra lieu d'entité.
why: repeated "l'acceptation" and the "X est l'autre question" calque replaced; "réunir" no longer used twice.

## Change 8, the cloud account

- before: ## Le compte cloud qui ne peut pas héberger votre site
+ after:  ## Ce compte cloud qui ne peut pas héberger votre site

- before: Alibaba exploite deux sites aux marques presque identiques. alibabacloud.com est le site international, aliyun.com le site chinois, et seul le second permet le dépôt.
+ after:  Alibaba exploite deux sites à l'image de marque presque identique : alibabacloud.com, le site international, et aliyun.com, le site chinois. Seul le second permet le dépôt.
why: a French sentence should not open on a lowercase domain.

- before: L'inscription qui paraît naturelle, sur le site anglophone que la recherche vous sert en premier, produit donc [...] Ceux qui découvrent y perdent des semaines, et ils s'en aperçoivent en général quand [...]
+ after:  L'inscription la plus naturelle, sur le site anglophone que le moteur de recherche affiche en premier, débouche donc sur un compte incapable de déposer le site en construction. Qui est passé par là une fois le sait par cœur. Les néophytes y perdent des semaines. En général, ils s'en rendent compte le jour où quelqu'un cherche l'écran de dépôt sans le trouver, quand le serveur est déjà payé et la date de lancement arrêtée.

- before: Chez Tencent Cloud (腾讯云), la règle documentée porte sur le serveur. Les pages de Tencent que nous avons consultées ne disent rien des comptes internationaux, dans un sens comme dans l'autre, et nous n'en dirons donc rien non plus.
+ after:  Chez Tencent Cloud (腾讯云), la règle écrite concerne le serveur. Les pages consultées restent muettes sur les comptes internationaux, dans un sens comme dans l'autre : nous n'en dirons donc rien.

- before: > Une instance Lighthouse [...] est éligible au dépôt ICP si elle est souscrite pour 90 jours au moins, avec au minimum 30 jours restants pendant l'examen du dossier.
+ after:  > Une instance Lighthouse située dans une région continentale est éligible au dépôt ICP à condition d'être souscrite pour 90 jours au moins et de conserver 30 jours de validité minimum pendant l'examen du dossier.

Other blockquotes in this section: kept as-is.

## Change 9, Vercel and Cloudflare

- before: ## Vercel, Cloudflare et la périphérie à l'étranger
+ after:  ## Vercel, Cloudflare et les points de présence à l'étranger
why: "périphérie" for "edge" is a calque; "points de présence" is the French trade term and already used on this page.

- before: Un CDN mondial rapproche des copies de vos pages, à Hong Kong ou à Tokyo, ce qui aide. Il ne change rien aux hôtes bloqués que la page appelle elle-même.
+ after:  Un CDN mondial place des copies de vos pages plus près, à Hong Kong ou à Tokyo, et cela aide. Les hôtes bloqués que la page appelle elle-même, en revanche, restent bloqués.

- before: Vercel revient aussi dans la conversation, puisque nombre de sites Astro et Next.js y sont hébergés. Sa propre base de connaissances répond clairement.
+ after:  La question de Vercel se pose aussi, tant de sites Astro et Next.js y sont hébergés. Sa base de connaissances y répond sans ambiguïté.

- before: > GreatFire considère https://vercel.app comme bloqué en Chine continentale lors de ses 4 derniers tests concluants sur 4, le plus récent le 14 septembre 2026. Sur 157 URL testées sur le domaine, 154 apparaissent bloquées.
+ after:  > Selon GreatFire, https://vercel.app est bloqué en Chine continentale à chacun de ses 4 derniers tests concluants, le plus récent datant du 14 septembre 2026. Sur 157 URL testées sous ce domaine, 154 apparaissent bloquées.

- before: Vercel suggère lui-même un domaine personnalisé à la place de .vercel.app, des polices et une mesure d'audience auto-hébergées et, pour un site qui doit être performant en Chine, [...] cités plus haut [...]
+ after:  Vercel recommande lui-même un domaine personnalisé plutôt que .vercel.app, des polices et un outil d'analyse auto-hébergés et, pour un site qui doit tenir ses performances en Chine, une copie distincte sur une infrastructure continentale, dotée de son propre dépôt ou de sa propre licence ICP. Cette dernière option revient à exploiter un second site, sur l'un des trois clouds continentaux évoqués plus haut ou chez un autre hébergeur du continent.

- before: Pour un site hébergé sur le continent, la réponse la plus simple reste en général le CDN domestique rattaché au cloud sur lequel vous êtes déjà. Il fonctionne sous le dépôt que vous détenez déjà et maintient toute la chaîne chez un seul fournisseur.
+ after:  Pour un site hébergé sur le continent, la réponse la plus simple reste en général le CDN domestique rattaché au cloud qui vous héberge. Il s'appuie sur le dépôt déjà obtenu et garde toute la chaîne chez un seul fournisseur.

Vercel and Cloudflare blockquotes and the Cloudflare plans paragraph: kept as-is.

## Change 10A

Kept as-is.

## Change 10B

- before: La dépense réelle se loge ailleurs. Il faut créer ou entretenir l'entité continentale, et la préparation des pièces comme le passage de la vérification absorbent des heures de travail. Après le lancement, une personne nommément désignée se connecte mois après mois à la console du cloud pour maintenir le site à jour et sauvegardé.
+ after:  La vraie dépense est ailleurs. L'entité continentale doit être créée ou entretenue, et la préparation du dossier comme la vérification engloutissent des heures de travail. Une fois le site lancé, une personne désignée se connecte chaque mois à la console du cloud pour appliquer les mises à jour et lancer les sauvegardes.

## Change 10C

- before: Le serveur est le poste le plus modeste. Les coûts qui comptent sont l'entité et le travail de dépôt, puis, après le lancement, la personne qui s'occupe du serveur.
+ after:  Le serveur est le poste le plus modeste. Ce qui pèse, c'est l'entité et le travail de dépôt, puis, une fois le site lancé, la personne qui s'occupe du serveur.

Step 2 complete.
