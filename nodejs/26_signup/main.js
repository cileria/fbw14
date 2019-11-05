// mysql client bibliothek
const mysql = require('mysql');
const express = require('express');

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'jan',
    password: 'foobar',
    database: 'miniblog'
});

const addUser = (email, password) => {
    // query3: daten einfügen
    const query3 = `
        insert into users (
            email, 
            password 
        )
        values (?,?);
    `;
    connection.query(
        query3, [ 
            email,
            password
        ],
        (err, rows) => {
            if(err) {
                console.log('Error: ' + err);
                return;
            }

            console.log(rows);
        });
}

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