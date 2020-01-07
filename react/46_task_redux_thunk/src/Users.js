import React, { Component } from 'react'
import User from './User';
import { connect } from 'react-redux';
import { loadUsers } from './actions';

class Users extends Component {
    
    state = {
        users: []
    }

    render() {
        return (
            <table>
            <thead>
              <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
              </tr>
            </thead>
            <tbody>
              {this.props.users && this.props.users.map((user) => (
                  <User user={user} key={user.id} />
              ))}
            </tbody>
          </table>
        )
    }
}

const mapStateToProps = (state) => ({
  users: state.users
});

export default connect(mapStateToProps, null)(Users);