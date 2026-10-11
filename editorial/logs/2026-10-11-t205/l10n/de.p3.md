# DE, pass 3 (final native polish)

## A. table row
kept as-is: | cdnjs, unpkg | Erreichbar | Laut GreatFire nicht gesperrt. Kein veröffentlichter Test über eine Privatleitung |
("Privatleitung" kept: it is the term this page already uses.)

## B. probe sentence
- before: ... dreimal Googles eigene Hosted-Libraries-Seite auf, ohne ein einziges Byte zu erhalten; jeder Versuch wurde nach sechzig Sekunden abgebrochen.
+ after:  Bei GreatFire scheiterte der letzte aussagekräftige Test von ajax.googleapis.com aus Festlandchina am 22. August 2026. Sechs Tage später rief eine Messstation von 21YunBox auf einer Alibaba-Cloud-Instanz in Zhangjiakou dreimal Googles eigene Hosted-Libraries-Seite auf, ohne auch nur ein Byte zu erhalten; jeder Versuch wurde nach sechzig Sekunden abgebrochen.
why: "ohne auch nur ein Byte" is the idiomatic emphasis.

## C. cdnjs and unpkg paragraph
- before: Laut GreatFire sind weder `cdnjs.cloudflare.com` noch `unpkg.com` gesperrt (zuletzt getestet am 27. September und am 14. August 2026). Einen veröffentlichten Test über einen Privatanschluss gibt es für keinen der beiden, deshalb gehören Anfragen an diese Hosts in Ihre eigene Prüfung.
+ after:  Laut GreatFire sind weder `cdnjs.cloudflare.com` noch `unpkg.com` gesperrt (zuletzt getestet am 27. September beziehungsweise am 14. August 2026). Einen veröffentlichten Test über einen Privatanschluss gibt es für keinen der beiden Hosts; Anfragen an sie gehören deshalb in Ihre eigene Prüfung.
why: "beziehungsweise" pairs each date with its host; the semicolon replaces a comma-joined main clause.

## D. table row
kept as-is: | cdnjs, unpkg | Laut GreatFire nicht gesperrt, 27. Sept. und 14. Aug. 2026 | Jede angeforderte URL | Testen oder selbst hosten |

## E. checklist blockquote
kept as-is: > Bei Tests von einer Alibaba-Cloud-Instanz (阿里云) in cn-zhangjiakou am 28. August 2026 lieferte die Website von Google Hosted Libraries in keinem der 3 Durchläufe ein erstes Byte; jeder Versuch wurde nach 60 Sekunden abgebrochen.
  > Quelle: 21YunBox, Google Hosted Libraries in China, Seite geprüft am 8. Oktober 2026.

## F. website-in-china.astro (de)
- before: quote: 'Aus Festlandchina scheiterte der letzte aussagekräftige Test von GreatFire für ajax.googleapis.com; der Host gilt dort als gesperrt.'
+ after:  quote: 'Der letzte aussagekräftige Test von GreatFire für ajax.googleapis.com aus Festlandchina schlug fehl; GreatFire führt den Host als gesperrt.'
why: "dort" was ambiguous between China and GreatFire's records.
  source kept as-is: 'GreatFire, zuletzt getestet am 22. August 2026'

Step 3 complete. DE passages final, same corrections as FR and ES, Sie register kept.
