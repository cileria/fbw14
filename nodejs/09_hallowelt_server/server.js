// express einbinden
const express = require('express');

// den webserver initialisieren
const app = express();

app.get('/hallo', (request, response) => {
    return response.send('huhu wie gehts?');
});

app.get('/', (request, response) => {
    return response.send('hallo');
});

app.get('/give_me_html', (request, response) => {
    return response.send(`
        <html>
            <head></head>
            <body>
                <h1>Hier, das ist HTML</h1>
            </body>
        </html>
    `);
});

app.get('/jan', (request, response) => {
    return response.send('jans website');
});

app.get('/beachbild', (request, response) => {
    return response.send(`
        <html>
            <head></head>
            <body>
                <img src="https://img1.10bestmedia.com/Images/Photos/352450/GettyImages-913753556_55_660x440.jpg" />
            </body>
        </html>
    `);
});

// Aufgabe:
//
// Erstelle eine weitere Route zu einer Resource
// -> /beachbild
//
// 1) Gib eine simple Website zurück mit einem Head und einem Body.
// 2) Innerhalb des Body, erstelle ein Image.
// 3) Für das src-Attribut, suche ein Beachbild bei Google-Bildersuche,
//    und kopiere dir dafür die Bildadresse.

app.listen(3000);
console.log('hallo welt server auf port 3000');