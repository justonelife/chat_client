const grantUsernameReducer = (state = '', action) => {
    switch (action.type) {
        case 'GRANT_USERNAME': 
            return state = action.payload;
        default:
            return state;
    }
}

export default grantUsernameReducer;