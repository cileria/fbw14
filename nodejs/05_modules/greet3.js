const greet = () => {
    console.log('Hallo from greet3.js');
}

module.exports = {
    blabla: greet
}

// main.js sieht später
// das objekt 
// { blabla: () => {
//     console.log('Hallo from greet3.js');
// }
// }