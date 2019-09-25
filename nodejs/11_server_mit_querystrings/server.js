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
const movies = [
    'The Shawshank Redemption',
    'The Godfather',
    'The Godfather: Part II',
    'The Dark Knight',
    '12 Angry Men',
    'Schindlers List',
    'The Lord of the Rings: The Return of the King',
    'Pulp Fiction',
    'The Good, the Bad and the Ugly',
    'Fight Club'
];
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

app.get('/search', (req, res) => {

    // leeres Array, was mit den Ergebnissen aufgefüllt wird
    const resultMovies = [];

    // prüfen, ob q gegeben ist
    if(!req.query.q) {
        return res.send({ error: 'no q given' });
    }
        
    // den suchparameter q nach lowerCase konvertieren
    const lowerQ = new String(req.query.q).toLowerCase();

    // wir durchsuchen alle movies nach nem include
    for(movie of movies) {
        // wir konvertieren jeden movie nach lower
        const lowerMovie = movie.toLowerCase();
        // wir vergleichen lowerQ mit lowerMovie
        if(lowerMovie.includes(lowerQ)) {
            resultMovies.push(movie);
        }
    }
    
    return res.send(resultMovies);
});

app.listen(3000);