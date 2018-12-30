import React from 'react'

import { Spin, Icon } from 'antd';

const antIcon = <Icon type="loading" style={{ fontSize: 80 }} spin />;

const Loader = () => {
  return(
    <div className="loader">
      <Spin indicator={antIcon} />
    </div>
  )
}

export default Loader