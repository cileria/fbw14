import React, { Component } from 'react'

class FruitSF extends Component {
    
    state = {
        color: ''
    }

    changeColor = () => {
        const colors = ['red', 'blue', 'green', 'yellow', 'cornflowerblue'];
        this.setState({
            color: colors[ Math.floor(Math.random() * colors.length) ]
        });
    }

    render() {
        return (
            <div style={{ backgroundColor: this.state.color }}>
              Ich bin eine {this.props.type}
              <button onClick={this.changeColor}>Change Background Color</button>
            </div>
        )
    }
}

export default FruitSF;