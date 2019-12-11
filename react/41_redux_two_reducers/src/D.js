import React, { Component } from 'react'
import { connect } from 'react-redux';

class D extends Component {
    render() {
        return (
            <div>
                D
                a = {this.props.a}
                <button onClick={this.props.incrementB}>incrementB</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    a: state.reducer2.a
});

const mapDispatchToProps = (dispatch) => ({
    incrementB: () => dispatch({ type: 'INCREMENT_B' })
});


export default connect(mapStateToProps, mapDispatchToProps)(D); // erstellt eine zweite klasse C