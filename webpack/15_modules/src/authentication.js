
export const login = async (showLoggedIn) => {
    const emailObj = document.getElementById('email');
    const passwordObj = document.getElementById('password');
    
    try {
        const response = await fetch('http://localhost:3000/login',
        {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: emailObj.value,
                password: passwordObj.value
            })
        });
        // falls http-antwort 200 oder 304 war 
        if(response.ok) {
            // 2. das objekt als json interpretieren -> wir bekommen ein objekt
            const responseObj = await response.json();
            if(responseObj.error != 0) {
                alert('Login failed!');
                
                emailObj.value = '';
                passwordObj.value = '';
                return;
            }
            
            showLoggedIn(); // baue frontend um für eingeloggten user
        }
    }
    catch (e) {
        console.log('Error: ' + e); 
    }  
}

export const signup = async (mainObj) => {
    const emailObj = document.getElementById('emailSignup');
    const passwordObj = document.getElementById('passwordSignup');
    const passwordRepeatObj = document.getElementById('passwordRepeat');
    
    if(passwordObj.value !== passwordRepeatObj.value) {
        alert('Passwörter müssen übereinstimmen!');
        return;
    }
    
    try {
        const response = await fetch('http://localhost:3000/signup',
        {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: emailObj.value,
                password: passwordObj.value
            })
        });
        // falls http-antwort 200 oder 304 war 
        if(response.ok) {
            // 2. das objekt als json interpretieren -> wir bekommen ein objekt
            const responseObj = await response.json();
            if(responseObj.error != 0) {
                alert('Signup failed!');
                
                emailObj.value = '';
                passwordObj.value = '';
                passwordRepeatObj.value = '';
                return;
            }
            
            const thanksForSignup = `
            <h2 class="thanks">Danke für Ihre Registrierung. In Kürze wird eine Email an ${emailObj.value} geschickt!</h2>
            `;
            
            mainObj.innerHTML = thanksForSignup;
        }
    }
    catch (e) {
        console.log('Error: ' + e); 
    }  
    
}

const logout = async (showLoggedOut) => {
    try {
        const response = await fetch('http://localhost:3000/logout',
        {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' }
        });
        if(response.ok) {
            const responseObj = await response.json();
            if(responseObj.error != 0) {
                alert('Logout failed!');
                return;
            }
            
            showLoggedOut();
        }
    }
    catch (e) {
        console.log('Error: ' + e); 
    }      
}