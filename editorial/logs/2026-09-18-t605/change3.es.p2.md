## El resto de su medición arrastra el mismo problema

Quitar GA para colocar en su lugar otro script alojado fuera no resuelve nada: el problema se limita a cambiar de nombre de servidor. Los sustitutos más evidentes son también servidores extranjeros, y varios de ellos fallan de una manera bastante más escurridiza que un bloqueo limpio.

La tabla cruza dos clases de prueba que responden a preguntas distintas. GreatFire comprueba si un servidor resulta accesible. 21YunBox cronometra cargas de página reales desde una sonda instalada en el continente. Ambas fuentes se contradicen en Hotjar, y esa contradicción es lo más instructivo que ofrece la tabla.

| Herramienta | Lo que muestran las pruebas | Peticiones completadas | Fuente y fecha |
|---|---|---|---|
| Hotjar | Alterado en las sondas de GreatFire, pero se completa desde una instancia de Alibaba Cloud con el primer byte en 487 ms | 3 de 3 desde el centro de datos | GreatFire, 18 de agosto de 2026; 21YunBox, 30 de agosto de 2026 |
| Meta Pixel | `connect.facebook.net` bloqueado | ninguna | GreatFire, 27 de mayo de 2026 |
| Microsoft Clarity | Responde deprisa y luego se queda colgado. Primer byte en 541 ms y nada terminado en 60 segundos | 0 de 3 | 21YunBox, 28 de agosto de 2026 |
| Mixpanel | El mismo patrón. Primer byte en 391 ms y nada terminado en 60 segundos | 0 de 3 | 21YunBox, 28 de agosto de 2026 |
| Segment | Se completa, pero despacio. Primer byte en 900 ms en una medición y en 1.084 ms en otra | 3 de 3 | 21YunBox, 28 y 30 de agosto de 2026 |
| Plausible | Se completa. Primer byte en 550 ms y LCP en 1.208 ms | 3 de 3 | 21YunBox, 28 de agosto de 2026 |
| Matomo cloud | Se completa. Primer byte en 516 ms y LCP en 1.532 ms | 3 de 3 | 21YunBox, revisado el 29 de agosto de 2026 |

> Todos los tiempos de la tabla anterior proceden de una sonda situada en China continental, en Alibaba Cloud (阿里云) cn-zhangjiakou, con tres mediciones por herramienta y abandono a los 60 segundos, entre el 28 y el 30 de agosto de 2026.
> Fuente: 21YunBox, mediciones por herramienta en China, agosto de 2026. https://www.21cloudbox.com/support/microsoft-clarity-china.html

Un centro de datos en Zhangjiakou no es un piso en Pekín. Tome esas cifras como el mejor escenario posible y parta de la idea de que sus visitantes reciben algo peor.

Esa distancia explica por sí sola los dos veredictos sobre Hotjar. 21YunBox realizó su prueba desde un rack, mientras que las sondas de GreatFire vieron algo muy distinto, y un servidor que atiende a un centro de datos puede perfectamente desentenderse de una línea residencial. Mientras no haya medido Hotjar sobre su propio tráfico, dé por supuesto que hace las dos cosas.

Clarity y Mixpanel son las dos filas que merecen una segunda lectura. Ninguno de los dos figura en una lista de bloqueo. El 15 de septiembre de 2026 GreatFire daba `www.clarity.ms` por accesible con normalidad, y otro tanto valía para `api.mixpanel.com` en su última prueba, del 17 de abril de 2026. Aun así, ambos devolvieron el primer byte en menos de 600 ms y después no llegaron a terminar nada en un minuto.

Un bloqueo duro termina lanzando un error que alguien advierte. Una petición colgada, en cambio, espera en silencio hasta que el navegador se rinde: sus grabaciones de sesión salen más pobres de lo que deberían y ninguna alerta se lo advierte.

### Amplitude y el fallo que conviene buscar

Amplitude carga su script desde un nombre de servidor y envía los eventos a otro. Cuando un producto se reparte así, una misma red puede tratar cada nombre de forma diferente: el script carga, los eventos no salen nunca y su panel de control aparenta la misma salud en ambos casos.

En abril de 2026 GreatFire daba `cdn.amplitude.com` por accesible y `api.amplitude.com` por bloqueado, exactamente ese patrón. Hemos vuelto a probar los dos nombres de servidor para esta actualización, el 17 de septiembre de 2026.

> `cdn.amplitude.com` no bloqueado, última prueba el 14 de septiembre de 2026, y la única prueba concluyente reciente conectó con normalidad. `api.amplitude.com` no bloqueado, última prueba el 10 de septiembre de 2026, 0 alteraciones sobre 1 prueba en los últimos 90 días. Sobre 13 URL de amplitude.com analizadas, GreatFire registra 1 bloqueada, 3 alteradas y 9 accesibles.
> Fuente: GreatFire, septiembre de 2026. https://en.greatfire.org/https/api.amplitude.com

La división de abril no se repitió en septiembre. Cada una de esas dos lecturas descansa sobre una sola prueba concluyente, lo que resulta escaso en ambas direcciones, y la dispersión que se observa en el conjunto del dominio apunta a un panorama todavía desigual.

Ahí está la lección. Cualquier veredicto que uno lea lleva una fecha, y cinco meses bastan para que deje de ser cierto. Pruebe por separado el nombre de servidor que sirve su script y aquel que recibe sus eventos, siempre desde una red del país que le interesa.

### Qué desplegar en su lugar

Baidu Tongji (百度统计) en primer lugar, si el mercado continental pesa en sus cuentas. Sus servidores están en el país, de modo que la petición no cruza ninguna frontera, y sus informes se organizan en torno al tráfico de Baidu (百度), que es justamente el que usted quiere entender. Sensors Data (神策) y GrowingIO son las opciones domésticas más pesadas.

Si no, aloje la herramienta usted mismo. Plausible y Matomo completaron todas las mediciones de la tabla y ambos se instalan en su propio servidor continental. La dependencia extranjera se convierte entonces en una petición de primera parte y, de paso, queda resuelta la cuestión legal de la sección siguiente.

Una salvedad, ya que esta página trata sobre todo de un filtro. Un endpoint de analítica autoalojado dentro de China no necesita filtro alguno, porque no hay nada que detener. Conserve la ruta `/ga.js` para GA y para cualquier otra cosa que cargue desde un servidor extranjero, y deje que la herramienta doméstica funcione para todo el mundo.

## La PIPL se aplica incluso a los servidores que responden

Accesibilidad y legalidad son dos cuestiones distintas, y la segunda se sostiene tanto si el servidor responde como si guarda silencio.

Google Analytics envía un identificador de cliente y una dirección IP a Google. La Ley de Protección de la Información Personal de China considera ambos datos información personal, y sacarlos del continente constituye una transferencia transfronteriza.

> Cuando un responsable del tratamiento de información personal facilite información personal fuera del territorio de la República Popular China, informará a la persona del nombre y los datos de contacto del destinatario en el extranjero, de la finalidad y los métodos del tratamiento, de las categorías de información personal afectadas y de la vía por la que puede ejercer sus derechos frente a ese destinatario, y obtendrá su consentimiento separado.
> Fuente: Administración del Ciberespacio de China (中央网络安全和信息化委员会办公室), Ley de Protección de la Información Personal de la República Popular China, artículo 39. Aprobada el 20 de agosto de 2021, en vigor desde el 1 de noviembre de 2021. https://www.cac.gov.cn/2021-08/20/c_1631050028355286.htm

Consentimiento separado significa una aceptación propia para esa transferencia, y no una línea más dentro de un banner que lo cubre todo a la vez.

El argumento no se mueve aunque se mueva la red. Si un servidor bloqueado vuelve a responder el mes que viene, o si Google cambia un nombre de servidor, la transferencia sigue siendo una transferencia. El filtro cierra las dos cuestiones de una sola vez: ninguna petición sale del navegador, de modo que no queda transferencia alguna que justificar. Nuestra guía sobre [la PIPL y la Ley de Seguridad de Datos](/es/recursos/guia-web-china/datos-personales-china-pipl-dsl/) detalla los umbrales y las vías de declaración.
