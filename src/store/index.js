import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'

import {
  taskReducer,
  pageReducer,
  sortFieldReducer,
  directionReducer
} from './reducers'

const store = createStore(
  combineReducers({
    data: taskReducer,
    page: pageReducer,
    field: sortFieldReducer,
    direction: directionReducer
  }),
  applyMiddleware(thunk)
)

store.subscribe(
  () => console.log(store.getState())
)

export default store