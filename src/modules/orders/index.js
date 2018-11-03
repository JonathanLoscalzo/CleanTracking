
import { combineReducers } from 'redux'

import list from './list'
import create from './create'
import update from './update'
import remove from './remove'
import item from './item'

export default combineReducers({
    list,
    create,
    update,
    remove,
    item
})

