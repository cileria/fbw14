import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {

    const str = 'abcdefghijklmno';
    const strArray = str.split('');

    return (
      <div>
        <div className="header">
          header
        </div>
        <div className="main">
          { strArray.map((letter) => <div className="box ">{letter.toUpperCase()}</div>) }
        </div>
      </div>
    );
  }
}

export default App;