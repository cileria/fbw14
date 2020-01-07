import React, { Component } from 'react';
import Comment from './Comment';
import { connect } from 'react-redux';
import { getComments, deleteComment } from './actions';

class Comments extends Component {
    
    componentDidMount() {
        this.props.getComments();
    }

    render() {
        return (
            <div style={{
                marginLeft: '15px'
            }}>
                { this.props.comments && 
                  this.props.comments.map( (comment) => 
                      <Comment 
                        name={comment.name} text={comment.text} 
                        id={comment.id}
                        deleteHandler={this.props.deleteComment}
                        key={comment.id}
                      />
                  )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    comments: state.comments
});

export default connect(mapStateToProps, { getComments, deleteComment })(Comments);