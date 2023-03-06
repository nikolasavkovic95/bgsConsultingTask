import React from 'react';
import MuiButton from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const AddressButtonMui = styled(MuiButton)(({ theme }) => ({
  '&.MuiButton-root': {
    height: 45,
    fontSize: 14,
    width: '100%',
    textTransform: 'capitalize',
    fontWeight: 400,
    color: '#B3B3B3',
  },
}));

const AddressButton = (props) => {
  const { variant, color, children, ...rest } = props;
  return (
    <AddressButtonMui variant={variant} color={color} {...rest}>
      {children}
    </AddressButtonMui>
  );
};

export default AddressButton;
