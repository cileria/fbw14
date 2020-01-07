import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postComments } from './actions';

class NewComment extends Component {
    
    state = {
        name: '',
        text: ''
    }
    
    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    postComments = () => {
        this.props.postComments(
            {
                name:this.state.name,
                text:this.state.text
            }
        )
    }

    render() {
        return (
            <div style={{
                marginRight: '15px'
            }}>
                    <input type="text" name="name" placeholder="Enter name" onChange={this.onChangeHandler} />
                    <textarea rows="10" name="text" onChange={this.onChangeHandler} />
                    <button onClick={this.postComments}>Create comment</button>
            </div>
        )
    }
}

export default connect(null, { postComments })(NewComment);