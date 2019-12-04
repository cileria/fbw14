import React, { Component } from 'react';
import randomstring from 'randomstring';

export default class RandomStringGenerator extends Component {
    
    state = {
        randomString: '',
        stringLength: 0
    }

    generateRandomString = (n) => {
        if(n) {
            return randomstring.generate(n);
        }
        return '';
    }

    componentDidMount() {
        this.setState({
            randomString: this.generateRandomString(this.props.stringLength)
        });
    }

    shouldComponentUpdate(nextProps, prevState) {
        if((nextProps.stringLength !== prevState.stringLength)) {
            return true;
        }

        return false;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(JSON.stringify(prevProps));

        this.setState({
            randomString: this.generateRandomString(this.props.stringLength),
            stringLength: this.props.stringLength
        });
    }

    render() {
        return (
            <div>
                {this.state.randomString}
            </div>
        )
    }
}
