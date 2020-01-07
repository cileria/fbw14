import React, { Component } from 'react'
import { MyContext } from './context';

export default class B extends Component {
    render() {
        return (
            <MyContext.Consumer>
                {
                (context) => (
                    <div>
                        B
                        <button onClick={() => context.dispatch({ type: 'INCREMENT_X' })}>incrementX</button>
                    </div>
                )
                }
            </MyContext.Consumer>
        )
    }
}
