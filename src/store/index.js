import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'

import {
  task,
  tasks,
  bookReducer
} from './reducers'

import {
  fetchBooks
} from './actions.js'

const store = createStore(
  combineReducers({
    bookReducer
  }),
  applyMiddleware(thunk)
)

store.dispatch(fetchBooks());

console.log(store.getState());

store.subscribe(
  () => console.log(store.getState())
)

export default store