import React, { Component } from 'react'
import { connect } from 'react-redux';

class D extends Component {
    render() {
        return (
            <div>
                D
                <button onClick={this.props.incrementB}>incrementB</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    incrementB: () => dispatch({ type: 'INCREMENT_B' })
});

export default connect(null, mapDispatchToProps)(D); // erstellt eine zweite klasse C