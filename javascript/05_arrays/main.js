var name0 = 'John';
var name1 = 'Mary';
var name2 = 'Bob';
var name3 = 'Peter';
var name4 = 'Julia';

//             0       1       2      3         4
var namen = ['John', 'Mary', 'Bob', 'Peter', 'Julia'];
console.log(namen);

console.log(namen[3]);
console.log(namen[2]);

var mixed = [
    'Matthias',
    45,
    false
];

// Aufgabe:
//
// Erstelle ein Array über Dich selber! 5 Informationen!
var holger = [
    'Holger', // 0
    50, // 1
    'Berlin', // 2
    'Zu Hoch', // 3
    false // 4
];

var fruechte = [];

console.log(fruechte);

fruechte.push('Apfel'); // .push() fügt ein neues Element am Ende des Arrays ein

console.log(fruechte);

fruechte.push('Banane');

console.log(fruechte);

fruechte.push('Melone');
fruechte.push('Kiwi');

console.log(fruechte);

fruechte.unshift('Ananas'); // .unshift() fügt ein neues Element am Anfang  des Arrays ein

console.log(fruechte);

fruechte.pop(); // entfernt das letzte Element

console.log(fruechte);

fruechte.shift(); // entfernt das erste Element

console.log(fruechte);

// Aufgabe:
// 
// Erstelle ein Array numbers dass die Zahlen 5 bis 10 beinhaltet.
// a) ändere den Wert des Elements mit dem index = 1 zu 7
// b) Füge ein neues Element an das Ende des Arrays mit dem Wert 11
// c) Füge ein neues Element an den Anfang des Arrays mit dem Wert -1

//             0   1   2   3   4   5
var numbers = [5, 6, 7, 8, 9, 10];

numbers[1] = 7;

// das gleiche wie: 
var x = 6;
x = 7;

numbers.push(11);
numbers.unshift(-1);
console.log(numbers);

// Aufgabe:
//
// Schreibe eine Funktionen ShiftPop() die einen Parameter a entgegennimmt.
// a soll ein Array sein. Die Funktion ShiftPop() entfernt das erste und das
// letzte Element von a und gibt das resultierende Array zurück.

function ShiftPop(a) {
    a.shift();
    a.pop();

    return a;
}

var x = ShiftPop(
    [1, 2, 3, 4, 5, 6, 7]
);

console.log(x);

// printFirst - printet das erste Element eines Arrays aus
function printFirst(a) {
    console.log(a[0]);
}

printFirst([
    //     0       1
    'hallo', 'welt'
]);

// Aufgabe: printSecond - analog zu printFirst
function printSecond(a) {
    console.log(a[1]);
}

printSecond([
    'hallo', 'welt'
]);

// length - Attribut

var autos = [
    'Audi',
    'BMW',
    'Peugeot',
    'Renault',
    'Maserati'
];

console.log(`
    Das Array autos hat ${autos.length} Elemente
`);

autos.push('Porsche');
autos.push('Mercedes');

console.log(`
    Das Array autos hat ${autos.length} Elemente
`);

autos.shift();
autos.shift();
autos.shift();

console.log(`
    Das Array autos hat ${autos.length} Elemente
`);

// splice - index-basiertes Herausschneiden 

//        0    1    2    3    4    5    6    7
var f = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
console.log(f);
f.splice(3, 2);
// in Array f, schneide Element 3 und 4 heraus.
// Gehe zu Position 3 und schneide 3 und 4 heraus
console.log(f);

// Aufgabe:
// 
// Gegeben sei folgendes Array n:
// [2, 3, 5, 7, 11, 13, 17, 19, 23]
//
// Du weißt nicht, dass das Array 9 Elemente hat.
// 
// a) Entferne das erste Element mit splice.
// b) Entferne das letzte Element mit splice.
// c) Entferne nun das 4. und 5. Element mit splice. 

//       0  1  2  3  4   5   6   7   8
var n = [2, 3, 5, 7, 11, 13, 17, 19, 23];

console.log(`das Array n hat ${n.length} Elemente`);

// a
n.splice(0, 1);

// b
// n.splice(7, 1); // falls es bekannt ist
n.splice(n.length - 1, 1); // array.length - 1 immer das letzte element

// c
n.splice(3, 2);

// splice zum adden von elementen

var list = ["foo", "bar"];
list.splice( 1, 0, "baz", "qux");
["foo", "baz", "qux", "bar"] // result


// split - erzeugt arrays aus strings

var gemuese = 'Spinat;Gurke;Zucchini;Lauch;Zwiebel';
var gemueseArray = gemuese.split(';');

console.log(gemueseArray);

// join - erzeugt strings aus arrays

var cityArray = [
    'Berlin', 'Hamburg', 'Muenchen', 'Frankfurt', 'Koeln'
];

var cityString = cityArray.join(':');
console.log(cityString);

// delete - elemente löschen, ohne splice

var countryArray = [
    'Germany', 'Austria', 'Switzerland', 'Lichtenstein'
];

delete countryArray[1];
console.log(countryArray);

// concat - mergen von arrays
var array1 = [1,3,5];
var array2 = [2,4,6];

var array3 = array1.concat(array2);

console.log(array3);

// Aufgabe:
// 
// Gegeben seien die beiden folgenden Strings:
// str1 = 'abcdefghijklmnopqrstuvwxyz';
// str2 = '0-9-8-7-6-5-4-3-2-1';
//
// a) Konvertiere str1 und str2 in jeweils ein Array mit 26 bzw. 10 Elementen.
// b) Erzeuge ein Array numbersLetters das aus den beiden Arrays
//    aus a) erzeugt wird.
// c) Erzeuge einen String finalString aus dem Array aus b)
//
// Tipp: der leere String ist auch ein String...

var str1 = 'abcdefghijklmnopqrstuvwxyz';
var str2 = '0-9-8-7-6-5-4-3-2-1';

// a
var arrayStr2 = str2.split('-');
var arrayStr1 = str1.split('');
console.log(arrayStr1);

// b
var numbersLetters = arrayStr1.concat(arrayStr2);
console.log(numbersLetters);

// c
var finalString = numbersLetters.join(':');
console.log(finalString);

// exkurs: strings nach numbers konvertieren
var numberStr1 = '1';
var number1 = parseInt(numberStr1);
var number2 = number1 + 17;
console.log(number2);

numbersLetters[27] = parseInt(numbersLetters[27]);

// exkurs: numbers nach string konvertieren
var numberToConvert = 17;
var convertedStr = numberToConvert.toString();
console.log(`konvertierter String: ${convertedStr}`);

var k = 5;
// k soll um 1 erhöht werden
k = k + 1;
// kürzere schreibweise
k += 1;
// kürzeste schreibweisen
k++;
++k;

var j = 10;
// j soll um ein 20 faches größer werden
j = j * 20; // kürzer
j *= 20; // am kürzesten
j /= 20; // division
j -= 20; // minus
j--; // minus 1
--j; // minus 1


// nested arrays
var nestedArray1 = [
    [
        'hallo', // 0
        'welt'   // 1
    ] // 0
];

console.log(nestedArray1[0][1]);

console.log(nestedArray1);

var nestedArray2 = [
    [1,2,3], // 0 
    [4,5,6], // 1 
    [7,8,9]  // 2 
];

// Aufgabe:
// Index von: 6? 8? 1? [7,8,9]? 

console.log(nestedArray2[1][2]); // 6
console.log(nestedArray2[2][1]); // 8
console.log(nestedArray2[0][0]); // 1
console.log(nestedArray2[2]); // [7,8,9]

// slice - kopiert ein array in ein anderes

var kopiereMich = [1,2,3,4,5,6,7];
var kopie = kopiereMich.slice();

console.log(kopie);