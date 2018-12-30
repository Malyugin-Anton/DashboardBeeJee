import React from 'react';
import {
  connect
} from 'react-redux'

import MyTable from '../MyTable'

import { Spin, Icon } from 'antd';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

const App = ({data}) => {

  console.log('data -- ', data);

  return (
      data.lenght
      ? <div className="app">
          <MyTable tasks={data} />
        </div>
      : <Spin indicator={antIcon} />
    )
}

export default connect(
  state => ({
    data: state.data
  }),
  null
)(App)

// export default App;
