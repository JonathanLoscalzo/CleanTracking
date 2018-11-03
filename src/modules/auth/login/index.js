import { AUTH_REQUEST, AUTH_RESPONSE, AUTH_ERROR } from '../index'
import api from '../../common/api';
import { replace } from 'react-router-redux';

export const login = ({ username, password }) => (dispatch) => {
    dispatch({ type: AUTH_REQUEST })

    const url = 'users/authenticate';

    api.post(url, { username: username, password: password })
        .then((response) => {
            localStorage.setItem('USER', JSON.stringify(response.data))
            localStorage.setItem('JWT_LOGIN', response.data.token)
            dispatch(replace('/'))
            dispatch({ type: AUTH_RESPONSE, payload: response.data })
        })
        .catch(() => {
            //toast.error('Ocurrió un error');
            dispatch({ type: AUTH_ERROR, error: 'Las credenciales no son correctas, intente nuevamente.' })
        });
}