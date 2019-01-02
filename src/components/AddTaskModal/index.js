import React from 'react'

import {
  Modal,
  Input,
  Form
} from 'antd';

const AddTaskModal = ({
  visible,
  handleAddTask,
  handleCancel,
  form
}) => {

  const { getFieldDecorator, validateFieldsAndScroll } = form;

  const handleOk = () => {
    validateFieldsAndScroll((err, values) => {
      if (!err) {
        handleAddTask(values.username, values.email, values.text)

        form.resetFields()
      } 
    }) 
  }

  return (
    <Modal
        title="Add new task"
        visible={visible}
        onOk={() => handleOk()}
        onCancel={() => {
          handleCancel()
          form.resetFields()
        }}
      >
        <Form layout = "vertical">
          <Form.Item>
            {getFieldDecorator('username', {
                rules: [{
                  required: true, message: 'Please input your username!',
                }, {
                  value: () => {if(!visible) return ''}
                }],
              })(
                <Input type="text" placeholder="Username" />
              )}
          </Form.Item>
          <Form.Item>
              {getFieldDecorator('email', {
                rules: [{
                  type: 'email', message: 'The input is not valid E-mail!',
                }, {
                  required: true, message: 'Please input your E-mail!',
                }],
              })(
                <Input type="email" placeholder="Email" />
              )}
            </Form.Item>
          <Form.Item>
            {getFieldDecorator('text', {
                rules: [{
                  required: true, message: 'Please input your text!',
                }],
              })(
                <Input type="text" placeholder="Text" />
              )}
          </Form.Item>
        </Form>
      </Modal>
  )
}

const WrappedAddTaskModal = Form.create()(AddTaskModal);

export default WrappedAddTaskModal;