---
title: "Hosting in China: der Serverstandort entscheidet"
subtitle: "Für chinesische Nutzer liegt zwischen einem Server in Shanghai und einem in Frankfurt nicht eine Frage von Millisekunden, sondern die Frage, ob die Seite überhaupt erscheint."
summary: "Der Serverstandort entscheidet, wie eine Website in China lädt und ob sie eine ICP-Registrierung braucht. Festland, Hongkong und Ausland im Vergleich."
visual: "/images/guides/china-website-hosting-guide.webp"
order: 6
published: true
publishedAt: 2026-04-01
updatedAt: 2026-10-13
category: Hosting
---

In jeder China-Strategie für das Web ist das Hosting die am stärksten unterschätzte Entscheidung, und es wiegt für die Ladezeit schwerer als [alles, was Sie an einer WordPress-Installation drehen](/de/wordpress-in-china/). Steht der Server am falschen Ort, quält sich die Seite, wenn sie denn überhaupt lädt. Wählen Sie den falschen Anbieter, entgehen Ihnen Integrationen ins lokale Ökosystem, die Ihre Wettbewerber längst nutzen. Der chinesische Cloud-Markt wird von einheimischen Akteuren beherrscht, von denen jeder an einen anderen Teil des chinesischen Internets angeschlossen ist. Beim Serverstandort selbst geht es um drei Stufen mit sehr unterschiedlichen Abwägungen. Und das CDN wiegt hier schwerer als irgendwo sonst auf der Welt.

## Chinas Cloud-Anbieter

| Anbieter | Marktanteil | Stärke |
|---|---|---|
| Alibaba Cloud | 36 bis 39 % | Größter Anbieter Chinas, Anbindung an den E-Commerce |
| Huawei Cloud | 12 bis 19 % | Großunternehmen und Behörden |
| Tencent Cloud | 11 bis 16 % | WeChat-Integration |
| Baidu Cloud | rund 5 % | KI und maschinelles Lernen |
| AWS China | rund 7 % | Vertrautheit weltweit (über Sinnet/NWCD) |

Der chinesische Cloud-Markt sieht anders aus, als Sie es gewohnt sind. AWS und Azure sind hier zwar vertreten, doch sie geben nicht den Ton an. Das tun die einheimischen Anbieter, und jeder von ihnen hängt an einem größeren Ökosystem, das seine jeweiligen Stärken prägt.

Alibaba Cloud ist der dominierende Akteur, mit 36 bis 39 % Marktanteil. Berührt Ihr Geschäft ohnehin schon Alibabas E-Commerce- oder Zahlungsinfrastruktur, ist das die naheliegende Wahl. Für Unternehmen, die ohne ausgeprägte Vorliebe für ein bestimmtes Ökosystem nach China kommen, ist Alibaba zugleich die sichere Standardlösung: die umfassendste Dokumentation, das größte Partnernetz, insgesamt die ausgereifteste Plattform.

Huawei Cloud und Tencent Cloud teilen sich die nächste Ebene. Huawei liegt zwischen 12 und 19 % und ist die erste Adresse für Großunternehmen und Behörden. Wer mit chinesischen Staatsbetrieben oder anderen behördennahen Stellen zu tun hat, greift häufig wie selbstverständlich zu Huawei. Tencent hält 11 bis 16 % und ist die klare Wahl, wenn Ihre Strategie WeChat-Mini-Programme oder QQ-Dienste einbezieht. Allein die WeChat-Integration macht den Anbieter zum Standard für Unternehmen, die rund um diese Plattform bauen.

Baidu Cloud bedient eine Nische. Mit etwa 5 % Marktanteil ist der Anbieter auf KI und maschinelles Lernen ausgerichtet und vor allem dann relevant, wenn Ihr Stack stark KI-lastig ist. Für allgemeines Hosting fangen die wenigsten Unternehmen dort an.

Bleibt noch AWS China. Ausländische Unternehmen fühlen sich davon angezogen, weil ihnen der Name vertraut ist. Der Anbieter hält rund 7 % Marktanteil und wird über die lokalen Partner Sinnet und NWCD betrieben. Wichtig zu verstehen ist: AWS China ist eine vollständig eigenständige Einheit, mit eigenen Konten, eigener Abrechnung und eigenem Compliance-Verfahren. Das globale AWS-Konto, das Sie bereits besitzen, bringt Ihnen hier nichts.

> AWS China ist eine vollständig eigenständige Einheit, getrennt vom globalen AWS. Andere Konten, andere Abrechnung, andere Compliance. Gehen Sie nicht davon aus, dass es dasselbe Produkt ist.

Unternehmen, die etwas anderes annehmen, erleben bei der Einrichtung eine Überraschung.

## Festland, Hongkong oder Ausland

| | Festlandchina | Hongkong | Ausland (USA/EU) |
|---|---|---|---|
| **Anfragen gehen über die Grenze** | Nein | Ja | Ja |
| **ICP erforderlich** | Ja | Nein | Nein |
| **PIPL-Konformität** | Ja | Nein | Nein |
| **Risiko durch die Große Firewall** | Keines | Gering | Hoch (Paketverluste plus Sperren) |

Wo Ihre Server physisch stehen, bestimmt alles Weitere: die Wahl des Anbieters, die Einrichtung des CDN, die Baidu-Strategie. Ist diese eine Entscheidung falsch, lässt sich danach nichts mehr ausbügeln.

**Festlandchina** ist die richtige Wahl, wenn Sie chinesische Nutzer ernsthaft erreichen wollen. Die Anfragen verlassen das Land nicht, und die PIPL verlangt ohnehin ein solches Hosting. Zuvor ist allerdings die ICP-Registrierung (ICP备案) fällig, und zwar auf den Namen eines auf dem Festland eingetragenen Unternehmens. Sitzt Ihr Publikum in China, gehören auch Ihre Server dorthin.

> Chinafy hat 614 internationale Websites von Peking, Virginia und London aus getestet: Zwei von drei luden in China nicht, und die Zeit bis zum ersten Byte war in Peking 4- bis 4,5-mal so lang wie in den USA oder Großbritannien.
> Quelle: Chinafy, China Website Performance Benchmarks 2026, 14. April 2026 (Benchmark eines Anbieters).

**Hongkong** taugt als Zwischenschritt. Eine ICP-Registrierung ist dort nicht nötig, das Festland liegt gleich nebenan, und für Unternehmen, die den Markt vor dem vollständigen ICP-Verfahren erst testen wollen, ist das eine vertretbare Option. Auch wer ein chinesisches und ein internationales Publikum von einem einzigen Standort aus bedienen will, ist hier nicht schlecht aufgehoben. Ein Kompromiss bleibt es trotzdem: Für eine Website, deren Publikum überwiegend auf dem Festland sitzt, ist Hongkong eine Notlösung.

Schließlich gibt es **das Hosting im Ausland, aus den USA oder Europa.** Dafür entscheiden sich Unternehmen, die das ICP-Verfahren ganz umgehen wollen. Der Preis dafür ist happig. Jede Anfrage muss über die Grenze, die Große Firewall sorgt zusätzlich für Paketverluste, und das Risiko einer vollständigen Sperre ist durchaus real. Die PIPL lässt sich so nicht einhalten, und die Ladezeiten sind so lang, dass viele Besucher den Tab schließen, bevor Ihre Seite steht. Wer in Frankfurt hostet, um Nutzer in Shenzhen zu bedienen, verliert sie schon, bevor sie die Startseite sehen.

## CDN-Anbieter, die in China tatsächlich funktionieren

| Anbieter | Entscheidender Vorteil |
|---|---|
| Alibaba Cloud CDN | Größtes PoP-Netz in China, Anbindung ans Alibaba-Ökosystem |
| Tencent Cloud CDN | Beste Wahl für an WeChat/QQ angebundene Dienste |
| ChinaCache | Pionier der China-CDN, weitreichendes Inlandsnetz |
| Cloudflare China | Über die Partnerschaft mit JD Cloud, Enterprise-Tarif erforderlich |

Ein CDN repariert keine schlechte Hosting-Entscheidung, doch innerhalb Chinas kann es den Unterschied ausmachen zwischen einer Seite, die lädt, und einer, die wegläuft. Was zählt, ist eine konkrete Anforderung: Points of Presence, die physisch in Festlandchina stehen. Ein globales CDN ohne PoPs in China hilft Ihnen hier nicht weiter.

> Was beim CDN zählt, ist eine konkrete Anforderung: Points of Presence physisch in Festlandchina. Alles andere ist nettes Beiwerk.

**Alibaba Cloud CDN** verfügt über das größte PoP-Netz innerhalb Chinas und ist direkt ans Alibaba-Ökosystem angeschlossen. Wer ohnehin auf Alibaba Cloud sitzt, nimmt das als Standard. Es gibt keinen Grund, woanders zu suchen.

**Tencent Cloud CDN** ist die Adresse, wenn Ihre Dienste an WeChat oder QQ andocken. Die Integration mit Tencents Messaging-Plattformen wickelt diesen Verkehr effizienter ab als alles andere, was verfügbar ist.

**ChinaCache** ist der älteste Name im chinesischen CDN-Geschäft. Der Anbieter ist länger im Markt als die meisten cloudbasierten Alternativen. Weitreichendes Inlandsnetz, große Abdeckung, lange Erfahrung.

**Das Cloudflare China Network** läuft über eine Partnerschaft mit JD Cloud. Es bietet Unternehmen, die global bereits auf Cloudflare setzen, einen Weg nach China, allerdings brauchen Sie dafür einen Enterprise-Tarif. Über eine Selbstregistrierung ist das nicht zu bekommen.
