---
title: "Plugins de WordPress que fallan en China"
subtitle: "Los servidores externos a los que recurren sus plugins de WordPress y cuáles fallan tras el Great Firewall."
summary: "Cómo auditar las dependencias de WordPress en China con pruebas fechadas y corregir fuentes, scripts, formularios y servicios externos."
visual: "/images/guides/wordpress-plugins-china.webp"
order: 35
published: true
publishedAt: 2026-09-15
updatedAt: 2026-09-15
category: Technology
author: cyril-drouin
---

Para auditar los plugins de WordPress en China, empiece por los servidores a los que llama cada uno. Una petición de script fallida puede retrasar la página; un captcha que falla puede impedir el envío de consultas aunque la página cargue. Aloje los archivos esenciales en su servidor y pruebe después los formularios y el editor desde las conexiones de China continental que utilizan sus visitantes y su equipo.

Estas pruebas publicadas muestran por qué importa la conexión. La columna de resultados describe únicamente la línea residencial de la muestra. No permite anticipar qué ocurrirá en otras redes.

| Servidor | Alibaba Cloud (阿里云), Zhangjiakou, 28 ago. 2026 | Línea residencial de China Mobile (中国移动), Pekín, 30 ago. 2026 | Resultado en la línea residencial |
|---|---|---|---|
| `fonts.googleapis.com` | 72 de 72, mediana TTFB de 111 ms | 0 de 54 | bloqueado |
| `fonts.gstatic.com` | 72 de 72, mediana TTFB de 102 ms | 0 de 6 | bloqueado |
| `cdn.jsdelivr.net` | 72 de 72, mediana TTFB de 660 ms, p95 de 1757 ms | 36 de 36 | accesible |
| `www.googletagmanager.com` | 72 de 72, mediana TTFB de 118 ms | 0 de 112 | bloqueado |
| `www.google.com/recaptcha` | 0 de 72 | 0 de 18 | bloqueado |

> Los recuentos de peticiones completadas y los tiempos proceden de 21YunBox: Alibaba Cloud (阿里云), Zhangjiakou, 28 de agosto de 2026, con una muestra cada 10 minutos durante 12 horas y un tiempo de espera máximo de 30 segundos; y una línea residencial de China Mobile (中国移动) en Pekín, el 30 de agosto de 2026, con 88 sitios y 264 cargas de página.
> Fuente: 21YunBox, A Day of Third-Party Requests From Inside China, agosto de 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

TTFB es el tiempo hasta recibir el primer byte; p95 corresponde al percentil 95. La sonda en la nube y la prueba con navegador en la línea residencial emplean métodos distintos. Hay que comprobar por separado si la página se puede utilizar. Fuentes revisadas el 15 de septiembre de 2026; las pruebas conservan sus fechas originales.

## La etiqueta script que puede retrasar una página

Busque las cargas de jQuery desde Google Hosted Libraries, en `ajax.googleapis.com`.

> GreatFire clasifica `ajax.googleapis.com` como bloqueado a partir de su última prueba concluyente en China continental, realizada el 22 de agosto de 2026.
> Fuente: GreatFire, agosto de 2026. https://en.greatfire.org/https/ajax.googleapis.com

Si un tema carga un script clásico sin `async` ni `defer`, el navegador detiene el análisis del HTML mientras lo descarga y ejecuta. Si la petición aparece al principio del documento, una conexión que no responde puede retrasar el contenido posterior. El efecto depende de la etiqueta y de dónde se encuentre.

> Los scripts clásicos sin `async`, `defer` o comportamiento de módulo bloquean el análisis del HTML de forma predeterminada. El renderizado es un mecanismo distinto.
> Fuente: MDN, referencia del elemento script, actualizada el 9 de mayo de 2026. https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script

Sustituya la copia externa por el jQuery incluido en WordPress cuando sea compatible. Revise los scripts del tema que dependen de él antes de cambiar el orden de carga. Eliminar una biblioteca que aún necesita un menú o un formulario provoca otro fallo.

La fila de reCAPTCHA exige una prueba funcional. Envíe una consulta real de prueba y confirme que llega. Una página puede mostrarse normalmente aunque falle el reto obligatorio. Mantenga la protección contra el spam mientras prueba una alternativa.

## Evaluar cada CDN por separado

jsDelivr completó las peticiones desde las dos conexiones de la muestra. Su latencia en el centro de datos figura en la tabla. El resultado residencial confirma que las peticiones terminaron, pero no aporta una cifra de latencia comparable.

Si una biblioteca es necesaria para que funcione la página, valore servirla desde su propio servidor de origen. Pruebe el resultado tras incorporarla al proyecto y registre la versión. Las futuras actualizaciones no deberían depender de que alguien recuerde de dónde salió el archivo.

No disponemos de una prueba completa, fechada y con ubicación identificada para cdnjs y unpkg. Su estado queda sin verificar aquí. Incluya en su auditoría las peticiones a `cdnjs.cloudflare.com` o `unpkg.com`.

## Google Fonts depende de la conexión

Lea juntas las dos filas de las fuentes: ambos servidores completaron todas las peticiones del centro de datos y ninguna de la línea residencial probada. El alojamiento local elimina esa petición externa del navegador de sus visitantes.

En Elementor, compruebe expresamente el ajuste de fuentes locales.

> El anuncio de Elementor del 18 de septiembre de 2025 indica que Load Google Fonts Locally está desactivado de forma predeterminada. Sitúa el control en Elementor > Settings > Performance.
> Fuente: Elementor, incidencia 32838, 18 de septiembre de 2025. https://github.com/elementor/elementor/issues/32838

Una vez activado el alojamiento local, vacíe la caché de las páginas. Examine después las peticiones de fuentes en la página pública y confirme que los archivos proceden de su dominio. Los ajustes y los archivos guardados pueden variar entre instalaciones. Revise el resultado también después de una actualización.

Abra después el editor. Sigue sin verificarse el acceso desde China continental a `my.elementor.com` y `assets.elementor.com`. Que funcione la página pública no demuestra que el equipo pueda trabajar en el editor.

## Las llamadas externas del núcleo de WordPress

Un tema puede solicitar una fuente cuyo registro conserva WordPress por compatibilidad. Compruebe qué código inicia la petición.

> El archivo `script-loader.php` de WordPress mantiene registros de Google Fonts para Open Sans y Noto Serif. Sus comentarios indican que el núcleo ya no los utiliza, aunque pueden necesitarlos los temas o plugins.
> Fuente: código fuente de WordPress, consultado el 15 de septiembre de 2026. https://raw.githubusercontent.com/WordPress/WordPress/master/wp-includes/script-loader.php

Busque peticiones a Gravatar tanto en las páginas públicas como en wp-admin.

> GreatFire clasifica `secure.gravatar.com` como bloqueado, con fecha de última prueba del 31 de agosto de 2026. El proveedor no identifica la ciudad ni el operador.
> Fuente: GreatFire, agosto de 2026. https://en.greatfire.org/https/secure.gravatar.com

Si los avatares no aportan nada al sitio, valore desactivarlos. Compruebe el resultado en las páginas de comentarios y en las pantallas habituales del editor. Nuestra [guía sobre el bloqueo de WordPress en China](/es/recursos/guia-web-china/wordpress-bloqueado-en-china/) repasa las demás dependencias.

## Cuando un servicio externo necesita acceder al sitio

Antes de activar un ajuste de rendimiento, averigüe qué máquina realiza el trabajo.

> WP Rocket envía las URL de las páginas a su API, que las visita para generar el CSS utilizado. El sitio debe ser accesible públicamente para ese servicio.
> Fuente: documentación de WP Rocket, Remove Unused CSS, actualizada el 1 de junio de 2026. https://docs.wp-rocket.me/article/1529-remove-unused-css

Si el servidor de origen está en China continental, pruebe ese acceso. Revise el estado de la tarea y los registros del cortafuegos antes de cambiar las reglas de acceso. Un fallo del servicio necesita su propio diagnóstico: la pestaña Network del navegador no muestra el recorrido completo.

> QUIC.cloud recibe lotes de imágenes de la biblioteca multimedia y los procesa en los nodos de su servicio.
> Fuente: QUIC.cloud, Image Optimization, 6 de abril de 2026. https://docs.quic.cloud/services/imageopt/

La documentación describe un procesamiento externo. No determina si el servicio es accesible desde China continental ni dónde se procesa cada tarea. También puede comprimir las imágenes antes de subirlas. Nuestra [guía de alojamiento WordPress en China](/es/recursos/guia-web-china/alojamiento-wordpress-china/) aborda la elección del servidor de origen, que conviene estudiar junto con estos ajustes.

## Cómo auditar los plugins de WordPress en China

Abra Chrome DevTools en la pestaña Network, recargue e inspeccione las columnas Domain e Initiator. Anote qué tema, plugin o script inicia cada petición. Repita la prueba en una página de contacto y mientras utiliza el editor.

Nuestro [China Site Scanner gratuito](/es/china-site-scanner/) detecta patrones conocidos de dependencias en el código fuente del sitio. No certifica el acceso a la red. Complete ese inventario con una prueba de navegador desde una conexión continental. Registre la ciudad, el operador, la fecha y la acción que intentó realizar. Guarde tanto los fallos como los envíos correctos para que el desarrollador pueda reproducir el problema.

Anote las versiones de los plugins y los ajustes modificados junto a los resultados. Corrija una dependencia que impide recibir consultas antes que una imagen opcional. Tras cada cambio, vacíe la caché, recargue y repita la acción afectada. Vuelva a comprobarlo después de actualizar el tema o el constructor de páginas, ya que pueden recuperar llamadas externas.

## Qué sustituir, servidor por servidor

Identifique el componente que inicia la petición para decidir dónde intervenir. Los resultados de red se limitan a las pruebas fechadas citadas arriba. Las parejas de fechas indican primero la prueba del centro de datos y después la residencial.

| Dependencia | Estado registrado | Qué comprobar | Sustitución o medida |
|---|---|---|---|
| Google Hosted Libraries | Bloqueado, GreatFire, 22 ago. 2026 | Script inicial que retrasa el análisis | jQuery local compatible |
| Google Fonts | Accesible desde el centro de datos; bloqueado en la línea residencial probada, 28/30 ago. 2026 | Origen de las fuentes | Alojar los archivos localmente |
| Gravatar | Bloqueado, GreatFire, 31 ago. 2026 | Peticiones de avatares | Desactivar los avatares innecesarios |
| Google reCAPTCHA | Fallo en ambas muestras, 28/30 ago. 2026 | Enviar una consulta | Probar otro reto del formulario |
| Google Tag Manager | Accesible desde el centro de datos; bloqueado en la línea residencial probada, 28/30 ago. 2026 | Carga del contenedor y recepción de eventos | Revisar cada etiqueta |
| jsDelivr | Peticiones completadas en ambas muestras, 28/30 ago. 2026 | Biblioteca esencial | Incorporar los archivos localmente |
| cdnjs, unpkg | Sin verificar aquí | Cada URL solicitada | Probar o alojar localmente |
| WP Rocket Used CSS | Arquitectura documentada; red sin verificar | Acceso del servicio a la página | Comprobar que termina la tarea |
| Imágenes QUIC.cloud | Arquitectura documentada; red sin verificar | Finalización del procesamiento | Comprimir antes de subir |

## Preguntas frecuentes

**¿Hay un plugin que lo resuelva todo?**

Localice el componente que inicia la petición. Puede que deba cambiar un ajuste del tema o del constructor. Las etiquetas de marketing necesitan su propia revisión. Elija una herramienta cuando sepa qué llamada debe sustituir y pruebe la página modificada desde una conexión continental. Incorpore esa comprobación a sus actualizaciones.

**¿Puedo hacer la prueba con una VPN?**

Una prueba describe la red por la que sale el tráfico. Una salida VPN en el extranjero no representa a un visitante continental. Anote la ubicación de salida y el resolvedor antes de interpretar el resultado. Para validar el sitio, utilice una conexión continental conocida y complete las mismas tareas que un visitante, incluido el envío del formulario o la compra.

**¿Hay que renunciar a Elementor?**

Audite por separado las páginas públicas y el editor antes de decidir. El ajuste de fuentes locales resuelve una dependencia. Pruebe las demás peticiones y confirme que su editor puede realizar el trabajo habitual. Los servidores de Elementor aún no probados impiden dar aquí un veredicto completo de compatibilidad continental para su instalación.

**¿A cuántos servidores externos debería llamar un sitio para China?**

Mantenga el contenido esencial independiente de servidores extranjeros no probados. Evalúe cada servicio restante según su función: un formulario debe entregar consultas y las estadísticas deben recibir eventos. Nuestra página [WordPress en China](/es/wordpress-en-china/) aborda las demás decisiones de desarrollo. Una lista corta de servidores también necesita una prueba funcional.
