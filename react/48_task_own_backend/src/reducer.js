const initialState = {
    comments: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_COMMENTS':
            return {
                comments: action.value
            }
        case 'POST_COMMENTS':
            return {
                comments: [
                    ...state.comments,
                    action.value
                ]
            }
        case 'DELETE_COMMENTS':
            return {
                comments: state.comments.filter( 
                    (comment) => comment.id !== action.value
                )
            }                        
        default: 
            return state;
    }
}

export default reducer;