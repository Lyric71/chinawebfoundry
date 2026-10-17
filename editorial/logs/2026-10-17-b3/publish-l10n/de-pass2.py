import sys
src = 'editorial/logs/2026-10-17-b3/publish-l10n/de.p1.md'
dst = 'editorial/logs/2026-10-17-b3/publish-l10n/de.p2.md'
s = open(src, encoding='utf8').read()
reps = [
('subtitle: "Die drei Uhren eines Webprojekts in China, welche davon parallel laufen und wo Teams regelmäßig einen Monat verlieren."',
 'subtitle: "Die drei Uhren eines China-Webprojekts: welche parallel laufen und wo Teams regelmäßig einen Monat verlieren."'),
('summary: "Mit einer Gesellschaft in Festlandchina planen wir vierzehn Wochen. Gesellschaft und ICP-Registrierung laufen nacheinander und setzen den Termin. Der Plan, Woche für Woche."',
 'summary: "Mit Gesellschaft in Festlandchina planen wir vierzehn Wochen. Gesellschaft und ICP-Registrierung laufen nacheinander und bestimmen den Termin. Der Plan im Wochentakt."'),
('Jedes Projekt läuft auf drei Uhren:', 'Jedes Projekt folgt drei Uhren:'),
('Die Registrierung kann erst beginnen, wenn die Gesellschaft existiert, und die Website darf erst öffnen, wenn die Registrierung durch ist. Diese beiden Schritte folgen also aufeinander. Wird der Antrag in der ersten Woche gestellt, ist er erledigt, während noch entwickelt wird. Wartet man damit bis zur Freigabe des Designs, hängen sich seine drei bis sechs Wochen an das Ende des Plans.',
 'Ohne Gesellschaft keine Registrierung, ohne abgeschlossene Registrierung keine geöffnete Website: Diese beiden Schritte laufen also nacheinander. Wer den Antrag in der ersten Woche stellt, hat ihn erledigt, bevor die Entwicklung fertig ist. Wer bis zur Designfreigabe wartet, hängt dessen drei bis sechs Wochen ans Ende des Plans.'),
('Die meisten Projektpläne, die außerhalb Chinas entstehen, kennen nur eine Linie:', 'Die meisten außerhalb Chinas erstellten Projektpläne kennen nur eine Linie:'),
('Die Entwicklung kann neben beidem herlaufen, auf einer Staging-Kopie fernab des Servers in China.', 'Die Entwicklung läuft parallel zu beidem, auf einer Staging-Kopie fernab des Servers in China.'),
('Hat ein Projekt bereits eine Gesellschaft, ist ein in der ersten Woche gestellter Antrag durch, während die Entwickler noch arbeiten.',
 'Besteht die Gesellschaft schon, ist ein in der ersten Woche gestellter Antrag genehmigt, während die Entwickler noch arbeiten.'),
('Die Wochen gehen dafür drauf, die Unterlagen vollständig zu bekommen.', 'Wochen kostet es, die Unterlagen vollständig zusammenzubringen.'),
('Für diese Uhr nennen wir keine Zahl, denn sie stellen Ihre Anwälte und Ihr heimisches Register.',
 'Für diese Uhr nennen wir keine Zahl: Den Takt geben Ihre Anwälte und das Register in Ihrem Heimatland vor.'),
('denn alles andere wartet auf die Gewerbelizenz.', 'denn alles Weitere hängt an der Gewerbelizenz.'),
('Die letzte Zeile der Tabelle erwischt Teams, die auf einen stillen Start setzen.', 'Über die letzte Zeile der Tabelle stolpern Teams, die auf einen stillen Start setzen.'),
('Was die Entwicklung ab der ersten Woche braucht, ist ein Abhängigkeitsplan.', 'Ab der ersten Woche braucht die Entwicklung allerdings einen Abhängigkeitsplan.'),
('den die Great Firewall sperrt oder bremst, muss heraus,', 'den die Great Firewall sperrt oder bremst, muss entfernt werden,'),
('Die chinesischen Texte sind der Posten, der sich verzögert.', 'Verzögerungen entstehen meist bei den chinesischen Texten.'),
('Dann kommt das Warten nach dem Start. Baidu (百度) kann keine Website indexieren, die nicht offen ist, deshalb beginnt seine Uhr an dem Tag, an dem die Domain öffnet.',
 'Bleibt die Wartezeit nach dem Start. Baidu (百度) kann eine geschlossene Website nicht indexieren; seine Uhr beginnt daher an dem Tag, an dem die Domain öffnet.'),
('und durch den Schnell-Crawl (快速抓取) ersetzt, wobei die alten Kontingente zurückgenommen wurden.', 'durch den Schnell-Crawl (快速抓取) ersetzt und die alten Kontingente zurückgezogen.'),
('Vier Dinge sparen Wochen.', 'Vier Hebel sparen Wochen.'),
('und eine regulierte Branche schiebt ihre Vorabgenehmigung vor den Antrag.', 'und in regulierten Branchen geht die Vorabgenehmigung dem Antrag voraus.'),
('Und Baidus Überholspur ging 2024 an die VIP-Partner.', 'Und Baidus Überholspur ist seit 2024 den VIP-Partnern vorbehalten.'),
('Nach dieser Tabelle plant das Team in Shanghai eine neue Website, wenn die Gesellschaft bereits eingetragen ist.',
 'Mit dieser Tabelle plant das Team in Shanghai eine neue Website, sofern die Gesellschaft bereits eingetragen ist.'),
('Unsere Entwicklungspläne rechnen mit sechs Wochen', 'Unsere Entwicklungspläne veranschlagen sechs Wochen'),
('Nichts davon braucht die Registriernummer.', 'Für nichts davon ist die Registriernummer nötig.'),
('Wir planen drei bis sechs Wochen, weil die Unterlagen Zeit brauchen und Anträge zurückkommen.',
 'Wir planen drei bis sechs Wochen, weil die Unterlagen Zeit kosten und Anträge zurückkommen.'),
('Nach der Regel von Tencent Cloud muss die Website', 'Tencent Cloud schreibt vor, dass die Website'),
('während einer Erstregistrierung geschlossen oder über Domain und IP unerreichbar sein. Ihre globale Website',
 'während einer Erstregistrierung geschlossen oder über Domain und IP unerreichbar ist. Ihre globale Website'),
]
for a, b in reps:
    if s.count(a) != 1:
        sys.exit('not found once: ' + a[:80])
    s = s.replace(a, b)
open(dst, 'w', encoding='utf8', newline='\n').write(s)
print('de.p2 written,', len(reps), 'edits')
