// Aufgabe:
//
// Gib dem User Feedback, dass die Daten 
// noch geladen werden. Zeige, solange die Daten
// geladen werden, einen Lade-Spinner.
// Schaue mal auf https://loading.io/

// async/await-Syntax
const loadUsers = async() => {
    
    const contentObj = document.getElementById('content');
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
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
            </tr>
        `;
    }
    table += `</table>`; 

    contentObj.innerHTML = table;
}

// loadUsers();
