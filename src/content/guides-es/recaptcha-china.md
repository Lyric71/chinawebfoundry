---
title: "reCAPTCHA en China: sus formularios no llegan"
subtitle: "Por qué un formulario protegido con reCAPTCHA no se envía desde China continental, qué cambia al pasar a recaptcha.net y qué usar en su lugar."
summary: "En China continental, GreatFire da reCAPTCHA por bloqueado y los formularios protegidos rechazan al visitante. La solución de Google y otras opciones."
visual: "/images/guides/recaptcha-china.webp"
order: 40
published: true
publishedAt: "2026-10-08"
updatedAt: 2026-10-18
reviewBy: "2026-11-18"
category: "Technology"
author: "cyril-drouin"
---

Un formulario protegido con Google reCAPTCHA no se puede enviar desde China continental. El 28 de agosto de 2026, 21YunBox solicitó `www.google.com/recaptcha` 72 veces desde un servidor de Alibaba Cloud (阿里云) en Zhangjiakou y no obtuvo ninguna respuesta. El 30 de agosto, una línea doméstica de China Mobile (中国移动) en Pekín lo intentó 18 veces, con el mismo resultado. GreatFire, que sigue la censura en China, considera bloqueada esa dirección; su última prueba es del 28 de septiembre de 2026.

Sin script no hay token, y un formulario que exige un token rechaza al visitante. Y ningún aviso llega a su bandeja de entrada. La solución que propone Google es cargar el widget desde `www.recaptcha.net`, que GreatFire considera no bloqueado. Ninguna prueba publicada ha medido, sin embargo, sus tiempos de respuesta. Aun así, nuestra recomendación es pasar a un captcha que funcione desde China, como el de Alibaba Cloud o el de Tencent Cloud (腾讯云). Todas las cifras que siguen se comprobaron en su fuente el 8 de octubre de 2026.

## Por qué un formulario con reCAPTCHA nunca se envía desde China

| Servidor                   | Alibaba Cloud (阿里云), Zhangjiakou | Línea doméstica de China Mobile (中国移动), Pekín | Peticiones completadas | Veredicto | Fecha de la prueba        |
| -------------------------- | ----------------------------------- | ------------------------------------------------ | ---------------------- | --------- | ------------------------- |
| `www.google.com/recaptcha` | sin respuesta en 30 segundos        | sin respuesta                                    | 0 de 72 / 0 de 18      | bloqueado | 28 y 30 de agosto de 2026 |

> Desde una instancia de Alibaba Cloud (阿里云) en cn-zhangjiakou, con una muestra cada diez minutos durante doce horas el 28 de agosto de 2026 y un tiempo de espera de 30 segundos, `www.google.com/recaptcha` respondió a 0 de 72 peticiones. A lo largo de 264 cargas de página de 88 sitios reales, realizadas desde una línea residencial de China Mobile (中国移动) en Pekín el 30 de agosto de 2026, www.google.com, el servidor de reCAPTCHA, recibió 18 peticiones y no respondió a ninguna.
> Fuente: 21YunBox, A Chinese Cloud Probe Is Not a Chinese Visitor: The Same Hosts, Opposite Answers, agosto de 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

La casilla de verificación, y también la comprobación invisible de la versión 3, proceden de un único script: `www.google.com/recaptcha/api.js`. Las tres últimas pruebas concluyentes de GreatFire sobre esa dirección fallaron.

> GreatFire consideró https://www.google.com/recaptcha/api.js bloqueado al 100 %, con 3 de 3 pruebas concluyentes en los últimos 90 días y la última el 7 de septiembre de 2026. Registra interferencias en https://www.google.com/recaptcha desde el 7 de mayo de 2015.
> Fuente: GreatFire, septiembre de 2026. https://en.greatfire.org/https/www.google.com/recaptcha/api.js

Cuando el script no carga, la página parece normal y los campos admiten texto como siempre. Pero el token que Google debería entregar nunca se genera, y su servidor lo necesita para completar la verificación.

> El servidor envía el token del campo g-recaptcha-response del formulario a la dirección siteverify de Google. Si falta, Google devuelve el error missing-input-response: «The response parameter is missing».
> Fuente: Google for Developers, Verifying the user’s response, última actualización el 14 de octubre de 2024. https://developers.google.com/recaptcha/docs/verify

Un formulario que exige una verificación superada no tiene más remedio que rechazar el envío. El visitante ve un mensaje de error o un botón que no hace nada. Usted no recibe ningún correo, y en sus registros no aparece nada que parezca un contacto perdido.

La versión 3 oculta el fallo todavía mejor.

> «reCAPTCHA v3 nunca interrumpirá a sus usuarios». Se carga desde https://www.google.com/recaptcha/api.js, con la clave del sitio en un parámetro render.
> Fuente: Google for Developers, reCAPTCHA v3, última actualización el 10 de julio de 2024. https://developers.google.com/recaptcha/docs/v3

Como no aparece ninguna casilla en pantalla, el visitante ni siquiera puede avisar de que falta.

## En un servidor de China continental falla para todos los visitantes

Trasladar el sitio a un servidor de China continental añade un segundo fallo a la configuración por defecto. La verificación se hace desde su servidor hacia Google, y GreatFire también considera bloqueada esa dirección.

> GreatFire consideró https://www.google.com/recaptcha/api/siteverify bloqueado al 100 %, con 1 de 1 pruebas concluyentes en los últimos 90 días y la última el 28 de septiembre de 2026.
> Fuente: GreatFire, septiembre de 2026. https://en.greatfire.org/https/www.google.com/recaptcha/api/siteverify

Así, un servidor en China no puede confirmar ningún token, esté donde esté el visitante. Alguien en Londres carga la página, marca la casilla (Google le responde sin problema desde Londres) y pulsa enviar. El servidor rechaza el formulario porque su propia consulta a Google nunca obtuvo respuesta. Incluya el captcha en la lista de comprobación de cualquier traslado a China; [nuestra guía para migrar WordPress a China](/es/recursos/guia-web-china/migrar-wordpress-a-china/) cubre el resto de esa lista.

## Qué cambia al pasar a recaptcha.net

Google conoce el problema y documenta una solución.

> «Sí, utilice “www.recaptcha.net” en su código cuando “www.google.com” no sea accesible». Sustituya la dirección de api.js en la página y después «aplique lo mismo en cualquier otro lugar de su sitio que use “www.google.com/recaptcha/”».
> Fuente: Google for Developers, reCAPTCHA FAQ, última actualización el 2 de abril de 2026. https://developers.google.com/recaptcha/docs/faq

Eso supone dos cambios. Uno modifica la dirección del script en la página; el otro, más fácil de olvidar, modifica la dirección de verificación en su servidor. GreatFire ha probado las dos partes del cambio.

| Dirección                                    | Función                                    | Veredicto de GreatFire        | Pruebas concluyentes, últimos 90 días | Última prueba |
| -------------------------------------------- | ------------------------------------------ | ----------------------------- | ------------------------------------- | ------------- |
| `www.google.com/recaptcha/api.js`            | script del widget por defecto              | bloqueado                     | 3 de 3 fallidas                       | 7 sep 2026    |
| `www.google.com/recaptcha/api/siteverify`    | verificación en servidor por defecto       | bloqueado                     | 1 de 1 fallida                        | 28 sep 2026   |
| `www.recaptcha.net`                          | el dominio alternativo                     | no bloqueado                  | 0 de 2 con interferencias             | 30 sep 2026   |
| `www.recaptcha.net/recaptcha/api.js`         | script del widget alternativo              | no bloqueado                  | 0 de 2 con interferencias             | 27 ago 2026   |
| `www.gstatic.com/recaptcha`                  | código del desafío que descarga el script  | no bloqueado                  | 0 de 1 con interferencias             | 20 ago 2026   |
| `www.recaptcha.net/recaptcha/api/siteverify` | verificación en servidor alternativa       | accesible en la última prueba | ninguna en los últimos 90 días        | 2 may 2026    |

> GreatFire consideró https://www.recaptcha.net no bloqueado, con 0 de 2 pruebas concluyentes interferidas y la última el 30 de septiembre de 2026; de las 30 direcciones de recaptcha.net que ha probado, 28 figuran como accesibles y 2 con interferencias. Consideró https://www.recaptcha.net/recaptcha/api.js no bloqueado el 27 de agosto de 2026 y https://www.gstatic.com/recaptcha no bloqueado el 20 de agosto de 2026. Su última prueba de https://www.recaptcha.net/recaptcha/api/siteverify es del 2 de mayo de 2026.
> Fuente: GreatFire, de agosto a septiembre de 2026. https://en.greatfire.org/https/www.recaptcha.net

Un veredicto de GreatFire indica si una conexión logró pasar desde sus puntos de prueba. No incluye tiempos ni un resultado aparte para líneas domésticas.

Esa laguna ya ha inducido a error en otras ocasiones.

> GreatFire consideró https://fonts.googleapis.com no bloqueado, con 0 de 3 pruebas concluyentes interferidas y la última el 7 de septiembre de 2026. Desde una línea residencial de China Mobile (中国移动) en Pekín, el 30 de agosto de 2026, 21YunBox registró 54 peticiones a ese mismo servidor sin ninguna respuesta.
> Fuente: GreatFire, septiembre de 2026. https://en.greatfire.org/https/fonts.googleapis.com; 21YunBox, A Chinese Cloud Probe Is Not a Chinese Visitor: The Same Hosts, Opposite Answers, agosto de 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

El script alternativo tampoco es autosuficiente. El archivo `www.recaptcha.net/recaptcha/api.js` carga el código del desafío desde `www.gstatic.com/recaptcha`, otro dominio de Google con un historial irregular.

> De las 175 direcciones de gstatic.com que ha probado GreatFire, 8 figuran como bloqueadas, 42 con interferencias, 123 como accesibles y 2 sin veredicto.
> Fuente: GreatFire, consultado el 8 de octubre de 2026. https://en.greatfire.org/https/www.gstatic.com

Y la dirección de verificación alternativa no se ha vuelto a probar desde mayo. Revisaremos todos los veredictos de esta página antes del 18 de noviembre de 2026.

Si sus formularios fallan ahora, haga primero el cambio y planifique después la sustitución.

## Qué usar en lugar de reCAPTCHA en China

Si prefiere prescindir de Google por completo, hay cinco opciones realistas.

Alibaba Cloud (阿里云) y Tencent Cloud (腾讯云) venden un captcha que funciona como reCAPTCHA: un widget en la página y, después, una comprobación que su servidor hace con la API del proveedor antes de aceptar el formulario.

| Opción                                      | Widget servido por          | Datos disponibles                                                         |
| ------------------------------------------- | --------------------------- | ------------------------------------------------------------------------- |
| Alibaba Cloud Captcha 2.0 (阿里云验证码2.0)  | Alibaba Cloud               | documentación del proveedor, 11 sep 2026: regiones de Shanghái y Singapur |
| Tencent Cloud Captcha (腾讯云验证码)         | Tencent Cloud               | documentación del proveedor, 18 sep 2026                                  |
| hCaptcha                                    | `js.hcaptcha.com`           | GreatFire: no bloqueado, 25 y 26 sep 2026                                 |
| Cloudflare Turnstile                        | `challenges.cloudflare.com` | GreatFire: script no bloqueado, 0 de 1, 23 sep 2026                       |
| Una comprobación en su propio servidor      | su propio dominio           | sin servidores de terceros                                                |

> Tras la integración en el cliente, el servidor llama a VerifyIntelligentCaptcha. Alibaba Cloud ofrece dos regiones de servicio: China continental (Shanghái, en captcha.cn-shanghai.aliyuncs.com) y fuera del continente (Singapur, en captcha.ap-southeast-1.aliyuncs.com). La región configurada en la página debe coincidir con la dirección a la que llama el servidor; si no, la verificación devuelve un error.
> Fuente: centro de ayuda de Alibaba Cloud (阿里云), Captcha 2.0 server access, actualizado el 11 de septiembre de 2026. https://help.aliyun.com/zh/captcha/captcha2-0/user-guide/server-access

En la práctica, elija la región antes de escribir una sola línea del código del servidor.

> El servidor comprueba cada ticket con DescribeCaptchaResult en captcha.tencentcloudapi.com. Un CaptchaCode igual a 1 significa que la comprobación se ha superado.
> Fuente: Tencent Cloud (腾讯云), Captcha ticket verification, última actualización el 18 de septiembre de 2026. https://cloud.tencent.com/document/product/1110/36926

GeeTest (极验) es el tercer nombre chino al que suelen recurrir los desarrolladores. No encontramos documentación fechada sobre él, así que no tiene fila en la tabla.

hCaptcha y Turnstile presentan la misma salvedad que el cambio a recaptcha.net. Sus veredictos de GreatFire son limpios, pero ninguna fuente que podamos citar ha medido ninguno de los dos desde una línea doméstica.

> GreatFire consideró https://hcaptcha.com no bloqueado, con 0 de 3 pruebas concluyentes interferidas, el 25 de septiembre de 2026; https://js.hcaptcha.com, no bloqueado el 26 de septiembre, y https://api2.hcaptcha.com, no bloqueado el 14 de septiembre. Consideró https://challenges.cloudflare.com/turnstile/v0/api.js no bloqueado, con 0 de 1, el 23 de septiembre de 2026.
> Fuente: GreatFire, septiembre de 2026. https://en.greatfire.org/https/hcaptcha.com y https://en.greatfire.org/https/challenges.cloudflare.com/turnstile/v0/api.js

ChinaWebFoundry aplica la última opción en su propio sitio. Nuestro formulario de contacto incluye un campo oculto que solo rellenan los bots (un honeypot), y el control de acceso de nuestro escáner es una pequeña suma que nuestro propio servidor firma y verifica. Ninguno de los dos llama a un servidor de terceros.

Sustituir únicamente el captcha es un trabajo menor. En la mayoría de los sitios forma parte de una lista que incluye fuentes, mapas, analítica y contenidos de vídeo incrustados, y resolverla forma parte de [nuestro servicio de plugins y extensiones](/es/servicios/plugins-extensiones/). Nuestro repaso de [lo que bloquea el Gran Cortafuegos, servidor por servidor](/es/recursos/guia-web-china/gran-cortafuegos-china/) muestra qué más suele figurar en ella.

## Preguntas de los propietarios de sitios

**¿Funciona reCAPTCHA v3 en China?**

La versión 3 se carga desde la misma dirección que la versión 2, y GreatFire la consideró bloqueada en 3 de 3 pruebas concluyentes, la última el 7 de septiembre de 2026. Falla, por tanto, de la misma manera, pero con más discreción. Como no muestra nada al visitante, no hay ninguna casilla ausente que notificar, y su servidor no recibe ningún token que evaluar.

**¿Arreglará mi formulario el cambio a recaptcha.net?**

Es la única configuración de reCAPTCHA con veredictos limpios de GreatFire en este momento: el dominio recaptcha.net y su script figuran como no bloqueados en agosto y septiembre de 2026. No se ha publicado ninguna medición de tiempos ni ninguna prueba desde una línea doméstica, y el script sigue descargando código desde `www.gstatic.com`. Considérelo un parche mientras migra a un captcha de China continental.

**¿Cómo compruebo si mi sitio usa reCAPTCHA?**

Busque `www.google.com/recaptcha` y `g-recaptcha` en el código fuente de sus páginas. Los plugins de formularios y los maquetadores visuales pueden añadirlo desde sus propios ajustes, así que revíselos también. O pase el sitio por el [China Site Scanner](/es/china-site-scanner/), que enumera los servidores de terceros a los que llaman sus páginas.
