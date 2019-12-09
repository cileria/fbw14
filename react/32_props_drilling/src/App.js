import React, { Component } from 'react';
import './App.css';
import B from './B';

class App extends Component {
  
  state = {
    x: 0
  }
  
  incrementX = () => {
    this.setState({
      x: this.state.x + 1
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.incrementX}>IncrementX</button>
        <B x={this.state.x} />
      </div>
    );
  }
}

export default App;