import React from 'react'

export default function User(props) {
    return (
        <tr>
            <td>{props.user.id}</td>
            <td>{props.user.name}</td>
            <td>{props.user.email}</td>
            <td><button onClick={() => props.removeHandler(props.user.id)}>X</button></td>
        </tr>
    )
}
