import React from 'react';
import { Route, Redirect, useLocation, RouteProps } from 'react-router-dom';
import { api } from '../services/api';

interface Props extends RouteProps {
  component: React.FC;
}

const PrivateRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('nave.rs:token');

  const location = useLocation();

  if (!token) {
    return <Redirect to={{ pathname: '/login', state: { from: location } }} />;
  }

  api.defaults.headers.Authorization = `Bearer ${token}`;

  return <Route {...rest} component={Component} />;
};

export default PrivateRoute;
