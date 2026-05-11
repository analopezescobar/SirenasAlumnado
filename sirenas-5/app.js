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
    ]
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
const createZone = document.querySelector(".create-zone");
const resetQuizButton = document.querySelector("[data-reset-quiz]");
const downloadSheetButton = document.querySelector("[data-download-sheet]");
const resetMemoryButton = document.querySelector("[data-reset-memory]");
const resetBitsButton = document.querySelector("[data-reset-bits]");
const resetAssociationButton = document.querySelector("[data-reset-association]");
const speakActivityButton = document.querySelector("[data-speak-activity]");
const speakPageButton = document.querySelector("[data-speak-page]");
const contrastButton = document.querySelector("[data-toggle-contrast]");
const worksheetImagePath = "../content/resources/que sabemos de sirenas.png";
const worksheetFields = {
  known: document.querySelector('[data-sheet-field="known"]'),
  want: document.querySelector('[data-sheet-field="want"]'),
  how: document.querySelector('[data-sheet-field="how"]')
};

let currentIndex = 0;
let flippedCards = [];
let matchedCards = 0;
let selectedBit = null;
let completedBits = 0;
let selectedWordCard = null;
let completedAssociations = 0;

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

  if (completedBits === document.querySelectorAll("[data-answer]").length) {
    bitsStatus.textContent = "Muy bien. Has completado los versos.";
    speak("Muy bien. Has completado los versos.");
  } else {
    bitsStatus.textContent = "Muy bien. Sigue completando.";
  }

  selectedBit = null;
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
    const word = event.dataTransfer.getData("text/plain");
    const bit = bitsTray.querySelector(`[data-word="${word}"]`);
    tryFillBlank(blank, bit);
  });
  blank.addEventListener("click", () => tryFillBlank(blank, selectedBit));
  return blank;
}

function addText(target, text) {
  target.appendChild(document.createTextNode(text));
}

function renderPoemLine(parts) {
  const line = document.createElement("p");
  line.className = "poem-line";

  parts.forEach((part) => {
    if (typeof part === "string") {
      addText(line, part);
      return;
    }
    line.appendChild(createBlank(part.blank));
  });

  poemFill.appendChild(line);
}

function renderBits(activity) {
  completedBits = 0;
  selectedBit = null;
  poemFill.replaceChildren();
  bitsTray.replaceChildren();
  bitsStatus.textContent = "Arrastra una palabra a su hueco.";

  [
    ["En un ", { blank: "acantilado" }, " solitario, una noche de junio,"],
    ["A la luz difusa del ", { blank: "plenilunio" }, ", presencié un episodio extraordinario"],
    ["A mi vera, dos ", { blank: "sirena" }, "s de cuerpo adolescente y larga ", { blank: "cabellera" }],
    ["Surgieron de las aguas de repente y empezaron a hablar de esta manera:"],
    ["..."],
    ["Se fueron las sirenas alejando escoltadas por ágiles ", { blank: "delfines" }],
    ["Yo me quedé pensando: si les hubiera dado por cantar habría tenido que tirarme al ", { blank: "mar" }]
  ].forEach(renderPoemLine);

  shuffle(activity.blanks).forEach((word) => {
    const bit = document.createElement("button");
    bit.className = "bit-card";
    bit.type = "button";
    bit.draggable = true;
    bit.dataset.word = word;
    bit.textContent = word;
    bit.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", word);
    });
    bit.addEventListener("click", () => {
      if (bit.disabled) return;
      clearBitSelection();
      selectedBit = bit;
      bit.classList.add("is-selected");
      bitsStatus.textContent = `Ahora toca el hueco de ${word}.`;
      speak(word);
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

function setMode(activity) {
  const isQuiz = activity.kind === "quiz";
  const isWorksheet = activity.kind === "worksheet";
  const isMemory = activity.kind === "memory";
  const isBits = activity.kind === "bits";
  const isAssociation = activity.kind === "association";
  quizCard.hidden = !isQuiz;
  worksheetCard.hidden = !isWorksheet;
  audioCard.hidden = !isMemory;
  memoryCard.hidden = !isMemory;
  bitsCard.hidden = !isBits;
  associationCard.hidden = !isAssociation;
  createZone.hidden = !isQuiz;
  resetQuizButton.hidden = !isQuiz;
  downloadSheetButton.hidden = !isWorksheet;
  resetMemoryButton.hidden = !isMemory;
  resetBitsButton.hidden = !isBits;
  resetAssociationButton.hidden = !isAssociation;

  if (isQuiz) {
    renderQuiz(activity);
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
  const boxes = {
    known: { x: 70, y: 450, width: 405 },
    want: { x: 560, y: 450, width: 390 },
    how: { x: 1035, y: 450, width: 410 }
  };

  ctx.fillStyle = "#12343a";
  ctx.font = "700 34px Arial";
  ctx.textBaseline = "top";

  Object.entries(boxes).forEach(([key, box]) => {
    wrapText(ctx, values[key], box.x, box.y, box.width, 44);
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
    drawWorksheetText(ctx, {
      known: worksheetFields.known.value,
      want: worksheetFields.want.value,
      how: worksheetFields.how.value
    });

    try {
      canvas.toBlob((blob) => {
        if (!blob) {
          downloadSheetButton.disabled = false;
          downloadSheetButton.textContent = "Descargar ficha";
          return;
        }

        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.download = "que-sabemos-sirenas.png";
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
  image.src = worksheetImagePath;
}

tiles.forEach((tile) => {
  tile.addEventListener("click", () => openActivity(tile.dataset.open, true));
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

speakActivityButton.addEventListener("click", () => {
  speak(activitySpeech(activities[currentIndex]));
});

speakPageButton.addEventListener("click", () => {
  const title = document.querySelector("h1").textContent;
  const lead = document.querySelector(".lead").textContent;
  const activity = activities[currentIndex];
  speak(`${title}. ${lead}. ${activitySpeech(activity)}`);
});

contrastButton.addEventListener("click", () => {
  document.body.classList.toggle("high-contrast");
});

openActivity("semana-1-carta-coco");
setWeekFilter("1");
