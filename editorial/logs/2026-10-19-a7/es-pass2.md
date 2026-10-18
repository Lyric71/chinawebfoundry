---
title: "Elementor, Divi y Gutenberg en China"
subtitle: "Antes de elegir un constructor de páginas para China continental, compare la gestión de fuentes, las peticiones del editor y los recursos locales."
summary: "Fuentes y peticiones externas de Elementor, Divi y Gutenberg en un sitio para China: lo que confirman el código y la documentación, editor incluido."
visual: "/images/guides/page-builders-china.webp"
order: 47
published: true
publishedAt: "2026-10-19"
updatedAt: "2026-10-19"
reviewBy: 2026-11-19
category: "Technology"
author: "cyril-drouin"
---

Al preparar un sitio de Elementor para China hay que revisar tanto la página pública como el editor. Elementor permite servir Google Fonts desde su propio servidor, pero el editor de su versión 4.3.4 registra una fuente alojada en Google que escapa a esos ajustes. Divi documenta sus opciones de fuentes, y el Gutenberg nativo no añade de forma predeterminada ninguna petición a Google Fonts en la página pública. Quedan por revisar su tema y sus extensiones.

| Constructor | Lo que está confirmado | Lo que debe comprobar en su sitio |
|---|---|---|
| Elementor 4.3.4 | Ajustes de fuentes separados; bibliotecas de iconos incluidas | URL de las fuentes públicas, petición de Roboto del editor, widgets de complementos |
| Divi | Opciones de Google Fonts documentadas | Versión instalada, ajustes guardados, peticiones de fuentes reales |
| Gutenberg nativo en WordPress 7.1.3 | Ninguna carga predeterminada de Google Fonts en la página pública | Fuentes del tema, bloques añadidos, instalación de fuentes |

Revisamos el código fuente y la documentación el 19 de octubre de 2026. Los números de versión que figuran más abajo corresponden a las ediciones inspeccionadas. Los datos de red proceden de pruebas publicadas por terceros sobre servidores concretos; no hemos elaborado ninguna clasificación de velocidad entre los constructores.

## De dónde salen las peticiones

En un constructor de páginas, el equipo elige fuentes y añade widgets. Cada una de esas decisiones puede generar una petición a un servidor ajeno a su sitio web. En el caso de una fuente, rastree la petición de la hoja de estilos hasta el archivo que realmente dibuja las letras en pantalla, en una página que la utilice.

Conviene separar lo que descarga el visitante de lo que necesita el editor para trabajar. Un equipo de marketing puede ver una página pública limpia mientras su pantalla de edición sigue llamando a un servicio de fuentes en el extranjero. Compruebe las URL de los recursos de la página publicada aunque la edición funcione.

Nuestra [visión general de WordPress en China](/es/wordpress-en-china/) se ocupa del alojamiento. En cuanto al constructor, empiece por los ajustes de fuentes y siga las peticiones que generan. Anote la versión instalada antes de tocar nada, para que otro desarrollador pueda repetir la comprobación después de una actualización.

## Elementor en China: dos ajustes que revisar

En Elementor 4.3.4, vaya a **Elementor > Settings > Advanced > Google Fonts**. En la versión inspeccionada, su valor predeterminado es Enable. De él depende que las páginas públicas generadas por Elementor usen Google Fonts. Desactívelo si las fuentes llegan por otra vía, por ejemplo los archivos locales de su tema.

En **Elementor > Settings > Performance**, el ajuste independiente Load Google Fonts Locally viene desactivado de forma predeterminada (Disable). Revíselo si quiere conservar las fuentes de Google elegidas en Elementor pero servir los archivos desde su propio sitio. No dé por hecho que el ajuste de una instalación anterior valga también para una nueva.

> Elementor anunció el 18 de septiembre de 2025 que Load Google Fonts Locally pasaba a estar desactivado de forma predeterminada; el código fuente de la versión 4.3.4 mantiene ese valor.
> Fuente: Elementor, septiembre de 2025; código fuente versionado comprobado en octubre de 2026. https://github.com/elementor/elementor/issues/32838 https://downloads.wordpress.org/plugin/elementor.4.3.4.zip

| Ajuste en Elementor 4.3.4 | Pestaña del menú | Opción guardada | Valor predeterminado |
|---|---|---|---|
| Google Fonts | Advanced | `elementor_google_font` | Enable |
| Load Google Fonts Locally | Performance | `elementor_local_google_fonts` | Disable |

Guarde una copia de los ajustes originales para poder restaurarlos si la tipografía de una página cambia sin previo aviso.

Para poner a prueba la forma de servir las fuentes que haya elegido, utilice en una copia de preproducción una página que su equipo edite con frecuencia, con sus titulares y su texto reales. Después de cambiar los ajustes, vacíe los estilos generados y las cachés, y vuelva a cargar la página con la caché del navegador desactivada. Examine tanto la URL de la hoja de estilos como las URL de los archivos de fuentes que contiene: una hoja de estilos servida desde su dominio puede seguir apuntando a un archivo de fuente alojado en otro lugar. Antes de dar el cambio por bueno, confirme que los archivos de fuentes locales terminan de descargarse.

Los titulares necesitan su propia comprobación. Una elección hecha en una página concreta o un widget añadido pueden apartarse de la tipografía global del sitio. Pruebe también la versión en chino: la fuente que dibuja los titulares en caracteres latinos puede dejar los caracteres chinos en manos de una fuente de reserva, y eso puede alterar los saltos de línea aunque todas las peticiones se completen.

## El editor sigue pidiendo Roboto a Google

Los ajustes de la página pública no cubren todo el entorno de edición. En la versión inspeccionada, `register_base_styles()` registra `google-font-roboto` apuntando a `fonts.googleapis.com` sin consultar la opción de Google Fonts. La hoja de estilos `elementor-editor` incluye ese identificador entre sus dependencias.

La barra superior de administración de Elementor también carga Roboto desde Google. Un desarrollador que solo revise la página de inicio pasará por alto este segundo contexto.

> Elementor 4.3.4 registra la hoja de estilos Roboto del editor sin la condición del ajuste de fuentes; su barra superior de administración hace una llamada aparte a una hoja de estilos de Google.
> Fuente: Elementor, versión 4.3.4, código fuente comprobado en octubre de 2026, core/editor/loader/editor-loader.php y modules/admin-top-bar/module.php. https://downloads.wordpress.org/plugin/elementor.4.3.4.zip

A continuación, abra una página existente en el editor. Busque `fonts.googleapis.com` y `fonts.gstatic.com` en el panel Red del navegador y localice la hoja de estilos que originó cada petición. Si sustituye una hoja de estilos del editor, conserve su identificador registrado y hágalo apuntar al nuevo archivo; así, los estilos que dependen de él seguirán cargándose. Pruebe los controles de edición antes de llevar el cambio a producción.

Compruebe por último el propio trabajo de edición: guarde un cambio, vuelva a abrir la página y use el selector de fuentes. Pida al compañero responsable de los contenidos que repita ese recorrido con su conexión habitual.

## Los iconos incluidos en Elementor son locales

Font Awesome y eicons forman parte del paquete de Elementor. En el código inspeccionado, sus rutas se construyen a partir del directorio de recursos del plugin. Compruebe esas rutas locales antes de sustituir una CDN de iconos por indicación de una guía genérica de resolución de problemas.

> Elementor 4.3.4 incluye Font Awesome y eicons entre sus recursos locales y los registra con las rutas de recursos del plugin.
> Fuente: Elementor, versión 4.3.4, código fuente comprobado en octubre de 2026. https://downloads.wordpress.org/plugin/elementor.4.3.4.zip

Deje los iconos incluidos en su sitio si sus peticiones se completan. Un complemento puede traer su propio servicio de iconos, y una reescritura de recursos aplicada a todo el sitio puede cambiar las URL de entrega. Antes de eliminar una llamada externa, averigüe qué componente la origina con la columna Iniciador de las herramientas del navegador.

Nuestra [guía sobre los plugins de WordPress en China](/es/recursos/guia-web-china/plugins-wordpress-china/) aborda esa revisión más amplia de dependencias. Aplique el mismo cuidado a los scripts: la URL de una biblioteca cargada por el tema puede no tener nada que ver con el constructor que intenta reparar.

## Por qué importa el servidor de fuentes

Los resultados de 21YunBox desde la nube y desde una línea doméstica deben leerse juntos. Describen el mismo servidor de fuentes en redes y fechas distintas.

| Servidor | Alibaba Cloud (阿里云) cn-zhangjiakou | Línea doméstica de China Mobile (中国移动) en Pekín | Respuestas, nube / doméstica | Veredicto | Fechas de las pruebas |
|---|---|---|---|---|---|
| fonts.googleapis.com | TTFB mediano de 111 ms | Sin respuesta | 72 de 72 / 0 de 54 | Diverge según el punto de medición | 28 / 30 de agosto de 2026 |

> 21YunBox midió fonts.googleapis.com desde Alibaba Cloud (阿里云) cn-zhangjiakou cada diez minutos durante doce horas el 28 de agosto de 2026, con un tiempo de espera de 30 segundos: se completaron 72 de 72 peticiones, con una mediana de 111 ms hasta el primer byte. Su prueba del 30 de agosto desde una línea doméstica de China Mobile (中国移动) en Pekín, con 264 cargas de página en 88 sitios y un límite de 60 segundos por página, registró 54 peticiones a ese servidor y ninguna respuesta.
> Fuente: 21YunBox, A Chinese Cloud Probe Is Not a Chinese Visitor: The Same Hosts, Opposite Answers, agosto de 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Alojar las fuentes en su propio servidor elimina esa petición externa. Si encuentra un servidor de plantillas en la nube o de servicios del editor, regístrelo como no probado salvo que lo cubran datos de terceros con fecha; aquí no damos ningún veredicto de accesibilidad desde China continental para `my.elementor.com` ni para `assets.elementor.com`.

Google Hosted Libraries requiere una comprobación aparte si un tema o un complemento lo utiliza.

> GreatFire registra https://ajax.googleapis.com como bloqueado, con una prueba concluyente fallida, la última del 22 de agosto de 2026. No indica ciudad ni operador.
> Fuente: GreatFire, agosto de 2026, comprobado de nuevo en octubre de 2026. https://en.greatfire.org/api/url/https/ajax.googleapis.com

Utilice ese veredicto solo si su lista de peticiones incluye el servidor de esa biblioteca. Averigüe qué componente lo añade antes de decidir qué sustituir.

## Divi: use los ajustes que documenta su versión

El código de Divi es cerrado y no lo hemos inspeccionado. La documentación de Theme Options de Elegant Themes de 2023 cita **Use Google Fonts** en General e **Improve Google Fonts Loading** en la subpestaña Performance. Según esa documentación, el segundo ajuste almacena en caché las Google Fonts y las incrusta en la página.

La documentación propia de Divi 5 confirma Use Google Fonts en General. Compruebe su versión antes de seguir una captura de pantalla antigua de los ajustes. No hemos verificado ni la lista completa de servidores a los que llama Divi durante la ejecución ni si el antiguo ajuste de caché elimina todas las peticiones a archivos de fuentes remotos.

> Elegant Themes documenta Use Google Fonts e Improve Google Fonts Loading en su antigua guía de Theme Options; su guía de Divi 5 documenta Use Google Fonts.
> Fuente: Elegant Themes, 31 de diciembre de 2023 y 18 de septiembre de 2026, respectivamente. https://help.elegantthemes.com/en/articles/8626158-using-the-divi-theme-options https://help.elegantthemes.com/en/articles/12958885-divi-5-theme-options

Antes de tocar Divi, guarde sus ajustes tipográficos. Si desactiva Google Fonts, revise el resultado tipográfico en páginas representativas antes de extender el cambio. Examine por separado una página vista sin iniciar sesión y el editor visual, con las cachés vacías. Anote las peticiones que observe para que el siguiente desarrollador pueda comprobarlas.

## El Gutenberg nativo simplifica las fuentes públicas

El editor de bloques integrado en WordPress no añade de forma predeterminada ninguna carga de Google Fonts a una página pública. En WordPress 7.1.3, los registros de Open Sans y Noto Serif en `script-loader.php` se mantienen por compatibilidad con temas y plugins. Registrar y cargar son pasos distintos: un tema o un plugin puede solicitar esos estilos registrados.

> WordPress 7.1.3 indica que ambos registros de fuentes de Google se conservan para temas y plugins; el núcleo ya no los usa.
> Fuente: núcleo de WordPress, versión 7.1.3, código fuente comprobado en octubre de 2026. https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/script-loader.php

La Font Library tiene su propio proceso de instalación. Su colección de Google procede de `s.w.org`. Una vez que la persona que edita concede el permiso, su navegador descarga los archivos de fuentes desde Google y los sube a su sitio. A partir de ahí, las fuentes instaladas se sirven en local. Por eso una instalación puede fallar antes de que ningún visitante abra la página.

> WordPress 7.1.3 define la colección de Google en fonts.php y usa downloadFontFaceAssets en el navegador antes de subir los archivos de fuentes.
> Fuente: núcleo de WordPress, versión 7.1.3, código fuente comprobado en octubre de 2026. https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/fonts.php https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/js/dist/editor.js

Gutenberg, por último, funciona dentro de una instalación completa de WordPress. Un tema de bloques trae sus propias fuentes. El núcleo puede pedir avatares a `secure.gravatar.com` e imágenes de emojis a `s.w.org` cuando se usan esas funciones. Los temas y los bloques añadidos pueden introducir más llamadas.

> WordPress 7.1.3 construye las URL de los avatares en secure.gravatar.com y define las URL de las imágenes de emojis en s.w.org.
> Fuente: núcleo de WordPress, versión 7.1.3, código fuente comprobado en octubre de 2026. https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/link-template.php https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/formatting.php

## Elegir según el trabajo de sus editores

Para un sitio nuevo con maquetaciones de contenido corrientes, empiece por evaluar los bloques nativos y un tema que aporte fuentes locales. Un sitio existente con Elementor o Divi necesita una revisión de sus peticiones antes de presupuestar una reconstrucción. Antes de comprometerse con otro constructor, pregunte quién mantendrá las maquetaciones y cuánto contenido existente habría que trasladar.

| Situación | Punto de partida práctico | Qué conservar |
|---|---|---|
| Sitio existente con Elementor | Mantener las maquetaciones; corregir la entrega de fuentes | Registros de peticiones de la página pública y del editor |
| Sitio existente con Divi | Confirmar la versión y los ajustes | Ajustes guardados y URL de fuentes observadas |
| Sitio editorial nuevo | Evaluar los bloques nativos y los recursos locales del tema | Maquetaciones representativas e instalación de fuentes comprobada |

Nuestra [guía sobre la velocidad de WordPress en China](/es/recursos/guia-web-china/velocidad-wordpress-china/) trata el rendimiento en su conjunto. Acote la revisión del constructor a lo que la persona que herede el sitio pueda repetir después de actualizar un plugin o el tema. Encárguesela a quien aprueba las actualizaciones y guarde la fecha y las versiones instaladas junto con los registros de peticiones, al lado de los ajustes.

## Preguntas frecuentes

**¿Funciona Elementor en China?**

Elementor permite modificar la entrega de fuentes en las páginas públicas. El código fuente de la versión 4.3.4 muestra además peticiones de fuentes propias del editor, de modo que una página de inicio limpia no resuelve la cuestión de la edición. Anote la versión instalada e inspeccione las peticiones que hacen sus widgets. Después, pruebe a editar una página real. No hemos medido una tasa de éxito global del constructor en China continental.

**¿Desactivar Google Fonts en Elementor cubre también el editor?**

En la versión 4.3.4 inspeccionada, el editor registra Roboto desde Google sin consultar ese ajuste, y la barra superior de administración hace otra llamada. Trate la página pública y el editor como dos comprobaciones distintas. Si cambia el registro de la hoja de estilos del editor, mantenga intacta su dependencia y compruebe que la edición y el guardado siguen funcionando.

**¿Qué ajuste de fuentes de Divi conviene revisar?**

Empiece por Use Google Fonts, en General, según la documentación de la versión que tenga instalada. La antigua guía de Theme Options cita también Improve Google Fonts Loading en Performance. No hemos inspeccionado el código de Divi, así que compruebe las URL resultantes de la hoja de estilos y de los archivos de fuentes antes de tomar ese ajuste como prueba de que las fuentes se sirven en local.

**¿Es Gutenberg más rápido que Divi o Elementor en China?**

Esta revisión no establece ninguna clasificación de velocidad. El Gutenberg nativo evita una petición predeterminada a Google Fonts en la página pública, pero el tema y los bloques añadidos siguen decidiendo buena parte de lo que descarga una página. Compare las maquetaciones y las listas de peticiones reales que piensa publicar. Su tiempo de carga depende de los archivos y servicios que solicite cada página.
