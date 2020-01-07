import React, { Component } from 'react';

export const MyContext = React.createContext();
export class MyProvider extends Component {

    state = {
        x: 0,
        y: 0
    }

    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
                incrementX: () => {
                    this.setState({
                        x: this.state.x + 1
                    })
                },
                decrementY: () => {
                    this.setState({
                        y: this.state.y - 1
                    })
                }                
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}