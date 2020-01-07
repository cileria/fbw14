import React, { Component } from 'react';
import './App.css';
import B from './B';

class App extends Component {
  
  state = {
    x: 0
  }

  callMe = () => {
    // alert('Hallo World');
    this.setState({
      x: this.state.x + 1
    })
  } 
  
  callMeWithParam = (p) => {
    alert('p = ' + p);
  }

  render() {
    return (
      <div>
        Hallo World
        <B 
          callMeHandler={this.callMe} 
          callMeWithParamHandler={this.callMeWithParam}
          />
        x = {this.state.x}
      </div>
    );
  }
}

export default App;