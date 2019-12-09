import React, { Component } from 'react'

export default class D extends Component {
    
    lastReceivedRandomNumber = 0;
    randomNumberOfD = 0;
    product = 0;

    shouldComponentUpdate(nextProps, nextState) {
        this.lastReceivedRandomNumber = nextProps.randomNumber;
        this.randomNumberOfD = Math.floor( Math.random() * 10 );
        this.product = this.randomNumberOfD * this.lastReceivedRandomNumber;

        return true;
    }    
    
    render() {
        return (
            <div>
                D = {this.lastReceivedRandomNumber} x {this.randomNumberOfD} = {this.product}
            </div>
        )
    }
}
