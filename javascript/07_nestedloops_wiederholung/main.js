// nested = verschachtelt
// loops in loops

for(var i=0; i<10; i++) {
    console.log(`i = ${i}`);
    for(var j=0; j<3; j++) {
        console.log(`   j = ${j}`);
    }
}

// Aufgabe:
// 
// Schreibe verschachtelte For-Schleifen, die folgenden
// Output generiert:
//
// i
// 0 *
// 1 **
// 2 ***
// 3 ****
// 4 *****
// 5 ******
// 6 *******
// j 0123456

for(var i=0; i<7; i++) {
    var star = '';

    for(var j=0; j<=i; j++) {
        star += '*';
    }

    console.log(star);
}

var someNumbers = [ 
   // 0   1   2   3       => length = 4  
    [17, 20, 12, 6],                // 0 
   // 0   1   2           => length = 3
    [13,-12,  0],                   // 1 
   // 0   1   2   3   4   => length = 5
    [25,  7,  3, 10, 12],           // 2 
   // 0   1               => length = 2
    [31, 15]                        // 3 
]; // length = 4


console.log( someNumbers[0][0] )    // 17 
console.log( someNumbers[0][1] )    // 20 
console.log( someNumbers[0][2] );   // 12 

for(var i=0; i<someNumbers.length; i++) {
    for(var j=0; j<someNumbers[i].length; j++) {
        console.log( `indexNumber[${i}][${j}]: ${someNumbers[i][j]}` );
    }
}

