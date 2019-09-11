const sayHalloWorld = () => {
    console.log('Hallo World');
    // Wenn eine Funktion kein return-Statement hat, dann returned sie undefined
    // return undefined;
}

sayHalloWorld();

// f soll eine Funktionsreferenz sein
const callSomeFunc = (f) => {
    f();
}

callSomeFunc( sayHalloWorld );
// callSomeFunc( sayHalloWorld() ); = callSomeFunc( undefined );

// Aufgabe:
//
// Rufe die Funktion sayHalloWorld nach 5 Sekunden auf. Benutze dafür setTimeout.

setTimeout(
    sayHalloWorld,
    5000
);

// Aufgabe:
//
// Erstelle eine Funktion arrayCall die 3 Parameter entgegennimmt f1, f2 und f3.
// f1, f2 und f3 sollen Referenzen auf Funktionen sein. arrayCall erstellt ein
// Array und pusht die f1, f2 und f3 hinein. Danach ruft arrayCall alle Funktionen
// nacheinander auf.

const arrayCall = (f1, f2, f3) => {
    let array = [];
    array.push(f1);
    array.push(f2);
    array.push(f3);
    for(i of array) {
        i();
        // i('hallo', 'world');
    }
}
