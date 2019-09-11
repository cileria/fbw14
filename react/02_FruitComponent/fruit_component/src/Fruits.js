import React from 'react';

class Fruits extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            color: 'Red',
            render: true
        };

    }

    colorClick(event) {
        console.log(event.target);
        console.log(this);
        let actualColor = this.state.color;
        if(actualColor === "Red"){
            actualColor = "Yellow";
        }else if (actualColor === "Yellow"){
            actualColor = "Green"
        }else if (actualColor === "Green"){
            actualColor = "Blue"
        }else if (actualColor === "Blue"){
            actualColor = "Brown"
        }else if (actualColor === "Brown"){
            actualColor = "Red"
        }else{console.log('Unbekannte Farbe')};
        
        
        this.setState({color: actualColor});
    }

    removeFruit(){
        this.setState({
            render: false
        }) 
    }



    render() {
        if (this.state.render === true){
        return ( 
            <div> {this.props.name}, Color= {this.state.color} 
            <button onClick = {this.colorClick.bind(this)} >Change Color</button> 
            <button onClick={this.removeFruit.bind(this)} >Delete Fruit</button> 
            
            </div>
        )}else{
            return null
        };

    };
}



export default Fruits;