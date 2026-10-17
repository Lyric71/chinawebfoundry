---
title: "Warum wp-admin in China so langsam ist"
subtitle: "In Shanghai lädt die öffentliche Website, doch das WordPress-Backend kriecht. Woran das liegt und wie das Team vor Ort wieder zügig arbeiten kann."
summary: "Die Website lädt, das Dashboard kriecht. Schuld sind Gravatar, die Update-Server und Editor-Schriften. Das meiste ist an einem Nachmittag behoben."
visual: "/images/guides/wp-admin-slow-china.webp"
order: 42
published: true
publishedAt: "2026-10-12"
updatedAt: 2026-10-18
reviewBy: "2026-11-20"
category: "Technology"
author: "echo-peng"
---

Wenn Ihre öffentliche Website in Shanghai normal lädt, die WordPress-Verwaltung in China aber langsam ist, sollten Sie die Aufrufe prüfen, die nur das Backend absetzt. Drei davon gehören zuerst auf den Prüfstand. Gravatar, auf jedem Verwaltungsbildschirm angefragt, ist gesperrt. Hinzu kommt der Server: Steht er auf dem chinesischen Festland, fragt er bei WordPress.org nach Updates und stößt auf eine Ratenbegrenzung. Schließlich beziehen die Seiteneditoren ihre Schriften von Google, das in manchen chinesischen Netzen antwortet und in anderen nicht.

Zwei dieser Aufrufe gehen vom Browser Ihres Teams aus; der dritte kommt vom Server, und auch das nur, wenn dieser auf dem Festland steht.

| Ausgehender Aufruf | Wer den Aufruf absetzt | Wohin er geht | Was das Team sieht | Erste Abhilfe |
| --- | --- | --- | --- | --- |
| Avatare | Der Browser in China | secure.gravatar.com, gesperrt | Leere Avatar-Felder auf jedem Bildschirm | Avatare abschalten oder auf einen Spiegel auf dem Festland umleiten |
| Update-Prüfungen | Ein Server auf dem Festland | api.wordpress.org, drosselt IP-Adressen vom Festland | Updates erscheinen nicht mehr; eine hängende Prüfung hält die Seite auf | Ein Spiegel, oder Updates von außerhalb einspielen |
| Editor-Schriften | Der Browser in China | fonts.googleapis.com, fonts.gstatic.com | Der Elementor-Editor wartet auf ein Stylesheet; Installationen von Google-Schriften scheitern | Elementors Roboto umleiten, auf Google-Schriften verzichten |

Alle unten zitierten Quellen wurden am 12. Oktober 2026 geprüft.

## Warum die WordPress-Verwaltung in China langsam ist

In China setzt die Performance-Arbeit meist bei der öffentlichen Seite an, schließlich sehen die Kunden sie. Das Dashboard kommt erst an die Reihe, wenn das Marketingteam in Shanghai an einem Montagmorgen nichts mehr veröffentlichen kann.

Fragen Sie zuerst, welcher Rechner welchen Aufruf absetzt. Ihre Besucher öffnen wp-admin nie, Ihre Redakteure dagegen schon, aus einem Büro oder über einen privaten Anschluss in China, und ihr Browser holt alles, was die Verwaltungsbildschirme verlangen. Parallel dazu meldet sich Ihr Server bei WordPress.org, während er diese Bildschirme aufbaut.

Von dieser Aufteilung hängt die Lösung ab. Steht der Server in Frankfurt, gehen die Update-Aufrufe von dort aus und kommen durch; dann leidet nur die Browserseite. Liegt die Website auf dem Festland, leiden beide.

Um die Browserseite sichtbar zu machen, bitten Sie jemanden im Büro in Shanghai, die Entwicklertools auf dem Reiter Netzwerk zu öffnen, die Kommentarseite zu laden und nach „gravatar“ zu filtern. Die Update-Aufrufe des Servers tauchen dort nie auf.

## Gravatar steckt in jedem Verwaltungsbildschirm

WordPress bildet jeden Avatar aus einer einzigen Adresse, `secure.gravatar.com`, und setzt Avatare an mehr Stellen ein, als die meisten Teams erwarten. Die Werkzeugleiste zeigt auf jedem Bildschirm einen, dazu eine größere Version in ihrem Menü. Die Listen Kommentare und Benutzer zeigen einen pro Zeile, und das Widget Aktivität im Dashboard fügt für jeden neuen Kommentar einen hinzu.

> GreatFire stuft https://secure.gravatar.com in Festlandchina als gesperrt ein: Der einzige aussagekräftige Test der jüngsten Zeit, durchgeführt am 31. August 2026, schlug fehl. Alle 29 gravatar.com-Adressen, die GreatFire getestet hat, gelten als gesperrt.
> Quelle: GreatFire, August 2026. https://en.greatfire.org/https/secure.gravatar.com

Hinter jedem dieser Bilder steckt eine Anfrage, die der Browser nicht abschließen kann. Die Seite wird trotzdem angezeigt. Das Avatar-Feld bleibt leer, und nichts auf dem Bildschirm verrät, dass eine Anfrage gescheitert ist.

Einstellungen > Diskussion ist der schlimmste Bildschirm von allen.

Er zeigt eine Vorschau jedes Standard-Avatarstils, zehn insgesamt, und zwar auch dann, wenn Avatare abgeschaltet sind.

> WordPress 7.1.3 setzt vor der Anzeige der zehn Standard-Avatare auf dem Bildschirm der Diskussionseinstellungen einen Filter mit dem Kommentar „Force avatars on to display these choices“ (Avatare erzwingen, um diese Auswahl anzuzeigen).
> Quelle: WordPress-Kern 7.1.3, wp-admin/options-discussion.php, abgerufen am 12. Oktober 2026. https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-admin/options-discussion.php

Wer auf demselben Bildschirm das Häkchen bei „Avatare anzeigen“ entfernt, nimmt die Avatare von allen anderen Verwaltungsseiten.

## Die Update-Server und der stille 429-Fehler

Dieses Problem tritt nur auf, wenn der Server auf dem chinesischen Festland steht.

WordPress.org drosselt chinesische Netzquellen und hat das bereits 2020 schriftlich festgehalten.

> Ein Nutzer in China meldete HTTP-429-Fehler auf allen Subdomains von WordPress.org. WordPress.org antwortete, mehrere chinesische Netzquellen würden „wegen eines hohen Aufkommens an Missbrauch und illegitimem Verkehr“ gedrosselt, man werde sie nicht auf eine Whitelist setzen und keinen offiziellen Weg anbieten, WordPress.org über einen chinesischen Proxy zu spiegeln.
> Quelle: WordPress.org Meta Trac, Ticket #5106, 21. März 2020. https://web.archive.org/web/20260116133057/https://meta.trac.wordpress.org/ticket/5106

Diese Antwort stammt aus dem Jahr 2020, und wir haben von WordPress.org nichts Neueres zu dem Thema gefunden.

Vom Festland aus ist die Hauptseite erreichbar. Hinter dem 429-Fehler steht die Ratenbegrenzung von WordPress.org selbst.

> GreatFire stuft https://wordpress.org als nicht gesperrt ein: Alle 13 aussagekräftigen Tests der jüngsten Zeit verbanden normal, zuletzt am 11. Oktober 2026. http://api.wordpress.org gilt nach einem aussagekräftigen Test vom 7. Oktober 2026 als nicht gesperrt; https://api.wordpress.org hat GreatFire nie getestet.
> Quelle: GreatFire, Oktober 2026. https://en.greatfire.org/https/wordpress.org

Ein 429 kommt schnell zurück. WordPress wertet ihn als gescheiterte Prüfung und gibt kommentarlos auf: Kein Update-Hinweis erscheint, und die Website fällt zurück. Das ist die sicherheitsrelevante Seite des Problems, und unser [Leitfaden zur Frage, ob WordPress in China gesperrt ist](/de/ressourcen/china-web-leitfaden/ist-wordpress-in-china-gesperrt/), erklärt, was das für Sicherheitsupdates bedeutet.

Die Langsamkeit dagegen rührt von einer Verbindung her, die hängt, ohne zu antworten. Und WordPress führt diese Prüfungen aus, während es die Verwaltungsseite aufbaut, und wartet.

> Außerhalb eines Cron-Laufs wartet die Versionsprüfung des Kerns bis zu 3 Sekunden. Die Prüfungen für Plugins und Themes warten 3 Sekunden plus 1 Sekunde je 10 installierte Plugins oder Themes. Schlägt die HTTPS-Anfrage fehl, versucht es jede Prüfung erneut über einfaches HTTP. Jede Antwort außer HTTP 200 beendet die Prüfung ohne Meldung.
> Quelle: WordPress-Kern 7.1.3, wp-includes/update.php, abgerufen am 12. Oktober 2026. https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/update.php

Die Prüfungen starten mit der ersten Verwaltungsseite, die nach Ablauf von 12 Stunden geöffnet wird. Die Plugin-Seite wiederholt sie stündlich, Dashboard > Aktualisierungen jede Minute. Bei 40 Plugins kann eine hängende Plugin-Prüfung die Plugin-Seite 7 Sekunden lang aufhalten und dann noch einmal so lange über HTTP (unsere Rechnung, auf Basis der oben genannten Zeitlimits).

## Google-Schriften im Editor

Der Block-Editor des Kerns lädt auf einer öffentlichen Seite keine Google Fonts. Seine Schriftbibliothek dagegen ruft Google sehr wohl auf: Installiert jemand eine Google-Schrift, fragt WordPress um Erlaubnis, dann holt der Browser dieser Person jede Datei und lädt sie auf die Website hoch.

> Der Editor von WordPress 7.1.3 weist den Nutzer darauf hin, dass die Installation von Google-Schriften seine Erlaubnis voraussetzt, sich direkt mit den Servern von Google zu verbinden. Seine Funktion downloadFontFaceAssets lädt anschließend jede Datei im Browser herunter.
> Quelle: WordPress-Kern 7.1.3, wp-includes/js/dist/editor.js, abgerufen am 12. Oktober 2026. https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/js/dist/editor.js

Die Dateien liegen auf `fonts.gstatic.com`, und ob dieser Host antwortet, hängt davon ab, in welchem Netz der Redakteur gerade arbeitet.

> Am 28. August 2026 beantwortete fonts.googleapis.com, 12 Stunden lang alle zehn Minuten von einer Alibaba-Cloud-Instanz (阿里云) in cn-zhangjiakou abgefragt, 72 von 72 Anfragen mit einem Median von 111 ms bis zum ersten Byte und fonts.gstatic.com 72 von 72 mit 102 ms. Bei Seitenaufrufen über einen privaten China-Mobile-Anschluss (中国移动) in Peking am 30. August 2026 beantworteten dieselben Hosts 0 von 54 beziehungsweise 0 von 6 Anfragen.
> Quelle: 21YunBox, A Chinese Cloud Probe Is Not a Chinese Visitor: The Same Hosts, Opposite Answers, 28. bis 30. August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

(Kein Elementor auf der Website? Dann weiter zu den Spiegeln.)

Bei Elementor wird es handfest. Sein Editor lädt Roboto von `fonts.googleapis.com` als Abhängigkeit seines eigenen Stylesheets, und dieser Aufruf übergeht die Google-Fonts-Einstellung. Wer Google Fonts unter Elementor > Einstellungen > Erweitert abschaltet, ändert nur die öffentliche Seite. Der Editor ruft weiter Google auf.

> In Elementor 4.3.4, veröffentlicht am 5. Oktober 2026, registriert der Editor-Lader ohne jede Bedingung ein Roboto-Stylesheet von fonts.googleapis.com und macht das Haupt-Stylesheet des Editors davon abhängig. Die obere Leiste auf Elementors eigenen Verwaltungsbildschirmen lädt Roboto vom selben Host, ebenfalls ohne Bedingung.
> Quelle: Quellcode von Elementor 4.3.4, abgerufen am 12. Oktober 2026. https://downloads.wordpress.org/plugin/elementor.4.3.4.zip

Dieses Stylesheet wird im Kopf der Seite geladen.

> „CSS blockiert das Rendern: Der Browser hält die Darstellung der Seite an, bis er das gesamte CSS empfangen und verarbeitet hat.“
> Quelle: MDN Web Docs, Critical rendering path, Februar 2025. https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Critical_rendering_path

In einem Netz, in dem `fonts.googleapis.com` verstummt, wartet der Editor auf eine Schrift, die er eigentlich nicht braucht.

Wer den Aufruf entfernen will, muss behutsam vorgehen. Das Haupt-Stylesheet des Editors hängt vom Handle `google-font-roboto` ab, und WordPress überspringt jedes Stylesheet, dem eine Abhängigkeit fehlt. Meldet man das Handle ab, gehen deshalb auch die Styles des Editors verloren. Lassen Sie das Handle stattdessen auf eine Kopie von Roboto auf Ihrem eigenen Server zeigen.

`s.w.org`, das die Emoji-Bilder und die Vorschauen der Schriftbibliothek ausliefert, wirkt unproblematisch.

> GreatFire stuft https://s.w.org nach dem einzigen aussagekräftigen Test der jüngsten Zeit, am 7. Oktober 2026, als nicht gesperrt ein.
> Quelle: GreatFire, Oktober 2026. https://en.greatfire.org/https/s.w.org

## Avatar-Spiegel auf dem Festland

Sie können Avatare behalten und trotzdem auf den Gravatar-Aufruf verzichten. Cravatar ist ein Avatardienst auf dem Festland, betrieben von einem Unternehmen aus Guangzhou mit eigener ICP-Registrierung (ICP备案), und seine URLs folgen demselben Schema wie die von Gravatar.

> Die API von Cravatar nimmt Anfragen unter https://cravatar.cn/avatar/ entgegen, gefolgt vom Hash der E-Mail-Adresse. Hat die Adresse keinen Cravatar-Avatar, sucht der Dienst nach dem Gravatar-Avatar und dann nach dem QQ-Avatar, bevor er auf ein Standardbild zurückgreift.
> Quelle: Entwicklerdokumentation von Cravatar, September 2024. https://cravatar.com/developer/api

Für WordPress veröffentlicht Cravatar einen kurzen `get_avatar_url`-Filter, der die gravatar.com-Hostnamen durch `cravatar.cn` ersetzt. Das Plugin WPAvatar, das Cravatar allen ohne Programmierkenntnisse empfiehlt, wurde zuletzt im September 2025 aktualisiert und gilt als getestet bis WordPress 6.8. Auf einer Website mit 7.1 ist der Filter deshalb die sicherere Wahl.

Wir veröffentlichen keinen Geschwindigkeitswert für Cravatar. Die kursierenden Zahlen nennen weder Messpunkt noch Datum, und GreatFire hat cravatar.cn nie getestet.

## Was abschalten, was spiegeln, was hinnehmen

| Problem | Abschalten | Spiegeln | Hinnehmen |
| --- | --- | --- | --- |
| Gravatar | Häkchen bei „Avatare anzeigen“ unter Einstellungen > Diskussion entfernen | Cravatar, per Filter oder mit WPAvatar | Zehn Vorschauen auf dem Diskussionsbildschirm, wenn Sie nur das Häkchen entfernen |
| Update-Prüfungen auf einem Server auf dem Festland | Beibehalten: Sie brauchen die Updates | Ein Spiegel-Plugin, oder Updates von außerhalb des Festlands einspielen | Verspätete Updates, wenn keines von beiden eingerichtet ist |
| Elementors Editor-Roboto | Die Quelle des Handles im Code austauschen, zuerst auf Staging | Google Fonts lokal laden (Einstellungen > Leistung) deckt nur die öffentliche Seite ab | Ein langsamerer Editor in manchen Netzen |
| Installationen aus der Schriftbibliothek | Die Google-Sammlung auslassen | Selbst gehostete Schriftdateien hochladen | Einmalige Installationen über eine Verbindung, die Google erreicht |

So lässt sich der Nachmittag nutzen. Schalten Sie Avatare ab, oder fügen Sie den Cravatar-Filter ein und prüfen Sie die Kommentarseite vom Büro in Shanghai aus. Steht der Server auf dem Festland, entscheiden Sie, wie er an seine Updates kommt. Die Arbeit an Elementor überlassen Sie einem Entwickler mit einer Staging-Kopie.

Das bekannteste Spiegelprojekt, WP-China-Yes, wurde im April 2020 aus dem Verzeichnis von WordPress.org entfernt und lebt auf GitHub als WPCY.COM weiter. Es leitet den Verkehr zu WordPress.org über Spiegel und ersetzt Gravatar durch Cravatar. Fällt ein Spiegel aus, greift das Plugin auf den ursprünglichen Host zurück. Damit schiebt sich fremder Code zwischen Ihre Website und deren Updates; prüfen Sie ihn vorher. Der andere Weg ist eine Deployment-Pipeline, die Updates von außerhalb des Festlands einspielt.

Plugins bringen eigene Aufrufe mit, und unser Leitfaden zu den [WordPress-Plugins, die in China scheitern](/de/ressourcen/china-web-leitfaden/wordpress-plugins-china/), nimmt sie sich einzeln vor. Unsere Seite [WordPress in China](/de/wordpress-in-china/) behandelt die größere Frage, wo WordPress laufen sollte.

## Häufige Fragen

**Hat das Abschalten der Avatare Nebenwirkungen?**

Nein. Ist „Avatare anzeigen“ abgeschaltet, gibt WordPress keinen Avatar aus. Die Werkzeugleiste und die Listen Kommentare und Benutzer verlieren das Bild, ebenso die Kommentarstränge auf der öffentlichen Website. Ein Theme, das Avatare erzwingt, kann sie trotzdem anfordern. Prüfen Sie nach der Änderung Backend und öffentliche Website.

**Liegt die Langsamkeit an der Großen Firewall oder an der Entfernung zu unserem Server?**

An beidem, und die Effekte addieren sich. Gravatar scheitert, und die Google-Schrifthosts verstummen in manchen Netzen, wo auch immer der Server steht. Ein Server in Europa fügt außerdem jedem Klick im Backend einen zusätzlichen Weg über die Grenze und zurück hinzu, den nichts von alledem beseitigt. Beheben Sie zuerst die scheiternden Aufrufe. Was dann noch bleibt, geht auf die Entfernung oder den Server selbst zurück.

**Unser Admin-Theme lädt jQuery von Google. Spielt das eine Rolle?**

Ja. GreatFire stufte ajax.googleapis.com bei seinem letzten aussagekräftigen Test am 22. August 2026 als gesperrt ein. Ein einfaches Script-Tag im Kopf hält die Seite an, bis das Skript geladen ist; dieses Theme hängt also auf jedem Bildschirm. WordPress bringt eine eigene Kopie von jQuery mit, und das Theme sollte sie nutzen.

**Zeigt Cravatar die Bilder, die unser Team schon bei Gravatar hinterlegt hat?**

In der Regel ja. Laut der Dokumentation von Cravatar sucht der Dienst, wenn eine Adresse keinen Cravatar-Avatar hat, nach dem Gravatar-Bild und dann nach dem QQ-Bild, bevor er ein Standardbild verwendet. Ihr Team behält seine Bilder ohne neues Konto. GreatFire hat cravatar.cn nie getestet. Probieren Sie es einmal vom Büro aus.

**Müssen wir das Hosting wechseln, um das zu beheben?**

Für Avatare und Schriften nicht. Diese Aufrufe kommen aus dem Browser Ihres Teams und scheitern gleichermaßen, ob der Server in Shanghai oder in Frankfurt steht. Der 429-Fehler bei Updates betrifft nur einen Server auf dem Festland. Ein Umzug dorthin verkürzt zwar die Entfernung, holt Ihnen aber das Update-Problem ins Haus.
