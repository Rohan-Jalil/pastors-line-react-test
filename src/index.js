import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import store from 'redux/Store/Store';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

const root = document.getElementById('root');
render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  root,
);
