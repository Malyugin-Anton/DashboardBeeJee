import React from 'react'

import {
  Button
} from 'antd';

const TopPanel = ({
    showModalLogin,
    login
  }) => {

  return (
    <div className="top-panel">
      {
        (!login) 
        ? <Button type="primary" onClick={() => showModalLogin()}>
            LOGIN
          </Button>
        : <Button icon="plus">
            add task
          </Button>
      }
      
    </div>
  )

}

export default TopPanel;