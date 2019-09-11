try {
    // array fehlt => es wird ein fehler geworfen 
    for (name of names) {
        console.log(name);
    }
} catch (el) {
    // Fehlerhandling
    console.warn(el);
} finally {
    // Wird immer ausgeführt
    console.log('Sie werden trotzdem weitergeleitet....');
}
// Es geht trotzdem weiter
console.log(10);

// Synchrone Ausführung
let sitsOnTheIronThrone = 'Cersei Lannister';
console.log(sitsOnTheIronThrone);

// Set a new King now. For example Danny
let changeRuler = name => {
    sitsOnTheIronThrone = name;
}

// Danny is the new King
changeRuler('Danny');
console.log(sitsOnTheIronThrone);
// Nights finds ALL!
changeRuler('The nights King');
console.log(sitsOnTheIronThrone);

// Asynchrone Funktion
let changeRulerAsync = name => {
    setTimeout(() => {
        sitsOnTheIronThrone = name;
        console.log(sitsOnTheIronThrone);
    }, 5000);
}
// Martina is the new Queen
changeRulerAsync('Martina');

// Nested Callback Funktion
let changeRulerNestedCallback = name => {
    setTimeout(() => {
        sitsOnTheIronThrone = name;
        console.log(sitsOnTheIronThrone);
        setTimeout(() => {
            sitsOnTheIronThrone = "The night King";
            console.log(sitsOnTheIronThrone);

        }, 2000);
    }, 5000);
}
// Itamar is the new King
changeRulerNestedCallback('Itamar');