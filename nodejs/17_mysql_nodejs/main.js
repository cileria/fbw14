// mysql client bibliothek
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'jan',
    password: 'password',
    database: 'online_shop'
});

const executeQuery1 = () => {
    // query1: daten lesen
    const query1 = `select * from customers`;
    connection.query(
        query1,
        (err, rows) => {
            // falls ein err definiert wurde, dann
            // mal schauen was schiefgelaufen ist evtl. falsche sql syntax
            if(err) {
                console.log('Error: ' + err);
                return;
            }

            console.log(rows);
        });
}

const executeQuery2 = () => {
    // query2: daten updaten
    const query2 = `update customers set firstname = ?, lastname = ? where firstname = 'Max'`;
    connection.query(
        query2,[ 'Bernd', 'Mueller' ],
        (err, rows) => {
            // falls ein err definiert wurde, dann
            // mal schauen was schiefgelaufen ist evtl. falsche sql syntax
            if(err) {
                console.log('Error: ' + err);
                return;
            }

            console.log(rows);
        });
}

const executeQuery3 = () => {
    // query3: daten einfügen
    const query3 = `
        insert into customers (
            id, 
            firstname, 
            lastname, 
            registered, 
            birthdate, phone, city, street, postal, email
        )
        values (?,?,?,now(),?,?,?,?,?,?);
    `;
    connection.query(
        query3, [ 
            1004, // falls AI (autoincrement) bei Datenbank enabled ist, dann brauchen wir keine ID
            'Max', 
            'Mustermann', 
            '1988-01-10', 
            '49152792', 
            'Berlin', 
            'Main Street 5', 
            '14332',
            'max@abc.com'            
        ],
        (err, rows) => {
            // falls ein err definiert wurde, dann
            // mal schauen was schiefgelaufen ist evtl. falsche sql syntax
            if(err) {
                console.log('Error: ' + err);
                return;
            }

            console.log(rows);
        });
}

const executeQuery4 = () => {
    // query4: daten löschen
    const query4 = `delete from customers where city = 'Dortmund'`;
    connection.query(
        query4,
        (err, rows) => {
            // falls ein err definiert wurde, dann
            // mal schauen was schiefgelaufen ist evtl. falsche sql syntax
            if(err) {
                console.log('Error: ' + err);
                return;
            }

            console.log(rows);
        });
}

executeQuery4();
