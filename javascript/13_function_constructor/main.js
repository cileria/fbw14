// let john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

// Konstruktor für eine Person
let Person = function (name, yearOfBirth, job) {
    // this referenziert aufs leere Objekt!!
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.foo = null;
};

// zweiter Konstruktor
let Animal = function (race) {
    this.race = race;
};
// erste Instanz von Animal Konstruktor
let flipper = new Animal('Delfin');

// NEW legt eine neue Instanz von Person an
let john = new Person('John', 1990, 'teacher');

// Bitte legt zwei Personen an: Jane & Mark
// und denkt euch deren Geburtsjahr und Beruf aus 
// und lasst euch deren Alter ausgeben
let jane = new Person('Jane', 1980, 'nurse');
let mark = new Person('Mark', 1998, 'creator');

// Prototyping
Person.prototype.calculateAge = function () {
    console.log(2019 - this.yearOfBirth);
}

// Standardwerte
Person.prototype.lastName = 'Smith';
john.calculateAge();
mark.calculateAge();
jane.calculateAge();

console.log(john);

console.log(john.__proto__ === Person.prototype); // Alt
console.log(Object.getPrototypeOf(john) === Person.prototype); // Neu
console.log(john.hasOwnProperty('job'));
console.log(john.hasOwnProperty('lastName'));
console.log(john instanceof Person);

let x = [2, 4, 6];
console.log(x.length);
console.log(Object.getPrototypeOf(x));

// x.pop()
// x.push()

console.log(x.push);
console.log(x.pop);

let personProto = {
    calculateAge: function () {
        console.log(2019 - this.yearOfBirth);
    }
};

let john2 = Object.create(personProto);
john2.yearOfBirth = 1990;
john2.job = 'teacher';

console.log(john2);

// primitive daten 
let a = 'fischstaebchen'; // String
let b = true; // Boolean
let c = 25; // Numbers
let d = null; // NULL 
let e = a * null; // NOT A NUMBER 
let f; // UNDEFINED
console.log(e);

let z = c;
c = 250;
console.log(c);
console.log(z);

let object1 = {
    name: 'John',
    age: 26
};

let object2 = object1; // Call by Reference 
object1.age = 30; // Wert wird geändert

console.log(object1.age);
console.log(object2.age);

// Wir haben kein neues Objekt kreiert
// sondern eine Referenz, die auf das alte Objekt zeigt
// wie Links im Internet, Website wird nicht kopiert 

let age = 32;
let obj = {
    name: 'Martina',
    city: 'Berlin'
};

function change(a, b) {
    a = 30;
    b.city = 'New York';
    return a;
};

age = change(age, obj);

console.log(age);
console.log(obj);

// Übergabe von Funktionen als Attribute
let years = [1998, 1965, 1937, 2005, 1998, 1985, 1991];

function arrayCalc(arr, fn) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        /* newArr.push(calculateAge(1998){
            return 2019-1998=21;
        })*/
        /* newArr.push(isFullAge(21)){
            return (21 >= 18)=true
        }        */
        newArr.push(fn(arr[i])); // einzelne Jahre
        /* newArr.push(21); */
        // newArr.push(true)
    }
    return newArr;
}

// Übergabefunktion
function calculateAge(year) {
    return 2019 - year;
}

// Funktion wie ein einfacher Datentyp übergeben
let ages = arrayCalc(years, calculateAge);
console.log(ages);

// Schreibe eine Funktion, die überprüft, ob jemand volljährig ist, 
// Übergebe diese Funktion an arrayCalc und gib das Ergebnis aus! 
// Volljährig >= 18 Jahre alt

function isfullAge(age) {
    return (age >= 18);
    /*if (age >= 18) {
        return true;
    } else {
        return false;
    }*/
}

let fullAges = arrayCalc(ages, isfullAge);
console.log(fullAges);

function maxHeartRate(age) {
    if (age >= 18 && age < 81) {
        // return Math.round(206.9- (0.67 * 21))
        return Math.round(206.9 - (0.67 * age));
    } else {
        return -1;
    }
}
// Benutze diese Funktion mit arrayCalc, und schau was rauskommt!
// Erkläre die Ausgabe

let pulse = arrayCalc(ages, maxHeartRate);
console.log(pulse);

console.log(maxHeartRate(80));
console.log(maxHeartRate(18));

// Funktionen die Funktionen zurückgeben
function interviewQuestion(job) {
    if (job === 'designer') {
        // return anonyme funktion
        return function (name) {
            console.log(name + ', can you ' +
                'please explain what UX design is? ');
        };
    } else if (job === 'teacher') {
        return function (name) {
            console.log('What subject do you ' +
                'teach, ' + name + '?');
        };
    } else {
        return function (name) {
            console.log('Hello ' + name +
                ', what do you do?');
        };
    }
};
let frage = interviewQuestion('teacher');
frage('Paul');
let frage2 = interviewQuestion('designer');
frage2('Michelle');
// andere Möglichkeit
interviewQuestion('tennislehrer')('Jürgen');

// IIFE Immediately Invoked Function Expression
// Sofort ausgeführter Funktionsausdruck

function game() {
    let score = Math.random() * 10;
    console.log(score >= 5);
}

game(); // benannte Funktion aufrufen

(function () {
    let score = Math.random() * 10;
    console.log(score >= 5)
})(); // anonyme Funktion aufrufen 

(function (goodLuck) {
    let score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

// Closures 

function retirement(retirementAge) {
    let k = ' Jahre bis zur Rente';

    return function (year) {
        let alter = 2019 - year;
        console.log(retirementAge - alter + k);
    }
}

let retirementUS = retirement(66);
retirementUS(1990);
// Kurzschreibweise für die beiden oberen zeilen
retirement(66)(1990);

let retirementGermany = retirement(67);
let retirementIceland = retirement(68);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);

console.log('null'+'null');