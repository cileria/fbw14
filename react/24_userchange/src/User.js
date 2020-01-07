import React from 'react'

export default function User(props) {
    return (
        <div>
            <label htmlFor={props.id}>
            <input 
                id={props.id}
                type="radio" 
                onChange={() => {props.selectHandler(props.id)}}
                value={props.id}
                name="userRadio"
                checked={props.selected}
                /><span>{props.username}</span>
            </label>
        </div>
    )
}
