# T6-03 deep-translate, ES, pass 1 (full native rewrite from scratch)

Register: El País, usted, as the live page; fuller journalistic prose per the
Spanish register rule. English replacement copy used for facts only. Scope:
changes 1, 4 to 10 and every table string. The page's established terms kept:
"registro ICP", "nubes", "proveedor". Site convention: Guangzhou = Cantón,
quotations in « ». Decimal comma, "99,98 %".

## Change 1, summary

before: Qué venden realmente Alibaba, Tencent y Huawei, el registro ICP que condiciona cualquier servidor en el continente, el atajo de Hong Kong y el problema de actualizaciones que nadie presupuesta.
after: Alibaba, Tencent, Huawei, Vercel y Cloudflare, comparados para alojar WordPress en China continental, con la norma del registro ICP y cifras medidas por nosotros.
why: rebuilt on the new scope; the live summary described a page without figures.

## Change 2, updatedAt

2026-08-29 -> 2026-10-02 (date, not translated)

## Change 3, reviewBy

inserted: reviewBy: 2026-12-29 (date, not translated)

## Change 4, introduction

before: En China no existe WP Engine. [...] consulte [WordPress en China](/es/wordpress-en-china/).
after:

Un servidor situado en China continental no mostrará su sitio WordPress a nadie hasta que su registro ICP (ICP备案) esté resuelto. En todos los proyectos que hemos llevado, los puertos 80 y 443 han permanecido cerrados en la dirección pública del servidor hasta el día de la aprobación. No hay lanzamiento suave posible.

Esa norma decide todo lo demás. Determina qué nube y qué cuenta hay que abrir, y si necesita una empresa china antes de mover un solo archivo.

Todo lo que sigue parte de ahí. Nuestra guía sobre [cómo alojar un sitio web en China](/es/recursos/guia-web-china/alojar-sitio-web-china/) ofrece el panorama completo sobre servidores y latencia, y [WordPress en China](/es/wordpress-en-china/) explica cómo abordamos los proyectos con esta pila.

why: the opening now leads with the filing rule; written fresh, both live links kept on their Spanish slugs.

## Change 5, benchmark block and provider table (new)

before: (absent)
after:

## Lo que hemos medido en alojamiento continental

Estas cifras son de ChinaWebFoundry y proceden de sitios de clientes que hemos trasladado a China o que alojamos allí. Ningún tercero las ha medido, y conviene saberlo antes de darles peso.

> En un sitio WordPress que migramos, el tiempo de carga mediano pasó de 23,4 segundos con un origen europeo a 1,2 segundos con un origen continental. Aproximadamente la mitad de la mejora se debió a la eliminación de llamadas externas.
> Fuente: ChinaWebFoundry, publicado el 29 de agosto de 2026. https://www.chinawebfoundry.com/resources/china-web-guide/is-wordpress-blocked-in-china/

> Durante un periodo de 90 días, un sitio de cliente alojado en el continente registró una disponibilidad del 99,98 %, con tiempos de respuesta medianos de 48 ms desde Pekín, 36 ms desde Shanghái y 61 ms desde Cantón.
> Fuente: ChinaWebFoundry, publicado el 29 de agosto de 2026. https://www.chinawebfoundry.com/website-in-china/

A cada una de esas cifras le falta todavía una condición que exigiríamos a cualquier otra prueba comparativa. La tabla indica cuál, cifra por cifra.

| Cifra | Qué mide | Medido desde | Periodo | Pendiente de publicar |
| --- | --- | --- | --- | --- |
| 23,4 s a 1,2 s | Carga mediana, antes y después del traslado | China continental | Antes y después de la migración | Ciudad, operador, fechas de las pruebas |
| 99,98 % | Disponibilidad de un sitio alojado en el continente | No publicado | 90 días | Ubicación de la monitorización, fechas de inicio y fin |
| 48 ms | Tiempo de respuesta mediano | Pekín | Los mismos 90 días | Operador |
| 36 ms | Tiempo de respuesta mediano | Shanghái | Los mismos 90 días | Operador |
| 61 ms | Tiempo de respuesta mediano | Cantón | Los mismos 90 días | Operador |

Las condiciones que faltan irán en los casos de estudio que estamos redactando ahora.

## Seis opciones de alojamiento, una al lado de otra

Son las opciones por las que más nos preguntan los equipos extranjeros. Cada fila recoge la restricción que decide el caso, y cada una se apoya en la página del propio proveedor. Revisamos todas las filas el 29 de septiembre de 2026 y volveremos a hacerlo cada trimestre.

| Opción | Servidores en el continente | Registro ICP | Cuenta y entidad | Fecha de la página del proveedor |
| --- | --- | --- | --- | --- |
| Alibaba Cloud (阿里云), sitio chino, aliyun.com | Sí | Se tramita con Alibaba sobre un servidor continental contratado por 3 meses o más | Cuenta en aliyun.com; empresa registrada en el continente o residente del continente | Centro de ayuda, 20 de agosto y 24 de septiembre de 2026 |
| Alibaba Cloud, sitio internacional, alibabacloud.com | No admite un sitio registrado | No disponible para este tipo de cuenta | Abra una cuenta en aliyun.com | Centro de ayuda, 20 de agosto de 2026 |
| Tencent Cloud (腾讯云) | Sí | Se tramita con Tencent sobre un servidor continental; Lighthouse contratado por 90 días o más | Una sola entidad declarante por cuenta | Documentación, 30 de enero y 23 de septiembre de 2026 |
| Huawei Cloud (华为云) | Sí | Se tramita con Huawei sobre un «servidor de registro» continental contratado por al menos 3 meses | Cuenta de China continental; las cuentas internacionales no pueden registrar | Help Center, julio y agosto de 2024 |
| Vercel | Ninguno | No se ofrece. Una copia en el país necesita alojamiento continental y su propio registro | Nada por parte de Vercel | Base de conocimiento, 11 de septiembre de 2026 |
| Cloudflare | Solo en la China Network, operada por JD Cloud | Un registro o una licencia válidos por cada dominio raíz | Plan Enterprise; JD Cloud revisa antes el contenido | Documentación para desarrolladores, abril de 2026 |

Para un sitio WordPress que tenga que vivir en el continente, la elección real está entre la primera, la tercera y la cuarta fila.

why: new sections, written in Spanish from the facts; dates in Spanish long form.

## Change 6, no managed WordPress

before: ## Qué ofrecen realmente las tres nubes continentales [...] porque va a aparecer de todas formas.
after:

## En China continental no existe WordPress gestionado

En el continente no hay WP Engine, ni Kinsta, ni Flywheel. Hemos repasado los catálogos de Alibaba Cloud (阿里云), Tencent Cloud (腾讯云) y Huawei Cloud (华为云). Ninguno vende un producto WordPress que aplique los parches por usted o atienda una incidencia sobre un plugin.

Lo que venden los tres es una imagen de WordPress en un clic sobre un servidor virtual de gama de entrada.

| Proveedor | Producto | Qué instala la imagen | Página del proveedor actualizada |
| --- | --- | --- | --- |
| Alibaba Cloud | Simple Application Server (轻量应用服务器) | Una imagen de aplicación WordPress preconfigurada | 19 de agosto de 2026 |
| Tencent Cloud | Lighthouse (轻量应用服务器) | WordPress con Nginx, MariaDB y el panel Linux Baota (宝塔) | 22 de septiembre de 2026 |
| Huawei Cloud | FlexusL (Flexus应用服务器L实例) | Ubuntu 24.04 con Docker, Nginx, MySQL y phpMyAdmin | 21 de septiembre de 2026 |

Vuelva a mirar la tercera columna. Cada fila es un sistema operativo con WordPress preinstalado. Las actualizaciones y las copias de seguridad corren de su cuenta, igual que la preproducción y la tarea de encontrar a alguien capaz de interpretar un conflicto entre plugins.

Así que alguien de su lado acabará haciendo administración de sistemas cada mes, mientras el sitio exista. Es un coste permanente. Inclúyalo en el presupuesto desde el arranque.

why: section rebuilt on vendor-sourced rows; the unsourced "consola sin modo inglés" goes.

## Change 7, the filing and the licence

before: Es la restricción que reordena [...] ningún gasto en alojamiento sustituye a esa entidad.
after:

Alibaba Cloud y Tencent Cloud recogen la norma en su propia documentación.

> Conforme a las normas del Ministerio de Industria y Tecnologías de la Información (工信部), un dominio que resuelve hacia un servidor situado en China continental debe completar su registro antes de que se pueda abrir el acceso al sitio web.
> Fuente: centro de ayuda de Alibaba Cloud (阿里云), actualizado el 4 de septiembre de 2026. https://help.aliyun.com/zh/dws/support/how-do-i-troubleshoot-the-failures-to-access-a-website-by-using-its-domain-name

> Un dominio que resuelve hacia recursos de Tencent Cloud en China continental debe completar antes el registro ICP; de lo contrario, el sistema de Tencent Cloud que vigila los dominios no registrados lo intercepta.
> Fuente: documentación de Tencent Cloud (腾讯云), actualizada el 28 de septiembre de 2026. https://cloud.tencent.com/document/product/243/19630

El dato de los puertos es nuestro: en nuestros proyectos, esa interceptación cierra los puertos 80 y 443. No se puede enseñar al cliente un enlace de preproducción en el servidor de producción ni lanzar una beta discreta mientras avanza el papeleo.

> La revisión propia de Alibaba Cloud tarda de 1 a 2 días hábiles. La revisión posterior de la Administración Provincial de Comunicaciones (省级通信管理局) suele llevar de 1 a 20 días hábiles, y el sitio debe completar su registro ante la seguridad pública (公安备案) en los 30 días siguientes a su puesta en marcha.
> Fuente: centro de ayuda de Alibaba Cloud (阿里云), descripción general del proceso de registro ICP, actualizado el 26 de agosto de 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview

Sobre el papel, eso suma hasta 22 días hábiles. Reunir la documentación lleva tiempo y los expedientes vuelven para correcciones, así que contamos con tres a seis semanas, siempre que la entidad continental ya exista. Nuestra [guía del registro ICP](/es/recursos/guia-web-china/licencia-icp-empresas-extranjeras/) recorre la documentación y el orden en que se presenta.

La licencia ICP comercial (ICP许可证) es otro instrumento. Hace falta cuando el propio sitio genera ingresos: comercio electrónico, contenidos de pago, software de pago, publicidad.

> La Administración de Comunicaciones de Shanghái (上海市通信管理局) se compromete a resolver sobre una licencia de telecomunicaciones de valor añadido en un plazo de 60 días desde la admisión de la solicitud.
> Fuente: Administración de Comunicaciones de Shanghái, guía de trámites, junio de 2015. https://shca.miit.gov.cn/bsfw/bszn/dxsc/blcx/art/2020/art_7426922df3754a189aaf4278ff0c7b1d.html

El plazo empieza a contar en la admisión, y la admisión exige un expediente completo. Para esta licencia calculamos de doce a dieciocho semanas.

La participación extranjera es la otra cuestión que plantea una licencia.

> Un programa piloto de 2024 levanta el límite a la participación extranjera en determinadas categorías de licencia, entre ellas el procesamiento de datos en línea y las plataformas de publicación de información, en zonas de Pekín, Shanghái, Hainan y Shenzhen. Quedan excluidos las noticias, la edición, el audiovisual y los servicios culturales en internet.
> Fuente: Ministerio de Industria y Tecnologías de la Información (工业和信息化部), aviso del 8 de abril de 2024. https://www.gov.cn/zhengce/zhengceku/202404/content_6944441.htm

El registro ICP se presenta a nombre de una empresa registrada en el continente, o de un residente del continente si el sitio es personal. Una empresa registrada en el extranjero no puede presentarlo directamente, y ningún gasto en alojamiento sustituye a la entidad.

why: the undated MIIT blockquotes and the 60 to 90 working-day figure go; sourced quotes written in Spanish.

## Change 8, the cloud account

before: ## La cuenta de Alibaba Cloud que no puede alojar su sitio [...] Todo equipo que lo descubre pierde dos semanas.
after:

## La cuenta en la nube que no puede alojar su sitio

Alibaba tiene dos sitios con una imagen de marca casi idéntica. alibabacloud.com es el internacional; aliyun.com, el chino. Solo el segundo permite registrar.

> Las cuentas del sitio internacional de Alibaba Cloud (alibabacloud.com) no admiten solicitudes de registro ICP, ni para sitios web ni para aplicaciones. El registro requiere una cuenta del sitio chino (aliyun.com), y la entidad declarante debe ser una empresa registrada en China continental o un residente del continente.
> Fuente: centro de ayuda de Alibaba Cloud (阿里云), actualizado el 20 de agosto de 2026. https://help.aliyun.com/en/icp-filing/basic-icp-service/product-overview/icp-filing-application-for-enterprises-outside-the-chinese-mainland

> El registro se tramita sobre un servidor de Alibaba Cloud situado en China continental: una instancia ECS o un Simple Application Server, contratado por 3 meses o más.
> Fuente: centro de ayuda de Alibaba Cloud (阿里云), actualizado el 24 de septiembre de 2026. https://help.aliyun.com/en/icp-filing/basic-icp-service/user-guide/icp-filing-server-access-information-check

De modo que el alta que parece natural, en el sitio en inglés que el buscador muestra primero, produce una cuenta que no puede registrar el sitio que usted está construyendo. Quien ya ha pasado por esto lo sabe de memoria. Los que lo hacen por primera vez pierden semanas, y suelen darse cuenta cuando alguien busca la pantalla de registro y la cuenta no la tiene, cuando el servidor ya está pagado y la fecha de lanzamiento ya está fijada.

Huawei Cloud (华为云) mantiene la misma división, casi con las mismas palabras.

> Las cuentas del sitio internacional de Huawei Cloud no admiten el registro ICP. Hace falta una cuenta de Huawei Cloud de China continental, con un servidor de registro en China continental contratado por al menos tres meses.
> Fuente: Help Center de Huawei Cloud (华为云), actualizado el 17 de julio de 2024 y el 20 de agosto de 2024. https://support.huaweicloud.com/intl/en-us/prepare-icp/icp_02_0047.html y https://support.huaweicloud.com/intl/en-us/prepare-icp/icp_02_0003.html

En Tencent Cloud (腾讯云), la norma documentada se refiere al servidor. Las páginas de Tencent que hemos consultado no dicen nada, ni en un sentido ni en otro, sobre las cuentas internacionales, así que nosotros tampoco.

> Una instancia Lighthouse en una región continental puede usarse para el registro ICP si está contratada por 90 días o más, con al menos 30 días restantes mientras se revisa el registro.
> Fuente: documentación de Tencent Cloud (腾讯云), actualizada el 23 de septiembre de 2026. https://cloud.tencent.com/document/product/1207/45756

why: unsupported claims cut; Huawei and Tencent added from their own pages.

## Change 9, Vercel and Cloudflare

before: ## La cuestión del CDN [...] mantiene toda la cadena en un único proveedor.
after:

## Vercel, Cloudflare y el borde en el extranjero

Una CDN global acerca copias de sus páginas, en Hong Kong o en Tokio, lo cual ayuda. No hace nada con los hosts bloqueados a los que llama la propia página.

Vercel también sale a relucir, porque muchos sitios Astro y Next.js viven allí. Su propia base de conocimiento da una respuesta clara.

> «Vercel no tiene servidores ni nodos de CDN en China continental» y «Vercel no puede garantizar la disponibilidad ni el rendimiento en China continental». Los controles de red de China pueden bloquear o ralentizar sus subdominios .vercel.app.
> Fuente: base de conocimiento de Vercel, publicada el 3 de noviembre de 2025 y actualizada el 11 de septiembre de 2026. https://vercel.com/kb/guide/accessing-vercel-hosted-sites-from-mainland-china

> GreatFire da https://vercel.app por bloqueado en China continental en 4 de sus últimas 4 pruebas concluyentes, la más reciente el 14 de septiembre de 2026. De las 157 URL que ha probado en el dominio, 154 aparecen bloqueadas.
> Fuente: GreatFire, septiembre de 2026. https://en.greatfire.org/https/vercel.app

Las propias sugerencias de Vercel son un dominio personalizado en lugar de .vercel.app, fuentes y analítica alojadas por uno mismo y, para un sitio que tenga que rendir en China, una copia aparte en infraestructura continental con su propio registro o licencia ICP. Esa última opción supone gestionar un segundo sitio, en una de las tres nubes continentales citadas o en otro proveedor del continente.

Los planes estándar y gratuito de Cloudflare atienden a los visitantes continentales desde nodos situados fuera del continente. La red dentro del país es un producto aparte.

> La Cloudflare China Network es una suscripción independiente para clientes Enterprise, operada en centros de datos del continente por JD Cloud, socio de Cloudflare. Cada dominio raíz necesita un registro o una licencia ICP válidos, y JD Cloud revisa el contenido de cada dominio antes de activar la red.
> Fuente: documentación para desarrolladores de Cloudflare, actualizada el 30 de abril de 2026. https://developers.cloudflare.com/china-network/

Para un sitio alojado en el continente, la respuesta más sencilla suele ser la CDN doméstica asociada a la nube en la que ya está. Funciona con el registro que ya tiene y mantiene la pila en un único proveedor.

why: Vercel section added with its own wording; Cloudflare facts now cited; unsupported "es rápida" goes.

## Change 10A

before: El servidor es la parte barata. Un sitio corporativo sobre Simple Application Server o Lighthouse suele quedar por debajo de 100 USD al mes, [...]
after: El servidor es la parte barata. Las imágenes en un clic funcionan sobre la gama de servidores de entrada de cada nube.

## Change 10B

before: Presentar el registro es gratuito. El gasto real se reparte en otros tres sitios: [...]
after: El gasto real está en otra parte. La entidad continental hay que constituirla o mantenerla, y preparar la documentación y superar la verificación consume horas de trabajo. Tras el lanzamiento, una persona con nombre y apellidos entra en la consola de la nube mes tras mes para mantener el sitio parcheado y respaldado.

## Change 10C

before: El servidor suele quedar por debajo de 100 USD al mes para un sitio corporativo. [...]
after: El servidor es la partida más pequeña. Los costes que importan son la entidad y el trabajo de registro y, después del lanzamiento, la persona que se ocupa del servidor.

Step 1 complete.
