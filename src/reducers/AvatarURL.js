const AvatarURL = (state = '', action) => {
    switch (action.type) {
        case 'SAVE_AVATAR':
            return state = action.payload;
        default: 
            return state;
    }
}

export default AvatarURL;