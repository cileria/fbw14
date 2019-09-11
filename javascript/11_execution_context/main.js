let name = 'steffi';

function first() {
    let greeting = 'hallo ';
    let x = greeting + name;

    second();
    console.log(x);
}

function second() {
    let greeting = 'hi ';
    let x = greeting + name;

    third();
    console.log(x);
}

function third() {
    let greeting = 'hey ';
    let x = greeting + name;

    console.log(x);
}
first();
// hey steffi
// hi steffi
// hallo steffi