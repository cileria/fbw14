import React, { Component } from 'react';
import './App.css';

class App extends Component {

  colors = [
    'green',
    'red',
    'yellow',
    'orange',
    'blue',
    'cornflowerblue',
    'fuchsia',
    'lime',
    'purple',
    'gray',
    'olive'
  ];

  lastInsertId = 6;

  state = {
    fruits: [
      { name: 'apple', color: 'green', id: 1 },
      { name: 'apple', color: 'red', id: 2 }, 
      { name: 'pineapple', color: 'green', id: 3 },
      { name: 'lemon', color: 'yellow', id: 4 },
      { name: 'orange', color: 'orange', id: 5 },
      { name: 'mango', color: 'orange', id: 6 },
    ],
    newFruitName: ''
  }

  onChangeTextHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addFruit = () => {
    // ist input box leer?
    if(this.state.newFruitName === '') {
      alert('Bitte Fruchtnamen angeben.');
      return;
    }

    // wir erzeugen kopie des fruits-arrays aus dem state
    const newFruits = [...this.state.fruits];
    this.lastInsertId++;

    newFruits.unshift({
      name: this.state.newFruitName,
      color: this.colors[ Math.floor(Math.random() * this.colors.length) ],
      id: this.lastInsertId
    });
    
    this.setState({
      fruits: newFruits,
      newFruitName: ''
    });
  }

  render() {
    return (
      <div>
        <h2>Some nice fruits</h2>
        <input type="text" name="newFruitName" onChange={this.onChangeTextHandler} placeholder="New Fruit here" value={this.state.newFruitName} />
        <button onClick={this.addFruit}>Add Fruit</button>
        <table>
          <thead>
            <tr>
              <td>Type</td>
              <td>Color</td>
            </tr>
          </thead>
          <tbody>
          {
            this.state.fruits.map((fruit) => <tr key={fruit.id} style={{ backgroundColor: fruit.color }}>
              <td>{fruit.name}</td>
              <td>{fruit.color}</td>
            </tr>)
          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;