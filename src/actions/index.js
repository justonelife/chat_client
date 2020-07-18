export const isLogged = () => {
    return {
        type: 'HAS_LOGIN'
    }
}
export const saveUserInfo = (data) => {
    return {
        type: 'SAVE_USER_INFO',
        payload: data
    }
}
export const saveRooms = (rooms) => {
    return {
        type: 'SAVE_ROOMS',
        payload: rooms
    }
}