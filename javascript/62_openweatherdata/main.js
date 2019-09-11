let btnObj = document.getElementById('btn');
let authToken = '16d4785f9c10724266053adb3c29dcfd';
//console.log(btnObj);

btnObj.onclick = async () => {
    //console.log('wetter');
    event.preventDefault();
    let inputValueObj = document.getElementById('input').value;
    let locArray = inputValueObj.split(',');
    let locArrayTrimmed = [];
    let intervalCounter = 0; // setInterval wird erstmal mit 0 Initialisiert
    for (element of locArray) {
        console.log(element);
        locArrayTrimmed.push(element.trim());
    }
    // Falls irgendwas schief geht
    try {
        // Alle Requests werden gleichzeitig gestartet, Array wird direkt übergeben 
        // und kommen gleichzeitig als Array zurück 
        let allResponses = await makeAllRequestsSimultaneously(locArrayTrimmed);
        console.log(allResponses);
        let weatherData = [];
        // Jeder einzelne Response muss ausgepackt werden
        // und wieder in ein Array gespeichert werden
        for (response of allResponses) {
            debugger
            let convertedResponse = await response.json();
            weatherData.push(convertedResponse);
        }
        console.table(weatherData);
        let citiesInterval = setInterval( () => {
            console.log(intervalCounter);
            if (intervalCounter === weatherData.length - 1) {
              clearInterval(citiesInterval);
            }   
            let cityToSearch = weatherData[intervalCounter].name;
            let temp = weatherData[intervalCounter].main.temp;
            let description = weatherData[intervalCounter].weather[0].description;
            let icon = weatherData[intervalCounter].weather[0].icon;
            showCityData(cityToSearch, temp, description, icon);
            intervalCounter++; // Intervall wird hochgesetzt
        }, 400); // 0.4 sekunden
    } catch (er) {// Fehlerbehandlung
        console.warn(er);
    }
    /*for (element of locArrayTrimmed) {
        loadCityData(element);
    }*/
    //console.log(inputValueObj);
}

const colorTemperatures = [{
        limitTemp: 40,
        color: 'red'
    },
    {
        limitTemp: 35,
        color: 'orange'
    },
    {
        limitTemp: 30,
        color: 'yellow'
    },
    {
        limitTemp: 20,
        color: 'deepskyblue'
    },
    {
        limitTemp: 10,
        color: 'purple'
    },
    {
        limitTemp: 0,
        color: 'grey'
    },
    {
        limitTemp: -Infinity,
        color: 'white'
    }
];

const showCityData = (cityToSearch, temp, description, icon) => {
    const containerObj = document.getElementById('container');
    const newDivObj = document.createElement('div');
    newDivObj.classList.add('box');
    newDivObj.innerHTML = `<h2 class="city-name">${cityToSearch}</h2>
    <div class="temp">${temp}</div>
    <div class="description">${description}</div>
    <img src="http://openweathermap.org/img/wn/${icon}@2x.png">`;
    //newDivObj.style.background = styleBackground(temp);
    newDivObj.style.background = colorTemperatures.find(entry => temp > entry.limitTemp).color;
    containerObj.append(newDivObj);
}

const styleBackground = (temp) => {
    if (temp > 40) {
        return 'red';
    } else if (temp > 35) {
        return 'orange';
    } else if (temp > 30) {
        return 'yellow';
    } else if (temp > 20) {
        return 'deepskyblue';
    } else if (temp > 10) {
        return 'purple';
    } else if (temp > 0) {
        return 'grey';
    } else {
        return 'white';
    }
}
/* 
const loadCityData = async (inputValue) => {
    try {
        let cityToSearch = inputValue;
        let urlServiceAddress = `https://api.openweathermap.org/data/2.5/weather?q=${cityToSearch}&APPID=${authToken}&lang=de&units=metric`;
        let res = await fetch(urlServiceAddress);
        let weatherData = await res.json();
        console.table(weatherData);
        //let temp = (weatherData.main.temp - 273.15).toFixed(1);
        let temp = weatherData.main.temp;
        let description = weatherData.weather[0].description;
        let icon = weatherData.weather[0].icon;
        showCityData(cityToSearch, temp, description, icon);
    } catch (error) {
        console.warn(error);
    }
} */

let makeAllRequestsSimultaneously = collectionOfCities => {
    let allCitiesPromises = [];
    for (city of collectionOfCities) {
        // Für jede Stadt wird eine URL erstellt
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${authToken}&lang=de&units=metric`;
        // Für jede Stadt wird eine Promise erstellt
        let promiseCity = new Promise((resolve, reject) => {
            // Datenabfrage für jede einzelne Stadt
            resolve(fetch(url));
        });
        allCitiesPromises.push(promiseCity); // alle Promises werden in ein Array gespeichert
    }
    // Verkettung der Promises
    return Promise.all(allCitiesPromises);
}