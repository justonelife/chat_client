export const saveName = (name) => {
    return {
        type: 'SAVE_NAME',
        payload: name
    }
}
export const saveAvatar = (url) => {
    return {
        type: 'SAVE_AVATAR',
        payload: url
    }
}
export const saveRoomsData = (data) => {
    return {
        type: 'SAVE_ROOMS_DATA',
        payload: data
    }
}
export const selectChannel = (channel_id) => {
    return {
        type: 'SELECT_CHANNEL',
        payload: channel_id
    }
}
export const toggleMembersBar = () => {
    return {
        type: 'TOGGLE_MEMBERS_BAR'
    }
}
export const increaseAvatarUpdateCount = () => {
    return {
        type: 'INCREASE_AVATAR_UPDATE_COUNT'
    }
}