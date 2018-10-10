import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';

import GreetingContainer from './greeting/greeting_container.js';
import SessionContainer from './session/session_container.jsx';
import UserFormContainer from './user/user_form_container.jsx';

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
    </Switch>
  </div>
);

export default App;