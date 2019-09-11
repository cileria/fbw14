#!/usr/bin/node

console.log('Hallo World');

console.log(`
    Mit folgenden Parametern gestartet:
    ${process.argv}
`);

for(argument of process.argv) {
    console.log(`${argument}`);
}

