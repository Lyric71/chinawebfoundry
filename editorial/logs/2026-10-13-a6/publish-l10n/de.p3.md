---
title: "ICP-Registrierung für eine WordPress-Website"
subtitle: "Der WordPress-Teil der ICP-Registrierung: was die Prüfung an der Website selbst kontrolliert und wie sich der Aufbau danach richtet."
summary: "Was die ICP-Registrierung von der Website verlangt: eine während der Prüfung abgeschaltete Domain, Name und Inhalt im Einklang mit dem Antrag, dazu der Zeitplan."
visual: "/images/guides/wordpress-icp-filing.webp"
order: 43
published: true
publishedAt: "2026-10-13"
updatedAt: "2026-10-13"
reviewBy: "2027-01-09"
category: "Legal"
author: "echo-peng"
---

Die ICP-Registrierung (ICP备案) betrifft vor allem das Unternehmen: Sie setzt eine Gesellschaft auf dem chinesischen Festland voraus, die den Antrag stellt, und einen Server auf dem Festland, an den er geknüpft ist. Geprüft wird aber auch die WordPress-Website selbst. Ihre Domain muss bei einem Registrar auf dem Festland liegen und auf den Antragsteller eingetragen sein. Der Name der Website muss chinesisch sein und den Vorgaben der Provinz genügen; der Inhalt muss den Angaben im Antrag entsprechen. Bei einer Erstregistrierung bleibt die Website offline, bis die Nummer vergeben ist. Die ICP-Lizenz kommt nur hinzu, wenn die Website von ihren Nutzern Geld verlangt.

| Was die Prüfung kontrolliert | Was das für die WordPress-Website bedeutet |
| --- | --- |
| Die Domain | Bei einem Registrar auf dem Festland, auf den Antragsteller eingetragen und identitätsgeprüft |
| Der Name der Website | Mindestens drei chinesische Schriftzeichen, als Website-Titel verwendet |
| Der Inhalt | Passend zum Geschäftszweck; kein regulierter Bereich ohne Genehmigung |
| Erreichbarkeit während der Prüfung | Keine. Weder Platzhalterseite noch Staging auf dem Festlandserver |
| Die Fußzeile nach der Freigabe | Die ICP-Nummer mit Link zum MIIT, danach die Nummer der öffentlichen Sicherheit |

Alle unten zitierten Quellen wurden am 13. Oktober 2026 geprüft.

## ICP-Registrierung oder ICP-Lizenz: Verlangt die Website für irgendetwas Geld?

Das chinesische Recht kennt zwei Arten von Internet-Informationsdiensten, und die Regel passt in zwei Sätze.

> Kommerzielle Internet-Informationsdienste stellen Nutzern gegen Entgelt Informationen oder Dienste zur Erstellung von Webseiten bereit. Nichtkommerzielle Dienste stellen Nutzern kostenlos öffentliche, allgemein zugängliche Informationen bereit.
> Quelle: Staatsrat, Verwaltungsmaßnahmen für Internet-Informationsdienste (互联网信息服务管理办法), Artikel 3, Fassung vom 8. Januar 2011, von der Revision vom 6. Dezember 2024 nicht berührt. https://www.gov.cn/gongbao/content/2011/content_1860864.htm

Eine Unternehmenswebsite, ein Blog, ein Produktkatalog oder eine Karriereseite lassen sich kostenlos lesen; für sie genügt die Registrierung. Eine Bezahlschranke oder ein Mitgliedschafts-Plugin, über das Kurse verkauft werden, führt in Richtung Lizenz, und auf diesem Weg ist ein zugelassener Berater unverzichtbar.

Umstritten ist der WooCommerce-Shop. Chinas Negativliste für ausländische Investitionen nimmt den E-Commerce von der 50-Prozent-Grenze für ausländische Beteiligungen an Mehrwert-Telekommunikationsdiensten aus, ein Indiz dafür, dass Shops als eigene Kategorie gelten. Wo Ihr Shop einzuordnen ist, muss ein Berater klären, und zwar vor dem Antrag. [Unser Leitfaden zur ICP-Registrierung für ausländische Unternehmen](/de/ressourcen/china-web-leitfaden/icp-lizenz-auslaendische-unternehmen/) behandelt die Lizenz, die Beteiligungsgrenze und die Pilotzonen.

## Was die Registrierung von der Website verlangt, nicht vom Unternehmen

Auf Seiten der Website können drei Punkte einen Antrag zu Fall bringen, bevor ihn überhaupt ein Sachbearbeiter zu Gesicht bekommt.

**Die Domain.** Alibaba Cloud (阿里云) nennt drei Anforderungen, und keine davon betrifft das Hosting.

> Die Domain-Endung muss vom MIIT genehmigt sein, der Registrar muss zugelassen sein, und die Angaben des Domaininhabers müssen mit dem Antragsteller übereinstimmen. Domains, die auf der internationalen Website von Alibaba Cloud registriert sind, müssen vor der Registrierung zu einem Registrar auf dem Festland übertragen und per Identitätsprüfung verifiziert werden.
> Quelle: Hilfecenter von Alibaba Cloud (阿里云), Vorbereitung und Prüfung der Domain, zuletzt aktualisiert am 23. September 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/prepare-and-check-the-domain-name

Dieselbe Seite verlangt, dass die Domain noch mehr als 45 Tage läuft. Eine Domain, die Ihre Agentur in Europa auf ihren eigenen Namen registriert hat, scheitert schon am ersten Tag an der dritten Anforderung.

**Der Name der Website.** Über dieses Feld stolpern WordPress-Teams. Er muss chinesisch sein und früh feststehen, denn er wird zum Website-Titel.

> Der Name einer Unternehmenswebsite muss aus mindestens drei chinesischen Schriftzeichen bestehen. Reine Ziffern, Englisch und Domainnamen sind nicht zulässig, und der Name muss zum tatsächlichen Inhalt der Website passen. Nichtstaatliche Stellen dürfen Begriffe wie 中国, 中华 oder 国家 nicht verwenden, und Wörter wie Blog, Forum, online oder Community brauchen eine Vorabgenehmigung.
> Quelle: Hilfecenter von Alibaba Cloud (阿里云), Angaben zur Website ausfüllen, zuletzt aktualisiert am 21. September 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/fill-in-website-information

Hinzu kommen Sperrbegriffe der einzelnen Provinzen. Alibabas Liste der Ablehnungsgründe (7. Juli 2026) verlangt, dass eine registrierte Website den eingetragenen Namen im Browser-Tab und oben auf der Seite zeigt. Deshalb trägt ihn der Website-Titel unter Einstellungen > Allgemein.

**Der Inhalt.** Tencent Cloud (腾讯云) schreibt, dass ein Unternehmen seine eigene Website registriert und deren Inhalt im Rahmen seines Geschäftszwecks bleiben muss (Dokumentation aktualisiert am 23. Juli 2026). Manche Themen brauchen die Genehmigung einer Aufsichtsbehörde, bevor der Antrag überhaupt eingereicht wird.

> Internet-Informationsdienste in den Bereichen Nachrichten, Verlagswesen, Bildung und ähnlichen Feldern, die eine Genehmigung der zuständigen Behörde benötigen, müssen diese einholen, bevor sie eine Lizenz beantragen oder die Registrierung abschließen.
> Quelle: Staatsrat, Verwaltungsmaßnahmen für Internet-Informationsdienste, Artikel 5 in der Fassung der Staatsratsverordnung Nr. 797 vom 6. Dezember 2024, in Kraft seit 20. Januar 2025. https://www.mee.gov.cn/zcwj/gwywj/202412/t20241216_1098631.shtml

Alibabas eigene Liste der Vorabgenehmigungen reicht weiter.

| Inhalt der WordPress-Website | Was vor der Registrierung nötig ist |
| --- | --- |
| Nachrichten und Zeitgeschehen | Eine Lizenz für Internet-Nachrichtendienste |
| Online-Publikationen | Eine Lizenz für Online-Verlagsdienste |
| Informationen zu Arzneimitteln oder Medizinprodukten | Ein Zertifikat für Arzneimittel-Informationsdienste |
| Video- und Audioprogramme | Eine Lizenz für audiovisuelle Programme |
| Außerschulische Nachhilfe, Finanzen, Religion | Die Genehmigung der Branchenaufsicht |
| Nichts davon | In manchen Regionen eine unterschriebene Erklärung |

Quelle der Tabelle: Hilfecenter von Alibaba Cloud (阿里云), Vorabgenehmigungen, zuletzt aktualisiert am 21. August 2026.

## Offline während der Prüfung: keine Platzhalterseite

Bei einer Erstregistrierung darf die Website nicht online sein, solange die Behörde sie prüft. Tencent sagt es unverblümt.

> Während der Prüfung einer neuen Registrierung oder einer neuen Website darf die Website nicht erreichbar sein. Sie muss geschlossen oder über ihre öffentliche Domain oder IP unerreichbar sein, sonst besteht sie die Prüfung der Behörde nicht und kann abgelehnt werden.
> Quelle: Dokumentation von Tencent Cloud (腾讯云), zuletzt aktualisiert am 21. August 2026. https://cloud.tencent.com/document/product/243/19650

Alibaba setzt das ebenfalls durch.

> Eine Website darf keinen Webdienst anbieten, bevor sie eine Registrierungsnummer hat. Tut sie es doch, erkennt die Überwachung von Alibaba Cloud das und sperrt die Website.
> Quelle: Hilfecenter von Alibaba Cloud (阿里云), FAQ zur ICP-Registrierung, zuletzt aktualisiert am 23. September 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/support/faq-about-icp-filing-preparations

Ein „Coming soon“-Plugin auf dem Festlandserver ist deshalb ein Fehler, eine Staging-Kopie auf dessen öffentlicher IP ebenso. In unseren Projekten bleiben die Ports 80 und 443 ohnehin geschlossen, bis die Nummer da ist.

Sie registrieren die Domain, auf der Ihre internationale Website bereits läuft? Tencents Formulierung lässt keine Ausnahme für eine anderswo gehostete Website zu. Fragen Sie den Anbieter, bevor Sie einreichen.

Gebaut wird derweil anderswo, auf einer lokalen oder außerhalb Chinas gehosteten Staging-Kopie. Die Prüfungszeit ist ein guter Moment, die gesperrten Abhängigkeiten zu entfernen ([unser Leitfaden zur Migration von WordPress nach China](/de/ressourcen/china-web-leitfaden/wordpress-nach-china-migrieren/) listet sie auf).

| Wann | Die Registrierung | Der WordPress-Aufbau |
| --- | --- | --- |
| Vor dem Einreichen | Gesellschaft, Domain, chinesischer Website-Name, Server | Website-Titel festlegen; über Kommentare und Formulare entscheiden |
| Prüfung (wir planen 3 bis 6 Wochen) | Prüfung durch den Anbieter, dann Prüfung durch die Provinz | Staging außerhalb des Festlandservers; Abhängigkeiten beheben |
| Die Nummer kommt | Registrierung genehmigt | Deployment, Nummer in die Fußzeile, Domain auf den Server zeigen |
| Innerhalb von 30 Tagen nach dem Start | Registrierung bei der öffentlichen Sicherheit | Zweite Nummer in die Fußzeile |

Drei bis sechs Wochen sind unsere Planungsgröße. Auf dem Papier geht es schneller.

> Die eigene Prüfung von Alibaba Cloud dauert 1 bis 2 Arbeitstage. Die anschließende Prüfung durch die Kommunikationsverwaltung der Provinz (省级通信管理局) dauert in der Regel 1 bis 20 Arbeitstage.
> Quelle: Hilfecenter von Alibaba Cloud (阿里云), Überblick über den ICP-Registrierungsprozess, zuletzt aktualisiert am 26. August 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview

Alibaba berechnet für die Registrierung selbst nichts; bezahlt wird der Festlandserver, an den sie gebunden ist (FAQ aktualisiert am 23. April 2026).

In WordPress verschwinden vor dem Start als Erstes Kommentare und Foren.

An diesem Punkt widersprechen sich Vorschriften und Anbieter. Artikel 9 der Staatsratsmaßnahmen erwähnt noch immer einen gesonderten Antrag für elektronische Bulletin-Dienste (Foren und Nachrichtenbretter). Doch der Staatsrat hat diese Genehmigung abgeschafft, und das Ministerium hat seine Bulletin-Vorschriften am 23. September 2014 aufgehoben. Alibabas Liste der Ablehnungsgründe nennt Bulletin-Inhalte dennoch weiterhin unter den genehmigungspflichtigen Themen, und die erste Prüfung Ihres Antrags nimmt der Anbieter vor.

Eine aktuelle Registrierungsseite, die sich mit einfachen Blog-Kommentaren befasst, haben wir nicht gefunden. Starten Sie also mit abgeschalteten Kommentaren und deinstalliertem bbPress oder BuddyPress, und fragen Sie den Anbieter, bevor Sie etwas wieder einschalten.

## Warum WordPress.com nicht registriert werden kann

WordPress.com bietet Rechenzentren in US West, US Central, US East und EU West an (Hilfeseite geprüft am 21. September 2026). Keines davon steht auf dem Festland, und die Registrierung übernimmt, wer den Netzzugang des Servers bereitstellt.

> Ein anderswo gekaufter Server kann bei Tencent Cloud nicht registriert werden. Die Registrierung folgt dem Grundsatz, dass registriert, wer den Zugang bereitstellt: Sie registrieren bei dem Anbieter, dessen Server Sie nutzen.
> Quelle: Dokumentation von Tencent Cloud (腾讯云), zuletzt aktualisiert am 30. Januar 2026. https://cloud.tencent.com/document/product/243/19631

Eine WordPress.com-Website, die in China laufen soll, wird deshalb zu einem selbst gehosteten WordPress auf einem Festlandserver, wie es [unsere Seite zu WordPress in China](/de/wordpress-in-china/) beschreibt.

Ob sie in China überhaupt lädt, steht auf einem anderen Blatt, und hier ist GreatFires Antwort verlässlicher als die älterer Leitfäden.

> GreatFire stuft https://wordpress.com als nicht gesperrt ein: Alle 20 jüngsten aussagekräftigen Tests vom chinesischen Festland verbanden sich normal, der letzte am 11. Oktober 2026.
> Quelle: GreatFire, Erreichbarkeitsdaten für https://wordpress.com, abgerufen am 13. Oktober 2026. https://en.greatfire.org/https/wordpress.com

Für die Domain insgesamt fällt das Bild gemischter aus: Von 1.516 getesteten wordpress.com-URLs gelten 230 als gesperrt und 823 als gestört (GreatFire-Domainseite, 13. Oktober 2026).

## Die Registrierungskonsole und wer bei Ihnen dafür zuständig ist

Die Registrierung läuft in der Konsole eines Anbieters, und es kommt darauf an, welches Konto Sie eröffnen. Bei Alibaba muss es ein aliyun.com-Konto sein.

> Konten der internationalen Website von Alibaba Cloud (alibabacloud.com) unterstützen keine Anträge auf ICP-Registrierung.
> Quelle: Hilfecenter von Alibaba Cloud, ICP-Registrierung für Unternehmen außerhalb des chinesischen Festlands, zuletzt aktualisiert am 20. August 2026. https://help.aliyun.com/en/icp-filing/basic-icp-service/product-overview/icp-filing-application-for-enterprises-outside-the-chinese-mainland

Der für die Website Verantwortliche lädt anschließend ein Ausweisdokument hoch und durchläuft eine Gesichtsprüfung. Alibaba akzeptiert den Reisepass von Einwohnern anderer Länder (11. September 2026), doch die Gesichtsprüfung ist auf den Personalausweis des Festlands ausgelegt (2. Juni 2026), und keine Seite, die wir gefunden haben, erklärt, wie ein Passinhaber sie besteht.

Die Frist, die Teams kalt erwischt, ist die SMS.

> Nach dem Einreichen des Antrags schickt das MIIT eine Bestätigungs-SMS. Die Bestätigung muss innerhalb von 24 Stunden erfolgen, sonst ist der Antrag neu einzureichen.
> Quelle: Hilfecenter von Alibaba Cloud (阿里云), SMS-Bestätigung des MIIT, zuletzt aktualisiert am 17. September 2025. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/sms-check

Zuständig ist also eine namentlich benannte Person in der Festlandgesellschaft. Sie hat die Zugangsdaten zur Konsole, nutzt eine Telefonnummer aus der Provinz der Registrierung (Alibabas Empfehlung) und antwortet am selben Tag. Ihr freiberuflicher Entwickler und die Projektleiterin in Lyon kommen dafür nicht in Frage.

Alibaba lehnt Anträge ab, bei denen unter der Kontaktnummer niemand abnimmt, und Tencent schreibt, dass eine Registrierung gelöscht werden kann, wenn die Nummer bei einer Stichprobe nicht erreichbar ist. [Unser China-Hosting](/de/leistungen/china-hosting/) übernimmt die Registrierung von Anfang bis Ende, und selbst dann geht die SMS an die Person, die Sie benannt haben.

## Nach der Freigabe: zwei Nummern in der Fußzeile und die jährlichen Pflichten

Ist die Nummer erteilt, bleibt im Wesentlichen Verwaltungsarbeit. Die Nummer gehört vom ersten Tag an auf die Website.

> Ein Anbieter nichtkommerzieller Internet-Informationsdienste zeigt seine Registrierungsnummer bei Freischaltung der Website unten mittig auf der Startseite an, darunter einen Link zum Registrierungssystem des MIIT.
> Quelle: Ministerium für Industrie und Informationstechnologie (工业和信息化部), Verwaltungsmaßnahmen für die Registrierung nichtkommerzieller Internet-Informationsdienste, Artikel 13, geändert am 18. Januar 2024. https://www.miit.gov.cn/gyhxxhb/jgsj/cyzcyfgs/bmgz/xxtxl/art/2024/art_84a0cfa0ebd049bbbe751dca9a008e56.html

In WordPress platzieren Sie sie in einem Footer-Widget oder einem Child-Theme. Eine Nummer, die in die footer.php des Parent-Themes getippt wurde, überlebt nur bis zum nächsten Theme-Update, und ein fehlender Link kann eine Anordnung zur Berichtigung und danach ein Bußgeld nach sich ziehen (Artikel 25).

Danach folgt die Registrierung bei der öffentlichen Sicherheit (公安备案). Alibaba räumt dafür 30 Tage ab dem Start der Website ein, und das Büro für öffentliche Sicherheit Shenzhen (10. Juni 2023) schreibt, dass die Nummer nach der Genehmigung gut sichtbar unten auf der Startseite stehen muss. In der Fußzeile stehen damit zwei Nummern.

Bleiben die jährlichen Pflichten. Die MIIT-Maßnahmen verlangen, jede Änderung der registrierten Angaben 30 Tage im Voraus zu melden und die Registrierung an dem Tag zu löschen, an dem der Dienst endet. Und der Text sieht weiterhin eine jährliche Überprüfung über das MIIT-System vor.

Wer die WordPress-Website zu einem anderen Anbieter umzieht, braucht eine Übertragungsregistrierung, und dabei gilt das Umgekehrte: Die registrierte Website muss erreichbar bleiben, und Alibaba lehnt eine Übertragung ab, wenn sie nicht erreichbar ist. Lassen Sie den Server ohne neuen Anbieter auslaufen, wird der Eintrag zur leeren Hülle, die die Behörde laut Tencent löscht (Dokumentation aktualisiert am 3. Februar 2026).

Ins Child-Theme gehört auch Baidu Tongji (百度统计). Ein gepflegtes Plugin speziell dafür gibt es nicht, und Baidus Hilfeseite (22. September 2021) sagt, der Code gehöre auf jeder Seite vor das schließende head-Tag.

## Häufige Fragen

**Braucht meine WordPress-Website eine ICP-Registrierung?**

Nur wenn sie von einem Server auf dem chinesischen Festland ausgeliefert wird. Eine in Hongkong oder Europa gehostete Website braucht keine Registrierung und zahlt den Preis dafür an der Grenze, wo jede Anfrage die Große Firewall passiert. Ein Festlandserver kann die Website erst für Besucher öffnen, wenn die Registrierung abgeschlossen ist, und eine Website, die von Nutzern Geld verlangt, braucht zusätzlich die ICP-Lizenz.

**Kann ich während der Prüfung eine „Coming soon“-Seite online lassen?**

Nicht auf dem Festlandserver und nicht unter der Domain, die registriert wird. Tencent Cloud schreibt, dass die Website während einer Erstregistrierung über ihre öffentliche Domain oder IP geschlossen oder unerreichbar sein muss, andernfalls droht die Ablehnung bei der Prüfung durch die Behörde. Bauen Sie auf einer lokalen oder ausländischen Staging-Kopie und richten Sie die Domain auf den Festlandserver aus, sobald die Nummer vergeben ist.

**Kann unser Entwickler im Ausland das Registrierungskonto führen?**

Er kann die Website bauen, aber die Registrierung gehört der Festlandgesellschaft. Antragsteller muss ein Unternehmen oder Einwohner des chinesischen Festlands sein, die Domain muss auf seinen Namen laufen, und die SMS des MIIT an die Nummer im Antrag muss innerhalb von 24 Stunden beantwortet werden. Keiner dieser drei Punkte liegt in der Hand eines Entwicklers im Ausland.

**Wie lange dauert die ICP-Registrierung für eine WordPress-Website?**

Alibaba Cloud nennt 1 bis 2 Arbeitstage für die eigene Prüfung und in der Regel 1 bis 20 Arbeitstage für die Prüfung durch die Provinz. Wir planen drei bis sechs Wochen, weil das Zusammentragen der Unterlagen dauert und Anträge zur Korrektur zurückkommen. Stellen Sie den Aufbau auf dem Staging fertig, bevor die Nummer kommt.
