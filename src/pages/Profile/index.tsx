import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { authenticationUpdateProfileRequest } from 'modules/authentication/actions';
import Input from 'components/Input';
import Button from 'components/Button';
import validationSchema from './validationSchema';
import { Container, ButtonContainer } from './styles';

interface ISchema {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

interface IProps {
  authenticationUpdateProfileRequest: (payload: ISchema) => void;
  user: ISchema;
}

const Profile: React.FC<IProps> = ({
  authenticationUpdateProfileRequest,
  user,
}) => {
  return (
    <Formik
      initialValues={user}
      validationSchema={validationSchema}
      onSubmit={authenticationUpdateProfileRequest}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {({ values, errors, handleChange, handleSubmit }) => (
        <>
          <Container>
            <Input
              placeholder="*********"
              label="Name"
              type="text"
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
              placeholder="***************"
              label="Password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              error={errors.password}
            />
            <Input
              placeholder="***************"
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
            />
          </Container>
          <ButtonContainer>
            <Button type="submit" onClick={() => handleSubmit()}>
              Update Profile
            </Button>
          </ButtonContainer>
        </>
      )}
    </Formik>
  );
};

const mapStateToProps = ({ authentication: { user } }) => ({ user });

export default connect(mapStateToProps, { authenticationUpdateProfileRequest })(
  Profile,
);
