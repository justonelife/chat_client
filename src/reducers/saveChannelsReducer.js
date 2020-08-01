const saveChannelsReducer = (state = [], action) => {
    if (action.type === 'SAVE_CHANNELS') {
        return state = action.payload;
    } else {
        return state;
    }
}

export default saveChannelsReducer;