import { replace } from 'connected-react-router'
import { NUEVO } from '../states';
import { toast } from 'react-toastify';

const uui = require('uuid/v4');

export const LOAD_CREATE_ORDER = "ORDERS/CREATE/LOAD_CREATE_ORDER"
export const REQUEST_CREATE_ORDER = "ORDERS/CREATE/REQUEST_ORDERS"
export const RESPONSE_CREATE_ORDERS = "ORDERS/CREATE/RESPONSE_ORDERS"
export const ERROR_CREATE_ORDERS = "ORDERS/CREATE/ERROR_ORDERS"

let initialState = {
    order: { products: [{ name: '' }] },
    loading: true,
    error: null
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD_CREATE_ORDER:
            return { ...state }

        case REQUEST_CREATE_ORDER:
            return { ...state, loading: true }
        case RESPONSE_CREATE_ORDERS:
            return { ...state, loading: false }
        case ERROR_CREATE_ORDERS:
            return { ...state, loading: false, orders: [], error: action.error }
        default:
            return state;
    }
}

export const create = (order) => (dispatch) => {
    dispatch({ type: REQUEST_CREATE_ORDER })

    // TODO: llamada a la api para crear
    dispatch({ type: RESPONSE_CREATE_ORDERS, payload: { ...order, date: new Date(), state: NUEVO, id: uui() } })

    //TODO: caso de error verlo.
    dispatch(replace('/order'));
    toast.success("Pedido creado")
}

export const load = () => dispatch => {
    dispatch({ type: LOAD_CREATE_ORDER, payload: initialState })
}

export const goBack = () => dispatch => {
    // TODO: mensaje que volvió
    dispatch(replace('/order'));
    toast.info("Creación cancelada")
}