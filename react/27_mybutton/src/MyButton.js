import React from 'react'

export default function MyButton(props) {
    
    const style = {
        backgroundColor: 'cornflowerblue',
        fontSize: '20px',
        padding: '4px'
    }
    
    return (
        <div>
            <button onClick={() => props.clickHandler(props.message)} style={style}>
                {props.children}
            </button>
        </div>
    )
}
