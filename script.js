//DOM Elements
const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

//Music
const song = [
    {
        name: 'jacinto-1',
        displayName: "Electric Chill Machine",
        artist: 'Jacinto Design',
    },{
        name: 'jacinto-2',
        displayName: "Seven Nation Army (Remix)",
        artist: 'Jacinto Design',
    },{
        name: 'jacinto-3',
        displayName: "Goodnight, Disco Queen",
        artist: 'Jacinto Design',
    }, {
        name: 'metric-1',
        displayName: "Front Row (Remix)",
        artist: 'Metric/Jacinto Design',
    },
];

//Check if playing
let isPlaying = false;

//Play
function playSong(){
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', "Pause");
    music.play();
}

//Pause
function pauseSong(){
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', "Play");
    music.pause();
}

//Play or pause event listener

playBtn.addEventListener('click', () => (isPlaying ? pauseSong(): playSong()))

//Update the DOM
function loadSong(song){
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
}

//Current Song
let songIndex = 0;

//Change Song
function prevSong() {
    songIndex--;
    if(songIndex < 0){
        songIndex = song.length - 1;
    }
    loadSong(song[songIndex]);
    playSong();
}

function nextSong() {
    songIndex++;
    if(songIndex > song.length - 1 ){
        songIndex = 0;
    }
    loadSong(song[songIndex]);
    playSong();
}

//On Load - Select First Song
loadSong(song[songIndex]);

//Evemt Listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);