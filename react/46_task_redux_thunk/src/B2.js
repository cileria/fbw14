import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUsers } from './actions';

class B2 extends Component {
    render() {
        return (
            <div>
                B2
                <button onClick={this.props.loadUsers}>loadUsers</button>
            </div>
        )
    }
}

export default connect(null, { loadUsers })(B2);