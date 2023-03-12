import * as Yup from 'yup';

const usernameReg = /^[a-z0-9_-]{3,15}$/;
const emailReg = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
const passwordReg = /^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
export const firstErrorSchema = Yup.object().shape({
  username: Yup.string()
    .min(
      4,
      'Checks if input value length is greater than targetLength. In case it is less, method will return an error'
    )
    .max(
      20,
      'Checks if input value length is less than targetLength. In case it is greater than that, method will return an error'
    )
    .matches(usernameReg, 'Invalid Username'),

  fname: Yup.string()
    .min(
      2,
      'Checks if input value length is greater than targetLength. In case it is less, method will return an error'
    )
    .max(
      25,
      'Checks if input value length is less than targetLength. In case it is greater than that, method will return an error'
    ),
  lname: Yup.string()
    .min(
      2,
      'Checks if input value length is greater than targetLength. In case it is less, method will return an error'
    )
    .max(
      25,
      'Checks if input value length is less than targetLength. In case it is greater than that, method will return an error'
    ),
  email: Yup.string().matches(emailReg, 'Check if email is provided in valid format'),
  birthdate: Yup.date().max(
    new Date(Date.now() - 567648000000),
    'Checks if player is older than provided number of years. This validator accepts input as date, year or timestamp. Default is date'
  ),
  password: Yup.string()
    .required('Password is required')
    .matches(passwordReg, '')
    .min(
      6,
      'Checks if input value length is greater than targetLength. In case it is less, method will return an error'
    ),
  password_confirm: Yup.string()
    .oneOf([Yup.ref('password'), null], `Check if input value matches target field's value`)
    .required(),
  gender: Yup.string().oneOf(['male', 'female']).label('invalid'),
});
