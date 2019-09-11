#!/usr/local/bin/node

const fs = require('fs');

console.log( process.argv );
// paremeter 0 und 1 können wir skippen

// falls keine parameter angegeben sind, dann programm beenden
if(process.argv.length === 2) return;

// extrahiere die dateinamen heraus
const filenames = process.argv.splice(2,  process.argv.length);

for(file of filenames) {
    const data = fs.readFileSync(file, 'utf-8');
    console.log(data);
}