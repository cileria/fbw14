import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = { 
    randomstrings: []
  }
  
  randomstring = (n) => {
    const alpha = 'abcdefghiklmnopqrstuvxyz';
    let str = '';
    for(let i=0; i<n; i++) {
      str += alpha[ Math.floor(Math.random() * alpha.length) ];
    }
    return str;
  }

  componentDidMount() {
    setInterval(
      () => {
        this.setState({
          randomstrings: [...this.state.randomstrings, this.randomstring(10)]
        });
      },
      1000
    )
  }

  render() {
    return (
      <div>
        { this.state.randomstrings.map( (str) => <div>{str}</div> ) }
      </div>
    );
  }
}

export default App;