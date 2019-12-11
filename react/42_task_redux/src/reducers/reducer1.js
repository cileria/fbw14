const initialState = {
    a: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'RANDOMSTRING':
            return {
                ...state,
                a: action.value
            }
        default:
            return state
    }    
}

export default reducer;