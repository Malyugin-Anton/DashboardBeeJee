import React from 'react';
import {
  connect
} from 'react-redux'

import MyTable from '../MyTable'
import MyPagination from '../MyPagination'
import Loader from '../Loader'

class App extends React.Component {

  render() {

    return(
      <div className="app">
      {
        (this.props.data.length !== 0)
          ? (
            <div>
              <MyTable tasks={this.props.data.message.tasks} />
              <MyPagination totalCount={this.props.data.message.total_task_count}/ >
            </div>
          )
          : <Loader />
      }
      </div>
    )
  }
}

export default connect(
  state => ({
    data: state.data
  }),
  null
)(App)

// export default App;
