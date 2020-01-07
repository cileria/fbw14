import React, { Component } from 'react'
import C from './C';
import D from './D';

class A extends Component {
    render() {
        return (
            <div>
                A
                <C />
                <D />
            </div>
        )
    }
}

export default A;