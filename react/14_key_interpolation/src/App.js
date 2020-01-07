import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = {
    txtBox1: '',
    txtBox2: '',
    txtBox3: '',
    txtBox4: '',
    txtBox5: ''
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value // DOM element
    })
  } 

  render() {
    return (
      <div>
        <div><input type="text" name="txtBox1" onChange={this.onChangeHandler} /><span>{this.state.txtBox1}</span></div>
        <div><input type="text" name="txtBox2" onChange={this.onChangeHandler} /><span>{this.state.txtBox2}</span></div>
        <div><input type="text" name="txtBox3" onChange={this.onChangeHandler} /><span>{this.state.txtBox3}</span></div>
        <div><input type="text" name="txtBox4" onChange={this.onChangeHandler} /><span>{this.state.txtBox4}</span></div>
        <div><input type="text" name="txtBox5" onChange={this.onChangeHandler} /><span>{this.state.txtBox5}</span></div>
      </div>
    );
  }
}

export default App;