# FR, pass 1 (humanised translation, every changed passage re-authored)

## A. is-wordpress-blocked-in-china, table row
- before: | cdnjs, unpkg | Accessible, lent | Les deux aboutissent. Jamais testés depuis une ligne grand public |
+ after:  | cdnjs, unpkg | Accessible | GreatFire ne relève de blocage sur aucun des deux. Aucun test publié depuis une ligne résidentielle |
why: the "lent" verdict and "jamais testés" rested on withdrawn 21YunBox figures; the row now states GreatFire's verdict and the missing home line test.

## B. is-wordpress-blocked-in-china, probe sentence
- before: Lors de sondages répétés depuis une instance Alibaba Cloud à Zhangjiakou, les requêtes vers ajax.googleapis.com n'ont renvoyé aucun octet, sur aucun essai, avant l'abandon du test à soixante secondes.
+ after:  Le dernier test concluant de GreatFire sur ajax.googleapis.com depuis le continent, le 22 août 2026, a échoué. Six jours plus tard, une sonde de 21YunBox installée sur une instance Alibaba Cloud à Zhangjiakou a tenté trois fois d'ouvrir la page Hosted Libraries de Google : aucun premier octet n'est revenu avant l'abandon de chaque essai, à soixante secondes.
why: the old sentence presented 21YunBox's probe as ours and named the wrong host.

## C. wordpress-plugins-china, cdnjs and unpkg paragraph
- before: Nous ne disposons pas de test complet, daté et associé à un lieu précis pour cdnjs et unpkg. Leur état reste donc non vérifié ici. Incluez dans votre audit les requêtes vers `cdnjs.cloudflare.com` ou `unpkg.com`.
+ after:  GreatFire considère `cdnjs.cloudflare.com` et `unpkg.com` comme non bloqués, d’après des tests du 27 septembre et du 14 août 2026. Aucun test publié ne porte sur une ligne résidentielle pour l’un ou l’autre : gardez donc leurs requêtes dans votre propre audit.
why: dated GreatFire verdicts exist for both hosts.

## D. wordpress-plugins-china, table row
- before: | cdnjs, unpkg | Non vérifiés ici | Chaque URL appelée | Tester ou héberger localement |
+ after:  | cdnjs, unpkg | Non bloqués, GreatFire, 27 sept. et 14 août 2026 | Chaque URL appelée | Tester ou héberger localement |
why: same correction in the summary table.

## E. china-website-brief-checklist, blockquote
- before: > Testé depuis une instance Alibaba Cloud (阿里云) de la région cn-zhangjiakou le 28 août 2026, Google Hosted Libraries n’a renvoyé de premier octet dans aucun des 3 essais, chacun abandonné au bout de 60 secondes.
  > Source : 21YunBox, Google Hosted Libraries in China, 30 août 2026.
+ after:  > Testé depuis une instance Alibaba Cloud (阿里云) de la région cn-zhangjiakou le 28 août 2026, le site de Google Hosted Libraries n’a renvoyé de premier octet dans aucun des 3 essais, chacun abandonné au bout de 60 secondes.
  > Source : 21YunBox, Google Hosted Libraries in China, page revue le 8 octobre 2026.
why: 21YunBox timed Google's library website, not the library host; the page's current review date.

## F. site-web-en-chine.astro, quote and source
- before: quote: 'Depuis une instance Alibaba Cloud (阿里云) à Zhangjiakou, le 29 août 2026, des requêtes répétées vers ajax.googleapis.com n’ont renvoyé aucun premier octet avant l’abandon à 60 secondes.' / source: 'Mesure ChinaWebFoundry, 29 août 2026'
+ after:  quote: 'Le dernier test concluant de GreatFire sur ajax.googleapis.com depuis la Chine continentale a échoué ; il classe l’hôte parmi les adresses bloquées.' / source: 'GreatFire, dernier test le 22 août 2026'
why: the figure was 21YunBox's, misdated and credited to us; replaced by GreatFire's dated verdict on the host itself.
