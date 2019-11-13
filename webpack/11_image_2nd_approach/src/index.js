import './index.html';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';

const mainObj = document.getElementById('main');
mainObj.innerHTML = '<h1>Greta von Thunberg</h1>';

const successBtn = `<button type="button" class="btn btn-success climateBtn">Klima retten - JETZT</button>`;
mainObj.innerHTML += successBtn;

const gretaImg = `<img src="./images/greta-trump.jpg" />`;
mainObj.innerHTML += gretaImg;