---
title: "Elementor, Divi und Gutenberg in China"
subtitle: "Bevor Sie einen Pagebuilder für Festlandchina wählen, sollten Sie Schriftverwaltung, Editor-Anfragen und lokale Ressourcen vergleichen."
summary: "Elementor, Divi und Gutenberg auf Websites für China: was Quellcode und Dokumentation über Schriften und externe Anfragen belegen, samt Editor."
visual: "/images/guides/page-builders-china.webp"
order: 47
published: true
publishedAt: "2026-10-19"
updatedAt: "2026-10-19"
reviewBy: 2026-11-19
category: "Technology"
author: "cyril-drouin"
---

Wer eine Elementor-Website für China vorbereitet, muss sowohl die öffentliche Seite als auch den Editor prüfen. Elementor kann Google Fonts über seine Einstellungen vom eigenen Server ausliefern, doch der Editor der Version 4.3.4 registriert eine bei Google gehostete Schrift, die diese Einstellungen umgeht. Divi dokumentiert seine Schriftoptionen; der Gutenberg-Kern schickt von der öffentlichen Seite standardmäßig keine Anfrage an Google Fonts. Theme und Erweiterungen bleiben dennoch zu prüfen.

| Pagebuilder | Was belegt ist | Was Sie auf Ihrer Website prüfen sollten |
|---|---|---|
| Elementor 4.3.4 | Getrennte Schrifteinstellungen; mitgelieferte Icon-Bibliotheken | Öffentliche Schrift-URLs, Roboto-Anfrage des Editors, Widgets von Add-ons |
| Divi | Dokumentierte Google-Fonts-Optionen | Installierte Version, gespeicherte Einstellungen, tatsächliche Schriftanfragen |
| Gutenberg-Kern in WordPress 7.1.3 | Standardmäßig kein Laden von Google Fonts auf der öffentlichen Seite | Schriften des Themes, hinzugefügte Blöcke, Schriftinstallation |

Wir haben Quellcode und Dokumentation am 19. Oktober 2026 geprüft. Die unten genannten Versionsnummern geben den untersuchten Stand an. Die Netzwerkdaten stammen aus veröffentlichten Tests Dritter zu einzelnen Hosts; eine Geschwindigkeitsrangliste der Pagebuilder haben wir nicht erstellt.

## Woher die Anfragen kommen

Im Pagebuilder wählt Ihr Team Schriften aus und fügt Widgets hinzu. Jede dieser Entscheidungen kann eine Anfrage an einen Server außerhalb Ihrer Website auslösen. Verfolgen Sie bei einer Schrift die Anfrage des Stylesheets bis zu der Datei, die die Buchstaben tatsächlich zeichnet, und zwar auf einer Seite, die diese Schrift verwendet.

Trennen Sie, was ein Besucher herunterlädt, von dem, was ein Redakteur zum Arbeiten braucht. Ein Marketingteam kann eine saubere öffentliche Seite sehen, während sein Bearbeitungsbildschirm weiterhin einen Schriftdienst im Ausland anspricht. Prüfen Sie die Ressourcen-URLs der veröffentlichten Seite auch dann, wenn das Bearbeiten funktioniert.

Unser [Überblick über WordPress in China](/de/wordpress-in-china/) behandelt das Hosting. Beim Pagebuilder setzen Sie bei den Schrifteinstellungen an und verfolgen die Anfragen, die daraus entstehen. Notieren Sie die installierte Version, bevor Sie etwas ändern, damit ein anderer Entwickler die Prüfung nach einem Update wiederholen kann.

## Elementor in China: zwei Einstellungen auf dem Prüfstand

Öffnen Sie in Elementor 4.3.4 **Elementor > Settings > Advanced > Google Fonts**. In der untersuchten Version steht diese Einstellung standardmäßig auf Enable. Sie bestimmt, ob die von Elementor erzeugten öffentlichen Seiten Google Fonts verwenden. Deaktivieren Sie sie, wenn die Schriften auf anderem Weg eingebunden werden, etwa über die lokalen Dateien Ihres Themes.

Unter **Elementor > Settings > Performance** steht die separate Einstellung Load Google Fonts Locally standardmäßig auf Disable. Auf diese Option kommt es an, wenn Sie die in Elementor gewählten Google-Schriften behalten, die Dateien aber von Ihrer eigenen Website ausliefern möchten. Gehen Sie nicht davon aus, dass die Einstellung einer früheren Installation auch für eine neue gilt.

> Elementor kündigte am 18. September 2025 an, dass Load Google Fonts Locally standardmäßig deaktiviert ist; der Quellcode der Version 4.3.4 behält diesen Standardwert bei.
> Quelle: Elementor, September 2025; versionierter Quellcode im Oktober 2026 geprüft. https://github.com/elementor/elementor/issues/32838 https://downloads.wordpress.org/plugin/elementor.4.3.4.zip

| Einstellung in Elementor 4.3.4 | Menü-Registerkarte | Gespeicherte Option | Standardwert |
|---|---|---|---|
| Google Fonts | Advanced | `elementor_google_font` | Enable |
| Load Google Fonts Locally | Performance | `elementor_local_google_fonts` | Disable |

Bewahren Sie eine Kopie der ursprünglichen Einstellungen auf, damit Sie sie wiederherstellen können, falls sich die Typografie einer Seite unerwartet ändert.

Testen Sie die gewählte Schriftauslieferung auf einer Staging-Kopie an einer Seite, die Ihr Team regelmäßig bearbeitet und die echte Überschriften und echten Fließtext enthält. Leeren Sie nach der Änderung der Einstellungen die generierten Styles und die Caches, und laden Sie die Seite bei deaktiviertem Browser-Cache neu. Kontrollieren Sie sowohl die URL des Stylesheets als auch die URLs der Schriftdateien, die es enthält: Ein Stylesheet, das Ihre Domain ausliefert, kann trotzdem auf eine Schriftdatei an anderer Stelle verweisen. Vergewissern Sie sich, dass die lokalen Schriftdateien vollständig geladen werden, bevor Sie die Änderung abnehmen.

Überschriften brauchen eine eigene Prüfung. Eine Auswahl auf Seitenebene oder ein hinzugefügtes Widget kann von der globalen Typografie der Website abweichen. Testen Sie auch die chinesische Version: Die Schrift, die lateinische Überschriften darstellt, überlässt chinesische Zeichen womöglich einer Ersatzschrift. Das kann die Zeilenumbrüche verändern, selbst wenn jede Anfrage abgeschlossen wird.

## Der Editor fragt weiterhin bei Google nach Roboto

Die Einstellungen für die öffentliche Seite decken nicht die gesamte Bearbeitungsumgebung ab. In der untersuchten Version registriert `register_base_styles()` den Handle `google-font-roboto` mit der Adresse `fonts.googleapis.com`, ohne die Google-Fonts-Option abzufragen. Das Stylesheet `elementor-editor` führt diesen Handle unter seinen Abhängigkeiten.

Auch Elementors eigene Admin-Leiste lädt Roboto von Google. Ein Entwickler, der nur die Startseite prüft, übersieht diese zweite Quelle von Anfragen.

> Elementor 4.3.4 registriert das Roboto-Stylesheet des Editors ohne Bedingung an die Schrifteinstellung; seine Admin-Leiste ruft separat ein Google-Stylesheet auf.
> Quelle: Elementor, Version 4.3.4, Quellcode im Oktober 2026 geprüft, core/editor/loader/editor-loader.php und modules/admin-top-bar/module.php. https://downloads.wordpress.org/plugin/elementor.4.3.4.zip

Öffnen Sie anschließend eine bestehende Seite im Editor. Suchen Sie im Netzwerk-Panel des Browsers nach `fonts.googleapis.com` und `fonts.gstatic.com`, und ermitteln Sie das Stylesheet, das die jeweilige Anfrage ausgelöst hat. Wenn Sie ein Editor-Stylesheet ersetzen, lassen Sie den registrierten Handle auf die Ersatzdatei zeigen, damit abhängige Styles weiterhin geladen werden. Testen Sie die Bearbeitungsfunktionen, bevor Sie die Änderung ausrollen.

Zuletzt kommt der Bearbeitungsablauf selbst an die Reihe: Speichern Sie eine Änderung, öffnen Sie die Seite erneut und benutzen Sie die Schriftauswahl. Bitten Sie die für die Inhalte zuständige Person, diesen Ablauf über ihre gewohnte Verbindung zu wiederholen.

## Elementors mitgelieferte Icons sind lokal

Font Awesome und eicons sind im Elementor-Paket enthalten. Im untersuchten Code werden ihre Pfade aus dem Asset-Verzeichnis des Plugins gebildet. Prüfen Sie diese lokalen Pfade, bevor Sie auf den Rat einer allgemeinen Fehlerbehebungsanleitung hin ein Icon-CDN ersetzen.

> Elementor 4.3.4 enthält Font Awesome und eicons in seinen lokalen Assets und registriert sie über die Asset-Pfade des Plugins.
> Quelle: Elementor, Version 4.3.4, Quellcode im Oktober 2026 geprüft. https://downloads.wordpress.org/plugin/elementor.4.3.4.zip

Lassen Sie die mitgelieferten Icons, wo sie sind, wenn ihre Anfragen abgeschlossen werden. Ein Add-on kann einen eigenen Icon-Dienst mitbringen, und ein websiteweites Umschreiben von Assets kann Auslieferungs-URLs verändern. Bevor Sie einen externen Aufruf entfernen, ermitteln Sie über die Spalte Initiator in den Entwicklertools, welche Komponente ihn auslöst.

Unser [Leitfaden zu WordPress-Plugins in China](/de/ressourcen/china-web-leitfaden/wordpress-plugins-china/) behandelt diese umfassendere Prüfung der Abhängigkeiten. Gehen Sie bei Skripten genauso sorgfältig vor: Die Bibliotheks-URL eines Themes kann mit dem Pagebuilder, den Sie reparieren wollen, nichts zu tun haben.

## Warum der Schrift-Host zählt

Die Cloud- und die Privatanschluss-Ergebnisse von 21YunBox sind gemeinsam zu lesen. Sie beschreiben denselben Schrift-Host in unterschiedlichen Netzen und an unterschiedlichen Tagen.

| Host | Alibaba Cloud (阿里云) cn-zhangjiakou | Privatanschluss China Mobile (中国移动), Peking | Antworten, Cloud / privat | Befund | Testdaten |
|---|---|---|---|---|---|
| fonts.googleapis.com | Median-TTFB 111 ms | Keine Antwort | 72 von 72 / 0 von 54 | Je nach Messpunkt verschieden | 28. / 30. August 2026 |

> 21YunBox fragte fonts.googleapis.com am 28. August 2026 zwölf Stunden lang alle zehn Minuten von Alibaba Cloud (阿里云) cn-zhangjiakou aus ab, mit einem Timeout von 30 Sekunden: 72 von 72 Anfragen wurden abgeschlossen, die mediane Zeit bis zum ersten Byte lag bei 111 ms. Die Messung über einen Privatanschluss von China Mobile (中国移动) in Peking am 30. August, mit 264 Seitenaufrufen auf 88 Websites und einer Obergrenze von 60 Sekunden pro Seite, verzeichnete 54 Anfragen an diesen Host und keine Antwort.
> Quelle: 21YunBox, A Chinese Cloud Probe Is Not a Chinese Visitor: The Same Hosts, Opposite Answers, August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Wer die Schriften selbst hostet, beseitigt diese externe Schriftanfrage. Stoßen Sie auf einen Host für Cloud-Vorlagen oder Editor-Dienste, führen Sie ihn als ungetestet, sofern ihn keine datierten Daten Dritter abdecken; für `my.elementor.com` oder `assets.elementor.com` geben wir hier keinen Befund zur Erreichbarkeit in Festlandchina ab.

Google Hosted Libraries ist eine eigene Prüfung wert, wenn ein Theme oder Add-on darauf zugreift.

> GreatFire führt https://ajax.googleapis.com als gesperrt, mit einem fehlgeschlagenen aussagekräftigen Test, zuletzt getestet am 22. August 2026. Stadt oder Netzbetreiber werden nicht genannt.
> Quelle: GreatFire, August 2026, im Oktober 2026 erneut geprüft. https://en.greatfire.org/api/url/https/ajax.googleapis.com

Verwenden Sie diesen Befund nur, wenn Ihre Anfrageliste den Host dieser Bibliothek enthält. Finden Sie heraus, welche Komponente ihn einbindet, bevor Sie entscheiden, was Sie ersetzen.

## Divi: Maßgeblich sind die Einstellungen Ihrer Version

Divi ist proprietär; seinen Code haben wir nicht untersucht. Die Theme-Options-Dokumentation von Elegant Themes aus dem Jahr 2023 nennt **Use Google Fonts** unter General und **Improve Google Fonts Loading** im Unterreiter Performance. Laut dieser Dokumentation speichert die zweite Option Google Fonts zwischen und lädt sie inline.

Die eigene Dokumentation zu Divi 5 bestätigt Use Google Fonts unter General. Stellen Sie Ihre Version fest, bevor Sie sich an einem älteren Screenshot der Einstellungen orientieren. Eine vollständige Liste der Hosts, die Divi zur Laufzeit aufruft, haben wir nicht überprüft, ebenso wenig, ob die ältere Caching-Option jede Anfrage an entfernte Schriftdateien beseitigt.

> Elegant Themes dokumentiert Use Google Fonts und Improve Google Fonts Loading in seiner älteren Theme-Options-Anleitung; die Anleitung zu Divi 5 dokumentiert Use Google Fonts.
> Quelle: Elegant Themes, 31. Dezember 2023 bzw. 18. September 2026. https://help.elegantthemes.com/en/articles/8626158-using-the-divi-theme-options https://help.elegantthemes.com/en/articles/12958885-divi-5-theme-options

Sichern Sie vor Änderungen an Divi die Typografie-Einstellungen. Wenn Sie Google Fonts deaktivieren, prüfen Sie das Schriftbild auf repräsentativen Seiten, bevor Sie die Änderung breit einführen. Sehen Sie sich eine ohne Anmeldung aufgerufene Seite und den Visual Builder getrennt an, jeweils mit geleerten Caches. Notieren Sie die beobachteten Anfragen, damit der nächste Entwickler sie überprüfen kann.

## Gutenberg im Kern: öffentliche Schriften ohne Umwege

Der Block-Editor des WordPress-Kerns lädt auf öffentlichen Seiten standardmäßig keine Google Fonts. In WordPress 7.1.3 bleiben die Registrierungen von Open Sans und Noto Serif in `script-loader.php` aus Gründen der Kompatibilität mit Themes und Plugins bestehen. Registrieren und Laden sind getrennte Schritte; ein Theme oder Plugin kann diese registrierten Styles anfordern.

> WordPress 7.1.3 kennzeichnet beide Google-Schriftregistrierungen als für Themes und Plugins beibehalten; der Kern selbst nutzt sie nicht mehr.
> Quelle: WordPress-Kern, Version 7.1.3, Quellcode im Oktober 2026 geprüft. https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/script-loader.php

Die Font Library hat einen eigenen Installationsweg. Ihre Google-Sammlung kommt von `s.w.org`. Nachdem die bearbeitende Person die Erlaubnis erteilt hat, holt ihr Browser die Schriftdateien von Google und lädt sie auf Ihre Website hoch. Installierte Schriften werden danach lokal ausgeliefert. Eine Installation kann also scheitern, bevor überhaupt ein Besucher die Seite öffnet.

> WordPress 7.1.3 definiert die Google-Sammlung in fonts.php und nutzt im Browser downloadFontFaceAssets, bevor die Schriftdateien hochgeladen werden.
> Quelle: WordPress-Kern, Version 7.1.3, Quellcode im Oktober 2026 geprüft. https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/fonts.php https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/js/dist/editor.js

Gutenberg läuft zudem innerhalb einer kompletten WordPress-Installation. Ein Block-Theme bringt seine eigene Schriftwahl mit. Der Kern kann Avatare von `secure.gravatar.com` und Emoji-Bilder von `s.w.org` anfordern, wenn diese Funktionen genutzt werden. Themes und hinzugefügte Blöcke können weitere Aufrufe nach sich ziehen.

> WordPress 7.1.3 baut Avatar-URLs auf secure.gravatar.com auf und definiert Emoji-Bild-URLs auf s.w.org.
> Quelle: WordPress-Kern, Version 7.1.3, Quellcode im Oktober 2026 geprüft. https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/link-template.php https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/formatting.php

## Die Wahl richtet sich nach der Arbeit der Redaktion

Für eine neue Website mit gewöhnlichen Inhaltslayouts nehmen Sie zuerst die Kern-Blöcke und ein Theme mit lokalen Schriften in den Blick. Bei einer bestehenden Elementor- oder Divi-Website sehen Sie sich erst die Anfragen an, bevor Sie Budget für einen Neubau einplanen. Klären Sie, wer die Layouts pflegen wird und wie viele bestehende Inhalte umziehen müssten, bevor Sie sich auf einen anderen Pagebuilder festlegen.

| Ausgangslage | Praktischer Startpunkt | Was Sie festhalten sollten |
|---|---|---|
| Bestehende Elementor-Website | Layouts behalten; Schriftauslieferung korrigieren | Anfrageprotokolle von öffentlicher Seite und Editor |
| Bestehende Divi-Website | Version und Einstellungen bestätigen | Gespeicherte Einstellungen und beobachtete Schrift-URLs |
| Neue redaktionelle Website | Kern-Blöcke und lokale Theme-Ressourcen prüfen | Repräsentative Layouts und geprüfte Schriftinstallation |

Unser [Leitfaden zur WordPress-Geschwindigkeit in China](/de/ressourcen/china-web-leitfaden/wordpress-geschwindigkeit-china/) behandelt die Performance umfassender. Halten Sie die Prüfung des Pagebuilders so überschaubar, dass die Person, die die Website übernimmt, sie nach einem Plugin- oder Theme-Update wiederholen kann. Übertragen Sie sie der Person, die Updates freigibt, und legen Sie Datum und installierte Versionen zusammen mit den Anfrageprotokollen neben den Einstellungen ab.

## Häufige Fragen

**Funktioniert Elementor in China?**

Elementor bietet Einstellungen, mit denen sich die Schriftauslieferung öffentlicher Seiten ändern lässt. Der Quellcode der Version 4.3.4 zeigt jedoch zusätzliche Schriftanfragen des Editors, sodass eine saubere Startseite die Frage nach dem Bearbeiten nicht beantwortet. Notieren Sie die installierte Version und prüfen Sie die Anfragen Ihrer Widgets. Bearbeiten Sie danach probeweise eine echte Seite. Eine Gesamterfolgsquote des Pagebuilders in Festlandchina haben wir nicht gemessen.

**Gilt das Abschalten von Google Fonts in Elementor auch für den Editor?**

In der untersuchten Version 4.3.4 registriert der Editor Roboto von Google, ohne diese Einstellung zu prüfen, und die Admin-Leiste setzt einen weiteren Aufruf ab. Behandeln Sie öffentliche Seite und Editor als zwei getrennte Prüfungen. Wenn Sie die Registrierung des Editor-Stylesheets ändern, lassen Sie seine Abhängigkeit intakt und kontrollieren Sie, ob Bearbeiten und Speichern weiterhin funktionieren.

**Welche Schrifteinstellung sollten wir in Divi prüfen?**

Beginnen Sie mit Use Google Fonts unter General, gemäß der Dokumentation Ihrer installierten Version. Die ältere Theme-Options-Anleitung nennt außerdem Improve Google Fonts Loading unter Performance. Wir haben den Code von Divi nicht untersucht; prüfen Sie daher die resultierenden URLs von Stylesheet und Schriftdateien, bevor Sie die Einstellung als Beleg für eine lokale Auslieferung werten.

**Ist Gutenberg in China schneller als Divi oder Elementor?**

Diese Prüfung liefert keine Geschwindigkeitsrangliste. Der Gutenberg-Kern vermeidet standardmäßig eine Google-Fonts-Anfrage auf der öffentlichen Seite, doch Theme und hinzugefügte Blöcke bestimmen weiterhin einen Großteil dessen, was eine Seite herunterlädt. Vergleichen Sie die tatsächlichen Layouts und Anfragelisten, die Sie veröffentlichen wollen. Wie schnell sie laden, hängt von den Dateien und Diensten ab, die jede Seite anfordert.
