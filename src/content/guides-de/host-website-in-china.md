---
title: "Website in China hosten: von ICP bis Livegang"
subtitle: "Wo Ihr Server physisch steht, entscheidet alles Weitere: Ein chinesischer Besucher sieht Ihre Startseite, oder er gibt vor dem drehenden Ladekreis auf."
summary: "Warum Hosting im Ausland in China scheitert, die Regeln zu ICP und Geschäftseinheit, Alibaba Cloud gegen Tencent Cloud und gegen das Ausland, und eine Schritt-für-Schritt-Checkliste für den Livegang."
visual: "/images/guides/host-website-in-china.webp"
order: 14
published: true
publishedAt: 2026-07-03
updatedAt: 2026-10-18
category: Hosting
---

Ihre Website lädt überall einwandfrei, nur nicht in dem einen Markt, für den Sie sie gebaut haben. Öffnen Sie sie aus Shanghai, und Sie warten. Und warten weiter. Manchmal lädt die Seite überhaupt nicht.

Neun von zehn Mal liegt es am Hosting. An seinem Standort hängt, ob ein chinesischer Besucher Ihre Startseite zu sehen bekommt oder vor dem drehenden Ladekreis kapituliert, und das wiegt schwerer als jede andere Entscheidung in [einer WordPress-Umsetzung für China](/de/wordpress-in-china/). Dieser Leitfaden zeigt, warum Hosting im Ausland in China zusammenbricht, was Sie rechtlich brauchen, bevor Sie auf dem Festland hosten dürfen, wie sich die wichtigsten Anbieter schlagen und in welcher Reihenfolge Sie alles angehen.

Das meiste im Folgenden knüpft an unseren Grundlagenleitfaden an, Website-Lokalisierung für China. Falls Sie den noch nicht gelesen haben, beginnen Sie dort und kommen dann für die Hosting-Details zurück.

## Warum Ihre Website in China hosten

Drei Gründe, und sie summieren sich.

Zuerst das Tempo. Steht Ihr Server in Virginia oder Frankfurt, muss jede Anfrage eines chinesischen Nutzers die Große Firewall (防火长城) überqueren. Dieser Übergang läuft alles andere als glatt. Der Verkehr wird gedrosselt, der SSL-Handshake bricht mitten in der Verbindung ab, und jedes Skript und jede Schrift von einem ausländischen Host, den das Netz des Besuchers nicht erreicht, bleibt schlicht hängen. Google Fonts ist der Klassiker: Aus einem Rechenzentrum auf dem Festland ist der Dienst erreichbar, über einen Pekinger Privatanschluss bleibt er stumm. Die Seite scheitert nicht mit lautem Knall. Sie steht einfach da, halb aufgebaut, bis der Besucher geht.

> Laut den Messungen von 21YunBox beantwortete `fonts.googleapis.com` am 28. August 2026 alle 72 Anfragen einer Alibaba-Cloud-Instanz (阿里云) in der Region cn-zhangjiakou, am 30. August 2026 dagegen keine der 54 Anfragen über einen privaten Breitbandanschluss von China Mobile (中国移动) in Peking.
> Quelle: 21YunBox, A Chinese Cloud Probe Is Not a Chinese Visitor: The Same Hosts, Opposite Answers, August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Dann die Suche. Baidu (百度) ist die Suchmaschine, auf die es hier ankommt, und sie kann nur Seiten ranken, die sie vom Festland aus crawlen und laden kann. Eine veröffentlichte Regel, nach der Baidu einen Festland-Host oder eine ICP-Registrierung an sich belohnt, gibt es nicht: Für lokales Hosting sprechen der Zugang des Crawlers und die Ladezeit in Festlandnetzen, und beides lässt sich überprüfen.

> Baidu hält rund die Hälfte des chinesischen Suchmarkts. Google liegt unter 3 %.
> Quelle: Statcounter Global Stats, China, 2024.

Drittens die Firewall selbst. Selbst ein schnelles Auslands-Setup bleibt hinter ihr wacklig. Plugins, die einen gesperrten Endpunkt ansteuern, gehen sang- und klanglos kaputt. Ein CDN, für das Sie gutes Geld zahlen, wird an der Grenze gedrosselt. Hosting innerhalb Chinas räumt diese ganze Sorte von Problemen auf einen Schlag ab, weil Ihre Ressourcen schon auf der richtigen Seite der Mauer liegen.

## Die 3 rechtlichen Voraussetzungen, bevor Sie hosten dürfen

Einfach einen Festlandserver mieten und die Domain darauf zeigen lassen: So läuft es nicht. Drei Dinge müssen zuerst stehen, und um keines davon führt ein Weg herum.

**1. Eine chinesische Geschäftseinheit.** Die ICP-Registrierung ist an eine in China eingetragene Einheit gebunden. Ein ausländisches Unternehmen ohne lokale Präsenz kann nicht selbst einreichen. Wenn Sie noch keine Einheit haben, ist das keine Sackgasse, es gibt Wege dorthin, aber es ist die erste Hürde, und man sollte sie von Anfang an kennen.

**2. Eine Domain, .cn oder .com.** Die Domain muss eine Echtnamen-Prüfung bestehen, und der eingetragene Inhaber muss buchstabengenau mit der einreichenden Einheit übereinstimmen. Eine Abweichung an dieser Stelle zählt zu den häufigsten Gründen, warum ein Antrag ins Stocken gerät, noch bevor er die Behörde erreicht.

**3. Die ICP-Registrierung selbst.** Um die führt kein Weg herum. Das ICP-Bei'an (备案) ist der Eintrag, den jede auf dem Festland gehostete Website führen muss, unter der Aufsicht des Ministeriums für Industrie und Informationstechnik (工业和信息化部), kurz MIIT. Einer Informationsseite genügt das Standard-Bei'an. Wer Nutzern Informationen oder Online-Dienste gegen Bezahlung anbietet, braucht zusätzlich eine ICP-Lizenz (ICP许可证), und die dauert länger.

> Die eigene Prüfung von Alibaba Cloud dauert 1 bis 2 Arbeitstage. Die anschließende Prüfung durch die Kommunikationsverwaltung der Provinz (省级通信管理局) dauert in der Regel 1 bis 20 Arbeitstage.
> Quelle: Alibaba Cloud (阿里云), Hilfezentrum, Überblick über das ICP-Registrierungsverfahren, aktualisiert am 26. August 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview

Ein Punkt, den viele übersehen: Innerhalb von 30 Tagen nach dem Livegang auf einem Festland-Host reichen Sie zusätzlich eine Registrierung bei der öffentlichen Sicherheit (公安备案) bei den örtlichen Behörden ein. Den vollständigen Ablauf zu Registrierung, Optionen für die Einheit und Dokumentenvorbereitung finden Sie in unserem eigenen Leitfaden zum ICP. Diese Seite setzt voraus, dass Sie wissen: Sie kommt noch.

## China-Hosting im Vergleich: Alibaba Cloud, Tencent Cloud oder Ausland

Drei realistische Wege, je nachdem, ob Sie schon ein ICP haben und wer Ihr Publikum tatsächlich ist.

| Option              | Anfragen gehen über die Grenze | ICP nötig | Am besten für                             |
| ------------------- | ------------------------------ | --------- | ----------------------------------------- |
| Festland (Aliyun)   | Nein                           | Ja        | Ein ernsthaftes, langfristiges China-Vorhaben |
| Festland (Tencent)  | Nein                           | Ja        | Projekte rund um WeChat                   |
| Hongkong            | Ja                             | Nein      | Als Brücke, solange das ICP-Verfahren läuft |
| USA / Europa        | Ja                             | Nein      | Ungeeignet für ein Publikum in China      |

**Alibaba Cloud (Aliyun, 阿里云)** ist für die meisten ausländischen Marken, die es mit China ernst meinen, die erste Wahl. Der Anbieter hat die meisten Festlandregionen und auf seinem chinesischen Portal aliyun.com ein Registrierungssystem, über das sich das Bei'an direkt beim Server abwickeln lässt. Über das englischsprachige internationale Portal alibabacloud.com lässt sich dagegen kein Registrierungsantrag stellen. Der praktische Vorteil liegt in der Abdeckung und darin, dass Server und Registrierung an einem Ort zusammenlaufen.

**Tencent Cloud (腾讯云)** folgt dicht dahinter und ist oft die bessere Wahl, sobald das Projekt auf dem WeChat-Ökosystem (微信) aufsetzt, dem es von Haus aus näher steht. In der Leistung nimmt es sich auf gleicher Stufe nichts mit Aliyun. Den Ausschlag gibt gewöhnlich die Passung zum Ökosystem, nicht das Datenblatt.

**Huawei Cloud (华为云)** ist eine glaubwürdige dritte Festlandoption, vor allem für Teams, die bereits auf Huawei-Infrastruktur eingerichtet sind.

**Das Ausland, Hongkong eingeschlossen,** umgeht die ICP-Pflicht ganz, und darin liegt sein ganzer Reiz. Hongkong gibt die bequeme Brücke ab: Es liegt direkt neben dem Festland und schneidet mit einem anständigen CDN und einer Caching-Schicht deutlich besser ab als ein Server in Frankfurt, auch wenn jede Anfrage weiterhin über die Grenze geht. Viele Teams laufen auf Hongkong, solange ihr Antrag bearbeitet wird, und ziehen danach um.

Beim Preis sollten Sie chinesische Cloud-Tarife nicht für bare Münze nehmen. Die Lockangebote sind meist Aktionspreise für Neukunden auf den kleinsten Maschinen, und eine Produktionskonfiguration für eine Unternehmensseite kostet mehr.

Auch die Konsole spielt eine Rolle. Die Registrierung läuft über das chinesische Portal des jeweiligen Anbieters, und über die internationalen Konten von Alibaba lässt sie sich gar nicht einreichen. Das erklärt zu einem guten Teil, warum Teams diesen Schritt an einen lokalen Partner abgeben.

> Konten auf dem internationalen Portal von Alibaba Cloud (alibabacloud.com) unterstützen keine Anträge auf ICP-Registrierung. Dafür ist ein Konto auf dem chinesischen Portal von Alibaba Cloud (aliyun.com) nötig.
> Quelle: Alibaba Cloud, Hilfezentrum, ICP-Registrierung für Unternehmen außerhalb des chinesischen Festlands, aktualisiert am 20. August 2026. https://help.aliyun.com/en/icp-filing/basic-icp-service/product-overview/icp-filing-application-for-enterprises-outside-the-chinese-mainland

## Schneller machen: China-CDN und Auslieferung am Rand

Gutes Festland-Hosting bringt Ihren Ursprungsserver nah an die Nutzer. Ein China-CDN legt Ihre statischen Dateien, Bilder, Skripte, Stylesheets, auf Knoten im ganzen Land ab: Sie laden dann aus ein paar Hundert Kilometern, statt erst den Umweg über den Pazifik zu nehmen.

Alibaba Cloud CDN und Tencent Cloud CDN sind die üblichen Optionen, und das zu Recht: Sie greifen sauber mit dem passenden Host ineinander und sind auf das Festland-Routing abgestimmt.

Hier ist der Haken, der die Leute überrascht. Ein China-CDN führt nicht an der Registrierung vorbei. Um zwischengespeicherte Inhalte von Festlandknoten auszuliefern, braucht die CDN-Domain ihre eigene ICP-Abdeckung, genau wie der Ursprung. Manche Teams meinen, das CDN erspare ihnen das Bei'an. Tut es nicht. Registrierung und Auslieferung am Rand gehören zusammen.

Richtig gemacht, ist der Gewinn mit Händen zu greifen. Produktbilder, die früher nur tröpfelten, laden in derselben Umgebung, in der Ihr Käufer sitzt, und eine schwere Seite fängt an, sich leicht anzufühlen.

## Schritt für Schritt: Ihre Website auf dem chinesischen Festland starten

Die Reihenfolge zählt, denn jeder Schritt baut auf dem vorherigen auf. Springen Sie vor, bleiben Sie stecken.

**1. Die Einheit aufsetzen.** Vergewissern Sie sich, dass Sie eine in China eingetragene Geschäftseinheit haben, oder bahnen Sie den Weg zu einer. Nichts anderes fängt an, solange sie nicht existiert.

**2. Die Domain registrieren und prüfen lassen.** Bringen Sie Ihre .cn oder .com zu einem Registrar, bestehen Sie die Echtnamen-Prüfung und achten Sie darauf, dass der Inhaber exakt der Einheit entspricht.

**3. Den Festland-Server buchen.** Die Registrierung wird auf einen Server bei dem Anbieter eingereicht, der die Website hosten wird. Der Server kommt also zuerst: bei Aliyun, Tencent Cloud oder Huawei Cloud, mit ausreichend langer Laufzeit (Alibaba verlangt mindestens 3 Monate). Bis die Registrierung durch ist, bleibt die Domain für Besucher gesperrt.

**4. Das ICP einreichen.** Reichen Sie das Bei'an über das System desselben Anbieters ein. Die informative Standard-Registrierung geht schneller; die Lizenz dauert länger, planen Sie sie also früh ein, wenn Sie Geld für Informationen oder Dienste verlangen. Ist die Registrierung erteilt, richten Sie den Server auf die chinesische Umgebung aus: China-taugliches SSL, selbst gehostete Schriften, keine gesperrten Aufrufe an Dritte.

**5. Das CDN anschließen.** Ergänzen Sie ein China-CDN mit eigener Registrierungsabdeckung und richten Sie Ihre statischen Ressourcen darauf aus.

**6. Die Registrierung bei der öffentlichen Sicherheit einreichen.** Erledigen Sie innerhalb von 30 Tagen nach dem Livegang das 公安备案 bei der örtlichen Behörde und tragen Sie die ICP-Nummer und die Nummer der öffentlichen Sicherheit in Ihre Fußzeile ein.

**7. Live gehen und aus China heraus überwachen.** Prüfen Sie, ob die Seite von echten Festlandstandorten aus schnell lädt, nicht nur von einem Prüfwerkzeug außerhalb der Firewall, das Ihnen bereitwillig meldet, alles sei in Ordnung, während Ihre Besucher in Shenzhen auf einen leeren Bildschirm starren.

## Das beste China-Hosting für Ihr Unternehmen wählen

Welches Setup das richtige ist, hängt vor allem davon ab, wo Sie im Prozess stehen und was Ihre Seite tut.

Sie bauen eine ernsthafte, langfristige Präsenz auf, und die organische Suche gehört zum Plan? Gehen Sie direkt zu Festland-Hosting auf Aliyun oder Tencent Cloud, mit einer ordentlichen Registrierung. So bleibt jede Anfrage auf dem Festland, die Ihrer Besucher ebenso wie die von Baiduspider.

Sie mussten schon gestern live sein, und Ihr ICP läuft noch? Starten Sie auf Hongkong als Brücke, setzen Sie ein CDN und Caching davor und planen Sie den Umzug auf das Festland, sobald der Antrag durch ist.

Sie verkaufen, es gibt echte Transaktionen? Nehmen Sie die ICP-Lizenz vom ersten Tag an in den Zeitplan auf, denn sie ist für sich der langsamste Schritt und der, der ein Team am ehesten kalt erwischt.

Und wenn all das, die Einheit, die Registrierung, die Konsole des Anbieters, die Überwachung von innerhalb der Mauer, mehr ist, als Sie allein verkabeln möchten, ist genau das unsere Arbeit. Sagen Sie uns, wo Sie stehen: ob Sie eine Einheit haben, wie es um Ihr ICP steht, wer Ihr Publikum ist, wie Ihr Zeitplan aussieht. Wir kommen mit einer Hosting-Empfehlung zurück, die auf Ihre Lage zugeschnitten ist, nicht mit einem Angebot von der Stange.
