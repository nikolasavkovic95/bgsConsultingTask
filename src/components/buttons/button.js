import React from 'react';
import MuiButton from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const ButtonStyled = styled(MuiButton)(({ theme }) => ({
  '&.MuiButton-root': {
    height: 45,
    fontSize: 13,
    borderRadius: 8,
    fontWeight: 400,
    minWidth: '100%',
    textTransform: 'capitalize',
    '&:focus': {
      backgroundColor: theme.palette.buttons.default.background,
      fontWeight: 700,
    },
    '&.Mui-selected, &.Mui-selected:hover': {
      backgroundColor: theme.palette.buttons.default.background,
    },
  },
  '&.MuiButton-containedPrimary': {
    backgroundColor: theme.palette.buttons.primary.background,
    fontWeight: 800,
    '&:focus': {
      backgroundColor: theme.palette.buttons.primary.background,
    },
  },
  '&.MuiButton-outlinedPrimary': {
    borderColor: theme.palette.buttons.outlined.color,
    '&:focus': {
      backgroundColor: 'transparent',
      fontWeight: 400,
    },
  },
  '&.Mui-disabled': {
    backgroundColor: theme.palette.buttons.disabled.background,
    color: theme.palette.buttons.disabled.color,
    fontWeight: 800,
  },
}));

const Button = (props) => {
  const { variant, color, children, ...rest } = props;

  return (
    <ButtonStyled variant={variant} color={color} {...rest}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
