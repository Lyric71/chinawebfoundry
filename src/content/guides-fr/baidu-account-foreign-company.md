---
title: "Ouvrir un compte Baidu quand on est une entreprise étrangère"
subtitle: "Tout le monde vous prévient au sujet du numéro de téléphone chinois. Presque personne ne mentionne la pièce d'identité, qui est l'exigence sur laquelle butent les entreprises étrangères."
summary: "Le numéro de mobile chinois est l'obstacle dont tout le monde parle. La pièce d'identité est celle qui bloque vraiment les marques étrangères."
visual: "/images/guides/baidu-account-foreign-company.webp"
order: 27
published: true
publishedAt: 2026-08-18
updatedAt: 2026-08-18
category: Search
---

Avant de pouvoir vérifier un site, soumettre une URL ou lire le moindre chiffre d'index, il faut un compte Baidu ayant passé la vérification d'identité réelle (实名认证, shímíng rènzhèng). Ce compte n'est pas une formalité que l'on remet à plus tard. Depuis septembre 2023, il détermine si vos outils de soumission fonctionnent, et il constitue ce que Baidu tient de plus proche d'un titre de propriété sur votre ressource de recherche.

Comptez une journée pour la version facile. Plusieurs semaines pour la difficile.

## Le numéro de téléphone, l'obstacle célèbre

L'inscription chez Baidu passe par SMS. Les numéros étrangers ont cessé de fonctionner de façon fiable vers mai 2022, sans que le changement soit vraiment annoncé.

Ce qui se passe depuis reste assez irrégulier pour que le test l'emporte sur la planification. Les numéros de Hong Kong, Macao et Taïwan passent, d'après les retours, tout comme Singapour, le Japon, les États-Unis et le Canada. Les numéros européens, Allemagne, France et Italie comprises, ne passent pas, même si un numéro suisse a fonctionné l'an dernier chez l'un de nos clients. Le filtrage opérateur et les limitations par adresse produisent des échecs silencieux qui ressemblent trait pour trait à un mauvais numéro : une tentative ratée ne vous apprend donc pas grand-chose.

Les services de numéros virtuels comblent le vide et beaucoup d'agences y recourent. Ils constituent aussi un risque. Un numéro loué finit recyclé, les procédures de récupération en dépendent, et un compte que vous ne pouvez pas récupérer est un compte qui ne vous appartient pas.

## Le document qui vous bloque vraiment

Le numéro de téléphone vous donne un identifiant. La vérification d'identité réelle est ce qui en fait un compte opérationnel, et c'est là que la plupart des entreprises étrangères s'arrêtent.

Baidu accepte quatre documents personnels : la carte d'identité continentale, la carte de résident permanent pour étrangers (外国人永久居留证, wàiguórén yǒngjiǔ jūliú zhèng), le passeport détenu par les citoyens chinois résidant à l'étranger (华侨护照, huáqiáo hùzhào) et le permis de circulation vers la Chine continentale pour les résidents de Hong Kong, Macao et Taïwan (港澳台居民来往内地通行证, Gǎng Ào Tái jūmín láiwǎng nèidì tōngxíngzhèng). La documentation de Baidu est sans détour sur le reste :

> 上述外的其他证件暂不支持实名认证
>
> Les documents autres que ceux énumérés ci-dessus ne sont pas pris en charge pour la vérification d'identité réelle.
>
> *Source : Baidu, documentation sur la vérification d'identité réelle des comptes*

Un passeport britannique, français, allemand ou américain ordinaire ne figure pas sur la liste. Cette seule ligne explique pourquoi tant de marques étrangères finissent par emprunter une identité continentale, parfois sans mesurer ce qu'elles viennent de faire.

La vérification personnelle repose ensuite sur la reconnaissance faciale ou sur une carte bancaire chinoise. La vérification d'entreprise réclame un code de crédit social unifié (统一社会信用代码, tǒngyī shèhuì xìnyòng dàimǎ), autrement dit une véritable société chinoise. Elle réclame également le scan facial du représentant légal, ou un virement depuis le compte bancaire de l'entreprise.

## Pourquoi ce point a cessé d'être facultatif en 2023

Si les deux sections précédentes tiennent de l'administratif, celle-ci a des dents.

Pendant des années, un compte non vérifié n'était qu'un désagrément mineur. Puis, à l'automne 2023, Baidu a publié deux avis à dix-huit jours d'intervalle.

Le premier, début septembre 2023, a restreint les relations de vérification pour les comptes n'ayant jamais passé la vérification d'identité réelle. Le second a retiré leurs quotas de soumission au même groupe, fermant la soumission de sitemap et réduisant l'allocation quotidienne de l'API push. Des propriétaires de sites qui soumettaient des URL depuis des années ont ouvert la plateforme cet hiver-là et trouvé l'outil disparu. Aucun courriel d'avertissement.

L'enjeu n'a rien d'abstrait. Un compte sans vérification d'identité réelle peut perdre sa capacité à soumettre du contenu, et dans certains cas perdre aussi sa relation de vérification.

Une deuxième raison de s'en soucier, celle qui atterrit dans les boîtes des juristes :

> 实名认证直接影响账号和资源的归属
>
> La vérification d'identité réelle détermine directement la propriété du compte et de ses ressources.
>
> *Source : Baidu, documentation sur la gestion des comptes*

Baidu déconseille aux entreprises d'enregistrer un compte sous l'identité personnelle d'un salarié, précisément pour cette raison. L'identité rattachée au compte fait office de titre de propriété. Tout le reste relève du réglage de permissions.

## Les voies qui fonctionnent vraiment

Si vous avez une WFOE ou une coentreprise en Chine, servez-vous-en. La vérification d'entreprise contre votre propre code de crédit social unifié vous donne un compte que vous contrôlez, des collaborateurs que vous ajoutez et retirez, et aucune conversation gênante à la fin d'une relation avec une agence. Comptez quelques jours de paperasse, dont l'essentiel dort déjà dans un tiroir de votre service financier.

Sans entité, la réponse habituelle consiste à laisser votre agence chinoise enregistrer le compte sous sa propre licence. C'est rapide, c'est la pratique courante, et c'est le moment de négocier la sortie plutôt que de s'y prendre trois ans plus tard. Baidu ne publie aucune procédure de transfert de propriété. La voie de récupération concrète consiste à revérifier le domaine sous un nouveau compte, ce qui fonctionne puisque contrôler le fichier de vérification revient à contrôler le domaine, mais l'historique est à reconstruire.

La troisième voie, l'enregistrement sous une personne de confiance disposant d'une identité continentale, est la plus répandue et la plus fragile. Les gens changent de poste. Le compte part avec eux, et aucun ticket de support ne rattrape cela.

## Ce qu'il faut trancher avant que quiconque clique sur « s'inscrire »

C'est la partie qui coûte de l'argent plus tard si vous la sautez maintenant.

Demandez sous quelle identité le compte est enregistré, et obtenez la réponse par écrit. Demandez ce qu'il advient du compte à la fin de la mission. Demandez ensuite si votre équipe dispose de ses propres accès collaborateurs, ou d'un mot de passe partagé qui traîne dans un tableur.

Un accès collaborateur sur un compte correctement détenu est la réponse que vous voulez entendre. Les sous-utilisateurs n'ont pas besoin de leur propre vérification d'identité réelle, donc personne n'a de raison de partager des identifiants.

Baidu ajuste ses règles d'inscription et de vérification sans annonce : traitez les retours par pays sur les numéros de téléphone comme exacts aujourd'hui et instables demain.
