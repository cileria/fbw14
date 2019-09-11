// funktion, die hallo ausgibt
function sayHallo() {
    console.log('Hallo');
}

// funktion, die hallo returned
function retHallo() {
    return 'hallo';   
}

// funktion, die eine funktion zurückgibt, die hallo ausgibt
function retSayHallo() {
    return function() { //anonyme funktion
        console.log('hallo, aus einer funktion returned');
    }
}

// aufgabe:
// führe die funktion aus, die von retSayHallo returned
// wird.
let x = retSayHallo();
x();

// kürzere schreibweise
retSayHallo()();

// closures
function doesNotDie() {
    let a = 'hallo sonne';

    return function() {
        // auf a im parent scope wird zugegriffen
        // = closure
        console.log(`hallo was? ${a}`);
    }
}

let anonymHallo = doesNotDie();
// doesNotDie ist hier gelöscht vom Speicher
anonymHallo(); // anonymHallo kann trotzdem auf a zugreifen

// aufgabe:
// 
// erstelle eine funktion counter die eine variable
// n hat (im scope von counter existiert eine variable n). 
// n ist anfangs 0. counter returned eine 
// anonyme funktion, die n um 1 erhöht und n ausgibt.
// führe die anonyme funktion 5 aus.

function counter() {
    let n = 0;
    return function() {
        n++;
        console.log(n);
    }
}

let y = counter(); // 1x counter() -> 1 closure
y(); 
y();
y();
y();
y(); 
// 5x, die anonyme funktion, die auf den selben closure
// von counter zugreift

counter()(); 
counter()();
counter()();
counter()();
counter()();
// 5x counter, wobei jedes mal, die anonyme funktion
// auf 5 unterschiedliche closures zugreift

