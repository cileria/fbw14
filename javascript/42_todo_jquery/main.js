// Vorher eine TABLE Element kreiren
let tableObject = document.createElement('TABLE');
// Hänge an den Body an
document.body.append(tableObject);

// Kreire ein TR Element 
let tableRowObject = document.createElement('TR');
// Hänge an den TableObject an
tableObject.append(tableRowObject);
// genausogut wie tableObject.appendChild(tableRowObject);

// Fülle mit HTML
tableRowObject.innerHTML = 'Name ID';
// Klasse mit classList
tableRowObject.classList.add('tablerow');

let myString = "I am a Web Developer!";
let h1 = document.getElementsByTagName('h1')[0];
let i = 0;

let showString = setInterval(function () {
        let spanObject = document.createElement('SPAN');
        spanObject.innerHTML = myString.charAt(i);
        h1.insertAdjacentElement('beforeend', spanObject); // rückwärts einfügen
        //h1.append(spanObject);
        i++;

        if (i > myString.length) {
                i = 0;
                h1.innerHTML = '';
                // Solange h1 noch innere Knoten hat
                //        while (h1.lastChild) {
                //            h1.removeChild(h1.lastChild);
                //        }
                //clearInterval(showString);
        }
}, 100);
// Formular 
const myFormObject = document.getElementById('myForm');
const textInputObject = document.getElementById('textInput');
const todoListObject = document.getElementById('todoList');
// On Submit wird bei Enter und Klick auf Button im Formular abgeschickt
myFormObject.onsubmit = function (event) {
        // verhindert den Reload der sonst nach Submit immer die Felder leert 
        // und den Inhalt an die Action schickt
        event.preventDefault();

        const taskItem = document.createElement('LI');
        taskItem.innerText = textInputObject.value;

        const closeButton = document.createElement('BUTTON');
        closeButton.innerText = 'x'; 
        // ALTERNATIV closeButton.innerHTML = "<button>x</button>"
        //closeButton.classList.add('close');

        closeButton.onclick = function () {
                this.parentElement.remove();
        };

        // Anhängen der Items in den DOM 
        taskItem.append(closeButton);
        todoListObject.append(taskItem);

        // Reset // Leeren des Input Felds
        textInputObject.value = '';
}