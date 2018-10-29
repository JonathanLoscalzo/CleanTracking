import { push } from 'connected-react-router'
import * as _ from 'lodash'
import { RESPONSE_CREATE_ORDERS } from '../create'
import { RESPONSE_UPDATE_ORDERS } from '../update'
import { RESPONSE_REMOVE_ORDERS } from '../remove'
export const REQUEST_ORDERS = "ORDERS/LIST/REQUEST_ORDERS"
export const RESPONSE_ORDERS = "ORDERS/LIST/RESPONSE_ORDERS"
export const ERROR_ORDERS = "ORDERS/LIST/ERROR_ORDERS"

let initialState = {
    orders: [],
    loading: false,
    error: null
}

export default function reducer(state = initialState, action = {}) {
    let diff;

    switch (action.type) {

        case RESPONSE_CREATE_ORDERS:
            return { ...state, orders: [...state.orders, action.payload] }
        case RESPONSE_UPDATE_ORDERS:
            diff = _.differenceWith(state.orders, [action.payload], (a, b) => a.id === b.id);
            return { ...state, orders: [...diff, action.payload] }
        case RESPONSE_REMOVE_ORDERS:
            diff = _.differenceWith(state.orders, [action.payload], (a, b) => a.id === b.id);
            return { ...state, orders: [...diff] }

        case REQUEST_ORDERS:
            return { ...state, loading: true }
        case RESPONSE_ORDERS:
            return { ...state, loading: false };
        //return { ...state, loading: false, orders: action.payload }
        case ERROR_ORDERS:
            return { ...state, loading: false, orders: [], error: action.error }

        default:
            return state;
    }
}

export const load = () => (dispatch) => {
    dispatch({ type: REQUEST_ORDERS })

    // llamada a la api
    dispatch({ type: RESPONSE_ORDERS, orders: [] })
}

export const goToCreate = () => (dispatch) => {
    dispatch(push('/order/new'))
}

export const goToEdit = (id) => (dispatch, state) => {
    //let order = state().order.list.orders.find(o => o.id === id);
    //if (order != null) {
    //dispatch({ type: LOAD_UPDATE_ORDER, payload: order })
    dispatch(push(`/order/update/${id}`))
    // } else {
    //     // error
    // }
}