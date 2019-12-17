const express = require('express');
const app = express();

app.use(express.json());

app.get('/hallo', (req, res) => {
    return res.send({ message: 'Hallo' });
});

app.get('/users', (req, res) => {
    return res.send({ user: 'huhu', id: 500 });
});

app.post('/users', (req, res) => {
    return res.send({...req.body, id: 42});
});

app.delete('/users/:id', (req, res) => {
    return res.send({ message: `user ${req.params.id} deleted` });
});

console.log('Server gestartet.');
app.listen(3001);