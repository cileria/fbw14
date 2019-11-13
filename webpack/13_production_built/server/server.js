const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// 
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

// die api-endpoints sollen im produktionsserver drin bleiben
// d.h. der produktionsserver hostet html/css/js UND api-endpoints
app.get('/halloworld', (req, res) => {
    return res.send({ error: 0, message: 'hallo world' });
});

app.listen( 3000 );