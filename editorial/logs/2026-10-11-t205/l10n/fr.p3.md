# FR, pass 3 (final native polish)

## A. table row
kept as-is: | cdnjs, unpkg | Accessible | Non bloqués selon GreatFire. Aucun test publié sur ligne résidentielle |
("Accessible" kept singular: the status column uses invariable labels, as in the rows around it.)

## B. probe sentence
- before: Chez GreatFire, le dernier test concluant d'ajax.googleapis.com depuis le continent, mené le 22 août 2026, s'est soldé par un échec. Six jours plus tard, une sonde de 21YunBox hébergée chez Alibaba Cloud, à Zhangjiakou, a sollicité trois fois la page Hosted Libraries de Google sans recevoir le moindre octet ; chaque tentative a été abandonnée au bout de soixante secondes.
+ after:  Chez GreatFire, le dernier test concluant d'ajax.googleapis.com mené depuis le continent, le 22 août 2026, s'est soldé par un échec. Six jours plus tard, une sonde de 21YunBox hébergée chez Alibaba Cloud à Zhangjiakou a sollicité à trois reprises la page Hosted Libraries de Google sans en tirer le moindre octet ; chaque tentative a été abandonnée au bout de soixante secondes.
why: "mené depuis le continent" binds place to the test; "à trois reprises" and "sans en tirer" give the editor's finish. Straight apostrophes kept, as in the rest of this file.

## C. cdnjs and unpkg paragraph
- before: Pour GreatFire, ni `cdnjs.cloudflare.com` ni `unpkg.com` ne sont bloqués (derniers tests le 27 septembre et le 14 août 2026). Faute de test publié depuis une ligne résidentielle, gardez leurs requêtes dans le périmètre de votre audit.
+ after:  Pour GreatFire, ni `cdnjs.cloudflare.com` ni `unpkg.com` ne sont bloqués (derniers tests les 27 septembre et 14 août 2026). Aucun test n’a été publié depuis une ligne résidentielle : gardez donc leurs requêtes dans le périmètre de votre audit.
why: "les 27 septembre et 14 août" is the standard date pairing; two sentences read cleaner than the stacked "faute de".

## D. table row
kept as-is: | cdnjs, unpkg | Non bloqués selon GreatFire, 27 sept. et 14 août 2026 | Chaque URL appelée | Tester ou héberger localement |

## E. checklist blockquote
- before: > Interrogé depuis une instance Alibaba Cloud (阿里云) de la région cn-zhangjiakou le 28 août 2026, le site de Google Hosted Libraries n’a renvoyé aucun premier octet en 3 essais, tous abandonnés au bout de 60 secondes.
+ after:  > Interrogé depuis une instance Alibaba Cloud (阿里云) de la région cn-zhangjiakou le 28 août 2026, le site de Google Hosted Libraries n’a renvoyé aucun premier octet sur 3 essais, tous abandonnés au bout de 60 secondes.
why: "sur 3 essais" is the idiomatic count.
  Source line kept as-is.

## F. site-web-en-chine.astro
- before: quote: 'Le dernier test concluant de GreatFire sur ajax.googleapis.com depuis la Chine continentale a échoué : l’organisation range cet hôte parmi les adresses bloquées.'
+ after:  quote: 'Depuis la Chine continentale, le dernier test concluant de GreatFire sur ajax.googleapis.com a échoué : l’hôte est classé comme bloqué.'
why: shorter, fronted place complement, no needless "l’organisation". Non-breaking space before the colon added in the file.
  source kept as-is: 'GreatFire, dernier test le 22 août 2026'

Step 3 complete. FR passages final: GreatFire's verdicts dated, 21YunBox's probe attributed to 21YunBox and to the right page, no figure labelled as ours.
