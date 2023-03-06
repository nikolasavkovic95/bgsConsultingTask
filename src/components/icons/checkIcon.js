import React from 'react';
import { styled } from '@mui/material/styles';
import checkIcon from '@mui/icons-material/Check';

const IconStyled = styled(checkIcon)(({ theme }) => ({
  color: theme.palette.icons.check.color,
}));

const CheckIcon = () => {
  return <IconStyled />;
};

export default CheckIcon;
