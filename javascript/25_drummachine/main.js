// Aufgabe:
// 
// vereinfache folgenden Code mit z.B. Arrays

// const button1Obj = document.getElementById('button1');
// const button2Obj = document.getElementById('button2');
// const button3Obj = document.getElementById('button3');
// const button4Obj = document.getElementById('button4');
// const button5Obj = document.getElementById('button5');
// const button6Obj = document.getElementById('button6');

let buttonObjs = [];
for(let i=1; i<=6; i++) {
    buttonObjs.push(document.getElementById(`button${i}`));
}

// const song1 = new Audio('808_drum_kit/kicks/0015.wav');
// const song2 = new Audio('808_drum_kit/kicks/0018.wav');
// const song3 = new Audio('808_drum_kit/snares/0027.wav');
// const song4 = new Audio('808_drum_kit/snares/0020.wav');
// const song5 = new Audio('808_drum_kit/percussion/0013.wav');
// const song6 = new Audio('808_drum_kit/percussion/0012.wav');

let songs = [];
songs.push( new Audio('808_drum_kit/kicks/0015.wav') );
songs.push( new Audio('808_drum_kit/kicks/0018.wav') );
songs.push( new Audio('808_drum_kit/snares/0027.wav') );
songs.push( new Audio('808_drum_kit/snares/0020.wav') );
songs.push( new Audio('808_drum_kit/percussion/0013.wav') );
songs.push( new Audio('808_drum_kit/percussion/0012.wav') );

// button1Obj.onmousedown = function() {
//     song1.pause();
//     song1.currentTime = 0;
//     song1.play();
// }

// button2Obj.onmousedown = function() {
//     song2.pause();
//     song2.currentTime = 0;
//     song2.play();
// }

// button3Obj.onmousedown = function() {
//     song3.pause();
//     song3.currentTime = 0;
//     song3.play();
// }

// button4Obj.onmousedown = function() {
//     song4.pause();
//     song4.currentTime = 0;
//     song4.play();
// }

// button5Obj.onmousedown = function() {
//     song5.pause();
//     song5.currentTime = 0;
//     song5.play();
// }

// button6Obj.onmousedown = function() {
//     song6.pause();
//     song6.currentTime = 0;
//     song6.play();
// }

for(let i=0; i<buttonObjs.length; i++) {
    buttonObjs[i].onmousedown = function() {
        songs[i].pause();
        songs[i].currentTime = 0;
        songs[i].play();
    }
}

document.addEventListener('keydown', function( e ) {
    
    console.log(e.keyCode);

    switch(e.keyCode) {
        case 82: // r
            // button1Obj.onmousedown();
            buttonObjs[0].onmousedown();
        break;
        case 84: // t
            // button2Obj.onmousedown();
            buttonObjs[1].onmousedown();
        break;
        case 90: // z
            // button3Obj.onmousedown();
            buttonObjs[2].onmousedown();
        break;
        case 70: // f
            // button4Obj.onmousedown();
            buttonObjs[3].onmousedown();
        break; 
        case 71: // g
            // button5Obj.onmousedown();
            buttonObjs[4].onmousedown();
        break; 
        case 72: // h
            // button6Obj.onmousedown();
            buttonObjs[5].onmousedown();
        break;                               
    }


}); 