import React from 'react'

import {
  Button
} from 'antd';

import {
  Select
} from 'antd';

const ButtonGroup = Button.Group;
const Option = Select.Option;

const SortPanel = ({handleSort}) => {

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  return (
    <div className="sort-panel">
      <div className="sort-panel__sort">
        <span>Sort by: </span>
        <ButtonGroup>
          <Button onClick={() => handleSort('id')} >
            id
          </Button>
          <Button onClick={() => handleSort('username')} >
            username
          </Button>
          <Button onClick={() => handleSort('email')} >
            email
          </Button>
          <Button onClick={() => handleSort('status')} >
            status
          </Button>
        </ButtonGroup>
      </div>

      <div className="sort-panel__direction">
        <span>Sort direction: </span>
        <Select defaultValue="asc" style={{ width:100 }} onChange={handleChange}>
          <Option value="jack">asc</Option>
          <Option value="lucy">desc</Option>
        </Select>
      </div>
    </div>
  )
}

export default SortPanel;