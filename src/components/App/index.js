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
import LoginModal from '../LoginModal'
import AddTaskModal from '../AddTaskModal'

class App extends React.Component {

  state = {
    visibleLogin: false,
    visibleAddTask: false
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
    if (login === 'admin' && password === '123') {
      this.props.onLogin(true);

      this.setState({
        visibleLogin: false
      })
    }
  }

  handleCancelLogin = () => {
    this.setState({
      visibleLogin: false
    })
  }

  showModalLogin = () => {
    this.setState({
      visibleLogin: true
    })
  }

  showModalAddTask = () => {
    this.setState({
      visibleAddTask: true
    })
  }

  handleAddTask = (username, email, text) => {
    console.log(username);
    console.log(email);
    console.log(text);
  }

  handleCancelAddTask = () => {
    this.setState({
      visibleAddTask: false
    })
  }

  render() {
    const { visibleLogin, visibleAddTask } = this.state

    return(
      <div className="app">
      {
        (this.props.data.length !== 0)
          ? (
            <div>
              <TopPanel 
                showModalLogin={this.showModalLogin} 
                showModalAddTask={this.showModalAddTask} 
                login={this.props.login}/>
              <SortPanel 
                handleSort={this.handleSort} 
                handleDirection={this.handleDirection}
              />
              <MyTable tasks={this.props.data.message.tasks} />
              <MyPagination
                handlePage={this.handlePage} 
                totalCount={this.props.data.message.total_task_count}
              />
              <LoginModal
                visible={visibleLogin} 
                handleLogin={this.handleLogin} 
                handleCancel={this.handleCancelLogin}
              />
              <AddTaskModal 
                visible={visibleAddTask} 
                handleAddTask={this.handleAddTask} 
                handleCancel={this.handleCancelAddTask}
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
