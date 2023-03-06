import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';

const ToggleButtonStyled = styled(ToggleButton)(({ theme }) => ({
  height: 45,
  fontSize: 13,
  borderRadius: 8,
  fontWeight: 400,
  minWidth: '100%',
  textTransform: 'capitalize',
  color: theme.palette.toggleButton.color,
  border: 'none',
  '&.Mui-selected, &.Mui-selected:hover': {
    color: theme.palette.toggleButton.color,
    backgroundColor: theme.palette.buttons.default.background,
    fontWeight: 700,
  },
}));

const ToggleMuiButton = (props) => {
  const { onClick, children, selected, onChange, value, ...rest } = props;

  return (
    <ToggleButtonStyled onClick={onClick} selected={selected} onChange={onChange} {...rest} value={value}>
      {children}
    </ToggleButtonStyled>
  );
};

export default ToggleMuiButton;
