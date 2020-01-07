import React, { Component } from 'react'
import { setInterval } from 'timers'

class Main extends Component {
    
    state = {
        backgroundColor: 'rgb(100, 100, 100)'
    }

    componentDidMount() {
        setInterval(
            () => {
                const r = Math.floor( Math.random() * 255 );
                const g = Math.floor( Math.random() * 255 );
                const b = Math.floor( Math.random() * 255 );

                this.setState({
                    backgroundColor: `rgb(${r}, ${g}, ${b})`
                });
            },
            2000
        )
    }
    
    render() {
        return (
            <div className="main" style={{ backgroundColor: this.state.backgroundColor }}>
                Main
            </div>
        )
    }
}

export default Main;