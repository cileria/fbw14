var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphabetLaenge = alphabet.length; // 26
console.log(alphabetLaenge);

var str = "Please locate where 'locate' occurs";
var pos = str.indexOf("locate"); //7
console.log(pos);

var lastPos = str.lastIndexOf("locate"); //21
console.log(lastPos);

// wo interessiert es uns genau? 
var exactPos = str.indexOf("locate", 15);
console.log(exactPos); //21

// Michas Idee
var michasPos = str.indexOf("locate", pos+1);
console.log(michasPos); //21

// Search 
var search = str.search("locate");
console.log(search);

// search und indexOf machen das gleiche!!! 

var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13); 
console.log(res); // Banana
console.log(str); // bleibt wie er ist 

var negativeRes = str.slice(-12, -6); // rückwärts 
console.log(negativeRes); // Banana, liest von hinten! 

var nurEineZahl = str.slice(7);
console.log(nurEineZahl); // Banana, Kiwi

var negativeRes2 = str.slice(-1); // rückwärts 
console.log(negativeRes2); // i

// Substring
var substring = str.substr(7, 6);
console.log(substring); // Banane

//Position darf negativ sein, aber
// logischerweise nicht die Länge!
var negativeSubstring = str.substr(-7, 6);
console.log(negativeSubstring); // a, Kiw 

// Gemeinsamkeit von slice und substr:
// Keine von beiden ändert den String an sich! 

// Unterschied zwischen slice und substr? 
// 2. Parameter bei substr ist Länge des Strings
// 2. Parameter bei slice ist 2. Position


// String Ersetzung (Replacement)

var neu = "Please visit W3Schools";
console.log(neu);
var n = neu.replace("W3Schools", "Mozilla");
console.log(n);

// ALLES GROSS SCHREIBEN

var text1 = "Hello World";
console.log(text1);
var text2 = text1.toUpperCase();
console.log(text2);

// alles klein schreiben

console.log(text1);
var text3 = text1.toLowerCase();
console.log(text3);

// Texte zusammenfügen
var a = "Hello ";
var b = "World";
var textA = "Hello" + " " + "World";
console.log(textA);

var textB = "Hello".concat(" ", "World");
console.log(textB);

var textC = a + b; 
console.log(textC);

var textD = a.concat(b);
console.log(textD);

var textE = `${a} ${b}`;
console.log(textE);

// Einzelne Buchstaben ausgeben

var char = a.charAt(0);
console.log(char); // H

// Splitting von Strings z.B. Kommas, Leerzeichen, Pipes

var kleineBuchstaben = "a,b,c,d,e";
console.log(kleineBuchstaben);
var ausgabe = kleineBuchstaben.split(",");
console.log(ausgabe);

// Limit 

var ausgabe2 = kleineBuchstaben.split(",", 3);
console.log(ausgabe2);

// Jedes einzelne Zeichen abspalten ohne Trenner!!!

var txt = "hello";
var last = txt.split("");
console.log(last);