const express = require('express');
const session = require('express-session');
const app = express();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'jan',
    password: 'password',
    database: 'authdb'
});

if(!connection) {
    console.log('Verbindung zur DB konnte nicht hergestellt werden - Exit.');
    process.exit(0);
}

// gibt jedem HTTP-packet eine cookie-id in den header
// rein
app.use(session({
    secret: 'mySecretKey',
    resave: true,
    saveUninitialized: true
}));

// Aufgabe: schreibe eine Logout-Funktion!
app.get('/login', (req, res) => {
    const sql = `select * from users where email = ? and password = ?`;
    connection.query(
        sql, [req.query.email, req.query.password],
        (err, rows) => {
            if(err) {
                console.log('Error: ' + err);
                return res.send({ error: 'db error' + err });
            }

            if(rows.length > 0) {
                // session wird erzeugt
                req.session.user = req.query.email;
                req.session.pages = rows[0].pages;
                return res.send({ message: 'login successful' });
            }

            return res.send({ error: 'login not found' });    
        });    
});

// middleware, die vor den requests /content und /privateProfile
// ausgeführt wird
const auth = (req, res, next) => {
    if(!req.session.user) {
        return res.send('Unauthorized');
    }    

    // next leitet den request weiter an die nächste
    // callback-funktion
    next();
}

app.get('/content', auth, (req, res) => {
    // callback funktion 1

    if(req.session.pages.split(',').includes('content')) {
        return res.send('Secret area!');
    }

    return res.send('Unauthorized');
});

app.get('/privateProfile', auth, (req, res) => {
    // callback funktion 2

    if(req.session.pages.split(',').includes('privateProfile')) {
        return res.send('Private profile!');
    }

    return res.send('Unauthorized');
});

app.get('/logout', auth, (req, res) => {
    delete req.session.user;
    return res.send('logout successfull');
});

app.listen(3000);