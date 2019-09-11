

// "altes" JavaScript, vor ECMAScript 2015

var x = 2;
x = 3;
console.log('x = ' + x);

// var: Syntaxelement zum Deklarieren von Variablen

for(var i=0; i<10; i++) { // anonymer block
    console.log('i = ' + i);
}

// i = ?
// 0, 11, 1, 10, 9 ...
console.log('i nach der schleife: ' + i);

{ // anonymer block
    { // anonymer block
        var j = 1005;
        console.log('j ist innerhalb: ' + j);
    }
    console.log('j ist ausserhalb: ' + j);  
}
console.log('j ist ganz ausserhalb: ' + j);

function halloWorld() {
    var str = 'hallo world';
    console.log('str innerhalb: ' + str);
}

// schmeißt einen fehler
// console.log('str ausserhalb: ' + str);

if(true) { // anonymer block
    var k = 5;
}

console.log('k = ' + k);

// var
// - sichtbar außerhalb von anonymen blöcken 
//   for, while, if, switch, ... 
// - wieder zuweisbar/üb+erschreibbar 

let v = 10;
v = 15;
console.log('v = ' + v);

for(let g=0; g<10; g++) {
    console.log('g = ' + g);
}
// console.log('g = ' + g);

const h = 5;
// h = 8; // fehler, weil konstante

{
    const r = 7;
    let r2 = 14;
}
console.log(r2);
console.log(r);