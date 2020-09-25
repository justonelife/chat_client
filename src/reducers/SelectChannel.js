const SelectChannel = (state = sessionStorage.getItem('selected_channel') || '', action) => {
    switch (action.type) {
        case 'SELECT_CHANNEL':
            return state = action.payload;
        default: 
            return state;
    }
}

export default SelectChannel;