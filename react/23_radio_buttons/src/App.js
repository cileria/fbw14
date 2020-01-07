import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = {
    radios: [
      false, // 0
      true,  // 1
      false  // 2
    ]
  }

  selectRadio = (index) => {
    const newRadios = this.state.radios.map((radio, i) => i === index ? true : false)
    this.setState({
      radios: newRadios
    });
  }

  render() {
    return (
      <div>
        {this.state.radios.map((radio, index) => <div key={index}>
          <label htmlFor={index}>
          <input id={index} 
                 name="radioButtons" 
                 type="radio" 
                 value={index} 
                 onChange={() => this.selectRadio(index)}
                 checked={radio}/>Option {index}</label>
        </div>
      )}
      </div>
    );
  }
}

export default App;