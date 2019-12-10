import React, { Component } from 'react'
import B from './B';
import D from './D';

export default class A extends Component {
    render() {
        return (
            <div>
                A
                <B />
                <D />
            </div>
        )
    }
}
