---
title: "Verificación en Baidu: www, HTTPS y subdominios"
subtitle: "En Google Search Console una propiedad de dominio cubre los dos protocolos y todos los subdominios bajo un mismo techo. Baidu no tiene equivalente, y usted obtiene exactamente aquello que verifica."
summary: "En Baidu, http y https son sitios distintos, www y sin www son hosts distintos, los subdominios heredan de una raíz verificada y las carpetas no se pueden dar de alta."
visual: "/images/guides/baidu-verification-scope.webp"
order: 25
published: true
publishedAt: 2026-08-17
updatedAt: 2026-08-17
category: Search
---

Esa diferencia hace tropezar a más equipos extranjeros que cualquier otro punto de la configuración de la Baidu Search Resource Platform (百度搜索资源平台, Bǎidù Sōusuǒ Zīyuán Píngtái). Aquí un sitio es un protocolo y un host, nada más amplio. Si delimita mal el alcance, un trimestre después estará leyendo paneles referidos a una versión de su web que no visita nadie.

> Baidu concentraba el 63,97 % del mercado chino de buscadores en todos los dispositivos en noviembre de 2025, y el 77,86 % en móvil.
>
> *Fuente: StatCounter, citado por The Egg, 11 de febrero de 2026*

El panel chino de StatCounter es inestable, así que la cifra exacta se mueve de un mes a otro. El panorama general no. De este buscador salen sus números de China, y por eso conviene dedicar diez minutos a pensar dónde están las fronteras de cada propiedad.

Cómo se demuestra la titularidad, con archivo o con etiqueta meta, [se trata por separado](/es/recursos/guia-web-china/verificacion-sitio-baidu/). Este artículo va sobre qué es aquello cuya titularidad está demostrando.

## http y https son dos sitios diferentes

Baidu considera el protocolo parte de la identidad del sitio. Cuando añade un sitio en la gestión de sitios (站点管理, zhàndiǎn guǎnlǐ) introduce el protocolo junto al host, y ese prefijo no es decorativo. Elija uno y tendrá una propiedad que no sabe nada de la otra. Verificación aparte, datos de índice aparte.

El modo de fallo es aburrido y muy común. Un sitio se verifica en http, pasa a https unos años después y la propiedad antigua sigue informando sobre una versión de sí misma que ya solo existe como redirección. El volumen de índice (索引量, suǒyǐn liàng) se aplana. Alguien concluye que Baidu ha dejado de rastrear. No ha dejado de hacerlo: está rastreando la propiedad que nadie abre.

Existe una herramienta para declarar la relación. La certificación HTTPS (HTTPS认证) le dice a Baidu que la versión http se corresponde con la https. Envíela. No fusionará las dos propiedades y no sustituye a verificar aquella que usted está sirviendo.

## Verifique el host en el que la gente aterriza de verdad

La misma regla se aplica un nivel más arriba. Para Baidu, el dominio desnudo y el host con www son hosts completamente distintos, y verificar uno no le aporta nada sobre el otro.

Verifique por tanto el canónico. No la versión impresa en la tarjeta de visita, sino la que queda en la barra de direcciones cuando ya se han disparado todas las redirecciones. Abra el sitio en frío, desde fuera de la red de su oficina, y verifique aquello en lo que aterrice.

Las redirecciones son donde esto sale caro. Baidu no sigue una cadena para confirmar la titularidad, de modo que un host que responde con un 301 o un 302 suspende la comprobación, y la sigue suspendiendo por muy bien colocado que esté el archivo en el destino. Es lo primero que revisamos cuando una verificación aparentemente correcta vuelve en rojo. La misma intolerancia aparece en el rastreo: Baidu registra errores más allá de cinco saltos y en URL de más de 1.024 caracteres.

Mantenga por tanto un único host canónico, apunte el otro hacia él en un solo salto y no dé nunca de alta el host cuya única función es redirigir.

## Los subdominios heredan la titularidad de una raíz verificada

Los subdominios son el terreno en el que el sistema juega a su favor. Verifique el dominio raíz y Baidu le permitirá añadir subdominios por lotes (批量添加子站, pīliàng tiānjiā zǐzhàn) por debajo, heredando la titularidad del padre. Nada que desplegar en cada host, ninguna etiqueta que empujar a una plantilla que controla otro equipo.

Baidu lanzó esta función junto con un cambio en la caducidad de las verificaciones, y el anuncio afirma que la verificación ya no caduca. Esa segunda mitad es más difícil de confirmar de lo que debería, así que trátela como información de segunda mano y deje el archivo donde está.

La herencia resuelve además una pregunta que la mayoría de los equipos no se plantea, que es dónde reside realmente la titularidad. No en el dominio.

> 实名认证直接影响账号和资源的归属
>
> La verificación de identidad real determina directamente a quién pertenecen la cuenta y sus recursos.
>
> *Fuente: Baidu, documentación sobre gestión de cuentas*

Todo lo que cuelga de esa raíz, subdominios incluidos, remite a la identidad verificada que posee la cuenta. Conviene comprobarlo antes de que una agencia añada sus subdominios bajo su propio acceso.

La dirección contraria importa para el reporting. Este punto es información recogida más que documentación de Baidu: fuentes del sector sostienen que es la verificación del dominio raíz la que desbloquea los datos de índice a nivel de subdominio. Verifique solo cn.example.com y eso será todo lo que obtenga. La raíz es lo que hace visible la capa que hay debajo.

Para una empresa que aloja sus contenidos en chino en un subdominio, verifique ambos: la raíz para que funcione el reporting del subdominio, y el subdominio para que tenga una propiedad propia, con su canal de envío y sus datos de palabras clave asociados.

## Nada en Baidu entiende una carpeta /cn/

Los subdirectorios son la estructura que proponen primero casi todas las empresas globales, y el único caso para el que Baidu nunca construyó nada. No existe una vía admitida para registrar un subdirectorio como sitio independiente. Léalo como una ausencia y no como una prohibición: Baidu no ha publicado ninguna norma contra los sitios en subdirectorio. El formulario de gestión de sitios simplemente admite un protocolo y un host, y no hay ningún lugar donde poner una ruta.

Una empresa que coloque sus páginas en chino en example.com/cn/ acaba con una única propiedad que cubre todo su sitio global. Las páginas en chino y en inglés caen en el mismo gráfico de volumen de índice y en la misma tabla de palabras clave. Las URL en sí están perfectamente: posicionan, se pueden enviar y el diagnóstico de rastreo (抓取诊断, zhuāqǔ zhěnduàn) recuperará cualquiera de ellas cuando se lo pida. Lo que no puede hacer es aislarlas. Ningún informe le dirá cuántas de las páginas en chino están indexadas, porque la plataforma no tiene ningún concepto de sección.

Cuando el reporting separado importa, el subdominio es la estructura más limpia. Un sitio para China en cn.example.com obtiene su propio gráfico, mientras que el mismo contenido dentro de una carpeta queda como una porción sin contabilizar del gráfico de otro.

Nada de esto convierte los subdirectorios en un error. Concentran la autoridad en un solo lugar y son más sencillos de alojar. La contrapartida es la medición, y cuesta una conversación en la fase de arquitectura o una migración seis meses después.

## Cada uno de estos cambios cuenta como una migración

Ninguna de estas reglas se relaja cuando el sitio cambia de forma. Pasar de http a https es una migración. También lo es cambiar de host canónico o levantar una carpeta hacia un subdominio. Baidu lee cada uno de esos movimientos como una revisión del sitio, no como mantenimiento rutinario.

La revisión de sitio (网站改版, wǎngzhàn gǎibǎn) es la herramienta con la que se declara. Admite cambios de dominio y de directorio, además de reglas a nivel de URL cuando la correspondencia es más enredada. Su función es trasladar el historial de las URL antiguas a las nuevas en lugar de dejar que Baidu se las encuentre como desconocidas. Baidu revisa las reglas enviadas en un plazo de media hora a dos horas y después procesa la migración a lo largo de medio día a dos días.

Envíela en la misma ventana que las redirecciones, no cuando el gráfico de tráfico empiece a moverse. Baidu no va a deducir por su cuenta que los dos conjuntos de URL van juntos.

Baidu ajusta estas reglas sin demasiado aviso, así que conviene revisar el canal de anuncios antes de actuar sobre cualquier información fechada.
