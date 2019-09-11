let g = 5;

function accessToChild() {
    console.log('x ist ' + x); // x ist undefined
}

function parent() {

    let x = 1;

    child1();

    function child1() {
        let z = 1 + x + g;
        console.log('z ist ' + z);
        // child1() kann sich selber aufrufen, 
        // würde aber in einer unendlich-schleife niemals terminieren
    }

    function child2() {
        // x ist im eltern scope von child1, also kann
        //  ich darauf zugreifen
        // g ist im eltern scope von eltern scope von child1,
        // also kann ich auch darauf zugreifen
        let z = 2 + x + g;
        console.log('z ist ' + z);

        function child2b() {
            let f = 1;
            // Aufgabe:
            // Auf welche Variablen hat child2b zugriff?
            // 
            // f, z, x, g

            function child2c() {
                let j = 5;
            }
        }
    }
}

// Aufgabe: Schaue Dir die beiden Snippets an und überlege, ob Zeile 73 funktioniert.
// 
// Code Snippet 1
// let a = 'a'; // definiert im global scope
// first();

// function first() { // definiert im global scope
//     let b = 'b'; // definiert im scope von first

//     second();
//     function second() { // ist im scope von first definiert
//         let c = 'c'; // im scope von second
//         console.log(a,b,c);
//     }
// }

// Code Snippet 2
let a = 'a'; // global scope
first();

function first() { // global
    let b = 'b'; // scope von first

    second();
    function second() { // definiert im first scope
        let c = 'c'; // second scope
        third();
    }
}

function third() { // global scope
    // console.log(c); // geht das? - NEIN, kein zugriff auf den scope, der
                    // funktion second
}

// Aufgabe:
//
// Definiere 3 Funktionen foo1, foo2 und foo3. 
// Alle 3 Funktionen sind im globalen Scope.
// foo1 hat 2 Unterfunktionen foo1a und foo1b.
// Im Scope von foo3 gibt es zwei Variablen x und y.
// Im Scope von foo2 existiert eine for-Schleife mit 
// einer Variable i, die von 0 bis 10 den jeweiligen Wert
// von i ausgibt. i soll im gesamten Scope von foo2 sichtbar sein.

function foo1() {
    function foo1a() {

    }

    function foo1b() {
        
    }
}

function foo2() {
    let i=0;
    for(i=0; i<10; i++) { // anonymer block
        // wenn let i=0 in der for-Schleife steht,
        // dann ist i nur im anonymen for-Block sichtbar
        console.log('i = ' + i);
    }
    console.log('i = ' + i);
}

function foo3() {
    let x, y;
}

foo2();