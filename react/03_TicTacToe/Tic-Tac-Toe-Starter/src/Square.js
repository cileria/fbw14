import React from 'react';

let toggel=0;
class Square extends React.Component {
  constructor(props){
    super(props);
    this.state={
      inside:'',
      clicked:false
    }
  }
  
  clickButton(e){

    toggel++;
    
    console.log("e.target");
    console.log(e.target);
    console.log("this");
    console.log(this);
    console.log('toggel%2= '+(toggel%2));

    if(this.state.clicked === false){
      if(toggel%2){
        this.setState({inside:'X',clicked:true})        
      }else{
        this.setState({inside:'O',clicked:true});
      }
    }else{
      alert('You have clicked ..!');
      console.log('You have clicked ..!');
      toggel--;
    }
    console.log('*******************************')
    }

    render() {
      return (
        <button className="square" onClick={this.clickButton.bind(this)}>
          {this.state.inside}
          {/* TODO */}
        </button>
      );
    }
  }

  export default Square;