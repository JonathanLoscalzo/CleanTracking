import { replace } from 'connected-react-router'
import { toast } from 'react-toastify'
import { change } from 'redux-form'

import orderapi from '../../common/api/orderApi';

export const REQUEST_UPDATE_ORDER = "ORDERS/UPDATE/REQUEST_ORDERS"
export const RESPONSE_UPDATE_ORDERS = "ORDERS/UPDATE/RESPONSE_ORDERS"
export const ERROR_UPDATE_ORDERS = "ORDERS/UPDATE/ERROR_ORDERS"
export const LOAD_UPDATE_ORDER = "ORDERS/UPDATE/LOAD_UPDATE_ORDER"
export const LOADED_UPDATE_ORDER = "ORDERS/UPDATE/LOADED_UPDATE_ORDER"
export const LOADED_ERROR_ORDER = "ORDERS/UPDATE/LOADED_ERROR_ORDER"

let initialState = {
    order: null,
    item_selectable: { product: '', quantity: '' },
    loading: true,
    error: null
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD_UPDATE_ORDER:
            return { ...initialState }
        case LOADED_UPDATE_ORDER:
            return { ...state, loading: false, order: action.payload }
        case LOADED_ERROR_ORDER:
            return { ...state, loading: false, order: null }

        case REQUEST_UPDATE_ORDER:
            return { ...state, loading: true }
        case RESPONSE_UPDATE_ORDERS:
            return { ...state, loading: false, order: {} }
        case ERROR_UPDATE_ORDERS:
            return { ...state, loading: false, error: action.error }

        default:
            return state;
    }
}

export const load = (id) => (dispatch, state) => {
    dispatch({ type: LOAD_UPDATE_ORDER })

    setTimeout(() => { }, 5000)

    //TODO: Traerlo desde el backend.
    let order = state().order.list.orders.find(x => x.id === id);

    if (order) {
        dispatch({ type: LOADED_UPDATE_ORDER, payload: order })
    } else {
        // TODO error en caso que no exista o no se pueda modificar
        dispatch(replace('/order'));
        toast.warn("No se puede editar el pedido seleccionado")
    }
}

export const update = (order) => (dispatch) => {
    dispatch({ type: REQUEST_UPDATE_ORDER })

    let placeOrder = { ...order }

    orderapi.EditPlaceOrder(placeOrder)
        .then((response) => {
            dispatch({ type: RESPONSE_UPDATE_ORDERS, payload: response.data })
            dispatch(replace('/order'));
            toast.success("Pedido modificado")
        })
        .catch(() => {
            toast.error("Error al modificar pedido")
        })
}

export const goBack = () => dispatch => {
    // TODO: mostrar mensaje de volver toast
    dispatch(replace('/order'));
    toast.info("Edición cancelada")
}

export const add = (fields, item) => (dispatch, state) => {
    if (item) {
        fields.push(item)
        dispatch(change('order/update', 'item_selectable', initialState.item_selectable))
    }
}

export const remove = (fields, index, item) => (dispatch, state) => {
    fields.remove(index);
    if (item) {
        //dispatch({ type: ADD_AUTOCOMPLETE_TASK, payload: item })
    }
}