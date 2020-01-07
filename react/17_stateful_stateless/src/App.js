import React, { Component } from 'react';
import './App.css';
import Fruit from './Fruit';
import FruitSF from './FruitSF';

class App extends Component {
  
  state = {

  }
  
  render() {
    return (
      <div>
        <Fruit type="Orange" />
        <Fruit type="Mango" />
        <Fruit type="Apple" />

        <FruitSF type="Lemon" />
        <FruitSF type="Strawberry" />
        <FruitSF type="Pineapple" />
      </div>
    );
  }
}

export default App;