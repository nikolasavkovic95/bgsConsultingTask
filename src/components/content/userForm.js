import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import TextField from '../inputs/textField';
import MuiButton from '@mui/material/Button';
import EyeIcon from '../icons/eye';
import CloseEye from '../icons/closeEye';
import { ConnectForm } from './form';

const SplitWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  marginTop: '24px',
});

export const InputDiv = styled('div')({
  marginRight: 10,
});

const PasswordAdornment = styled('div')({
  maxWidth: 55,
});

const UserForm = ({ errors }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ConnectForm>
      {({ register }) => (
        <>
          <TextField
            sx={{ mt: 3 }}
            type="text"
            variant="filled"
            label="Username"
            error={errors.username?.message ? true : false}
            helperText={errors.username?.message}
            {...register('username')}
          />
          <SplitWrapper>
            <InputDiv>
              <TextField
                type="text"
                variant="filled"
                label="First Name"
                error={errors.firstName?.message ? true : false}
                helperText={errors.firstName?.message}
                {...register('firstName')}
              />
            </InputDiv>
            <div>
              <TextField
                type="text"
                variant="filled"
                label="Last Name"
                error={errors.lastName?.message ? true : false}
                helperText={errors.lastName?.message}
                {...register('lastName')}
              />
            </div>
          </SplitWrapper>
          <TextField
            sx={{ mb: 3, mt: 3 }}
            type="text"
            variant="filled"
            label="Phone"
            error={errors.phone?.message ? true : false}
            helperText={errors.phone?.message}
            {...register('phone')}
          />
          <TextField
            sx={{ mb: 3 }}
            type="text"
            variant="filled"
            label="City"
            error={errors.city?.message ? true : false}
            helperText={errors.city?.message}
            {...register('city')}
          />
          <TextField
            sx={{ mb: 3 }}
            type="text"
            variant="filled"
            label="Address"
            error={errors.address?.message ? true : false}
            helperText={errors.address?.message}
            {...register('address')}
          />
          <TextField
            sx={{ mb: 2 }}
            type={showPassword ? 'text' : 'password'}
            variant="filled"
            label="Password"
            error={errors.password?.message ? true : false}
            helperText={errors.password?.message}
            {...register('password')}
            InputProps={{
              disableUnderline: true,
              endAdornment: (
                <PasswordAdornment>
                  <MuiButton onClick={togglePassword}>{showPassword ? <EyeIcon /> : <CloseEye />}</MuiButton>
                </PasswordAdornment>
              ),
            }}
          />
          <TextField
            sx={{ mb: 2 }}
            type={showPassword ? 'text' : 'password'}
            variant="filled"
            label="Repeat Password"
            error={errors.repeatPassword?.message ? true : false}
            helperText={errors.repeatPassword?.message}
            {...register('repeatPassword')}
          />
        </>
      )}
    </ConnectForm>
  );
};

export default UserForm;
