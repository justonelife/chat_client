const logStateReducer = (state = false, action) => {
    switch (action.type) {
        case 'HAS_LOGIN':
            return state = true;
        case 'HAS_LOGOUT':
            return state = false;
        default:
            return state;
    }
}

export default logStateReducer;