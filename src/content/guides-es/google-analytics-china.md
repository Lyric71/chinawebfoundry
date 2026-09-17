---
title: "Google Analytics en China sin ralentizar su sitio"
subtitle: "GA4 está bloqueado detrás del Gran Cortafuegos, pero nada le impide usarlo fuera de China si la decisión de cargarlo se toma en el servidor."
summary: "Cómo filtrar Google Analytics por país en el edge para que GA4 siga funcionando fuera de China mientras los visitantes del continente no envían ni un byte a Google."
visual: "/images/guides/google-analytics-china.webp"
order: 31
published: true
publishedAt: 2026-08-29
updatedAt: 2026-09-18
category: Technology
---

Google Analytics está bloqueado en China continental. Tanto googletagmanager.com como google-analytics.com se encuentran detrás del Gran Cortafuegos, de modo que la etiqueta en la que se apoya su equipo de marketing no aporta absolutamente nada sobre los visitantes chinos: lo único que hace es costarles tiempo.

La mayoría de los equipos resuelve mal el dilema. O retiran GA y se quedan a ciegas en todos los mercados, o lo mantienen y sirven en silencio un sitio más lento a todo Shanghái, una de las maneras más habituales de que [un sitio WordPress acabe roto en China](/es/wordpress-en-china/).

Existe una tercera vía. Son veinticinco líneas de código de servidor y están funcionando en la página que usted está leyendo ahora mismo.

## Lo que cuesta de verdad una etiqueta bloqueada

El fragmento estándar de gtag carga `https://www.googletagmanager.com/gtag/js` con el atributo `async`, así que no bloquea ni el análisis del HTML ni el renderizado. De ahí la idea, muy extendida, de que una etiqueta bloqueada sale gratis. La factura se paga por debajo de la petición.

El Gran Cortafuegos rara vez devuelve un error limpio. Las consultas DNS hacia googletagmanager.com regresan envenenadas: el navegador recibe una dirección IP verosímil que no lleva a ninguna parte. Abre un socket, envía un paquete SYN y se queda esperando. No llega ningún RST. La pila de red reintenta con retroceso exponencial hasta que algo termina por rendirse.

| Fase | Fuera de China | Desde China |
|---|---|---|
| Resolución DNS | ~20 ms, IP correcta | Respuesta envenenada, IP equivocada |
| Apretón de manos TCP | ~30 ms | SYN enviado, sin respuesta, reintentos |
| Descarga del script | ~50 KB por la red y luego en caché | Nunca se completa |
| Tiempo hasta abandonar | no aplica | De unos segundos a más de un minuto, según el navegador y la pila de red |

Mientras ese socket permanece abierto ocupa una ranura de conexión, mantiene despierta la radio del móvil y retrasa el evento `load`. Todo lo que usted haya enganchado a `load` se dispara tarde. Y si alguien añadió `<link rel="preconnect" href="https://www.googletagmanager.com">` para acelerar la etiqueta, el bloqueo empieza todavía antes, cuando el analizador ni siquiera ha llegado al body.

Queda además la parte que no se ve desde un despacho en Madrid. Sus visitantes chinos padecen un sitio pesado por motivos que nadie del equipo consigue reproducir, su monitorización acumula una larga cola de sesiones lentas procedentes de China y todo el mundo acaba culpando al alojamiento.

> Un script asíncrono que nunca se resuelve sigue ocupando un socket, sigue manteniendo la radio despierta y sigue retrasando el evento load. El atributo async protege el renderizado. La página paga la cuenta igualmente.

## Por qué fallan los apaños habituales

Hay cuatro soluciones que se recomiendan una y otra vez. Las cuatro se rompen, y conviene entender por qué.

**Alojar gtag.js en su propio dominio.** Usted pasa el script por su dominio y la descarga se completa sin problemas. Entonces el script hace exactamente aquello para lo que fue escrito y envía los impactos de medición a `google-analytics.com/g/collect`. El mismo bloqueo, la misma espera, 200 ms más adelante en la cascada.

**Detectar el idioma del navegador.** Un visitante chino en un sitio B2B extranjero navega a menudo en inglés, y muchos portátiles que se venden en Shanghái salen de fábrica configurados en `en-US`. El idioma es una preferencia del usuario. Los paquetes siguen saliendo de Shanghái.

La zona horaria afina algo más. `Intl.DateTimeFormat().resolvedOptions().timeZone` devuelve `Asia/Shanghai` con bastante fiabilidad en las máquinas del continente. También lo devuelve para un expatriado chino instalado en Singapur, y devuelve `Europe/London` para un ingeniero británico sentado en una oficina de Shenzhen. Usted está adivinando, y se equivoca justo con las personas que más importan.

Llamar a una API de geolocalización por IP desde el navegador se sabotea sola. Añade usted un viaje de ida y vuelta a un servicio externo, que además puede ser lento o estar bloqueado desde China, para ahorrarse un viaje de ida y vuelta. El presupuesto que quería recuperar se ha esfumado.

La restricción de fondo está un nivel más arriba. Un sitio estático se construye una sola vez y se almacena en la caché de un CDN, así que todos los visitantes reciben un HTML idéntico byte a byte. No hay manera de inyectar una etiqueta en tiempo de compilación a partir de un dato que solo conoce la petición.

## Llevar la decisión a un endpoint propio

Todas las páginas envían una única línea, idéntica para cualquier visitante y perfectamente cacheable:

```html
<script is:inline async src="/ga.js"></script>
```

Esa URL vive en su propio dominio, ya resuelto y con una conexión abierta. Y `/ga.js` es una ruta de servidor en lugar de un archivo, de modo que se ejecuta en cada petición y puede leer las cabeceras. En Astro basta con `export const prerender = false`. Vercel, por su parte, inyecta `x-vercel-ip-country` en el edge antes de que su código empiece a correr.

La ruta completa:

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

El bootstrap es deliberadamente tonto. Crea un elemento script que apunta a la URL real de gtag, lo añade a la cabecera del documento, inicializa `dataLayer`, define `gtag` y lanza las llamadas habituales de `js` y `config`. Es el mismo código que le entrega Google, sacado del HTML y trasladado a un cuerpo de respuesta que solo reciben algunos visitantes.

| País del visitante | Respuesta | Tamaño | Peticiones a Google |
|---|---|---|---|
| Cualquiera salvo CN | Bootstrap de gtag | 361 bytes | GA4 completo |
| CN, o país desconocido | `/* analytics not loaded */` | 27 bytes | Ninguna |

Para alguien que navega desde Shanghái, todo su sistema de analítica se reduce a una petición al mismo origen que devuelve 27 bytes. Ni DNS envenenado, ni socket colgado, ni evento `load` retrasado. Los demás conservan GA4 exactamente igual que antes, un salto más allá sobre una conexión ya caliente: unos 20 ms según nuestras propias mediciones.

## La cabecera de caché es donde esto se rompe

Aquí es donde descarrilan casi todas las implementaciones del patrón, y el fallo permanece invisible hasta que se vuelve dolorosamente visible.

La respuesta cambia según el visitante y un CDN no tiene forma de saberlo salvo que usted se lo diga. Si guarda `/ga.js` en caché con una directiva mínimamente permisiva, la primera respuesta que atraviesa un nodo del edge se queda almacenada y se repite para todos los que pasen después por ese nodo. Si aquel primer visitante venía de Pekín, la medición acaba de apagarse para toda una región. Si venía de Berlín, ahora está empujando el bootstrap de gtag hacia China continental, que es exactamente el problema que quería resolver.

La cabecera que necesita es `Cache-Control: private, no-store`.

Quizá le tiente `Vary: x-vercel-ip-country`. No lo haga. Vary sobre una cabecera no estándar se respeta de forma desigual en las cachés intermedias y en los proxies corporativos, y lo que estaría protegiendo pesa 27 bytes. Quédese con la certeza.

> Si cachea una respuesta que depende del país, tarde o temprano servirá la variante equivocada a una región entera. La carga útil son 27 bytes. El no-store no le cuesta nada.

## Cerrar por defecto

Una sola línea hace más trabajo que todo el resto del archivo: `request.headers.get('x-vercel-ip-country') ?? 'CN'`.

Cuando la cabecera no aparece, el código da por hecho que el visitante está en China. Eso cubre el desarrollo local, los despliegues de vista previa, las peticiones que atraviesan proxies que eliminan cabeceras y cualquier cosa que la red edge no haya sabido geolocalizar. GA se carga únicamente ante una confirmación positiva de que esa persona está en otro sitio.

Invierta el valor por defecto y cada petición no identificable recibirá la etiqueta. Buena parte de ellas corresponde a personas reales en Cantón detrás de un proxy corporativo, que son precisamente a quienes usted quería proteger.

## Lo que pierde dentro de GA4

Conviene asumir el intercambio con claridad. Su propiedad de GA4 ya no contiene ni un solo dato de tráfico procedente de China continental, por diseño, y eso no va a cambiar.

Pesa más de lo que parece. Dentro de seis meses alguien abrirá GA4, verá una línea plana en China y concluirá que allí no hay demanda. Escríbalo en la descripción de la propiedad y en cualquier informe que llegue a un responsable: estos datos son el mundo menos China.

Para la otra mitad del cuadro, elija en función del peso real que tenga el mercado continental en sus cuentas.

| Enfoque | Lo que le aporta | Esfuerzo |
|---|---|---|
| Baidu Tongji | Analítica completa de los visitantes del continente, carga rápida en China y es el estándar en los sitios chinos | Medio, algunas funciones exigen presencia local |
| Registros de servidor o analítica en el edge | Páginas vistas, referentes y geografía sin ningún script de cliente | Bajo, y además respeta la privacidad |
| Una segunda propiedad GA4 alimentada por Measurement Protocol | Los datos chinos dentro de GA4, sin petición del navegador a Google | Alto, y desaparecen casi todas las dimensiones de cliente |

Para la mayoría de sitios B2B extranjeros, un contador ligero en el edge junto al filtro resulta suficiente. Si China pesa de verdad en la facturación, despliegue Baidu Tongji en serio y conviértalo en la fuente de referencia para ese mercado.

## El resto de su medición arrastra el mismo problema

Quitar GA para colocar en su lugar otro script alojado fuera no resuelve nada: el problema se limita a cambiar de nombre de servidor. Los sustitutos más evidentes son también servidores extranjeros, y varios de ellos fallan de una manera bastante más escurridiza que un bloqueo limpio.

La tabla cruza dos clases de prueba que responden a preguntas distintas. GreatFire comprueba si un servidor resulta accesible. 21YunBox cronometra cargas de página reales desde una sonda instalada en el continente. Ambas fuentes se contradicen en Hotjar, y es esa contradicción lo más instructivo que ofrece la tabla.

| Herramienta | Lo que muestran las pruebas | Peticiones completadas | Fuente y fecha |
|---|---|---|---|
| Hotjar | Alterado en las sondas de GreatFire, pero se completa desde una instancia de Alibaba Cloud con el primer byte en 487 ms | 3 de 3 desde el centro de datos | GreatFire, 18 de agosto de 2026; 21YunBox, 30 de agosto de 2026 |
| Meta Pixel | `connect.facebook.net` bloqueado | ninguna | GreatFire, 27 de mayo de 2026 |
| Microsoft Clarity | Responde deprisa y luego se queda colgado. Primer byte en 541 ms y nada terminado en 60 segundos | 0 de 3 | 21YunBox, 28 de agosto de 2026 |
| Mixpanel | El mismo patrón. Primer byte en 391 ms y nada terminado en 60 segundos | 0 de 3 | 21YunBox, 28 de agosto de 2026 |
| Segment | Se completa, pero despacio. Primer byte en 900 ms en una medición y en 1.084 ms en otra | 3 de 3 | 21YunBox, 28 y 30 de agosto de 2026 |
| Plausible | Se completa. Primer byte en 550 ms y LCP en 1.208 ms | 3 de 3 | 21YunBox, 28 de agosto de 2026 |
| Matomo cloud | Se completa. Primer byte en 516 ms y LCP en 1.532 ms | 3 de 3 | 21YunBox, revisado el 29 de agosto de 2026 |

> Todos los tiempos de la tabla anterior proceden de una sonda situada en China continental, en Alibaba Cloud (阿里云) cn-zhangjiakou, con tres mediciones por herramienta y abandono a los 60 segundos, entre el 28 y el 30 de agosto de 2026.
> Fuente: 21YunBox, mediciones por herramienta en China, agosto de 2026. https://www.21cloudbox.com/support/microsoft-clarity-china.html

Un centro de datos en Zhangjiakou no es un piso en Pekín. Tome esas cifras como el mejor escenario posible y parta de la idea de que sus visitantes reciben algo peor.

Esa distancia explica por sí sola los dos veredictos sobre Hotjar. 21YunBox realizó su prueba desde un rack, mientras que las sondas de GreatFire vieron algo muy distinto, y un servidor que atiende a un centro de datos puede perfectamente desentenderse de una línea residencial. Mientras no haya medido Hotjar sobre su propio tráfico, dé por supuesto que hace las dos cosas.

Clarity y Mixpanel son las dos filas que merecen una segunda lectura. Ninguno de los dos figura en una lista de bloqueo. El 15 de septiembre de 2026 GreatFire daba `www.clarity.ms` por accesible con normalidad, y otro tanto valía para `api.mixpanel.com` en su última prueba, del 17 de abril de 2026. Aun así, ambos devolvieron el primer byte en menos de 600 ms y luego no llegaron a terminar nada en un minuto.

Un bloqueo duro termina lanzando un error que alguien advierte. Una petición colgada, en cambio, espera en silencio hasta que el navegador se rinde: sus grabaciones de sesión salen más pobres de lo que deberían y ninguna alerta se lo advierte.

### Amplitude y el fallo que conviene buscar

Amplitude carga su script desde un nombre de servidor y envía los eventos a otro. Cuando un producto se reparte así, una misma red puede tratar cada nombre de forma diferente: el script carga, los eventos no salen nunca y su panel de control aparenta la misma salud en ambos casos.

En abril de 2026 GreatFire daba `cdn.amplitude.com` por accesible y `api.amplitude.com` por bloqueado, exactamente ese patrón. Hemos vuelto a probar los dos nombres de servidor para esta actualización, el 17 de septiembre de 2026.

> `cdn.amplitude.com` no bloqueado, última prueba el 14 de septiembre de 2026, y la única prueba concluyente reciente conectó con normalidad. `api.amplitude.com` no bloqueado, última prueba el 10 de septiembre de 2026, 0 alteraciones sobre 1 prueba en los últimos 90 días. Sobre 13 URL de amplitude.com analizadas, GreatFire registra 1 bloqueada, 3 alteradas y 9 accesibles.
> Fuente: GreatFire, septiembre de 2026. https://en.greatfire.org/https/api.amplitude.com

La división de abril no se repitió en septiembre. Cada una de esas dos lecturas descansa sobre una sola prueba concluyente, lo que resulta escaso en ambas direcciones, y la dispersión que se observa en el conjunto del dominio apunta a un panorama todavía desigual.

Ahí está la lección. Cualquier veredicto que uno lea lleva una fecha, y cinco meses bastan para que deje de ser cierto. Pruebe por separado el nombre de servidor que sirve su script y aquel que recibe sus eventos, siempre desde una red del país que le interesa.

### Qué desplegar en su lugar

Baidu Tongji (百度统计) en primer lugar, si el mercado continental pesa en sus cuentas. Sus servidores están en el país, de modo que la petición no cruza ninguna frontera, y sus informes se organizan en torno al tráfico de Baidu (百度), que es justamente el que usted quiere entender. Sensors Data (神策) y GrowingIO son las opciones domésticas más pesadas.

Si no, aloje la herramienta usted mismo. Plausible y Matomo completaron todas las mediciones de la tabla y ambos se instalan en su propio servidor continental. La dependencia extranjera pasa entonces a ser una petición de primera parte y, de paso, queda resuelta la cuestión legal de la sección siguiente.

Una salvedad, ya que esta página trata sobre todo de un filtro. Un endpoint de analítica autoalojado dentro de China no necesita filtro alguno, porque no hay nada que detener. Conserve la ruta `/ga.js` para GA y para cualquier otra cosa que cargue desde un servidor extranjero, y deje que la herramienta doméstica funcione para todo el mundo.

## La PIPL se aplica incluso a los servidores que responden

Accesibilidad y legalidad son dos cuestiones distintas, y la segunda se sostiene tanto si el servidor responde como si guarda silencio.

Google Analytics envía un identificador de cliente y una dirección IP a Google. La Ley de Protección de la Información Personal de China considera ambos datos información personal, y sacarlos del continente constituye una transferencia transfronteriza.

> Cuando un responsable del tratamiento de información personal facilite información personal fuera del territorio de la República Popular China, informará a la persona del nombre y los datos de contacto del destinatario en el extranjero, de la finalidad y los métodos del tratamiento, de las categorías de información personal afectadas y de la vía por la que puede ejercer sus derechos frente a ese destinatario, y obtendrá su consentimiento separado.
> Fuente: Administración del Ciberespacio de China (中央网络安全和信息化委员会办公室), Ley de Protección de la Información Personal de la República Popular China, artículo 39. Aprobada el 20 de agosto de 2021, en vigor desde el 1 de noviembre de 2021. https://www.cac.gov.cn/2021-08/20/c_1631050028355286.htm

Consentimiento separado significa una aceptación propia para esa transferencia, y no una línea más dentro de un banner que lo cubre todo a la vez.

El argumento no se mueve aunque se mueva la red. Que un servidor bloqueado vuelva a responder el mes que viene, o que Google cambie un nombre de servidor, no altera nada: la transferencia sigue siendo una transferencia. El filtro cierra las dos cuestiones de una sola vez, porque ninguna petición sale del navegador y no queda transferencia alguna que justificar. Nuestra guía sobre [la PIPL y la Ley de Seguridad de Datos](/es/recursos/guia-web-china/datos-personales-china-pipl-dsl/) detalla los umbrales y las vías de declaración.

## Probarlo sin coger un avión a Shanghái

Las pruebas locales resultan incómodas porque la cabecera de país solo existe en producción. Vercel elimina cualquier `x-vercel-ip-country` entrante e inyecta el suyo, así que no puede falsearlo con curl contra una URL desplegada.

Lo que sí funciona:

- Despliegue en una URL de vista previa y consulte `/ga.js` con curl desde donde esté. Debe recibir el bootstrap y, en la respuesta, un `cache-control: private, no-store`.
- Añada en la rama de vista previa un parámetro temporal en la URL (`/ga.js?force=cn`) para ver el stub con sus propios ojos, y bórrelo antes de que llegue a producción.
- Pase la URL en producción por un servicio de pruebas con nodos reales en Pekín, Shanghái y Cantón. Busque en la cascada cualquier petición a googletagmanager.com. No debería haber ninguna.
- Consulte `/ga.js` desde dos países distintos con un minuto de diferencia y compare los cuerpos de respuesta. Si son idénticos, algo está cacheando por delante de su ruta, y eso se corrige antes que cualquier otra cosa.
- Desde fuera de China, confirme en las DevTools que el script de gtag sigue apareciendo y que el tiempo real de GA4 registra su sesión. Es fácil filtrar la etiqueta tan bien que uno acaba desactivándola para todo el mundo.

## El mismo truco sirve para todo lo demás que cargue

Google Analytics es el caso más frecuente, y el mecanismo se generaliza sin dificultad. Cualquier script de terceros bloqueado se filtra igual. Lo único que cambia es el nombre de la cabecera.

| Plataforma | Señal de país |
|---|---|
| Vercel | `x-vercel-ip-country`, inyectada por defecto |
| Cloudflare | `cf-ipcountry`, o `request.cf.country` dentro de un Worker |
| AWS CloudFront | `CloudFront-Viewer-Country`, hay que activarla en la origin request policy |
| Netlify | `x-nf-geo`, JSON codificado que primero hay que decodificar |
| Fastly | `client.geo.country_code` en VCL o Compute, y de ahí a su propia cabecera |

Widgets de chat, mapas incrustados, reproductores de YouTube, reCAPTCHA, hojas de estilo de fuentes alojadas. Cualquiera de ellos puede dejar un socket colgado a un visitante chino, y cualquiera de ellos se neutraliza con un endpoint pequeño. Cuáles lo hacen en su sitio solo lo dicen sus propias pruebas, en la fecha en que las realiza.

Mantenga el HTML idéntico para todo el mundo, de modo que el CDN pueda hacer su trabajo, y traslade cualquier cosa que dependa de quién pregunta a una ruta de su propio dominio capaz de responder en 20 ms.
