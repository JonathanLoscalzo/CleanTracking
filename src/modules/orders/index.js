
import { combineReducers } from 'redux'

import list from './list'
import create from './create'
import update from './update'
import remove from './remove'

export default combineReducers({
    list,
    create,
    update,
    remove
})

