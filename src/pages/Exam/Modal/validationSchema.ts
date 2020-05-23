import * as Yup from 'yup';
import i18n from 'i18n';

export default Yup.object().shape({
  name: Yup.string().required(i18n.t('COMMON.REQUIRED_FIELD_KEY')),
});
