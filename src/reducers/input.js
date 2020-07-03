const input = (state = '', action) => {
    switch(action.type) {
        case 'TYPING_USERNAME':
            return state.username = action.payload;
        case 'TYPING_PASSWORD':
            return state.password = action.payload;
        default: 
            return state;
    }
}

export default input;