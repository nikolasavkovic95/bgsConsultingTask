import * as Yup from 'yup';

const usernameReg = /^[a-z0-9_-]{3,15}$/;
const cvvReg = /^[0-9]{3,4}$/;
const expiryDateReg = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
const phoneReg = /^[(]?[0-9]{3}[)]?[0-9]{3}?[0-9]{4,8}$/;
const cardReg =
  /(^4[0-9]{3}\s•\s[0-9]{4}\s•\s[0-9]{4}\s•\s(([0-9])|([0-9]{4}))$)|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)\s•\s[0-9]{4}\s•\s[0-9]{4}\s•\s[0-9]{4}|^3[47][0-9]{2}\s•\s[0-9]{4}\s•\s[0-9]{4}\s•\s[0-9]{3}|^6[0-9]{3}\s•\s[0-9]{4}\s•\s[0-9]{4}\s•\s[0-9]{4}$)/;

export const errorSchema = Yup.object().shape({
  username: Yup.string().matches(usernameReg, 'Invalid Username'),
  firstName: Yup.string().min(2, 'First name too short'),
  lastName: Yup.string().min(2, 'Last name too short'),
  phone: Yup.string().matches(
    phoneReg,
    'Phone / mobile (ex: 8565452655). Without + or space character and between 10 to 14 digit'
  ),
  address: Yup.string().min(2, 'Address too short'),
  city: Yup.string().min(2, 'City name too short'),
  password: Yup.string().required('Password is required'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required(),
  cardNumber: Yup.string().matches(cardReg, 'Invalid Card'),
  cardName: Yup.string().min(2, 'Card holder name too short'),
  expiryDate: Yup.string().matches(expiryDateReg, 'Invalid date (ex: 12/23)'),
  cvv: Yup.string().matches(cvvReg, 'Invalid cvv'),
});
