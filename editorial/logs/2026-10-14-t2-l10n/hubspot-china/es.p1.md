---
title: "HubSpot en China: qué funciona y qué no"
subtitle: "Qué piezas de HubSpot tienen una prueba fechada desde China, cuáles no tienen ninguna y cómo no perder al cliente potencial cuando una falla."
summary: "En China, los scripts de HubSpot y un sitio alojado en HubSpot plantean riesgos distintos. Lo que muestran las pruebas de GreatFire y cómo resolver cada caso."
visual: "/images/guides/hubspot-china.webp"
order: 44
published: true
publishedAt: "2026-10-14"
updatedAt: "2026-10-14"
reviewBy: "2026-10-31"
category: "Technology"
author: "cyril-drouin"
---

Una parte de HubSpot es accesible desde China continental. Lo que se ejecuta en sus propias páginas, en cambio, no tiene ninguna prueba reciente. GreatFire, que sigue la censura en China, no ha calificado como bloqueado ninguno de los servidores de HubSpot que ha probado por HTTPS. Considera accesible la aplicación de HubSpot (última prueba, 22 de septiembre de 2026) y con interferencias su servidor de API, en la única prueba concluyente que tiene (10 de septiembre de 2026). Sus páginas, sin embargo, cargan otra cosa: los scripts de seguimiento y de formularios, además de un cargador de chat. Ningún dato indica si hoy llegan a un visitante de Chengdu.

De ahí se deriva la solución. A falta de mediciones, cada página debe construirse para que el contacto no se pierda si un script de HubSpot nunca llega, y lo primero son los formularios. Un sitio alojado en el CMS de HubSpot es un problema distinto, con su propia solución: se sirve desde fuera de China continental y no puede obtener un registro ICP (ICP备案). Cada veredicto que sigue se comprobó en su fuente el 14 de octubre de 2026.

## Qué servidores de HubSpot están bloqueados en China y cuáles no se han probado

| Servidor              | Función en su sitio                       | Veredicto de GreatFire | Pruebas concluyentes      | Última prueba |
| --------------------- | ----------------------------------------- | ---------------------- | ------------------------- | ------------- |
| `app.hubspot.com`     | la aplicación en la que entra su equipo   | accesible              | 0 de 1 con interferencias | 22 sep 2026   |
| `api.hubspot.com`     | servidor de la API de HubSpot             | intermitente           | 1 de 1 con interferencias | 10 sep 2026   |
| `hs-sites.com`        | dominio del sistema, cuentas US East      | accesible              | 0 de 1 con interferencias | 2 ago 2026    |
| `js.hs-scripts.com`   | cargador del código de seguimiento        | sin probar             | ninguna por HTTPS         | n. d.         |
| `js.hs-analytics.net` | script de seguimiento                     | sin probar             | ninguna                   | n. d.         |
| `js.hs-banner.com`    | instala las cookies de HubSpot            | sin probar             | ninguna                   | n. d.         |
| `js.hsforms.net`      | dibuja los formularios incrustados        | sin probar             | ninguna                   | n. d.         |
| `api.hsforms.com`     | API de envío de formularios               | sin probar             | ninguna                   | n. d.         |
| `api.usemessages.com` | chat (chatflows)                          | sin probar             | ninguna                   | n. d.         |

> GreatFire consideró https://api.hubspot.com interferido al 100 %, con 1 de 1 pruebas concluyentes en los últimos 90 días y la última el 10 de septiembre de 2026. Consideró https://app.hubspot.com no bloqueado, con 0 de 1 y la última el 22 de septiembre de 2026, y https://hs-sites.com no bloqueado, con 0 de 1 y la última el 2 de agosto de 2026.
> Fuente: GreatFire, septiembre de 2026. https://en.greatfire.org/https/api.hubspot.com, https://en.greatfire.org/https/app.hubspot.com y https://en.greatfire.org/https/hs-sites.com

Una sola prueba concluyente por servidor es poca base, así que lea cada veredicto con su fecha. Revisamos la tabla en cuanto un veredicto supera los 90 días.

El punto ciego está en el cargador. La prueba más reciente de GreatFire sobre `js.hs-scripts.com`, del 13 de septiembre de 2026, se hizo por HTTP sin cifrar. Una página servida por HTTPS pide el script por HTTPS, y GreatFire advierte que ambos protocolos se filtran por medios distintos. Esa lectura, por tanto, no dice nada de sus visitantes. Su última lectura por HTTPS de una dirección de script de HubSpot es del 14 de julio de 2026 y supera los 90 días que damos por válido un veredicto. Por eso figura como sin probar.

Tampoco hay tiempos de carga que llenen ese vacío. 21YunBox, cuyas sondas en China continental citamos en otras páginas, no publica ninguna cifra sobre HubSpot: su página dedicada a HubSpot, revisada el 7 de octubre de 2026, trata de la residencia de los datos. Para el resto de herramientas que suele cargar un sitio de marketing, consulte nuestra [tabla de lo que bloquea el Gran Cortafuegos, servidor por servidor](/es/recursos/guia-web-china/gran-cortafuegos-china/).

## Lo que cuesta un script de seguimiento que no carga

HubSpot pide pegar su código de seguimiento justo antes de la etiqueta de cierre `</body>`. Ese código descarga un cargador desde `js.hs-scripts.com` y después el script de seguimiento desde `js.hs-analytics.net`. Un tercer archivo, servido por `js.hs-banner.com`, instala las cookies de HubSpot aunque usted no use su banner de consentimiento. (La guía de resolución de problemas de HubSpot da por hecho que los tres aparecen en el panel de red del navegador).

> Si el código de seguimiento no funciona, HubSpot advierte que los datos que dependen de él «pueden estar incompletos o no estar disponibles», que los widgets de chat «pueden no funcionar como se espera» y que «no puede recuperar los datos de seguimiento perdidos mientras el código estaba inactivo».
> Fuente: HubSpot Knowledge Base, Troubleshoot the HubSpot tracking code, 23 de julio de 2026. https://knowledge.hubspot.com/reports/how-do-i-know-if-my-hubspot-tracking-code-is-working

El código va al final de la página, después del contenido. Si no termina de cargar, el visitante ve la página igualmente. Lo que se pierde es el registro: las visitas desde China llegan incompletas o no llegan, y los informes de atribución que se basan en ellas fallan sin que su equipo pueda detectarlo desde Londres o Boston. Para medir la diferencia, instale un contador en su propio servidor junto a HubSpot y compare las sesiones procedentes de China.

El chat depende del mismo código: según la guía de instalación de HubSpot, los widgets de chat en directo no se cargan sin él. Nuestra [guía sobre Google Analytics en China](/es/recursos/guia-web-china/google-analytics-china/) trata Baidu Tongji (百度统计) y los contadores alojados en servidor propio.

## Los contactos se pierden en los formularios

Un formulario incrustado de HubSpot se construye en el navegador del visitante. El código de inserción carga `js.hsforms.net/forms/embed/v2.js` y le pide que dibuje el formulario. Si ese archivo no llega, el visitante ve un hueco en blanco donde debería estar el formulario. Copiar el archivo en su propio servidor parece la solución obvia, pero HubSpot la descarta.

> «Los formularios de HubSpot solo deben cargarse mediante el archivo JavaScript alojado por HubSpot. Copiar el código de inserción del formulario y alojarlo por cuenta propia no está admitido».
> Fuente: documentación para desarrolladores de HubSpot, HubSpot forms, última modificación el 29 de marzo de 2026. https://developers.hubspot.com/docs/cms/start-building/building-blocks/modules/forms

¿Y un formulario HTML propio, recogido por la herramienta de formularios externos de HubSpot? También depende del código de seguimiento.

> «La herramienta de formularios externos depende del código de seguimiento. HubSpot solo puede recopilar los envíos de formularios si el código de seguimiento se carga correctamente».
> Fuente: HubSpot Knowledge Base, Use non-HubSpot forms, 27 de julio de 2026. https://knowledge.hubspot.com/forms/use-non-hubspot-forms

El envío llega igualmente a la bandeja de entrada o al servidor al que apunta el formulario. HubSpot, en cambio, no se entera, y el contacto nunca entra en la cola de su equipo comercial.

Por eso conviene que el formulario sea suyo. Constrúyalo en HTML sencillo en su propio servidor y guarde ahí primero cada envío. Después, reenvíelo a HubSpot mediante su API Submit data to a form, que HubSpot presenta como alternativa a la herramienta de formularios externos. Si el reenvío falla, una tarea de reintento lo vuelve a enviar más tarde, y el contacto ya está en su base de datos. Mantenga también esa tarea en un servidor de China continental: el reenvío cruza la frontera y `api.hsforms.com` no tiene ninguna prueba registrada.

> HubSpot documenta un punto de acceso sin autenticación, https://api.hsforms.com/submissions/v3/integration/submit/{portalId}/{formGuid}, para enviar los datos de un envío a un formulario de HubSpot.
> Fuente: documentación para desarrolladores de HubSpot, Submit data to a form, última modificación el 29 de marzo de 2026. https://developers.hubspot.com/docs/api-reference/legacy/marketing/forms/v3-legacy/submit-data-unauthenticated

## Un sitio en HubSpot CMS es una cuestión de alojamiento

Cuando HubSpot aloja el propio sitio, los scripts pasan a ser la menor de las preocupaciones.

> La infraestructura de HubSpot funciona sobre Amazon Web Services en Estados Unidos (Virginia y Oregón), Canadá (Montreal), Australia (Sídney) y la Unión Europea (Alemania). No figura ningún centro de datos en China continental.
> Fuente: HubSpot Knowledge Base, Cloud Infrastructure and Data Hosting FAQ, 24 de julio de 2026. https://knowledge.hubspot.com/account-security/hubspot-cloud-infrastructure-and-data-hosting-frequently-asked-questions

Las páginas llegan a los visitantes a través de la CDN de HubSpot, que su documentación para desarrolladores describe como «impulsada por Cloudflare». Ninguna de las dos páginas que HubSpot dedica a su CDN menciona China.

Queda el registro ICP, y ahí el bloqueo es total. El registro se hace sobre un servidor situado en China continental, a través del proveedor que lo gestiona.

> Un dominio que apunta a un servidor de China continental debe completar el registro antes de que el sitio pueda abrirse al público («域名解析至中国内地服务器必须先完成网站备案，才能正常开通网站访问»).
> Fuente: centro de ayuda de Alibaba Cloud (阿里云), 4 de septiembre de 2026. https://help.aliyun.com/zh/dws/support/how-do-i-troubleshoot-the-failures-to-access-a-website-by-using-its-domain-name

HubSpot no indica ningún centro de datos en China continental, de modo que un sitio alojado en HubSpot no tiene servidor sobre el que registrarse. Hay dos salidas.

La primera es un sitio independiente para China, construido con WordPress o Astro en Alibaba Cloud o Tencent Cloud (腾讯云), registrado en China y con formularios que reenvían los datos al mismo portal de HubSpot, como se explica más arriba. Sacar de HubSpot las páginas para China es [un proyecto de migración en sí mismo](/es/servicios/migracion-china/), y es la vía que elegiríamos para un sitio que tiene que funcionar todos los días.

La segunda es un proxy inverso: una CDN de China continental, sobre un dominio registrado, delante de HubSpot. HubSpot solo acepta un proxy montado en una CDN o una red distribuida, y su equipo de soporte no lo configura por usted. Cada página que obtiene el proxy sigue saliendo de los servidores de HubSpot fuera de China y cruza la frontera por una ruta que ninguna prueba publicada cubre.

Dónde se guardan los datos de contacto es otra cuestión, que regula el PIPL. Nuestra [guía sobre las normas chinas de protección de datos](/es/recursos/guia-web-china/datos-personales-china-pipl-dsl/) la aborda.

## Preguntas frecuentes

**¿Funciona HubSpot en China?**

La aplicación de HubSpot estaba accesible en la última prueba de GreatFire, el 22 de septiembre de 2026, así que un equipo en Shanghái debería poder iniciar sesión. El servidor de API de HubSpot es menos fiable: registró interferencias en su única prueba, el 10 de septiembre de 2026. Los scripts de las páginas que ven sus visitantes no tienen ninguna prueba reciente por HTTPS.

**¿Puedo usar formularios de HubSpot en un sitio alojado en China?**

Sí, siempre que el formulario no necesite ningún script de HubSpot para existir. Constrúyalo en HTML en su servidor de China continental y guarde ahí cada envío. Después, una tarea en segundo plano lo reenvía a HubSpot mediante la API Submit data to a form y lo reintenta cuando la llamada falla.

**¿Tiene HubSpot un centro de datos en China?**

No. HubSpot indica centros de datos en Estados Unidos, Canadá, Australia y Alemania, todos en Amazon Web Services, y ninguno en China continental (24 de julio de 2026). Eso descarta el registro ICP para un sitio alojado en HubSpot. También convierte los datos de contacto de los visitantes chinos en una transferencia internacional, con obligaciones propias según el PIPL.
