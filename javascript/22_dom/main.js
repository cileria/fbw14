const halloWorldObj = document.getElementById('halloworld'); // halloWorldObj connected JS mit dem HTML Button

const allesRotObj = document.getElementById('allesrot');

// onclick Methode überschreiben
halloWorldObj.onclick = function() {
    alert('hallo world');
}

allesRotObj.onclick = function() {
    // wir erstellen object für content div
    // damit wir mit JS das html verändern können
    const contentObj = document.getElementById('content');
    contentObj.style.backgroundColor = 'rgb(255, 0, 0)';
}

// Aufgabe:
//
// 1. Ändere den Titel des Buttons wo draufsteht "Alles Blau" zu "Alle Paragraphen blau" -> im HTML.
// 2. Füge ein neues Click-Event zu diesem Button hinzu.
//    Dafür hole Dir vorher den Button in den JS-Code.
// 3. Wenn der Nutzer auf den Button clickt, sollen alle
//    Paragraphen blau werden. Nutze dafür die Methode
//    getElementsByClassName. Nutze auch Google, um
//    Dir die Funktionswiese dieser Methode gefügig zu machen.

// ich hole mir die verbindung zum html (dom)
const allesBlauObj = document.getElementById('allesblau');

allesBlauObj.onclick = function() {
    // alle paragraphen mit class = blogeintrag
    // ausgewählt 
    const alleParaObj = document.getElementsByClassName('blogeintrag');

    for(let i=0; i<alleParaObj.length; i++) {
        alleParaObj[i].style.backgroundColor = 'blue';
    }
}

const neuerBlogEintragObj = document.getElementById('neuerblogeintrag');

neuerBlogEintragObj.onclick = function() {

    // wir erstellen hier ein neues
    // p-Element
    const newParagraph = document.createElement('p');
    newParagraph.className = 'blogeintrag';
    newParagraph.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora cupiditate sequi necessitatibus possimus
    odit earum!`;

    // wir holen das content Div 
    // in den JS code
    const contentObj = document.getElementById('content');

    // wir hängen den neuen Paragraphen
    // an den content Div dran
    contentObj.appendChild(newParagraph);
}

// Aufgabe:
//
// 1. Erstelle einen neuen Button "Neuer Zufallsparagraph"
//    Erstelle den Button direkt im HTML.
// 2. Wenn der Nutzer auf den Button klickt,
//    soll ein neuer Paragraph erstellt werden.
// 2a. Der Inhalt des Paragraphen soll aus
//     20 zufällig ausgewählten Wörtern bestehen.
//     Lege dafür ein Array an, das aus 20 Wörtern
//     besteht -> Wörter Deiner Wahl.
//     
//     Bsp mit 5 Wörtern:
//     array = ['hallo', 'world', 'wie', 'geht', 'es'];
//      
//     -> hallo wie es geht world
//     -> wie geht es hallo world
// 2b. Die Hintergrundfarbe des Parapgraphen soll //
//     ebenfalls zufällig ausgewählt werden. Bedenke 
//     hierbei, dass eine Hintergrundfarbe aus 
//     folgendem String aufgebaut werden kann.
//     Bsp-Code:
//     beispielObj.style.backgroundColor = 'rgb(255,
//     144,230);
//
// 3. (Fortgeschritten) 
//     Erstelle einen neuen Button "Paragraph entfernen",
//     der den letzten Paragraphen entfernt. Benutze dafür
//     Google. Wenn kein Paragraph mehr zum Entfernen da 
//     ist, soll ein Alert ausgegeben werden "Alle //   
//     Paragraphen wurden entfernt".

// 2 + 3
const neuerParagraphObj = document.getElementById('neuerparagraph');
neuerParagraphObj.onclick = function() {
    // wir erstellen hier ein neues
    // p-Element
    const newParagraph = document.createElement('p');
    newParagraph.className = 'blogeintrag';
    
    const lorem20 = `Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptates nesciunt modi voluptas commodi Perspiciatis consectetur fugiat eum amet quas qui`;

    // content generieren
    const wordsArray = lorem20.split(' ');
    let str = '';
    // str += wordsArray[Math.floor(Math.random() * 20)];
    // str += wordsArray[Math.floor(Math.random() * 20)];
    // str += wordsArray[Math.floor(Math.random() * 20)];
    // str += wordsArray[Math.floor(Math.random() * 20)];
    for(let i=0; i<wordsArray.length; i++) {
        // i wird nicht benutzt 
        str += wordsArray[Math.floor(Math.random() * 20)] + ' ';
    }
    newParagraph.innerHTML = str;
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    newParagraph.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    // wir holen das content Div 
    // in den JS code
    const contentObj = document.getElementById('content');

    // wir hängen den neuen Paragraphen
    // an den content Div dran
    contentObj.appendChild(newParagraph);    
}

const entferneParagraphObj = document.getElementById('entferneparagraph');
entferneParagraphObj.onclick = function() {
    // ich wähle ein element aus
    var paragraphen = document.querySelectorAll('p');
    if(paragraphen.length > 0) {
        // lösche ich das ausgewählte element
        paragraphen[paragraphen.length - 1].remove();
    }
    else {
        alert('Alle Paragraphen bereits gelöscht.');
    }
}