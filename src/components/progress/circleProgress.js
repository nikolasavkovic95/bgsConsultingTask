import React from 'react';
import { styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';

const CircleProgressStyled = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.progress.color,
}));

const CircleProgress = () => {
  return <CircleProgressStyled size="2rem" />;
};

export default CircleProgress;
