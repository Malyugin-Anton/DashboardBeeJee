import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'

import {
  task,
  tasks,
  taskReducer
} from './reducers'

import {
  fetchTasks
} from './actions.js'

const store = createStore(
  combineReducers({
    taskReducer
  }),
  applyMiddleware(thunk)
)

store.dispatch(fetchTasks());

console.log(store.getState());

store.subscribe(
  () => console.log(store.getState())
)

export default store