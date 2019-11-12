require('./style.scss');
// const sum = require('./math'); // CommonJS import
import sum from './math'; // ES6 import
import { 
    alphabet, 
    randomstring 
} from './myRandomstring';

console.log(alphabet);

// alert('Hallo World - Live Reload 123');
const sayHallo = () => {
    console.log(`Hallo World`);
}

console.log( randomstring(20) );
sayHallo();
console.log( sum(1, 3) );

// dom manipulation
const mainObj = document.getElementById('main');
mainObj.innerHTML = '<h1>Greta von Thunberg</h1>';



