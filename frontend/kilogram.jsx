import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';

import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './components/app.jsx';

document.addEventListener('DOMContentLoaded', () => {
  // front end auth
  let store;
  if (window.currentUser) {
    const { currentUser } = window;
    const { id } = window.currentUser;

    const preloadedState = {
      entities: {
        users: {
          [id]: Object.assign(currentUser,
            { followees: {} },
            { followers: {} })
        }
      },
      session: { id },
      errors: {}
    };
    store = configureStore(preloadedState);

    delete window.currentUser;
  } else {
    store = configureStore();
  }


  // window.getState = store.getState;
  // window.dispatch = store.dispatch;



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