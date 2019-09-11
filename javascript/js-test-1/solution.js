// Schreibe ein Programm, das den Städtenamen anzeigt, aber nur, wenn es mit "Los" oder "New" beginnt, 
// sonst soll es zurückgeben: "Dieser Städtename beginnt nicht mit Los oder New".

function staedtename(town) {
    const townBeginning = townName.substring(0, 3);
    // townName.startsWith('Los') || townName.startsWith(')
    if (townBeginning === 'New' || townBeginning === 'Los') {
        console.log(town);
    } else {
        console.log('Dieser Städtename beginnt nicht mit Los oder New');
    }
}

// Schreibe ein Programm, das die Summe von allen Elementen eines gegebenen Arrays von Integers ausrechnet.
// Die Länge des Arrays muss mindestens 3 sein.
// Beispiel
// [5, 10, 15] ➞ 30

function extra() {
    var summeArray1 = 0;
    var arrayInt1 = [5, 20, 155];
    if (arrayInt1.length < 3) {
        return 'Array hat zu wenige Items';
    } else {
        for (var i = 0; i < arrayInt1.length; i++) {
            summeArray1 = summeArray1 + arrayInt1[i];
        }
        return summeArray1;
    }
}

// Gegeben sind zwei Strings, firstName und lastName, gib einen einzelnen String zurück im Format 
//"lastName, firstName".
// Beispiele
// "John", "Doe" ➞ "Doe, John"
// "Mary", "Jane" ➞ "Jane, Mary"

//Statische Lösung  
let firstName = "John";
let lastName = "Doe";
let name = `${lastName}, ${firstName}`;
console.log(name);

// Dynamische Lösung
function nameString(firstName, lastName) {
    return `${lastName}, ${firstName}`;
}

console.log(nameString('Mary', 'Jane'));

//Schreibe ein Programm dass ein Integer bekommt und true zurückgibt, wenn es durch 100 teilbar ist, ansonsten gibt es false zurück.
//Beispiele
//1 ➞ false
//1000 ➞ true
//100 ➞ true

function teilbarDurchHundert(number) {
    return (number % 100 === 0); // return true wenn teilbar, sonst false wenn nicht teilbar 
}

console.log(teilbarDurchHundert(1));
console.log(teilbarDurchHundert(1000));
console.log(teilbarDurchHundert(100));

// Schreibe ein Programm, dass eine String-Endung an jedes Teil eines Arrays anhängt.
//Beispiele & erwarteter Output
//["clever", "meek", "hurried", "nice"], "ly" ➞ ["cleverly", "meekly", "hurriedly", "nicely"]
//["new", "pander", "scoop"], "er" ➞ ["newer", "panderer", "scooper"]
//["bend", "sharpen", "mean"], "ing" ➞ ["bending", "sharpening", "meaning"]

function endung(myArray, myEndung) {
    let newArray = [];
    for (let index in myArray) {
        newArray.push(myArray[index] + myEndung);
    }
    return newArray;
}
console.log(endung(["clever", "meek", "hurried", "nice"], 'ly'));

// Schreibe eine Programm, dass checkt, ob eine Zahl gerade oder ungerade ist 
// und "gerade" für gerade Zahlen und "ungerade" für ungerade Zahlen zurückgibt..
// Beispiele & erwarteter Output
// 3 ➞ "3 ist ungerade"
// 146 ➞ "146 ist gerade"
// 19 ➞ "19 ist ungerade"

function geradeUngerade(myZahl) {
    if (myZahl % 2) { // wenn es einen Rest gibt
        console.log(myZahl + ' ist ungerade');
    } else { // wenn es keine Rest gibt
        console.log(myZahl + ' ist gerade');
    }
}

geradeUngerade(3);
geradeUngerade(6.20);

function ternaere(myZahl) {
    (myZahl % 2) ? console.log(myZahl + ' ist ungerade'): console.log(myZahl + ' ist gerade');
}

ternaere(257);
ternaere(666);

// 7) Gegeben sind zwei von drei Winkeln eines Dreiecks, in Grad, z.B. 29° und 59°. 
// Schreibe ein Programm, dass den fehlenden (dritten) Winkel berechnet und klassifiziert, entweder als "spitz", "rechter Winkel", oder "stumpf" basierend auf seiner Gradzahl.
// Notizen
// Ein spitzer Winkel ist kleiner als 90°.
// Ein rechter Winkel ist genau 90°.
// Ein stumpfer Winkel ist größer als 90° (aber kleiner als 180°).
// Zum Beispiel: 11°, 20° sollte zurückgeben "stumpf", weil der fehlende Winkel wäre 149°, was ihn stumpf macht.
// Beispiele
// 29°, 59° ➞ Dann ist der dritte Winkel 92° also "stumpf"
// 135°, 11° ➞ Dann ist der dritte Winkel "spitz"
// 45°, 45° ➞ Dann ist der dritte Winkel "rechter Winkel"

function angle(winkelEins, winkelZwei) {
    let winkelDrei = 180 - winkelEins - winkelZwei;
    if (winkelDrei > 90 && winkelDrei < 180) {
        console.log('stumpf');
    } else if (winkelDrei === 90) {
        console.log('rechter Winkel');
    } else {
        console.log('spitz');
    }
    /* (winkelDrei <= 0 ) ? console.log('kein Dreieck'):
         (winkelDrei < 90) ? console.log('spitz') :
         (winkelDrei === 90) ? console.log('rechter Winkel') :
         console.log('stumpf');*/
}

angle(29, 59);
angle(135, 11);
angle(45, 45);

// Erzeuge eine Variable mit dem String Wert "maria jane jones". 
// Konvertiere jeden ersten Buchstaben zu Großbuchstaben. 
// Stelle sicher, dass dein Code für alle möglichen Inputs mit drei Namen funktioniert, 
// z.B. auch für "john james smith".

function grossSchreibung(name) {
    let newNamenArray = [];
    let namenArray = name.split(' ');
    for (let i = 0; i < namenArray.length; i++) {
        let newNamen = namenArray[i].replace(namenArray[i][0], namenArray[i][0].toUpperCase());
        newNamenArray.push(newNamen);
    }
    return newNamenArray.join(' ');
}

console.log(grossSchreibung('maria jane jones'));
console.log(grossSchreibung('john james smith hallo'));
console.log(grossSchreibung('MARIA JANE JONES'));

// Meine Lösung: (eine mögliche von 1000)

let myName = "maria jane jones";

function convertName(myName) {
    myName = myName.charAt(0).toUpperCase() + myName.slice(1); // Macht den ersten Buchstaben groß
    console.log(myName);
    for (let i = 0; i < myName.length; i++) {
        if (myName[i] === ' ') {
            myName = myName.substring(0, i+1) + myName.charAt(i + 1).toUpperCase() + myName.slice(i + 2);
        }
    }
    return myName;
}

console.log(convertName(myName));


//Schreibe ein Programm, dass einen String nimmt und die Anzahl der Wörter zurückgibt. Der String ist ein Satz.

function wordCount(sentence) {
    let count = sentence.split(' ');
    return count.length;
}

console.log(wordCount('huhu wie gehts'));

// Schreibe ein Programm, dass jeden Wert eines Arrays mit der Anzahl der Elemente im Array multipliziert und diese Werte in einem Array zurückgibt

function multiply(myArray) {
    for (let i in myArray) {
        myArray[i] = myArray[i] * myArray.length;
    }
    return myArray;
}
console.log(multiply([2, 3, 1, 0]));
console.log(multiply([4, 1, 1]));
console.log(multiply([1, 0, 3, 3, 7, 2, 1]));
console.log(multiply([0]));