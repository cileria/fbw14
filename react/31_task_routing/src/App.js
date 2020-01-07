import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Start from './components/Start';
import Users from './components/Users';
import UserDetail from './components/UserDetail';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Start} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/userdetail/:id" component={UserDetail} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;