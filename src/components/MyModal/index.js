import React from 'react'

import {
  Modal,
  Button,
  Icon,
  Input,
  Form
} from 'antd';

const MyModal = ({
    visible,
    handleLogin,
    handleCancel
  }) => {

  let _login, _password

  return (
    <div>
      <Modal
        title="Login"
        visible={visible}
        onOk={() => handleLogin(_login, _password)}
        onCancel={() => handleCancel()}
      >
        <Form layout = "vertical">
          <Form.Item>
            <Input onChange={(e) => _login = e.target.value} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          </Form.Item>
          <Form.Item>
            <Input onChange={(e) => _password = e.target.value} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default MyModal;