import React from 'react';
import { styled } from '@mui/material/styles';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const CloseEyeStyled = styled(VisibilityOffIcon)(({ theme }) => ({
  color: theme.palette.icons.eye.color,
}));

const CloseEye = () => {
  return <CloseEyeStyled />;
};

export default CloseEye;
