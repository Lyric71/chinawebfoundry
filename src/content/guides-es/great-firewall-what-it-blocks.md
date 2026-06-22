---
title: "El Gran Cortafuegos: qué bloquea y cómo convivir con él"
subtitle: "Si su sitio carga tipografías de Google Fonts, ejecuta una etiqueta de Google Analytics o incrusta un vídeo de YouTube, deja de funcionar para los 900 millones de internautas que hay en China."
summary: "El Gran Cortafuegos chino bloquea Google, Facebook, Slack y decenas de servicios más. Repasamos sus mecanismos técnicos y las soluciones al alcance de las empresas extranjeras."
visual: "/images/guides/great-firewall-what-it-blocks.webp"
order: 7
published: true
publishedAt: 2026-04-01
updatedAt: 2026-05-02
category: Technology
---

El Gran Cortafuegos es más complejo de lo que parece. Funciona en varias capas a la vez. Envenena las consultas DNS y corta rangos enteros de direcciones IP. Lee el contenido de cada paquete de datos en tiempo real. Rastrea las conexiones VPN una por una. Para una empresa extranjera, el efecto es inmediato. Basta con que el sitio dependa de un servicio bloqueado (una tipografía, un script, un mapa) para que la experiencia se degrade en China. Y casi nadie del equipo se entera.

## Cómo funciona realmente el Gran Cortafuegos

Cinco mecanismos funcionan en paralelo. Cada uno intercepta un tipo de tráfico distinto, en una capa distinta de la red.

| Capa | Método | Efecto |
|---|---|---|
| Envenenamiento de DNS | Devuelve direcciones IP falsas | Las consultas a dominios bloqueados terminan en una dirección inexistente |
| Bloqueo de IP | Corta rangos de direcciones IP | Vuelve inaccesibles, a nivel de red, las IP conocidas de servicios extranjeros |
| Inspección profunda de paquetes | Lee el contenido de los paquetes | Interrumpe las conexiones cuyo contenido coincide con patrones marcados |
| Filtrado de URL | Filtra direcciones concretas | Bloquea ciertas páginas por palabra clave sin tocar el dominio entero |
| Detección de VPN | Identifica los protocolos VPN | Ralentiza o bloquea el tráfico VPN a partir de su firma |

**El envenenamiento de DNS** es la capa más básica. Un usuario en China pide un dominio bloqueado. El cortafuegos le devuelve una dirección IP falsa. La petición no expira: lo lleva a otro lugar. Ve un error o una página en blanco, sin entender por qué.

**El bloqueo de IP** va un paso más allá. Corta en la red rangos enteros de direcciones de servicios extranjeros. Cambiar de servidor DNS no sirve de nada: la IP sigue fuera de alcance.

**La inspección profunda de paquetes** es la capa decisiva. El sistema abre cada paquete y examina lo que lleva dentro. Si el contenido coincide con un patrón marcado, corta la conexión en pleno tránsito. Otros filtros nacionales se quedan en la dirección de destino; el sistema chino llega mucho más lejos.

> La inspección profunda de paquetes examina el contenido del tráfico, además de su destino. Eso convierte al Gran Cortafuegos en un sistema mucho más difícil de sortear que cualquier otro filtro nacional.

**El filtrado de URL** actúa página por página. El dominio sigue accesible, pero las direcciones que contienen ciertas palabras clave quedan bloqueadas. Es una intervención quirúrgica: bloquea la página exacta y deja el resto del sitio intacto.

**La detección de VPN** es el mecanismo más reciente. El cortafuegos reconoce los protocolos VPN por su firma y, a partir de ahí, los ralentiza o los bloquea. Una VPN doméstica que iba bien hace dos años hoy puede no servir. La detección mejora cada año.

## Qué está bloqueado y cómo afecta a su sitio

Las empresas extranjeras suelen fijarse en la dimensión política del Gran Cortafuegos. Para su sitio, lo que cuenta son las dependencias técnicas.

| Categoría | Servicios bloqueados |
|---|---|
| Google (todos sus servicios) | Búsqueda, Gmail, Maps, YouTube, Analytics, Ads, Fonts |
| Redes sociales | Facebook, Instagram, WhatsApp, Messenger, Twitter/X, Reddit, Pinterest |
| Herramientas de trabajo | Dropbox, Slack, Notion, Trello |
| Entretenimiento | Netflix, Spotify, Twitch |
| Prensa | New York Times, Wall Street Journal, BBC |
| Referencia | Wikipedia (edición china) |

Google está bloqueado por completo. No funcionan el buscador, ni Gmail, ni Maps, ni YouTube, ni Ads, ni Analytics, ni Fonts. Si su sitio carga una tipografía de fonts.googleapis.com o ejecuta una etiqueta de Analytics, esa petición se queda colgada para los usuarios de China. No aparece ningún mensaje de error. La página se ralentiza o una sección no carga. El equipo de la sede no se entera, porque navega desde fuera del cortafuegos.

La lista sigue con las redes sociales. Facebook, Instagram, WhatsApp y Messenger están bloqueados. Lo mismo vale para Twitter/X, Reddit y Pinterest. La edición china de Wikipedia tampoco se abre.

Las herramientas de trabajo occidentales corren la misma suerte. Dropbox, Slack, Notion y Trello quedan fuera de alcance. Cualquier integración con ellos deja de funcionar en China, y también los recursos que el sitio cargue desde sus dominios.

Lo mismo ocurre con el entretenimiento, como Netflix, Spotify o Twitch, y con buena parte de la gran prensa occidental: el New York Times, el Wall Street Journal o la BBC.

Lo que más sorprende llega después. Cualquier script, tipografía, widget o llamada a una API que dependa de un dominio bloqueado deja de funcionar. Un enlace a Google Fonts olvidado en la hoja de estilos añade varios segundos de carga a cada visitante chino. Una sola etiqueta de analítica puede congelar la página entera.

> Un enlace a Google Fonts olvidado en la hoja de estilos añade varios segundos de carga a cada usuario chino. El problema está en el propio código, en dependencias que el equipo ya ni recordaba.

## Estrategias para las empresas extranjeras

Nadie va a perforar el Gran Cortafuegos. Lo sensato es construir un sitio que no necesite cruzarlo.

| Estrategia | Qué resuelve |
|---|---|
| Alojamiento continental con ICP | Velocidad, posicionamiento y cumplimiento normativo |
| CDN chino | Almacenamiento en caché en nodos de China continental |
| Sustitución de las dependencias bloqueadas | Google Fonts por tipografías locales, Analytics por Baidu Tongji, Maps por Baidu Maps |
| Alojamiento en Hong Kong | Solución intermedia, sin ICP |
| Claridad sobre las VPN | Zona gris jurídica, con distinción entre uso profesional y personal |

**Alojar el sitio en China continental con una licencia ICP** es la vía más directa. El sitio vive dentro del cortafuegos y no tiene que cruzarlo. Las páginas cargan más rápido. Baidu las posiciona mejor. El cumplimiento normativo queda resuelto. Para una empresa decidida a operar en China, esta es la opción de referencia.

**Recurrir a un CDN chino** permite guardar el contenido en caché en nodos de China continental. El servidor de origen puede estar fuera del país. Un CDN con nodos en el continente entrega igualmente las páginas, sin que cada petición cruce el cortafuegos.

**Sustituir cada dependencia bloqueada** es el paso que más se olvida. Google Fonts pasa a tipografías alojadas en servidores locales, Google Maps a Baidu Maps y Google Analytics a Baidu Tongji. Hay que revisar todas las llamadas externas del sitio, una por una: cada script, cada tipografía, cada punto de acceso a una API. Si una apunta a un dominio bloqueado, los usuarios chinos sufren una mala experiencia y la empresa ni se entera.

> Google Fonts, Google Analytics y Google Maps tienen que dar paso a tipografías locales, a Baidu Tongji y a Baidu Maps. Cada llamada externa del sitio necesita una revisión.

Queda **el alojamiento en Hong Kong**. Es una solución intermedia para las empresas que aún no están listas para el registro ICP. No exige licencia. La latencia hacia el continente es razonable. Y el cortafuegos rara vez interfiere. Es un compromiso aceptable para quien todavía explora el mercado.

**Las VPN** se mueven en una zona gris. Las VPN corporativas, que conectan las oficinas en China con las redes internacionales, suelen tolerarse. Las VPN domésticas son otra cosa. Sirven para saltarse el cortafuegos y son técnicamente ilegales, aunque la persecución varía según la región y el año. Las empresas extranjeras en China deben tener clara esta diferencia. No dé por sentado que su plantilla puede usar VPN personales en la oficina para llegar a servicios bloqueados.
