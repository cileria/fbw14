// statement: produziert eine aktion or eine deklaration

halloWorldES5(); // hoisting

function halloWorldES5() {
    console.log('Hallo World ES5');
}

// expression: produziert einen wert

// halloWorldES6(); // wenn der compiler bei zeile 11 ankommt, dann wurde im hoisting-prozess die deklaration von halloWorldES6 nicht gefunden

// ES5-Funktionen kann ich auch als
// Expressions schreiben -> werden
// nicht im Hoisting-Prozess mit
// registriert
// 
// let halloWorldES6 = function () {
//     console.log('Hallo World from ES6');
// }

let halloWorldES6 = () => {
    console.log('Hallo World from ES6');
}

halloWorldES6();

let obj1 = {
    name: 'anton',
    getName: function () {
        return this.name // this-keyword refenziert auf obj1
    }
}

console.log(obj1.getName());

let obj2 = {
    name: 'sarah',
    getName: () => {
        return this.name; // this-keyword referenziert auf die umgebung, in der getName später aufgerufen wird
    }
}

console.log(obj2.getName());

let obj3 = {
    getThis: () => {
        return this;
    }
}

console.log(obj3.getThis());

// wenn wir in der klasse eine arrow function benutzen, können wir später bei dem instanziierten objekt mit dem this keyword auf die klasse zugreifen

class Obj4 {
    constructor() { }
    getThis = () => { return this; }
}

const obj4 = new Obj4();
console.log(obj4.getThis());


function returnHalloWorldES5() {
    return 'Hallo World';
}

console.log(returnHalloWorldES5());

const returnHalloWorldES6_1 = () => {
    return 'Hallo World 1';
}

console.log(returnHalloWorldES6_1());

const returnHalloWorldES6_2 = () => 'Hallo World 2';
console.log(returnHalloWorldES6_2());

const returnHalloWorldES6_3 = _ => 'Hallo World 3';
console.log(returnHalloWorldES6_3());

const sum = (a, b) => a + b;
const foo = a => 2 * a;

// Aufgabe: Konvertiere dies ES5-Syntax in eine ES6-Syntax.

// function A(x) {
//     return x * B(x) + C(x, 2 * x);
// }

// console.log( A(5) );

// function B(x) {
//     return x * 2 * C(x, 2 * x);
// }

// function C(x, y) {
//     const obj = {
//         z: 5,
//         getZ: function() {
//             return this.z * 4;
//         }
//     }
//     return 4 * x + y + obj.getZ();
// }

const A = x => x * B(x) + C(x, 2 * x);
const B = x => x * 2 * C(x, 2 * x);

const C = (x, y) => {

    class Obj {
        constructor() {}
        z = 5
        getZ = () => this.z * 4;
    }
    
    const obj = new Obj();
    return 4 * x + y + obj.getZ();
}


console.log(A(5));