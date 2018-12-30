import React from 'react';
import {
  connect
} from 'react-redux'

const App = ({
    tasks
  }) => {
  console.log(tasks);
  return (
    <h1> Start </h1>
  )
}

export default connect(
  state => ({
    tasks: state.tasks
  }),
  null
)(App)

// export default App;
