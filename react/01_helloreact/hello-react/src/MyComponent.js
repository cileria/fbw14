import React from 'react';
import Greeting from './Greeting'

class MyComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputFieldValue: '', 
            secondValue: '',
            thirdValue: ''
        };
    }

    handleClick(event) {
        console.log(this);
        console.log(event.target);
    }

    handleChange(event) {
        console.log(this);
        this.refs.myParagraph.innerText = event.target.value;
        // Ändert die Status-Variablen
        this.setState({inputFieldValue: event.target.value});
        // Danach läuft sofort this.render() los und rendert neu!
    }

    render() {
        return (
            <React.Fragment>
                <input type="text" onChange={this.handleChange.bind(this)} />
                {/*Einfügen einer Variable, die sich ändert*/} 
                <Greeting name={this.state.inputFieldValue} />
                {/*Referenz zu einem HTML DOM Element statt document.getElementByID*/} 
                <p ref="myParagraph"></p>
                <button onClick={this.handleClick.bind(this)}>
                    Klick mich jetzt!
                </button>
            </React.Fragment>
        )
    }    
}

export default MyComponent;