---
title: "El Gran Cortafuegos: qué bloquea y cómo sortearlo"
subtitle: "Un bloqueo salta a la vista. La dependencia que responde y luego nunca termina de cargar no la verá nadie en su equipo."
summary: "Qué servicios puede alcanzar un sitio web desde China y cuáles no, servidor por servidor, con el punto de medición y la fecha de cada prueba."
visual: "/images/guides/great-firewall-what-it-blocks.webp"
order: 7
published: true
publishedAt: 2026-04-01
updatedAt: 2026-09-25
category: Technology
---

Un bloqueo no pasa desapercibido. Alguien en la oficina lo advierte y se soluciona. El fallo que de verdad cuesta dinero es el que no hace ruido: el servidor responde, el primer byte llega en medio segundo y, a partir de ahí, la petición no termina nunca.

> Microsoft Clarity, Mixpanel, Typeform, Mailchimp, Wix y Algolia devolvieron el primer byte y, sin embargo, no completaron ninguna de las 3 cargas de página en 60 segundos (0 de 3), según las mediciones realizadas el 28 y el 30 de agosto de 2026 desde una instancia de Alibaba Cloud (阿里云) en la región cn-zhangjiakou.
> Fuente: 21YunBox, mediciones por servidor en China, agosto de 2026. https://www.21cloudbox.com/support/typeform-china.html

Alrededor de esos widgets, la página se muestra con normalidad. El widget se queda en blanco y ningún registro deja constancia del error. De ahí que un equipo que trabaja fuera de China pueda revisar el sitio cada mañana durante un año sin notar nada extraño.

Por debajo opera la maquinaria sobre la que todo el mundo escribe: DNS envenenadas, rangos de IP bloqueados, contenido de los paquetes inspeccionado en tiempo real. El cortafuegos rastrea además las firmas de las VPN, y [una instalación estándar de WordPress arrastra varias dependencias que chocan con él](/es/wordpress-en-china/). Todo eso es real. Las solicitudes de contacto que se pierden, en cambio, se explican casi siempre por una conexión abierta que nadie vigila.

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
| Google | Búsqueda, Gmail, Maps, YouTube, Analytics, Ads |
| Redes sociales | Facebook, Instagram, WhatsApp, Messenger, Twitter/X, Reddit, Pinterest |
| Herramientas de trabajo | Dropbox, Slack, Notion, Trello |
| Entretenimiento | Netflix, Spotify, Twitch |
| Prensa | New York Times, Wall Street Journal, BBC |
| Referencia | Wikipedia (edición china) |

El buscador de Google, Gmail, Maps, YouTube y Google Ads no funcionan desde una conexión en China continental. Para un sitio web, el que cuenta es Google Analytics, que figura en la tabla inferior con la fecha de su prueba, como todo lo que recoge esta página. La última prueba fallida de GreatFire sobre `www.google-analytics.com` data del 24 de julio de 2026. Cuando la etiqueta se dispara desde una página en China, la baliza de medición no llega nunca, de modo que los datos se pierden tanto si el script del contenedor se cargó como si no.

Google Fonts es la excepción, y quien opina sobre ella suele equivocarse en uno u otro sentido, así que merece un párrafo aparte.

> Desde una instancia de Alibaba Cloud (阿里云) en cn-zhangjiakou, el 28 de agosto de 2026, con una muestra cada diez minutos durante doce horas, `fonts.googleapis.com` completó 72 de 72 peticiones con una mediana de 111 ms hasta el primer byte. Desde una línea residencial de China Mobile (中国移动) en Pekín, el 30 de agosto de 2026, a lo largo de 264 cargas de página, el mismo servidor respondió a 0 de 54 peticiones.
> Fuente: 21YunBox, A Day of Third-Party Requests From Inside China, agosto de 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Frente a estos dos datos, ninguna afirmación tajante se sostiene. Google Fonts se resuelve desde los centros de datos del continente y, con frecuencia, no lo hace en las conexiones domésticas. Ahí reside todo el argumento para alojar las fuentes en el propio servidor: se elimina una variable que cambia según la red, el resolvedor y la hora. `fonts.google.com`, la interfaz de consulta, resulta inaccesible en cualquier caso.

La lista sigue con las redes sociales. Facebook, Instagram, WhatsApp y Messenger están bloqueados. Lo mismo vale para Twitter/X, Reddit y Pinterest. La edición china de Wikipedia tampoco se abre.

Las herramientas de trabajo occidentales corren la misma suerte. Dropbox, Slack, Notion y Trello quedan fuera de alcance. Cualquier integración con ellos deja de funcionar en China, y también los recursos que el sitio cargue desde sus dominios.

Lo mismo ocurre con el entretenimiento, como Netflix, Spotify o Twitch, y con buena parte de la gran prensa occidental: el New York Times, el Wall Street Journal o la BBC.

Lo que más sorprende llega después. Cualquier script, tipografía, widget o llamada a una API que dependa de un dominio bloqueado deja de funcionar. Un enlace a Google Fonts olvidado en la hoja de estilos añade varios segundos de carga a cada visitante chino. Una sola etiqueta de analítica puede congelar la página entera.

> Un enlace a Google Fonts olvidado en la hoja de estilos añade varios segundos de carga a cada usuario chino. El problema está en el propio código, en dependencias que el equipo ya ni recordaba.

## Cada dependencia registrada, con la fecha de su última prueba

Las páginas mejor posicionadas para estas consultas no aportan ningún dato que lo respalde. En todas las páginas de compatibilidad que hemos leído de Chinafy, de AppInChina y de las agencias más pequeñas no hay tabla, ni fecha de prueba, ni lugar de medición identificado, ni cifra de latencia. Las empresas especializadas en medición publican sus datos, pero las páginas que le explican qué falla no los citan. La tabla que sigue cubre ese hueco, fila por fila.

Conviene dejar claro de quién son estas cifras. Cada fila procede de GreatFire o de 21YunBox, con su fuente y su fecha. Todavía no hay ninguna nuestra. Estamos poniendo en marcha una sonda propia, en un centro de datos del continente y en una línea doméstica de Pekín. Cuando esté operativa, nuestras filas aparecerán junto a las de terceros, identificadas como propias y sin sustituirlas a escondidas.

La tabla combina dos tipos de datos que responden a preguntas distintas. Un veredicto de accesibilidad indica si es posible conectarse a un servidor. Una carga de página cronometrada mide cuánto tardó en completarse el sitio del propio proveedor desde una sonda identificada en China continental, lo que ofrece una aproximación al punto de acceso del script al que llama el navegador de su visitante, sin medirlo directamente. Cuando ambas fuentes discrepan, publicamos las dos, sin promediarlas.

La columna de veredicto recoge seis valores, y dos de ellos merecen una lectura atenta: «intermitente» y «diverge según el punto de medición». Son los casos en que un servidor parece en perfecto estado a ojos de quien lo comprobó por última vez.

| Veredicto | Qué significa |
|---|---|
| Accesible | Se conecta y la carga se completa |
| Lento | Se completa, con un coste que conviene conocer |
| Responde y se cuelga | Llega el primer byte, pero la carga no termina en 60 segundos |
| Intermitente | Interferencias en las pruebas concluyentes recientes, sin llegar a un bloqueo claro |
| Bloqueado | No hay conexión utilizable |
| Diverge según el punto de medición | Un centro de datos y una línea doméstica ofrecen respuestas opuestas sobre el mismo servidor |

<!-- BEGIN DEPENDENCY TABLE: GENERATED FROM src/data/chinaDependencies.ts, DO NOT EDIT -->

### Analítica

| Servicio | Servidor o destino probado | Veredicto | Medición | Punto de medición | Fuente y fecha |
|---|---|---|---|---|---|
| Google Analytics | `www.google-analytics.com` | Bloqueado | Solo veredicto de accesibilidad | no aplica | GreatFire, 24 de julio de 2026 |
| Google Tag Manager | `www.googletagmanager.com` | Diverge según el punto de medición | 72 de 72 (primer byte en 118 ms) y 0 de 112 | Alibaba Cloud (阿里云) cn-zhangjiakou y China Mobile (中国移动) en Pekín | 21YunBox, 28 y 30 de agosto de 2026 |
| Meta Pixel | `connect.facebook.net` | Bloqueado | Solo veredicto de accesibilidad | no aplica | GreatFire, 27 de mayo de 2026 |
| Hotjar | `static.hotjar.com` | Intermitente | 3 de 3, primer byte en 487 ms, LCP en 1.660 ms | Alibaba Cloud cn-zhangjiakou | GreatFire 18 de agosto de 2026, 21YunBox 30 de agosto de 2026 |
| Amplitude, servidor del script | `cdn.amplitude.com` | Accesible | Solo veredicto de accesibilidad | no aplica | GreatFire, 14 de septiembre de 2026 |
| Amplitude, servidor de eventos | `api.amplitude.com` | Accesible | Solo veredicto de accesibilidad | no aplica | GreatFire, 10 de septiembre de 2026 |
| Microsoft Clarity | `www.clarity.ms` | Responde y se cuelga | 0 de 3 en 60 s, primer byte en 541 ms | Alibaba Cloud cn-zhangjiakou | 21YunBox 28 de agosto de 2026, GreatFire 15 de septiembre de 2026 |
| Mixpanel | `api.mixpanel.com` | Responde y se cuelga | 0 de 3 en 60 s, primer byte en 391 ms | Alibaba Cloud cn-zhangjiakou | 21YunBox, 28 de agosto de 2026 |
| Segment | Sitio del proveedor, servidor no indicado por la fuente | Lento | 3 de 3, primer byte en 900 ms en una medición y en 1.084 ms en otra | Alibaba Cloud cn-zhangjiakou | 21YunBox, 28 y 30 de agosto de 2026 |
| Plausible | Sitio del proveedor, servidor no indicado por la fuente | Lento | 3 de 3, primer byte en 550 ms, LCP en 1.208 ms | Alibaba Cloud cn-zhangjiakou | 21YunBox, 28 de agosto de 2026 |
| Matomo cloud | Sitio del proveedor, servidor no indicado por la fuente | Lento | 3 de 3, primer byte en 516 ms, LCP en 1.532 ms | Alibaba Cloud cn-zhangjiakou | 21YunBox, 29 de agosto de 2026 |

### Formularios y chat

| Servicio | Servidor o destino probado | Veredicto | Medición | Punto de medición | Fuente y fecha |
|---|---|---|---|---|---|
| Typeform | Sitio del proveedor, servidor no indicado por la fuente | Responde y se cuelga | 0 de 3 en 60 s, primer byte en 907 ms | Alibaba Cloud cn-zhangjiakou | 21YunBox, 28 de agosto de 2026 |
| Mailchimp | `cdn-images.mailchimp.com` | Responde y se cuelga | 0 de 3 en 60 s, primer byte en 812 ms, renderizado en 2,0 s | Alibaba Cloud cn-zhangjiakou | 21YunBox 28 de agosto de 2026, GreatFire 10 de septiembre de 2026 |
| hCaptcha | `api2.hcaptcha.com` | Accesible | Solo veredicto de accesibilidad | no aplica | GreatFire, 14 de septiembre de 2026 |
| Calendly | `calendly.com` | Accesible | Solo veredicto de accesibilidad | no aplica | GreatFire, 10 de junio de 2026 |
| Intercom | `widget.intercom.io` | Accesible | Solo veredicto de accesibilidad | no aplica | GreatFire, 16 de junio de 2026 |
| Zendesk | `static.zdassets.com` | Accesible | Solo veredicto de accesibilidad | no aplica | GreatFire, 29 de abril de 2026 |
| Drift | `js.driftt.com` | Sin probar | Ninguna prueba registrada | no aplica | GreatFire nunca ha probado este servidor |
| Crisp | Sin medir | Sin probar | Ninguna prueba registrada | no aplica | Pendiente de nuestra propia sonda |
| Tawk.to | Sin medir | Sin probar | Ninguna prueba registrada | no aplica | Pendiente de nuestra propia sonda |

### Contenidos incrustados

| Servicio | Servidor o destino probado | Veredicto | Medición | Punto de medición | Fuente y fecha |
|---|---|---|---|---|---|
| Disqus | `disqus.com` | Bloqueado | 41 de 43 URL probadas bloqueadas, 2 alteradas | no aplica | GreatFire, 13 de septiembre de 2026 |
| SoundCloud | `w.soundcloud.com` | Bloqueado | Solo veredicto de accesibilidad | no aplica | GreatFire, 24 de junio de 2026 |
| Spotify | `open.spotify.com` | Bloqueado | Solo veredicto de accesibilidad | no aplica | GreatFire, 12 de septiembre de 2026 |
| Instagram | `www.instagram.com` | Bloqueado | Solo veredicto de accesibilidad | no aplica | GreatFire, 30 de agosto de 2026 |
| X, widget de la cronología | `platform.twitter.com` | Bloqueado | Solo veredicto de accesibilidad | no aplica | GreatFire, 7 de julio de 2026 |
| Wistia | `fast.wistia.com` | Accesible | Solo veredicto de accesibilidad, medición de hace seis meses | no aplica | GreatFire, 17 de marzo de 2026 |
| Loom | Sin medir | Sin probar | Ninguna prueba registrada | no aplica | Pendiente de nuestra propia sonda |

### Mapas

| Servicio | Servidor o destino probado | Veredicto | Medición | Punto de medición | Fuente y fecha |
|---|---|---|---|---|---|
| Mapbox, telemetría | `events.mapbox.com` | Bloqueado | Solo veredicto de accesibilidad, medición de hace seis meses | no aplica | GreatFire, 12 de marzo de 2026 |
| Mapbox, teselas y API | `api.mapbox.com` | Accesible | Solo veredicto de accesibilidad | no aplica | GreatFire, 31 de agosto de 2026 |
| Teselas de OpenStreetMap | `tile.openstreetmap.org` | Bloqueado | 71 URL de openstreetmap.org probadas, todas bloqueadas | no aplica | GreatFire, 7 de septiembre de 2026 |

### Plataformas

| Servicio | Servidor o destino probado | Veredicto | Medición | Punto de medición | Fuente y fecha |
|---|---|---|---|---|---|
| Wix | `wix.com` | Responde y se cuelga | 0 de 3 en 60 s, primer byte en 532 ms | Alibaba Cloud cn-zhangjiakou | 21YunBox, 30 de agosto de 2026 |
| Shopify | `shopify.com` | Lento | 3 de 3, primer byte en 575 ms, carga mediana de 3,6 s | Alibaba Cloud cn-zhangjiakou | 21YunBox, 28 de agosto de 2026 |
| Webflow | `webflow.com` | Intermitente | Interferencias en el 100 % de las pruebas concluyentes recientes (1 prueba) | no aplica | GreatFire, 23 de agosto de 2026 |
| Squarespace | `www.squarespace.com` | Accesible | Conexión normal en las 2 pruebas concluyentes recientes | no aplica | GreatFire, 12 de septiembre de 2026 |
| Netlify | Sin medir | Sin probar | Ninguna prueba registrada | no aplica | Pendiente de nuestra propia sonda |
| Sanity | Sin medir | Sin probar | Ninguna prueba registrada | no aplica | Pendiente de nuestra propia sonda |

### Infraestructura

| Servicio | Servidor o destino probado | Veredicto | Medición | Punto de medición | Fuente y fecha |
|---|---|---|---|---|---|
| Algolia | Sitio del proveedor, servidor no indicado por la fuente | Responde y se cuelga | 0 de 3 en 60 s, primer byte en 1.027 ms, renderizado en 3,4 s | Alibaba Cloud cn-zhangjiakou | 21YunBox, 28 de agosto de 2026 |
| Firebase | `firebase.google.com` | Intermitente | Interferencias en el 100 % de las 2 últimas pruebas concluyentes | no aplica | GreatFire, 14 de septiembre de 2026 |
| AWS CloudFront | Sitio del proveedor, servidor no indicado por la fuente | Diverge según el punto de medición | 3 de 3 (primer byte en 665 ms) y 0 de 3 (743 ms) | Alibaba Cloud cn-zhangjiakou y China Mobile en Pekín | 21YunBox, 28 y 30 de agosto de 2026 |
| Sentry | Sitio del proveedor, servidor no indicado por la fuente | Accesible | 3 de 3, primer byte en 252 ms | Alibaba Cloud cn-zhangjiakou | 21YunBox, 28 de agosto de 2026 |
| Bootstrap CDN | Sin medir | Sin probar | Ninguna prueba registrada | no aplica | Pendiente de nuestra propia sonda |

### Pagos

| Servicio | Servidor o destino probado | Veredicto | Medición | Punto de medición | Fuente y fecha |
|---|---|---|---|---|---|
| PayPal | `www.paypal.com` | Accesible | 9 de 27 URL probadas alteradas, todas ellas redirecciones de pago | no aplica | GreatFire, 18 de mayo de 2026 |
| Stripe | `js.stripe.com` | Sin probar | Ninguna prueba registrada. Véase la nota más abajo: la accesibilidad no es aquí la cuestión decisiva | no aplica | Pendiente de nuestra propia sonda |

<!-- END DEPENDENCY TABLE: GENERATED -->

### Pendientes de medición

Trece dependencias no tienen ningún resultado que estemos dispuestos a defender, bien porque nadie las ha medido, bien porque el único veredicto disponible tiene más de noventa días. Las recogemos en lugar de omitirlas, porque ese vacío también es información: Crisp, Tawk.to, Loom, Sanity, Netlify, Bootstrap CDN, `js.stripe.com`, el LinkedIn Insight Tag, Cloudflare Turnstile, Adobe Fonts, Font Awesome, Marketo y el script de seguimiento de HubSpot.

Drift eleva la cuenta a catorce y muestra cómo se cuela el error. Drift suele figurar como accesible, pero ese veredicto se refiere al sitio comercial. `js.driftt.com`, el servidor al que llama de verdad el navegador del visitante, no se ha probado nunca. Un veredicto sobre el nombre de servidor equivocado: así se escribe la mayor parte de lo que se publica sobre este asunto.

Las fechas importan tanto como los veredictos. Un veredicto de marzo habla de marzo. Dos filas de la tabla tienen seis meses, Wistia y el servidor de telemetría de Mapbox, y así lo indican en sus propias celdas. Wistia es un reproductor de vídeo que un equipo de marketing podría incorporar esta misma tarde fiándose de una medición tomada en primavera.

Contrastamos esta tabla con sus fuentes por última vez el 22 de septiembre de 2026, y cualquier fila que supere los noventa días se vuelve a comprobar. Si la consulta mucho después de esa fecha y alguna fila resulta determinante para su proyecto, pruebe antes usted mismo el servidor.

### Por qué Stripe queda fuera de esta tabla

Stripe es el nombre que cualquiera espera encontrar en una tabla como esta. Su caso, sin embargo, responde a otra cuestión. Que `js.stripe.com` cargue o no desde Shanghái es lo de menos, porque el obstáculo tiene que ver con las licencias.

> China continental no figura en la lista de países de Stripe en los que se puede abrir una cuenta. Hong Kong sí.
> Fuente: Stripe, Global availability, consultado el 22 de septiembre de 2026. https://stripe.com/global

Una entidad del continente no dispone de adquirencia local, llegue o no el script al navegador, así que optimizar su carga no resuelve nada. La pregunta que de verdad merece respuesta es cómo cobrar con Alipay (支付宝), WeChat Pay (微信支付) y UnionPay (银联), y [nuestra guía para gestionar una tienda WooCommerce en China](/es/recursos/guia-web-china/woocommerce-china-store-guide/) es lo más cercano que hemos publicado sobre ello.

PayPal es un caso distinto y sí figura en la tabla: sigue siendo accesible, aunque con alteraciones parciales, y las rutas afectadas son precisamente las redirecciones hacia el pago.

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
