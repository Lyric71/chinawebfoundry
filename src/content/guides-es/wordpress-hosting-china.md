---
title: "Alojamiento WordPress en China"
subtitle: "Las tres grandes nubes chinas ofrecen una imagen de WordPress en un clic. Ninguna ofrece WordPress gestionado, y en esa distancia es donde encallan los proyectos extranjeros."
summary: "Cómo alojar WordPress en China continental: Alibaba, Tencent, Huawei, Vercel y Cloudflare frente a la norma del registro ICP, con cifras propias."
visual: "/images/guides/wordpress-hosting-china.webp"
order: 32
published: true
publishedAt: 2026-08-29
updatedAt: 2026-10-02
reviewBy: 2026-12-29
category: Hosting
---

Un servidor situado en China continental no mostrará su sitio WordPress a nadie hasta que se resuelva su registro ICP (ICP备案). En todos nuestros proyectos, los puertos 80 y 443 de la dirección pública del servidor han seguido cerrados hasta el día de la aprobación. No cabe, por tanto, un lanzamiento discreto.

De esa norma depende todo lo demás: qué nube elegir, qué cuenta abrir y si hará falta una empresa china antes de mover un solo archivo.

El resto de esta guía parte de esa premisa. Nuestra guía sobre [cómo alojar un sitio web en China](/es/recursos/guia-web-china/alojar-sitio-web-china/) ofrece el panorama completo sobre servidores y latencia, y [WordPress en China](/es/wordpress-en-china/) explica cómo abordamos los proyectos con esta pila.

## Lo que hemos medido en alojamiento continental

Las cifras que siguen son nuestras. Proceden de sitios de clientes que hemos trasladado a China o que alojamos allí, y ningún tercero las ha medido, algo que conviene tener presente al valorarlas.

> En un sitio WordPress que migramos, el tiempo de carga mediano pasó de 23,4 segundos con un origen europeo a 1,2 segundos con un origen continental. Cerca de la mitad de la mejora se debió a suprimir llamadas externas.
> Fuente: ChinaWebFoundry, publicado el 29 de agosto de 2026. https://www.chinawebfoundry.com/resources/china-web-guide/is-wordpress-blocked-in-china/

> Durante un periodo de 90 días, un sitio de cliente alojado en el continente registró una disponibilidad del 99,98 %, con tiempos de respuesta medianos de 48 ms desde Pekín, 36 ms desde Shanghái y 61 ms desde Cantón.
> Fuente: ChinaWebFoundry, publicado el 29 de agosto de 2026. https://www.chinawebfoundry.com/website-in-china/

A cada una de esas cifras le falta todavía una condición que exigiríamos a cualquier otra prueba comparativa. La tabla detalla cuál, una por una.

| Cifra | Qué mide | Medido desde | Periodo | Pendiente de publicar |
| --- | --- | --- | --- | --- |
| 23,4 s a 1,2 s | Carga mediana, antes y después del traslado | China continental | Antes y después de la migración | Ciudad, operador, fechas de las pruebas |
| 99,98 % | Disponibilidad de un sitio alojado en el continente | No publicado | 90 días | Ubicación de la monitorización, fechas de inicio y fin |
| 48 ms | Tiempo de respuesta mediano | Pekín | Los mismos 90 días | Operador |
| 36 ms | Tiempo de respuesta mediano | Shanghái | Los mismos 90 días | Operador |
| 61 ms | Tiempo de respuesta mediano | Cantón | Los mismos 90 días | Operador |

Las condiciones que faltan figurarán en los casos prácticos que estamos redactando.

## Seis opciones de alojamiento comparadas

Son las seis opciones por las que más nos preguntan los equipos extranjeros. Cada fila recoge la restricción determinante y se apoya en la página del propio proveedor. Las revisamos todas el 29 de septiembre de 2026 y volveremos a hacerlo cada trimestre.

| Opción | Servidores en el continente | Registro ICP | Cuenta y entidad | Fecha de la página del proveedor |
| --- | --- | --- | --- | --- |
| Alibaba Cloud (阿里云), sitio chino, aliyun.com | Sí | Con Alibaba, sobre un servidor continental contratado por 3 meses o más | Cuenta en aliyun.com; empresa constituida en el continente o residente del continente | Centro de ayuda, 20 de agosto y 24 de septiembre de 2026 |
| Alibaba Cloud, sitio internacional, alibabacloud.com | No sirven para un sitio registrado | No disponible para este tipo de cuenta | Hay que abrir una cuenta en aliyun.com | Centro de ayuda, 20 de agosto de 2026 |
| Tencent Cloud (腾讯云) | Sí | Con Tencent, sobre un servidor continental; Lighthouse contratado por 90 días o más | Una sola entidad declarante por cuenta | Documentación, 30 de enero y 23 de septiembre de 2026 |
| Huawei Cloud (华为云) | Sí | Con Huawei, sobre un «servidor de registro» continental contratado por al menos 3 meses | Cuenta de China continental obligatoria; las cuentas internacionales no pueden registrar | Help Center, julio y agosto de 2024 |
| Vercel | Ninguno | No se ofrece. Una copia local exige alojamiento continental y registro propio | No aplica en Vercel | Base de conocimiento, 11 de septiembre de 2026 |
| Cloudflare | Solo a través de la China Network, operada por JD Cloud | Un registro o una licencia válidos por cada dominio raíz | Plan Enterprise; revisión previa del contenido por JD Cloud | Documentación para desarrolladores, abril de 2026 |

Para un sitio WordPress que deba funcionar en el continente, la elección real se reduce a la primera, la tercera y la cuarta fila.

## En China continental no existe WordPress gestionado

En el continente no hay WP Engine, ni Kinsta, ni Flywheel. Hemos repasado los catálogos de Alibaba Cloud (阿里云), Tencent Cloud (腾讯云) y Huawei Cloud (华为云). Ninguno comercializa un producto WordPress que aplique los parches en su lugar o atienda una incidencia sobre un plugin.

Los tres venden, eso sí, una imagen de WordPress instalable en un clic sobre un servidor virtual de gama de entrada.

| Proveedor | Producto | Qué instala la imagen | Actualización de la página del proveedor |
| --- | --- | --- | --- |
| Alibaba Cloud | Simple Application Server (轻量应用服务器) | Una imagen de aplicación WordPress preconfigurada | 19 de agosto de 2026 |
| Tencent Cloud | Lighthouse (轻量应用服务器) | WordPress con Nginx, MariaDB y el panel Linux Baota (宝塔) | 22 de septiembre de 2026 |
| Huawei Cloud | FlexusL (Flexus应用服务器L实例) | Ubuntu 24.04 con Docker, Nginx, MySQL y phpMyAdmin | 21 de septiembre de 2026 |

Vuelva a mirar la tercera columna. Cada fila es un sistema operativo con WordPress preinstalado. Las actualizaciones y las copias de seguridad corren de su cuenta, igual que la preproducción, y también le tocará encontrar a alguien capaz de desentrañar un conflicto entre plugins.

Alguien de su equipo, por tanto, acabará administrando sistemas todos los meses, mientras el sitio siga en pie. Es un coste permanente, y conviene incluirlo en el presupuesto desde el arranque.

## Nada se sirve hasta que el registro está resuelto

Tanto Alibaba Cloud como Tencent Cloud dejan la norma por escrito en su documentación.

> Conforme a las normas del Ministerio de Industria y Tecnologías de la Información (工信部), un dominio que resuelve hacia un servidor situado en China continental debe completar su registro antes de que se pueda abrir el acceso al sitio web.
> Fuente: centro de ayuda de Alibaba Cloud (阿里云), actualizado el 4 de septiembre de 2026. https://help.aliyun.com/zh/dws/support/how-do-i-troubleshoot-the-failures-to-access-a-website-by-using-its-domain-name

> Un dominio que resuelve hacia recursos de Tencent Cloud en China continental debe completar antes el registro ICP; de lo contrario, lo intercepta el sistema de Tencent Cloud que vigila los dominios no registrados.
> Fuente: documentación de Tencent Cloud (腾讯云), actualizada el 28 de septiembre de 2026. https://cloud.tencent.com/document/product/243/19630

El dato de los puertos es nuestro: en nuestros proyectos, esa interceptación cierra los puertos 80 y 443. No se puede enseñar al cliente un enlace de preproducción en el servidor de producción ni lanzar una beta discreta mientras avanza el papeleo.

> La comprobación propia de Alibaba Cloud tarda de 1 a 2 días hábiles. La revisión posterior de la Administración Provincial de Comunicaciones (省级通信管理局) suele llevar de 1 a 20 días hábiles, y el sitio debe completar su registro ante los órganos de seguridad pública (公安备案) en los 30 días siguientes a su puesta en marcha.
> Fuente: centro de ayuda de Alibaba Cloud (阿里云), descripción general del proceso de registro ICP, actualizado el 26 de agosto de 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview

Sobre el papel, son 22 días hábiles como máximo. Pero reunir la documentación lleva tiempo y hay expedientes que vuelven para subsanar defectos, así que calculamos de tres a seis semanas, siempre que la entidad continental ya exista. Nuestra [guía del registro ICP](/es/recursos/guia-web-china/licencia-icp-empresas-extranjeras/) detalla los documentos necesarios y el orden en que deben presentarse.

La licencia ICP comercial (ICP许可证) es un instrumento distinto, necesario cuando el propio sitio genera ingresos: comercio electrónico, contenidos de pago, software de pago, publicidad.

> La Administración de Comunicaciones de Shanghái (上海市通信管理局) se compromete a resolver sobre una licencia de telecomunicaciones de valor añadido en un plazo de 60 días desde la admisión de la solicitud.
> Fuente: Administración de Comunicaciones de Shanghái, guía de trámites, junio de 2015. https://shca.miit.gov.cn/bsfw/bszn/dxsc/blcx/art/2020/art_7426922df3754a189aaf4278ff0c7b1d.html

El plazo empieza a correr con la admisión, que a su vez exige un expediente completo. Para esta licencia calculamos de doce a dieciocho semanas.

Queda la cuestión de la participación extranjera, que toda licencia plantea.

> Un programa piloto de 2024 levanta el límite a la participación extranjera en determinadas categorías de licencia, entre ellas el procesamiento de datos en línea y las plataformas de publicación de información, en zonas de Pekín, Shanghái, Hainan y Shenzhen. La exclusión alcanza a las noticias, la edición, el sector audiovisual y los servicios culturales en internet.
> Fuente: Ministerio de Industria y Tecnologías de la Información (工业和信息化部), aviso del 8 de abril de 2024. https://www.gov.cn/zhengce/zhengceku/202404/content_6944441.htm

El registro ICP se presenta a nombre de una empresa constituida en el continente, o de un residente si el sitio es personal. Una empresa constituida en el extranjero no puede presentarlo directamente, y ningún gasto en alojamiento suple la falta de entidad.

## La cuenta en la nube que no puede alojar su sitio

Alibaba mantiene dos sitios con una imagen de marca casi idéntica: alibabacloud.com, el internacional, y aliyun.com, el chino. Solo el segundo permite tramitar el registro.

> Las cuentas del sitio internacional de Alibaba Cloud (alibabacloud.com) no admiten solicitudes de registro ICP, ni para sitios web ni para aplicaciones. El registro requiere una cuenta del sitio chino (aliyun.com), y la entidad declarante debe ser una empresa constituida en China continental o un residente del continente.
> Fuente: centro de ayuda de Alibaba Cloud (阿里云), actualizado el 20 de agosto de 2026. https://help.aliyun.com/en/icp-filing/basic-icp-service/product-overview/icp-filing-application-for-enterprises-outside-the-chinese-mainland

> El registro se tramita sobre un servidor de Alibaba Cloud situado en China continental: una instancia ECS o un Simple Application Server, contratado por 3 meses o más.
> Fuente: centro de ayuda de Alibaba Cloud (阿里云), actualizado el 24 de septiembre de 2026. https://help.aliyun.com/en/icp-filing/basic-icp-service/user-guide/icp-filing-server-access-information-check

Así, el alta más natural, en el sitio en inglés que el buscador muestra primero, da como resultado una cuenta incapaz de registrar el sitio que usted está construyendo. Quien ya ha pasado por esto lo sabe de memoria. Quienes lo hacen por primera vez pierden semanas, y suelen descubrirlo cuando alguien busca la pantalla de registro y no la encuentra, con el servidor ya pagado y la fecha de lanzamiento fijada.

Huawei Cloud (华为云) mantiene la misma división, casi con las mismas palabras.

> Las cuentas del sitio internacional de Huawei Cloud no admiten el registro ICP. Hace falta una cuenta de Huawei Cloud de China continental, con un servidor de registro en China continental contratado por al menos tres meses.
> Fuente: Help Center de Huawei Cloud (华为云), actualizado el 17 de julio de 2024 y el 20 de agosto de 2024. https://support.huaweicloud.com/intl/en-us/prepare-icp/icp_02_0047.html y https://support.huaweicloud.com/intl/en-us/prepare-icp/icp_02_0003.html

En Tencent Cloud (腾讯云), la norma escrita afecta al servidor. Las páginas consultadas guardan silencio sobre las cuentas internacionales, en un sentido o en otro, y nosotros tampoco diremos nada.

> Una instancia Lighthouse en una región continental puede usarse para el registro ICP siempre que esté contratada por 90 días o más y le queden al menos 30 días de vigencia mientras se revisa el expediente.
> Fuente: documentación de Tencent Cloud (腾讯云), actualizada el 23 de septiembre de 2026. https://cloud.tencent.com/document/product/1207/45756

## Hong Kong y lo que cuesta de verdad el atajo

El alojamiento en Hong Kong no requiere registro ICP. Ese es todo su atractivo, y es una opción defendible en dos situaciones: aún no tiene entidad continental, o necesita algo publicado antes de que el expediente se resuelva.

Conviene nombrar con precisión aquello a lo que renuncia.

La latencia empeora de forma apreciable desde el norte y el oeste de China frente a un origen continental, porque el tráfico sigue cruzando la frontera. El rendimiento oscila según la hora y según el operador, de manera que la medición de un martes por la mañana dice poco sobre un viernes por la noche.

Trate Hong Kong como un puente. Si China cuenta comercialmente, presupueste la entidad y el registro, mantenga Hong Kong mientras tanto y fije una fecha de migración antes de que se la fije la realidad.

## Vercel, Cloudflare y los nodos en el extranjero

Una CDN global sitúa copias de sus páginas más cerca de sus visitantes, en Hong Kong o en Tokio, y eso ayuda. Los hosts bloqueados a los que llama la propia página, en cambio, siguen bloqueados.

Vercel también sale a relucir, porque allí se alojan muchos sitios Astro y Next.js. Su base de conocimiento responde sin rodeos.

> «Vercel no tiene servidores ni nodos de CDN en China continental» y «Vercel no puede garantizar la disponibilidad ni el rendimiento en China continental». Los controles de red de China pueden bloquear o ralentizar sus subdominios .vercel.app.
> Fuente: base de conocimiento de Vercel, publicada el 3 de noviembre de 2025 y actualizada el 11 de septiembre de 2026. https://vercel.com/kb/guide/accessing-vercel-hosted-sites-from-mainland-china

> Según GreatFire, https://vercel.app aparece bloqueado en China continental en sus 4 últimas pruebas concluyentes, la más reciente del 14 de septiembre de 2026. De las 157 URL que ha probado en el dominio, 154 figuran como bloqueadas.
> Fuente: GreatFire, septiembre de 2026. https://en.greatfire.org/https/vercel.app

Vercel recomienda un dominio personalizado en lugar de .vercel.app, fuentes y analítica autoalojadas y, para un sitio que deba rendir en China, una copia independiente en infraestructura continental, con su propio registro o licencia ICP. Esta última opción obliga a gestionar un segundo sitio, en una de las tres nubes continentales citadas o en otro proveedor del continente.

Los planes estándar y gratuito de Cloudflare atienden a los visitantes continentales desde nodos situados fuera del continente. La red dentro del país es un producto aparte.

> La Cloudflare China Network es una suscripción independiente para clientes Enterprise, operada en centros de datos del continente por JD Cloud, socio de Cloudflare. Cada dominio raíz necesita un registro o una licencia ICP válidos, y JD Cloud revisa el contenido de cada dominio antes de activar la red.
> Fuente: documentación para desarrolladores de Cloudflare, actualizada el 30 de abril de 2026. https://developers.cloudflare.com/china-network/

Para un sitio alojado en el continente, la respuesta más sencilla suele ser la CDN doméstica asociada a la nube que ya utiliza. Funciona con el registro obtenido y mantiene toda la pila en un único proveedor.

## Mantener WordPress actualizado desde un servidor continental

WordPress sobre un servidor continental plantea un problema de mantenimiento que no plantea en ningún otro sitio.

El repositorio de plugins, el de temas y los servidores de actualización del núcleo responden desde China. También limitan el caudal de los rangos de IP continentales con severidad, devolviendo HTTP 429 con la frecuencia suficiente para que un sitio pase semanas sin parchear. El panel de administración no dice nada al respecto. Simplemente deja de ofrecer actualizaciones, y el sitio se queda atrás en silencio.

Tres soluciones funcionan en la práctica: los espejos domésticos, un proceso de actualización que se ejecute desde fuera de China contra una copia de preproducción, o un contrato de mantenimiento en el que una persona con nombre y apellidos responda del nivel de parcheo. Elija una a conciencia. No elegir también es una decisión, y termina con un sitio sin parchear expuesto a internet.

## Cuánto cuesta

El servidor es la parte barata. Las imágenes en un clic funcionan sobre los servidores de gama de entrada de cada nube.

El gasto real está en otra parte. Hay que constituir o mantener la entidad continental; preparar la documentación y superar la verificación consume horas de trabajo. Tras el lanzamiento, una persona con nombre y apellidos entra en la consola de la nube mes tras mes para aplicar los parches y hacer las copias de seguridad.

Los equipos que solo cifran la línea del servidor son los que renegocian el alcance en el cuarto mes.

## Cómo elegir entre los escenarios

| Situación | Dónde alojar | Trámite necesario |
| --- | --- | --- |
| Sin entidad continental, hay que lanzar ya | Hong Kong | Ninguno |
| Entidad continental, sitio informativo | Alibaba, Tencent o Huawei en el continente | Registro ICP, de 3 a 6 semanas |
| Entidad continental, ingresos en el sitio | Continente, más medios de pago domésticos | Licencia ICP comercial, de 12 a 18 semanas |
| Sitio global, audiencia china pequeña, sin entidad | Mantener el origen fuera y arreglar antes las dependencias | Ninguno |

Esa última fila es la que más se salta, y con frecuencia es la respuesta correcta. Si China representa el 3 % de su tráfico y no hay ninguna entidad a la vista, retirar las dependencias bloqueadas del sitio que ya tiene recupera la mayor parte de la velocidad disponible por una fracción de lo que cuesta un despliegue continental.

## Preguntas frecuentes

**¿Podemos conservar nuestro proveedor actual y añadir simplemente una CDN china?**
Solo si el proveedor dispone de puntos de presencia en el continente, y eso exige que su dominio tenga registro. Sin registro, lo que compra es un punto de presencia extranjero con nombre chino.

**¿Cuánto cuesta el alojamiento WordPress en el continente?**
El servidor es la partida más pequeña. Los costes que importan son la entidad y el trabajo de registro y, después del lanzamiento, la persona que se ocupa del servidor.

**¿El dominio tiene que ser un .cn?**
No. Un .com puede registrarse. Un .com registrado sobre un servidor continental es el montaje habitual y funciona.

**¿Qué ocurre si alojamos en China sin registro?**
Los puertos siguen cerrados y el sitio no se sirve. El proveedor aplica la norma a nivel de red. Ningún regulador necesita descubrirle.

**¿Pueden tramitar ustedes el ICP por nosotros?**
Gestionamos el registro en nombre de la entidad continental del cliente: documentación, verificación de identidad real, presentación ante el proveedor y seguimiento. No podemos tramitarlo para una empresa sin entidad, y nadie más puede hacerlo.

¿Está sopesando un despliegue continental frente a quedarse fuera? Cuéntenos en qué punto está con la entidad y qué parte de su tráfico es china, y le devolveremos el escenario que encaja. A veces ese escenario consiste en dejar su origen exactamente donde está.
