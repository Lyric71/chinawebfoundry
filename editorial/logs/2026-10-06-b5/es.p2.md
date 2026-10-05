---
title: "Cómo encargar una web para China: la checklist"
subtitle: "Qué conviene especificar antes de dirigirse a una agencia web en China, y qué respuestas distinguen a un especialista de un generalista."
summary: "Un brief pensado para Occidente olvida seis puntos de los que depende todo proyecto en China. La checklist para cualquier proveedor, nosotros incluidos."
visual: "/images/guides/china-website-brief-checklist.webp"
order: 39
published: true
publishedAt: "2026-10-06"
updatedAt: "2026-10-06"
category: "Technology"
author: "cyril-drouin"
faqSchema: true
---

Una solicitud de propuestas para una web en China necesita seis apartados que un brief occidental rara vez incluye: la entidad y el registro, la decisión sobre el alojamiento, la tecnología y la propiedad, los contenidos en chino, la visibilidad en buscadores y asistentes de IA, y quién conserva las llaves cuando la web ya está publicada. Si faltan, cada proveedor cubre los huecos con sus propias suposiciones y los presupuestos que llegan acaban describiendo proyectos distintos.

La checklist está al final de la página, en texto plano. Envíela a todos los proveedores de su lista corta, también a nosotros. Las normas de los proveedores de alojamiento citadas en esta página se verificaron de nuevo en su fuente el 1 de octubre de 2026.

| Apartado                       | Qué debe precisar el brief                                  | Qué falla si no está                                 |
| ------------------------------ | ----------------------------------------------------------- | ---------------------------------------------------- |
| Entidad y registro             | Qué empresa china presenta el registro, y cuándo            | La web está terminada y no puede abrirse             |
| Alojamiento                    | Servidor en China continental, o el motivo para descartarlo | Dos proveedores presupuestan dos proyectos distintos |
| Tecnología y propiedad         | Plataforma, cuentas y condiciones de salida                 | El proveedor es dueño del servidor que usted paga    |
| Contenidos en chino            | Quién aprueba los textos y adónde van los formularios       | Los datos salen de China sin consentimiento          |
| Buscadores y asistentes de IA  | El trabajo en Baidu más allá de la verificación             | Un sitemap enviado y nada más                        |
| Mantenimiento y accesos        | Cómo llegan las actualizaciones a un servidor en China      | Las actualizaciones se detienen sin que nadie lo note |

## Lo que un brief convencional deja fuera

En China continental, una web terminada puede pasar semanas a oscuras, porque el servidor no sirve su dominio hasta que se aprueba un registro administrativo.

> Un dominio que resuelve a un servidor situado en China continental debe completar su registro antes de que pueda abrirse el acceso al sitio.
> Fuente: centro de ayuda de Alibaba Cloud (阿里云), 4 de septiembre de 2026.
> https://help.aliyun.com/zh/dws/support/how-do-i-troubleshoot-the-failures-to-access-a-website-by-using-its-domain-name

Esa norma, por sí sola, trastoca el orden del proyecto: nadie puede comprometer un calendario mientras el brief no diga qué entidad firma el registro. Un brief occidental, además, da por buenos los scripts de terceros que carga la web y el alojamiento favorito de la agencia, despacha los textos en chino como una simple traducción y deja Baidu en manos de un plugin.

## Apartado por apartado: qué debe cubrir la solicitud de propuestas de una web para China

Seis apartados, en el orden en que un proveedor necesita leerlos.

### Entidad y registro

El registro ICP (ICP备案) lo presenta una empresa constituida en China continental. Indique cuál, y si ya existe.

> Las cuentas internacionales de Alibaba Cloud (alibabacloud.com) no admiten el registro ICP. El titular debe ser una empresa registrada en China continental o un residente de China continental, con una cuenta de aliyun.com.
> Fuente: centro de ayuda de Alibaba Cloud (versión en inglés), 20 de agosto de 2026.
> https://help.aliyun.com/en/icp-filing/basic-icp-service/product-overview/icp-filing-application-for-enterprises-outside-the-chinese-mainland

En el plan de cada proveedor, el registro debe aparecer como una etapa propia, con sus semanas asignadas.

> La revisión inicial de Alibaba Cloud tarda de 1 a 2 días hábiles. La Administración Provincial de Comunicaciones (省级通信管理局) suele tardar de 1 a 20 días hábiles. El registro ante la seguridad pública (公安备案) debe hacerse en los 30 días siguientes a la apertura del sitio.
> Fuente: centro de ayuda de Alibaba Cloud (阿里云), 26 de agosto de 2026.
> https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview

Si la web va a vender servicios en línea de pago, conviene decirlo: puede hacer falta una licencia ICP (ICP许可证), un trámite aparte y bastante más lento. Nuestra guía sobre [el registro ICP para empresas extranjeras](/es/recursos/guia-web-china/licencia-icp-empresas-extranjeras/) detalla la documentación necesaria.

### La decisión sobre el alojamiento

Pida un servidor de origen en China continental, o una justificación por escrito para alojar la web en Hong Kong o más lejos, respaldada por tiempos de carga medidos desde una red de China continental. Y un servidor en China continental lleva aparejado un registro, vinculado a ese mismo servidor.

> Para registrarse con Alibaba Cloud hace falta un servidor en China continental contratado por un mínimo de 3 meses.
> Fuente: centro de ayuda de Alibaba Cloud (versión en inglés), 24 de septiembre de 2026.
> https://help.aliyun.com/en/icp-filing/basic-icp-service/user-guide/icp-filing-server-access-information-check

El servidor, por tanto, se compra primero, a nombre de la entidad que presenta el registro.

Déjelo por escrito.

### Tecnología y propiedad

Indique qué plataforma tiene en mente, o pida a cada proveedor que proponga una y la defienda. Tanto WordPress como Astro funcionan sin problema en China continental. La elección depende de quién vaya a editar la web y de los sistemas con los que deba conectarse.

Si es WordPress, pregunte quién gestiona el servidor, porque no hemos encontrado ninguna nube china que venda WordPress gestionado. El Simple Application Server (轻量应用服务器) de Alibaba Cloud lo instala a partir de una imagen predefinida en un servidor que usted administra, Lighthouse de Tencent Cloud (腾讯云) y FlexusL de Huawei Cloud (华为云) funcionan igual, y ninguno se encargará de parchear un plugin ni de restaurar una copia de seguridad por usted. Las actualizaciones y las copias recaen en alguien, y el brief debe decir en quién.

Enumere todas las cuentas que abre el proyecto (aliyun.com, registrador del dominio, administración del CMS, analítica) y exija que todas estén a nombre del cliente.

### Contenidos en chino

Traducir y redactar en chino son trabajos distintos. Diga cuál quiere y quién aprueba el texto chino en su empresa (y cuánto tiempo le lleva en realidad).

Indique después adónde van a parar los datos de los formularios. Un formulario de contacto que alimenta un CRM fuera de China conlleva una obligación legal.

> Quien trate datos personales y los transfiera fuera de la República Popular China debe informar a la persona de quién los recibe y obtener su consentimiento específico.
> Fuente: Administración del Ciberespacio de China (中央网络安全和信息化委员会办公室), Ley de Protección de Información Personal, artículo 39, 20 de agosto de 2021.
> https://www.cac.gov.cn/2021-08/20/c_1631050028355286.htm

### Buscadores y asistentes de IA

Tanto Yoast como Rank Math almacenan un código de verificación de Baidu (百度).

> Los ajustes «Site connections» de Yoast SEO contienen el código de verificación de Baidu Webmaster Tools.
> Fuente: centro de ayuda de Yoast, actualizado el 29 de abril de 2026.
> https://yoast.com/help/add-website-baidu-webmaster-tools/

Al revisar el código de ambos plugins en agosto de 2026 comprobamos que esa etiqueta era lo único específico de Baidu que generaban. El envío de URL, Baidu Tongji (百度统计), los datos estructurados en formato Baidu y las reglas de robots.txt para Baiduspider se hacen a mano. Alguien tiene que encargarse, y la respuesta debe decir quién.

Después viene el renderizado. Baidu anunció su rastreador con renderizado, Baiduspider-render/2.0, en marzo de 2017 y no publica nada sobre cuánto renderiza, de modo que el HTML generado en el servidor es la opción de menor riesgo. Pregunte también qué asistentes de IA chinos revisa el proveedor para comprobar si su marca aparece en las respuestas. DeepSeek, Doubao (豆包), Kimi, Qwen (通义千问) y Yuanbao (元宝) son los nombres que deberían oírse.

### Mantenimiento y quién guarda las llaves

¿Cómo llegan las actualizaciones del núcleo y de los plugins a un servidor en China continental?

> Personal de WordPress.org escribió que varias fuentes de red chinas tienen limitado el tráfico en determinados servicios por abusos, y que no habría lista blanca.
> Fuente: WordPress.org Meta Trac, ticket n.º 5106, 21 de marzo de 2020.
> https://web.archive.org/web/20260116133057/https://meta.trac.wordpress.org/ticket/5106

¿Qué scripts externos seguirán en la página? Un tema que carga jQuery desde ajax.googleapis.com deja la página bloqueada mientras espera una respuesta.

> En una prueba desde una instancia de Alibaba Cloud (阿里云) en cn-zhangjiakou el 28 de agosto de 2026, Google Hosted Libraries no devolvió el primer byte en ninguna de las 3 ejecuciones, cada una abandonada a los 60 segundos.
> Fuente: 21YunBox, Google Hosted Libraries in China, 30 de agosto de 2026.
> https://www.21cloudbox.com/support/google-hosted-libraries.html

Queda la salida. Un proveedor que tiene el acceso al servidor y el dominio puede frenar cualquier cambio de proveedor. Detalle lo que debe entregarse el último día del contrato.

## Las preguntas que los proveedores deben responder por escrito

Nuestra guía para [elegir una agencia web en China](/es/recursos/guia-web-china/elegir-agencia-web-china/) recoge ocho preguntas para la primera llamada. Estas siete deben contestarse por escrito, porque las respuestas acaban convertidas en cláusulas del contrato.

1. ¿A nombre de quién está el registro ICP y qué cuenta de aliyun.com tiene el servidor?
2. ¿Cuántas semanas reserva su plan para el registro y qué avanza en paralelo?
3. ¿A qué servidores de terceros, con nombre y apellidos, seguirá llamando la web terminada?
4. ¿Qué tiempo de carga se compromete a cumplir, medido desde qué red de China continental y en qué fecha?
5. ¿Cómo llegan las actualizaciones al servidor y quién las aplica?
6. ¿Adónde van los envíos de los formularios y con qué consentimiento?
7. Al terminar el contrato, ¿recibimos los archivos y la base de datos con credenciales completas de administración?

## Señales de alarma en las respuestas

| Respuesta                                             | Lo que le indica                                               |
| ----------------------------------------------------- | -------------------------------------------------------------- |
| «La alojaremos en nuestra cuenta»                     | El servidor del que depende el registro no será suyo           |
| Una fecha de lanzamiento sin semanas para el registro | El plan se escribió para un lanzamiento occidental             |
| Un tiempo de carga sin red ni fecha                   | No hay forma de saber dónde se midió, ni siquiera si se midió  |
| «Nuestro plugin de SEO cubre Baidu»                   | El plugin se ocupa de la verificación y ahí se queda           |
| Ningún número ICP en el pie de su propia web          | Pregunte por qué: su propia web registrada es la prueba más fácil |
| Silencio sobre adónde van los datos de los formularios | Los datos personales pueden salir de China sin consentimiento |

La comprobación del pie de página lleva diez segundos, y una web registrada tiene que superarla.

> Una vez registrado, un sitio debe mostrar su número de registro ICP al pie de la página, con enlace a beian.miit.gov.cn. Omitirlo puede acarrear una multa de 5.000 a 10.000 yuanes de la Administración Provincial de Comunicaciones.
> Fuente: centro de ayuda de Alibaba Cloud (阿里云), 12 de agosto de 2026.
> https://help.aliyun.com/zh/icp-filing/basic-icp-service/the-icp-record-post-processing-1

## La checklist

Cópiela tal cual y después ajuste la redacción al estilo de su empresa.

- Entidad del registro: la empresa constituida en China continental que tendrá el registro ICP, y si existe hoy.
- Tipo de registro: registro ICP, o licencia ICP si la web vende servicios en línea de pago.
- Plazo del registro: las semanas previstas en el plan, más el registro ante la seguridad pública en los 30 días siguientes al lanzamiento.
- Servidor: proveedor y región en China continental, contrato de al menos 3 meses, comprado a nombre de la entidad del registro.
- Cuentas: aliyun.com, registrador del dominio, administración del CMS y analítica, todas a nuestro nombre.
- Plataforma: con nombre, y con el motivo por el que encaja con nuestra forma de editar.
- Servidores de terceros: todo lo que la web llama hoy y lo que la web terminada seguirá llamando.
- Tiempo de carga: un objetivo, la red de China continental desde la que se mide y la fecha.
- Textos en chino: redactados o traducidos, por quién, y quién los aprueba.
- Formularios: dónde se guardan los envíos y el texto del consentimiento.
- Baidu: verificación, envío de URL, Baidu Tongji, renderizado.
- Asistentes de IA: qué asistentes chinos se siguen y cómo.
- Actualizaciones: cómo llegan las actualizaciones del núcleo y de los plugins a un servidor en China continental, y quién las aplica.
- Salida: archivos y base de datos devueltos con credenciales de administración.
- Presupuesto: desglosado por partidas, con el registro, el alojamiento, los textos en chino y el trabajo en Baidu en líneas separadas.
- Prueba: una web en funcionamiento que gestione el proveedor, con un número ICP en el pie de página.

## Preguntas frecuentes

**¿Puede una misma solicitud de propuestas dirigirse a proveedores de dentro y de fuera de China?**
Sí. La misma lista separa a los proveedores que registran y alojan por su cuenta en China continental de los que subcontratan. Pida a cada uno que marque los puntos que delega en un socio y que diga quién es ese socio. Una casilla en blanco junto a la entidad del registro o al servidor dice más que el resto de la respuesta.

**¿Necesitamos una empresa en China antes de hablar con nadie?**
La necesita antes del registro, que marca el camino crítico del proyecto. Puede hablar con proveedores mientras se constituye la empresa, pero no espere una fecha de lanzamiento firme hasta que exista la licencia comercial. Indique en el brief en qué punto está la constitución y cuándo espera la licencia, para que todos los proveedores planifiquen a partir de la misma fecha.

**¿Debe la solicitud de propuestas exigir WordPress?**
Solo si su equipo ya trabaja con WordPress y quiere seguir haciéndolo. Si no, deje que cada proveedor proponga una plataforma y la justifique según sus hábitos de edición y sus integraciones. [Una agencia web que registra y aloja en China](/es/agencia-web-china/) debería poder defender cualquiera de las dos opciones.

**¿Qué debe decir la solicitud de propuestas sobre el presupuesto?**
Dé una horquilla si la tiene. En cualquier caso, pida un precio por cada línea de la checklist. Los presupuestos para China se diferencian sobre todo en lo que dejan fuera: el apoyo en el registro, el servidor en China continental, los textos en chino y el trabajo en Baidu son las partidas que desaparecen o reaparecen en la letra pequeña como responsabilidad del cliente.

**¿Cuánto tiempo hay que dar a los proveedores para responder?**
Entre dos y tres semanas, si se espera una respuesta detallada con plan de proyecto. Pida un calendario con fechas en el que el registro figure en una línea propia y la compra del servidor aparezca antes. Si el plan pone la web en marcha antes de que se apruebe el registro, devuélvalo.
