import Axios from 'axios';

// API URL
const apiUrlOld = 'http://57c64baac1fc8711008f2a82.mockapi.io/book';
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


// Sync Action
export const fetchBooksSuccess = (books) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    books
  }
};

//Async Action
export const fetchBooks = () => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    return Axios.get(apiUrlOld)
      .then(response => {
        // Dispatch another action
        // to consume data
        dispatch(fetchBooksSuccess(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};