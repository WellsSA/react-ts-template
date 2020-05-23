import * as Yup from 'yup';
import i18n from 'i18n';

export default Yup.object().shape({
  name: Yup.string().required(i18n.t('COMMON.REQUIRED_FIELD_KEY')),
  email: Yup.string()
    .email(i18n.t('COMMON.EMAIL_FIELD_INVALID_KEY'))
    .required(i18n.t('COMMON.REQUIRED_FIELD_KEY')),
  password: Yup.string(),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    i18n.t('COMMON.PASSWORD_MISMATCH_KEY'),
  ),
});
