//Clase
class Cancion {
    //Constructor con atributos
    constructor(nombre, dir, artista, url) {
        this.nombre = nombre;
        this.dir = dir;
        this.artista = artista;
        this.url = url;
    }
}
// Lista de canciones
let musicList = [
    new Cancion("Trouble", "music/Trouble.mp3", "CAGE THE ELEPHANT", "music/Trouble.jpg"),
    new Cancion("The Suburbs", "music/TheSuburbs.mp3", "ARCADE FIRE", "music/TheSuburbs.jpg"),
    new Cancion("Black Honey", "music/BlackHoney.mp3", "THRICE", "music/BlackHoney.jpg"),
    new Cancion("Snap Out Of It", "music/SnapOutOfIt.m4a", "ARCTIC MONKEYS", "music/SnapOutOfIt.jpg"),
    new Cancion("Lost In A Wave", "music/LostInAWave.mp3", "LANDMVRKS", "music/LostInAWave.jpg"),
    new Cancion("UNFAMILIAR", "music/Unfamiliar.m4a", "POLARIS", "music/Unfamiliar.jpg"),
    new Cancion("Pap Smear", "music/PapSmear.mp3", "CRYSTAL CASTLE", "music/PapSmear.jpg"),
    new Cancion("LOST", "music/Lost.mp3", "FAESFIRE", "music/Lost.jpg"),
    new Cancion("This Picture", "music/ThisPicture.mp3", "PLACEBO", "music/ThisPicture.jpg"),
    new Cancion("Where Is My Mind? ", "music/WhereIsMyMind.mp3", "PIXIES", "music/WhereIsMyMind.jpg"),
    new Cancion("Dead And Gone", "music/DeadAndGone.mp3", "CRAZY WOLF", "music/DeadAndGone.jpg"),
    new Cancion("Carry Me Away", "music/CarryMeAway.m4a", "ANNISOKAY", "music/CarryMeAway.jpg"),
    new Cancion("Why Did You?", "music/WhyDidYou.mp3", "FAESFIRE", "music/WhyDidYou.jpg"),
    // Agrega más canciones según sea necesario
];

//Play Music
let music = new Audio();
let musicIndex = 0;
let cancionActual = musicList[musicIndex]; //Recoge la lista de canciones con sus atributos desde el indice 0

let nombre = cancionActual.nombre;
let artista = cancionActual.artista;
let url = cancionActual.url;

//music.src = musicList[musicIndex];
music.src = cancionActual.dir;
music.volume = 0.6;
music.loop = false;

let action_music = document.getElementById("action_music");
let play = document.getElementById("play");
let pause = document.getElementById("pause");
let sound_waves = document.getElementById("sound_waves");
let status_p = false;

let back_m = document.getElementById("back_m");
let next_m = document.getElementById("next_m");
let volumeControl = document.getElementById("volume");

// Crear un conjunto para almacenar los índices reproducidos
let playedIndexes = new Set();

// Función para generar un índice aleatorio sin repetir
function getNextRandomIndex() {
    // Si todas las canciones ya se han reproducido, reiniciar el conjunto
    if (playedIndexes.size === musicList.length) {
        playedIndexes.clear();
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * musicList.length);
    } while (playedIndexes.has(randomIndex));

    // Agregar el índice generado al conjunto
    playedIndexes.add(randomIndex);

    return randomIndex;
}

action_music.addEventListener('click', function () {
    if (status_p == false) {
        music.play();
        play.classList.add("hidden");
        pause.classList.remove("hidden");
        sound_waves.classList.remove("hidden");
        status_p = true;
        // Evento de clic para cambiar y reproducir la siguiente pista desde el botón "next"
        next_m.addEventListener('click', function () {
            // Incrementar el índice para la siguiente canción
            musicIndex = (musicIndex + 1) % musicList.length;
            // Obtener la nueva canción
            cancionActual = musicList[musicIndex];
            // Cambiar la dirección de la nueva canción
            music.src = cancionActual.dir;

            // Acceder a todos los atributos de la nueva canción
            nombre = cancionActual.nombre;
            artista = cancionActual.artista;
            url = cancionActual.url;

            // Capturar Cancion siguiente
            let song_index = document.querySelector('#song');
            song_index.innerHTML = `
                <div class="song"><p><strong>${nombre}</strong></p></div>
                <div class="artist"><small>${artista}</small></div>
                `;
            // Capturar Fotografia del Album Siguiente
            let album_index = document.querySelector('#album');
            album_index.innerHTML = `
                <img class="img60" src="${url}">
                `;

            // Reproducir la nueva pista
            music.play();
            play.classList.add("hidden");
            pause.classList.remove("hidden");
            sound_waves.classList.r("hidden");
            status_p = true;
        });
        // Evento de clic para cambiar y reproducir la anterior pista desde el botón "next"
        back_m.addEventListener('click', function () {
            // Incrementar el índice para la siguiente canción
            musicIndex = (musicIndex - 1) % musicList.length;
            // Obtener la nueva canción
            cancionActual = musicList[musicIndex];
            // Cambiar la dirección de la nueva canción
            music.src = cancionActual.dir;

            // Acceder a todos los atributos de la nueva canción
            nombre = cancionActual.nombre;
            artista = cancionActual.artista;
            url = cancionActual.url;

            // Capturar Cancion siguiente
            let song_index = document.querySelector('#song');
            song_index.innerHTML = `
                <div class="song"><p><strong>${nombre}</strong></p></div>
                <small>${artista}</small>
                `;
            // Capturar Fotografia del Album Siguiente
            let album_index = document.querySelector('#album');
            album_index.innerHTML = `
                <img class="img60" src="${url}">
                `;

            // Reproducir la nueva pista
            music.play();
            play.classList.add("hidden");
            pause.classList.remove("hidden");
            sound_waves.classList.remove("hidden");
            status_p = true;
        });
    }
    else {
        music.pause();
        play.classList.remove("hidden");
        pause.classList.add("hidden");
        sound_waves.classList.add("hidden");
        status_p = false;
    }
});
// Capturar Texto de Cancion Actual
let song_index = document.querySelector('#song');
song_index.innerHTML = `
<div class="song"><p><strong>${cancionActual.nombre}</strong></p></div>
<div class="artist"><small>${cancionActual.artista}</small></div>
`;
// Capturar Fotografia del Album de cancion
let album_index = document.querySelector('#album');
album_index.innerHTML = `
<img class="img60" src="${cancionActual.url}">
`;

// Evento de cambio en el control de volumen
volumeControl.addEventListener('input', function () {
    music.volume = volumeControl.value;
});
// Controlar el evento de finalización para cambiar y reproducir la siguiente pista
music.addEventListener('ended', function () {
    // Obtener un índice aleatorio sin repetir
    musicIndex = getNextRandomIndex();
    // Obtener la nueva canción
    cancionActual = musicList[musicIndex];
    music.src = cancionActual.dir;
    music.play();
    // Acceder a todos los atributos de la nueva canción
    nombre = cancionActual.nombre;
    artista = cancionActual.artista;
    url = cancionActual.url;

    // Capturar Cancion siguiente
    let song_index = document.querySelector('#song');
    song_index.innerHTML = `
        <div class="song"><p><strong>${nombre}</strong></p></div>
        <small>${artista}</small>
    `;
    // Capturar Fotografia del Album Siguiente
    let album_index = document.querySelector('#album');
    album_index.innerHTML = `
    <img class="img60" src="${url}">
    `;
});