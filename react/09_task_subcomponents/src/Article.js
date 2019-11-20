import React, { Component } from 'react';
import randomstring from 'randomstring';

export default class Article extends Component {
    
    render() {
        return (
            <div className="article">
                {randomstring.generate(25)}
            </div>
        )
    }
}