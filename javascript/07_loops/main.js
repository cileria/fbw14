console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");

for (var i = 0; i < 10; i++) {
    console.log("Hello World");
    console.log(i);
}

var names = [
    'Patrick', //0
    'Micha', //1
    'Almas', //2
    'Holger' //3
];

console.log(names[0]);

for (var i = 0; i < 4; i++) {
    console.log(i + ": " + names[i]);
}

var apple1 = {
    color: 'red',
    size: 'big'
}

var apple2 = {
    color: 'green',
    size: 'small'
}

var apple3 = {
    color: 'yellow',
    size: 'medium'
}

var apples = [
    apple1,
    apple2,
    apple3
];

// Aufgabe: Gib für alle Äpfel jeweils die Größe aus!
// Benutze Schleifen :) 


for (var i = 0; i < apples.length; i++) {
    console.log(`Das Gewicht von ${i} ist ` + apples[i].size);
}

// Aufgabe: Kreiert eine Funktion numArray
// Diese bekommt zwei Parameter a und b 
// a und b sind Nummern, wie z.B.
// 1 und 10 oder 5 und 20
// Die Funktion soll false zurückgeben wenn
// a > b oder a < 0 oder b < 0 
// Andererseits soll ein Array zurückgeliefert werden 
// Das alle Zahlen zwischen a und b beinhaltet 
// BEISPIEL
// a = 12 und b = 16
// numArray gibt [12, 13, 14, 15, 16] zurück 
// einschließlich a und b 

function numArray(a, b) {
    if (a > b || a < 0 || b < 0) {
        return false;
    }
    var retArray = [];
    for (var i = a; i <= b; i++) {
        retArray.push(i);
    }
    return retArray;
}

console.log(numArray(10, 15));
console.log(numArray(0, 10));

// Schleife innerhalb einer Schleife 
// erste Schleife index = i 
// zweite Schleife index = j


for (var stars = '*'; stars.length <= 6; stars += '*') {
    console.log(stars);
}

var stars = '';
for (var i = 0; i <= 6; i++) {
    stars = '';
    for (var j = 0; j <= i; j++) {
        stars += '*';
    }
    console.log(stars);
}

var numbers = [3, 6, 10, 3, 6, 10];
console.log('numbers hat die Länge von ' + numbers.length);

numbers.push(130);
numbers.push(-1);
console.log('numbers hat die Länge von ' + numbers.length);

// Schreibt eine Schleife die alle Nummern eines Arrays ausgibt 
// eine Zahl pro Zeile 
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log('-------------------');

for (var i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}

for (var k = 0; k < 66; k += 2) {
    console.log('k ist :' + k);
}

// WHILE SCHLEIFEN

var i = 0;
while (i < 40) {
    if (i !== 12) {
        console.log('i ist kleiner als 5 weil i ist ' + i);
    }
    i++;
}

// DO WHILE SCHLEIFE 

var i = 0;
do {
    if (i !== 12) {
        console.log('i ist kleiner als 5 weil i ist ' + i);
    }
    i++;
} while (i < 40);

// star example
var i = 1,
    j = 0;
for (; i <= 5; i++) {
    var numStars = '';
    console.log('i = ' + i);
    for (j = 0; j < i; j++) {
        numStars += '*';
        console.log('j = ' + j);
    }
    console.log(numStars);
}

var i = 0;
while (i < 5) {
    console.log('i is smaller than 5 because i is  ' + i);
    ++i;
}
var numbers = [3, 6, 10, 12, 15, -1];
// Aufgabe gebt die Zahlen mit einer while Schleife aus
// nutzt dazu numbers.length

var i = 0;
while (i < numbers.length) {
    console.log(numbers[i]);
    i++;
}

// SCHÖNEN FEIERABEND :D 


var numbers = [13, 3, 10, 12, 15, -1];
console.log(numbers);
do {
    var caseFound = false;
    for (var i = 0; i < numbers.length; i++) {
        console.log(i);
        if (numbers[i] > numbers[i + 1]) { // ist 13 größer als 3? 
            caseFound = true;
            var smallerNumber = numbers[i + 1]; // Zwischenspeicher smallerNumber = 3
            numbers[i + 1] = numbers[i]; // 2. position wird die 13 gespeichert
            numbers[i] = smallerNumber; // 1. position wird die 3 gespeichert
        }
        console.log(numbers);
    }

} while (caseFound);


// Pyramide 
function tannenbaum(lines) {
    for (var i = 0; i < lines; i++) {
        var starOutput = "";
        for (var j = lines; j > i; j--) {
            starOutput += " ";
        }
        for (var k = 0; k <= i; k++) {
            starOutput += " *";
        }
        console.log(starOutput);
    }
}
tannenbaum(10);