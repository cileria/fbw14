import React from 'react';
import logo from './logo.svg';
import './App.css';
import Headline from './Headline';
import Fruit from './Fruit';

function App() {
  return ( 
    <React.Fragment>
    <Headline/>
    <Fruit name='Apple' color='red'/>
    <Fruit name='Mango' color='orange'/>
    <Fruit name='Banana' color='yellow'/>
    <Fruit name='Lemon' color='green'/>
    </React.Fragment>

  );
}

export default App;
