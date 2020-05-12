import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string().required('This field is required'),
  email: Yup.string()
    .email('You must provide a valid email')
    .required('This field is required'),
  password: Yup.string(),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});
