const years = [1990, 1965, 1982, 1937];

// EcmaScript 5
let ages5 = years.map(function (el) {
    //return 'i am the replacement of ' + el;
    return 2019 - el;
});
console.log(ages5);

// EcmaScript 6
// Ansonsten mit geschweiften Klammern und return kann man mehrere Statements setzen 
let ages6 = years.map((el) => {
    console.log('hello');
    return 2019 - el;
});
console.log(ages6);

// erlaubt nur ein Statement ohne Return und ohne geschweifte
let ages7 = years.map((el) => 2019 - el);
console.log(ages7);


// Normale Arrow Funktion 
// Runde Klammern um die Argumente 
const myFunction = (x, y) => {
    // Beliebig viel Code 
    return x * y;
}
console.log(myFunction(5, 6));


// Testresults in Kurzschreibweise
const alleResultate = [78, 82, 45, 69, 23, 91, 55, 39, 66, 60];

const howManyPercentHaveFailed = (inputArray, punktezahl) => {
    let studentsWhoFailed = 0;

    for (let elem in inputArray) {
        if (inputArray[elem] < punktezahl) {
            studentsWhoFailed++;
        }
    }
    let failedQuote = studentsWhoFailed / inputArray.length * 100;
    console.log(`Es sind ${failedQuote} % durchgefallen, ${100-failedQuote} % haben bestanden`);
}

howManyPercentHaveFailed(alleResultate, 45);

// Ein Parameters, imperativ
let ages6b = years.map((el) => {
    return 'Geburtsjahr: ' + el + ', Alter: ' + (2018 - el);
});
console.log(ages6b);


// Drei Parameter, imperativ, obwohl der Index nicht gebraucht wird
// muss man den angeben, damit man ans Array kommt
let ages6c = years.map((el, index, array) => {
    return 'array: ' + array + ', age: ' + (2018 - el);
});
console.log(ages6c);

// Angenommen wir brauchen nur das Array
// Müssen wir trotzdem auch das Element und den Index angeben
let ages6d = years.map((el, index, array) => {
    return 'array: ' + array;
});
console.log(ages6d);


// 1. Aufgabe
// Gegeben ist folgendes Array [3, 5, 67, 12, 34, 4, 9, 30]
// Filter die ungeraden Zahlen in ein neues Array und multipliziert nur die ungeraden mit 2
// Output [6, 10, 134, 18]
// Bonus: Auch kürzer möglich?

// Siehe Lösung von Zohir im Slack

// Wenn es keine Argumente gibt, sollten die Klammern leer, aber da sein!!!
let sayHi = () => console.log("Hello!");
sayHi();

// 2. Aufgabe
// Gegeben ist das folgende Array, sortiert die Leute alphabetisch nach Vornamen ;) 
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
    'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert',
    'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester',
    'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
    'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle',
    'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose',
    'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert',
    'Blair, Tony', 'Blake, William'
];

function changeNameParts(myArray) {
    let output = [];
    for (let i in myArray) {
        let name = myArray[i].split(", ");
        output.push(`${name[1]}, ${name[0]}`);
    }
    return output;
}

function sortVornamen(myArray) {
    let output = changeNameParts(myArray); // Vor und Nachnamen vertauschen
    output.sort(); // Alphabetisch sortieren
    output = changeNameParts(output); // Vor und Nachnamen wieder zurück vertauschen
    return output;
}

console.log(people);
let output = sortVornamen(people);
console.log(output);