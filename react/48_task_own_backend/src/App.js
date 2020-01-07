import React, { Component } from 'react';
import './App.css';
import NewComment from './NewComment';
import Comments from './Comments';

class App extends Component {
  render() {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <NewComment />
        <Comments />
      </div>
    );
  }
}

export default App;