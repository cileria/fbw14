import React, { Component } from 'react';
import './App.css';
import Fruit from './Fruit';

class App extends Component {
  
  state = {
    colors: [
      'red', 'green', 'blue'
    ]
  }

  possibleColors = [
    'red', 'blue', 'green', 
    'black', 'yellow', 'pink',
    'fuchsia', 'grey'];

  changeColors = () => {
    const newColors = [];
    for(let i=0; i<this.state.colors.length; i++) {
      newColors[i] = this.possibleColors[ Math.floor(Math.random() * this.possibleColors.length) ];
    }

    this.setState({
      colors: newColors
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.changeColors}>Randomize Apples</button>
        <Fruit color={this.state.colors[0]} />
        <Fruit color={this.state.colors[1]} />
        <Fruit color={this.state.colors[2]} />
      </div>
    );
  }
}

export default App;