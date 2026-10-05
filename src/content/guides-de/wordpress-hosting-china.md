---
title: "WordPress-Hosting in China"
subtitle: "Alle drei großen chinesischen Clouds liefern ein WordPress-Image auf Knopfdruck. Managed WordPress liefert keine davon, und genau in dieser Lücke bleiben ausländische Projekte stecken."
summary: "WordPress auf dem chinesischen Festland: Alibaba, Tencent, Huawei, Vercel und Cloudflare im Vergleich, die ICP-Pflicht vorweg, dazu eigene Messwerte."
visual: "/images/guides/wordpress-hosting-china.webp"
order: 32
published: true
publishedAt: 2026-08-29
updatedAt: 2026-10-02
reviewBy: 2026-12-29
category: Hosting
---

Ein Server auf dem chinesischen Festland zeigt Ihre WordPress-Website niemandem, solange seine ICP-Registrierung (ICP备案) nicht abgeschlossen ist. In jedem unserer Projekte blieben die Ports 80 und 443 an der öffentlichen Adresse des Servers bis zum Tag der Freigabe geschlossen. Ein leiser Start ist ausgeschlossen.

Von dieser Regel hängt alles Weitere ab: welche Cloud Sie wählen, welches Konto Sie eröffnen und ob Sie eine chinesische Gesellschaft brauchen, bevor auch nur eine Datei umzieht.

Der Rest dieses Leitfadens setzt sie voraus. Unser Leitfaden zum [Hosting einer Website in China](/de/ressourcen/china-web-leitfaden/website-in-china-hosten/) liefert das größere Bild zu Servern und Latenz, und [WordPress in China](/de/wordpress-in-china/) erklärt, wie wir Projekte auf diesem Stack umsetzen.

## Was wir beim Hosting auf dem Festland gemessen haben

Die folgenden Zahlen stammen von ChinaWebFoundry selbst, erhoben auf Kundenwebsites, die wir nach China umgezogen haben oder dort betreiben. Kein Dritter hat sie gemessen, und das sollten Sie wissen, bevor Sie ihnen Gewicht beimessen.

> Bei einer von uns migrierten WordPress-Website sank die mediane Ladezeit von 23,4 Sekunden bei europäischem Ursprung auf 1,2 Sekunden bei einem Ursprung auf dem Festland. Etwa die Hälfte der Verbesserung ging auf das Entfernen externer Aufrufe zurück.
> Quelle: ChinaWebFoundry, veröffentlicht am 29. August 2026. https://www.chinawebfoundry.com/resources/china-web-guide/is-wordpress-blocked-in-china/

> Über einen Zeitraum von 90 Tagen erreichte eine auf dem Festland gehostete Kundenwebsite eine Verfügbarkeit von 99,98 %, mit medianen Antwortzeiten von 48 ms aus Peking, 36 ms aus Shanghai und 61 ms aus Guangzhou.
> Quelle: ChinaWebFoundry, veröffentlicht am 29. August 2026. https://www.chinawebfoundry.com/website-in-china/

Jeder dieser Zahlen fehlt noch eine Angabe, die wir bei jedem fremden Benchmark einfordern würden. Welche, zeigt die Tabelle Zeile für Zeile.

| Wert | Was er misst | Gemessen von | Zeitraum | Noch zu veröffentlichen |
| --- | --- | --- | --- | --- |
| 23,4 s auf 1,2 s | Mediane Ladezeit vor und nach dem Umzug | Chinesisches Festland | Vor und nach der Migration | Stadt, Netzbetreiber, Testtage |
| 99,98 % | Verfügbarkeit einer auf dem Festland gehosteten Website | Nicht veröffentlicht | 90 Tage | Standort des Monitorings, Beginn und Ende |
| 48 ms | Mediane Antwortzeit | Peking | Dieselben 90 Tage | Netzbetreiber |
| 36 ms | Mediane Antwortzeit | Shanghai | Dieselben 90 Tage | Netzbetreiber |
| 61 ms | Mediane Antwortzeit | Guangzhou | Dieselben 90 Tage | Netzbetreiber |

Die fehlenden Angaben liefern die Fallstudien nach, an denen wir derzeit arbeiten.

## Sechs Hosting-Optionen im Vergleich

Nach diesen sechs Optionen fragen uns ausländische Teams am häufigsten. Jede Zeile nennt die Bedingung, die den Ausschlag gibt, und stützt sich auf die Seite des jeweiligen Anbieters. Wir haben alle Zeilen am 29. September 2026 geprüft und wiederholen das vierteljährlich.

| Option | Server auf dem Festland | ICP-Registrierung | Konto und Rechtsträger | Stand der Anbieterseite |
| --- | --- | --- | --- | --- |
| Alibaba Cloud (阿里云), China-Seite, aliyun.com | Ja | Über Alibaba, für einen Festland-Server mit mindestens 3 Monaten Laufzeit | aliyun.com-Konto; auf dem Festland eingetragenes Unternehmen oder Einwohner des Festlands | Hilfecenter, 20. August und 24. September 2026 |
| Alibaba Cloud, internationale Seite, alibabacloud.com | Für eine registrierte Website nicht nutzbar | Für diesen Kontotyp nicht unterstützt | Stattdessen ein aliyun.com-Konto eröffnen | Hilfecenter, 20. August 2026 |
| Tencent Cloud (腾讯云) | Ja | Über Tencent, für einen Festland-Server; Lighthouse mit mindestens 90 Tagen Laufzeit | Ein Rechtsträger je Konto | Dokumentation, 30. Januar und 23. September 2026 |
| Huawei Cloud (华为云) | Ja | Über Huawei, für einen „Registrierungsserver“ auf dem Festland mit mindestens 3 Monaten Laufzeit | Konto für das chinesische Festland; internationale Konten können nicht registrieren | Help Center, Juli und August 2024 |
| Vercel | Keine | Nicht angeboten. Eine Kopie in China braucht Festland-Hosting und eine eigene Registrierung | Entfällt | Wissensdatenbank, 11. September 2026 |
| Cloudflare | Nur im China Network, betrieben von JD Cloud | Eine gültige Registrierung oder Lizenz je Hauptdomain | Enterprise-Tarif; JD Cloud prüft vorab die Inhalte | Entwicklerdokumentation, April 2026 |

Für eine WordPress-Website, die auf dem Festland laufen muss, beschränkt sich die eigentliche Wahl auf die erste, dritte und vierte Zeile.

## Managed WordPress gibt es auf dem chinesischen Festland nicht

Auf dem Festland gibt es kein WP Engine, kein Kinsta und kein Flywheel. Wir haben die Produktpaletten von Alibaba Cloud (阿里云), Tencent Cloud (腾讯云) und Huawei Cloud (华为云) durchgesehen. Keiner der drei verkauft ein WordPress-Produkt, das die Website für Sie patcht oder ein Ticket zu einem Plugin beantwortet.

Was alle drei verkaufen, ist ein WordPress-Image, das sich per Knopfdruck auf einem virtuellen Einstiegsserver installieren lässt.

| Anbieter | Produkt | Was das Image installiert | Stand der Anbieterseite |
| --- | --- | --- | --- |
| Alibaba Cloud | Simple Application Server (轻量应用服务器) | Ein vorkonfiguriertes WordPress-Anwendungsimage | 19. August 2026 |
| Tencent Cloud | Lighthouse (轻量应用服务器) | WordPress mit Nginx, MariaDB und dem Linux-Panel Baota (宝塔) | 22. September 2026 |
| Huawei Cloud | FlexusL (Flexus应用服务器L实例) | Ubuntu 24.04 mit Docker, Nginx, MySQL und phpMyAdmin | 21. September 2026 |

Sehen Sie sich die dritte Spalte noch einmal an. Jede Zeile ist ein Betriebssystem mit vorinstalliertem WordPress. Updates und Backups liegen bei Ihnen, ebenso das Staging, und auch jemanden, der einen Plugin-Konflikt durchschaut, müssen Sie selbst finden.

Jemand in Ihrem Haus administriert also jeden Monat einen Server, solange die Website besteht. Das ist ein Dauerposten, und er gehört schon beim Kickoff ins Budget.

## Vor der Registrierung wird nichts ausgeliefert

Alibaba Cloud wie Tencent Cloud halten die Regel in ihrer eigenen Dokumentation fest.

> Nach den Vorschriften des Ministeriums für Industrie und Informationstechnologie (工信部) muss eine Domain, die auf einen Server auf dem chinesischen Festland auflöst, ihre Website-Registrierung abschließen, bevor der Zugang zur Website freigeschaltet werden kann.
> Quelle: Alibaba Cloud (阿里云), Hilfecenter, zuletzt aktualisiert am 4. September 2026. https://help.aliyun.com/zh/dws/support/how-do-i-troubleshoot-the-failures-to-access-a-website-by-using-its-domain-name

> Eine Domain, die auf Ressourcen von Tencent Cloud auf dem chinesischen Festland auflöst, muss zuerst die ICP-Registrierung abschließen, andernfalls wird sie von Tencent Clouds Überwachung nicht registrierter Domains abgefangen.
> Quelle: Tencent Cloud (腾讯云), Dokumentation, zuletzt aktualisiert am 28. September 2026. https://cloud.tencent.com/document/product/243/19630

Das Detail zu den Ports stammt von uns: In unseren Projekten schließt diese Sperre die Ports 80 und 443. Sie können einem Kunden keinen Staging-Link auf dem Produktivserver zeigen und keine leise Beta fahren, während der Antrag läuft.

> Die Vorprüfung durch Alibaba Cloud dauert 1 bis 2 Arbeitstage. Die anschließende Prüfung durch die Provinzverwaltung für Kommunikation (省级通信管理局) nimmt in der Regel 1 bis 20 Arbeitstage in Anspruch, und die Website muss innerhalb von 30 Tagen nach dem Start ihre Registrierung bei den Behörden für öffentliche Sicherheit (公安备案) abschließen.
> Quelle: Alibaba Cloud (阿里云), Hilfecenter, Überblick über das ICP-Registrierungsverfahren, zuletzt aktualisiert am 26. August 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview

Auf dem Papier ergibt das höchstens 22 Arbeitstage. In der Praxis braucht das Zusammentragen der Unterlagen Zeit, und Anträge kommen zur Nachbesserung zurück. Wir planen deshalb drei bis sechs Wochen ein, vorausgesetzt, die Gesellschaft auf dem Festland besteht bereits. Unser [Leitfaden zur ICP-Registrierung](/de/ressourcen/china-web-leitfaden/icp-lizenz-auslaendische-unternehmen/) führt durch die Unterlagen und die Reihenfolge ihrer Einreichung.

Die kommerzielle ICP-Lizenz (ICP许可证) ist ein eigenes Instrument. Nötig wird sie, sobald die Website selbst Geld verdient: E-Commerce, kostenpflichtige Inhalte, kostenpflichtige Software, Werbung.

> Die Kommunikationsverwaltung Shanghai (上海市通信管理局) sagt zu, über eine Lizenz für Mehrwert-Telekommunikationsdienste innerhalb von 60 Tagen nach Annahme des Antrags zu entscheiden.
> Quelle: Kommunikationsverwaltung Shanghai, Verfahrensleitfaden, Juni 2015. https://shca.miit.gov.cn/bsfw/bszn/dxsc/blcx/art/2020/art_7426922df3754a189aaf4278ff0c7b1d.html

Die Frist beginnt mit der Annahme, und angenommen wird nur ein vollständiger Antrag. Für diese Lizenz rechnen wir mit zwölf bis achtzehn Wochen.

Bleibt die Frage der ausländischen Beteiligung, die jede Lizenz aufwirft.

> Ein Pilotprogramm von 2024 hebt die Obergrenze für ausländische Beteiligungen bei bestimmten Lizenzkategorien auf, darunter Online-Datenverarbeitung und Plattformen zur Informationsveröffentlichung, in Teilen von Peking, Shanghai, Hainan und Shenzhen. Nachrichten, Verlagswesen, audiovisuelle Medien und Internet-Kulturdienste sind ausgenommen.
> Quelle: Ministerium für Industrie und Informationstechnologie (工业和信息化部), Bekanntmachung vom 8. April 2024. https://www.gov.cn/zhengce/zhengceku/202404/content_6944441.htm

Eine ICP-Registrierung erfolgt im Namen eines auf dem Festland eingetragenen Unternehmens oder, bei einer privaten Website, eines Einwohners des Festlands. Ein im Ausland eingetragenes Unternehmen kann nicht direkt registrieren, und kein Hosting-Budget ersetzt die Gesellschaft.

## Das Cloud-Konto, das Ihre Website nicht hosten kann

Alibaba betreibt zwei Seiten mit fast identischem Markenauftritt: die internationale alibabacloud.com und die chinesische aliyun.com. Registrieren lässt sich nur über die zweite.

> Konten der internationalen Seite von Alibaba Cloud (alibabacloud.com) unterstützen keine Anträge auf ICP-Registrierung, weder für Websites noch für Apps. Eine Registrierung braucht ein Konto der China-Seite (aliyun.com), und der registrierende Rechtsträger muss ein auf dem chinesischen Festland eingetragenes Unternehmen oder ein Einwohner des Festlands sein.
> Quelle: Alibaba Cloud (阿里云), Hilfecenter, zuletzt aktualisiert am 20. August 2026. https://help.aliyun.com/en/icp-filing/basic-icp-service/product-overview/icp-filing-application-for-enterprises-outside-the-chinese-mainland

> Die Registrierung erfolgt für einen Alibaba-Cloud-Server auf dem chinesischen Festland: eine ECS-Instanz oder einen Simple Application Server mit mindestens 3 Monaten Laufzeit.
> Quelle: Alibaba Cloud (阿里云), Hilfecenter, zuletzt aktualisiert am 24. September 2026. https://help.aliyun.com/en/icp-filing/basic-icp-service/user-guide/icp-filing-server-access-information-check

Wer sich, wie naheliegend, auf der englischen Seite anmeldet, die die Suchmaschine zuerst anzeigt, erhält also ein Konto, über das sich die geplante Website nicht registrieren lässt. Wer das einmal durchlaufen hat, weiß es auswendig. Wer es zum ersten Mal versucht, verliert Wochen. Meist fällt es erst auf, wenn jemand im Konto vergeblich nach der Registrierungsmaske sucht, und dann ist der Server längst bezahlt und der Starttermin gesetzt.

Huawei Cloud (华为云) zieht dieselbe Trennlinie, fast mit denselben Worten.

> Konten der internationalen Website von Huawei Cloud unterstützen keine ICP-Registrierung. Nötig ist ein Huawei-Cloud-Konto für das chinesische Festland, mit einem Registrierungsserver auf dem chinesischen Festland und mindestens drei Monaten Laufzeit.
> Quelle: Huawei Cloud (华为云), Help Center, zuletzt aktualisiert am 17. Juli 2024 und am 20. August 2024. https://support.huaweicloud.com/intl/en-us/prepare-icp/icp_02_0047.html und https://support.huaweicloud.com/intl/en-us/prepare-icp/icp_02_0003.html

Bei Tencent Cloud (腾讯云) bezieht sich die dokumentierte Regel auf den Server. Zu internationalen Konten schweigen die geprüften Tencent-Seiten, in die eine wie in die andere Richtung, und deshalb schweigen auch wir.

> Eine Lighthouse-Instanz in einer Festland-Region kommt für die ICP-Registrierung infrage, wenn sie mindestens 90 Tage Laufzeit hat und während der Prüfung noch mindestens 30 Tage übrig sind.
> Quelle: Tencent Cloud (腾讯云), Dokumentation, zuletzt aktualisiert am 23. September 2026. https://cloud.tencent.com/document/product/1207/45756

## Hongkong und der wahre Preis der Abkürzung

Hosting in Hongkong braucht keine ICP-Registrierung. Das ist der ganze Reiz, und in zwei Fällen ist es eine vertretbare Wahl: Sie haben noch keine Gesellschaft auf dem Festland, oder Sie brauchen etwas online, bevor der Antrag durch ist.

Was Sie dafür aufgeben, gehört präzise benannt.

Die Latenz fällt aus Nord- und Westchina spürbar schlechter aus als bei einem Ursprung auf dem Festland, weil der Verkehr weiterhin die Grenze passiert. Die Leistung schwankt nach Tageszeit und nach Netzbetreiber, weshalb die Messung an einem Dienstagmorgen wenig über den Freitagabend aussagt.

Behandeln Sie Hongkong als Brücke. Wenn China geschäftlich zählt, budgetieren Sie Gesellschaft und Registrierung, lassen Sie Hongkong in der Zwischenzeit laufen und setzen Sie ein Datum für den Umzug, bevor die Umstände es für Sie setzen.

## Vercel, Cloudflare und die Knoten im Ausland

Ein globales CDN bringt Kopien Ihrer Seiten näher an die Besucher, nach Hongkong oder Tokio, und das hilft. An blockierten Hosts, die die Seite selbst aufruft, ändert es nichts.

Auch Vercel kommt zur Sprache, weil dort viele Astro- und Next.js-Websites liegen. Vercels eigene Wissensdatenbank antwortet unmissverständlich.

> „Vercel hat keine Server oder CDN-Knoten auf dem chinesischen Festland“ und „Vercel kann Verfügbarkeit oder Leistung auf dem chinesischen Festland nicht garantieren“. Chinas Netzkontrollen können die .vercel.app-Subdomains blockieren oder drosseln.
> Quelle: Vercel Knowledge Base, veröffentlicht am 3. November 2025, aktualisiert am 11. September 2026. https://vercel.com/kb/guide/accessing-vercel-hosted-sites-from-mainland-china

> Bei GreatFire gilt https://vercel.app auf dem chinesischen Festland in allen 4 letzten aussagekräftigen Tests als blockiert, zuletzt am 14. September 2026. Von 157 auf der Domain getesteten URLs sind 154 als blockiert erfasst.
> Quelle: GreatFire, September 2026. https://en.greatfire.org/https/vercel.app

Vercel rät zu einer eigenen Domain statt .vercel.app, zu selbst gehosteten Schriften und Analytics und, für eine Website, die in China Leistung bringen muss, zu einer separaten Kopie auf Festland-Infrastruktur mit eigener ICP-Registrierung oder -Lizenz. Diese letzte Option heißt, eine zweite Website zu betreiben, auf einer der drei oben genannten Festland-Clouds oder bei einem anderen Anbieter auf dem Festland.

Standard- und Gratistarif von Cloudflare bedienen Besucher vom Festland über Standorte im Ausland. Das Netz im Land ist ein eigenes Produkt.

> Das Cloudflare China Network ist ein separates Abonnement für Enterprise-Kunden, betrieben in Rechenzentren auf dem Festland von Cloudflares Partner JD Cloud. Jede Hauptdomain braucht eine gültige ICP-Registrierung oder -Lizenz, und JD Cloud prüft die Inhalte jeder Domain, bevor das Netz freigeschaltet wird.
> Quelle: Cloudflare-Entwicklerdokumentation, zuletzt aktualisiert am 30. April 2026. https://developers.cloudflare.com/china-network/

Für eine auf dem Festland gehostete Website ist die einfachere Antwort meist das inländische CDN der Cloud, auf der Sie ohnehin sitzen. Es läuft unter der Registrierung, die Sie bereits haben, und hält den Stack bei einem Anbieter.

## WordPress von einem Festland-Server aus aktuell halten

WordPress auf einem Server im chinesischen Festland hat ein Wartungsproblem, das WordPress anderswo nicht hat.

Das Plugin-Verzeichnis, das Theme-Verzeichnis und die Update-Server des Kerns antworten zwar aus China. Sie drosseln Festland-IP-Bereiche aber energisch und liefern HTTP 429 oft genug, dass eine Website wochenlang ungepatcht bleibt. Das Dashboard sagt dazu nichts. Es bietet einfach keine Updates mehr an, und die Website fällt still zurück.

Drei Auswege funktionieren in der Praxis: inländische Spiegelserver, ein Update-Prozess, der von außerhalb Chinas gegen eine Staging-Kopie läuft, oder ein Wartungsvertrag, in dem eine namentlich benannte Person für den Patch-Stand geradesteht. Entscheiden Sie sich bewusst. Nichts zu entscheiden ist ebenfalls eine Entscheidung, und sie endet mit einer ungepatchten Website am offenen Netz.

## Was das kostet

Der Server ist der billige Teil. Die Knopfdruck-Images laufen auf den Einstiegsservern der jeweiligen Cloud.

Der eigentliche Aufwand liegt woanders. Die Gesellschaft auf dem Festland muss gegründet oder unterhalten werden; Vorbereitung der Unterlagen und Prüfung kosten Arbeitsstunden. Nach dem Start loggt sich eine namentlich benannte Person Monat für Monat in die Cloud-Konsole ein, um Patches einzuspielen und Sicherungen anzustoßen.

Teams, die nur die Serverzeile kalkulieren, verhandeln im vierten Monat über den Leistungsumfang nach.

## Die Wahl zwischen den Wegen

| Ausgangslage | Wo hosten | Erforderliche Formalität |
| --- | --- | --- |
| Keine Gesellschaft auf dem Festland, Start muss jetzt sein | Hongkong | Keine |
| Gesellschaft vorhanden, informative Website | Alibaba, Tencent oder Huawei auf dem Festland | ICP-Registrierung, 3 bis 6 Wochen |
| Gesellschaft vorhanden, Umsatz auf der Website | Festland, dazu inländische Zahlungswege | Kommerzielle ICP-Lizenz, 12 bis 18 Wochen |
| Globale Website, kleines China-Publikum, keine Gesellschaft | Ursprung im Ausland lassen, zuerst die Abhängigkeiten bereinigen | Keine |

Die letzte Zeile wird am häufigsten übersprungen und ist oft die richtige Antwort. Wenn China 3 % Ihres Verkehrs ausmacht und keine Gesellschaft in Sicht ist, holt das Entfernen der blockierten Abhängigkeiten aus der bestehenden Website [den größten Teil des möglichen Tempos](/de/ressourcen/china-web-leitfaden/wordpress-geschwindigkeit-china/) heraus, zu einem Bruchteil der Kosten eines Festland-Deployments.

## Häufige Fragen

**Können wir unseren jetzigen Anbieter behalten und einfach ein China-CDN ergänzen?**
Nur wenn der Anbieter Standorte auf dem Festland hat, und das setzt eine registrierte Domain voraus. Ohne Registrierung kaufen Sie einen ausländischen Standort mit chinesischem Namen.

**Was kostet WordPress-Hosting auf dem Festland?**
Der Server ist der kleinste Posten. Ins Gewicht fallen die Gesellschaft, die Registrierungsarbeit und, nach dem Start, die Person, die sich um den Server kümmert.

**Muss die Domain eine .cn sein?**
Nein. Eine .com lässt sich registrieren. Eine registrierte .com auf einem Festland-Server ist der übliche und funktionierende Aufbau.

**Was passiert, wenn wir ohne Registrierung in China hosten?**
Die Ports bleiben zu, die Website liefert nichts aus. Der Anbieter setzt das auf Netzebene durch. Es muss Sie keine Behörde erst finden.

**Übernehmen Sie die ICP-Registrierung für uns?**
Wir führen die Registrierung im Namen der Festlandgesellschaft des Kunden: Unterlagen, Realnamensprüfung, Einreichung beim Anbieter, Nachfassen. Für ein Unternehmen ohne Gesellschaft können wir nicht registrieren, und das kann auch sonst niemand.

Sie wägen ein Festland-Deployment gegen den Verbleib im Ausland ab? Sagen Sie uns, wo Sie bei der Gesellschaft stehen und welchen Anteil Ihres Verkehrs China ausmacht, dann kommen wir mit dem passenden Weg zurück. Manchmal besteht dieser Weg darin, Ihren Ursprung genau dort zu lassen, wo er ist.
