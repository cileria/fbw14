import React, { Component } from 'react'
import { MyContext } from './context';

export default class C extends Component {
    render() {
        return (
            <MyContext.Consumer>
                {
                    (context) => (
                        <div>
                            {context.state.x}
                            <button onClick={context.incrementX}>incrementX</button>
                        </div>
                    )
                }
            </MyContext.Consumer>
        )
    }
}