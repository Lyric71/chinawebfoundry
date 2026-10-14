---
title: "Welche JavaScript-CDNs in China funktionieren"
subtitle: "Google Hosted Libraries hält die Darstellung an; cdnjs, unpkg und jsDelivr antworten. Der einzelne Host zählt mehr als die Kategorie."
summary: "Google Hosted Libraries ist in Festlandchina gesperrt und legt die Seite lahm. cdnjs, jsDelivr und unpkg antworten. Datierte Befunde von GreatFire und 21YunBox."
visual: "/images/guides/javascript-cdn-china.webp"
order: 41
published: true
publishedAt: "2026-10-11"
updatedAt: "2026-10-11"
reviewBy: "2026-11-12"
category: "Technology"
author: "echo-peng"
---

Von den vier öffentlichen JavaScript-CDNs, um die es hier geht, scheitert in den veröffentlichten Tests aus Festlandchina nur das von Google. GreatFire stuft `ajax.googleapis.com` als gesperrt ein (letzter Test am 22. August 2026), und eine Messsonde von 21YunBox bei Alibaba Cloud (阿里云) in Zhangjiakou erhielt am 28. August von Googles Bibliotheks-Website nicht einmal ein erstes Byte. jsDelivr antwortete aus derselben Cloud-Region und über einen Privatanschluss in Peking. cdnjs und unpkg gelten als nicht gesperrt.

Wer fragt, ob ein CDN in China gesperrt ist, bekommt als belastbare Antwort nur eine Liste von Hostnamen. Nur einer der vier reißt die Seite mit. Jede Zahl in diesem Beitrag wurde am 11. Oktober 2026 an der Quelle überprüft.

## Ist Ihr CDN in China gesperrt? Was die Tests zeigen

Jede Zeile stammt von GreatFire oder 21YunBox, mit dem jeweiligen Testdatum. Eine Zahl aus der Erhebung von 21YunBox ist ein zeitlich gemessener Aufruf der Website des Anbieters über dessen Messsonde. Sie zeigt, wie sich die Website des Unternehmens aus China heraus verhält. Die Datei, die Ihre Seite anfordert, war nie Teil des Tests.

| Host                   | Alibaba Cloud cn-zhangjiakou (21YunBox)         | Privatanschluss China Mobile, Peking (21YunBox) | GreatFire                        | Befund     | Getestet                         |
| ---------------------- | ----------------------------------------------- | ----------------------------------------------- | -------------------------------- | ---------- | -------------------------------- |
| `ajax.googleapis.com`  | Bibliotheks-Website 0 von 3, kein erstes Byte   | kein veröffentlichter Test                      | gesperrt, 1 von 1 fehlgeschlagen | gesperrt   | 22. und 28. Aug. 2026            |
| `cdn.jsdelivr.net`     | 72 von 72, Median 660 ms, p95 1.757 ms          | 36 von 36                                       | nicht gesperrt, 3 von 3          | langsam    | 28. und 30. Aug., 8. Okt. 2026   |
| `cdnjs.cloudflare.com` | cdnjs-Website 3 von 3                           | kein veröffentlichter Test                      | nicht gesperrt, 1 von 1          | erreichbar | 28. und 29. Aug., 27. Sept. 2026 |
| `unpkg.com`            | kein veröffentlichter Test                      | kein veröffentlichter Test                      | nicht gesperrt, 1 von 1          | erreichbar | 14. Aug. 2026                    |
| BootstrapCDN           | kein Test des Asset-Hosts                       | kein Test des Asset-Hosts                       | kein datierter Test              | ungetestet | keiner                           |

> Von einer Messsonde bei Alibaba Cloud (阿里云) in cn-zhangjiakou wurden 280 Websites jeweils dreimal aufgerufen, mit einer Obergrenze von 60 Sekunden. Die cdnjs-Website schloss 3 von 3 Versuchen ab. Google Hosted Libraries lieferte überhaupt keine Antwort.
> Quelle: 21YunBox, 280 Sites Measured From Inside China, 28. bis 29. August 2026. https://www.21cloudbox.com/websites-blocked-in-china.html

Eine verbreitete Faustregel besagt, dass öffentliche CDNs in China nicht funktionieren. Dieselbe Studie hat das überprüft.

> 21YunBox folgert aus seiner Erhebung, dass die Regel „öffentliche CDNs funktionieren in China nicht“ von seinen Messungen nicht gestützt wird.
> Quelle: 21YunBox, 280 Sites Measured From Inside China, 28. bis 29. August 2026. https://www.21cloudbox.com/websites-blocked-in-china.html

## Google Hosted Libraries hält die Seite an

Googles Dokumentation liefert das jQuery-Tag vollständig, mit Verweis auf `https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js`, und wirbt mit der Reichweite des Dienstes.

> Google beschreibt Hosted Libraries als „stabiles, zuverlässiges, schnelles und weltweit verfügbares Content-Delivery-Netzwerk“ und gibt das jQuery-Snippet auf `ajax.googleapis.com` an.
> Quelle: Google for Developers, Hosted Libraries, zuletzt aktualisiert am 9. Oktober 2026. https://developers.google.com/speed/libraries

Ein schlichtes Script-Tag hält den Parser an, bis seine Datei eingetroffen ist.

> „Skripte ohne die Attribute async, defer oder `type="module"` sowie Inline-Skripte ohne das Attribut `type="module"` werden sofort abgerufen und ausgeführt, bevor der Browser die Seite weiter parst.“
> Quelle: MDN Web Docs, the script element, zuletzt geändert am 9. Mai 2026. https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script

Aus Festlandchina kommt genau diese Datei nicht an. GreatFires letzter aussagekräftiger Test des Hosts schlug fehl, und die Messsonde von 21YunBox bekam von Googles Bibliotheks-Website nicht einmal ein erstes Byte.

> GreatFire stuft https://ajax.googleapis.com als gesperrt ein: 100 % der letzten aussagekräftigen Tests in Festlandchina schlugen fehl (1 von 1), letzter Test am 22. August 2026.
> Quelle: GreatFire, letzter Test am 22. August 2026. https://en.greatfire.org/https/ajax.googleapis.com

21YunBox testete die Seite, die Entwickler lesen, bevor sie das Tag kopieren.

> Von einer Messsonde bei Alibaba Cloud (阿里云) in cn-zhangjiakou lieferte die Website von Google Hosted Libraries am 28. August 2026 in drei von drei Durchläufen kein erstes Byte; jeder Durchlauf wurde an der Grenze von sechzig Sekunden abgebrochen.
> Quelle: 21YunBox, Google Hosted Libraries in China, überprüft am 8. Oktober 2026. https://www.21cloudbox.com/support/google-hosted-libraries.html

Der Besucher starrt auf eine weiße Seite, bis der Browser die Anfrage aufgibt. Danach scheitert jedes Skript, das jQuery braucht: das Menü, der Slider, die Formularvalidierung und was das Theme sonst daran aufgehängt hat. Das Tag kam oft vor Jahren mit einem Theme oder Plugin auf die Website, und wer sie heute betreut, weiß womöglich nicht, dass es da ist. Aus einem Büro in Frankfurt oder Chicago lädt dieselbe Seite normal. Von außerhalb Chinas wirkt nichts kaputt.

## jsDelivr antwortet aus beiden Netzen, aber langsam

jsDelivr ist das einzige CDN in dieser Übersicht mit Zahlen aus einem Rechenzentrum und von einem Privatanschluss. Es schloss in beiden Netzen jede Anfrage ab.

> Von einer Instanz bei Alibaba Cloud (阿里云) in cn-zhangjiakou, mit Stichproben im Zehn-Minuten-Takt über zwölf Stunden am 28. August 2026 und einem Timeout von 30 Sekunden, schloss `cdn.jsdelivr.net` 72 von 72 Anfragen ab, mit einem Median von 660 ms bis zum ersten Byte und einem 95. Perzentil von 1.757 ms; `fonts.googleapis.com` schloss 72 von 72 bei 111 ms ab. Über einen privaten Breitbandanschluss von China Mobile (中国移动) in Peking wurde `cdn.jsdelivr.net` am 30. August 2026 36-mal ohne Fehler angefragt, `fonts.googleapis.com` 54-mal ohne Antwort.
> Quelle: 21YunBox, A Day of Third-Party Requests From Inside China, 28. und 30. August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Aus dem Rechenzentrum kam Googles Font-Stylesheet am 28. August im Median nach 111 ms zurück. jsDelivr brauchte etwa sechsmal so lange, und 21YunBox rechnet vor, was die langsamsten Anfragen kosten.

> „Ein p95 von 1.757 ms bei einem Median von 660 ms bedeutet, dass jede zwanzigste Anfrage fast zwei Sekunden dauert.“
> Quelle: 21YunBox, A Day of Third-Party Requests From Inside China, 28. und 30. August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

GreatFire bestätigt, dass der Host offen ist: nicht gesperrt, drei von drei aktuellen aussagekräftigen Tests, letzter Test am 8. Oktober 2026. Mit async geladen, fallen die Ausreißer kaum ins Gewicht. Steht eine jsDelivr-Datei dagegen vor dem ersten Rendern (etwa das Skript eines Slider-Plugins im Head), halten die langsamen Anfragen die Seite auf.

## cdnjs und unpkg stehen auf dünnerer Datenbasis

Bei den letzten beiden Hosts wird die Beweislage dünn. Beide gelten als offen, doch für keinen gibt es einen veröffentlichten Test von einem Privatanschluss, die Spalte bleibt für sie leer.

> GreatFire stuft https://cdnjs.cloudflare.com als nicht gesperrt ein, 1 von 1 aktuellen aussagekräftigen Tests ohne Störung, letzter Test am 27. September 2026, und https://unpkg.com als nicht gesperrt, 1 von 1, letzter Test am 14. August 2026.
> Quelle: GreatFire, letzte Tests am 27. September und 14. August 2026. https://en.greatfire.org/https/cdnjs.cloudflare.com und https://en.greatfire.org/https/unpkg.com

Für cdnjs gibt es einen weiteren Datenpunkt aus der Erhebung: Die Website schloss alle drei Aufrufe von der Messsonde in Zhangjiakou ab. Für unpkg gibt es nur den einen Test von GreatFire.

Diese Lücke wiegt schwer. Eine Antwort aus dem Rechenzentrum kann die falsche sein, und das Font-Stylesheet oben zeigt, wie falsch: 72 von 72 aus dem Rechenzentrum am 28. August, keine einzige Antwort auf 54 Anfragen über den Pekinger Privatanschluss zwei Tage später.

Für den Asset-Host von BootstrapCDN liegt aus keiner der beiden Quellen ein datierter Test vor. Er wird als ungetestet geführt.

## Die Bibliotheken in den eigenen Build holen

Entfernen Sie zuerst das Tag von Google Hosted Libraries. Liefern Sie jQuery von Ihrem eigenen Origin aus oder bündeln Sie es in Ihren Build, dann verschwindet die Anfrage, die nie zurückkommt. Notieren Sie die kopierte Version. Das nächste Upgrade sollte auf einer bewussten Entscheidung beruhen. Unter WordPress existiert die lokale Kopie bereits: Version 7.1.3 registriert jQuery 3.7.1, dieselbe Version wie in Googles Snippet, aus `wp-includes/js/jquery/`. Entfernen Sie, was die Google-Kopie einschleust, und die Datei aus dem Core lädt stattdessen. 21YunBox rät dasselbe.

> Der Rat aus der Erhebung: „Messen Sie den Host, von dem Sie tatsächlich abhängen, oder bündeln Sie die Bibliothek in Ihren eigenen Build, dann stellt sich die Frage nicht mehr.“
> Quelle: 21YunBox, 280 Sites Measured From Inside China, 28. bis 29. August 2026. https://www.21cloudbox.com/websites-blocked-in-china.html

| Bibliothek geladen von              | Was zu tun ist                                                     | Warum                                  |
| ----------------------------------- | ------------------------------------------------------------------ | -------------------------------------- |
| `ajax.googleapis.com`               | jetzt selbst hosten oder bündeln                                   | gesperrt und blockiert das Rendern     |
| `cdn.jsdelivr.net`                  | bündeln, was das erste Rendern braucht, den Rest async laden       | antwortet, mit langsamen Ausreißern    |
| `cdnjs.cloudflare.com`, `unpkg.com` | bündeln oder vor dem Einsatz von einem Privatanschluss aus testen | keine Daten von einem Privatanschluss  |

Unser Leitfaden zu den [WordPress-Plugins, die in China nicht funktionieren](/de/ressourcen/china-web-leitfaden/wordpress-plugins-china/), zeigt, wie solche Tags auf eine Website gelangen. Für andere Hosts als die Bibliotheks-CDNs enthält der Leitfaden dazu, [was die Great Firewall sperrt](/de/ressourcen/china-web-leitfaden/great-firewall-china/), die umfassende Abhängigkeitstabelle. Sie wissen nicht, welche Bibliotheks-Hosts Ihre Seiten aufrufen? Der [China Site Scanner](/de/china-site-scanner/) prüft das. Die Arbeit am Build übernimmt unsere Leistung [Technische Integration](/de/leistungen/technische-integration/).

## Häufige Fragen zu CDNs in China

**Ist cdnjs in China gesperrt?**

Kein datierter Test spricht dafür. GreatFire stufte `cdnjs.cloudflare.com` am 27. September 2026 als nicht gesperrt ein, und die Erhebung von 21YunBox rief die cdnjs-Website am 28. und 29. August von einer Messsonde bei Alibaba Cloud 3 von 3 Mal erfolgreich auf. Weder GreatFire noch 21YunBox haben einen Test von cdnjs über einen Privatanschluss veröffentlicht. Was ein Pekinger Haushalt sieht, ist daher unbekannt.

**Ist jsDelivr in China gesperrt?**

Nein. In der Studie von 21YunBox schloss es am 28. August 2026 72 von 72 Anfragen aus einem Alibaba-Cloud-Rechenzentrum in Zhangjiakou ab und am 30. August 36 von 36 über einen Privatanschluss von China Mobile in Peking. Langsam ist es allerdings: Median 660 ms und 95. Perzentil 1.757 ms aus diesem Rechenzentrum.

**Funktioniert unpkg in China?**

GreatFire stuft es als nicht gesperrt ein. Sein einziger aktueller aussagekräftiger Test von `unpkg.com` am 14. August 2026 verlief ohne Störung. Weder GreatFire noch 21YunBox veröffentlichen derzeit eine Messung aus einem Rechenzentrum oder einen Test über einen Privatanschluss. Behandeln Sie unpkg als erreichbar, aber ungemessen, und bündeln Sie alles, wovon das erste Rendern abhängt.

**Warum legt jQuery von Google die ganze Seite lahm?**

Ein Script-Tag ohne async oder defer hält den Browser beim Parsen an, bis die Datei eintrifft. GreatFire stuft `ajax.googleapis.com` als gesperrt ein, aus Festlandchina trifft die Datei also nie ein. Die Seite wartet auf ein Timeout, danach scheitert jedes Skript, das auf jQuery angewiesen ist.

**Brauche ich ein China-CDN, um das zu beheben?**

Für dieses Problem genügt es, die Dateien in den Build zu bündeln, ganz ohne CDN. Es handelt sich um Dateien, die jemand bei jedem Seitenaufruf vom Server eines anderen Unternehmens holen lässt. Bündeln Sie sie in Ihren eigenen Build, und die Anfrage entfällt. Von wo Ihre Website ausgeliefert wird und ob sie eine ICP-Registrierung (ICP备案) hat, ist eine andere Frage, die Ihre eigenen Seiten betrifft.
