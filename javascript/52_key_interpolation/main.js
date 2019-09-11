// `

let obj = {
    x: 1,
    name: 'jan',
    123: 456 
};

obj.x = 5;
obj.name = 10;
// key interpolation
// obj.123 = 458; // syntax error
obj[123] = 458; // geht, wenn key eine zahl
obj['123'] = 458;

console.log(obj);

// object iterator
for(key in obj) {
    // key ist ein string, der den key des akutell betrachtenden
    // key/value paares als string darstellt
    console.log(
        `key = ${key}, value = ${obj[key]}`    
    );
}


let obj2 = {
    key1: 1,
    key2: 5,
    key3: -15,
    key4: 'Banane'
};

for(k in obj2) {
    console.log(obj2[k]);
}

// Aufgabe:
//
// Erstelle eine Funktion addKeyValue die 3 Parameter entgegen nimmt:
// o, newKey und value. addKeyValue soll ein neues Key-Value-Paar 
// zu o hinzufügen mit dem Key "newKey" und dem Value "value". 
// Falls das Key-Value-Paar schon existiert, dann soll addKeyValue
// das Original o zurückgeben. Falls nicht, dann wird das neue Key-Value-Paar
// hinzugefügt.

const addKeyValue = (o, newKey, value) => {
    for(k in o) {
        if(k === newKey) return o;
    }

    o[newKey] = value;
    return o;
}

obj = addKeyValue(obj, 'x', 2);
// obj ?