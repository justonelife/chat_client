const SelectChannel = (state = '', action) => {
    switch (action.type) {
        case 'SELECT_CHANNEL':
            return state = action.payload;
        default: 
            return state;
    }
}

export default SelectChannel;