import React, { Component } from 'react'
import { MyContext } from './context';

export default class C extends Component {
    render() {
        return (
            <MyContext.Consumer>
                {
                    (context) => (
                        <div>
                            {context.x}
                            <button onClick={() => context.dispatch({type: 'INCREMENT_X'})}>incrementX</button>
                        </div>
                    )
                }
            </MyContext.Consumer>
        )
    }
}