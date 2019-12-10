import React, { Component } from 'react'
import { MyContext } from './context';

export default class E extends Component {
    render() {
        return (
            <MyContext.Consumer>
                {
                (context) => (
                    <div>
                        E
                        <button onClick={context.decrementY}>decrementY</button>
                    </div>
                )
                }
            </MyContext.Consumer>
        )
    }
}
