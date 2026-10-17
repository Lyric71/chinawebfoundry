# /deep-translate DE, pass 1 (full native rewrite), 17 October 2026

Scope: the same eight passages. Existing DE copy read first; each changed
passage re-authored from scratch in FAZ / Handelsblatt register. House terms:
ICP-Registrierung (ICP备案), ICP-Lizenz (ICP许可证), Große Firewall.

## P1 src/data/faq-de.ts, ICP question and answer
- before Q: Was genau ist eine ICP-Lizenz? Brauche ich sie wirklich?
+ after Q:  Was genau ist eine ICP-Lizenz, und brauchen wir sie wirklich?
- before A: Ja, und es gibt keinen Umweg. […] Zwei Arten zählen: das ICP Bei’an (备案) für informationelle Seiten und die ICP Jing Ying (经营许可证) für Seiten, die Transaktionen abwickeln. Den Antrag übernehmen wir von Anfang bis Ende.
+ after A:  Wenn die Website auf einem Server in Festlandchina läuft, ja, wobei den meisten Websites die Registrierung genügt. ICP (互联网内容提供商) steht für Internet Content Provider. Das Ministerium für Industrie und Informationstechnologie (工业和信息化部) kennt zwei Verfahren: die ICP-Registrierung (ICP备案) für frei zugängliche Websites und die ICP-Lizenz (ICP许可证) für Angebote, die Nutzern Informationen oder Online-Dienste in Rechnung stellen. Eine Unternehmenswebsite braucht nur die Registrierung. Den Antrag bereiten wir von Anfang bis Ende vor.
why: "Transaktionen abwickeln" was the error; pinyin labels replaced by the house terms.

## P2 src/data/faq-de.ts, no entity yet (opening only)
- before: Dann wird das ICP (互联网内容提供商) schwieriger. Sie müssen entweder eine WFOE (外商独资企业) gründen oder sich mit einer chinesischen Gesellschaft zusammentun, die die Anmeldung trägt.
+ after:  Dann muss die Registrierung warten, denn sie läuft auf den Namen eines Unternehmens oder eines Einwohners auf dem Festland. Sie gründen entweder eine WFOE (外商独资企业), oder ein chinesisches Partnerunternehmen registriert die Website in eigenem Namen und steht dann im Register als ihr Betreiber.

## P3 src/data/faq-de.ts, how long the filing takes (opening only)
- before: Das Bei’an (备案) dauert in der Regel 2 bis 4 Wochen. Die Jing Ying (经营许可证) braucht 2 bis 3 Monate, manchmal länger. Die Variable ist …
+ after:  Für die ICP-Registrierung (ICP备案) planen wir 3 bis 6 Wochen. Alibaba Cloud nennt 1 bis 2 Arbeitstage für die eigene Prüfung und in der Regel 1 bis 20 Arbeitstage für die Prüfung durch die Provinzbehörde, dazu kommt das Zusammenstellen der Unterlagen. Über die ICP-Lizenz (ICP许可证) wird binnen 60 Tagen nach Annahme des Antrags entschieden; wir planen dafür 12 bis 18 Wochen. Die Variable ist …

## P4 src/data/faq-de.ts, performance gains
- before: Bestehende langsame Seiten, die zu Aliyun (阿里云) umziehen, gehen typischerweise von 12 bis 15 Sekunden Ladezeit auf unter 2 Sekunden. Neubauten erreichen auf Festland-Verbindungen unter 1 Sekunde. Die Baidu-Indexierung (百度) beginnt […]
+ after:  Eine Ladezeit versprechen wir erst, wenn wir Ihre Website gemessen haben. Der Gewinn kommt aus zwei Änderungen: Hosting auf dem Festland und das Entfernen von Aufrufen an Hosts, die die Große Firewall blockiert oder bremst. Unser Strategie-Audit misst beides, bevor wir ein Angebot machen. Bei Baidu (百度) planen wir 2 bis 4 Wochen nach dem Launch, bis die ersten Seiten indexiert sind.
why: undated load times are on the Do Not Assert list.

## P5 src/pages/de/wordpress-agentur-china.astro, FAQ "timeline"
- before: Eine neue Marken-Website braucht 8 bis 12 Wochen vom Kickoff bis zum Launch. […] Die ICP-Anmeldung dauert 2 bis 4 Wochen und läuft parallel zur Entwicklung.
+ after:  Eine neue Marken-Website braucht 8 bis 12 Wochen vom Kickoff bis zum Launch, sofern die chinesische Gesellschaft bereits besteht. […] Für die ICP-Registrierung planen wir 3 bis 6 Wochen und starten sie in der ersten Woche, parallel zur Entwicklung.

## P6 same page, process bullet
- before: Anmeldung in 2 bis 4 Wochen; wir treiben sie parallel zur Entwicklung voran
+ after:  Registrierung in geplanten 3 bis 6 Wochen, gestartet in Woche eins, parallel zur Entwicklung

## P7 same page, process paragraph
- before: Lizenz und SEO laufen parallel zur Entwicklung; kein Arbeitsstrang wartet auf den anderen.
+ after:  ICP-Registrierung und SEO-Grundlagen laufen parallel zur Entwicklung, und die Registrierungsnummer bestimmt den Launch-Termin.

## P8 src/pages/de/webagentur-china.astro, FAQ timeline (first sentence)
- before: Eine fokussierte Markenwebsite veranschlagen wir mit 8 bis 12 Wochen vom Kickoff bis zum Launch mit ICP-Lizenz.
+ after:  Eine fokussierte Markenwebsite veranschlagen wir mit 8 bis 12 Wochen vom Kickoff bis zum Launch, ICP-Registrierung inklusive.

Step 1 complete.
