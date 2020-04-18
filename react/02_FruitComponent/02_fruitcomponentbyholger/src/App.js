import React from 'react';
import logo from './logo.svg';
import './App.css';
import FruitComponentsHeadline from './FruitComponentsHeadline';
import AllFruits from './AllFruits'

function App() {
  return (<React.Fragment>
    <FruitComponentsHeadline />
    <AllFruits name="Apple"/>
    <AllFruits name="Mango" color="orange"/>
    <AllFruits name="Banana" color="yellow"/>
    <AllFruits name="Lemon" color="yellow"/>
    </React.Fragment>
    )}

export default App;
