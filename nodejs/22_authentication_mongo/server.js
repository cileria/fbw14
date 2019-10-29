const express = require('express');
const session = require('express-session');
const app = express();
const mongoose = require('mongoose');
const User = require('./User');

mongoose.connect('mongodb://localhost/authdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

User.find({}, (err, results) => {
    if(err) console.log(err);
    console.log(results);
});

// gibt jedem HTTP-packet eine cookie-id in den header
// rein
app.use(session({
    secret: 'mySecretKey',
    resave: true,
    saveUninitialized: true
}));

// Aufgabe: schreibe eine Logout-Funktion!
// query: ?email=xxx&password=yyy
app.get('/login', async (req, res) => {
    
    const result = await User.find({ 
        email: req.query.email, password: req.query.password
    });

    if(result.length > 0) {
        req.session.user = result[0].email; // falls es einen nutzer gibt, dann ist er auch eingeloggt
        req.session.pages = result[0].pages;
        return res.send({ message: 'login successful' });
    }
    else {
        return res.send({ message: 'login failed' });
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

    if(req.session.pages.includes('content')) {
        return res.send('Secret area!');
    }

    return res.send('Unauthorized');
});

app.get('/privateProfile', auth, (req, res) => {
    // callback funktion 2

    if(req.session.pages.includes('privateProfile')) {
        return res.send('Private area!');
    }

    return res.send('Unauthorized');
});

app.get('/logout', auth, (req, res) => {
    delete req.session.user;
    return res.send('logout successfull');
});

app.listen(3000);