// Aufgabe:
//
// 1) Konvertiere alle Funktionen dieses Codes in Arrow-Functions.
//
// 2) Baue alle XMLHttpRequest-Aufrufe in fetch-Aufrufe um.
//    Verwende dabei die neue AsyncAwait-Syntax.
// Aufgabe:
//
// 1) Konvertiere alle Funktionen dieses Codes in Arrow-Functions.
//
// 2) Baue alle XMLHttpRequest-Aufrufe in fetch-Aufrufe um.
//    Verwende dabei die neue AsyncAwait-Syntax.

const btnShowUsersObj = document.getElementById('btnShowUsers');
const btnAddUserObj = document.getElementById('btnAddUser');
const btnNewCommentObj = document.getElementById('btnNewComment');
const btnShowCommentsObj = document.getElementById('btnShowComments');
const btnAddCommentObj = document.getElementById('btnAddComment');
const containerObj = document.getElementById('container');
const btnNewUserObj = document.getElementById('btnNewUser');
const adduserObj = document.getElementById('adduser');
const addcommentObj = document.getElementById('addcomment');

// DRY - Dont repeat yourself
// Aufgabe:
//
// Schreibe eine Funktion createTable(field1, field2, field3, field4, data)
// die eine Tabelle erzeugt mit dem Tabellenkopf aus field1, field2, field,3, field4. 
// Der fünfte Parameter data soll gleichd dem responseText des XMLHttpRequest-Objects sein.

const createTable = (field1, field2, field3, field4, data) => {
    // Aufgabe:
    //
    // Basierend auf den Daten, baue eine Tabelle.

    const tableObj = document.createElement('table');
    const trObj = document.createElement('tr');
    const th1Obj = document.createElement('th');
    const th2Obj = document.createElement('th');
    const th3Obj = document.createElement('th');
    const th4Obj = document.createElement('th');

    th1Obj.innerText = field1;
    th2Obj.innerText = field2;
    th3Obj.innerText = field3;
    th4Obj.innerText = field4;

    trObj.appendChild(th1Obj);
    trObj.appendChild(th2Obj);
    trObj.appendChild(th3Obj);
    trObj.appendChild(th4Obj);

    tableObj.appendChild(trObj);

    containerObj.innerText = '';

    const responseObj = JSON.parse(data);

    // älterer iterator
    // for(let i=0; i<responseObj.length; i++) {
    //     console.log( responseObj[i].name );
    // }

    // neuerer iterator für arrays
    for (let e of responseObj) {
        const trNewObj = document.createElement('tr');

        const td1Obj = document.createElement('td');
        const td2Obj = document.createElement('td');
        const td3Obj = document.createElement('td');
        const td4Obj = document.createElement('td');

        td1Obj.innerText = e[field1]; // key interpolation -> obj['key']
        td2Obj.innerText = e[field2];
        td3Obj.innerText = e[field3];
        td4Obj.innerText = e[field4];

        trNewObj.appendChild(td1Obj);
        trNewObj.appendChild(td2Obj);
        trNewObj.appendChild(td3Obj);
        trNewObj.appendChild(td4Obj);

        tableObj.appendChild(trNewObj);
    }

    containerObj.appendChild(tableObj);
}

btnShowUsersObj.onclick = async () => {

    adduserObj.style.display = 'none';
    addcommentObj.style.display = 'none';

    // X
    // let url = 'http://cileria.com:3050/users';
    // const xhr = new XMLHttpRequest();
    // xhr.open('GET', url);
    // xhr.onload = function () {
    //     if (xhr.status === 200) {
    //         createTable('_id', 'name', 'username', 'email', xhr.responseText);
    //     } else {

    //     }
    // }
    // xhr.send();

    const response = await fetch('http://cileria.com:3050/users');
    const responseJson = await response.json();
    const responseStr = JSON.stringify(responseJson);

    createTable('_id', 'name', 'username', 'email', responseStr);

    console.log(responseStr);
}

btnShowCommentsObj.onclick = async () => {

    adduserObj.style.display = 'none';
    addcommentObj.style.display = 'none';

    // Aufgabe: Baue eine Tabelle auf Basis
    // der comments-Daten

    // X
    // const xhr = new XMLHttpRequest();
    // xhr.open('GET', url);
    // xhr.onload = function () {
    //     if (xhr.status === 200) {
    //         createTable('_id', 'name', 'email', 'body', xhr.responseText);
    //     } else {
    //     }
    // }
    // xhr.send();

    let url = 'http://cileria.com:3050/comments';
    const response = await fetch(url);
    const responseJson = await response.json();
    const responseStr = JSON.stringify(responseJson);
    createTable('_id', 'name', 'email', 'body', responseStr);
}

btnAddUserObj.onclick = () => {
    containerObj.innerText = '';
    adduserObj.style.display = 'flex';
    addcommentObj.style.display = 'none';
}

btnAddCommentObj.onclick = () => {
    containerObj.innerText = '';
    adduserObj.style.display = 'none';
    addcommentObj.style.display = 'flex';
}

btnNewUserObj.onclick = async () => {

    const nameObj = document.getElementById('name');
    const newName = nameObj.value;

    const usernameObj = document.getElementById('username');
    const newUsername = usernameObj.value;

    const emailObj = document.getElementById('email');
    const newEmail = emailObj.value;

    if (newName.length === 0) {
        alert('Name darf nicht leer sein!');
        return;
    }

    if (newUsername.length === 0) {
        alert('Username darf nicht leer sein!');
        return;
    }

    if (newEmail.length === 0) {
        alert('Email darf nicht leer sein!');
        return;
    }

    // X
    // let url = 'http://cileria.com:3050/users';
    // const xhr = new XMLHttpRequest();
    // xhr.open('POST', url);
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.onload = function () {
    //     if (xhr.status === 200) {
    //         alert('User angelegt.')
    //     }
    //     else {
    //         alert('Unerwarteter Fehler! Bitte den Systemadministrator anrufen! 030/3843823');
    //     }
    // }

    // xhr.send(JSON.stringify(body));

    let body = {
        name: newName,
        username: newUsername,
        email: newEmail
    };

    try {
        const response = await fetch('http://cileria.com:3050/users',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(body)
            });
        
        if(response.ok) {
            alert('User ist angelegt.');
        }
    }
    catch (e) {
        console.log('Error: ' + e); 
    }
}

btnNewComment.onclick = async () => {

    const nameObj = document.getElementById('commentname');
    const newName = nameObj.value;

    const emailObj = document.getElementById('commentemail');
    const newEmail = emailObj.value;

    const commentObj = document.getElementById('commenttext');
    const newComment = commentObj.value;

    if (newName.length === 0) {
        alert('Name darf nicht leer sein!');
        return;
    }

    if (newEmail.length === 0) {
        alert('Email darf nicht leer sein!');
        return;
    }

    // X
    // let url = 'http://cileria.com:3050/comments';
    // const xhr = new XMLHttpRequest();
    // xhr.open('POST', url);
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.onload = function () {
    //     if (xhr.status === 200) {
    //         alert('Comment wurde erstellt.')
    //     }
    //     else {
    //         alert('Unerwarteter Fehler! Bitte den Systemadministrator anrufen! 030/3843823');
    //     }
    // }

    let body = {
        name: newName,
        email: newEmail,
        body: newComment
    };

    // xhr.send(JSON.stringify(body));
    try {
        const response = await fetch('http://cileria.com:3050/comments',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json' // im key darf kein operator drin sein, deshalb muss der key als string definiert werden
                },
                method: 'POST',
                body: JSON.stringify(body)
            });
        
        if(response.ok) {
            alert('Comment ist erstellt.');
        }
    }
    catch (e) {
        console.log('Error: ' + e); 
    }    
}