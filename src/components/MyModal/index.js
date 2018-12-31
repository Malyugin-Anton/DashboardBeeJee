import React from 'react'

import { Modal, Button } from 'antd';

const MyModal = ({
    visible,
    handleLogin,
    handleCancel
  }) => {

  // handleOk = (e) => {
  //   console.log(e);
  //   this.setState({
  //     visible: false,
  //   });
  // }

  // handleCancel = (e) => {
  //   console.log(e);
  //   this.setState({
  //     visible: false,
  //   });
  // }

  // onOk={this.handleOk}
  // onCancel={this.handleCancel}

  return (
    <div>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={() => handleLogin()}
        onCancel={() => handleCancel()}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}

export default MyModal;