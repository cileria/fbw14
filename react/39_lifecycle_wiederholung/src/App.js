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
    console.log('App wird konstruiert.');

    this.state.x = 0;
  }

  // sollen wir unseren state VOR dem nächsten render()
  // verändern?
  // der return-value hiervon ist der neue state
  static getDerivedStateFromProps(nextProps, prevState) {
    return {...prevState, x: prevState.x + 1}
  }

  render() {
    return (
      <div>
        Hallo World
      </div>
    );
  }
}

export default App;