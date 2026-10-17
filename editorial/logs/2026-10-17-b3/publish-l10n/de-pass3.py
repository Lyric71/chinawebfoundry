import sys
src = 'editorial/logs/2026-10-17-b3/publish-l10n/de.p2.md'
dst = 'editorial/logs/2026-10-17-b3/publish-l10n/de.p3.md'
s = open(src, encoding='utf8').read()
reps = [
('summary: "Mit Gesellschaft in Festlandchina planen wir vierzehn Wochen. Gesellschaft und ICP-Registrierung laufen nacheinander und bestimmen den Termin. Der Plan im Wochentakt."',
 'summary: "Mit Gesellschaft in Festlandchina planen wir vierzehn Wochen. Gesellschaft und ICP-Registrierung bestimmen nacheinander den Termin. Der Wochenplan."'),
('Eine schlanke Unternehmenswebsite kann in acht bis zwölf Wochen online sein.', 'Eine schlanke Unternehmenswebsite kann nach acht bis zwölf Wochen online gehen.'),
('Dann die Registrierung, weil der Server die Website erst ausliefert, wenn sie genehmigt ist.', 'Danach die Registrierung: Erst wenn sie genehmigt ist, liefert der Server die Website aus.'),
('und diese Liste entscheidet darüber, wie das Theme gebaut wird.', 'und diese Liste bestimmt, wie das Theme gebaut wird.'),
('und kann erst anfangen, wenn die Ausgangstexte freigegeben sind.', 'und kann erst beginnen, wenn die Ausgangstexte freigegeben sind.'),
('Der Preis ist die Geschwindigkeit, denn jede Anfrage überquert dann die Great Firewall von außen.',
 'Den Preis zahlt man bei der Geschwindigkeit: Jede Anfrage muss dann die Great Firewall von außen überwinden.'),
('Die Wochen gehen', 'Die Wochen gehen'),
('Was einen Antrag zurückwirft, ist meist eine Kleinigkeit.', 'Zurückgeworfen wird ein Antrag meist wegen einer Kleinigkeit.'),
('Dann kommt das Warten', 'Dann kommt das Warten'),
('Wir planen zwei bis vier Wochen, bis die ersten Seiten erscheinen.', 'Wir rechnen mit zwei bis vier Wochen, bis die ersten Seiten erscheinen.'),
('Ja, und das sollten Sie auch.', 'Ja, und genau das empfehlen wir.'),
('Ihre globale Website unter eigener Domain kann online bleiben,', 'Ihre globale Website kann unter ihrer eigenen Domain online bleiben,'),
]
done = 0
for a, b in reps:
    if a == b:
        continue
    if s.count(a) != 1:
        sys.exit('not found once: ' + a[:80])
    s = s.replace(a, b)
    done += 1
open(dst, 'w', encoding='utf8', newline='\n').write(s)
print('de.p3 written,', done, 'edits')
