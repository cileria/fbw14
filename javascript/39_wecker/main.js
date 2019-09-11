const timerObj = document.getElementById('timer');
const btnSetAlarmObj = document.getElementById('btnSetAlarm');

const clockObj = document.getElementById('clock');
const setalarmObj = document.getElementById('setalarm');

const buttonsclockObj = document.getElementById('buttonsclock');

const buttonssetalarmObj = document.getElementById('buttonssetalarm');

const btnBackObj = document.getElementById('btnBack');

const btnSaveAlarmObj = document.getElementById('btnSaveAlarm');

const newAlarmTimeObj = document.getElementById('newAlarmTime');

const btnActivateAlarmObj = document.getElementById('btnActivateAlarm');

const btnStopObj = document.getElementById('btnStop');

const buttonsalarmObj = document.getElementById('buttonsalarm');

const alarmObj = document.getElementById('alarm');

let time = null;
let alarm = false;

setInterval(
    function () {
        // soll jede sekunde
        // ausgeführt werden

        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
        let seconds = date.getSeconds();
        if (seconds < 10) seconds = '0' + seconds;
        let newTime = `${hours}:${mins}:${seconds}`;

        // prüfe ich auch, ob die weckzeit erreicht wurde
        if (alarm && time === newTime) {

            alarmObj.style.display = 'block';
            alarmObj.innerText = `Es ist ${time}, Zeit zum Aufstehen!`;
            buttonsalarmObj.style.display = 'block';

            clockObj.style.display = 'none';
            buttonsclockObj.style.display = 'none';

            setalarmObj.style.display = 'none';
            buttonssetalarmObj.style.display = 'none';            
        }

        timerObj.innerText = newTime;
    },
    1000
);

btnSetAlarmObj.onclick = function () {
    // uhr verschwinden lassen
    clockObj.style.display = 'none';
    // buttons für alarm stellen verschwinden lassen
    buttonsclockObj.style.display = 'none';
    // inputfeld zum eingeben der zeit zeigen
    setalarmObj.style.display = 'block';
    // buttons zum setzen des weckers zeigen
    buttonssetalarmObj.style.display = 'block';

}

btnBackObj.onclick = function () {
    // quasi wie der alarmzeigen button, nur umgekehrt
    clockObj.style.display = 'block';
    buttonsclockObj.style.display = 'block';
    setalarmObj.style.display = 'none';
    buttonssetalarmObj.style.display = 'none';
}

btnSaveAlarmObj.onclick = function () {
    let str = newAlarmTimeObj.value;

    if (str.length !== 8) {
        alert('Uhrzeit ungültig.');
        return;
    }

    // validieren wir die uhrzeit
    let hours = parseInt(str.charAt(0) + str.charAt(1));

    let mins = parseInt(str.charAt(3) + str.charAt(4));

    let seconds = parseInt(str.charAt(6) + str.charAt(7));

    if (!(hours >= 0 && hours <= 23)) {
        alert('stundenanzahl ungültig.');
        return;
    }

    if (!(mins >= 0 && mins <= 59)) {
        alert('minutenanzahl korrekt');
        return;
    }

    if (!(seconds >= 0 && seconds <= 59)) {
        alert('sekundenanzahl korrekt');
        return;
    }

    if (!(str.charAt(2) === ':' && str.charAt(5) === ':')) {
        alert('doppelpunkte fehlen.');
        return;
    }

    btnBackObj.onclick();

    time = str;
}

btnActivateAlarmObj.onclick = function () {
    if (alarm) { // alarm === true
        alarm = false;
        btnActivateAlarmObj.innerText = 'Wecker aktivieren';
    } else { // alarm === false
        alarm = true;
        btnActivateAlarmObj.innerText = 'Wecker deaktivieren';
    }
}

btnStopObj.onclick = function () {
    alarmObj.style.display = 'none';
    buttonsalarmObj.style.display = 'none';

    // quasi wie der alarmzeigen button, nur umgekehrt
    clockObj.style.display = 'block';
    buttonsclockObj.style.display = 'block';
}