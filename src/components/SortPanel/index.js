import React from 'react'

import {
  Button
} from 'antd';

import {
  Select
} from 'antd';

const ButtonGroup = Button.Group;
const Option = Select.Option;

const SortPanel = () => {

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  return (
    <div className="sort-panel">
      <div className="sort-panel__sort">
        <span>Sort by: </span>
        <ButtonGroup>
          <Button>id</Button>
          <Button>username</Button>
          <Button>email</Button>
          <Button>status</Button>
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