# FR, pass 2 (native rewrite from the pass 1 French, English not consulted)

## host-website-in-china, line 23 (tail) + new blockquote
- before: Google Fonts en est l'exemple type : il répond depuis un centre de données du continent et se tait sur une ligne domestique à Pékin.
+ after:  Google Fonts en offre l'exemple type : joignable depuis un centre de données du continent, muet sur une ligne domestique pékinoise.
why: two parallel verbs read as a calque; the apposition is how a French tech desk compresses a contrast.

> Dans les mesures de 21YunBox, `fonts.googleapis.com` a répondu à 72 requêtes sur 72 depuis une instance Alibaba Cloud (阿里云) située à cn-zhangjiakou le 28 août 2026, et à aucune des 54 envoyées depuis une ligne résidentielle China Mobile (中国移动) à Pékin le 30 août 2026.
why: "à 0 sur 54" is a spreadsheet figure, "aucune des 54 envoyées" is how a journalist writes zero.

## host-website-in-china, Baidu paragraph
- before: ...et il ne peut classer que les pages qu'il parvient à explorer et à charger depuis le continent. Baidu ne publie aucune règle qui récompenserait en soi... ; l'argument en faveur d'un hébergement local repose donc sur l'accès du robot et sur la vitesse des pages...
+ after:  Le référencement ensuite. Baidu (百度) est le moteur qui compte ici, et il ne classe que les pages qu'il parvient à explorer et à charger depuis le continent. Aucune règle publiée par Baidu ne récompense en soi un hébergement continental ou un enregistrement ICP : l'intérêt d'un hébergement local tient à l'accès de son robot et à la vitesse des pages sur les réseaux du continent, deux points qui se vérifient.
why: "l'argument en faveur de" is a nominal English skeleton; "tient à" and "se vérifient" are verbal and native.

## vetting-a-wordpress-agency-china, line 41 (changed sentences)
+ after:  Une installation WordPress ordinaire, thème et extensions compris, appelle en silence Google Fonts, Google Maps, reCAPTCHA et souvent des scripts d'analyse ou de paiement hébergés hors de Chine. Certains sont bloqués net. Google Fonts, lui, répond ou se tait selon le réseau du visiteur. Faute de réponse, la page n'affiche aucune erreur.
why: "une fois le thème et les extensions en place" was a translated clause; "thème et extensions compris" is the native compression. Serial comma before "et" removed (French usage).

## vetting-a-wordpress-agency-china, line 83
+ after:  Quels scripts hébergés à l'étranger faudra-t-il remplacer sur notre site actuel ?
why: "scripts étrangers" is ambiguous in French (foreign-language scripts); the hosting is the point.

## woocommerce-china-store-guide, table row
+ after:  | Scripts | Google Fonts sur ligne domestique, reCAPTCHA | Auto-héberger ou remplacer |
why: shorter, table register.

## woocommerce-china-store-guide, paragraph + new blockquote
+ after:  D'abord, les scripts venus de l'étranger. Une boutique par défaut appelle en douce Google Fonts et reCAPTCHA. Dans les mesures publiées par 21YunBox en août 2026, reCAPTCHA n'a abouti à aucune requête, ni depuis un centre de données du continent ni depuis une ligne domestique à Pékin ; Google Fonts répondait au centre de données, jamais à la ligne domestique. Dans un cas comme dans l'autre, la page reste suspendue, à guetter une réponse qui ne viendra jamais.

> Dans les mesures de 21YunBox, `www.google.com/recaptcha` n'a répondu à aucune des 72 requêtes envoyées depuis une instance Alibaba Cloud (阿里云) située à cn-zhangjiakou le 28 août 2026, ni à aucune des 18 envoyées depuis une ligne résidentielle China Mobile (中国移动) à Pékin le 30 août 2026. `fonts.googleapis.com` a répondu à 72 requêtes sur 72 dans le premier cas, à aucune sur 54 dans le second.
why: "a échoué à chaque requête" is an English verb pattern; "ni... ni" carries the double failure natively.

## great-firewall-what-it-blocks, line 66 (last sentence)
+ after:  `fonts.google.com`, l'interface de consultation, relève d'un autre hôte : GreatFire l'a trouvé perturbé à 100 % lors de ses deux derniers tests concluants, dont le plus récent date du 30 septembre 2026.
why: "le plus récent le 30 septembre" was a dangling English apposition.

## great-firewall-what-it-blocks, lines 74 and 76
+ after (74): Un simple lien Google Fonts oublié dans le CSS peut laisser la page blanche chez tout visiteur dont le réseau ne lui répond jamais.
+ after (76): > Un simple lien Google Fonts oublié dans votre CSS peut laisser la page blanche chez tout visiteur dont le réseau ne répond jamais.
why: "pour chaque visiteur" is a calque of "for every"; "chez tout visiteur" is idiomatic.

## great-firewall-what-it-blocks, line 208 and line 216
+ after: | Remplacement des dépendances hébergées à l'étranger |
+ after: **Remplacer chaque dépendance hébergée à l'étranger.**
+ after: Si l'un d'eux vise un domaine hors de portée du réseau de vos visiteurs,
why: "tape dans" is spoken register; "hors de portée" is written.

## is-wordpress-blocked-in-china, line 105
+ after:  fonts.google.com, l'interface où vos graphistes choisissent leurs caractères, relève d'un autre hôte, que 21YunBox n'a pas mesuré. GreatFire l'a trouvé perturbé à 100 % lors de ses deux derniers tests concluants, dont le plus récent date du 30 septembre 2026. Un ennui de graphiste, donc : vos visiteurs n'y passent jamais.

Step 2 complete.
