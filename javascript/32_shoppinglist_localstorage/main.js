const giftObj = document.getElementById('gift');
const addgiftObj = document.getElementById('addgift');
const removelastgiftObj = document.getElementById('removelastgift');
const removefirstObj = document.getElementById('removefirst');
const removeObj = document.getElementById('remove');
const sumObj = document.getElementById('sum');
const shoppinglistObj = document.getElementById('shoppinglist');
const shoppinglistArrayObj = document.getElementsByTagName('li');

// getElementById - 1 element, keine list
// getElementsByTagName - N elemente, list

// Aufgabe:
// 
// Erweitere Die Funktionalität von add gift.
// Jedes mal, wenn ein neues gift in der Liste
// hinzugefügt wird, soll ein neues Objekt in
// das Array basket hinzugefügt werden.
// Jedes Objekt hat einen Namen und einen Zufalls-
// preis. Also wenn der Benutzer eine "Banane" 
// hinzufügt, dann soll ein neues Objekt in 
// das Basket-Array hinzugefügt werden:
// Bsp:
// { name: 'Banane', price: 0.50 }
//
// basket würde bei einem gift so aussehen:
//
// [{ name: 'Banane', price: 0.50 }]

let basket = [];
let basketJson = '';

if(localStorage.getItem('basket') !== null) {
    basket = JSON.parse(localStorage.getItem('basket'));

    for(let i=0; i<basket.length; i++) {
        const newLiObj = document.createElement('li');
        newLiObj.innerHTML = basket[i].name;
        shoppinglistObj.appendChild(newLiObj);
    }
}

function updateLocalStorage() {
    // basket wird zu JSON-string konvertiert
    basketJson = JSON.stringify(basket);
    // JSON-string wird in localstorage gespeichert
    localStorage.setItem('basket', basketJson);    
}

addgiftObj.onclick = function() {
    
    // prüfen, ob textbox leer ist
    if(giftObj.value.length === 0) {
        alert('Input darf nicht leer sein.')
        return;
    }

    // neues li erzeugen
    const newLiObj = document.createElement('li');
    // den text des li setzen
    newLiObj.innerHTML = giftObj.value;
    // li der liste hinzufügen
    shoppinglistObj.appendChild(newLiObj);
    
    let basketItem = {
        name: giftObj.value,
        price: Math.floor(Math.random() * 20)
    };
    
    basket.push(basketItem);
    updateLocalStorage();

    giftObj.value = '';
}

// Aufgabe:
//
// Implementiere die Buttons removelast und
// removefirst.
// removefirst: entfernt erstes item in der liste
// removelast: entfernt letztes item in der liste
// 
// tipp: nutze google für effizientes selektieren der DOM elemente. schaue dir die methode .remove() an.

removefirstObj.onclick = function() {
    if(shoppinglistArrayObj.length > 0) {
        shoppinglistArrayObj[0].remove();
        basket.shift();
        updateLocalStorage();
    }
    else {
        alert('Keine Items zum entfernen');
    }
}
    
removelastgiftObj.onclick = function() { 
    if(shoppinglistArrayObj.length > 0) {
        shoppinglistArrayObj[shoppinglistArrayObj.length - 1].remove();
        basket.pop();
        updateLocalStorage();
    }
    else {
        alert('Keine Items zum entfernen');
    }    

    // listObj[listObj.length - 1].remove();
}

// Aufgabe:
//
// 1) Erstelle ein Beispiel-Array von
//    exampleArray = [2,9,10,11,10,12,10,23];
//    
// 2) Schreibe eine Funktion, die alle 10 aus dem
//    Array herauslöscht.
// 
//    Tipp: schaue Dir splice() an (z.b. mit Google)

// const exampleArray = [
//     2,9,10,11,10,12,10,10,23
// ];

// function removeAll10() {
//     for(let i=0; i<exampleArray.length; i++) {
//         if(exampleArray[i] === 10) {
//             exampleArray.splice(i, 1);
//             i--;
//         }
//     }
// }

// removeAll10();

removeObj.onclick = function() {
    
    if(shoppinglistArrayObj.length === 0) {
        alert('Es gibt keine Items zum entfernen');
        return;
    }
    
    // prüfen, ob textbox leer ist
    if(giftObj.value.length === 0) {
        alert('Input darf nicht leer sein.')
        return;
    }

    for(let i=0; i<shoppinglistArrayObj.length; i++) {
        // bei welchem item bin ich gerade?
        
        if(giftObj.value === shoppinglistArrayObj[i].innerHTML) {
            shoppinglistArrayObj[i].remove();
            basket.splice(i, 1);
            i--;
        }
    }

    updateLocalStorage();
    giftObj.value = '';
}

// Aufgabe:
// 
// Implementiere die Funktionalität vom Button sum,
// der den Wert des Warenkorbs ausgibt. Benutze
// dafür einen alert.

sumObj.onclick = function() {

    let sum = 0;
    for(let i=0; i<basket.length; i++) {
        console.log( basket[i].price );
        sum += basket[i].price;
    }

    alert('Warenkorbwert: ' + sum);
}

// Aufgabe:
//    
// Baue folgende Features in Deine Shopping-List ein:
//  
// 1. Wenn der Nutzer ein neues Item hinzufügt, dann
//    darf die Textbox nicht leer sein. Gib also eine
//    Fehlermeldung aus.
// 2. analog 1.) für das Entfernen
// 3. Wenn der Nutzer die Seite neulädt, sollen alle
//    ausgewählten Items nicht gelöscht werden, sondern
//    weiterhin in der Liste bestehen. 
//    
//    Beispiel: Hat der Kunde A, B und C in den 
//    Warenkorb getan, dann soll nach 
//    dem Neuladen A, B und C im Warenkorb erscheinen.
//    Name und Preis für jedes Item.
//    
//    Tipp: Speichere JSON in der localStorage



