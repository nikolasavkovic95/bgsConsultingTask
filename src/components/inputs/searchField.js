import React, { forwardRef } from 'react';
import TextField from './textField';
import MuiField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const SearchField = styled(MuiField)(({ theme }) => ({
  '&.MuiFormControl-root': {
    minWidth: '100%',
    height: 50,
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.text.searchInput.color,
    fontSize: 13,
  },
  '& .MuiFilledInput-root': {
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 200,
    color: theme.palette.white.main,
    backgroundColor: theme.palette.background.searchInput.background,
    borderStyle: 'transparent',
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
  '& .MuiInputAdornment-root': {
    // backgroundColor: theme.palette.divider,
    // padding: '24px 10px',
    // borderTopLeftRadius: theme.shape.borderRadius + 'px',
    // borderBottomLeftRadius: theme.shape.borderRadius + 'px',
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
    border: 'none',
    color: theme.palette.errors.inputs.color,
  },
}));

const SearchInput = forwardRef((props, ref) => {
  const { inputRef, ...rest } = props;

  return (
    <SearchField
      InputProps={{
        disableUnderline: true,
      }}
      inputRef={ref}
      {...rest}
    />
  );
});

export default SearchInput;
