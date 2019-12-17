const initialState = {
    users: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOAD_USERS':
            return {
                users: action.value
            }
        case 'SEARCH_USERS':
            return {
                users: action.value
            }
        default: 
            return state;
    }
}

export default reducer;