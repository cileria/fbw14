const express = require('express');
const app = express();

// alle dateien, die im public drin sind,
// können von außen über den dateinamen geladen werden
// / -> lädt automatisch index.html
// /main.js -> lädt die datei main.js
// /style.css -> lädt die datei style.css
app.use('/', express.static('public'));
// server soll json-bodys verstehen und uns
// als javascript-objekt im req.body geben
app.use(express.json());

const users = [
    {id: 1, name: 'Jan'},
    {id: 2, name: 'Mohammed'},
    {id: 3, name: 'Almas'},
    {id: 4, name: 'Jerome'},
    {id: 5, name: 'Hans'},
    {id: 6, name: 'Bjoern'}
];

app.get('/users', (req, res) => {
    return res.send( users );
});

// Aufgabenstellung: Erstelle Resource, über die neue Nutzer
// angelegt werden können.

// 1. Möglichkeit mit GET Daten an den Server zu schicken -> URL-Parameter
app.get('/newuser/:username', (req, res) => {
    // den neuen Nutzernamen rauslesen
    const newUsername = req.params.username;
    // hier erstellen wir einen neuen nutzer
    const newUser = {
        id: users.length + 1,
        name: newUsername
    }
    // wir pushen den neuen nutzer in das array
    users.push(newUser);
    return res.send(newUser)
});

// 2. Möglichkeit mit GET Daten an den Server zu schicken -> Query-Strings
app.get('/newuser', (req, res) => {     // neue username soll über req.query.q ausgelesen werden
    const newUsername = req.query.q;
    // hier erstellen wir einen neuen nutzer
    const newUser = {
        id: users.length + 1,
        name: newUsername
    }
    // wir pushen den neuen nutzer in das array
    users.push(newUser);
    return res.send(newUser)    
});

// POST-Methode ist die richtige Art, Daten an den Server zu schicken
app.post('/newuser', (req, res) => {
    const newUsername = req.body.username;
    return res.send(
        {
            ...req.body,
            hallo: 'world'
        });

    // Aufgabe:
    // Füge dem users-Array den neuen Nutzer zu.
});

app.get('/', (req, res) => {
    return res.send('Hallo World');
});

console.log('Hallo World from Backend.');
app.listen(3000);