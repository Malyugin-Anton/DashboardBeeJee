import Axios from 'axios';

// API URL
const apiUrl = 'https://uxcandy.com/~shapoval/test-task-backend/?developer=Name';

// Sync Action
export const fetchTasksSuccess = (tasks) => {
  return {
    type: 'FETCH_TASKS_SUCCESS',
    tasks
  }
}

export const changePage = (page) => {
  return {
    type: 'CHANGE_PAGE',
    page
  }
}

export const changeSortField = (field) => {
  return {
    type: 'CHANGE_FIELD',
    field
  }
}

export const changeDirection = (direction) => {
  return {
    type: 'CHANGE_DIRECTION',
    direction
  }
}

export const loginUser = (login) => {
  return {
    type: 'LOGIN',
    login
  }
}

export const fetchTasks = (page = 1, field = 'id', direction = 'asc') => {
  return (dispatch) => {
    return Axios.get(`https://uxcandy.com/~shapoval/test-task-backend/?developer=Name&page=${page}&sort_field=${field}&sort_direction=${direction}`)
      .then(res => {
        dispatch(fetchTasksSuccess(res.data))
        dispatch(changePage(page))
        dispatch(changeSortField(field))
        dispatch(changeDirection(direction))
      })
      .catch(e => {
        throw (e)
      })
  }
}