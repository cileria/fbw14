var name = 'Peter';
var alter = 30;
var verheiratet = true;

console.log(`datentyp von verheiratet: ${typeof verheiratet}`);

if(verheiratet === true) {
    console.log(`${name} ist verheiratet`);
}
else {
    console.log(`${name} ist nicht verheiratet`);
}

verheiratet = 'true'; // 'true' ist ein string
console.log(`datentyp von verheiratet: ${typeof verheiratet}`);
if(verheiratet === true) {
    console.log(`${name} ist verheiratet`);
}
else { 
    console.log(`${name} ist nicht verheiratet`);
}

// Aufgabe:
//
// a) Schreibe ein Conditional Statement das prüft ob Peter über 30 Jahre
//    alt ist. Falls ja, dann schreibe Peter ist über 30, falls nein, dann
//    schreibe Peter ist unter 30. 
//
// b) Peter ändert seinen Namen in Max. Prüfe ob Peter Max heißt, falls ja,
//    dann schreibe Peter hat seinen Namen geändert. Ansonsten, schreibe 
//    nichts.
if(alter > 30){
    console.log('Peter ist älter als 30 Jahre.')
}
else{
    console.log('Peter ist nicht älter als 30 Jahre.')  
}

name = 'Max';
if(name==='Max'){
    console.log('Peter hat seinen Namen geändert.')
}

// Unterschied zwischen:
// =    : Zuweisungs-Operator
// ==   : Vergleichs-Operator, der prüft, ob der Wert von links und rechts gleich ist.
// ===  : Vergleichs-Operator, der prüft, ob der Wert von links und rechts gleich ist und prüft, ob der Datentyp von links der gleiche ist wie rechts

var x = 5;
if(x = 7) { // wir setzen x = 7 und fragen, ob die Zuweisungs-Operation erfolgreich war
    console.log('x ist 5');
}
console.log(`x = ${x}`);

var y = 10;
if(y == 10) {
    console.log('y ist 10');
}

if(y == '10') { // '10' wird nach number konvertiert und dann mit y verglichen, weil y datentyp number ist
    console.log(`y ist '10'`);
}

if(y === '10') {
    console.log(`y ist '10', also der String`);
}
else {
    console.log(`y ist nicht der String '10'`);
}

if(y === 10) { // erst werden die datentypen geprüft, dann die werte
    console.log(`y ist 10, also die Zahl`);
}

// Vergleichsoperator ein bisschen genauer
if(alter > 30) {
    console.log(`Peter ist älter als 30`); // 31, 32, ... unendlich
}

if(alter >= 30) {
    console.log(`Peter ist älter als 30 oder genau 30`); // 30, 31, 32, ... unendlich
}

if(alter <= 30) {
    console.log(`Peter ist jünger als 30 oder genau 30`); // 30, 29, 28, ... -unendlich
}

// Zusammengesetzte Conditional-Statements an

var a = 25;
if(a >= 15) {
    console.log('a ist größer oder gleich 15');

    if(a <= 40) {
        console.log('a ist kleiner oder gleich 40');
    }
}

a = 249;
if(a >= 15 && a <= 40) {
    console.log('a ist größergleich 15 und kleinergleich 40');
}
else if(a >= 200 && a <= 250) {
    console.log('a ist größergleich 200 und kleinergleich 250');
}

// Aufgabe:
//
// a) Definiere eine neue Variable alterVonKlaus und setze sie auf 
// einen Wert zwischen -10 und 90.
// b) Definiere ein Conditional-Statement das auf Basis von alterVonKlaus
//    ausgibt, in welchem Lebensabschnitt er sich befinden könnte:
//    Unter 0, Klaus ist noch nicht geboren
//    Zwischen 1 und 21, Klaus ist noch nicht erwachsen
//    Zwischen 22 und 65, Klaus ist ein erwachsener Mann
//    Zwischen 66 und 80, Klaus ist ein Opa
//    Über 81, Klaus erlebt seine letzten Tage

var alterVonKlaus = 35;

if(alterVonKlaus < 0) { // -1, -2, ...
    console.log('Klaus ist noch nicht geboren');
} 
else if(alterVonKlaus >= 0 && alterVonKlaus <= 21) { // 0, 1, 2, ..., 21
    console.log('Klaus ist noch nicht erwachsen');
}
else if(alterVonKlaus >= 22 && alterVonKlaus <= 65) {
    console.log('Klaus ist ein erwachsener Mann');
}
else if(alterVonKlaus >= 66 && alterVonKlaus <= 80) {
    console.log('Klaus ist ein Opa');
}
else if(alterVonKlaus > 80) {
    console.log('Klaus erlebt seine letzten Tage.')
}

// oder-Verknüpfungen

var ampelFarbe = 'schwarz';
if(ampelFarbe === 'gruen' || ampelFarbe === 'rot' || ampelFarbe === 'gelb') {
    console.log('Ampel funktioniert.')
}
else {
    console.log('Ampel funktioniert nicht.')
}

// wetter-bedingung
var zustand = 'gesund';
var strafmuendig = 14;
alter = 33;
if((zustand === 'gesund' || zustand === 'krank' || zustand === 'tot') && alter >= strafmuendig) {
    console.log('knast');
}
else {
    console.log('elternknast');
}

// switch conditional statement

var job = 'polizist';

switch(job) {
    case 'lehrer':
        console.log('er unterrichtet studenten');
    break;
    case 'taxifahrer':
        console.log('er fährt ein taxi durch berlin');
    break;
    case 'polizist':
        console.log('er kämpft gegen die kriminalität');
    break;
    default:
        console.log('er macht was anderes');
}