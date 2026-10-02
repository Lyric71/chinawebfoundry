# T6-03 deep-translate, DE, pass 2 (push further, German only)

Worked from de.p1.md only. The English was not reopened.

## Change 1, summary

- before: Alibaba, Tencent, Huawei, Vercel und Cloudflare im Vergleich für WordPress auf dem chinesischen Festland, mit der ICP-Regel vorweg und eigenen Messwerten.
+ after:  WordPress auf dem chinesischen Festland: Alibaba, Tencent, Huawei, Vercel und Cloudflare im Vergleich, die ICP-Pflicht vorweg, dazu eigene Messwerte.
why: the subject now leads, as a German standfirst would; "ICP-Pflicht" names the rule more precisely than "ICP-Regel".

## Change 4, introduction

- before: Einen sanften Start gibt es nicht.
+ after:  Ein leiser Start ist ausgeschlossen.

- before: Diese Regel bestimmt alles Weitere. Sie entscheidet, welche Cloud und welches Konto Sie eröffnen und ob Sie eine chinesische Gesellschaft brauchen, bevor auch nur eine Datei umzieht.
+ after:  Von dieser Regel hängt alles Weitere ab: welche Cloud Sie wählen, welches Konto Sie eröffnen und ob Sie eine chinesische Gesellschaft brauchen, bevor auch nur eine Datei umzieht.

- before: Alles Folgende setzt sie voraus.
+ after:  Der Rest dieses Leitfadens setzt sie voraus.
why: "sanfter Start" is a calque of "soft launch"; a cloud is chosen, not "eröffnet".

## Change 5, benchmark block

- before: Es sind ChinaWebFoundrys eigene Zahlen, erhoben auf Kundenwebsites, die wir nach China umgezogen haben oder dort hosten. Kein Dritter hat sie gemessen, und das sollten Sie wissen, bevor Sie sie gewichten.
+ after:  Die folgenden Zahlen stammen von ChinaWebFoundry selbst, erhoben auf Kundenwebsites, die wir nach China umgezogen haben oder dort betreiben. Kein Dritter hat sie gemessen, und das sollten Sie wissen, bevor Sie ihnen Gewicht beimessen.

- before: > Bei einer von uns migrierten WordPress-Website sank die mediane Ladezeit von 23,4 Sekunden mit einem europäischen Ursprung auf 1,2 Sekunden mit einem Ursprung auf dem Festland. [...]
+ after:  > Bei einer von uns migrierten WordPress-Website sank die mediane Ladezeit von 23,4 Sekunden bei europäischem Ursprung auf 1,2 Sekunden bei einem Ursprung auf dem Festland. Etwa die Hälfte der Verbesserung ging auf das Entfernen externer Aufrufe zurück.

- before: Jeder dieser Zahlen fehlt noch eine Bedingung, die wir von jedem fremden Benchmark verlangen würden. Die Tabelle zeigt, welche, Zahl für Zahl.
+ after:  Jeder dieser Zahlen fehlt noch eine Angabe, die wir bei jedem fremden Benchmark einfordern würden. Welche, zeigt die Tabelle Zeile für Zeile.

- before: Die fehlenden Bedingungen kommen in die Fallstudien, an denen wir gerade schreiben.
+ after:  Die fehlenden Angaben liefern die Fallstudien nach, an denen wir derzeit arbeiten.
why: "mit einem Ursprung" was the English "on an origin"; "Bedingung" read as a contractual condition, "Angabe" is what a German reader expects for missing test metadata.

## Change 5, provider table

- before: Nach diesen Optionen fragen ausländische Teams uns am häufigsten. Jede Zeile nennt die Bedingung, die den Ausschlag gibt, und jede stützt sich auf die Seite des Anbieters selbst. Wir haben alle Zeilen am 29. September 2026 geprüft und prüfen sie jedes Quartal erneut.
+ after:  Nach diesen sechs Optionen fragen uns ausländische Teams am häufigsten. Jede Zeile nennt die Bedingung, die den Ausschlag gibt, und stützt sich auf die Seite des jeweiligen Anbieters. Wir haben alle Zeilen am 29. September 2026 geprüft und wiederholen das vierteljährlich.

Table, after:

| Option | Server auf dem Festland | ICP-Registrierung | Konto und Rechtsträger | Stand der Anbieterseite |
| --- | --- | --- | --- | --- |
| Alibaba Cloud (阿里云), China-Seite, aliyun.com | Ja | Über Alibaba, für einen Festland-Server mit mindestens 3 Monaten Laufzeit | aliyun.com-Konto; auf dem Festland eingetragenes Unternehmen oder Einwohner des Festlands | Hilfecenter, 20. August und 24. September 2026 |
| Alibaba Cloud, internationale Seite, alibabacloud.com | Für eine registrierte Website nicht nutzbar | Für diesen Kontotyp nicht unterstützt | Stattdessen ein aliyun.com-Konto eröffnen | Hilfecenter, 20. August 2026 |
| Tencent Cloud (腾讯云) | Ja | Über Tencent, für einen Festland-Server; Lighthouse mit mindestens 90 Tagen Laufzeit | Ein Rechtsträger je Konto | Dokumentation, 30. Januar und 23. September 2026 |
| Huawei Cloud (华为云) | Ja | Über Huawei, für einen „Registrierungsserver“ auf dem Festland mit mindestens 3 Monaten Laufzeit | Konto für das chinesische Festland; internationale Konten können nicht registrieren | Help Center, Juli und August 2024 |
| Vercel | Keine | Nicht angeboten. Eine Kopie in China braucht Festland-Hosting und eine eigene Registrierung | Entfällt | Wissensdatenbank, 11. September 2026 |
| Cloudflare | Nur im China Network, betrieben von JD Cloud | Eine gültige Registrierung oder Lizenz je Hauptdomain | Enterprise-Tarif; JD Cloud prüft vorab die Inhalte | Entwicklerdokumentation, April 2026 |

why: "Anbieterseite vom" left the header dangling; "Bei Vercel nichts" and "Ein registrierender Rechtsträger" read translated.

Closing line: kept as-is.

## Change 6, no managed WordPress

- before: Alle drei verkaufen ein WordPress-Image auf Knopfdruck auf einem virtuellen Einstiegsserver.
+ after:  Was alle drei verkaufen, ist ein WordPress-Image, das sich per Knopfdruck auf einem virtuellen Einstiegsserver installieren lässt.

- before: | Anbieter | Produkt | Was das Image installiert | Anbieterseite aktualisiert |
+ after:  | Anbieter | Produkt | Was das Image installiert | Stand der Anbieterseite |

- before: Updates und Backups liegen bei Ihnen, ebenso das Staging und die Suche nach jemandem, der einen Plugin-Konflikt lesen kann.
+ after:  Updates und Backups liegen bei Ihnen, ebenso das Staging, und auch jemanden, der einen Plugin-Konflikt durchschaut, müssen Sie selbst finden.

- before: Also übernimmt jemand auf Ihrer Seite jeden Monat Serveradministration, solange die Website lebt. Das ist ein Dauerposten. Schreiben Sie ihn schon beim Kickoff ins Budget.
+ after:  Jemand in Ihrem Haus administriert also jeden Monat einen Server, solange die Website besteht. Das ist ein Dauerposten, und er gehört schon beim Kickoff ins Budget.
why: "auf Ihrer Seite" is the English "on your side"; "einen Plugin-Konflikt lesen" was a literal "read"; "auf ... auf" doubled.

## Change 7, the filing and the licence

- before: Alibaba Cloud und Tencent Cloud schreiben die Regel beide in ihre eigene Dokumentation.
+ after:  Alibaba Cloud wie Tencent Cloud halten die Regel in ihrer eigenen Dokumentation fest.

- before: > [...] sonst fängt sie die Überwachung von Tencent Cloud für nicht registrierte Domains ab.
+ after:  > [...] andernfalls wird sie von Tencent Clouds Überwachung nicht registrierter Domains abgefangen.

- before: [...] und keine leise Beta fahren, während die Unterlagen laufen.
+ after:  Das Detail zu den Ports stammt von uns: In unseren Projekten schließt diese Sperre die Ports 80 und 443. Sie können einem Kunden keinen Staging-Link auf dem Produktivserver zeigen und keine leise Beta fahren, während der Antrag läuft.

- before: > Die eigene Prüfung von Alibaba Cloud dauert 1 bis 2 Arbeitstage. Die anschließende Prüfung [...] dauert in der Regel 1 bis 20 Arbeitstage, [...] bei der öffentlichen Sicherheit (公安备案) abschließen.
+ after:  > Die Vorprüfung durch Alibaba Cloud dauert 1 bis 2 Arbeitstage. Die anschließende Prüfung durch die Provinzverwaltung für Kommunikation (省级通信管理局) nimmt in der Regel 1 bis 20 Arbeitstage in Anspruch, und die Website muss innerhalb von 30 Tagen nach dem Start ihre Registrierung bei den Behörden für öffentliche Sicherheit (公安备案) abschließen.

- before: Auf dem Papier sind das bis zu 22 Arbeitstage. Unterlagen zusammenzutragen braucht Zeit, und Anträge kommen zur Korrektur zurück, deshalb planen wir drei bis sechs Wochen ein, vorausgesetzt, die Gesellschaft auf dem Festland existiert bereits. [...] erklärt die Unterlagen und die Reihenfolge, in der sie eingereicht werden.
+ after:  Auf dem Papier ergibt das höchstens 22 Arbeitstage. In der Praxis braucht das Zusammentragen der Unterlagen Zeit, und Anträge kommen zur Nachbesserung zurück. Wir planen deshalb drei bis sechs Wochen ein, vorausgesetzt, die Gesellschaft auf dem Festland besteht bereits. Unser [Leitfaden zur ICP-Registrierung](/de/ressourcen/china-web-leitfaden/icp-lizenz-auslaendische-unternehmen/) führt durch die Unterlagen und die Reihenfolge ihrer Einreichung.

- before: Die kommerzielle ICP-Lizenz (ICP许可证) ist ein anderes Instrument. Sie brauchen sie, wenn die Website selbst Geld verdient: [...]
+ after:  Die kommerzielle ICP-Lizenz (ICP许可证) ist ein eigenes Instrument. Nötig wird sie, sobald die Website selbst Geld verdient: E-Commerce, kostenpflichtige Inhalte, kostenpflichtige Software, Werbung.

- before: Für diese Lizenz planen wir zwölf bis achtzehn Wochen ein.
+ after:  Für diese Lizenz rechnen wir mit zwölf bis achtzehn Wochen.

- before: Ausländische Beteiligung ist die andere Frage, die eine Lizenz aufwirft.
+ after:  Bleibt die Frage der ausländischen Beteiligung, die jede Lizenz aufwirft.
why: "Prüfung" and "dauert" each appeared twice in one quote; "während die Unterlagen laufen" was not German; the "X ist die andere Frage" calque replaced; "planen ... ein" no longer used twice.

Remaining blockquotes and the closing paragraph: kept as-is.

## Change 8, the cloud account

- before: Alibaba betreibt zwei Seiten mit fast identischem Markenauftritt. alibabacloud.com ist die internationale, aliyun.com die chinesische, und nur die zweite kann registrieren.
+ after:  Alibaba betreibt zwei Seiten mit fast identischem Markenauftritt: die internationale alibabacloud.com und die chinesische aliyun.com. Registrieren lässt sich nur über die zweite.
why: a German sentence should not open on a lowercase domain; a site does not "register", an account holder registers through it.

- before: Die Anmeldung, die sich natürlich anfühlt, auf der englischen Seite, die die Suche zuerst ausspielt, erzeugt also ein Konto, das die Website, die Sie bauen, nicht registrieren kann. [...] Wer es zum ersten Mal macht, verliert Wochen, und meist merkt man es erst, wenn jemand die Registrierungsmaske sucht und das Konto keine hat, wenn der Server bereits bezahlt und der Starttermin bereits gesetzt ist.
+ after:  Wer sich naheliegenderweise auf der englischen Seite anmeldet, die die Suchmaschine zuerst anzeigt, erhält also ein Konto, über das sich die geplante Website nicht registrieren lässt. Wer das einmal durchlaufen hat, weiß es auswendig. Wer es zum ersten Mal versucht, verliert Wochen. Meist fällt es erst auf, wenn jemand im Konto vergeblich nach der Registrierungsmaske sucht, und dann ist der Server längst bezahlt und der Starttermin gesetzt.
why: three stacked relative clauses mirrored the English sentence.

- before: Bei Tencent Cloud (腾讯云) betrifft die dokumentierte Regel den Server. Die Tencent-Seiten, die wir geprüft haben, sagen zu internationalen Konten nichts, weder in die eine noch in die andere Richtung, und deshalb tun wir es auch nicht.
+ after:  Bei Tencent Cloud (腾讯云) bezieht sich die dokumentierte Regel auf den Server. Zu internationalen Konten schweigen die geprüften Tencent-Seiten, in die eine wie in die andere Richtung, und deshalb schweigen auch wir.

- before: > Eine Lighthouse-Instanz in einer Festland-Region kommt für die ICP-Registrierung in Frage, [...]
+ after:  > Eine Lighthouse-Instanz in einer Festland-Region kommt für die ICP-Registrierung infrage, wenn sie mindestens 90 Tage Laufzeit hat und während der Prüfung noch mindestens 30 Tage übrig sind.

Huawei line and blockquote, Alibaba blockquotes: kept as-is.

## Change 9, Vercel and Cloudflare

- before: ## Vercel, Cloudflare und die Edge im Ausland
+ after:  ## Vercel, Cloudflare und die Knoten im Ausland

- before: Ein globales CDN legt Kopien Ihrer Seiten näher heran, nach Hongkong oder Tokio, das hilft.
+ after:  Ein globales CDN bringt Kopien Ihrer Seiten näher an die Besucher, nach Hongkong oder Tokio, und das hilft.

- before: Auch Vercel kommt zur Sprache, weil viele Astro- und Next.js-Websites dort liegen. Die eigene Wissensdatenbank gibt eine klare Antwort.
+ after:  Auch Vercel kommt zur Sprache, weil dort viele Astro- und Next.js-Websites liegen. Vercels eigene Wissensdatenbank antwortet unmissverständlich.

- before: > GreatFire stuft https://vercel.app in 4 seiner letzten 4 aussagekräftigen Tests als auf dem chinesischen Festland blockiert ein, zuletzt am 14. September 2026. Von 157 auf der Domain getesteten URLs gelten 154 als blockiert.
+ after:  > Bei GreatFire gilt https://vercel.app auf dem chinesischen Festland in allen 4 letzten aussagekräftigen Tests als blockiert, zuletzt am 14. September 2026. Von 157 auf der Domain getesteten URLs sind 154 als blockiert erfasst.

- before: Vercels eigene Vorschläge: eine eigene Domain statt .vercel.app, [...] die in China leisten muss, [...] Diese letzte Option bedeutet, [...] bei einem anderen Festland-Anbieter.
+ after:  Vercel selbst empfiehlt eine eigene Domain statt .vercel.app, selbst gehostete Schriften und Analytics und, für eine Website, die in China Leistung bringen muss, eine separate Kopie auf Festland-Infrastruktur mit eigener ICP-Registrierung oder -Lizenz. Diese letzte Option heißt, eine zweite Website zu betreiben, auf einer der drei oben genannten Festland-Clouds oder bei einem anderen Anbieter auf dem Festland.

- before: Standard- und Gratistarif von Cloudflare bedienen Besucher auf dem Festland von Standorten außerhalb des Festlands.
+ after:  Standard- und Gratistarif von Cloudflare bedienen Besucher vom Festland über Standorte im Ausland.
why: "die Edge" is jargon a FAZ editor would cut; "leisten muss" was incomplete German; "Festland" twice in one line.

Vercel and Cloudflare blockquotes and the closing paragraph: kept as-is.

## Change 10A

- before: Die Images auf Knopfdruck laufen auf der Einstiegsserver-Linie der jeweiligen Cloud.
+ after:  Die Knopfdruck-Images laufen auf den Einstiegsservern der jeweiligen Cloud.

## Change 10B

- before: Die Gesellschaft auf dem Festland muss gegründet oder erhalten werden, und Unterlagen vorbereiten und die Prüfung bestehen kostet Arbeitsstunden. Nach dem Start loggt sich [...] um die Website gepatcht und gesichert zu halten.
+ after:  Der eigentliche Aufwand liegt woanders. Die Gesellschaft auf dem Festland muss gegründet oder unterhalten werden; Vorbereitung der Unterlagen und Prüfung kosten Arbeitsstunden. Nach dem Start loggt sich eine namentlich benannte Person Monat für Monat in die Cloud-Konsole ein, um Patches einzuspielen und Sicherungen anzustoßen.

## Change 10C

- before: Ins Gewicht fallen die Gesellschaft und die Registrierungsarbeit und nach dem Start die Person, die sich um den Server kümmert.
+ after:  Der Server ist der kleinste Posten. Ins Gewicht fallen die Gesellschaft, die Registrierungsarbeit und, nach dem Start, die Person, die sich um den Server kümmert.

Step 2 complete.
