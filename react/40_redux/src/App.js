import React, { Component } from 'react';
import './App.css';
import B from './B';
import C from './C';

class App extends Component {
  render() {
    return (
      <div>
        Hallo World
        <B />
        <C />
      </div>
    );
  }
}

export default App;