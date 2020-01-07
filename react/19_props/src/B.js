import React from 'react'

// es geht auch function B()
const B = (props) => {
    return (
        <div>
            {JSON.stringify(props)}
            <div>{props.someProp}</div>
        </div>
    )
}

export default B;