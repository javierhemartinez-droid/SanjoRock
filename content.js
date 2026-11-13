/* ==========================================================================
   SANJO ROCK — CONTENIDO DEL SITIO
   Todo lo que se muestra en la web se edita acá. No hace falta tocar el HTML.
   ========================================================================== */

window.SANJO = {

  /* ---------- Evento ---------- */
  event: {
    name: 'Sanjo Rock 2026',
    start: '2026-11-14T20:00:00-03:00',   // inicio (la cuenta regresiva se ajusta sola)
    endsAfterHours: 12,                    // pasado este tiempo, la portada muestra "Estuve"
    dateLabel: '14 de noviembre',
    doors: '19 h',                         // apertura del predio
    timeLabel: '20 horas',                 // inicio de las bandas
    timeNote: 'Bandas en vivo',
    place: 'Predio Multieventos',
    city: 'San José, Entre Ríos',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Predio+Multieventos+San+Jos%C3%A9+Entre+R%C3%ADos',
    since: 'Desde 2000',
    heroWords: ['Festival de Rock', 'de autogestión', 'gracias por ser parte'],   // frases que van rotando detrás del logo
    tagline: '26 años de distorsión autóctona',
    entry: 'Entrada libre y gratuita',
    donation: 'Colaborá con un alimento no perecedero para HODIMA y Nacer al Sol',
    recognition: 'Declarado de Interés Municipal',
    recognitionPost: "sanjo-rock-2026-fue-declarado-de-interes-municipal",
    features: [
      'Bandas locales y de la zona',
      'Stands de artesanos',
      'Emprendedores',
      'Gastronomía'
    ]
  },

  intro: 'Historia, novedades y todo lo que va pasando en el camino de vuelta del festival.',

  /* ---------- Fechas ----------
     La próxima fecha que no haya pasado se marca sola como "Próxima fecha".
     "post" (opcional) enlaza a una nota del blog. */
  events: [
      {
        name: "Pre Sanjo Rock",
        date: "2026-09-26",
        place: "Centro Cultural La Botica",
        note: "Con Inmoral, Perros Sin Correa y Rocío Brutomeza",
        post: "el-pre-sanjo-rock-fue-un-exito"
      },
      {
        name: "Sanjo Rock 2026",
        date: "2026-11-14",
        place: "Predio Multieventos, San José",
        note: "Entrada libre y gratuita"
      }
    ],

  /* ---------- Redes ---------- */
  social: {
    instagram: { handle: '@sanjorockoficial', url: 'https://www.instagram.com/sanjorockoficial' },
    youtube:   { handle: 'YouTube',            url: 'https://youtube.com/@sanjorockoficial' },
    facebook:  { handle: 'Facebook',           url: 'https://www.facebook.com/profile.php?id=100067201309118' }
  },

  /* ---------- Line up ----------
     Para sumar una banda: subí su logo (PNG transparente, en blanco o claro) a assets/logos/
     y agregá una línea. "time" es opcional (horario). "featured: true" la destaca a lo ancho.
     "post" (opcional) abre la nota de esa banda.
     "video" (opcional) es el nombre del archivo, sin extensión, dentro de la carpeta videos.folder. */
  videos: { folder: 'videos_bandas', ext: 'mp4' },   // carpeta en el servidor y extensión de los videos

  lineup: [
    { name: 'Subatómica',              logo: 'assets/logos/subatomica.png',   time: '', video: 'Subatómica Sanjo Rock' },
    { name: 'Encadenados',             logo: 'assets/logos/encadenados.png',  time: '', video: 'Encadenados Sanjo Rock' },
    { name: 'Malevo y Los Villamayor', logo: 'assets/logos/malevo.png',       time: '', video: 'Malevo Sanjo Rock' },
    { name: 'Un Zahir',                logo: 'assets/logos/un-zahir.png',     time: '', video: 'Un Zahir Sanjo Rock' },
    { name: 'T3RNO',                   logo: 'assets/logos/terno.png',        time: '', video: 'T3rno Sanjo Rock' },
    { name: 'Mala Tempora',            logo: 'assets/logos/mala-tempora.png', time: '', video: 'Mala Tempora Sanjo Rock' },
    { name: 'Chakota',                 logo: 'assets/logos/chakota.png',      time: '', video: 'Chacota Sanjo Rock', featured: true, note: '30 años', post: "chakota-30-anos-de-punk-rock-ininterrumpido" }
  ],

  /* ---------- Notas del blog ----------
     Para agregar una nota, copiá un bloque { ... } y sumalo al principio de la lista.
     cat: 'Historia' | 'Novedades' | 'Bandas'   ·   date: 'AAAA-MM-DD'
     cover: imagen principal (opcional)
     body: lista de bloques. Un texto es un párrafo; admite *cursiva*, **negrita** y [texto](https://enlace).
           Un párrafo que es solo **negrita** funciona como subtítulo.
           { img: 'assets/img/foto.jpg', alt: 'descripción', max: 300 } inserta una imagen (max en px, opcional). */
  categories: ['Historia', 'Novedades', 'Bandas'],

  posts: [
      {
        id: "la-historia-de-bacteria-en-el-adn-del-sanjo-rock",
        cat: "Historia",
        date: "2026-11-06",
        title: "La historia de Bacteria en el ADN del Sanjo Rock",
        cover: "assets/img/bacteria-formacion-actual.jpg",
        excerpt: "Nacida en San José el 5 de octubre de 1997, Bacteria debutó en el primer Sanjo Rock y volvió a juntarse en 2025 por sus 28 años.",
        body: [
          "Hay bandas que no solo hacen canciones; construyen el pulso y la identidad cultural de una comunidad. En la historia del rock pesado de nuestra región, Bacteria ocupa un lugar fundacional. Nacidos en San José, Entre Ríos, un 5 de octubre de 1997, este proyecto de heavy y thrash metal comenzó a gestarse desde la urgencia y la autogestión pura.",
          "En sus inicios, la formación original reunía a Martín Fernández en la batería, Sergio Muñoz en el bajo y Carlos Orcellet (“Gallo”) en guitarra y voz. Con la honestidad brutal de quienes recién empiezan y sin la técnica pulida para hacer covers de sus bandas preferidas, eligieron el camino más difícil y hermoso: componer sus propios temas desde el día uno. De aquellas zapadas tempranas nació “Sangre en los rostros”, una letra de Martín inspirada en una anécdota tan cruda como local —una golpiza que recibió Gallo—, aunque ironías del destino, ese primer track jamás llegó a sonar en vivo.",
          {
            img: "assets/img/bacteria-formacion-inicial.jpg",
            alt: "Bacteria, formación inicial: Gallo, Martín y Sergio"
          },
          "*La formación inicial: Gallo, Martín y Sergio.*",
          "El bautismo de fuego sobre los escenarios llegó el 29 de julio de 2000, nada menos que en el festival Sanjo Rock, compartiendo cartel con siete bandas de diferentes estilos y ciudades. Ese fue el puntapié inicial para salir a rodar por distintos puntos de la zona.",
          "Como toda gran hermandad del rock, el camino estuvo marcado por idas, venidas y búsqueda sónica. Tras probar brevemente con Silvio Pralong (“Colo”), la banda se consolidó momentáneamente como trío para grabar cuatro temas esenciales en el histórico compilado SANJOROCK (“Mi cuerpo muerto”, “Es para vos”, “Tierra enferma” y “Buscando la felicidad”). Más tarde sumaron a Matías Granton en guitarra —con quien pararon un año los shows para componer y participar del compilado Entre Ríos al Palo—, hasta la llegada definitiva de Fabio Acosta en las seis cuerdas. Ante la salida de Sergio por motivos personales, el bajo quedó en manos de Lucas Delaloye (“Sonik”), amigo de la casa y ex asistente de batería, moldeando la formación que consolidó su identidad definitiva.",
          "*En la foto principal: Sonik, Gallo, Martín y Fabio.*",
          "**El gran reencuentro: 28 años de historia**",
          "Los años pasan, los proyectos mutan y las rutas se ramifican, pero las raíces pesadas nunca se rompen. Y así como el metal deja marcas imborrables en quienes lo ejecutan y lo sienten, la historia de Bacteria merecía un punto de inflexión a la altura de su legado.",
          "En 2025, los miembros originales de Bacteria se volvieron a juntar por única vez. No fue solo un reencuentro musical, fue un ritual de celebración por los 28 años de la banda. Dieron así el cierre definitivo a esta historia, rodeados de amigos, de viejos acordes y de esa mística inconfundible que solo el under sabe parir y proteger. Porque bandas como Bacteria no se apagan nunca: quedan vibrando para siempre en la memoria del Sanjo Rock y en el corazón de nuestra cultura.",
          {
            img: "assets/img/bacteria-2025.jpg",
            alt: "Bacteria en 2025: Gallo, Martín y Sergio"
          },
          "*Bacteria en 2025: Gallo, Martín y Sergio.*"
        ]
      },
      {
        id: "chakota-30-anos-de-punk-rock-ininterrumpido",
        cat: "Bandas",
        date: "2026-10-30",
        title: "Chakota: 30 años de punk rock ininterrumpido",
        cover: "assets/img/chakota-banda.jpg",
        excerpt: "La banda de Concepción del Uruguay, formada en 1996, sube al escenario del Sanjo Rock el 14 de noviembre.",
        body: [
          "Una de las bandas del line up del Sanjo Rock 2026 es Chakota, de Concepción del Uruguay, Entre Ríos. Nació en 1996 y desde sus inicios tiene un estilo propio: punk rock con influencias del punk de los años 80 y 90, que en algunas canciones se fusiona con reggae, ska y metal.",
          {
            img: "assets/img/chakota-30-anos-logo.jpg",
            alt: "Chakota, 30 años, desde 1996",
            max: 300
          },
          "Este 2026 festejan 30 años de carrera musical ininterrumpida, recorrida gracias a la autogestión y la persistencia. Compartieron escenario con bandas nacionales e internacionales, hicieron intercambios de fechas y llevaron su material discográfico por toda Latinoamérica. Hoy están componiendo canciones nuevas que siguen reflejando lo cotidiano, las historias de los pueblos, su cultura, su política y el amor.",
          "Chakota son José Luis Martínez (voz), Cristian Goñi (batería), Claudio Briozzo (bajo y coros), Alán Leturia (guitarra y coros) y Luciano Leturia (guitarra y coros). Sus géneros: punk rock, punk pesado argentino, reggae y hardcore.",
          "Discografía: Haciendo ruido (1996), Familia de amistades (2001), Bienvenido amigo (2004), Katador de sueños (2010), Solo sonrisas (2014), Un largo viaje (2016), Séptimo (2018) y Singles punkdémicos (2021).",
          "Seguilos en [Instagram](https://www.instagram.com/chakota_punkrock/), [Facebook](https://m.facebook.com/chakotapunkrock/), [YouTube](https://www.youtube.com/channel/UCrxSMHQMXesZipQ2jOajiPg) y [Spotify](https://open.spotify.com/artist/7CSaDWFwHYWUCAMwLSd7IX)."
        ]
      },
      {
        id: "recuerdos-asi-se-vivio-la-primera-edicion-julio-del-2000",
        cat: "Historia",
        date: "2026-10-30",
        title: "Recuerdos: así se vivió la primera edición, julio del 2000",
        cover: "assets/img/recuerdos-primera-edicion-observador-2000.jpg",
        excerpt: "El diario El Observador Regional tituló: “El primer Sanjo-Rock fue un verdadero golazo”.",
        body: [
          "Encontramos esta nota de El Observador Regional, publicada el 31 de julio de 2000, con la crónica de la primera edición del Sanjo-Rock, realizada en el Centro de Jubilados y Pensionados Nacionales de San José.",
          "Según el diario, durante más de seis horas siete bandas y una batucada brindaron una verdadera fiesta musical para más de 400 personas, sin ningún problema y con el rock, el pop, el blues, el punk y el metal conviviendo en el mismo escenario. La locución estuvo a cargo de Pedrito Bosqui (Jr.).",
          "Abrieron Los Gusanos Salvajes, de Liebig, con una buena cuota de blues. Siguieron un grupo de músicos colonenses liderado por Silvio “Chueco” Aquino, con “Yari” Morel y los hermanos Pancho y Facundo Rodríguez; Exodo, también de Colón, con su homenaje a “Leña Verde”; y la batucada Los Hechiceros. Después llegó Actitud Sospechosa, con Darío Ledesma, Federico Jaquet y los hermanos Diego y Javier Martínez, que repasó desde Soda Stereo hasta Todos Tus Muertos, pasando por Las Pelotas, Los Brujos y La Renga.",
          "Más tarde tocaron Los Hermanos Fussier, un trío de Villa Elisa, y Sida-Punk, de Buenos Aires, los únicos “forasteros” de la noche. El cierre fue para Bacteria, la banda local de trash metal. También se repartió gratis el fanzine “La Peste”.",
          "La nota termina contando que la satisfacción de los organizadores era grande y que ya se pensaba repetir la experiencia, probablemente en el verano. Y así fue: la segunda edición llegó en enero de 2001."
        ]
      },
      {
        id: "sanjo-rock-2026-fue-declarado-de-interes-municipal",
        cat: "Novedades",
        date: "2026-10-23",
        title: "¡Sanjo Rock 2026 fue declarado de Interés Municipal!",
        excerpt: "El Honorable Concejo Deliberante de San José sancionó la Resolución 16/2026 que declara de Interés Municipal la realización del festival.",
        body: [
          "El martes 20 de octubre, a las 9 de la mañana, en la Sala de Sesiones «Alejo Peyret», se llevó a cabo la 16.ª Sesión Ordinaria del Honorable Concejo Deliberante de la ciudad de San José.",
          "Entre las normativas sancionadas por los ediles, la Resolución 16/2026 declara de Interés Municipal la realización del Sanjo Rock 2026.",
          "Un reconocimiento muy importante para un festival que nació en San José en el año 2000 y que vuelve el 14 de noviembre. ¡Gracias a todos los que acompañaron este camino!"
        ]
      },
      {
        id: "el-sanjo-rock-tambien-es-solidaridad",
        cat: "Novedades",
        date: "2026-10-23",
        title: "El Sanjo Rock también es solidaridad",
        excerpt: "El 14 de noviembre vamos a colectar alimentos no perecederos para HODIMA y Nacer al Sol.",
        body: [
          "Durante el evento vamos a estar colectando alimentos no perecederos que serán destinados a dos grandes instituciones de nuestra comunidad: HODIMA y Nacer al Sol.",
          "¿Con qué podés colaborar? Con arroz, fideos, leche en polvo, legumbres, aceite, conservas o cualquier alimento no perecedero.",
          "Sumá tu granito de arena. ¡Vení a disfrutar del rock y traé tu donación! Entre todos hacemos la diferencia."
        ]
      },
      {
        id: "un-ambiente-festivo-y-familiar",
        cat: "Historia",
        date: "2026-10-23",
        title: "Un ambiente festivo y familiar",
        excerpt: "Una editorial de Diego Damián Martínez sobre el Sanjo Rock como fiesta intergeneracional, de géneros mezclados y para todos los públicos.",
        body: [
          "El SANJO ROCK es uno de los ambientes más festivos, familiares y de encuentro entre amigos que se puede encontrar en la zona.",
          "Es una fiesta intergeneracional y muy familiar. De siempre ha sido así. Muchos familiares de los organizadores han estado participando ya sea echando una mano en la barra, o en el cobro de entradas o poniendo la casa para las reuniones cuando todavía éramos unos gurises y no teníamos casa propia.",
          "Además, nunca ha sido nada raro contar con niños y niñas entre el público, o adolescentes que recién comenzaban la secundaria. Hijos, sobrinos, primos o “conocido de”…",
          "También hubo un momento en que con la banda Nervios, en la edición 2006, habíamos invitado a subir al escenario a Lucho Alcoba cuando tendría unos diez años aproximadamente a tocar un tema de Nirvana. No hay edad para el rocanrol.",
          "Salta a la vista que la convivencia en el SANJO es una de las características por la cual se vive el rock local y de la región como una fiesta para todos los públicos. Incluso, va gente que tal vez en su casa no te pone ni en pedo un disco de 2 minutos o de A.N.I.M.A.L., pero va a ver a su amigo golpear la batería o machacar la guitarra —porque si no estás en la onda, nadie sabe lo que es un bajo, lo ven como una guitarra grande—.",
          "Y ni hablar por supuesto de la confluencia de géneros en una sola noche: metal, punk, alternativo, reggae, rock barrial, entre otros, compartiendo el escenario sin ningún ánimo de competir o de profesar extrema religión de un solo estilo mientras se maldice al resto. Bob Marley y Ozzy codeados en la barra uno al lado del otro.",
          "Y en cuanto a lo intergeneracional, este año se da el caso que por primera vez un hijo de uno de los miembros fundadores sube al escenario con su propia banda. Javier y Simón Martínez, padre e hijo respectivamente. La banda: Subatómica. Un hecho que simboliza historia y legado, inicio y continuidad del rock de acá en general y del festival en particular.",
          "*— Diego Damián Martínez*"
        ]
      },
      {
        id: "pedimos-que-sanjo-rock-sea-declarado-de-interes-municipal",
        cat: "Novedades",
        date: "2026-10-16",
        title: "Pedimos que Sanjo Rock sea declarado de Interés Municipal",
        excerpt: "Presentamos una nota al Concejo Deliberante de San José para que el festival sea declarado de interés municipal.",
        body: [
          "Dimos un paso importante: se presentó una nota ante el Concejo Deliberante de San José solicitando que el festival Sanjo Rock sea declarado de interés municipal.",
          "Es un reconocimiento que buscamos para un festival que nació en San José en el año 2000 y que, 26 años después, sigue siendo un espacio para las bandas de la zona. Apenas haya novedades, las contamos acá."
        ]
      },
      {
        id: "haciamos-rock-y-queriamos-rockearla",
        cat: "Historia",
        date: "2026-10-16",
        title: "Hacíamos rock y queríamos rockearla",
        cover: "assets/img/actitud-sospechosa-primera-edicion.jpg",
        excerpt: "Una editorial de Diego Martínez, bajista de Actitud Sospechosa, sobre cómo nació el Sanjo Rock en el año 2000.",
        body: [
          "Si no tenés un espacio para tocar con tu banda de rock de temas propios, te lo inventás vos mismo. Ese sería el resumen del nacimiento del SANJO ROCK en el año 2000.",
          "Yo tocaba en ACTITUD SOSPECHOSA. Mis padres me regalaron un bajo para mi cumpleaños y en la primera edición del festival ya había cumplido 16. Y si bien hacíamos versiones de canciones más o menos conocidas, Darío Ledesma —cantante y guitarrista— traía sus composiciones para que entre todos le demos el toque final como banda.",
          "Una vez, llegó a casa con la guitarra. Desde mi habitación sabía que era él por el sonido de su Honda NX. Me mostró la letra y los acordes. Me dijo: “Quiero un título que no salga en la letra”. Me lo pensé un ratito y le respondí: “Nostalgia”.",
          "Luego, Federico Jaquet —teclados— y mi hermano Javier Martínez —batería— aportaron los ingredientes finales. Más adelante, se incorporaría Adriano Pigozzi en segunda guitarra.",
          "Nuestro “CBGB” fue Mama Cora. Nunca hemos esperado que nos llamen. Fuimos y generamos nuestro espacio. Y lo quisimos compartir. La primera banda hermana que tuvimos era también de San José y tocaban trash metal, un género muy diferente al nuestro pero eso nos daba igual: BACTERIA —integrada en aquel entonces por Carlos Gallito Orcellet, Martín Fernández y Sergio Muñoz—.",
          "Entre los dos grupos se iba generando una simbiosis que fue creciendo y expandiéndose, con amigos y amigas acompañándonos en cada tocada. Entre todos, músicos y compañeros de viaje, hicimos posible la primera edición del SANJO ROCK con colaboración del Centro de Jubilados y la Municipalidad local. El nombre surgió de un chiste —o no tanto— de Javier haciendo alusión al mítico festival BA ROCK. Una primera edición de la cual hay archivo en video gracias a PERIKA Producciones que acompañó la noche con sus cámaras.",
          "En paralelo, Diego Favre armó un proyecto que agregó valor a la movida: SONAR STUDIOS. Ahí mismo, muchos hemos podido grabar nuestras canciones y tener el lujo de que sonaran en las casas, radios y boliches. Por ejemplo, la canción Nostalgia ya no dependía de nosotros en vivo para poder ser escuchada y una noche Darío pidió entrar a Flamingo sin que le cobraran la entrada alegando que era el autor de la canción que justo en ese momento estaba sonando dentro de la discoteca. Y entró en su ley, sin sacar ningún billete de su bolsillo.",
          "**Lo nuestro**",
          "El ambiente estaba completo. Bandas hermanadas colaborando mutuamente, colaboración del estado municipal, amistades que se iban sumando, apoyo incondicional de las familias, prensa realizando la cobertura y público disfrutando de nuestras propias creaciones.",
          "No tuvimos que pedir permiso. No tuvimos que conformarnos con solamente hacer temas “conocidos” de otros. No hemos esperado la luz divina de nada ni ningún golpe de suerte. Hacíamos rock y queríamos rockearla, nada más.",
          "26 años después, el SANJO ROCK sigue siendo un espacio necesario. Y mientras haya al menos una banda de rock en San José o en la zona, así seguirá siendo.",
          "*— Diego Martínez, bajista de Actitud Sospechosa.*",
          "*En la foto, Actitud Sospechosa en la primera edición del festival. La banda: Darío Ledesma, Fede Jaquet, Adriano Pigozzi, Diego Martínez y Javier Martínez.*"
        ]
      },
      {
        id: "tenemos-el-line-up-completo",
        cat: "Bandas",
        date: "2026-10-09",
        title: "¡Tenemos el line up completo!",
        cover: "assets/img/tenemos-el-line-up-completo.jpg",
        excerpt: "Subatómica, Encadenados, Malevo y Los Villamayor, Un Zahir, T3RNO, Mala Tempora y Chakota, el sábado 14 de noviembre.",
        body: [
          "¡Ya tenemos el line up completo de Sanjo Rock 2026! El sábado 14 de noviembre, en el Predio Multieventos de San José, suben al escenario: Subatómica, Encadenados, Malevo y Los Villamayor, Un Zahir, T3RNO, Mala Tempora y Chakota.",
          "Como siempre, la entrada es libre y gratuita — te invitamos a colaborar con un alimento no perecedero. Este flyer lo hicimos junto a Barreta Producciones y la Municipalidad de San José. ¡Nos vemos ahí!"
        ]
      },
      {
        id: "recuerdos-la-segunda-edicion-verano-del-2001",
        cat: "Historia",
        date: "2026-10-07",
        title: "Recuerdos: la segunda edición, verano del 2001",
        cover: "assets/img/recuerdos-la-segunda-edicion-verano-del-.jpg",
        excerpt: "El diario El Observador Regional le dedicó una tapa al Sanjo-Rock. Llegaron 16 bandas de Entre Ríos y Capital Federal.",
        body: [
          "Encontramos este recorte del diario El Observador Regional, del viernes 5 de enero de 2001, anunciando la segunda edición del "Sanjo-Rock", realizada al día siguiente.",
          "Desde distintos lugares de Entre Ríos y de Capital Federal llegaron 16 bandas. El escenario se armó entre el Balneario y el Salvia, en San José, y la entrada fue gratuita — la misma esencia que seguimos defendiendo hoy, 25 años después.",
          {
            img: "assets/img/recuerdos-segunda-edicion-nota-completa.jpg",
            alt: "Nota completa de El Observador Regional, 2001"
          }
        ]
      },
      {
        id: "mas-recuerdos-ediciones-2004-y-2005",
        cat: "Historia",
        date: "2026-10-07",
        title: "Más recuerdos: ediciones 2004 y 2005",
        cover: "assets/img/mas-recuerdos-ediciones-2004-y-2005.jpg",
        excerpt: "Un flyer de la tercera edición (2004) y una credencial de músico del 2005 — parte del archivo que fuimos juntando.",
        body: [
          "Seguimos desempolvando el archivo. La tercera edición de Sanjo Rock se hizo el 17 y 18 de enero de 2004, en el Balneario San José, dentro del marco de la Fiesta del Campamentista, con bandas de toda la provincia.",
          "Y de 2005 guardamos esta credencial de músico, chiquita pero con mucha historia atrás."
        ]
      },
      {
        id: "el-sanjo-rock-que-se-mudo-al-polideportivo",
        cat: "Historia",
        date: "2026-10-07",
        title: "El Sanjo Rock que se mudó al Polideportivo",
        cover: "assets/img/el-sanjo-rock-que-se-mudo-al-polideporti.jpg",
        excerpt: "Un ticket de $3 para una edición de un 10 de marzo en el Polideportivo Municipal, con Egoístas, Nervios, Triumph y Bacteria.",
        body: [
          "Otro pedacito de historia: un ticket de entrada de $3 para una edición de Sanjo Rock un 10 de marzo, a las 19 hs puntual, en el Polideportivo Municipal. Invitaba la Municipalidad de Villa San José, apoyaba la Subsecretaría de la Juventud de Entre Ríos.",
          "Tocaban Egoístas, Ysteria, Nervios, Triumph, Tren Loco, Gravedad Mental y Bacteria, entre otras."
        ]
      },
      {
        id: "sanjo-rock-en-el-club-santa-rosa",
        cat: "Historia",
        date: "2026-10-07",
        title: "Sanjo Rock en el Club Santa Rosa",
        cover: "assets/img/sanjo-rock-en-el-club-santa-rosa.jpg",
        excerpt: "Otra fecha del archivo: un domingo 24, entrada $5, con nueve bandas en la grilla.",
        body: [
          "Este flyer es de otra edición, un domingo 24, en el Club Santa Rosa (San José, Dpto. Colón). Entrada $5, a las 20 hs.",
          "La grilla de esa noche: Censura 23 (punk californiano, Colón), Nutilfait (grunge, C. del Uruguay), Borcegos (punk, Colón), Persistir (heavy, Bs. As.), La Morza (ska rock, San José), Exasperar (ñu metal, Paraná), Vennus (hard rock, Bs. As.), Bacteria (heavy thrash, San José) y Nervios (grunge, San José)."
        ]
      },
      {
        id: "le-entregamos-el-reconocimiento-a-claudio-gabis",
        cat: "Novedades",
        date: "2026-09-30",
        title: "Le entregamos el reconocimiento a Claudio Gabis",
        cover: "assets/img/le-entregamos-el-reconocimiento-a-claudi.jpg",
        excerpt: "Javier Martínez le entregó en persona el diploma a Claudio Gabis, que además firmó su adhesión al pedido de Interés Municipal para el festival.",
        body: [
          "Claudio Gabis recibió de manos de Javier Martínez el diploma en reconocimiento a su carrera y trayectoria.",
          "Además, Gabis firmó una nota de adhesión para apoyar que el festival Sanjo Rock sea declarado de Interés Municipal y Cultural. Un gesto enorme de alguien que marcó la historia del rock nacional."
        ]
      },
      {
        id: "el-pre-sanjo-rock-fue-un-exito",
        cat: "Novedades",
        date: "2026-09-27",
        title: "El Pre Sanjo Rock fue un éxito",
        cover: "assets/img/el-pre-sanjo-rock-fue-un-exito.jpg",
        excerpt: "La Botica se llenó de amigos, superando nuestras expectativas. Gracias a todos los que se hicieron presentes.",
        body: [
          "El Pre Sanjo Rock fue un éxito. La Botica se llenó de amigos, superando ampliamente nuestras expectativas.",
          "Desde la organización queremos agradecer a todos los que se hicieron presentes y a los colaboradores por el gran trabajo que hicieron. Esto nos da un impulso enorme de cara a la gran fiesta que va a ser el 14 de noviembre."
        ]
      },
      {
        id: "este-ano-sumamos-una-colecta-solidaria",
        cat: "Novedades",
        date: "2026-09-25",
        title: "Este año sumamos una colecta solidaria",
        excerpt: "En el Pre Sanjo Rock colaboramos con la Escuela N.º 54 Carlos Sourigues juntando alimentos para el comedor infantil.",
        body: [
          "En el Pre Sanjo Rock colaboramos con la Escuela N.º 54 Carlos Sourigues, haciendo una colecta de alimentos no perecederos para el comedor infantil.",
          "Nuestros eventos son, como siempre, gratuitos y abiertos a toda la comunidad: no se cobra entrada. A cambio, invitamos a quienes puedan a acercar un alimento no perecedero para colaborar con esta iniciativa solidaria. Y si alguien quiere sumar más de uno, ¡va a ser más que bienvenido!",
          "Entre todos podemos hacer que la música también sea una forma de ayudar. Gracias por acompañarnos.",
          "— Comisión de Sanjo Rock, "26 años de distorsión autóctona""
        ]
      },
      {
        id: "reconocimiento-a-claudio-gabis-guitarrista-fundador-de-manal",
        cat: "Novedades",
        date: "2026-09-25",
        title: "Reconocimiento a Claudio Gabis, guitarrista fundador de Manal",
        cover: "assets/img/reconocimiento-a-claudio-gabis-guitarris.jpg",
        excerpt: "Le acercamos este diploma en nombre del festival y de la comunidad musical de San José.",
        body: [
          "Claudio Gabis, guitarrista fundador de Manal —una de las bandas pioneras del rock en español— está de visita en la zona, y desde Sanjo Rock quisimos hacerle llegar este diploma de reconocimiento por su legado, que sigue inspirando a las bandas que hoy sostienen la escena del rock local.",
          "Con el cariño y el respeto de quienes seguimos creyendo en la música como punto de encuentro. Gracias, Claudio."
        ]
      },
      {
        id: "el-flyer-de-la-primera-edicion-ano-2000",
        cat: "Historia",
        date: "2026-09-18",
        title: "El flyer de la primera edición, año 2000",
        cover: "assets/img/el-flyer-de-la-primera-edicion-ano-2000.jpg",
        excerpt: "Así se anunciaba el Sanjo Rock original: sábado 29 de julio, entrada gratis, en el Centro de Jubilados y Pensionados Nacionales de San José.",
        body: [
          "Encontramos el flyer de la primera edición de Sanjo Rock, allá por el año 2000: sábado 29 de julio, entrada gratis, en el Centro de Jubilados y Pensionados Nacionales de San José, a partir de las 20 hs, con bandas en vivo.",
          "Mismo espíritu que estamos tratando de recuperar 26 años después: un festival gratuito, hecho por y para la comunidad, con el rock local como protagonista."
        ]
      },
      {
        id: "arranco-la-difusion-en-los-medios",
        cat: "Novedades",
        date: "2026-09-17",
        title: "Arrancó la difusión en los medios",
        excerpt: "Nuestro encargado de prensa y difusión ya está recorriendo distintos medios para contar de qué se trata la vuelta del Sanjo Rock.",
        body: [
          "Ezequiel Ceriani (@cerianiezequiel) es el encargado de prensa y difusión del festival, y ya arrancó el recorrido por distintos medios de la zona para contar la noticia: Sanjo Rock vuelve el 14 de noviembre.",
          "Si sos de algún medio local y querés sumarte a la cobertura, podés escribirnos por acá o por Instagram."
        ]
      },
      {
        id: "ya-tenemos-instagram-oficial-sanjorockoficial",
        cat: "Novedades",
        date: "2026-09-15",
        title: "Ya tenemos Instagram oficial: @sanjorockoficial",
        excerpt: "Toda la info del festival, ahora también en Instagram. Entrada libre y gratuita.",
        body: [
          "Creamos la página oficial de Sanjo Rock 2026 en Instagram: @sanjorockoficial. Ahí vamos a ir subiendo la info del festival —fecha, ubicación, bandas confirmadas y las novedades que se vayan sumando— en paralelo a este blog.",
          "Un recordatorio importante: el Sanjo Rock 2026 tiene entrada libre y gratuita. Nos vemos el sábado 14 de noviembre en el Predio Multieventos de San José, desde las 20 hs, con bandas en vivo."
        ]
      },
      {
        id: "sanjo-rock-2026-sabado-14-de-noviembre",
        cat: "Novedades",
        date: "2026-09-14",
        title: "Sanjo Rock 2026: sábado 14 de noviembre",
        excerpt: "Ya tiene fecha y lugar la vuelta del festival: 14 de noviembre en el predio multieventos de San José.",
        body: [
          "Después de meses de trabajo en el Plan Maestro de Reactivación, ya podemos confirmarlo: Sanjo Rock vuelve el sábado 14 de noviembre, en el predio multieventos de San José, Entre Ríos.",
          "Va a haber bandas locales y de la zona, stands de artesanos, emprendedores y gastronomía, y el acompañamiento de la Fundación Las Camelias, que este año suma vasos reutilizables con el logo del festival como parte de su aporte.",
          "En las próximas semanas vamos a ir contando quiénes tocan, cómo va armándose el predio y todo lo que hace falta para que este regreso salga como se lo merece. Antes, eso sí, hay una previa: el Pre Sanjo Rock."
        ]
      },
      {
        id: "lineup-confirmado-para-el-pre-sanjo-rock",
        cat: "Bandas",
        date: "2026-09-14",
        title: "Lineup confirmado para el Pre Sanjo Rock",
        cover: "assets/img/lineup-confirmado-para-el-pre-sanjo-rock.jpg",
        excerpt: "Inmoral y Perros Sin Correa encabezan la noche del 26 de septiembre, con Rocío Brutomeza abriendo.",
        body: [
          "Ya está confirmado el lineup del Pre Sanjo Rock: tocan Inmoral y Perros Sin Correa, con Rocío Brutomeza abriendo la noche.",
          "La cita es el sábado 26 de septiembre en el Centro Cultural La Botica. Una previa a puro rock local antes del festival grande del 14 de noviembre."
        ]
      },
      {
        id: "confirmado-pre-sanjo-rock-el-26-de-septiembre",
        cat: "Novedades",
        date: "2026-09-10",
        title: "Confirmado: Pre Sanjo Rock el 26 de septiembre",
        excerpt: "Antes del festival grande, una previa en el Centro Cultural La Botica con bandas de la zona.",
        body: [
          "El sábado 26 de septiembre, en el Centro Cultural La Botica, hacemos el Pre Sanjo Rock: una noche con bandas de la zona para empezar a calentar motores de cara al festival del 14 de noviembre.",
          "La idea de esta previa es simple: juntarnos antes, que las bandas locales tengan un escenario más, y que Sanjo Rock vuelva a sonar en San José de a poco, no de un día para el otro.",
          "Pronto contamos quiénes son las bandas confirmadas."
        ]
      },
      {
        id: "sanjo-rock-vuelve-la-historia-detras-del-regreso",
        cat: "Historia",
        date: "2026-09-01",
        title: "Sanjo Rock vuelve: la historia detrás del regreso",
        excerpt: "El festival nació en San José en el año 2000. Después de años sin hacerse, un grupo se propuso reactivarlo.",
        body: [
          "Sanjo Rock no es un festival nuevo: nació en San José, Entre Ríos, en el año 2000, en una época en la que el rock local necesitaba un escenario propio en el pueblo. Con los años, como pasa con tantos proyectos autogestionados, el festival dejó de hacerse.",
          "Este 2026 nos propusimos reactivarlo. No como una copia de lo que fue, sino pensando de nuevo cada parte: qué bandas suben al escenario, cómo se organiza el predio, qué rol cumple el municipio, y qué queremos que sea Sanjo Rock de acá en más. Todo eso quedó por escrito en un Plan Maestro de Reactivación que venimos armando desde hace meses.",
          "Este blog va a ir contando ese proceso: lo que se decide, lo que se arma, y también los recuerdos de lo que fue Sanjo Rock la primera vez, para quienes se lo perdieron y para quienes ya lo tienen guardado en la memoria."
        ]
      }
    ],

  /* ---------- Merch ----------
     Mientras "items" esté vacío, la sección no se muestra.
     item: { name, price, image, url } */
  merch: {
    title: 'Merch',
    text: 'Para bancar el festival y llevarte algo puesto.',
    items: []
  },

  /* ---------- Auspiciantes ----------
     item: { name, logo, bg (color de fondo del logo, opcional), url (opcional) } */
  sponsors: {
    title: 'Auspiciantes',
    text: 'Quienes hacen posible Sanjo Rock 2026.',
    partnersLabel: 'Con el acompañamiento de',
    partners: [
      { name: 'Municipalidad de San José', logo: 'assets/logos/san-jose.png' },
      { name: 'Barreta Producciones', logo: 'assets/logos/barreta.png' },
      { name: 'Fundación Las Camelias' }
    ],
    items: [
      {
        name: "Lonera Brotzman",
        logo: "assets/img/lonera-brotzman.jpg",
        bg: "#ffffff",
        url: "https://wa.me/5493447408266"
      },
      {
        name: "Pueblo Tattoo, Piercing & Clothes",
        logo: "assets/img/pueblo-tattoo-piercing-clothes.jpg",
        bg: "#000000",
        url: "https://www.instagram.com/pueblo.tt"
      },
      {
        name: "Panadería La Moderna",
        logo: "assets/img/panaderia-la-moderna.jpg",
        bg: "#ffffff"
      },
      {
        name: "Martin Graff — Consultor inmobiliario",
        logo: "assets/img/martin-graff-consultor-inmobiliario.jpg",
        bg: "#eef3ef"
      },
      {
        name: "Sean Eternos — Estudio de tatuajes",
        logo: "assets/img/sean-eternos-estudio-de-tatuajes.jpg",
        bg: "#1b191a"
      },
      {
        name: "Mamá Cora Pizza-Pub",
        logo: "assets/img/mama-cora-pizza-pub.jpg",
        bg: "#000000"
      },
      {
        name: "El Trueno Pizzería",
        logo: "assets/img/el-trueno-pizzeria.jpg",
        bg: "#ffffff"
      },
      {
        name: "Flanders Kiosco",
        logo: "assets/img/flanders-kiosco.jpg",
        bg: "#efefef",
        url: "https://www.instagram.com/flanderskiosco"
      },
      { name: "Rotisería D.M.", logo: "assets/img/rotiseria-d-m.jpg", bg: "#000000" },
      { name: "La Cervecería", logo: "assets/img/la-cerveceria.jpg", bg: "#ffffff" },
      { name: "Candy Gomix", logo: "assets/img/candy-gomix.jpg", bg: "#2a1458" },
      { name: "Deportivo Cali", logo: "assets/img/deportivo-cali.jpg", bg: "#fefefe" },
      { name: "Pistacho", logo: "assets/img/pistacho.jpg", bg: "#000000" },
      { name: "Trucha", logo: "assets/img/trucha.jpg", bg: "#000000" },
      {
        name: "Carnicería Martín",
        logo: "assets/img/carniceria-martin.jpg",
        bg: "#ffffff"
      },
      { name: "Farmacia Perez", logo: "assets/img/farmacia-perez.jpg", bg: "#f6f6f6" },
      {
        name: "La Bolilla que faltaba",
        logo: "assets/img/la-bolilla-que-faltaba.jpg",
        bg: "#fffdfe"
      },
      { name: "Óptica Frei", logo: "assets/img/optica-frei.jpg", bg: "#d3eef2" },
      { name: "YVY Cosmética Natural", logo: "assets/img/yvy-cosmetica-natural.jpg", bg: "#c6daff" }
    ]
  },

  /* ---------- Sumá tu marca ----------
     "flyer" es la placa completa (se abre ampliada al tocarla). */
  advertise: {
    title: 'Sumá tu marca',
    text: 'Publicitá tu negocio en Sanjo Rock 2026 (14 de noviembre, Predio Multieventos). Para reservar tu lugar, comunicate con los organizadores.',
    groups: [
      {
        title: "Stands",
        sub: "Artesanos, emprendedores y gastronómico",
        flyer: "assets/img/stands-para-el-evento-del-14-11-artesano.jpg",
        alt: "Stands para el evento del 14/11: artesanos, emprendedores y gastronómico",
        items: [
          { name: "Stand en el evento artesanos", price: "$ 50.000" },
          { name: "Stand en el evento emprendedores", price: "$ 70.000" },
          { name: "Stand gastronómico", price: "$ 100.000" }
        ]
      },
      {
        title: "Publicidad",
        sub: "Paquetes para el evento del 14/11",
        flyer: "assets/img/paquetes-de-publicidad-para-el-evento-de.jpg",
        alt: "Paquetes de publicidad para el evento del 14/11",
        items: [
          {
            name: "Publicidad simple",
            detail: "Redes sociales y afiches",
            price: "$ 20.000"
          },
          { name: "Publicidad compuesta", detail: "Redes y predio", price: "$ 30.000" }
        ]
      }
    ],
    cta: 'Reservá tu lugar',
    ctaUrl: 'https://www.instagram.com/sanjorockoficial'
  },

  /* ---------- Sumá materiales ----------
     Mientras "items" esté vacío, la sección no se muestra.
     item: texto simple, o { name, qty } */
  materials: {
    title: 'Sumá materiales',
    text: 'Para el Pre Sanjo Rock y Sanjo Rock, el equipo de decoración está necesitando conseguir estos materiales:',
    items: [],
    cta: 'Avisanos por Instagram',
    ctaUrl: 'https://www.instagram.com/sanjorockoficial'
  }
};
