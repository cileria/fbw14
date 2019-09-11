let currentRuler = "Cersei Lannister";
console.log(currentRuler);

let changeRuler = (ruler, time) => {
    let newRuler = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ruler === "Jon Snow") { // reject(ruler) // Misserfolgsfall
                reject("Uneheliche Kinder dürfen den Thron nicht besteigen");
            }
            //console.log(currentRuler);
            resolve(ruler); // Erfolgsfall
        }, time)
    })
    console.log(newRuler);
    return newRuler; // Promise
}

changeRuler('Danny', 5000)
    .then(data => { // Erfolgsfälle
        console.log(data);
        return changeRuler('Jon Snow', 3000);
    })
    .then(data => {
        console.log(data);
        return changeRuler('Euron Greyjoy', 3000);
    })
    .then(data => {
        console.log(data);
        return changeRuler('Jaimie Lannister', 3000);
    }).then(data => {
        console.log(data);
        return changeRuler('Night King', 3000);
    }).then(data => {
        console.log(data);
    }).catch(error => { // Fehlerfall
        console.warn(error); // Ausgabe 
    });

/// BONUS FALLS ES EUCH INTERESSIERT 
/** 
const allRulers = ['Cersei Lannister', 'Danny', 'Jon Snow', 'Euron Greyjoy', 'Jaimie Lannister', 'nightsKing'];
const times = [0, 5000, 3000, 2000, 2000, 1000];
let index = 0;
let currentRuler;

const changeRuler = (rulersName, time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(rulersName);
        }, time)
    })
}

const wrapperRuler = (rulersName, time) => {
    changeRuler(rulersName, time)
        .then(name => {
            currentRuler = name;
            console.log(currentRuler);
            index++;
            if (index === allRulers.length) {
                return false;
            }
            return wrapperRuler(allRulers[index], times[index]);
        })
}

wrapperRuler(allRulers[index], times[index]);*/

