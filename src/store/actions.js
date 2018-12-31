import Axios from 'axios';

// API URL
const apiUrlPost = 'https://uxcandy.com/~shapoval/test-task-backend/create?developer=Name';

// Sync Action
export const fetchTasksSuccess = (tasks) => {
  return {
    type: 'FETCH_TASKS_SUCCESS',
    tasks
  }
}

export const addTaskSuccess = (data) => {
  return {
    type: 'ADD_TASK_SUCCESS',
    payload: {
      id: data.id,
      username: data.username,
      email: data.email,
      text: data.text,
      status: data.status
    }
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

export const addTaskSuccessCount = (count) => {
  return {
    type: 'FETCH_TASKS_SUCCESS_COUNT',
    count
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
        dispatch(fetchTasksSuccess(res.data.message.tasks))
        dispatch(addTaskSuccessCount(res.data.message.total_task_count))
        dispatch(changePage(page))
        dispatch(changeSortField(field))
        dispatch(changeDirection(direction))
      })
      .catch(e => {
        throw (e)
      })
  }
}

export const addNewTask = (username, email, text) => {
  let data = new FormData();

  data.set('username', username);
  data.set('email', email);
  data.set('text', text);

  return (dispatch) => {
    return Axios.post(apiUrlPost, data)
        .then(res => {
          console.log(res.data.message);
          dispatch(addTaskSuccess(res.data.message))
        })
        .catch(error => {
          throw (error);
        });
  }
}