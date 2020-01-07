import React, { Component } from 'react';
import './App.css';
import MyButton from './MyButton';

class App extends Component {

  click = (str) => {
    alert(str);
  }

  render() {
    return (
      <div>
        <MyButton clickHandler={this.click} message="Hallo World">
          Hallo World
        </MyButton>
        <MyButton clickHandler={this.click} message="Beach Life! Me gusta!">
          <img src="beach.jpg" />
        </MyButton>        
      </div>
    );
  }
}

export default App;