import React from 'react'

export default function C(props) {
    return (
        <div>
            C, x = {props.x}

            <button onClick={props.f}>Hallo World</button>
        </div>
    )
}
