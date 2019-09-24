// async/await-Syntax
const loadUsers = async() => {
    const result = await fetch('http://localhost:3000/users');
    const data = await result.json();

    console.log(data);
    // Aufgabe:
    // 
    // Basierend auf diesen Daten,
    // baue die Tabelle auf.
    let table = `
        <table>
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

    const contentObj = document.getElementById('content');
    contentObj.innerHTML = table;
}

loadUsers();