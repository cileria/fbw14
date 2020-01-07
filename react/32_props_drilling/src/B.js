import React from 'react';
import C from './C';

export default function B(props) {
    return (
        <div>
            B
            <C x={props.x} f={props.f} />
        </div>
    )
}
