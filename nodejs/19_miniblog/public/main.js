const mainObj = document.getElementById('main');

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
            <button onclick="createPost()">Artikel erstellen</button>
        </div>`;

    mainObj.innerHTML = createblogpost;
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

loadBlogPosts();

