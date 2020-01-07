import React, { Component } from 'react'
import { connect } from 'react-redux';

class B extends Component {

    loadUsers = async () => {
        try {
            const result = await fetch('https://jsonplaceholder.typicode.com/users');
            const obj = await result.json();

            console.log(obj);
            this.props.loadUsers(obj);
        }
        catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                B
                <button onClick={this.loadUsers}>loadUsers</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    loadUsers: (users) => dispatch({ type: 'LOAD_USERS', value: users })
});

export default connect(null, mapDispatchToProps)(B);