import React, { Component } from 'react';
import './App.css';
import { MyProvider } from './context';
import A from './A';
import C from './C';

class App extends Component {
  render() {
    return (
      <MyProvider>
          <A />
          <C />
      </MyProvider>
    );
  }
}

export default App;