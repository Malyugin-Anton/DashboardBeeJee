import Axios from 'axios';

// API URL
const apiUrl = 'http://57c64baac1fc8711008f2a82.mockapi.io/book';
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
    return Axios.get(apiUrl)
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