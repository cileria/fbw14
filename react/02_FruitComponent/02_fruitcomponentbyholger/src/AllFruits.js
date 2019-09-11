import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


class AllFruits extends React.Component {

    
    
    constructor(props) {
        super(props);
        this.state = {color:"uncolored", 
                    render: true}
    }
    
    changeColor(event) {
        const colorArray = ["green", "orange", "red", "yellow", "purple"];
        const randomNumber = Math.floor(Math.random()*5);

        console.log(event.target);
        console.log(this);
        this.setState({color:colorArray[randomNumber]})
    }  

    deleteFruit(event) {
        console.log(event.target);
        console.log(this);
        this.setState({render : false});
        console.log(this.state.render);
    }  

    render() {
        console.log(this.state.render);
        if (this.state.render===true) 
        {return (
            <React.Fragment>
            <p style={{color:this.state.color}}>{this.props.name}, color = {this.state.color} <button onClick = {
                    this.changeColor.bind(this)} >Change Color</button><button onClick = {
                        this.deleteFruit.bind(this)}>Delete Me</button></p>

            </React.Fragment>
        );
    } else return null;
}
}

// render() {
//     const { render } = this.state;
//     if (render === false) return null;
//     return (<p>I am here as long as render isn't false</p>);
//   }

ReactDOM.render(<AllFruits />, document.getElementById(`root`));


export default AllFruits;