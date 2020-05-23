import React from 'react';
import i18n from 'i18n';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { authenticationUpdateProfileRequest } from 'modules/authentication/actions';
import Input from 'components/Input';
import Button from 'components/Button';
import validationSchema from './validationSchema';
import { Container } from './styles';
import Header from './Header';

interface ISchema {
  email: string;
  name: string;
  oldPassword: string;
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
          <Header />
          <Container>
            <Input
              placeholder="*********"
              label={i18n.t('COMMON.NAME_KEY')}
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              error={errors.name}
            />
            <Input
              placeholder="email@email.com"
              label={i18n.t('COMMON.EMAIL_KEY')}
              name="email"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
            />
            <Input
              placeholder="***************"
              label={i18n.t('PROFILE.OLD_PASSWORD_KEY')}
              type="password"
              name="oldPassword"
              value={values.oldPassword}
              onChange={handleChange}
              error={errors.oldPassword}
            />
            <Input
              placeholder="***************"
              label={i18n.t('PROFILE.NEW_PASSWORD_KEY')}
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              error={errors.password}
            />
            <Input
              placeholder="***************"
              label={i18n.t('COMMON.CONFIRM_PASSWORD_KEY')}
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
            />
            <Button type="submit" onClick={() => handleSubmit()}>
              {i18n.t('PROFILE.UPDATE_PROFILE_KEY')}
            </Button>
          </Container>
        </>
      )}
    </Formik>
  );
};

const mapStateToProps = ({ authentication: { user } }) => ({ user });

export default connect(mapStateToProps, { authenticationUpdateProfileRequest })(
  Profile,
);
