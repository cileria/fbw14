import React, { Component } from 'react'
import { connect } from 'react-redux';

class C extends Component {
    render() {
        return (
            <div>
                {JSON.stringify(this.props.users)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.users
});

export default connect(mapStateToProps, null)(C);
