const express = require('express');
const app = express();
const fs = require('fs');

// alle dateien, die im public drin sind,
// können von außen über den dateinamen geladen werden
// / -> lädt automatisch index.html
// /main.js -> lädt die datei main.js
// /style.css -> lädt die datei style.css
app.use('/', express.static('public'));

app.get('/users', (req, res) => {
    fs.readFile('./users.json', 'utf-8',
    // wenn das laden der datei fertig ist,
    // wird die folgende callback-funktion aus-
    // geführt
    (error, data) => {
        if(error) return res.send({ error: error });
        
        return res.send(data);
    });
});


app.get('/users_synchron', (req, res) => {
    let stop = new Date().getTime();
    while(new Date().getTime() < stop + 10000) {
        ;
    }

    return res.send('daten geladen');
});

app.get('/users_asynchron', (req, res) => {
    setTimeout(
        () => { res.send('daten geladen') },
        10000
    )
});

// app.get('/', (req, res) => {
//     return res.send('Hallo World');
// });

console.log('Hallo World from Backend.');
app.listen(3000);