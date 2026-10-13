---
title: "Registro ICP de un sitio WordPress"
subtitle: "La parte WordPress del registro ICP: qué revisa el examen en el propio sitio y cómo encajar la construcción en ese calendario."
summary: "Lo que el registro ICP exige del propio sitio: un dominio apagado durante la revisión, un nombre y un contenido acordes con el expediente y su lugar en el proyecto."
visual: "/images/guides/wordpress-icp-filing.webp"
order: 43
published: true
publishedAt: "2026-10-13"
updatedAt: "2026-10-13"
reviewBy: "2027-01-09"
category: "Legal"
author: "echo-peng"
---

Casi todo el registro ICP (ICP备案) gira en torno a la empresa: una entidad de China continental que lo respalda y un servidor en el continente al que va vinculado. Pero la revisión también se fija en el sitio WordPress. Su dominio necesita un registrador del continente y el nombre del solicitante como titular. El nombre del sitio tiene que estar en chino y cumplir las normas de la provincia, y el contenido debe coincidir con lo declarado. Durante un primer registro, el sitio permanece apagado hasta que se asigna el número. Solo un sitio que cobra a sus usuarios necesita, además, la licencia ICP.

| Qué revisa el examen | Qué supone para el sitio WordPress |
| --- | --- |
| El dominio | Verificación de identidad en un registrador del continente, a nombre del solicitante |
| El nombre del sitio | Tres o más caracteres chinos, usados como título del sitio |
| El contenido | Acorde con la actividad de la empresa; ningún tema regulado sin autorización |
| La accesibilidad durante la revisión | Ninguna. Ni página de espera ni entorno de pruebas en el servidor del continente |
| El pie de página, tras la aprobación | El número ICP enlazado al MIIT y, después, el número de seguridad pública |

Todas las fuentes citadas a continuación se comprobaron el 13 de octubre de 2026.

## Registro o licencia ICP: ¿cobra el sitio por algo?

China divide los servicios de información en internet en dos tipos. La norma cabe en dos frases.

> Los servicios comerciales de información en internet proporcionan a los usuarios, previo pago, información o servicios de producción de páginas web. Los servicios no comerciales ofrecen a los usuarios, de forma gratuita, información pública y compartida.
> Fuente: Consejo de Estado, Medidas para la Administración de los Servicios de Información en Internet (互联网信息服务管理办法), artículo 3, texto del 8 de enero de 2011, que la revisión del 6 de diciembre de 2024 dejó intacto. https://www.gov.cn/gongbao/content/2011/content_1860864.htm

Una web corporativa, un blog, un catálogo de productos o una página de empleo se leen gratis, así que necesitan el registro. Un muro de pago o un plugin de membresía que vende cursos apunta a la licencia, y ese camino requiere un asesor acreditado.

La tienda WooCommerce es el caso que suscita debate. La lista negativa china de inversión extranjera excluye el comercio electrónico del límite del 50 % de participación extranjera en las telecomunicaciones de valor añadido, lo que indica que las tiendas forman una categoría propia. Dónde encaja la suya es una pregunta para un asesor, y conviene hacerla antes de presentar el registro. [Nuestra guía sobre el registro ICP para empresas extranjeras](/es/recursos/guia-web-china/licencia-icp-empresas-extranjeras/) explica la licencia, el límite de participación y las zonas piloto.

## Lo que el registro pide al sitio, no a la empresa

Hay tres elementos del lado del sitio que pueden hundir una solicitud antes de que ninguna persona llegue a mirarla.

**El dominio.** Alibaba Cloud (阿里云) enumera tres requisitos, y ninguno tiene que ver con el alojamiento.

> El sufijo del dominio debe estar aprobado por el MIIT, el registrador debe estar autorizado y los datos del titular deben coincidir con los de la entidad solicitante. Los dominios registrados en el sitio internacional de Alibaba Cloud deben transferirse a un registrador del continente y superar la verificación de identidad antes del registro.
> Fuente: centro de ayuda de Alibaba Cloud (阿里云), preparación y comprobación del dominio, actualizado el 23 de septiembre de 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/prepare-and-check-the-domain-name

La misma página exige que al dominio le queden más de 45 días antes de caducar. Un dominio que su agencia europea registró a su propio nombre no supera el tercer requisito desde el primer día.

**El nombre del sitio.** Es el campo en el que tropiezan los equipos de WordPress. Tiene que estar en chino y decidirse pronto, porque acaba convertido en el título del sitio.

> El nombre de un sitio web corporativo debe tener tres o más caracteres chinos. No se admiten solo números, inglés ni nombres de dominio, y el nombre debe corresponderse con el contenido real del sitio. Las entidades no estatales no pueden usar términos como 中国, 中华 o 国家, y palabras como blog, foro, en línea o comunidad requieren aprobación previa.
> Fuente: centro de ayuda de Alibaba Cloud (阿里云), cumplimentación de la información del sitio, actualizado el 21 de septiembre de 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/fill-in-website-information

Las provincias añaden sus propias palabras prohibidas. La lista de motivos de rechazo de Alibaba (7 de julio de 2026) pide que un sitio registrado muestre el nombre declarado en la pestaña del navegador y en la parte superior de la página, de modo que es el título del sitio, en Ajustes > Generales, el que lo lleva.

**El contenido.** Tencent Cloud (腾讯云) indica que el registro de una empresa debe referirse al sitio propio de la empresa, con un contenido dentro de su ámbito de actividad (documentación actualizada el 23 de julio de 2026). Algunos temas necesitan el visto bueno de un regulador antes incluso de presentar el registro.

> Los servicios de información en internet de noticias, edición, educación y ámbitos similares que requieran la aprobación del departamento competente deben obtenerla antes de solicitar una licencia o completar el registro.
> Fuente: Consejo de Estado, Medidas para la Administración de los Servicios de Información en Internet, artículo 5 en la redacción del Decreto 797 del Consejo de Estado, de 6 de diciembre de 2024, en vigor desde el 20 de enero de 2025. https://www.mee.gov.cn/zcwj/gwywj/202412/t20241216_1098631.shtml

La lista de aprobaciones previas de Alibaba es más amplia.

| Contenido del sitio WordPress | Qué necesita antes del registro |
| --- | --- |
| Noticias o actualidad | Una licencia de servicios de información de noticias en internet |
| Edición en línea | Una licencia de servicios de edición en línea |
| Información sobre medicamentos o productos sanitarios | Un certificado de servicios de información sobre medicamentos |
| Programas de vídeo y audio | Una licencia de programas audiovisuales |
| Clases de refuerzo extraescolares, finanzas, religión | La aprobación del regulador del sector |
| Ninguno de ellos | En algunas regiones, una declaración firmada |

Fuente de la tabla: centro de ayuda de Alibaba Cloud (阿里云), aprobaciones previas, actualizado el 21 de agosto de 2026.

## Apagado durante la revisión: nada de página de espera

En un primer registro, el sitio no puede estar en línea mientras el regulador lo examina. Tencent lo dice sin rodeos.

> Durante la revisión de un nuevo registro o de un nuevo sitio web, no se puede acceder al sitio. Debe estar cerrado o resultar inaccesible a través de su dominio público o su IP; de lo contrario, no supera la comprobación del regulador y puede ser rechazado.
> Fuente: documentación de Tencent Cloud (腾讯云), actualizada el 21 de agosto de 2026. https://cloud.tencent.com/document/product/243/19650

Alibaba también lo aplica.

> Un sitio no puede abrir el servicio web antes de tener un número de registro. Si lo hace, el sistema de supervisión de Alibaba Cloud lo detecta y bloquea el sitio.
> Fuente: centro de ayuda de Alibaba Cloud (阿里云), preguntas frecuentes sobre el registro ICP, actualizado el 23 de septiembre de 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/support/faq-about-icp-filing-preparations

Un plugin de «próximamente» en el servidor del continente es un error, y también lo es una copia de pruebas en su IP pública. En nuestros proyectos, los puertos 80 y 443 permanecen cerrados hasta que llega el número de todos modos.

¿Va a registrar el dominio en el que ya funciona su web internacional? La frase de Tencent no contempla ninguna excepción para un sitio alojado en otro lugar, así que consulte al proveedor antes de presentar la solicitud.

La construcción continúa en otra parte, en una copia de pruebas local o alojada fuera de China. El periodo de revisión es un buen momento para eliminar las dependencias bloqueadas ([nuestra guía para migrar WordPress a China](/es/recursos/guia-web-china/migrar-wordpress-a-china/) las enumera).

| Cuándo | El registro | La construcción en WordPress |
| --- | --- | --- |
| Antes de presentar | Entidad, dominio, nombre chino del sitio, servidor | Fijar el título del sitio; decidir sobre comentarios y formularios |
| Revisión (calculamos de 3 a 6 semanas) | Comprobación del proveedor y, después, revisión provincial | Entorno de pruebas fuera del servidor del continente; corregir dependencias |
| Llega el número | Registro aprobado | Despliegue, número en el pie, dominio apuntando al servidor |
| En los 30 días siguientes a la apertura | Registro ante la seguridad pública | Segundo número en el pie |

De tres a seis semanas es nuestra cifra de planificación. Sobre el papel, es menos.

> La comprobación propia de Alibaba Cloud tarda de 1 a 2 días hábiles. La revisión posterior de la Administración provincial de Comunicaciones (省级通信管理局) suele llevar de 1 a 20 días hábiles.
> Fuente: centro de ayuda de Alibaba Cloud (阿里云), resumen del proceso de registro ICP, actualizado el 26 de agosto de 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview

Alibaba no cobra nada por el registro en sí; se paga el servidor del continente al que va vinculado (preguntas frecuentes actualizadas el 23 de abril de 2026).

En WordPress, lo primero que hay que retirar antes de abrir el sitio son los comentarios y los foros.

En este punto, las normas y los proveedores no coinciden. El artículo 9 de las medidas del Consejo de Estado sigue mencionando una solicitud especial para los servicios de tablón electrónico (foros y tablones de mensajes). Pero el Consejo de Estado suprimió esa aprobación, y el ministerio derogó sus normas sobre estos servicios el 23 de septiembre de 2014. La lista de rechazos de Alibaba sigue citando los contenidos de tablón electrónico entre los temas que requieren aprobación, y es el proveedor quien hace la primera revisión de su expediente.

No hemos encontrado ninguna página actual sobre el registro que trate los simples comentarios de un blog. Así que abra el sitio con los comentarios desactivados y bbPress o BuddyPress desinstalados, y consulte al proveedor antes de volver a activar nada.

## Por qué WordPress.com no se puede registrar

WordPress.com ofrece centros de datos en US West, US Central, US East y EU West (página de ayuda revisada el 21 de septiembre de 2026). Ninguno está en China continental, y el registro lo presenta quien proporciona el acceso a la red del servidor.

> Un servidor comprado en otro sitio no se puede registrar en Tencent Cloud. El registro sigue el principio de que quien da el acceso es quien registra: se registra con el proveedor cuyo servidor se utiliza.
> Fuente: documentación de Tencent Cloud (腾讯云), actualizada el 30 de enero de 2026. https://cloud.tencent.com/document/product/243/19631

Un sitio de WordPress.com que tenga que vivir en China pasa a ser un WordPress autoalojado en un servidor del continente, la arquitectura que describe [nuestra página sobre WordPress en China](/es/wordpress-en-china/).

Que cargue o no en China es otra cuestión, y la respuesta de GreatFire es mejor que la de las guías más antiguas.

> GreatFire considera que https://wordpress.com no está bloqueado: las 20 pruebas concluyentes recientes desde China continental se conectaron con normalidad, la última el 11 de octubre de 2026.
> Fuente: GreatFire, ficha de accesibilidad de https://wordpress.com, consultada el 13 de octubre de 2026. https://en.greatfire.org/https/wordpress.com

El dominio en su conjunto es más irregular: de 1.516 direcciones de wordpress.com analizadas, 230 figuran como bloqueadas y 823 como perturbadas (página del dominio en GreatFire, 13 de octubre de 2026).

## La consola de registro y quién se ocupa de ella en su empresa

El registro se tramita en la consola de un proveedor, y no da igual qué cuenta se abra. En Alibaba tiene que ser una cuenta de aliyun.com.

> Las cuentas del sitio internacional de Alibaba Cloud (alibabacloud.com) no admiten solicitudes de registro ICP.
> Fuente: centro de ayuda de Alibaba Cloud, registro ICP para empresas fuera de China continental, actualizado el 20 de agosto de 2026. https://help.aliyun.com/en/icp-filing/basic-icp-service/product-overview/icp-filing-application-for-enterprises-outside-the-chinese-mainland

Después, el responsable del sitio sube un documento de identidad y supera una verificación facial. Alibaba acepta el pasaporte de residentes de otros países (11 de septiembre de 2026), pero su verificación facial está pensada para el documento de identidad del continente (2 de junio de 2026), y ninguna página que hayamos encontrado explica cómo la supera el titular de un pasaporte.

El plazo que sorprende a los equipos es el del mensaje de texto.

> Una vez enviada la solicitud de registro, el MIIT manda un SMS de verificación. Hay que completar la verificación en 24 horas; de lo contrario, el registro debe presentarse de nuevo.
> Fuente: centro de ayuda de Alibaba Cloud (阿里云), verificación por SMS del MIIT, actualizado el 17 de septiembre de 2025. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/sms-check

El responsable, por tanto, es una persona concreta de la entidad del continente. Tiene las credenciales de la consola, usa un número de teléfono de la provincia del registro (es la recomendación de Alibaba) y responde en el día. Su desarrollador autónomo y el jefe de proyecto de Lyon no son las personas adecuadas.

Alibaba rechaza las solicitudes cuyo teléfono de contacto no contesta, y Tencent advierte de que un registro puede anularse si el número no funciona en una inspección aleatoria. [Nuestro servicio de alojamiento en China](/es/servicios/alojamiento-china/) se encarga del registro de principio a fin, y aun así el mensaje de texto llega a la persona que usted haya designado.

## Tras la aprobación: dos números en el pie y las obligaciones anuales

Cuando llega el número, el trabajo se reduce a tareas de mantenimiento. El número va en el sitio desde el día de su apertura.

> El proveedor de servicios no comerciales de información en internet mostrará su número de registro en la parte inferior central de su página de inicio en el momento de abrir el sitio, con un enlace al sistema de registro del MIIT debajo.
> Fuente: Ministerio de Industria y Tecnologías de la Información (工业和信息化部), Medidas para la Administración del Registro de Servicios No Comerciales de Información en Internet, artículo 13, en su versión modificada el 18 de enero de 2024. https://www.miit.gov.cn/gyhxxhb/jgsj/cyzcyfgs/bmgz/xxtxl/art/2024/art_84a0cfa0ebd049bbbe751dca9a008e56.html

En WordPress, colóquelo en un widget del pie o en un tema hijo. Un número escrito en el footer.php del tema padre dura hasta la siguiente actualización del tema, y la falta del enlace puede acarrear una orden de corrección y, después, una multa (artículo 25).

Luego viene el registro ante la seguridad pública (公安备案). Alibaba le da 30 días desde la apertura del sitio, y la Oficina de Seguridad Pública de Shenzhen (10 de junio de 2023) indica que el número, una vez aprobado, debe figurar en un lugar destacado de la parte inferior de la página de inicio. Son, por tanto, dos números en el pie.

Después llegan las obligaciones anuales. Las medidas del MIIT piden comunicar cualquier cambio en los datos registrados con 30 días de antelación y solicitar la baja el mismo día en que cesa el servicio. Y el texto sigue previendo una revisión anual a través del sistema del MIIT.

Llevar el sitio WordPress a otro proveedor exige un registro de transferencia, y este funciona al revés: el sitio registrado tiene que seguir accesible, y Alibaba rechaza la transferencia cuando no se puede acceder a él. Si el servidor caduca sin un nuevo proveedor, el registro se convierte en una carcasa vacía que, según Tencent, el regulador anula (documentación actualizada el 3 de febrero de 2026).

El tema hijo es también el lugar de Baidu Tongji (百度统计). No existe un plugin mantenido dedicado a él, y la página de ayuda de Baidu (22 de septiembre de 2021) indica que el código se coloca antes de la etiqueta de cierre head en todas las páginas.

## Preguntas frecuentes

**¿Necesita mi sitio WordPress un registro ICP?**

Solo si se sirve desde un servidor de China continental. Un sitio alojado en Hong Kong o en Europa no necesita registro, pero lo paga en la frontera, donde cada petición atraviesa el Gran Cortafuegos. Un servidor del continente no puede abrir el sitio a los visitantes hasta que se aprueba el registro, y un sitio que cobra a sus usuarios necesita también la licencia ICP.

**¿Puedo mantener una página de «próximamente» mientras se revisa el registro?**

Ni en el servidor del continente ni bajo el dominio que se registra. Tencent Cloud indica que el sitio debe estar cerrado o resultar inaccesible por su dominio público o su IP durante un primer registro, o la comprobación del regulador puede rechazarlo. Trabaje en una copia de pruebas local o fuera de China y apunte el dominio al servidor del continente cuando se asigne el número.

**¿Puede nuestro desarrollador en el extranjero ser el titular de la cuenta de registro?**

Puede construir el sitio, pero el registro pertenece a la entidad del continente. El solicitante debe ser una empresa o un residente de China continental, el dominio debe estar a su nombre y hay que responder en 24 horas al mensaje de texto del MIIT al número del registro. Ninguno de los tres requisitos recae en un desarrollador en el extranjero.

**¿Cuánto tarda el registro ICP de un sitio WordPress?**

Alibaba Cloud publica de 1 a 2 días hábiles para su propia comprobación y, por lo general, de 1 a 20 días hábiles para la revisión provincial. Nosotros calculamos de tres a seis semanas, porque reunir los documentos lleva tiempo y las solicitudes vuelven. Termine la construcción en el entorno de pruebas antes de que llegue el número.
