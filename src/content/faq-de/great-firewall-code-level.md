---
question: "Was macht die Große Firewall konkret mit dem Code einer WordPress-Website?"
order: 25
category: "technical"
---

Die Große Firewall kombiniert mehrere Techniken: DNS-Vergiftung, schwarze Listen von IP-Adressen, URL-Filterung, SNI-Inspektion und Deep Packet Inspection. Bei WordPress ist das Symptom immer dasselbe. Schon ein einziges `wp_enqueue_script` oder `wp_enqueue_style`, das eine Ressource von einer blockierten Domain holt (googleapis.com, gstatic.com, gravatar.com), legt das Rendering der gesamten Seite lahm. YouTube- oder Google-Maps-Einbindungen hinterlassen klaffende Löcher im Layout. AJAX-Aufrufe an zensierte APIs scheitern ohne Fehlermeldung.

Bei der Migration spüren wir jeden externen Aufruf auf, in den Dateien des Themes, in den Plugins, in der Tabelle wp_options. Jede Abhängigkeit wird ersetzt oder auf Ihren Server zurückgeholt. Eine einzige übersehene genügt, um Fehler zu erzeugen, die sich aus Europa heraus nicht diagnostizieren lassen.
