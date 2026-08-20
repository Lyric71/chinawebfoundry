---
title: "Baidu-Verifizierung fehlgeschlagen: die üblichen Ursachen"
subtitle: "Baidu liefert eine rote Zeile und sonst nichts. Die Datei, die angeblich fehlt, lädt in Ihrem Browser einwandfrei, an Ihrem Schreibtisch, in Frankfurt. Beides stimmt gleichzeitig, und die Lücke dazwischen ist das ganze Problem."
summary: "Baidu-Verifizierung fehlgeschlagen? Alle häufigen Ursachen, wie sich jede von außen zeigt, und die Lösung: Weiterleitungen, robots.txt, WAF, DNS, Konten."
visual: "/images/guides/baidu-verification-failed.webp"
order: 24
published: true
publishedAt: 2026-08-17
updatedAt: 2026-08-17
category: Search
---

Die Verifizierung auf der Baidu Search Resource Platform (百度搜索资源平台, Bǎidù Sōusuǒ Zīyuán Píngtái) besteht aus einer HTTP-Anfrage. Baidu ruft eine URL aus China heraus ab und sucht darin eine Zeichenfolge, entweder eine HTML-Datei im Wurzelverzeichnis oder ein Meta-Tag im Head der Startseite. Viel kann daran nicht scheitern, und was scheitert, liegt zwischen Baiduspider und Ihrem Server.

Die Prüfung dauert zwischen wenigen Sekunden und 24 Stunden. Ein Fehlschlag, der sofort zurückkommt, ist also ein misslungener Abruf und keine Warteschlange. Und wer per CNAME verifiziert, wechselt die Methode.

> 站点管理-验证网站暂停【CNAME验证】的方式。该调整对已完成验证的站点没有影响。
>
> Site-Verwaltung: Die CNAME-Methode zur Verifizierung von Websites ist ausgesetzt. Die Änderung betrifft bereits verifizierte Websites nicht.
>
> *Quelle: Baidu Search Resource Platform, offizielle Mitteilung, Februar 2023*

## Die Crawl-Diagnose beantwortet die Frage, an der Ihr Browser scheitert

Die Crawl-Diagnose (抓取诊断, zhuāqǔ zhěnduàn) ruft eine URL als Baiduspider ab, mit Desktop- oder Mobil-Agent, und gibt die rohe Antwort zurück. Sie liefert die ersten 200 KB, was auf einer überladenen Startseite zählt, wo das Tag weiter hinten in der Antwort stehen kann. Sie ist außerdem der einzige Test, der bei Ihnen aus China heraus startet.

Richten Sie sie auf die Verifizierungs-URL, dann auf die Startseite. Was zurückkommt, ist das, womit Baidu arbeiten musste, und beendet die Diskussion mit Ihrer Entwicklung meist auf der Stelle. Die Kontingente sind knapp. Eine chinesische SEO-Quelle nennt 70 pro Woche, eine Agenturquelle 200. Was immer Sie ändern: Wiederholen Sie den Abruf, bevor Sie erneut auf Verifizieren klicken.

Suchen Sie Ihr Symptom und lesen Sie dann den passenden Abschnitt.

| Was Sie sehen | Was passiert | Was hilft |
| --- | --- | --- |
| Lädt im Browser, scheitert sofort | 301 oder 302 auf dem eingetragenen Host | Den Host verifizieren, der mit 200 antwortet |
| Als blockiert gemeldet, nicht als fehlend | Disallow in der robots.txt | Baiduspider erlauben, mit dem Robots-Werkzeug prüfen |
| Zeitüberschreitung bei öffentlich erreichbarer Datei | WAF oder CDN verwirft chinesischen Traffic | Per Reverse DNS erlauben oder Datei aus der geschützten Zone nehmen |
| 403 oder Weiterleitung zum Login | Basic Auth, Plugin, IP-Freigabeliste | Mit 200 und ohne Authentifizierung ausliefern |
| Grün auf jedem Monitor, Zeitüberschreitung bei Baidu | Aus Festlandchina nicht erreichbar | Aus China testen, Routing korrigieren oder Origin verlegen |
| Tag in den Devtools, für Baidu nicht auffindbar | Clientseitiges Rendering | Serverseitig rendern oder per Datei verifizieren |
| Baidu ruft eine Website ab, die Sie nicht mehr betreiben | Veraltetes DNS innerhalb Chinas | TTL vor der Migration senken |
| Eine verifizierte Website verliert still ihre Verifizierung | Konto ohne abgeschlossene Realnamen-Verifizierung | Sie nachholen und erneut verifizieren |

## Baidu hält bei der ersten Weiterleitung an

Baidu folgt zur Verifizierung keinen Weiterleitungsketten. Es fragt exakt die URL an, die Sie eingetragen haben, und ein 301 oder 302 davor beendet die Prüfung. Crawl-Fehler treten außerdem jenseits von fünf Sprüngen auf und bei URLs über 1.024 Zeichen.

Meist steckt eine https-Erzwingung hinter einer Property, die jemand als http eingetragen hat, oder eine www-Kanonisierung bei einer nackt eingetragenen Property. Unangenehmer wird es beim Geo-Routing, das chinesische IP-Adressen in einen Länderordner schiebt. Das reproduzieren Sie aus Europa nie. Baidu zählt http und https als getrennte Properties, www und ohne www als getrennte Hosts. Tragen Sie den Host ein, der ohne Sprung mit 200 antwortet, und vergewissern Sie sich, dass es der Host ist, der ranken soll.

## Blockiert, bevor die Antwort überhaupt einen Statuscode bekommt

Manchmal ist die Datei tadellos, und es erreicht sie nie etwas.

Fangen Sie bei der robots.txt an. Das dauert eine Minute. Der Wiederholungstäter ist ein User-agent mit Sternchen und einem Disallow mit Schrägstrich, für alle unsichtbar, weil Googlebot über seine eigene Ausnahme wieder hereingelassen wurde und Baiduspider nie. Das Robots-Werkzeug der Plattform zeigt, wie Baidu die Live-Datei liest, und es hört bei 48 KB und bei URIs mit 250 Zeichen auf.

Danach kommen 403 oder eine Weiterleitung zum Login. Der Klassiker ist eine nach einem Staging-Build vergessene Basic Auth, dicht gefolgt von Coming-soon-Plugins und IP-Freigabelisten aus einem stillen Launch. Schließen Sie auch nicht aus, dass Ihr WordPress-Sicherheits-Plugin genau das tut, wofür Sie es installiert haben: baidu_verify_codeva-CODE.html ist exakt die Art unbekannter Datei im Wurzelverzeichnis, die solche Plugins blockieren.

Und dann gibt es den Fall ohne saubere Antwort. Ein Thread in der Cloudflare-Community dokumentiert eine öffentlich erreichbare Verifizierungsdatei, von außen bestätigt, während Baidu beharrlich eine E/A-Zeitüberschreitung zurückgab. Eine Lösung hat niemand gepostet. Wahrscheinlich verwirft eine Edge-Regel oder eine Bot-Fight-Einstellung chinesische Netze, bevor die Anfrage den Origin erreicht, weshalb eine Zeitüberschreitung statt eines 403 herauskommt. Wer die Edge kontrolliert, erlaubt Baiduspider ordentlich, über die Reverse-DNS-Prüfung weiter unten und nicht über den User-Agent. Alle anderen legen die Verifizierungsdatei auf einen Pfad außerhalb der geschützten Zone und verifizieren diesen.

## Prüfen Sie, ob es wirklich Baiduspider ist, bevor Sie ihn freigeben

Die User-Agents lauten Baiduspider/2.0 und Baiduspider-render/2.0, mobile Varianten führen Android oder Mobile in der Zeichenkette. Alle trivial zu fälschen, und Scraper fälschen sie ununterbrochen, um an Regeln vorbeizukommen, die jemand im Vertrauen auf den Header geschrieben hat.

Reverse DNS ist die Prüfung, die hält. Echte Baiduspider-Adressen lösen zu Hostnamen unter baidu.com oder baidu.jp auf. Die zweite Domain wird gern übersehen, weil Freigabelisten nur für baidu.com geschrieben werden. Lösen Sie die Adresse auf, bestätigen Sie den Hostnamen, lösen Sie ihn vorwärts erneut auf und prüfen Sie, ob er übereinstimmt.

## Grün in Europa, tot in Schanghai

Jeder externe Monitor meldet die Website als erreichbar. Baidu läuft trotzdem in die Zeitüberschreitung. Die Route nach China kann schlecht sein, oder eine blockierende Ressource auf der Seite lädt nie. Manchmal ist der CDN-Knoten, der chinesische Nutzer bedient, schlicht nicht derjenige, den Sie getestet haben. Nichts davon erscheint auf einem europäischen Dashboard, und genau deshalb überlebt dieser Fehler wochenlang.

Veraltetes DNS ist der langsame Verwandte. Nach einer Migration kann ein Resolver in China den alten Eintrag weit über die gesetzte TTL hinaus ausliefern. Senken Sie die TTL, bevor Sie umziehen, und verifizieren Sie vor einer Migration statt mittendrin.

## Das Tag, das Ihr Browser sieht, ist nicht das Tag, das Baidu bekommt

Das Meta-Tag steht in den Devtools. Baidu sagt, es findet es nicht. Beides stimmt. Das Tag wird clientseitig eingefügt. Eine Head-Komponente in einer Single-Page-App tut das, ein Tag-Manager ebenso. Eine Startseite, die vollständig im Browser gerendert wird, hatte das Tag nie in ihrer Antwort.

Die Tag-Verifizierung (HTML标签验证, HTML biāoqiān yànzhèng) verlangt das Tag in dem HTML, das der Server ausliefert. Quelltext ansehen, nicht Inspektor. Verlagern Sie es dorthin oder nutzen Sie die Dateiverifizierung (文件验证, wénjiàn yànzhèng), der egal ist, wie die Seite entsteht.

## Der Fehlschlag, über den auf Englisch niemand schreibt

Angenommen, die Serverseite ist sauber und die Website lässt sich trotzdem nicht verifizieren. Im September 2023 veröffentlichte Baidu eine Mitteilung über die Bereinigung riskanter Verifizierungsbeziehungen auf der Plattform.

> 关于搜索资源平台清退风险资源验证关系的通知
>
> Mitteilung über den Entzug riskanter Ressourcen-Verifizierungsbeziehungen auf der Search Resource Platform
>
> *Quelle: Baidu Search Resource Platform, offizielle Mitteilung, 4. September 2023*

Konten, die nie eine Realnamen-Verifizierung (实名认证, shímíng rènzhèng) abgeschlossen hatten, verloren ihre. Eine zweite Mitteilung wenige Wochen später zog derselben Gruppe die Einreichungskontingente ab und schloss die Sitemap-Einreichung, spürbar Berichten zufolge ab Ende November 2023.

Sie sehen also eine Website, die verifiziert war, es nicht mehr ist und sich serverseitig seitdem nicht verändert hat. Nichts in Ihrem Wurzelverzeichnis wird das reparieren.

> 实名认证直接影响账号和资源的归属
>
> Die Realnamen-Verifizierung bestimmt unmittelbar die Zugehörigkeit des Kontos und seiner Ressourcen.
>
> *Quelle: Baidu, Dokumentation zur Kontoverwaltung*

Gewöhnliche ausländische Reisepässe stehen nicht auf Baidus Liste akzeptierter Ausweisdokumente. Genau dort bleiben ausländische Teams hängen. Wir haben mehr als einen Kunden übernommen, dessen Baidu-Problem vollständig in einem Konto steckte, in das sich niemand einloggen konnte.

## Die ICP-Registrierung ist nicht der Grund für den Fehlschlag

Eine ICP-Registrierung ist weder für die Verifizierung noch für die Indexierung formale Voraussetzung. Eine nicht registrierte Website mit Hosting außerhalb Festlandchinas lässt sich heute verifizieren. Die Registrierung entscheidet über Hosting auf dem Festland und über Baidus VIP-Privilegien, und nicht registrierte Websites indexieren tatsächlich langsamer. Tragen Sie die Nummer an dem Tag in die Site-Attribute ein, an dem sie durchkommt. Sie ist nicht der Grund, warum Ihre Verifizierung gescheitert ist.

Baidu ändert die Verifizierungsregeln mit wenig Vorlauf. Prüfen Sie den Ankündigungs-Feed der Plattform, bevor Sie auf etwas Datiertes hin handeln.
