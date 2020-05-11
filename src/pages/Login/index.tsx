import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { authenticationRequest } from 'modules/authentication/actions';
import EntryPage from 'components/EntryPage';
import Input from 'components/Input';
import Button from 'components/Button';
import { history } from 'services';
import validationSchema from './validationSchema';
import { Title, Or } from './styles';

interface ISchema {
  email: string;
  password: string;
}

interface IProps {
  authenticationRequest: (payload: ISchema) => void;
}

const initialValues = {
  email: '',
  password: '',
};

const Login: React.FC<IProps> = ({ authenticationRequest }) => {
  return (
    <EntryPage>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={authenticationRequest}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <>
            <Title>Welcome</Title>
            <Input
              placeholder="email@email.com"
              label="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
            />
            <Input
              placeholder="*********"
              label="Password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              error={errors.password}
            />
            <Button type="submit" onClick={() => handleSubmit()}>
              Log in
            </Button>
            <Or>
              <span>Or</span>
            </Or>
            <Button onClick={() => history.push('/signup')}>Sign Up</Button>
          </>
        )}
      </Formik>
    </EntryPage>
  );
};

export default connect(null, { authenticationRequest })(Login);
