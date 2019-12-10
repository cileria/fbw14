import React, { Component } from 'react'
import { MyContext } from './context';

export default class D extends Component {
    render() {
        return (
            <MyContext.Consumer>
                {
                (context) => (
                    <div>
                        D
                        x = {context.x}
                        y = {context.y}
                    </div>
                )
                }
            </MyContext.Consumer>
        )
    }
}
