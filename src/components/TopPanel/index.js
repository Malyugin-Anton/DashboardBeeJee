import React from 'react'

import {
  Button
} from 'antd';

const TopPanel = ({
    showModal
  }) => {

  return (
    <div className="top-panel">
      <Button type="primary" onClick={() => showModal()}>
        LOGIN
      </Button>
    </div>
  )

}

export default TopPanel;