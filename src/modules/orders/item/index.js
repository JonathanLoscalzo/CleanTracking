import { replace } from 'connected-react-router'
import { toast } from 'react-toastify';

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

export const goBack = () => dispatch => {
    // TODO: mensaje cancelada
    dispatch({ type: LOAD_REMOVE_ORDER })
    dispatch(replace('/order'));
}