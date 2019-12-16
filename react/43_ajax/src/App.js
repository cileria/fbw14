import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = {
    users: []
  }
  
  async componentDidMount() {
    try {
      const result = await fetch('https://jsonplaceholder.typicode.com/users');
      const obj = await result.json();

      console.log(obj);
      this.setState({
        users: obj
      })
    }
    catch(e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        Hallo World
      </div>
    );
  }
}

export default App;