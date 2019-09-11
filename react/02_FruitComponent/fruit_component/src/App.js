import React from 'react';
import Headline from './Headline';
import Fruits from './Fruits';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Headline></Headline>
      <Fruits name="Apple" color="Yellow" id="1"/>
      <Fruits name="Mango" color="Yellow" id="2"/>
      <Fruits name="Banana" color="Yellow" id="3"/>
      <Fruits name="Lemon" color="Yellow" id="4"/>



    </React.Fragment> 
  );
}

export default App;
