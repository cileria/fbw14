import React, { Component } from 'react';
import './App.css';
import B from './B';
import C from './C';

class App extends Component {
  render() {
    return (
      <div>
        <B sayWhat="Hallo World" />
        <C>
          <h2>Hallo Sun</h2>
        </C>
      </div>
    );
  }
}

export default App;