export const typingUsername = (val) => {
    return {
        action: 'TYPING_USERNAME',
        payload: val
    }
}
export const typingPassword = (val) => {
    return {
        action: 'TYPING_PASSWORD',
        payload: val
    }
}