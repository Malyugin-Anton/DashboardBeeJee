import React from 'react'

import {
  Table,
  Icon,
  Tag,
  Button
} from 'antd'

class MyTable extends React.Component {

  state = {
    edit: false,

    columns: [{
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
    }, {
      title: 'action',
      dataIndex: 'action',
      className: this.props.login ? "show" : "hide",
      render: () => {
        return this.state.edit 
          ? <Button onClick={this.handleSave}>Save</Button>
          : <Button onClick={this.handleEdit}>Edit</Button> 
      }
    }]
  }

  handleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  handleSave = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  render() {
    const { columns } = this.state

    return <Table rowKey="id" pagination={false} columns={columns} dataSource={this.props.tasks} />
  }
}

export default MyTable