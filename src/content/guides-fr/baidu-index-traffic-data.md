---
title: "Lire le volume d'index et les données de trafic de Baidu"
subtitle: "Deux semaines après le lancement, quelqu'un au marketing se connecte enfin à la Baidu Search Resource Platform. Volume d'index : zéro. Trafic et mots-clés : vide. Fréquence d'exploration : une ligne plate. La lecture évidente serait que le site est cassé. Il ne l'est généralement pas."
summary: "Ce que mesurent réellement les rapports de volume d'index, de trafic et de mots-clés de Baidu, la confiance à accorder à chacun, et quand un site neuf peut espérer des données."
visual: "/images/guides/baidu-index-traffic-data.webp"
order: 21
published: true
publishedAt: 2026-08-15
updatedAt: 2026-08-15
category: Search
---

Le versant reporting de la Baidu Search Resource Platform (百度搜索资源平台, Bǎidù Sōusuǒ Zīyuán Píngtái) n'est pas un tableau de bord au sens où vous l'entendez. C'est un ensemble d'instruments distincts partageant un même identifiant, chacun sur son horloge, plusieurs restant vides des semaines durant par construction.

## Le volume d'index est une courbe de tendance, pas un décompte de pages

Le volume d'index (索引量, suǒyǐn liàng) se cite en réunion plus que tout autre chiffre d'ici, et se lit de travers tout aussi souvent. Il indique combien de vos pages Baidu conserve. Ni lesquelles, ni un décompte exact. Baidu ne l'a jamais présenté autrement.

La granularité vaut mieux qu'on ne le suppose. Points quotidiens sur l'année écoulée, mensuels au-delà. De quoi retrouver la semaine où une migration a mal tourné, ce qui correspond à l'essentiel des besoins.

Ce que vous ne pouvez pas faire, c'est traiter deux jours consécutifs comme une mesure. Un mouvement d'un jour à l'autre est du bruit. Une baisse qui tient deux semaines mérite une réunion.

Un détail piège les entreprises qui exploitent un sous-domaine pays. Les données d'index au niveau du sous-domaine n'apparaissent que si le domaine racine est également vérifié, selon la documentation des agences sur la plateforme.

## Trafic et mots-clés reste vide tant que vous n'avez pas gagné de clics

Trafic et mots-clés (流量与关键词, liúliàng yǔ guānjiàncí) rapporte impressions et clics face aux requêtes qui les ont produits. C'est ce que Baidu offre de plus proche d'un rapport de performance, et cela surprend qui arrive de la Search Console.

La mesure est horaire, plus fine que la plupart ne l'imaginent, avec un décalage d'environ cinq heures. Le pic de 9 heures arrive en milieu d'après-midi.

La rétention forme la contrainte plus lourde. La fenêtre sur les mots-clés est de 30 jours et ne s'étend pas. Les données de mots-clés mobiles sont conservées environ trois mois. Une vue d'une année sur l'autre des requêtes qui ont amené du trafic, vous la construisez vous-même, en exportant à intervalles réguliers dès la semaine de lancement. La plupart des équipes l'apprennent trop tard.

Le rapport plafonne aussi à 50 000 lignes de mots-clés. Les sites vitrines ne le verront jamais. Un grand catalogue si, et la longue traîne tombe hors de l'export.

Vient ensuite la partie qui déclenche l'alarme. Ce rapport ne se remplit qu'une fois que le site gagne des clics, une barre plus haute qu'être exploré ou indexé. Un site neuf sans positions n'affiche rien, et rien constitue ici la lecture correcte.

> Environ 70 % des pages de résultats mobiles de Baidu contenaient du contenu généré par IA en octobre 2025.
>
> *Source : Baidu Inc., résultats du troisième trimestre 2025, 18 novembre 2025*

À garder en tête quand les clics arrivent plus lentement que les positions ne le laissent espérer. Votre lien n'est plus la seule chose sur la page.

## Fréquence et anomalies d'exploration réclament d'abord un robot

Plus bas dans le menu, la fréquence d'exploration et les anomalies d'exploration relèvent de l'observation. La fréquence montre à quel rythme Baiduspider revient, les anomalies montrent ce qu'il a rencontré en venant. Si le robot n'est pas passé, il n'y a rien à enregistrer, et une ligne plate signifie qu'il n'est jamais venu. Problème entièrement différent d'un robot venu et repoussé.

La distinction change la suite. Une courbe d'exploration plate sur un site de deux semaines n'est pas une raison de réécrire le contenu. C'est une raison de vérifier si Baiduspider peut seulement atteindre le serveur, question d'hébergement et de pare-feu.

Les anomalies d'exploration listent les URL en échec, et des sources professionnelles situent cette liste aux 1 000 premiers liens. Baidu n'a pas confirmé le chiffre : tenez-le pour une hypothèse de travail. Dans tous les cas, un site qui vient de casser un grand catalogue obtient un échantillon, pas un inventaire complet.

## Le diagnostic de crawl répond une URL à la fois, et il est rationné

Le diagnostic de crawl (抓取诊断, zhuāqǔ zhěnduàn) est le seul outil d'ici qui donne une réponse en direct. Il récupère une URL en se faisant passer pour Baiduspider, desktop ou mobile, et montre ce qui est revenu. Sur un site rendu en JavaScript, il met généralement fin au débat en un écran.

Deux limites façonnent son usage. Il capture les 200 premiers Ko du contenu, ce qui laisse une page lourde tronquée. Et le quota hebdomadaire de récupérations est rationné, les sources divergeant sur le chiffre : 优化猩 annonce 70 récupérations par semaine, Dragon Metrics en annonce 200. Nous budgétons sur la valeur basse.

La soumission de liens morts (死链提交, sǐliàn tíjiāo) forme le pendant de nettoyage. Alimentez-la en txt ou xml, jusqu'à 50 000 URL et 10 Mo, et le retrait intervient généralement entre trois jours et une semaine. Lancez-la après chaque migration, ou laissez Baidu trouver les 404 à son rythme.

## Que faire quand les rapports se contredisent

Ils se contrediront. Le volume d'index se situe généralement sous votre décompte de sitemap. Baidu Tongji (百度统计, Bǎidù Tǒngjì) affiche des sessions dont trafic et mots-clés ne rend jamais compte. Rien de tout cela n'est un bogue signalable.

Les rapports mesurent des choses différentes. Le volume d'index est une estimation sur une horloge quotidienne. Trafic et mots-clés tourne à l'heure, cinq heures en retard, et ne compte que les clics que Baidu attribue à la recherche organique. Tongji est une balise JavaScript qui compte les humains arrivés sur votre serveur par n'importe quelle voie. Aucune couche commune ne les relie.

Travaillez donc selon un ordre approximatif de confiance. Une récupération par diagnostic de crawl est ce qu'il y a de plus fiable sur la plateforme, parce que vous l'avez déclenchée et que la réponse est devant vous. Les données de clics viennent ensuite, puis le volume d'index, indicatif au mieux. Les affichages de quota méritent la confiance la plus faible : le texte de l'outil de soumission de Baidu annonce un plafond de 100 000 URL par jour, tandis que les praticiens documentent des allocations réelles tombées à 100.

Quand deux rapports divergent sur l'indexation d'une page, allez regarder les résultats de recherche. Une requête site: plus une récupération par diagnostic tranchent plus vite qu'un ticket de support.

Nous le disons aux clients en semaine un, et cela évite bien des frustrations plus tard. Le reporting de Baidu est moins précis que la Search Console de Google. Moins de dimensions, rétention plus courte, et aucune estimation n'arrive avec une idée de sa marge d'erreur. Organisez-vous autour de ce que l'outillage sait faire.

## Quand un site neuf peut espérer voir quelque chose

Commençons par ce qui va vite. La vérification prend de l'instantané à 24 heures, souvent dans la même session. Le diagnostic de crawl fonctionne juste après. Ouvrez celui-là en premier.

L'indexation initiale d'un site neuf demande deux à quatre semaines. Le volume d'index affiche couramment zéro pendant des jours ou des semaines dans cette fenêtre, et un site sans dépôt avance encore plus lentement. Si le numéro de dépôt ICP (备案号, bèi'àn hào) existe, saisissez-le dans les attributs du site dès le premier jour. Baidu conseille spécifiquement aux sites de moins de six mois de le soumettre.

Baidu ne publie aucun engagement de niveau de service là-dessus. Rien n'oblige le robot à un intervalle, et aucune fenêtre d'indexation n'est promise nulle part. Chacun des délais ci-dessus relève du comportement observé et non de l'engagement : la réponse honnête à « quand serons-nous indexés » prend donc la forme d'une fourchette assortie de conditions.

Les limites des rapports changent sans annonce : contrôlez les quotas sur la plateforme avant de bâtir un plan dessus.
