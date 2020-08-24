const MembersBarState = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_MEMBERS_BAR':
            return state = !state;
        default:
            return state;
    }
}

export default MembersBarState;