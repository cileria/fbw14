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
    newUsername: 'peter',
    selectedUserIndex: 0
  }
  
  select = (userIndex) => {
    const newUsers = this.state.users.map((user) => { 
      return {...user, selected: userIndex === user.id ? true : false}
    });

    this.setState({ 
      users: newUsers,
      newUsername: newUsers[userIndex-1].name,
      selectedUserIndex: userIndex - 1
    });
  }

  onChangeUsername = (e) => {
    const newUsers = [...this.state.users];
    newUsers[this.state.selectedUserIndex].name = e.target.value;

    this.setState({
      users: newUsers,
      newUsername: e.target.value
    });
  }

  render() {
    return (
      <div>
        <input 
          type="text" 
          name="username" 
          value={this.state.newUsername} 
          onChange={this.onChangeUsername}
        />
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