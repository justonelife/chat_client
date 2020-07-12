export const isLogged = () => {
    return {
        type: 'HAS_LOGIN'
    }
}
export const openChannelSetting = () => {
    return {
        type: 'OPEN_CHANNEL_SETTING'
    }
}
export const closeChannelSetting = () => {
    return {
        type: 'CLOSE_CHANNEL_SETTING'
    }
}
export const selectChannel = (data) => {
    return {
        type: 'SELECT_CHANNEL',
        payload: data
    }
}
export const grantUsername = (name) => {
    return {
        type: 'GRANT_USERNAME',
        payload: name
    }
}