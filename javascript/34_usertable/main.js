const adduserObj = document.getElementById('adduser');
const nameObj = document.getElementById('name');
const emailObj = document.getElementById('email');
const usertableObj = document.getElementById('usertable');

// emailObj wird immer
// document.getElementById bleiben
//
// passiert NIEMALS:
// emailObj = null; // NICHT OKAYzuweisung
// emailObj = 3;
//
// emailObj.x = 3 // OK, mutation

let user = [];

if (localStorage.getItem('user') !== null) {
    user = JSON.parse(localStorage.getItem('user'));

    for (let i = 0; i < user.length; i++) {
        addUser(user[i].name, user[i].email, user[i].id);
    }
}

function randomString(length) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz1234567890';
    const alphaArray = alpha.split('');
    let str = '';
    for (let i = 0; i < length; i++) {
        str += alphaArray[Math.floor(Math.random() * alpha.length)];
    }

    return str;
}

function addUser(name, email, id) {

    const newTr = document.createElement('tr');
    const newTdName = document.createElement('td');
    const newTdEmail = document.createElement('td');
    const newTdId = document.createElement('td');

    newTdName.innerText = name;
    newTdEmail.innerText = email;
    newTdId.innerText = id;

    newTr.appendChild(newTdName);
    newTr.appendChild(newTdEmail);
    newTr.appendChild(newTdId);
    newTr.setAttribute('data-id', id);

    // X button erstellen
    const newXBtn = document.createElement('button');
    newXBtn.innerText = 'X';
    newXBtn.onclick = function () {
        const trToDelete = document.querySelector(`[data-id="${id}"]`);
        trToDelete.remove();

        for (let i = 0; i < user.length; i++) {
            if (user[i].id === id) {
                user.splice(i, 1);
                break;
            }
        }

        localStorage.setItem('user', JSON.stringify(user));
    }
    newTdBtn = document.createElement('td');
    newTdBtn.appendChild(newXBtn);
    newTr.appendChild(newTdBtn);

    usertableObj.appendChild(newTr);


}

adduserObj.onclick = function () {
    const id = randomString(12);

    user.push({
        name: nameObj.value,
        email: emailObj.value,
        id: id
    });

    // konvertieren das user array in einen string
    let userJSON = JSON.stringify(user);

    // den string im localstorage speichern
    localStorage.setItem('user', userJSON);

    addUser(nameObj.value, emailObj.value, id);
}