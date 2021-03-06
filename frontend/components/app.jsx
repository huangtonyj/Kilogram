import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';

import Modal from './util_components/modal';
import NavBarContainer from './util_components/navbar_container';

import SessionContainer from './session/session_container.jsx';
import UserFormContainer from './user/user_form_container.jsx';
import UserShow from './user/user_show_container';
import PostForm from './post/post_form_container';
import PostIndex from './post/post_index_container';
import PostShow from './post/post_show_container';

import Footer from './util_components/footer';

const App = () => (
  <div className='root-div'>
    <Modal />
    <ProtectedRoute path='/' component={NavBarContainer} />

    <div className='main-content'>
      <Switch>
        <AuthRoute exact path='/signin' component={SessionContainer} />
        <AuthRoute exact path='/signup' component={UserFormContainer} />

        <ProtectedRoute exact path='/users/:userId' component={UserShow} />
        <ProtectedRoute exact path='/posts/new' component={PostForm} />
        <ProtectedRoute exact path='/posts/:postId' component={PostShow} />
      </Switch>

      <ProtectedRoute exact path='/' component={PostIndex} />

    </div>

    <Footer />
  </div>
);

export default App;