import React from 'react'

const Comment = (props) => {

    const style = {
        marginTop: '10px'
    }

    return (
        <div style={style}>
            <div>Name: {props.name}</div>
            <div>
                {props.text}
            </div>
            <div>
                <button onClick={() => { props.deleteHandler(props.id) }}>X</button>
            </div>
        </div>
    )
}

export default Comment;