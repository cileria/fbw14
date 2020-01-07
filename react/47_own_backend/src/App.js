import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount = async() => {
    const result = await fetch('/hallo');
    const data = await result.json();

    console.log('Message = ' + data.message);
  }

  loadData = async() => {
    const result = await fetch('/users');
    const data = await result.json();

    console.log(data);
  }

  saveData = async() => {
    const newUser = {
      name: 'jan',
      email: 'jan.schulz@cileria.com'
    };
    const result = await fetch('/users', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    });

    const data = await result.json();
    console.log(data);
  }

  deleteData = async() => {
    const result = await fetch('/users/134', { 
      method: 'DELETE' 
    });
    const data = await result.json();

    console.log(data);
  }  

  render() {
    return (
      <div> 
        Hallo World
        <button onClick={this.loadData}>load Data</button>
        <button onClick={this.saveData}>save Data</button>
        <button onClick={this.deleteData}>delete Data</button>
      </div>
    );
  }
}

export default App;