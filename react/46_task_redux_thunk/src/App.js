import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Users from './Users';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;