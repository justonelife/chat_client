const AvatarUpdateCount = (state = 0, action) => {
    switch (action.type) {
        case 'INCREASE_AVATAR_UPDATE_COUNT':
            return state = state + 1;
        default:
            return state;
    }
}

export default AvatarUpdateCount;