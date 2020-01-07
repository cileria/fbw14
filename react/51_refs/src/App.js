import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  inputRef = React.createRef();

  componentDidMount() {
    this.inputRef.current.value = 'Hallo';
    this.inputRef.current.focus();
  }
  
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default App;