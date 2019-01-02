import React from 'react'

import {
  Modal,
  Icon,
  Input,
  Form
} from 'antd';

const AddTaskModal = ({
  visible,
  handleAddTask,
  handleCancel
}) => {
  let _username, _email, _text


  return (
    <Modal
        title="Login"
        visible={visible}
        onOk={() => handleAddTask(_username, _email, _text)}
        onCancel={() => handleCancel()}
      >
        <Form layout = "vertical">
          <Form.Item>
            <Input onChange={(e) => _username = e.target.value} type="text" placeholder="Username" />
          </Form.Item>
          <Form.Item>
            <Input onChange={(e) => _email = e.target.value} type="email" placeholder="Email" />
          </Form.Item>
          <Form.Item>
            <Input onChange={(e) => _text = e.target.value} type="text" placeholder="Text" />
          </Form.Item>
        </Form>
      </Modal>
  )
}

export default AddTaskModal;