// wir möchten das objekt hier verschicken an ein 
// anderes system

let obj1 = {
    name: 'Klaus',
    age: 40,
    city: 'Berlin',
    street: 'Friedrichstr.',
    number: '10b'
};

// wir müssen erst das objekt in einen string
// konvertieren. das machen wir mit JSON.stringify()

// "stringifizieren"
let obj1JSON = JSON.stringify(obj1);
console.log(obj1JSON);

let obj2JSON = '{"name":"sarah","city":"berlin","age":33}';
// parse = aus einem string etwas generieren, z.b. javascript oder html
let obj2 = JSON.parse(obj2JSON);
console.log(obj2);

let obj3 = [1,2,'3','abc', 10,'hallo world'];
let obj3JSON = JSON.stringify(obj3);

console.log(obj3JSON);
console.log(obj3);

// Aufgabe:
// 
// Gegeben sei folgendes Objekt:
//
const fruits = [
    { name: 'apple', color: 'green'},
    { name: 'mango', color: 'yellow'},
    { name: 'apple', color: 'red'}
];

// 1. Füge dem Array eine Frucht hinzu und
//    konvertiere es nach JSON.

fruits.push({
    name: 'banane',
    color: 'yellow'
});
let fruitsObjJSON = JSON.stringify(fruits);

// 2. Konvertiere es wieder zurück in ein Objekt.
let fruitsObj = JSON.parse(fruitsObjJSON);
