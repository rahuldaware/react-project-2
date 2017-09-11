import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';
import allReducers from './reducer';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter} from 'react-router-dom';

const store = createStore(
  allReducers,
  applyMiddleware(thunk));

ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </Provider>


  , document.getElementById('root'));
registerServiceWorker();
