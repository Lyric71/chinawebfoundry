# T6-06 deep-translate, ES, pass 1 (full native rewrite from scratch)

Register: El País, usted, as the live page. Source used for facts only.

## Change 1, subtitle

before: Si su sitio carga tipografías de Google Fonts, ejecuta una etiqueta de Google Analytics o incrusta un vídeo de YouTube, deja de funcionar para los 900 millones de internautas que hay en China.
after: El bloqueo es el caso sencillo. La dependencia que responde y después nunca termina de cargar es la que nadie de su equipo llegará a ver.

## Change 2, summary

before: El Gran Cortafuegos chino bloquea Google, Facebook, Slack y decenas de servicios más. Repasamos sus mecanismos técnicos y las soluciones al alcance de las empresas extranjeras.
after: Qué puede alcanzar y qué no un sitio web en China, servidor por servidor, con el punto de medición y la fecha de la prueba en cada fila.

## Change 3, updatedAt

2026-05-02 -> 2026-09-25

## Change 4, opening

Un bloqueo hace ruido. Alguien en la oficina se da cuenta y se arregla. El fallo que le cuesta dinero es el silencioso: el servidor responde, el primer byte llega en medio segundo y, después, la petición sencillamente no termina nunca.

> Microsoft Clarity, Mixpanel, Typeform, Mailchimp, Wix y Algolia devolvieron un primer byte y después completaron 0 de 3 cargas de página en 60 segundos, según las mediciones realizadas desde una instancia de Alibaba Cloud (阿里云) en cn-zhangjiakou el 28 y el 30 de agosto de 2026.
> Fuente: 21YunBox, mediciones por servidor en China, agosto de 2026. https://www.21cloudbox.com/support/typeform-china.html

La página que rodea esos widgets se muestra con normalidad. El widget se queda vacío y ningún registro anota un error. Así, un equipo que trabaja fuera de China puede revisar el sitio cada mañana durante un año sin detectar nada raro.

Por debajo funciona la maquinaria de la que todo el mundo escribe: DNS envenenadas, rangos de IP bloqueados, contenido de los paquetes leído en tiempo real. El cortafuegos también rastrea las firmas de las VPN, y [una instalación estándar de WordPress arrastra varias dependencias que chocan con él](/es/wordpress-en-china/). Todo eso es real. Pero casi nada de ello es lo que le hace perder solicitudes de contacto. De eso se encarga la conexión abierta que nadie vigila.

## Change 5, Google row and paragraphs

| Google | Búsqueda, Gmail, Maps, YouTube, Analytics, Ads |

El buscador de Google, Gmail, Maps, YouTube y Google Ads no funcionan desde una conexión en China continental. Para un sitio web, el que importa es Google Analytics, y aparece en la tabla de más abajo con su fecha de prueba, como todo lo demás en esta página. `www.google-analytics.com` falló por última vez una prueba de GreatFire el 24 de julio de 2026. Si se dispara la etiqueta desde una página en China, la baliza de medición nunca llega, así que los datos se pierden tanto si el script del contenedor se cargó como si no.

Google Fonts es la excepción, y se suele errar sobre ella en los dos sentidos, de modo que merece un párrafo aparte.

> Desde una instancia de Alibaba Cloud (阿里云) en cn-zhangjiakou, el 28 de agosto de 2026, con una muestra cada diez minutos durante doce horas, `fonts.googleapis.com` completó 72 de 72 peticiones con una mediana de 111 ms hasta el primer byte. Desde una línea residencial de China Mobile (中国移动) en Pekín, el 30 de agosto de 2026, a lo largo de 264 cargas de página, el mismo servidor respondió 0 de 54.
> Fuente: 21YunBox, A Day of Third-Party Requests From Inside China, agosto de 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Ninguna de las dos versiones tajantes resiste esta pareja de datos. Google Fonts se resuelve desde los centros de datos del continente y con frecuencia no se resuelve en las conexiones domésticas, y ese es todo el argumento para alojar las fuentes en el propio servidor: se elimina una variable que cambia según la red, el resolvedor y la hora. `fonts.google.com`, la interfaz de consulta, resulta inaccesible en cualquier caso.

## Change 6, section prose

## Todas las dependencias del conjunto de datos y la fecha de su última prueba

Las páginas que posicionan para estas preguntas no aportan ninguna prueba. En todas las páginas de compatibilidad que hemos leído en Chinafy, AppInChina y las agencias más pequeñas no hay tabla, ni fecha de prueba, ni lugar de medición identificado, ni cifra de latencia. Las empresas de medición publican sus datos. Las páginas que le dicen qué falla no los citan. La tabla siguiente es esa cita, fila por fila.

Conviene dejar claro de quién son estas cifras. Cada fila procede de GreatFire o de 21YunBox, con su fuente y su fecha. Ninguna es nuestra todavía. Estamos poniendo en marcha nuestra propia sonda, desde un centro de datos del continente y desde una línea doméstica en Pekín. Cuando funcione, nuestras filas aparecerán junto a las de terceros, identificadas como nuestras. No las sustituirán a escondidas.

La tabla reúne dos tipos de prueba que responden a preguntas distintas. Un veredicto de accesibilidad indica si es posible conectarse a un servidor. Una carga de página cronometrada indica cuánto tardó en completarse el sitio del propio proveedor desde una sonda identificada en China continental. Lo segundo sirve de aproximación al punto de acceso del script que llama el navegador de su visitante; no es ese punto de acceso. Cuando ambas fuentes discrepan, se publican las dos y no se promedian.

La columna de veredicto usa seis valores. Conviene detenerse en dos de ellos, intermitente y diverge según el punto de medición. Son los casos en los que un servidor parece sano a quien lo comprobó por última vez.

| Veredicto | Qué significa |
|---|---|
| Accesible | Conecta y se completa |
| Lento | Se completa, con un coste que conviene conocer |
| Responde y se cuelga | Llega el primer byte, pero la carga no termina en 60 segundos |
| Intermitente | Interferencias en las pruebas concluyentes recientes, sin un bloqueo limpio |
| Bloqueado | No hay conexión utilizable |
| Diverge según el punto de medición | Un centro de datos y una línea doméstica dan respuestas opuestas sobre el mismo servidor |

### Todavía sin medir

Trece dependencias no tienen ningún resultado que estemos dispuestos a defender, bien porque nadie las ha medido, bien porque el único veredicto disponible tiene más de noventa días. Las incluimos en lugar de descartarlas, porque el vacío también es información: Crisp, Tawk.to, Loom, Sanity, Netlify, Bootstrap CDN, `js.stripe.com`, el LinkedIn Insight Tag, Cloudflare Turnstile, Adobe Fonts, Font Awesome, Marketo y el script de seguimiento de HubSpot.

Drift eleva la cuenta a catorce y muestra cómo se cuela el error. Drift suele figurar como accesible, pero ese veredicto se refiere al sitio comercial. `js.driftt.com`, el servidor que realmente se ejecuta en el navegador del visitante, no se ha probado nunca. Un veredicto sobre el nombre de servidor equivocado: así se escribe la mayor parte de lo que se publica sobre este asunto.

Las fechas importan tanto como los veredictos. Un veredicto de marzo habla de marzo. Dos filas de la tabla tienen seis meses, Wistia y el servidor de telemetría de Mapbox, y así lo indican en sus propias celdas. Wistia es un reproductor de vídeo que un equipo de marketing podría añadir esta misma tarde basándose en una lectura tomada en primavera.

Contrastamos esta tabla con sus fuentes por última vez el 22 de septiembre de 2026, y toda fila que supera los noventa días se vuelve a comprobar. Si la lee mucho después de esa fecha y alguna fila es importante para su proyecto, pruebe usted mismo el servidor antes de nada.

### Por qué Stripe queda fuera de esta tabla

Stripe es el nombre que uno espera encontrar en una tabla como esta. Pertenece a otra cuestión. Que `js.stripe.com` cargue o no desde Shanghái es lo de menos, porque la limitación es de licencia.

> China continental no figura en la lista de países de Stripe en los que se puede abrir una cuenta. Hong Kong sí.
> Fuente: Stripe, Global availability, consultado el 22 de septiembre de 2026. https://stripe.com/global

Para una entidad del continente no existe adquirencia local, llegue o no el script al navegador, así que afinar su entrega no resuelve nada. La pregunta que merece respuesta es cómo cobrar con Alipay (支付宝), WeChat Pay (微信支付) y UnionPay (银联), y [nuestra guía para gestionar una tienda WooCommerce en China](/es/recursos/guia-web-china/woocommerce-china-store-guide/) es lo más cercano que hemos publicado sobre ello.

PayPal es otro caso y sí está en la tabla, porque es accesible y sufre alteraciones parciales en lugar de no estar disponible, y porque las rutas alteradas son precisamente las redirecciones del pago.

## Table strings (copy.es)

columns: Servicio | Servidor o destino probado | Veredicto | Medición | Punto de medición | Fuente y fecha
categories: Analítica | Formularios y chat | Contenido incrustado | Mapas | Plataformas | Infraestructura | Pagos
verdicts: Accesible | Lento | Responde y se cuelga | Intermitente | Bloqueado | Diverge según el punto de medición | Sin probar
hostNotes: vendorSite = Sitio del proveedor, servidor no indicado por la fuente ; notProbed = Sin sondear
sourceNotes: GreatFire nunca ha probado este servidor ; Pendiente de nuestra propia sonda
reachabilityOnly: Solo veredicto de accesibilidad
noTest: Ninguna prueba registrada
staleSuffix: , de hace seis meses
noVantage: no aplica
vantages: Alibaba Cloud (阿里云) cn-zhangjiakou / Alibaba Cloud cn-zhangjiakou ; China Mobile (中国移动) en Pekín / China Mobile en Pekín
vantageJoin: " y "
services: Amplitude, servidor del script | Amplitude, servidor de eventos | Matomo cloud | X, widget de cronología | Mapbox, telemetría | Mapbox, teselas y API | Teselas de OpenStreetMap
measured:
- google-tag-manager: 72 de 72 con el primer byte en 118 ms, y 0 de 112
- hotjar: 3 de 3 con el primer byte en 487 ms, LCP en 1.660 ms
- microsoft-clarity: 0 de 3 en 60 s, primer byte en 541 ms
- mixpanel: 0 de 3 en 60 s, primer byte en 391 ms
- segment: 3 de 3, primer byte en 900 ms en una medición y en 1.084 ms en otra
- plausible: 3 de 3, primer byte en 550 ms, LCP en 1.208 ms
- matomo: 3 de 3, primer byte en 516 ms, LCP en 1.532 ms
- typeform: 0 de 3 en 60 s, primer byte en 907 ms
- mailchimp: 0 de 3 en 60 s, primer byte en 812 ms, pintado en 2,0 s
- disqus: 41 de 43 URL probadas bloqueadas, 2 alteradas
- openstreetmap: Las 71 URL de openstreetmap.org probadas, todas bloqueadas
- wix: 0 de 3 en 60 s, primer byte en 532 ms
- shopify: 3 de 3, primer byte en 575 ms, carga mediana de 3,6 s
- webflow: Interferencias en el 100 % de la última prueba concluyente
- squarespace: 2 pruebas concluyentes recientes conectaron con normalidad
- algolia: 0 de 3 en 60 s, primer byte en 1.027 ms, pintado en 3,4 s
- firebase: Interferencias en el 100 % de las 2 últimas pruebas concluyentes
- aws-cloudfront: 3 de 3 con el primer byte en 665 ms, y 0 de 3 en 743 ms
- sentry: 3 de 3, primer byte en 252 ms
- paypal: 9 de 27 URL probadas alteradas, y las alteradas son rutas de redirección del pago
- stripe: Ninguna prueba registrada. Véase la nota inferior: la accesibilidad no es aquí la cuestión decisiva
dates: 24 de julio de 2026 ; 28 y 30 de agosto de 2026 (as the live ES guides)

Step 1 complete.
