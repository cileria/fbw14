// legen 3 konstanten an
// um html in javascript reinzuholen
const playSongObj = document.getElementById('playSong');
const stopSongObj = document.getElementById('stopSong');
const pauseSongObj = document.getElementById('pauseSong');

const song = new Audio('song.mp3');

playSongObj.onclick = function() {
    song.play();
}

stopSongObj.onclick = function() {
    song.pause();
    song.currentTime = 0;
}

pauseSongObj.onclick = function() {
    song.pause();
}
