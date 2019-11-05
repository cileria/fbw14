// mysql client bibliothek
const mysql = require('mysql');
const express = require('express');

const app = express();
app.use(express.json());
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'jan',
    password: 'foobar',
    database: 'miniblog'
});

// erweitere den signup-prozess so, 
// 1) dass geprüft wird, ob der nutzer schon existiert.
// falls der nutzer schon existiert, soll zurückgegeben werden:
// { error: 1001, message: 'user already exists' }
// 2) es soll geprüft werden, dass req.body.email und req.body.password
// auch angegeben wurde, 

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

            // user existiert noch nicht!
            
            const queryAddUser = `
                insert into users (email, password) values (?, ?)
            `;
            connection.query(
                queryAddUser, [req.body.email, req.body.password],
                (err, rows) => {
                    if(err) {
                        console.log('Error: ' + err);
                        return;
                    }
        
                    return res.send({ error: 0, message: 'user successfully created' });
                });    
        });           
}

app.post('/signup', addUser);
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

app.listen( 3000 );