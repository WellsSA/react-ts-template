/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import LoggedIn from 'components/LoggedIn';

interface IProps extends RouteProps {
  component: React.FC;
  token: string;
}

const PrivateRoute: React.FC<IProps> = ({
  component: Component,
  token,
  ...rest
}: IProps) => {
  return token ? (
    <Route
      {...rest}
      render={(props: RouteProps) => (
        <LoggedIn>
          <Component {...props} />
        </LoggedIn>
      )}
    />
  ) : (
    <Redirect to="/" />
  );
};

const mapStateToProps = ({ authentication: { token } }) => ({ token });

export default connect(mapStateToProps)(PrivateRoute);
