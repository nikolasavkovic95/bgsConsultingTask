import * as Yup from 'yup';

const phoneReg = /^[(]?[0-9]{3}[)]?[0-9]{3}?[0-9]{4,8}$/;

export const secondErrorSchema = Yup.object().shape({
  phone: Yup.string()
    .min(
      8,
      'Checks if input value length is greater than targetLength. In case it is less, method will return an error'
    )
    .max(
      26,
      'Checks if input value length is less than targetLength. In case it is greater than that, method will return an error'
    ),
  address: Yup.string()
    .min(
      1,
      'Checks if input value length is greater than targetLength. In case it is less, method will return an error'
    )
    .max(
      50,
      'Checks if input value length is less than targetLength. In case it is greater than that, method will return an error'
    ),
  city: Yup.string()
    .min(
      1,
      'Checks if input value length is greater than targetLength. In case it is less, method will return an error'
    )
    .max(
      50,
      'Checks if input value length is less than targetLength. In case it is greater than that, method will return an error'
    ),
  countrycode: Yup.string().oneOf(['me', 'hr', 'ml']).label('invalid'),
});
