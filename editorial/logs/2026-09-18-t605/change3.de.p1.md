## Der Rest Ihrer Messung hat dasselbe Problem

GA herauszunehmen und ein anderes gehostetes Skript einzusetzen verschiebt das Problem nur auf einen anderen Hostnamen. Die meisten naheliegenden Alternativen sind ebenfalls ausländische Hosts, und mehrere davon fallen auf eine Art aus, die sich schwerer bemerken lässt als eine saubere Sperre.

Die Tabelle führt zwei Arten von Belegen zusammen, und sie beantworten verschiedene Fragen. GreatFire prüft, ob ein Host überhaupt erreichbar ist. 21YunBox misst echte Seitenaufrufe von einer Sonde auf dem Festland. Bei Hotjar widersprechen sich beide, und dieser Widerspruch ist das Nützlichste an der Tabelle.

| Werkzeug | Was die Tests zeigen | Abgeschlossene Anfragen | Quelle und Datum |
|---|---|---|---|
| Hotjar | Auf den Sonden von GreatFire gestört, wird aber von einer Alibaba-Cloud-Instanz aus abgeschlossen, erstes Byte nach 487 ms | 3 von 3 aus dem Rechenzentrum | GreatFire, 18. August 2026; 21YunBox, 30. August 2026 |
| Meta Pixel | `connect.facebook.net` blockiert | keine | GreatFire, 27. Mai 2026 |
| Microsoft Clarity | Antwortet schnell und bleibt dann hängen. Erstes Byte nach 541 ms, nichts innerhalb von 60 Sekunden fertig | 0 von 3 | 21YunBox, 28. August 2026 |
| Mixpanel | Dasselbe Muster. Erstes Byte nach 391 ms, nichts innerhalb von 60 Sekunden fertig | 0 von 3 | 21YunBox, 28. August 2026 |
| Segment | Wird abgeschlossen, aber langsam. Erstes Byte nach 900 ms in einem Durchlauf und nach 1.084 ms in einem anderen | 3 von 3 | 21YunBox, 28. und 30. August 2026 |
| Plausible | Wird abgeschlossen. Erstes Byte nach 550 ms, LCP nach 1.208 ms | 3 von 3 | 21YunBox, 28. August 2026 |
| Matomo Cloud | Wird abgeschlossen. Erstes Byte nach 516 ms, LCP nach 1.532 ms | 3 von 3 | 21YunBox, geprüft am 29. August 2026 |

> Alle Zeiten in der Tabelle oben wurden von einer Sonde in Festlandchina gemessen, auf Alibaba Cloud (阿里云) cn-zhangjiakou, drei Durchläufe je Werkzeug mit Abbruch nach 60 Sekunden, zwischen dem 28. und dem 30. August 2026.
> Quelle: 21YunBox, Messungen je Werkzeug in China, August 2026. https://www.21cloudbox.com/support/microsoft-clarity-china.html

Ein Rechenzentrum in Zhangjiakou ist keine Wohnung in Peking. Lesen Sie diese Zahlen als besten Fall und gehen Sie davon aus, dass Ihre Besucher Schlechteres bekommen.

Dieser Abstand erklärt allein die zwei Urteile über Hotjar. 21YunBox hat seinen Test aus einem Rack gefahren. Die Sonden von GreatFire haben dagegen etwas anderes gesehen, und ein Host, der einem Rechenzentrum antwortet, kann eine private Leitung durchaus übergehen. Solange Sie Hotjar nicht auf Ihrem eigenen Traffic gemessen haben, nehmen Sie an, dass es beides tut.

Clarity und Mixpanel sind die zwei Zeilen, die man zweimal lesen sollte. Keiner der beiden Hosts steht auf einer Sperrliste. GreatFire führte `www.clarity.ms` am 15. September 2026 als normal erreichbar, und `api.mixpanel.com` ebenso beim letzten Test am 17. April 2026. Trotzdem lieferten beide ein erstes Byte in unter 600 ms und brachten danach innerhalb einer Minute nichts zu Ende.

Eine harte Sperre wirft irgendwann einen Fehler, den jemand bemerkt. Eine hängende Anfrage sitzt dagegen still da, bis der Browser aufgibt, und Ihre Sitzungsaufzeichnung fällt schlicht dünner aus als sie sollte, ohne dass eine Warnung Ihnen das je sagen würde.

### Amplitude und der Fehler, nach dem Sie suchen sollten

Amplitude lädt sein Skript von einem Hostnamen und schickt die Events an einen anderen. Wenn ein Produkt sich so aufteilt, können die beiden Hostnamen von demselben Netz unterschiedliche Antworten bekommen. Das Skript lädt, die Events gehen nie raus. Ihr Dashboard sieht in beiden Fällen gesund aus.

Im April 2026 führte GreatFire `cdn.amplitude.com` als erreichbar und `api.amplitude.com` als blockiert, genau dieses Muster. Wir haben beide Hostnamen für diese Aktualisierung am 17. September 2026 erneut getestet.

> `cdn.amplitude.com` nicht blockiert, letzter Test am 14. September 2026, der einzige aussagekräftige Test der jüngeren Zeit kam normal zustande. `api.amplitude.com` nicht blockiert, letzter Test am 10. September 2026, 0 von 1 Test in den vergangenen 90 Tagen gestört. Über 13 getestete amplitude.com-URLs verzeichnet GreatFire 1 blockierte, 3 gestörte und 9 erreichbare.
> Quelle: GreatFire, September 2026. https://en.greatfire.org/https/api.amplitude.com

Die Aufteilung vom April hat sich im September nicht wiederholt. Beide Werte stützen sich jeweils auf einen einzigen aussagekräftigen Test, was in die eine wie in die andere Richtung dünn bleibt, und die Streuung über die ganze Domain spricht für ein weiterhin uneinheitliches Bild.

Darin liegt die eigentliche Lehre. Ein Urteil, das man irgendwo liest, trägt ein Datum, und fünf Monate reichen, damit es nicht mehr stimmt. Testen Sie getrennt den Hostnamen, von dem Ihr Skript lädt, und den, an den es sendet, aus einem Netz in dem Land, das Sie interessiert.

### Was Sie stattdessen einsetzen

Baidu Tongji (百度统计) zuerst, wenn der Festlandmarkt für Sie zählt. Die Server stehen im Land, die Anfrage überschreitet also keine Grenze, und die Auswertung ist um den Traffic von Baidu (百度) herum gebaut, also genau um den Traffic, den Sie verstehen wollen. Sensors Data (神策) und GrowingIO sind die schwereren heimischen Optionen.

Andernfalls hosten Sie selbst. Plausible und Matomo haben jeden Durchlauf in der Tabelle abgeschlossen, und beide lassen sich auf Ihrem eigenen Server auf dem Festland installieren. Aus einer ausländischen Abhängigkeit wird damit eine First-Party-Anfrage, und die rechtliche Frage aus dem nächsten Abschnitt erledigt sich gleich mit.

Ein Vorbehalt, weil es auf dieser Seite vor allem um einen Filter geht. Ein selbst gehosteter Analytics-Endpoint in China braucht gar keinen Filter, denn es gibt nichts aufzuhalten. Behalten Sie die Route `/ga.js` für GA und für alles andere, was Sie von einem ausländischen Host laden, und lassen Sie das heimische Werkzeug für alle laufen.

## Das PIPL gilt auch für Hosts, die antworten

Erreichbarkeit und Rechtslage sind zwei verschiedene Fragen, und die zweite gilt, ob ein Host antwortet oder nicht.

Google Analytics schickt eine Client-ID und eine IP-Adresse an Google. Nach dem chinesischen Gesetz zum Schutz personenbezogener Informationen sind beide personenbezogene Informationen, und sie aus dem Festland herauszuschicken ist ein grenzüberschreitender Transfer.

> Stellt ein Verarbeiter personenbezogener Informationen personenbezogene Informationen außerhalb des Hoheitsgebiets der Volksrepublik China bereit, so unterrichtet er die betroffene Person über Namen und Kontaktdaten des ausländischen Empfängers, über Zweck und Art der Verarbeitung, über die Kategorien der personenbezogenen Informationen und über den Weg, auf dem sie ihre Rechte gegenüber diesem Empfänger ausüben kann, und er holt ihre gesonderte Einwilligung ein.
> Quelle: Cyberspace Administration of China (中央网络安全和信息化委员会办公室), Gesetz der Volksrepublik China zum Schutz personenbezogener Informationen, Artikel 39. Verabschiedet am 20. August 2021, in Kraft seit dem 1. November 2021. https://www.cac.gov.cn/2021-08/20/c_1631050028355286.htm

Gesonderte Einwilligung heißt ein eigenes Opt-in für diesen Transfer, nicht eine Zeile in einem Banner, das alles auf einmal abdeckt.

Dieses Argument bewegt sich nicht, wenn das Netz sich bewegt. Fängt ein gesperrter Host nächsten Monat wieder an zu antworten, oder verschiebt Google einen Hostnamen, bleibt der Transfer ein Transfer. Der Filter schließt beide Fragen auf einmal: keine Anfrage verlässt den Browser, es gibt also keinen Transfer, für den eine Rechtsgrundlage zu finden wäre. Unser Leitfaden zu [PIPL und Datensicherheitsgesetz](/de/ressourcen/china-web-leitfaden/datenschutz-china-pipl-dsl/) behandelt die Schwellenwerte und die Meldewege.
