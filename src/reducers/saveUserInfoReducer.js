const saveUserInfo = (state = {}, action) => {
    if (action.type === 'SAVE_USER_INFO') {
        return state = action.payload;
    } else {
        return state;
    }
}

export default saveUserInfo;