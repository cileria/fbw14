$(document).ready(function () { // wenn seite geladen ist
    console.log(jQuery.fn.jquery); // version


    $('button').on({
        mouseenter: function () {
            $(this).text('Welcome! Stay here forever!')
                .css({ // Kurzschreibweise um mehr auf einmal zu ändern
                    'width': 500,
                    'background': 'red'
                })
                .attr('type', 'reset')
                .addClass('active');
        },
        mouseleave: function () {
            $(this).text('Don\'t go please!') // Ändern des Textes
                .toggleClass('active');  // nur hinzufügen wenn fehlt, sonst entfernen
            console.log($(this).css('background')); // Ausgabe der CSS Eigenschaft
            console.log($(this).css('width'));
        }
    });

});