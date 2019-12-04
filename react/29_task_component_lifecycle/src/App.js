import React, { Component } from 'react';
import './App.css';
import RandomStringGenerator from './RandomStringGenerator';

class App extends Component {
  
  state = {
    randomStringLengths: []
  }

  generateRandomNumbers = () => {
    const newRandomStringLengths = [];
    for(let i=0; i<3; i++) {
      newRandomStringLengths.push(4 + Math.floor(Math.random() * 3));
    }

    this.setState({
      randomStringLengths: newRandomStringLengths
    });
  }

  componentDidMount() {
    this.generateRandomNumbers(); 
  }

  render() {
    return (
      <div>
        <button onClick={this.generateRandomNumbers}>Generate New Random Numbers</button>
        {/* {this.state.randomStringLengths && this.state.randomStringLengths.map((rsl, index) => <RandomStringGenerator key={index} stringLength={rsl} />)} */}
        <RandomStringGenerator key={0} stringLength={this.state.randomStringLengths[0]} />
        <RandomStringGenerator key={1} stringLength={this.state.randomStringLengths[1]} />
        <RandomStringGenerator key={2} stringLength={this.state.randomStringLengths[2]} />
                
      </div>
    );
  }
}

export default App;