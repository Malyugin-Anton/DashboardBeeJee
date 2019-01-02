import Axios from 'axios';
import md5 from 'md5';
import strictUriEncode from 'strict-uri-encode';

// API URL
const apiUrlPost = 'https://uxcandy.com/~shapoval/test-task-backend/create?developer=0xff';

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

export const logoutUser = (login) => {
  return {
    type: 'LOGOUT',
    login
  }
}

export const fetchTasks = (page = 1, field = 'id', direction = 'asc') => {
  return (dispatch) => {
    return Axios.get(`https://uxcandy.com/~shapoval/test-task-backend/?developer=0xff&page=${page}&sort_field=${field}&sort_direction=${direction}`)
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
          dispatch(addTaskSuccess(res.data.message))
        })
        .catch(error => {
          throw (error);
        });
  }
}

// Выпослинть url кодирвование параметров
// После token должно быть последним
// RFC 3986 (например, строка "example@example.com" кодируется в "example%40example.com")
// (получится, например, status=0&text=SomeText&token=beejee)
// рассчитать md5-хеш от URL-кодированной строки запроса (md5(params_string)) и отправить этот md5-хеш в поле 'signature' в POST вместе с другими параметрами

export const editTask = (id, text, status) => {

  let urlEdit = `https://uxcandy.com/~shapoval/test-task-backend/edit/${id}?developer=0xff`;

  let stringResponsive = `status=${strictUriEncode(status)}&text=${strictUriEncode(text)}&token=beejee`;

  let data = new FormData();

  data.set('status', status);
  data.set('text', text);
  data.set('signature', md5(stringResponsive));
  data.set('token', 'beejee');


  return (dispatch) => {
    return Axios.post(urlEdit, data)
      .then(res => {
        console.log(res.data)
        // dispatch(fetchTasksSuccess(res.data))
      })
      .catch(error => {
        throw (error);
      });
  }
}