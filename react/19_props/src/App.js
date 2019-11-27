import React, { Component } from 'react';
import './App.css';
import B from './B';

class App extends Component {
  
  state = {
    x: 0
  }
  
  render() {
    return (
      <div>
        Hallo World
        <B 
          someProp="Hallo World"
          someOtherProp="Hallo Sun"
          x={this.state.x} 
          />

        <button onClick={() => {
          this.setState({
            x: this.state.x + 1
          })
        }}>Count Up x</button>
      </div>
    );
  }
}

export default App;