import * as Yup from 'yup';

const firstNameReg = `\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+`;
const usernameReg = /^[a-z0-9_-]{3,15}$/;

const emailReg = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

export const firstErrorSchema = Yup.object().shape({
  username: Yup.string().matches(usernameReg, 'Invalid Username'),
  fname: Yup.string().min(2, 'First name too short'),
  lname: Yup.string().min(2, 'Last name too short'),
  email: Yup.string().matches(emailReg, 'Invalid Email'),
  password: Yup.string().required('Password is required'),
  password_confirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required(),
  gender: Yup.string().oneOf(['male', 'female']).label('invalid'),
});
