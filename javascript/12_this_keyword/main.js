// this keyword innerhalb einer Funktion
function calculateAge(year) {
    console.log(2019 - year);
    // this verweist bei normalen Aufruf 
    // einer Funktion
    // immer auf den globalen Execution Context
    // bzw. das Window-Object
    console.log(this);
}

calculateAge(1985);

// this keyword innerhalb einer methode
let john = {
    name: 'john',
    yearOfBirth: 1990,
    calculateAge: function() {
        // innerhalb einer Methode verweist
        // das this-Keyword auf das Object
        console.log(this);

        // kann übrigens nicht von außen
        // aufgerufen werden
        innerFunction();
        
        function innerFunction() {
            console.log('innerFunction this');
            // innerhalb einer Funktion, auch wenn
            // sie Unterfunktion ist einer Methode,
            // verweist das this-Keyword nach wie
            // vor auf den globalen Execution Context
            console.log(this);
        }
    }
}

john.calculateAge();

let mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();

// Aufgabe:
//
// Erstelle ein Objekt zu einem Feuerwehrauto.
// Denke Dir 4 passende Variablen aus und 
// eine zusätzliche Variable namens Farbe.
// Erstelle eine Methode namens "getFarbe"
// die die aktuelle Farbe ausgibt.
//
// Erstelle ein zweites Objekt zu einem Sportwagen.
// Überlege Dir eine Farbe und kopiere die 
// Methode getFarbe des Feuerwehrautos zum
// Sportwagen und führe diese aus.

let feuerwehrauto = {
    name: 'einsatzwagen',
    baujahr: 1985,
    plaetze: 7,
    geschwindigkeit: '200km/h',
    farbe: 'rot',
    getFarbe: function() {
        console.log(this.farbe);
    }
};

let sportwagen = {
    name: 'ferrari',
    gewicht: '60tonnen',
    geschwindigkeit: '300kmh',
    farbe: 'gelb'
};

sportwagen.getFarbe = feuerwehrauto.getFarbe;
sportwagen.getFarbe();