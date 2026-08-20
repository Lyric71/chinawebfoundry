---
title: "Website bei Baidu verifizieren: Datei oder HTML-Tag"
subtitle: "Zwei Verifizierungsmethoden funktionieren. Eine dritte steht noch in den meisten englischsprachigen Ratgebern und funktioniert seit dem ersten Quartal 2023 nicht mehr."
summary: "Auf Baidus Plattform funktionieren noch zwei Verifizierungsmethoden, und CNAME gehört nicht dazu. Exakte Dateinamen, Platzierung des Tags, Hinweise für WordPress und Astro."
visual: "/images/guides/baidu-site-verification.webp"
order: 26
published: true
publishedAt: 2026-08-18
updatedAt: 2026-08-18
category: Search
---

Eine Domain auf der Baidu Search Resource Platform (百度搜索资源平台, Bǎidù Sōusuǒ Zīyuán Píngtái) zu verifizieren macht aus einer URL ein Objekt, aus dem sich Daten ziehen und an das sich Seiten einreichen lassen. Die Arbeit dauert zehn Minuten, sofern das Hosting mitspielt. Das Konto dahinter zu bekommen ist der schwere Teil, und das ist [ein eigenes Thema](/de/ressourcen/china-web-leitfaden/baidu-konto-auslaendisches-unternehmen/).

> Baidu hielt im November 2025 über alle Geräte hinweg 63,97 % des chinesischen Suchmaschinenmarkts, auf Mobilgeräten 77,86 %.
>
> *Quelle: StatCounter, zitiert nach The Egg, 11. Februar 2026*

Nehmen Sie diese Zahl als Spanne und nicht als Konstante, denn StatCounters China-Panel schwankt von Monat zu Monat erheblich. Entscheidend ist die Größenordnung. Für diese Suchmaschine verifizieren Sie.

## Die Website hinzufügen

Die Site-Verwaltung (站点管理, zhàndiǎn guǎnlǐ) ist der Ort, an dem Domains eingetragen werden, und Baidu verlangt neben dem Host auch das Protokoll. Sie geben https:// oder http:// ausdrücklich an, weil Baidu beide als getrennte Objekte behandelt.

Tragen Sie den Host ein, der ranken soll. Keine Weiterleitung darauf, keine Staging-Subdomain, nicht die Fassung, die Ihr CDN zufällig ausliefert. Wenn Ihr kanonischer Host das www ist und die nackte Domain per 301 dorthin zeigt, verifizieren Sie das www.

## Methode eins: Dateiverifizierung

Die Dateiverifizierung (文件验证, wénjiàn yànzhèng) ist die Methode der Wahl, wann immer Sie Dateien ausrollen können.

Baidu erzeugt eine HTML-Datei nach dem Muster baidu_verify_codeva-CODE.html. Sie gehört ins Wurzelverzeichnis genau des Hosts, der verifiziert wird. Wo dieses Verzeichnis liegt, hängt vom Stack ab. Shared Hosting bei Alibaba Cloud (阿里云, Ālǐ Yún) nennt es meist htdocs. cPanel-Konten aus Hongkong nennen es public_html. Panels wie BT nennen es wwwroot. In einem Astro-Build gehört sie ins public-Verzeichnis, von wo sie beim Bauen ins Wurzelverzeichnis kopiert und als statische Datei ausgeliefert wird. Unter WordPress liegt sie neben der wp-config.php, und jedes Sicherheits-Plugin, das unbekannte Dateien im Wurzelverzeichnis blockiert, braucht eine Ausnahme. Das sind dann dreißig unterhaltsame Minuten am Launch-Tag.

Drei Dinge entscheiden, ob es klappt. Die Datei muss mit Status 200 antworten, sie darf nirgendwohin weiterleiten, und sie darf nicht hinter einer Authentifizierung oder einer Bot-Prüfung liegen.

Lassen Sie die Datei nach der Verifizierung liegen. Baidu prüft regelmäßig nach, und eine Datei, die beim nächsten Release verschwindet, nimmt die Verifizierung mit.

## Methode zwei: Verifizierung per HTML-Tag

Wenn der Weg über die Datei versperrt ist, greift diese Variante.

Die Tag-Verifizierung (HTML标签验证, HTML biāoqiān yànzhèng) setzt ein Meta-Tag in den Head der Startseite. Sie kommt zum Einsatz, wenn sich keine Dateien im Wurzelverzeichnis ablegen lassen, was auf verwalteten Plattformen und bei manchen Enterprise-CDNs vorkommt.

Das Tag trägt Ihren Code im content-Attribut und gehört zwischen öffnendes und schließendes Head-Tag der Startseite. In WordPress landet es im Theme-Header oder über das SEO-Plugin, dem der Head gehört. In Astro gehört es ins gemeinsame Layout, damit ein Rebuild es nicht verlieren kann.

Eine Anforderung wiegt schwerer als die übrigen. Das Tag muss in dem HTML stehen, das der Server ausliefert. Wird es per clientseitigem JavaScript eingefügt, sieht Baidu es nicht, und Sie sehen es ebenso wenig, wenn Sie den Quelltext mit deaktivierten Skripten ansehen.

Sitzt die Website hinter einem Full-Page-Cache oder einem CDN, leeren Sie den Cache nach dem Deployment. Baidu liest die zwischengespeicherte Fassung, nicht den Ursprung.

## Die Methode, die es nicht mehr gibt

Die CNAME-Verifizierung (CNAME验证, CNAME yànzhèng) wurde im ersten Quartal 2023 eingestellt.

> 站点管理-验证网站暂停【CNAME验证】的方式。该调整对已完成验证的站点没有影响。
>
> Die Site-Verwaltung hat die CNAME-Verifizierung eingestellt. Die Änderung betrifft bereits verifizierte Websites nicht.
>
> *Quelle: Baidu Search Resource Platform, offizielle Mitteilung, Februar 2023*

Websites, die vor der Änderung so verifiziert wurden, behielten ihren Status. Neue haben zwei Optionen, nicht drei. Bietet Ihnen ein Ratgeber drei an, prüfen Sie sein Datum, bevor Sie dem Rest der Seite trauen.

## Welche man nimmt, und warum Teams beide ausrollen

Wer die Deployments kontrolliert, nimmt die Datei. Sie ist inert, hängt an keinem Template-Rendering, und kein Theme-Wechsel frisst sie auf.

Wird Ihre Startseite von einer Plattform erzeugt, in die Sie keine Dateien legen können, nehmen Sie das Tag und platzieren es dort, wo ein Redesign es nicht stillschweigend entfernt.

Etliche Teams rollen beides aus. Baidu stört das nicht, und wir haben diese Redundanz auf einer Kundenwebsite noch nie bereut.

## Wenn die Ampel auf Grün springt

Zwei Dinge lohnen sich noch am selben Nachmittag. Tragen Sie Ihre ICP-Registriernummer (备案号, bèi'àn hào) in die Site-Attribute ein, denn neue Websites kommen mit ausgefülltem Feld offenbar schneller durch die frühe Crawl-Phase. Lassen Sie danach eine Crawl-Diagnose (抓取诊断, zhuāqǔ zhěnduàn) über die Startseite und ein paar tiefer liegende Seiten laufen, damit Sie wissen, was Baiduspider tatsächlich bekommt, bevor Sie anfangen zu publizieren.

Schlägt die Verifizierung fehl, statt grün zu werden, liegt es meist an einer Weiterleitung auf der Startseite, an einer Firewall-Regel gegen Baiduspider oder an einer Startseite, die erst nach dem Ausführen von JavaScript existiert. [Jeder dieser Fälle hat seine eigene Lösung](/de/ressourcen/china-web-leitfaden/baidu-verifizierung-fehlgeschlagen/), und keiner bedeutet, dass Ihre Website für menschliche Besucher kaputt ist.
