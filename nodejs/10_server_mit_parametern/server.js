const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.send('server mit parametern');
});

// nach /hallo bis zum nächsten / ist alles in
// req.params.name gespeichert
app.get('/hallo/:name', (req, res) => {
    return res.send(`
        Hi ${req.params.name}
    `);
});

const products = [
    { id: 1001, name: 'Geforce GTX 1050 TI', price: 150 },
    { id: 1002, name: 'Geforce GTX 1080 TI', price: 190 },
    { id: 1003, name: 'Geforce GT 730', price: 30 },
    { id: 1004, name: 'Vodoo 1', price: 1 },
    { id: 1005, name: 'HP NVIDIA Quadro GV100', price: 17000 }
];

// Aufgabe:
//
// 1) Erstelle eine neue Route /productdetail, die ein Parameter
//    id erwartet. Auf Basis der id, wird dem Besucher der Webseite
//    alles zum Produkt ausgegeben als String.
// 2) Erstelle eine neue Route /products, die alle Produkte
//    als HTML-Tabelle ausgibt.


app.listen(3000);