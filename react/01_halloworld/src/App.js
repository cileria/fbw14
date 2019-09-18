import React from 'react';
import './App.css';

// wir erst2ellen eine Klasse, die 
// Variablen und Methoden vom Prototypen 
// der Component-Klasse erbt.

class App extends React.Component {

  // wird später zu einem Key-Value Paar
  name2 = 'Stefan';
  
  // ganz normale Methode, die von React ausgeführt wird
  render() {
    const name = 'Larry';
    const show = false;

    // Aufgabe:
    // 
    // Erstelle eine persönliche Begrüssung. Z.B. in einem
    // H2-Tag.
    //
    // 1) Finde heraus, was die aktuelle Uhrzei ist
    // 2) 
    //    Falls die Uhrzeit zw. 05:00 - 11:59 -> "Guten Morgen" 
    //    Falls die Uhrzeit zw. 12:00 - 16:59 -> "Guten Tag" 
    //    Falls die Uhrzeit zw. 17:00 - 23:59 -> "Abend" 
    //    Falls die Uhrzeit zw. 00:00 - 04:59 -> "Gute Nacht" 
    //
    // Tipp: es ist alles JavaScript. Google nach dem Weg
    //       die aktuelle Uhrzeit herauszufinden

    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let time = hours + ':' + minutes;
    let strTime = '';

    if(hours >= 5 && hours <= 11) {
      strTime = `Es ist ${time}, Guten Morgen!`;
    }
    else if(hours >= 12 && hours <= 16) {
      strTime = `Es ist ${time}, Guten Tag!`;
    }
    else if(hours >= 17 && hours <= 23) {
      strTime = `Es ist ${time}, Guten Abend!`;
    }
    else {
      strTime = `Es ist ${time}, Gute Nacht!`;
    }

    // Ein Component returned immer JSX durch die return-Methode
    return (
      <div>
        Hallo {name} und hallo {this.name2} <br/>
        Hallo {name.toUpperCase()} <br/>
        {/* Hallo { if(true) 'Hallo' }  -> geht nicht*/} 
        1 + 1 = {2} <br/>
        1 + 1 = {1 + 1} <br/>
        { null } {/* null wird nicht gezeigt */}
        { false } {/* false wird auch nicht gezeigt */}

        { <h2>Show me</h2> }
        {/* Conditional Rendering */}
        { show ? <h2>Dont show me</h2> : null }
        { strTime }
      </div>
    );
  }
}

// wird später zu:
// 
// let App = { name2: 'Stefan', render: () => {} }

export default App;


// FYI: Was passiert bei React:
//
// const newApp = new App();
// newApp.render();