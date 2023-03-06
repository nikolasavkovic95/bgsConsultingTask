import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';

const ToggleButtonStyled = styled(ToggleButton)(({ theme }) => ({
  fontSize: 13,
  borderRadius: 8,
  //   width: 60,
  height: 75,
  fontWeight: 400,
  fontSize: 14,
  flexDirection: 'column',
  background: '#0D0F10 !important',
  minWidth: '100%',
  textTransform: 'capitalize',
  color: '#505050',
  border: 'none',
  '&.Mui-selected, &.Mui-selected:hover': {
    color: theme.palette.toggleButton.color,
    background: '#0D0F10 !important',
    border: '1px solid #DAA520 !important',
    // backgroundColor: theme.palette.buttons.default.background,
    fontWeight: 700,
  },
}));

const DepositMethodBtn = (props) => {
  const { onClick, children, selected, onChange, value, ...rest } = props;

  return (
    <ToggleButtonStyled onClick={onClick} selected={selected} onChange={onChange} {...rest} value={value}>
      {children}
    </ToggleButtonStyled>
  );
};

export default DepositMethodBtn;
