const RoomsData = (state = [], action) => {
    switch (action.type) {
        case 'SAVE_ROOMS_DATA':
            return state = action.payload;
        default:
            return state;
    }
}

export default RoomsData;