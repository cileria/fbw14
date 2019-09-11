console.log('Hallo Welt');

var hw = 'Hallo Welt aus einer Variable';
console.log(hw);

var name = 'Jan';
console.log(name);

var zwei = 2;
console.log(zwei);

var zweiAlsString = '2';
console.log(zweiAlsString);

var vier = 2+2;
console.log(vier);

vier = zwei + 2;
console.log(vier);

var name = 'Jan';
var job = 'Lehrer';
var alter = 33;

// bei backticks mit ${variablenName}
console.log(`Ich bin ${name}. Ich arbeite als ${job} und
bin ${alter} Jahre alt.`);

// bei gänsefüßen mit string-konkatenierung
console.log('Ich bin ' + name + '. Ich arbeite als ' + job + ' und bin ' + alter + ' Jahre alt');

var jetzt = 2019;
var geburtsJahr = jetzt - alter;
console.log(`Mein Geburtsjahr ist: ${geburtsJahr}`);

var alterMax = 30; // variablen-initialisierung
var alterSteffi = alterMax;

// Aufgabe:
//
// Gib das Alter - 5 Jahre von Max und Steffi auf
// der Console aus. In einem Text wie folgt:
// Max ist x Jahre alt.
// Steffi ist x Jahre alt.

// Lösung 1:
var neuesAlterSteffiMax = alterSteffi - 5;
console.log(`Max ist ${neuesAlterSteffiMax} Jahre alt
Steffi ist ${neuesAlterSteffiMax} Jahre alt`);

// Lösung 2:
console.log(`Max ist ${alterMax-5} Jahre alt
Steffi ist ${alterSteffi-5} Jahre alt`);

// Lösung 3:
console.log('Max ist ' + (alterMax-5) + ' Jahre alt \n'
+ 'Steffi ist ' + (alterSteffi-5) + ' Jahre alt');

var doppeltesAlterMax = alterMax * 2;
console.log(`2faches Alter von Max ist ${doppeltesAlterMax}`);

console.log(`10 - 490 = ${10 - 490}`);
console.log(`2.5 * 7 = ${2.5 * 7}`);
console.log(`(2 + 7) * 10 = ${(2 + 7) * 10}`);

// boolesche Variablen
var heuteRegnetEs = false;
var heuteSchneitEs = false;
var heuteScheintDieSonne = true;

console.log(`Heute regnet es: ${heuteRegnetEs}. Heute schneit es ${heuteSchneitEs}. Heute scheint die Sonne ${heuteScheintDieSonne}`);

// camel-case vs lowdash
var windowSizeWidth = 450; //camel case
var window_size_width = 450; // lowdash

// Aufgabe 2:
//
// Stelle Dir einen Baum vor. Überlege Dir 5 Variablen zu dem Baum.
// (z.b. anzahlAeste, ...). Verwende diese 5 Variablen in einem Text
// den Du über den Baum schreibst. Gib den Text mit console.log auf
// der Console aus.

var anzahlAeste = 28;
var baumHoehe = 5;
var baumBreite = 2;
var blaetter = false;
var name = 'Apfel';

var textZumBaum = `Mein Name ist ${name}baum. Ich bin ${baumHoehe}m hoch und
${baumBreite}m breit. Ich habe ${anzahlAeste} Aeste. Im Winter habe ich Blätter ${blaetter}`;

console.log(textZumBaum);



