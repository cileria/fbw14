import React, { Component } from 'react'
import C from './C';

export default class B extends Component {
    render() {
        return (
            <div>
                B
                <C />
            </div>
        )
    }
}
