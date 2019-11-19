import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = 'Larry';
    const showHalloWorld = false;
    const hwJsx = <h2>Hallo World</h2>;

    /*
        Aufgabe:
        Füge eine persönliche Begrüßung hinzu, z.B. in einem H2-Tag

        Wenn die aktuelle Zeit zwischen 05:00 und 11:59 - "Guten Morgen!"
        Wenn die aktuelle Zeit zwischen 12:00 und 16:59 - "Guten Tag!"
        Wenn die aktuelle Zeit zwischen 17:00 und 23:59 - "Guten Abend!"
        Wenn die aktuelle Zeit zwischen 00:00 und 04:59 - "Gute Nacht!"
    */

    const hours = new Date().getHours();
    let greeting = '';
    if(hours => 5 && hours <= 11) {
      greeting = 'Guten Morgen!'
    }
    else if(hours => 12 && hours <= 17) {
      greeting = 'Guten Tag!'
    }    
    else if(hours => 18 && hours <= 23) {
      greeting = 'Guten Abend!'
    }    
    else {
      greeting = 'Gute Nacht!'
    }    

    let greetingJs = <h2>{greeting}</h2>;

    return (
      <div>
        Hallo World
        <h2>Hallo {name}</h2>
        <h2>Hallo {name.toUpperCase()}</h2>
        <h2>1 + 1 = {2}</h2>
        <h2>1 + 1 = {1+1}</h2>
        <h2>{ <span>Hallo World</span> }</h2>
        <h2>{ true ? <span>True ist true</span> : <span>True ist false? gibts nicht</span>}</h2>
        <h2>{ showHalloWorld ? <span>HalloWorld!</span> : null } </h2>
        {hwJsx}
        {greetingJs}
        <h2>IIFE{(() => {return 1})}</h2>
      </div>
    );
  }
}

export default App;