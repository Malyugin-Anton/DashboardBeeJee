import React from 'react'

import {
  Button
} from 'antd';

const TopPanel = ({
    showModalLogin,
    showModalAddTask,
    handleLogout,
    login
  }) => {

  return (
    <div className="top-panel">
      {
        (!login) 
        ? <Button type="primary" onClick={() => showModalLogin()}>
            LOGIN
          </Button>
        : <Button type="primary" onClick={() => handleLogout(false)}>
            LOGOUT
          </Button>
      }
      <Button icon="plus" onClick={() => showModalAddTask()}> add task </Button>
    </div>
  )

}

export default TopPanel;