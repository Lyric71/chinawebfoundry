# T6-06 deep-translate, ES, pass 3 (final native polish)

Changes against pass 2:
- change 4: two colons in the first two sentences; the first is now a full stop, and "se corrige" (ambiguous subject) is "se soluciona".
- change 5: "La última prueba de GreatFire que falló sobre" -> "La última prueba fallida de GreatFire sobre"; "sobre ella se yerra" was stiff and archaic for El País, now "quien opina sobre ella suele equivocarse en uno u otro sentido".
- change 6: "prueba" was doing double duty as "evidence" and "test" in the same paragraph, which a Spanish reader trips on. "no aportan prueba alguna" -> "no aportan ningún dato que lo respalde"; "dos tipos de prueba" -> "dos tipos de datos". "en Chinafy, AppInChina y" -> "de Chinafy, de AppInChina y de".
- Stripe: "el obstáculo es de licencia" -> "el obstáculo tiene que ver con las licencias".
- Kept as-is: subtitle, summary, both blockquotes, legend table, pending section, all table strings.

## Final text

subtitle: "Un bloqueo salta a la vista. La dependencia que responde y luego nunca termina de cargar no la verá nadie en su equipo."
summary: "Qué servicios puede alcanzar un sitio web desde China y cuáles no, servidor por servidor, con el punto de medición y la fecha de cada prueba."

Un bloqueo no pasa desapercibido. Alguien en la oficina lo advierte y se soluciona. El fallo que de verdad cuesta dinero es el que no hace ruido: el servidor responde, el primer byte llega en medio segundo y, a partir de ahí, la petición no termina nunca.

> Microsoft Clarity, Mixpanel, Typeform, Mailchimp, Wix y Algolia devolvieron el primer byte y, sin embargo, no completaron ninguna de las 3 cargas de página en 60 segundos (0 de 3), según las mediciones realizadas el 28 y el 30 de agosto de 2026 desde una instancia de Alibaba Cloud (阿里云) en la región cn-zhangjiakou.
> Fuente: 21YunBox, mediciones por servidor en China, agosto de 2026. https://www.21cloudbox.com/support/typeform-china.html

Alrededor de esos widgets, la página se muestra con normalidad. El widget se queda en blanco y ningún registro deja constancia del error. De ahí que un equipo que trabaja fuera de China pueda revisar el sitio cada mañana durante un año sin notar nada extraño.

Por debajo opera la maquinaria sobre la que todo el mundo escribe: DNS envenenadas, rangos de IP bloqueados, contenido de los paquetes inspeccionado en tiempo real. El cortafuegos rastrea además las firmas de las VPN, y [una instalación estándar de WordPress arrastra varias dependencias que chocan con él](/es/wordpress-en-china/). Todo eso es real. Las solicitudes de contacto que se pierden, en cambio, se explican casi siempre por una conexión abierta que nadie vigila.

| Google | Búsqueda, Gmail, Maps, YouTube, Analytics, Ads |

El buscador de Google, Gmail, Maps, YouTube y Google Ads no funcionan desde una conexión en China continental. Para un sitio web, el que cuenta es Google Analytics, que figura en la tabla inferior con la fecha de su prueba, como todo lo que recoge esta página. La última prueba fallida de GreatFire sobre `www.google-analytics.com` data del 24 de julio de 2026. Cuando la etiqueta se dispara desde una página en China, la baliza de medición no llega nunca, de modo que los datos se pierden tanto si el script del contenedor se cargó como si no.

Google Fonts es la excepción, y quien opina sobre ella suele equivocarse en uno u otro sentido, así que merece un párrafo aparte.

> Desde una instancia de Alibaba Cloud (阿里云) en cn-zhangjiakou, el 28 de agosto de 2026, con una muestra cada diez minutos durante doce horas, `fonts.googleapis.com` completó 72 de 72 peticiones con una mediana de 111 ms hasta el primer byte. Desde una línea residencial de China Mobile (中国移动) en Pekín, el 30 de agosto de 2026, a lo largo de 264 cargas de página, el mismo servidor respondió a 0 de 54 peticiones.
> Fuente: 21YunBox, A Day of Third-Party Requests From Inside China, agosto de 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Frente a estos dos datos, ninguna afirmación tajante se sostiene. Google Fonts se resuelve desde los centros de datos del continente y, con frecuencia, no lo hace en las conexiones domésticas. Ahí reside todo el argumento para alojar las fuentes en el propio servidor: se elimina una variable que cambia según la red, el resolvedor y la hora. `fonts.google.com`, la interfaz de consulta, resulta inaccesible en cualquier caso.

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

## Table strings, final

As pass 2, unchanged.

Step 3 complete. ES page state: changed passages native, El País register, usted consistent with the untouched sections, fuller sentences than the EN/FR fragments, as the house Spanish register asks.
