import React, { Component } from 'react';
import { connect } from 'react-redux';
import randomstring from 'randomstring';

class B extends Component {
    
    generateRandomstring = () => {
        const newRandomstring = randomstring.generate(10);
        this.props.setRandomstring(newRandomstring);
    }
    
    render() {
        return (
            <div>
                B
                <button onClick={this.generateRandomstring}>generateRandomstring</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    setRandomstring: (newRandomstring) => dispatch({ type: 'RANDOMSTRING', value: newRandomstring })
});

export default connect(null, mapDispatchToProps)(B); // erstellt eine zweite klasse B