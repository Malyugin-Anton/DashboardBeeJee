export const taskReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TASK_SUCCESS':
      return [
        ...state,
        action.payload
      ];
    case 'FETCH_TASKS_SUCCESS':
      return action.tasks;
    default:
      return state;
  }
}

export const countReducer = (state = 1, action) => {
  switch(action.type) {
    case 'FETCH_TASKS_SUCCESS_COUNT':
      return action.count;
    default:
      return state
  }
}

export const pageReducer = (state = 1, action) => {
  switch(action.type) {
    case 'CHANGE_PAGE':
      return action.page;
    default:
      return state;
  }
}

export const sortFieldReducer = (state = 'id', action) => {
  switch (action.type) {
    case 'CHANGE_FIELD':
      return action.field;
    default:
      return state;
  }
}

export const directionReducer = (state = 'asc', action) => {
  switch (action.type) {
    case 'CHANGE_DIRECTION':
      return action.direction;
    default:
      return state;
  }
}

export const loginReducer = (state = true, action) => {
  switch(action.type) {
    case 'LOGIN':
      return action.login;
    default:
      return state;
  }
}

