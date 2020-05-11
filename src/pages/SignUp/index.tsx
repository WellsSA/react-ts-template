import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { signUpRequest } from 'modules/signup/actions';
import EntryPage from 'components/EntryPage';
import Input from 'components/Input';
import Button from 'components/Button';
import { history } from 'services';
import validationSchema from './validationSchema';
import { Title, Or } from './styles';

interface ISchema {
  email: string;
  password: string;
  name: string;
}

interface IProps {
  signUpRequest: (payload: ISchema) => void;
}

const initialValues = {
  email: '',
  password: '',
  name: '',
};

const SignUp: React.FC<IProps> = ({ signUpRequest }) => {
  return (
    <EntryPage>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={signUpRequest}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <>
            <Title>Create Account</Title>
            <Input
              placeholder="Name"
              label="Name"
              name="name"
              value={values.name}
              onChange={handleChange}
              error={errors.name}
            />
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
              Sign Up
            </Button>
            <Or>
              <span>Or</span>
            </Or>
            <Button onClick={() => history.push('/')}>Log in</Button>
          </>
        )}
      </Formik>
    </EntryPage>
  );
};

export default connect(null, { signUpRequest })(SignUp);
