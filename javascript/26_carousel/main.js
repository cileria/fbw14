let imgArray = document.querySelectorAll('img');
const leftButton = document.querySelector('#left');
const rightButton = document.querySelector('#right');
// Score definiert das erste Bild
let score = 0;

rightButton.addEventListener('click', function () {
    score++;
    if (score === imgArray.length) {
        score = 0;
    } else {
        for (let i = 0; i < imgArray.length; i++) {
            imgArray[i].style.transform = `translate(${score * -50}vw, 0)`;
        }
    }
});

leftButton.addEventListener('click', function () {
    score--;
    if (score < 0 ) {
        score = imgArray.length -1;
    } else {
        for (let i = 0; i < imgArray.length; i++) {
            imgArray[i].style.transform = `translate(${score * -50}vw, 0)`;
        }
    }
});