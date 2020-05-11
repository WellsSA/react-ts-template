import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const Login = lazy(() => import('pages/Login'));
const SignUp = lazy(() => import('pages/SignUp'));
const Dashboard = lazy(() => import('pages/Dashboard'));

const Routes: React.FC = () => {
  return (
    <Switch>
      <Suspense fallback="Loading...">
        <Route exact path="/" component={Login} />
        <Route path="/signUp" component={SignUp} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Suspense>
    </Switch>
  );
};

export default Routes;
