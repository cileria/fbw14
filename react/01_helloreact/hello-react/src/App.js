import React from 'react';
import ImageName from './katze.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ImageName} className="App-logo" alt="logo" />
        <p>
          Hallo Welt!2222 kjhjkhk asdasd lkasldfkams
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
    </div>
  );
}

export default App;
