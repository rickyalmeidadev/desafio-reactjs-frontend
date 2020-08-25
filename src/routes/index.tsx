import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, Login, AddNaver, EditNaver } from '../pages';
import PrivateRoute from './PrivateRoute';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute exact path="/add" component={AddNaver} />
      <PrivateRoute exact path="/edit/:id" component={EditNaver} />
    </Switch>
  </Router>
);

export default Routes;
