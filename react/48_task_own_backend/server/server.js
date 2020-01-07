const express = require('express');
const randomstring = require('randomstring');
const fs = require('fs');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/comments', (req, res) => {
    fs.readFile(__dirname + '/comments.json', (err, data) => {
        if(err) return res.send({ error: 1000 });

        let comments = null;
        try {
            comments = JSON.parse( data );
        }
        catch( err ) {
            return res.send({ error: 1001 });
        }

        return res.send(comments);
    });
});

app.post('/comments', (req, res) => {
    if(!req.body.name || !req.body.text) {
        return res.send({ error: 1002 });
    } 

    fs.readFile(__dirname + '/comments.json', (err, data) => {
        let comments = null;
        try {
            comments = JSON.parse( data );
        }
        catch( err ) {
            return res.send({ error: 1001 });
        }
        
        const newId = randomstring.generate(5);
        const newComment = { ...req.body, id: newId };
        comments.push(newComment);

        let strComments = null;
        try {
            strComments = JSON.stringify(comments);
        }
        catch(e) {
            return res.send({ error: 1003 })
        }

        fs.writeFile(__dirname + '/comments.json', strComments, (err) => {
            if(err) return res.send({ error: 1004 });

            return res.send(newComment);
        });
    });
});

app.delete('/comments/:id', (req, res) => {
    if(!req.params.id) {
        return res.send({ error: 1005 });
    }

    fs.readFile(__dirname + '/comments.json', (err, data) => {
        
        let comments = null;
        try {
            comments = JSON.parse( data );
        }
        catch( err ) {
            return res.send({ error: 1001 });
        }
        
        const newComments = comments.filter((comment) => comment.id !== req.params.id);

        if(newComments.length === comments.length) {
            return res.send({ error: 1006 });
        }

        let strComments = null;
        try {
            strComments = JSON.stringify(newComments);
        }
        catch(e) {
            return res.send({ error: 1003 })
        }

        fs.writeFile(__dirname + '/comments.json', strComments, (err) => {
            if(err) return res.send({ error: 1004 });

            return res.send({ error: 0 });
        });        
    });
});

console.log('server started');
app.listen( 3001 );
