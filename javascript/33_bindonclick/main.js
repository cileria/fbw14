console.log('hallo world');

const createBtnObj = document.getElementById('createBtn');

function sayWhat(what) {
    alert(what);
}

function randomstring() {
    let alpha = 'abcdefghijklmnopqrstuvwxyz';

    const alphaArray = alpha.split('');

    let newString = '';
    for(let i=0; i<10; i++) {
        newString += alphaArray[Math.floor(Math.random() * 26)];
    }
    return newString;
}

createBtnObj.onclick = function(){
    const newBtnObj = document.createElement('button');
    newBtnObj.innerHTML = 'Hallo World';
    // ohne die (), weil wir sonst die funktion ausführen, und wäre das undefined
    // newBtnObj.onclick = function() {
    //     alert('hallo world')
    // }

    // ich übergebe den namen der funktion,
    // die aufgerufen werden soll
    // bind erstellt eine kopie einer funktion
    const str = randomstring();
    // mit einem vordefinierten parameter
    newBtnObj.onclick = sayWhat.bind(this,str); // what = 'hallo world'
    document.body.appendChild(newBtnObj);
}

// Wiederholung bind
function summe(a, b) {
    console.log(a+b);
}

summe(1,5);
let summeVon1und5 = summe.bind(this, 1, 5);
summeVon1und5();

// Aufgabe:
//
// Modifiziere den Code createBtnObj.onclick so,
// dass jedesmal ein zufälliger String von 10 
// alerted wird.

