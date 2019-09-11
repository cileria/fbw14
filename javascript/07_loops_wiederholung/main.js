// console.log('hallo world');
// console.log('hallo world');
// console.log('hallo world');
// console.log('hallo world');
// console.log('hallo world');
// console.log('hallo world');
// console.log('hallo world');
// console.log('hallo world');
// console.log('hallo world');
// console.log('hallo world');

    // anfangswert;     bedingung  ;  endzuweisung nach jeder iteration
for(  var i = 0    ;      i < 10    ;             i = i+1               ) {
    // solange i < 10 ist führe diesen code aus
    console.log(`hallo world: ${i}`);
}

// aufgabe:
//
// gib den satz: "hallo mein name ist " + deinen namen 
// 5 mal aus. gib dabei den aktuellen index * 10 aus.

for( i=0; i<5; i=i+1 ) {
    console.log(`hallo mein name ist mohammed ${i}`);
}

// for-schleifen und arrays
var namen = [
    'Peter',    // 0
    'Hans',     // 1
    'Julia',    // 2
    'Astrid',   // 3
    'Tim'       // 4
];

// Aufgabe:
//
// Benutze eine for-Schleife, um alle Namen in dem Array
// nacheinander auszugeben.

for(var i=0; i<5; i=i+1) {
    console.log(namen[i]);
}

var arrayLength = 10;
var array = [];

// array.push(1);
// array.push(2);
// array.push(3);
// array.push(4);
// array.push(5);
// array.push(6);
// array.push(7);
// array.push(8);
// array.push(9);
// array.push(10);

// Aufgabe:
//
// Schreibe die vorhergehenden Befehle als for-Schleife.
for(var i=0; i<arrayLength; i=i+1) {
    array.push(i+1);
}

console.log(array);

// Endlosschleife
//

// for(i=0; true; i++) {
//     console.log('Never stops');
// }

// Aufgabe:
//
// Programmiere eine for-Schleife, die alle ungeraden Zahlen
// bis 100 ausgibt.
//

var arrayOdd = [];
for(var i=1; i<100; i=i+2) {
    arrayOdd.push(i);
    console.log(`momentanes Array: ${JSON.stringify(arrayOdd)}`);
}

console.log(arrayOdd);

// Aufgabe 1:
//
// Gib alle Zahlen zwischen 0 und 100 aus, die durch 7 teilbar sind.
//
// Aufgabe 2:
// 
// Gib alle Zahlen zwischen 1 und 100 aus. Gib als Zusatzinformation zu jeder
// Zahl an, ob sie durch 7 teilbar ist. Hier kannst Du z.B. mod verwenden.
// 14 % 7 = 0.
//
// Aufgabe 3 (schwer):
//
// Programmiere eine Funktion istPrimzahl, die einen Parameter n entgegen-
// nimmt. istPrimzahl gibt true zurück, wenn n eine Primzahl ist. Ansonsten,
// false.

// Aufgabe 1:
for(var i=0; i<100; i = i + 7) {
    console.log(i);
}

// Aufgabe 2:
for(var i=1; i<100; i++) {
    if(i % 7 === 0) {
        console.log(`
            ${i} ist durch 7 teilbar.
        `)
    }
    else {
        console.log(`
            ${i} ist nicht durch 7 teilbar.
        `)
    }
}

var teilnehmerliste = [
    { gender: 'm', name: 'klaus' },         // 0 
    { gender: 'f', name: 'maria' },         // 1
    { gender: 'f', name: 'petra' },         // 2
    { gender: 'm', name: 'peter' },         // 3
    { gender: 'm', name: 'sebastian' },     // 4
    { gender: 'm', name: 'emil' },          // 5
    { gender: 'f', name: 'julia' },         // 6
    { gender: 'f', name: 'lisa' },          // 7
    { gender: 'm', name: 'klaus' }          // 8
];

// Aufgabe:
//
// Schreibe eine for-Schleife, die die Männer und die Frauen
// zählt. Speichere die Ergebnisse der Zählung in zwei 
// Variablen anzahlMaenner und anzahlFrauen.

console.log( teilnehmerliste[4].name );
console.log( teilnehmerliste[7].gender );
console.log( teilnehmerliste[3].gender );

// i = i + 1 ist das gleiche wie i++
// for( var i=0; i<teilnehmerliste.length; i = i+1 ) {
//     console.log(teilnehmerliste[i].name);
// }

var anzahlMaenner = 0;
var anzahlFrauen = 0;

for( var i=0; i<teilnehmerliste.length; i = i+1 ) {
    if(teilnehmerliste[i].gender === 'm') {
        anzahlMaenner++;
    }
    else {
        anzahlFrauen++;
    }
}

console.log(`
    Anzahl der Männer ist: ${anzahlMaenner} und Anzahl
    Frauen ist ${anzahlFrauen}.
`);

// Aufgabe:
// 
// Gegeben sei folgender string alphabet:
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
// Und die Funktion randomNumber
function randomNumber(n) {
    return Math.floor(Math.random() * n);
}
// ... die eine Zufallszahl zwischen 0 und n zurückgibt.
// 
// 1) Schreibe eine Funktion randomString(stringLength) die
// einen zufälligen String der Länge stringLength generiert
// und zurückgibt. Verwende als Hilfe die Funktion randomNumber().
//
// Bsp: randomString(5) = 'bdkxi';
//      randomString(6) = 'idsfdj';
//      randomString(1) = 'd';
//
// Hinweis: Denke darüber nach, alphabet in ein Array zu konvertieren.
//    

var tempArray = [
    'erde',             // 0
    'jupiter',          // 1
    'mond',             // 2
    'sonne',            // 3
    'pluto',            // 4
    'uranus',           // 5
    'neptun'            // 6
];

//    5,      3,    2,    4
// uranus, sonne, mond, pluto
console.log(tempArray[5], tempArray[3], tempArray[2], tempArray[4]);

var zufallswert1 = randomNumber(tempArray.length);
var zufallswert2 = randomNumber(tempArray.length);
var zufallswert3 = randomNumber(tempArray.length);
var zufallswert4 = randomNumber(tempArray.length);

console.log(zufallswert1, zufallswert2, zufallswert3, zufallswert4);

console.log(
    tempArray[zufallswert1], 
    tempArray[zufallswert2], 
    tempArray[zufallswert3], 
    tempArray[zufallswert4]
);

var alphabetArray = alphabet.split('');
console.log(alphabetArray);
var zufallsbuchstabeIndex = randomNumber(alphabetArray.length);
console.log(`Die zufällige Zahl ist ${zufallsbuchstabeIndex}`);

console.log(`
    der zufällige Buchstabe ist: ${alphabetArray[zufallsbuchstabeIndex]}
`);

// stringLength definiert die Länge des
// zufälligen Strings
function randomString(stringLength) {
    var myString = '';
    for(var i=0; i<stringLength; i++) {
        // myString = myString + 'o';
        // myString = myString + alphabetArray[zufallsbuchstabeIndex];
        var z = randomNumber(alphabetArray.length);
        myString = myString + alphabetArray[z];
    }

    return myString;
}

// 2) Zusätzlich soll randomString auch Zahlen zwischen 0 und 9
//    mit in den zufälligen String hereinnehmen. Definiere dazu
//    einen weiteren String numbers = '01234556789'. Erweitere randomString
//    hierfür.

var numbers = '0123456789';
var alphaNumbers = alphabet + numbers;
var alphaNumbersArray = alphaNumbers.split('');

// 'abcdefghijklmnopqrstuvwxyz0123456789'
function randomStringEx(stringLength) {
    var myString = '';
    for(var i=0; i<stringLength; i++) {
        var z = randomNumber(alphaNumbersArray.length);
        myString = myString + alphaNumbersArray[z];
    }

    return myString;
}

var newString = randomStringEx(10);
console.log(newString);

// 3) (schwer): Füge noch zufällige Groß- und Kleinschreibung hinzu.
// a)

var alphaNumbersPlusUppercase = 
      alphabet 
    + alphabet.toLocaleUpperCase() 
    + numbers;

var alphaNumbersPlusUppercaseArray = alphaNumbersPlusUppercase.split('');
function randomStringEx2(stringLength) {
    var myString = '';
    for(var i=0; i<stringLength; i++) {
        var z = randomNumber(alphaNumbersPlusUppercaseArray.length);
        myString = myString + alphaNumbersPlusUppercaseArray[z];
    }

    return myString;
}

console.log(
    randomStringEx2(10)
);