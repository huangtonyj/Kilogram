import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';

import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './components/app.jsx';

document.addEventListener('DOMContentLoaded', () => {

  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;



  const root = document.getElementById("root");

  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <App store={store} />
      </HashRouter>
    </Provider>,
    root
  );

});