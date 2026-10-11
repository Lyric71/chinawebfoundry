---
title: "Por qué wp-admin va tan lento en China"
subtitle: "En Shanghái, la web pública carga sin problemas mientras el panel de WordPress se arrastra. Qué lo frena y cómo devolverle la agilidad."
summary: "La web carga, el panel se arrastra. Los culpables: Gravatar, las actualizaciones y las fuentes del editor. Casi todo se soluciona en una tarde."
visual: "/images/guides/wp-admin-slow-china.webp"
order: 42
published: true
publishedAt: "2026-10-12"
updatedAt: "2026-10-12"
reviewBy: "2026-11-20"
category: "Technology"
author: "echo-peng"
---

Si su web pública carga con normalidad en Shanghái pero la administración de WordPress va lenta en China, conviene revisar las llamadas que solo hace el panel. Tres de ellas merecen una revisión prioritaria. Gravatar, presente en todas las pantallas de administración, está bloqueado. A ello se suma el servidor: si está alojado en China continental, solicita las actualizaciones a WordPress.org y topa con un límite de peticiones. Por último, los editores visuales cargan sus fuentes desde Google, que responde en algunas redes chinas y en otras no.

Dos de estas llamadas parten del navegador de su equipo; la tercera, del servidor, y únicamente cuando este se aloja en el continente.

| Llamada saliente | Quién hace la llamada | Adónde va | Qué ve el equipo | Primera solución |
| --- | --- | --- | --- | --- |
| Avatares | El navegador, en China | secure.gravatar.com, bloqueado | Avatares en blanco en todas las pantallas | Desactivar los avatares o dirigirlos a un espejo continental |
| Comprobación de actualizaciones | Un servidor en el continente | api.wordpress.org, que limita las peticiones de IP continentales | Dejan de aparecer actualizaciones; una comprobación atascada retiene la página | Un espejo, o actualizaciones ejecutadas desde fuera |
| Fuentes del editor | El navegador, en China | fonts.googleapis.com, fonts.gstatic.com | El editor de Elementor espera una hoja de estilos; la instalación de fuentes de Google falla | Redirigir la Roboto de Elementor y prescindir de las fuentes de Google |

Todas las fuentes que se citan a continuación se comprobaron el 12 de octubre de 2026.

## Por qué la administración de WordPress va lenta en China

En China, la optimización del rendimiento suele arrancar por la página pública, que es la que ven los clientes. El panel se deja para más adelante, hasta que un lunes por la mañana el equipo de marketing de Shanghái no consigue publicar.

Lo primero es averiguar qué máquina hace cada llamada. Sus visitantes nunca abren wp-admin, pero sus redactores sí, desde una oficina o una conexión doméstica en China, y el navegador de cada redactor descarga todo lo que piden las pantallas de administración. El servidor, por su parte, llama a WordPress.org mientras genera esas pantallas.

De ese reparto depende la solución. Con un servidor en Fráncfort, las llamadas de actualización salen de allí y llegan a su destino, de modo que solo sufre el lado del navegador. Con el sitio alojado en el continente, sufren ambos.

Para comprobar lo que ocurre en el navegador, pida a alguien de la oficina de Shanghái que abra las herramientas para desarrolladores en la pestaña Red, cargue la pantalla Comentarios y filtre por «gravatar». Las llamadas de actualización del servidor no aparecen nunca ahí.

## Gravatar está en todas las pantallas de administración

WordPress genera todos los avatares a partir de una sola dirección, `secure.gravatar.com`, y los coloca en más sitios de los que la mayoría de los equipos imagina. La barra de administración muestra uno en cada pantalla, con una copia más grande en su menú. Las listas de Comentarios y Usuarios incluyen uno por fila, y el módulo Actividad del Escritorio añade uno por cada comentario reciente.

> GreatFire considera https://secure.gravatar.com bloqueado en China continental: su única prueba concluyente reciente, del 31 de agosto de 2026, falló. Las 29 direcciones de gravatar.com que ha probado figuran todas como bloqueadas.
> Fuente: GreatFire, agosto de 2026. https://en.greatfire.org/https/secure.gravatar.com

Cada una de esas imágenes genera una petición que el navegador no logra completar. La página se muestra igualmente. El hueco del avatar queda vacío y nada en la pantalla indica que una petición ha fallado.

Ajustes > Comentarios es la peor pantalla de todas.

Muestra una vista previa de cada estilo de avatar predeterminado, diez en total, incluso con los avatares desactivados.

> Antes de mostrar las diez opciones de avatar predeterminado en la pantalla de ajustes de comentarios, WordPress 7.1.3 añade un filtro con el comentario «Force avatars on to display these choices» (forzar los avatares para mostrar estas opciones).
> Fuente: núcleo de WordPress 7.1.3, wp-admin/options-discussion.php, consultado el 12 de octubre de 2026. https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-admin/options-discussion.php

Basta con desmarcar «Mostrar avatares» en esa misma pantalla para retirarlos del resto de páginas de administración.

## Los servidores de actualizaciones y el 429 silencioso

Este problema solo aparece cuando el servidor está en China continental.

WordPress.org restringe las peticiones de algunas fuentes de red chinas, y lo tiene dicho por escrito desde 2020.

> Un usuario en China informó de errores HTTP 429 en todos los subdominios de WordPress.org. WordPress.org respondió que varias fuentes de red chinas tienen limitadas las peticiones «debido a un alto nivel de abuso y de tráfico ilegítimo», y que no las incluirá en una lista blanca ni ofrecerá una vía oficial para replicar WordPress.org a través de un proxy chino.
> Fuente: WordPress.org Meta Trac, ticket #5106, 21 de marzo de 2020. https://web.archive.org/web/20260116133057/https://meta.trac.wordpress.org/ticket/5106

Esa respuesta es de 2020, y no hemos encontrado nada más reciente de WordPress.org sobre el asunto.

Desde el continente, el sitio principal responde. El 429 obedece al límite de peticiones que aplica el propio WordPress.org.

> GreatFire considera https://wordpress.org no bloqueado: sus 13 pruebas concluyentes recientes conectaron con normalidad, la última el 11 de octubre de 2026. Considera http://api.wordpress.org no bloqueado según una prueba concluyente del 7 de octubre de 2026, y nunca ha probado https://api.wordpress.org.
> Fuente: GreatFire, octubre de 2026. https://en.greatfire.org/https/wordpress.org

Un 429 llega rápido. WordPress lo interpreta como una comprobación fallida y desiste en silencio, de modo que no aparece ningún aviso de actualización y el sitio se va quedando atrás. Ahí está la vertiente de seguridad del problema, y nuestra [guía sobre si WordPress está bloqueado en China](/es/recursos/guia-web-china/wordpress-bloqueado-en-china/) explica lo que supone para la aplicación de parches.

La lentitud procede de otra cosa: una conexión que se queda colgada sin responder. Y WordPress realiza estas comprobaciones mientras genera la página de administración, a la espera de respuesta.

> Fuera de las ejecuciones del cron, la comprobación de la versión del núcleo espera hasta 3 segundos. Las de plugins y temas esperan 3 segundos más 1 por cada 10 plugins o temas instalados. Si la petición HTTPS falla, cada comprobación lo vuelve a intentar por HTTP simple. Cualquier respuesta distinta de HTTP 200 pone fin a la comprobación sin aviso.
> Fuente: núcleo de WordPress 7.1.3, wp-includes/update.php, consultado el 12 de octubre de 2026. https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/update.php

Las comprobaciones se lanzan en la primera página de administración que se abre pasadas 12 horas. La pantalla Plugins las repite cada hora, y Escritorio > Actualizaciones, cada minuto. Con 40 plugins, una comprobación atascada puede retener la pantalla Plugins 7 segundos, y otro tanto por HTTP (cálculo nuestro, a partir de los tiempos de espera anteriores).

## Las fuentes de Google dentro del editor

El editor de bloques del núcleo no carga ninguna fuente de Google en la página pública. Su biblioteca de fuentes, en cambio, sí llama a Google: cuando alguien instala una fuente de Google, WordPress pide permiso y después es el navegador de esa persona el que descarga cada archivo y lo sube al sitio.

> El editor de WordPress 7.1.3 advierte al usuario de que, para instalar fuentes de Google, debe dar permiso para conectarse directamente a los servidores de Google. Su función downloadFontFaceAssets descarga después cada archivo en el navegador.
> Fuente: núcleo de WordPress 7.1.3, wp-includes/js/dist/editor.js, consultado el 12 de octubre de 2026. https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/js/dist/editor.js

Los archivos residen en `fonts.gstatic.com`, y que ese servidor responda depende de la red desde la que trabaje el redactor.

> Desde una instancia de Alibaba Cloud (阿里云) en cn-zhangjiakou, con mediciones cada diez minutos durante 12 horas el 28 de agosto de 2026, fonts.googleapis.com respondió a 72 de 72 peticiones con una mediana de 111 ms hasta el primer byte, y fonts.gstatic.com a 72 de 72 en 102 ms. En cargas de página desde una línea doméstica de China Mobile (中国移动) en Pekín, el 30 de agosto de 2026, los mismos servidores respondieron, respectivamente, a 0 de 54 y a 0 de 6 peticiones.
> Fuente: 21YunBox, A Day of Third-Party Requests From Inside China, del 28 al 30 de agosto de 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

(¿No usa Elementor? Pase directamente a los espejos.)

Con Elementor, el problema adquiere contornos muy precisos. Su editor carga Roboto desde `fonts.googleapis.com` como dependencia de su propia hoja de estilos, y esa llamada hace caso omiso del ajuste de Google Fonts. Desactivar Google Fonts en Elementor > Ajustes > Avanzado solo cambia la página pública. El editor sigue llamando a Google.

> En Elementor 4.3.4, publicado el 5 de octubre de 2026, el cargador del editor registra sin ninguna condición una hoja de estilos de Roboto alojada en fonts.googleapis.com y hace que la hoja de estilos principal del editor dependa de ella. La barra superior de las pantallas de administración propias de Elementor carga Roboto desde el mismo servidor, también sin condición alguna.
> Fuente: código fuente de Elementor 4.3.4, consultado el 12 de octubre de 2026. https://downloads.wordpress.org/plugin/elementor.4.3.4.zip

Esa hoja de estilos se carga en la cabecera de la página.

> «El CSS bloquea el renderizado: el navegador detiene la representación de la página hasta que recibe y procesa todo el CSS.»
> Fuente: MDN Web Docs, Critical rendering path, febrero de 2025. https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Critical_rendering_path

En una línea donde `fonts.googleapis.com` deja de responder, el editor espera una fuente que, en rigor, no necesita.

Eliminar la llamada exige cuidado. La hoja de estilos principal del editor depende del identificador `google-font-roboto`, y WordPress descarta cualquier hoja de estilos a la que le falte una dependencia, así que quitar el registro de ese identificador elimina también los estilos del editor. Lo sensato es apuntar el identificador a una copia de Roboto alojada en su propio servidor.

`s.w.org`, que sirve las imágenes de los emojis y las vistas previas de la biblioteca de fuentes, no parece dar problemas.

> GreatFire considera https://s.w.org no bloqueado según su única prueba concluyente reciente, del 7 de octubre de 2026.
> Fuente: GreatFire, octubre de 2026. https://en.greatfire.org/https/s.w.org

## Espejos de avatares en el continente

Es posible conservar los avatares y prescindir de la llamada a Gravatar. Cravatar es un servicio de avatares con sede en el continente, gestionado por una empresa de Cantón con su propio registro ICP (ICP备案), y sus direcciones siguen el mismo esquema que las de Gravatar.

> La API de Cravatar atiende las peticiones en la dirección https://cravatar.cn/avatar/ seguida del hash del correo electrónico. Si la dirección no tiene avatar en Cravatar, busca el de Gravatar y después el de QQ antes de recurrir a uno predeterminado.
> Fuente: documentación para desarrolladores de Cravatar, septiembre de 2024. https://cravatar.com/developer/api

Para WordPress, Cravatar publica un breve filtro `get_avatar_url` que sustituye los nombres de host de gravatar.com por `cravatar.cn`. El plugin que recomienda a quienes no programan, WPAvatar, se actualizó por última vez en septiembre de 2025 y figura como probado hasta WordPress 6.8, de modo que en un sitio con la 7.1 el filtro es la opción más segura.

No publicamos ninguna cifra de velocidad de Cravatar. Las que circulan no indican punto de medición ni fecha, y GreatFire nunca ha probado cravatar.cn.

## Qué desactivar, qué llevar a un espejo y qué asumir

| Problema | Desactivar | Espejo | Asumir |
| --- | --- | --- | --- |
| Gravatar | Desmarcar «Mostrar avatares» en Ajustes > Comentarios | Cravatar, con el filtro o con WPAvatar | Diez vistas previas en la pantalla de comentarios, si solo se desmarca la casilla |
| Comprobación de actualizaciones en un servidor continental | Mantenerla: las actualizaciones son necesarias | Un plugin de espejo, o actualizaciones ejecutadas fuera del continente | Actualizaciones con retraso, si no se configura ninguna de las dos |
| La Roboto del editor de Elementor | Cambiar en el código el origen del identificador, primero en un entorno de pruebas | Cargar Google Fonts en local (Ajustes > Rendimiento) solo cubre la página pública | Un editor más lento en algunas líneas |
| Instalaciones desde la biblioteca de fuentes | Omitir la colección de Google | Subir archivos de fuentes alojados por usted | Instalaciones puntuales desde una conexión que llegue a Google |

El plan para la tarde es este. Desactive los avatares, o añada el filtro de Cravatar y compruebe la pantalla Comentarios desde la oficina de Shanghái. Si el servidor está en el continente, decida cómo va a recibir las actualizaciones. Reserve el trabajo en Elementor para un desarrollador que disponga de una copia de pruebas.

El proyecto de espejo más conocido, WP-China-Yes, se cerró en el directorio de WordPress.org en abril de 2020 y continúa en GitHub como WPCY.COM. Hace pasar el tráfico de WordPress.org por espejos y sustituye Gravatar por Cravatar. Si un espejo falla, el plugin recurre al servidor original. Se trata de código de terceros que se interpone entre su sitio y sus actualizaciones: conviene revisarlo antes. La otra vía es un proceso de despliegue que ejecute las actualizaciones desde fuera del continente.

Los plugins suman sus propias llamadas, que repasa nuestra guía sobre los [plugins que fallan en China](/es/recursos/guia-web-china/plugins-wordpress-china/). Nuestra página sobre [WordPress en China](/es/wordpress-en-china/) aborda la cuestión de fondo: dónde debe alojarse WordPress.

## Preguntas frecuentes

**¿Desactivar los avatares rompe algo?**

No. Con «Mostrar avatares» desactivado, WordPress no dibuja ningún avatar, de modo que la barra de administración y las listas de Comentarios y Usuarios pierden la imagen, igual que los hilos de comentarios de la web pública. Un tema que fuerce los avatares puede seguir pidiéndolos. Revise el panel y la web pública después del cambio.

**¿La lentitud se debe al Gran Cortafuegos o a la distancia hasta nuestro servidor?**

A ambas, y sus efectos se suman. Gravatar falla y los servidores de fuentes de Google dejan de responder en algunas líneas, esté donde esté el servidor. Un servidor en Europa añade además un viaje de ida y vuelta transfronterizo a cada clic en el panel, y nada de lo anterior lo elimina. Resuelva primero las llamadas que fallan. Lo que quede se deberá a la distancia o al propio servidor.

**Nuestro tema de administración carga jQuery desde Google. ¿Importa?**

Sí. GreatFire consideró ajax.googleapis.com bloqueado en su última prueba concluyente, el 22 de agosto de 2026. Una simple etiqueta script en la cabecera detiene la página hasta que se carga, así que ese tema se atasca en todas las pantallas. WordPress incluye su propia copia de jQuery, y el tema debería usarla.

**¿Mostrará Cravatar las fotos que nuestro equipo ya tiene en Gravatar?**

Por lo general, sí. Según la documentación de Cravatar, cuando una dirección no tiene avatar en Cravatar, busca el de Gravatar y después el de QQ antes de usar uno predeterminado. Su equipo conserva sus fotos sin abrir una cuenta nueva. GreatFire nunca ha probado cravatar.cn. Haga una prueba desde la oficina.

**¿Hace falta cambiar de alojamiento para solucionarlo?**

No para los avatares ni para las fuentes. Son llamadas que salen del navegador de su equipo y fallan del mismo modo tanto si el servidor está en Shanghái como en Fráncfort. El 429 de las actualizaciones solo afecta a un servidor continental. Trasladarse allí acorta la distancia, pero entonces el problema de las actualizaciones pasa a ser suyo.
