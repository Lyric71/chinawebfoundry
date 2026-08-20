---
title: "Qué es la Baidu Search Resource Platform"
subtitle: "La mayoría de las empresas extranjeras llegan a China con un presupuesto de SEO para Baidu y sin una cuenta de Baidu. El presupuesto se va en contenidos, nadie crea la cuenta y, seis meses después, alguien convoca una reunión para entender por qué nada posiciona."
summary: "La plataforma para webmasters de Baidu es donde se gestiona de verdad el SEO en China. Qué hace cada herramienta y cuáles de las que aún recomiendan las guías llevan años muertas."
visual: "/images/guides/baidu-search-resource-platform.webp"
order: 30
published: true
publishedAt: 2026-08-19
updatedAt: 2026-08-19
category: Search
---

La Baidu Search Resource Platform (百度搜索资源平台, Bǎidù Sōusuǒ Zīyuán Píngtái) es el lugar desde el que se gestiona realmente el posicionamiento en Baidu. Informa de si Baidu ha rastreado su sitio, cuántas de esas páginas ha conservado y qué consultas le han traído clics. También avisa de lo que se ha roto. Sin ella, una estrategia de búsqueda en China se reduce a suposiciones acompañadas de una factura de traducción.

Antes se llamaba Baidu Webmaster Platform (百度站长平台, Bǎidù Zhànzhǎng Píngtái). Buena parte de la documentación sigue usando el nombre antiguo, incluidas algunas páginas de ayuda del propio Baidu. Es la misma plataforma.

> La aplicación de Baidu alcanzó los 655 millones de usuarios activos mensuales en marzo de 2026.
>
> *Fuente: Baidu Inc., resultados del primer trimestre de 2026, 18 de mayo de 2026*

Esa es la audiencia que hay detrás de la plataforma, y la razón por la que la configuración inicial merece una hora de alguien con criterio.

## Las tres herramientas de Baidu que todo el mundo confunde

La Search Resource Platform cubre la parte de rastreo e indexación: envío de URL, diagnóstico de rastreo, volumen de índice y datos de palabras clave.

Baidu Tongji (百度统计, Bǎidù Tǒngjì) es analítica. Observa a las personas una vez que ya han aterrizado en la página y no dirá absolutamente nada sobre cómo ve Baidu el sitio.

Baidu Index (百度指数, Bǎidù Zhǐshù) mide la demanda y es lo más parecido que existe en China a un planificador de palabras clave de consulta abierta. Resulta útil antes de escribir nada. No sirve de nada la noche en que no hay una sola página indexada.

Terminará usando las tres. Solo una responde a la pregunta de si Baidu es capaz de leer sus páginas.

## Entrar exige dos pasos, y el primero es el complicado

Hace falta una cuenta de Baidu que haya superado la verificación de identidad real (实名认证, shímíng rènzhèng). Ahí es donde encallan las empresas extranjeras, y conviene entender el motivo antes de dedicarle una semana. Baidu publica la lista de documentos de identidad admitidos y un pasaporte extranjero corriente no figura en ella. En la práctica, la cuenta acaba registrada a nombre de una entidad china o de alguien con identidad continental. Los números de móvil extranjeros dejaron de funcionar de forma fiable para el registro hacia mayo de 2022.

Quién registra esa cuenta importa mucho más de lo que parece. La verificación de identidad real funciona como el registro de propiedad del activo de búsqueda, de modo que una agencia que inscribe el sitio de un cliente bajo su propia licencia retiene un activo que el cliente no puede recuperar sin más.

Verificar el dominio es la mitad sencilla. Diez minutos, si el alojamiento colabora. Baidu entrega un archivo HTML para dejar en la raíz del servidor o una etiqueta meta para la cabecera de la portada. Cualquiera de las dos sirve. La verificación por CNAME quedó suspendida en el primer trimestre de 2023, lo que no ha impedido que la mayoría de las guías en inglés la sigan presentando como tercera opción.

Hay un detalle que cuesta una semana a un equipo tras otro. Baidu considera el protocolo parte de la identidad del sitio. Las versiones http y https de su dominio son dos propiedades distintas, igual que www y sin www.

## Las herramientas, y cuáles abrirá de verdad

La plataforma se parece más a una caja de herramientas que a un cuadro de mando. Cuatro familias, a grandes rasgos.

Empiece por el envío de URL. El envío estándar (普通收录, pǔtōng shōulù) cubre tres canales. Hay un endpoint de API que devuelve la cuota diaria restante en cada llamada. Hay un envío manual, limitado a 20 enlaces. Y está el envío de sitemap, que funciona más como privilegio que como función. En septiembre de 2023 Baidu publicó un aviso por el que retiraba las cuotas de envío a los sitios cuyas cuentas nunca habían completado la verificación de identidad real. El acceso al sitemap se fue con ellas, y sitios que llevaban años enviando URL sin incidencias encontraron la herramienta desaparecida.

Las herramientas de rastreo son las que le ocuparán el tiempo. El diagnóstico de rastreo (抓取诊断, zhuāqǔ zhěnduàn) recupera cualquier URL haciéndose pasar por Baiduspider y muestra lo que recibió el rastreador. En un sitio construido con un framework de JavaScript, esa pantalla suele zanjar la discusión sobre si el problema es el renderizado. La hemos usado más de una vez para cerrar ese debate con los desarrolladores de un cliente. La frecuencia de rastreo y las excepciones de rastreo se ocupan del volumen y de los errores, y hay además un comprobador de robots.txt.

Después viene el reporting. El volumen de índice (索引量, suǒyǐn liàng) registra cuántas páginas mantiene Baidu. Léalo como una línea de tendencia. No es un recuento de páginas y Baidu nunca ha afirmado que lo fuera. El informe de tráfico y palabras clave recoge impresiones y clics, con unas cinco horas de retraso, y solo empieza a poblarse cuando el sitio consigue clics.

**Configuración del sitio.** Envío de enlaces rotos, revisión de sitio para migraciones, adaptación móvil, certificación HTTPS y atributos del sitio, que es donde se introduce el número de registro ICP (备案号, bèi'àn hào). Rellene ese campo el mismo día en que se resuelva el trámite. No cuesta nada y los sitios nuevos parecen salir beneficiados.

## Tres herramientas que las guías siguen recomendando y que ya no existen

Antes de seguir cualquier tutorial escrito antes de 2024, contrástelo con esta lista.

Xiongzhang ID (熊掌号, Xióngzhǎng Hào) fue el programa de propiedad de contenidos de Baidu e incluía un privilegio de indexación en el mismo día. Baidu lo retiró en marzo de 2020.

La herramienta de datos estructurados funcionó por invitación desde su lanzamiento en 2013 y nunca cubrió datos de producto. La URL devuelve ahora un error de servidor, que es la declaración más clara que ha hecho Baidu al respecto.

La indexación rápida (快速收录, kuàisù shōulù) es la que se echa de menos, porque funcionaba.

> 资源平台于 4 月 26 日下线「快速收录」工具，上新「快速抓取」工具。
>
> *Fuente: Baidu Search Resource Platform, anuncio oficial, abril de 2024*

Su sustituta se llama rastreo rápido (快速抓取, kuàisù zhuāqǔ) y está reservada al club VIP de Baidu. Entre los criterios que se han publicado figuran la verificación de identidad real y un registro ICP, además de más de un año de actividad y una media superior a 10.000 clics diarios entre móvil y escritorio. Un sitio recién lanzado de una marca extranjera no cumple ninguno. El equipamiento realista para un sitio nuevo se reduce, por tanto, al endpoint de la API, al envío manual y a la paciencia.

## Lo que la plataforma no le va a contar

Las páginas de resultados de Baidu han cambiado mucho más deprisa que sus herramientas para webmasters.

> Alrededor del 70 % de las páginas de resultados móviles de Baidu contenían contenido generado por inteligencia artificial en octubre de 2025.
>
> *Fuente: Baidu Inc., resultados del tercer trimestre de 2025, 18 de noviembre de 2025*

Nada de eso aparece dentro de la Search Resource Platform. No hay módulo de búsqueda con IA. Nada le indica si su contenido está apareciendo dentro de una respuesta generada. Las herramientas siguen describiendo un buscador hecho de diez enlaces azules. Las presentaciones de resultados de Baidu dejaron de describirlo así hace tiempo.

Use la plataforma para lo que sí cubre, que son los fundamentos de rastreo e indexación, y trate la visibilidad en IA como una línea de trabajo aparte. Nadie en Baidu le va a entregar un informe sobre eso.

## Si parte de cero

Un orden de trabajo razonable, deducido de lo que suele salir mal.

Resuelva la cuenta antes que nada, porque todo lo que viene después depende de la identidad que hay detrás. Verifique el dominio que quiere posicionar, no una redirección hacia él. Introduzca el número ICP en los atributos del sitio. Y ejecute después un diagnóstico de rastreo contra su portada y tres páginas profundas antes de escribir un solo artículo nuevo. No tiene sentido publicar dentro de un sitio al que Baiduspider no llega.

Sobre los plazos: el paso de cuenta e identidad va de un día a varias semanas según la vía elegida. La verificación en sí se resuelve el mismo día. Los primeros datos de índice suelen aparecer entre dos y cuatro semanas después de que un sitio nuevo empiece a ser rastreado, y los paneles vacíos hasta ese momento son lo normal, no una señal de avería.

Baidu modifica esta plataforma sin demasiado aviso, así que conviene revisar el canal de anuncios antes de actuar sobre cualquier información fechada.
