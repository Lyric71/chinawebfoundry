---
question: "Wie läuft die Migration der Datenbank ab?"
order: 16
category: "technical"
---

Der Ablauf hat vier Schritte: Export über WP-CLI oder MySQL-Dump, ein mit serialisierten Daten verträglicher URL-Austausch, verschlüsselte Übertragung per SSH oder SCP auf den chinesischen Server, dann eine Integritätsprüfung Tabelle für Tabelle. Bei umfangreichen Datenbanken wechseln wir auf inkrementelle Synchronisierung, um die Ausfallzeit auf wenige Minuten zu begrenzen.

Das eigentliche Thema ist die Zeichenkodierung. Wir prüfen UTF-8mb4 nach der Übertragung, wir setzen es nie voraus. Eine Kodierung, die entgleist, und Ihre chinesischen Zeichen lösen sich in Luft auf: Das nachträglich zu reparieren ist langwierig und mühsam. Wir machen den Test mehrfach, bevor wir endgültig umschalten.
