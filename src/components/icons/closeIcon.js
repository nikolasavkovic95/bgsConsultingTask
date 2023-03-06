import React from 'react';
import { styled } from '@mui/material/styles';
import closeIcon from '@mui/icons-material/Close';

const IconStyled = styled(closeIcon)(({ theme }) => ({
  color: theme.palette.icons.close.color,
}));

const CloseIcon = () => {
  return <IconStyled />;
};

export default CloseIcon;
