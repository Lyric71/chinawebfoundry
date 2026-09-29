---
title: "Migrar un sitio WordPress a China"
subtitle: "Qué condiciona de verdad una migración a China, en qué orden, y por qué los puertos siguen cerrados hasta que se aprueba el registro."
summary: "Todo el calendario depende del registro ICP y el resto aguarda su turno. Una secuencia realista de catorce semanas, con cada bloqueo señalado."
visual: "/images/guides/migrate-wordpress-to-china.webp"
order: 37
published: true
publishedAt: 2026-09-29
updatedAt: 2026-09-29
category: Hosting
author: echo-peng
---

Para migrar un sitio WordPress a China, primero se registra y después se traslada. El registro ICP (ICP备案) determina la ruta crítica del proyecto. Mientras no esté aprobado, un servidor en China continental no muestra su sitio a nadie, de modo que no hay entorno de pruebas en el alojamiento definitivo ni lanzamiento discreto en beta. Todo lo demás alimenta ese expediente o espera a que se resuelva.

Cuando la entidad china ya existe, calculamos catorce semanas para un sitio WordPress corriente, es decir, la web corporativa de una empresa sin pagos en línea. El registro ocupa entre tres y seis de ellas. La reconstrucción avanza en paralelo, sobre una copia alojada en cualquier sitio salvo en el servidor de destino. Las normas de los proveedores que se citan más abajo se comprobaron en la documentación de Alibaba Cloud y de Tencent Cloud el 24 de septiembre de 2026.

Quien planifica el registro como un trámite secundario suele darse cuenta del error la misma semana en que pensaba lanzar. El servidor nuevo está listo y el sitio sigue invisible para todos.

| Tarea | ¿Antes de que se apruebe el registro? | Qué espera |
|---|---|---|
| Entidad en China continental | Tiene que existir ya | Nada. Todo lo demás la espera a ella |
| Servidor en China continental | Sí, y es obligatorio | El registro se presenta sobre ese servidor |
| Reconstrucción y corrección de dependencias | Sí, fuera del servidor nuevo | La auditoría de dependencias |
| Entorno de pruebas público en el servidor nuevo | No | El registro |
| Cambio de DNS | No | El registro y, después, las pruebas |
| Registro ante la seguridad pública (公安备案) | No, llega tras el lanzamiento | 30 días desde la apertura |

## Por qué el registro va primero

Alibaba Cloud y Tencent Cloud lo dejan por escrito, casi con las mismas palabras.

> Según las normas del Ministerio de Industria y Tecnologías de la Información (工信部), un dominio que resuelve hacia un servidor situado en China continental debe completar el registro del sitio antes de que pueda habilitarse el acceso a la web.
> Fuente: centro de ayuda de Alibaba Cloud (阿里云), actualizado el 4 de septiembre de 2026. https://help.aliyun.com/zh/dws/support/how-do-i-troubleshoot-the-failures-to-access-a-website-by-using-its-domain-name

> Un dominio que resuelve hacia recursos de Tencent Cloud en China continental debe completar primero el registro ICP; de lo contrario, lo intercepta el sistema de Tencent Cloud que vigila los dominios sin registrar.
> Fuente: documentación de Tencent Cloud (腾讯云), actualizada el 3 de septiembre de 2026. https://cloud.tencent.com/document/product/243/19630

En los proyectos que hemos llevado, esa interceptación deja cerrados para su dominio los puertos 80 y 443, los habituales de HTTP y HTTPS. Así siguen desde el día en que se alquila el servidor hasta el día en que se emite el número de registro ICP (ICP备案). Es el proveedor quien impone la regla, en su propia red.

> La revisión de Alibaba Cloud tarda de 1 a 2 días hábiles. El examen posterior de la Administración provincial de Comunicaciones (省级通信管理局) suele llevar de 1 a 20 días hábiles.
> Fuente: centro de ayuda de Alibaba Cloud (阿里云), descripción general del proceso de registro ICP, actualizado el 26 de agosto de 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview

Sobre el papel son, como mucho, 22 días hábiles. Reunir los documentos lleva tiempo y los expedientes vuelven para correcciones, así que conviene prever entre tres y seis semanas. [Nuestra guía sobre el registro ICP para empresas extranjeras](/es/recursos/guia-web-china/licencia-icp-empresas-extranjeras/) enumera la documentación necesaria. Un sitio de comercio electrónico puede necesitar, además, la licencia comercial ICP (ICP许可证), una solicitud distinta y más lenta.

Una CDN con nodos en el país tampoco permite esquivar el registro.

> Cloudflare China Network exige un plan Enterprise y «un registro o una licencia ICP válidos para cada dominio raíz que se desee incorporar».
> Fuente: documentación para desarrolladores de Cloudflare, actualizada el 30 de abril de 2026. https://developers.cloudflare.com/china-network/

## Semana cero: la entidad en China continental

El registro ICP (ICP备案) se presenta a nombre de una empresa de China continental, de modo que esa empresa tiene que existir antes que el proyecto.

> Para solicitar el registro ICP, el titular debe ser una empresa inscrita en China continental o un residente de China continental.
> Fuente: centro de ayuda de Alibaba Cloud (阿里云), registro ICP para empresas situadas fuera de China continental, actualizado el 20 de agosto de 2026. https://help.aliyun.com/en/icp-filing/basic-icp-service/product-overview/icp-filing-application-for-enterprises-outside-the-chinese-mainland

Si tiene una filial en el continente, será ella la titular. Si no la tiene, resuelva esa cuestión antes de encargar nada a un diseñador. Constituir una sociedad en China es un proyecto jurídico con su propio calendario, y tiene que concluir antes que todo lo demás.

La semana cero exige también el dominio registrado, con la verificación de nombre real completada, y la licencia de actividad de la entidad a mano. Y hace falta una persona en China que pueda firmar en nombre de la empresa y responder a las preguntas del proveedor mientras se revisa la solicitud.

A una empresa sin entidad en el continente le quedan dos caminos: un servidor en Hong Kong o una capa de distribución delante de su alojamiento actual. [Nuestra guía sobre la lentitud de WordPress en China](/es/recursos/guia-web-china/velocidad-wordpress-china/) expone las ventajas e inconvenientes de cada uno.

## La trampa de las dos plataformas de Alibaba

Alibaba Cloud (阿里云) tiene dos puertas de entrada. alibabacloud.com es la plataforma internacional, en inglés. La plataforma china está en aliyun.com. Comparten logotipo y la mayoría de los nombres de producto.

> Las cuentas del sitio internacional de Alibaba Cloud (alibabacloud.com) no admiten solicitudes de registro ICP, ni para sitios web ni para aplicaciones. Para registrarse hace falta una cuenta del sitio chino (aliyun.com).
> Fuente: centro de ayuda de Alibaba Cloud (阿里云), actualizado el 20 de agosto de 2026. https://help.aliyun.com/en/icp-filing/basic-icp-service/product-overview/icp-filing-application-for-enterprises-outside-the-chinese-mainland

El departamento de informática de la sede abre una cuenta en alibabacloud.com, porque esa web está en inglés y acepta la tarjeta corporativa. Compra un servidor y empieza a construir.

Llega el momento del registro y resulta que la cuenta no puede presentarlo. El propio servidor, además, tiene que cumplir unas condiciones.

> Un registro ICP con Alibaba Cloud debe presentarse sobre un servidor de Alibaba Cloud situado en China continental, y una instancia ECS solo es válida con una suscripción de más de 3 meses.
> Fuente: centro de ayuda de Alibaba Cloud, comprobación de la información del servidor y del acceso, actualizado el 2 de septiembre de 2026. https://help.aliyun.com/en/icp-filing/basic-icp-service/user-guide/icp-filing-server-access-information-check

Así que el servidor va primero, en la cuenta china, pagado al menos por un trimestre, y no sirve nada al público hasta que se aprueba el registro. Incluya ese trimestre ocioso en el presupuesto. Para comparar Alibaba Cloud, Tencent Cloud (腾讯云) y Huawei Cloud (华为云), consulte [nuestra guía sobre alojamiento WordPress en China](/es/recursos/guia-web-china/alojamiento-wordpress-china/).

## Qué se reconstruye y qué se copia

El contenido es la parte fácil. Entradas, páginas, campos personalizados, usuarios, menús y la biblioteca de medios viajan en un volcado de la base de datos y una copia de la carpeta uploads.

Todo lo que llama a un servidor situado fuera de China mientras se carga una página hay que reconstruirlo: fuentes, scripts, mapas, vídeo, captchas, analítica e inicio de sesión con redes sociales. Revise también el correo saliente. Si el servicio que envía las notificaciones de sus formularios está en el extranjero, necesita el mismo tratamiento.

Con el traslado cambia también el modelo de alojamiento. La guía de Alibaba sobre su Simple Application Server (轻量应用服务器), actualizada el 19 de agosto de 2026, monta un sitio a partir de una imagen de aplicación WordPress preconfigurada, es decir, un sistema operativo con WordPress ya instalado. No hemos encontrado ningún producto de WordPress gestionado en las nubes del continente. Las actualizaciones, las copias de seguridad y el nivel de parches corren de su cuenta o de quien gestione el sitio.

Las actualizaciones necesitan un plan propio.

> Un usuario chino de WordPress informó de errores 429 en todos los subdominios de WordPress.org. WordPress.org respondió ese mismo día que «varias fuentes de red chinas tienen limitada la frecuencia de acceso a ciertos servicios debido a un alto nivel de abuso», y que no ofrecería listas blancas.
> Fuente: WordPress.org Meta Trac, ticket n.º 5106, 21 de marzo de 2020, consultado en la copia de Internet Archive del 16 de enero de 2026. https://web.archive.org/web/20260116133057/https://meta.trac.wordpress.org/ticket/5106

El escritorio de WordPress no avisa de nada. Las comprobaciones de actualizaciones fallan y el sitio deja de ofrecerlas sin hacer ruido. Antes del cambio, decida si los parches llegarán de un espejo nacional o de una persona concreta que los prepare fuera de China.

## Corregir las dependencias mientras se revisa el registro

En esto se va la mayor parte de las catorce semanas. Cargue el sitio actual desde una conexión en China continental (basta con un compañero en Shanghái y un portátil) y anote cada servidor que aparezca en la pestaña de red. Cada uno recibe un veredicto: conservar, alojar en su propio servidor, sustituir o eliminar. [Nuestra guía sobre los plugins de WordPress que fallan en China](/es/recursos/guia-web-china/plugins-wordpress-china/) repasa los sospechosos habituales, servidor por servidor, con veredictos fechados.

> La carga mediana de la página pasó de 23,4 segundos con un origen en Europa a 1,2 segundos con un origen en China continental, y cerca de la mitad de la mejora vino de eliminar llamadas externas, no de trasladar el servidor.
> Fuente: ChinaWebFoundry, publicado el 29 de agosto de 2026. https://www.chinawebfoundry.com/resources/china-web-guide/is-wordpress-blocked-in-china/

Los datos proceden de una de nuestras migraciones. El operador y la fecha de la prueba aún no se han publicado; irán en un caso de estudio este otoño.

Por eso las dependencias se corrigen durante las semanas de revisión, sobre una copia del sitio: una instalación local o un servidor en Hong Kong con las mismas versiones de PHP y de base de datos que el del continente.

## El cambio, el DNS y el día en que se abren los puertos

Llega el número de registro ICP (ICP备案). Despliegue el sitio reconstruido en el servidor del continente y coloque el número en el pie de página.

> Una vez aprobado el registro, el sitio debe mostrar al pie de la página el número ICP asignado por el ministerio, con un enlace a beian.miit.gov.cn. Omitirlo puede acarrear una orden de subsanación y una multa de 5.000 a 10.000 yuanes impuesta por la Administración provincial de Comunicaciones.
> Fuente: centro de ayuda de Alibaba Cloud (阿里云), actualizado el 12 de agosto de 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/the-icp-record-post-processing-1

Antes del cambio, pruebe el servidor nuevo desde dentro del país apuntando hacia él el archivo hosts de una máquina en el continente (una redirección local que se salta el DNS). Hágalo desde una región de la nube y desde una línea doméstica. Los resultados pueden no coincidir, y sus visitantes navegan desde la línea doméstica.

Reduzca el tiempo de vida (TTL) del DNS un par de días antes del cambio, para que el cambio se propague rápido y pueda deshacerlo enseguida si hace falta. Elija una mañana laborable, hora de Pekín, lejos de cualquier festivo chino. Cambie el registro y repita las mismas pruebas. Mantenga el origen antiguo en marcha hasta que el nuevo haya aguantado una semana; su sitio actual funciona con normalidad hasta el momento del cambio.

El día de la apertura se pone en marcha otro reloj: el registro ante la seguridad pública, un trámite aparte ante las autoridades policiales.

> Un sitio web debe completar su registro ante la seguridad pública (公安备案) en los 30 días siguientes a su apertura.
> Fuente: centro de ayuda de Alibaba Cloud (阿里云), descripción general del proceso de registro ICP, actualizado el 26 de agosto de 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview

## Cuánto se tarda en migrar WordPress a China

El registro por sí solo lleva de tres a seis semanas. ¿Por qué entonces catorce? Porque el servidor no puede comprarse hasta que existe la cuenta china, y nada se despliega hasta que se aprueba el registro. El registro ante la seguridad pública y Baidu esperan al lanzamiento. Esta es la tabla con la que planifica el equipo de Shanghái, para un sitio WordPress corriente con la entidad ya constituida.

| Fase | Semanas | Dependencia que bloquea | Responsable |
|---|---|---|---|
| Auditoría de dependencias | 1 a 2 | Acceso al sitio actual | Equipo web |
| Cuenta china, servidor, comprobaciones del dominio | 1 a 2 | Entidad en el continente y licencia de actividad | Su entidad en China |
| Registro ICP (ICP备案), presentación y revisión | 2 a 7 | Servidor en el continente con suscripción de más de 3 meses | Entidad, proveedor, regulador provincial |
| Reconstrucción y corrección, fuera del servidor nuevo | 2 a 9 | La auditoría de dependencias | Equipo web |
| Contenido en chino y localización | 3 a 10 | Textos de origen aprobados | Marketing |
| Despliegue en el servidor del continente, número ICP en el pie | 8 a 10 | Número de registro emitido | Equipo web |
| Pruebas desde puntos de medición en China continental | 10 a 12 | Sitio desplegado | Equipo web |
| Cambio de DNS | 12 | Visto bueno a las pruebas | Equipo web y responsable del DNS |
| Registro ante la seguridad pública (公安备案) | 12 a 14 | Sitio en línea, plazo de 30 días | Su entidad en China |
| Verificación en Baidu (百度) y primeros envíos | 12 a 14 | Sitio en línea | Marketing |

La fila del registro es la que más varía. Algunas provincias aprueban en días. Una sola solicitud devuelta para corregir puede consumir todo el margen. Dos costes suelen descuadrar los presupuestos: el servidor que se paga durante las semanas muertas y una semana o más de doble factura de alojamiento mientras el origen antiguo sigue activo. [Nuestro servicio de migración a China](/es/servicios/migracion-china/) se presupuesta a partir de esta misma tabla, y [nuestra página sobre WordPress en China](/es/wordpress-en-china/) explica cuándo conviene, de entrada, trasladarse al continente.

## Preguntas frecuentes

### ¿Podemos hacer pruebas en el servidor del continente antes de que se apruebe el registro?

Puede instalar y configurar por SSH, pero el sitio no cargará en su dominio hasta que se emita el número de registro ICP (ICP备案). El proveedor lo intercepta. Construya y revise el sitio en una copia alojada en otro lugar y traslade la versión terminada cuando llegue el número.

### ¿Hace falta una empresa china para alojar WordPress en China?

Para un servidor en el continente, sí. El titular del registro debe ser una empresa inscrita en China continental o un residente del continente, y un dominio sin registrar no se sirve desde un servidor continental. Una empresa sin entidad puede recurrir a un servidor en Hong Kong o a una capa de distribución.

### Nuestro dominio ya tiene número ICP con otro proveedor. ¿Hay que empezar de cero?

Se transfiere. El centro de ayuda de Alibaba Cloud, actualizado el 4 de septiembre de 2026, menciona un registro en manos de otro proveedor entre los motivos por los que un sitio sigue inaccesible, y la solución es una transferencia del registro (接入备案) al nuevo proveedor. El sitio no se sirve desde el servidor nuevo hasta que esa transferencia se aprueba, de modo que también forma parte de la ruta crítica.

### ¿Podemos conservar nuestro tema actual?

A menudo, sí. Un tema puede trasladarse tal cual si nada en él llama a un servidor fuera de China mientras carga la página. La auditoría lo dirá. En los temas que cargan fuentes o scripts de Google, o que insertan vídeo alojado en el extranjero, hay que sustituir esas llamadas por archivos propios o servicios chinos antes del cambio.
