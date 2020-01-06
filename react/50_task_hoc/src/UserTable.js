import React from 'react'
import UserTableWrapper from './UserTableWrapper';

const UserTable = (props) => {
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
                { props.users && props.users.map(
                    (user) => <tr>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default UserTableWrapper(UserTable);