// fetch('https://jsonplaceholder.typicode.com/todos/1')
// // asynchrone funktion konvertiert object nach json -> noch ein promise
// .then((response) => {
//     return response.json() // konvertierungs-promise
// }) // was response.json() resolved, wird
// // dann zu dem parameter json, weil response.json() ist ein Promise
// .then((json) => {
//     console.log(json)
// });

// Aufgabe:
//
// Konvertiere diese ES5-Promise-Syntax
// in die neue ES6-Syntax ->
// mit AsyncAwait
//
// Tip: Schaue Dir IIFE an und Versuche
//      dieses Konzept mit Async zu 
//      kombinieren

(async () => {
    try {
        const result = await fetch('https://jsonplaceholder.typicode.com/todos/1');

        if(result.status === 404) {
            throw 'Address invalid';
        }

        // hier hat result definitiv irgendeinen wert
        // console.log(result.json()); 
        // wieder ein promise, hat keine daten fuer uns

        const str = await result.json();
        console.log(str);
    }
    catch(e) {
        console.log('Error ' + e);
    }
})();