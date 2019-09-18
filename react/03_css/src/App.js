import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    // jedes css-attribute kann ausgedrückt werden,
    // durch camelCase - schreibweise in react/javascript
    const someStyle = {
      // font-size: 28px;
      fontSize: '28px',
      color: 'blue'
    };

    return (
      <div>
        <h2 style={someStyle}>CSS Möglichkeit 1</h2>
        <h2 style={{fontSize: '28px'}}>CSS Möglichkeit 2</h2>
        <h2 className="someClass">CSS Möglichkeit 3</h2>
      </div>
    );
  }
}

export default App;