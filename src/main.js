import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import routes from './routes';

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory} routes={routes}>
    </Router>
  </Provider>
), document.getElementById('root'));
