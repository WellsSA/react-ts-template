import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .email('You must provide a valid email')
    .required('This field is required'),
  password: Yup.string().required('This field is required'),
  name: Yup.string().required('This field is required'),
});
