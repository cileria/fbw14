const btnHomeObj = document.getElementById('btnHome');
const btnInfoObj = document.getElementById('btnInfo');
const btnImpressumObj = document.getElementById('btnImpressum');
const btnFaqObj = document.getElementById('btnFaq');

const homeObj = document.getElementById('home');
const infoObj = document.getElementById('info');
const impressumObj = document.getElementById('impressum');
const faqObj = document.getElementById('faq');

btnHomeObj.onclick = function() {
    homeObj.style.display = 'block';
    infoObj.style.display = 'none';
    impressumObj.style.display = 'none';
    faqObj.style.display = 'none';
}

btnInfoObj.onclick = function() {
    homeObj.style.display = 'none';
    infoObj.style.display = 'block';
    impressumObj.style.display = 'none';
    faqObj.style.display = 'none';
}

btnImpressumObj.onclick = function() {
    homeObj.style.display = 'none';
    infoObj.style.display = 'none';
    impressumObj.style.display = 'block';
    faqObj.style.display = 'none';
}

btnFaqObj.onclick = function() {
    homeObj.style.display = 'none';
    infoObj.style.display = 'none';
    impressumObj.style.display = 'none';
    faqObj.style.display = 'block';
}

// Aufgabe:
//
// Füge einen 4. Menüpunkt hinzu "FAQ".
// Erstelle dafür einen weiteren Button
// und ein weiteres Div. 