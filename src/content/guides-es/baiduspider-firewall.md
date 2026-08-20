---
title: "Baiduspider bloqueado por Cloudflare y por reglas WAF"
subtitle: "El sitio está en pie. El panel del CDN parece sano, el equipo de Shanghái lleva seis semanas publicando contenido en chino y el volumen de índice en la Baidu Search Resource Platform no se ha movido de cero."
summary: "Cloudflare, los ajustes por defecto del WAF y las reglas geográficas bloquean a Baiduspider en silencio. Cómo detectarlo, autenticar un rastreador real por DNS inverso y corregirlo en orden."
visual: "/images/guides/baiduspider-firewall.webp"
order: 28
published: true
publishedAt: 2026-08-16
updatedAt: 2026-08-16
category: Search
---

Nada en una pila de monitorización normal está vigilando esto. Las comprobaciones de disponibilidad se lanzan desde Fráncfort y Virginia, y la monitorización de usuarios reales solo ve a quienes ya han conseguido una página. Mientras tanto, al único visitante que importa lo están echando en el borde de la red, y eso solo aparece en un panel que nadie ha abierto.

Lo vemos con más frecuencia que cualquier otra causa técnica de un lanzamiento chino encallado, y casi siempre se trata de un ajuste que nadie recuerda haber hecho.

## Por qué sus reglas por defecto atrapan al rastreador de Baidu

Baiduspider llega a su origen desde redes de China continental. El DNS inverso sobre las direcciones legítimas del rastreador resuelve a *.baidu.com o *.baidu.jp, y son los rangos continentales los que hacen la mayor parte de las peticiones.

Piense ahora en lo que una postura de seguridad estándar hace con esos rangos. Suele haber una regla geográfica que desafía o bloquea a China, añadida durante un incidente y nunca revisada, más un ajuste de gestión de bots que puntúa como sospechoso a cualquier cliente automatizado desconocido. Debajo de ambos descansa un conjunto de reglas gestionado y calibrado sobre tráfico occidental. Ninguna de esas reglas se escribió pensando en un rastreador de búsqueda chino. Baiduspider parece tráfico automatizado procedente de una región de la que usted decidió desconfiar, así que recibe lo que usted configuró para ella.

Nada de esto genera una alerta. Un rastreador bloqueado no abre una incidencia. Reintenta, obtiene la misma respuesta y vuelve con menos frecuencia.

> Baidu concentraba el 63,97 % del mercado chino de buscadores en todos los dispositivos en noviembre de 2025, y el 77,86 % en móvil.
>
> *Fuente: StatCounter, citado por The Egg, 11 de febrero de 2026*

Ese mercado está al otro lado de la regla.

## El caso que nunca se resolvió

Hay un hilo de la comunidad de Cloudflare que merece una lectura. El propietario de un sitio había colocado el archivo de verificación de Baidu, baidu_verify_codeva-CÓDIGO.html, en la raíz del documento. Se resolvía públicamente y cualquiera fuera de China podía recuperarlo y obtener un 200. La comprobación de Baidu informaba de un tiempo de espera agotado de entrada y salida. El hilo se cerró sin solución.

Ese caso no demuestra que Cloudflare bloquee a Baidu por política. Muestra algo más concreto: un archivo accesible desde su escritorio no demuestra nada sobre si Baidu puede alcanzarlo, y ambas realidades pueden contradecirse durante semanas mientras todo el mundo mira fijamente una URL que funciona.

La verificación por archivo de Baidu es estrecha. El archivo se sitúa en la raíz del documento y devuelve un 200, sin redirección y sin autenticación. El método de la etiqueta HTML no es más indulgente, porque la etiqueta meta tiene que aparecer en el HTML que entrega el servidor. Una página intersticial rompe las dos.

## Un 403 es el buen desenlace

Cuando el borde rechaza a Baiduspider sin rodeos, usted obtiene un 403, que es el desenlace que conviene esperar. Un rechazo es un hecho que ambas partes pueden ver.

La versión cara es el desafío. Un intersticial de JavaScript devuelve un 200, sus registros de acceso anotan una petición servida y el rastreador recibe una página de script donde debería estar su contenido. Todos sus paneles afirman que la petición tuvo éxito, y en el lado de Baidu hay una recuperación vacía.

La limitación de peticiones es el tercer patrón y el peor de depurar. El rastreador pasa el martes y no pasa el miércoles, y ninguna regla concreta explica por qué.

## El DNS inverso es la única comprobación que aguanta

Permitir el agente de usuario es el punto de partida correcto y el punto de llegada equivocado. Las cadenas legítimas son Baiduspider/2.0 y Baiduspider-render/2.0, con variantes móviles que llevan Android o Mobile. La variante render pilla desprevenida a mucha gente: recupera lo que una página necesita para renderizarse, de modo que una regla que permite Baiduspider/2.0 y limita el resto deja entrar al rastreador y después lo mata de hambre.

Un agente de usuario es una cabecera de petición, y una cabecera de petición es una cadena que cualquiera puede escribir. Si permite solo con eso, ha abierto su WAF a cualquiera que haya leído una entrada de blog.

La comprobación que aguanta es una resolución inversa confirmada en ambos sentidos. Tome la IP del cliente, resuelva el registro PTR con host o dig, confirme que el nombre de host termina en baidu.com o baidu.jp, y resuelva después ese nombre de host en sentido directo para comprobar que vuelve a darle la misma dirección. Un registro PTR por sí solo no demuestra nada, porque lo fija quien controla el bloque de direcciones.

Construya la regla en ese orden: coincidencia del agente de usuario, confirmación por DNS inverso y después permiso. Algunas plataformas de borde ya lo hacen con los rastreadores conocidos. Donde la suya no lo haga, basta con un script de worker breve.

## Haga que Baidu le cuente qué recibió

El diagnóstico de rastreo (抓取诊断, zhuāqǔ zhěnduàn) de la Search Resource Platform recupera una URL haciéndose pasar por Baiduspider y le muestra la respuesta. Agente de escritorio o móvil, a su elección. Lee los primeros 200 KB del cuerpo, suficiente para revelar un intersticial o una página de error.

Nosotros recurrimos a él antes de tocar nada más, porque termina con las discusiones. Ejecútelo sobre la portada, sobre el archivo de verificación y sobre tres páginas profundas. Las reglas de borde suelen estar acotadas por ruta, y la portada suele ser la única ruta que alguien eximió.

La cuota de recuperación es limitada y se informa de forma inconsistente, entre 70 y 200 por semana, así que no sirve como prueba de carga. Y lea el cuerpo que devuelve, no solo el código de estado.

## El alojamiento en el extranjero empeora todos estos casos

Alojar fuera de China continental no bloquea nada por sí mismo. Añade latencia y pérdida de paquetes por encima de lo que ya estén haciendo sus reglas.

Añada un viaje de ida y vuelta más por un desafío sobre una conexión que va justa y dejará de ir justa. Un tiempo de espera agotado de entrada y salida se parece exactamente a esto visto desde fuera: la página carga rápido desde Europa mientras Baidu registra una conexión que se dio por vencida. El alojamiento continental elimina esa variable, a cambio de un registro ICP (备案号, bèi'àn hào).

## En qué orden conviene cambiar las cosas

Empiece por sus registros. Filtre el borde por los agentes de usuario de Baiduspider durante los últimos 30 días. Cero peticiones significa que el rastreador no está llegando hasta usted en absoluto. Si hay peticiones, la pregunta pasa a ser qué devolvió usted.

Retire después los instrumentos contundentes por orden. Las reglas geográficas que afectan a China salen primero, o se estrechan hasta las rutas que realmente las necesitan. Las excepciones de gestión de bots para un Baiduspider autenticado vienen después, y luego las excepciones sobre el conjunto de reglas gestionado, una vez que sepa qué regla se disparó. Los límites de peticiones al final, porque son el fallo más difícil de atribuir.

Revise robots.txt ya que está. El comprobador de Baidu limita el archivo a 48 KB, y un disallow perdido copiado de preproducción ha costado más lanzamientos en China que cualquier regla de cortafuegos.

Cuando las reglas estén retiradas, vuelva a ejecutar el diagnóstico de rastreo empezando por el archivo de verificación, la URL que está reteniendo todo lo demás. La verificación se resuelve entre al instante y 24 horas en cuanto el rastreador puede leerla. El volumen de índice es más lento: cero durante días o semanas incluso cuando todo está correcto, y una indexación inicial que suele llevar de dos a cuatro semanas. Cambie una cosa cada vez, o el siguiente cero no le dirá nada.

Vuelva a ejecutar el diagnóstico de rastreo después de cualquier actualización del WAF o del CDN, porque los valores por defecto del borde cambian según su propio calendario.
