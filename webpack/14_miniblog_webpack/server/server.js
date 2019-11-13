const express = require('express');
const session = require('express-session');
const app = express();
const mysql = require('mysql');
const sendMail = require('./mailer');
const randomstring = require('randomstring');
const bcrypt = require('bcrypt');
const cors = require('cors');

// zum definieren von umgebungsvariablen
// 
// $ export MODE=PRODUCTION
// $ export MODE=DEVELOPMENT

// ist umgebungsvariable MODE = PRODUCTION?
if(process.env.MODE === 'PRODUCTION') {
    console.log('Server wird in Produktions-Modus gestartet');
    console.log(__dirname + '/../dist');
    app.use('/', express.static(__dirname + '/../dist'));
}
else {
    console.log('Server wird in Development-Modus gestartet');
}

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'jan',
    password: 'foobar',
    database: 'miniblog'
});

if(!connection) {
    console.log('Verbindung zur DB konnte nicht hergestellt werden - Exit.');
    process.exit(0);
}

app.use('/', express.static('public'));
// cookies auch an clients mit anderer domain schicken als localhost:3000
// z.b. localhost:8080 usw.
app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
}));
app.use(express.json());
// gibt jedem HTTP-packet eine cookie-id in den header
// rein
app.use(session({
    secret: 'mySecretKey',
    resave: true,
    saveUninitialized: true
}));

const addUser = (req, res) => {
    console.log(`incoming request, attempt to create user with email: ${req.body.email} and 
    password: ${req.body.password}`);
    
    if(!(req.body.email && req.body.password)) {
        return res.send({ error: 1002, message: 'email and password required' });
    }
    
    const queryUserExists = `select * from users where email = ?`;
    connection.query(
        queryUserExists, [req.body.email],
        (err, rows) => {
            if(err) {
                console.log('Error: ' + err);
                return;
            }

            if(rows.length > 0) {
                return res.send({ error: 1001, message: 'user already exists' });
            }

            // zeit, dass password zu hashen 
            bcrypt.hash(req.body.password, 10, 
                (err, result) => {
                    let hashedPassword = result;
                
                    // user existiert noch nicht!                    
                    const queryAddUser = `
                        insert into users (email, password, activationcode) values (?, ?, ?)
                    `;
                    const activationCode = randomstring.generate(20);
                    connection.query(
                        queryAddUser, [
                            req.body.email, 
                            hashedPassword,
                            activationCode
                        ],
                        (err, rows) => {
                            if(err) {
                                console.log('Error: ' + err);
                                return;
                            }
                
                            sendMail(req.body.email, 'Ihre Registrierung bei Miniblog', 
                            `Danke für Ihre Registrierung bei Miniblog! 
                             Bitte klicken Sie auf folgenden Link:
                             <a href="http://localhost:3000/activate/${activationCode}">Hier bitte klicken!</a>
                            `);

                            return res.send({ error: 0, message: 'user successfully created' });
                        });
                });
        });           
}

const loginUser = (req, res) => {
    const queryUserExists = `select * from users where email = ?`;
    connection.query(
        queryUserExists, [req.body.email],
        (err, rows) => {
            if(err) {
                console.log('Error: ' + err);
                return;
            }

            if(rows.length === 0) {
                return res.send({ error: 1001, message: 'user not found' });
            }

            const hashedPassword = rows[0].password; // slkdjfljf4jf
            bcrypt.compare(req.body.password, hashedPassword, (err, result) => {
                if(err) return res.send({ error: 1003, message: 'error comparing passwords'});

                if(result) {
                    req.session.user = req.body.email;
                    return res.send({ error: 0, message: 'login successful' });
                }
                else {
                    return res.send({ error: 1004, message: 'login failed' });
                }
            });
        });
};

// Aufgabe: schreibe eine Logout-Funktion!
app.post('/login', loginUser);

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

app.post('/logout', (req, res) => {
    delete req.session.user;
    return res.send({ error: 0, message: 'logout successfull' });
});

app.post('/signup', addUser);

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

app.post('/blogpost', auth, (req, res) => {
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

app.get('/activate/:activationcode', (req, res) => {
    console.log(`incoming activation attempt: ${req.params.activationcode}`);
    
    const query = `
        update users set activated = now() where activationcode = ?
    `;
    connection.query(
        query, [ req.params.activationcode ],
        (err, result) => {
            if(err) {
                console.log('Error: ' + err);
                return;
            }

            if(result.affectedRows === 0) {
                return res.send({ error: 1005, message: 'invalid activation code' });
            }

            // activation code existiert, jetzt brauchen wir den nutzer
            const query = `
                select * from users where activationcode = ?
            `;
            connection.query(
                query, [ req.params.activationcode ],
                (err, rows) => {
                    if(err) {
                        console.log('Error: ' + err);
                        return;
                    }

                    // nutzer wird per link eingeloggt
                    req.session.user = rows[0].email;
                    return res.send(`
                        <head>     
                            <meta http-equiv="refresh" content="5; URL='http://localhost:3000'"/> 
                            <script>
                                localStorage.setItem('loggedIn', '1');
                            </script>    
                        </head>    
                        <body>
                            <h2>Ihre Registrierung ist nun abgeschlossen. Sie werden in 
                            5 Sekunden auf die Startseite weitergeleitet oder klicken Sie
                            den folgenden Link: <a href="https://localhost:3000">Hier</a>
                        </body>
                    `);
                });
    });    

});

app.listen(3000);