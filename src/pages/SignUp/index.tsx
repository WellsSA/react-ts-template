import React from 'react';
import i18n from 'i18n';
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
  confirmPassword: string;
  name: string;
}

interface IProps {
  signUpRequest: (payload: ISchema) => void;
}

const initialValues = {
  email: '',
  password: '',
  name: '',
  confirmPassword: '',
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
            <Title>{i18n.t('SIGN_UP.CREATE_AN_ACCOUNT_KEY')}</Title>
            <Input
              placeholder={i18n.t('COMMON.NAME_KEY')}
              label={i18n.t('COMMON.NAME_KEY')}
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
              placeholder="*********"
              label={i18n.t('COMMON.PASSWORD_KEY')}
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              error={errors.password}
            />
            <Input
              placeholder="*********"
              label={i18n.t('COMMON.CONFIRM_PASSWORD_KEY')}
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
            />
            <Button type="submit" onClick={() => handleSubmit()}>
              {i18n.t('SIGN_UP.SIGN_UP_KEY')}
            </Button>
            <Or>
              <span>{i18n.t('COMMON.OR_KEY')}</span>
            </Or>
            <Button onClick={() => history.push('/')}>
              {i18n.t('LOGIN.LOGIN_KEY')}
            </Button>
          </>
        )}
      </Formik>
    </EntryPage>
  );
};

export default connect(null, { signUpRequest })(SignUp);
