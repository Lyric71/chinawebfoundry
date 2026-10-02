# T6-03 deep-translate, ES, pass 2 (push further, Spanish only)

Worked from es.p1.md only. The English was not reopened.

## Change 1, summary

- before: Alibaba, Tencent, Huawei, Vercel y Cloudflare, comparados para alojar WordPress en China continental, con la norma del registro ICP y cifras medidas por nosotros.
+ after:  Cómo alojar WordPress en China continental: Alibaba, Tencent, Huawei, Vercel y Cloudflare frente a la norma del registro ICP, con cifras propias.
why: the participle construction read as a translated headline; "cifras medidas por nosotros" was clumsy.

## Change 4, introduction

- before: [...] hasta que su registro ICP (ICP备案) esté resuelto. En todos los proyectos que hemos llevado, los puertos 80 y 443 han permanecido cerrados en la dirección pública del servidor hasta el día de la aprobación. No hay lanzamiento suave posible.
+ after:  Un servidor situado en China continental no mostrará su sitio WordPress a nadie hasta que se resuelva su registro ICP (ICP备案). En todos nuestros proyectos, los puertos 80 y 443 de la dirección pública del servidor han seguido cerrados hasta el día de la aprobación. No cabe, por tanto, un lanzamiento discreto.

- before: Esa norma decide todo lo demás. Determina qué nube y qué cuenta hay que abrir, y si necesita una empresa china antes de mover un solo archivo.
+ after:  De esa norma depende todo lo demás: qué nube elegir, qué cuenta abrir y si hará falta una empresa china antes de mover un solo archivo.

- before: Todo lo que sigue parte de ahí.
+ after:  El resto de esta guía parte de esa premisa.
why: "lanzamiento suave" was a calque of "soft launch".

## Change 5, benchmark block

- before: Estas cifras son de ChinaWebFoundry y proceden de sitios de clientes [...]. Ningún tercero las ha medido, y conviene saberlo antes de darles peso.
+ after:  Las cifras que siguen son nuestras. Proceden de sitios de clientes que hemos trasladado a China o que alojamos allí, y ningún tercero las ha medido, algo que conviene tener presente antes de concederles peso.

- before: > [...] Aproximadamente la mitad de la mejora se debió a la eliminación de llamadas externas.
+ after:  > [...] Cerca de la mitad de la mejora se debió a suprimir llamadas externas.

- before: La tabla indica cuál, cifra por cifra.
+ after:  La tabla detalla cuál, una por una.

- before: Las condiciones que faltan irán en los casos de estudio que estamos redactando ahora.
+ after:  Las condiciones que faltan figurarán en los casos prácticos que estamos redactando.
why: "casos de estudio" is the English calque; "la eliminación de" was a nominal chain.

## Change 5, provider table

- before: ## Seis opciones de alojamiento, una al lado de otra
+ after:  ## Seis opciones de alojamiento comparadas

- before: Son las opciones por las que más nos preguntan [...]. Cada fila recoge la restricción que decide el caso, y cada una se apoya en la página del propio proveedor. Revisamos todas las filas [...]
+ after:  Son las seis opciones por las que más nos preguntan los equipos extranjeros. Cada fila recoge la restricción determinante y se apoya en la página del propio proveedor. Las revisamos todas el 29 de septiembre de 2026 y volveremos a hacerlo cada trimestre.

Table, after:

| Opción | Servidores en el continente | Registro ICP | Cuenta y entidad | Fecha de la página del proveedor |
| --- | --- | --- | --- | --- |
| Alibaba Cloud (阿里云), sitio chino, aliyun.com | Sí | Con Alibaba, sobre un servidor continental contratado por 3 meses o más | Cuenta en aliyun.com; empresa constituida en el continente o residente del continente | Centro de ayuda, 20 de agosto y 24 de septiembre de 2026 |
| Alibaba Cloud, sitio internacional, alibabacloud.com | No sirven para un sitio registrado | No disponible para este tipo de cuenta | Hay que abrir una cuenta en aliyun.com | Centro de ayuda, 20 de agosto de 2026 |
| Tencent Cloud (腾讯云) | Sí | Con Tencent, sobre un servidor continental; Lighthouse contratado por 90 días o más | Una sola entidad declarante por cuenta | Documentación, 30 de enero y 23 de septiembre de 2026 |
| Huawei Cloud (华为云) | Sí | Con Huawei, sobre un «servidor de registro» continental contratado por al menos 3 meses | Cuenta de China continental obligatoria; las cuentas internacionales no pueden registrar | Help Center, julio y agosto de 2024 |
| Vercel | Ninguno | No se ofrece. Una copia local exige alojamiento continental y registro propio | No aplica en Vercel | Base de conocimiento, 11 de septiembre de 2026 |
| Cloudflare | Solo a través de la China Network, operada por JD Cloud | Un registro o una licencia válidos por cada dominio raíz | Plan Enterprise; revisión previa del contenido por JD Cloud | Documentación para desarrolladores, abril de 2026 |

why: "Se tramita con" repeated the column header; "registrada" clashed with "registro" in a page about registration, so "constituida".

- before: Para un sitio WordPress que tenga que vivir en el continente, la elección real está entre la primera, la tercera y la cuarta fila.
+ after:  Para un sitio WordPress que deba funcionar en el continente, la elección real se reduce a la primera, la tercera y la cuarta fila.

## Change 6, no managed WordPress

- before: Ninguno vende un producto WordPress que aplique los parches por usted o atienda una incidencia sobre un plugin.
+ after:  Ninguno comercializa un producto WordPress que aplique los parches en su lugar o atienda una incidencia sobre un plugin.

- before: Lo que venden los tres es una imagen de WordPress en un clic sobre un servidor virtual de gama de entrada.
+ after:  Los tres venden, eso sí, una imagen de WordPress instalable en un clic sobre un servidor virtual de gama de entrada.

- before: | Proveedor | Producto | Qué instala la imagen | Página del proveedor actualizada |
+ after:  | Proveedor | Producto | Qué instala la imagen | Actualización de la página del proveedor |

- before: [...] igual que la preproducción y la tarea de encontrar a alguien capaz de interpretar un conflicto entre plugins.
+ after:  Vuelva a mirar la tercera columna. Cada fila es un sistema operativo con WordPress preinstalado. Las actualizaciones y las copias de seguridad corren de su cuenta, igual que la preproducción, y también le tocará encontrar a alguien capaz de desentrañar un conflicto entre plugins.

- before: Así que alguien de su lado acabará haciendo administración de sistemas cada mes, mientras el sitio exista. Es un coste permanente. Inclúyalo en el presupuesto desde el arranque.
+ after:  Alguien de su equipo, por tanto, acabará administrando sistemas todos los meses, mientras el sitio siga en pie. Es un coste permanente, y conviene incluirlo en el presupuesto desde el arranque.
why: "la tarea de encontrar" was a noun chain; "de su lado" is an anglicism for "on your side".

## Change 7, the filing and the licence

- before: Alibaba Cloud y Tencent Cloud recogen la norma en su propia documentación.
+ after:  Tanto Alibaba Cloud como Tencent Cloud dejan la norma por escrito en su documentación.

- before: [...] de lo contrario, el sistema de Tencent Cloud que vigila los dominios no registrados lo intercepta.
+ after:  [...] de lo contrario, lo intercepta el sistema de Tencent Cloud que vigila los dominios no registrados.

- before: > La revisión propia de Alibaba Cloud tarda de 1 a 2 días hábiles. La revisión posterior [...] ante la seguridad pública (公安备案) [...]
+ after:  > La comprobación propia de Alibaba Cloud tarda de 1 a 2 días hábiles. La revisión posterior de la Administración Provincial de Comunicaciones (省级通信管理局) suele llevar de 1 a 20 días hábiles, y el sitio debe completar su registro ante los órganos de seguridad pública (公安备案) en los 30 días siguientes a su puesta en marcha.

- before: Sobre el papel, eso suma hasta 22 días hábiles. Reunir la documentación lleva tiempo y los expedientes vuelven para correcciones, así que contamos con tres a seis semanas, [...] recorre la documentación y el orden en que se presenta.
+ after:  Sobre el papel, son 22 días hábiles como máximo. Pero reunir la documentación lleva tiempo y los expedientes vuelven con correcciones, así que calculamos de tres a seis semanas, siempre que la entidad continental ya exista. Nuestra [guía del registro ICP](/es/recursos/guia-web-china/licencia-icp-empresas-extranjeras/) detalla los documentos necesarios y el orden en que deben presentarse.

- before: La licencia ICP comercial (ICP许可证) es otro instrumento. Hace falta cuando el propio sitio genera ingresos: [...]
+ after:  La licencia ICP comercial (ICP许可证) es un instrumento distinto, necesario cuando el propio sitio genera ingresos: comercio electrónico, contenidos de pago, software de pago, publicidad.

- before: El plazo empieza a contar en la admisión, y la admisión exige un expediente completo.
+ after:  El plazo empieza a correr con la admisión, que a su vez exige un expediente completo.

- before: La participación extranjera es la otra cuestión que plantea una licencia.
+ after:  Queda la cuestión de la participación extranjera, que toda licencia plantea.

- before: > [...] Quedan excluidos las noticias, la edición, el audiovisual y los servicios culturales en internet.
+ after:  > [...] La exclusión alcanza a las noticias, la edición, el sector audiovisual y los servicios culturales en internet.

- before: El registro ICP se presenta a nombre de una empresa registrada en el continente, [...] Una empresa registrada en el extranjero no puede presentarlo directamente, y ningún gasto en alojamiento sustituye a la entidad.
+ after:  El registro ICP se presenta a nombre de una empresa constituida en el continente, o de un residente si el sitio es personal. Una empresa constituida en el extranjero no puede presentarlo directamente, y ningún gasto en alojamiento suple la falta de entidad.
why: "revisión" twice in one quote; "la admisión" repeated; the "X es la otra cuestión" calque replaced; awkward agreement in "Quedan excluidos las noticias" resolved.

## Change 8, the cloud account

- before: Alibaba tiene dos sitios con una imagen de marca casi idéntica. alibabacloud.com es el internacional; aliyun.com, el chino. Solo el segundo permite registrar.
+ after:  Alibaba mantiene dos sitios con una imagen de marca casi idéntica: alibabacloud.com, el internacional, y aliyun.com, el chino. Solo el segundo permite tramitar el registro.
why: a Spanish sentence should not open on a lowercase domain.

- before: > [...] una empresa registrada en China continental o un residente del continente.
+ after:  > [...] una empresa constituida en China continental o un residente del continente.

- before: De modo que el alta que parece natural, [...] produce una cuenta que no puede registrar [...] Los que lo hacen por primera vez pierden semanas, y suelen darse cuenta cuando alguien busca la pantalla de registro y la cuenta no la tiene, cuando el servidor ya está pagado y la fecha de lanzamiento ya está fijada.
+ after:  Así, el alta más natural, en el sitio en inglés que el buscador muestra primero, da como resultado una cuenta incapaz de registrar el sitio que usted está construyendo. Quien ya ha pasado por esto lo sabe de memoria. Los novatos pierden semanas, y suelen descubrirlo cuando alguien busca la pantalla de registro y no la encuentra, con el servidor ya pagado y la fecha de lanzamiento fijada.

- before: En Tencent Cloud (腾讯云), la norma documentada se refiere al servidor. Las páginas de Tencent que hemos consultado no dicen nada, ni en un sentido ni en otro, sobre las cuentas internacionales, así que nosotros tampoco.
+ after:  En Tencent Cloud (腾讯云), la norma escrita afecta al servidor. Las páginas consultadas guardan silencio sobre las cuentas internacionales, en un sentido o en otro, y nosotros tampoco diremos nada.

- before: > [...] puede usarse para el registro ICP si está contratada por 90 días o más, con al menos 30 días restantes mientras se revisa el registro.
+ after:  > Una instancia Lighthouse en una región continental puede usarse para el registro ICP siempre que esté contratada por 90 días o más y le queden al menos 30 días de vigencia mientras se revisa el expediente.

Huawei line and blockquote: kept as-is.

## Change 9, Vercel and Cloudflare

- before: ## Vercel, Cloudflare y el borde en el extranjero
+ after:  ## Vercel, Cloudflare y los nodos en el extranjero
why: "borde" for "edge" is a calque.

- before: Una CDN global acerca copias de sus páginas, en Hong Kong o en Tokio, lo cual ayuda. No hace nada con los hosts bloqueados a los que llama la propia página.
+ after:  Una CDN global sitúa copias de sus páginas más cerca de sus visitantes, en Hong Kong o en Tokio, y eso ayuda. Los hosts bloqueados a los que llama la propia página, en cambio, siguen bloqueados.

- before: Vercel también sale a relucir, porque muchos sitios Astro y Next.js viven allí. Su propia base de conocimiento da una respuesta clara.
+ after:  Vercel también sale a relucir, porque allí se alojan muchos sitios Astro y Next.js. Su base de conocimiento responde sin rodeos.

- before: > GreatFire da https://vercel.app por bloqueado en China continental en 4 de sus últimas 4 pruebas concluyentes, la más reciente el 14 de septiembre de 2026. De las 157 URL que ha probado en el dominio, 154 aparecen bloqueadas.
+ after:  > Según GreatFire, https://vercel.app aparece bloqueado en China continental en sus 4 últimas pruebas concluyentes, la más reciente del 14 de septiembre de 2026. De las 157 URL que ha probado en el dominio, 154 figuran como bloqueadas.

- before: Las propias sugerencias de Vercel son un dominio personalizado [...] alojadas por uno mismo [...] Esa última opción supone gestionar un segundo sitio, [...]
+ after:  Vercel recomienda un dominio personalizado en lugar de .vercel.app, fuentes y analítica autoalojadas y, para un sitio que deba rendir en China, una copia independiente en infraestructura continental, con su propio registro o licencia ICP. Esta última opción obliga a gestionar un segundo sitio, en una de las tres nubes continentales citadas o en otro proveedor del continente.

- before: [...] la CDN doméstica asociada a la nube en la que ya está. Funciona con el registro que ya tiene y mantiene la pila en un único proveedor.
+ after:  Para un sitio alojado en el continente, la respuesta más sencilla suele ser la CDN doméstica asociada a la nube que ya utiliza. Funciona con el registro obtenido y mantiene toda la pila en un único proveedor.

Vercel and Cloudflare blockquotes and the Cloudflare plans paragraph: kept as-is.

## Change 10A

- before: Las imágenes en un clic funcionan sobre la gama de servidores de entrada de cada nube.
+ after:  Las imágenes en un clic funcionan sobre los servidores de gama de entrada de cada nube.

## Change 10B

- before: La entidad continental hay que constituirla o mantenerla, y preparar la documentación y superar la verificación consume horas de trabajo. Tras el lanzamiento, [...] para mantener el sitio parcheado y respaldado.
+ after:  El gasto real está en otra parte. Hay que constituir o mantener la entidad continental; preparar la documentación y superar la verificación consume horas de trabajo. Tras el lanzamiento, una persona con nombre y apellidos entra en la consola de la nube mes tras mes para aplicar los parches y hacer las copias de seguridad.

## Change 10C

Kept as-is.

Step 2 complete.
