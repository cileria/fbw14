import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loadUsers, searchUsers } from './actions';


class Header extends Component {
    
    state = {
      searchTerm: ''
    }

    componentDidMount() {
      this.props.loadUsers();
    }
  
    onChange = (e) => {
      this.setState({
        searchTerm: e.target.value
      });
    }

    searchUsers = (e) => {
      this.props.searchUsers(e.target.value)
    }

    render() {
        return (
          <div className="header">
            <div className="header-logo">
              <h1>UserSearch</h1>
            </div>
            <div className="header-search">
              <div>
                <input type="text" 
                       onChange={(e) => this.props.searchUsers(e.target.value)} 
                       />
                       {/* <button onClick={this.searchUsers}>Search</button> */}
              </div>
            </div>
          </div>
        )
    }
}

export default connect(null, { loadUsers, searchUsers })(Header);