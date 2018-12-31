import React from 'react'

import {
  Button
} from 'antd';

const TopPanel = ({
    showModal,
    login
  }) => {

  return (
    <div className="top-panel">
      {
        (!login) 
        ? <Button type="primary" onClick={() => showModal()}>
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