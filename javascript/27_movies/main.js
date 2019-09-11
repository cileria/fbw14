// Erstellt Variable mit einem Array aller Listenelemente
let liste = document.querySelectorAll('li');

// Erstellt Variable mit einem Array aller Sektionselemente
let movies = document.querySelectorAll('section');

// Funktion, prüft für das ganze Array ob die Klasse vorhanden ist
// und entfernt diese Klasse dann
let checkAndRemoveClass = function (array, classToCheck) {
    for (let k = 0; k < array.length; k++) {
        // Contains: ob ein bestimmter String vorhanden ist
        //if (array[k].classList.contains(classToCheck)) {
            array[k].classList.remove(classToCheck);
        //}
    }
}

// Schleife über die Navigations Liste
for (let i = 0; i < liste.length; i++) {
    // Fügt einen Wachhund hinzu pro Navigationselement
    // wenn geklickt wird
    liste[i].addEventListener('click', function (event) {
        // löscht active Klasse aus den Movies
        checkAndRemoveClass(movies, 'active');
        // löscht selected Klasse aus allen Listelementen
        checkAndRemoveClass(liste, 'selected');
        // fügt auf das geklickte Element selected hinzu
        liste[i].classList.add('selected');
        // fügt auf den ausgewählten Film die Klasse active hinzu
        movies[i].classList.add('active');
    });
};