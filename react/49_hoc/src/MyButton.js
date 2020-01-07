import React from 'react';
import MyButtonWrapper from './MyButtonWrapper'

const MyButton = (props) => {
    return (
        <button>I am some Button and x = {props.x}</button>
    )
}

export default MyButtonWrapper(MyButton);