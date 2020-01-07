import React, { Component } from 'react';
import './App.css';
import User from './User';

class App extends Component {
  
  state = {
    users: [
      { name: 'paul', id: 1 },
      { name: 'bob', id: 2 },
      { name: 'rebecca', id: 3 },
      { name: 'peter', id: 4 },
      { name: 'sandra', id: 5 }
    ]
  }

  delete = (id) => {
    const newUsers = this.state.users.filter( (user) => user.id !== id);
    this.setState({
      users: newUsers
    });
  }

  render() {
    return (
      <div>
        { this.state.users && this.state.users.map((user) => <User name={user.name} key={user.id} id={user.id} deleteHandler={this.delete} /> )}
      </div>
    );
  }
}

export default App;