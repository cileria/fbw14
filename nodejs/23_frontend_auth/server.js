const express = require('express');
const session = require('express-session');
const app = express();

app.use('/', express.static('public'));

// gibt jedem HTTP-packet eine cookie-id in den header
// rein
app.use(session({
    secret: 'mySecretKey',
    resave: true,
    saveUninitialized: true
}));

// Aufgabe: schreibe eine Logout-Funktion!
app.get('/login', (req, res) => {
    if(req.query.username === 'jan' && req.query.password === 'foobar') {
        req.session.user = 'jan'; // falls es einen nutzer gibt, dann ist er auch eingeloggt
        return res.send({ message: 'login successfull' });
    }
    else {
        return res.send({ error: 'login failed' });
    }
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
    return res.send('Secret area!');
});

app.get('/privateProfile', auth, (req, res) => {
    // callback funktion 2
    return res.send('Private area!');
});

app.get('/logout', auth, (req, res) => {
    delete req.session.user;
    return res.send('logout successfull');
});

app.listen(3000);