---
title: "Verificar su sitio en Baidu: archivo o etiqueta HTML"
subtitle: "Funcionan dos métodos de verificación. Un tercero sigue apareciendo en la mayoría de las guías en inglés y no funciona desde el primer trimestre de 2023."
summary: "Dos métodos de verificación siguen funcionando en la plataforma de Baidu, y el CNAME no es uno de ellos. Nombres de archivo exactos, colocación de la etiqueta y notas para WordPress y Astro."
visual: "/images/guides/baidu-site-verification.webp"
order: 26
published: true
publishedAt: 2026-08-18
updatedAt: 2026-08-18
category: Search
---

Verificar un dominio en la Baidu Search Resource Platform (百度搜索资源平台, Bǎidù Sōusuǒ Zīyuán Píngtái) convierte una URL en una propiedad de la que puede extraer datos y a la que puede enviar páginas. El trámite lleva diez minutos, suponiendo que el alojamiento colabore. Conseguir la cuenta que hay detrás es la parte difícil, y eso [es materia de otro artículo](/es/recursos/guia-web-china/cuenta-baidu-empresa-extranjera/).

> Baidu concentraba el 63,97 % del mercado chino de buscadores en todos los dispositivos en noviembre de 2025, y el 77,86 % en móvil.
>
> *Fuente: StatCounter, citado por The Egg, 11 de febrero de 2026*

Tome esa cifra como una horquilla y no como una constante, porque el panel chino de StatCounter oscila con fuerza de un mes a otro. Lo que importa es el orden de magnitud. Este es el buscador para el que está verificando.

## Añadir el sitio

La gestión de sitios (站点管理, zhàndiǎn guǎnlǐ) es la pantalla donde se añaden los dominios, y Baidu pide el protocolo además del host. Se introduce https:// o http:// de forma explícita, porque Baidu los trata como propiedades distintas.

Añada el host que quiere posicionar. No una redirección hacia él, ni un subdominio de preproducción, ni la versión que su CDN sirva por casualidad. Si su host canónico es el www y el dominio desnudo redirige con un 301 hacia él, verifique el www.

## Método uno: verificación por archivo

La verificación por archivo (文件验证, wénjiàn yànzhèng) es el método a elegir siempre que pueda desplegar archivos.

Baidu genera un archivo HTML con el patrón baidu_verify_codeva-CÓDIGO.html. Va en la raíz del documento del host exacto que está verificando. Dónde se encuentra esa raíz depende de su stack. El alojamiento compartido de Alibaba Cloud (阿里云, Ālǐ Yún) suele llamarla htdocs. Las cuentas de cPanel de Hong Kong la llaman public_html. Paneles como BT la llaman wwwroot. En una compilación de Astro pertenece al directorio public, desde donde se copia a la raíz al compilar y se sirve como archivo estático. En WordPress se coloca junto a wp-config.php, y cualquier plugin de seguridad que bloquee archivos desconocidos en la raíz necesita una excepción, algo que se descubre en una media hora entretenida el día del lanzamiento.

Tres condiciones deciden si esto funciona. El archivo debe responder con un estado 200, no debe redirigir a ninguna parte y no puede estar detrás de autenticación ni de un desafío antibots.

Deje el archivo desplegado una vez verificado. Baidu vuelve a comprobarlo de forma periódica, y un archivo que desaparece en el siguiente despliegue se lleva la verificación consigo.

## Método dos: verificación por etiqueta HTML

Si la vía del archivo está cerrada, esta es la alternativa.

La verificación por etiqueta HTML (HTML标签验证, HTML biāoqiān yànzhèng) coloca una etiqueta meta dentro del head de la portada. Se usa cuando no puede dejar archivos en la raíz, algo que ocurre en plataformas gestionadas y en algunos CDN corporativos.

La etiqueta lleva su código en el atributo content y va entre las etiquetas de apertura y cierre del head de la portada. En WordPress se coloca en el header de la plantilla o a través del plugin de SEO que controle el head. En Astro pertenece al layout compartido, para que una recompilación no pueda perderla.

Un requisito pesa más que los demás. La etiqueta tiene que estar presente en el HTML que entrega el servidor. Si la inyecta JavaScript del lado del cliente, Baidu no la verá, y usted tampoco al mirar el código fuente con los scripts desactivados.

Si el sitio está detrás de una caché de página completa o de un CDN, purgue después de desplegar. Baidu lee la copia en caché, no el origen.

## El método que ya no funciona

La verificación por CNAME (CNAME验证, CNAME yànzhèng) quedó suspendida en el primer trimestre de 2023.

> 站点管理-验证网站暂停【CNAME验证】的方式。该调整对已完成验证的站点没有影响。
>
> La gestión de sitios ha suspendido el método de verificación por CNAME. El cambio no afecta a los sitios que ya estaban verificados.
>
> *Fuente: Baidu Search Resource Platform, anuncio oficial, febrero de 2023*

Los sitios verificados así antes del cambio conservaron su estado. Los nuevos tienen dos opciones, no tres. Si una guía le ofrece tres, compruebe su fecha antes de fiarse del resto de la página.

## Cuál elegir, y por qué los equipos despliegan las dos

Si controla los despliegues, use el archivo. Es inerte, no depende del renderizado de ninguna plantilla y ningún cambio de tema se lo va a comer.

Si su portada la genera una plataforma en la que no puede depositar archivos, use la etiqueta y colóquela donde un rediseño no la borre en silencio.

Bastantes equipos despliegan las dos. A Baidu no le molesta, y nunca hemos lamentado esa redundancia en el sitio de un cliente.

## Cuando se pone en verde

Dos cosas merecen hacerse esa misma tarde. Introduzca su número de registro ICP (备案号, bèi'àn hào) en los atributos del sitio, porque los sitios nuevos parecen superar antes la fase inicial de rastreo con ese campo relleno. Ejecute después un diagnóstico de rastreo (抓取诊断, zhuāqǔ zhěnduàn) contra la portada y un par de páginas profundas, para saber qué recibe realmente Baiduspider antes de empezar a publicar en el sitio.

Si la verificación falla en lugar de ponerse en verde, la causa suele ser una redirección en la portada, una regla de cortafuegos que bloquea a Baiduspider o una portada que solo existe después de ejecutar JavaScript. [Cada una tiene su propia solución](/es/recursos/guia-web-china/verificacion-baidu-fallida/), y ninguna significa que su sitio esté roto para los visitantes humanos.
