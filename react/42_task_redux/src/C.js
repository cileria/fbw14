import React, { Component } from 'react'
import D from './D';
import E from './E';

class C extends Component {
    render() {
        return (
            <div>
                C
                <D />
                <E />
            </div>
        )
    }
}

export default C; // erstellt eine zweite klasse C