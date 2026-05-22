---
question: "Wie handhabt man SSL bei einem chinesischen WordPress-Hosting?"
order: 22
category: "technical"
---

Technisch unterscheidet es sich in nichts vom Hosting anderswo. Die chinesische Besonderheit liegt in der Wahl der Zertifizierungsstelle. Nicht jeder Aussteller wird von den lokalen Browsern anerkannt, allen voran QQ Browser und UC Browser. Eine falsche CA, und Ihre Besucher stoßen auf eine Sicherheitswarnung, noch bevor sie auf Ihrer Startseite ankommen.

Wir arbeiten mit DigiCert, GlobalSign oder TrustAsia über Alibaba Cloud. Durchgängiges HTTPS, aktivierte HSTS-Header, erzwungene HTTP-Weiterleitung, automatisierte Verlängerung. Die Falle ist die Wahl des Ausstellers. Ohne Praxis im chinesischen Umfeld tappt man hinein.
