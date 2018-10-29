import { combineReducers } from 'redux'
import home from './home';
import order from './orders'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    form: formReducer,
    home,
    order
})