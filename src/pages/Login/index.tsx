import React from 'react';
import i18n from 'i18n';
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
            <Title>{i18n.t('COMMON.WELCOME_KEY')}</Title>
            <Input
              placeholder="email@email.com"
              label={i18n.t('COMMON.EMAIL_KEY')}
              name="email"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
            />
            <Input
              placeholder="*********"
              label={i18n.t('COMMON.PASSWORD_KEY')}
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              error={errors.password}
            />
            <Button type="submit" onClick={() => handleSubmit()}>
              {i18n.t('LOGIN.LOGIN_KEY')}
            </Button>
            <Or>
              <span>{i18n.t('COMMON.OR_KEY')}</span>
            </Or>
            <Button onClick={() => history.push('/signup')}>
              {i18n.t('SIGN_UP.SIGN_UP_KEY')}
            </Button>
          </>
        )}
      </Formik>
    </EntryPage>
  );
};

export default connect(null, { authenticationRequest })(Login);
