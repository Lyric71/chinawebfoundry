---
title: "Google Analytics en China sin ralentizar su sitio"
subtitle: "GA4 está bloqueado detrás del Gran Cortafuegos, pero nada le obliga a renunciar a él en el resto del mundo, siempre que la decisión de cargarlo se tome en el servidor y no en el navegador."
summary: "Cómo filtrar Google Analytics por país en el edge para que GA4 siga funcionando fuera de China mientras los visitantes del continente no envían ni un byte a Google."
visual: "/images/guides/google-analytics-china.webp"
order: 31
published: true
publishedAt: 2026-08-29
updatedAt: 2026-08-29
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

Hay además un dividendo normativo. La PIPL regula cualquier salida de datos personales fuera de China continental, y el identificador de cliente de GA junto con la dirección IP entran de lleno en esa categoría. Un visitante cuyo navegador nunca contacta con Google no genera ninguna transferencia transfronteriza que haya que justificar. Se agradece, aunque no sea la razón por la que uno monta todo esto.

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

Widgets de chat, mapas incrustados, reproductores de YouTube, reCAPTCHA, hojas de estilo de fuentes alojadas, Intercom, Hotjar. Cada uno de ellos es un socket colgado para un visitante chino, y cada uno se neutraliza con un endpoint pequeño.

Mantenga el HTML idéntico para todo el mundo, de modo que el CDN pueda hacer su trabajo, y traslade cualquier cosa que dependa de quién pregunta a una ruta de su propio dominio capaz de responder en 20 ms.
