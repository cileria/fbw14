import React, { Component } from 'react'
import Article from './Article';

export default class Content extends Component {
    render() {
        return (
            <div>
                Content
                <Article />
                <Article />
                <Article />
            </div>
        )
    }
}
