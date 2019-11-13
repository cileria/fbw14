
export const alphabet = 'abcdefghijklmnopqrstuvwxyz';

export const randomstring = (n) => {
    let res = '';
    for(let i=0; i<n; i++) {
        res += alphabet[Math.floor( Math.random() * alphabet.length)];
    }

    return res;
}

// CommonJS-Äquivalent
// 
// module.exports = {
//     alphabet: alphabet,
//     randomstring: randomstring
// };

