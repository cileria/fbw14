// mysql client bibliothek
const mysql = require('mysql');
const express = require('express');
const bcrypt = require('bcrypt');
const randomstring = require('randomstring');
const sendMail = require('./mailer');

const app = express();
app.use( express.json() );
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'jan',
    password: 'foobar',
    database: 'miniblog'
});

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
                    return res.send({ error: 0, message: 'login successful' });
                }
                else {
                    return res.send({ error: 1004, message: 'login failed' });
                }
            });
        });
};

app.post('/signup', addUser);

app.post('/login', loginUser);

app.get('/users', (req, res) => {
    const query = `
        select * from users
    `;
    connection.query(
        query,
        (err, rows) => {
            if(err) {
                console.log('Error: ' + err);
                return;
            }

            return res.send(rows);
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

            return res.send({ error:0, message: 'user activated' });
    });    

});

app.listen( 3000 );