# FR, pass 3 (final native polish of the pass 2 French)

- host, tail of line 23: "que le réseau du visiteur n'atteint pas" -> "hors de portée du réseau du visiteur" (one relative clause fewer; echoes the GFW page's wording).
- host and woo blockquotes: "Dans les mesures de" -> "Selon les mesures de"; "située à cn-zhangjiakou" -> "de la région cn-zhangjiakou" (cn-zhangjiakou is a cloud region, not a town).
- host, Baidu: "deux points qui se vérifient" -> "deux critères qui se vérifient".
- vetting 41: "Certains sont bloqués net" -> "Certains sont purement et simplement bloqués" (written register); "Faute de réponse" -> "Lorsqu'un appel reste lettre morte" (the next, unchanged sentence already says "réponse").
- woo: "les scripts venus de l'étranger" -> "les scripts hébergés à l'étranger" (same term as vetting 83); "n'a abouti à aucune requête" -> "n'a répondu à aucune requête"; blockquote end "à aucune sur 54" -> "et à aucune des 54".
- GFW 66 and isWP 105: "relève d'un autre hôte" -> "est un hôte à part".
- GFW 76: "ne répond jamais" -> "ne lui répond jamais", matching line 74.
- GFW 208 and 216: "hébergée(s) à l'étranger" -> "étrangère(s)": the French collection already says "dépendance étrangère" (vetting 41, unchanged); terminology kept (TRANSLATION-RULES 1.3.4).
- isWP 105 kept as pass 2 apart from "est un hôte à part".

Final strings are the "new" side of each pair in `fr.apply.json` in this
folder. Step 3 complete. Applied to src/content/guides-fr/, then
editorial/scripts/fr-typography.mjs run on the five files.
