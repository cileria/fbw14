const fs = require('fs');

console.log('Hallo FS');

// synchrones Öffnen
const data = fs.readFileSync('./blabla.txt', 'utf-8');
// hier wird gewartet
console.log(data);