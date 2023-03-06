import React from 'react';
import { styled } from '@mui/material/styles';
import RemoveRedEye from '@mui/icons-material/RemoveRedEye';

const RemovedRedEyeStyled = styled(RemoveRedEye)(({ theme }) => ({
  color: theme.palette.icons.eye.color,
}));

const EyeIcon = () => {
  return <RemovedRedEyeStyled />;
};

export default EyeIcon;
