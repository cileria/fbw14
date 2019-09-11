const getDataObj = document.getElementById('getData');

getDataObj.onclick = function() {
    // https://jsonplaceholder.typicode.com/users

    const xhr = new XMLHttpRequest();
    // http-methode festlegen, in diesem falle get und zieladresse festlegen
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

    // die funktion, die aufgerufen wird, wenn der httpclient chrome eine antwort bekommt
    xhr.onload = function() {
        if(xhr.status === 200) {
            // wir empfangen daten als string
            let response = xhr.responseText;
            // wir konvertieren den string in ein js objekt
            let responseObj = JSON.parse(response);
            console.log(responseObj);

            // Aufgabe:
            //
            // Baue eine Tabelle basierend auf den geladenen Daten mit 3 Spalten: id, username und email. Die Anzahl der Zeilen soll die Anzahl aller Objekte im Array sein.

            const tableObj = document.createElement('table');
            const trObj = document.createElement('tr');
            const th1 = document.createElement('th'),
                  th2 = document.createElement('th'),
                  th3 = document.createElement('th');

            th1.innerText = 'Id';
            trObj.appendChild(th1);
            th2.innerText = 'Username';
            trObj.appendChild(th2);
            th3.innerText = 'Email';
            trObj.appendChild(th3);
            tableObj.appendChild(trObj);

            for(let i=0; i<responseObj.length; i++) {
                const trNewObj = document.createElement('tr');
                const td1 = document.createElement('td'),
                      td2 = document.createElement('td'),
                      td3 = document.createElement('td');
    
                td1.innerText = responseObj[i].id;
                trNewObj.appendChild(td1);
                td2.innerText = responseObj[i].username;
                trNewObj.appendChild(td2);
                td3.innerText = responseObj[i].email;
                trNewObj.appendChild(td3);
                tableObj.appendChild(trNewObj);
            }

            document.body.appendChild(tableObj);
        }
        else {
            alert('Error: ' + xhr.status);
        }
    }

    xhr.send();
}