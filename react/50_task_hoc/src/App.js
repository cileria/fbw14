import React, { Component } from 'react';
import './App.css';
import UserTable from './UserTable';

class App extends Component {
  
  state = {
    loading: true,
    users: [
      { id: 1, username: 'Bob', email: 'bob@gmail.com'},
      { id: 2, username: 'Pete', email: 'pete@gmail.com'},
      { id: 3, username: 'Sarah', email: 'sarah@gmail.com'}
    ]
  }
  
  componentDidMount() {
    setTimeout(
      () => {
        this.setState({
          loading: false
        })
        },
      3000
    );
  }

  render() {
    return (
      <div>
        <UserTable users={this.state.users} loading={this.state.loading}/>
      </div>
    );
  }
}

export default App;