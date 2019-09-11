class Greetr {
    constructor() {
        this.greeting = 'Hallo from greet4.js';
    }

    greet() {
        console.log(this.greeting);
    }
}

// wir exportieren referenz
// auf die klasse Greetr (=funktion)
module.exports = Greetr;