
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

let karsten = new Person('karsten', 30, 'taxifahrer');
let kira = new Person('kira', 28, 'studentin');

// sportart ist z.b. tennis oder fussball
function Sportler(name, age, sportart) {
    Person.call(this, name, age, 'sportprofi'); // name, age, job
    this.sportart = sportart;
}

let boris = new Sportler('boris', 55, 'tennis');
let angelique = new Sportler('angelique', 28, 'tennis');
let ronaldo = new Sportler('ronaldo', 34, 'fussball');

console.log(karsten, kira, boris, angelique);

///////////////////////////////////////////////////////
function Konto(inhaber, anfangssaldo) {
    this.inhaber = inhaber;
    this.anfangssaldo = anfangssaldo;
    this.saldo = anfangssaldo;
} 

Konto.prototype.abheben = function(betrag) {
    this.saldo -= betrag;
}

Konto.prototype.einzahlen = function(betrag) {
    this.saldo += betrag;
}

function Girokonto(inhaber, anfangssaldo, dispo) {
    Konto.call(this, inhaber, anfangssaldo);
    this.dispo = dispo;

    // Girokonto.prototype existiert hier noch nicht...
}

// wir verbinden die Prototyp-Kette von Girokonto mit 
// der Prototyp-Kette von Konto
Girokonto.prototype = Object.create(Konto.prototype);

function Sparkonto(inhaber, anfangssaldo, maximaleAbhebungenProJahr) {
    Konto.call(this, inhaber, anfangssaldo);
    this.maximaleAbhebungenProJahr = maximaleAbhebungenProJahr;
}

// wir verbinden die Prototyp-Kette von Sparkonto mit 
// der Prototyp-Kette von Konto
Sparkonto.prototype = Object.create(Konto.prototype);

let meinGirokonto = new Girokonto('Jan Schulz', 1000, 500);
let meinSparkonto = new Sparkonto('Jan Schulz', 5000, 12);

console.log(meinGirokonto, meinSparkonto);

meinGirokonto.einzahlen(1000);
meinSparkonto.einzahlen(1000);

