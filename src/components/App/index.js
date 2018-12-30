import React from 'react';
import {
  connect
} from 'react-redux'

import {
  fetchTasksByPage,
  fetchTasksSort
} from '../../store/actions.js'

import MyTable from '../MyTable'
import MyPagination from '../MyPagination'
import Loader from '../Loader'
import SortPanel from '../SortPanel'

class App extends React.Component {

  handlePage = (page) => {
    this.props.onPage(page)
  }

  handleSort = (field) => {
    this.props.onSort(field)
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
    data: state.data
  }),
  dispatch => ({
    onPage(page) {
      dispatch(fetchTasksByPage(page))
    },
    onSort(field) {
      dispatch(fetchTasksSort(field))
    }
  })
)(App)

// fetchTasksByPage

// export default App;
