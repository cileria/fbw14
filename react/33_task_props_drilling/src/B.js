import React from 'react'

export default function B(props) {
    return (
        <div>
            <h2>Component B</h2>
            { props.isGreaterThan100 ? 
             'The product of the three random numbers is greater than 100.'
            :'The product of the three random numbers is less or equal 100.'}
        </div>
    )
}
