import React, { Component } from 'react';
import './App.css';
import C from './C';
import B from './B';

class App extends Component {
  
  state = {
    randomNumberOfApp: 0,
    isGreaterThan100: false
  }
  
  generateRandomNumber = () => {
    this.setState({
      randomNumberOfApp: Math.floor(Math.random() * 10)
    })
  }

  greaterThan100 = (isIt) => {
    this.setState({
      isGreaterThan100: isIt
    });
  }

  render() {
    return (
      <div>
        <h2>App Component</h2>
        <button onClick={this.generateRandomNumber}>Generate Random Number</button>
        {/* wir schicken randomNumberOfApp an Component C */}
        <C randomNumber={this.state.randomNumberOfApp} />
        <B isGreaterThan100={this.state.isGreaterThan100} />
      </div>
    );
  }
}

export default App;