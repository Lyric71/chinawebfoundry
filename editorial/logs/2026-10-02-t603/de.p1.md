# T6-03 deep-translate, DE, pass 1 (full native rewrite from scratch)

Register: FAZ / Handelsblatt, Sie, as the live page. English replacement copy
used for facts only. Scope: changes 1, 4 to 10 and every table string. The
page's established terms kept: "ICP-Registrierung", "Gesellschaft",
"Festland", "Hauptdomain". Site convention: Guangzhou stays Guangzhou,
quotations in „…“. Decimal comma, "99,98 %", dates as "29. August 2026".

## Change 1, summary

before: Was Alibaba, Tencent und Huawei tatsächlich verkaufen, die ICP-Registrierung als Voraussetzung für jeden Server auf dem Festland, die Abkürzung über Hongkong und das Update-Problem, das nie im Budget steht.
after: Alibaba, Tencent, Huawei, Vercel und Cloudflare im Vergleich für WordPress auf dem chinesischen Festland, mit der ICP-Regel vorweg und eigenen Messwerten.
why: rebuilt on the new scope; the live summary described a page without figures.

## Change 2, updatedAt

2026-08-29 -> 2026-10-02 (date, not translated)

## Change 3, reviewBy

inserted: reviewBy: 2026-12-29 (date, not translated)

## Change 4, introduction

before: In China gibt es kein WP Engine. [...] steht unter [WordPress in China](/de/wordpress-in-china/).
after:

Ein Server auf dem chinesischen Festland zeigt Ihre WordPress-Website niemandem, solange seine ICP-Registrierung (ICP备案) nicht abgeschlossen ist. In jedem unserer Projekte blieben die Ports 80 und 443 an der öffentlichen Adresse des Servers bis zum Tag der Freigabe geschlossen. Einen sanften Start gibt es nicht.

Diese Regel bestimmt alles Weitere. Sie entscheidet, welche Cloud und welches Konto Sie eröffnen und ob Sie eine chinesische Gesellschaft brauchen, bevor auch nur eine Datei umzieht.

Alles Folgende setzt sie voraus. Unser Leitfaden zum [Hosting einer Website in China](/de/ressourcen/china-web-leitfaden/website-in-china-hosten/) liefert das größere Bild zu Servern und Latenz, und [WordPress in China](/de/wordpress-in-china/) erklärt, wie wir Projekte auf diesem Stack umsetzen.

why: the opening now leads with the filing rule; both live links kept on their German slugs.

## Change 5, benchmark block and provider table (new)

before: (absent)
after:

## Was wir beim Hosting auf dem Festland gemessen haben

Es sind ChinaWebFoundrys eigene Zahlen, erhoben auf Kundenwebsites, die wir nach China umgezogen haben oder dort hosten. Kein Dritter hat sie gemessen, und das sollten Sie wissen, bevor Sie sie gewichten.

> Bei einer von uns migrierten WordPress-Website sank die mediane Ladezeit von 23,4 Sekunden mit einem europäischen Ursprung auf 1,2 Sekunden mit einem Ursprung auf dem Festland. Etwa die Hälfte der Verbesserung ging auf das Entfernen externer Aufrufe zurück.
> Quelle: ChinaWebFoundry, veröffentlicht am 29. August 2026. https://www.chinawebfoundry.com/resources/china-web-guide/is-wordpress-blocked-in-china/

> Über einen Zeitraum von 90 Tagen erreichte eine auf dem Festland gehostete Kundenwebsite eine Verfügbarkeit von 99,98 %, mit medianen Antwortzeiten von 48 ms aus Peking, 36 ms aus Shanghai und 61 ms aus Guangzhou.
> Quelle: ChinaWebFoundry, veröffentlicht am 29. August 2026. https://www.chinawebfoundry.com/website-in-china/

Jeder dieser Zahlen fehlt noch eine Bedingung, die wir von jedem fremden Benchmark verlangen würden. Die Tabelle zeigt, welche, Zahl für Zahl.

| Wert | Was er misst | Gemessen von | Zeitraum | Noch zu veröffentlichen |
| --- | --- | --- | --- | --- |
| 23,4 s auf 1,2 s | Mediane Ladezeit vor und nach dem Umzug | Chinesisches Festland | Vor und nach der Migration | Stadt, Netzbetreiber, Testtage |
| 99,98 % | Verfügbarkeit einer auf dem Festland gehosteten Website | Nicht veröffentlicht | 90 Tage | Standort des Monitorings, Beginn und Ende |
| 48 ms | Mediane Antwortzeit | Peking | Dieselben 90 Tage | Netzbetreiber |
| 36 ms | Mediane Antwortzeit | Shanghai | Dieselben 90 Tage | Netzbetreiber |
| 61 ms | Mediane Antwortzeit | Guangzhou | Dieselben 90 Tage | Netzbetreiber |

Die fehlenden Bedingungen kommen in die Fallstudien, an denen wir gerade schreiben.

## Sechs Hosting-Optionen im Vergleich

Nach diesen Optionen fragen ausländische Teams uns am häufigsten. Jede Zeile nennt die Bedingung, die den Ausschlag gibt, und jede stützt sich auf die Seite des Anbieters selbst. Wir haben alle Zeilen am 29. September 2026 geprüft und prüfen sie jedes Quartal erneut.

| Option | Server auf dem Festland | ICP-Registrierung | Konto und Rechtsträger | Anbieterseite vom |
| --- | --- | --- | --- | --- |
| Alibaba Cloud (阿里云), China-Seite, aliyun.com | Ja | Über Alibaba, für einen Festland-Server mit mindestens 3 Monaten Laufzeit | aliyun.com-Konto; auf dem Festland eingetragenes Unternehmen oder Einwohner des Festlands | Hilfecenter, 20. August und 24. September 2026 |
| Alibaba Cloud, internationale Seite, alibabacloud.com | Für eine registrierte Website nicht nutzbar | Für diesen Kontotyp nicht unterstützt | Stattdessen ein aliyun.com-Konto eröffnen | Hilfecenter, 20. August 2026 |
| Tencent Cloud (腾讯云) | Ja | Über Tencent, für einen Festland-Server; Lighthouse mit mindestens 90 Tagen Laufzeit | Ein registrierender Rechtsträger je Konto | Dokumentation, 30. Januar und 23. September 2026 |
| Huawei Cloud (华为云) | Ja | Über Huawei, für einen „Registrierungsserver“ auf dem Festland mit mindestens 3 Monaten Laufzeit | Konto für das chinesische Festland; internationale Konten können nicht registrieren | Help Center, Juli und August 2024 |
| Vercel | Keine | Nicht angeboten. Eine Kopie im Land braucht Festland-Hosting und eine eigene Registrierung | Bei Vercel nichts | Wissensdatenbank, 11. September 2026 |
| Cloudflare | Nur im China Network, betrieben von JD Cloud | Eine gültige Registrierung oder Lizenz je Hauptdomain | Enterprise-Tarif; JD Cloud prüft vorab die Inhalte | Entwicklerdokumentation, April 2026 |

Für eine WordPress-Website, die auf dem Festland laufen muss, fällt die eigentliche Wahl zwischen der ersten, dritten und vierten Zeile.

why: new sections, written in German from the facts. "Testtage" instead of "Testdaten", which reads as "test data" (the T6-06 German pass caught the same trap).

## Change 6, no managed WordPress

before: ## Was die drei Festland-Clouds tatsächlich anbieten [...] denn er kommt ohnehin.
after:

## Managed WordPress gibt es auf dem chinesischen Festland nicht

Auf dem Festland gibt es kein WP Engine, kein Kinsta und kein Flywheel. Wir haben die Produktpaletten von Alibaba Cloud (阿里云), Tencent Cloud (腾讯云) und Huawei Cloud (华为云) durchgesehen. Keiner der drei verkauft ein WordPress-Produkt, das die Website für Sie patcht oder ein Ticket zu einem Plugin beantwortet.

Alle drei verkaufen ein WordPress-Image auf Knopfdruck auf einem virtuellen Einstiegsserver.

| Anbieter | Produkt | Was das Image installiert | Anbieterseite aktualisiert |
| --- | --- | --- | --- |
| Alibaba Cloud | Simple Application Server (轻量应用服务器) | Ein vorkonfiguriertes WordPress-Anwendungsimage | 19. August 2026 |
| Tencent Cloud | Lighthouse (轻量应用服务器) | WordPress mit Nginx, MariaDB und dem Linux-Panel Baota (宝塔) | 22. September 2026 |
| Huawei Cloud | FlexusL (Flexus应用服务器L实例) | Ubuntu 24.04 mit Docker, Nginx, MySQL und phpMyAdmin | 21. September 2026 |

Sehen Sie sich die dritte Spalte noch einmal an. Jede Zeile ist ein Betriebssystem mit vorinstalliertem WordPress. Updates und Backups liegen bei Ihnen, ebenso das Staging und die Suche nach jemandem, der einen Plugin-Konflikt lesen kann.

Also übernimmt jemand auf Ihrer Seite jeden Monat Serveradministration, solange die Website lebt. Das ist ein Dauerposten. Schreiben Sie ihn schon beim Kickoff ins Budget.

why: section rebuilt on vendor-sourced rows; the unsourced "Konsole ohne englischen Modus" goes.

## Change 7, the filing and the licence

before: Das ist die Rahmenbedingung, die jedes China-Webprojekt umsortiert, [...] kein Hosting-Budget ersetzt diese Gesellschaft.
after:

Alibaba Cloud und Tencent Cloud schreiben die Regel beide in ihre eigene Dokumentation.

> Nach den Vorschriften des Ministeriums für Industrie und Informationstechnologie (工信部) muss eine Domain, die auf einen Server auf dem chinesischen Festland auflöst, ihre Website-Registrierung abschließen, bevor der Zugang zur Website freigeschaltet werden kann.
> Quelle: Alibaba Cloud (阿里云), Hilfecenter, zuletzt aktualisiert am 4. September 2026. https://help.aliyun.com/zh/dws/support/how-do-i-troubleshoot-the-failures-to-access-a-website-by-using-its-domain-name

> Eine Domain, die auf Ressourcen von Tencent Cloud auf dem chinesischen Festland auflöst, muss zuerst die ICP-Registrierung abschließen, sonst fängt sie die Überwachung von Tencent Cloud für nicht registrierte Domains ab.
> Quelle: Tencent Cloud (腾讯云), Dokumentation, zuletzt aktualisiert am 28. September 2026. https://cloud.tencent.com/document/product/243/19630

Das Detail zu den Ports stammt von uns: In unseren Projekten schließt diese Sperre die Ports 80 und 443. Sie können einem Kunden keinen Staging-Link auf dem Produktivserver zeigen und keine leise Beta fahren, während die Unterlagen laufen.

> Die eigene Prüfung von Alibaba Cloud dauert 1 bis 2 Arbeitstage. Die anschließende Prüfung durch die Provinzverwaltung für Kommunikation (省级通信管理局) dauert in der Regel 1 bis 20 Arbeitstage, und die Website muss innerhalb von 30 Tagen nach dem Start ihre Registrierung bei der öffentlichen Sicherheit (公安备案) abschließen.
> Quelle: Alibaba Cloud (阿里云), Hilfecenter, Überblick über das ICP-Registrierungsverfahren, zuletzt aktualisiert am 26. August 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview

Auf dem Papier sind das bis zu 22 Arbeitstage. Unterlagen zusammenzutragen braucht Zeit, und Anträge kommen zur Korrektur zurück, deshalb planen wir drei bis sechs Wochen ein, vorausgesetzt, die Gesellschaft auf dem Festland existiert bereits. Unser [Leitfaden zur ICP-Registrierung](/de/ressourcen/china-web-leitfaden/icp-lizenz-auslaendische-unternehmen/) erklärt die Unterlagen und die Reihenfolge, in der sie eingereicht werden.

Die kommerzielle ICP-Lizenz (ICP许可证) ist ein anderes Instrument. Sie brauchen sie, wenn die Website selbst Geld verdient: E-Commerce, kostenpflichtige Inhalte, kostenpflichtige Software, Werbung.

> Die Kommunikationsverwaltung Shanghai (上海市通信管理局) sagt zu, über eine Lizenz für Mehrwert-Telekommunikationsdienste innerhalb von 60 Tagen nach Annahme des Antrags zu entscheiden.
> Quelle: Kommunikationsverwaltung Shanghai, Verfahrensleitfaden, Juni 2015. https://shca.miit.gov.cn/bsfw/bszn/dxsc/blcx/art/2020/art_7426922df3754a189aaf4278ff0c7b1d.html

Die Frist beginnt mit der Annahme, und angenommen wird nur ein vollständiger Antrag. Für diese Lizenz planen wir zwölf bis achtzehn Wochen ein.

Ausländische Beteiligung ist die andere Frage, die eine Lizenz aufwirft.

> Ein Pilotprogramm von 2024 hebt die Obergrenze für ausländische Beteiligungen bei bestimmten Lizenzkategorien auf, darunter Online-Datenverarbeitung und Plattformen zur Informationsveröffentlichung, in Teilen von Peking, Shanghai, Hainan und Shenzhen. Nachrichten, Verlagswesen, audiovisuelle Medien und Internet-Kulturdienste sind ausgenommen.
> Quelle: Ministerium für Industrie und Informationstechnologie (工业和信息化部), Bekanntmachung vom 8. April 2024. https://www.gov.cn/zhengce/zhengceku/202404/content_6944441.htm

Eine ICP-Registrierung erfolgt im Namen eines auf dem Festland eingetragenen Unternehmens oder, bei einer privaten Website, eines Einwohners des Festlands. Ein im Ausland eingetragenes Unternehmen kann nicht direkt registrieren, und kein Hosting-Budget ersetzt die Gesellschaft.

why: the undated MIIT blockquotes and the 60 to 90 Arbeitstage figure go; sourced quotes written in German.

## Change 8, the cloud account

before: ## Das Alibaba-Cloud-Konto, das Ihre Website nicht hosten kann [...] verliert zwei Wochen.
after:

## Das Cloud-Konto, das Ihre Website nicht hosten kann

Alibaba betreibt zwei Seiten mit fast identischem Markenauftritt. alibabacloud.com ist die internationale, aliyun.com die chinesische, und nur die zweite kann registrieren.

> Konten der internationalen Seite von Alibaba Cloud (alibabacloud.com) unterstützen keine Anträge auf ICP-Registrierung, weder für Websites noch für Apps. Eine Registrierung braucht ein Konto der China-Seite (aliyun.com), und der registrierende Rechtsträger muss ein auf dem chinesischen Festland eingetragenes Unternehmen oder ein Einwohner des Festlands sein.
> Quelle: Alibaba Cloud (阿里云), Hilfecenter, zuletzt aktualisiert am 20. August 2026. https://help.aliyun.com/en/icp-filing/basic-icp-service/product-overview/icp-filing-application-for-enterprises-outside-the-chinese-mainland

> Die Registrierung erfolgt für einen Alibaba-Cloud-Server auf dem chinesischen Festland: eine ECS-Instanz oder einen Simple Application Server mit mindestens 3 Monaten Laufzeit.
> Quelle: Alibaba Cloud (阿里云), Hilfecenter, zuletzt aktualisiert am 24. September 2026. https://help.aliyun.com/en/icp-filing/basic-icp-service/user-guide/icp-filing-server-access-information-check

Die Anmeldung, die sich natürlich anfühlt, auf der englischen Seite, die die Suche zuerst ausspielt, erzeugt also ein Konto, das die Website, die Sie bauen, nicht registrieren kann. Wer das einmal durchlaufen hat, weiß es auswendig. Wer es zum ersten Mal macht, verliert Wochen, und meist merkt man es erst, wenn jemand die Registrierungsmaske sucht und das Konto keine hat, wenn der Server bereits bezahlt und der Starttermin bereits gesetzt ist.

Huawei Cloud (华为云) zieht dieselbe Trennlinie, fast mit denselben Worten.

> Konten der internationalen Website von Huawei Cloud unterstützen keine ICP-Registrierung. Nötig ist ein Huawei-Cloud-Konto für das chinesische Festland, mit einem Registrierungsserver auf dem chinesischen Festland und mindestens drei Monaten Laufzeit.
> Quelle: Huawei Cloud (华为云), Help Center, zuletzt aktualisiert am 17. Juli 2024 und am 20. August 2024. https://support.huaweicloud.com/intl/en-us/prepare-icp/icp_02_0047.html und https://support.huaweicloud.com/intl/en-us/prepare-icp/icp_02_0003.html

Bei Tencent Cloud (腾讯云) betrifft die dokumentierte Regel den Server. Die Tencent-Seiten, die wir geprüft haben, sagen zu internationalen Konten nichts, weder in die eine noch in die andere Richtung, und deshalb tun wir es auch nicht.

> Eine Lighthouse-Instanz in einer Festland-Region kommt für die ICP-Registrierung in Frage, wenn sie mindestens 90 Tage Laufzeit hat und während der Prüfung noch mindestens 30 Tage übrig sind.
> Quelle: Tencent Cloud (腾讯云), Dokumentation, zuletzt aktualisiert am 23. September 2026. https://cloud.tencent.com/document/product/1207/45756

why: unsupported claims cut; Huawei and Tencent added from their own pages.

## Change 9, Vercel and Cloudflare

before: ## Die CDN-Frage [...] und es hält die ganze Kette bei einem Anbieter.
after:

## Vercel, Cloudflare und die Edge im Ausland

Ein globales CDN legt Kopien Ihrer Seiten näher heran, nach Hongkong oder Tokio, das hilft. An blockierten Hosts, die die Seite selbst aufruft, ändert es nichts.

Auch Vercel kommt zur Sprache, weil viele Astro- und Next.js-Websites dort liegen. Die eigene Wissensdatenbank gibt eine klare Antwort.

> „Vercel hat keine Server oder CDN-Knoten auf dem chinesischen Festland“ und „Vercel kann Verfügbarkeit oder Leistung auf dem chinesischen Festland nicht garantieren“. Chinas Netzkontrollen können die .vercel.app-Subdomains blockieren oder drosseln.
> Quelle: Vercel Knowledge Base, veröffentlicht am 3. November 2025, aktualisiert am 11. September 2026. https://vercel.com/kb/guide/accessing-vercel-hosted-sites-from-mainland-china

> GreatFire stuft https://vercel.app in 4 seiner letzten 4 aussagekräftigen Tests als auf dem chinesischen Festland blockiert ein, zuletzt am 14. September 2026. Von 157 auf der Domain getesteten URLs gelten 154 als blockiert.
> Quelle: GreatFire, September 2026. https://en.greatfire.org/https/vercel.app

Vercels eigene Vorschläge: eine eigene Domain statt .vercel.app, selbst gehostete Schriften und Analytics und, für eine Website, die in China leisten muss, eine separate Kopie auf Festland-Infrastruktur mit eigener ICP-Registrierung oder -Lizenz. Diese letzte Option bedeutet, eine zweite Website zu betreiben, auf einer der drei oben genannten Festland-Clouds oder bei einem anderen Festland-Anbieter.

Standard- und Gratistarif von Cloudflare bedienen Besucher auf dem Festland von Standorten außerhalb des Festlands. Das Netz im Land ist ein eigenes Produkt.

> Das Cloudflare China Network ist ein separates Abonnement für Enterprise-Kunden, betrieben in Rechenzentren auf dem Festland von Cloudflares Partner JD Cloud. Jede Hauptdomain braucht eine gültige ICP-Registrierung oder -Lizenz, und JD Cloud prüft die Inhalte jeder Domain, bevor das Netz freigeschaltet wird.
> Quelle: Cloudflare-Entwicklerdokumentation, zuletzt aktualisiert am 30. April 2026. https://developers.cloudflare.com/china-network/

Für eine auf dem Festland gehostete Website ist die einfachere Antwort meist das inländische CDN der Cloud, auf der Sie ohnehin sitzen. Es läuft unter der Registrierung, die Sie bereits haben, und hält den Stack bei einem Anbieter.

why: Vercel section added with its own wording; Cloudflare facts now cited; unsupported "es ist schnell" goes.

## Change 10A

before: Der Server ist der billige Teil. Eine Unternehmenswebsite auf Simple Application Server oder Lighthouse liegt meist unter 100 USD im Monat, [...]
after: Der Server ist der billige Teil. Die Images auf Knopfdruck laufen auf der Einstiegsserver-Linie der jeweiligen Cloud.

## Change 10B

before: Die Registrierung selbst ist kostenlos. Der eigentliche Aufwand steckt an drei anderen Stellen: [...]
after: Der eigentliche Aufwand liegt woanders. Die Gesellschaft auf dem Festland muss gegründet oder erhalten werden, und Unterlagen vorbereiten und die Prüfung bestehen kostet Arbeitsstunden. Nach dem Start loggt sich eine namentlich benannte Person Monat für Monat in die Cloud-Konsole ein, um die Website gepatcht und gesichert zu halten.

## Change 10C

before: Der Server liegt für eine Unternehmenswebsite oft unter 100 USD im Monat. [...]
after: Der Server ist der kleinste Posten. Ins Gewicht fallen die Gesellschaft und die Registrierungsarbeit und nach dem Start die Person, die sich um den Server kümmert.

Step 1 complete.
