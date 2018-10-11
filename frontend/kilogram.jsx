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
    const { id } = currentUser;
    const preloadedState = {
      entities: {
        users: {
          [id]: currentUser
        }
      },
      session: { id },
      errors: {
        session: { id }
      }
    };
    store = configureStore(preloadedState);

    delete window.currentUser;
  } else {
    store = configureStore();
  }


  // DELETE LATER!!!!
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // DELETE LATER!!!!



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