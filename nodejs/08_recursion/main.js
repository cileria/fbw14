const f = x => {
    // rekursionsende
    // bei diesem parameter-wert rufen wir f NICHT nochmal auf
    if(x === 0) {
        console.log('x ist 0, das rekursionsende ist erreicht');
    }
    else {
        console.log('x ist noch nicht 0, das rekursionsende ist noch nicht erreicht.');
        f(x-1);
    }
}

// f(5);

// Aufgabe 1
// die Schleifen-Version
const sumLoop = x => {
    let sum = 0;
    for(let i=x; i>0; i--) {
        sum += i;
    }
    return sum;
}
// console.log(sumLoop(5));

const sum = x => {
    // rekursionsende x = 0
    if(x === 0) {
        console.log('rekursionsende erreicht, x ist 0');
        return 0;
    }
    else {
        console.log('rekursionsende ist nicht erreicht, x ist noch nicht 0');
        return x + sum(x - 1);
    }
}
// console.log(sum(5));

// Aufgabe 2:
const fs = require('fs');
const listFiles = path => {
    let files = fs.readdirSync(path);
    for(file of files) {
        const info = fs.lstatSync(`${path}/${file}`);
        if(info.isFile()) {
            console.log(`${file} ist eine Datei`);
        }
        else if(info.isDirectory()) {
            console.log(`${file} ist ein Verzeichnis`);
        }        
        else if(info.isSymbolicLink()) {
            console.log(`${file} ist ein Link`);
        }
    }
}

listFiles(`/home/janteach/Desktop`);