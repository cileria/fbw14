const fs = require('fs');

const items = fs.readdirSync('/home/janteach/Desktop/test');
for(item of items) {
    console.log(item);
}

console.log(`der Ordner hat ${items.length} direkte files`);

let path1 = '/home/janteach/Desktop/test/a'; // Datei
let path2 = '/home/janteach/Desktop/test/hallo'; // Verzeichnis

const infoPath1 = fs.lstatSync(path1);
const infoPath2 = fs.lstatSync(path2);

if(infoPath1.isFile()) {
    console.log(`path1 ist eine Datei`);
}
else {
    console.log(`path1 ist ein Verzeichnis`);
}

if(infoPath2.isFile()) {
    console.log(`path2 ist eine Datei`);
}
else {
    console.log(`path2 ist ein Verzeichnis`);
}