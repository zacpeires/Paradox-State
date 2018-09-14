import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import user from './user'
import enquiry from './enquiry'

const reducer = combineReducers({user, enquiry})

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
);

export default store;
export * from './user'
export * from './enquiry'
