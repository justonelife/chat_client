const channelSettingReducer = (state = false, action) => {
    switch(action.type) {
        case 'OPEN_CHANNEL_SETTING':
            return state = true;
        case 'CLOSE_CHANNEL_SETTING':
            return state = false;
        default:
            return state;
    }
}

export default channelSettingReducer;