# DE, pass 1 (humanised translation, every changed passage re-authored)

## A. is-wordpress-blocked-in-china, table row
- before: | cdnjs, unpkg | Erreichbar, langsam | Beide kommen durch. Von einer Privatleitung nie getestet |
+ after:  | cdnjs, unpkg | Erreichbar | GreatFire stellt bei keinem der beiden eine Sperre fest. Für keinen liegt ein veröffentlichter Test über eine Privatleitung vor |
why: "langsam" and "kommen durch" rested on withdrawn 21YunBox figures.

## B. is-wordpress-blocked-in-china, probe sentence
- before: In wiederholten Messungen von einer Alibaba-Cloud-Instanz in Zhangjiakou kam auf Anfragen an ajax.googleapis.com in keinem einzigen Durchlauf ein Byte zurück, bis wir den Test nach sechzig Sekunden abgebrochen haben.
+ after:  Der letzte aussagekräftige Test von GreatFire für ajax.googleapis.com aus Festlandchina schlug am 22. August 2026 fehl. Sechs Tage später versuchte eine 21YunBox-Messstation auf einer Alibaba-Cloud-Instanz in Zhangjiakou dreimal, Googles eigene Hosted-Libraries-Seite zu öffnen, und erhielt kein erstes Byte, bevor jeder Versuch nach sechzig Sekunden abgebrochen wurde.
why: "bis wir den Test abgebrochen haben" claimed 21YunBox's probe as ours, on the wrong host.

## C. wordpress-plugins-china, cdnjs and unpkg paragraph
- before: Für cdnjs und unpkg liegt hier kein vollständig datierter Test mit benanntem Standort vor. Ihr Status bleibt ungeprüft. Nehmen Sie Anfragen an `cdnjs.cloudflare.com` oder `unpkg.com` in Ihre eigene Prüfung auf.
+ after:  GreatFire stuft `cdnjs.cloudflare.com` und `unpkg.com` als nicht gesperrt ein, zuletzt getestet am 27. September und 14. August 2026. Für keinen der beiden Hosts liegt ein veröffentlichter Test über einen Privatanschluss vor, also behalten Sie Anfragen an sie in Ihrer eigenen Prüfung.

## D. wordpress-plugins-china, table row
- before: | cdnjs, unpkg | Hier ungeprüft | Jede angeforderte URL | Testen oder selbst hosten |
+ after:  | cdnjs, unpkg | Nicht gesperrt, GreatFire, 27. Sept. und 14. Aug. 2026 | Jede angeforderte URL | Testen oder selbst hosten |

## E. china-website-brief-checklist, blockquote
- before: > Bei Tests von einer Alibaba-Cloud-Instanz (阿里云) in cn-zhangjiakou am 28. August 2026 lieferte Google Hosted Libraries in keinem der 3 Durchläufe ein erstes Byte, jeder wurde nach 60 Sekunden abgebrochen.
  > Quelle: 21YunBox, Google Hosted Libraries in China, 30. August 2026.
+ after:  > Bei Tests von einer Alibaba-Cloud-Instanz (阿里云) in cn-zhangjiakou am 28. August 2026 lieferte die Website von Google Hosted Libraries in keinem der 3 Durchläufe ein erstes Byte, jeder wurde nach 60 Sekunden abgebrochen.
  > Quelle: 21YunBox, Google Hosted Libraries in China, Seite geprüft am 8. Oktober 2026.

## F. website-in-china.astro (de), quote and source
- before: quote: 'Von einer Alibaba-Cloud-Instanz (阿里云) in Zhangjiakou lieferten wiederholte Anfragen an ajax.googleapis.com am 29. August 2026 vor dem Abbruch nach 60 Sekunden kein einziges erstes Byte.' / source: 'Messung ChinaWebFoundry, 29. August 2026'
+ after:  quote: 'Der letzte aussagekräftige Test von GreatFire für ajax.googleapis.com aus Festlandchina schlug fehl; GreatFire stuft den Host als gesperrt ein.' / source: 'GreatFire, zuletzt getestet am 22. August 2026'
