import React from 'react';
import ReactDOM from 'react-dom';
import {
  Provider
} from 'react-redux';

import * as serviceWorker from './serviceWorker';

import App from './components/App';

import 'antd/dist/antd.css';
import './index.css';

import {
  fetchTasks,
  fetchTasksByPage
} from './store/actions.js'

import store from './store';

store.dispatch(fetchTasks());

ReactDOM.render(
  <Provider store={store}>
    <App / >
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

serviceWorker.unregister();
