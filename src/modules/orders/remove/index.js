import { replace } from 'connected-react-router'
import { toast } from 'react-toastify';

export const REQUEST_REMOVE_ORDER = "ORDERS/REMOVE/REQUEST_ORDERS"
export const RESPONSE_REMOVE_ORDERS = "ORDERS/REMOVE/RESPONSE_ORDERS"
export const ERROR_REMOVE_ORDERS = "ORDERS/REMOVE/ERROR_ORDERS"

export const LOAD_REMOVE_ORDER = "ORDERS/REMOVE/LOAD_REMOVE_ORDER"
export const LOADED_REMOVE_ORDER = "ORDERS/REMOVE/LOADED_REMOVE_ORDER"
export const LOADED_ERROR_ORDER = "ORDERS/REMOVE/LOADED_ERROR_ORDER"

let initialState = {
    order: null,
    loading: true,
    error: null,
    isOpen: false
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {

        case LOAD_REMOVE_ORDER:
            return { ...initialState }
        case LOADED_REMOVE_ORDER:
            return { ...state, loading: false, order: action.payload, isOpen: true }
        case LOADED_ERROR_ORDER:
            return { ...state, loading: false, order: null, error: action.error }

        case REQUEST_REMOVE_ORDER:
            return { ...state, loading: true }
        case RESPONSE_REMOVE_ORDERS:
            return { ...state, loading: false, order: null }
        case ERROR_REMOVE_ORDERS:
            return { ...state, loading: false, error: action.error }

        default:
            return state;
    }
}

export const load = (id) => (dispatch, state) => {
    dispatch({ type: LOAD_REMOVE_ORDER })

    // TODO: TRAERLO DESDE EL BACKEND PARA VALIDAR
    let order = state().order.list.orders.find(x => x.id === id);

    if (order) {
        dispatch({ type: LOADED_REMOVE_ORDER, payload: order })
    } else {
        // TODO: ERROR. toast
        dispatch(replace('/order'));
        toast.warn("No se puede editar el pedido seleccionado")
    }
}

export const remove = () => (dispatch, state) => {
    dispatch({ type: REQUEST_REMOVE_ORDER })

    // TODO: llamada a api para remover, y luego dispatch
    let order = state().order.remove.order;
    dispatch({ type: RESPONSE_REMOVE_ORDERS, payload: order })
    toast.success("Pedido eliminado")

    dispatch(replace('/order'));
    // TODO: caso de error
}

export const goBack = () => dispatch => {
    // TODO: mensaje cancelada
    dispatch({ type: LOAD_REMOVE_ORDER })
    dispatch(replace('/order'));
}