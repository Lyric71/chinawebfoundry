---
question: "Comment fonctionne concrètement la migration de base de données ?"
order: 16
category: "technical"
---

Export via WP-CLI ou dump MySQL, rechercher-remplacer pour les URL (compatible sérialisation), transfert par SSH/SCP vers le serveur chinois, vérification d'intégrité de chaque table. Pour les grosses bases, synchronisation incrémentale afin de réduire le temps d'interruption.

Le point critique, c'est l'encodage. Il faut de l'UTF-8mb4 vérifié après transfert, pas simplement présumé. Si l'encodage dérape, les caractères chinois se corrompent partout, et corriger cela après coup est pénible. Nous testons ce point plusieurs fois avant la bascule.
