---
title: "La verificación en Baidu ha fallado: las causas habituales"
subtitle: "Baidu le devuelve una línea de texto en rojo y nada más. El archivo que dice no encontrar se abre sin problemas en su navegador, en su mesa, en Fráncfort. Ambos hechos conviven, y la distancia entre uno y otro es todo el problema."
summary: "¿Le ha fallado la verificación en Baidu? Todas las causas frecuentes, cómo se manifiesta cada una desde fuera y la solución: redirecciones, robots.txt, WAF, DNS y cuentas."
visual: "/images/guides/baidu-verification-failed.webp"
order: 24
published: true
publishedAt: 2026-08-17
updatedAt: 2026-08-17
category: Search
---

La verificación en la Baidu Search Resource Platform (百度搜索资源平台, Bǎidù Sōusuǒ Zīyuán Píngtái) se reduce a una petición HTTP. Baidu recupera una URL desde dentro de China y busca una cadena concreta, ya sea un archivo HTML en la raíz del documento o una etiqueta meta en el head de la portada. No hay mucho que pueda romper eso, y lo que lo rompe se encuentra entre Baiduspider y su servidor.

La comprobación tarda entre unos segundos y 24 horas, de modo que un fallo que vuelve al instante indica una recuperación fallida y no una cola de espera. Y si está verificando por CNAME, cambie de método.

> 站点管理-验证网站暂停【CNAME验证】的方式。该调整对已完成验证的站点没有影响。
>
> Gestión de sitios: el método CNAME para la verificación de sitios queda suspendido. El cambio no afecta a los sitios ya verificados.
>
> *Fuente: Baidu Search Resource Platform, anuncio oficial, febrero de 2023*

## El diagnóstico de rastreo responde a la pregunta que su navegador no puede resolver

El diagnóstico de rastreo (抓取诊断, zhuāqǔ zhěnduàn) recupera una URL haciéndose pasar por Baiduspider, con agente de escritorio o móvil, y devuelve la respuesta en bruto. Entrega los primeros 200 KB, algo que importa en una portada sobrecargada donde la etiqueta puede quedar más abajo de ese límite. Es además la única prueba de la que dispone que parte desde dentro de China.

Apúntelo a la URL de verificación y después a la portada. Lo que vuelve es aquello con lo que Baidu tuvo que trabajar, y suele zanjar la discusión con su desarrollador. Las cuotas son ajustadas. Una fuente china de SEO sitúa la asignación semanal en 70 y una fuente de agencia la sitúa en 200. Cambie lo que cambie, vuelva a lanzar la recuperación antes de pulsar verificar de nuevo.

Localice su síntoma y lea después la sección que le corresponde.

| Lo que usted ve | Lo que está ocurriendo | Lo que lo resuelve |
| --- | --- | --- |
| Carga en su navegador y falla al instante | 301 o 302 en el host registrado | Verificar el host que responde 200 |
| Aparece como bloqueado, no como ausente | Disallow en robots.txt | Permitir a Baiduspider y comprobarlo con la herramienta de robots |
| Tiempo de espera agotado en un archivo público | WAF o CDN descartando tráfico chino | Permitir por DNS inverso o sacar el archivo de la zona protegida |
| 403 o redirección a una pantalla de acceso | Autenticación básica, plugin, lista de IP permitidas | Servir un 200 sin autenticación |
| Verde en todos los monitores, tiempo agotado en Baidu | Inalcanzable desde China continental | Probar desde dentro de China, corregir el enrutado o mover el origen |
| Etiqueta visible en devtools, no encontrada por Baidu | Renderizado en el cliente | Renderizarla en el servidor o verificar por archivo |
| Baidu recupera un sitio que usted ya no gestiona | DNS caducado dentro de China | Bajar el TTL antes de migrar |
| Un sitio verificado pierde la verificación sin aviso | La cuenta nunca completó la verificación de identidad real | Completarla y verificar de nuevo |

## Baidu se detiene en la primera redirección

Baidu no sigue cadenas de redirección para verificar. Pide la URL exacta que usted registró, y un 301 o un 302 delante de ella da por terminada la comprobación. También aparecen errores de rastreo más allá de cinco saltos y en URL de más de 1.024 caracteres.

Lo habitual es una regla que fuerza https sobre una propiedad registrada como http, o una canonicalización hacia el www sobre una propiedad registrada sin él. La variante más desagradable es el enrutado geográfico que empuja las direcciones IP chinas hacia una subcarpeta de país. Esa no la reproducirá jamás desde Europa. Baidu cuenta http y https como propiedades separadas, y www y sin www como hosts separados. Registre el host que responde 200 sin ningún salto, y asegúrese de que es el host que quiere posicionar.

## Bloqueado antes de que la respuesta llegue a tener un código de estado

A veces el archivo es perfecto y no llega nada hasta él.

Empiece por robots.txt. Es cuestión de un minuto. El culpable recurrente es un User-agent con asterisco y un Disallow con barra, invisible para todos porque a Googlebot se le volvió a dar paso mediante su propia excepción y a Baiduspider nunca. La herramienta de robots de la plataforma muestra cómo interpreta Baidu el archivo en producción, y se detiene en los 48 KB y en URI de 250 caracteres.

Después viene el 403 o la redirección a una pantalla de acceso. La autenticación básica olvidada tras una compilación de preproducción es el caso clásico, con los plugins de próxima apertura y las listas de IP permitidas de un lanzamiento discreto justo detrás. Y no descarte que el plugin de seguridad de WordPress esté haciendo exactamente aquello para lo que lo instaló, porque baidu_verify_codeva-CÓDIGO.html es justo el tipo de archivo desconocido en la raíz que esos plugins bloquean.

Queda además el caso sin respuesta limpia. Un hilo de la comunidad de Cloudflare documenta un archivo de verificación públicamente accesible, confirmado desde fuera, mientras Baidu seguía devolviendo un tiempo de espera agotado de entrada y salida. Nadie publicó una solución. El mecanismo probable es una regla en el borde o un ajuste antibots que descarta las redes chinas antes de que la petición alcance el origen, de ahí un tiempo agotado en lugar de un 403. Si controla el borde, permita a Baiduspider correctamente, mediante la comprobación por DNS inverso que se explica más abajo y no por el agente de usuario. Quien no lo controle debería colocar el archivo de verificación en una ruta fuera de la zona protegida y verificar esa.

## Confirme que se trata realmente de Baiduspider antes de permitirlo

Los agentes de usuario son Baiduspider/2.0 y Baiduspider-render/2.0, con variantes móviles que llevan Android o Mobile en la cadena. Todos son triviales de falsificar, y los rastreadores abusivos los falsifican sin descanso para saltarse reglas escritas por gente que confió en la cabecera.

El DNS inverso es la comprobación que aguanta. Las direcciones auténticas de Baiduspider resuelven a nombres de host bajo baidu.com o baidu.jp. Ese segundo dominio pilla desprevenida a mucha gente, porque las listas de permitidos se escriben solo para baidu.com. Resuelva la dirección, confirme el nombre de host, resuélvalo de nuevo en sentido directo y compruebe que coincide.

## Verde en Europa, muerto en Shanghái

Todos los monitores externos dicen que el sitio está en pie. Baidu agota el tiempo de espera igualmente. La ruta hacia China puede estar mal, o un recurso bloqueante de la página puede no cargar nunca. A veces el nodo de CDN que atiende a los usuarios chinos sencillamente no es el que usted probó. Nada de esto aparece en un panel europeo, y así es como este problema sobrevive durante semanas.

El DNS caducado es el pariente lento. Después de una migración, un resolutor situado en China puede seguir entregando el registro antiguo mucho más allá del TTL que usted fijó. Baje el TTL antes de moverse, y verifique antes de una migración y no durante ella.

## La etiqueta que ve su navegador no es la que recibe Baidu

La etiqueta meta está ahí, en las devtools. Baidu dice que no la encuentra. Ambos tienen razón. La etiqueta se está inyectando en el cliente. Un componente de gestión del head en una aplicación de página única lo hará, y un gestor de etiquetas también. Una portada que se construye por completo en el navegador nunca llegó a tener la etiqueta en su respuesta.

La verificación por etiqueta HTML (HTML标签验证, HTML biāoqiān yànzhèng) exige la etiqueta en el HTML que entrega el servidor. Ver código fuente, no inspector. O la traslada allí o pasa a la verificación por archivo (文件验证, wénjiàn yànzhèng), a la que le da igual cómo se construya la página.

## El fallo del que nadie escribe en inglés

Suponga que la parte del servidor está limpia y el sitio sigue sin verificarse. En septiembre de 2023 Baidu publicó un aviso sobre la depuración de relaciones de verificación de riesgo en la plataforma.

> 关于搜索资源平台清退风险资源验证关系的通知
>
> Aviso sobre la revocación de relaciones de verificación de recursos de riesgo en la Search Resource Platform
>
> *Fuente: Baidu Search Resource Platform, aviso oficial, 4 de septiembre de 2023*

Las cuentas que nunca habían completado la verificación de identidad real (实名认证, shímíng rènzhèng) perdieron la suya. Un segundo aviso, semanas después, retiró las cuotas de envío a ese mismo grupo y cerró el envío de sitemaps, con efectos que se notaron a finales de noviembre de 2023.

Lo que usted ve, por tanto, es un sitio que estaba verificado, ya no lo está y no ha cambiado nada en el servidor desde entonces. Nada de lo que haya en su raíz de documentos lo va a arreglar.

> 实名认证直接影响账号和资源的归属
>
> La verificación de identidad real determina directamente la propiedad de la cuenta y de sus recursos.
>
> *Fuente: Baidu, documentación sobre gestión de cuentas*

Los pasaportes extranjeros corrientes no figuran en la lista de documentos de identidad que acepta Baidu. Ahí es donde se atascan los equipos extranjeros. Hemos heredado más de un cliente cuyo problema con Baidu vivía por completo dentro de una cuenta a la que nadie podía acceder.

## El registro ICP no es la razón del fallo

Un registro ICP no es un requisito formal para verificar ni para indexar. Un sitio sin registrar alojado fuera de China continental puede verificarse hoy mismo. El registro condiciona el alojamiento continental y los privilegios VIP de Baidu, y los sitios sin registrar sí parecen indexarse más despacio. Introduzca el número en los atributos del sitio el día en que se resuelva. No es lo que rompió su verificación.

Baidu cambia las reglas de verificación con poco aviso, así que conviene revisar el canal de anuncios de la plataforma antes de actuar sobre cualquier información fechada.
