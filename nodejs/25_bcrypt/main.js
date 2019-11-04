const bcrypt = require('bcrypt');

let myPassword = "blablaPassword_";
bcrypt.hash(myPassword, 10, (err, result) => {
    let hash = result;
    console.log(`${myPassword} = ${hash}`);
    // hash wurde generiert, jetzt wollen wir testen

    let passwordLogin = 'blablaPassword_';
    bcrypt.compare(passwordLogin, hash, (err, resultCompare) => {
        if(resultCompare) {
            console.log('passwords match!');
        }
        else {
            console.log('passwords dont match');
        }
    });
});