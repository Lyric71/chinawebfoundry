---
title: "Cloudflare in China: ICP und Netzvoraussetzungen"
subtitle: "Welche Verträge und ICP-Nachweise Cloudflares chinesisches Netz verlangt und was Sie vor der Umstellung Ihrer Website prüfen sollten."
summary: "China Network verlangt Enterprise, eine ICP-Registrierung oder Lizenz je Hauptdomain und die Prüfung durch JD Cloud. So bereiten Sie die Umstellung vor."
visual: "/images/guides/cloudflare-china.webp"
order: 48
published: true
publishedAt: 2026-10-20
updatedAt: 2026-10-20
reviewBy: 2026-11-26
category: Hosting
author: cyril-drouin
---

Für die Auslieferung vom chinesischen Festland aus braucht Cloudflare
einen Enterprise-Vertrag und ein gesondertes China-Network-Abonnement,
eine ICP-Registrierung (ICP备案) oder ICP-Lizenz (ICP许可证) je Hauptdomain
sowie die Prüfung durch JD Cloud. Bei Cloudflares eigener Website schloss
21YunBox am 28. August 2026 von Alibaba Cloud (阿里云), Region
cn-zhangjiakou, 3 von 6 Ladeversuchen ab. CDN-Konfigurationen von Kunden
bleiben hier ungetestet.

| Ausgangslage | Erforderlicher Schritt |
|---|---|
| Cloudflare ohne China Network | China Network gesondert zum Enterprise-Vertrag buchen |
| Enterprise-Konto ohne ICP-Registrierung | Erforderliche Registrierung oder Lizenz für jede Hauptdomain einholen |
| Gültige Registrierung vorhanden | Domain und Inhalte bei JD Cloud zur Prüfung einreichen |
| Domain genehmigt | Inbetriebnahme abschließen und die genutzten Funktionen prüfen |

> Cloudflare bietet das China Network als gesondertes Abonnement für
> Enterprise-Kunden an. JD Cloud betreibt die Rechenzentren auf dem
> chinesischen Festland. Jede Hauptdomain benötigt eine gültige
> ICP-Registrierung oder ICP-Lizenz.
> Quelle: Cloudflare, Übersicht zum China Network, 30. April 2026.
> https://developers.cloudflare.com/china-network/

Dokumentation geprüft am 20. Oktober 2026.

Prüfen Sie im Konto den China-Network-Status der betreffenden Domain.
Lassen Sie sich vom Kontoverantwortlichen das Abonnement und die
genehmigten Domains bestätigen. Die noch ausstehenden Genehmigungen
bestimmen anschließend den Zeitplan für die Umstellung.

## Cloudflare in China beginnt mit den Domainunterlagen

Beginnen Sie mit der Hauptdomain: `example.com` ist eine Hauptdomain,
`www.example.com` eine Subdomain. Erfassen Sie sämtliche Domains für den
Start, auch gesonderte Markenadressen. Prüfen Sie die ICP-Registrierung
für jede Hauptdomain.

Cloudflare verlangt dafür jeweils eine gültige ICP-Registrierung
(ICP备案) oder ICP-Lizenz (ICP许可证). Klären Sie vor der Antragstellung,
welche Genehmigung die Tätigkeit der Website erfordert. Unser
[ICP-Leitfaden für ausländische Unternehmen](/de/ressourcen/china-web-leitfaden/icp-lizenz-auslaendische-unternehmen/)
erläutert den Unterschied und die Anforderungen an den Antragsteller.

Geben Sie diese Liste an die für den Antrag zuständige Person weiter,
bevor Sie den Starttermin festlegen. Ein regionales Team könnte eine
eigene Markenadresse registriert haben. Vergewissern Sie sich, dass die
ICP-Registrierung die Domain abdeckt, die Sie ins Netz aufnehmen möchten.

Bereiten Sie zugleich die Unterlagen für JD Cloud vor: Kunden- und
Firmenname, Domainname, ICP-Nummer, Inhaltsbeschreibung und die
unterschriebene Selbsterklärung, die das Vertriebsteam bereitstellt.
Die ICP-Nummer muss außerdem in der Fußzeile der Website stehen.

> JD Cloud prüft die Domaininhalte vor der Freischaltung des China Network.
> Nach dieser Prüfung veranschlagt Cloudflare für die erstmalige
> Inbetriebnahme einer Zone etwa 24 bis 48 Stunden.
> Quelle: Cloudflare, Inbetriebnahme, 17. April 2026.
> https://developers.cloudflare.com/china-network/get-started/

Die genannte Frist beginnt erst nach der Inhaltsfreigabe. ICP-Genehmigung
und Inhaltsprüfung brauchen eigene Termine im Projektplan. Das gilt
besonders dann, wenn der Registrierungsantrag noch nicht gestellt wurde.

## Was der Test von Cloudflares Website aussagt

21YunBox testete am 28. August 2026 Cloudflares eigene Website aus einer
Cloud-Region auf dem chinesischen Festland. Zu dieser Fremdmessung liegt
kein entsprechendes Ergebnis eines Privatanschlusses vor. Sie vergleicht
auch keine Kundendomain mit und ohne China Network.

| Testziel | Ergebnis aus dem Rechenzentrum | Ergebnis am Privatanschluss | Bewertung | Testdatum |
|---|---|---|---|---|
| Cloudflares eigene Website | Alibaba Cloud (阿里云), cn-zhangjiakou: 3 von 6 Ladevorgängen abgeschlossen | Für diesen Test nicht angegeben | Zeitweise erreichbar (21YunBox), nur die Anbieterwebsite | 28. August 2026 |

> 21YunBox meldet für Cloudflares eigene Website 3 abgeschlossene
> Ladeversuche von 6, gemessen am 28. August 2026 von Alibaba Cloud
> (阿里云) in der Region cn-zhangjiakou.
> Quelle: 21YunBox, Cloudflare in China: China Network und ICP-Voraussetzungen,
> überprüft am 7. Oktober 2026.
> https://www.21cloudbox.com/support/cloudflare-china.html

Ein Kundenhostname bleibt hier ungetestet, solange kein datierter Test
eines Dritten genau diesen Hostnamen erfasst. Bei einem Kontaktformular
müssen Sie gesondert prüfen, ob sich die Nachricht absenden lässt und
beim Empfänger ankommt.

Cloudflares Routing-Dokumentation weist darauf hin, dass Anycast eine
Anfrage an ein geografisch weiter entferntes Rechenzentrum leiten kann.
Das Routing und die Peering-Vereinbarungen des Internetanbieters
beeinflussen den Weg. Versprechen Sie deshalb keinen bestimmten
Auslieferungsort allein aufgrund des Besucherstandorts.

> Laut Cloudflare können Anfragen ein anderes als das geografisch
> nächstgelegene Rechenzentrum erreichen. Kunden können die Auswahl
> nicht über die Zoneneinstellungen festlegen.
> Quelle: Cloudflare, geografisches Routing, 14. Oktober 2026.
> https://developers.cloudflare.com/support/troubleshooting/general-troubleshooting/geographic-traffic-routing/

## Funktionen vor der Umstellung prüfen

Gleichen Sie die Funktionen Ihrer Website mit Cloudflares
Verfügbarkeitsliste für das China Network ab. Prüfen Sie die
Cache-Optionen und gegebenenfalls den Dienst, mit dem Ihr Kontaktformular
Besucher überprüft. Legen Sie vor der Umstellung einen Ersatz für nicht
unterstützte Funktionen fest. Regionale Produktunterstützung und
gemessene Erreichbarkeit sind getrennt zu prüfen.

> Die Funktionsliste des China Network nennt statisches Caching und
> schließt Tiered Cache und Cache Reserve aus. Turnstile ist demnach
> ebenfalls nicht auf dem chinesischen Festland verfügbar.
> Quelle: Cloudflare, verfügbare Produkte und Funktionen, 10. Juni 2026.
> https://developers.cloudflare.com/china-network/reference/available-products/

Erfassen Sie für jedes Kontaktformular den Endpunkt, der die Daten
entgegennimmt, sowie die zuvor benötigten Skripte. Auch die Bildserver
gehören in die Bestandsaufnahme. Unser
[Leitfaden zu reCAPTCHA-Ausfällen in China](/de/ressourcen/china-web-leitfaden/recaptcha-china/)
behandelt diese konkrete Abhängigkeit. Ein CDN-Wechsel für die Seite
belegt nicht, dass ein gesonderter Formulardienst nutzbar ist.

Mit bestehendem Enterprise-Vertrag und gültiger ICP-Registrierung sollten
Sie die Domainfreigabe und die erforderlichen Funktionen mit Ihrem
Ansprechpartner bestätigen. Wurde der ICP-Antrag noch nicht begonnen,
benennen Sie vor der Umstellungsplanung einen Verantwortlichen. Unser
[Hosting-Service für China](/de/leistungen/china-hosting/) übernimmt
Hosting und die damit verbundenen ICP-Verfahren.

## Vor der Terminvereinbarung

**Können wir das China Network vor der ICP-Registrierung testen?**

Cloudflares veröffentlichte Voraussetzungen für einen Machbarkeitstest
umfassen eine gültige ICP-Nummer und die Inhaltsfreigabe durch JD Cloud.
Bereiten Sie beides vor, bevor Sie den Test anfragen. Klären Sie mit dem
Vertrieb dessen Umfang und die Unterlagen, die für einen Versuch unter
realen Bedingungen im China Network erforderlich sind.

**Übernimmt Cloudflare die ICP-Registrierung für uns?**

Laut Cloudflare sind weder das Unternehmen noch JD Cloud für ICP-Anträge
zuständig. Cloudflare kann jedoch spezialisierte Partner vermitteln.
Bestimmen Sie, wer Ihren Antrag einreicht und die Registrierung pflegt.
Bewahren Sie eine Kopie bei der Domainliste auf, damit auch bei einem
Agenturwechsel klar bleibt, wer dieses Verfahren betreut.

**Was geschieht, wenn die ICP-Registrierung widerrufen wird?**

JD Cloud kann den Zugang zum chinesischen Dienst sperren oder beenden.
Cloudflare erklärt, die betroffenen Domains dann an Rechenzentren
außerhalb des chinesischen Festlands weiterzuleiten. Halten Sie den
ICP-Ansprechpartner aktuell und besprechen Sie Änderungen an der Domain
oder der Tätigkeit der Website mit dem für die Registrierung zuständigen
Team.

> Cloudflares FAQ verlangt für einen Machbarkeitstest die ICP-Registrierung
> und Inhaltsfreigabe, weist die Antragstellung dem Kunden oder seinem
> Partner zu und beschreibt die Weiterleitung ins Ausland nach einem Widerruf.
> Quelle: Cloudflare, China-Network-FAQ, 16. April 2026.
> https://developers.cloudflare.com/china-network/faq/

Bringen Sie Ihre Domainliste und den Stand der ICP-Registrierung zum Gespräch mit.
