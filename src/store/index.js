import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'

import {
  taskReducer
} from './reducers'

const store = createStore(
  combineReducers({
    data: taskReducer
  }),
  applyMiddleware(thunk)
)

store.subscribe(
  () => console.log(store.getState())
)

export default store