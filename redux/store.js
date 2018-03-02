import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import user from './user'

let store = createStore(user,applyMiddleware(thunk));

export default store;