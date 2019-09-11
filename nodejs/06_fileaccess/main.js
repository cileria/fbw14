const fs = require('fs');

// datei lesen
const buffer = fs.readFileSync('./blabla.txt', 'utf-8');
console.log(
    buffer
);

// datei schreiben
const newTxt = 'Sehr geehrte Damen und Herren';
fs.writeFileSync('./new_blabla.txt', newTxt);

// Aufgabe:
// 
// 1.) Gehe auf http://bytesizematters.com/
// 2.) Erstelle einen String von 1000 Bytes 
// 3.) 1000 Bytes ist 1 KB.
// 4.) Erstelle einen Algorithmus, der eine Datei von 512 MB erzeugt
//     und erzeuge damit eine Datei dummy.txt 

const createBigFile = (mb) => {
    let fourBytes = 'aaaa';
    fs.writeFileSync('./fourBytes.txt', fourBytes);

    let oneKilobyte = '';
    for(let i=0; i<1000/4; i++) {
        oneKilobyte += fourBytes;
    }

    fs.writeFileSync('./oneKilobyte.txt', oneKilobyte);

    let fivehundredtwelveMB = '';
    for(let i=0; i < mb*1000; i++) {
        fivehundredtwelveMB += oneKilobyte;
    }
    fs.writeFileSync('./fivehundredtwelveMB.txt', fivehundredtwelveMB);
}

// strings an anhängen
const newStr = '\n\nPS: Bitte die Rechnung überweisen.';
fs.appendFileSync('./blabla.txt', newStr);

// dateien löschen
try {
    fs.unlinkSync('./DELETEME');
}
catch(e) {
    console.log('Datei nicht gefunden.');
}

// Aufgabe:
// 
// Gegeben sei folgendes JavaScript-Array:
const users = [
    { id: 1, name: 'John', email: 'john@gmx.net' },
    { id: 2, name: 'Bob', email: 'bob@gmail.com' },
    { id: 3, name: 'Sarah', email: 'sarah@gmx.net' }
];

// 1. Finde einen Weg, dieses Array in einer Datei
//    zu speichern. Nenne die Datei users.json
fs.writeFileSync('./users.json', JSON.stringify(users));

// 2. Speichere dieses Array auch als CSV ab -> users.csv
fs.writeFileSync('./users.csv', `id,name,email`);
for(elem of users) {
    fs.appendFileSync('./users.csv', `\n${elem.id},${elem.name},${elem.email}`);
}