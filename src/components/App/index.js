import React from 'react';
import {
  connect
} from 'react-redux'

import {
  fetchTasks, loginUser, addNewTask, editTask
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
    this.props.onAddTask(username, email, text)

    this.setState({
      visibleAddTask: false
    })
  }

  handleCancelAddTask = () => {
    this.setState({
      visibleAddTask: false
    })
  }

  handleEditTask = (id, text, status) => {
    console.log(id)
    console.log(text)
    console.log(status)

    this.props.onEditTask(id, text, status)
  }

  render() {
    const { visibleLogin, visibleAddTask } = this.state

    return(
      <div className="app">
      {
        (this.props.tasks.length !== 0)
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
              <MyTable 
                tasks={this.props.tasks} 
                login={this.props.login}
                handleEditTask={this.handleEditTask}
                />
              <MyPagination
                handlePage={this.handlePage} 
                totalCount={this.props.count}
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
    tasks: state.data,
    count: state.count,
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
    },
    onAddTask(username, email, text) {
      dispatch(addNewTask(username, email, text))
    },
    onEditTask(id,text, status) {
      dispatch(editTask(id, text, status))
    }
  })
)(App)
