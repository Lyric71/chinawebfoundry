---
title: "WordPress-Hosting in China"
subtitle: "Alle drei großen chinesischen Clouds liefern ein WordPress-Image auf Knopfdruck. Managed WordPress liefert keine davon, und genau in dieser Lücke bleiben ausländische Projekte stecken."
summary: "Was Alibaba, Tencent und Huawei tatsächlich verkaufen, die ICP-Registrierung als Voraussetzung für jeden Server auf dem Festland, die Abkürzung über Hongkong und das Update-Problem, das nie im Budget steht."
visual: "/images/guides/wordpress-hosting-china.webp"
order: 32
published: true
publishedAt: 2026-08-29
updatedAt: 2026-08-29
category: Hosting
---

In China gibt es kein WP Engine. Kein Kinsta, kein Flywheel, kein einziges Managed-WordPress-Angebot bei einem Anbieter auf dem Festland.

Kaufen können Sie ein vorinstalliertes WordPress-Image auf allen drei großen chinesischen Clouds, aufgesetzt auf einen kleinen virtuellen Server, den Sie selbst administrieren. Mit Managed Hosting hat dieses Produkt nichts zu tun, und in dieser Lücke laufen die meisten ausländischen WordPress-Projekte in China auf Grund.

Dieser Leitfaden zeigt, was die Festland-Clouds wirklich verkaufen, welche Behördenformalität abgeschlossen sein muss, bevor auch nur eine Anfrage ausgeliefert wird, und welche Kosten vier Monate nach dem Start wieder auftauchen, wenn sie niemand eingeplant hat. Das größere Bild zu Servern und Latenz liefert unser Leitfaden zum [Hosting einer Website in China](/de/ressourcen/china-web-leitfaden/website-in-china-hosten/). Wie wir mit diesem Stack arbeiten, steht unter [WordPress in China](/de/wordpress-in-china/).

## Was die drei Festland-Clouds tatsächlich anbieten

Alibaba Cloud (阿里云), Tencent Cloud (腾讯云) und Huawei Cloud (华为云) liefern jeweils ein fertiges WordPress-Anwendungsimage in ihrem Einstiegsprodukt mit.

| Anbieter | Produkt | Was Sie bekommen |
| --- | --- | --- |
| Alibaba Cloud | Simple Application Server (轻量应用服务器) | WordPress-Image auf Alibaba Cloud Linux 3, PHP 8.1, MySQL 5.7, Nginx 1.22 |
| Tencent Cloud | Lighthouse (轻量应用服务器) | WordPress-Anwendungsvorlage |
| Huawei Cloud | FlexusL (云耀云服务器 L实例) | WordPress-Anwendungsimage, dazu Marketplace-Images für ECS |

Lesen Sie die rechte Spalte in Ruhe. Jede dieser Zeilen beschreibt ein Betriebssystem mit vorinstalliertem WordPress. Gepflegte Updates, gepflegte Backups, eine Staging-Umgebung, ein Team, das einen Plugin-Konflikt lesen kann: nichts davon liegt in der Schachtel.

Am Ende macht jemand auf Ihrer Seite Serveradministration, auf Chinesisch, in einer Konsole ohne englischen Modus. Das ist ein dauerhafter Monatsposten. Schreiben Sie ihn schon beim Kickoff ins Budget, denn er kommt ohnehin.

## Vor der Registrierung wird nichts ausgeliefert

Das ist die Rahmenbedingung, die jedes China-Webprojekt umsortiert, deshalb hier ohne Umschweife.

Die Ports 80 und 443 bleiben auf einer Festland-IP unbrauchbar, solange die ICP-Registrierung (ICP备案) nicht abgeschlossen ist. Der Anbieter hält sie am Netzrand geschlossen, vom ersten Tag der Servermiete an. Kein stiller Start, kein Staging-Link, den Sie dem Kunden auf dem Produktivserver zeigen, keine leise Beta, während der Antrag läuft.

> Die ICP-Registrierung kostet nichts. Geprüft wird sie von der Provinzverwaltung für Kommunikation (省级通信管理局), das Ministerium für Industrie und Informationstechnologie führt Stichproben durch. Die veröffentlichten Fristen liegen je nach Provinz und Jahreszeit zwischen 10 und 30 Arbeitstagen.
> Quelle: Registrierungsvorschriften des MIIT und Anbieterdokumentation vom Festland, 2026.

Rechnen Sie mit drei bis sechs Wochen, und das nur, wenn die Gesellschaft auf dem Festland bereits existiert. Unser [Leitfaden zur ICP-Registrierung](/de/ressourcen/china-web-leitfaden/icp-lizenz-auslaendische-unternehmen/) führt durch die Unterlagen und ihre Reihenfolge.

Die kommerzielle ICP-Lizenz (ICP许可证) folgt einer anderen Logik. Sie wird fällig, sobald die Website selbst Geld verdient: E-Commerce, kostenpflichtige Inhalte, kostenpflichtige Software, Werbung. Geprüft wird national statt provinziell, und das dauert deutlich länger.

> Die Prüfung einer kommerziellen ICP-Lizenz auf MIIT-Ebene dauert 60 bis 90 Arbeitstage. Ausländische Beteiligungen über 50 % waren historisch untersagt und bleiben außerhalb der Pilotgebiete Peking, Shanghai Pudong, Freihandelshafen Hainan und Shenzhen eingeschränkt.
> Quelle: Lizenzvorschriften des MIIT und Regelungen der Pilotgebiete, 2026.

Dafür sollten Sie zwölf bis achtzehn Wochen einplanen. Beide Verfahren setzen eine auf dem Festland registrierte juristische Person voraus. Ein ausländisches Unternehmen kann nicht im eigenen Namen registrieren, und kein Hosting-Budget ersetzt diese Gesellschaft.

## Das Alibaba-Cloud-Konto, das Ihre Website nicht hosten kann

Alibaba betreibt zwei Plattformen mit fast identischer Marke. alibabacloud.com ist die internationale Plattform, aliyun.com die chinesische.

Beide sind voneinander getrennt. Keine native Replikation von Ressourcen zwischen ihnen, keine Festland-Regionen auf der internationalen Seite, und eine ICP-Registrierung ist dort ebenfalls nicht möglich.

Der Ablauf, der sich natürlich anfühlt, also die Anmeldung auf der englischen Seite, weil die Suche genau diese ausspielt, führt damit zu einem Konto, das Ihr Vorhaben strukturell nicht hosten kann. Für das richtige Konto brauchen Sie eine chinesische Gewerbelizenz und eine lokale Identitätsprüfung, und der Registrierungsablauf darin ist ausschließlich chinesisch.

Jedes Team, das das einmal durchlaufen hat, weiß es auswendig. Jedes Team, das es zum ersten Mal erlebt, verliert zwei Wochen.

## Hongkong und der wahre Preis der Abkürzung

Hosting in Hongkong braucht keine ICP-Registrierung. Das ist der ganze Reiz, und in zwei Fällen ist es eine vertretbare Wahl: Sie haben noch keine Gesellschaft auf dem Festland, oder Sie brauchen etwas online, bevor der Antrag durch ist.

Was Sie dafür aufgeben, gehört präzise benannt.

Die Latenz fällt aus Nord- und Westchina spürbar schlechter aus als bei einem Ursprung auf dem Festland, weil der Verkehr weiterhin die Grenze passiert. Die Leistung schwankt nach Tageszeit und nach Netzbetreiber, weshalb die Messung an einem Dienstagmorgen wenig über den Freitagabend aussagt. Und Baidu bevorzugt Websites, die auf dem Festland unter einer registrierten Domain liegen, was einen Hongkonger Auftritt in genau der Suchmaschine bergauf laufen lässt, auf die es Ihnen ankommt.

Behandeln Sie Hongkong als Brücke. Wenn China geschäftlich zählt, budgetieren Sie Gesellschaft und Registrierung, lassen Sie Hongkong in der Zwischenzeit laufen und setzen Sie ein Datum für den Umzug, bevor die Umstände es für Sie setzen.

## Die CDN-Frage

Ein globales CDN rückt Ihren Ursprung näher an Hongkong oder Tokio, das hilft. An den blockierten Hosts, die die Seite selbst aufruft, ändert es nichts.

Cloudflare ist der Fall, nach dem am häufigsten gefragt wird. Standard- und Gratistarif bedienen Besucher auf dem Festland vom nächstgelegenen ausländischen Standort aus. Das Netz im Land ist ein separates Enterprise-Abonnement, betrieben zusammen mit JD Cloud, verlangt eine gültige ICP-Registrierung oder -Lizenz je Hauptdomain und durchläuft vor der Aktivierung eine Inhaltsprüfung durch JD Cloud.

Für eine auf dem Festland gehostete Website ist die einfachere Antwort meist das inländische CDN der Cloud, auf der Sie ohnehin sitzen. Es ist registriert, es ist schnell, und es hält die ganze Kette bei einem Anbieter.

## WordPress von einem Festland-Server aus aktuell halten

WordPress auf einem Server im chinesischen Festland hat ein Wartungsproblem, das WordPress anderswo nicht hat.

Das Plugin-Verzeichnis, das Theme-Verzeichnis und die Update-Server des Kerns antworten zwar aus China. Sie drosseln Festland-IP-Bereiche aber energisch und liefern HTTP 429 oft genug, dass eine Website wochenlang ungepatcht bleibt. Das Dashboard sagt dazu nichts. Es bietet einfach keine Updates mehr an, und die Website fällt still zurück.

Drei Auswege funktionieren in der Praxis: inländische Spiegelserver, ein Update-Prozess, der von außerhalb Chinas gegen eine Staging-Kopie läuft, oder ein Wartungsvertrag, in dem eine namentlich benannte Person für den Patch-Stand geradesteht. Entscheiden Sie sich bewusst. Nichts zu entscheiden ist ebenfalls eine Entscheidung, und sie endet mit einer ungepatchten Website am offenen Netz.

## Was das kostet

Der Server ist der billige Teil. Eine Unternehmenswebsite auf Simple Application Server oder Lighthouse liegt meist unter 100 USD im Monat, und die Aktionspreise im ersten Jahr fallen auf den kleinsten Instanzen noch deutlich darunter.

Die Registrierung selbst ist kostenlos. Der eigentliche Aufwand steckt an drei anderen Stellen: im Aufbau oder Erhalt der Gesellschaft auf dem Festland, in den Arbeitsstunden für Unterlagen und Identitätsprüfung, und in der Person, die sich jeden Monat in eine chinesischsprachige Konsole einloggt, um zu patchen und Sicherungen zu prüfen.

Teams, die nur die Serverzeile kalkulieren, verhandeln im vierten Monat über den Leistungsumfang nach.

## Die Wahl zwischen den Wegen

| Ausgangslage | Wo hosten | Erforderliche Formalität |
| --- | --- | --- |
| Keine Gesellschaft auf dem Festland, Start muss jetzt sein | Hongkong | Keine |
| Gesellschaft vorhanden, informative Website | Alibaba, Tencent oder Huawei auf dem Festland | ICP-Registrierung, 3 bis 6 Wochen |
| Gesellschaft vorhanden, Umsatz auf der Website | Festland, dazu inländische Zahlungswege | Kommerzielle ICP-Lizenz, 12 bis 18 Wochen |
| Globale Website, kleines China-Publikum, keine Gesellschaft | Ursprung im Ausland lassen, zuerst die Abhängigkeiten bereinigen | Keine |

Die letzte Zeile wird am häufigsten übersprungen und ist oft die richtige Antwort. Wenn China 3 % Ihres Verkehrs ausmacht und keine Gesellschaft in Sicht ist, holt das Entfernen der blockierten Abhängigkeiten aus der bestehenden Website den größten Teil des möglichen Tempos heraus, zu einem Bruchteil der Kosten eines Festland-Deployments.

## Häufige Fragen

**Können wir unseren jetzigen Anbieter behalten und einfach ein China-CDN ergänzen?**
Nur wenn der Anbieter Standorte auf dem Festland hat, und das setzt eine registrierte Domain voraus. Ohne Registrierung kaufen Sie einen ausländischen Standort mit chinesischem Namen.

**Was kostet WordPress-Hosting auf dem Festland?**
Der Server liegt für eine Unternehmenswebsite oft unter 100 USD im Monat. Ins Gewicht fallen die Gesellschaft, die Registrierungsarbeit und die Person, die jeden Monat eine chinesischsprachige Konsole bedient.

**Muss die Domain eine .cn sein?**
Nein. Eine .com lässt sich registrieren. Baidu zeigt eine gewisse Vorliebe für .cn, aber eine registrierte .com auf einem Festland-Server ist der übliche und funktionierende Aufbau.

**Was passiert, wenn wir ohne Registrierung in China hosten?**
Die Ports bleiben zu, die Website liefert nichts aus. Der Anbieter setzt das auf Netzebene durch. Es muss Sie keine Behörde erst finden.

**Übernehmen Sie die ICP-Registrierung für uns?**
Wir führen die Registrierung im Namen der Festlandgesellschaft des Kunden: Unterlagen, Realnamensprüfung, Einreichung beim Anbieter, Nachfassen. Für ein Unternehmen ohne Gesellschaft können wir nicht registrieren, und das kann auch sonst niemand.

Sie wägen ein Festland-Deployment gegen den Verbleib im Ausland ab? Sagen Sie uns, wo Sie bei der Gesellschaft stehen und welchen Anteil Ihres Verkehrs China ausmacht, dann kommen wir mit dem passenden Weg zurück. Manchmal besteht dieser Weg darin, Ihren Ursprung genau dort zu lassen, wo er ist.
