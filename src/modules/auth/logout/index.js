
export const logout = () => (dispatch) => {
    localStorage.removeItem('JWT_LOGIN');
    localStorage.removeItem('USER')
    window.location.reload()
}