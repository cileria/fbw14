const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
    secret: 'mySecretKey', // crypto-key zum signieren des cookie
    resave: true,
    saveUninitialized: true
}));

// ungeschützte resource
app.get('/', (req, res) => {
    return res.send('Startseite - für alle zugänglich');
});

// login - auch ungeschützt
app.get('/login', (req, res) => {
    if(req.query.username === 'jan' && req.query.password === 'foobar') {
        req.session.user = 'jan';
        return res.send('login successful');
    }

    return res.send('login failed');
});

// geschützte resource
app.get('/private', (req, res) => {
    if(req.session.user && req.session.user === 'jan') {
        return res.send('Private - nur für einen Nutzer zugänglich');
    }

    return res.send('Not authorized');
});


app.listen( 3000 );