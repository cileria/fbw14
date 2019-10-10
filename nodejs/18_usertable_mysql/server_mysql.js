const express = require('express');
const app = express();
const fs = require('fs');
const fileUpload = require('express-fileupload');
const randomstring = require('randomstring');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'jan',
    password: 'password',
    database: 'usertable'
});

// alle dateien, die im public drin sind,
// können von außen über den dateinamen geladen werden
// / -> lädt automatisch index.html
// /main.js -> lädt die datei main.js
// /style.css -> lädt die datei style.css
app.use(express.json());
app.use(fileUpload());
app.use('/', express.static('public'));


app.get('/users', (req, res) => {    
    // suchen wir? oder wir geben wir einfach alle aus
    let sql = null;
    if(req.query.q) {
        // wir suchen
        sql = `        
            SELECT 
                    *
                FROM
                    users
                WHERE
                    email LIKE ?
                        OR name LIKE ?
                        OR description LIKE ?;
        `;
        connection.query(
            sql, [
                '%'+req.query.q+'%', 
                '%'+req.query.q+'%', 
                '%'+req.query.q+'%' 
            ],
            (err, rows) => {
                if(err) {
                    console.log('Error: ' + err);
                    return res.send({ error: err });
                }
    
                console.log(rows);
                return res.send(rows);
            });
    }
    else {
        // wir geben alle aus
        sql = `        
            SELECT * FROM users
        `;
        connection.query(
            sql,
            (err, rows) => {
                if(err) {
                    console.log('Error: ' + err);
                    return res.send({ error: err });
                }
    
                console.log(rows);
                return res.send(rows);
            });        
    }
});

app.get('/userdetail/:id', (req, res) => {
        // wir geben alle aus
        sql = `        
            SELECT * FROM users where id = ?
        `;
        connection.query(
            sql, [req.params.id],
            (err, rows) => {
                if(err) {
                    console.log('Error: ' + err);
                    return res.send({ error: err });
                }
    
                console.log(rows[0]);
                return res.send(rows[0]);
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

app.post('/users', (req, res) => {
    if(!(req.body.name && req.body.email && req.body.description && req.files.imageUpload)) {
        return res.send({ error: 'name, email, description and imageUpload required' });
    }

    // alle variablen da, weiter gehts ...
    const newFilename = randomstring.generate(10);

    // sampleFile ist referenz auf datei
    let sampleFile = req.files.imageUpload;
  
    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(__dirname + '/public/' + newFilename + '.jpg', 
    function(err) {
      if (err)
        return res.status(500).send({ error: err });

        // query3: daten einfügen
        const query3 = `
            insert into users (
                name, 
                email, 
                description,
                profilePic 
            )
            values (?,?,?,?);
        `;

        connection.query(
            query3, [ 
                req.body.name,
                req.body.email,
                req.body.description,
                newFilename + '.jpg'
            ],
            (err, result) => {
                if(err) {
                    console.log('Error: ' + err);
                    return res.send({ error: err });
                }

                return res.send({ error: 0, newUserId: result.id });
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