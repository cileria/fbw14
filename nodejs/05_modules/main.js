const greet1 = require('./greet1.js'); // .js kann man weglassen

const vars = require('./variables.js');

// greet1 ist eine referenz
// auf eine funktion

console.log('Hallo World');
greet1();

console.log(vars.str1);
console.log(vars.str2);
console.log(vars.str3);

const greet2 = require('./greet2.js');

greet2.greet();

const foo = require('./greet3.js');

foo.blabla();

// Aufgabe: importiere die
// Klasse Greetr hier rein und
// führe die Methode greet aus.

const Greet4 = require('./greet4');
const greetz = new Greet4();
greetz.greet();

