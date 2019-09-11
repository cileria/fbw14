// Der Spread-Operator kann 1) Arrays in Argumentlisten
// konvertieren

// Funktion mit unendlicher Anzahl an Parametern
// z.B. console.log
console.log('hallo', 'world', 'wie', 'gehts');

const numbers = [
    1,
    2,
    3,
    4,
    5,
    6,
    7
];

console.log( numbers[0], numbers[1], numbers[2] );

// Array wird in eine Argumentliste konvertiert
console.log( ...numbers );

const sum = (x,y,z) => {
    return x + y + z;
}

console.log(
    sum(...numbers)
);

// Objekt-Referenzen
let array1 = [4,2,6,9];
let array2 = array1;

console.log(array1);

array2[0] = 7;

console.log(array1);

// Der Spread-Operator kann 2) Neue Arrays aus
// bestehenden Arrays erstellen

let cloneOfArray1 = [...array1];
let array3 = [10, 12, 14, 16];

let concat1and3 = [...array1, ...array3];
console.log( concat1and3 );

let additional = [...concat1and3, ...[20,30,40], ...[-5]];
console.log(additional);

// Aufgabe:
//
// Erstelle eine Funktion increasingNumbers mit einem
// Parameter n. increasingNumbers erzeugt ein Array
// mit n Elementen, Zahlen von 0 bis n.
//
// Bsp:
//
// increasingNumbers(5):
// 
// [0, 1, 2, 3, 4];
// 
// Restriktion: verwende dafür NUR den Spread-Operator und kein Push. Schleifen sind erlaubt. 


const increasingNumbers = (n) => {
    let newarray = [];
    for (let i=0; i<n; i++) {
        newarray=[...newarray, i] 
        // newarray=[...newarray, ...[i]] // geht auch

    }
    return newarray;
}

console.log(increasingNumbers(5));

// Spread Operator mit Objekten
let obj1 = {
    x: 1,
    y: 5
};
console.log( obj1 );

// obj1 wird direkt verändert
obj1.x = 10;
console.log( obj1 );

let obj2 = obj1;

// obj1 indirekt über die referenz von obj2 verändert
obj2.x = 12;
console.log(obj1);

// obj3 ist ein klon von obj1
let obj3 = { ...obj1 };
obj3.x = 50000;
console.log(obj1);

// obj4 ist ein klon von obj1, mit überschreibung des key-value paares y: 5
let obj4 = { ...obj1, y: 15 };
console.log( obj4 );