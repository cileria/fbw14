// Aufgabe:
// 
// 1. Lade users.csv und
//    konvertiere das CSV-format
//    in Javascript-Objekte/JSON
const fs = require('fs');
let data = fs.readFileSync('./users.csv', 'utf-8');
console.log(data);

data = data.replace(new RegExp('"', 'g'), '');
data = data.replace(new RegExp(' ', 'g'), '');

const lines = data.split('\n');
lines.shift();

const users = [];
for(line of lines) {
    let values = line.split(',');
    // 0 -> id
    // 1 -> name
    // 2 -> email
    // auslesen vom split der line
    const id = parseInt(values[0]);
    const name = values[1];
    const email = values[2];

    // ausgelesene values werden benutzt
    // um ein neues objekt zu bauen
    users.push({
        id: id,
        name: name,
        email: email
    });
}
console.log(users);
// 2. Schreibe eine funktion
//    csv2json welche alle
//    csv-daten (mit beliebiger anzahl 
//    von spalten) in JSON konvertiert
//    PS: Key Interpolation

// str = csv string
const csv2json = (str) => {
    str = str.replace(new RegExp('"', 'g'), '');
    str = str.replace(new RegExp(' ', 'g'), '');
    const csvLines = str.split('\n');
    // id, color, year, space, os 
    const keys = csvLines[0].split(',');
    let obj = {};
    for(let key of keys) {
        obj[key] = '';
    }
    console.log( obj );
    csvLines.shift();
    const cellphones = [];
    for(let line of csvLines) {
        let i=0;
        const cellphone = {};
        const column = line.split(',');
        for(key in obj) {
            cellphone[key] = column[i];
            i++;
        }
        cellphones.push(cellphone);
    }
    console.log(cellphones);
}

const fileData = fs.readFileSync('./cellphones.csv', 'utf-8');
csv2json(fileData);