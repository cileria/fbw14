const array = [
    1, 2, 3,
    4, 5, 6,
    7, 8, 9
];

// Aufgabe:
//
// Erstelle ein Array doubleArray das die gleiche Länge hat 
// wie array und für jedes Element von array den doppelten Betrag
// an der gleichen Position im Array hat.
//
// doubleArray = [2, 4, 6, ...]

const doubleArray = [];
for(n of array) {
    doubleArray.push(2 * n);
}

console.log(doubleArray);

// map

// const doubleArray2 = array.map( (n) => { return 2*n } );
const doubleArray2 = array.map( (n) => 2*n );
console.log( doubleArray2 );

// Aufgabe:
//
// Erstelle ein Array evenArray, welches nur aus den geraden Zahlen
// von array besteht.

const evenArray = [];
for(n of array) {
    if(!(n % 2)) evenArray.push(n);
}

const evenArray2 = array.filter( n => !(n % 2) );
console.log(evenArray2);

const users = [
    { money: 150, name: 'paul', country: 'germany', born: 1995},
    { money: -50, name: 'sarah', country: 'uk', born: 1990},
    { money: 20, name: 'bob', country: 'spain', born: 1988},
    { money: 550, name: 'hans', country: 'germany', born: 1982},
    { money: 5, name: 'julia', country: 'germany', born: 1972},
    { money: 1040, name: 'carl', country: 'denmark', born: 1999},
    { money: -500, name: 'peter', country: 'germany', born: 1991},
    { money: 0, name: 'julia', country: 'ireland', born: 1980}
];

// 1. Erstelle ein Array uppercaseUsers welches identisch ist zu dem
//    users Array, außer das alle Namen und Länder in uppercase sind.

const uppercaseUsers = users.map((n) => {
    console.log(n);
    return {
        ...n,
        name: n.name.toUpperCase(),
        country: n.country.toUpperCase()
    }
});

// 2. Erstelle ein Array germans welches aus den deutschen Nutzern besteht
//    die mehr als 10€ haben.

const germans = users.filter((u) => (u.money > 10 && u.country === 'germany'));

// const germans = users.filter((u) => {
//     if(u.money > 10 && u.country === 'germany') {
//         return true;
//     }

//     return false;
// });

