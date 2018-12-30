import React from 'react'

import {
  Pagination
} from 'antd'

const MyPagination = ({totalCount}) => {

  const onChange = (page) => {
    console.log(page);
  }

  return (
    <div className="myPagination">
      <Pagination onChange={onChange} pageSize={3} defaultCurrent={1} total={+totalCount} />
    </div>
  )
}

export default MyPagination