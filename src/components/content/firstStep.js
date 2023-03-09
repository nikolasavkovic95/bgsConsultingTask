import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { styled } from '@mui/material/styles';
import { useAppState } from '../../context/formContext';
import { useNavigate } from 'react-router-dom';
import Button from '../buttons/button';
import TextField from '../inputs/textField';
import { Grid } from '@mui/material';
import { BorderGradient, ContentWrapper } from './content';
import { yupResolver } from '@hookform/resolvers/yup';
import { errorSchema } from '../../validations/formValidation';
import { errorName, firstErrorSchema } from '../../validations/firstValidation';
import { formData } from '../../api/sampleData';
import { Typography } from '@mui/material';
import MuiButton from '@mui/material/Button';
import EyeIcon from '../icons/eye';
import CloseEye from '../icons/closeEye';

export const Wrapper = styled('div')({});

const PasswordAdornment = styled('div')({
  maxWidth: 55,
});

const FirstStep = () => {
  const [state, setState] = useAppState();
  const [showPassword, setShowPassword] = useState(false);
  const [errKey, setErrKey] = useState();

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: 'onSubmit', resolver: yupResolver(firstErrorSchema) });

  const navigate = useNavigate();

  const saveData = (data) => {
    console.log(data);
    setState({ ...state, ...data });

    navigate('/second');
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Grid sx={{ mt: 5 }} container alignItems="center" justifyContent="center">
      <Wrapper>
        <BorderGradient>
          <ContentWrapper>
            <form onSubmit={handleSubmit(saveData)}>
              {formData.fields &&
                formData.fields.map((value, key) => {
                  if (value.step === 1) {
                    console.log(value.code);

                    if (value.name === 'Birthdate') {
                      return (
                        <>
                          <Typography variant="body2">{value.name}</Typography>
                          <TextField sx={{ mb: 3 }} type="date" variant="filled" {...register(value.code)} key={key} />
                        </>
                      );
                    }
                    if (value.name === 'Gender') {
                      return (
                        <>
                          <Typography variant="body2">{value.name}</Typography>
                          <select style={{ marginBottom: 20 }}>
                            {value.valueList &&
                              value.valueList.map((value, key) => {
                                return (
                                  <option key={key} value={value.value}>
                                    {value.name}
                                  </option>
                                );
                              })}
                          </select>
                        </>
                      );
                    }
                    if (value.name === 'Password') {
                      return (
                        <TextField
                          sx={{ mb: 2 }}
                          type={showPassword ? 'text' : 'password'}
                          variant="filled"
                          label={value.name}
                          error={errors[value.code]?.message ? true : false}
                          helperText={errors[value.code]?.message}
                          {...register(value.code)}
                          InputProps={{
                            disableUnderline: true,
                            endAdornment: (
                              <PasswordAdornment>
                                <MuiButton onClick={togglePassword}>
                                  {showPassword ? <EyeIcon /> : <CloseEye />}
                                </MuiButton>
                              </PasswordAdornment>
                            ),
                          }}
                        />
                      );
                    }
                    if (value.name === 'Password Confirmation') {
                      return (
                        <TextField
                          sx={{ mb: 2 }}
                          type={showPassword ? 'text' : 'password'}
                          variant="filled"
                          label={value.name}
                          error={errors[value.code] ? true : false}
                          helperText={errors[value.code]?.message}
                          {...register(value.code)}
                          InputProps={{
                            disableUnderline: true,
                            endAdornment: (
                              <PasswordAdornment>
                                <MuiButton onClick={togglePassword}>
                                  {showPassword ? <EyeIcon /> : <CloseEye />}
                                </MuiButton>
                              </PasswordAdornment>
                            ),
                          }}
                        />
                      );
                    }
                    return (
                      <TextField
                        sx={{ mb: 3 }}
                        type="text"
                        variant="filled"
                        label={value.name}
                        {...register(value.code)}
                        error={errors[value.code] ? true : false}
                        helperText={errors[value.code]?.message}
                        key={key}
                      />
                    );
                  }
                })}

              <Button sx={{ mt: 1.5 }} disabled={errors.length === 0 ? true : false} variant="contained" type="submit">
                Next
              </Button>
            </form>
          </ContentWrapper>
        </BorderGradient>
      </Wrapper>
    </Grid>
  );
};

export default FirstStep;
