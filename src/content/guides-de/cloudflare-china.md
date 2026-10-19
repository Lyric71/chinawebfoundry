---
title: "Cloudflare in China: Anforderungen an Netz und ICP"
subtitle: "Welche Abonnements und ICP-Unterlagen Sie für die Auslieferung vom chinesischen Festland benötigen und was vor der Umstellung zu prüfen ist."
summary: "China Network erfordert Enterprise, eine ICP-Registrierung oder Lizenz je Hauptdomain und die Inhaltsfreigabe von JD Cloud. Das müssen Sie vorbereiten."
visual: "/images/guides/cloudflare-china.webp"
order: 48
published: true
publishedAt: 2026-10-20
updatedAt: 2026-10-20
reviewBy: 2026-11-26
category: Hosting
author: cyril-drouin
---

Die Auslieferung über Cloudflare vom chinesischen Festland aus setzt
einen Enterprise-Vertrag, ein gesondertes China-Network-Abonnement und
eine ICP-Registrierung (ICP备案) oder ICP-Lizenz (ICP许可证) je Hauptdomain
voraus. JD Cloud muss die Inhalte prüfen. Bei Cloudflares eigener Website schloss
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

Prüfen Sie im Konto, ob die betreffende Domain für das China Network
freigeschaltet ist. Der Kontoverantwortliche sollte das Abonnement und
die genehmigten Domains bestätigen. Planen Sie die Umstellung danach,
welche Genehmigungen noch fehlen.

## Cloudflare in China: zuerst die Domainunterlagen

Beginnen Sie mit der Hauptdomain: `example.com` ist eine Hauptdomain,
`www.example.com` eine Subdomain. Erfassen Sie sämtliche Domains für den
Start, auch gesonderte Markenadressen. Prüfen Sie die ICP-Registrierung
für jede Hauptdomain.

Cloudflare verlangt dafür jeweils eine gültige ICP-Registrierung
(ICP备案) oder ICP-Lizenz (ICP许可证). Klären Sie vor der Antragstellung,
welche Genehmigung die Tätigkeit der Website erfordert. Unser
[ICP-Leitfaden für ausländische Unternehmen](/de/ressourcen/china-web-leitfaden/icp-lizenz-auslaendische-unternehmen/)
erläutert den Unterschied und die Anforderungen an den Antragsteller.

Leiten Sie die Liste an den Antragsverantwortlichen weiter, bevor der
Starttermin feststeht. Achten Sie auch auf Markenadressen, die ein
regionales Team gesondert registriert hat. Die ICP-Registrierung muss
genau die Domain abdecken, die ins Netz aufgenommen werden soll.

Bereiten Sie zugleich die Unterlagen für JD Cloud vor: Kunden- und
Firmenname, Domainname, ICP-Nummer, Inhaltsbeschreibung und die
unterschriebene Selbsterklärung, die das Vertriebsteam bereitstellt.
Die ICP-Nummer muss außerdem in der Fußzeile der Website stehen.

> JD Cloud prüft die Domaininhalte vor der Freischaltung des China Network.
> Nach dieser Prüfung veranschlagt Cloudflare für die erstmalige
> Inbetriebnahme einer Zone etwa 24 bis 48 Stunden.
> Quelle: Cloudflare, Inbetriebnahme, 17. April 2026.
> https://developers.cloudflare.com/china-network/get-started/

Die Frist läuft ab der Inhaltsfreigabe. Planen Sie die ICP-Genehmigung
und die Inhaltsprüfung deshalb gesondert ein, besonders wenn der
Registrierungsantrag noch nicht gestellt wurde.

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

Ohne datierten Fremdtest für den genauen Hostnamen bleibt die Kundendomain
hier ungetestet. Prüfen Sie bei einem Kontaktformular
gesondert, ob die Nachricht abgesendet werden kann und den Empfänger
erreicht.

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

## Bevor Sie den Umstellungstermin festlegen

**Können wir das China Network vor der ICP-Registrierung testen?**

Cloudflares veröffentlichte Voraussetzungen für einen Machbarkeitstest
umfassen eine gültige ICP-Nummer und die Inhaltsfreigabe durch JD Cloud.
Bereiten Sie beides vor, bevor Sie den Test anfragen. Klären Sie mit dem
Vertrieb dessen Umfang und die Unterlagen, die für einen Versuch unter
realen Bedingungen im China Network erforderlich sind.

**Übernimmt Cloudflare die ICP-Registrierung für uns?**

ICP-Anträge liegen laut Cloudflare weder in der Verantwortung des
Unternehmens noch in der von JD Cloud. Cloudflare kann spezialisierte
Partner empfehlen. Legen Sie fest, wer den Antrag stellt und die
Registrierung betreut. Eine Kopie bei der Domainliste hält diese
Zuständigkeit auch für einen späteren Agenturwechsel fest.

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

Halten Sie für das Gespräch Ihre Domainliste und den Stand des ICP-Verfahrens bereit.
