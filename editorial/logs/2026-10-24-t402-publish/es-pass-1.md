---
title: "Por qué difieren los tests de latencia en China"
subtitle: "Un recurso puede responder desde la nube y fallar en una conexión doméstica. Compare siempre la red, el método y la fecha."
summary: "Cómo interpretar las diferencias entre nube y línea doméstica en China con observaciones fechadas de 21YunBox y recuentos por servidor."
visual: "/images/guides/china-latency-vantage-point-study.webp"
visualAlt: "Un desarrollador compara registros de solicitudes en un portátil sobre la mesa de un piso de Pekín."
order: 50
published: true
publishedAt: "2026-10-24"
updatedAt: "2026-10-24"
reviewBy: "2026-11-26"
category: Technology
author: cyril-drouin
---

Método: este estudio compara las observaciones de cinco recursos publicadas por 21YunBox desde Alibaba Cloud (阿里云), en Zhangjiakou, el 28 de agosto de 2026 y una línea doméstica de China Mobile (中国移动), en Pekín, el 30 de agosto. Cuatro recursos no respondieron en casa; uno, en la nube. Cambian la red, la fecha y el método, por lo que estos registros no permiten aislar la causa de la diferencia.

Fuentes comprobadas el 24 de octubre de 2026. TTFB es el tiempo hasta el primer byte. Los recuentos corresponden a respuestas de recursos y no acreditan que el visitante completara una acción. Las fechas anteriores son las de las mediciones. Volver a consultar la fuente no convierte esos registros en pruebas de octubre.

| ID del host | Recurso | Respuestas en nube; TTFB mediano | Respuestas en casa; TTFB mediano | Lectura del par | Fechas nube / casa |
|---|---|---|---|---|---|
| host-google-fonts-css | fonts.googleapis.com | 72 de 72; 111 ms | 0 de 54; no disponible | Difiere según el punto de medición | 28 / 30 de agosto de 2026 |
| host-google-fonts-files | fonts.gstatic.com | 72 de 72; 102 ms | 0 de 6; no disponible | Difiere según el punto de medición | 28 / 30 de agosto de 2026 |
| host-google-tag-manager | www.googletagmanager.com | 72 de 72; 118 ms | 0 de 112; no disponible | Difiere según el punto de medición | 28 / 30 de agosto de 2026 |
| host-recaptcha | www.google.com/recaptcha en nube; www.google.com en casa | 0 de 72; no disponible | 0 de 18; no disponible | Bloqueado: sin respuestas en estas muestras | 28 / 30 de agosto de 2026 |
| host-jsdelivr | cdn.jsdelivr.net | 72 de 72; 660 ms | 36 de 36; no disponible | Lento en nube; accesible en casa | 28 / 30 de agosto de 2026 |

> Los recuentos y las medianas de la nube proceden de solicitudes directas de 21YunBox desde Alibaba Cloud cn-zhangjiakou el 28 de agosto de 2026 y de sus observaciones en una línea doméstica de China Mobile en Pekín el 30 de agosto. Hay cuatro recursos sin respuesta en casa y uno en la nube. Los tiempos de la línea doméstica no están publicados.
> Fuente: 21YunBox, A Chinese Cloud Probe Is Not a Chinese Visitor: The Same Hosts, Opposite Answers, 28 de agosto de 2026, actualizado el 30 de agosto de 2026.
> https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

## Método y límites

Nube designa Alibaba Cloud (阿里云) cn-zhangjiakou; casa, la banda ancha fija de China Mobile (中国移动) en Pekín. «Bloqueado» describe la ausencia de respuestas observada, sin diagnosticar su causa. «Lento» recoge la demora publicada para jsDelivr desde la nube. No aplicamos un umbral universal a métodos distintos. «No disponible» nunca equivale a cero milisegundos.

ChinaWebFoundry ha elaborado la comparación con pruebas publicadas por terceros. No operamos ninguna de las dos sondas. Los recursos comunes permiten comparar resultados siempre que las diferencias en la recogida de datos permanezcan junto a las cifras.

El estudio en la nube solicitaba repetidamente recursos concretos. En casa, un navegador cargaba sitios web y registraba las solicitudes externas que generaban sus páginas. La muestra cambia: un host solo aparece si alguna página seleccionada lo llama, y unos aparecen muchas más veces que otros.

> La prueba de recursos en la nube fijó un tiempo de espera de 30 segundos y 72 solicitudes por recurso. El registro doméstico de Pekín abarcó 88 sitios y 264 cargas de página, con un límite de 60 segundos por carga; el número de solicitudes variaba según el host.
> Fuente: 21YunBox, 28 y 30 de agosto de 2026.
> https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

El límite de carga de una página no se puede sustituir sin más por el tiempo de espera de un recurso. Una solicitud que empieza tarde dispone de una ventana de observación distinta de otra iniciada por separado. Mantenga el tipo de límite junto al recuento, también al trasladar las cifras a una presentación.

China Mobile (中国移动) es el operador de este estudio. La conexión era una línea fija doméstica. Aunque el nombre invite a confusión, el registro no aporta resultados de un teléfono conectado a la red móvil.

El estudio tampoco separa el efecto del lugar del efecto del momento. Las fechas y los métodos de recogida son distintos. Para explicar la diferencia de forma controlada harían falta observaciones que mantuvieran constantes esas variables. Podemos describir la discrepancia sin atribuirle una causa que el experimento no estableció.

El cuadro documenta aquellas observaciones. No fija un máximo ni un mínimo para la futura carga de una página. Un resultado en nube puede señalar una solicitud que conviene revisar, pero no existe un factor de conversión que lo transforme en un resultado doméstico.

## Por qué difieren los tests de latencia en China

Empiece por la dirección probada. El nombre de un producto puede referirse a su web pública, al servidor de un script o a una API que se consulta al enviar un formulario. Dos informes sobre direcciones distintas pueden ser compatibles aunque sus veredictos parezcan opuestos al ponerlos en una hoja de cálculo.

También importa la ruta de la solicitud. La fila de reCAPTCHA conserva una limitación de la fuente: el recurso en nube incluye una ruta, mientras que el registro doméstico agrupa las solicitudes por host. Esa fila no ofrece un resultado doméstico independiente para cada punto de acceso de reCAPTCHA. Quien deba decidir si funciona la verificación en el servidor necesita pruebas de esa llamada concreta.

Compruebe qué considera un éxito quien observa. Recibir una respuesta, descargar un documento completo y terminar la carga en el navegador miden cosas distintas. Ninguno de esos hechos acredita por sí solo el resultado de enviar un formulario. Defina la tarea antes de escoger la cifra que servirá para aprobar el sitio.

Para una página comercial, la validación podría exigir contenido legible y una vía de contacto que funcione. En una cuenta de cliente, habría que comprobar otra acción, como iniciar sesión y guardar un cambio. Son ejemplos de requisitos que puede fijar el propietario de una web; el estudio comparado no los midió.

Conserve las solicitudes fallidas al presentar un tiempo.

Una mediana calculada con las respuestas recibidas describe ese grupo. Si se eliminan las solicitudes sin respuesta, el tiempo restante puede resultar tranquilizador mientras oculta a quienes no recibieron nada. Una casilla sin tiempo junto a un recuento de cero respuestas también informa.

Si solo dispone de una captura de una puntuación de velocidad, solicite la dirección y el registro de peticiones antes de cambiar de alojamiento. La captura puede ser correcta y responder a una pregunta distinta de la que plantea su equipo en China.

## El primer byte deja gran parte de la visita sin medir

El TTFB termina cuando empieza la respuesta. El resto aún debe llegar. Leer un tiempo sin saber dónde termina la medición puede dejar fuera la parte del recorrido que se quería evaluar.

> El TTFB mide el intervalo hasta que llega el primer byte de respuesta. Puede incluir la resolución DNS y el establecimiento de la conexión.
> Fuente: MDN Web Docs, Time to First Byte, modificado el 18 de julio de 2025.
> https://developer.mozilla.org/en-US/docs/Glossary/Time_to_first_byte

Separe el primer byte de la página del de una fuente o un script. Corresponden a solicitudes diferentes. El servidor puede responder con el documento mientras el navegador sigue esperando un recurso externo. La tabla anterior recoge recursos y no permite deducir la velocidad de carga completa de su web.

| Prueba del informe | Qué demuestra | Qué falta para decidir sobre la web |
|---|---|---|
| Primer byte de respuesta | La solicitud recibió una respuesta inicial | Si terminaron la transferencia y la tarea pertinente |
| Recuento de respuestas de un recurso | Cuántas veces respondió en la muestra | Qué funciones de la página dependen de él |
| Carga de página terminada en el navegador | Se cumplió la condición de finalización indicada | Si funcionó la acción que pretendía realizar el visitante |
| Test de la web de un proveedor | El resultado de ese sitio | Pruebas del recurso integrado o del punto de acceso del cliente |
| Veredicto de accesibilidad de una URL | El resultado de la fuente para esa URL y fecha | Red, tiempo y tarea comparables, cuando sean necesarios |

El equipo de alojamiento puede haber registrado una respuesta del servidor, mientras marketing observó una vía de contacto fallida. Relacione cada observación con su solicitud antes de decidir si los informes se contradicen.

Pregunte qué observó cada herramienta y cuándo dejó de registrar. Un informe debe explicar su condición de finalización con suficiente claridad para que otra persona entienda por qué se dio la prueba por válida.

La misma cautela se aplica a la web comercial de un proveedor. Que cargue bien no certifica un widget insertado en su dominio. El componente puede usar otros hosts, otra versión o una ruta distinta. Mantenga el resultado vinculado a la dirección del proveedor hasta que una fuente pruebe la dependencia que utiliza su página.

## Conservar el veredicto de URL junto al registro doméstico

GreatFire aporta otro tipo de prueba. Su resultado para el host de las hojas de estilo de Google Fonts puede figurar junto al fallo doméstico sin descartar silenciosamente ninguna fuente.

> GreatFire indica que sus cuatro pruebas recientes concluyentes de https://fonts.googleapis.com se conectaron con normalidad. La última es del 15 de octubre de 2026. La página citada no identifica un operador residencial ni publica una cifra de latencia.
> Fuente: GreatFire, última prueba el 15 de octubre de 2026, comprobado el 24 de octubre de 2026.
> https://en.greatfire.org/https/fonts.googleapis.com

Las fechas difieren, y el registro de GreatFire no reproduce el experimento de la línea doméstica identificada. No demuestra que esa conexión se recuperara después. La observación doméstica anterior tampoco prueba cómo se comportan hoy todas las conexiones.

Nuestra [guía de Google Fonts](/es/recursos/guia-web-china/google-fonts-china/) explica las consecuencias prácticas para las páginas que dependen de sus hojas de estilo y archivos de fuentes. Este estudio mantiene cada prueba asociada al recurso examinado.

Al comunicar una discrepancia dentro de la empresa, incluya ambas URL de origen. Indique qué dirección probó cada fuente y conserve las fechas en la frase, aunque le pidan una respuesta más breve. Una etiqueta sin contexto resulta mucho más difícil de corregir cuando ya forma parte de un documento de compras.

Una observación antigua aún puede explicar un modo de fallo. Su antigüedad limita lo que permite afirmar sobre la situación actual. Por eso este informe tiene fecha de revisión y mantiene visibles las fechas de medición después de comprobar de nuevo las fuentes.

## Leer la muestra antes de calcular una tasa

Cada denominador de la línea doméstica registra cuántas veces apareció ese host durante las cargas seleccionadas. No cuenta hogares independientes ni personas de otras ciudades. Repetir solicitudes desde una conexión documenta esa conexión durante el registro, sin añadir cobertura geográfica.

El host de las hojas de estilo y el de los archivos de fuentes tienen denominadores distintos. Deben conservarse por separado aunque ambos pertenezcan a Google Fonts. Sumarlos ocultaría qué solicitud se observó y a qué fase de entrega de la fuente corresponde.

Sumar los recuentos de nube y casa daría más peso al lado que emitió más solicitudes. La tasa resultante dependería del muestreo elegido. No tendría una relación definida con la proporción de sus clientes capaces de cargar la página.

Una afirmación sobre todo el país exigiría datos de la población de interés y de cómo se seleccionó la muestra. Este informe no dispone de ellos. La línea de Pekín no permite inferir resultados de otros operadores, ciudades o redes de acceso. Las redes corporativas y el acceso móvil también quedan fuera de su alcance.

Use «no disponible» para un tiempo sin publicar y «sin probar» cuando una dependencia carece de un test fechado aprovechable. Si una solicitud no recibió respuesta, registre ese fallo con su muestra. Son carencias diferentes y no deberían compartir una sola casilla vacía.

El [índice de dependencias en China de octubre](/es/recursos/guia-web-china/indice-dependencias-china-2026-10/) contiene el registro más amplio y la lista de hosts en bruto. js.stripe.com y embed.typeform.com siguen sin probar en ese registro. Su presencia en una página justifica revisar la dependencia, sin asignarle un veredicto de accesibilidad que las pruebas no sostienen.

## Cuando una fuente cambia su veredicto

Una comparación debe conservar suficiente información para entender una corrección posterior. Guarde la URL exacta junto a la afirmación extraída de ella. Anote también la fecha de consulta, por separado de la fecha en que la fuente dice haber probado la dirección. La distinción importa cuando un artículo nuevo cita una observación antigua.

El [archivo de datos del registro de octubre](/data/china-dependency-index-2026-10.json) permite descargar la lista ampliada de dependencias. Los ID de esta tabla localizan las entradas correspondientes; en el JSON se omite el prefijo host-. El archivo incluye pruebas ajenas al subconjunto emparejado, por lo que su número total de entradas no es el tamaño de la muestra nube frente a casa.

Si una fuente posterior informa de una respuesta donde antes no la hubo, compare el destino y el método antes de hablar de recuperación. Una solicitud HTTPS a la raíz y otra de un script pueden compartir host sin probar lo mismo. Una publicación más reciente también puede describir un test anterior. Ambas diferencias deben quedar en el registro.

Retirar una cifra exige el mismo cuidado. Al eliminarla, se reduce lo que el informe puede sostener; eso no demuestra que la red haya mejorado o empeorado. Conserve el motivo de la corrección junto a la fuente para que el siguiente lector entienda por qué cambió una casilla.

En una comparación para compras, acuerden la pregunta antes de colocar resultados en columnas contiguas. La prueba de la portada de un proveedor no debería ocupar la misma columna que un test de pago de un cliente sin hacer explícita la diferencia. Si no se pueden comparar, indique la prueba que falta en la casilla. Es más útil que una puntuación construida con tareas distintas.

Tras un despliegue, conserve la versión de la página y la lista de solicitudes relacionadas con la incidencia. Si una actualización elimina una dependencia, la observación anterior sigue perteneciendo a aquella versión. Puede explicar el cambio sin afirmar que el host retirado se haya vuelto accesible.

«Sin probar» señala una carencia de pruebas fechadas en el registro. Puede haber tests en otro lugar, y una fuente posterior puede cubrir ese vacío. Hasta entonces, ninguna columna de nube o casa dispone de un resultado acreditado para esa entrada.

## Documentar una decisión sobre un resultado discutido

Empiece por la página y la acción que motivaron la incidencia. Guarde la URL exacta y describa qué no pudo hacer el visitante. Una queja de lentitud cuesta vincularla a una solicitud concreta; un formulario que nunca muestra la confirmación proporciona un final definido para la revisión.

Pida a quien entrega el informe que conserve sus condiciones: red y lugar, fecha, destino de la solicitud y regla de cierre de la prueba. Si falta un campo, indique qué comparación impide. No lo rellene con una suposición sobre un visitante chino típico.

En los registros existentes, distinga el documento de las llamadas externas que provoca. Marque cuáles son necesarias para la acción examinada. Un píxel opcional que falla y una dependencia fallida del formulario pueden generar errores de red parecidos, pero exigir decisiones diferentes.

Elija una modificación respaldada por las pruebas. Si una acción necesaria depende de un recurso externo, la revisión debe contemplar cómo puede fallar y qué verá entonces el visitante. No prometa que mudar el servidor reparará todas las solicitudes externas. La ubicación del documento no describe la lista completa de llamadas del navegador.

Acote el cambio para poder evaluarlo. Registre la dependencia que elimina o modifica, la función que debe conservarse y las pruebas usadas para aprobarlo. Así otra persona podrá retomar el trabajo aunque la investigación no resuelva todas las dudas sobre la red.

Nuestro servicio de [Estrategia y auditoría](/es/servicios/estrategia-auditoria/) puede organizar esa revisión a partir de las solicitudes externas reales de la web. Aporte el informe discutido junto con la página afectada y la acción que debe poder completar el visitante. La decisión debe incluir pruebas que otro equipo pueda examinar.
