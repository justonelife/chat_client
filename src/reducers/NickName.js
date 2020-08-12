const NickName = (state = '', action) => {
    switch (action.type) {
        case 'SAVE_NAME':
            return state = action.payload;
        default: 
            return state;
    }
}

export default NickName;