// Destructuring: Wir extrahieren Values aus Arrays oder Objekten

let array = [1, 2];
// let array = [1, 2, 3];

// let a = array[0];
// let b = array[1];

let [a, b] = array; // neue syntax
// let [a, ,b] = array; // neue syntax

console.log(a, b);

let obj = {
    p: 5,
    q: 6
}

// let p = obj.p;
// let q = obj.q;

// die variablen-namen müssen gleich den keys sein
let {p, q} = obj;
console.log(p, q);

// Aufgabe:
// 
// Gegeben sei das folgende Objekt:

let user = {
    email: 'gonzo@gmail.com',
    id: 102,
    addresses: [
        { street: 'Mainstreet 1', postal: 12345, city: 'Berlin' }, // address1
        { street: 'Heavenway 5', postal: 45678, city: 'Hamburg' }
    ],
    phone: '49-12345678'
};

// 1) Analysiere das Objekt
// 2) Speichere die Straße der ersten Adresse in einer Variable namens "street". Versuche, dabei NUR Destructuring zu verwenden.

// let [address1] = user.addresses;
// let [{street}] = user.addresses;
let {addresses} = user;
let [{street}] = addresses;

console.log(street);