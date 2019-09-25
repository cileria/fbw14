// Aufgabe:
//
// Gib dem User Feedback, dass die Daten 
// noch geladen werden. Zeige, solange die Daten
// geladen werden, einen Lade-Spinner.
// Schaue mal auf https://loading.io/
const contentObj = document.getElementById('content');

// async/await-Syntax
const loadUsers = async() => {
    
    const loadingSpinner = '<img class="spinner" src="loading.gif">';
    contentObj.innerHTML = loadingSpinner;

    const result = await fetch('http://localhost:3000/users');
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