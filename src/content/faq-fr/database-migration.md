---
question: "Comment se déroule la migration de la base de données ?"
order: 16
category: "technical"
---

Le déroulé tient en quatre temps : export via WP-CLI ou dump MySQL, remplacement des URL compatible avec les données sérialisées, transfert chiffré par SSH ou SCP vers le serveur chinois, puis contrôle d'intégrité table par table. Pour les bases volumineuses, nous passons en synchronisation incrémentale afin de limiter la coupure à quelques minutes.

Le vrai sujet, c'est l'encodage. Nous vérifions l'UTF-8mb4 après transfert, nous ne le supposons jamais. Un encodage qui dérape et tous vos caractères chinois partent en fumée : le rattrapage a posteriori est long et pénible. Nous faisons le test plusieurs fois avant la bascule finale.
