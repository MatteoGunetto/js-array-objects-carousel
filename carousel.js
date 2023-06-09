// Consegna:
// Dato un array di oggetti letterali con:
// - url dell’immagine
// - titolo
// - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell’utente sulle frecce verso sopra e sotto, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello.
// Ovvero se l’immagine attiva è la prima e l’utente clicca la freccia verso sopra, l’immagine che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sotto.

const images = [
    {
        image: 'img/01.webp',
        title: "Marvel's Spiderman Miles Morale",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    }
];



// --- JS ---

let i = 0;
create();

// --- FUNCTIONS ---

function create() {
const img = images[i];
let printImg = `<div id="imgContainer">`;
printImg += `<button class="fa-solid fa-chevron-up button" id="up"></button>`;
printImg += `<div id="image">`;
printImg += `<img id="zoommed" src="./${img.image}" alt="${img.title}">`;
printImg += `</div>`;
printImg += `<h3 id="title">${img.title}</h3>`;
printImg += `<p>${img.text}</p>`;
printImg += `<button class="fa-solid fa-chevron-down button" id="down"></button>`;
printImg += `</div>`;
document.getElementById("slide").innerHTML = printImg;

button = document.getElementById("up");
button.addEventListener("click", up);

button = document.getElementById("down");
button.addEventListener("click", down);
}

function up() {
if (i == images.length - 1) {
    i = 0;
    create();
}
else {
    i++;
    create();
}
}

function down() {
if (i == 0) {
    i = images.length - 1;
    create();
}
else {
    i--;
    create();
}
}





