import * as Yup from 'yup';

const phoneReg = /^[(]?[0-9]{3}[)]?[0-9]{3}?[0-9]{4,8}$/;

export const secondErrorSchema = Yup.object().shape({
  phone: Yup.string().matches(
    phoneReg,
    'Phone / mobile (ex: 8565452655). Without + or space character and between 10 to 14 digit'
  ),
  address: Yup.string().min(2, 'Address too short'),
  city: Yup.string().min(2, 'City name too short'),
  countrycode: Yup.string().min(2, 'Invalid country code'),
});
