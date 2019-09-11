const btnStart = document.getElementById('btnStart');
const btnStop = document.getElementById('btnStop');

let id = null;
btnStart.onclick = function() {
    if(id !== null) {
        alert('Es gibt schon ein Intervall');
        return;
    }
    
    id = setInterval(
        function() {
            // alert('Ding Dong');

            // div erzeugen
            let newDiv = document.createElement('div');
            // in dem die div die uhrzeit 
            // reinschreibt

            let date = new Date();
            let hours = date.getHours();
            let mins = date.getMinutes();
            let seconds = date.getSeconds();
            let time = `${hours}:${mins}:${seconds}`;            

            newDiv.innerText = time;
            // das div an den body anhängt
            
            document.body.appendChild(newDiv);
        },
        1000
    );
}

btnStop.onclick = function() {
    clearInterval(id);
    id = null;
}

// Aufgabe:
//
// 1) Verändere das Intervall auf 1 Sekunde.
// 2) Jedes mal, wenn das Intervall ausgeführt wird (bzw. die Funktion, die das Intervall ausführt), soll ein neues Div an den Body angehängt werden, in dem die aktuelle Uhrzeit steht. Um die Uhrzeit rauszufinden, benutze bitte Google.

