console.log('hallo world');

function numberTable(rows, columns) {
    // leeres Array, was dann voll mit nullen zurückgegeben 
    let returnArray = [];

    for(let i=0; i<rows; i++) {
        // für jede zeile ein neues array
        returnArray[i] = [];
        for(let j=0; j<columns; j++) {
            // fülle alle spalten mit nullen ab
            returnArray[i][j] = 0;
        }
    }

    return returnArray;
}

console.log(
    numberTable(5, 5)
);

function numberTable2(rows, columns) {
    // leeres Array, was dann voll mit nullen zurückgegeben 
    let returnArray = [];

    for(let i=0; i<rows; i++) {
        // für jede zeile ein neues array
        returnArray[i] = [];
        for(let j=0; j<columns; j++) {
            // fülle alle spalten mit nullen ab
            returnArray[i][j] = j + 1;
        }
    }

    return returnArray;
}

console.log(
    numberTable2(5, 5)
);

function numberTable3(rows, columns) {
    // leeres Array, was dann voll mit nullen zurückgegeben 
    let returnArray = [];
    let k = 0;

    for(let i=0; i<rows; i++) {
        // für jede zeile ein neues array
        returnArray[i] = [];
        for(let j=0; j<columns; j++) {
            // fülle alle spalten mit nullen ab
            returnArray[i][j] = k + 1;
            k = k + 1;
        }
    }

    return returnArray;
}

console.log(
    numberTable3(5, 5)
);