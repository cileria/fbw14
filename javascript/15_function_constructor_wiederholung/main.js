
function Person(name, age, city) {
    console.log(this);
}

Person('jan', 33, 'berlin'); // normaler funktionsaufruf

// javascript syntax: new
let jan = new Person('jan', 33, 'berlin');

// new: weise der variablen jan alle 
// methoden und variablen des this-keywords 
// des funktionskonstruktors 

function Auto(baujahr, marke, ps) {
    this.baujahr = baujahr;
    this.marke = marke;
    this.ps = ps;
}

let bmw = new Auto(1999, 'bmw', 250);
let audi = new Auto(2005, 'audi', 230);
let mercedes = new Auto(2018, 'mercedes', 220);

// Aufgabe:
//
// Erstelle einen Funktionskonstruktor 'User'
// mit den Variablen username, email und password.
// Erstelle 3 User-Objekte. 

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

let hans = new User('hans', 'hans@gmail.com', '1234');
let hans1 = new User('hans1', 'hans1@gmail.com', '1234');
let hans2 = new User('hans2', 'hans2@gmail.com', '1234');

// wir brauchen funktionskonstruktoren, um
// objekte schablonenartig zu bauen

console.log(hans, hans1, hans2);


// objekt ohne funktionskonstruktor
let max = {
    username: 'max',
    email: 'max@max.com',
    password: 123
};

console.log(
    max
);
    
// methode: funktion im objekt
function Baum(hoehe, farbe, anzahlAeste) {
    this.hoehe = hoehe;
    this.farbe = farbe;
    this.anzahlAeste = anzahlAeste;

    // methode: existiert in allen instantiierten objekten
    this.wachsen = function() { 
        this.hoehe++;
    }

    // wenn diese funktion ohne das new-Keyword aufgerufen wird
    // dann returned sie einfach undefined
    return undefined;
}
    
// instanz: ein Exemplar aus einer Menge gleichartiger Dinge
let eiche1 = new Baum(10, 'weiss', 5);
let eiche2 = new Baum(10, 'weiss', 5);
let eiche3 = new Baum(10, 'weiss', 5);
let birke1 = new Baum(15, 'braun', 10);
let birke2 = new Baum(15, 'braun', 10);

// 5 bauminstanzen = die funktion wachsen existiert 5x im hauptspeicher

birke1.wachsen();
eiche1.wachsen();

console.log(eiche1, birke1);

let birke3 = Baum(15, 'braun', 10); // worauf würde das this-keyword zeigen?
console.log(birke3);
console.log(typeof birke3);
console.log(typeof birke2);

Baum.neuerAst = function() {
    this.anzahlAeste++;
}

// birke2.neuerAst(); // fehler, gibts nicht

Baum.prototype.neuerAst = function() { // neuerAst existiert 1x im Speicher
    this.anzahlAeste++;
}

birke2.neuerAst(); 

// Aufgabe:
// 
// Erstelle einen Funktionskonstruktor Haus und überlege
// Dir 4 Variablen für ein Haus. Dazu, überlege Dir 2 Methoden
// die jedes Haus haben könnte (z.B. lichtAus, ...)
// Erstelle 3 Haeuser!

function Haus(hoehe, breite, licht, fenster) {
    this.hoehe = hoehe;
    this.breite = breite;
    this.licht = licht;
    this.fenster = fenster;
}

Haus.prototype.lichtAus = function() {
    if(this.licht === true) {
        this.licht = false;
    }
    else {
        this.licht = true;
    }
}

Haus.prototype.fensterZu = function() {
    if(this.fenster === true) {
        this.fenster = false;
    }
    else {
        this.fenster = true;
    }
}

