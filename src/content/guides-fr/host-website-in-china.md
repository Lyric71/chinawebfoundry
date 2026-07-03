---
title: "Héberger un site web en Chine : le guide complet"
subtitle: "Là où se trouve physiquement votre serveur, tout se joue : votre page d'accueil s'affiche en moins d'une seconde pour un visiteur chinois, ou celui-ci renonce devant un écran qui tourne dans le vide."
summary: "Pourquoi l'hébergement à l'étranger échoue en Chine, les règles de l'ICP et de l'entité, Alibaba Cloud face à Tencent Cloud et à l'étranger, et une checklist de lancement étape par étape."
visual: "/images/guides/host-website-in-china.webp"
order: 14
published: true
publishedAt: 2026-07-03
updatedAt: 2026-07-03
category: Hosting
---

Votre site s'affiche sans accroc partout, sauf sur le seul marché pour lequel vous l'avez pensé. Ouvrez-le depuis Shanghai : ça rame. Ça rame encore. Et parfois la page ne se charge jamais.

Neuf fois sur dix, la cause tient à l'hébergement. L'endroit où se trouve physiquement votre serveur décide de tout : votre page d'accueil s'affiche en moins d'une seconde pour un visiteur chinois, ou il baisse les bras devant un écran qui tourne. Ce guide explique pourquoi l'hébergement à l'étranger casse en Chine, ce qu'il vous faut légalement avant de pouvoir héberger sur le continent, ce que valent les grands fournisseurs et dans quel ordre tout enchaîner.

L'essentiel de ce qui suit prolonge notre guide de référence, La localisation d'un site web pour la Chine. Si vous ne l'avez pas encore lu, commencez par lui, puis revenez pour les détails d'hébergement.

## Pourquoi héberger votre site en Chine

Trois raisons, et elles se cumulent.

La vitesse d'abord. Quand votre serveur se trouve en Virginie ou à Francfort, chaque requête d'un internaute chinois doit franchir le Grand Pare-feu (防火长城). Ce franchissement n'a rien d'un saut net. Le trafic est étranglé, les négociations SSL expirent en cours de route, et le moindre script ou la moindre police tirés d'un service étranger bloqué (Google Fonts, le cas d'école) restent tout bonnement en rade. La page ne plante pas bruyamment. Elle stagne, à moitié dessinée, jusqu'à ce que le visiteur s'en aille.

> Mesurés depuis Shanghai sur un hébergement étranger, les sites se chargent couramment en 8 à 15 secondes. Basculés sur des serveurs du continent, les mêmes sites passent sous la seconde.
> Source : mesures de lancement ChinaWebFoundry, Shanghai.

Le référencement ensuite. Baidu (百度) est le moteur qui compte ici, et il juge un site hébergé sur le continent et enregistré à l'ICP plus légitime qu'un site servi depuis l'étranger. Sans hébergeur local ni enregistrement, Baidu vous indexera mal, aussi soigné que soit votre travail on-page.

> Baidu détient environ la moitié du marché chinois de la recherche. Google reste sous les 3 %.
> Source : Statcounter Global Stats, Chine, 2024.

Le Pare-feu lui-même, enfin. Même une installation étrangère rapide reste fragile derrière lui. Les extensions qui appellent un point d'accès bloqué cassent sans un bruit. Un CDN que vous payez cher se fait étrangler à la frontière. Héberger en Chine balaie toute cette famille de problèmes d'un coup, puisque vos ressources sont déjà du bon côté du mur.

## Les 3 conditions légales avant de pouvoir héberger

Impossible de louer un serveur sur le continent et d'y faire simplement pointer votre domaine. Trois préalables, et aucun ne se contourne.

**1. Une entité commerciale chinoise.** L'enregistrement ICP est adossé à une entité immatriculée en Chine. Une société étrangère sans présence locale ne peut pas déposer seule. Si vous n'avez pas encore d'entité, rien n'est perdu, des voies existent, mais c'est le premier verrou et autant le savoir d'emblée.

**2. Un domaine, en .cn ou en .com.** Le domaine doit passer une vérification d'identité réelle, et le titulaire enregistré doit être, au caractère près, l'entité déclarante. Une discordance à ce stade compte parmi les causes les plus fréquentes de blocage d'un dossier, avant même qu'il n'atteigne le régulateur.

**3. L'enregistrement ICP lui-même.** C'est le seul vraiment incontournable. L'ICP Bei'an (备案) est le registre que tout site hébergé sur le continent doit porter, sous l'autorité du ministère de l'Industrie et des Technologies de l'information (工业和信息化部), le MIIT. Un site informatif se contente du Bei'an standard. Un site marchand, avec de vraies transactions, exige la licence ICP commerciale, plus complète (经营许可证), et plus longue à obtenir.

> Le Bei'an ICP standard s'obtient en général en 3 à 22 jours ouvrés, avec de fortes variations selon la province. Shanghai peut valider en 3 jours environ ; Pékin tourne souvent plus près de 15.
> Source : documentation de dépôt Alibaba Cloud, MIIT.

Un détail que l'on oublie souvent : dans les 30 jours suivant la mise en ligne sur un hébergeur du continent, vous déposez aussi un enregistrement auprès de la sécurité publique (公安备案) auprès des autorités locales. Pour le déroulé complet du dépôt, des options d'entité et de la préparation des pièces, lisez notre guide dédié à la licence ICP. Cette page tient pour acquis que vous savez qu'il arrive.

## Options d'hébergement en Chine : Alibaba Cloud, Tencent Cloud ou l'étranger

Trois voies réalistes, selon que vous détenez déjà un ICP ou non, et selon qui est vraiment votre audience.

| Option              | Chargement en Chine | ICP requis | SEO Baidu | Idéal pour                            |
| ------------------- | ------------------- | ---------- | --------- | ------------------------------------- |
| Continent (Aliyun)  | Moins d'1 s         | Oui        | Fort      | Une implantation sérieuse et durable  |
| Continent (Tencent) | Moins d'1 s         | Oui        | Fort      | Les projets centrés sur WeChat        |
| Hong Kong           | 2 à 4 s             | Non        | Minimal   | Faire le pont pendant l'instruction   |
| États-Unis / Europe | 8 à 15 s et plus    | Non        | Nul       | Rien, pour une audience chinoise      |

**Alibaba Cloud (Aliyun, 阿里云)** s'impose par défaut auprès de la plupart des marques étrangères qui entrent en Chine pour de bon. Le plus large éventail de régions sur le continent, une console anglophone rodée et un système de dépôt qui vous guide dans le Bei'an sans quitter la plateforme. L'atout concret : la couverture, et le fait que tout, serveur comme dépôt, tienne au même endroit.

**Tencent Cloud (腾讯云)** talonne de près, et l'emporte souvent dès que le projet s'appuie sur l'écosystème WeChat (微信), dont il est nativement plus proche. Les performances valent celles d'Aliyun à gamme égale. Ce qui tranche, d'ordinaire, c'est l'adéquation à l'écosystème, pas la fiche technique.

**Huawei Cloud (华为云)** fait une troisième option crédible sur le continent, en particulier pour les équipes déjà rangées sur l'infrastructure Huawei.

**L'étranger, Hong Kong compris,** s'affranchit complètement de l'ICP, et c'est tout son intérêt. Hong Kong sert de pont commode : avec un CDN et une couche de cache corrects, vous tombez à 2 ou 4 secondes de chargement sur le continent, sans plus, mais à des années-lumière d'un site servi depuis Francfort. Beaucoup d'équipes tournent sur Hong Kong le temps de l'instruction, puis migrent.

Côté prix, gardez-vous de lire les tarifs du cloud chinois au premier degré. Les chiffres d'appel, ces serveurs d'entrée de gamme affichés à quelques dizaines de yuans par an, sont des tarifs promotionnels réservés aux nouveaux clients, sur les plus petites machines.

> Les serveurs cloud d'entrée de gamme des grands fournisseurs chinois affichent une première année en promotion, entre 38 et 200 yuans environ. Une configuration de production réelle, pour un site professionnel, coûte nettement plus.
> Source : tarifs fournisseurs publiés de 2025 à 2026, Aliyun et Tencent Cloud.

L'ergonomie en anglais pèse aussi dans la balance. La console internationale d'Aliyun reste la plus accueillante des trois pour un étranger. Toutes supposent le chinois sur certaines parties du dépôt, ce qui explique en bonne part pourquoi les équipes confient ce morceau à un partenaire local.

## L'accélérer : CDN chinois et diffusion en périphérie

Un bon hébergement sur le continent rapproche votre serveur d'origine des internautes. Un CDN chinois met en cache vos fichiers statiques, images, scripts, feuilles de style, sur des nœuds répartis dans tout le pays : ils se chargent depuis quelques centaines de kilomètres, au lieu de traverser d'abord le Pacifique dans les deux sens.

Alibaba Cloud CDN et Tencent Cloud CDN forment les choix habituels, et à juste titre : ils s'apparient proprement avec l'hébergeur maison et sont réglés pour le routage continental.

Voici le piège qui surprend. Un CDN chinois ne dispense pas du dépôt. Pour servir du contenu en cache depuis des nœuds du continent, le domaine du CDN réclame sa propre couverture ICP, comme le serveur d'origine. Certaines équipes croient que le CDN les affranchit du Bei'an. Il n'en fait rien. Dépôt et diffusion en périphérie avancent de pair.

Bien mené, le gain saute aux yeux. Des images produit qui arrivaient au compte-gouttes se chargent dans l'environnement même où se tient votre acheteur, et une page lourde se met à paraître légère.

## Étape par étape : lancer votre site sur le continent chinois

L'ordre compte, car chaque étape repose sur la précédente. Brûlez-en une et vous calez.

**1. Constituer l'entité.** Assurez-vous d'une entité commerciale immatriculée en Chine, ou préparez la voie pour en obtenir une. Rien ne démarre tant qu'elle n'existe pas.

**2. Enregistrer et vérifier le domaine.** Placez votre .cn ou votre .com chez un bureau d'enregistrement, passez la vérification d'identité réelle et veillez à ce que le titulaire colle exactement à l'entité.

**3. Déposer l'ICP.** Soumettez le Bei'an via le système de votre hébergeur. Le dépôt informatif standard va plus vite ; la licence commerciale prend son temps, alors anticipez-la tôt si vous vendez.

**4. Provisionner l'hébergement continental.** Montez votre serveur sur Aliyun, Tencent Cloud ou Huawei Cloud, et taillez-le pour l'environnement chinois : SSL compatible Chine, polices auto-hébergées, aucun appel tiers bloqué.

**5. Brancher le CDN.** Ajoutez un CDN chinois doté de sa propre couverture de dépôt, et pointez-y vos ressources statiques.

**6. Déposer l'enregistrement de sécurité publique.** Dans les 30 jours suivant la mise en ligne, effectuez le 公安备案 auprès de l'autorité locale, puis inscrivez en pied de page le numéro ICP et le numéro de sécurité publique.

**7. Mettre en ligne et surveiller depuis l'intérieur de la Chine.** Vérifiez que le site file depuis de vrais points du continent, pas seulement depuis un outil de test posté hors du Pare-feu, qui vous jurera que tout va bien pendant que vos visiteurs de Shenzhen fixent un écran vide.

## Choisir le meilleur hébergement chinois pour votre activité

Le bon dispositif dépend surtout de votre avancement dans le processus et de ce que fait votre site.

Vous bâtissez une présence sérieuse et durable, et le référencement naturel fait partie du plan ? Allez droit à l'hébergement continental sur Aliyun ou Tencent Cloud, avec un dépôt en règle. C'est le dispositif qui se classe pour de bon sur Baidu et se charge comme les internautes chinois l'attendent.

Vous devez être en ligne pour hier et votre ICP traîne encore ? Démarrez sur Hong Kong en guise de pont, glissez un CDN et du cache devant, et programmez la migration vers le continent une fois le dossier validé.

Vous vendez, il y a de vraies transactions ? Inscrivez la licence ICP commerciale à votre calendrier dès le premier jour, car c'est l'étape la plus lente à elle seule, et celle qui prend le plus souvent une équipe de court.

Et si tout cela, l'entité, le dépôt, la console en chinois, la surveillance depuis l'intérieur du mur, dépasse ce que vous tenez à câbler seul, c'est précisément notre métier. Dites-nous où vous en êtes : entité ou non, avancement de l'ICP, audience visée, calendrier envisagé. Nous revenons avec une recommandation d'hébergement taillée pour votre situation, pas une proposition passe-partout.
