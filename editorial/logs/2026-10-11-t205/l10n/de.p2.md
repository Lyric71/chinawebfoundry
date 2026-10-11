# DE, pass 2 (native rewrite from the German draft, English not consulted)

## A. table row
- before: | cdnjs, unpkg | Erreichbar | GreatFire stellt bei keinem der beiden eine Sperre fest. Für keinen liegt ein veröffentlichter Test über eine Privatleitung vor |
+ after:  | cdnjs, unpkg | Erreichbar | Laut GreatFire nicht gesperrt. Kein veröffentlichter Test über eine Privatleitung |
why: table cells take the clipped form; two full clauses were too heavy.

## B. probe sentence
- before: Der letzte aussagekräftige Test von GreatFire für ajax.googleapis.com aus Festlandchina schlug am 22. August 2026 fehl. Sechs Tage später versuchte eine 21YunBox-Messstation auf einer Alibaba-Cloud-Instanz in Zhangjiakou dreimal, Googles eigene Hosted-Libraries-Seite zu öffnen, und erhielt kein erstes Byte, bevor jeder Versuch nach sechzig Sekunden abgebrochen wurde.
+ after:  Bei GreatFire scheiterte der letzte aussagekräftige Test von ajax.googleapis.com aus Festlandchina am 22. August 2026. Sechs Tage später rief eine Messstation von 21YunBox auf einer Alibaba-Cloud-Instanz in Zhangjiakou dreimal Googles eigene Hosted-Libraries-Seite auf, ohne ein einziges Byte zu erhalten; jeder Versuch wurde nach sechzig Sekunden abgebrochen.
why: "bevor jeder Versuch... abgebrochen wurde" was an English subordinate; "ohne ... zu erhalten" is the German construction.

## C. cdnjs and unpkg paragraph
- before: GreatFire stuft `cdnjs.cloudflare.com` und `unpkg.com` als nicht gesperrt ein, zuletzt getestet am 27. September und 14. August 2026. Für keinen der beiden Hosts liegt ein veröffentlichter Test über einen Privatanschluss vor, also behalten Sie Anfragen an sie in Ihrer eigenen Prüfung.
+ after:  Laut GreatFire sind weder `cdnjs.cloudflare.com` noch `unpkg.com` gesperrt (zuletzt getestet am 27. September und am 14. August 2026). Einen veröffentlichten Test über einen Privatanschluss gibt es für keinen der beiden, deshalb gehören Anfragen an diese Hosts in Ihre eigene Prüfung.
why: "weder... noch" and the fronted object read natively; "also behalten Sie" was spoken register.

## D. table row
- before: | cdnjs, unpkg | Nicht gesperrt, GreatFire, 27. Sept. und 14. Aug. 2026 | Jede angeforderte URL | Testen oder selbst hosten |
+ after:  | cdnjs, unpkg | Laut GreatFire nicht gesperrt, 27. Sept. und 14. Aug. 2026 | Jede angeforderte URL | Testen oder selbst hosten |

## E. checklist blockquote
- before: > ... lieferte die Website von Google Hosted Libraries in keinem der 3 Durchläufe ein erstes Byte, jeder wurde nach 60 Sekunden abgebrochen.
+ after:  > Bei Tests von einer Alibaba-Cloud-Instanz (阿里云) in cn-zhangjiakou am 28. August 2026 lieferte die Website von Google Hosted Libraries in keinem der 3 Durchläufe ein erstes Byte; jeder Versuch wurde nach 60 Sekunden abgebrochen.
why: the comma splice becomes a semicolon; "jeder" needed its noun.
  Source line kept as-is.

## F. website-in-china.astro (de)
- before: quote: 'Der letzte aussagekräftige Test von GreatFire für ajax.googleapis.com aus Festlandchina schlug fehl; GreatFire stuft den Host als gesperrt ein.'
+ after:  quote: 'Aus Festlandchina scheiterte der letzte aussagekräftige Test von GreatFire für ajax.googleapis.com; der Host gilt dort als gesperrt.'
  source kept as-is.
