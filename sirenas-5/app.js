const activities = [
  {
    id: "semana-1-carta-coco",
    kind: "quiz",
    week: "Semana 1",
    step: "Semana 1 · Día 1",
    title: "Leemos la carta de Coco",
    text: "Coco nos pide ayuda para resolver enigmas y misterios de sus amigas las sirenas.",
    image: "../content/resources/tortuga coco.jpg",
    imageAlt: "Tortuga Coco, personaje guia del proyecto",
    resource: "../content/resources/COCO CARTA PRESENTACIÓN.pdf",
    resourceText: "Abrir carta original",
    story: [
      "Hola, soy Coco.",
      "Mis amigas las sirenas tienen problemas.",
      "Soy una tortuga bebe y necesito vuestra ayuda.",
      "Vamos a resolver enigmas y misterios juntos."
    ],
    quiz: {
      question: "¿Por qué Coco necesita nuestra ayuda?",
      answers: [
        {
          text: "Porque sus amigas las sirenas tienen problemas.",
          correct: true
        },
        {
          text: "Porque quiere dormir en la arena.",
          correct: false
        },
        {
          text: "Porque ha perdido una pelota.",
          correct: false
        }
      ],
      success: "Muy bien. Coco necesita ayuda porque las sirenas tienen problemas.",
      retry: "Casi. Escucha otra vez la carta de Coco y vuelve a probar."
    }
  },
  {
    id: "semana-1-que-sabemos",
    kind: "worksheet",
    week: "Semana 1",
    step: "Semana 1 · Día 2",
    title: "¿Qué sabemos sobre escritura?",
    text: "Completamos la ficha. Escribimos lo que sabemos, lo que queremos saber y como podemos aprenderlo.",
    image: "../content/resources/thumbs/que-sabemos-de-sirenas.jpg",
    imageAlt: "Ficha que sabemos sobre las sirenas",
    resource: "../content/resources/que sabemos de sirenas.png",
    resourceText: "Abrir ficha original",
    story: [
      "Primero pensamos juntos.",
      "Despues escribimos en los tres huecos de la ficha.",
      "Al final podemos descargar una imagen con nuestras respuestas."
    ],
    worksheet: {
      image: "../content/resources/que sabemos de sirenas.png",
      imageAlt: "Ficha que sabemos sobre las sirenas",
      downloadName: "que-sabemos-sirenas.png",
      fields: [
        { key: "known", label: "¿Qué sabemos?", aria: "Escribir que sabemos sobre las sirenas", maxLength: 170, box: { left: 4.5, top: 40, width: 27.5, height: 43 }, canvas: { x: 70, y: 450, width: 405 } },
        { key: "want", label: "¿Qué queremos saber?", aria: "Escribir que queremos saber sobre las sirenas", maxLength: 170, box: { left: 35.7, top: 40, width: 26.7, height: 43 }, canvas: { x: 560, y: 450, width: 390 } },
        { key: "how", label: "¿Cómo podemos aprenderlo?", aria: "Escribir como podemos aprenderlo", maxLength: 170, box: { left: 67.2, top: 40, width: 28.2, height: 35 }, canvas: { x: 1035, y: 450, width: 410 } }
      ]
    }
  },
  {
    id: "semana-1-poema-rimas",
    kind: "memory",
    week: "Semana 1",
    step: "Semana 1 · Día 3",
    title: "Escuchamos el poema y jugamos con rimas",
    text: "Primero escuchamos el poema. Despues jugamos al memory y buscamos palabras que riman.",
    image: "../content/resources/thumbs/lectura-poema.jpg",
    imageAlt: "Ficha de lectura del poema Sirenas",
    resource: "../content/resources/poesia-5-anos-a-ana.mp3",
    resourceText: "Abrir audio del poema",
    story: [
      "Escucha el poema con atencion.",
      "Toca dos tarjetas.",
      "Si las palabras riman, la pareja se queda descubierta."
    ],
    pairs: [
      ["alga", "nalga"],
      ["ola", "caracola"],
      ["confines", "delfines"],
      ["mar", "cantar"]
    ]
  },
  {
    id: "semana-1-bits-lectura",
    kind: "bits",
    week: "Semana 1",
    step: "Semana 1 · Día 4",
    title: "Bits de lectura",
    text: "Leemos versos del poema y completamos los huecos con palabras importantes.",
    image: "../content/resources/thumbs/panel-de-palabras-del-mar.jpg",
    imageAlt: "Panel de palabras del mar",
    resource: "../content/resources/bits SIRENAS angel gonzalez.pdf",
    resourceText: "Abrir bits originales",
    story: [
      "Mira los versos del poema.",
      "Arrastra cada palabra a su hueco.",
      "Tambien puedes tocar una palabra y despues tocar su hueco."
    ],
    blanks: ["acantilado", "plenilunio", "sirena", "cabellera", "delfines", "mar"]
  },
  {
    id: "semana-2-palabras-imagenes",
    kind: "association",
    week: "Semana 2",
    step: "Semana 2 · Día 6",
    title: "Las palabras del mar",
    text: "Unimos cada imagen con su tarjeta de lectura en mayusculas y minusculas.",
    image: "assets/bits-cut/sirena.jpg",
    imageAlt: "Imagen de sirena de los bits de lectura",
    resource: "../content/resources/bits SIRENAS angel gonzalez.pdf",
    resourceText: "Abrir bits originales",
    story: [
      "Mira una imagen.",
      "Busca su palabra.",
      "Arrastra la tarjeta o tocala y despues toca la imagen."
    ],
    associationGroups: [
      [
        { key: "acantilado", upper: "ACANTILADO", lower: "acantilado", image: "assets/bits-cut/acantilado.jpg" },
        { key: "barco", upper: "BARCO", lower: "barco", image: "assets/bits-cut/barco.jpg" },
        { key: "cabellera", upper: "CABELLERA", lower: "cabellera", image: "assets/bits-cut/cabellera.jpg" }
      ],
      [
        { key: "caracola", upper: "CARACOLA", lower: "caracola", image: "assets/bits-cut/caracola.jpg" },
        { key: "delfin", upper: "DELFÍN", lower: "delfín", image: "assets/bits-cut/delfin.jpg" },
        { key: "mar", upper: "MAR", lower: "mar", image: "assets/bits-cut/mar.jpg" }
      ],
      [
        { key: "marinera", upper: "MARINERA", lower: "marinera", image: "assets/bits-cut/marinera.jpg" },
        { key: "marinero", upper: "MARINERO", lower: "marinero", image: "assets/bits-cut/marinero.jpg" },
        { key: "mensaje", upper: "MENSAJE", lower: "mensaje", image: "assets/bits-cut/mensaje.jpg" }
      ],
      [
        { key: "ola", upper: "OLA", lower: "ola", image: "assets/bits-cut/ola.jpg" },
        { key: "plenilunio", upper: "PLENILUNIO", lower: "plenilunio", image: "assets/bits-cut/plenilunio.jpg" },
        { key: "poema", upper: "POEMA", lower: "poema", image: "assets/bits-cut/poema.jpg" }
      ],
      [
        { key: "poeta", upper: "POETA", lower: "poeta", image: "assets/bits-cut/poeta.jpg" },
        { key: "sal", upper: "SAL", lower: "sal", image: "assets/bits-cut/sal.jpg" },
        { key: "sirena", upper: "SIRENA", lower: "sirena", image: "assets/bits-cut/sirena.jpg" }
      ],
      [
        { key: "timon", upper: "TIMÓN", lower: "timón", image: "assets/bits-cut/timon.jpg" },
        { key: "triton", upper: "TRITÓN", lower: "tritón", image: "assets/bits-cut/triton.jpg" },
        { key: "velero", upper: "VELERO", lower: "velero", image: "assets/bits-cut/velero.jpg" }
      ]
    ]
  },
  {
    id: "semana-2-caja-palabras-magicas",
    kind: "magic-box",
    week: "Semana 2",
    step: "Semana 2 · Día 7",
    title: "La caja de palabras mágicas",
    text: "Arrastramos a la caja mágica los bits de lectura que sí aparecen en el poema Sirenas.",
    image: "assets/ui/caja-magica.jpg",
    imageAlt: "Caja mágica abierta para guardar palabras del poema",
    resource: "../content/resources/bits SIRENAS angel gonzalez.pdf",
    resourceText: "Abrir bits originales",
    story: [
      "Mira cada bit de lectura.",
      "Arrastra a la caja solo las palabras que salen en el poema.",
      "Timón, poema, marinero y marinera no forman parte del poema."
    ],
    magicWords: [
      { key: "acantilado", upper: "ACANTILADO", lower: "acantilado", valid: true },
      { key: "barco", upper: "BARCO", lower: "barco", valid: true },
      { key: "cabellera", upper: "CABELLERA", lower: "cabellera", valid: true },
      { key: "caracola", upper: "CARACOLA", lower: "caracola", valid: true },
      { key: "delfin", upper: "DELFÍN", lower: "delfín", valid: true },
      { key: "mar", upper: "MAR", lower: "mar", valid: true },
      { key: "marinera", upper: "MARINERA", lower: "marinera", valid: false },
      { key: "marinero", upper: "MARINERO", lower: "marinero", valid: false },
      { key: "mensaje", upper: "MENSAJE", lower: "mensaje", valid: true },
      { key: "ola", upper: "OLA", lower: "ola", valid: true },
      { key: "plenilunio", upper: "PLENILUNIO", lower: "plenilunio", valid: true },
      { key: "poema", upper: "POEMA", lower: "poema", valid: false },
      { key: "poeta", upper: "POETA", lower: "poeta", valid: true },
      { key: "sal", upper: "SAL", lower: "sal", valid: true },
      { key: "sirena", upper: "SIRENA", lower: "sirena", valid: true },
      { key: "timon", upper: "TIMÓN", lower: "timón", valid: false },
      { key: "triton", upper: "TRITÓN", lower: "tritón", valid: true },
      { key: "velero", upper: "VELERO", lower: "velero", valid: true }
    ]
  },
  {
    id: "semana-2-test-poesia-grecia",
    kind: "multi-quiz",
    week: "Semana 2",
    step: "Semana 2 · Día 8",
    title: "Test: el origen de la poesía",
    text: "Respondemos tres preguntas sobre las primeras poesías y la poesía en Grecia.",
    image: "assets/ui/lira.jpg",
    imageAlt: "Lira griega para el test de poesía",
    resource: "../content/resources/5.png",
    resourceText: "Abrir ficha original",
    story: [
      "Lee la pregunta.",
      "Mira las imágenes de ayuda.",
      "Toca la respuesta correcta."
    ],
    questions: [
      {
        question: "Las primeras poesías aparecen en:",
        visual: "assets/ui/lienzo.avif",
        answers: [
          { text: "Grecia", image: "assets/ui/bandera-grecia.webp", alt: "Bandera de Grecia", correct: true },
          { text: "España", image: "assets/ui/bandera-espana.webp", alt: "Bandera de España", correct: false },
          { text: "Portugal", image: "assets/ui/bandera-portugal.png", alt: "Bandera de Portugal", correct: false }
        ],
        success: "Muy bien. Las primeras poesías aparecen en Grecia.",
        retry: "Casi. Mira la bandera de Grecia y prueba otra vez."
      },
      {
        question: "El padre de la poesía es:",
        visual: "assets/ui/libro.png",
        answers: [
          { text: "Homero", correct: true },
          { text: "Aristóteles", correct: false },
          { text: "Platón", correct: false }
        ],
        success: "Muy bien. Homero es considerado el padre de la poesía.",
        retry: "Casi. La respuesta correcta empieza por Ho."
      },
      {
        question: "Las poesías en Grecia se:",
        visual: "assets/ui/lira.jpg",
        answers: [
          { text: "Leían", correct: false },
          { text: "Cantaban", correct: true },
          { text: "Dibujaban", correct: false }
        ],
        success: "Muy bien. En Grecia las poesías se cantaban.",
        retry: "Casi. Fíjate en la lira: las poesías se cantaban."
      }
    ]
  },
  {
    id: "semana-2-personajes-caracteristicas",
    kind: "character-match",
    week: "Semana 2",
    step: "Semana 2 · Día 9",
    title: "Personajes del poema",
    text: "Emparejamos a Tritón, Sirena y Delfín con sus características.",
    image: "assets/bits-cut/triton.jpg",
    imageAlt: "Tritón de los bits de lectura",
    resource: "../content/resources/bits SIRENAS angel gonzalez.pdf",
    resourceText: "Abrir bits originales",
    story: [
      "Mira los personajes del poema.",
      "Toca una tarjeta de características.",
      "Después toca todos los personajes que cumplen esa característica."
    ],
    characters: [
      { key: "triton", name: "Tritón", image: "assets/bits-cut/triton.jpg" },
      { key: "sirena", name: "Sirena", image: "assets/bits-cut/sirena.jpg" },
      { key: "delfin", name: "Delfín", image: "assets/bits-cut/delfin.jpg" }
    ],
    characteristicCards: [
      { id: "mar", text: "Viven en el mar", matches: ["triton", "sirena", "delfin"] },
      { id: "cola", text: "Tienen cola", matches: ["triton", "sirena", "delfin"] },
      { id: "cantan", text: "Cantan", matches: ["sirena"] },
      { id: "tridente", text: "Tienen tridente", matches: ["triton"] },
      { id: "animal", text: "Es un animal", matches: ["delfin"] },
      { id: "cabellera", text: "Tienen larga cabellera", matches: ["triton", "sirena"] },
      { id: "brazos", text: "Tienen brazos", matches: ["triton", "sirena"] },
      { id: "ojos", text: "Tienen ojos", matches: ["triton", "sirena", "delfin"] },
      { id: "espiraculo", text: "Respira por el espiráculo y no por la nariz", matches: ["delfin"] }
    ]
  },
  {
    id: "semana-3-crucigrama-marino",
    kind: "crossword",
    week: "Semana 3",
    step: "Semana 3 · Día 11",
    title: "Crucigrama marino",
    text: "Completamos las palabras BARCO, VELERO y POPA con fichas de letras.",
    image: "assets/letters/b.png",
    imageAlt: "Ficha de madera con la letra B",
    resource: "../content/resources/bits SIRENAS angel gonzalez.pdf",
    resourceText: "Abrir bits originales",
    story: [
      "Toca una letra.",
      "Toca la casilla blanca que corresponda.",
      "Algunas letras no sirven para completar las palabras."
    ],
    crosswordWords: [
      { word: "BARCO", row: 2, col: 3 },
      { word: "VELERO", row: 3, col: 4 },
      { word: "POPA", row: 5, col: 2 }
    ],
    crosswordTemplateWords: [
      { word: "DELFIN", row: 1, col: 1 },
      { word: "SIRENA", row: 0, col: 5, direction: "vertical" },
      { word: "TRITON", row: 4, col: 0 }
    ],
    crosswordLetters: ["B", "A", "C", "O", "V", "L", "E", "R", "O", "P", "O", "P", "R", "O", "E", "U", "S", "K", "T"]
  },
  {
    id: "semana-3-linea-tiempo-angel",
    kind: "timeline",
    week: "Semana 3",
    step: "Semana 3 · Día 12",
    title: "Linea del tiempo de Ángel González",
    text: "Conocemos cuatro momentos importantes de la vida de Ángel González.",
    image: "assets/ui/angel-gonzalez.jpg",
    imageAlt: "Retrato de Ángel González",
    resource: "../content/resources/bits SIRENAS angel gonzalez.pdf",
    resourceText: "Abrir bits originales",
    story: [
      "Miramos la foto de Ángel González.",
      "Recorremos la línea del tiempo.",
      "Leemos cuatro momentos importantes de su vida."
    ],
    timelineEvents: [
      { year: "1925", text: "Nace en Oviedo" },
      { year: "1945", text: "Fue maestro en León" },
      { year: "1985", text: "Premio Príncipe de Asturias de las Letras" },
      { year: "2011", text: "Escribe el poema de Sirenas" }
    ]
  },
  {
    id: "semana-3-reto-poema-completo",
    kind: "bits",
    week: "Semana 3",
    step: "Semana 3 · Día 13",
    title: "Reto cooperativo: completamos el poema",
    text: "Trabajamos en equipo para completar el poema Sirenas con sus palabras importantes.",
    image: "../content/resources/thumbs/lectura-poema.jpg",
    imageAlt: "Ficha de lectura del poema Sirenas",
    resource: "../content/resources/bits SIRENAS angel gonzalez.pdf",
    resourceText: "Abrir bits originales",
    story: [
      "Leemos el poema completo.",
      "Buscamos entre todos la palabra que falta.",
      "Elegimos la palabra correcta en cada desplegable."
    ],
    completionMode: "select",
    poemLines: [
      ["En un ", { blank: "acantilado" }, " solitario,"],
      ["una noche de ", { blank: "junio" }, ","],
      ["a la luz difusa del ", { blank: "plenilunio" }, ","],
      ["presencié un episodio extraordinario."],
      ["A mi vera,"],
      ["dos ", { blank: "sirena" }, "s de cuerpo adolescente"],
      ["y larga cabellera"],
      ["surgieron de las aguas de repente"],
      ["y empezaron a hablar de esta manera."],
      ["- ", { blank: "ola" }, ", ", { blank: "ola" }, ", ", { blank: "ola" }, ", ", { blank: "ola" }, "."],
      ["- ¿Qué ", { blank: "ola" }, " tienes tú?"],
      ["- Tres ", { blank: "delfines" }, " y mero."],
      ["- Vas atrasada un barbo y siete ostras."],
      ["- ¿Tienes ", { blank: "alga" }, " que hacer?"],
      ["- No tengo ", { blank: "nalga" }, " pero traigo ", { blank: "cola" }, "."],
      ["- Podríamos acercarnos"],
      ["de aquel ", { blank: "barco" }, " ", { blank: "velero" }, " hasta la ", { blank: "popa" }],
      ["y cantar a dos voces las canciones"],
      ["que a las tripulaciones vuelven locas."],
      ["- Es divertido ver a los marinos"],
      ["arrojándose al agua por la borda,"],
      ["pero ahora estoy citada"],
      ["con un tritón barbado que me ronda."],
      ["- Entonces, nada, nada, nada."],
      ["Volveré a verte dentro de una ", { blank: "ola" }, "."],
      ["- Si no voy,"],
      ["te dejaré un mensaje en una ", { blank: "caracola" }, "."],
      ["- ¿Y qué más?"],
      ["- Solo ", { blank: "sal" }, "."],
      ["- Y tú ", { blank: "sal" }, " sola."],
      ["- ", { blank: "ola" }, ", ", { blank: "ola" }, " y adiós."],
      ["- Adiós y ", { blank: "ola" }, ", ", { blank: "ola" }, ", ", { blank: "ola" }, "."],
      ["Así se despidieron, y nadando"],
      ["no sé hacia qué marítimos confines,"],
      ["se fueron las sirenas alejando"],
      ["escoltadas por ágiles delfines."],
      ["Yo me quedé pensando:"],
      ["si les hubiese dado por cantar"],
      ["habría tenido que tirarme al ", { blank: "mar" }, "."],
      [{ blank: "Ángel" }, " ", { blank: "González" }]
    ],
    blanks: [
      "acantilado", "junio", "plenilunio", "sirena",
      "ola", "ola", "ola", "ola", "ola", "ola", "ola", "ola", "ola", "ola", "ola",
      "alga", "nalga", "cola", "sal", "sal", "barco", "velero", "popa", "caracola",
      "delfines", "mar", "Ángel", "González"
    ],
    choices: {
      acantilado: ["acantilado", "barco", "caracola"],
      junio: ["junio", "mar", "sal"],
      plenilunio: ["plenilunio", "velero", "delfines"],
      sirena: ["sirena", "caracola", "barco"],
      ola: ["ola", "alga", "cola"],
      delfines: ["delfines", "velero", "popa"],
      alga: ["alga", "ola", "nalga"],
      nalga: ["nalga", "alga", "sal"],
      cola: ["cola", "ola", "popa"],
      barco: ["barco", "delfines", "mar"],
      velero: ["velero", "plenilunio", "caracola"],
      popa: ["popa", "cola", "sal"],
      caracola: ["caracola", "sirena", "barco"],
      sal: ["sal", "mar", "ola"],
      mar: ["mar", "junio", "alga"],
      Ángel: ["Ángel", "Velero", "Delfines"],
      González: ["González", "Acantilado", "Caracola"]
    }
  },
  {
    id: "semana-3-cierre-proyecto",
    kind: "worksheet",
    week: "Semana 3",
    step: "Semana 3 · Día 14",
    title: "Cierre del proyecto",
    text: "Escribimos o dibujamos qué hemos aprendido y qué nos ha gustado más del proyecto Sirenas.",
    image: "../content/resources/que hemos aprendido.png",
    imageAlt: "Ficha de cierre que hemos aprendido del proyecto Sirenas",
    resource: "../content/resources/que hemos aprendido.png",
    resourceText: "Abrir ficha original",
    story: [
      "Recordamos todo lo trabajado en el proyecto.",
      "Escribimos o dibujamos lo que hemos aprendido.",
      "Compartimos lo que más nos ha gustado."
    ],
    worksheet: {
      image: "../content/resources/que hemos aprendido.png",
      imageAlt: "Ficha de cierre del proyecto Sirenas",
      downloadName: "que-hemos-aprendido-sirenas.png",
      fields: [
        { key: "learned", label: "¿Qué hemos aprendido?", aria: "Escribir que hemos aprendido", maxLength: 260, box: { left: 3.1, top: 40, width: 45.2, height: 46 }, canvas: { x: 65, y: 430, width: 650 } },
        { key: "liked", label: "¿Qué nos ha gustado más?", aria: "Escribir que nos ha gustado mas", maxLength: 260, box: { left: 50.4, top: 40, width: 45.2, height: 46 }, canvas: { x: 820, y: 430, width: 650 } }
      ]
    }
  }
];

const wordDrawings = {
  alga: '<svg class="word-drawing" viewBox="0 0 80 64" aria-hidden="true"><path d="M24 58c2-18-8-26-4-44 12 14 14 28 4 44Z" fill="#54b987"/><path d="M40 58c-2-22 8-36 3-50 16 15 14 36-3 50Z" fill="#2f9e73"/><path d="M55 58c-1-16 8-23 6-38 12 12 9 28-6 38Z" fill="#79c99f"/><path d="M10 58h60" stroke="#0e6f7a" stroke-width="5" stroke-linecap="round"/></svg>',
  nalga: '<svg class="word-drawing" viewBox="0 0 80 64" aria-hidden="true"><path d="M18 30c0-13 10-22 22-22s22 9 22 22v17c0 8-6 13-14 13-4 0-7-1-10-4-3 3-6 4-10 4-8 0-14-5-14-13V30Z" fill="#ffb199"/><path d="M40 13v43" stroke="#d77b70" stroke-width="4" stroke-linecap="round"/><path d="M20 35c5-3 12-4 18 0M42 35c6-4 13-3 18 0" stroke="#8c4a48" stroke-width="3" stroke-linecap="round"/></svg>',
  ola: '<svg class="word-drawing" viewBox="0 0 80 64" aria-hidden="true"><path d="M8 47c13-22 31-24 44-9 5 6 11 6 18 1-4 12-15 20-30 15-10-3-18-7-32-7Z" fill="#55c3dd"/><path d="M44 36c6-7 15-6 20 0-6-1-12 1-16 7" fill="#e9fbff"/><path d="M9 52c18 6 38 6 62-1" stroke="#0e7f98" stroke-width="4" stroke-linecap="round"/></svg>',
  caracola: '<svg class="word-drawing" viewBox="0 0 80 64" aria-hidden="true"><path d="M15 44c7-22 28-35 46-23 12 8 8 28-9 33-17 5-32 2-37-10Z" fill="#ffd2a1"/><path d="M27 42c5-14 18-21 29-14 7 5 5 17-6 20-11 3-20 1-23-6Z" fill="#f7a979"/><path d="M39 39c2-5 7-8 11-5 3 2 2 6-2 8-4 1-8 0-9-3Z" fill="#fff1d8"/><path d="M21 45c10 3 28 4 41-4M29 31c5 5 8 11 7 18M43 24c5 6 7 13 5 23" stroke="#9d6a52" stroke-width="3" stroke-linecap="round"/></svg>',
  confines: '<svg class="word-drawing" viewBox="0 0 80 64" aria-hidden="true"><path d="M8 48c12-13 22-19 32-19s20 6 32 19" fill="none" stroke="#7bb7c8" stroke-width="5" stroke-linecap="round"/><path d="M16 49c10-8 17-11 24-11s14 3 24 11" fill="none" stroke="#f4b942" stroke-width="4" stroke-linecap="round"/><path d="M13 52h54" stroke="#11343a" stroke-width="4" stroke-linecap="round"/><circle cx="60" cy="21" r="7" fill="#ffd65a"/></svg>',
  delfines: '<svg class="word-drawing" viewBox="0 0 80 64" aria-hidden="true"><path d="M18 40c13-18 31-25 46-15-8 0-11 4-13 11 6 2 10 6 13 12-13-2-23-2-35 2-10 3-16-2-11-10Z" fill="#60b9d7"/><path d="M21 39c-6-2-10-7-12-12 9 1 15 4 18 10" fill="#60b9d7"/><path d="M49 25c3-6 8-9 15-10-3 7-7 12-14 15" fill="#3f9fc3"/><circle cx="55" cy="30" r="2" fill="#12343a"/></svg>',
  mar: '<svg class="word-drawing" viewBox="0 0 80 64" aria-hidden="true"><rect x="8" y="20" width="64" height="32" rx="8" fill="#8de1f0"/><path d="M12 38c8-7 15-7 23 0s15 7 23 0 9-6 14-4" fill="none" stroke="#147c93" stroke-width="5" stroke-linecap="round"/><path d="M12 49c8-5 15-5 23 0s15 5 23 0" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/><circle cx="20" cy="16" r="5" fill="#baf3ff"/></svg>',
  cantar: '<svg class="word-drawing" viewBox="0 0 80 64" aria-hidden="true"><path d="M26 48c0 7-6 10-13 8-6-2-8-8-3-12 5-5 14-5 16 0V15h8v33Z" fill="#f06f4f"/><path d="M34 15c10 2 18 1 30-5v11c-10 6-20 7-30 5V15Z" fill="#f4b942"/><path d="M49 37c5-7 11-7 17-2M51 48c4-4 8-4 12-1" fill="none" stroke="#11343a" stroke-width="4" stroke-linecap="round"/></svg>'
};

const tiles = Array.from(document.querySelectorAll("[data-open]"));
const activityTiles = Array.from(document.querySelectorAll(".activity-tile[data-open]"));
const weekButtons = Array.from(document.querySelectorAll("[data-week-filter]"));
const sessionStars = document.querySelector("[data-session-stars]");
const panelImage = document.querySelector("[data-panel-image]");
const panelStep = document.querySelector("[data-panel-step]");
const panelTitle = document.querySelector("[data-panel-title]");
const panelText = document.querySelector("[data-panel-text]");
const storyText = document.querySelector("[data-story-text]");
const resourceLink = document.querySelector("[data-resource-link]");
const answerGrid = document.querySelector("[data-answer-grid]");
const quizCard = document.querySelector("[data-quiz-card]");
const quizQuestion = document.querySelector("[data-quiz-question]");
const quizFeedback = document.querySelector("[data-quiz-feedback]");
const worksheetCard = document.querySelector("[data-worksheet-card]");
const worksheetImage = document.querySelector("[data-worksheet-image]");
const worksheetFieldsContainer = document.querySelector("[data-worksheet-fields]");
const audioCard = document.querySelector("[data-audio-card]");
const poemAudio = document.querySelector("[data-poem-audio]");
const memoryCard = document.querySelector("[data-memory-card]");
const memoryGrid = document.querySelector("[data-memory-grid]");
const memoryStatus = document.querySelector("[data-memory-status]");
const bitsCard = document.querySelector("[data-bits-card]");
const bitsStatus = document.querySelector("[data-bits-status]");
const poemFill = document.querySelector("[data-poem-fill]");
const bitsTray = document.querySelector("[data-bits-tray]");
const associationCard = document.querySelector("[data-association-card]");
const associationStatus = document.querySelector("[data-association-status]");
const associationGrid = document.querySelector("[data-association-grid]");
const magicBoxCard = document.querySelector("[data-magic-box-card]");
const magicBoxStatus = document.querySelector("[data-magic-box-status]");
const magicBoxDropzone = document.querySelector("[data-magic-box-dropzone]");
const magicBoxWords = document.querySelector("[data-magic-box-words]");
const magicWordTray = document.querySelector("[data-magic-word-tray]");
const multiQuizCard = document.querySelector("[data-multi-quiz-card]");
const multiQuizProgress = document.querySelector("[data-multi-quiz-progress]");
const multiQuizVisual = document.querySelector("[data-multi-quiz-visual]");
const multiQuizQuestion = document.querySelector("[data-multi-quiz-question]");
const multiAnswerGrid = document.querySelector("[data-multi-answer-grid]");
const multiQuizFeedback = document.querySelector("[data-multi-quiz-feedback]");
const characterMatchCard = document.querySelector("[data-character-match-card]");
const characterMatchStatus = document.querySelector("[data-character-match-status]");
const characterTargets = document.querySelector("[data-character-targets]");
const characterTray = document.querySelector("[data-character-tray]");
const crosswordCard = document.querySelector("[data-crossword-card]");
const crosswordStatus = document.querySelector("[data-crossword-status]");
const crosswordBoard = document.querySelector("[data-crossword-board]");
const letterTray = document.querySelector("[data-letter-tray]");
const speakCrosswordWordsButton = document.querySelector("[data-speak-crossword-words]");
const toggleCrosswordHintsButton = document.querySelector("[data-toggle-crossword-hints]");
const timelineCard = document.querySelector("[data-timeline-card]");
const timelineStatus = document.querySelector("[data-timeline-status]");
const timelineRoad = document.querySelector("[data-timeline-road]");
const timelineTray = document.querySelector("[data-timeline-tray]");
const createZone = document.querySelector(".create-zone");
const resetQuizButton = document.querySelector("[data-reset-quiz]");
const downloadSheetButton = document.querySelector("[data-download-sheet]");
const resetMemoryButton = document.querySelector("[data-reset-memory]");
const resetBitsButton = document.querySelector("[data-reset-bits]");
const resetAssociationButton = document.querySelector("[data-reset-association]");
const resetMagicBoxButton = document.querySelector("[data-reset-magic-box]");
const resetMultiQuizButton = document.querySelector("[data-reset-multi-quiz]");
const resetCharacterMatchButton = document.querySelector("[data-reset-character-match]");
const resetCrosswordButton = document.querySelector("[data-reset-crossword]");
const resetTimelineButton = document.querySelector("[data-reset-timeline]");
const speakActivityButton = document.querySelector("[data-speak-activity]");
const speakPageButton = document.querySelector("[data-speak-page]");
const contrastButton = document.querySelector("[data-toggle-contrast]");
let currentWorksheet = null;

let currentIndex = 0;
const completedSessionActivities = new Set();
let flippedCards = [];
let matchedCards = 0;
let selectedBit = null;
let completedBits = 0;
let selectedWordCard = null;
let completedAssociations = 0;
let selectedMagicBit = null;
let completedMagicWords = 0;
let currentMultiQuestion = 0;
let selectedCharacteristic = null;
let completedCharacteristics = 0;
let selectedLetterTile = null;
let completedCrosswordCells = 0;
let currentCrosswordWords = [];
let selectedTimelineCard = null;
let completedTimelineItems = 0;

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "es-ES";
  utterance.rate = 0.86;
  window.speechSynthesis.speak(utterance);
}

function playChimeSound() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  const audioContext = new AudioContext();
  const start = audioContext.currentTime;
  const notes = [880, 1174.66, 1567.98];
  const masterGain = audioContext.createGain();

  masterGain.gain.setValueAtTime(0.0001, start);
  masterGain.gain.exponentialRampToValueAtTime(0.18, start + 0.02);
  masterGain.gain.exponentialRampToValueAtTime(0.0001, start + 0.55);
  masterGain.connect(audioContext.destination);

  notes.forEach((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const noteStart = start + index * 0.07;

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, noteStart);
    gain.gain.setValueAtTime(0.0001, noteStart);
    gain.gain.exponentialRampToValueAtTime(0.45, noteStart + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, noteStart + 0.34);
    oscillator.connect(gain);
    gain.connect(masterGain);
    oscillator.start(noteStart);
    oscillator.stop(noteStart + 0.36);
  });

  window.setTimeout(() => audioContext.close(), 650);
}

function activitySpeech(activity) {
  const parts = [
    activity.title,
    activity.text,
    ...activity.story
  ];
  if (activity.quiz) parts.push(activity.quiz.question);
  return parts.join(". ");
}

function resetQuiz() {
  quizFeedback.textContent = "";
  quizFeedback.className = "quiz-feedback";
  Array.from(answerGrid.children).forEach((button) => {
    button.disabled = false;
    button.classList.remove("is-correct", "is-wrong");
  });
}

function renderStory(activity) {
  storyText.replaceChildren();
  activity.story.forEach((line) => {
    const item = document.createElement("p");
    item.textContent = line;
    storyText.appendChild(item);
  });
}

function renderQuiz(activity) {
  answerGrid.replaceChildren();
  quizQuestion.textContent = activity.quiz.question;
  quizFeedback.textContent = "";
  quizFeedback.className = "quiz-feedback";

  activity.quiz.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.textContent = answer.text;
    button.addEventListener("click", () => {
      if (answer.correct) {
        button.classList.add("is-correct");
        quizFeedback.textContent = activity.quiz.success;
        quizFeedback.classList.add("is-success");
        speak(activity.quiz.success);
        markActivityDone(activity.id);
        Array.from(answerGrid.children).forEach((child) => {
          child.disabled = true;
        });
      } else {
        button.classList.add("is-wrong");
        quizFeedback.textContent = activity.quiz.retry;
        quizFeedback.classList.add("is-retry");
        speak(activity.quiz.retry);
      }
    });
    answerGrid.appendChild(button);
  });
}

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const nextIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[nextIndex]] = [shuffled[nextIndex], shuffled[index]];
  }
  return shuffled;
}

function renderSessionStars() {
  sessionStars.replaceChildren();
  activities.forEach((activity, index) => {
    const button = document.createElement("button");
    const isDone = completedSessionActivities.has(activity.id);
    button.className = "session-star";
    button.classList.toggle("is-active", index === currentIndex);
    button.type = "button";
    button.dataset.open = activity.id;
    button.setAttribute("aria-label", `${isDone ? "Actividad hecha" : "Actividad sin finalizar"}: ${activity.step}. ${activity.title}`);
    button.innerHTML = `<img src="assets/ui/${isDone ? "estrella-hecho.png" : "estrella-sin-hacer.png"}" alt="">`;
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      openActivity(activity.id, true);
    });
    sessionStars.appendChild(button);
  });
}

function markActivityDone(id = activities[currentIndex]?.id) {
  if (!id || completedSessionActivities.has(id)) return;
  completedSessionActivities.add(id);
  renderSessionStars();
}

function renderMemory(activity) {
  flippedCards = [];
  matchedCards = 0;
  memoryGrid.replaceChildren();
  memoryStatus.textContent = "Busca una pareja.";

  const cards = shuffle(activity.pairs.flatMap((pair, pairIndex) => (
    pair.map((word) => ({ word, pairIndex }))
  )));

  cards.forEach((card) => {
    const button = document.createElement("button");
    button.className = "memory-tile";
    button.type = "button";
    button.dataset.pair = String(card.pairIndex);
    button.dataset.word = card.word;
    button.setAttribute("aria-label", "Tarjeta boca abajo");
    button.innerHTML = `<span class="memory-back">?</span><span class="memory-face"><span class="memory-picture">${wordDrawings[card.word] || ""}</span><span class="memory-word"></span></span>`;
    button.addEventListener("click", () => flipMemoryCard(button));
    memoryGrid.appendChild(button);
  });
}

function flipMemoryCard(button) {
  if (
    button.disabled ||
    button.classList.contains("is-open") ||
    button.classList.contains("is-matched") ||
    flippedCards.length === 2
  ) {
    return;
  }

  button.classList.add("is-open");
  button.querySelector(".memory-word").textContent = button.dataset.word;
  button.setAttribute("aria-label", button.dataset.word);
  playChimeSound();
  speak(button.dataset.word);
  flippedCards.push(button);

  if (flippedCards.length !== 2) return;

  const [first, second] = flippedCards;
  if (first.dataset.pair === second.dataset.pair) {
    first.classList.add("is-matched");
    second.classList.add("is-matched");
    first.disabled = true;
    second.disabled = true;
    matchedCards += 2;
    flippedCards = [];
    memoryStatus.textContent = "Muy bien. Esas palabras riman.";
    speak("Muy bien. Esas palabras riman.");

    if (matchedCards === memoryGrid.children.length) {
      memoryStatus.textContent = "Juego terminado. Has encontrado todas las rimas.";
      speak("Juego terminado. Has encontrado todas las rimas.");
      markActivityDone();
    }
    return;
  }

  memoryStatus.textContent = "Prueba otra vez.";
  window.setTimeout(() => {
    first.classList.remove("is-open");
    second.classList.remove("is-open");
    first.querySelector(".memory-word").textContent = "";
    second.querySelector(".memory-word").textContent = "";
    first.setAttribute("aria-label", "Tarjeta boca abajo");
    second.setAttribute("aria-label", "Tarjeta boca abajo");
    flippedCards = [];
  }, 900);
}

function clearBitSelection() {
  if (selectedBit) {
    selectedBit.classList.remove("is-selected");
    selectedBit = null;
  }
}

function tryFillBlank(blank, bit) {
  if (!blank || !bit || blank.disabled || bit.disabled) return;

  if (blank.dataset.answer !== bit.dataset.word) {
    bitsStatus.textContent = "Prueba con otra palabra.";
    speak("Prueba con otra palabra.");
    clearBitSelection();
    return;
  }

  blank.textContent = bit.dataset.word;
  blank.classList.add("is-filled");
  blank.disabled = true;
  bit.disabled = true;
  bit.classList.remove("is-selected");
  bit.classList.add("is-used");
  completedBits += 1;
  playChimeSound();
  speak(bit.dataset.word);

  if (completedBits === poemFill.querySelectorAll("[data-answer]").length) {
    bitsStatus.textContent = "Muy bien. Has completado los versos.";
    speak("Muy bien. Has completado los versos.");
    markActivityDone();
  } else {
    bitsStatus.textContent = "Muy bien. Sigue completando.";
  }

  selectedBit = null;
}

function getChoicesForBlank(activity, word) {
  const configuredChoices = activity.choices?.[word];
  if (configuredChoices?.length) return shuffle([...configuredChoices]);

  const alternatives = Array.from(new Set(activity.blanks.filter((item) => item !== word))).slice(0, 2);
  return shuffle([word, ...alternatives]);
}

function trySelectBlank(select) {
  if (!select.value) return;

  if (select.value !== select.dataset.answer) {
    bitsStatus.textContent = "Prueba con otra palabra.";
    speak("Prueba con otra palabra.");
    select.value = "";
    return;
  }

  select.classList.add("is-filled");
  select.disabled = true;
  completedBits += 1;
  playChimeSound();
  speak(select.dataset.answer);

  if (completedBits === poemFill.querySelectorAll("[data-answer]").length) {
    bitsStatus.textContent = "Muy bien. Has completado el poema.";
    speak("Muy bien. Has completado el poema.");
    markActivityDone();
  } else {
    bitsStatus.textContent = "Muy bien. Sigue completando.";
  }
}

function createSelectBlank(word, activity) {
  const select = document.createElement("select");
  select.className = "poem-select";
  select.dataset.answer = word;
  select.setAttribute("aria-label", `Hueco para ${word}`);

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Elige";
  select.appendChild(placeholder);

  getChoicesForBlank(activity, word).forEach((choice) => {
    const option = document.createElement("option");
    option.value = choice;
    option.textContent = choice;
    select.appendChild(option);
  });

  select.addEventListener("change", () => trySelectBlank(select));
  return select;
}

function createBlank(word) {
  const blank = document.createElement("button");
  blank.className = "poem-blank";
  blank.type = "button";
  blank.dataset.answer = word;
  blank.setAttribute("aria-label", `Hueco para ${word}`);
  blank.addEventListener("dragover", (event) => event.preventDefault());
  blank.addEventListener("drop", (event) => {
    event.preventDefault();
    const bitId = event.dataTransfer.getData("text/plain");
    const bit = bitsTray.querySelector(`[data-bit-id="${bitId}"]`);
    tryFillBlank(blank, bit);
  });
  blank.addEventListener("click", () => tryFillBlank(blank, selectedBit));
  return blank;
}

function addText(target, text) {
  target.appendChild(document.createTextNode(text));
}

function renderPoemLine(parts, activity) {
  const line = document.createElement("p");
  line.className = "poem-line";

  parts.forEach((part) => {
    if (typeof part === "string") {
      addText(line, part);
      return;
    }
    line.appendChild(activity.completionMode === "select" ? createSelectBlank(part.blank, activity) : createBlank(part.blank));
  });

  poemFill.appendChild(line);
}

function renderBits(activity) {
  completedBits = 0;
  selectedBit = null;
  poemFill.replaceChildren();
  bitsTray.replaceChildren();
  bitsStatus.textContent = activity.completionMode === "select" ? "Elige la palabra correcta en cada desplegable." : "Arrastra una palabra a su hueco.";

  const defaultPoemLines = [
    ["En un ", { blank: "acantilado" }, " solitario, una noche de junio,"],
    ["A la luz difusa del ", { blank: "plenilunio" }, ", presencié un episodio extraordinario"],
    ["A mi vera, dos ", { blank: "sirena" }, "s de cuerpo adolescente y larga ", { blank: "cabellera" }],
    ["Surgieron de las aguas de repente y empezaron a hablar de esta manera:"],
    ["..."],
    ["Se fueron las sirenas alejando escoltadas por ágiles ", { blank: "delfines" }],
    ["Yo me quedé pensando: si les hubiera dado por cantar habría tenido que tirarme al ", { blank: "mar" }]
  ];

  (activity.poemLines || defaultPoemLines).forEach((line) => renderPoemLine(line, activity));

  if (activity.completionMode === "select") {
    bitsTray.hidden = true;
    return;
  }

  bitsTray.hidden = false;

  shuffle(activity.blanks.map((word, index) => ({ word, index }))).forEach((item) => {
    const bit = document.createElement("button");
    bit.className = "bit-card";
    bit.type = "button";
    bit.draggable = true;
    bit.dataset.word = item.word;
    bit.dataset.bitId = `${item.word}-${item.index}`;
    bit.textContent = item.word;
    bit.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", bit.dataset.bitId);
    });
    bit.addEventListener("click", () => {
      if (bit.disabled) return;
      clearBitSelection();
      selectedBit = bit;
      bit.classList.add("is-selected");
      bitsStatus.textContent = `Ahora toca el hueco de ${item.word}.`;
      speak(item.word);
    });
    bitsTray.appendChild(bit);
  });
}

function clearWordCardSelection() {
  if (selectedWordCard) {
    selectedWordCard.classList.remove("is-selected");
    selectedWordCard = null;
  }
}

function tryMatchAssociation(target, card) {
  if (!target || !card || target.disabled || card.disabled) return;

  if (target.dataset.key !== card.dataset.key) {
    associationStatus.textContent = "Prueba con otra tarjeta.";
    speak("Prueba con otra tarjeta.");
    clearWordCardSelection();
    return;
  }

  const label = target.querySelector(".association-label");
  label.textContent = `${card.dataset.upper} / ${card.dataset.lower}`;
  target.classList.add("is-matched");
  target.disabled = true;
  card.disabled = true;
  card.classList.remove("is-selected");
  card.classList.add("is-used");
  completedAssociations += 1;
  selectedWordCard = null;
  playChimeSound();
  speak(card.dataset.lower);

  if (completedAssociations === associationGrid.querySelectorAll(".association-target").length) {
    associationStatus.textContent = "Muy bien. Has unido todas las palabras.";
    speak("Muy bien. Has unido todas las palabras.");
    markActivityDone();
  } else {
    associationStatus.textContent = "Muy bien. Sigue buscando parejas.";
  }
}

function renderAssociation(activity) {
  completedAssociations = 0;
  selectedWordCard = null;
  associationGrid.replaceChildren();
  associationStatus.textContent = "Arrastra una palabra a su imagen.";

  activity.associationGroups.forEach((group, index) => {
    const section = document.createElement("section");
    section.className = "association-group";
    section.setAttribute("aria-label", `Grupo ${index + 1}`);

    const images = document.createElement("div");
    images.className = "association-images";
    group.forEach((item) => {
      const target = document.createElement("button");
      target.className = "association-target";
      target.type = "button";
      target.dataset.key = item.key;
      target.setAttribute("aria-label", `Imagen de ${item.lower}`);
      target.innerHTML = `<img src="${item.image}" alt=""><span class="association-label"></span>`;
      target.addEventListener("dragover", (event) => event.preventDefault());
      target.addEventListener("drop", (event) => {
        event.preventDefault();
        const key = event.dataTransfer.getData("text/plain");
        const card = section.querySelector(`[data-key="${key}"]`);
        tryMatchAssociation(target, card);
      });
      target.addEventListener("click", () => tryMatchAssociation(target, selectedWordCard));
      images.appendChild(target);
    });

    const tray = document.createElement("div");
    tray.className = "word-tray";
    shuffle(group).forEach((item) => {
      const card = document.createElement("button");
      card.className = "word-card";
      card.type = "button";
      card.draggable = true;
      card.dataset.key = item.key;
      card.dataset.upper = item.upper;
      card.dataset.lower = item.lower;
      card.innerHTML = `<span>${item.upper}</span><span>${item.lower}</span>`;
      card.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", item.key);
      });
      card.addEventListener("click", () => {
        if (card.disabled) return;
        clearWordCardSelection();
        selectedWordCard = card;
        card.classList.add("is-selected");
        associationStatus.textContent = `Ahora toca la imagen de ${item.lower}.`;
        speak(item.lower);
      });
      tray.appendChild(card);
    });

    section.appendChild(images);
    section.appendChild(tray);
    associationGrid.appendChild(section);
  });
}

function clearMagicBitSelection() {
  if (selectedMagicBit) {
    selectedMagicBit.classList.remove("is-selected");
    selectedMagicBit = null;
  }
}

function tryAddMagicWord(card) {
  if (!card || card.disabled) return;

  if (card.dataset.valid !== "true") {
    magicBoxStatus.textContent = `${card.dataset.lower} no sale en el poema. Busca otra palabra.`;
    speak(`${card.dataset.lower} no sale en el poema.`);
    clearMagicBitSelection();
    return;
  }

  const word = document.createElement("span");
  word.className = "magic-box-word";
  word.textContent = card.dataset.upper;
  magicBoxWords.appendChild(word);

  card.disabled = true;
  card.classList.remove("is-selected");
  card.classList.add("is-used");
  selectedMagicBit = null;
  completedMagicWords += 1;
  playChimeSound();
  speak(card.dataset.lower);

  const totalValidWords = magicWordTray.querySelectorAll('[data-valid="true"]').length;
  if (completedMagicWords === totalValidWords) {
    magicBoxStatus.textContent = "Muy bien. Has guardado todas las palabras del poema.";
    speak("Muy bien. Has guardado todas las palabras del poema.");
    markActivityDone();
  } else {
    magicBoxStatus.textContent = "Muy bien. Esa palabra sí sale en el poema.";
  }
}

function renderMagicBox(activity) {
  completedMagicWords = 0;
  selectedMagicBit = null;
  magicBoxWords.replaceChildren();
  magicWordTray.replaceChildren();
  magicBoxStatus.textContent = "Arrastra dentro de la caja las palabras que salen en el poema.";

  shuffle(activity.magicWords).forEach((item) => {
    const card = document.createElement("button");
    card.className = "magic-bit-card";
    card.type = "button";
    card.draggable = true;
    card.dataset.key = item.key;
    card.dataset.upper = item.upper;
    card.dataset.lower = item.lower;
    card.dataset.valid = String(item.valid);
    card.innerHTML = `<span>${item.upper}</span><span>${item.lower}</span>`;
    card.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", item.key);
    });
    card.addEventListener("click", () => {
      if (card.disabled) return;
      clearMagicBitSelection();
      selectedMagicBit = card;
      card.classList.add("is-selected");
      magicBoxStatus.textContent = `Ahora toca la caja para guardar ${item.lower}.`;
      speak(item.lower);
    });
    magicWordTray.appendChild(card);
  });
}

function renderMultiQuizQuestion(activity) {
  const question = activity.questions[currentMultiQuestion];
  multiQuizProgress.textContent = `Pregunta ${currentMultiQuestion + 1} de ${activity.questions.length}`;
  multiQuizQuestion.textContent = question.question;
  multiQuizFeedback.textContent = "";
  multiQuizFeedback.className = "quiz-feedback";
  multiQuizVisual.replaceChildren();
  multiAnswerGrid.replaceChildren();

  if (question.visual) {
    const image = document.createElement("img");
    image.src = question.visual;
    image.alt = "";
    image.loading = "lazy";
    image.decoding = "async";
    multiQuizVisual.appendChild(image);
  }

  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.className = "multi-answer-button";
    button.type = "button";
    if (answer.image) {
      const image = document.createElement("img");
      image.src = answer.image;
      image.alt = answer.alt || "";
      image.loading = "lazy";
      image.decoding = "async";
      button.appendChild(image);
    }
    const label = document.createElement("span");
    label.textContent = answer.text;
    button.appendChild(label);
    button.addEventListener("click", () => {
      if (answer.correct) {
        button.classList.add("is-correct");
        multiQuizFeedback.textContent = question.success;
        multiQuizFeedback.classList.add("is-success");
        speak(question.success);
        playChimeSound();
        Array.from(multiAnswerGrid.children).forEach((child) => {
          child.disabled = true;
        });
        window.setTimeout(() => {
          if (currentMultiQuestion < activity.questions.length - 1) {
            currentMultiQuestion += 1;
            renderMultiQuizQuestion(activity);
          } else {
            multiQuizProgress.textContent = "Test terminado";
            multiQuizFeedback.textContent = "Muy bien. Has terminado el test.";
            speak("Muy bien. Has terminado el test.");
            markActivityDone();
          }
        }, 900);
        return;
      }

      button.classList.add("is-wrong");
      multiQuizFeedback.textContent = question.retry;
      multiQuizFeedback.classList.add("is-retry");
      speak(question.retry);
    });
    multiAnswerGrid.appendChild(button);
  });
}

function renderMultiQuiz(activity) {
  currentMultiQuestion = 0;
  renderMultiQuizQuestion(activity);
}

function clearCharacteristicSelection() {
  if (selectedCharacteristic) {
    selectedCharacteristic.classList.remove("is-selected");
    selectedCharacteristic = null;
  }
}

function updateCharacteristicCompletion(card) {
  const totalMatches = Number(card.dataset.totalMatches);
  const foundMatches = Number(card.dataset.foundMatches);
  if (foundMatches < totalMatches) return;

  card.disabled = true;
  card.classList.remove("is-selected");
  card.classList.add("is-used");
  selectedCharacteristic = null;
  completedCharacteristics += 1;

  if (completedCharacteristics === characterTray.children.length) {
    characterMatchStatus.textContent = "Muy bien. Has completado todos los personajes.";
    speak("Muy bien. Has completado todos los personajes.");
    markActivityDone();
  }
}

function tryMatchCharacteristic(target, card) {
  if (!target || !card || card.disabled) return;

  const characterKey = target.dataset.character;
  const matches = card.dataset.matches.split(",");
  if (!matches.includes(characterKey)) {
    characterMatchStatus.textContent = "Esa característica no corresponde a este personaje.";
    speak("Prueba con otro personaje.");
    return;
  }

  const found = new Set(card.dataset.found ? card.dataset.found.split(",") : []);
  if (found.has(characterKey)) {
    characterMatchStatus.textContent = "Esa característica ya está puesta en este personaje.";
    return;
  }

  found.add(characterKey);
  card.dataset.found = Array.from(found).join(",");
  card.dataset.foundMatches = String(found.size);

  const label = document.createElement("span");
  label.className = "character-label";
  label.textContent = card.dataset.text;
  target.querySelector(".character-labels").appendChild(label);

  playChimeSound();
  speak(card.dataset.text);
  characterMatchStatus.textContent =
    found.size === matches.length
      ? "Muy bien. Has colocado esa característica en todos sus personajes."
      : "Muy bien. Esta característica sirve para más personajes.";

  updateCharacteristicCompletion(card);
}

function renderCharacterMatch(activity) {
  selectedCharacteristic = null;
  completedCharacteristics = 0;
  characterTargets.replaceChildren();
  characterTray.replaceChildren();
  characterMatchStatus.textContent = "Toca una tarjeta y despues el personaje correcto.";

  activity.characters.forEach((character) => {
    const target = document.createElement("button");
    target.className = "character-target";
    target.type = "button";
    target.dataset.character = character.key;
    target.innerHTML = `<img src="${character.image}" alt=""><strong>${character.name}</strong><span class="character-labels"></span>`;
    target.addEventListener("dragover", (event) => event.preventDefault());
    target.addEventListener("drop", (event) => {
      event.preventDefault();
      const id = event.dataTransfer.getData("text/plain");
      const card = characterTray.querySelector(`[data-id="${id}"]`);
      tryMatchCharacteristic(target, card);
    });
    target.addEventListener("click", () => tryMatchCharacteristic(target, selectedCharacteristic));
    characterTargets.appendChild(target);
  });

  shuffle(activity.characteristicCards).forEach((item) => {
    const card = document.createElement("button");
    card.className = "character-card";
    card.type = "button";
    card.draggable = true;
    card.dataset.id = item.id;
    card.dataset.text = item.text;
    card.dataset.matches = item.matches.join(",");
    card.dataset.totalMatches = String(item.matches.length);
    card.dataset.foundMatches = "0";
    card.textContent = item.text;
    card.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", item.id);
    });
    card.addEventListener("click", () => {
      if (card.disabled) return;
      clearCharacteristicSelection();
      selectedCharacteristic = card;
      card.classList.add("is-selected");
      characterMatchStatus.textContent = `Ahora toca el personaje: ${item.text}.`;
      speak(item.text);
    });
    characterTray.appendChild(card);
  });
}

function letterImagePath(letter) {
  return `assets/letters/${letter.toLowerCase()}.png`;
}

const availableLetterImages = new Set(["A", "B", "C", "E", "K", "L", "O", "P", "R", "S", "T", "U", "V"]);

function letterTileMarkup(letter) {
  if (availableLetterImages.has(letter)) {
    return `<img src="${letterImagePath(letter)}" alt="Letra ${letter}">`;
  }
  return `<span class="letter-fallback" aria-label="Letra ${letter}">${letter}</span>`;
}

function clearLetterSelection() {
  if (selectedLetterTile) {
    selectedLetterTile.classList.remove("is-selected");
    selectedLetterTile = null;
  }
}

function tryFillCrosswordCell(cell, tile) {
  if (!cell || !tile || cell.disabled || tile.disabled) return;

  if (cell.dataset.letter !== tile.dataset.letter) {
    crosswordStatus.textContent = "Prueba con otra letra.";
    speak("Prueba con otra letra.");
    clearLetterSelection();
    return;
  }

  cell.innerHTML = letterTileMarkup(tile.dataset.letter);
  cell.classList.add("is-filled");
  cell.disabled = true;
  tile.disabled = true;
  tile.classList.remove("is-selected");
  tile.classList.add("is-used");
  selectedLetterTile = null;
  completedCrosswordCells += 1;
  playChimeSound();
  speak(tile.dataset.letter);

  if (completedCrosswordCells === crosswordBoard.querySelectorAll(".crossword-cell.is-target").length) {
    crosswordStatus.textContent = "Muy bien. Has completado el crucigrama.";
    speak("Muy bien. Has completado el crucigrama.");
    markActivityDone();
  } else {
    crosswordStatus.textContent = "Muy bien. Sigue completando palabras.";
  }
}

function renderCrossword(activity) {
  selectedLetterTile = null;
  completedCrosswordCells = 0;
  currentCrosswordWords = activity.crosswordWords.map((entry) => entry.word);
  crosswordBoard.replaceChildren();
  crosswordBoard.classList.remove("show-hints");
  letterTray.replaceChildren();
  crosswordStatus.textContent = "Toca una letra y despues una casilla blanca.";
  toggleCrosswordHintsButton.textContent = "Mostrar siluetas";

  const templateCells = new Map();
  (activity.crosswordTemplateWords || []).forEach((entry) => {
    [...entry.word].forEach((letter, offset) => {
      const row = entry.direction === "vertical" ? entry.row + offset : entry.row;
      const col = entry.direction === "vertical" ? entry.col : entry.col + offset;
      const key = `${row}-${col}`;
      templateCells.set(key, { letter, row, col, isTemplate: true });
    });
  });

  const targetCells = new Map();
  activity.crosswordWords.forEach((entry) => {
    [...entry.word].forEach((letter, offset) => {
      const key = `${entry.row}-${entry.col + offset}`;
      const templateCell = templateCells.get(key);
      if (templateCell && templateCell.letter === letter) return;
      targetCells.set(key, { letter, row: entry.row, col: entry.col + offset });
    });
  });

  templateCells.forEach((cellData) => {
    const cell = document.createElement("div");
    cell.className = "crossword-cell is-template";
    cell.style.gridRow = String(cellData.row + 1);
    cell.style.gridColumn = String(cellData.col + 1);
    cell.innerHTML = letterTileMarkup(cellData.letter);
    crosswordBoard.appendChild(cell);
  });

  targetCells.forEach((cellData) => {
    const cell = document.createElement("button");
    cell.className = "crossword-cell is-target";
    cell.type = "button";
    cell.dataset.letter = cellData.letter;
    cell.dataset.hint = cellData.letter;
    cell.style.gridRow = String(cellData.row + 1);
    cell.style.gridColumn = String(cellData.col + 1);
    cell.setAttribute("aria-label", `Casilla para la letra ${cellData.letter}`);
    cell.addEventListener("dragover", (event) => event.preventDefault());
    cell.addEventListener("drop", (event) => {
      event.preventDefault();
      const tileId = event.dataTransfer.getData("text/plain");
      const tile = letterTray.querySelector(`[data-tile-id="${tileId}"]`);
      tryFillCrosswordCell(cell, tile);
    });
    cell.addEventListener("click", () => tryFillCrosswordCell(cell, selectedLetterTile));
    crosswordBoard.appendChild(cell);
  });

  shuffle(activity.crosswordLetters.map((letter, index) => ({ letter, index }))).forEach((item) => {
    const tile = document.createElement("button");
    tile.className = "letter-tile";
    tile.type = "button";
    tile.draggable = true;
    tile.dataset.letter = item.letter;
    tile.dataset.tileId = `${item.letter}-${item.index}`;
    tile.innerHTML = letterTileMarkup(item.letter);
    tile.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", tile.dataset.tileId);
    });
    tile.addEventListener("click", () => {
      if (tile.disabled) return;
      clearLetterSelection();
      selectedLetterTile = tile;
      tile.classList.add("is-selected");
      crosswordStatus.textContent = `Ahora toca una casilla para la letra ${item.letter}.`;
      speak(item.letter);
    });
    letterTray.appendChild(tile);
  });
}

function renderTimeline(activity) {
  selectedTimelineCard = null;
  completedTimelineItems = 0;
  timelineRoad.replaceChildren();
  timelineTray.replaceChildren();
  timelineStatus.textContent = "Arrastra cada hito a su ano.";

  function clearTimelineSelection() {
    if (selectedTimelineCard) {
      selectedTimelineCard.classList.remove("is-selected");
      selectedTimelineCard = null;
    }
  }

  function placeTimelineCard(target, card) {
    if (!target || !card || target.classList.contains("is-filled") || card.disabled) return;

    if (target.dataset.year !== card.dataset.year) {
      timelineStatus.textContent = "Prueba con otro ano.";
      speak("Prueba con otro ano.");
      clearTimelineSelection();
      return;
    }

    target.textContent = card.textContent;
    target.classList.add("is-filled");
    card.disabled = true;
    card.classList.remove("is-selected");
    card.classList.add("is-used");
    selectedTimelineCard = null;
    completedTimelineItems += 1;
    playChimeSound();

    if (completedTimelineItems === activity.timelineEvents.length) {
      timelineStatus.textContent = "Muy bien. Has completado la linea del tiempo.";
      speak("Muy bien. Has completado la linea del tiempo.");
      markActivityDone();
    } else {
      timelineStatus.textContent = "Muy bien. Sigue colocando hitos.";
    }
  }

  activity.timelineEvents.forEach((event) => {
    const item = document.createElement("article");
    item.className = "timeline-item";
    item.innerHTML = `<strong>${event.year}</strong><span class="timeline-dot" aria-hidden="true"></span>`;
    const target = document.createElement("button");
    target.className = "timeline-target";
    target.type = "button";
    target.dataset.year = event.year;
    target.textContent = "Suelta aqui";
    target.setAttribute("aria-label", `Colocar hito del ano ${event.year}`);
    target.addEventListener("dragover", (event) => event.preventDefault());
    target.addEventListener("drop", (dropEvent) => {
      dropEvent.preventDefault();
      const cardId = dropEvent.dataTransfer.getData("text/plain");
      const card = timelineTray.querySelector(`[data-card-id="${cardId}"]`);
      placeTimelineCard(target, card);
    });
    target.addEventListener("click", () => placeTimelineCard(target, selectedTimelineCard));
    item.appendChild(target);
    timelineRoad.appendChild(item);
  });

  shuffle(activity.timelineEvents.map((event, index) => ({ ...event, index }))).forEach((event) => {
    const card = document.createElement("button");
    card.className = "timeline-card-item";
    card.type = "button";
    card.draggable = true;
    card.dataset.year = event.year;
    card.dataset.cardId = `${event.year}-${event.index}`;
    card.textContent = event.text;
    card.addEventListener("dragstart", (dragEvent) => {
      dragEvent.dataTransfer.setData("text/plain", card.dataset.cardId);
    });
    card.addEventListener("click", () => {
      if (card.disabled) return;
      clearTimelineSelection();
      selectedTimelineCard = card;
      card.classList.add("is-selected");
      timelineStatus.textContent = `Ahora toca el ano ${event.year}.`;
      speak(event.text);
    });
    timelineTray.appendChild(card);
  });
}

function renderWorksheet(activity) {
  currentWorksheet = activity.worksheet;
  worksheetImage.src = currentWorksheet.image;
  worksheetImage.alt = currentWorksheet.imageAlt;
  worksheetFieldsContainer.replaceChildren();

  currentWorksheet.fields.forEach((field) => {
    const label = document.createElement("label");
    label.className = "worksheet-field";
    label.style.left = `${field.box.left}%`;
    label.style.top = `${field.box.top}%`;
    label.style.width = `${field.box.width}%`;
    label.style.height = `${field.box.height}%`;

    const labelText = document.createElement("span");
    labelText.textContent = field.label;

    const textarea = document.createElement("textarea");
    textarea.dataset.sheetField = field.key;
    textarea.maxLength = field.maxLength;
    textarea.setAttribute("aria-label", field.aria);
    textarea.addEventListener("input", () => markActivityDone(activity.id), { once: true });

    label.append(labelText, textarea);
    worksheetFieldsContainer.appendChild(label);
  });
}

function setMode(activity) {
  const isQuiz = activity.kind === "quiz";
  const isWorksheet = activity.kind === "worksheet";
  const isMemory = activity.kind === "memory";
  const isBits = activity.kind === "bits";
  const isAssociation = activity.kind === "association";
  const isMagicBox = activity.kind === "magic-box";
  const isMultiQuiz = activity.kind === "multi-quiz";
  const isCharacterMatch = activity.kind === "character-match";
  const isCrossword = activity.kind === "crossword";
  const isTimeline = activity.kind === "timeline";
  quizCard.hidden = !isQuiz;
  worksheetCard.hidden = !isWorksheet;
  audioCard.hidden = !isMemory;
  memoryCard.hidden = !isMemory;
  bitsCard.hidden = !isBits;
  associationCard.hidden = !isAssociation;
  magicBoxCard.hidden = !isMagicBox;
  multiQuizCard.hidden = !isMultiQuiz;
  characterMatchCard.hidden = !isCharacterMatch;
  crosswordCard.hidden = !isCrossword;
  timelineCard.hidden = !isTimeline;
  createZone.hidden = !isQuiz;
  resetQuizButton.hidden = !isQuiz;
  downloadSheetButton.hidden = !isWorksheet;
  resetMemoryButton.hidden = !isMemory;
  resetBitsButton.hidden = !isBits;
  resetAssociationButton.hidden = !isAssociation;
  resetMagicBoxButton.hidden = !isMagicBox;
  resetMultiQuizButton.hidden = !isMultiQuiz;
  resetCharacterMatchButton.hidden = !isCharacterMatch;
  resetCrosswordButton.hidden = !isCrossword;
  resetTimelineButton.hidden = !isTimeline;

  if (isQuiz) {
    renderQuiz(activity);
  } else if (isWorksheet) {
    renderWorksheet(activity);
    answerGrid.replaceChildren();
    quizFeedback.textContent = "";
  } else if (isMemory) {
    renderMemory(activity);
    poemAudio.load();
    answerGrid.replaceChildren();
    quizFeedback.textContent = "";
  } else if (isBits) {
    renderBits(activity);
    answerGrid.replaceChildren();
    quizFeedback.textContent = "";
  } else if (isAssociation) {
    renderAssociation(activity);
    answerGrid.replaceChildren();
    quizFeedback.textContent = "";
  } else if (isMagicBox) {
    renderMagicBox(activity);
    answerGrid.replaceChildren();
    quizFeedback.textContent = "";
  } else if (isMultiQuiz) {
    renderMultiQuiz(activity);
    answerGrid.replaceChildren();
    quizFeedback.textContent = "";
  } else if (isCharacterMatch) {
    renderCharacterMatch(activity);
    answerGrid.replaceChildren();
    quizFeedback.textContent = "";
  } else if (isCrossword) {
    renderCrossword(activity);
    answerGrid.replaceChildren();
    quizFeedback.textContent = "";
  } else if (isTimeline) {
    renderTimeline(activity);
    answerGrid.replaceChildren();
    quizFeedback.textContent = "";
  } else {
    answerGrid.replaceChildren();
    quizFeedback.textContent = "";
  }
}

function openActivity(id, shouldSpeak = false) {
  const index = activities.findIndex((activity) => activity.id === id);
  if (index === -1) return;

  currentIndex = index;
  const activity = activities[currentIndex];
  panelImage.src = activity.image;
  panelImage.alt = activity.imageAlt;
  panelStep.textContent = activity.step;
  panelTitle.textContent = activity.title;
  panelText.textContent = activity.text;
  resourceLink.href = activity.resource;
  resourceLink.textContent = activity.resourceText;
  renderStory(activity);
  setMode(activity);
  renderSessionStars();
  const openedTile = activityTiles.find((tile) => tile.dataset.open === id);
  if (openedTile) setWeekFilter(openedTile.dataset.week);

  tiles.forEach((tile) => {
    tile.classList.toggle("is-active", tile.dataset.open === id);
  });

  if (shouldSpeak) {
    speak(activitySpeech(activity));
  }
}

function setWeekFilter(week, openFirst = false) {
  activityTiles.forEach((tile) => {
    tile.hidden = tile.dataset.week !== week;
  });

  weekButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.weekFilter === week);
  });

  if (!openFirst) return;
  const firstTile = activityTiles.find((tile) => tile.dataset.week === week);
  if (firstTile) openActivity(firstTile.dataset.open, true);
}

window.openActivity = openActivity;

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const normalized = text.trim().replace(/\s+/g, " ");
  if (!normalized) return;

  const words = normalized.split(" ");
  let line = "";
  let currentY = y;

  words.forEach((word) => {
    const testLine = line ? `${line} ${word}` : word;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, x, currentY);
      line = word;
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  });

  if (line) ctx.fillText(line, x, currentY);
}

function drawWorksheetText(ctx, values) {
  ctx.fillStyle = "#12343a";
  ctx.font = "700 34px Arial";
  ctx.textBaseline = "top";

  currentWorksheet.fields.forEach((field) => {
    const value = values[field.key] || "";
    wrapText(ctx, value, field.canvas.x, field.canvas.y, field.canvas.width, 44);
  });
}

function downloadWorksheet() {
  downloadSheetButton.disabled = true;
  downloadSheetButton.textContent = "Preparando...";

  const image = new Image();
  image.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);
    const values = {};
    currentWorksheet.fields.forEach((field) => {
      values[field.key] = worksheetFieldsContainer.querySelector(`[data-sheet-field="${field.key}"]`)?.value || "";
    });
    drawWorksheetText(ctx, values);

    try {
      canvas.toBlob((blob) => {
        if (!blob) {
          downloadSheetButton.disabled = false;
          downloadSheetButton.textContent = "Descargar ficha";
          return;
        }

        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.download = currentWorksheet.downloadName;
        link.href = url;
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
        downloadSheetButton.disabled = false;
        downloadSheetButton.textContent = "Descargar ficha";
      }, "image/png");
    } catch (error) {
      downloadSheetButton.disabled = false;
      downloadSheetButton.textContent = "Descargar ficha";
      speak("No he podido descargar la ficha desde este navegador.");
    }
  };

  image.onerror = () => {
    downloadSheetButton.disabled = false;
    downloadSheetButton.textContent = "Descargar ficha";
    speak("No he podido preparar la ficha. Revisa que la imagen original esta disponible.");
  };
  image.src = currentWorksheet.image;
}

document.addEventListener("click", (event) => {
  const tile = event.target.closest("[data-open]");
  if (!tile || tile.hasAttribute("onclick")) return;
  event.preventDefault();
  openActivity(tile.dataset.open, true);
});

weekButtons.forEach((button) => {
  button.addEventListener("click", () => setWeekFilter(button.dataset.weekFilter, true));
});

resetQuizButton.addEventListener("click", () => {
  resetQuiz();
  speak(activities[currentIndex].quiz.question);
});

downloadSheetButton.addEventListener("click", downloadWorksheet);

resetMemoryButton.addEventListener("click", () => {
  const activity = activities[currentIndex];
  if (activity.kind === "memory") renderMemory(activity);
});

resetBitsButton.addEventListener("click", () => {
  const activity = activities[currentIndex];
  if (activity.kind === "bits") renderBits(activity);
});

resetAssociationButton.addEventListener("click", () => {
  const activity = activities[currentIndex];
  if (activity.kind === "association") renderAssociation(activity);
});

resetMagicBoxButton.addEventListener("click", () => {
  const activity = activities[currentIndex];
  if (activity.kind === "magic-box") renderMagicBox(activity);
});

resetMultiQuizButton.addEventListener("click", () => {
  const activity = activities[currentIndex];
  if (activity.kind === "multi-quiz") renderMultiQuiz(activity);
});

resetCharacterMatchButton.addEventListener("click", () => {
  const activity = activities[currentIndex];
  if (activity.kind === "character-match") renderCharacterMatch(activity);
});

resetCrosswordButton.addEventListener("click", () => {
  const activity = activities[currentIndex];
  if (activity.kind === "crossword") renderCrossword(activity);
});

speakCrosswordWordsButton.addEventListener("click", () => {
  if (!currentCrosswordWords.length) return;
  speak(`Las palabras son: ${currentCrosswordWords.join(", ")}.`);
  crosswordStatus.textContent = `Palabras para completar: ${currentCrosswordWords.join(", ")}.`;
});

toggleCrosswordHintsButton.addEventListener("click", () => {
  const areHintsVisible = crosswordBoard.classList.toggle("show-hints");
  toggleCrosswordHintsButton.textContent = areHintsVisible ? "Ocultar siluetas" : "Mostrar siluetas";
});

resetTimelineButton.addEventListener("click", () => {
  const activity = activities[currentIndex];
  if (activity.kind === "timeline") renderTimeline(activity);
});

magicBoxDropzone.addEventListener("dragover", (event) => event.preventDefault());

magicBoxDropzone.addEventListener("drop", (event) => {
  event.preventDefault();
  const key = event.dataTransfer.getData("text/plain");
  const card = magicWordTray.querySelector(`[data-key="${key}"]`);
  tryAddMagicWord(card);
});

magicBoxDropzone.addEventListener("click", () => tryAddMagicWord(selectedMagicBit));

speakActivityButton.addEventListener("click", () => {
  speak(activitySpeech(activities[currentIndex]));
});

speakPageButton.addEventListener("click", () => {
  const title = document.querySelector("h1").textContent;
  const lead = document.querySelector(".lead")?.textContent || "";
  const activity = activities[currentIndex];
  speak(`${title}. ${lead}. ${activitySpeech(activity)}`);
});

contrastButton.addEventListener("click", () => {
  document.body.classList.toggle("high-contrast");
});

openActivity("semana-1-carta-coco");
setWeekFilter("1");
