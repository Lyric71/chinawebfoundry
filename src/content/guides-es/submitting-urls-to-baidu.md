---
title: "Enviar un sitio a Baidu: push, sitemap y envío manual"
subtitle: "El desarrollador termina el sitemap, entra en Baidu, busca la casilla donde pegarlo y no la encuentra. No hay nada roto. La mayoría de las veces la herramienta falta porque la cuenta no se la ha ganado."
summary: "Cómo enviar un sitio a Baidu cuando la herramienta de sitemap no aparece: el endpoint de la API de push, el comportamiento real de las cuotas y el envío manual."
visual: "/images/guides/submitting-urls-to-baidu.webp"
order: 23
published: true
publishedAt: 2026-08-16
updatedAt: 2026-08-16
category: Search
---

El envío estándar (普通收录, pǔtōng shōulù) es la parte de la Baidu Search Resource Platform (百度搜索资源平台, Bǎidù Sōusuǒ Zīyuán Píngtái) que le comunica a Baidu que una página existe. Tres canales: push, sitemap y envío manual. La plataforma los presenta uno junto a otro como si elegir entre ellos fuese cuestión de preferencia, cuando en realidad forman una jerarquía de privilegios. Uno está limitado a veinte enlaces por envío. Los otros dos son condicionales: el acceso al sitemap se concede y se retira a discreción de Baidu, y la forma más rápida de push solo se abre a los sitios vinculados a una entidad jurídica registrada en China.

> Baidu concentraba el 63,97 % del mercado chino de buscadores en todos los dispositivos en noviembre de 2025, y el 77,86 % en móvil.
>
> *Fuente: StatCounter, citado por The Egg, 11 de febrero de 2026*

El panel chino de StatCounter se mueve, así que conviene leer esa cifra como una horquilla y no como un valor fijo. Es también la razón por la que alguien acepta toda esta fontanería.

Una cuestión que conviene cerrar antes de la mecánica. Enviar no es indexar. Usted le comunica a Baidu que una URL existe, y lo que ocurra después se decide en otro sitio.

## El endpoint de push es el que hace el trabajo

El push existe en dos formas, y la versión de API es la que sostiene a un sitio extranjero recién creado. El endpoint vive en data.zz.baidu.com y admite dos parámetros de consulta, site y token. Usted envía su lista de URL y lee lo que le devuelven.

El parámetro site es donde mueren la mayoría de los primeros intentos. Sin protocolo delante, sin barra al final, solo el host tal y como Baidu lo registró en la verificación. Baidu considera el protocolo parte de la identidad del sitio, de modo que las versiones http y https de su dominio son propiedades distintas y usted envía a la que verificó.

Baidu emite el token dentro de la plataforma. Cualquiera que lo tenga puede enviar URL contra su dominio, algo que conviene recordar antes de que acabe en un repositorio público.

Cada respuesta incluye un campo remain. Contiene lo que queda de su asignación diaria, y ninguna otra cifra de la plataforma se lo va a decir. No hay panel detrás ni aviso alguno. Registre el valor con una marca de tiempo en cada llamada. En los sitios de nuestros clientes, la primera señal de que algo ha cambiado suele ser ese número cayendo.

La versión HTTP del endpoint todavía funciona. Use HTTPS de todas formas.

## La cuota publicada y la real

El propio texto de la herramienta afirma que el push por API y el envío manual comparten un techo de 100.000 URL al día. Tome la palabra techo de forma literal.

Lo que usted recibe se asigna dinámicamente, sitio por sitio, con criterios que Baidu nunca ha publicado. Hay casos documentados de sitios cuya asignación diaria se desplomó hasta 100 URL. Cien bastan para una semana normal de publicación. Para una migración no son nada, y una migración suele ser el momento en que un equipo descubre cuál es su cifra real.

De ahí que ese campo de respuesta merezca acabar en un registro.

## La versión automática del push está cerrada tras una entidad china

La otra forma de push es la de JavaScript. Un fragmento de código se coloca en la plantilla del sitio y las páginas se anuncian a Baidu a medida que las cargan visitantes reales. Es elegante, y la mayoría de los sitios extranjeros nunca llegará a activarlo.

Baidu solo lo abre a los sitios con una entidad jurídica asociada (关联主体, guānlián zhǔtǐ). Esa asociación se lanzó en diciembre de 2019 y, una vez establecida, no puede disolverse durante 30 días. Es otra puerta con entidad china en una plataforma construida a base de ellas.

Sume lo que eso deja a una empresa extranjera sin presencia continental. El push automático queda descartado, y el acceso al sitemap normalmente también. El equipamiento operativo se reduce a un endpoint de API y a una caja de texto.

## El envío manual, veinte cada vez

El tercer canal es una caja de texto. El límite de 20 enlaces se aplica a cada envío y no al día, y todo lo que pegue ahí se descuenta de la misma asignación compartida que la API.

El volumen no es la cuestión. Lo que juega a favor de la caja es que no necesita que funcione nada más: ningún token que rotar, ningún script de despliegue que dejó de ejecutarse en silencio hace tres versiones. Cuando una página de lanzamiento importa lo bastante como para que alguien de dirección pregunte por ella el lunes, entra por la caja el viernes además de por la API.

## Los sitemaps son un privilegio

Llegamos al canal por el que empiezan casi todos los equipos. Las reglas del archivo no tienen nada de particular. Texto plano o XML, hasta 50.000 URL, menos de 10 MB por archivo. Los archivos de índice de sitemap se rechazan, y esa es la regla que pilla a todo el mundo, de modo que un catálogo grande entra en varios archivos separados, enviados uno a uno.

El acceso es la parte difícil. Baidu concede el envío de sitemaps en lugar de activarlo para todos, y en septiembre de 2023 retiró la herramienta a un gran grupo de sitios de una sola vez.

> 关于回收网站提交配额的通知
>
> Aviso sobre la retirada de las cuotas de envío de sitios web
>
> *Fuente: Baidu Search Resource Platform, anuncio oficial, septiembre de 2023*

El aviso retiraba las cuotas de envío, cerraba el envío de sitemaps y recortaba las asignaciones del push por API para las cuentas que nunca habían completado la verificación de identidad real (实名认证, shímíng rènzhèng), así como para los sitios que Baidu consideró de baja calidad. Los informes sitúan su entrada en vigor el 30 de noviembre de 2023. Sitios que llevaban años enviando sitemaps abrieron la plataforma una mañana y el módulo había desaparecido.

Compruebe si el módulo siquiera está en su cuenta antes de generar archivos para él. Nosotros planificamos los nuevos sitios extranjeros dando por hecho que no lo tendremos, y lo tratamos como un extra si aparece más adelante.

## Cómo es un flujo de envío que funciona de verdad

Push al publicar. La llamada a la API pertenece al CMS y se dispara con cada URL nueva o actualizada en el momento en que la página se publica, no en una tarea semanal que alguien recuerda los jueves. Guarde el valor remain que le devuelven. Si Baidu recorta su asignación, es en ese registro donde aparecerá primero.

Por encima de eso, una persona sigue trabajando la caja manual: portada, páginas de servicio que de verdad quiere posicionar, cualquier cosa que lleve una campaña detrás. Veinte cada vez. Sí, eso gasta la asignación dos veces sobre la misma URL, y para un puñado de páginas al mes resulta perfectamente asumible.

Introduzca su número de registro ICP en los atributos del sitio ya que está. El registro no es requisito para enviar nada, pero Baidu recomienda a los sitios de menos de seis meses rellenar ese campo para acelerar la indexación.

Existía antes una vía más rápida que todo esto. [Otro artículo de esta guía](/es/recursos/guia-web-china/fin-inclusion-rapida-baidu/) cuenta qué fue de la inclusión rápida.

Y llega después la parte que nadie presupuesta. La indexación inicial de un sitio nuevo lleva entre dos y cuatro semanas, y un volumen de índice (索引量, suǒyǐn liàng) parado en cero durante ese primer tramo es lo normal. Baidu no publica ningún compromiso de servicio sobre nada de esto, así que no hay nada a lo que escalar.

El comportamiento de las cuotas cambia sin previo aviso, de modo que conviene fiarse del campo remain antes que de la documentación.
