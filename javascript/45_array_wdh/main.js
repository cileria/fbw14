// https://www.goconqr.com/c/61130/course_modules/91405-more-interesting-person
// A-1 More interesting person 
// Kreiere 2 Arrays mit diversen Hobbies, die zu zwei verschiedenen Personen gehören
// Schreibe eine globale Funktion, die die Anzahl der Hobbies vergleicht und ausgibt auf der Konsole
// "John Doe ist interessanter als Jake Dack"


// Siehe im Slack von Hans

// https://www.goconqr.com/c/61130/course_modules/91410-candidate-trainer-problem
// A-2 Candidate trainer
// Stellt euch vor ihr seid der Manager einer Schule, die 5 Themen unterrichtet
// Mathematik, Wissenschaft, Geschichte, Geographie und Programmierung
// Für die ersten 4 Themen habt ihr bereits Lehrer gefunden, die das unterrichten können und jetzt sucht 
// Ihr aktiv nach einem neuen Lehrer für die Programmierstelle !!!
// Als erstes kreiert ein Objekt, das die Themen als Keys und die Namen der Lehrer als Strings beinhaltet
// Dann kreire eine Methode innerhalb des Objekts, die 2 Arrays akzeptiert.
// Das 1. und 2. Element von diesem Array sollte immer den Vor- und Nachnamen des Kandidaten beinhalten, z.B.:
// const  Joe = ['John Maria', 'Doe' , 'PHP', 'Ruby'];
// const Jane = ['Jane Lydia', 'Doe', 'Python', 'Java', 'C'];
// Die Methode soll vergleichen, wer mehr Programmiersprachen kann und soll dessen Namen 
// dann in die fünfte Position des Objekts schreiben (unter den Themen mit dem jeweiligen Lehrern).

// Siehe Almas Lösung auf Slack 

// https://www.goconqr.com/c/61130/course_modules/91420-test-results-problem
// A-3 Test Results problem
// Stellt euch vor ihr seid ein Lehrer und habt einen Test mit eurer Klasse gemacht und folgende Ergebnisse:
// Bei dem Test kann man zwischen 1 und 100 Punkten erreichen
// Euer Testergebnis lautet: 78, 82, 45, 69, 23, 91, 55, 39, 66, 60.
// Alle Schüler mit mindestens 50 Punkten haben bestanden!
// Bitte berechnet wieviele Prozent bestanden haben und wieviele nicht
// BONUS: Map oder Reduce Funktion benutzen :D 

// Siehe Holgers Lösung im Slack


let myArray = [1, 2, 3];

console.log(myArray);

myArray.forEach(function (value, index, hupfidupfiarray) {
    hupfidupfiarray[index] = value * 2;
});

console.log(myArray); // [2,4,6]

let myFood = ['cow', 'potato', 'chicken', 'corn', 'dog'];
let cookedFood = [];
myFood.map(function (value) {
    switch (value) {
        case 'cow':
            cookedFood.push('Hamburger');
            break;
        case 'corn':
            cookedFood.push('Popcorn');
            break;
        case 'potato':
            cookedFood.push('Pommes');
            break;
        case 'chicken':
            cookedFood.push('Chicken Nuggets');
            break;
        default:
            cookedFood.push('kann nicht kochen');
    }
});
console.log(cookedFood);

let vegetarianFood = cookedFood.filter(function (value) {
    switch (value) {
        // weitere vegetarische Gerichte hinzufügen
        case 'Popcorn':
            //return value; kann man weglassen 
        case 'Pommes':
            return value;
        default:
            break;
    }
});

console.log(vegetarianFood);

let output = cookedFood.reduce(function() {
    return 'shit';
});

console.log(output);
