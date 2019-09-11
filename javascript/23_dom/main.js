const greetingObj = document.getElementById('greeting');
const sayMyNameObj = document.getElementById('saymyname');

sayMyNameObj.onclick = function() {
    // greetingObj.value gibt den value der textbox aus
    alert(`Hallo ${greetingObj.value}`);
}

// Aufgabe:
// 
// 1. Erstelle zwei Textboxen und
// einen Button mit dem Label "Addieren" 
// 2. Wenn der Nutzer auf "Addieren" klickt, dann soll die Summe der Zahl der ersten und zweiten Textbox ausgegeben werden. Prüfe hierzu, ob in beiden Textboxen wirklich Zahlen drin stehen. Google hierzu möglichst effizient, falls Du nicht weißt wie das geht.

// Schritt 1
const summand1Obj = document.getElementById('summand1');
const summand2Obj = document.getElementById('summand2');
const summeObj = document.getElementById('summe');

summeObj.onclick = function() {
    // diese funktion wird aufgerufen, wenn der summe Button geklickt wird

    // 1. lösungsweg: inhalt identisch
    if(summand1Obj.value == parseInt(summand1Obj.value) && summand2Obj.value == parseInt(summand2Obj.value)) {
        let summe = parseInt(summand1Obj.value) + parseInt(summand2Obj.value);
    }
}