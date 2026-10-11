# FR, pass 2 (native rewrite from the French draft, English not consulted)

## A. table row
- before: | cdnjs, unpkg | Accessible | GreatFire ne relève de blocage sur aucun des deux. Aucun test publié depuis une ligne résidentielle |
+ after:  | cdnjs, unpkg | Accessible | Non bloqués selon GreatFire. Aucun test publié sur ligne résidentielle |
why: a table cell wants a nominal, clipped style; "ne relève de blocage sur aucun des deux" was heavy.

## B. probe sentence
- before: Le dernier test concluant de GreatFire sur ajax.googleapis.com depuis le continent, le 22 août 2026, a échoué. Six jours plus tard, une sonde de 21YunBox installée sur une instance Alibaba Cloud à Zhangjiakou a tenté trois fois d'ouvrir la page Hosted Libraries de Google : aucun premier octet n'est revenu avant l'abandon de chaque essai, à soixante secondes.
+ after:  Chez GreatFire, le dernier test concluant d'ajax.googleapis.com depuis le continent, mené le 22 août 2026, s'est soldé par un échec. Six jours plus tard, une sonde de 21YunBox hébergée chez Alibaba Cloud, à Zhangjiakou, a sollicité trois fois la page Hosted Libraries de Google sans recevoir le moindre octet ; chaque tentative a été abandonnée au bout de soixante secondes.
why: "s'est soldé par un échec" and "sans recevoir le moindre octet" are press French; the colon chain read like a calque.

## C. cdnjs and unpkg paragraph
- before: GreatFire considère `cdnjs.cloudflare.com` et `unpkg.com` comme non bloqués, d’après des tests du 27 septembre et du 14 août 2026. Aucun test publié ne porte sur une ligne résidentielle pour l’un ou l’autre : gardez donc leurs requêtes dans votre propre audit.
+ after:  Pour GreatFire, ni `cdnjs.cloudflare.com` ni `unpkg.com` ne sont bloqués (derniers tests le 27 septembre et le 14 août 2026). Faute de test publié depuis une ligne résidentielle, gardez leurs requêtes dans le périmètre de votre audit.
why: "ni... ni" and "faute de" carry the logic natively; "pour l’un ou l’autre" was English-shaped.

## D. table row
- before: | cdnjs, unpkg | Non bloqués, GreatFire, 27 sept. et 14 août 2026 | Chaque URL appelée | Tester ou héberger localement |
+ after:  | cdnjs, unpkg | Non bloqués selon GreatFire, 27 sept. et 14 août 2026 | Chaque URL appelée | Tester ou héberger localement |
why: "selon GreatFire" attributes the verdict the French way.

## E. checklist blockquote
- before: > Testé depuis une instance Alibaba Cloud (阿里云) de la région cn-zhangjiakou le 28 août 2026, le site de Google Hosted Libraries n’a renvoyé de premier octet dans aucun des 3 essais, chacun abandonné au bout de 60 secondes.
+ after:  > Interrogé depuis une instance Alibaba Cloud (阿里云) de la région cn-zhangjiakou le 28 août 2026, le site de Google Hosted Libraries n’a renvoyé aucun premier octet en 3 essais, tous abandonnés au bout de 60 secondes.
why: "Testé" agreed with nothing once "le site" became the subject; "interrogé" fits a request.
  Source line kept as-is: > Source : 21YunBox, Google Hosted Libraries in China, page revue le 8 octobre 2026.

## F. site-web-en-chine.astro
- before: quote: 'Le dernier test concluant de GreatFire sur ajax.googleapis.com depuis la Chine continentale a échoué ; il classe l’hôte parmi les adresses bloquées.'
+ after:  quote: 'Le dernier test concluant de GreatFire sur ajax.googleapis.com depuis la Chine continentale a échoué : l’organisation range cet hôte parmi les adresses bloquées.'
why: "il" had no clear antecedent (the test, or GreatFire).
  source kept as-is: 'GreatFire, dernier test le 22 août 2026'
