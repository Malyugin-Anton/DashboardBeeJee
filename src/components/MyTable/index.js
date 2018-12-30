import React from 'react'

import {
  Table,
  Icon,
  Tag
} from 'antd'

const columns = [{
  title: 'ID',
  dataIndex: 'id',
  key: 'id'
}, {
  title: 'username',
  dataIndex: 'username',
  key: 'username',
}, {
  title: 'email',
  dataIndex: 'email',
  key: 'email',
  render: (email) => {
    return <Tag color="blue" key={email}>{email}</Tag>
  }
}, {
  title: 'text',
  key: 'text',
  dataIndex: 'text'
}, {
  title: 'status',
  key: 'status',
  dataIndex: 'status',
  render: (status) => (
    ( status ) ? <Icon type="question-circle" theme="twoTone" /> : <Icon type="check-circle" theme="twoTone" />
  ),
}];

const MyTable = ({tasks}) => {
  return <Table pagination={{ pageSize: 3 }} columns={columns} dataSource={tasks} />
}

export default MyTable