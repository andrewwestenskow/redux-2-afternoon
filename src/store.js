import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'

import budgetReducer from './ducks/budgetReducer'
import usersReducer from './ducks/usersReducer'

const rootReducer = combineReducers({
  budget: budgetReducer,
  users: usersReducer
})

const store = createStore(rootReducer, applyMiddleware(promiseMiddleware))

export default store