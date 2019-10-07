// Aufgabe:
//
// Gib dem User Feedback, dass die Daten 
// noch geladen werden. Zeige, solange die Daten
// geladen werden, einen Lade-Spinner.
// Schaue mal auf https://loading.io/
const contentObj = document.getElementById('content');

// async/await-Syntax
const loadUsers = async(search) => {
    
    const loadingSpinner = '<img class="spinner" src="loading.gif">';
    contentObj.innerHTML = loadingSpinner;

    const result = await fetch('http://localhost:3000/users' + (search ? '?q=' + search : ''));
    const data = await result.json();

    console.log(data);
    // Aufgabe:
    // 
    // Basierend auf diesen Daten,
    // baue die Tabelle auf.
    let table = `
        <table class="allusers">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
    `;

    for(user of data) {
        table += `
            <tr onclick="showUser('${user.id}')">
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
            </tr>
        `;
    }
    table += `</table>`; 

    contentObj.innerHTML = table;
}

loadUsers();

const showUser = async (id) => {
    
    const result = await fetch(`http://localhost:3000/userdetail/${id}`);
    const data = await result.json();

    const profile = 
    `<div class="profile">
        <div class="profile-pic">
            <img src="${data.profilePic}" />
        </div>
        <div class="profile-description">
            <h3>${data.name}</h3>
            <table class="userdetails">
                <tr>
                    <td>Id:</td>
                    <td>${data.id}</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>${data.email}</td>
                </tr>
                <tr>
                    <td>Description:</td>
                    <td>${data.description}</td>
                </tr>
            </table>
        </div>
    </div>`;

    contentObj.innerHTML = profile;
}

const showSearch = () => {
    const search = `
        <div class="search">
            <div>
                <input id="searchbox" type="text" placeholder="Suchbegriff eingeben..." />
            </div>
            <div>
                <button onClick="search()">Suchen</button>
            </div>
        </div>`;

    contentObj.innerHTML = search;   
}

const showAddUser = () => {
    const adduser = `<div class="adduser">
            <div class="adduser-form">
                <div class="adduser-left">
                    <input type="text" id="nameInput" placeholder="Name here" />
                    <input type="text" id="emailInput" placeholder="Email here" />
                    <textarea id="descriptionInput" placeholder="Description"></textarea>
                </div>
                <div class="adduser-right">
                    <input type="text" id="fileInput" placeholder="Filename here" />
                </div>
            </div>
            <div id="addUserBtn" class="adduser-btn">
                <button>Nutzer erstellen</button>
            </div>
        </div>`;

    contentObj.innerHTML = adduser;

    const addUserBtnObj = document.getElementById('addUserBtn');

    addUserBtnObj.onclick = async () => {
        
        const nameInputObj = document.getElementById('nameInput');
        const emailInputObj = document.getElementById('emailInput');

        const descriptionInputObj = document.getElementById('descriptionInput');

        const fileInputObj = document.getElementById('fileInput');

        if(!(nameInputObj.value.length > 0 && emailInputObj.value.length > 0 && descriptionInputObj.value.length > 0 && fileInputObj.value.length > 0)){
            alert('Alle Felder müssen ausgefüllt sein.');
            return;
        }

        const emailSplit = emailInputObj.value.split('@');

        if(emailSplit.length !== 2) {
            alert('Email-Adresse ungültig.');
            return;
        }

        let body = {
            name: nameInputObj.value,
            email: emailInputObj.value,
            description: descriptionInputObj.value,
            profilePic: fileInputObj.value
        };

        try {
            const response = await fetch('http://localhost:3000/users',
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify(body)
                });
            // falls http-antwort 200 oder 304 war 
            if(response.ok) {
                // 2. das objekt als json interpretieren -> wir bekommen ein objekt
                const responseJson = await response.json();
                // 3. als string darstellen
                const responseStr = JSON.stringify(responseJson);
                loadUsers();
            }
        }
        catch (e) {
            console.log('Error: ' + e); 
        }      
    }

}

const search = () => {
    const searchboxObj = document.getElementById('searchbox');

    if(searchboxObj.value.length === 0) {
        alert('Sie müssen etwas eingeben!');
        return;
    }

    loadUsers(searchboxObj.value);
}