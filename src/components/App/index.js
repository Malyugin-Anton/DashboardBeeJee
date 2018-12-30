import React from 'react';
import {
  connect
} from 'react-redux'

import {
  fetchTasks
} from '../../store/actions.js'

import MyTable from '../MyTable'
import MyPagination from '../MyPagination'
import Loader from '../Loader'
import SortPanel from '../SortPanel'

class App extends React.Component {

  handlePage = (page) => {
    this.props.onRequest(page, this.props.field, this.props.direction);
  }

  handleSort = (field) => {
    this.props.onRequest(this.props.page, field, this.props.direction);
  }

  render() {

    return(
      <div className="app">
      {
        (this.props.data.length !== 0)
          ? (
            <div>
              <SortPanel handleSort={this.handleSort}/>
              <MyTable tasks={this.props.data.message.tasks} />
              <MyPagination
                handlePage={this.handlePage} 
                totalCount={this.props.data.message.total_task_count}/ >
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
    data: state.data,
    page: state.page,
    field: state.field,
    direction: state.direction
  }),
  dispatch => ({
    onRequest(page, field, direction) {
      dispatch(fetchTasks(page, field, direction))
    }
  })
)(App)

// fetchTasksByPage

// export default App;
