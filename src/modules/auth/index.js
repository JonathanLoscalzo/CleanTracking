export const AUTH_REQUEST = 'AUTH/REQUEST';
export const AUTH_RESPONSE = 'AUTH/RESPONSE';
export const AUTH_ERROR = 'AUTH/ERROR';
export const AUTH_CANCEL = 'AUTH/CANCEL';
export const AUTH_LOGOUT = 'AUTH/LOGOUT';

const initialState = {
    loading: false,
    authenticated: false,
    errorMessage: null
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case AUTH_REQUEST:
            return { ...state, loading: true };
        case AUTH_RESPONSE:
            return { ...state, loading: false, authenticated: true };
        case AUTH_ERROR:
            return {
                ...state,
                loading: false,
                authenticated: false,
                errorMessage: action.error
            };
        case AUTH_CANCEL:
            return { ...state, loading: false, authenticated: false };
        case AUTH_LOGOUT:
            return state;
        default:
            return state;
    }
}