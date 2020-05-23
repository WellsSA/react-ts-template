import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import LazyLoading from 'components/LazyLoading';
import PrivateRoute from './PrivateRoute';

const Login = lazy(() => import('pages/Login'));
const SignUp = lazy(() => import('pages/SignUp'));
const Dashboard = lazy(() => import('pages/Dashboard'));
const Exam = lazy(() => import('pages/Exam'));
const Profile = lazy(() => import('pages/Profile'));
const ExamDetail = lazy(() => import('pages/ExamDetail'));

const Routes: React.FC = () => {
  return (
    <Switch>
      <Suspense fallback={<LazyLoading />}>
        <Route exact path="/" component={Login} />
        <Route path="/signUp" component={SignUp} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute exact path="/exam" component={Exam} />
        <PrivateRoute path="/exam/:id/view" component={ExamDetail} />
      </Suspense>
    </Switch>
  );
};

export default Routes;
