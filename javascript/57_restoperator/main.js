// Rest-Operator: wird V.a. in Funktionen angewandt
// in der Parameterliste. Er wird gebraucht, um 
// eine unendliche Anzahl von Parametern als
// Array darzustellen
// `

const words = (...args) => {
    // args ist hier als array zu sehen
    for (let i = 0; i < args.length; i++) {
        console.log(`${i}: ${args[i]}`);
    }
}

words(
    'hallo', // 0
    'world', // 1
    'wie',   // 2
    'gehts'  // 3
);

// Aufgabe:
//
// Erstelle eine Funktion multiSum die zwei Parameter 
// a und b entgegennimmt. Wenn es nur zwei Parameter a und
// b gibt und keine weiteren, dann returned multiSum a*b.
// Falls a und b und weitere Parameter existieren, dann returned multiSum a*b+c0+c1+c2+c3...+cN.
// a und b müssen definiert sein, ansonsten returned multiSum null.
//
// multiSum(2, 6) returned 12
// multiSum(2, 6, 3) returned 15
// multiSum(2, 6, 3, 1) returned 16
//
// Falls Du nicht weiterkommst, nutze Google und schaue
// Dir im Netz Code-Beispiele an.

const multiSum1 = (...args) => {
    if (args.length < 2) {
        return null;
    }

    let result = args[0] * args[1];
    for (let i = 2; i < args.length; i++) {
        result += args[i];
    }
    return result;
}

console.log(multiSum1(2, 6));
console.log(multiSum1(2, 6, 3));
console.log(multiSum1(2, 6, 3, 1));

const multiSum2 = (a, b, ...args) => { 
    if(typeof a === 'undefined' || typeof b === 'undefined') return null;

    let sum = 0;
    for(let arg of args) sum += arg;
    return a*b+sum;
}

console.log(multiSum2(0));
console.log(multiSum2(0, 0));
console.log(multiSum2(undefined, 0));

