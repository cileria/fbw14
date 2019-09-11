const greet = () => {
    console.log('Hallo from greet2.js');
}

module.exports.greet = greet;

// module.exports sieht so aus:
// 
// {
//     greet: greet
// }