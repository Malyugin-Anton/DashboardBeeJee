export const task = (state = {}, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        id: action.id,
        username: action.username,
        email: action.email,
        text: action.text,
        status: action.status
      }
    default:
      return state
  }
}

export const tasks = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [
        ...state,
        task({}, action)
      ]
    case "REMOVE_ITEM":
      return state.filter(
        i => i.id !== action.id
      )
    case "TOGGLE_ITEM":
      return state.map(i => (i.id === action.id) ? { ...i,
        completed: !i.completed
      } : i)
    default:
      return state
  }
}

export const taskReducer = (state =[], action) => {
  switch(action.type) {
    case 'FETCH_TASKS_SUCCESS':
      return action.tasks;
    default:
      return state;
  }
}

// ./src/reducers/bookReducer.js
export const bookReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_SUCCESS':
      return action.books;
    default:
      return state;
  }
};