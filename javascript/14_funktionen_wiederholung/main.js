// Schreibe eine Funktion, 
// die zwei Werte kennt (a=10 und b=20)
// diese addiert auf der Console ausgibt
// Benamte Funktion

(function () { // Anonyme Funktion
    let a = 10;
    let b = 20;
    console.log(a + b);
})(); // Sofortige Ausführung möglich 

function summe(a, b) {
    //let a = 10;
    //let b = 20;
    return (a + b);
}

var summe1 = summe(45, 34); // Spätere Ausführung nur mit Namen!

// Bitte die benamte umbauen mit Return :) 
// Output soll gespeichert und ausgegeben werden

console.log(summe1);

// Bitte die benamte Funktion umbauen mit Input-Attributen
// Parameter = Attribute
// Natürlich auch beim Aufruf dann den Input 10, 20 reingeben!


// Return type function
// Schreibe eine Funktion, die ein einzelnes Argument erwartet und seinen TYP zurückgibt
// Input: Alles, Output: Datentyp von diesem Parameter 
// Speichere das Ergebnis in einer Variable und schreibe es auf die console.
function returnType(input) {
    return typeof input;
}
// Testfälle 
let output = returnType('Hallo');
//oder 123, false, undefined, null, [a,b,c], function (){}, usw.
console.log(output);


// Bitte schreibt eine Funktion die einen Test auswertet
// Assign Grade
// Diese akzeptiert Zahlen von 1-100 als Ergebnis des Tests.
// Wenn das Testergebnis kleiner 50 ist, muss ausgespuckt werden "Nicht bestanden! Bitte noch einmal!"
// Wenn das Testergenis zwischen 50-60 ist, dann bekommt er eine Note 4
// Wenn das Testergebnis zwischen 61-80 dann bekommt er eine Note 3
// Wenn das Testergnis zwischen 81-90 ist, dann bekommt er eine Note 2
// Wenn das Testergebnis zwischen 91-98 ist, dann bekommt er eine Note 1
// Wenn das Testergebnis 99 ist, schreibe "Fast perfekt"
// Wenn das Testergebins 100 ist, "Du hast morgen frei!!!"
// Teste mit verschiedenen Werten, um deine Funktion zu checken!
// Tipp: Einfacher mit if else, geht auch mit switch case :) 

function assignGrade(x) {
    switch (true) {
        case (x < 1 || x > 100 || typeof x != 'number'): {
            return 'Keine korrekte Punktzahl!';
        }
        case (x < 50): {
            return 'Nicht bestanden!';
        }
        case (x < 61): {
            return 'Note 4';
        }
        case (x < 80): {
            return 'Note 3';
        }
        case (x < 90): {
            return 'Note 2';
        }
        case (x < 99): {
            return 'Note 1';
        }
        case (x === 99): {
            return 'Fast perfekt';
        }
    }
    return "Du hast morgen frei";
}
let test1 = assignGrade(100);
console.log(test1);

// Schreibe eine Funktion, die das Geld berechnet bis zu deiner Pension
// Input: 
// 1) das Alter der Person // z.B. 40 Jahre
// 2) das Rentenalter // z.B. 60 Jahre
// 3) Das monatliche Einkommen, z.B. 1000 Euro
// 4) Die Prozent, wieviel er davon anspart pro Monat, 10% 
// Falls die Person schon in Rente ist, sollte ausgegeben werden: "Erinnere dich mal an früher!"
// Ansonsten bitte berechnet folgenden Output: 
// 1) wieviele Arbeitsjahre verbleiben
// 2) wieviel er monatlich anspart in Euro und
// 3) wieviel er am Ende bei Eintritt ins Rentenalter angespart hat (auf dem Konto)
// Beispiel: Eine 40 jährige Frau bekommt 2000 Euro pro Monat netto
// Sie spart jeden Monat 5% 
// Beim Rentenalter von 65 hat sie am Ende 30.000 Euro angespart
function pensionsBerechnung(age, rentenalter, monthlyIncome, prozent) {
    if (age >= rentenalter) {
        return "Erinnere dich mal an früher!";
    } else {
        return `Es verbleiben noch ${rentenalter-age} Arbeitsjahre, monatlich sparst du ` +
            `${monthlyIncome*prozent} Euro und im Alter von ${rentenalter} hast du ` +
            `${monthlyIncome*prozent*12*(rentenalter-age)} Euro angespart`;
    }
}
console.log(pensionsBerechnung(34, 67, 3000, 0.01)); // 34 Jahre, 67 Rente, 3000 Euro, 1 Prozent 

let a = 20;
a = 23;
// const a = 23; // wertzuweisung nicht mehr möglich! 
const DAYS_OF_A_YEAR = 365;
const MINUTES_OF_AN_HOUR = 60;
const myPI = 3.14;
console.log(Math.PI); // Pi-Zahl
console.log(Math.E); // Eulersche Zahl 


// Schreibt eine Funktion, die die Quadratzahl jeder Zahl zurückgibt
// Sie akzeptiert jede Zahl und gibt die Quadratzahl dieser Zahl zurück.
// Vergiss nicht, zu prüfen, ob du wirklich eine Zahl bekommen hast
// Falls nicht, gib eine passende Antwort auf der Konsole aus
// und teile dem Benutzer das Problem mit
// Und verhindere dass weiterer Code ausgeführt wird. 
// Beispiel: Input 3 Output 9 

function quadratZahl(zahl) {
    if (typeof zahl !== 'number') {
        return('Bitte eine Zahl eingeben!');
    } else {
        return zahl*zahl;
    }
}
console.log(quadratZahl(3));

// Schreibe eine Faktorfunktion
// Sie akzeptiert eine Zahl als Parameter
// Faktorzahl ist das Produkt aller Zahlen von 1 bis zur Zahl. 
// z.B. Faktor von 5 = 1*2*3*4*5 = 120
// Faktor von 4 = 1*2*3*4=24 
// Tipp: For-Schleife 

function faktorZahl(zahl) {
    if (typeof zahl !== 'number') {
        return('Bitte eine Zahl eingeben!');
    } else {
        let faktor = 1;

        for (let j = 1; j <= zahl; j++) {
            faktor *= j;
        }
        return faktor;
    }
}
console.log(faktorZahl(120));