---
title: "Eine WordPress-Website nach China migrieren"
subtitle: "Was den Takt einer China-Migration wirklich vorgibt, in welcher Reihenfolge, und warum die Ports geschlossen bleiben, bis die Registrierung steht."
summary: "Die ICP-Registrierung bestimmt den Zeitplan, alles andere wartet dahinter. Ein realistischer Ablauf über vierzehn Wochen, jeder Engpass benannt."
visual: "/images/guides/migrate-wordpress-to-china.webp"
order: 37
published: true
publishedAt: 2026-09-29
updatedAt: 2026-09-29
category: Hosting
author: echo-peng
---

Wer eine WordPress-Website nach China migrieren will, registriert zuerst und zieht danach um. Die ICP-Registrierung (ICP备案) liegt auf dem kritischen Pfad. Solange sie nicht abgeschlossen ist, liefert ein Server in Festlandchina die Website unter Ihrer Domain an niemanden aus: keine Staging-Umgebung auf dem künftigen Produktivhost, keine stille Beta. Alles andere im Projekt arbeitet der Registrierung zu oder wartet auf sie.

Besteht die Festlandgesellschaft bereits, planen wir für eine typische WordPress-Website vierzehn Wochen ein, also für eine Unternehmenswebsite ohne Onlinebezahlung. Drei bis sechs davon entfallen auf die Registrierung. Der Umbau läuft parallel, auf einer Kopie, die überall liegen darf, nur nicht auf dem Zielserver. Die unten zitierten Anbieterregeln haben wir am 24. September 2026 in der Dokumentation von Alibaba Cloud und Tencent Cloud geprüft.

Wer die Registrierung als Nebensache behandelt, merkt den Fehler meist erst in der Woche, für die der Start geplant war. Der neue Server steht bereit, und niemand bekommt die Website zu sehen.

| Arbeitsschritt | Vor Abschluss der Registrierung? | Worauf er wartet |
|---|---|---|
| Festlandgesellschaft | Muss bereits bestehen | Auf nichts. Alles andere wartet auf sie |
| Server in Festlandchina | Ja, und zwingend | Die Registrierung wird auf ihn angemeldet |
| Umbau und Bereinigung der Abhängigkeiten | Ja, abseits des neuen Servers | Das Abhängigkeits-Audit |
| Öffentliches Staging auf dem neuen Server | Nein | Die Registrierung |
| DNS-Umstellung | Nein | Die Registrierung, danach die Tests |
| Registrierung bei der öffentlichen Sicherheit (公安备案) | Nein, sie folgt auf den Start | 30 Tage ab Freischaltung |

## Warum die Registrierung zuerst kommt

Alibaba Cloud und Tencent Cloud halten das schriftlich fest, fast mit denselben Worten.

> Nach den Vorgaben des Ministeriums für Industrie und Informationstechnologie (工信部) muss eine Domain, die auf einen Server in Festlandchina auflöst, die Website-Registrierung abgeschlossen haben, bevor der Zugriff auf die Website freigeschaltet werden kann.
> Quelle: Hilfecenter von Alibaba Cloud (阿里云), zuletzt aktualisiert am 4. September 2026. https://help.aliyun.com/zh/dws/support/how-do-i-troubleshoot-the-failures-to-access-a-website-by-using-its-domain-name

> Eine Domain, die auf Ressourcen von Tencent Cloud in Festlandchina auflöst, muss zuerst die ICP-Registrierung durchlaufen, andernfalls wird sie von der Überwachung nicht registrierter Domains bei Tencent Cloud abgefangen.
> Quelle: Dokumentation von Tencent Cloud (腾讯云), zuletzt aktualisiert am 3. September 2026. https://cloud.tencent.com/document/product/243/19630

In unseren Projekten heißt das konkret: Die Ports 80 und 443, die Standardports für HTTP und HTTPS, bleiben für Ihre Domain gesperrt, vom Tag der Servermiete bis zur Erteilung der ICP-Registriernummer (ICP备案). Der Anbieter setzt das in seinem eigenen Netz durch.

> Die Prüfung durch Alibaba Cloud dauert 1 bis 2 Arbeitstage. Die anschließende Kontrolle durch die Kommunikationsverwaltung der Provinz (省级通信管理局) nimmt in der Regel 1 bis 20 Arbeitstage in Anspruch.
> Quelle: Hilfecenter von Alibaba Cloud (阿里云), Überblick über das ICP-Registrierungsverfahren, zuletzt aktualisiert am 26. August 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview

Auf dem Papier sind das höchstens 22 Arbeitstage. Das Zusammentragen der Unterlagen kostet Zeit, und Anträge kommen zur Korrektur zurück. Realistisch sind drei bis sechs Wochen. [Unser Leitfaden zur ICP-Registrierung für ausländische Unternehmen](/de/ressourcen/china-web-leitfaden/icp-lizenz-auslaendische-unternehmen/) listet die nötigen Dokumente auf. Ein Onlineshop braucht unter Umständen zusätzlich die kommerzielle ICP-Lizenz (ICP许可证), ein eigenes und langsameres Verfahren.

Auch ein CDN im Land führt nicht an der Registrierung vorbei.

> Das Cloudflare China Network setzt einen Enterprise-Tarif voraus sowie „eine gültige ICP-Registrierung oder -Lizenz für jede Apex-Domain, die Sie aufnehmen möchten“.
> Quelle: Entwicklerdokumentation von Cloudflare, zuletzt aktualisiert am 30. April 2026. https://developers.cloudflare.com/china-network/

## Woche null: die Festlandgesellschaft

Die ICP-Registrierung (ICP备案) läuft auf den Namen eines Unternehmens in Festlandchina. Dieses Unternehmen muss also existieren, bevor das Projekt beginnt.

> Wer die ICP-Registrierung beantragt, muss ein in Festlandchina eingetragenes Unternehmen oder eine in Festlandchina ansässige Person sein.
> Quelle: Hilfecenter von Alibaba Cloud (阿里云), ICP-Registrierung für Unternehmen außerhalb Festlandchinas, zuletzt aktualisiert am 20. August 2026. https://help.aliyun.com/en/icp-filing/basic-icp-service/product-overview/icp-filing-application-for-enterprises-outside-the-chinese-mainland

Haben Sie eine Tochtergesellschaft auf dem Festland, stellt sie den Antrag. Haben Sie keine, klären Sie diese Frage, bevor irgendjemand einen Designer beauftragt. Die Gründung einer Gesellschaft in China ist ein juristisches Vorhaben mit eigenem Zeitplan, und es muss vor allem anderen abgeschlossen sein.

Zur Woche null gehört außerdem die registrierte und per Klarnamenprüfung verifizierte Domain; die Gewerbelizenz der Gesellschaft sollte griffbereit liegen. Hinzu kommt eine Person in China, die für das Unternehmen zeichnen darf und die Rückfragen des Anbieters beantwortet, solange der Antrag geprüft wird.

Einem Unternehmen ohne Festlandgesellschaft bleiben zwei Wege: ein Server in Hongkong oder eine Auslieferungsschicht vor dem bisherigen Hosting. [Unser Leitfaden, warum WordPress in China langsam ist](/de/ressourcen/china-web-leitfaden/wordpress-geschwindigkeit-china/), wägt beide gegeneinander ab.

## Die Zwei-Plattformen-Falle bei Alibaba

Alibaba Cloud (阿里云) hat zwei Eingangstüren. alibabacloud.com ist die internationale Plattform, auf Englisch. Die chinesische Plattform liegt unter aliyun.com. Beide teilen sich das Logo und die meisten Produktnamen.

> Konten der internationalen Website von Alibaba Cloud (alibabacloud.com) unterstützen keine Anträge auf ICP-Registrierung, weder für Websites noch für Apps. Für eine Registrierung ist ein Konto der chinesischen Website (aliyun.com) nötig.
> Quelle: Hilfecenter von Alibaba Cloud (阿里云), zuletzt aktualisiert am 20. August 2026. https://help.aliyun.com/en/icp-filing/basic-icp-service/product-overview/icp-filing-application-for-enterprises-outside-the-chinese-mainland

Die IT in der Zentrale eröffnet ein Konto auf alibabacloud.com, weil die Seite englischsprachig ist und die Firmenkreditkarte akzeptiert. Sie kauft einen Server und legt los.

Dann steht die Registrierung an, und es zeigt sich: Über dieses Konto lässt sich kein Antrag stellen. Auch der Server selbst muss Bedingungen erfüllen.

> Eine ICP-Registrierung bei Alibaba Cloud muss auf einen Alibaba-Cloud-Server in Festlandchina angemeldet werden, und eine ECS-Instanz kommt nur mit einem Abonnement von mehr als 3 Monaten infrage.
> Quelle: Hilfecenter von Alibaba Cloud, Prüfung der Server- und Zugangsdaten, zuletzt aktualisiert am 2. September 2026. https://help.aliyun.com/en/icp-filing/basic-icp-service/user-guide/icp-filing-server-access-information-check

Der Server kommt also zuerst, auf dem chinesischen Konto, für mindestens ein Quartal bezahlt, und er liefert nichts öffentlich aus, bis die Registrierung durch ist. Dieses Leerlaufquartal gehört ins Budget. Alibaba Cloud, Tencent Cloud (腾讯云) und Huawei Cloud (华为云) im Vergleich finden Sie in [unserem Leitfaden zu WordPress-Hosting in China](/de/ressourcen/china-web-leitfaden/wordpress-hosting-china/).

## Was neu gebaut und was kopiert wird

Die Inhalte sind der einfache Teil. Beiträge, Seiten, benutzerdefinierte Felder, Benutzer, Menüs und die Mediathek reisen in einem Datenbank-Dump und einer Kopie des Upload-Ordners mit.

Alles, was beim Laden einer Seite einen Host außerhalb Chinas aufruft, wird neu gebaut: Schriften, Skripte, Karten, Videos, Captchas, Webanalyse und Social Login. Prüfen Sie auch den ausgehenden Mailversand. Sitzt der Dienst, der Ihre Formularbenachrichtigungen verschickt, im Ausland, braucht er dieselbe Behandlung.

Mit dem Umzug ändert sich auch das Hosting-Modell. Alibabas Anleitung zu seinem Simple Application Server (轻量应用服务器), aktualisiert am 19. August 2026, baut eine Website aus einem vorkonfigurierten WordPress-Anwendungsimage auf, also einem Betriebssystem mit bereits installiertem WordPress. Ein verwaltetes WordPress-Produkt haben wir bei keiner Festland-Cloud gefunden. Updates, Backups und der Patch-Stand liegen bei Ihnen oder beim Betreiber der Website.

Updates brauchen einen eigenen Plan.

> Ein chinesischer WordPress-Nutzer meldete 429-Fehler auf allen Subdomains von WordPress.org. WordPress.org antwortete noch am selben Tag, „mehrere chinesische Netzquellen“ würden „wegen eines hohen Missbrauchsaufkommens bei bestimmten Diensten gedrosselt“, und lehnte eine Freischaltung per Whitelist ab.
> Quelle: WordPress.org Meta Trac, Ticket Nr. 5106, 21. März 2020, gelesen in der Kopie des Internet Archive vom 16. Januar 2026. https://web.archive.org/web/20260116133057/https://meta.trac.wordpress.org/ticket/5106

Das Dashboard schweigt dazu. Die Update-Prüfungen schlagen fehl, und die Website bietet stillschweigend keine Updates mehr an. Legen Sie vor der Umstellung fest, ob Patches von einem inländischen Mirror kommen oder von einer benannten Person, die sie außerhalb Chinas vorbereitet.

## Abhängigkeiten bereinigen, während die Registrierung läuft

In diese Arbeit fließt der größte Teil der vierzehn Wochen. Laden Sie die aktuelle Website über einen Anschluss in Festlandchina (ein Kollege in Shanghai mit Laptop genügt) und notieren Sie jeden Host im Netzwerk-Tab. Für jeden fällt eine Entscheidung: behalten, selbst hosten, ersetzen oder löschen. [Unser Leitfaden zu WordPress-Plugins, die in China versagen](/de/ressourcen/china-web-leitfaden/wordpress-plugins-china/), geht die üblichen Verdächtigen Host für Host durch, mit datierten Befunden.

> Die mediane Ladezeit sank von 23,4 Sekunden mit einem Origin in Europa auf 1,2 Sekunden mit einem Origin in Festlandchina, und etwa die Hälfte der Verbesserung ging auf gestrichene externe Aufrufe zurück, nicht auf den Serverumzug.
> Quelle: ChinaWebFoundry, veröffentlicht am 29. August 2026. https://www.chinawebfoundry.com/resources/china-web-guide/is-wordpress-blocked-in-china/

Die Zahlen stammen aus einer unserer Migrationen. Netzbetreiber und Testdatum sind noch nicht veröffentlicht; sie folgen in einer Fallstudie in diesem Herbst.

Deshalb gehört die Bereinigung in die Wochen, in denen die Registrierung läuft, und zwar auf einer Kopie der Website: einer lokalen Installation oder einem Server in Hongkong mit denselben PHP- und Datenbankversionen wie auf dem Festland.

## Umstellung, DNS und der Tag, an dem die Ports aufgehen

Die ICP-Registriernummer (ICP备案) ist da. Spielen Sie die umgebaute Website auf den Festlandserver und setzen Sie die Nummer in den Footer.

> Nach erfolgreicher Registrierung muss die Website am Seitenende die vom Ministerium erteilte ICP-Nummer anzeigen, verlinkt auf beian.miit.gov.cn. Fehlt sie, drohen eine Anordnung zur Nachbesserung und ein Bußgeld von 5.000 bis 10.000 Yuan durch die Kommunikationsverwaltung der Provinz.
> Quelle: Hilfecenter von Alibaba Cloud (阿里云), zuletzt aktualisiert am 12. August 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/the-icp-record-post-processing-1

Testen Sie den neuen Server vor der Umstellung aus dem Land heraus, indem Sie die hosts-Datei eines Rechners auf dem Festland auf ihn zeigen lassen (eine lokale Umleitung, die das DNS umgeht). Tun Sie das aus einer Cloud-Region und über einen privaten Breitbandanschluss. Die Ergebnisse können auseinandergehen, und Ihre Besucher sitzen am privaten Anschluss.

Senken Sie die Time to Live (TTL) im DNS ein paar Tage vor der Umstellung, damit sich die Änderung schnell verbreitet und Sie notfalls rasch zurückschalten können. Wählen Sie einen Werktagmorgen, Pekinger Zeit, mit Abstand zu chinesischen Feiertagen. Stellen Sie den Eintrag um und wiederholen Sie dieselben Tests. Lassen Sie den alten Origin laufen, bis der neue eine Woche lang gehalten hat; Ihre bisherige Website läuft bis zur Umstellung ganz normal weiter.

Mit dem Tag der Freischaltung beginnt eine weitere Frist: die Registrierung bei der öffentlichen Sicherheit, ein gesondertes Verfahren bei den Polizeibehörden.

> Eine Website muss ihre Registrierung bei der öffentlichen Sicherheit (公安备案) innerhalb von 30 Tagen nach der Freischaltung abschließen.
> Quelle: Hilfecenter von Alibaba Cloud (阿里云), Überblick über das ICP-Registrierungsverfahren, zuletzt aktualisiert am 26. August 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview

## Wie lange es dauert, WordPress nach China zu migrieren

Die Registrierung allein dauert drei bis sechs Wochen. Warum also vierzehn? Weil der Server erst gekauft werden kann, wenn das chinesische Konto besteht, und nichts ausgerollt wird, bevor die Registrierung durch ist. Die Registrierung bei der öffentlichen Sicherheit und Baidu warten auf den Start. Nach dieser Tabelle plant das Team in Shanghai, für eine typische WordPress-Website mit bestehender Festlandgesellschaft.

| Phase | Wochen | Blockierende Abhängigkeit | Verantwortlich |
|---|---|---|---|
| Abhängigkeits-Audit | 1 bis 2 | Zugang zur aktuellen Website | Webteam |
| Chinesisches Konto, Server, Domain-Prüfungen | 1 bis 2 | Festlandgesellschaft und Gewerbelizenz | Ihre Gesellschaft in China |
| ICP-Registrierung (ICP备案), Antrag und Prüfung | 2 bis 7 | Festlandserver mit Abonnement über 3 Monate | Gesellschaft, Anbieter, Provinzbehörde |
| Umbau und Bereinigung, abseits des neuen Servers | 2 bis 9 | Das Abhängigkeits-Audit | Webteam |
| Chinesische Inhalte und Lokalisierung | 3 bis 10 | Freigegebene Ausgangstexte | Marketing |
| Deployment auf den Festlandserver, ICP-Nummer im Footer | 8 bis 10 | Registriernummer erteilt | Webteam |
| Tests von Messpunkten in Festlandchina | 10 bis 12 | Website ausgerollt | Webteam |
| DNS-Umstellung | 12 | Freigabe der Tests | Webteam und DNS-Verantwortliche |
| Registrierung bei der öffentlichen Sicherheit (公安备案) | 12 bis 14 | Website live, Frist von 30 Tagen | Ihre Gesellschaft in China |
| Baidu-Verifizierung (百度) und erste Einreichungen | 12 bis 14 | Website live | Marketing |

Verschieben kann sich vor allem die Zeile der Registrierung. Manche Provinzen genehmigen binnen Tagen. Ein einziger Antrag, der zur Korrektur zurückkommt, kann den gesamten Puffer aufzehren. Zwei Posten sprengen gern das Budget: der Server, den Sie durch die stillen Wochen bezahlen, und eine Woche oder mehr doppelte Hosting-Rechnung, solange der alte Origin weiterläuft. [Unsere Leistung China-Migration](/de/leistungen/china-migration/) wird nach genau dieser Tabelle kalkuliert, und [unsere Seite zu WordPress in China](/de/wordpress-in-china/) erklärt, wann sich ein Umzug aufs Festland überhaupt lohnt.

## Häufige Fragen

### Können wir auf dem Festlandserver testen, bevor die Registrierung durch ist?

Installieren und konfigurieren können Sie per SSH, doch unter Ihrer Domain lädt die Website erst, wenn die ICP-Registriernummer (ICP备案) erteilt ist. Der Anbieter fängt sie ab. Bauen und prüfen Sie die Website auf einer Kopie an anderer Stelle und ziehen Sie die fertige Fassung um, sobald die Nummer da ist.

### Brauchen wir ein chinesisches Unternehmen, um WordPress in China zu hosten?

Für einen Server auf dem Festland, ja. Antragsteller muss ein in Festlandchina eingetragenes Unternehmen oder eine dort ansässige Person sein, und eine nicht registrierte Domain wird von einem Festlandserver nicht ausgeliefert. Ein Unternehmen ohne eigene Gesellschaft kann auf einen Server in Hongkong oder eine Auslieferungsschicht ausweichen.

### Unsere Domain hat schon eine ICP-Nummer bei einem anderen Anbieter. Fangen wir von vorn an?

Sie übertragen sie. Das Hilfecenter von Alibaba Cloud, aktualisiert am 4. September 2026, nennt eine bei einem anderen Anbieter bestehende Registrierung als einen Grund, warum eine Website unerreichbar bleibt, und als Abhilfe die Übertragung der Registrierung (接入备案) zum neuen Anbieter. Solange diese nicht durch ist, liefert der neue Server die Website nicht aus, also liegt auch die Übertragung auf dem kritischen Pfad.

### Können wir unser bisheriges Theme behalten?

Oft ja. Ein Theme kann unverändert umziehen, wenn nichts darin beim Laden der Seite einen Host außerhalb Chinas aufruft. Das Audit zeigt es. Bei Themes, die Schriften oder Skripte bei Google abrufen oder Videos aus dem Ausland einbetten, müssen diese Aufrufe vor der Umstellung durch selbst gehostete Dateien oder inländische Dienste ersetzt werden.
