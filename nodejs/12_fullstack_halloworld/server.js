const express = require('express');
const app = express();

// alle dateien, die im public drin sind,
// können von außen über den dateinamen geladen werden
// / -> lädt automatisch index.html
// /main.js -> lädt die datei main.js
// /style.css -> lädt die datei style.css
app.use('/', express.static('public'));

const users = [
    { id: 1, name: 'Stefan', email: 'stefan@abc.net' },
    { id: 2, name: 'Lara', email: 'lara@gmx.net' },
    { id: 3, name: 'Julia', email: 'julia@gmail.com' },
    { id: 4, name: 'Karsten', email: 'karsten@foo.net' },
    { id: 5, name: 'Peter', email: 'peter@xing.net' },
]

// app.get('/', (req, res) => {
//     return res.send('Hallo World');
// });

console.log('Hallo World from Backend.');
app.listen(3000);