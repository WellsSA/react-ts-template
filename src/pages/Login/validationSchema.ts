import * as Yup from 'yup';
import i18n from 'i18n';

export default Yup.object().shape({
  email: Yup.string()
    .email(i18n.t('COMMON.EMAIL_FIELD_INVALID_KEY'))
    .required(i18n.t('COMMON.REQUIRED_FIELD_KEY')),
  password: Yup.string().required(i18n.t('COMMON.REQUIRED_FIELD_KEY')),
});
