# /deep-translate FR, pass 1 (full native rewrite), 17 October 2026

Scope: the passages the B3 run corrected in English. Existing FR copy read
first; each changed passage re-authored from scratch in Les Echos register.
Unchanged tails of an answer stay as they were (TRANSLATION-RULES 1.2.2).
File convention kept: typographic apostrophe, plain space before ? : ;.

## P1 src/data/faq-fr.ts, ICP question and answer
- before Q: C’est quoi exactement la licence ICP ? En ai-je vraiment besoin ?
+ after Q:  Qu’est-ce que la licence ICP, au juste ? En avons-nous vraiment besoin ?
- before A: Oui, et sans raccourci possible. ICP (互联网内容提供商) signifie Internet Content Provider. C’est l’autorisation délivrée par le Ministère de l’Industrie et des Technologies de l’Information (工业和信息化部), exigée par la loi pour tout site hébergé sur le continent. Deux versions comptent : l’ICP Bei’an (备案) pour les sites d’information, l’ICP Jing Ying (经营许可证) pour les sites qui encaissent. Nous montons le dossier de bout en bout.
+ after A:  Oui, dès lors que le site est servi depuis un serveur du continent, même si la plupart des sites n’ont besoin que du dépôt. ICP (互联网内容提供商) signifie Internet Content Provider. Le ministère de l’Industrie et des Technologies de l’information (工业和信息化部) prévoit deux régimes : le dépôt ICP (ICP备案) pour les sites en accès libre, et la licence ICP (ICP许可证) pour ceux qui font payer l’information ou des services en ligne. Un site d’entreprise ne relève que du dépôt. Nous préparons le dossier de bout en bout.
why: "C’est quoi" is spoken; "qui encaissent" was the error the English fixed (the licence turns on charging users, Order 292 art 3); pinyin labels replaced by the house terms dépôt ICP / licence ICP.

## P2 src/data/faq-fr.ts, no entity yet (opening only)
- before: L’ICP (互联网内容提供商) se complique alors. Deux voies : créer une WFOE (外商独资企业), ou s’adosser à une entité chinoise prête à parrainer le dépôt. Nous avons accompagné les deux.
+ after:  Le dépôt doit alors attendre, puisqu’il se fait au nom d’une société ou d’un résident du continent. Deux voies : créer une WFOE (外商独资企业), ou confier le dépôt à une société chinoise partenaire, qui l’effectue en son nom ; le site apparaît alors comme le sien dans le registre. Nous avons accompagné les deux.
why: "parrainer le dépôt" carried the old, wrong idea of a sponsor; the record names the filing company as the site's operator.

## P3 src/data/faq-fr.ts, how long the filing takes (opening only)
- before: Le Bei’an (备案) prend en général 2 à 4 semaines. Le Jing Ying (经营许可证) demande 2 à 3 mois, parfois plus. La grande variable : la complétude de votre dossier.
+ after:  Nous tablons sur 3 à 6 semaines pour le dépôt ICP (ICP备案). Alibaba Cloud annonce 1 à 2 jours ouvrés pour son propre contrôle et, en général, 1 à 20 jours ouvrés pour l’examen provincial, sans compter le temps de réunir les pièces. La licence ICP (ICP许可证) est instruite dans les 60 jours suivant l’acceptation du dossier, et nous prévoyons 12 à 18 semaines. La grande variable : la complétude de votre dossier.
why: new figures (ours and Alibaba's, Shanghai CA's 60 days); "jours ouvrés" is the French term.

## P4 src/data/faq-fr.ts, performance gains
- before: Les sites lents migrés vers Aliyun (阿里云) passent en général de 12-15 secondes de chargement à moins de 2. Les développements neufs descendent sous la seconde sur les connexions continentales. L’indexation Baidu (百度) s’amorce d’ordinaire 2 à 4 semaines après la mise en ligne, avec une configuration SEO soignée.
+ after:  Nous ne promettons aucun temps de chargement avant d’avoir mesuré votre site. Les gains viennent de deux changements : l’hébergement sur le continent et la suppression des appels vers des hôtes que le Grand Pare-feu bloque ou ralentit. Notre audit stratégique mesure les deux avant tout devis. Côté Baidu (百度), nous prévoyons 2 à 4 semaines après la mise en ligne avant l’indexation des premières pages.
why: undated load times with no vantage point are on the Do Not Assert list; answer rebuilt around what we measure.

## P5 src/pages/fr/agence-wordpress-chine.astro, FAQ "timeline"
- before: Comptez 8 à 12 semaines du premier appel à la mise en ligne pour un nouveau site de marque. Migrer et localiser un site global existant demande 14 à 20 semaines, réécriture des contenus et indexation Baidu comprises. Le dépôt ICP prend 2 à 4 semaines et avance en parallèle du développement.
+ after:  Comptez 8 à 12 semaines du premier appel à la mise en ligne pour un nouveau site de marque, une fois l’entité chinoise constituée. Migrer et localiser un site global existant demande 14 à 20 semaines, réécriture des contenus et indexation Baidu comprises. Nous prévoyons 3 à 6 semaines pour le dépôt ICP, lancé dès la première semaine, en parallèle du développement.
why: corrected figure; entity condition added.

## P6 same page, process bullet
- before: Dépôt en 2 à 4 semaines, mené en parallèle du développement
+ after:  Dépôt prévu en 3 à 6 semaines, lancé dès la semaine 1, en parallèle du développement
why: corrected figure; the week-one start is the point of the piece.

## P7 same page, process paragraph
- before: Comptez 8 à 12 semaines de bout en bout pour un nouveau site de marque. La licence et le SEO avancent en parallèle du développement ; aucun chantier n’attend l’autre.
+ after:  Comptez 8 à 12 semaines de bout en bout pour un nouveau site de marque. Le dépôt ICP et le socle SEO avancent en parallèle du développement ; c’est l’obtention du numéro de dépôt qui fixe la date de mise en ligne.
why: "la licence" was the wrong instrument; "aucun chantier n’attend l’autre" was the claim the research contradicts.

## P8 src/pages/fr/agence-web-chine.astro, FAQ timeline (first sentence)
- before: Pour un site de marque ciblé, 8 à 12 semaines entre le lancement et la mise en ligne avec licence ICP.
+ after:  Pour un site de marque ciblé, 8 à 12 semaines entre le lancement et la mise en ligne, dépôt ICP compris.
why: a brand site needs the filing, not the licence.

Step 1 complete.
