---
title: "Google Analytics in China, ohne die Website auszubremsen"
subtitle: "GA4 ist hinter der Great Firewall gesperrt. Für den Rest der Welt können Sie es trotzdem behalten, solange die Entscheidung über das Laden auf dem Server fällt und nicht im Browser."
summary: "Wie Sie Google Analytics an der Edge nach Land filtern: GA4 läuft außerhalb Chinas weiter, und Besucher auf dem Festland schicken kein einziges Byte an Google."
visual: "/images/guides/google-analytics-china.webp"
order: 31
published: true
publishedAt: 2026-08-29
updatedAt: 2026-08-29
category: Technology
---

Google Analytics ist auf dem chinesischen Festland gesperrt. googletagmanager.com und google-analytics.com liegen beide hinter der Great Firewall. Das Tag, auf das sich Ihr Marketing verlässt, liefert über chinesische Besucher also nichts. Es kostet sie nur Zeit.

Die meisten Teams entscheiden sich falsch. Entweder sie werfen GA raus und messen nirgendwo mehr, oder sie lassen es drin und servieren ganz Shanghai eine langsamere Website, einer der häufigsten Wege, auf denen [eine WordPress-Website in China unbrauchbar wird](/de/wordpress-in-china/).

Es gibt einen dritten Weg. Fünfundzwanzig Zeilen Servercode, und er läuft auf der Seite, die Sie gerade lesen.

## Was ein gesperrtes Tag wirklich kostet

Das Standard-Snippet von gtag lädt `https://www.googletagmanager.com/gtag/js` mit `async`, blockiert also weder das Parsen noch das Rendering. Daher die verbreitete Annahme, ein gesperrtes Tag sei umsonst. Bezahlt wird unterhalb des Requests.

Die Great Firewall liefert selten einen sauberen Fehler. DNS-Anfragen an googletagmanager.com kommen vergiftet zurück: Der Browser erhält eine plausible IP-Adresse, die ins Leere führt. Er öffnet einen Socket, schickt ein SYN-Paket und wartet. Ein RST kommt nie. Der Netzwerk-Stack versucht es mit exponentiellem Backoff erneut, bis irgendwann etwas aufgibt.

| Phase | Außerhalb Chinas | Aus China |
|---|---|---|
| DNS-Auflösung | ~20 ms, korrekte IP | Vergiftete Antwort, falsche IP |
| TCP-Handshake | ~30 ms | SYN gesendet, keine Antwort, Wiederholungen |
| Script-Download | ~50 KB über die Leitung, danach im Cache | Wird nie abgeschlossen |
| Zeit bis zum Abbruch | entfällt | Von Sekunden bis über eine Minute, je nach Browser und Netzwerk-Stack |

Solange dieser Socket offen bleibt, belegt er einen Verbindungsslot, hält den Mobilfunk-Chip wach und verzögert das `load`-Event. Alles, was Sie an `load` gehängt haben, feuert zu spät. Und wenn jemand `<link rel="preconnect" href="https://www.googletagmanager.com">` ergänzt hat, um das Tag zu beschleunigen, beginnt das Hängen sogar noch früher, bevor der Parser überhaupt den Body erreicht.

Dazu kommt der Teil, den man vom Schreibtisch in Frankfurt aus nicht sieht. Ihre chinesischen Besucher erleben eine zähe Website, aus Gründen, die im Team niemand reproduzieren kann, im Monitoring wächst ein langer Schwanz langsamer Sessions aus China, und am Ende ist das Hosting schuld.

> Ein async geladenes Script, das nie ankommt, belegt trotzdem einen Socket, hält trotzdem den Funk wach und verzögert trotzdem Ihr load-Event. Async schützt das Rendering. Die Seite zahlt weiterhin.

## Warum die üblichen Auswege scheitern

Vier Lösungen werden ständig empfohlen. Alle vier brechen, und die Gründe lohnen den Umweg.

**gtag.js selbst hosten.** Sie leiten das Script über Ihre eigene Domain, der Download klappt. Dann tut das Script genau das, wofür es gebaut wurde, und schickt seine Messdaten an `google-analytics.com/g/collect`. Dieselbe Sperre, dasselbe Hängen, 200 ms später im Wasserfall.

**Die Browsersprache auswerten.** Ein chinesischer Besucher auf einer ausländischen B2B-Seite surft häufig auf Englisch, und viele Notebooks in Shanghai kommen ab Werk mit `en-US`. Sprache ist eine Einstellung. Die Pakete verlassen weiterhin Shanghai.

Die Zeitzone trifft es schon eher. `Intl.DateTimeFormat().resolvedOptions().timeZone` liefert auf Festlandrechnern recht zuverlässig `Asia/Shanghai`. Sie liefert dasselbe für eine chinesische Fachkraft, die in Singapur arbeitet, und `Europe/London` für einen britischen Entwickler in einem Büro in Shenzhen. Sie raten, und Sie liegen ausgerechnet bei den Leuten daneben, auf die es ankommt.

Ein Geo-IP-Dienst aus dem Browser heraus untergräbt sich selbst. Sie fügen einen Netzwerk-Roundtrip zu einem fremden Dienst hinzu, der aus China selbst langsam oder gesperrt sein kann, um einen Netzwerk-Roundtrip zu vermeiden. Das Budget, das Sie sparen wollten, ist damit weg.

Die eigentliche Beschränkung liegt eine Ebene höher. Eine statische Website wird einmal gebaut und auf einem CDN zwischengespeichert, jeder Besucher bekommt also Byte für Byte dasselbe HTML. Zur Buildzeit lässt sich kein Tag anhand einer Information einbauen, die erst der Request kennt.

## Die Entscheidung in einen eigenen Endpoint verlegen

Jede Seite liefert eine einzige Zeile aus, für alle identisch und vollständig cachebar:

```html
<script is:inline async src="/ga.js"></script>
```

Diese URL liegt auf Ihrer eigenen Domain, längst aufgelöst, die Verbindung steht bereits. Und `/ga.js` ist keine Datei, sondern eine Serverroute: Sie läuft bei jedem Request und liest die Header mit. In Astro genügt dafür `export const prerender = false`. Vercel wiederum setzt `x-vercel-ip-country` schon an der Edge, bevor Ihr Code startet.

Die komplette Route:

```ts
export const prerender = false;

const GA_ID = 'G-XXXXXXXXXX';
const STUB = '/* analytics not loaded */\n';

const bootstrap = (id: string) => `(function () {
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=${id}';
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', '${id}');
})();
`;

export const GET: APIRoute = ({ request }) => {
  const country = request.headers.get('x-vercel-ip-country') ?? 'CN';

  return new Response(country !== 'CN' ? bootstrap(GA_ID) : STUB, {
    headers: {
      'Content-Type': 'application/javascript; charset=utf-8',
      'Cache-Control': 'private, no-store',
    },
  });
};
```

Der Bootstrap bleibt bewusst dumm. Er erzeugt ein Script-Element mit der echten gtag-URL, hängt es in den Head, initialisiert `dataLayer`, definiert `gtag` und feuert die üblichen Aufrufe `js` und `config`. Derselbe Code, den Google Ihnen gibt, nur aus dem HTML heraus in einen Response-Body verschoben, den nur ein Teil der Besucher bekommt.

| Land des Besuchers | Antwort | Größe | Requests an Google |
|---|---|---|---|
| Alles außer CN | gtag-Bootstrap | 361 Byte | Volles GA4 |
| CN oder unbekannt | `/* analytics not loaded */` | 27 Byte | Keine |

Für jemanden in Shanghai kostet der gesamte Analytics-Stack einen Same-Origin-Request mit 27 Byte Antwort. Kein vergifteter DNS-Lookup, kein hängender Socket, kein verzögertes `load`. Alle anderen bekommen GA4 wie gehabt, einen Hop später auf einer warmen Verbindung, nach unseren eigenen Messungen rund 20 ms.

## Am Cache-Header scheitert es

Hier gehen die meisten Umsetzungen dieses Musters schief, und der Fehler bleibt unsichtbar, bis er sehr sichtbar wird.

Die Antwort unterscheidet sich je Besucher, und ein CDN weiß davon nichts, solange Sie es ihm nicht sagen. Cachen Sie `/ga.js` auch nur halbwegs großzügig, dann wird die erste Antwort an einem Edge-Knoten gespeichert und danach allen ausgeliefert, die über denselben Knoten kommen. War dieser erste Besucher in Peking, ist die Messung gerade für eine ganze Region ausgefallen. Kam er aus Berlin, schieben Sie den gtag-Bootstrap jetzt aufs chinesische Festland, also genau das Problem, für das Sie das alles gebaut haben.

Der Header, den Sie brauchen, lautet `Cache-Control: private, no-store`.

Vielleicht denken Sie an `Vary: x-vercel-ip-country`. Lassen Sie es. Vary auf einem nicht standardisierten Header wird von zwischengeschalteten Caches und Firmenproxys unterschiedlich beachtet, und geschützt würden 27 Byte. Nehmen Sie die Gewissheit.

> Wer eine länderabhängige Antwort cacht, liefert irgendwann die falsche Variante an eine ganze Region aus. Die Nutzlast beträgt 27 Byte. No-store kostet Sie nichts.

## Im Zweifel abschalten

Eine Zeile leistet mehr als der ganze Rest der Datei: `request.headers.get('x-vercel-ip-country') ?? 'CN'`.

Fehlt der Header, behandelt der Code den Besucher als Chinesen. Das deckt lokale Entwicklung ab, Preview-Deployments, Requests durch Proxys, die Header entfernen, und alles, was das Edge-Netz nicht geolokalisieren konnte. GA lädt nur bei positiver Bestätigung, dass jemand woanders sitzt.

Drehen Sie die Vorgabe um, und jeder nicht identifizierbare Request bekommt das Tag. Ein guter Teil davon sind echte Menschen in Guangzhou hinter einem Firmenproxy, also genau die, die Sie schützen wollten.

## Was Sie in GA4 verlieren

Der Handel gehört offen benannt. Ihre GA4-Property enthält von nun an null Traffic aus Festlandchina, so gewollt, und daran ändert sich auch nichts mehr.

Das wiegt schwerer, als es klingt. In einem halben Jahr öffnet jemand GA4, sieht für China eine flache Linie und schließt daraus, dort gebe es keine Nachfrage. Schreiben Sie es in die Beschreibung der Property und in jeden Report, der bei der Geschäftsführung landet: Diese Daten sind die Welt minus China.

Für die andere Hälfte des Bildes wählen Sie danach, wie viel der Festlandmarkt tatsächlich für Sie zählt.

| Ansatz | Was Sie bekommen | Aufwand |
|---|---|---|
| Baidu Tongji | Vollständige Messung der Festlandbesucher, lädt in China schnell, auf chinesischen Seiten Standard | Mittel, manche Funktionen setzen Präsenz vor Ort voraus |
| Serverlogs oder Edge-Analytics | Seitenaufrufe, Referrer und Geografie ganz ohne Client-Script | Gering, dazu datensparsam |
| Zweite GA4-Property über das Measurement Protocol | Chinesische Daten in GA4, ohne Browser-Request an Google | Hoch, und die meisten Client-Dimensionen fallen weg |

Für die meisten ausländischen B2B-Seiten reicht ein schlanker Zähler an der Edge neben dem Filter. Wiegt China im Umsatz wirklich, dann setzen Sie Baidu Tongji ordentlich auf und machen es zur maßgeblichen Quelle für diesen Markt.

Nebenbei springt eine Compliance-Dividende heraus. Das PIPL regelt jede Ausfuhr personenbezogener Daten aus Festlandchina, und die Client-ID von GA samt IP-Adresse fällt darunter. Wessen Browser Google nie kontaktiert, erzeugt auch keinen grenzüberschreitenden Transfer, den man rechtfertigen müsste. Angenehm, auch wenn man es deshalb nicht baut.

## Testen, ohne nach Shanghai zu fliegen

Lokal zu testen ist mühsam, denn den Länder-Header gibt es nur in Produktion. Vercel entfernt jedes eingehende `x-vercel-ip-country` und setzt sein eigenes, per curl gegen eine deployte URL lässt sich also nichts fälschen.

Was funktioniert:

- Deployen Sie auf eine Preview-URL und rufen Sie `/ga.js` per curl von Ihrem Platz aus ab. Zurück kommen sollten der Bootstrap und ein `cache-control: private, no-store` in der Antwort.
- Bauen Sie im Preview-Branch einen temporären Query-Parameter ein (`/ga.js?force=cn`), um den Stub mit eigenen Augen zu sehen, und löschen Sie ihn vor dem Produktivgang.
- Schicken Sie die Live-URL durch einen Testdienst mit echten Knoten in Peking, Shanghai und Guangzhou. Suchen Sie im Wasserfall nach jedem Request an googletagmanager.com. Es darf keinen geben.
- Rufen Sie `/ga.js` binnen einer Minute aus zwei verschiedenen Ländern ab und vergleichen Sie die Bodies. Identische Antworten heißen, vor Ihrer Route cacht etwas, und das reparieren Sie vor allem anderen.
- Prüfen Sie außerhalb Chinas in den DevTools, ob das gtag-Script weiterhin auftaucht und GA4 Ihre Session in Echtzeit registriert. Man filtert das Tag schnell so gründlich, dass es für alle aus ist.

## Dasselbe Prinzip trägt alles andere, was Sie laden

Google Analytics ist der häufigste Fall, das Verfahren lässt sich aber übertragen. Jedes gesperrte Drittanbieter-Script lässt sich genauso filtern. Nur der Name des Headers ändert sich.

| Plattform | Ländersignal |
|---|---|
| Vercel | `x-vercel-ip-country`, standardmäßig gesetzt |
| Cloudflare | `cf-ipcountry`, oder `request.cf.country` im Worker |
| AWS CloudFront | `CloudFront-Viewer-Country`, in der Origin Request Policy zu aktivieren |
| Netlify | `x-nf-geo`, kodiertes JSON, das erst dekodiert werden muss |
| Fastly | `client.geo.country_code` in VCL oder Compute, daraus den eigenen Header setzen |

Chat-Widgets, eingebettete Karten, YouTube-Player, reCAPTCHA, gehostete Font-Stylesheets, Intercom, Hotjar. Jedes davon ist für einen Besucher in China ein hängender Socket, und jedes davon ist einen kleinen Endpoint von der Harmlosigkeit entfernt.

Halten Sie das HTML für alle gleich, damit das CDN seine Arbeit tun kann, und schieben Sie alles, was davon abhängt, wer gerade fragt, in eine Route auf Ihrer eigenen Domain, die in 20 ms antwortet.
