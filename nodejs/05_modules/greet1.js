// die funktion ist von außen verfügbar
// und wird als einziges funktion exportiert
// alles, was module.exports zugewiesen wird, wird exportiert
module.exports = () => {
    console.log('Hallo from greet1.js');
}