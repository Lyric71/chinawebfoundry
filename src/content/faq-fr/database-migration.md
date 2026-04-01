---
question: "Comment fonctionne concretement la migration de base de donnees ?"
order: 16
category: "technical"
---

Export via WP-CLI ou dump MySQL direct. Rechercher-remplacer pour les changements d'URL, compatible avec la serialisation evidemment - nous utilisons Search Replace DB d'interconnect/it ou le search-replace de WP-CLI. Le transfert vers le serveur chinois s'effectue par SSH/SCP. Apres import, nous verifions l'integrite de chaque table. Pour les grosses bases, nous synchronisons de facon incrementale afin de reduire au maximum le temps d'interruption.

C'est sur l'encodage que les problemes surgissent. Il faut de l'UTF-8mb4, et il faut verifier que le parametrage est effectivement correct, pas simplement supposer qu'il a survecu au transfert. Si l'encodage derape pendant la migration, les caracteres chinois se corrompent partout, et corriger cela apres coup est un travail veritablement penible. Nous testons ce point plusieurs fois avant la bascule. Ce n'est pas la partie la plus valorisante d'une migration, mais c'est celle qui peut ruiner votre semaine si vous la negligez.
