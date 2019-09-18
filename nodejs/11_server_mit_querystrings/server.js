const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.send(`
        der wert von a = ${req.query.a} und der wert von x = ${req.query.x} und der wert von c = ${req.query.c}
    `);
});

// Aufgabe:
//
// 1) Suche Dir 10 real existierende Film-Titel aus dem Internet.
// 2) Speichere diese Filmtitel in einem Array mit 10 Elementen
// 3) Erstelle eine neue Route /search
// 4) In der Route, werte den Wert von dem Query-Key "q" aus und
//    gib alle Filme aus, die ähnlich wie der Wert von q sind.
//
// Beispiel:
//
// http://localhost:3000/search?q=ellas
// Result: "Good Fellas".
// 
// http://localhost:3000/search?q=oo
// Result: ["Good Fellas", "Loopers", "Goonies"]
//
// Tipp: vor der dem Vergleich, konvertiere den Suchbegriff und
//       alle Elemente im Array nach Lowercase.


app.listen(3000);