import React from 'react'

import {
  Pagination
} from 'antd'

const MyPagination = ({totalCount, handlePage}) => {

  

  return (
    <div className="myPagination">
      <Pagination onChange={(page) => handlePage(page)} pageSize={3} defaultCurrent={1} total={+totalCount} />
    </div>
  )
}

export default MyPagination