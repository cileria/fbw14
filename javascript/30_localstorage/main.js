console.log('hallo world');

// localStorage
//
// .getItem(itemName) liest item aus
// .setItem(itemName, itemWert) setzt neues item
// .removeItem(itemName) löscht item
// .clear() löscht localStorage


// Aufgabe:
//
// Implementiere folgende Funktionalität:
// 1) Wenn der Nutzer auf "Benutzername lokal speichern" klickt, soll der Benutzername aus dem Input-text in der localStorage gespeichert werden.
// 2) Wenn der Nutzer auf Benutzername löschen klickt, soll der Benutzername aus dem localStorage gelöscht werden
// 3) Wenn der Nutzer die Seite neu lädt, soll eine Begrüßung zu sehen sein: "Hallo " + nutzername. Allerdings nur, falls getItem nicht null zurückliefert, d.h. falls der Nutzername gespeichert ist.

const userObj = document.getElementById('user');
const setUsernameObj = document.getElementById('setUsername');
const deleteUsernameObj = document.getElementById('deleteUsername');
const h2Obj = document.getElementsByTagName('h2')[0]; // [0] weil getElementsByTagName ein Array zurückliefert mit allen h2 

// 1)
setUsernameObj.onclick = function() {
    if(userObj.value === '') {
        alert('kein Username eingegeben');
    }
    else {
        localStorage.setItem('username', userObj.value);
        userObj.value = '';
    }
}

// 2)
deleteUsernameObj.onclick = function() {
    localStorage.removeItem('username');
}

// 3) 
function greeting() {
    if(localStorage.getItem('username') !== null) {
        h2Obj.innerHTML = 'Hallo ' + localStorage.getItem('username');
    }
    else {
        h2Obj.innerHTML = 'Hallo unbekannter Nutzer';
    }
}

greeting();