import React from 'react';
/* import logo from './logo.svg'; */
import './App.css';
import Fruit from './Fruit';
/* import Toggle from './ChangeColor.js';
 */
//import ReactDOM from 'react-dom';
function App() {
  return (
/*     <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
    <React.Fragment>
    <h1>Components 1</h1>
    <Fruit name="Banana" />
    <Fruit name="Apple" />
    <Fruit name="Orange" />
    <Fruit name="Lemon" />
   </React.Fragment>

  );
}

export default App;
