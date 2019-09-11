var points = [40, 1, 100, 5];

// points.sort();
points.sort(
    function (a, b) {
        //console.log(a);
        //console.log(b);
        //console.log(b-a);
        console.log(points);
        return b - a;
    }
    // return 39 (false), -99 (true), -99 (true), -60 (true), 35 (false), -4 (true)
)
console.log(points);

let pets = ['Mooxie', 'Pickle', 'Hootchie'];

pets.forEach(function (element) { // forEach Schleife, extra für Arrays ohne index
    console.log(element);
});

let myObject = {
    // key : value Pärchen
    name: 'Martina',
    age: 35,
    city: 'Berlin'
};

for (let eigenschaft in myObject) { // for...in Schleife
    //console.log(myObject[eigenschaft]); // values only
    console.log(eigenschaft + " : " + myObject[eigenschaft]); // key: value ausgabe
}

for (let key in myObject) { // for...in Schleife 
    console.log(key); // keys only
}

// Per ID einen Button auswählen
let btn = document.getElementById('btn'); // Singular!!!
console.log(btn);

// Wir wollen eine Liste haben!!!
let list = document.getElementsByTagName('li'); // Plural
console.log(list);

btn.addEventListener('click', function (event) {
    console.log(event);
    console.log(btn.style);
    if (btn.style.background !== 'aquamarine') {
        btn.style.background = 'aquamarine';
        btn.innerText = 'Get them out of here';
        btn.style.color = 'white';
        for (let i = 0; i < list.length; i++) {
            // meistens über Listen iterieren
            console.log(list[i]);
            list[i].style.display = 'block';
        }
        //list.style.display = 'block'; // einblenden
    } else {
        btn.style.background = 'red';
        btn.innerText = 'Show favorite destinations';
        btn.style.color = 'black';
        //list.style.display = 'none'; // ausblenden
        for (let i = 0; i < list.length; i++) {
            // meistens über Listen iterieren
            console.log(list[i]);
            list[i].style.display = 'none';
        }
    }
});

// Wir holen uns die beiden HTML-Elemente
let passwordObject = document.getElementById('psw');
let checkObject = document.getElementById('chb');

// https://www.w3schools.com/jsref/prop_checkbox_checked.asp
// function check() {
//     document.getElementById('chb').checked = true;
// }

// function uncheck() {
//     document.getElementById('chb').checked = false;
// }    

checkObject.addEventListener('click', function () {
    if (this.checked) {
        passwordObject.setAttribute('type', 'text');
    } else {
        passwordObject.setAttribute('type', 'password');
    }
});

// der Body ist einfacher direkt als über die Get-Methoden zu holen
let bodyObject = document.body;
// Unser Modal Newsletter Objekt holen
let newsletterObject = document.querySelector('section');
// hier brauchen wir das x 
let closeObject = document.querySelector('span');

console.log(bodyObject);
console.log(newsletterObject);

// Verbindung zwischen Objekten und Funktion
// Methode zum Anzeigen der Newsletter Box
document.body.addEventListener('mousemove', function showNewsletterBox(event) {
    if (event.clientY < 10) {
        bodyObject.style.background = 'gray';
        //newsletterObject.style.display = 'block';
        //ich will eine klasse hinzufügen "showOff"
        newsletterObject.classList.add('showOff');
        event.currentTarget.removeEventListener('mousemove', showNewsletterBox);
    }
});

closeObject.addEventListener('click', function (event) {
    newsletterObject.classList.remove('showOff');
});