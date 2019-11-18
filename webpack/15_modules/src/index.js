import './index.html';
import './style.css';

import { login, signup, logout } from './authentication';

const mainObj = document.getElementById('main');
const navCreatePostObj = document.getElementById('navCreatePost');
const navLoadArticleObj = document.getElementById('navLoadArticle');
const navPipeObj = document.getElementById('navPipe');
const navLogoutObj = document.getElementById('navLogout');
const navLoginObj = document.getElementById('navLogin');
const navSignupObj = document.getElementById('navSignup');
const navPipeSignupObj = document.getElementById('navPipeSignup');

//
// import * as domObjects from './domObjects';
//
// würde erfordern:
// domObjects.mainObj.innerHTL = '...';

const loadBlogPosts = async () => {

    const result = await fetch('http://localhost:3000/blogposts');
    const blogpostsArray = await result.json();
    
    let blogposts = `<div class="blogposts">`;
    
    for(let i=0; i<blogpostsArray.length; i++) {
        blogposts += `<div class="blogpost">
        <h2 class="blog-header">${blogpostsArray[i].title}</h2>
        <div class="blog-body">${blogpostsArray[i].content}
        </div>
        </div>`;
    }
    blogposts += `</div>`;
    mainObj.innerHTML = blogposts;
}

const loadCreateBlogPost = () => {
    const createblogpost = `<div class="new-blogpost">
    <input type="text" placeholder="Blog-Titel eingeben" id="title" />
    <textarea rows="10" id="content"></textarea>
    <button id="btnCreateArticle">Artikel erstellen</button>
    </div>`;
    
    mainObj.innerHTML = createblogpost;
    const btnCreateArticleObj = document.getElementById('btnCreateArticle');
    btnCreateArticleObj.onclick = createPost;
}

const createPost = async () => {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    
    if(!(title.length > 0 && content.length > 0)) {
        alert('Bitte Titel und Content eingeben!');
        return;
    }
    
    try {
        const response = await fetch('http://localhost:3000/blogpost',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                title: title,
                content: content
            })
        });
        // falls http-antwort 200 oder 304 war 
        if(response.ok) {
            // 2. das objekt als json interpretieren -> wir bekommen ein objekt
            const responseJson = await response.json();
            // 3. als string darstellen
            const responseStr = JSON.stringify(responseJson);
            loadBlogPosts();
        }
    }
    catch (e) {
        console.log('Error: ' + e); 
    }     
}

const loadLogin = () => {
    const loginHtml = `
    <div class="blogposts login">
    <input type="text" placeholder="email" id="email" />
    <input type="password" placeholder="password" id="password" />
    <button id="btnLogin">Login</button>
    </div>`;
    
    mainObj.innerHTML = loginHtml;
    const btnLoginObj = document.getElementById('btnLogin');
    btnLoginObj.onclick = login.bind(this, showLoggedIn);
}

const loadSignup = () => {
    const signupHtml = `
    <div class="blogposts signup">
    <input type="text" placeholder="email" id="emailSignup" />
    <input type="password" placeholder="password" id="passwordSignup" />
    <input type="password" placeholder="password repeat" id="passwordRepeat" />
    <button id="btnSignup">Jetzt registrieren</button>
    </div>`;
    
    mainObj.innerHTML = signupHtml;
    const btnSignupObj = document.getElementById('btnSignup');
    btnSignupObj.onclick = signup.bind(this, mainObj);
}

const showLoggedIn = () => {
    localStorage.setItem('loggedIn', '1');
    navCreatePostObj.style.display = 'inline-block';
    navPipeObj.style.display = 'inline-block';
    navLoginObj.style.display = 'none';
    navLogoutObj.style.display = 'inline-block';
    navSignupObj.style.display = 'none';
    navPipeSignupObj.style.display = 'none';
    loadBlogPosts();
}

const showLoggedOut = () => {
    localStorage.setItem('loggedIn', '0');
    navCreatePostObj.style.display = 'none';
    navPipeObj.style.display = 'none';
    navLoginObj.style.display = 'inline-block';
    navSignupObj.style.display = 'inline-block';
    navLogoutObj.style.display = 'none';
    navPipeSignupObj.style.display = 'inline-block';
    loadBlogPosts();    
}


navLoginObj.onclick = loadLogin;
navSignupObj.onclick = loadSignup;
navLogoutObj.onclick = logout.bind(this, showLoggedOut);

navLoadArticleObj.onclick = loadBlogPosts;
navCreatePostObj.onclick = loadCreateBlogPost;


// query parameter auslesen
const urlParams = new URLSearchParams(window.location.search);
const activated = urlParams.get('activated');

if(activated && activated.length > 0) {
    localStorage.setItem('loggedIn', '1');
}

// beim laden schaue ich, ob user eingeloggt ist
const loggedIn = localStorage.getItem('loggedIn');
// beim ersten seitenaufruf, kann ich nicht eingeloggt sein,
// dann wird der eintrag im localstorage gesetzt
if(loggedIn === null) {
    localStorage.setItem('loggedIn', '0');
    showLoggedOut();
}
else {
    if(loggedIn == '1') {
        showLoggedIn();
    }
    else { // '0', 'null'
        showLoggedOut();
    }
}

let timerId = null;

const restartTimer = () => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
        console.log('inaktiv - session wird ausgeloggt')
        showLoggedOut()
    }, 
    // 1000*60*5); // 5 minuten
    1000*31);    
}

addEventListener('click', () => {
    console.log('click passiert! - timer wird neugestartet');
    restartTimer();    
});

addEventListener('keydown', () => {
    console.log('keydown passiert! - timer wird neugestartet');
    restartTimer();    
});