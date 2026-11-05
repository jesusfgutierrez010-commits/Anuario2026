/* ==========================================================
   ANUARIO ESCOLAR · PROMOCIÓN 2026
   1) DATOS: toda la clase vive en un Array de Objetos.
      Cada objeto es un estudiante; el HTML de la página se
      genera UNA sola vez con una función (crearPagina) y se
      repite con .map(), así no copiamos HTML 31 veces.
   2) NAVEGACIÓN: botones Anterior / Siguiente (y flechas del teclado).
   3) EFECTOS: la página actual "se pasa" como en un libro
      (clases CSS que JavaScript agrega y quita).
   ========================================================== */

const estudiantes = [
 {
  "nombre": "Laura Liney Alarcon Cortes",
  "frase": "El que persevera alcanza",
  "recuerdo": "Haber encontrado una persona realmente leal en mi vida",
  "aspiraciones": [
   "enfermera, doctora, ingeniera"
  ],
  "agradecimientos": "Agradezco a Dios y a mi familia que me acompañaron en esta etapa, por su apoyo, consejos y paciencia.",
  "foto": "img/alarconcortesl_f.jpg",
  "firma": "img/alarconcortesl_s.png",
  "rol": ""
 },
 {
  "nombre": "Narly Lizeth Amaya Losada",
  "frase": "No entendí nada",
  "recuerdo": "Mi recuerdo favorito es conocer a amistades que me ayudaron en el peor momento y me sacaban una sonrisa",
  "aspiraciones": [
   "Seguir estudiando",
   "Terminar hasta sacar el tecnólogo",
   "Trabajar para conseguir mis cosas"
  ],
  "agradecimientos": "A mis padres y a todos los docentes que me acompañaron",
  "foto": "img/amayalosadanar_f.jpg",
  "firma": "img/amayalosadanar_s.png",
  "rol": ""
 },
 {
  "nombre": "Nycolt Danihela Barrera Mosquera",
  "frase": " Su Madreeee ",
  "recuerdo": "Mi recuerdo favorito fue cuando iniciamos nuestro grupito de 4 en septimo con unas amigas",
  "aspiraciones": [
   "Estudiar en el Sena",
   "Hacer orgullosa a mi madre",
   "Infante de Marina",
   "Infante de Marina",
   "Chef"
  ],
  "agradecimientos": "Le doy gracias a mi madre por darme u apoyo incondicional en mis etudios y por siempre confiar en mi",
  "foto": "img/barreramosquer_f.jpg",
  "firma": "img/barreramosquer_s.png",
  "rol": ""
 },
 {
  "nombre": "Andres Felipe Bastidas Lombana",
  "frase": "Relax que yo remonto",
  "recuerdo": "Mi noviazgo",
  "aspiraciones": [
   "Odontologo"
  ],
  "agradecimientos": "Agradezco a mis padre por todo el esfuerzo que hicieron todos estos años para que yo pudiera llegar hasta acá MI GRADO DE BACHILLER",
  "foto": "img/bastidaslomban_f.jpg",
  "firma": "img/bastidaslomban_s.png",
  "rol": ""
 },
 {
  "nombre": "Estiven Julian Benitez Castro",
  "frase": "Mire a este negro",
  "recuerdo": "Sin duda, mi recuerdo favorito fue el día en que me organizaron una fiesta de cumpleaños sorpresa. Ver reunidos a mis 4 mejores amigos, para celebrar conmigo es un momento que guardo con muchísimo cariño en el corazón.",
  "aspiraciones": [
   "Mi mayor aspiración es convertirme en doctor y alcanzar todas mis metas profesionales, preparándome con dedicación para proteger la salud de las personas y cumplir con éxito cada objetivo que me proponga en el futuro."
  ],
  "agradecimientos": "Agradezco profundamente a mis compañeros, familiares y profesores por haberme acompañado y guiado en esta etapa. Su apoyo y compañía fueron fundamentales durante todo mi proceso educativo en la secundaria.",
  "foto": "img/benitezcastroe_f.jpg",
  "firma": "img/benitezcastroe_s.png",
  "rol": ""
 },
 {
  "nombre": "Nikoll Lizeth Bocanegra Giraldo",
  "frase": "En nombre de Dios, todo lo lograre",
  "recuerdo": "Todos los recuerdos de octavo, pero especialmente cuando dañamos un candado para no tener clases con una profesora",
  "aspiraciones": [
   "Estudiar la carrera de mis sueños"
  ],
  "agradecimientos": "Gracias a mi familia por el apoyo",
  "foto": "img/bocanegragiral_f.jpg",
  "firma": "img/bocanegragiral_s.png",
  "rol": ""
 },
 {
  "nombre": "Danna Valentina Caviedes Perdomo",
  "frase": "ay Dios mio",
  "recuerdo": "Mi recuerdo favorito es cuando unos compañeros estaban jugando con una pelota de papel, y accidentalmente le pegaron a una profesora casi dañándole las gafas.",
  "aspiraciones": [
   "Estudiar psicología, o seguir con el técnico."
  ],
  "agradecimientos": "Les doy las gracias a mis padres por su apoyo emocional, económico, a mis maestros por su paciencia, y todas las enseñanzas que me han dejado.",
  "foto": "img/caviedesperdom_f.jpg",
  "firma": "img/caviedesperdom_s.png",
  "rol": ""
 },
 {
  "nombre": "Zaidy Liseth Cuellar Caviedes",
  "frase": "Ay no que pena",
  "recuerdo": "Mi recuerdo favorito de decimo fue compartir risas, locuras y momento inovidables con mis compañeros, creando recuerdos que siempre llevare en mi corazó.",
  "aspiraciones": [
   "Estudiar en el SENA",
   "Hacer el orgullosa de mi familia",
   "Cumplir mi sueño sin rendirme",
   "Crecer como persona y aprender de mis errores"
  ],
  "agradecimientos": "Agradezco a mis padres por su amor incondicional, por apoyarme en cada momento y por hacer tantos esfuerzos para darme lo mejor. Gracias por sus consejos, por confiar en mí y por motivarme a seguir adelante, incluso cuando las cosas se ponen difíciles. Ustedes son una parte fundamental de mi vida y una de mis mayores motivaciones para cumplir mis sueños. Todo lo que hacen por mí lo llevo en mi corazón, y espero algún día poder devolverles un poquito de todo lo que me han dado. Los amo mucho y me siento muy afortunada de tenerlos en mi vida.",
  "foto": "img/cuellarcaviede_f.jpg",
  "firma": "img/cuellarcaviede_s.png",
  "rol": ""
 },
 {
  "nombre": "Kewin Daniel Escobar Ramirez",
  "frase": "ole no",
  "recuerdo": "el dia que jugue un torneo departamental",
  "aspiraciones": [
   "ser profesional en multimedia",
   "debutar como jugador"
  ],
  "agradecimientos": "le agradesco a mi familia por apoyarme",
  "foto": "img/escobarramirez_f.jpg",
  "firma": "img/escobarramirez_s.png",
  "rol": ""
 },
 {
  "nombre": "Laura Valentina Fuentes Aranda",
  "frase": "Estoy siendo victima de Xenofobia por parte de mi compañero Benítez",
  "recuerdo": "Todos los días a partir de 9no (2024) han sido como el mejor de todos. Pero los mejores como Prom fueron las horas lúdicas a la ultima hora de todos los miércoles.",
  "aspiraciones": [
   "Ser programadora y tener una vida tranquila y digna."
  ],
  "agradecimientos": "Agradezco a cada uno de mis compañeros por haber formado parte de los recuerdos más bonitos de mi último año escolar. Me llevo conmigo las risas, las enseñanzas, los momentos compartidos y la tristeza de saber que una etapa tan especial está llegando a su fin. A Yuvettslit Yunda, por ser mi primera amiga al llegar a la institución, por permitirme verla crecer y por ocupar un lugar en mi corazón que el tiempo nunca podrá borrar. A Julieta Rocha, por ser mi compañía, cómplice, apoyo incondicional y una de las amistades más valiosas de este camino. A Isabella Monje, por tenderme la mano cuando más lo necesité; a Laura Serrato, por los momentos vividos; a Estiven Benítez, por su liderazgo, amistad y por hacerme bullying de vez en cuando ; a Laura Marinez, por tantas risas y su apoyo; a Cristian Muñoz, por su compañía; a Heilyn Sánchez y Saory Montaña, por estar presentes cuando pudieron; a Laura Galindo, por su cariño y confianza; y a Johan Ramírez, por su carisma y honestidad. Gracias a todos por dejar un pedacito de ustedes en esta historia que siempre recordaré con cariño. A mis profesores, especialmente al profe Sebastián Masmelas, gracias por despertar en mí el amor por la programación. A mi padre, Leonardo Fuentes, por su apoyo económico durante mi formación; a mis hermanos mayores, Cristian Galindo y Yonatan Galindo, por tenderme la mano cuando lo necesité; y a Esther Hernández, por acompañarme espiritual y emocionalmente en este proceso. Pero, sobre todo, mi agradecimiento más profundo es para mi mamá, Lina Aranda. Gracias por cada sacrificio, por cada esfuerzo silencioso y por luchar incansablemente para darme un futuro mejor. Gracias por salvarme de la ignorancia, por creer en mí incluso en medio de las dificultades y por dejarlo todo con tal de verme llegar lejos. Si hoy puedo soñar con un futuro lleno de oportunidades, es porque tú has construido el camino con tus propias manos.",
  "foto": "img/fuentesarandal_f.jpg",
  "firma": "img/fuentesarandal_s.png",
  "rol": ""
 },
 {
  "nombre": "Laura Valentina Galindo Diaz",
  "frase": "Tengo Sueño",
  "recuerdo": "Mi recuerdo favorito es cuando conocí por primera vez a mi mejor amiga Valeria",
  "aspiraciones": [
   "Poder especializarme en lo que mas aspiro yPoder especializarme en lo que mas aspiro."
  ],
  "agradecimientos": "Le agradezco a mis padres por darme motivación y fuerzas para lograr mis metas y poder seguir adelante.",
  "foto": "img/galindodiazlau_f.jpg",
  "firma": "img/galindodiazlau_s.png",
  "rol": ""
 },
 {
  "nombre": "Mariana Garcia Perez",
  "frase": "Falsos",
  "recuerdo": "La vez que hicieron caer a Edwin y de paso a Natalia en el puente de guaunda y quedó cochino",
  "aspiraciones": [
   "Psicología o licenciatura en lengua castellana"
  ],
  "agradecimientos": "Agradezco principalmente a Dios y a mis padres sobre todo a mi hermana Nubia quien ah hecho el papel principal en apoyarme tanto académica como financieramente, los amo.",
  "foto": "img/garciaperezmar_f.jpg",
  "firma": "img/garciaperezmar_s.png",
  "rol": ""
 },
 {
  "nombre": "Jesus Fernando Gutierrez Diz",
  "frase": "Los errores ocurren",
  "recuerdo": "Cuando obtuve las 80horas sociales sin hacer practicamente nada.",
  "aspiraciones": [
   "Convertirme en un Medico o Convertirme en un Medico ."
  ],
  "agradecimientos": "Gracias a mis padres, hermano y profesores que me apoyaron en todo para poder salir adelante.",
  "foto": "img/gutierrezdizje_f.jpg",
  "firma": "img/gutierrezdizje_s.png",
  "rol": ""
 },
 {
  "nombre": "Laura Angeline Marinez Olaya",
  "frase": "no joda",
  "recuerdo": "Con mis padres de pequeña",
  "aspiraciones": [
   "Estudiar derecho"
  ],
  "agradecimientos": "agradezco a mi familia",
  "foto": "img/marinezolayala_f.jpg",
  "firma": "img/marinezolayala_s.png",
  "rol": ""
 },
 {
  "nombre": "Francy Fidelina Medina Garcia",
  "frase": "Todo es mental",
  "recuerdo": "mi recuerdo favorito en general es cuando compartimos",
  "aspiraciones": [
   "Graduarme, ingresar a la universidad, estudiar Medicina, crecer como persona, ayudar a mi familia, conocer nuevos lugares y cumplir cada uno de mis sueños."
  ],
  "agradecimientos": "Agradezco a mi familia, docentes y compañeros por su apoyo, dedicación y enseñanzas durante esta etapa, que han contribuido a mi formación personal y académica.",
  "foto": "img/medinagarciafr_f.jpg",
  "firma": "img/medinagarciafr_s.png",
  "rol": ""
 },
 {
  "nombre": "Isabella Monje Vega",
  "frase": "Te cuento un chiste amisga",
  "recuerdo": "Cuando estaba en el puente con mis amigos y nos inventamos un caso para un juicio",
  "aspiraciones": [
   "Tener mi propia empresa y llegar a componer mis propias canciones"
  ],
  "agradecimientos": "le agradezco a mi mamá, tío y abuela por nunca dejarme sola y confiar en mi incluso cuando yo no lo podía hacer",
  "foto": "img/monjevegaisabe_f.jpg",
  "firma": "img/monjevegaisabe_s.png",
  "rol": ""
 },
 {
  "nombre": "Saory Valentina Montaña Piñeros",
  "frase": "tengo hambre",
  "recuerdo": "cuando me la pasaba jugando voleibol",
  "aspiraciones": [
   "salir del colegio y formar una carrera"
  ],
  "agradecimientos": "agradecimiento a todos los que me acompañaron en mi formación académica",
  "foto": "img/montanapineros_f.jpg",
  "firma": "img/montanapineros_s.png",
  "rol": ""
 },
 {
  "nombre": "Julieth Valentina Mora Esquivel",
  "frase": "somos la resistencia",
  "recuerdo": "en 7mo cuando jugábamos futbol la mayoría del salón unidos",
  "aspiraciones": [
   "estudiar lo que me gusta y terminarlo, trabajar en eso y formar una hermosa familia"
  ],
  "agradecimientos": "agradezco primeramente a Dios por haberme permitirme estar donde estoy y con vida, y a mis padres por apoyarme en cada momento de mi vida y supliendo cada necesidad q tengo",
  "foto": "img/moraesquivelju_f.jpg",
  "firma": "img/moraesquivelju_s.png",
  "rol": ""
 },
 {
  "nombre": "Cristian Rene Muñoz Quintero",
  "frase": "ccccc",
  "recuerdo": "cuando tuvimos una salida con Alvaro y nos escapamos para piscina",
  "aspiraciones": [
   "hacer un tecnologo en el SENA, ir a la UNI y estudiar lo que me gusta para ganar mucha plata"
  ],
  "agradecimientos": "cc",
  "foto": "img/munozquinteroc_f.jpg",
  "firma": "img/munozquinteroc_s.png",
  "rol": ""
 },
 {
  "nombre": "Alex Felipe Ortiz Narvaez",
  "frase": "No mienta",
  "recuerdo": "cuando jugaba micro con mi compañeros",
  "aspiraciones": [
   "estudiar mi carrera de mis sueños y ser un gran profecional"
  ],
  "agradecimientos": "Primero que todo, quiero dar gracias a Dios por haberme permitido vivir esta experiencia escolar con salud y vida. También agradecer a los profesores que se esforzaron por enseñarnos con dedicación, paciencia y esfuerzo todos sus conocimientos y valores que nos puedan servir en nuestra vida cotidiana. Por último, estaré infinitamente agradecido con mis padres por haberme acompañado y apoyado en todos mis proyectos y en mi trayectoria como estudiante a través del tiempo.",
  "foto": "img/ortiznarvaezal_f.jpg",
  "firma": null,
  "rol": ""
 },
 {
  "nombre": "Duvan Felipe Ortiz Sarmiento",
  "frase": "yo si estudie pero se me olvido todo",
  "recuerdo": "cuando jugué futbol con mis compañeros y nos golearon pero no faltaron las risas",
  "aspiraciones": [
   "Mis aspiraciones son terminar mis estudios, graduarme del colegio, estudiar lo que me gusta  convertirme en un gran profesional. Sueño con tener un buen trabajo, una casa propia, ayudar económicamente a mi familia, hacer sentir orgullosos a mi mamá y hermano, viajar y conocer nuevos lugares. Aspiro a ser una persona responsable, humilde y respetuosa, cumplir cada uno de mis sueños y construir un futuro lleno de felicidad, éxitos y bendiciones, siempre con la ayuda de Dios."
  ],
  "agradecimientos": "Gracias, Dios, por permitirme vivir esta hermosa etapa de mi vida, por darme la oportunidad de aprender, por cada compañero que puso una sonrisa en mis días y por cada maestro que me enseñó algo más que una lección. Gracias por los momentos felices, por las dificultades que me hicieron más fuerte y por los recuerdos que siempre llevaré en mi corazón. Hoy entiendo que el colegio no solo me dejó conocimientos, sino también amistades, experiencias y enseñanzas que me acompañarán toda la vida.",
  "foto": "img/ortizsarmiento_f.jpg",
  "firma": "img/ortizsarmiento_s.png",
  "rol": ""
 },
 {
  "nombre": "Joan Sebastian Ramirez Garcia",
  "frase": "sapa",
  "recuerdo": "c",
  "aspiraciones": [
   "ser un gran empresario"
  ],
  "agradecimientos": "ccc",
  "foto": "img/ramirezgarciaj_f.jpg",
  "firma": "img/ramirezgarciaj_s.png",
  "rol": ""
 },
 {
  "nombre": "Julieta Rocha Losada",
  "frase": "Todo pasa por algo, los planes de Dios son perfectos",
  "recuerdo": "c",
  "aspiraciones": [
   "quiero cumplir mis dos sueño que es llegar a ser profesora de pedagogía infantil para mostrar esa amor tan grande que tengo con los niños y a enseñarles las base que les van a servir para el resto de su vida , y también después de cumplir eso estudiar para ser azafata es unos de mis mayores sueños y también después de cumplir eso estudiar para ser azafata es unos de mis mayores sueños"
  ],
  "agradecimientos": "c",
  "foto": "img/rochalosadajul_f.jpg",
  "firma": "img/rochalosadajul_s.png",
  "rol": ""
 },
 {
  "nombre": "Heilyn Yireth Sanchez Dussan",
  "frase": "ya quisiera yo",
  "recuerdo": "el compartir de la salchipapa",
  "aspiraciones": [
   "llegar ser una persona exitosa que no necesita ayuda de los demás"
  ],
  "agradecimientos": "agradezco a mi familia, amigos , compañeros y profesores por darme enseñanzas , ejemplos y aprendizaje que me ayudaron a formarme como la persona que soy ahora .",
  "foto": "img/sanchezdussanh_f.jpg",
  "firma": "img/sanchezdussanh_s.png",
  "rol": ""
 },
 {
  "nombre": "Thaliana Sofia Sanchez Rocha",
  "frase": "vive la vida",
  "recuerdo": "el 2022 con mis amigas",
  "aspiraciones": [
   "ser feliz"
  ],
  "agradecimientos": "agradezco a mdzs , a mis padres, a mis profesores y a los compañeros para ayudarme a lograr mis metas",
  "foto": "img/sanchezrochath_f.jpg",
  "firma": "img/sanchezrochath_s.png",
  "rol": ""
 },
 {
  "nombre": "Hillary Natalia Serrato Acosta",
  "frase": "No todo es para siempre, pero tú sí vas a poder con todo.",
  "recuerdo": "Una vez que estaba caminando con mis amigos por el patio del colegio y después nos fuimos para un lado el cual había un río esa vez me lanzaron al río con otro compañero yo no quería culpar ni avisar a la responsable pero ya la habían delatado en coordinación nos llevaron para allá le pusieron observación y nos regañaron",
  "aspiraciones": [
   "Quiero terminar mi bachillerato con la ayuda de Dios graduarme y estudiar para ser un gran licenciada en educación infantil"
  ],
  "agradecimientos": "Agradezco a al colegio por ser mi segundo hogar a mis profesores por enseñarme con paciencia y dedicación a mis compañeros por hacerme cada día mas alegre me llevo lo aprendido y lo vivido en el corazón",
  "foto": "img/serratoacostah_f.jpg",
  "firma": "img/serratoacostah_s.png",
  "rol": ""
 },
 {
  "nombre": "Laura Sofia Serrato Trujillo",
  "frase": "uy no atrás satanás",
  "recuerdo": "mi recuerdo favorito es cuando todos fuimos a la casa de el man que me gustaba y ellos se pusieron a de serenata la canción de la ventana marroncita",
  "aspiraciones": [
   "Quiero graduarme feliz junto a mis amigos",
   "Terminar el tecnólogo",
   "Homologar y estudiar diseño",
   "Estudiar mas cursos en el sena",
   "Entrar en la universidad y estudiar biología",
   "Graduarme de la universidad",
   "Ser profesional con lo estudiado"
  ],
  "agradecimientos": "gracias a mis amigos: Laura fuentes, Ancizar Triana, Joan Ramírez, Isabella moje, Yuvettslit Yunda... y a todo el salón por ser tan especial para mi y por ser tan unidos a pesar de nuestras diferencias",
  "foto": "img/serratotrujill_f.jpg",
  "firma": "img/serratotrujill_s.png",
  "rol": ""
 },
 {
  "nombre": "Nicolas Soto Calderon",
  "frase": "yo que me saque un 3 me conformo",
  "recuerdo": "cuando jugamos un partido con mis amigos y nos golearon",
  "aspiraciones": [
   "tener un trabajo estable, tener un titulo profesional de ingeniero y estar junto a mis padres"
  ],
  "agradecimientos": "Primero que todo darle el agradecimiento a mis padres que son los que me han apoyado siempre y en cualquier circunstancia también a mis abuelas que es otro mérito de orgullo saber que tengo una familia unida y que me apoya en todo y gracias a eso es podido con todo y siempre salir adelante afrontando todo",
  "foto": "img/sotocalderonni_f.jpg",
  "firma": "img/sotocalderonni_s.png",
  "rol": ""
 },
 {
  "nombre": "Ancizar Steven Triana Murcia",
  "frase": "six seven",
  "recuerdo": "El día del compartir en 10°",
  "aspiraciones": [
   "Terminar el tecnólogo",
   "Irme del país junto a mi familia",
   "Hacer la Universidad",
   "Tener hijos"
  ],
  "agradecimientos": "Agradezco a mis padres por el gran amor que me han dado, a mis hermanos, al profe sebas por ser tan buen docente y a mis amigos por hacer los dias tan divertidos y mas faciles",
  "foto": "img/trianamurciaan_f.jpg",
  "firma": "img/trianamurciaan_s.png",
  "rol": ""
 },
 {
  "nombre": "Yuvettslit Yunda Cortes",
  "frase": "Life goes on",
  "recuerdo": "mi mamá y yo en la graduación de 9no, por como se veía y sentí su orgullo",
  "aspiraciones": [
   "ayudar a mi mllegar a ser profesional en marketing,amá, viajar, tener un trabajo estable, obtener dinero y especializarme en algo"
  ],
  "agradecimientos": "A mi mamá y a mi hermano, por acompañarme durante todo este proceso, por su esfuerzo para conseguir lo que yo necesitaba y, sobre todo por demostrarme su apoyo, amor y orgullo",
  "foto": "img/yundacortesyuv_f.jpg",
  "firma": "img/yundacortesyuv_s.png",
  "rol": ""
 },
 {
  "nombre": "Johan Sebastian Masmelas Vega",
  "frase": "La constancia consede la victoria",
  "recuerdo": "Cuando me gradue de Ingeniero",
  "aspiraciones": [
   "Doctorado en Educacion",
   "Tener Salud",
   "Ser feliz"
  ],
  "agradecimientos": "a mi familia quiero agradecerles por ser mi mayor refujio y mi equipo incondicional.",
  "foto": "img/masmelasvegajo_f.jpg",
  "firma": "img/masmelasvegajo_s.png",
  "rol": "Director de grupo"
 }
];   // orden alfabético por apellido; el profesor va de último

const ICONOS = {
  nombre:'<svg viewBox="0 0 24 24"><circle cx="12" cy="7.5" r="4.5"/><path d="M3 22c0-5 4-8 9-8s9 3 9 8z"/></svg>',
  frase:'<svg viewBox="0 0 24 24"><path d="M12 1.5l3 6.8 7.4.7-5.6 4.9 1.7 7.2L12 17.2 5.5 21.1l1.7-7.2L1.6 9l7.4-.7z"/></svg>',
  recuerdo:'<svg viewBox="0 0 24 24"><path d="M2 4h8c1.1 0 2 .9 2 2v14c0-1.1-.9-2-2-2H2zM22 4h-8c-1.1 0-2 .9-2 2v14c0-1.1.9-2 2-2h8z"/></svg>',
  aspiraciones:'<svg viewBox="0 0 24 24"><path d="M1 21l8-14 5 8 3-4 6 10z"/><circle cx="18" cy="5" r="2.2"/></svg>',
  gracias:'<svg viewBox="0 0 24 24"><path d="M12 21s-9-5.6-9-12a5 5 0 019-3 5 5 0 019 3c0 6.400-9 12-9 12z"/></svg>'
};
const DECO = `<svg class="deco" viewBox="0 0 600 900" aria-hidden="true">
 <polygon points="470,0 600,0 600,130" fill="#f2b705"/><polygon points="530,0 600,0 600,70" fill="#1f7a3d"/><polygon points="570,0 600,0 600,30" fill="#c8211d"/>
 <polygon points="0,770 0,900 130,900" fill="#1f7a3d"/><polygon points="0,830 0,900 70,900" fill="#f2b705"/><polygon points="0,872 0,900 28,900" fill="#c8211d"/>
 <polygon points="600,770 600,900 470,900" fill="#f2b705"/><polygon points="600,830 600,900 530,900" fill="#c8211d"/><polygon points="600,872 600,900 572,900" fill="#1f7a3d"/>
 <g fill="none" stroke-linecap="round"><path d="M412 150h14M418 158h10" stroke="#c8211d" stroke-width="3"/><path d="M360 700h12" stroke="#f2b705" stroke-width="3"/></g></svg>`;

function campo(clase, color, icono, titulo, estilo, contenido){
  return `<section class="campo ${clase} ${color}" style="${estilo}">
    <div class="etiqueta"><i>${ICONOS[icono]}</i><b>${titulo}</b></div>
    <div class="caja"><div class="txt">${contenido}</div></div></section>`;
}
const esc = t => String(t).replace(/[&<>]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));

// Una sola plantilla para TODOS los estudiantes
function crearPagina(e, i){
  const lista = e.aspiraciones.length
    ? `<ul class="lista">${e.aspiraciones.map(a=>`<li>${esc(a)}</li>`).join('')}</ul>` : '';
  const pagina = document.createElement('article');
  pagina.className = 'pagina oculto';
  pagina.dataset.indice = i;
  pagina.innerHTML = `${DECO}
   <img class="marca" src="img/escudo.png" alt="">
   <header class="cab"><img src="img/escudo.png" alt="Escudo institucional">
     <div class="promo">PROMOCIÓN 2026</div><h1 class="titulo">ANUARIO ESCOLAR</h1>
     <div class="sub">INSTITUCIÓN EDUCATIVA EUGENIO FERRO FALLA</div></header>
   ${campo('nombre','amarillo','nombre','Nombre:','top:150px;height:92px',
      esc(e.nombre) + (e.rol ? `<div class="rol">${esc(e.rol)}</div>` : ''))}
   ${campo('','verde','frase','Frase favorita:','top:258px;height:88px',esc(e.frase))}
   ${campo('','rojo','recuerdo','Recuerdo favorito:','top:362px;height:112px',esc(e.recuerdo))}
   ${campo('','verde','aspiraciones','Lista de aspiraciones:','top:494px;height:176px',lista)}
   ${campo('','amarillo','gracias','Agradecimientos:','top:690px;left:30px;width:545px;height:128px',esc(e.agradecimientos))}
   <div class="foto"><img src="${e.foto}" alt="Foto de ${esc(e.nombre)}"></div>
   <div class="firma"><span>Firma:</span><div class="trazo">${
      e.firma ? `<img src="${e.firma}" alt="Firma de ${esc(e.nombre)}">` : `<em>${esc(e.nombre)}</em>`}</div><hr></div>
   <div class="banner">CIENCIA Y VIRTUD</div>`;
  return pagina;
}

const libro = document.getElementById('libro');
const marco = document.getElementById('marco');
/* PORTADA: primera página del libro (imagen completa a 600×900) */
function crearPortada(){
  const p = document.createElement('article');
  p.className = 'pagina portada oculto';
  p.innerHTML = '<img src="img/portada.jpg" alt="Portada del Anuario Escolar · Promoción 2026">';
  return p;
}
const paginas = [crearPortada(), ...estudiantes.map(crearPagina)];
paginas.forEach(p => libro.appendChild(p));
const btnAnt = document.getElementById('anterior'), btnSig = document.getElementById('siguiente');
const contador = document.getElementById('contador');
let actual = 0, ocupado = false;

/* Ajusta el tamaño de letra para que el texto quepa en su caja */
function ajustarTextos(){
  document.querySelectorAll('.titulo').forEach(h=>{ let f=62; h.style.fontSize=f+'px'; while(h.scrollWidth>h.clientWidth && f>30){ f-=1; h.style.fontSize=f+'px'; } });
  document.querySelectorAll('.pagina .txt').forEach(t=>{
    t.classList.remove('scroll'); let f = t.parentElement.parentElement.classList.contains('nombre') ? 25 : 19;
    t.style.fontSize = f+'px';
    while (t.scrollHeight > t.clientHeight + 1 && f > 9.5){ f -= .5; t.style.fontSize = f+'px'; }
    if (t.scrollHeight > t.clientHeight + 1){ t.style.fontSize='11.5px'; t.classList.add('scroll'); }
  });
}
/* Escala el libro (600×900) a la pantalla */
function escalar(){
  const k = Math.min((innerWidth-24)/600, (innerHeight-110)/900, 1.25);
  libro.style.transform = `scale(${k})`;
  marco.style.width = 600*k+'px'; marco.style.height = 900*k+'px';
}

/* Muestra la página n con efecto de hoja que se pasa */
function mostrar(n, dir){
  if (ocupado || n < 0 || n >= paginas.length || n === actual) return;
  ocupado = true;
  const vieja = paginas[actual], nueva = paginas[n];
  const fin = () => { ocupado = false; };
  if (dir > 0){                                   // SIGUIENTE: la hoja actual gira y deja ver la que sigue
    nueva.classList.remove('oculto');
    vieja.classList.add('arriba');
    requestAnimationFrame(()=> vieja.classList.add('pasada'));
    setTimeout(()=>{ vieja.classList.add('oculto','sin-transicion'); vieja.classList.remove('arriba','pasada');
      void vieja.offsetWidth; vieja.classList.remove('sin-transicion'); fin(); }, 780);
  } else {                                        // ANTERIOR: la hoja anterior vuelve girando desde la izquierda
    nueva.classList.add('sin-transicion','pasada','arriba'); nueva.classList.remove('oculto');
    void nueva.offsetWidth; nueva.classList.remove('sin-transicion');
    requestAnimationFrame(()=> nueva.classList.remove('pasada'));
    setTimeout(()=>{ vieja.classList.add('oculto'); nueva.classList.remove('arriba'); fin(); }, 780);
  }
  actual = n; actualizarControles();
}
function actualizarControles(){
  contador.textContent = `${actual+1} / ${paginas.length}`;
  btnAnt.disabled = actual === 0; btnSig.disabled = actual === paginas.length-1;
  history.replaceState(null,'','#'+(actual+1));
}
const siguiente = () => mostrar(actual+1, 1);
const anterior  = () => mostrar(actual-1, -1);
btnSig.addEventListener('click', siguiente);
btnAnt.addEventListener('click', anterior);
addEventListener('keydown', e => { if (e.key==='ArrowRight') siguiente(); if (e.key==='ArrowLeft') anterior(); });
let x0 = null;                                    // deslizar con el dedo en el celular
marco.addEventListener('touchstart', e => x0 = e.touches[0].clientX, {passive:true});
marco.addEventListener('touchend', e => { if (x0===null) return; const dx = e.changedTouches[0].clientX - x0;
  if (Math.abs(dx) > 50) dx < 0 ? siguiente() : anterior(); x0 = null; });
addEventListener('resize', escalar);

escalar();
const inicio = parseInt(location.hash.slice(1)) - 1;
if (inicio > 0 && inicio < paginas.length) actual = inicio;
paginas[actual].classList.remove('oculto'); actualizarControles();
(document.fonts ? document.fonts.ready : Promise.resolve()).then(ajustarTextos);
ajustarTextos();
