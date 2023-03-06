import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';

const ToggleButtonStyled = styled(ToggleButton)(({ theme }) => ({
  height: 45,
  fontSize: 13,
  borderRadius: 24,
  border: '1px solid rgb(66, 66, 66) !important',
  width: 170,
  height: 45,
  fontWeight: 400,
  flexDirection: 'column',
  background: 'rgb(26, 26, 26)',
  minWidth: '100%',
  textTransform: 'capitalize',
  color: theme.palette.toggleButton.color,
  // border: 'none',
  '&.Mui-selected, &.Mui-selected:hover': {
    color: theme.palette.toggleButton.color,
    background: '#daa52025 !important',
    border: '1px solid #DAA520 !important',
    // backgroundColor: theme.palette.buttons.default.background,
    fontWeight: 700,
  },
}));

const ButtonCategory = (props) => {
  const { onClick, children, selected, onChange, value, ...rest } = props;

  return (
    <ToggleButtonStyled onClick={onClick} selected={selected} onChange={onChange} {...rest} value={value}>
      {children}
    </ToggleButtonStyled>
  );
};

export default ButtonCategory;
