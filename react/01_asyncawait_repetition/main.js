// Aufgabe:
//
// Wenn der Nutzer auf Count to 5 - Callbacks
// klickt, sollen die Zahlen 1 bis 5
// mit 1-sekündigen Abstand als h1 element
// dem numbers-div hinzugefügt werden.
// 
// Tipp: benutze setTimeout
const numbersObj = document.getElementById('numbers');
let count = 1;

const countdownCallbacks = () => {
    setTimeout(
        // callback funktion, die aufgerufen wird,
        // wenn event vorbei ist
        () => {
            numbersObj.innerHTML += '<h1>1</h1>';
            setTimeout(
                () => {
                    numbersObj.innerHTML += '<h1>2</h1>';
                    setTimeout(
                        () => {
                            numbersObj.innerHTML += '<h1>3</h1>';
                            setTimeout(
                                () => {
                                    numbersObj.innerHTML += '<h1>4</h1>';
                                    setTimeout(
                                        () => {
                                            numbersObj.innerHTML += '<h1>5</h1>';
                                        },
                                        1000
                                    )
                                },
                                1000
                            )
                        },
                        1000
                    )
                },
                1000
            )
        },
        1000 // 1 sek
    )
}

// promise
const countdownPromise = () => {
    return new Promise((resolve, rejected)=> {
        setTimeout(
            () => {
                // hier ist der Promise resolved
                numbersObj.innerHTML += `<h1>${count}</h1>`;
                count++;
                resolve(); 
            },
            1000
        )
    });
}

const countdownPromises = () => {
    countdownPromise()
    .then( countdownPromise ) // returned den promise, der als parameter übergeben wurde
    .then( countdownPromise )
    .then( countdownPromise )
    .then( countdownPromise )
    .then( countdownPromise )
    
    // = promise chaining
}

const countdownAsyncAwait = async ()  => {
    await countdownPromise();
    // ...
    await countdownPromise();
    await countdownPromise();
    await countdownPromise();
    await countdownPromise();
}