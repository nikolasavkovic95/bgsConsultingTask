import React, { forwardRef, useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import MuiField from '@mui/material/TextField';

const StyledCardField = styled(MuiField)(({ theme }) => ({
  '&.MuiFormControl-root': {
    minWidth: '100%',
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.text.inputs.color,
    fontSize: 13,
  },
  '& .MuiFilledInput-root': {
    borderRadius: 8,
    fontSize: 13,
    fontWeight: 200,
    color: theme.palette.white.main,
    backgroundColor: theme.palette.background.inputs.background,
    borderStyle: 'solid',
    borderColor: theme.palette.border.inputs.color,
    borderWidth: 1,
    '::before': {
      borderBottom: 'none',
    },
    '::after': {
      borderBottom: 'none',
    },
  },
  '.MuiFilledInput-root.Mui-focused': {
    backgroundColor: theme.palette.background.inputs.background,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: theme.palette.border.inputs.active,
  },
  '& .Mui-error': {
    color: theme.palette.errors.inputs.color,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.errors.inputs.color,
  },
  '.MuiFormLabel-root.Mui-error': {
    border: 'none',
  },
  '.MuiFormHelperText-root': {
    color: theme.palette.errors.inputs.color,
    border: 'none',
  },
}));

const CardField = forwardRef((props, ref) => {
  const { onChange, ...rest } = props;
  const [card, setCard] = useState('');

  const handleChange = (onChange) => {
    setCard(onChange.target.value);
  };

  return (
    <StyledCardField
      inputRef={ref}
      onChange={(onChange) => {
        props.onChange(onChange);
        handleChange(onChange);
      }}
      {...rest}
    />
  );
});

export default CardField;
