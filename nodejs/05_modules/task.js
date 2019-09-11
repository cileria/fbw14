// Aufgabe 1:
// 
// Erstelle ein Modul "countdown.js".
// Dieses soll eine Funktion exportieren,
// welche alle Zahlen von 0 bis 20
// ausgibt.

const countdown = require('./countdown.js');
countdown();

// Aufgabe 2:
//
// Erstelle in Modul "introduction.js"
// welches eine Funktion intro exportiert.
// intro erwartet ein Parameter userInfo
// userInfo soll ein Objekt sein mit den
// keys firstname, lastname, email und
// birthYear.
//
// intro soll einen text ausgeben, der
// so ungefähr aussieht wie der folgende:
//
// "Hi, mein Name ist FIRSTNAME LASTNAME
// und meine Email ist EMAIL. Ich wurde
// geboren am BIRTHYEAR."

const obj = {
    firstname: 'Zohir',
    lastname: 'Almond',
    email: 'almond@gmx.net',
    birthYear: 1989
};

const intro = require('./introduction.js');
intro(obj);

// Aufgabe 3:
//
// a) Erstelle ein Modul "Person.js" mit
// folgender Klasse

// class Person {
//     constructor(
//                 firstname, 
//                 lastname, 
//                 email, 
//                 birthYear) 
//     {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.email = email;
//         this.birthYear = birthYear;
//     }
// }

const Person = require('./Person');

const person1 = new Person(
    'Anton','Baumgartner', 'anton@gmx.net', 1965
);

const person2 = new Person(
    'Bernd','Zaungartner', 'bernd@gmx.net', 1990
);

const person3 = new Person(
    'Klaus','Gartner', 'anton@gmx.net', 1988
);

// b) Importiere Person hier rein. 
// c) Erstelle 3 verschiedene Personen mit erfundenen Daten.
// d) Erweitere Person um eine Methode, die
//    Alter berechnet aufgrund des aktuellen
//    Jahres 2019 und returne dieses. Führe die Methode hier aus.

console.log(person1.getAge());