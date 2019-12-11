const initialState = {
    b: 0,
    c: 1
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT_B':
            return {
                ...state,
                b: state.b + 2
            }
        case 'INCREMENT_C':
            return {
                ...state,
                c: state.c + 2
            }
        case 'RESET':
            return {
                ...state,
                c: 1,
                b: 0
            }                        
        default:
            return state
    }
}

export default reducer;