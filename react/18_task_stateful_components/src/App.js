import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import RightSidebar from './RightSidebar';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="container">
          <Main />
          <RightSidebar />
        </div>
      </div>
    );
  }
}

export default App;