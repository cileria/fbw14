import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = {
    x: 0
  }
  
  // beim instanziieren von App
  // const app = new App();
  constructor(props) {
    super(props)
    console.log('1 - constructor');

    this.state.x = 0;
  }

  // sollen wir unseren state VOR dem nächsten render()
  // verändern?
  // der return-value hiervon ist der neue state
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('2 - getDerivedStateFromProps'); 
    return {
      ...prevState, x: prevState.x + 1
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('3 - shouldComponentUpdate'); 
    return true;
  }

  
  render() {
    console.log('4 - render'); 
    return (
      <div>
        Hallo World, x = {this.state.x}
        <button onClick={() => {
          this.setState({
            x: this.state.x + 1
          })
        }}>incrementX</button>
      </div>
    );
  }

  componentDidMount() {
    console.log('5 - componentDidMount'); 
  }

  componentDidUpdate(nextProps, prevState) {
    console.log('5 - componentDidUpdate'); 
  }
}

export default App;