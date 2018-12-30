import React from 'react';
import {
  connect
} from 'react-redux'

import MyTable from '../MyTable'

class App extends React.Component {

  render() {
    return(
      <div className="app">
      {
        (this.props.data.length !== 0)
          ? <MyTable tasks={this.props.data.message.tasks} />
          : <h1>Loading...</h1>
      }
      </div>
    )
  }
}

export default connect(
  state => ({
    data: state.data
  }),
  null
)(App)

// export default App;
