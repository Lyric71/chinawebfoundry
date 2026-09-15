---
title: "WordPress-Plugins in China prüfen"
subtitle: "Welche externen Hosts Ihre WordPress-Plugins benötigen, wo Aufrufe scheitern und wie Sie die Abhängigkeiten prüfen."
summary: "WordPress in China: Abhängigkeiten mit datierten Netzwerktests prüfen und Fehler bei Schriften, Skripten, Formularen und Cloud-Diensten beheben."
visual: "/images/guides/wordpress-plugins-china.webp"
order: 35
published: true
publishedAt: 2026-09-15
updatedAt: 2026-09-15
category: Technology
author: cyril-drouin
---

Die Prüfung von WordPress-Plugins in China beginnt mit den Hosts, die sie aufrufen. Scheitert eine Skriptanfrage, kann sich die Seite verzögern. Auch auf einer geladenen Seite kann ein defektes Captcha den Versand von Kontaktanfragen verhindern. Hosten Sie notwendige Dateien selbst. Testen Sie Formulare und Editor anschließend über jene Festlandanschlüsse, die Ihre Besucher und Mitarbeiter nutzen.

Die veröffentlichten Tests zeigen, wie stark das Ergebnis vom Anschluss abhängt. Die letzte Spalte beschreibt ausschließlich den untersuchten Privatanschluss. Sie erlaubt keine Aussage über andere Netze.

| Host | Alibaba Cloud (阿里云), Zhangjiakou, 28. August 2026 | China-Mobile-Privatanschluss (中国移动), Peking, 30. August 2026 | Ergebnis am Privatanschluss |
|---|---|---|---|
| `fonts.googleapis.com` | 72 von 72, mediane TTFB 111 ms | 0 von 54 | blockiert |
| `fonts.gstatic.com` | 72 von 72, mediane TTFB 102 ms | 0 von 6 | blockiert |
| `cdn.jsdelivr.net` | 72 von 72, mediane TTFB 660 ms, p95 1.757 ms | 36 von 36 | erreichbar |
| `www.googletagmanager.com` | 72 von 72, mediane TTFB 118 ms | 0 von 112 | blockiert |
| `www.google.com/recaptcha` | 0 von 72 | 0 von 18 | blockiert |

> Die Zahlen abgeschlossener Anfragen und die Laufzeiten stammen von 21YunBox: Alibaba Cloud (阿里云), Zhangjiakou, 28. August 2026, eine Messung alle 10 Minuten über 12 Stunden mit einem Timeout von 30 Sekunden; außerdem ein China-Mobile-Privatanschluss (中国移动) in Peking am 30. August 2026 mit 88 Websites und 264 Seitenaufrufen.
> Quelle: 21YunBox, A Day of Third-Party Requests From Inside China, August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Die TTFB misst die Zeit bis zum ersten empfangenen Byte; p95 ist das 95. Perzentil. Cloud-Sonde und Browser am Privatanschluss arbeiten mit unterschiedlichen Messverfahren. Ob sich die Seite tatsächlich bedienen lässt, erfordert einen eigenen Test. Die Quellen wurden am 15. September 2026 überprüft. Die Messungen behalten ihre ursprünglichen Datumsangaben.

## Das Skript-Tag, das eine Seite aufhalten kann

Suchen Sie nach jQuery, das von Google Hosted Libraries unter `ajax.googleapis.com` geladen wird.

> GreatFire führt `ajax.googleapis.com` als blockiert. Grundlage ist der letzte aussagekräftige Test vom chinesischen Festland am 22. August 2026.
> Quelle: GreatFire, August 2026. https://en.greatfire.org/https/ajax.googleapis.com

Lädt ein Theme ein klassisches Skript ohne `async` oder `defer`, unterbricht der Browser das Einlesen des HTML, während er das Skript abruft und ausführt. Steht die Anfrage früh im Dokument, kann eine stockende Verbindung den nachfolgenden Inhalt verzögern. Die Wirkung hängt vom Tag und seiner Position ab.

> Klassische Skripte ohne `async`, `defer` oder Modulverhalten blockieren standardmäßig das Einlesen des HTML. Das Rendering ist ein eigener Mechanismus.
> Quelle: MDN, Referenz zum script-Element, aktualisiert am 9. Mai 2026. https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script

Ersetzen Sie die externe Kopie durch das mit WordPress gelieferte jQuery, sofern es kompatibel ist. Prüfen Sie die davon abhängigen Theme-Skripte, bevor Sie die Ladereihenfolge ändern. Wer eine weiterhin für Menüs oder Formulare benötigte Bibliothek entfernt, verursacht einen neuen Fehler.

Ergänzen Sie die reCAPTCHA-Zahlen um einen Funktionstest: Senden Sie eine Testanfrage und kontrollieren Sie ihren Eingang. Die Seite kann normal erscheinen, obwohl die erforderliche Captcha-Prüfung scheitert. Behalten Sie den Spamschutz bei, wenn Sie eine Alternative erproben.

## Jedes CDN braucht eine eigene Prüfung

jsDelivr schloss die Anfragen von beiden untersuchten Anschlüssen ab. Die Latenz aus dem Rechenzentrum steht in der Tabelle. Der Privatanschlusstest belegt abgeschlossene Anfragen, liefert aber keine vergleichbare Latenzangabe.

Benötigt die Seite eine Bibliothek zwingend, können Sie diese über den eigenen Ursprungsserver ausliefern. Prüfen Sie die Funktion nach der Einbindung und halten Sie die verwendete Version fest. Wer später das Update übernimmt, weiß dann, welche Datei ersetzt werden muss.

Für cdnjs und unpkg liegt hier kein vollständig datierter Test mit benanntem Standort vor. Ihr Status bleibt ungeprüft. Nehmen Sie Anfragen an `cdnjs.cloudflare.com` oder `unpkg.com` in Ihre eigene Prüfung auf.

## Google Fonts hängt vom Anschluss ab

Die beiden Tabellenzeilen zu Schriften gehören zusammen: Beide Hosts beantworteten jede Anfrage aus dem Rechenzentrum und keine vom untersuchten Privatanschluss. Lokal gehostete Schriften ersparen den Browsern Ihrer Besucher diesen externen Aufruf.

Prüfen Sie in Elementor ausdrücklich die Einstellung für lokal gehostete Schriften.

> Laut Elementors Ankündigung vom 18. September 2025 ist Load Google Fonts Locally standardmäßig deaktiviert. Die Einstellung liegt unter Elementor > Settings > Performance.
> Quelle: Elementor, Issue 32838, 18. September 2025. https://github.com/elementor/elementor/issues/32838

Leeren Sie nach dem Aktivieren des lokalen Hostings den Seitencache. Prüfen Sie dann die Schriftanfragen auf der öffentlichen Seite und stellen Sie sicher, dass die Dateien von Ihrer Domain kommen. Einstellungen und gespeicherte Dateien können je nach Installation abweichen. Kontrollieren Sie das Ergebnis auch nach einem Update.

Öffnen Sie anschließend den Editor. Die Erreichbarkeit von `my.elementor.com` und `assets.elementor.com` vom chinesischen Festland ist weiterhin ungeprüft. Eine funktionierende öffentliche Seite belegt noch keinen funktionierenden Redaktionsablauf.

## Welche externen Hosts WordPress selbst aufruft

Ein Theme kann auf eine Schriftregistrierung zurückgreifen, die WordPress aus Kompatibilitätsgründen beibehält. Suchen Sie den Code, der den Abruf tatsächlich auslöst.

> WordPress behält in `script-loader.php` Google-Fonts-Registrierungen für Open Sans und Noto Serif. Die Kommentare erklären, dass der Kern sie nicht mehr nutzt, Themes oder Plugins aber darauf angewiesen sein können.
> Quelle: WordPress-Quellcode, gelesen am 15. September 2026. https://raw.githubusercontent.com/WordPress/WordPress/master/wp-includes/script-loader.php

Suchen Sie sowohl auf öffentlichen Seiten als auch in wp-admin nach Gravatar-Anfragen.

> GreatFire führt `secure.gravatar.com` als blockiert; der letzte Test stammt vom 31. August 2026. Der Anbieter nennt weder Stadt noch Netzbetreiber.
> Quelle: GreatFire, August 2026. https://en.greatfire.org/https/secure.gravatar.com

Wenn Avatare für die Website keinen Nutzen haben, können Sie sie deaktivieren. Prüfen Sie das Ergebnis auf Kommentarseiten und den üblichen Editoransichten. Unser [Leitfaden zu WordPress-Sperren in China](/de/ressourcen/china-web-leitfaden/ist-wordpress-in-china-gesperrt/) behandelt die weiteren Abhängigkeiten.

## Wenn ein externer Dienst die Website abrufen muss

Klären Sie vor dem Aktivieren einer Performance-Einstellung, welcher Rechner die Arbeit übernimmt.

> WP Rocket sendet Seiten-URLs an seine API. Diese ruft die Seiten ab und erzeugt daraus das verwendete CSS. Die Website muss für den Dienst öffentlich erreichbar sein.
> Quelle: WP Rocket, Wissensdatenbank, Remove Unused CSS, aktualisiert am 1. Juni 2026. https://docs.wp-rocket.me/article/1529-remove-unused-css

Steht der Ursprungsserver auf dem Festland, prüfen Sie, ob der Dienst ihn tatsächlich erreicht. Sehen Sie sich den Auftragsstatus und die Firewall-Protokolle an, bevor Sie Zugriffsregeln ändern. Die Network-Ansicht im Browser erfasst nicht den gesamten Weg. Schlägt die Verarbeitung beim Dienst fehl, muss die Ursache gesondert untersucht werden.

> QUIC.cloud empfängt Bilder aus der Mediathek in Stapeln und verarbeitet sie auf seinen Dienstknoten.
> Quelle: QUIC.cloud, Image Optimization, 6. April 2026. https://docs.quic.cloud/services/imageopt/

Die Dokumentation belegt eine externe Verarbeitung. Sie liefert weder ein Urteil zur Erreichbarkeit vom Festland noch einen Verarbeitungsort für Ihren Auftrag. Sie können Bilder auch vor dem Hochladen komprimieren. Unser [Leitfaden zum WordPress-Hosting in China](/de/ressourcen/china-web-leitfaden/wordpress-hosting-china/) behandelt die Wahl des Ursprungsservers, die mit diesen Plugin-Einstellungen zusammenhängt.

## So prüfen Sie WordPress-Plugins in China

Öffnen Sie in Chrome DevTools den Reiter Network, laden Sie die Seite neu und untersuchen Sie die Spalten Domain und Initiator. Halten Sie fest, welches Theme, Plugin oder Skript die Anfrage startet. Wiederholen Sie den Test auf einer Kontaktseite und während der Arbeit im Editor.

Unser [kostenloser China Site Scanner](/de/china-site-scanner/) erkennt bekannte Abhängigkeitsmuster im Quelltext der Website. Er kann die Erreichbarkeit im Netz nicht bestätigen. Ergänzen Sie diese Bestandsaufnahme durch einen Browsertest an einem Festlandanschluss. Notieren Sie Stadt, Netzbetreiber, Datum und die versuchte Aktion. Speichern Sie Fehler ebenso wie erfolgreich gesendete Anfragen, damit der Entwickler das Problem nachvollziehen kann.

Dokumentieren Sie mit den Ergebnissen auch Plugin-Versionen und geänderte Einstellungen. Beheben Sie eine Abhängigkeit, die Anfragen verhindert, vor einem optionalen Bild. Laden Sie nach jeder Änderung mit geleertem Cache neu und wiederholen Sie die betroffene Aktion. Kontrollieren Sie nach Theme- oder Builder-Updates erneut, denn diese können externe Aufrufe wiederherstellen.

## Was sich ersetzen lässt, Host für Host

Ermitteln Sie, welcher Bestandteil die Anfrage auslöst. Dort setzen Sie die Änderung an. Die Aussagen zur Erreichbarkeit gelten nur für die oben genannten Tests. Bei zwei Datumsangaben steht zuerst der Rechenzentrumstest, danach die Messung am Privatanschluss.

| Abhängigkeit | Dokumentierter Status | Was zu prüfen ist | Ersatz oder Maßnahme |
|---|---|---|---|
| Google Hosted Libraries | Blockiert, GreatFire, 22. August 2026 | Frühes Skript verzögert das Einlesen | Kompatibles lokales jQuery |
| Google Fonts | Im Rechenzentrum erreichbar; am getesteten Privatanschluss blockiert, 28./30. August 2026 | Herkunft der Schriften | Schriftdateien selbst hosten |
| Gravatar | Blockiert, GreatFire, 31. August 2026 | Avatar-Anfragen | Unnötige Avatare deaktivieren |
| Google reCAPTCHA | Beide Stichproben gescheitert, 28./30. August 2026 | Anfrage absenden | Alternative Formularprüfung testen |
| Google Tag Manager | Im Rechenzentrum erreichbar; am getesteten Privatanschluss blockiert, 28./30. August 2026 | Container lädt und Ereignisse kommen an | Jedes Tag einzeln prüfen |
| jsDelivr | Beide Stichproben abgeschlossen, 28./30. August 2026 | Notwendige Bibliothek | Benötigte Dateien lokal einbinden |
| cdnjs, unpkg | Hier ungeprüft | Jede angeforderte URL | Testen oder selbst hosten |
| WP Rocket Used CSS | Architektur dokumentiert; Netz ungeprüft | Dienst kann Seite abrufen | Auftragsabschluss prüfen |
| QUIC.cloud-Bilder | Architektur dokumentiert; Netz ungeprüft | Verarbeitung erfolgreich | Vor dem Hochladen komprimieren |

## Häufige Fragen

**Gibt es ein Plugin, das alles behebt?**

Verfolgen Sie die Anfrage bis zum auslösenden Bestandteil. Möglicherweise muss eine Theme- oder Builder-Einstellung geändert werden. Marketing-Tags brauchen eine eigene Prüfung. Wählen Sie ein Werkzeug, sobald feststeht, welcher Aufruf ersetzt werden muss. Testen Sie danach die geänderte Seite von einem Festlandanschluss und nehmen Sie diese Prüfung in Ihre Update-Routine auf.

**Kann ich das mit einem VPN testen?**

Das Testergebnis hängt vom Netz am VPN-Ausgang ab. Liegt dieser im Ausland, bildet er den Anschluss eines Festlandbesuchers nicht ab. Notieren Sie den Ausgangsstandort und den Resolver, bevor Sie das Ergebnis bewerten. Nutzen Sie für die Abnahme einen bekannten Festlandanschluss und führen Sie die Aufgaben eines Besuchers durch, einschließlich Formularversand oder Kaufabschluss.

**Müssen wir auf Elementor verzichten?**

Prüfen Sie öffentliche Seiten und Editor getrennt, bevor Sie entscheiden. Die Einstellung für lokale Schriften behandelt eine Abhängigkeit. Testen Sie die übrigen Anfragen und stellen Sie sicher, dass Ihre Redaktion ihre üblichen Aufgaben erledigen kann. Wegen der oben genannten ungeprüften Elementor-Hosts erlaubt dieser Leitfaden kein vollständiges Kompatibilitätsurteil für Ihre Installation auf dem Festland.

**Wie viele externe Hosts sollte eine Website für China aufrufen?**

Halten Sie wesentliche Seiteninhalte unabhängig von ungeprüften ausländischen Hosts. Bewerten Sie jeden übrigen Dienst anhand seiner Aufgabe: Ein Kontaktformular braucht erfolgreiche Übermittlungen, die Analyse braucht eingegangene Ereignisse. Unsere Seite [WordPress in China](/de/wordpress-in-china/) behandelt die weiteren Entscheidungen beim Aufbau. Auch eine kurze Hostliste erfordert einen Funktionstest.
