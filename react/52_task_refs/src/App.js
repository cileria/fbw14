import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  iFrameRef = React.createRef();
  
  render() {
    
    // https://www.youtube.com/watch?v=wwZbonjAlPc
    
    return (
      <div>
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/kWNHvIt9ryk" frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
          ref={this.iFrameRef} 
          ></iframe>
          <button onClick={
            () => {
              this.iFrameRef.current.src = 'https://www.youtube.com/embed/kWNHvIt9ryk';
            }
          }>Change to Song A</button>
          <button onClick={
            () => {
              this.iFrameRef.current.src = 'https://www.youtube.com/embed/wwZbonjAlPc';
            }
          }>Change to Song B</button>
          <button onClick={
            () => {
              this.iFrameRef.current.contentWindow.postMessage('play');
            }
          }>Play Song B</button>          
      </div>
    );
  }
}

export default App;