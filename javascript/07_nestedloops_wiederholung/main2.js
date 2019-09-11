var hallo = 'foo';

function sayHello() {
    console.log('hallo World');
}

function countThe7(array) {
    var numSevens = 0;
    for(var i=0; i<array.length; i = i + 1) {
        if(array[i] === 7) {
            numSevens++;
        }
    }
    return numSevens;
}

sayHello();

console.log(countThe7([
    1,4,7,3,7,1,7,0,-1,7
]));

var fruits = ['Apple', 'Ba na na', 'Mango', 'Grapefruit'];
fruits[0] = 'Lemon';
fruits[1] = 'Melon';

for(var i=0; i<10; i++) {
    fruits[i] = 'Pickle';
}

var fullrandom = {
    '123': 456,
    hallo: 'world',
    cars: ['bmw', 'porsche', 'tesla', 'peugeot']
}
;;;;
fullrandom['123'] = 789;
var key = 'halloooooo';
fullrandom[key] = (('wooooooooorld'));
