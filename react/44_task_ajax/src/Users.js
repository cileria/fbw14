import React, { Component } from 'react'
import User from './User';

export default class Users extends Component {

    state = {
        users: []
    }

    remove = (id) => {
        this.setState({
            users: this.state.users.filter( (user) => user.id !== id )
        });
    }

    async componentDidMount() {
        try {
            const result = await fetch('https://jsonplaceholder.typicode.com/users');
            const obj = await result.json();

            console.log(obj);
            this.setState({
                users: obj
            })
        }
        catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(
                            (user) => <User user={user} key={user.id} removeHandler={this.remove} />
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
