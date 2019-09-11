// Person ECMA-Script 5
function Person_ES5(name, age) {
    this.name = name;
    this.age = age;
}

Person_ES5.prototype.aging = function() {
    this.age++;
}
let max = new Person_ES5('max', 30);

// Vererbung ECMA-Script 5
function Athlete_ES5(name, age, sport) {
    Person_ES5.call(this, name, age);
    this.sport = sport;
}

Athlete_ES5.prototype.run = function() {}
let boris = new Athlete_ES5('boris', 50, 'tennis');

// Person ECMA-Script 6
class Person_ES6 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    aging() {
        this.age++;
    }
}

let sarah = new Person_ES6('sarah', 32);

class Athlete_ES6 extends Person_ES6 {
    constructor(name, age, sport) {
        super(name, age); // ruft parent konstruktor auf
        this.sport = sport;
    }

    run() {}
}
let jordan = new Athlete_ES6('jordan', 50, 'basketball');