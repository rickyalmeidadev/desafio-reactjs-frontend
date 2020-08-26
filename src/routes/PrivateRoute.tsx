import React, { useEffect, useState } from 'react';
import { Route, Redirect, useLocation, RouteProps } from 'react-router-dom';

import { PageLoader } from '../components';

import { api, verify } from '../services/api';

interface Props extends RouteProps {
  component: React.FC;
}

const PrivateRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const token = localStorage.getItem('nave.rs:token');

  useEffect(() => {
    if (!token) {
      setIsLoading(false);
      return;
    }
    api.defaults.headers.Authorization = `Bearer ${token}`;
    (async () => {
      try {
        await verify();
        setIsAuthenticated(true);
      } catch (error) {
        localStorage.removeItem('nave.rs:token');
      } finally {
        setIsLoading(false);
      }
    })();
  }, [token]);

  const location = useLocation();

  return isLoading ? (
    <PageLoader />
  ) : isAuthenticated ? (
    <Route {...rest} component={Component} />
  ) : (
    <Redirect to={{ pathname: '/login', state: { from: location } }} />
  );
};

export default PrivateRoute;
