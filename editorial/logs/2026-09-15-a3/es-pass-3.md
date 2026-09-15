---
title: "Plugins de WordPress: fallos en China"
subtitle: "Qué servidores externos utilizan sus plugins de WordPress, cuáles fallan en China y cómo comprobar cada dependencia."
summary: "Pruebas fechadas para auditar WordPress en China y corregir dependencias de fuentes, scripts, formularios y servicios externos."
visual: "/images/guides/wordpress-plugins-china.webp"
order: 35
published: true
publishedAt: 2026-09-15
updatedAt: 2026-09-15
category: Technology
author: cyril-drouin
---

La auditoría de plugins de WordPress en China empieza por identificar los servidores que utiliza cada uno. Si falla la petición de un script, la página puede retrasarse. Un captcha averiado también puede impedir el envío de consultas en una página que carga normalmente. Aloje los archivos esenciales en su servidor y pruebe los formularios y el editor desde las conexiones continentales que usan sus visitantes y su equipo.

Las pruebas publicadas muestran el peso de la conexión utilizada. La última columna se refiere solo a la línea residencial de la muestra. Sus resultados no se pueden extender a otras redes.

| Servidor | Alibaba Cloud (阿里云), Zhangjiakou, 28 ago. 2026 | Línea residencial de China Mobile (中国移动), Pekín, 30 ago. 2026 | Resultado en la línea residencial |
|---|---|---|---|
| `fonts.googleapis.com` | 72 de 72, mediana TTFB de 111 ms | 0 de 54 | bloqueado |
| `fonts.gstatic.com` | 72 de 72, mediana TTFB de 102 ms | 0 de 6 | bloqueado |
| `cdn.jsdelivr.net` | 72 de 72, mediana TTFB de 660 ms, p95 de 1757 ms | 36 de 36 | accesible |
| `www.googletagmanager.com` | 72 de 72, mediana TTFB de 118 ms | 0 de 112 | bloqueado |
| `www.google.com/recaptcha` | 0 de 72 | 0 de 18 | bloqueado |

> Los recuentos de peticiones completadas y los tiempos proceden de 21YunBox: Alibaba Cloud (阿里云), Zhangjiakou, 28 de agosto de 2026, con una muestra cada 10 minutos durante 12 horas y un tiempo de espera máximo de 30 segundos; y una línea residencial de China Mobile (中国移动) en Pekín, el 30 de agosto de 2026, con 88 sitios y 264 cargas de página.
> Fuente: 21YunBox, A Day of Third-Party Requests From Inside China, agosto de 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

El TTFB mide cuánto tarda en llegar el primer byte; p95 es el percentil 95. La sonda en la nube y el navegador conectado a la línea residencial siguen métodos distintos. El funcionamiento de la página requiere otra comprobación. Las fuentes se revisaron el 15 de septiembre de 2026, sin modificar las fechas originales de las pruebas.

## La etiqueta script que puede retrasar una página

Busque las cargas de jQuery desde Google Hosted Libraries, en `ajax.googleapis.com`.

> GreatFire clasifica `ajax.googleapis.com` como bloqueado a partir de su última prueba concluyente en China continental, realizada el 22 de agosto de 2026.
> Fuente: GreatFire, agosto de 2026. https://en.greatfire.org/https/ajax.googleapis.com

Si un tema carga un script clásico sin `async` ni `defer`, el navegador detiene el análisis del HTML mientras lo descarga y ejecuta. Si la petición aparece al principio del documento, una conexión que no responde puede retrasar el contenido posterior. El efecto depende de la etiqueta y de dónde se encuentre.

> Los scripts clásicos sin `async`, `defer` o comportamiento de módulo bloquean el análisis del HTML de forma predeterminada. El renderizado es un mecanismo distinto.
> Fuente: MDN, referencia del elemento script, actualizada el 9 de mayo de 2026. https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script

Sustituya la copia externa por el jQuery incluido en WordPress cuando sea compatible. Revise los scripts del tema que dependen de él antes de cambiar el orden de carga. Eliminar una biblioteca que aún necesita un menú o un formulario provoca otro fallo.

Complete los datos de reCAPTCHA con una prueba funcional: envíe una consulta y confirme su recepción. La página puede mostrarse aunque falle la verificación obligatoria. Mantenga la protección contra el spam durante la prueba de una alternativa.

## Evaluar cada CDN por separado

jsDelivr completó las peticiones desde las dos conexiones de la muestra. Su latencia en el centro de datos figura en la tabla. El resultado residencial confirma que las peticiones terminaron, pero no aporta una cifra de latencia comparable.

Cuando una biblioteca sea indispensable para la página, considere alojarla en su servidor de origen. Compruebe que funciona al incorporarla al proyecto y deje constancia de la versión. Así, quien se ocupe de actualizarla sabrá qué archivo debe sustituir.

No disponemos de una prueba completa, fechada y con ubicación identificada para cdnjs y unpkg. Su estado queda sin verificar aquí. Incluya en su auditoría las peticiones a `cdnjs.cloudflare.com` o `unpkg.com`.

## Google Fonts depende de la conexión

Lea juntas las dos filas de las fuentes: ambos servidores completaron todas las peticiones del centro de datos y ninguna de la línea residencial probada. El alojamiento local elimina esa petición externa del navegador de sus visitantes.

En Elementor, compruebe expresamente el ajuste de fuentes locales.

> El anuncio de Elementor del 18 de septiembre de 2025 indica que Load Google Fonts Locally está desactivado de forma predeterminada. Sitúa el control en Elementor > Settings > Performance.
> Fuente: Elementor, incidencia 32838, 18 de septiembre de 2025. https://github.com/elementor/elementor/issues/32838

Active el alojamiento local y vacíe la caché. En la página pública, examine las peticiones de fuentes para confirmar que los archivos llegan desde su dominio. Cada instalación puede tener ajustes y archivos distintos, por lo que conviene repetir la comprobación después de actualizar.

Abra después el editor. Sigue sin verificarse el acceso desde China continental a `my.elementor.com` y `assets.elementor.com`. Que funcione la página pública no demuestra que el equipo pueda trabajar en el editor.

## Las llamadas externas del núcleo de WordPress

Un tema puede utilizar una declaración de fuente que WordPress conserva por compatibilidad. Localice el código que desencadena la petición.

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

Si aloja el sitio en China continental, compruebe que el servicio puede acceder a él. Consulte el estado de la tarea y los registros del cortafuegos antes de modificar las reglas de acceso. La pestaña Network del navegador no recoge todo el recorrido; un fallo del servicio exige un diagnóstico aparte.

> QUIC.cloud recibe lotes de imágenes de la biblioteca multimedia y los procesa en los nodos de su servicio.
> Fuente: QUIC.cloud, Image Optimization, 6 de abril de 2026. https://docs.quic.cloud/services/imageopt/

La documentación confirma que las imágenes se procesan en un servicio externo. No indica si puede accederse a él desde China continental ni dónde se ejecuta su tarea. Otra opción es comprimir las imágenes antes de subirlas. Nuestra [guía de alojamiento WordPress en China](/es/recursos/guia-web-china/alojamiento-wordpress-china/) trata la elección del servidor de origen, vinculada a estos ajustes.

## Cómo auditar los plugins de WordPress en China

Abra Chrome DevTools en la pestaña Network, recargue e inspeccione las columnas Domain e Initiator. Anote qué tema, plugin o script inicia cada petición. Repita la prueba en una página de contacto y mientras utiliza el editor.

Nuestro [China Site Scanner gratuito](/es/china-site-scanner/) detecta patrones conocidos de dependencias en el código fuente del sitio. No certifica el acceso a la red. Complete ese inventario con una prueba de navegador desde una conexión continental. Registre la ciudad, el operador, la fecha y la acción que intentó realizar. Guarde tanto los fallos como los envíos correctos para que el desarrollador pueda reproducir el problema.

Guarde con los resultados las versiones de los plugins y los ajustes modificados. Atienda primero las dependencias que impiden recibir consultas; una imagen opcional puede esperar. Después de cada cambio, repita la acción afectada con la página recargada y la caché vacía. Las actualizaciones del tema o del constructor pueden reintroducir llamadas externas y requieren otra revisión.

## Qué sustituir, servidor por servidor

Identifique el componente que inicia la petición para decidir dónde intervenir. Los resultados de red se limitan a las pruebas fechadas citadas arriba. Las parejas de fechas indican primero la prueba del centro de datos y después la residencial.

| Dependencia | Estado registrado | Qué comprobar | Sustitución o medida |
|---|---|---|---|
| Google Hosted Libraries | Bloqueado, GreatFire, 22 ago. 2026 | Script inicial que retrasa el análisis | jQuery local compatible |
| Google Fonts | Accesible desde el centro de datos; bloqueado en la línea residencial probada, 28/30 ago. 2026 | Origen de las fuentes | Alojar los archivos localmente |
| Gravatar | Bloqueado, GreatFire, 31 ago. 2026 | Peticiones de avatares | Desactivar los avatares innecesarios |
| Google reCAPTCHA | Fallo en ambas muestras, 28/30 ago. 2026 | Enviar una consulta | Probar otra verificación del formulario |
| Google Tag Manager | Accesible desde el centro de datos; bloqueado en la línea residencial probada, 28/30 ago. 2026 | Carga del contenedor y recepción de eventos | Revisar cada etiqueta |
| jsDelivr | Peticiones completadas en ambas muestras, 28/30 ago. 2026 | Biblioteca esencial | Incorporar los archivos localmente |
| cdnjs, unpkg | Sin verificar aquí | Cada URL solicitada | Probar o alojar localmente |
| WP Rocket Used CSS | Arquitectura documentada; red sin verificar | Acceso del servicio a la página | Comprobar que termina la tarea |
| Imágenes QUIC.cloud | Arquitectura documentada; red sin verificar | Finalización del procesamiento | Comprimir antes de subir |

## Preguntas frecuentes

**¿Hay un plugin que lo resuelva todo?**

Identifique primero qué componente inicia la petición. Quizá baste con modificar un ajuste del tema o del constructor; las etiquetas de marketing requieren una revisión aparte. Una vez localizada la llamada que debe sustituir, elija la herramienta. Pruebe después la página desde una conexión continental y repita el control al actualizar.

**¿Puedo hacer la prueba con una VPN?**

El resultado depende de la red por la que sale el tráfico. Una salida VPN en el extranjero no reproduce la conexión de un visitante continental. Anote la ubicación de salida y el resolvedor DNS antes de interpretar la prueba. Para validar el sitio, use una conexión continental conocida y complete las tareas del visitante, incluido el envío del formulario o la compra.

**¿Hay que renunciar a Elementor?**

Revise las páginas públicas y el editor por separado antes de decidir. El ajuste de fuentes locales resuelve una dependencia. Pruebe las demás peticiones y confirme que el equipo puede completar su trabajo habitual. Mientras queden servidores de Elementor sin probar, esta guía no puede certificar la compatibilidad de toda su instalación con las conexiones continentales.

**¿A cuántos servidores externos debería llamar un sitio para China?**

Mantenga el contenido esencial independiente de servidores extranjeros no probados. Evalúe cada servicio restante según su función: un formulario debe entregar consultas y las estadísticas deben recibir eventos. Nuestra página [WordPress en China](/es/wordpress-en-china/) aborda las demás decisiones de desarrollo. Una lista corta de servidores también necesita una prueba funcional.
