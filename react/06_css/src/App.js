import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {

    const h2Style = {
      color: 'red', 
      backgroundColor: 'blue'
    };
    
    return (
      <div>
        <h2 style={{
          color: 'red', 
          backgroundColor: 'blue'
        }}>CSS Way 1</h2>
        <h2 style={h2Style}>CSS Way 2</h2>
        <h2 className="h2Style" id="bla">CSS Way 3</h2>
      </div>
    );
  }
}

export default App;