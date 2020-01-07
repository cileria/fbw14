import React, { Component } from 'react';
import './App.css';
import Users from './Users';

class App extends Component {
  
  render() {
    return (
      <div>
        <h2>User List</h2>
        <Users />
      </div>
    );
  }
}

export default App;