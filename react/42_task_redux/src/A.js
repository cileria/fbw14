import React, { Component } from 'react'
import B from './B';

export default class A extends Component {
    render() {
        return (
            <div>
                A
                <B />
            </div>
        )
    }
}
