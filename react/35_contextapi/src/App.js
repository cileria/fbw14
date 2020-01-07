import React, { Component } from 'react';
import './App.css';
import { MyProvider, MyContext } from './context';
import B from './B';

class App extends Component {
  render() {
    return (
      <MyProvider>
        <MyContext.Consumer>
          {
            (context) => (
              <div>
                x = {context.state.x}
                <B />
              </div>
            )
          }
        </MyContext.Consumer>
      </MyProvider>
    );
  }
}

export default App;