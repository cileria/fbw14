import React, { Component } from 'react';

export const MyContext = React.createContext();
export class MyProvider extends Component {

    state = {
        x: 0
    }

    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
                incrementX: () => {
                    this.setState({
                        x: this.state.x + 1
                    })
                }
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}