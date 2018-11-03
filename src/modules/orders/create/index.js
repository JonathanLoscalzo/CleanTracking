import { replace } from 'connected-react-router'
import { NUEVO } from '../states';
import { toast } from 'react-toastify';
import orderapi from '../../common/api/orderApi';

export const LOAD_CREATE_ORDER = "ORDERS/CREATE/LOAD_CREATE_ORDER"
export const REQUEST_CREATE_ORDER = "ORDERS/CREATE/REQUEST_ORDERS"
export const RESPONSE_CREATE_ORDERS = "ORDERS/CREATE/RESPONSE_ORDERS"
export const ERROR_CREATE_ORDERS = "ORDERS/CREATE/ERROR_ORDERS"

let initialState = {
    order: { products: [{ name: '' }] },
    loading: false,
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
            return { ...state, loading: false, error: action.error }
        default:
            return state;
    }
}

export const create = (order) => (dispatch) => {
    dispatch({ type: REQUEST_CREATE_ORDER })

    let placeOrder = { ...order, orderPlaced: new Date(), state: NUEVO }

    orderapi.PlaceOrder(placeOrder)
        .then((response)=>{
            dispatch({ type: RESPONSE_CREATE_ORDERS, payload: response.data })
            dispatch(replace('/order'));
            toast.success("Pedido creado")
        })
        .catch(()=>{
            toast.error("Error al crear pedido")
        })
}

export const load = () => dispatch => {
    dispatch({ type: LOAD_CREATE_ORDER, payload: initialState })
}

export const goBack = () => dispatch => {
    dispatch(replace('/order'));
    toast.info("Creación cancelada")
}