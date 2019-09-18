import React from 'react';
import './App.css';

// wir erstellen eine Klasse, die 
// Variablen und Methoden vom Prototypen
// der Component-Klasse erbt.

class App extends React.Component {

  render() {
    return (
      <div>
        Hallo World
      </div>
    );
  }
}

export default App;
