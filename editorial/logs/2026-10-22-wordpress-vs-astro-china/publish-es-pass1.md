---
title: "WordPress o Astro para un sitio en China"
subtitle: "Las peticiones de cada página y la frecuencia de publicación ayudan a elegir la tecnología para un sitio destinado a China."
summary: "WordPress o Astro para China: compare las peticiones al extranjero, el alojamiento y las tareas de publicación que asumirá su equipo."
visual: "/images/guides/wordpress-vs-astro-china.webp"
order: 49
published: true
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
reviewBy: "2026-11-20"
category: "Technology"
author: "cyril-drouin"
---

Elija WordPress si su equipo de marketing publica cada semana y no cuenta con un desarrollador. Un sitio estático generado con Astro encaja cuando los cambios son menos frecuentes y hay un desarrollador disponible. En ambos casos, conviene servirlo desde un servidor de China continental con el registro ICP correspondiente. Para valorar una alternativa a WordPress en China, examine cuántos servidores consulta cada página y qué ocurre si alguno está bloqueado. No hay una prueba publicada que compare ambas tecnologías desde China, por lo que esta guía no les atribuye diferencias de velocidad.

| Pregunta | WordPress | Sitio estático con Astro |
|---|---|---|
| ¿Qué servidores consulta la página? | Los del tema, los plugins y los scripts del navegador | Los de los archivos generados y los posibles scripts del navegador |
| ¿Qué peticiones salen del servidor? | Consultas de actualizaciones a api.wordpress.org | Ninguna; el servidor entrega archivos |
| ¿Quién puede publicar? | Cualquier persona con acceso | Un desarrollador o un editor mediante un CMS headless |
| ¿Cuándo aparece un cambio en la web? | Al guardar | Tras generar y desplegar el sitio |
| ¿Hace falta un registro ICP en un servidor continental? | Sí | Sí |

Todas las fuentes que siguen se comprobaron el 22 de octubre de 2026.

## Cada servidor extranjero puede añadir un cruce de frontera

Una página rara vez se carga con una sola petición. El HTML solicita una hoja de estilos y esta solicita una fuente. Un plugin incorpora un script de otro servidor, y una etiqueta de analítica añade otro. Antes de recibir una respuesta, una nueva conexión HTTPS sobre TCP exige resolver el nombre y establecer la conexión. La caché DNS y las conexiones reutilizadas pueden evitar parte de ese trabajo.

> En una primera petición, la latencia incluye una consulta DNS, el establecimiento de la conexión TCP y la negociación TLS. Cuantos más nombres de servidor haya, más consultas DNS serán necesarias.
> Fuente: MDN Web Docs, Understanding latency, febrero de 2025. https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Understanding_latency

Desde China, esos intercambios iniciales soportan el coste de cruzar la frontera. Cada negociación implica una ida y vuelta. Entre un teléfono en Chengdu y un servidor en Fráncfort o Virginia, la distancia ya pesa antes de que intervenga el filtrado.

> Chinafy probó 614 sitios internacionales con WebPageTest desde Pekín, Virginia y Londres. El tiempo hasta el primer byte resultó entre 4 y 4,5 veces mayor en Pekín. Es un estudio de un proveedor sobre sitios internacionales, sin desglose por plataforma.
> Fuente: Chinafy, China Website Performance Benchmarks 2026, abril de 2026. https://www.chinafy.com/blog/china-website-performance-benchmarks-2026

El tiempo hasta el primer byte termina antes de que llegue el contenido; el peso de la página no interviene en esa medida. Sí lo hacen los viajes de ida y vuelta y el procesamiento del servidor. Eliminar un origen extranjero innecesario puede ahorrar el establecimiento de una conexión y quitar un punto de fallo. El tamaño de las imágenes sigue contando una vez iniciada la descarga.

## Una conexión bloqueada puede retrasar la página

Una conexión bloqueada puede dejar al navegador esperando hasta que venza el plazo. El efecto depende de cómo falle la conexión y de la función que cumpla el recurso dentro de la página.

> GreatFire clasifica https://ajax.googleapis.com, el servidor de bibliotecas de Google, como bloqueado: falló 1 de 1 pruebas concluyentes en China continental; la última se realizó el 22 de agosto de 2026.
> Fuente: GreatFire, agosto de 2026. https://en.greatfire.org/https/ajax.googleapis.com

> Desde una instancia de Alibaba Cloud (阿里云) en Zhangjiakou, el 28 de agosto de 2026, la web de Google Hosted Libraries no devolvió ningún primer byte en 3 de 3 intentos, interrumpidos a los 60 segundos. 21YunBox cronometró la web; el veredicto sobre el servidor ajax.googleapis.com procede de GreatFire.
> Fuente: 21YunBox, Does Google Hosted Libraries Work in China?, revisado el 8 de octubre de 2026. https://www.21cloudbox.com/support/google-hosted-libraries.html

La posición de la referencia determina las consecuencias. Una hoja de estilos en la cabecera detiene la presentación de la página hasta que llega. MDN explica que, ante una etiqueta de script clásica, el navegador descarga y ejecuta el código antes de continuar analizando el documento.

> Un script clásico sin async ni defer se descarga y ejecuta antes de que prosiga el análisis del documento.
> Fuente: MDN Web Docs, The Script element, mayo de 2026. https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script

> El CSS bloquea el renderizado: el navegador espera a recibir y procesar las hojas de estilos para mostrar la página.
> Fuente: MDN Web Docs, Critical rendering path, febrero de 2025. https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Critical_rendering_path

Una sola referencia que bloquee el renderizado y apunte a un servidor inaccesible puede dejar al visitante ante una pantalla en blanco. Si copia el mismo archivo en su servidor, el navegador puede reutilizar la conexión abierta, aunque todavía deba descargarlo. Nuestra [guía de CDN JavaScript en China](/es/recursos/guia-web-china/cdn-javascript-china/) examina los servidores más habituales.

## Una alternativa a WordPress con dependencias que se pueden revisar

En WordPress, los servidores consultados cambian a medida que se modifica el sitio. Instalar un plugin el martes puede hacer que las páginas del miércoles llamen a un dominio nuevo. Un ajuste del tema modificado por marketing puede trasladar las fuentes a otro servidor sin cambiar una línea de código.

La generación con Astro deja al desarrollador archivos que puede inspeccionar antes de publicar.

> Por defecto, Astro genera las páginas, las rutas y los puntos de acceso API como páginas estáticas durante la compilación.
> Fuente: Astro Docs, On-demand rendering, actualizado el 19 de junio de 2026. https://docs.astro.build/en/guides/on-demand-rendering/

El resultado es una carpeta de archivos. Una búsqueda localiza las direcciones escritas en ellos, pero JavaScript puede construir otras peticiones al ejecutarse. Además, un script remoto puede cambiar sin que se genere una nueva versión del sitio. Revise tanto los archivos como la actividad de red del navegador. Mantener los scripts en el servidor propio facilita las revisiones posteriores.

> Astro admite scripts ejecutados en el navegador, incluidos los que se cargan desde otro servidor.
> Fuente: Astro Docs, Scripts and event handling, actualizado el 19 de junio de 2026. https://docs.astro.build/en/guides/client-side-scripts/

| Quién envía la petición | WordPress en un servidor continental | Sitio estático en un servidor continental |
|---|---|---|
| Navegador del visitante | Recursos del tema y los plugins, y lo que se añada desde la administración | Recursos generados y peticiones de los scripts del navegador |
| Servidor | Consultas de actualizaciones a api.wordpress.org | Ninguna; entrega archivos |
| Navegador del editor | Gravatar en la interfaz de administración predeterminada | Acceso al CMS, si lo hay, donde esté alojado |
| Quién puede añadir un servidor | Quien instale plugins o modifique integraciones | Desarrolladores, contenido incrustado desde el CMS o proveedores de scripts remotos |

Un equipo de WordPress disciplinado también puede mantener una lista corta y estable de servidores. Requiere auditar los plugins y rechazar nuevas incorporaciones cuando corresponda. En un sitio estático, limitar los scripts externos y los elementos incrustados por los editores facilita revisar esa lista.

## Las peticiones que WordPress hace por su cuenta

Un servidor WordPress envía peticiones sin que intervenga ningún visitante. Consulta las actualizaciones en WordPress.org por HTTPS y, si falla, reintenta por HTTP. Desde un servidor continental, esa petición llega a un servicio que limita las solicitudes procedentes de algunas redes chinas.

> WordPress 7.1.3 consulta su versión en api.wordpress.org con un tiempo de espera de 3 segundos fuera de las tareas programadas.
> Fuente: código de WordPress 7.1.3, wp-includes/update.php, consultado el 22 de octubre de 2026. https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/update.php

> En respuesta a un aviso de errores 429 desde China, el personal de WordPress.org explicó que varias redes chinas estaban sujetas a límites en ciertos servicios por el elevado volumen de abusos y tráfico ilegítimo procedente de ellas.
> Fuente: WordPress.org Meta Trac, incidencia n.º 5106, marzo de 2020. https://web.archive.org/web/20260116133057/https://meta.trac.wordpress.org/ticket/5106

El panel no anuncia el error 429; las actualizaciones dejan de aparecer. La propia administración añade otra dependencia. WordPress forma por defecto las direcciones de los avatares en secure.gravatar.com, incluido el de la barra de administración.

> GreatFire clasifica https://secure.gravatar.com como bloqueado: falló 1 de 1 pruebas concluyentes en China continental; la última se realizó el 31 de agosto de 2026.
> Fuente: GreatFire, agosto de 2026. https://en.greatfire.org/https/secure.gravatar.com

La petición del avatar sale del navegador del editor, por lo que afecta a un equipo de Shanghái con independencia de dónde esté alojada la web. Nuestra [guía sobre la lentitud de wp-admin en China](/es/recursos/guia-web-china/wp-admin-lento-china/) recoge los cambios necesarios. Un sitio estático servido desde el continente carece de pantalla de administración y de consultas de actualización. El servidor entrega archivos sin realizar esas llamadas.

## Un sitio estático en Vercel sigue estando fuera de China

Un sitio estático también necesita elegir alojamiento. El lugar donde se guardan los archivos influye en que un visitante de China pueda recuperarlos.

La web de ChinaWebFoundry, incluida esta página, está construida con Astro y desplegada en Vercel. Se dirige a lectores de fuera de China. Vercel explica las limitaciones que esto supone para los visitantes del continente.

> Vercel no tiene servidores ni nodos CDN en China continental. Los controles de red chinos pueden bloquear o ralentizar el tráfico hacia dominios extranjeros, incluidos los subdominios .vercel.app. Vercel no garantiza la disponibilidad ni el rendimiento dentro de China continental.
> Fuente: Vercel Knowledge Base, Accessing Vercel-hosted sites from mainland China, publicado el 3 de noviembre de 2025 y actualizado el 11 de septiembre de 2026. https://vercel.com/kb/guide/accessing-vercel-hosted-sites-from-mainland-china

> GreatFire clasifica https://vercel.app como bloqueado: fallaron 4 de 4 pruebas concluyentes en China continental; la última se realizó el 14 de septiembre de 2026.
> Fuente: GreatFire, septiembre de 2026. https://en.greatfire.org/https/vercel.app

La lista de soluciones de Vercel termina con un despliegue separado en el continente, que exige lo que denomina «ICP license». En la terminología china, una web corporativa de marketing alojada en un servidor continental necesita el registro ICP (ICP备案). La licencia ICP (ICP许可证) es un permiso distinto para servicios comerciales regulados de información en Internet. La actividad determina qué autorizaciones se necesitan.

> Alibaba Cloud exige completar el registro ICP antes de publicar un sitio en un nodo continental; sus servidores de Hong Kong y del extranjero no lo requieren.
> Fuente: Alibaba Cloud (阿里云), descripción del registro ICP, agosto de 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview

Un servidor de origen continental evita descargar desde el extranjero los archivos que aloja. En los sitios de clientes que gestionamos, la compilación se ejecuta en una cadena de integración continua fuera de China. Después se transfieren los archivos a Alibaba Cloud, Tencent Cloud (腾讯云) o Huawei Cloud (华为云).

## Lo que exige un sitio estático al equipo de marketing

No hay una pantalla de edición que el equipo de marketing reconozca. Salvo que se añada un CMS, los contenidos residen en archivos Markdown dentro de un repositorio de código. Los plugins de WordPress no se instalan directamente en Astro. Un formulario de contacto, un aviso de cookies, la búsqueda interna o la suscripción a un boletín requieren código o una integración que alguien configure y mantenga.

Cada cambio pasa por una compilación. La edición se registra en un commit, este activa la generación y el resultado se envía al servidor. Una errata descubierta a las seis de la tarde debe esperar a que termine el proceso.

El desarrollador también interviene en tareas que WordPress permite resolver a marketing, como una nueva distribución de página o un campo adicional en un formulario.

Un CMS headless reduce parte de esa carga.

> WordPress puede proporcionar contenido a un proyecto Astro como CMS headless mediante la API REST que todos los sitios WordPress exponen por defecto.
> Fuente: Astro Docs, Headless WordPress & Astro, actualizado el 19 de octubre de 2026. https://docs.astro.build/en/guides/cms/wordpress/

Los editores conservan el panel que conocen. WordPress puede alojarse fuera de China, donde funcionan sus consultas de actualización, mientras el servidor continental recibe únicamente los archivos generados. Los plugins de la parte pública, como constructores de páginas y formularios, necesitan una integración específica porque Astro produce las páginas.

## Cuándo conviene elegir WordPress

Si marketing publica todas las semanas y no dispone de un desarrollador habitual, WordPress es la mejor elección.

Un equipo que publica tres entradas y una página de campaña por semana necesita hacerlo sin abrir una solicitud técnica. WordPress le da borradores, publicaciones programadas, revisiones, roles y una vista previa que corresponde a la página pública. Un sitio estático necesita un CMS u otro proceso editorial para proporcionar esas funciones.

También conviene cuando la web es el producto. Áreas de socios, cursos en línea, reservas o un catálogo WooCommerce que cambia a diario son terreno de los plugins. Presupueste su sustitución antes de optar por una arquitectura estática.

Los problemas propios de China tienen soluciones conocidas. Retire las peticiones de avatares remotos. Descargue y verifique las actualizaciones fuera de China antes de llevarlas al servidor continental. Aloje los scripts y las fuentes en su servidor cuando sus licencias lo permitan. Nuestra [guía de velocidad de WordPress en China](/es/recursos/guia-web-china/velocidad-wordpress-china/) explica esas medidas, y la página [WordPress en China](/es/wordpress-en-china/) detalla cómo operamos esta tecnología en un servidor continental. Alguien debe seguir responsabilizándose de esos controles tras el lanzamiento.

Cuente quién editará la web el mes próximo y con cuántos desarrolladores podrá contar. Si hay más editores que desarrolladores y cambios semanales, mantenga WordPress bien cuidado. Para una web que cambia cada mes y dispone de un desarrollador, la opción estática requiere menos trabajo en China.

## Preguntas frecuentes

**¿Astro es más rápido que WordPress en China?**

Ninguna prueba publicada compara ambos desde China, y no presentamos tal comparación. Cambian los servidores a los que se conecta cada página y el riesgo de que uno bloqueado retrase la carga. WordPress también puede cargar rápido desde un servidor continental registrado si se retiran las llamadas a terceros. Nuestra página de [Astro](/es/astro/) explica cómo construimos la versión estática.

**¿Baidu puede leer un sitio de Astro?**

Sí. Ambas tecnologías pueden entregar HTML completo en la primera respuesta, lo que facilita el rastreo. Baidu (百度) anunció Baiduspider-render/2.0 el 24 de marzo de 2017 para recuperar CSS, JavaScript e imágenes. No publica el alcance efectivo de su renderizado. Entregar HTML completo sigue siendo una opción prudente que ambas permiten.

> Baidu anunció Baiduspider-render/2.0 el 24 de marzo de 2017 para recuperar CSS, JavaScript e imágenes.
> Fuente: Baidu Search Resource Platform (百度搜索资源平台), marzo de 2017. https://ziyuan.baidu.com/wiki/990

**¿Podemos mantener WordPress y servir una web estática?**

Sí, con WordPress como CMS headless. Los editores escriben en el panel y Astro obtiene los contenidos mediante la API REST durante la compilación. Solo los archivos generados llegan al servidor continental. Los plugins de la parte pública no pasan automáticamente a Astro, y cada cambio espera a la siguiente compilación para publicarse.

**¿Cuesta menos mantener una web estática?**

No publicamos precios. Una web estática prescinde del servidor PHP y de la base de datos que habría que actualizar, por lo que aligera el alojamiento y el mantenimiento. Los cambios de diseño o funcionalidad consumen, en cambio, horas de desarrollo. Pida una estimación basada en su calendario de publicación y en las herramientas que necesitan los editores.

**¿Una web estática también necesita un registro ICP?**

Sí, cuando se sirve desde un servidor continental. El requisito depende del alojamiento, con independencia de la tecnología. Un sitio estático en los nodos continentales de Alibaba Cloud necesita el registro ICP (ICP备案) antes de publicarse, igual que WordPress. Un servidor de Hong Kong no lo necesita; sus archivos cruzan la frontera para llegar al visitante continental.
