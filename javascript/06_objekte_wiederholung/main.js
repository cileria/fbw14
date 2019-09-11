var person = {
    name: "Peter",
    alter: 23,
    beruf: "Hartzer",
    aendereBeruf: function (neuerBeruf) {
        this.beruf = neuerBeruf;
    },
    toString: function () {
        console.log(
            this.name + '\n',
            this.alter + '\n',
            this.beruf
        );
    }
}
console.log(person.beruf);
person.aendereBeruf("Web Developer");
//console.log(person.beruf);
console.log(person["beruf"], person["alter"]);
person.toString();











// Ein Konstruktor ist wie eine Schablone, 
// wie ein Schema, das man selbst füllen kann
// Auch genannt Template oder Prototype 
// Struktur wird vorgegeben
// Inhalte können dynamisch oder statisch sein
// Beim Konstruktor wird IMMER der erste Buchstabe groß geschrieben

let Person = function(myFirstName, myLastName, myAge) {
    // links wird generiert, rechts ist der Wert, der gespeichert wird
    // key = value; mit dynamischem Wert
    this.firstName = myFirstName;
    this.lastName = myLastName;
    this.age = myAge;
    this.calcCurrency = function () {
        // Hier kommt die Funktion
    };

// Erweitert diesen Konstruktor so, dass alles was vorher möglich war 
// (bankAccount, xchange, umwandlungs-funktion usw.)
// auch hiermit funktioniert

}

// Hier kreieren wir Objekte, mit NEW benutzen wir die passende Schablone
// Wir legen also automatisch die passenden Daten an und ordnen sie zu 

let schweizer = new Person("Hans", "Zimmer", 23);
let grieche = new Person("Vassilis", "Papodopoulus", 33);
let australier = new Person("John", "Doe", 45);

schweizer.calcCurrency();

// 1. Aufgabe: Bitte gebt alle Properties, die eure Objekte z.B. der Schweizer besitzen
// auf der Console aus. Tipp: Benutze die for(... in... ) Schleife

for(prop in grieche) {
    console.log(prop);
}

// 2. Aufgabe: Jetzt interessieren uns auch die Werte. Wie können wir diese ebenfalls
// auf der Console ausgeben? So soll es ausgeben werden: key: value

for(prop in grieche) {
    console.log(prop + ": " + grieche[prop]);
    console.log(`${prop} : ${grieche[prop]}`);
}