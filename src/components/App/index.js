import React from 'react';
import {
  connect
} from 'react-redux'

import {
  fetchTasks, loginUser
} from '../../store/actions.js'

import MyTable from '../MyTable'
import MyPagination from '../MyPagination'
import Loader from '../Loader'
import SortPanel from '../SortPanel'
import TopPanel from '../TopPanel'
import MyModal from '../MyModal'

class App extends React.Component {

  state = {
    visible: false
  }

  handlePage = (page) => {
    this.props.onRequest(page, this.props.field, this.props.direction);
  }

  handleSort = (field) => {
    this.props.onRequest(this.props.page, field, this.props.direction);
  }

  handleDirection = (direction) => {
    this.props.onRequest(this.props.page, this.props.field, direction);
  }

  handleLogin = (login, password) => {
    if (login == 'admin' && password == '123') {
      this.props.onLogin(true);

      this.setState({
        visible: false
      })
    }
  }

  handleCancel = () => {
    this.setState({
      visible: false
    })
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  render() {
    const { visible } = this.state

    return(
      <div className="app">
      {
        (this.props.data.length !== 0)
          ? (
            <div>
              <TopPanel showModal={this.showModal}/>
              <SortPanel 
                handleSort={this.handleSort} 
                handleDirection={this.handleDirection}
              />
              <MyTable tasks={this.props.data.message.tasks} />
              <MyPagination
                handlePage={this.handlePage} 
                totalCount={this.props.data.message.total_task_count}
              />
              <MyModal 
                visible={visible} 
                handleLogin={this.handleLogin} 
                handleCancel={this.handleCancel}
              />
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
    direction: state.direction,
    login: state.login
  }),
  dispatch => ({
    onRequest(page, field, direction) {
      dispatch(fetchTasks(page, field, direction))
    },
    onLogin(login) {
      dispatch(loginUser(login))
    }
  })
)(App)
