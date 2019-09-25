#!/usr/local/bin/node

// node findInFiles.js /home/janteach/Desktop/test "Haus" "REPLACED"

const fs = require('fs');
const findInFiles = (path, strSearch, replace) => {
    let files = fs.readdirSync(path);
    for(file of files) {
        // file kann sein datei, verzeichnis oder link
        // wir schauen uns die dateien an
        const info = fs.lstatSync(`${path}/${file}`);
        if(info.isFile()) {
            // rekursionsende 1
            // hier gucken wir nach, ob in der datei ein
            // string zu finden ist nach dem muster strSearch
            // wir öffnen die datei und schauen nach.
            const fileContent = fs.readFileSync(`${path}/${file}`);
            // let str = new String(fileContent);
            // if(str.includes(strSearch)) { ... }
            if(new String(fileContent).includes(strSearch)) {
                console.log(`MATCH: ${path}/${file}`);

                // falls wir einen replace definiert haben, dann replacen wir das
                if(typeof replace !== 'undefined') {
                    const newFileContent = new String(fileContent).replace(new RegExp(strSearch, 'g'), replace);
                    
                    fs.writeFileSync(`${path}/${file}`, newFileContent);
                }
            }
        }
        else if(info.isDirectory()) {
            findInFiles(`${path}/${file}`, strSearch, replace);
        }        
    }
}

// node findInFiles.js /home/janteach/Desktop/test "Haus" "REPLACED"
//                                2                   3        4

if(process.argv.length < 4) {
    console.log('Error: Destination folder and searchString required.');
    // process.exit(0);
    return;
}

const destinationPath = process.argv[2];
const searchString = process.argv[3];
const replaceString = process.argv.length === 5 ? process.argv[4] : undefined;

findInFiles(destinationPath, searchString, replaceString);