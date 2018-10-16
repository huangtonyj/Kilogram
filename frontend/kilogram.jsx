import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';

import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './components/app.jsx';
// import { ajaxUserGet } from './util/user_api_util';

document.addEventListener('DOMContentLoaded', () => {

  // front end auth
  let store;
  if (window.currentUser) {
    const { currentUser } = window;
    const { id } = window.currentUser;
    // let currentUserInfo;

    // ajaxUserGet(id).then((response) => { console.log(response.users[id]); });
    // ajaxUserGet(id).then((response) => { currentUserInfo = (response.users[id]); });

    const preloadedState = {
      entities: {
        users: {
          [id]: currentUser,
          // test: currentUserInfo
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


  // DELETE LATER!!!!
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