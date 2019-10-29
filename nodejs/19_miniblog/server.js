const express = require('express');
const session = require('express-session');
const app = express();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'jan',
    password: 'password',
    database: 'miniblog'
});

if(!connection) {
    console.log('Verbindung zur DB konnte nicht hergestellt werden - Exit.');
    process.exit(0);
}

app.use('/', express.static('public'));
app.use(express.json());
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

app.get('/logout', auth, (req, res) => {
    delete req.session.user;
    return res.send('logout successfull');
});

app.get('/blogposts', (req, res) => {
    const sql = `select * from blogpost`;
    connection.query(
        sql,
        (err, rows) => {
            if(err) {
                console.log('Error: ' + err);
                return res.send({ error: 'db error' + err });
            }

            return res.send(rows);
        });      
})

app.post('/blogpost', (req, res) => {
    if(!(req.body.title && req.body.content)) {
        return res.send({ error: 'title and content required' });
    }

    const sql = `insert into blogpost (created, title, content) values(now(), ?, ?)
    `;
    connection.query(
        sql, [req.body.title, req.body.content],
        (err, result) => {
            if(err) {
                console.log('Error: ' + err);
                return res.send({ error: 'db error' + err });
            }

            return res.send({ newInsertId: result.lastInsertId });
        });       
});

app.listen(3000);