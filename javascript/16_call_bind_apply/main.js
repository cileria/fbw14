// call & apply

// normale funktion
function halloWelt() {
    console.log('hallo world');
}

// halloWelt(); // ausführung
// wir können es auch so ausführen ... 
// Funktionen sind auch Objekte.
halloWelt.call();


let emily = {
    name: 'Emily',
    age: 35,
    job: 'designer',
    hallo: function() {
        console.log(`
            Hallo, ich bin ${this.name}. Ich bin ${this.age} Jahre alt.
            Ich arbeite als ${this.job}.
        `);
    }
};

emily.hallo(); 
// bei dem normalen methodenaufruf, verweist das this-keyword
// auf das objekt der methode.

emily.hallo.call(); 
// das this-keyword verweist auf den ersten parameter von call()
// = undefined

emily.hallo.call(emily);  
// erster parameter von call: this = emily

let steffen = {
    name: 'Steffen',
    age: 42,
    job: 'unternehmer'
};

// Aufgabe:
//
// Führe die Methode hallo von emily bei steffen aus mit call.

emily.hallo.call(steffen);

function whatIsThis() {
    console.log(this); 
    // this verweist bei normalen aufruf/ausführung auf
    // globalen execution context, bzw. Window object
}

whatIsThis();
whatIsThis.call(steffen); // ändert ausführungscontext auf steffen
// this = steffen

function sayMyNameAndMyHobby(hobby) {
    console.log(`
        Mein Name ist ${this.name} und mein Hobby ist
        ${hobby}
    `);
}

sayMyNameAndMyHobby('Segeln'); // ?
// call kann context wechseln und parameter entgegennehmen
sayMyNameAndMyHobby.call(steffen, 'Segeln');
sayMyNameAndMyHobby.apply(steffen, ['Segeln']); // apply = call mit array als parametern

// Aufgabe:
//
// Erstelle ein Objekt boot mit 2 variablen deiner wahl und einer
// zusätzlichen Variable benzinStand. boot soll eine methode "tanken"
// haben, die den benzinStand um 1 erhöht. Anfangs ist benzinStand gleich 0.
//
// Definiere eine zweites Objekt auto mit ebenfalls 2 variablen deiner
// wahl und einer Variable benzinStand. auto soll sich die Methode
// tanken von boot "ausborgen".

let boot = {
    name: 'ananas',
    gross: 30,
    benzinStand: 0,
    tanken: function() {
        this.benzinStand++;
    }
}

let auto = {
    marke: 'bmw',
    farbe: 'schwarz',
    benzinStand: 0
}

boot.tanken.call(auto);

// bind 
function halloSonne(temperatur) {
    // this: auf Window-Object, globalen Context
    console.log(
        `Hallo, ganz schön warm heute! Es sind ${temperatur} Grad heute!`
    );
}

halloSonne(32); // normaler funktionsaufruf
// bind erstellt eine neue Funktion namens halloSonne35,
// mit der ich halloSonne(35) aufrufe
let halloSonne35 = halloSonne.bind(null, 35);
halloSonne35();

// Aufgabe:
//
// Analysiere das Object john.
// Erstelle ein neues Object sarah das auch einen name, age und job
// hat. 
// Erstelle eine Funktion saraStelltSichKumpelhaftVor, die
// auf Basis der Methode intro von john erstellt wird. 
// Benutze dafür bind. Der neue Context ist sara.

let john = {
    name: 'john',
    age: 30,
    job: 'mechanic',
    intro: function(style) {
        if(style === 'formal') {
            console.log(`
                Sehr geehrte Damen und Herren,
                ich heiße ${this.name} und verweile schon
                ${this.age} Jahre auf der Erde. Ich arbeite als
                ${this.job}. Viele Grüße, Ihr ${this.name}
            `);
        }
        else if(style === 'kumpelhaft') {
            console.log(`
                Na alles klar? Ich bins, der ${this.name} und mittlerweile
                habe ich schon ${this.age} Jahre auf dem Buckeln. Momentan
                schlage ich mich durch als ${this.job}. Na dann bis später,
                Euer ${this.name}
            `);
        }
    }
}

let sarah = {
    name: 'sarah',
    age: 37,
    job: 'verkaeufer'
};

// saraStelltSichKumpelhaftVor = ist eine funktion gespeichert in einer
//                               variable
let saraStelltSichKumpelhaftVor = john.intro.bind(sarah, 'kumpelhaft');
saraStelltSichKumpelhaftVor();

// zusammenfassung:
//
// - funktionen sind auch objekte (mit methoden und variablen)
// - call: methode einer funktion, die die funktion aufrufen
//         mit einem anderen kontext (ändert das this-keyword innerhalb
//         der funktion)
// - apply: das gleiche wie call, nur mit arrays
// - bind: erstellt eine funktion, die eine vorhandene funktion als vorbild
//         hat mit vordefinierten parametern