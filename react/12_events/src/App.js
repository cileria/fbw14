import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = {
    clickCounter: 0,
    mouseEnterCounter: 0,
    text: ''
  }

  clickHandler = () => {  
    this.setState({
      clickCounter: this.state.clickCounter + 1 
    })  
  }
  
  mouseEnterHandler = () => {
    this.setState({
      mouseEnterCounter: this.state.mouseEnterCounter + 1
    })  
  }

  onChangeHandler = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    return (
      <div>
        {/* beim Instanziieren von App wird die Referenz von clickHandler 
        dem onClick von button zugeordnet */}
        {/* beim onClick wird die funktionsreferenz ausgeführt */}
        <button onClick={this.clickHandler}>Click me</button>
        <h2>clicks = {this.state.clickCounter}</h2>
        <div style={{
          width: '200px',
          height: '200px',
          backgroundColor: 'green'
        }} onMouseEnter={this.mouseEnterHandler}>Hover Me!</div>
        <h2>mouseEnters = {this.state.mouseEnterCounter}</h2>

        <input style={{ marginTop: '20px' }} type="text" onChange={this.onChangeHandler} />
        <div>{this.state.text}</div>
      </div>
    );
  }
}

export default App;