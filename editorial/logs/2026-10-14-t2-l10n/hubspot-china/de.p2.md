---
title: "HubSpot in China: Was funktioniert und was nicht"
subtitle: "Welche Teile eines HubSpot-Setups einen datierten Test aus China haben, welche keinen, und wie der Lead erhalten bleibt, wenn einer davon ausfällt."
summary: "HubSpot-Skripte und eine bei HubSpot gehostete Website bergen in China verschiedene Risiken. Was GreatFire getestet hat, was nicht, und die Abhilfe."
visual: "/images/guides/hubspot-china.webp"
order: 44
published: true
publishedAt: "2026-10-14"
updatedAt: "2026-10-14"
reviewBy: "2026-10-31"
category: "Technology"
author: "cyril-drouin"
---

Teile von HubSpot sind aus Festlandchina erreichbar. Für das, was auf Ihren eigenen Seiten läuft, gibt es dagegen keinen aktuellen Test. GreatFire, das die Zensur in China beobachtet, hat keinen der HubSpot-Hosts, die es über HTTPS getestet hat, als gesperrt eingestuft. Die HubSpot-App stuft es als erreichbar ein (letzter Test am 22. September 2026), den API-Host als gestört; für ihn liegt allerdings nur ein einziger aussagekräftiger Test vor (10. September 2026). Ihre Seiten laden aber etwas anderes: die Tracking- und Formularskripte und dazu einen Chat-Loader. Ob diese heute einen Besucher in Chengdu erreichen, ist nirgends belegt.

Daraus ergibt sich die Lösung. Solange keine Messung vorliegt, sollte jede Seite so gebaut sein, dass kein Lead verloren geht, wenn ein HubSpot-Skript nie ankommt. Den Anfang machen die Formulare. Eine Website auf HubSpots eigenem CMS ist ein anderes Problem mit einer eigenen Lösung: Sie wird von außerhalb des Festlands ausgeliefert, und eine ICP-Registrierung (ICP备案) ist für sie nicht möglich. Jeder Befund in diesem Beitrag wurde am 14. Oktober 2026 an der Quelle überprüft.

## Welche HubSpot-Hosts in China gesperrt sind und welche nie getestet wurden

| Host                  | Aufgabe für Ihre Website                   | Befund von GreatFire | Aussagekräftige Tests | Letzter Test   |
| --------------------- | ------------------------------------------ | -------------------- | --------------------- | -------------- |
| `app.hubspot.com`     | die App, in die sich Ihr Team einloggt     | erreichbar           | 0 von 1 gestört       | 22. Sept. 2026 |
| `api.hubspot.com`     | API-Host von HubSpot                       | zeitweise gestört    | 1 von 1 gestört       | 10. Sept. 2026 |
| `hs-sites.com`        | Systemdomain, Konten in US East            | erreichbar           | 0 von 1 gestört       | 2. Aug. 2026   |
| `js.hs-scripts.com`   | Loader des Tracking-Codes                  | ungetestet           | keiner über HTTPS     | entfällt       |
| `js.hs-analytics.net` | Tracking-Skript                            | ungetestet           | keiner                | entfällt       |
| `js.hs-banner.com`    | setzt die HubSpot-Cookies                  | ungetestet           | keiner                | entfällt       |
| `js.hsforms.net`      | zeichnet eingebettete Formulare            | ungetestet           | keiner                | entfällt       |
| `api.hsforms.com`     | API für Formulareinsendungen               | ungetestet           | keiner                | entfällt       |
| `api.usemessages.com` | Chat (Chatflows)                           | ungetestet           | keiner                | entfällt       |

> GreatFire stufte https://api.hubspot.com als zu 100 % gestört ein, 1 von 1 aussagekräftigen Tests in den letzten 90 Tagen, letzter Test am 10. September 2026. https://app.hubspot.com stufte es als nicht gesperrt ein, 0 von 1, letzter Test am 22. September 2026, ebenso https://hs-sites.com, 0 von 1, letzter Test am 2. August 2026.
> Quelle: GreatFire, September 2026. https://en.greatfire.org/https/api.hubspot.com, https://en.greatfire.org/https/app.hubspot.com und https://en.greatfire.org/https/hs-sites.com

Ein einziger aussagekräftiger Test pro Host ist eine dünne Grundlage. Lesen Sie jeden Befund deshalb zusammen mit seinem Datum. Wir prüfen die Tabelle erneut, sobald ein Befund älter als 90 Tage ist.

Die eigentliche Lücke ist der Loader. GreatFires jüngster Test von `js.hs-scripts.com` am 13. September 2026 lief über unverschlüsseltes HTTP. Eine per HTTPS ausgelieferte Seite ruft das Skript aber über HTTPS ab, und GreatFire weist darauf hin, dass beide Protokolle mit unterschiedlichen Mitteln gefiltert werden. Über Ihre Besucher sagt dieser Befund also nichts. Die letzte HTTPS-Messung einer HubSpot-Skriptadresse stammt vom 14. Juli 2026 und liegt damit jenseits der 90 Tage, die wir einem Befund zugestehen. Wir führen das Skript deshalb als ungetestet.

Auch Ladezeiten schließen die Lücke nicht. 21YunBox, dessen Messsonden auf dem Festland wir an anderer Stelle zitieren, veröffentlicht keine Zahl zu HubSpot (seine HubSpot-Seite, überprüft am 7. Oktober 2026, behandelt die Datenresidenz). Welche anderen Tools eine Marketing-Website typischerweise lädt, zeigt unsere [Übersicht, was die Great Firewall sperrt, Host für Host](/de/ressourcen/china-web-leitfaden/great-firewall-china/).

## Was ein hängendes Tracking-Skript kostet

HubSpot verlangt, den Tracking-Code unmittelbar vor dem schließenden `</body>`-Tag einzufügen. Der Code lädt zunächst einen Loader von `js.hs-scripts.com`, dann das Tracking-Skript von `js.hs-analytics.net`. Eine dritte Datei von `js.hs-banner.com` setzt die HubSpot-Cookies, auch wenn Sie das Consent-Banner von HubSpot gar nicht nutzen. (HubSpots eigene Anleitung zur Fehlerbehebung geht davon aus, dass alle drei im Netzwerk-Tab des Browsers auftauchen.)

> Funktioniert der Tracking-Code nicht, so HubSpot, können Daten, die vom Tracking abhängen, „unvollständig oder nicht verfügbar sein“, Chat-Widgets „möglicherweise nicht wie erwartet funktionieren“, und HubSpot „kann Tracking-Daten, die während der Inaktivität des Codes verpasst wurden, nicht wiederherstellen“.
> Quelle: HubSpot Knowledge Base, Troubleshoot the HubSpot tracking code, 23. Juli 2026. https://knowledge.hubspot.com/reports/how-do-i-know-if-my-hubspot-tracking-code-is-working

Weil der Code am Ende der Seite steht, nach den Inhalten, sieht der Besucher die Seite auch dann, wenn das Skript hängt. Verloren geht die Aufzeichnung: Besuche aus China kommen lückenhaft oder gar nicht an, und die darauf aufbauenden Attributionsberichte werden verzerrt, ohne dass Ihr Team das von London oder Boston aus bemerken könnte. Um die Lücke sichtbar zu machen, lassen Sie neben HubSpot einen Zähler auf Ihrem eigenen Server laufen und vergleichen Sie die Sitzungen aus China.

Der Chat hängt am selben Code. Laut HubSpots Installationsanleitung laden Live-Chat-Widgets ohne ihn nicht. Unser [Leitfaden zu Google Analytics in China](/de/ressourcen/china-web-leitfaden/google-analytics-china/) behandelt Baidu Tongji (百度统计) und selbst gehostete Zähler.

## In den Formularen gehen die Leads verloren

Ein eingebettetes HubSpot-Formular entsteht erst im Browser des Besuchers. Der Einbettungscode lädt `js.hsforms.net/forms/embed/v2.js` und lässt das Formular von dieser Datei zeichnen. Kommt sie nie an, sieht der Besucher an der Stelle des Formulars eine leere Fläche. Die Datei auf den eigenen Server zu kopieren, liegt als Ausweg nahe. HubSpot schließt das aus.

> „HubSpot-Formulare sollten nur über die von HubSpot gehostete JavaScript-Datei geladen werden. Eine Kopie des Einbettungscodes selbst zu hosten, wird nicht unterstützt.“
> Quelle: HubSpot-Entwicklerdokumentation, HubSpot forms, zuletzt geändert am 29. März 2026. https://developers.hubspot.com/docs/cms/start-building/building-blocks/modules/forms

Und Ihr eigenes HTML-Formular, das HubSpots Tool für Nicht-HubSpot-Formulare erfasst? Es hängt ebenfalls am Tracking-Code.

> „Das Tool für Nicht-HubSpot-Formulare ist vom Tracking-Code abhängig. HubSpot kann Formulareinsendungen nur erfassen, wenn der Tracking-Code erfolgreich geladen wird.“
> Quelle: HubSpot Knowledge Base, Use non-HubSpot forms, 27. Juli 2026. https://knowledge.hubspot.com/forms/use-non-hubspot-forms

Die Einsendung erreicht zwar das Postfach oder den Server, an den das Formular sendet. HubSpot erfährt davon aber nichts, und der Kontakt landet nie in der Warteschlange Ihres Vertriebs.

Behalten Sie das Formular deshalb selbst in der Hand. Bauen Sie es in schlichtem HTML auf Ihrem eigenen Server und speichern Sie jede Einsendung zuerst dort. Leiten Sie sie anschließend über die API Submit data to a form an HubSpot weiter, die HubSpot als Alternative zum Tool für Nicht-HubSpot-Formulare nennt. Scheitert die Weiterleitung, sendet ein Wiederholungsjob sie später erneut, und der Lead liegt längst in Ihrer Datenbank. Betreiben Sie auch diesen Job auf einem Server auf dem Festland: Die Weiterleitung überquert die Grenze, und für `api.hsforms.com` gibt es keinen Test.

> HubSpot dokumentiert einen Endpunkt ohne Authentifizierung, https://api.hsforms.com/submissions/v3/integration/submit/{portalId}/{formGuid}, über den sich die Daten einer Formulareinsendung an ein HubSpot-Formular senden lassen.
> Quelle: HubSpot-Entwicklerdokumentation, Submit data to a form, zuletzt geändert am 29. März 2026. https://developers.hubspot.com/docs/api-reference/legacy/marketing/forms/v3-legacy/submit-data-unauthenticated

## Eine Website auf HubSpot CMS ist eine Hosting-Frage

Hostet HubSpot die Website selbst, werden die Skripte zur kleineren Sorge.

> HubSpots Produktinfrastruktur läuft auf Amazon Web Services in den USA (Virginia und Oregon), in Kanada (Montreal), in Australien (Sydney) und in der Europäischen Union (Deutschland). Ein Rechenzentrum in Festlandchina ist nicht aufgeführt.
> Quelle: HubSpot Knowledge Base, Cloud Infrastructure and Data Hosting FAQ, 24. Juli 2026. https://knowledge.hubspot.com/account-security/hubspot-cloud-infrastructure-and-data-hosting-frequently-asked-questions

Die Seiten erreichen die Besucher über HubSpots CDN, das die Entwicklerdokumentation als „von Cloudflare betrieben“ beschreibt. Keine der beiden HubSpot-Seiten zum CDN erwähnt China.

Hinzu kommt die ICP-Registrierung, und an ihr scheitert das Vorhaben. Registriert wird ein Server auf dem Festland, und zwar über den Anbieter, der ihn betreibt.

> Eine Domain, die auf einen Server in Festlandchina auflöst, muss die Website-Registrierung abschließen, bevor die Website für Besucher freigeschaltet werden kann („域名解析至中国内地服务器必须先完成网站备案，才能正常开通网站访问“).
> Quelle: Hilfecenter von Alibaba Cloud (阿里云), 4. September 2026. https://help.aliyun.com/zh/dws/support/how-do-i-troubleshoot-the-failures-to-access-a-website-by-using-its-domain-name

HubSpot nennt kein Rechenzentrum auf dem Festland, eine bei HubSpot gehostete Website hat also nichts, worauf sich eine Registrierung beziehen könnte. Es bleiben zwei Auswege.

Der erste ist eine eigene Website für China, gebaut mit WordPress oder Astro auf Alibaba Cloud oder Tencent Cloud (腾讯云), in China registriert und mit Formularen, die wie oben beschrieben in dasselbe HubSpot-Portal einspeisen. Die China-Seiten aus HubSpot herauszulösen, ist [ein eigenständiges Migrationsprojekt](/de/leistungen/china-migration/), und es ist der Weg, den wir für eine Website wählen würden, die jeden Tag funktionieren muss.

Der zweite ist ein Reverse Proxy: ein CDN auf dem Festland, auf einer registrierten Domain, vor HubSpot geschaltet. HubSpot akzeptiert einen Proxy nur auf einem CDN oder einem verteilten Netz, und der Support richtet ihn nicht für Sie ein. Jede Seite, die der Proxy abruft, kommt weiterhin von HubSpots Servern außerhalb Chinas und überquert die Grenze auf einem Weg, den kein veröffentlichter Test abdeckt.

Wo die Kontaktdaten gespeichert werden, ist eine eigene Frage, die das PIPL regelt; unser [Leitfaden zu Chinas Datenschutzregeln](/de/ressourcen/china-web-leitfaden/datenschutz-china-pipl-dsl/) geht ihr nach.

## Häufige Fragen

**Funktioniert HubSpot in China?**

Die HubSpot-App war bei GreatFires letztem Test am 22. September 2026 erreichbar, ein Team in Shanghai sollte sich also einloggen können. Der API-Host von HubSpot ist weniger verlässlich: gestört bei seinem einzigen Test am 10. September 2026. Für die Skripte auf den Seiten Ihrer Besucher gibt es überhaupt keinen aktuellen HTTPS-Test.

**Kann ich HubSpot-Formulare auf einer in China gehosteten Website nutzen?**

Ja, sofern das Formular kein HubSpot-Skript braucht, um überhaupt zu existieren. Bauen Sie es in HTML auf Ihrem Server auf dem Festland und speichern Sie jede Einsendung dort. Ein Hintergrundjob leitet sie dann über die API Submit data to a form an HubSpot weiter und versucht es erneut, wenn der Aufruf scheitert.

**Hat HubSpot ein Rechenzentrum in China?**

Nein. HubSpot nennt Rechenzentren in den USA, in Kanada, Australien und Deutschland, alle auf Amazon Web Services, und keines in Festlandchina (24. Juli 2026). Damit ist eine ICP-Registrierung für eine bei HubSpot gehostete Website ausgeschlossen. Zudem werden die Kontaktdaten chinesischer Besucher so zu einer grenzüberschreitenden Übermittlung, mit eigenen Pflichten nach dem PIPL.
