import React, { Component } from 'react';
import './App.css';
import User from './User';

class App extends Component {
  
  state = {
    users: [
      { name: 'peter', id : 1, selected: true },
      { name: 'sandra', id : 2, selected: false },
      { name: 'steven', id : 3, selected: false }
    ],
    newUsername: '',
    selectedUserIndex: 0
  }
  
  select = (userIndex) => {
    const newUsers = this.state.users.map((user) => { 
      return {...user, selected: userIndex === user.id ? true : false}
    });

    this.setState({
      users: newUsers
    });
  }

  render() {
    return (
      <div>
        <input type="text" name="username" value={this.newUsername} />
        {this.state.users.map( (user) => <User 
            key={user.id} 
            username={user.name} 
            id={user.id} 
            selected={user.selected}
            selectHandler={this.select}
            />)} 
      </div>
    );
  }
}

export default App;