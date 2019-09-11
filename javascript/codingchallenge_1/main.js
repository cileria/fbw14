var johnGroesse = 180;
var mikeGroesse = 173;

var johnAlter = 30;
var mikeAlter = 35;

var johnScore = johnGroesse + (johnAlter * 5);
var mikeScore = mikeGroesse + (mikeAlter * 5);

if(johnScore > mikeScore) {
    console.log(`John hat gewonnen.`);
}
else if(johnScore < mikeScore) {
    console.log(`Mike hat gewonnen`);
}
else { // hier wenn johnScore === mikeScore
    console.log('Unentschieden.');
}

var agustinaGroesse = 163;
var agustinaAlter = 37;
var agustinaScore = agustinaGroesse + (agustinaAlter * 5);

if(johnScore > agustinaScore && johnScore > mikeScore) {
    console.log(`John hat das Spiel gewonnen.`);
}
else if(agustinaScore > johnScore && agustinaScore > mikeScore) {
    console.log(`Agustina hat das Spiel gewonnen`);
}
else if(mikeScore > johnScore && mikeScore > agustinaScore) {
    console.log(`Mike hat das Spiel gewonnen`);
}
else {
    console.log(`Keiner hat das Spiel gewonnen`);
}

