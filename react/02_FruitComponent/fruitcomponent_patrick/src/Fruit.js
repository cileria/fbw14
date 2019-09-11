import React from 'react';

class Fruit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: props.color,
            render: true
        }
    }

    changeColor(event) {    
        let colors = ['green', 'white', 'black', 'blue', 'pink'];
        let x = Math.floor(Math.random() * (4 - 0)) + 0;
        this.setState({color: colors[x]}) 
    }

    deleteMe(event) {
        this.setState({render: false})
    }


    render() {
        if(this.state.render === true) 
         { return (
              <React.Fragment>
                  <p>
                    {this.props.name}, color = {this.state.color} 
                    <button id='changeColor' onClick= {this.changeColor.bind(this)}>Change Color</button> 
                    <button id='deleteMe' onClick= {this.deleteMe.bind(this)}>Delete Me</button>
                  </p>
                </React.Fragment>
                )
          }else return null
        }
}; 
 

export default Fruit;