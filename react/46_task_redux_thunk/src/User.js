import React from 'react'

export default function User(props) {
    return (
        <tr>
            <td>{props.user.id}</td>
            <td>{props.user.name}</td>
            <td><a href={'mailto:' + props.user.email}>{props.user.email}</a></td>
        </tr>
    )
}
