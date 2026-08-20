---
title: "Construire un flux produit pour Baidu"
subtitle: "La tâche arrive avec des airs de formalité. Faire entrer le catalogue dans Baidu Merchant Center. Puis vous cherchez le plugin et il n'existe pas. Aucune extension WooCommerce pour cela, ni gratuite ni payante. L'export relève du développement sur mesure, écrit contre une spécification de 2019 qui vit pour l'essentiel derrière un identifiant."
summary: "Comment se structure un flux produit Baidu, les cinq façons de le charger, et les règles de champs qui cassent en silence un export WooCommerce ou headless."
visual: "/images/guides/baidu-product-feed.webp"
order: 19
published: true
publishedAt: 2026-08-14
updatedAt: 2026-08-14
category: Search
---

Baidu Merchant Center (百度商品中心, Bǎidù Shāngpǐn Zhōngxīn) stocke des enregistrements produit que les systèmes publicitaires de Baidu relisent à la demande. Votre flux constitue l'entrée : un fichier défectueux arrête tout ce qui suit.

> La Chine comptait 937 millions d'acheteurs en ligne en décembre 2025, soit 83,2 % de ses 1,125 milliard d'internautes.
>
> *Source : China Internet Network Information Center, 57e rapport statistique, 17 mars 2026*

Voilà le marché qui se trouve de l'autre côté du fichier, atteint par les annonces produit payantes que ces données alimentent. L'essentiel du chantier se joue sur des problèmes dont personne ne vous a averti.

## Quatre objets, et c'est la plus petite dotation qui fait mal

La structure descend sur trois niveaux. Un catalogue (目录, mùlù) contient des fichiers produit (商品文件, shāngpǐn wénjiàn), et un fichier contient des produits (商品, shāngpǐn), jusqu'à un million. Personne n'approche celui-là.

Un nouveau compte reçoit trois catalogues, et ce chiffre finit par façonner la conception. Un catalogue par marque plus un par langue meurt avant que quiconque n'écrive une ligne de code.

Le quatrième objet ne relève pas du stockage. Un groupe de produits (商品组, shāngpǐn zǔ) est un sous-ensemble filtré que ciblent les campagnes. Il se comporte comme un segment enregistré. Baidu conseille de maintenir chaque groupe sous les 100 000 produits, et c'est ce plafond-là que vous pouvez réellement atteindre. Un groupe défini comme tout ce qui est en stock le franchit immédiatement sur un grand catalogue. Choisissez vos champs de filtrage avec cette limite en tête.

## Baidu documente cinq voies d'entrée et en déconseille une

La saisie en ligne se fait par le formulaire de la console, que Baidu réserve aux catalogues de moins de 100 produits. Si vous lisez ces lignes, elle n'est pas pour vous.

Le téléversement manuel accepte un fichier que vous produisez : Excel jusqu'à 10 Mo, XML et CSV jusqu'à 50 Mo. Votre CSV doit être en UTF-8, ce qui mérite une double vérification sur toute chaîne qui passe par Excel sous Windows.

La synchronisation de fichier planifiée est l'option où atterrissent la plupart des intégrations. Vous hébergez le fichier, Baidu le récupère, et le plafond bondit à 8 Go, en XML et CSV uniquement à cette taille. Une condition mérite d'être posée tôt devant vos équipes d'infrastructure : les plages d'adresses IP de Baidu doivent figurer sur la liste blanche de votre serveur. C'est un ticket pare-feu, pas une modification de code, la même famille de problèmes qui empêche Baiduspider de vérifier un site derrière un WAF agressif, et cela peut survivre au développement lui-même.

Quatrième voie, l'intégration API, où la réponse honnête reste maigre : Baidu nomme le chemin, mais aucun document public n'en porte le détail opérationnel. Cadrez-la avec la personne qui gère votre compte publicitaire.

Cinquième voie, l'exploration sur mesure, où Baidu vient lui-même récupérer vos pages produit. Baidu ne la recommande pas, ce qui vous indique le niveau de support qu'elle recevra.

La fréquence de synchronisation se choisit dans un menu : toutes les 15 minutes, toutes les heures jusqu'à toutes les 12 heures, quotidienne ou hebdomadaire. Le quart d'heure existe et convient rarement, car un flux régénéré toutes les quinze minutes sur une boutique en production publie chacune de vos erreurs de données passagères.

## Vous ne pouvez pas cadrer le mapping tant que vous ne lisez pas le dictionnaire

Baidu fournit 11 modèles de données sectoriels. Chacun attend un jeu de champs différent, et se tromper de modèle impose un remapping plus tard. Le dictionnaire complet vit derrière un identifiant, sur un compte publicitaire disposant de la permission Merchant Center. Tant que personne ayant cet accès n'a exporté le modèle de votre secteur, tout mapping que vous écrivez relève de la conjecture. Les équipes qui cadrent à partir d'un résumé anglophone le refont ensuite.

## Les règles de champs qui cassent les intégrations réelles

Peu de ce qui déraille ici sort de l'ordinaire. Cela échoue simplement en silence.

La clé unique s'appelle outerid, et elle doit être unique au sein du catalogue. Les doublons ne déclenchent aucune erreur. Le téléversement le plus récent n'est pas importé, et la ligne que vous pensiez avoir mise à jour conserve ses anciennes valeurs. Quand les compteurs d'import ne correspondent pas aux compteurs d'export, commencez par là.

Les URL obéissent à trois règles, toutes absolues. Le champ de page de destination s'appelle loc et doit porter le protocole, un domaine nu échoue donc. Aucune URL ne peut contenir de caractères chinois, ni dans le chemin ni dans une chaîne de requête, ce qui disqualifie toute une catégorie de boutiques localisées jusqu'à réécriture des permaliens. Et le domaine du flux doit correspondre au domaine enregistré sur le compte publicitaire : un hôte de préproduction oublié ne passera pas, pas plus que le sous-domaine régional qu'utilisent bien des marques internationales pour la Chine. Vérifiez contre quel domaine le compte publicitaire a été ouvert avant que quiconque ne mappe une URL.

La règle suivante a l'air de rien. Les champs facultatifs peuvent rester vides ou être supprimés du fichier, mais ils ne doivent jamais être remplis d'un zéro. Les exporteurs adorent le zéro. C'est la valeur de repli par défaut de bien des bibliothèques de sérialisation, et il transforme un champ vide en valeur que Baidu lit comme réelle.

Les images ont un plancher de 480 sur 320 pixels pour la grande. L'image principale va dans le champ image et les supplémentaires dans des champs moreimage, et le format créatif à trois images en réclame au moins trois par produit. Un catalogue livrant une seule photo par référence s'est fermé ses propres formats publicitaires. Le filtrage s'appuie sur CustomLabel1 à CustomLabel5, avec des champs personnalisés au-delà. Remplissez les libellés avant le premier téléversement, puisque les groupes de produits se construisent dessus.

## Deux réglages WooCommerce par défaut que Baidu rejette

Les permaliens d'abord. Une boutique dotée d'une localisation chinoise fabrique ses slugs à partir du titre produit chinois, ce qui place par défaut des caractères chinois dans chaque URL produit. Face à la règle d'URL de Baidu, il ne s'agit pas d'un échec partiel. C'est chaque ligne du fichier. Le correctif consiste en un schéma de permaliens produisant des slugs ASCII, appliqué avant de générer un flux, ce qui implique aussi une table de redirections sur une boutique établie.

Les variations forment le second cas. Elles héritent souvent du SKU parent ou le partagent. Mappez le SKU directement sur outerid et elles entrent en collision, et comme les doublons échouent en silence, vous obtenez un téléversement réussi contenant une fraction de ce que vous avez envoyé. Construisez plutôt une clé composite, parent plus variation, stable d'un export à l'autre.

Les stacks headless évitent le piège des permaliens et rencontrent tout le reste à l'identique, puisque ni la règle de domaine ni celle du zéro ne se soucient de ce qui a produit la page.

## Ce qui décide réellement du calendrier

Deux éléments tournent ici sur l'horloge de quelqu'un d'autre, et aucun ne relève du code. La permission de compte doit être activée avant que quiconque ne voie votre modèle sectoriel, et la liste blanche d'adresses IP doit aboutir avant qu'une synchronisation planifiée ne récupère quoi que ce soit. Lancez les deux dès la première semaine.

Le code peut se valider sans attendre ni l'un ni l'autre. Téléversez à la main quelques centaines de produits en CSV et lisez ce qui revient.

La documentation Merchant Center de Baidu date de 2019 : contrôlez chaque nom de champ contre le modèle qu'exporte votre propre compte.
