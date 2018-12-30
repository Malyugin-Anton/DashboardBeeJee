export const taskReducer = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_TASKS_SUCCESS':
      return action.tasks;
    default:
      return state;
  }
}