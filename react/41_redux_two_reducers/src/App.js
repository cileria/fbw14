import React, { Component } from 'react';
import './App.css';
import B from './B';
import C from './C';
import D from './D';
import E from './E';

class App extends Component {
  render() {
    return (
      <div>
        Hallo World
        <B />
        <C />
        <D />
        <E />
      </div>
    );
  }
}

export default App;