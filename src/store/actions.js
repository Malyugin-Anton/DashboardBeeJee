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

export const fetchTasks = () => {
  return (dispatch) => {
    return Axios.get(apiUrl)
      .then(res => {
        dispatch(fetchTasksSuccess(res.data))
      })
      .catch(e => {
        throw (e)
      })
  }
}

export const fetchTasksByPage = (page) => {
  return (dispatch) => {
    return Axios.get(apiUrl + '&page=' + page)
      .then(res => {
        dispatch(fetchTasksSuccess(res.data))
      })
      .catch(e => {
        throw (e)
      })
  }
}