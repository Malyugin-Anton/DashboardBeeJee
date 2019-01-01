import React from 'react'

import {
  Table,
  Icon,
  Tag,
  Input,
  InputNumber,
  Button,
  Form,
  Switch
} from 'antd'


const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  getInput = (record) => {
    if (this.props.dataIndex === 'status') {
      return (record.status) ? <Switch /> : <Switch defaultChecked/>;
    }
    return <Input / > ;
  };

  render() {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      ...restProps
    } = this.props;

    return (
      <EditableContext.Consumer>
        {(form) => {
          const { getFieldDecorator } = form;
          return (
            <td {...restProps}>
              {editing ? (
                <FormItem style={{ margin: 0 }}>
                  {getFieldDecorator(dataIndex, {
                    rules: [{
                      required: true,
                      message: `Please Input ${title}!`,
                    }],
                    initialValue: record[dataIndex],
                  })(this.getInput(record))}
                </FormItem>
              ) : restProps.children}
            </td>
          );
        }}
      </EditableContext.Consumer>
    )
  }
}

class MyTable extends React.Component {

  state = {
    edit: false,

    editingKey: '',

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
      dataIndex: 'text',
      editable: true
    }, {
      title: 'status',
      key: 'status',
      dataIndex: 'status',
      editable: true,
      render: (status) => (
        ( status ) ? <Icon type="question-circle" theme="twoTone" /> : <Icon type="check-circle" theme="twoTone" />
      ),
    }, {
        title: 'action',
        dataIndex: 'action',
        className: this.props.login ? "show" : "hide",
        render: (text, record, index) => {
          return this.state.edit
            ? <Button onClick={() => this.handleSave()}>Save</Button>
            : <Button onClick={() => this.handleEdit(record.id)}>Edit</Button>
        }
    }]
  }

  isEditing = record => record.id === this.state.editingKey;

  cancel = () => {
    this.setState({
      editingKey: ''
    });
  };

  save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
    });
  }

  // {
  //     title: 'action',
  //     dataIndex: 'action',
  //     className: this.props.login ? "show" : "hide",
      // render: () => {
      //   return this.state.edit 
      //     ? <Button onClick={this.handleSave}>Save</Button>
      //     : <Button onClick={this.handleEdit}>Edit</Button> 
      // }
  //   }

  handleEdit = (key) => {
    this.setState({
      edit: !this.state.edit,
      editingKey: key
    })
  }

  handleSave = () => {
    this.setState({
      edit: !this.state.edit,
      editingKey: ''
    })
  }

  render() {
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };


    // const { columns } = this.state

    const columns = this.state.columns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          inputType: col.dataIndex === 'age' ? 'number' : 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record),
        }),
      };
    });

    return <Table 
      rowKey="id" 
      components={components}
      pagination={false} 
      columns={columns} 
      dataSource={this.props.tasks} />
  }
}

export default MyTable