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
                        <button onClick={() => context.dispatch({ type: 'DECREMENT_Y' })}>decrementY</button>
                    </div>
                )
                }
            </MyContext.Consumer>
        )
    }
}
