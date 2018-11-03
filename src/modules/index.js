import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import home from './home';
import order from './orders'
import auth from './auth'

export default combineReducers({
    form: formReducer,
    home,
    order,
    auth
})