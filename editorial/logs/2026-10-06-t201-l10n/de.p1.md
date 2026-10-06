---
title: "Google Fonts in China: Es kommt aufs Netz an"
subtitle: "Je nach Netz, aus dem gemessen wird, fällt die Antwort anders aus. Deshalb widersprechen sich die pauschalen Urteile über Google Fonts."
summary: "111 ms aus einem Rechenzentrum in Festlandchina, keine Antwort auf 54 Anfragen über einen Privatanschluss in Peking, beides von 21YunBox. Beide Werte stimmen."
visual: "/images/guides/google-fonts-china.webp"
order: 38
published: true
publishedAt: "2026-10-06"
updatedAt: "2026-10-06"
reviewBy: "2026-11-26"
category: "Technology"
author: "echo-peng"
---

Ob Google Fonts in China funktioniert, hängt davon ab, aus welchem Netz die Anfrage kommt. Am 28. August 2026 erhielt eine Messsonde auf einem Server von Alibaba Cloud (阿里云) in Zhangjiakou von `fonts.googleapis.com` 72 von 72 Antworten, im Median nach 111 ms. Am 30. August bekam ein privater Anschluss von China Mobile (中国移动) in Peking auf 54 Anfragen keine einzige Antwort. Beide Tests stammen von 21YunBox, und keines der beiden Ergebnisse ist ein Zufall. Ihre Besucher surfen über den Festnetzanschluss zu Hause oder über mobile Daten. Maßgeblich ist deshalb die zweite Zahl, denn eine Seite, die auf einen stummen Schriftenserver wartet, kann leer bleiben.

Liefern Sie die Schriften von Ihrer eigenen Domain aus, und die Frage stellt sich nicht mehr. Jede Zahl in diesem Beitrag wurde am 6. Oktober 2026 an der Quelle überprüft.

## Google Fonts in China aus zwei Netzen gemessen

21YunBox ließ denselben Messcode an beiden Standorten laufen und veröffentlichte die Ergebnisse nebeneinander. Google Fonts erreicht eine Seite über zwei Hostnamen: `fonts.googleapis.com` liefert das Stylesheet, die darin verlinkten Schriftdateien kommen von `fonts.gstatic.com`.

| Host                   | Alibaba Cloud (阿里云), Zhangjiakou | Privatanschluss China Mobile (中国移动), Peking | Abgeschlossen          | Befund                 | Getestet              |
| ---------------------- | ----------------------------------- | ----------------------------------------------- | ---------------------- | ---------------------- | --------------------- |
| `fonts.googleapis.com` | Median-TTFB 111 ms                  | keine Antwort                                   | 72 von 72 / 0 von 54   | je nach Messpunkt      | 28. und 30. Aug. 2026 |
| `fonts.gstatic.com`    | Median-TTFB 102 ms                  | keine Antwort                                   | 72 von 72 / 0 von 6    | je nach Messpunkt      | 28. und 30. Aug. 2026 |

> Von einer Instanz bei Alibaba Cloud (阿里云) in der Region cn-zhangjiakou, mit Stichproben im Zehn-Minuten-Takt über zwölf Stunden am 28. August 2026 und einem Timeout von 30 Sekunden, schloss `fonts.googleapis.com` 72 von 72 Anfragen ab, mit einem Median von 111 ms bis zum ersten Byte, `fonts.gstatic.com` 72 von 72 bei 102 ms. Bei 264 Seitenaufrufen auf 88 realen Websites über einen privaten Breitbandanschluss von China Mobile (中国移动) in Peking am 30. August 2026 wurde `fonts.googleapis.com` 54-mal angefragt und antwortete kein einziges Mal, `fonts.gstatic.com` 6-mal, ebenfalls ohne Antwort.
> Quelle: 21YunBox, A Day of Third-Party Requests From Inside China, August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Halten Sie die beiden Spalten auseinander. Jede beschreibt ein anderes Netz.

> „Eine Rechenzentrumsleitung und ein Verbraucheranschluss im selben Land sind nicht dasselbe Netz.“
> Quelle: 21YunBox, A Day of Third-Party Requests From Inside China, August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Warum der Privatanschluss nie eine Antwort bekam, erklärt 21YunBox nicht, und kein anderer veröffentlichter Test tut es. Wir spekulieren deshalb nicht. Die Zahlen zeigen aber das Muster: ein Host, zwei Netze, zwei Tage Abstand und gegensätzliche Ergebnisse.

## Die Befunde von GreatFire, Host für Host

GreatFire beobachtet die Zensur in China, testet Hostnamen vom Festland aus und datiert jeden Befund. Für die beiden ausliefernden Hosts deckt sich sein Urteil mit der Rechenzentrumsspalte. Wer diesen Befund allein zitiert, landet bei der pauschalen Antwort „nicht gesperrt“, der der Privatanschluss widerspricht.

| Host                   | Aufgabe                                    | Befund von GreatFire | Aussagekräftige Tests, letzte 90 Tage | Letzter Test  |
| ---------------------- | ------------------------------------------ | -------------------- | ------------------------------------- | ------------- |
| `fonts.googleapis.com` | liefert das CSS                            | nicht gesperrt       | 0 von 3 gestört                       | 7. Sept. 2026  |
| `fonts.gstatic.com`    | liefert die Schriftdateien                 | nicht gesperrt       | 0 von 4 gestört                       | 21. Sept. 2026 |
| `fonts.google.com`     | der Katalog, in dem Designer stöbern       | zu 100 % gestört     | 2 von 2 gestört                       | 30. Sept. 2026 |

> GreatFire stufte https://fonts.googleapis.com als nicht gesperrt ein, 0 von 3 aussagekräftigen Tests gestört, letzter Test am 7. September 2026, und https://fonts.gstatic.com als nicht gesperrt, 0 von 4, letzter Test am 21. September 2026. https://fonts.google.com stufte es als zu 100 % gestört ein, 2 von 2 aussagekräftigen Tests, letzter Test am 30. September 2026, mit verzeichneten Störungen seit dem 15. Oktober 2016.
> Quelle: GreatFire, September 2026. https://en.greatfire.org/https/fonts.googleapis.com, https://en.greatfire.org/https/fonts.gstatic.com und https://en.greatfire.org/https/fonts.google.com

Die dritte Zeile ist ein anderer Fall. `fonts.google.com` ist der Katalog, den Ihre Designer durchsuchen, und keine Seite, die Sie veröffentlichen, lädt ihn.

## Warum ein hängendes Stylesheet die Seite leer lässt

Die übliche Einbindung von Google Fonts ist ein Stylesheet-Link im Head der Seite, und diese Position entscheidet, was bei einem Ausfall passiert.

> Ein Stylesheet-Link im Head einer Seite blockiert standardmäßig das Rendern, sobald der Browser beim Parsen der Seite auf ihn stößt.
> Quelle: MDN Web Docs, The External Resource Link element, zuletzt geändert am 20. Mai 2026. https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link

Eine Anfrage, die nie beantwortet wird, hält das Rendern also auf, bis der Browser aufgibt. Der Besucher in Peking blickt auf einen weißen Bildschirm. Vom Schreibtisch in Frankfurt aus, ebenso von einer Monitoring-Sonde in einem Rechenzentrum auf dem Festland, sieht dieselbe Seite einwandfrei aus.

Der Parameter `display=swap` in der Einbettungs-URL hilft hier nicht, denn diese Anweisung steckt im Stylesheet, das nie angekommen ist.

## Selbst hosten nimmt das Netz aus der Gleichung

Die Schriften in Googles Sammlung stehen unter offenen Lizenzen, und diese Lizenzen erlauben es, die Dateien auf den eigenen Server zu kopieren.

> „Da alle hier verfügbaren Schriften unter Lizenzen stehen, die die Weitergabe erlauben, können Sie sie, vorbehaltlich der Lizenzbedingungen, mithilfe verschiedener Drittprojekte selbst hosten.“ Die meisten stehen unter der SIL Open Font License 1.1, einige unter der Apache-2-Lizenz, die Ubuntu-Familie unter der Ubuntu Font License 1.0.
> Quelle: README des Google-Fonts-Repositorys, google/fonts auf GitHub, zuletzt geändert am 8. März 2024. https://github.com/google/fonts

Vier Schritte, keiner davon schwierig:

1. Laden Sie die woff2-Dateien für die Schriftschnitte herunter, die Sie tatsächlich verwenden (üblich sind zwei oder drei).
2. Legen Sie sie auf Ihrer eigenen Domain neben Ihr CSS und schreiben Sie die `@font-face`-Regeln selbst.
3. Entfernen Sie den Google-Stylesheet-Link und jeden `preconnect`-Hinweis auf `fonts.googleapis.com` oder `fonts.gstatic.com`.
4. Laden Sie die Seite dann bei geöffnetem Netzwerk-Tab neu. Keine Anfrage darf an einen Google-Host gehen.

Lassen Sie Schritt 3 nicht aus.

> Preconnect beginnt mit einem Ursprung „einen Teil oder den gesamten Handshake (DNS+TCP bei HTTP, DNS+TCP+TLS bei HTTPS-Ursprüngen)“, bevor dort überhaupt eine Datei angefragt wird.
> Quelle: MDN Web Docs, rel=preconnect, zuletzt geändert am 22. April 2026. https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/preconnect

Ein vergessener Hinweis schickt den Browser jedes Besuchers weiter zu dem Host, den Sie gerade entfernt haben. Themes und Page Builder fügen den Google-Link zudem von sich aus wieder ein. Unser Leitfaden zu [den WordPress-Plugins, die in China nicht funktionieren](/de/ressourcen/china-web-leitfaden/wordpress-plugins-china/), zeigt, woher dieser Link in einer WordPress-Installation stammt.

ChinaWebFoundry liefert die eigenen Schriften genau so aus: fünf woff2-Dateien, drei Schnitte der Poppins und zwei der Inter, auf demselben Server wie die Seiten. Die Schriften kommen auf demselben Weg wie das HTML.

Schriften sind meist nur eine von mehreren Auslandsanfragen einer Seite. Die übrigen aufzuspüren und zu ersetzen, ist Aufgabe der [technischen Integration](/de/leistungen/technische-integration/). Beginnen Sie mit [der Übersicht, was die Große Firewall sperrt](/de/ressourcen/china-web-leitfaden/great-firewall-china/).

## Häufige Fragen

**Ist Google Fonts in China gesperrt?**

Das hängt vom Netz ab. In den Tests von 21YunBox im August 2026 beantworteten beide ausliefernden Hosts jede Anfrage aus einem Rechenzentrum von Alibaba Cloud (阿里云) und keine einzige über einen privaten Anschluss von China Mobile (中国移动) in Peking. GreatFire stufte beide im September 2026 als nicht gesperrt ein. Eine Antwort in einem Wort wirft die Hälfte dieser Belege weg. Behandeln Sie die gehostete Version daher als unzuverlässig und liefern Sie die Dateien selbst aus.

**Funktioniert fonts.google.com in China?**

GreatFire verzeichnete bei seinen beiden letzten aussagekräftigen Tests von `fonts.google.com` Störungen, zuletzt am 30. September 2026, und protokolliert dort Störungen seit 2016. Das ist der Katalog, in dem Designer Schriften auswählen: lästig für einen Designer, der von Shanghai aus arbeitet, für Ihre Besucher unsichtbar.

**Gibt es chinesische Spiegelserver für Google Fonts?**

Unter Entwicklern in China kursieren mehrere Spiegel der Google-Fonts-API. Wir haben für keinen davon einen datierten Test eines Dritten gefunden. Diese Seite nennt daher keinen und fällt kein Urteil. Ein Spiegel schiebt außerdem die Verfügbarkeit eines fremden Anbieters zwischen Ihre Besucher und Ihre Schriften, was das Selbsthosten vermeidet.

**Und Adobe Fonts oder Font Awesome?**

Beide stehen auf unserer Liste ungetesteter Dienste. Die jüngsten Befunde Dritter dazu sind älter als 90 Tage, deshalb geben wir in keine Richtung ein Urteil ab. Dieselbe Überlegung gilt für jede Schrift, deren Lizenz das Hosten der Dateien erlaubt. Bei einer Schrift, die das nicht zulässt, sollten Sie einen datierten Test eines Dritten für die gehostete Version finden, bevor Sie sich darauf verlassen.

**Wie prüfe ich, ob meine Website Google Fonts aufruft?**

Durchsuchen Sie den Seitenquelltext und Ihre Stylesheets nach `fonts.googleapis.com` und `fonts.gstatic.com`, auch in CSS-`@import`-Regeln. Oder lassen Sie die Website durch den [China Site Scanner](/de/china-site-scanner/) laufen, der die Drittanbieter-Hosts auflistet, die Ihre Seiten anfragen.
