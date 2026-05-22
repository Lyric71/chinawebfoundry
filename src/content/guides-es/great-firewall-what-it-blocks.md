---
title: "El Gran Cortafuegos: qué bloquea y cómo convivir con él"
subtitle: "Si su sitio carga tipografías de Google Fonts, dispara una etiqueta de Google Analytics o incrusta un vídeo de YouTube, ya está inservible para 900 millones de internautas chinos."
summary: "El Gran Cortafuegos chino bloquea Google, Facebook, Slack y decenas de servicios más. Mecanismos técnicos y soluciones para las empresas extranjeras."
visual: "/images/guides/great-firewall-what-it-blocks.webp"
order: 7
published: true
publishedAt: 2026-04-01
updatedAt: 2026-05-02
category: Technology
---

El Gran Cortafuegos funciona de un modo distinto al que la mayoría imagina. Es un dispositivo de varias capas que envenena las consultas DNS, corta rangos enteros de direcciones IP, lee en tiempo real el contenido de sus paquetes y rastrea de forma activa las conexiones VPN. Para las empresas extranjeras, la consecuencia es brutal: un sitio que arrastra una sola dependencia hacia un servicio bloqueado, un archivo de tipografía, un script de seguimiento, un mapa, ofrece una experiencia degradada a los usuarios en China. Y, casi siempre, nadie del equipo se da cuenta.

## Cómo funciona de verdad el Gran Cortafuegos

5 dispositivos operan en paralelo. Cada uno intercepta un tipo de tráfico distinto a un nivel distinto.

| Capa | Método | Efecto |
|---|---|---|
| Envenenamiento de DNS | Devuelve direcciones IP falsas | Manda al vacío las consultas hacia los dominios bloqueados |
| Bloqueo de IP | Corta rangos de direcciones IP | Vuelve inaccesibles las IP conocidas de servicios extranjeros a nivel de red |
| Inspección profunda de paquetes | Lee el contenido de los paquetes | Interrumpe las conexiones cuyo contenido coincide con patrones marcados |
| Filtrado de URL | Filtra URL concretas | Bloquea ciertas páginas por palabra clave sin tocar el dominio entero |
| Detección de VPN | Identifica los protocolos VPN | Ralentiza o bloquea el tráfico VPN por su firma |

**El envenenamiento de DNS** es la capa más básica. Cuando un internauta en China pide un dominio bloqueado, el cortafuegos devuelve una dirección IP falsa. La consulta no expira: termina en otro lugar. El usuario se topa con un error o una página en blanco, sin entender por qué.

**El bloqueo de IP** va más allá. Rangos enteros asociados a servicios extranjeros quedan cortados a nivel de red. Sortear el envenenamiento de DNS con un resolutor alternativo no sirve de nada si la propia IP sigue fuera de alcance.

**La inspección profunda de paquetes** es la capa que lo cambia todo. El sistema ya no se limita a comprobar el destino: analiza el contenido. En cuanto un paquete encaja con un patrón marcado, la conexión se corta en pleno tránsito. Es lo que distingue al dispositivo chino de los filtrados nacionales más rudimentarios.

> La inspección profunda de paquetes analiza el contenido de su tráfico, y no solo su destino. Esta capa hace que el Gran Cortafuegos sea mucho más difícil de sortear que cualquier otro sistema existente.

**El filtrado de URL** opera a escala de página. Un dominio puede seguir accesible mientras se filtran ciertas URL que contienen palabras clave concretas. Una intervención quirúrgica a nivel de página.

**La detección de VPN** es el mecanismo más reciente. El cortafuegos reconoce los protocolos VPN por su firma y los ralentiza o los corta. Una VPN de consumo que funcionaba hace 2 años puede haberse vuelto inservible. La capacidad de detección avanza sin pausa.

## Qué está bloqueado (y por qué eso rompe su sitio)

Las empresas extranjeras centran su atención en la dimensión política del Gran Cortafuegos. Para su sitio, lo que cuenta son las dependencias técnicas.

| Categoría | Servicios bloqueados |
|---|---|
| Google (todos sus servicios) | Búsqueda, Gmail, Maps, YouTube, Analytics, Ads, Fonts |
| Redes sociales | Facebook, Instagram, WhatsApp, Messenger, Twitter/X, Reddit, Pinterest |
| Herramientas de trabajo | Dropbox, Slack, Notion, Trello |
| Entretenimiento | Netflix, Spotify, Twitch |
| Prensa | New York Times, Wall Street Journal, BBC |
| Referencia | Wikipedia (edición china) |

Google está bloqueado. Por completo. Búsqueda, Gmail, Maps, YouTube, Google Ads, Google Analytics, Google Fonts. Todo. Si su sitio carga una tipografía desde fonts.googleapis.com o dispara una etiqueta de GA, esa consulta queda en suspenso para los usuarios en China. No aparece ningún mensaje de error. La página se ralentiza, una sección no carga, y el equipo de la central no se entera porque navega desde fuera del cortafuegos.

Facebook, Instagram, WhatsApp, Messenger. Bloqueados. Twitter/X, Reddit, Pinterest. Bloqueados. La edición china de Wikipedia. Bloqueada.

Las herramientas de trabajo de las que viven las empresas occidentales: Dropbox, Slack, Notion, Trello. Bloqueadas. Cualquier integración con alguna de ellas, cualquier recurso cargado desde sus dominios, está muerto en China.

Netflix, Spotify, Twitch. Bloqueados. La mayoría de los grandes medios de prensa occidentales, entre ellos el New York Times, el Wall Street Journal y la BBC. Bloqueados.

Lo que más sorprende a las empresas ocurre más allá de los propios servicios bloqueados. Cada script, tipografía, widget o llamada a una API que recurre en segundo plano a un dominio bloqueado se rompe también. Un simple enlace a Google Fonts olvidado en el CSS puede sumar segundos al tiempo de carga de cada visitante en China. Una sola etiqueta de analítica puede congelar el renderizado de la página.

> Un simple enlace a Google Fonts olvidado en su CSS puede sumar segundos al tiempo de carga de cada usuario en China. El daño se esconde en su código, en las dependencias cuya existencia había olvidado.

## Estrategias para las empresas extranjeras

El cortafuegos no se perfora. Lo que sí se puede es construir un sitio que no necesite atravesarlo.

| Estrategia | Qué resuelve |
|---|---|
| Alojamiento continental con ICP | Velocidad, posicionamiento, cumplimiento |
| CDN chino | Almacenamiento en caché en nodos de China continental |
| Sustitución de las dependencias bloqueadas | Google Fonts por tipografías locales, GA por Baidu Tongji, Maps por Baidu Maps |
| Alojamiento en Hong Kong | Solución intermedia, sin ICP |
| Claridad sobre las VPN | Zona gris jurídica, distinción entre uso profesional y personal |

**Alojar en China continental con una licencia ICP.** La vía más directa. El sitio vive dentro del cortafuegos en lugar de pelear por cruzarlo. Las cargas más rápidas, el mejor posicionamiento en Baidu, cumplimiento total. Para quien apuesta por el mercado chino, este es el destino.

**Recurrir a un CDN chino** para almacenar el contenido en caché en nodos instalados en China continental. Aunque el servidor de origen esté fuera del país, un CDN con PoP continentales sirve las páginas a los internautas chinos sin que cada consulta tenga que atravesar el cortafuegos.

**Sustituir cada dependencia bloqueada.** El paso que más se omite. Google Fonts debe ceder su lugar a tipografías alojadas localmente. Google Maps, a Baidu Maps. Google Analytics, a Baidu Tongji. Hay que revisar a fondo cada llamada externa del sitio. Cada etiqueta de script, cada importación de tipografía, cada punto de acceso a una API. Si alguno apunta a un dominio bloqueado, sus usuarios chinos sufrirán una experiencia degradada sin que usted lo sepa.

> Google Fonts, Google Analytics, Google Maps. Hay que sustituirlos por tipografías alojadas localmente, Baidu Tongji y Baidu Maps. Cada llamada externa del sitio debe auditarse.

Después llega **el alojamiento en Hong Kong**, una solución intermedia para las empresas que aún no están listas para afrontar el trámite ICP. Sin licencia, con una latencia razonable hacia el continente y las interferencias del cortafuegos por lo general evitadas. Un compromiso asumido, viable para quien tantea el terreno.

**Las VPN** entran en una zona gris. Las VPN corporativas que conectan oficinas en China con las redes globales suelen tolerarse. Las VPN de consumo destinadas a sortear el cortafuegos son técnicamente ilegales, aunque la aplicación varía según las regiones y los años. Las empresas extranjeras instaladas en China deben tener clara esta distinción. No dé por sentado que sus equipos pueden usar libremente VPN personales para llegar a servicios bloqueados desde la oficina.
