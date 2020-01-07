import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = {
    greeting1: 'Hallo World',
    numbers: [1,2,3,4,5,6]
  }
  
  constructor() {
    super(); // ruft den constructor auf der Component-klasse
    this.state.greeting2 = 'Hallo World from constructor';
  }

  // App hat fertig geladen
  componentDidMount() {
    // nach dem Fertigladen der App, 
    // erstelle einen Timer, der nach 2 Sekunden den State updated
    setTimeout(
      () => {
        this.setState({
          greeting1: 'Changed Hallo World!',
          x : 5
        });
      },
      2000
    )

    setTimeout(
      () => {
        this.setState({
          // wir erstellen eine kopie des number-arrays, fügen an die kopie
          // eine neue zahl hinzu und speichern das neue array im neuen
          // state
          numbers: [...this.state.numbers, 7]
        })
      },
      4000
    )
  }

  render() {
    return (
      <div>
        {this.state.greeting1}
        <br />
        {this.state.greeting2}
        <br />
        x = {this.state.x}
        <ul>
          { this.state.numbers.map( (number) => <li>{number}</li>) }
        </ul>
      </div>
    );
  }
}

export default App;