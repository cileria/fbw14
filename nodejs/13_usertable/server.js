const express = require('express');
const app = express();
const fs = require('fs');
const randomstring = require('randomstring');

// alle dateien, die im public drin sind,
// können von außen über den dateinamen geladen werden
// / -> lädt automatisch index.html
// /main.js -> lädt die datei main.js
// /style.css -> lädt die datei style.css
app.use(express.json());
app.use('/', express.static('public'));

app.get('/users', (req, res) => {
    fs.readFile('./users.json', 'utf-8',
    // wenn das laden der datei fertig ist,
    // wird die folgende callback-funktion aus-
    // geführt
    (error, data) => {
        if(error) return res.send({ error: error });
        
        // nur die zusammengefassten Daten herausgeben
        const usersAll = JSON.parse(data);
        const usersSummary = [];

        // es wird etwas gesucht -> nur die matches zurückgeben
        if(req.query.q) {
            const q = (req.query.q).toLowerCase();
            for(user of usersAll) {
                if( 
                    (new String(user.name).toLowerCase().includes(q))
                    ||
                    (new String(user.email).toLowerCase().includes(q))
                    ||                  
                    (new String(user.description).toLowerCase().includes(q))
                ) {
                    usersSummary.push({
                        id: user.id,
                        name: user.name,
                        email: user.email
                    });                    
                }   
            }
        }
        // es wird nichts gesucht -> alle nutzer zurückgeben
        else {
            for(user of usersAll) {
                usersSummary.push({
                    id: user.id,
                    name: user.name,
                    email: user.email
                });
            }
        }

        // usersSummary hat entweder alle nutzer oder nur die gematchten nutzer
        return res.send(usersSummary);
    });
});

app.get('/userdetail/:id', (req, res) => {
    fs.readFile('./users.json', 'utf-8',
    (error, data) => {
        if(error) return res.send({ error: error });

        const usersAll = JSON.parse( data );
        const id = req.params.id; // id auslesen aus dem request

        for(user of usersAll) {
            // falls ein nutzer mit der id == id existiert,
            // gib diesen zurück!
            if(user.id == id) {
                // wir returnieren hier schon, weil wir unseren
                // nutzer haben
                return res.send(user);
            }
        }

        // falls id nicht gefunden wurde, landen wir hier
        return res.send({ error: 'user with that id not found' });
    });    
});
// demonstration: langes laden synchron 
// effekt: blockiert den server, nutzer 2 
// muss auf nutzer 1 warten
app.get('/longload_synchron', (req, res) => {
    let stop = new Date().getTime();
    while(new Date().getTime() < stop + 10000) {
        ;
    }

    return res.send('daten geladen');
});
// demonstration: langes laden asynchron 
// effekt: blockiert den server NICHT, nutzer 2 
// muss NICHT auf nutzer 1 warten
app.get('/longload_asynchron', (req, res) => {
    setTimeout(
        () => { res.send('daten geladen') },
        10000
    )
});

app.get('/users_delay', (req, res) => {
    setTimeout(
        () => {
            fs.readFile('./users.json', 'utf-8',
            (error, data) => {
                if(error) return res.send({ error: error });
                
                return res.send(data);
            });            
        },
        10000
    );
});
// app.get('/', (req, res) => {
//     return res.send('Hallo World');
// });

app.post('/users', (req, res) => {
    if(!(req.body.name && req.body.email && req.body.description && req.body.profilePic)) {
        return res.send({ error: 'name, email, description and profilePic required' });
    }

    // alle variablen da, weiter gehts ...
    const newUserId = randomstring.generate(10);
    // __dirname = aktueller pfad
    fs.readFile(__dirname + '/users.json', 'utf-8', 
    (err, data) => {
        if(err) return res.send({ error: 'file couldnt be read' });

        // users.json konvertieren nach JS-objekt
        let users = null;
        try {
            users = JSON.parse(data);
        }
        catch(e) {
            return res.send({ error: e });
        }

        // neuen nutzer in das array reintun
        users.push({
            id: newUserId,
            name: req.body.name,
            email: req.body.email,
            description: req.body.description,
            profilePic: req.body.profilePic
        });

        let usersJSON = null;
        try {
            usersJSON = JSON.stringify(users);
        }
        catch(e) {
            return res.send({ error: e });
        }

        fs.writeFile(__dirname + '/users.json', usersJSON, () => {});

        return res.send({ 
            error: 0, newUserId: newUserId
        });
    });

});

console.log('Hallo World from Backend.');
app.listen(3000);

// Aufgabe 1:
//
// Erweitere die users.json und erstelle für
// jeden User zwei weitere Felder "description"
// und "profilePic". 
//
// 1) Für "description": schreibe 2 lustige Sätze
//    über diesen User.
// 2) Für profilePic: Lade ein Profilbild von irgendeinem 
//    Menschen aus dem Internet und speichere es in deinem 
//    Public-Ordner. Gib profilePic den Namen der Datei. 

// Aufgabe 2:
//
// 1) In deinem Backend, erstelle eine Ressource 
//    /userdetail/:id, die einen Parameter id erwartet.
// 2) /userdetail soll den Nutzer aus users.json laden, mit
//    der Id = id und ALLE Information zu diesem Nutzer 
//    als JSON zurückgeben. Falls die Id nicht gefunden 
//    wurde, dann gib folgendes JSON zurück 
//    { error: 'user with that id not found' }