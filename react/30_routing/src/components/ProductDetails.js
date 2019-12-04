import React from 'react'

export default function ProductDetails(props) {
    return (
        <div>
            Product Details of {props.match.params.id}
        </div>
    )
}