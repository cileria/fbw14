// JSON laden 2 möglichkeiten
// 1. möglichkeit -> fs.readFile
const fs = require('fs');

const data = fs.readFileSync('./users.json');

const dataObj = JSON.parse(data);
console.log( dataObj[1].name );

// 2. möglichkeit -> require
const users = require('./users.json');

for(user of users) {
    console.log(user.name);
}

