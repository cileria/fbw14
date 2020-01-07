import React, { Component } from 'react'

export default class D extends Component {
    
    lastReceivedRandomNumber = -1;
    randomNumberOfD = 0;
    product = 0;

    shouldComponentUpdate(nextProps, nextState) {
        if((nextProps.randomNumber !== this.lastReceivedRandomNumber) || this.lastReceivedRandomNumber === -1) {
            this.lastReceivedRandomNumber = nextProps.randomNumber;
            this.randomNumberOfD = Math.floor( Math.random() * 10 );
            this.product = this.randomNumberOfD * this.lastReceivedRandomNumber;

            return true;
        }

        return false;
    }    
    
    componentDidUpdate() {
        if(this.product > 100) {
            this.props.greaterThan100(true);
        }
        else {
            this.props.greaterThan100(false);
        }
    }

    render() {
        return (
            <div>
                D = {this.lastReceivedRandomNumber} x {this.randomNumberOfD} = {this.product}
            </div>
        )
    }
}
