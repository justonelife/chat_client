const saveRoomsReducer = (state = [], action) => {
    if (action.type === 'SAVE_ROOMS') {
        return state = action.payload;
    } else {
        return state;
    }
}

export default saveRoomsReducer;