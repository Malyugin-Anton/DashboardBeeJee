import { createStore, combineReducers } from 'redux'
import {
  task, tasks
} from './reducers'

const stateData = {
  tasks: [
    {
      "id": 1,
      "username": "Test User",
      "email": "test_user_1@example.com",
      "text": "Hello, world!",
      "status": 10,
    }, {
      "id": 2,
      "username": "Test User 2",
      "email": "test_user_2@example.com",
      "text": "Hello from user 2!",
      "status": 0,
    }, {
      "id": 3,
      "username": "Test User 3",
      "email": "test_user_3@example.com",
      "text": "Hello from user 3!",
      "status": 0,
    },
    {
      "id": 4,
      "username": "Test User 4",
      "email": "test_user_4@example.com",
      "text": "Hello from user 4!",
      "status": 0,
    },
    {
      "id": 5,
      "username": "Test User 5",
      "email": "test_user_5@example.com",
      "text": "Hello from user 5!",
      "status": 0,
    },
    {
      "id": 6,
      "username": "Test User 6",
      "email": "test_user_6@example.com",
      "text": "Hello from user 6!",
      "status": 0,
    }
  ]
}

const store = createStore(
  combineReducers({
    tasks
  }),
  stateData
)

store.subscribe(
  () => console.log(store.getState())
)

export default store