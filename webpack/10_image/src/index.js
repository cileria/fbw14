import './index.html';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import gretaImg from './images/greta-trump.jpg';

const mainObj = document.getElementById('main');
mainObj.innerHTML = '<h1>Greta von Thunberg</h1>';

const successBtn = `<button type="button" class="btn btn-success climateBtn">Klima retten - JETZT</button>`;
mainObj.innerHTML += successBtn;

const image = `<img src=${gretaImg} />`;
mainObj.innerHTML += image;