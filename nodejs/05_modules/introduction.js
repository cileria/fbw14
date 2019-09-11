const intro = (userInfo) => {
    console.log(`
        Hi, mein Name ist ${userInfo.firstname} ${userInfo.lastname} und meine Email ist ${userInfo.email}. Ich wurde geboren im Jahre ${userInfo.birthYear} nach Christi.
    `);
}

module.exports = intro;