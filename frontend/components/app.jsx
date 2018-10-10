import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';

import SessionContainer from './session/session_container.jsx';
import GreetingContainer from './greeting/greeting_container.js';

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
    </Switch>
  </div>
);

export default App;