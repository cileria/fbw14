const fs = require('fs');

console.log('Hallo FS');

// asynchrones Öffnen
fs.readFile('./blabla.txt', 'utf-8', (err, data) => {
    console.log(`
        Datei fertig geladen: 
        ${data}
    `);
});
