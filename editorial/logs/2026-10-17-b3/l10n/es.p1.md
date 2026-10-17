# /deep-translate ES, pass 1 (full native rewrite), 17 October 2026

Scope: the same eight passages. Existing ES copy read first; each changed
passage re-authored from scratch in El País register (fuller journalistic
prose, per the Spanish register rule). Unchanged tails kept.

## P1 src/data/faq-es.ts, ICP question and answer
- before Q: ¿Qué es exactamente la licencia ICP? ¿Es realmente obligatoria?
+ after Q:  ¿Qué es exactamente la licencia ICP? ¿De verdad la necesitamos?
- before A: Sí, y no hay atajo posible. ICP (互联网内容提供商) significa Internet Content Provider: es el permiso que concede el Ministerio de Industria y Tecnología de la Información (工业和信息化部), y la ley lo exige a cualquier sitio alojado en el continente. Hay dos tipos: el Bei'an (备案), para sitios informativos, y el Jing Ying (经营许可证), para los que venden en línea. Del expediente nos encargamos nosotros, de principio a fin.
+ after A:  Si el sitio funciona desde un servidor en China continental, sí, aunque a la mayoría le basta con el registro. ICP (互联网内容提供商) significa Internet Content Provider. El Ministerio de Industria y Tecnología de la Información (工业和信息化部) distingue dos regímenes: el registro ICP (ICP备案), para los sitios de acceso libre, y la licencia ICP (ICP许可证), para los que cobran a sus usuarios por información o servicios en línea. Una web corporativa solo necesita el registro. Nos ocupamos del expediente de principio a fin.
why: "para los que venden en línea" was the error corrected in English; pinyin labels replaced by the house terms.

## P2 src/data/faq-es.ts, no entity yet (opening only)
- before: Ahí el ICP (互联网内容提供商) se complica. Caben dos opciones: constituir una WFOE (外商独资企业), la sociedad de capital extranjero, o apoyarse en una entidad china que avale la solicitud. Hemos acompañado a clientes por las dos vías.
+ after:  Entonces el registro tiene que esperar, porque se tramita a nombre de una empresa o de un residente del continente. Caben dos opciones: constituir una WFOE (外商独资企业), la sociedad de capital extranjero, o que una empresa china asociada registre el sitio a su nombre, con lo que figurará como titular en el registro. Hemos acompañado a clientes por las dos vías.
why: "que avale la solicitud" carried the sponsor idea the research corrected.

## P3 src/data/faq-es.ts, how long the filing takes (opening only)
- before: El Bei'an (备案) suele tardar entre dos y cuatro semanas; el Jing Ying (经营许可证), de dos a tres meses, a veces más. Todo depende de una cosa: lo completo que esté su expediente.
+ after:  Contamos con entre tres y seis semanas para el registro ICP (ICP备案). Alibaba Cloud indica de 1 a 2 días hábiles para su propia revisión y, por lo general, de 1 a 20 días hábiles para la revisión provincial, a lo que hay que sumar el tiempo de reunir la documentación. La licencia ICP (ICP许可证) se resuelve en un plazo de 60 días desde la admisión de la solicitud, y la planificamos en 12 a 18 semanas. Todo depende de una cosa: lo completo que esté su expediente.
why: corrected figures; "días hábiles" is the Spanish administrative term.

## P4 src/data/faq-es.ts, performance gains
- before: Un sitio lento que migramos a Aliyun (阿里云) suele pasar de doce o quince segundos de carga a menos de dos. Un desarrollo nuevo carga en menos de un segundo desde el continente. Y la indexación en Baidu (百度), con el SEO bien configurado, suele empezar entre dos y cuatro semanas después del lanzamiento.
+ after:  No prometemos ningún tiempo de carga antes de haber medido su sitio. La mejora viene de dos cambios: alojar en el continente y eliminar las llamadas a servidores que el Gran Cortafuegos bloquea o ralentiza. Nuestra auditoría estratégica mide ambas cosas antes de cualquier presupuesto. En Baidu (百度), contamos con entre dos y cuatro semanas tras el lanzamiento hasta que se indexan las primeras páginas.
why: undated load times are on the Do Not Assert list.

## P5 src/pages/es/agencia-wordpress-china.astro, FAQ "timeline"
- before: Una web de marca nueva lleva de 8 a 12 semanas desde el arranque hasta el lanzamiento. […] El registro ICP tarda de 2 a 4 semanas y avanza en paralelo al desarrollo.
+ after:  Una web de marca nueva lleva de 8 a 12 semanas desde el arranque hasta el lanzamiento, siempre que ya exista la entidad china. […] Para el registro ICP contamos con 3 a 6 semanas, y lo iniciamos la primera semana, en paralelo al desarrollo.
why: corrected figure; entity condition.

## P6 same page, process bullet
- before: El registro tarda de 2 a 4 semanas y lo tramitamos en paralelo al desarrollo
+ after:  Registro ICP previsto en 3 a 6 semanas, iniciado la primera semana, en paralelo al desarrollo

## P7 same page, process paragraph
- before: […] La licencia y el SEO avanzan en paralelo al desarrollo, de modo que ningún frente espera por otro.
+ after:  […] El registro ICP y la base SEO avanzan en paralelo al desarrollo, y es el número de registro el que fija la fecha de lanzamiento.
why: wrong instrument (licence) and the "nothing waits" claim the research contradicts.

## P8 src/pages/es/agencia-web-china.astro, FAQ timeline (first sentence)
- before: Para un sitio de marca acotado, de 8 a 12 semanas entre el arranque y la puesta en línea con licencia ICP.
+ after:  Para un sitio de marca acotado, de 8 a 12 semanas entre el arranque y la puesta en línea, con el registro ICP incluido.

Step 1 complete.
