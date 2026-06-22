import type { FAQTopic } from './faq';

export const faqTopicsEs: FAQTopic[] = [
  {
    title: 'Por qué China lo cambia todo',
    shortTitle: 'Particularidades',
    icon: 'globe',
    items: [
      {
        question: '¿Por qué mi sitio actual funciona mal en China?',
        answer: 'La causa casi siempre es la misma: el Gran Cortafuegos. El filtrado nacional bloquea o frena los servicios occidentales de los que depende su sitio: Google Fonts, Google Analytics, reCAPTCHA, YouTube, los píxeles de Facebook, los grandes CDN. Ninguno responde bien. Una página que en Nueva York abre en dos segundos tarda quince en Shanghái, cuando no se queda en blanco. Sin una configuración pensada para China, su sitio no existe para el visitante del continente.',
      },
      {
        question: '¿No basta con un simple CDN para resolver el problema de velocidad?',
        answer: 'No, no basta. Cloudflare, Akamai y los demás CDN occidentales no tienen presencia real dentro del continente sin una licencia ICP, y aun con ella el rendimiento sigue siendo irregular. La única solución sólida es alojar el sitio en un proveedor chino: Alibaba Cloud (阿里云), Tencent Cloud (腾讯云) o Huawei Cloud (华为云). El resto son medidas provisionales.',
      },
      {
        question: '¿Basta con el alojamiento en Hong Kong para el mercado chino?',
        answer: 'Mejora la situación frente a un alojamiento europeo o americano, pero no resuelve el problema de fondo. Desde el continente el sitio sigue yendo lento, Baidu lo trata como extranjero y lo relega en los resultados, y usted pierde la señal de confianza que aporta una licencia china en regla. Para vender en China, el alojamiento continental es la única base sólida.',
      },
      {
        question: '¿Navegan los internautas chinos de forma distinta?',
        answer: 'Sí, y la diferencia es enorme. Aquí todo gira en torno al teléfono: WeChat (微信) es el canal con el que la gente comparte y descubre, y los códigos QR están por todas partes. Las páginas son más largas y más densas, y el gusto visual no tiene nada que ver con el occidental. Por eso traducir sin más un sitio occidental rara vez funciona; diseñamos cada proyecto a partir de cómo se usa internet en China.',
      },
    ],
  },
  {
    title: 'Alcance y definición del proyecto',
    shortTitle: 'Alcance',
    icon: 'compass',
    items: [
      {
        question: '¿Cómo sabemos si necesitamos un sitio específico para China?',
        answer: 'Hay síntomas que no engañan: el sitio tarda demasiado en abrirse desde Shanghái, no aparece en Baidu por mucho que se busque y sus comerciales oyen lo mismo en cada reunión, que los clientes chinos no los encuentran. Con que se dé uno de estos casos, la respuesta suele ser que sí. Antes de comprometerse a nada hacemos una auditoría gratuita, y una semana después tiene en la mano un informe con datos concretos sobre el estado de su sitio.',
      },
      {
        question: '¿Cuál es el proyecto mínimo viable para entrar en el mercado chino?',
        answer: 'Lo mínimo es una página de aterrizaje bilingüe, alojada en China con licencia ICP (互联网内容提供商), con Baidu Tongji (百度统计) instalado y pensada para Baidu (百度) desde el diseño. Hemos lanzado empresas con poco más que eso y luego hemos ampliado el sitio según lo que mostraba el tráfico.',
      },
      {
        question: '¿Pueden ayudarnos a decidir si China merece la pena para nuestro negocio?',
        answer: 'No es nuestra especialidad, pero cuando vemos que una inversión no se va a rentabilizar, lo decimos sin rodeos. Hemos rechazado proyectos porque las cifras del mercado no justificaban el gasto. Si lo que busca es un análisis a fondo de la entrada en China, le remitimos a las consultoras de Shanghái que se dedican a eso.',
      },
      {
        question: '¿Ofrecen un taller de descubrimiento antes del proyecto?',
        answer: 'Sí, en dos formatos. Para la auditoría técnica y la estrategia hacemos una sesión de media jornada a distancia, y para los proyectos más grandes organizamos un taller de dos días en Shanghái (上海). Los dos se facturan aparte del encargo principal.',
      },
      {
        question: '¿Qué información necesitan para preparar un presupuesto?',
        answer: 'Necesitamos la dirección de su sitio actual y, si los tiene, los datos de tráfico. También nos hace falta saber qué busca en China: captar contactos, vender, ganar presencia de marca o varios objetivos a la vez. Y conviene saber si ya cuenta con una entidad china; a ser posible, lo vemos todo en una llamada rápida. Con eso preparamos un presupuesto cerrado y exacto.',
      },
    ],
  },
  {
    title: 'Tarifas y presupuestos',
    shortTitle: 'Tarifas',
    icon: 'wallet',
    items: [
      {
        question: '¿Cuánto cuesta realmente un sitio para el mercado chino?',
        answer: 'Depende del alcance. Una migración cuesta bastante menos que un desarrollo a medida con WooCommerce o sobre una plataforma de socios. Después de la primera llamada le enviamos una propuesta con un precio cerrado: ni facturamos por horas mientras dura el proyecto ni añadimos cargos a mitad de camino.',
      },
      {
        question: '¿Cómo se comparan sus tarifas con las de las agencias occidentales?',
        answer: 'Son comparables. Los sueldos en Shanghái (上海) superan a los de París o Berlín, el equipo es de perfil sénior y cada proyecto se hace a medida. Por un presupuesto similar le conviene más un equipo radicado en el continente: uno que ha tramitado registros Bei\'an (备案) reales, que trabaja a diario con la Baidu Search Resource Platform (百度搜索资源平台) y que sabe a qué comercial de Aliyun (阿里云) llamar.',
      },
      {
        question: '¿Ofrecen pagos fraccionados?',
        answer: 'Sí, en los proyectos grandes. Lo habitual es pagar en tres veces: al empezar, a mitad de camino y en el lanzamiento. Cuando el encargo es muy grande, pasamos a pagos mensuales por hitos. Lo que no hacemos es trabajar a cambio de participación en el capital.',
      },
      {
        question: '¿Qué NO está incluido en el precio del proyecto?',
        answer: 'Hay varios conceptos que van aparte. Las tasas administrativas del ICP son bajas, pero se facturan por separado, igual que la redacción profesional en chino, que se cobra solo si la pide. Si opta por extensiones comerciales, corren de su cuenta las licencias de los bancos de imágenes y de los plugins de pago. Y los servicios de terceros, como el alojamiento, los paga usted directamente al proveedor. La propuesta lo deja todo detallado.',
      },
      {
        question: '¿Hay costes ocultos que debamos conocer?',
        answer: 'Hay dos, sobre todo. El ICP (互联网内容提供商) se renueva cada dos o tres años; es un gasto pequeño, pero hay que contar con él. Y el SEO en Baidu (百度) es un trabajo continuo: para aparecer en las búsquedas competitivas hay que dedicarle horas mes tras mes. Planteamos los dos puntos en la primera llamada, así la conversación sobre el presupuesto queda clara desde el principio.',
      },
      {
        question: '¿Cobran las propuestas?',
        answer: 'No, la propuesta y la auditoría no cuestan nada. Las redactamos con detalle porque las dos partes tienen que saber con exactitud qué se va a construir. Y si se lleva esa propuesta para pedir precio en otra agencia, tampoco le cobramos nada.',
      },
      {
        question: '¿Podemos empezar con poco y crecer después?',
        answer: 'Sí; es más, suele ser lo que recomendamos. La primera fase publica lo esencial. La segunda añade el SEO en Baidu (百度) a fondo, la optimización GEO para China y la creación de contenido, y la tercera abre el comercio electrónico o las funciones más complejas. Avanzar por fases reparte el gasto en el tiempo y permite comprobar cada paso antes de dar el siguiente.',
      },
    ],
  },
  {
    title: 'Licencia ICP y marco legal',
    shortTitle: 'ICP y legal',
    icon: 'shield',
    items: [
      {
        question: '¿Qué es exactamente la licencia ICP? ¿Es realmente obligatoria?',
        answer: 'Sí, y no hay atajo posible. ICP (互联网内容提供商) significa Internet Content Provider: es el permiso que concede el Ministerio de Industria y Tecnología de la Información (工业和信息化部), y la ley lo exige a cualquier sitio alojado en el continente. Hay dos tipos: el Bei\'an (备案), para sitios informativos, y el Jing Ying (经营许可证), para los que venden en línea. Del expediente nos encargamos nosotros, de principio a fin.',
      },
      {
        question: '¿Y si todavía no tenemos una entidad china?',
        answer: 'Ahí el ICP (互联网内容提供商) se complica. Caben dos opciones: constituir una WFOE (外商独资企业), la sociedad de capital extranjero, o apoyarse en una entidad china que avale la solicitud. Hemos acompañado a clientes por las dos vías. Si no tiene entidad y prefiere no crearla, el alojamiento continental queda descartado y Hong Kong (香港) pasa a ser una alternativa razonable.',
      },
      {
        question: '¿Cuánto tarda realmente la tramitación del ICP?',
        answer: 'El Bei\'an (备案) suele tardar entre dos y cuatro semanas; el Jing Ying (经营许可证), de dos a tres meses, a veces más. Todo depende de una cosa: lo completo que esté su expediente. Por eso le pasamos una lista de comprobación en la primera semana, para que el papeleo no frene el resto del proyecto.',
      },
      {
        question: '¿Cómo gestionan la residencia de los datos y el cumplimiento de la PIPL?',
        answer: 'Por norma general, los datos generados en China tienen que quedarse en China, y diseñamos la arquitectura contando con ese límite desde el primer día. Si su proyecto maneja datos personales, repasamos con usted lo que implica la PIPL (个人信息保护法). Hemos visto decenas de casos junto a abogados, y eso nos da criterio para movernos en las zonas grises de la norma.',
      },
      {
        question: '¿Qué pasa si rechazan nuestra solicitud de ICP?',
        answer: 'Pasa de vez en cuando, casi siempre porque falta documentación. Cuando ocurre, volvemos a presentar la solicitud sin coste adicional. El único caso sin salida es el de una sociedad cuya estructura no cumple los requisitos básicos, y eso lo detectamos en la primera semana, no en la cuarta.',
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
        answer: 'Nuestro lanzamiento más rápido fueron tres semanas, para una página de aterrizaje y con la licencia ICP (互联网内容提供商) ya concedida. Para un sitio completo, lo realista son entre ocho y doce semanas, con la tramitación del ICP incluida. Y si se parte de cero, con la entidad china todavía por crear, habrá que añadir otras cuatro a seis semanas.',
      },
      {
        question: '¿Cómo es el calendario de un proyecto típico?',
        answer: 'El proyecto avanza por etapas. Las dos primeras semanas son para la auditoría y la definición del proyecto; de la tercera a la sexta tramitamos el ICP (互联网内容提供商) mientras avanzan el diseño y la preparación técnica. De la séptima a la décima abordamos el desarrollo, la carga de contenidos y las pruebas, y las dos últimas quedan para el entorno de pruebas, las correcciones y el lanzamiento. A partir de ahí empieza el mantenimiento, y el calendario detallado va en la propuesta.',
      },
      {
        question: '¿Qué es lo que más retrasa los proyectos?',
        answer: 'El retraso más habitual lo provoca la documentación del ICP (互联网内容提供商) que tiene que aportar el cliente. La pedimos en la primera semana y, a veces, no llega hasta la cuarta. El otro gran freno es el contenido: casi todo el mundo subestima el tiempo que lleva una buena redacción en chino, pensada para ese lector desde el primer borrador.',
      },
      {
        question: '¿Con qué frecuencia tendremos noticias suyas durante el proyecto?',
        answer: 'Tendrá noticias nuestras a menudo. Cada semana hacemos una videollamada de seguimiento, cada lunes le llega un informe por escrito y para el día a día abrimos un canal de WeChat (微信). Además, tiene acceso permanente a nuestro panel del proyecto, así que en cualquier momento sabe por dónde va el trabajo.',
      },
      {
        question: '¿Con quién hablamos dentro de su equipo?',
        answer: 'Un jefe de proyecto lleva su cuenta de principio a fin y, según la fase, va sumando a nuestros especialistas en diseño, desarrollo, SEO, contenido o alojamiento. Usted no tiene que explicar su negocio una y otra vez a media docena de interlocutores.',
      },
      {
        question: '¿Podemos participar en el diseño?',
        answer: 'Sí. Si su equipo prefiere comentar sobre el propio diseño, le damos acceso a Figma. Hay clientes que entran en cada detalle y otros que delegan por completo, y las dos maneras de trabajar nos funcionan.',
      },
      {
        question: '¿Qué ocurre si nos retrasamos por nuestra parte?',
        answer: 'Entonces nosotros también paramos. Ese tiempo de espera no se lo cobramos, y retomamos en cuanto usted esté listo. Si la pausa supera los sesenta días, revisamos el alcance: en China los precios y la disponibilidad del equipo cambian deprisa.',
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
        answer: 'La oficina principal está en Shanghái (上海), y parte del equipo trabaja desde Hangzhou (杭州) y Shenzhen (深圳). Estar físicamente en China cambia las cosas: agiliza los trámites del ICP (互联网内容提供商) y el trato con los proveedores de alojamiento, y nos mantiene al día de cómo funciona internet aquí.',
      },
      {
        question: '¿Hay personas no chinas en el equipo?',
        answer: 'Sí. El fundador es europeo y buena parte del equipo es bilingüe, algunos hablan tres idiomas. Los jefes de proyecto que llevan cuentas internacionales manejan el inglés con soltura profesional, y dentro del equipo pasamos del inglés al chino sin esfuerzo.',
      },
      {
        question: '¿En qué huso horario trabajan? ¿Cómo funciona para clientes en Europa o América?',
        answer: 'Trabajamos en hora de China (中国标准时间, UTC+8). Con Europa la jornada coincide durante buena parte del día; con América programamos las llamadas a primera o a última hora del día chino y el equipo se amolda. Las franjas horarias más lejanas requieren algo más de coordinación, pero los hitos del proyecto salen adelante sin problema.',
      },
      {
        question: '¿Podemos visitar su oficina?',
        answer: 'Por supuesto, recibimos clientes en Shanghái (上海) a menudo. Si viaja a China, le organizamos una sesión de trabajo y una cena, y le presentamos a las personas que llevan su proyecto. Conocer al equipo en persona cambia mucho la relación.',
      },
      {
        question: '¿Se desplazan a las oficinas de sus clientes?',
        answer: 'Sí, a partir de cierto tamaño de proyecto, y entonces la reunión inicial presencial va incluida. En los proyectos más pequeños, el trabajo a distancia da muy buen resultado. Llevamos años gestionando sitios de clientes a los que no hemos visto nunca en persona.',
      },
      {
        question: '¿En qué idiomas se comunican?',
        answer: 'Con los clientes internacionales hablamos español e inglés. El mandarín (普通话) lo usamos dentro del equipo y con los proveedores chinos, las empresas de alojamiento y la Administración. Si en su equipo hay quien habla chino, alternamos los idiomas sin problema, y WeChat (微信) funciona igual de bien en cualquiera de ellos.',
      },
      {
        question: '¿Usan WeChat para hablar con los clientes?',
        answer: 'Sí. Para la mayoría de los clientes WeChat (微信) es el canal más cómodo, aunque el correo electrónico también vale, según lo que prefiera su equipo. Nos adaptamos a las herramientas que usted ya usa.',
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
        answer: 'El contrato recoge el alcance, los entregables, el calendario y el plan de pagos, además de la propiedad intelectual, la confidencialidad, las cláusulas de rescisión y el soporte posterior al lanzamiento. Es un contrato de prestación de servicios estándar, sujeto a la ley que acordemos entre los dos; la mayoría de los clientes internacionales se decanta por el derecho de Hong Kong (香港) o de Singapur (新加坡). Y todo es negociable.',
      },
      {
        question: '¿Quién es propietario del código y del contenido tras el lanzamiento?',
        answer: 'El propietario es usted. Le pasamos todos los activos sin excepción: el código fuente, los archivos de diseño, los contenidos y las claves de alojamiento. Solo nos reservamos el derecho a mencionar el proyecto, de forma anónima, en nuestra cartera de trabajos; si prefiere que no lo hagamos, basta con que lo diga.',
      },
      {
        question: '¿Y si queremos marcharnos a mitad del proyecto?',
        answer: 'El contrato detalla con claridad las cláusulas de rescisión. Usted paga el trabajo hecho hasta esa fecha y le entregamos todo el material en un formato que pueda usar. Nunca retenemos un proyecto. En la práctica no hemos tenido que aplicar nunca esa cláusula: los clientes no se marchan a mitad de camino.',
      },
      {
        question: '¿Firman acuerdos de confidencialidad?',
        answer: 'Sí, antes de intercambiar cualquier detalle técnico o comercial. El acuerdo de confidencialidad mutuo es la norma en todos nuestros proyectos, y si su empresa no tiene un modelo propio, le pasamos el nuestro.',
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
        answer: 'Depende de su equipo y de cómo gestione el contenido. WordPress encaja cuando marketing necesita actualizar el sitio a diario sin pasar por un desarrollador; Astro es la opción cuando el rendimiento es lo primero y hay soporte técnico disponible. Trabajamos con los dos, e incluso los combinamos: el sitio de marketing sobre una tecnología y la tienda sobre otra.',
      },
      {
        question: '¿Pueden trabajar con nuestra tecnología actual?',
        answer: 'Por lo general, no. No forzamos tecnologías occidentales para que funcionen detrás del Gran Cortafuegos; hemos visto fracasar demasiados proyectos así a los seis meses. Preferimos herramientas chinas, pensadas para funcionar en el país: Aliyun (阿里云), Tencent Cloud (腾讯云), Baidu Tongji (百度统计), WeChat (微信) o las plataformas de IA locales. Aquí el ecosistema y las normas cambian sin parar, y mantener su tecnología global a base de parches acaba costando más que rehacer el sitio desde cero.',
      },
      {
        question: '¿Por qué no usar un creador de sitios SaaS occidental para China?',
        answer: 'Porque dentro de China rinden mal. La mayoría están bloqueados en parte o muy limitados, y ninguno ofrece alojamiento compatible con el ICP en el continente. Hemos tenido que migrar a varios clientes desde esas plataformas porque sus sitios chinos resultaban inservibles, así que solo construimos sobre herramientas que responden bien dentro del Cortafuegos.',
      },
      {
        question: '¿Construyen también aplicaciones móviles?',
        answer: 'No. Nos centramos en el desarrollo web, en los miniprogramas de WeChat (微信小程序) y en los Baidu Smart Mini Programs (智能小程序). Para las aplicaciones nativas de iOS y Android trabajamos con socios especializados en Shenzhen (深圳).',
      },
      {
        question: '¿Pueden integrar WeChat?',
        answer: 'Sí. Hacemos inicio de sesión con WeChat (微信), función de compartir, miniprogramas y pagos. Llevamos hechas decenas de integraciones con WeChat y conocemos a fondo los puntos delicados de su API; lo mismo vale para Alipay (支付宝) y UnionPay (银联).',
      },
      {
        question: '¿Y la IA y los chatbots en nuestro sitio chino?',
        answer: 'Integramos las plataformas de IA chinas: DeepSeek (深度求索), Doubao (豆包), Kimi, Yuanbao (元宝) y Baidu AI (百度AI). Las herramientas de IA occidentales suelen estar bloqueadas, o responden de forma poco fiable desde el continente, así que no son una opción real. Si alguien le ha dicho lo contrario, le explicamos en detalle qué funciona aquí y qué no.',
      },
      {
        question: '¿Funcionará en China nuestro sitio WordPress con Elementor?',
        answer: 'Tal cual está, probablemente no, pero en la mayoría de los casos se puede adaptar. Quitamos las dependencias de Google, cambiamos las tipografías y redirigimos las integraciones externas. Casi todos los sitios con Elementor que recibimos acaban funcionando bien detrás del Cortafuegos en unas pocas semanas.',
      },
      {
        question: '¿Y las actualizaciones automáticas de plugins desde wordpress.org?',
        answer: 'Desde dentro de China fallan o se cuelgan a menudo. Para evitarlo, encaminamos las actualizaciones por un proxy o fijamos ventanas de actualización manual. En cualquier caso, su equipo no tiene que ocuparse de esto.',
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
        answer: 'Cambia casi todo. Baidu (百度) da prioridad a los sitios alojados en el continente y mide la calidad del contenido chino con criterios propios. Tiene su Search Resource Platform (百度搜索资源平台) para enviar las páginas a indexación, lee las etiquetas meta de otra manera y posiciona según señales que Google ni se plantea. Optimizar para un buscador no le sirve para el otro.',
      },
      {
        question: '¿Garantizan posiciones en Baidu?',
        answer: 'No, y desconfíe de quien lo prometa. Lo que sí garantizamos es el método: una configuración de Baidu (百度) acorde con las buenas prácticas, el envío a la Baidu Search Resource Platform (百度搜索资源平台), la optimización técnica y los datos estructurados. La posición final ya depende de la competencia, del contenido y del tiempo, y cada mes recibe un informe con la evolución.',
      },
      {
        question: '¿Qué es el GEO para China y lo necesitamos?',
        answer: 'GEO son las siglas de Generative Engine Optimisation: optimizar para las IA de búsqueda chinas, como DeepSeek (深度求索), Doubao (豆包), Kimi, Yuanbao (元宝) o Baidu AI (百度AI). Cada vez más internautas chinos empiezan ahí su búsqueda, antes incluso que en Baidu (百度). Si en esas respuestas aparecen sus competidores y usted no, está cediéndoles tráfico cualificado.',
      },
      {
        question: '¿Cuánto tardaremos en ver tráfico de Baidu tras el lanzamiento?',
        answer: 'Con una buena configuración de SEO, la indexación suele empezar entre dos y cuatro semanas después de enviar las páginas a la Baidu Search Resource Platform (百度搜索资源平台). Posicionarse con solidez en palabras clave competitivas lleva, como mínimo, de tres a seis meses. Quien le prometa plazos más cortos no le está diciendo la verdad.',
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
        answer: 'Las dos opciones funcionan. Tenemos redactores chinos en plantilla y colaboradores de confianza que escriben para el público chino en lugar de limitarse a traducir. Si ya trabaja con una empresa de traducción, partimos de su material, aunque le señalaremos los párrafos que suenan a texto traducido.',
      },
      {
        question: '¿Cuál es la diferencia entre traducción y localización?',
        answer: 'La traducción pasa las mismas palabras al chino. La localización reescribe el contenido para ese público: su plataforma, sus referencias culturales y las búsquedas tal como las teclea el internauta chino. Un sitio traducido suena a extranjero; un sitio localizado se lee como propio.',
      },
      {
        question: '¿Debemos usar chino simplificado o tradicional?',
        answer: 'La China continental usa el chino simplificado (简体中文); Hong Kong (香港) y Taiwán (台湾), el tradicional (繁體中文). Si se dirige a los dos mercados, mantenemos versiones separadas. Mezclar los dos sistemas en un mismo sitio le resta credibilidad sin remedio.',
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
        answer: 'Un sitio lento que migramos a Aliyun (阿里云) suele pasar de doce o quince segundos de carga a menos de dos. Un desarrollo nuevo carga en menos de un segundo desde el continente. Y la indexación en Baidu (百度), con el SEO bien configurado, suele empezar entre dos y cuatro semanas después del lanzamiento.',
      },
      {
        question: '¿Cómo miden el éxito de un proyecto en China?',
        answer: 'Depende del tipo de proyecto. En la captación de contactos cuentan los formularios enviados y las conversiones que registra Baidu Tongji (百度统计); en una tienda, la facturación y el porcentaje de carritos que se completan; en un sitio de marca, el tiempo de permanencia, las visitas que repiten y el tráfico orgánico. Fijamos los indicadores al empezar el proyecto y le enviamos un informe cada mes.',
      },
      {
        question: '¿Y si el sitio rinde por debajo de lo esperado tras el lanzamiento?',
        answer: 'Lo primero es un diagnóstico. La causa suele ser técnica o editorial, o responde a un desajuste con lo que espera el internauta chino. Los fallos los corregimos sin coste, porque entran en el proyecto; las mejoras de mayor calado, las reescrituras y el SEO a fondo se cubren con la cuota de mantenimiento.',
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
        answer: 'Después del lanzamiento, la mayoría de los clientes sigue con nosotros en mantenimiento, y algunos llevan ya muchos años. No usamos ese dato como reclamo de marketing, pero es alto. El alojamiento chino y la renovación del ICP (互联网内容提供商) exigen un soporte local constante, así que la relación se mantiene de forma natural.',
      },
      {
        question: '¿Podemos contar con ustedes para el desarrollo continuo después del lanzamiento?',
        answer: 'Sí. Después del lanzamiento seguimos con horas de desarrollo por cuota, producción de contenido, SEO, optimización GEO para China y gestión del alojamiento. La mayoría de los clientes acaba en una cuota mensual: cubre el mantenimiento y deja una bolsa de horas de desarrollo para lo que vaya surgiendo.',
      },
      {
        question: '¿Y si queremos internalizarlo con el tiempo?',
        answer: 'No hay problema, le acompañamos en el cambio. Hemos formado a equipos de clientes para que se encarguen ellos mismos de las actualizaciones de contenido, del desarrollo sencillo y del SEO en Baidu (百度). Les dejamos la documentación, organizamos el traspaso y seguimos a su disposición para lo más complejo, así que el relevo se hace sin sobresaltos.',
      },
      {
        question: '¿Ofrecen formación para nuestro equipo interno?',
        answer: 'Sí. Damos formación en WordPress y en Baidu Tongji (百度统计), en el manejo de la Baidu Search Resource Platform (百度搜索资源平台) y en el día a día editorial. Puede ser a distancia o presencial, si su equipo está en China, y el formato va desde unas horas hasta talleres de varios días, según lo que haga falta.',
      },
    ],
  },
  {
    title: 'Objeciones frecuentes y casos particulares',
    shortTitle: 'Casos límite',
    icon: 'spark-question',
    items: [
      {
        question: 'Ya trabajamos con una agencia digital global. ¿Por qué recurrir también a ustedes?',
        answer: 'Porque su agencia global no puede tramitar un ICP (互联网内容提供商), no tiene acuerdos de alojamiento en China y no conoce Baidu (百度) como lo conocemos nosotros. La mayoría de nuestros clientes mantiene a su agencia de siempre para el trabajo internacional y nos deja a nosotros la parte china. Colaboramos con agencias globales a menudo, y sin conflictos.',
      },
      {
        question: 'Nuestro departamento de TI cree que puede gestionarlo internamente. ¿Qué les decimos?',
        answer: 'Un departamento de TI puede hacerlo, sin duda. Eso sí, tendrá que dedicar cerca de un año a aprender la normativa, a establecer la relación con los proveedores de alojamiento y a dominar la Baidu Search Resource Platform (百度搜索资源平台). La mayoría de los equipos internos se da cuenta pronto de que ese aprendizaje no es su prioridad para el año, y ahí solemos entrar nosotros.',
      },
      {
        question: '¿Y si nuestra empresa opera en un sector sensible a nivel político o regulatorio?',
        answer: 'Hemos trabajado con clientes de sectores regulados, desde la sanidad hasta tecnologías próximas a la defensa, y no aceptamos cualquier proyecto. Si en su sector hay cuestiones de cumplimiento que vuelven arriesgada una presencia web en China, se lo decimos desde el primer día y le sugerimos hablar antes con un asesor jurídico. Conviene saberlo cuanto antes.',
      },
    ],
  },
];
