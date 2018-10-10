import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';

import SessionContainer from './session/session_container.jsx';

const App = () => (
  <div>
    <header>
      <h1>Kilogrammmm..............</h1>
    </header>
    <Switch>
      <AuthRoute exact path='/signin' component={SessionContainer} />
    </Switch>
  </div>
);

export default App;