---
title: "Índice de dependencias en China, octubre de 2026"
subtitle: "55 dependencias web, cada una con su prueba fechada, y resultados de nube y de línea doméstica por separado cuando las fuentes publican ambos."
summary: "Registro de 55 dependencias web en China con veredictos fechados de GreatFire y mediciones de 21YunBox, incluidas las pruebas que faltan y sus límites."
visual: "/images/guides/china-dependency-index-2026-10.webp"
order: 45
published: true
publishedAt: "2026-10-16"
updatedAt: "2026-10-24"
reviewBy: "2026-11-15"
category: "Technology"
author: "cyril-drouin"
---

Método: este índice recopila pruebas publicadas por terceros. De los cinco recursos que comparó 21YunBox, cuatro se quedaron sin respuesta en una línea fija de China Mobile (中国移动) en Pekín el 30 de agosto de 2026, y uno desde Alibaba Cloud (阿里云) en Zhangjiakou el 28 de agosto. El registro completo reúne 55 dependencias, incluidas las que nunca se han probado. Solo ese subconjunto emparejado admite un recuento de fallos.

Edición cerrada el 16 de octubre de 2026. Pruebas citadas: del 12 de marzo al 11 de octubre de 2026. Octubre es el mes de recopilación; cada fila conserva la fecha de prueba de su fuente.

| Prueba | Qué abarca el resultado | Qué no puede demostrar |
|---|---|---|
| Veredicto de URL de GreatFire | La accesibilidad de la URL HTTPS indicada en las fechas de prueba | La experiencia en una línea doméstica concreta, la latencia o una transacción completada |
| Solicitudes repetidas de 21YunBox | Solicitudes directas al recurso desde Zhangjiakou | Que la carga se complete en una conexión doméstica |
| Observaciones de 21YunBox en línea doméstica | Las solicitudes registradas durante cargas reales de sitios en Pekín | Todos los puntos de acceso que usa un mismo producto |
| Cargas de páginas de proveedores por 21YunBox | El sitio web o la página de producto del proveedor citado | El despliegue de un cliente o un widget incrustado |
| Sin probar | Ninguna prueba fechada en este registro | Un veredicto de compatibilidad, positivo o negativo |

> De los cinco recursos del estudio emparejado de 21YunBox, reCAPTCHA no recibió respuesta desde Alibaba Cloud (阿里云) cn-zhangjiakou el 28 de agosto de 2026. En la línea doméstica de China Mobile (中国移动) en Pekín, el 30 de agosto, tampoco respondieron los dos hosts de Google Fonts ni Google Tag Manager. jsDelivr respondió en ambos casos.
> Fuente: 21YunBox, 28 y 30 de agosto de 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

## Cómo se reunieron las pruebas

ChinaWebFoundry elaboró este registro a partir de GreatFire y 21YunBox. No operamos ninguna sonda en China continental. Releer sus páginas sirve para confirmar que una cita sigue en pie; no equivale a una nueva observación desde China.

GreatFire indica si una URL concreta estaba bloqueada, sufría interferencias o era accesible. Las páginas citadas no identifican ninguna región de centro de datos ni ningún operador doméstico, así que sus resultados se tratan aparte. Una conexión correcta según esa fuente no sirve para rellenar las columnas de tiempos, reservadas a puntos de medición identificados.

21YunBox no midió igual los recursos que los sitios. Las solicitudes repetidas a los recursos partieron de Alibaba Cloud (阿里云) cn-zhangjiakou y se repartieron por todo el periodo de muestreo, noche incluida. Las observaciones domésticas proceden de la conexión de banda ancha de un voluntario en Pekín, cliente de China Mobile (中国移动). Aquí Mobile es solo el nombre del operador: se trata de una línea fija doméstica, no de una prueba en red móvil.

> 21YunBox consultó cinco recursos cada diez minutos durante doce horas el 28 de agosto de 2026, con un tiempo de espera de 30 segundos. Su prueba independiente en una línea doméstica de Pekín, el 30 de agosto, abarcó 88 sitios y 264 cargas de página, con un límite de 60 segundos por carga. El número de solicitudes a cada dependencia variaba según el sitio.
> Fuente: 21YunBox, agosto de 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

La tabla distingue entre la respuesta de un recurso y la carga completa de una página. Que responda un host de verificación no dice nada de si el visitante superó la prueba. Que responda un host de vídeo no demuestra que el vídeo se reprodujera hasta el final. Esas cuestiones corresponden a las pruebas de aceptación del sitio.

Wix y AWS CloudFront solo aparecen a través de páginas de sus proveedores. En el caso de CloudFront, el destino es expresamente aws.amazon.com/cloudfront; la fuente de Pekín habla de banda ancha doméstica sin nombrar operador. La fuente de Wix se refiere al sitio web del proveedor y no da una ruta de solicitud completa que permita repetir la prueba. Ninguna de las dos observaciones mide todos los sitios de clientes de esas plataformas.

Ninguna fuente sometió todas las filas al mismo experimento. Una tasa de fallos global sumaría observaciones que no se pueden comparar; de ahí que no quepa ordenar las categorías ni calcular una media nacional.

Un valor ausente sigue ausente.

## Cómo leer el índice

Cada fila lleva un identificador estable para citarla. La columna Destino muestra el host o la ruta de URL que respalda la fuente. Si el registro solo nombra un producto, sin punto de acceso probado, figura destino sin especificar. Sin probar significa que este registro no tiene ninguna prueba fechada aprovechable; no afirma que nadie haya probado nunca el producto.

Nube designa la sonda de Alibaba Cloud (阿里云) en Zhangjiakou; doméstico, la línea fija de China Mobile (中国移动) en Pekín, salvo en la observación de la página de producto de CloudFront, cuyo operador no consta. El TTFB es el tiempo mediano hasta el primer byte de respuesta, en milisegundos. No disponible significa que el editor no publicó ninguna cifra. Sin respuestas no hay mediana.

Los recuentos domésticos de Wistia y del host de verificación de Cloudflare se calculan restando los fallos notificados del total de solicitudes. Cuentan respuestas obtenidas durante cargas de página. La fuente no publicó ninguna prueba de que un vídeo o un captcha llegaran a completarse. Conviene mantener esa distinción al citar cualquiera de las dos filas.

| Etiqueta del índice | Regla de lectura |
|---|---|
| Accesible | La fuente citada obtuvo conexión o completó la carga indicada |
| Lento | Una solicitud completada sufrió un retraso considerable en el estudio citado; no se aplica un umbral de latencia común a métodos distintos |
| Responde y se atasca | Llegó un primer byte, pero venció el plazo de carga fijado |
| Intermitente | GreatFire registra interferencias, o las observaciones disponibles varían; la nota de prueba indica cuál de los dos casos |
| Bloqueado | GreatFire registra un bloqueo, o la sonda citada no obtuvo ninguna respuesta en su muestra |
| Difiere según el punto de medición | Las observaciones emparejadas de nube y doméstica no coinciden |
| Sin probar | Ningún resultado fechado respalda un veredicto en este registro |

La etiqueta de interferencias de GreatFire se conserva en las notas de prueba. Esos resultados no aclaran si un fallo concreto se produjo en el DNS o en una fase posterior de la conexión. Del mismo modo, una fila marcada como accesible no certifica la licencia de un producto, su tratamiento de datos ni su proceso de pago.

Esta es la primera edición, así que todas las casillas de Cambio dicen referencia. Una edición posterior podrá comparar un mismo punto de acceso con el mismo método. Si aparece una prueba antigua, se amplía nuestra cobertura; eso no demuestra que la red haya mejorado este mes. Lo mismo vale cuando un editor retira una cifra o cambia la forma de clasificar las conexiones rechazadas.

## El registro completo de dependencias

El [panel en bruto](/data/china-dependency-index-2026-10.json), en inglés, contiene las mismas entradas y fechas de fuente que esta tabla. Los grupos de categorías se ordenan por tipo de fallo observado y, después, por identificador estable. Cada dato fechado se atribuye en las notas de prueba que siguen. Las entradas sin resultado fechado siguen sin probar.

El destino de cada fila marca el alcance de la prueba disponible. Un nombre de host a secas no identifica la ruta de cada recurso que se le solicita. GreatFire puede haber probado una URL raíz en HTTPS mientras una observación de navegador registraba varias rutas en el mismo host. La frase de la prueba conserva esa distinción cuando las fuentes difieren. Tenga a mano la fuente original antes de decidir, a partir de una fila, si sustituye un recurso concreto.

En una observación de página de proveedor, una carga completada se refiere solo a esa página. Por eso la fila de CloudFront pertenece a una comparación distinta de la URL de distribución de un cliente. El resultado de Wix tiene el mismo límite: describe el sitio web del proveedor observado por 21YunBox. Ninguna de las dos filas vale como veredicto para todos los sitios creados con el producto. El archivo en bruto conserva la URL de la fuente para que ese alcance siga siendo visible fuera del artículo.

Al pasar un hallazgo a otro equipo, incluya el identificador además de la fecha. El identificador no cambia aunque una edición futura modifique la redacción de la columna Función. Si un producto se traslada a otro host, mantenga la observación antigua vinculada a su destino anterior y registre el nuevo por separado. Fundir ambos historiales ocultaría justo el cambio que intenta explicar.

| Identificador | Destino | Función | Categoría | TTFB nube (ms) | Respuestas / cargas, nube | TTFB doméstico (ms) | Respuestas / cargas, doméstico | Veredicto | Fecha de la prueba | Cambio |
|---|---|---|---|---|---|---|---|---|---|---|
| host-google-analytics | www.google-analytics.com | Google Analytics | Analítica | No disponible | No disponible | No disponible | No disponible | bloqueado | 2026-07-24 | referencia |
| host-meta-pixel | connect.facebook.net | Píxel de Meta | Analítica | No disponible | No disponible | No disponible | No disponible | bloqueado | 2026-05-27 | referencia |
| host-google-tag-manager | www.googletagmanager.com | Google Tag Manager | Analítica | 118 | 72 de 72 | No disponible | 0 de 112 | difiere según el punto de medición | 2026-08-28, 2026-08-30 | referencia |
| host-hotjar | static.hotjar.com | Hotjar | Analítica | No disponible | No disponible | No disponible | 0 de 6 | intermitente | 2026-08-30, 2026-09-30 | referencia |
| host-mixpanel-script | cdn.mxpnl.com | Mixpanel | Analítica | No disponible | No disponible | No disponible | No disponible | intermitente | 2026-09-06 | referencia |
| host-plausible | plausible.io | Plausible | Analítica | No disponible | No disponible | No disponible | No disponible | intermitente | 2026-08-20 | referencia |
| host-amplitude-events | api.amplitude.com | Amplitude, eventos | Analítica | No disponible | No disponible | No disponible | No disponible | accesible | 2026-09-10 | referencia |
| host-amplitude-script | cdn.amplitude.com | Amplitude, script | Analítica | No disponible | No disponible | No disponible | No disponible | accesible | 2026-09-14 | referencia |
| host-linkedin-insight | snap.licdn.com | LinkedIn Insight Tag | Analítica | No disponible | No disponible | No disponible | No disponible | accesible | 2026-09-22 | referencia |
| host-microsoft-clarity | www.clarity.ms | Microsoft Clarity | Analítica | No disponible | No disponible | No disponible | No disponible | accesible | 2026-09-15 | referencia |
| host-mixpanel-events | api.mixpanel.com | Mixpanel | Analítica | No disponible | No disponible | No disponible | No disponible | accesible | 2026-09-19 | referencia |
| host-segment | api.segment.io | Segment | Analítica | No disponible | No disponible | No disponible | No disponible | accesible | 2026-09-15 | referencia |
| host-matomo | cdn.matomo.cloud | Matomo Cloud | Analítica | No disponible | No disponible | No disponible | No disponible | sin probar | Sin prueba fechada | referencia |
| host-google-libraries | ajax.googleapis.com | Google Hosted Libraries | Fuentes y CDN de scripts | No disponible | No disponible | No disponible | No disponible | bloqueado | 2026-08-22 | referencia |
| host-google-fonts-css | fonts.googleapis.com | Google Fonts, hojas de estilo | Fuentes y CDN de scripts | 111 | 72 de 72 | No disponible | 0 de 54 | difiere según el punto de medición | 2026-08-28, 2026-08-30 | referencia |
| host-google-fonts-files | fonts.gstatic.com | Google Fonts, archivos de fuentes | Fuentes y CDN de scripts | 102 | 72 de 72 | No disponible | 0 de 6 | difiere según el punto de medición | 2026-08-28, 2026-08-30 | referencia |
| host-adobe-fonts | use.typekit.net | Adobe Fonts | Fuentes y CDN de scripts | No disponible | No disponible | No disponible | 0 de 11 | intermitente | 2026-08-30, 2026-09-22 | referencia |
| host-jsdelivr | cdn.jsdelivr.net | jsDelivr | Fuentes y CDN de scripts | 660 | 72 de 72 | No disponible | 36 de 36 | lento | 2026-08-28, 2026-08-30 | referencia |
| host-cdnjs | cdnjs.cloudflare.com | cdnjs | Fuentes y CDN de scripts | No disponible | No disponible | No disponible | No disponible | accesible | 2026-09-27 | referencia |
| host-unpkg | unpkg.com | unpkg | Fuentes y CDN de scripts | No disponible | No disponible | No disponible | No disponible | accesible | 2026-08-14 | referencia |
| host-mailchimp | cdn-images.mailchimp.com | Mailchimp | Formularios y chat | No disponible | No disponible | No disponible | No disponible | bloqueado | 2026-09-10 | referencia |
| host-recaptcha | www.google.com/recaptcha | Google reCAPTCHA | Formularios y chat | No disponible | 0 de 72 | No disponible | 0 de 18 | bloqueado | 2026-08-28, 2026-08-30 | referencia |
| host-cloudflare-turnstile | challenges.cloudflare.com | Cloudflare Turnstile | Formularios y chat | No disponible | No disponible | No disponible | 9 de 12 | intermitente | 2026-08-30, 2026-10-11 | referencia |
| host-calendly | calendly.com | Calendly | Formularios y chat | No disponible | No disponible | No disponible | No disponible | accesible | 2026-10-03 | referencia |
| host-hcaptcha | api2.hcaptcha.com | hCaptcha | Formularios y chat | No disponible | No disponible | No disponible | No disponible | accesible | 2026-09-14 | referencia |
| host-intercom | widget.intercom.io | Intercom | Formularios y chat | No disponible | No disponible | No disponible | No disponible | accesible | 2026-09-23 | referencia |
| host-typeform | form.typeform.com | Typeform | Formularios y chat | No disponible | No disponible | No disponible | No disponible | accesible | 2026-09-30 | referencia |
| host-zendesk | static.zdassets.com | Zendesk | Formularios y chat | No disponible | No disponible | No disponible | No disponible | accesible | 2026-10-08 | referencia |
| host-crisp | Destino sin especificar | Crisp | Formularios y chat | No disponible | No disponible | No disponible | No disponible | sin probar | Sin prueba fechada | referencia |
| host-drift | js.driftt.com | Drift | Formularios y chat | No disponible | No disponible | No disponible | No disponible | sin probar | Sin prueba fechada | referencia |
| host-hubspot-script | js.hs-scripts.com | Cargador de HubSpot | Formularios y chat | No disponible | No disponible | No disponible | No disponible | sin probar | Sin prueba fechada | referencia |
| host-tawk-to | Destino sin especificar | Tawk.to | Formularios y chat | No disponible | No disponible | No disponible | No disponible | sin probar | Sin prueba fechada | referencia |
| host-disqus | disqus.com | Disqus | Contenido incrustado | No disponible | No disponible | No disponible | No disponible | bloqueado | 2026-09-13 | referencia |
| host-instagram | www.instagram.com | Instagram | Contenido incrustado | No disponible | No disponible | No disponible | No disponible | bloqueado | 2026-10-03 | referencia |
| host-soundcloud | w.soundcloud.com | SoundCloud | Contenido incrustado | No disponible | No disponible | No disponible | No disponible | bloqueado | 2026-06-24 | referencia |
| host-spotify | open.spotify.com | Spotify | Contenido incrustado | No disponible | No disponible | No disponible | No disponible | bloqueado | 2026-09-12 | referencia |
| host-x-timeline | platform.twitter.com | X, widget de cronología | Contenido incrustado | No disponible | No disponible | No disponible | No disponible | bloqueado | 2026-07-07 | referencia |
| host-wistia | fast.wistia.com | Wistia | Contenido incrustado | No disponible | No disponible | No disponible | 9 de 15 | intermitente | 2026-03-17, 2026-08-30 | referencia |
| host-loom | Destino sin especificar | Loom | Contenido incrustado | No disponible | No disponible | No disponible | No disponible | sin probar | Sin prueba fechada | referencia |
| host-mapbox-telemetry | events.mapbox.com | Mapbox, telemetría | Mapas | No disponible | No disponible | No disponible | No disponible | bloqueado | 2026-03-12 | referencia |
| host-openstreetmap | tile.openstreetmap.org | Teselas de OpenStreetMap | Mapas | No disponible | No disponible | No disponible | No disponible | bloqueado | 2026-09-07 | referencia |
| host-mapbox-api | api.mapbox.com | Mapbox, teselas y API | Mapas | No disponible | No disponible | No disponible | No disponible | accesible | 2026-08-31 | referencia |
| host-wix | wix.com | Wix | Plataformas | 532 | 0 de 3 | No disponible | No disponible | responde y se atasca | 2026-08-30 | referencia |
| host-webflow | webflow.com | Webflow | Plataformas | No disponible | No disponible | No disponible | No disponible | intermitente | 2026-08-23 | referencia |
| host-shopify | cdn.shopify.com | Shopify | Plataformas | No disponible | No disponible | No disponible | No disponible | accesible | 2026-10-08 | referencia |
| host-squarespace | www.squarespace.com | Squarespace | Plataformas | No disponible | No disponible | No disponible | No disponible | accesible | 2026-10-03 | referencia |
| host-netlify | Destino sin especificar | Netlify | Plataformas | No disponible | No disponible | No disponible | No disponible | sin probar | Sin prueba fechada | referencia |
| host-sanity | Destino sin especificar | Sanity | Plataformas | No disponible | No disponible | No disponible | No disponible | sin probar | Sin prueba fechada | referencia |
| host-algolia | algolia.net | Algolia | Infraestructura | No disponible | No disponible | No disponible | No disponible | intermitente | 2026-08-31 | referencia |
| host-firebase | firebase.google.com | Firebase | Infraestructura | No disponible | No disponible | No disponible | No disponible | intermitente | 2026-09-14 | referencia |
| host-sentry | browser.sentry-cdn.com | Sentry | Infraestructura | No disponible | No disponible | No disponible | No disponible | intermitente | 2026-10-01 | referencia |
| host-aws-cloudfront | aws.amazon.com/cloudfront | AWS CloudFront | Infraestructura | 665 | 3 de 3 | 718 | 3 de 3 | accesible | 2026-08-28, 2026-08-30 | referencia |
| host-bootstrap-cdn | Destino sin especificar | Bootstrap CDN | Infraestructura | No disponible | No disponible | No disponible | No disponible | sin probar | Sin prueba fechada | referencia |
| host-paypal | www.paypal.com | PayPal | Pagos | No disponible | No disponible | No disponible | No disponible | accesible | 2026-09-25 | referencia |
| host-stripe | js.stripe.com | Stripe | Pagos | No disponible | No disponible | No disponible | No disponible | sin probar | Sin prueba fechada | referencia |

### Las pruebas de cada fila

**host-google-analytics (Google Analytics).**
> Para GreatFire, www.google-analytics.com estaba bloqueado en su última prueba, el 24 de julio de 2026; la única prueba concluyente registró interferencias.
> Fuente: GreatFire, 24 de julio de 2026. https://en.greatfire.org/https/www.google-analytics.com

**host-meta-pixel (Píxel de Meta).**
> Para GreatFire, connect.facebook.net estaba bloqueado en su última prueba, el 27 de mayo de 2026; el veredicto tiene más de 90 días y no lo respalda ningún recuento reciente.
> Fuente: GreatFire, 27 de mayo de 2026. https://en.greatfire.org/https/connect.facebook.net

**host-google-tag-manager (Google Tag Manager).**
> Desde Alibaba Cloud cn-zhangjiakou, el 28 de agosto de 2026, obtuvieron respuesta las 72 solicitudes directas de 21YunBox a www.googletagmanager.com, con una mediana de 118 ms hasta el primer byte. En la línea fija de China Mobile en Pekín, el 30 de agosto, ninguna de las 112 solicitudes obtuvo respuesta.
> Fuente: 21YunBox, 28 y 30 de agosto de 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

**host-hotjar (Hotjar).**
> Para GreatFire, static.hotjar.com sufría interferencias en su última prueba, el 30 de septiembre de 2026; una de las 2 pruebas concluyentes registró interferencias.
> Fuente: GreatFire, 30 de septiembre de 2026. https://en.greatfire.org/https/static.hotjar.com

> En la línea fija de China Mobile en Pekín, el 30 de agosto de 2026, 21YunBox no obtuvo respuesta a ninguna de sus 6 solicitudes a static.hotjar.com.
> Fuente: 21YunBox, 30 de agosto de 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

**host-mixpanel-script (Mixpanel).**
> Para GreatFire, cdn.mxpnl.com sufría interferencias en su última prueba, el 6 de septiembre de 2026; la única prueba concluyente registró interferencias.
> Fuente: GreatFire, 6 de septiembre de 2026. https://en.greatfire.org/https/cdn.mxpnl.com

**host-plausible (Plausible).**
> Para GreatFire, plausible.io sufría interferencias en su última prueba, el 20 de agosto de 2026; una de las 2 pruebas concluyentes registró interferencias.
> Fuente: GreatFire, 20 de agosto de 2026. https://en.greatfire.org/https/plausible.io

**host-amplitude-events (Amplitude, eventos).**
> Para GreatFire, api.amplitude.com no estaba bloqueado en su última prueba, el 10 de septiembre de 2026; sin interferencias en la única prueba concluyente.
> Fuente: GreatFire, 10 de septiembre de 2026. https://en.greatfire.org/https/api.amplitude.com

**host-amplitude-script (Amplitude, script).**
> Para GreatFire, cdn.amplitude.com no estaba bloqueado en su última prueba, el 14 de septiembre de 2026; sin interferencias en la única prueba concluyente.
> Fuente: GreatFire, 14 de septiembre de 2026. https://en.greatfire.org/https/cdn.amplitude.com

**host-linkedin-insight (LinkedIn Insight Tag).**
> Para GreatFire, snap.licdn.com no estaba bloqueado en su última prueba, el 22 de septiembre de 2026; sin interferencias en la única prueba concluyente.
> Fuente: GreatFire, 22 de septiembre de 2026. https://en.greatfire.org/https/snap.licdn.com

**host-microsoft-clarity (Microsoft Clarity).**
> Para GreatFire, www.clarity.ms no estaba bloqueado en su última prueba, el 15 de septiembre de 2026; sin interferencias en la única prueba concluyente.
> Fuente: GreatFire, 15 de septiembre de 2026. https://en.greatfire.org/https/www.clarity.ms

**host-mixpanel-events (Mixpanel).**
> Para GreatFire, api.mixpanel.com no estaba bloqueado en su última prueba, el 19 de septiembre de 2026; sin interferencias en la única prueba concluyente.
> Fuente: GreatFire, 19 de septiembre de 2026. https://en.greatfire.org/https/api.mixpanel.com

**host-segment (Segment).**
> Para GreatFire, api.segment.io no estaba bloqueado en su última prueba, el 15 de septiembre de 2026; sin interferencias en la única prueba concluyente.
> Fuente: GreatFire, 15 de septiembre de 2026. https://en.greatfire.org/https/api.segment.io

**host-matomo (Matomo Cloud).**
No consta ninguna prueba fechada de terceros para esta entrada, que sigue sin probar.

**host-google-libraries (Google Hosted Libraries).**
> Para GreatFire, ajax.googleapis.com estaba bloqueado en su última prueba, el 22 de agosto de 2026; la única prueba concluyente registró interferencias.
> Fuente: GreatFire, 22 de agosto de 2026. https://en.greatfire.org/https/ajax.googleapis.com

**host-google-fonts-css (Google Fonts, hojas de estilo).**
> Desde Alibaba Cloud cn-zhangjiakou, el 28 de agosto de 2026, obtuvieron respuesta las 72 solicitudes directas de 21YunBox a fonts.googleapis.com, con una mediana de 111 ms hasta el primer byte. En la línea fija de China Mobile en Pekín, el 30 de agosto, ninguna de las 54 solicitudes obtuvo respuesta.
> Fuente: 21YunBox, 28 y 30 de agosto de 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

**host-google-fonts-files (Google Fonts, archivos de fuentes).**
> Desde Alibaba Cloud cn-zhangjiakou, el 28 de agosto de 2026, obtuvieron respuesta las 72 solicitudes directas de 21YunBox a fonts.gstatic.com, con una mediana de 102 ms hasta el primer byte. En la línea fija de China Mobile en Pekín, el 30 de agosto, ninguna de las 6 solicitudes obtuvo respuesta.
> Fuente: 21YunBox, 28 y 30 de agosto de 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

**host-adobe-fonts (Adobe Fonts).**
> Para GreatFire, use.typekit.net no estaba bloqueado en su última prueba, el 22 de septiembre de 2026; sin interferencias en la única prueba concluyente.
> Fuente: GreatFire, 22 de septiembre de 2026. https://en.greatfire.org/https/use.typekit.net

> En la línea fija de China Mobile en Pekín, el 30 de agosto de 2026, 21YunBox no obtuvo respuesta a ninguna de sus 11 solicitudes a use.typekit.net.
> Fuente: 21YunBox, 30 de agosto de 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

**host-jsdelivr (jsDelivr).**
> Desde Alibaba Cloud cn-zhangjiakou, el 28 de agosto de 2026, obtuvieron respuesta las 72 solicitudes directas de 21YunBox a cdn.jsdelivr.net, con una mediana de 660 ms hasta el primer byte. En la línea fija de China Mobile en Pekín, el 30 de agosto, respondieron las 36 solicitudes.
> Fuente: 21YunBox, 28 y 30 de agosto de 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

**host-cdnjs (cdnjs).**
> Para GreatFire, cdnjs.cloudflare.com no estaba bloqueado en su última prueba, el 27 de septiembre de 2026; sin interferencias en la única prueba concluyente.
> Fuente: GreatFire, 27 de septiembre de 2026. https://en.greatfire.org/https/cdnjs.cloudflare.com

**host-unpkg (unpkg).**
> Para GreatFire, unpkg.com no estaba bloqueado en su última prueba, el 14 de agosto de 2026; sin interferencias en la única prueba concluyente.
> Fuente: GreatFire, 14 de agosto de 2026. https://en.greatfire.org/https/unpkg.com

**host-mailchimp (Mailchimp).**
> Para GreatFire, cdn-images.mailchimp.com estaba bloqueado en su última prueba, el 10 de septiembre de 2026; la única prueba concluyente registró interferencias.
> Fuente: GreatFire, 10 de septiembre de 2026. https://en.greatfire.org/https/cdn-images.mailchimp.com

**host-recaptcha (Google reCAPTCHA).**
> Desde Alibaba Cloud cn-zhangjiakou, el 28 de agosto de 2026, ninguna de las 72 solicitudes directas de 21YunBox a www.google.com/recaptcha recibió respuesta. En la línea fija de China Mobile en Pekín, el 30 de agosto, ninguna de las 18 solicitudes obtuvo respuesta.
> Fuente: 21YunBox, 28 y 30 de agosto de 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

**host-cloudflare-turnstile (Cloudflare Turnstile).**
> Para GreatFire, challenges.cloudflare.com no estaba bloqueado en su última prueba, el 11 de octubre de 2026; sin interferencias en ninguna de las 2 pruebas concluyentes.
> Fuente: GreatFire, 11 de octubre de 2026. https://en.greatfire.org/https/challenges.cloudflare.com/turnstile/v0/api.js

> En la línea fija de China Mobile en Pekín, el 30 de agosto de 2026, 21YunBox obtuvo respuesta a 9 de sus 12 solicitudes a challenges.cloudflare.com.
> Fuente: 21YunBox, 30 de agosto de 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

**host-calendly (Calendly).**
> Para GreatFire, calendly.com no estaba bloqueado en su última prueba, el 3 de octubre de 2026; sin interferencias en la única prueba concluyente.
> Fuente: GreatFire, 3 de octubre de 2026. https://en.greatfire.org/https/calendly.com

**host-hcaptcha (hCaptcha).**
> Para GreatFire, api2.hcaptcha.com no estaba bloqueado en su última prueba, el 14 de septiembre de 2026; sin interferencias en la única prueba concluyente.
> Fuente: GreatFire, 14 de septiembre de 2026. https://en.greatfire.org/https/api2.hcaptcha.com

**host-intercom (Intercom).**
> Para GreatFire, widget.intercom.io no estaba bloqueado en su última prueba, el 23 de septiembre de 2026; sin interferencias en la única prueba concluyente.
> Fuente: GreatFire, 23 de septiembre de 2026. https://en.greatfire.org/https/widget.intercom.io

**host-typeform (Typeform).**
> Para GreatFire, form.typeform.com no estaba bloqueado en su última prueba, el 30 de septiembre de 2026; sin interferencias en la única prueba concluyente.
> Fuente: GreatFire, 30 de septiembre de 2026. https://en.greatfire.org/https/form.typeform.com

**host-zendesk (Zendesk).**
> Para GreatFire, static.zdassets.com no estaba bloqueado en su última prueba, el 8 de octubre de 2026; sin interferencias en ninguna de las 2 pruebas concluyentes.
> Fuente: GreatFire, 8 de octubre de 2026. https://en.greatfire.org/https/static.zdassets.com

**host-crisp (Crisp).**
No consta ninguna prueba fechada de terceros para esta entrada, que sigue sin probar.

**host-drift (Drift).**
No consta ninguna prueba fechada de terceros para esta entrada, que sigue sin probar.

**host-hubspot-script (Cargador de HubSpot).**
No consta ninguna prueba fechada de terceros para esta entrada, que sigue sin probar.

**host-tawk-to (Tawk.to).**
No consta ninguna prueba fechada de terceros para esta entrada, que sigue sin probar.

**host-disqus (Disqus).**
> Para GreatFire, disqus.com estaba bloqueado en su última prueba, el 13 de septiembre de 2026; las 2 pruebas concluyentes registraron interferencias.
> Fuente: GreatFire, 13 de septiembre de 2026. https://en.greatfire.org/https/disqus.com

**host-instagram (Instagram).**
> Para GreatFire, www.instagram.com estaba bloqueado en su última prueba, el 3 de octubre de 2026; las 2 pruebas concluyentes registraron interferencias.
> Fuente: GreatFire, 3 de octubre de 2026. https://en.greatfire.org/https/www.instagram.com

**host-soundcloud (SoundCloud).**
> Para GreatFire, w.soundcloud.com estaba bloqueado en su última prueba, el 24 de junio de 2026; el veredicto tiene más de 90 días y no lo respalda ningún recuento reciente.
> Fuente: GreatFire, 24 de junio de 2026. https://en.greatfire.org/https/w.soundcloud.com

**host-spotify (Spotify).**
> Para GreatFire, open.spotify.com estaba bloqueado en su última prueba, el 12 de septiembre de 2026; las 4 pruebas concluyentes registraron interferencias.
> Fuente: GreatFire, 12 de septiembre de 2026. https://en.greatfire.org/https/open.spotify.com

**host-x-timeline (X, widget de cronología).**
> Para GreatFire, platform.twitter.com estaba bloqueado en su última prueba, el 7 de julio de 2026; el veredicto tiene más de 90 días y no lo respalda ningún recuento reciente.
> Fuente: GreatFire, 7 de julio de 2026. https://en.greatfire.org/https/platform.twitter.com

**host-wistia (Wistia).**
> Para GreatFire, fast.wistia.com no estaba bloqueado en su última prueba, el 17 de marzo de 2026; el veredicto tiene más de 90 días y no lo respalda ningún recuento reciente.
> Fuente: GreatFire, 17 de marzo de 2026. https://en.greatfire.org/https/fast.wistia.com

> En la línea fija de China Mobile en Pekín, el 30 de agosto de 2026, 21YunBox obtuvo respuesta a 9 de sus 15 solicitudes a fast.wistia.com.
> Fuente: 21YunBox, 30 de agosto de 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

**host-loom (Loom).**
No consta ninguna prueba fechada de terceros para esta entrada, que sigue sin probar.

**host-mapbox-telemetry (Mapbox, telemetría).**
> Para GreatFire, events.mapbox.com estaba bloqueado en su última prueba, el 12 de marzo de 2026; el veredicto tiene más de 90 días y no lo respalda ningún recuento reciente.
> Fuente: GreatFire, 12 de marzo de 2026. https://en.greatfire.org/https/events.mapbox.com

**host-openstreetmap (Teselas de OpenStreetMap).**
> Para GreatFire, tile.openstreetmap.org estaba bloqueado en su última prueba, el 7 de septiembre de 2026; la única prueba concluyente registró interferencias.
> Fuente: GreatFire, 7 de septiembre de 2026. https://en.greatfire.org/https/tile.openstreetmap.org

**host-mapbox-api (Mapbox, teselas y API).**
> Para GreatFire, api.mapbox.com no estaba bloqueado en su última prueba, el 31 de agosto de 2026; sin interferencias en la única prueba concluyente.
> Fuente: GreatFire, 31 de agosto de 2026. https://en.greatfire.org/https/api.mapbox.com

**host-wix (Wix).**
> El 30 de agosto de 2026, desde Alibaba Cloud cn-zhangjiakou, 21YunBox cargó el sitio de Wix: el primer byte llegó con una mediana de 532 ms, pero ninguna de las 3 cargas terminó en menos de 60 segundos.
> Fuente: 21YunBox, 30 de agosto de 2026. https://www.21cloudbox.com/support/wix-china.html

**host-webflow (Webflow).**
> Para GreatFire, webflow.com sufría interferencias en su última prueba, el 23 de agosto de 2026; la única prueba concluyente registró interferencias.
> Fuente: GreatFire, 23 de agosto de 2026. https://en.greatfire.org/https/webflow.com

**host-shopify (Shopify).**
> Para GreatFire, cdn.shopify.com no estaba bloqueado en su última prueba, el 8 de octubre de 2026; sin interferencias en ninguna de las 2 pruebas concluyentes.
> Fuente: GreatFire, 8 de octubre de 2026. https://en.greatfire.org/https/cdn.shopify.com

**host-squarespace (Squarespace).**
> Para GreatFire, www.squarespace.com no estaba bloqueado en su última prueba, el 3 de octubre de 2026; sin interferencias en ninguna de las 3 pruebas concluyentes.
> Fuente: GreatFire, 3 de octubre de 2026. https://en.greatfire.org/https/www.squarespace.com

**host-netlify (Netlify).**
No consta ninguna prueba fechada de terceros para esta entrada, que sigue sin probar.

**host-sanity (Sanity).**
No consta ninguna prueba fechada de terceros para esta entrada, que sigue sin probar.

**host-algolia (Algolia).**
> Para GreatFire, algolia.net sufría interferencias en su última prueba, el 31 de agosto de 2026; las 2 pruebas concluyentes registraron interferencias.
> Fuente: GreatFire, 31 de agosto de 2026. https://en.greatfire.org/https/algolia.net

**host-firebase (Firebase).**
> Para GreatFire, firebase.google.com sufría interferencias en su última prueba, el 14 de septiembre de 2026; las 2 pruebas concluyentes registraron interferencias.
> Fuente: GreatFire, 14 de septiembre de 2026. https://en.greatfire.org/https/firebase.google.com

**host-sentry (Sentry).**
> Para GreatFire, browser.sentry-cdn.com sufría interferencias en su última prueba, el 1 de octubre de 2026; la única prueba concluyente registró interferencias.
> Fuente: GreatFire, 1 de octubre de 2026. https://en.greatfire.org/https/browser.sentry-cdn.com

**host-aws-cloudfront (AWS CloudFront).**
> 21YunBox cargó la página de producto de CloudFront 3 de 3 veces desde Alibaba Cloud cn-zhangjiakou el 28 de agosto de 2026 (mediana de 665 ms hasta el primer byte) y 3 de 3 desde una línea doméstica de Pekín el 30 de agosto (718 ms); no consta el operador.
> Fuente: 21YunBox, 28 y 30 de agosto de 2026. https://www.21cloudbox.com/support/aws-cloudfront-china.html

**host-bootstrap-cdn (Bootstrap CDN).**
No consta ninguna prueba fechada de terceros para esta entrada, que sigue sin probar.

**host-paypal (PayPal).**
> Para GreatFire, www.paypal.com no estaba bloqueado en su última prueba, el 25 de septiembre de 2026; sin interferencias en la única prueba concluyente.
> Fuente: GreatFire, 25 de septiembre de 2026. https://en.greatfire.org/https/www.paypal.com

**host-stripe (Stripe).**
No consta ninguna prueba fechada de terceros para esta entrada, que sigue sin probar.

## Qué cambia la divergencia para el responsable de un sitio

Las filas de fuentes tipográficas y del gestor de etiquetas muestran por qué un resultado en la nube debe llevar el nombre de su red. Los mismos recursos que respondieron a la sonda del centro de datos se quedaron sin respuesta en la conexión doméstica. Tomar la observación en la nube como la experiencia de un visitante llevaría, en esa muestra de Pekín, a una decisión de distribución equivocada.

En su propio sitio, empiece por la solicitud exacta. La hoja de estilos de una fuente, sus archivos y el script del gestor de etiquetas son dependencias distintas. Averigüe qué página las necesita y si una respuesta fallida impide al visitante hacer algo. Alojar usted mismo un archivo de fuente elimina esa solicitud externa, y solo esa; un formulario o un punto de recogida de analítica ajenos al problema seguirán igual.

En las filas de analítica, lea por separado el host de la biblioteca y el de recogida de datos. En Mixpanel, los resultados de GreatFire difieren entre ambos. Se probaron en fechas distintas, así que la tabla no puede reconstruir una sola sesión de usuario. Lo que sí muestra es que comprobar una única dirección deja incompleta la imagen de la integración.

Una medición debe llegar hasta la carga completa de la página, más allá del primer byte. La observación de Wix devolvió un primer byte y aun así no terminó dentro del plazo de carga de la fuente. Un panel de tiempos que se detenga en el primer byte pasaría por alto ese desenlace. Siga la solicitud hasta la acción que importa en la página.

Nuestra [guía de CDN de JavaScript en China](/es/recursos/guia-web-china/cdn-javascript-china/) explica cómo rastrear esas llamadas en una página. Para cambios en formularios o en el seguimiento, nuestro servicio de [integración técnica](/es/servicios/integracion-tecnica/) se encarga de la implementación. La [comparación entre nube y línea doméstica](/es/recursos/guia-web-china/latencia-china-puntos-de-medicion/#método-y-límites) explica el método y los límites de esos registros.

## Dónde faltan pruebas fechadas

Entre las entradas sin probar están el host del widget de Drift y el cargador HTTPS de HubSpot. El rastreador en la nube de Matomo no tiene ninguna medición fechada que sustituya al tiempo retirado de su sitio web. Sin un registro aprovechable, no hay base para calificar esas integraciones de fiables ni de bloqueadas.

El panel también mantiene Crisp, Tawk.to, Loom, Sanity, Netlify y Bootstrap CDN sin destino probado, y el script de Stripe sin veredicto. Un despliegue propio de una cuenta puede usar un host distinto del sitio web del producto. No rellene estas casillas con el tiempo de una página de inicio solo porque coincida la marca.

Algunos registros de GreatFire son antiguos. Sus fechas siguen visibles porque una conexión correcta hace meses puede servir de contexto sin zanjar la decisión de hoy. Las observaciones domésticas proceden de una sola línea de Pekín; no describen todas las provincias ni todos los operadores. Las solicitudes repetidas en una misma conexión comparten además condiciones, así que sus recuentos no deben leerse como muestras independientes de la población china.

Use el registro para detectar qué solicitud externa merece atención y compruebe después que la alternativa cumple la misma función. Conserve la URL observada y la fecha en cualquier hallazgo que pase a su equipo de desarrollo. Esa es la diferencia entre un informe de incidencia útil y una marca en una lista negra.

Un [análisis de preparación](/es/china-site-scanner/) ayuda a identificar los servicios externos presentes en una página. La lista de solicitudes que genera es un buen punto de partida para esta comparación. Trate la ausencia de un host en este registro como un hueco en las pruebas, y mantenga ese resultado separado de cualquier prueba de si un usuario puede completar un formulario, iniciar un vídeo o efectuar un pago.
