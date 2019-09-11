// Deklaration einer Funktion halloPlaneten
function halloPlaneten() {
    console.log(`Hallo Welt`);
    console.log(`Hallo Sonne`);
    console.log(`Hallo Mond`);
    console.log(`Hallo Jupiter`);
    console.log(`Hallo Saturn`);
}

// Aufruf (call, execution) einer Funktion
halloPlaneten();
halloPlaneten();
halloPlaneten();

// Aufgabe:
//
// Schreibe eine Funktion die das Ergebnis von 1+1 auf der Console ausgibt.

function ergebnis1() {
    console.log(1+1);
}

function ergebnis2() {
    var summe = 1+1;
    console.log(summe);
}

ergebnis1();
ergebnis2();

// Aufgabe:
//
// Schreibe eine Funktion intro die einen kleinen Text über Euch auf der Console
// ausgibt.

function intro() {
    console.log(`
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, explicabo hic maxime ducimus fugiat nulla illum odit atque nisi nihil iure veritatis! Soluta, doloremque laboriosam! Eius voluptates ad iusto eligendi.
    `);
}

intro();


// 2 parametern
function summe(a, b) {
    var c = a + b;
    console.log(`die summe von a und b ist ${c}`);
}
summe(2, 9);

// 1 parameter
function sagMeinenNamen(name) {
    console.log(`Dein Name ist ${name}`);
}

sagMeinenNamen(`Jan`);

// Aufgabe: 
// 
// Schreibe eine Funktion wieIstDasWetter, die einen Parameter
// wetter entgegennimmt. Wenn wetter dem String 'regen' entspricht,
// dann soll wieIstDasWetter auf der Konsole 'es regnet' ausgeben.
// Entsprechend den Parameterwerten 'sonne' und 'schnee' sollen
// andere passende Sätze auf der Konsole ausgegeben werden.

function wieIstDasWetter(wetter) {
    if(wetter === 'regen') {
        console.log('es regnet');
    }
    else if(wetter === 'sonne') {
        console.log('es scheint die sonne');
    }
    else if(wetter === 'schnee') {
        console.log('johnny kokst');
    }
    else {
        console.log('unbekanntes wetter');
    }
}

wieIstDasWetter('regen');
wieIstDasWetter('sonne');
wieIstDasWetter('schnee');

function wieIstDasWetterSwitch(wetter) {
    switch(wetter) {
        case 'regen':
            console.log('es regnet');
        break;
        case 'sonne':
            console.log('es scheint die sonne');
        break;
        case 'schnee':
            console.log('es schneit');
        break;
        default:
            console.log('unbekanntes wetter');
    }
}

wieIstDasWetterSwitch('regen');

// funktionen mit rückgabewerten
var hw = 'hallo welt';
console.log(hw);

function gebeHalloWeltZurueck() {
    return 'hallo welt zurückgegeben durch eine funktion';
}

var hwf = gebeHalloWeltZurueck();
console.log(hwf);

function plusEins(x) {
    return x + 1;
}

var y = plusEins(10);
console.log(y);

// Aufgabe
//
// Schreibe eine Funktion avg die den Durchschnitt von zwei
// Parametern a und b berechnet und zurückgibt.
// Rufe avg mit 15 und 5 auf und schreibe den Wert in die Konsole.

function avg(a, b) {
    return (a+b)/2;
}

var f = avg(15, 5);
console.log(f);

// Aufgabe
// 
// Schreibe eine Funktion gibIntro die einen String zurückgibt,
// der Euch beschreibt. gibIntro erwartet 5 Parameter:
// vorname, nachname, wohnort, lieblingshobby und lieblingsurlaubsziel.
// Verwende evtl. Backticks anstatt Gänsefüsschen. 
// Gib den Text in der Konsole aus nach dem Zurückgeben durch die Funktion!

function gibIntro(vorname, nachname, wohnort, hobby, urlaubsziel) {
    return `Hallo, ich bin ${vorname} ${nachname}. Ich wohne in ${wohnort}. Mein Lieblingshobby ist ${hobby} und mein Lieblingsurlaub verbringe ich ${urlaubsziel}`;
}

var gi = gibIntro('Jan', 'Schulz', 'Berlin', 'Sport', 'Mallorca');
console.log(gi);

function schreibeIntro() {
    console.log(gibIntro('Jan', 'Schulz', 'Berlin', 'Sport', 'Mallorca'));
}

schreibeIntro();

// hoisting - Funktionen können vor ihrer Definition ausgeführt werden

dummyFunction();

function dummyFunction() {
    console.log('Dummy Function');
}

var dv = dummyValue();
console.log(`dummyValue = ${dv}`);

// function statement - werden später ausgewertet
function dummyValue() {
    return 'Dummy Value';
}

// console.log(dummyValueExpression()); -- hoisting funktioniert nicht

// function expression - werden sofort ausgewertet
var dummyValueExpression = function() {
    return 'Dummy Value Expression';
}

// Aufgabe:
//
// Schreibe eine Funktion gehtInRente die als Parameter einen
// Namen und ein Geburtsdatum hat. Die Funktionen soll auf die Konsole
// das aktuelle Alter ausgeben. Gegeben sei, dass in Deutschland alle
// mit 67 in Rente. Die Funktion soll zurückggeben (return), in wievielen Jahren
// die Person in Rente geht.

function gehtInRente(name, geburtsdatum) {
    var alter = 2019 - geburtsdatum;
    console.log(alter);

    if(alter < 67) {
        console.log(`${name} geht in ${67 - alter} Jahren in Rente`);
        return 67 - alter;
    }
    else {
        return 0;
    }
}

// Nikolaus-Funktion - zum Debuggen
function dasHausVomNikolaus() {
    console.log('das');
    console.log('ist');
    console.log('das');
    console.log('haus');
    console.log('vom');
    console.log('ni');
    console.log('ko');
    console.log('laus');
}

dasHausVomNikolaus();