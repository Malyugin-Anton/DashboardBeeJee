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
  directionReducer,
  loginReducer,
  countReducer
} from './reducers'

const store = createStore(
  combineReducers({
    data: taskReducer,
    count: countReducer,
    page: pageReducer,
    field: sortFieldReducer,
    direction: directionReducer,
    login: loginReducer
  }),
  applyMiddleware(thunk)
)

store.subscribe(
  () => console.log(store.getState())
)

export default store