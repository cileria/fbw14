import React, { Component } from 'react';
import './App.css';
import B from './B';
import B2 from './B2';
import C from './C';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Redux + Ajax</h2>
        <B />
        <B2 />
        <C />
      </div>
    );
  }
}

export default App;