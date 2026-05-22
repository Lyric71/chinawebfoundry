import type { FAQTopic } from './faq';

export const faqTopicsEs: FAQTopic[] = [
  {
    title: 'Por qué China lo cambia todo',
    shortTitle: 'Particularidades',
    icon: 'globe',
    items: [
      {
        question: '¿Por qué mi sitio actual funciona mal en China?',
        answer: 'En dos palabras: el Gran Cortafuegos. El filtrado nacional chino bloquea o ralentiza la mayoría de los servicios occidentales en los que se apoya su sitio. Google Fonts, Google Analytics, reCAPTCHA, YouTube, los píxeles de Facebook, los grandes CDN: todo queda filtrado o limitado. Una página que abre en 2 segundos en Nueva York tarda 15 en Shanghái, y a veces no llega a mostrarse. Sin una configuración pensada para China, su sitio sencillamente no existe para quien navega desde el continente.',
      },
      {
        question: '¿No basta con un simple CDN para resolver el problema de velocidad?',
        answer: 'Cloudflare, Akamai y los demás CDN occidentales no tienen una verdadera cobertura edge en el continente sin licencia ICP. E incluso con ella, el rendimiento rara vez aguanta. La respuesta correcta pasa por un proveedor chino: Alibaba Cloud (阿里云), Tencent Cloud (腾讯云) o Huawei Cloud (华为云). El resto es un apaño.',
      },
      {
        question: '¿Basta con el alojamiento en Hong Kong para el mercado chino?',
        answer: 'Mejor que Europa o América, sí. Pero el visitante del continente sigue viendo tiempos de carga más largos, Baidu clasifica su sitio como «extranjero» y lo relega, y usted pierde la señal de confianza que aporta una presencia con licencia en regla en el continente. Para vender en serio en China, lo que da resultado es el alojamiento continental.',
      },
      {
        question: '¿De verdad navegan distinto los internautas chinos?',
        answer: 'Sí, de fondo. El móvil llevado al extremo, WeChat (微信) como capa de difusión por defecto, códigos QR en cada esquina, longitudes de scroll que desconciertan, maquetaciones más densas, códigos estéticos que no se parecen en nada a los nuestros. Copiar un sitio occidental al chino casi nunca funciona. Reconstruimos la experiencia a partir de cómo usan internet aquí de verdad.',
      },
    ],
  },
  {
    title: 'Encuadre y descubrimiento del proyecto',
    shortTitle: 'Encuadre',
    icon: 'compass',
    items: [
      {
        question: '¿Cómo saber si de verdad necesitamos un sitio específico para China?',
        answer: 'Si su sitio se arrastra al abrir desde Shanghái, no aparece nunca en Baidu, o si sus comerciales oyen una y otra vez «no os encontramos en internet» en boca de los clientes potenciales chinos, la respuesta es probablemente sí. Antes de cualquier compromiso hacemos una auditoría gratuita. Cuente una semana. Se va con cifras reales, no con un argumentario de venta.',
      },
      {
        question: '¿Cuál es el alcance mínimo viable para entrar en el mercado chino en internet?',
        answer: 'Una landing bilingüe en alojamiento chino con licencia ICP (互联网内容提供商), Baidu Tongji (百度统计) instalado y una experiencia pensada para Baidu (百度). Ese es el mínimo imprescindible. Hemos lanzado empresas sobre esa base y luego hemos hecho crecer el edificio a medida que llegaban los datos de tráfico.',
      },
      {
        question: '¿Pueden ayudarnos a saber si China merece la pena para nuestra actividad?',
        answer: 'No es nuestro oficio principal. Pero cuando la inversión no tiene ninguna posibilidad de sostenerse, lo decimos con franqueza. Hemos rechazado proyectos porque las cifras del mercado no justificaban el gasto. Para un verdadero asesoramiento de entrada en el mercado, le orientamos hacia las consultoras de Shanghái que se dedican a ello a diario.',
      },
      {
        question: '¿Ofrecen un taller de descubrimiento antes del proyecto?',
        answer: 'Sí, en dos formatos. Media jornada a distancia para la auditoría técnica y la estrategia, o un taller de 2 días en Shanghái (上海) para los proyectos más grandes. Ambos se facturan aparte del encargo principal.',
      },
      {
        question: '¿Qué información necesitan para dar un presupuesto real?',
        answer: 'La URL de su sitio actual, los datos de tráfico si dispone de ellos, sus objetivos para China (leads, ventas, presencia de marca, o las tres cosas a la vez), el estado de una posible entidad china y, a ser posible, una llamada rápida. Con esos 4 elementos damos una cifra precisa, no una horquilla.',
      },
    ],
  },
  {
    title: 'Tarifas y presupuestos',
    shortTitle: 'Tarifas',
    icon: 'wallet',
    items: [
      {
        question: '¿Cuánto cuesta de verdad un proyecto de sitio para China?',
        answer: 'Depende del alcance. En un extremo, los proyectos de migración. En el otro, los desarrollos a medida completos con WooCommerce o una plataforma de socios. Tras una llamada de descubrimiento enviamos una propuesta cerrada. Sin facturación por horas durante el proyecto, sin sorpresas a mitad de camino.',
      },
      {
        question: '¿Cómo se comparan sus tarifas con las de las agencias occidentales?',
        answer: 'Con toda franqueza, son comparables. Los sueldos de Shanghái (上海) superan a los de París o Berlín, nuestro equipo juega en la categoría sénior y nuestro trabajo no sale de una plantilla. A presupuesto equivalente, gana un equipo con base en el continente que ha presentado expedientes Bei\'an (备案) de verdad, que gestiona cuentas de la Baidu Search Resource Platform (百度搜索资源平台) a diario y que sabe qué comercial de Aliyun (阿里云) coge el teléfono. El valor está ahí, no en el descuento.',
      },
      {
        question: '¿Ofrecen pagos fraccionados?',
        answer: 'En los proyectos grandes, sí. El reparto habitual: arranque, mitad del proyecto, lanzamiento. En los encargos más pesados pasamos a hitos mensuales. No trabajamos a cambio de participación en el capital.',
      },
      {
        question: '¿Qué NO está incluido en el precio del proyecto?',
        answer: 'Las tasas administrativas del ICP (bajas, pero aparte), la redacción profesional en chino si la quiere, las licencias de bancos de imágenes, las licencias de plugins de pago si insiste en extensiones comerciales, y los servicios de terceros como el alojamiento, que se le factura directamente. El detalle figura negro sobre blanco en la propuesta.',
      },
      {
        question: '¿Hay costes ocultos que debamos conocer?',
        answer: 'Dos que pillan a los clientes por sorpresa. Primero, la renovación administrativa del ICP (互联网内容提供商) cada 2 o 3 años: baja, pero no nula. Segundo, el SEO en Baidu (百度) de forma continua: para subir de verdad en las consultas hace falta un trabajo mensual, no un empujón en el lanzamiento. Lo ponemos sobre la mesa ya en la llamada de descubrimiento, para que la conversación sobre el presupuesto sea clara.',
      },
      {
        question: '¿Cobran las propuestas?',
        answer: 'No. La propuesta y la auditoría son gratuitas. Escribimos encuadres detallados porque ambas partes necesitan saber con exactitud qué se va a construir. Si toma nuestra propuesta para pedir presupuesto en otro sitio, ha pasado: seguimos sin cobrar.',
      },
      {
        question: '¿Podemos empezar con poco y crecer después?',
        answer: 'Sí, es incluso la vía que solemos recomendar. La fase 1 pone en línea lo esencial. La fase 2 añade el SEO en Baidu (百度) en profundidad, la optimización GEO China, la producción de contenido. La fase 3 abre el comercio electrónico o las funciones más avanzadas. Ese reparto suaviza el gasto y da tiempo a validar antes de pasar a escala.',
      },
    ],
  },
  {
    title: 'Licencia ICP y marco legal',
    shortTitle: 'ICP y legal',
    icon: 'shield',
    items: [
      {
        question: '¿Qué es exactamente la licencia ICP? ¿De verdad la necesito?',
        answer: 'Sí, y no existe ningún atajo. ICP (互联网内容提供商) significa Internet Content Provider. Es la autorización que expide el Ministerio de Industria y Tecnología de la Información (工业和信息化部), exigida por ley para todo sitio alojado en el continente. Cuentan dos modalidades: el ICP Bei\'an (备案) para los sitios informativos, y el ICP Jing Ying (经营许可证) para los sitios que cobran. Nos hacemos cargo del expediente de principio a fin.',
      },
      {
        question: '¿Y si todavía no tenemos una entidad china?',
        answer: 'El ICP (互联网内容提供商) se complica entonces. Dos vías: montar una WFOE (外商独资企业), o apoyarse en una entidad china capaz de avalar la presentación. Hemos acompañado a clientes por las dos. Sin entidad, y sin ganas de montar una, el alojamiento continental queda cerrado: Hong Kong (香港) sigue siendo entonces un plan B serio.',
      },
      {
        question: '¿Cuánto tarda realmente la presentación del ICP?',
        answer: 'El Bei\'an (备案) suele rondar las 2-4 semanas. El Jing Ying (经营许可证) pide de 2 a 3 meses, a veces más. La gran variable: lo completo que esté su expediente. Le entregamos una lista de comprobación en la semana 1 para que la parte lenta no frene el conjunto.',
      },
      {
        question: '¿Qué hay de la residencia de los datos y del cumplimiento de la PIPL?',
        answer: 'En la mayoría de los casos, los datos chinos deben permanecer en China. Diseñamos la arquitectura teniendo en cuenta esa restricción desde el primer día. Si su proyecto maneja datos personales, repasamos con usted las consecuencias de la PIPL (个人信息保护法). Hemos cruzado decenas de casos con asesores jurídicos, lo que nos da una buena lectura de las zonas grises.',
      },
      {
        question: '¿Qué pasa si rechazan nuestra presentación del ICP?',
        answer: 'Ocurre, por lo general por documentación que falta. Volvemos a presentar sin coste. Las únicas situaciones sin salida tienen que ver con sociedades cuya estructura misma no cumple los requisitos, y eso lo vemos venir en la semana 1, nunca en la semana 4.',
      },
    ],
  },
  {
    title: 'Plazos y proceso',
    shortTitle: 'Plazos',
    icon: 'clock',
    items: [
      {
        question: '¿Con qué rapidez pueden lanzar un sitio en China?',
        answer: 'Nuestro récord: 3 semanas para una landing, sobre una licencia ICP (互联网内容提供商) ya en regla. Más realista para un sitio de verdad: de 8 a 12 semanas, presentación del ICP incluida. Si hay que montarlo todo desde cero y la entidad china está aún por crear, sume de 4 a 6 semanas más en ese apartado.',
      },
      {
        question: '¿Cómo es el calendario de un proyecto típico?',
        answer: 'Semanas 1-2: auditoría y descubrimiento. Semanas 3-6: presentación del ICP (互联网内容提供商) en paralelo con el diseño y la puesta a punto técnica. Semanas 7-10: desarrollo, integración de contenidos, pruebas. Semanas 11-12: staging, correcciones, lanzamiento. Después toma el relevo el mantenimiento. El diagrama de Gantt completo figura en la propuesta.',
      },
      {
        question: '¿Qué ralentiza más a menudo los proyectos?',
        answer: 'La documentación del ICP (互联网内容提供商) del lado del cliente. La pedimos en la semana 1 y a veces la recibimos en la semana 4. El otro freno habitual: el contenido. Los clientes subestiman siempre el tiempo que pide una redacción china hecha como es debido, y no simplemente traducida.',
      },
      {
        question: '¿Con qué frecuencia tendremos noticias suyas durante el proyecto?',
        answer: 'Un punto semanal por videollamada, un informe escrito cada lunes, un canal de WeChat (微信) para los intercambios del día a día. También accede a nuestro seguimiento del proyecto. Ninguna caja negra: sabe en todo momento dónde está el trabajo.',
      },
      {
        question: '¿Con quién hablamos dentro de su equipo?',
        answer: 'Un jefe de proyecto dirige su cuenta de principio a fin. Recurre a nuestros especialistas (diseño, desarrollo, SEO, contenido, alojamiento) según las necesidades. No tiene que contar su actividad a 5 interlocutores distintos.',
      },
      {
        question: '¿Podemos participar en el diseño?',
        answer: 'Sí. Abrimos el acceso a Figma si su equipo prefiere comentar en la fuente. Algunos clientes dirigen al detalle, otros delegan por completo. Los dos modos funcionan.',
      },
      {
        question: '¿Qué pasa si incumplimos un plazo de nuestro lado?',
        answer: 'El proyecto se pone en pausa también de nuestro lado. No facturamos la espera, retomamos cuando ustedes están listos. Pasados 60 días de parón revisamos el alcance, porque en China los precios se mueven, y la disponibilidad del equipo también.',
      },
    ],
  },
  {
    title: 'Equipo, ubicación y comunicación',
    shortTitle: 'Equipo',
    icon: 'people',
    items: [
      {
        question: '¿Dónde está su equipo, en concreto?',
        answer: 'La oficina principal está en Shanghái (上海). Algunos miembros del equipo trabajan desde Hangzhou (杭州) y Shenzhen (深圳). Nuestra presencia física en China cuenta tanto para las presentaciones del ICP (互联网内容提供商) y la relación con los proveedores de alojamiento como para entender, día a día, cómo funciona internet aquí.',
      },
      {
        question: '¿Tienen personal no chino?',
        answer: 'Sí. El fundador es europeo, varios miembros del equipo son bilingües, incluso trilingües. Los jefes de proyecto que llevan las cuentas internacionales manejan el inglés a nivel profesional. Internamente, el equipo alterna inglés y chino sin dificultad.',
      },
      {
        question: '¿En qué huso horario trabajan? ¿Cómo funciona para clientes en Europa o América?',
        answer: 'Hora estándar de China (中国标准时间, UTC+8). Con Europa, la jornada se solapa ampliamente. Con América, atendemos las llamadas a primera o a última hora de la jornada china y el equipo se adapta. Los husos más alejados exigen algo más de esfuerzo, pero se gestionan bien para los hitos.',
      },
      {
        question: '¿Podemos visitar su oficina?',
        answer: 'Con mucho gusto. Recibimos clientes en Shanghái (上海) con regularidad. Si pasa por China, bloqueamos una sesión de trabajo, una cena, y le presentamos a las personas adecuadas. Poner cara al equipo cambia muchas cosas.',
      },
      {
        question: '¿Se desplazan a las oficinas de sus clientes?',
        answer: 'A partir de cierto tamaño de proyecto, sí: el arranque presencial está incluido. En los proyectos más pequeños, el trabajo a distancia funciona muy bien. Llevamos años gestionando los sitios de clientes a los que nunca hemos visto en persona.',
      },
      {
        question: '¿En qué idiomas se comunican?',
        answer: 'Español e inglés para los clientes internacionales. Mandarín (普通话) internamente y ante los proveedores chinos, los servicios de alojamiento y las administraciones. Si su equipo cuenta con hablantes de chino, combinamos sin problema. WeChat (微信) funciona en ambos sentidos.',
      },
      {
        question: '¿Usan WeChat para los intercambios con clientes?',
        answer: 'Sí, WeChat (微信) sigue siendo el canal más cómodo para la mayoría de los clientes. El correo también sirve, según lo que su equipo prefiera. Nos adaptamos a sus herramientas, y no al revés.',
      },
    ],
  },
  {
    title: 'Contratos y riesgos',
    shortTitle: 'Contratos',
    icon: 'document',
    items: [
      {
        question: '¿Qué cubre exactamente el contrato?',
        answer: 'Alcance, entregables, calendario, calendario de pagos, propiedad intelectual, confidencialidad, cláusulas de rescisión, condiciones de soporte tras el lanzamiento. Un contrato de prestación de servicios estándar, bajo el derecho que elijamos juntos. La mayoría de los clientes internacionales se decanta por el derecho de Hong Kong (香港) o de Singapur (新加坡). Todo es negociable.',
      },
      {
        question: '¿Quién es propietario del código y del contenido tras el lanzamiento?',
        answer: 'Usted. Transferencia íntegra de todos los activos: código fuente, archivos de diseño, contenidos, credenciales de alojamiento. Conservamos el derecho a mencionar el proyecto de forma anónima en nuestro porfolio, salvo que nos pida lo contrario de forma expresa.',
      },
      {
        question: '¿Y si queremos marcharnos a mitad del proyecto?',
        answer: 'Las cláusulas de rescisión están negro sobre blanco en el contrato. Paga el trabajo realizado a la fecha y le entregamos todo el producto en un formato utilizable. Ningún proyecto retenido como rehén de nuestro lado. Nunca hemos activado una cláusula de recuperación: con toda honestidad, los clientes no se marchan a mitad de camino.',
      },
      {
        question: '¿Firman acuerdos de confidencialidad?',
        answer: 'Sí, antes de compartir el más mínimo detalle técnico o comercial. Los acuerdos de confidencialidad mutuos son la norma. Disponemos de nuestra propia plantilla si usted no tiene una.',
      },
    ],
  },
  {
    title: 'Decisiones tecnológicas',
    shortTitle: 'Tecnología',
    icon: 'chip',
    items: [
      {
        question: '¿WordPress o Astro? ¿Cómo elegir?',
        answer: 'La elección depende de su equipo y de su flujo editorial. WordPress cuando hay personas de marketing que deben actualizar el contenido a diario, sin la ayuda de un desarrollador. Astro cuando el rendimiento está en primera línea y hay un soporte técnico disponible. Construimos con los dos, y también sabemos montar stacks híbridos: el sitio de marketing en uno, el comercio electrónico en otro.',
      },
      {
        question: '¿Pueden trabajar con nuestro stack actual?',
        answer: 'Con toda franqueza, no. No intentamos forzar stacks occidentales para que aguanten detrás del Gran Cortafuegos. Hemos visto demasiados de esos proyectos derrumbarse a los 6 meses. Nuestro consejo: herramientas chinas que funcionan de forma nativa sobre el terreno. Aliyun (阿里云), Tencent Cloud (腾讯云), Baidu Tongji (百度统计), WeChat (微信), las plataformas de IA chinas. El ecosistema cambia, las reglas cambian. Mantener vivo su stack global en China sale, casi siempre, más caro en apaños que una reconstrucción limpia.',
      },
      {
        question: '¿Por qué no usar un creador de sitios SaaS occidental para China?',
        answer: 'Porque no aguantan aquí. La mayoría están parcialmente bloqueados o muy limitados, y ninguno dispone de alojamiento compatible con el ICP en el continente. Hemos migrado a varios clientes desde esas plataformas porque sus sitios chinos eran inservibles. Construimos sobre herramientas que funcionan dentro del Cortafuegos, y punto.',
      },
      {
        question: '¿Construyen también aplicaciones móviles?',
        answer: 'No. Nos centramos en la web, los miniprogramas de WeChat (微信小程序) y los Baidu Smart Mini Programs (智能小程序). Para las aplicaciones nativas de iOS y Android recurrimos a socios especializados en Shenzhen (深圳).',
      },
      {
        question: '¿Pueden integrar WeChat?',
        answer: 'Sí. Inicio de sesión con WeChat (微信), compartición, miniprogramas, pago. Hemos construido decenas de integraciones de WeChat y nos sabemos de memoria las trampas de la API. Lo mismo con Alipay (支付宝) y UnionPay (银联).',
      },
      {
        question: '¿Y la IA y los chatbots en nuestro sitio chino?',
        answer: 'Integramos las plataformas de IA chinas: DeepSeek (深度求索), Doubao (豆包), Kimi, Yuanbao (元宝) y Baidu AI (百度AI). Las herramientas de IA occidentales están, la mayoría de las veces, bloqueadas o poco fiables desde el continente. Ninguna opción viable por ese lado. Si le han vendido otra cosa, le explicamos lo que de verdad funciona aquí.',
      },
      {
        question: '¿Funcionará en China nuestro sitio WordPress con Elementor?',
        answer: 'Seguramente no tal cual. Ponerlo en marcha sigue siendo posible, en la mayoría de los casos. Cortamos las dependencias de Google, sustituimos las tipografías, redirigimos las integraciones. La mayoría de los sitios con Elementor que heredamos funcionan con limpieza detrás del Cortafuegos en unas pocas semanas.',
      },
      {
        question: '¿Y las actualizaciones automáticas de plugins desde wordpress.org?',
        answer: 'Fallan o se quedan colgadas muy a menudo desde dentro de China. Configuramos un enrutado de las actualizaciones a través de un proxy, o ventanas de actualización manual programadas. En cualquier caso, su equipo no tiene que preocuparse de ello.',
      },
    ],
  },
  {
    title: 'SEO, Baidu e IA generativa',
    shortTitle: 'SEO e IA',
    icon: 'search',
    items: [
      {
        question: '¿Qué cambia entre el SEO de Baidu y el de Google?',
        answer: 'Casi todo. Baidu (百度) prioriza los sitios alojados en el continente, juzga la calidad de los contenidos chinos con sus propios criterios, abre su Search Resource Platform (百度搜索资源平台) para el envío de páginas, trata las etiquetas meta de otra forma y clasifica según señales que Google ignora. Optimizar para uno no optimiza para el otro.',
      },
      {
        question: '¿Garantizan posiciones en Baidu?',
        answer: 'No, y desconfíe de quien se comprometa a ello. Lo que sí garantizamos: una puesta a punto del SEO en Baidu (百度) según las buenas prácticas, el envío a la Baidu Search Resource Platform (百度搜索资源平台), la optimización técnica y los datos estructurados. La posición depende después de la competencia, de la calidad del contenido y del tiempo. Un informe mensual le muestra qué se mueve.',
      },
      {
        question: '¿Qué es el GEO China y lo necesitamos?',
        answer: 'Generative Engine Optimisation, aplicada a las IA de búsqueda chinas: DeepSeek (深度求索), Doubao (豆包), Kimi, Yuanbao (元宝), Baidu AI (百度AI). Cada vez más internautas chinos abren su búsqueda en esas herramientas antes incluso que en Baidu (百度). Si sus competidores aparecen en las respuestas generadas por la IA y usted no, es tráfico que pasa por delante de su puerta.',
      },
      {
        question: '¿Cuánto tardaremos en ver tráfico de Baidu tras el lanzamiento?',
        answer: 'La indexación arranca por lo general de 2 a 4 semanas después del envío a la Baidu Search Resource Platform (百度搜索资源平台), con una configuración de SEO en regla. La verdadera dinámica de posicionamiento en palabras clave competitivas pide de 3 a 6 meses como mínimo. Toda promesa más rápida es venta a presión.',
      },
    ],
  },
  {
    title: 'Contenido y localización',
    shortTitle: 'Contenido',
    icon: 'language',
    items: [
      {
        question: '¿Se encargan ustedes de la traducción al chino, o debemos aportarla nosotros?',
        answer: 'Las dos opciones funcionan. Trabajamos con redactores chinos en plantilla y con colaboradores de confianza, que escriben para públicos chinos en lugar de limitarse a traducir. Si ya tiene un proveedor de traducción, partimos de su resultado, pero le señalaremos los pasajes que huelen a traducción más que a redacción nativa.',
      },
      {
        question: '¿Cuál es la diferencia entre traducción y localización?',
        answer: 'La traducción reproduce las mismas palabras en chino. La localización reescribe para el público, la plataforma, las referencias culturales y las consultas que los internautas chinos teclean de verdad. Un sitio traducido suena extranjero. Un sitio localizado se sostiene.',
      },
      {
        question: '¿Debemos usar chino simplificado o tradicional?',
        answer: 'Chino simplificado (简体中文) para la China continental. Chino tradicional (繁體中文) para Hong Kong (香港) y Taiwán (台湾). Si apunta a los dos mercados, mantenemos versiones separadas. Mezclar ambos en un solo sitio es hundir su credibilidad.',
      },
    ],
  },
  {
    title: 'Rendimiento y resultados',
    shortTitle: 'Rendimiento',
    icon: 'spark',
    items: [
      {
        question: '¿Qué mejoras de rendimiento podemos esperar?',
        answer: 'Los sitios lentos migrados a Aliyun (阿里云) pasan normalmente de 12-15 segundos de carga a menos de 2 segundos. Los desarrollos nuevos bajan del segundo en las conexiones continentales. La indexación en Baidu (百度) arranca por lo general de 2 a 4 semanas después del lanzamiento, con una configuración de SEO limpia.',
      },
      {
        question: '¿Cómo miden el éxito de un proyecto en China?',
        answer: 'Depende del proyecto. Para un sitio de generación de leads: los envíos de formularios y los objetivos de conversión de Baidu Tongji (百度统计). Para el comercio electrónico: la facturación y la tasa de finalización del carrito. Para un sitio de marca: el tiempo en página, las visitas recurrentes, el tráfico orgánico. Los KPI se validan en el arranque, y el informe llega cada mes.',
      },
      {
        question: '¿Y si el sitio rinde por debajo de lo esperado tras el lanzamiento?',
        answer: 'Hacemos un diagnóstico. La causa es técnica, editorial, o responde a un desajuste con lo que esperan los internautas chinos. Los errores se corrigen sin coste, eso está incluido. Las optimizaciones más profundas, las reescrituras, el SEO en profundidad pasan por la cuota de mantenimiento.',
      },
    ],
  },
  {
    title: 'Trabajar juntos a largo plazo',
    shortTitle: 'Largo plazo',
    icon: 'loop',
    items: [
      {
        question: '¿Cuál es su tasa de retención de clientes?',
        answer: 'La mayoría de los clientes se quedan con nosotros en mantenimiento tras el lanzamiento. Algunos nos acompañan desde hace muchos años. No seguimos esa cifra como una métrica de marketing, pero es alta. El alojamiento chino y la renovación de los ICP (互联网内容提供商) imponen un soporte local continuo: la relación se prolonga por sí sola.',
      },
      {
        question: '¿Podemos contar con su equipo para desarrollo continuo tras el lanzamiento?',
        answer: 'Sí. Ofrecemos horas de desarrollo por cuota, producción de contenido, SEO, trabajo de GEO China, gestión del alojamiento. La mayoría de los clientes acaba en una cuota mensual que cubre el mantenimiento y una bolsa de horas de desarrollo para lo que vaya surgiendo.',
      },
      {
        question: '¿Y si queremos internalizarlo con el tiempo?',
        answer: 'Ningún problema, acompañamos la transición. Hemos formado a equipos de clientes para que retomen las actualizaciones de contenido, el desarrollo ligero y el SEO en Baidu (百度). Entregamos la documentación, organizamos el traspaso de conocimientos y seguimos disponibles para los temas más espinosos. Sin dramas.',
      },
      {
        question: '¿Ofrecen formación para nuestro equipo interno?',
        answer: 'Sí. Formación en WordPress, formación en Baidu Tongji (百度统计), manejo de la Baidu Search Resource Platform (百度搜索资源平台), flujo editorial. A distancia, o presencial si está en China. El formato va de unas pocas horas a talleres de varios días, según la necesidad.',
      },
    ],
  },
  {
    title: 'Objeciones frecuentes y casos particulares',
    shortTitle: 'Casos límite',
    icon: 'spark-question',
    items: [
      {
        question: 'Ya trabajamos con una agencia digital global. ¿Por qué añadiros?',
        answer: 'Porque no puede presentar un ICP (互联网内容提供商), no tiene relaciones de alojamiento en China y no conoce Baidu (百度) como nosotros. La mayoría de nuestros clientes conserva su agencia global para la capa internacional y nos moviliza para la capa específica de China. Colaboramos con agencias globales de forma continua, sin roces de ego.',
      },
      {
        question: 'Nuestro departamento de IT cree que puede gestionarlo internamente. ¿Qué les decimos?',
        answer: 'Díganles que les deseamos suerte y que nos llamen en 3 meses. Medio en broma. Un departamento de IT interno puede hacerlo perfectamente, a condición de dedicar un año a aprender la normativa, a tejer las relaciones de alojamiento y a domar la Baidu Search Resource Platform (百度搜索资源平台). La mayoría de los equipos internos se da cuenta enseguida de que esa curva de aprendizaje no es la prioridad de su año.',
      },
      {
        question: '¿Y si nuestra empresa tiene sensibilidades políticas o regulatorias?',
        answer: 'Hemos acompañado a clientes de sectores regulados, de la sanidad a las tecnologías próximas a la defensa. No aceptamos todos los proyectos. Si su sector plantea cuestiones de cumplimiento que hacen arriesgada una presencia web en China, se lo decimos de entrada y le orientamos antes que nada hacia un asesor jurídico. Más vale saberlo en la semana 1.',
      },
    ],
  },
];
