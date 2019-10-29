const outputObj = document.getElementById('output');

const showContent = async () => {
    const result = await fetch('http://localhost:3000/content');
    const data = await result.text();

    outputObj.innerHTML = data;
}

const showPrivate = async () => {
    const result = await fetch('http://localhost:3000/privateProfile');
    const data = await result.text();

    outputObj.innerHTML = data;
}

const login = async () => {
    const userObj = document.getElementById('user');
    const passwordObj = document.getElementById('password');

    const result = await fetch(`http://localhost:3000/login?username=${userObj.value}&password=${passwordObj.value}`);
    const data = await result.text();

    outputObj.innerHTML = data;
}

const logout = async () => {
    const result = await fetch(`http://localhost:3000/logout`);
    const data = await result.text();

    outputObj.innerHTML = data;
}
