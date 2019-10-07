const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

// alle dateien, die im public drin sind,
// können von außen über den dateinamen geladen werden
// / -> lädt automatisch index.html
// /main.js -> lädt die datei main.js
// /style.css -> lädt die datei style.css
app.use('/', express.static('public'));
// wir benutzen fileUpload-middleware zum parsen
// des request-bodys
app.use(fileUpload());

app.post('/upload', function(req, res) {

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }
  
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    // <input type="file" name="sampleFile" />
    let sampleFile = req.files.imageUpload;
  
    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(__dirname + '/hallo.jpg', function(err) {
      if (err)
        return res.status(500).send(err);
  
      res.send('File uploaded!');
    });
  });

console.log('Hallo World from Backend.');
app.listen(3000);