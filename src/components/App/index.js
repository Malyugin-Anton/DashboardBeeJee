import React from 'react';
import {
  connect
} from 'react-redux'

import MyTable from '../MyTable'


const App = ({
    tasks
  }) => {
  return (
    <div className="app">
      <MyTable tasks={tasks}/>
    </div>
  )
}

export default connect(
  state => ({
    tasks: state.tasks
  }),
  null
)(App)

// export default App;
