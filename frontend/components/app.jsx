import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';

import GreetingContainer from './greeting/greeting_container.js';
import SessionContainer from './session/session_container.jsx';
import UserFormContainer from './user/user_form_container.jsx';
import UserShow from './user/user_show_container';
import PostForm from './post/post_form_container';
import PostIndex from './post/post_index_container';

const App = () => (
  <div>

    <header>
      <Link to="/" className="header-link">
        <h1>Kiloooogrammm</h1>
      </Link>

      <GreetingContainer />

    </header>

    <Switch>
      <AuthRoute exact path='/signin' component={SessionContainer} />
      <AuthRoute exact path='/signup' component={UserFormContainer} />

      <ProtectedRoute exact path='/user/:userId' component={UserShow} />
    </Switch>

    <ProtectedRoute exact path='/' component={PostForm} />
    <ProtectedRoute exact path='/' component={PostIndex} />


  </div>
);

export default App;